// 게임 시나리오 데이터 타입 정의
export interface ScenarioOption {
  text: string;
  order: number;
  is_correct: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  situation: string;
  theme: string;
  options: ScenarioOption[];
}

// 샘플 시나리오 인터페이스
export interface SampleScenario {
  title: string;
  situation: string;
  options: string[];
  correctOption: number;
}

// 테마별 샘플 시나리오 데이터 (난이도별)
export const getSampleScenarios = (theme: string, difficulty: 'beginner' | 'intermediate' | 'advanced'): SampleScenario[] => {
  const scenarios = {
    school: [
      // 1-10
      {
        title: difficulty === 'beginner' ? "숙제 안 해왔을 때" : difficulty === 'intermediate' ? "숙제를 깜빡했을 때" : "과제 미완성 상황에서의 대처",
        situation: difficulty === 'beginner' ? 
          "숙제를 안 했어요. 선생님이 숙제를 보여달라고 해요." :
          difficulty === 'intermediate' ?
          "지우는 숙제를 깜빡하고 못 해왔어요. 선생님이 숙제를 보여달라고 하셨어요." :
          "지우는 어제 밤 가족 행사로 인해 숙제를 완성하지 못했습니다. 선생님께서 과제 제출을 요청하셨을 때 어떻게 대응하는 것이 가장 적절할까요?",
        options: difficulty === 'beginner' ? [
          "친구 것을 베낀다.",
          "선생님께 말씀드린다.", 
          "거짓말을 한다."
        ] : difficulty === 'intermediate' ? [
          "친구 숙제를 빌려서 그대로 베낀다.",
          "숙제를 못 한 이유를 솔직히 말씀드리고, 다음 시간에 해오겠다고 약속한다.",
          "숙제장을 집에 두고 왔다고 거짓말한다."
        ] : [
          "급하게 친구의 과제를 참고하여 유사하게 작성한 후 제출한다.",
          "상황을 정직하게 설명하고 연장 기한을 요청하며, 책임감 있는 완성 계획을 제시한다.",
          "다양한 핑계를 대며 제출을 미루고 상황을 모면하려고 시도한다."
        ],
        correctOption: 1
      },
      {
        title: "친구가 괴롭힘을 당할 때",
        situation: "쉬는 시간에 친구가 다른 아이들에게 놀림을 받고 있어요.",
        options: [
          "모른 척하고 지나간다.",
          "선생님께 말씀드린다.",
          "같이 놀림에 참여한다."
        ],
        correctOption: 1
      },
      {
        title: "교실에서 떠들 때",
        situation: "수업 시간에 친구가 재미있는 농담을 해서 웃음이 나와요.",
        options: [
          "큰 소리로 웃는다.",
          "입을 가리고 조용히 웃거나 참는다.",
          "친구에게도 큰 소리로 이야기한다."
        ],
        correctOption: 1
      },
      {
        title: "급식 시간에 싫은 음식이 나왔을 때",
        situation: "오늘 급식에 브로콜리가 나왔는데 정말 싫어해요.",
        options: [
          "브로콜리를 바닥에 버린다.",
          "조금이라도 먹어보거나 선생님께 말씀드린다.",
          "친구에게 브로콜리를 주면서 도망간다."
        ],
        correctOption: 1
      },
      {
        title: "친구와 싸웠을 때",
        situation: "좋아하는 친구와 사소한 일로 싸웠어요.",
        options: [
          "다시는 말을 걸지 않는다.",
          "먼저 사과하고 화해한다.",
          "다른 친구들에게 그 친구 흉을 본다."
        ],
        correctOption: 1
      },
      {
        title: "반 친구가 도움을 요청할 때",
        situation: "옆자리 친구가 연필을 깎을 연필깎이가 없어서 빌려달라고 해요.",
        options: [
          "내 것만 쓰겠다고 거절한다.",
          "기꺼이 빌려준다.",
          "친구에게 돈을 받고 빌려준다."
        ],
        correctOption: 1
      },
      {
        title: "선생님이 혼낼 때",
        situation: "실수로 친구를 다치게 해서 선생님께 꾸중을 듣고 있어요.",
        options: [
          "선생님께 대들고 화를 낸다.",
          "잘못을 인정하고 앞으로 조심하겠다고 말씀드린다.",
          "친구 탓이라고 변명한다."
        ],
        correctOption: 1
      },
      {
        title: "시험에서 모르는 문제가 나왔을 때",
        situation: "시험 중에 어려운 문제가 나와서 전혀 모르겠어요.",
        options: [
          "옆 친구 답안지를 슬쩍 본다.",
          "아는 만큼만 써내고 모르는 것은 비워둔다.",
          "선생님께 문제가 너무 어렵다고 불평한다."
        ],
        correctOption: 1
      },
      {
        title: "친구 물건을 실수로 망가뜨렸을 때",
        situation: "친구 연필을 빌려 쓰다가 실수로 부러뜨렸어요.",
        options: [
          "모른 척하고 조용히 자리에 놓는다.",
          "친구에게 사과하고 새 연필을 사서 주겠다고 약속한다.",
          "원래 부러져 있었다고 거짓말한다."
        ],
        correctOption: 1
      },
      {
        title: "청소 시간에",
        situation: "청소 시간인데 놀고 싶어서 청소를 하기 싫어요.",
        options: [
          "화장실에 숨어서 청소를 안 한다.",
          "맡은 구역을 깨끗하게 청소한다.",
          "대충 청소하고 빨리 놀러간다."
        ],
        correctOption: 1
      },
      // 계속해서 학교 시나리오 데이터 추가
    ],
    playground: [
      // 놀이터 시나리오 데이터가 여기에 들어갑니다.
    ],
    transport: [
      // 교통 관련 시나리오 데이터가 여기에 들어갑니다.
    ],
    hospital: [
      // 병원 관련 시나리오 데이터가 여기에 들어갑니다.
    ],
    library: [
      // 도서관 관련 시나리오 데이터가 여기에 들어갑니다.
    ],
    home: [
      // 집 관련 시나리오 데이터가 여기에 들어갑니다.
    ]
  };

  return scenarios[theme as keyof typeof scenarios] || [];
};

// 난이도별 텍스트 조정 함수
export const adjustTextByDifficulty = (text: string, difficulty: 'beginner' | 'intermediate' | 'advanced'): string => {
  if (difficulty === 'intermediate') return text;
  
  // 여기에 텍스트 난이도 조정 로직을 추가할 수 있습니다
  return text;
};
