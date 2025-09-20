import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogHeader } from '@/components/ui/dialog';
import { ArrowLeft, Zap, Calendar, X, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface CustomTheme {
  id: string;
  theme_name: string;
  description: string;
  created_at: string;
  scenario_count?: number;
}

const SecretMission = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [themes, setThemes] = useState<CustomTheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialog, setDeleteDialog] = useState<{open: boolean; theme: CustomTheme | null}>({
    open: false,
    theme: null
  });
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadCustomThemes();
  }, []);

  const loadCustomThemes = async () => {
    try {
      setLoading(true);
      
      // 커스텀 테마들을 가져오고, 각 테마별 시나리오 개수도 함께 조회
      const { data: themesData, error: themesError } = await supabase
        .from('custom_themes')
        .select('*')
        .order('created_at', { ascending: false });

      if (themesError) throw themesError;

      if (themesData) {
        // 각 테마별로 시나리오 개수 조회
        const themesWithCount = await Promise.all(
          themesData.map(async (theme) => {
            const { count } = await supabase
              .from('scenarios')
              .select('*', { count: 'exact', head: true })
              .eq('category', 'custom')
              .eq('theme', theme.theme_name);

            return {
              ...theme,
              scenario_count: count || 0
            };
          })
        );

        setThemes(themesWithCount);
      }
    } catch (error) {
      console.error('Error loading custom themes:', error);
      toast({
        title: "오류",
        description: "테마를 불러오는 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDeleteClick = (e: React.MouseEvent, theme: CustomTheme) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지
    setDeleteDialog({ open: true, theme });
  };

  const handleConfirmDelete = async () => {
    if (!deleteDialog.theme) return;
    
    try {
      setDeleting(true);
      const theme = deleteDialog.theme;

      // 1. 해당 테마의 모든 시나리오 조회
      const { data: scenarios, error: scenariosError } = await supabase
        .from('scenarios')
        .select('id')
        .eq('category', 'custom')
        .eq('theme', theme.theme_name);

      if (scenariosError) throw scenariosError;

      // 2. 각 시나리오의 옵션들 삭제
      if (scenarios && scenarios.length > 0) {
        const scenarioIds = scenarios.map(s => s.id);
        
        const { error: optionsError } = await supabase
          .from('scenario_options')
          .delete()
          .in('scenario_id', scenarioIds);

        if (optionsError) throw optionsError;

        // 3. 시나리오들 삭제
        const { error: scenariosDeleteError } = await supabase
          .from('scenarios')
          .delete()
          .in('id', scenarioIds);

        if (scenariosDeleteError) throw scenariosDeleteError;
      }

      // 4. 테마 삭제
      const { error: themeError } = await supabase
        .from('custom_themes')
        .delete()
        .eq('id', theme.id);

      if (themeError) throw themeError;

      // 5. 상태 업데이트
      setThemes(themes.filter(t => t.id !== theme.id));
      setDeleteDialog({ open: false, theme: null });

      toast({
        title: "삭제 완료",
        description: `'${theme.theme_name}' 테마와 모든 문제가 삭제되었습니다.`,
      });

    } catch (error) {
      console.error('Error deleting theme:', error);
      toast({
        title: "삭제 실패",
        description: "테마를 삭제하는 중 오류가 발생했습니다.",
        variant: "destructive"
      });
    } finally {
      setDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setDeleteDialog({ open: false, theme: null });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">비밀 임무를 준비하고 있어요...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto">
        {/* 헤더 */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="rounded-full bg-white shadow-md"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-primary">🕵️ 비밀 임무 수행</h1>
            <p className="text-muted-foreground">특별한 임무에 도전해보세요!</p>
          </div>
        </div>

        {themes.length === 0 ? (
          // 테마가 없는 경우
          <div className="text-center py-12">
            <Card className="p-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                아직 비밀 임무가 없어요!
              </h3>
              <p className="text-muted-foreground mb-6">
                시나리오 추가에서 새로운 임무를 만들어보세요!
              </p>
              <Button 
                onClick={() => navigate('/add-scenario')}
                className="w-full"
                size="lg"
              >
                <Zap className="mr-2 h-5 w-5" />
                새로운 임무 만들기
              </Button>
            </Card>
          </div>
        ) : (
          // 테마 목록
          <div className="space-y-4">
            {themes.map((theme) => (
              <Card 
                key={theme.id}
                className="p-4 hover:shadow-lg transition-all duration-300 border-2 cursor-pointer transform hover:scale-105 relative"
                onClick={() => navigate(`/custom-game/${encodeURIComponent(theme.theme_name)}`)}
              >
                {/* 삭제 버튼 */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 z-10"
                  onClick={(e) => handleDeleteClick(e, theme)}
                >
                  <X size={16} />
                </Button>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-500 text-white flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div className="flex-1 min-w-0 pr-8">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground truncate">
                        {theme.theme_name}
                      </h3>
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex-shrink-0">
                        {theme.scenario_count}문제
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      🎯 특별한 상황 판단력 훈련 시나리오
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <span>{formatDate(theme.created_at)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* 새 임무 추가 버튼 */}
            <Card 
              className="p-4 border-2 border-dashed border-primary hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => navigate('/add-scenario')}
            >
              <div className="flex items-center justify-center gap-3 text-primary py-2">
                <Zap size={24} />
                <span className="font-medium">새로운 비밀 임무 만들기</span>
              </div>
            </Card>
          </div>
        )}

        {/* 하단 안내 */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-center text-primary font-medium text-sm">
            🎮 AI가 만든 특별한 시나리오로 연습해보세요!
          </p>
        </div>
      </div>

      {/* 삭제 확인 다이얼로그 */}
      <Dialog open={deleteDialog.open} onOpenChange={(open) => !open && handleCancelDelete()}>
        <DialogContent className="mx-auto max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <Trash2 size={20} />
              테마 삭제 확인
            </DialogTitle>
            <DialogDescription className="text-left">
              <strong>'{deleteDialog.theme?.theme_name}'</strong> 테마를 삭제하시겠습니까?
              <br /><br />
              <span className="text-red-600">
                • 이 테마의 모든 문제({deleteDialog.theme?.scenario_count}개)가 함께 삭제됩니다
                <br />
                • 삭제된 데이터는 복구할 수 없습니다
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              onClick={handleCancelDelete}
              disabled={deleting}
              className="flex-1"
            >
              취소
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={deleting}
              className="flex-1"
            >
              {deleting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  삭제 중...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  삭제
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SecretMission;