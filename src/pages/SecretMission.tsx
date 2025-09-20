import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Zap, Calendar } from 'lucide-react';
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
    <div className="h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-3 flex flex-col overflow-hidden">
      <div className="max-w-md mx-auto flex flex-col h-full">
        {/* 헤더 */}
        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="rounded-full bg-white shadow-md"
          >
            <ArrowLeft size={18} />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-primary">🕵️ 비밀 임무 수행</h1>
            <p className="text-muted-foreground text-sm">특별한 임무에 도전해보세요!</p>
          </div>
        </div>

        {themes.length === 0 ? (
          // 테마가 없는 경우
          <div className="text-center py-8 flex-1 flex flex-col justify-center">
            <Card className="p-4">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-primary mb-2">
                아직 비밀 임무가 없어요!
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                시나리오 추가에서 새로운 임무를 만들어보세요!
              </p>
              <Button 
                onClick={() => navigate('/add-scenario')}
                className="w-full"
                size="sm"
              >
                <Zap className="mr-2 h-4 w-4" />
                새로운 임무 만들기
              </Button>
            </Card>
          </div>
        ) : (
          // 테마 목록
          <div className="space-y-3 flex-1 overflow-y-auto">
            {themes.map((theme) => (
              <Card 
                key={theme.id}
                className="p-3 hover:shadow-lg transition-all duration-300 border-2 cursor-pointer transform hover:scale-105"
                onClick={() => navigate(`/custom-game/${encodeURIComponent(theme.theme_name)}`)}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-purple-500 text-white flex-shrink-0">
                    <Zap size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-foreground truncate">
                        {theme.theme_name}
                      </h3>
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full flex-shrink-0">
                        {theme.scenario_count}문제
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      🎯 특별한 상황 판단력 훈련 시나리오
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={10} />
                      <span>{formatDate(theme.created_at)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* 새 임무 추가 버튼 */}
            <Card 
              className="p-3 border-2 border-dashed border-primary hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => navigate('/add-scenario')}
            >
              <div className="flex items-center justify-center gap-2 text-primary py-1">
                <Zap size={18} />
                <span className="font-medium text-sm">새로운 비밀 임무 만들기</span>
              </div>
            </Card>
          </div>
        )}

        {/* 하단 안내 */}
        <div className="mt-3 p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
          <p className="text-center text-primary font-medium text-xs">
            🎮 AI가 만든 특별한 시나리오로 연습해보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecretMission;