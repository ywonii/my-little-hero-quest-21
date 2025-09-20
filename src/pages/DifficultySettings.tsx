import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Settings, ArrowLeft, BookOpen, Volume2, Vibrate } from 'lucide-react';

const DifficultySettings = () => {
  const navigate = useNavigate();
  
  // 설정 상태들
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [soundVolume, setSoundVolume] = useState(50);

  // 초기 설정 로드
  useEffect(() => {
    const savedSoundEnabled = localStorage.getItem('soundEnabled');
    const savedVibrationEnabled = localStorage.getItem('vibrationEnabled');
    const savedSoundVolume = localStorage.getItem('soundVolume');

    if (savedSoundEnabled !== null) {
      setSoundEnabled(savedSoundEnabled === 'true');
    }
    if (savedVibrationEnabled !== null) {
      setVibrationEnabled(savedVibrationEnabled === 'true');
    }
    if (savedSoundVolume !== null) {
      setSoundVolume(parseInt(savedSoundVolume));
    }
  }, []);

  const setDifficultyLevel = (level: 'beginner' | 'intermediate' | 'advanced') => {
    localStorage.setItem('literacyLevel', level);
    localStorage.setItem('literacyTestCompleted', 'true');
    navigate('/main-menu');
  };

  const handleSoundToggle = (enabled: boolean) => {
    setSoundEnabled(enabled);
    localStorage.setItem('soundEnabled', enabled.toString());
  };

  const handleVibrationToggle = (enabled: boolean) => {
    setVibrationEnabled(enabled);
    localStorage.setItem('vibrationEnabled', enabled.toString());
  };

  const handleVolumeChange = (value: number[]) => {
    const volume = value[0];
    setSoundVolume(volume);
    localStorage.setItem('soundVolume', volume.toString());
  };

  const levels = [
    {
      level: 'beginner' as const,
      title: '쉬운 단계',
      description: '간단한 단어와 짧은 문장으로 구성된 게임',
      emoji: '🌱',
      color: 'hsl(var(--kids-success))'
    },
    {
      level: 'intermediate' as const,
      title: '보통 단계', 
      description: '조금 더 긴 문장과 다양한 어휘로 구성된 게임',
      emoji: '🌿',
      color: 'hsl(var(--kids-primary))'
    },
    {
      level: 'advanced' as const,
      title: '어려운 단계',
      description: '복잡한 문장과 다양한 상황으로 구성된 게임',
      emoji: '🌳',
      color: 'hsl(var(--kids-accent))'
    }
  ];

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
            <h1 className="text-xl font-bold text-primary">게임 설정</h1>
            <p className="text-muted-foreground text-sm">난이도와 기능을 설정해주세요</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {/* 난이도 선택 */}
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">📚 난이도 설정</h2>
            <div className="space-y-3">
              {levels.map((item) => (
                <Card 
                  key={item.level}
                  className="p-4 hover:shadow-lg transition-all duration-300 border-2 cursor-pointer transform hover:scale-105"
                  onClick={() => setDifficultyLevel(item.level)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-full text-white text-lg flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.emoji}
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
              ))}
            </div>
          </div>

          {/* 기능 설정 */}
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">🔧 기능 설정</h2>
            <div className="space-y-3">
              {/* 효과음 설정 */}
              <Card className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-500 text-white">
                      <Volume2 size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">효과음</h3>
                      <p className="text-xs text-muted-foreground">게임 소리 켜기/끄기</p>
                    </div>
                  </div>
                  <Switch
                    checked={soundEnabled}
                    onCheckedChange={handleSoundToggle}
                  />
                </div>
                {soundEnabled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">볼륨</span>
                      <span className="text-xs font-medium">{soundVolume}%</span>
                    </div>
                    <Slider
                      value={[soundVolume]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                  </div>
                )}
              </Card>

              {/* 진동 설정 */}
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-500 text-white">
                      <Vibrate size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">진동</h3>
                      <p className="text-xs text-muted-foreground">터치 진동 켜기/끄기</p>
                    </div>
                  </div>
                  <Switch
                    checked={vibrationEnabled}
                    onCheckedChange={handleVibrationToggle}
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* 테스트 버튼 */}
          <div>
            <Button 
              onClick={() => navigate('/literacy-test')}
              variant="outline"
              className="w-full"
              size="sm"
            >
              <BookOpen className="mr-2" size={14} />
              국어 실력 테스트 먼저 해보기
            </Button>
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="text-center mt-3 p-3 bg-white rounded-lg shadow-sm flex-shrink-0">
          <p className="text-primary font-medium text-xs">
            💡 언제든지 설정에서 난이도를 바꿀 수 있어요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifficultySettings;