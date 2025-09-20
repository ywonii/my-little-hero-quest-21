import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Zap, Plus, RotateCcw, Settings } from 'lucide-react';

const MainMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: '메인 시나리오 게임',
      description: '상황에 맞는 올바른 행동을 선택해보세요!',
      icon: BookOpen,
      color: 'hsl(var(--kids-primary))',
      path: '/main-game'
    },
    {
      title: '비밀 임무 수행',
      description: '특별히 만들어진 시나리오에 도전해보세요!',
      icon: Zap,
      color: 'hsl(var(--kids-accent))',
      path: '/secret-mission'
    },
    {
      title: '시나리오 추가',
      description: '새로운 상황 문제를 만들어보세요!',
      icon: Plus,
      color: 'hsl(var(--kids-secondary))',
      path: '/add-scenario'
    },
    {
      title: '오답노트',
      description: '틀린 문제를 다시 풀어보세요!',
      icon: RotateCcw,
      color: 'hsl(var(--kids-warning))',
      path: '/wrong-answers'
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-3 flex flex-col overflow-hidden">
      <div className="max-w-md mx-auto flex flex-col h-full">
        {/* 헤더 */}
        <div className="text-center py-4 relative flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/difficulty-settings')}
            className="absolute top-2 right-2 rounded-full bg-white shadow-md"
          >
            <Settings size={18} />
          </Button>
          <h1 className="text-2xl font-bold text-primary mb-1">
            🌟 똑똑한 선택왕 🌟
          </h1>
          <p className="text-muted-foreground text-sm">
            올바른 선택을 연습해보아요!
          </p>
        </div>

        {/* 메뉴 버튼들 */}
        <div className="space-y-3 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-4 hover:shadow-lg transition-all duration-300 border-2 cursor-pointer transform hover:scale-105"
            onClick={() => navigate(item.path)}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-full text-white flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* 하단 격려 메시지 */}
        <div className="text-center mt-4 p-3 bg-white rounded-lg shadow-sm flex-shrink-0">
          <p className="text-primary font-medium text-sm">
            🎯 매일 조금씩 연습하면 더 똑똑해져요! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;