// src/data/GameScenarios.ts
// 난이도별( beginner / intermediate / advanced ) 시나리오 데이터 통합본

export const SCENARIOS = {
  // ===== School 테마 (3세트) =====
  school: {
    // 1) 숙제
    homework: {
      beginner: {
        title: "숙제 안 했을 때",
        situation: "지우는 숙제를 안 했어요. 선생님이 숙제를 보여달래요.",
        options: [
          { id: "a", text: "친구 숙제를 베껴요", is_correct: false },
          { id: "b", text: "숙제를 안 했다고 말해요. 다음에 꼭 해오겠다고 해요", is_correct: true },
          { id: "c", text: "숙제장 집에 두고 왔다고 거짓말해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "숙제를 깜빡했을 때",
        situation: "지우는 숙제를 깜빡하고 못 해왔어요. 선생님이 숙제를 보여달라고 하셨어요.",
        options: [
          { id: "a", text: "친구 숙제를 빌려서 그대로 베낀다", is_correct: false },
          { id: "b", text: "못 한 이유를 솔직히 말씀드리고, 다음에 해오겠다고 약속한다", is_correct: true },
          { id: "c", text: "숙제장을 집에 두고 왔다고 거짓말한다", is_correct: false }
        ]
      },
      advanced: {
        title: "과제 미완성 상황에서의 대처",
        situation: "지우는 가족 행사 때문에 숙제를 끝내지 못했습니다. 선생님께서 과제 제출을 요구하실 때, 어떤 태도가 가장 책임 있는 행동일까요?",
        options: [
          { id: "a", text: "친구 과제를 참고하여 비슷하게 작성해 제출한다", is_correct: false },
          { id: "b", text: "사정을 정직하게 설명하고, 제출 연기를 요청하며 완성 계획을 구체적으로 제시한다", is_correct: true },
          { id: "c", text: "여러 핑계를 대며 상황을 모면하려 한다", is_correct: false }
        ]
      }
    },

    // 2) 괴롭힘 목격
    bullying: {
      beginner: {
        title: "친구가 놀림을 받을 때",
        situation: "친구가 다른 아이들한테 놀림을 받아요.",
        options: [
          { id: "a", text: "모른 척해요", is_correct: false },
          { id: "b", text: "선생님께 바로 말해요", is_correct: true },
          { id: "c", text: "같이 놀려요", is_correct: false }
        ]
      },
      intermediate: {
        title: "친구가 괴롭힘을 당할 때",
        situation: "쉬는 시간에 친구가 다른 아이들에게 놀림을 받고 있어요.",
        options: [
          { id: "a", text: "모른 척하고 지나간다", is_correct: false },
          { id: "b", text: "선생님께 말씀드린다", is_correct: true },
          { id: "c", text: "같이 놀림에 참여한다", is_correct: false }
        ]
      },
      advanced: {
        title: "따돌림 목격 시 대처",
        situation: "쉬는 시간에 친구가 반복적으로 놀림을 당하고 있습니다. 지우가 취할 수 있는 가장 책임 있는 행동은 무엇일까요?",
        options: [
          { id: "a", text: "상황을 외면하고 개입하지 않는다", is_correct: false },
          { id: "b", text: "교사에게 즉시 알리고, 친구가 안전하게 보호받을 수 있도록 도움을 요청한다", is_correct: true },
          { id: "c", text: "다른 학생들과 함께 우스갯소리로 넘기려 한다", is_correct: false }
        ]
      }
    },

    // 3) 수업시간 떠들기
    talking: {
      beginner: {
        title: "수업시간에 떠들 때",
        situation: "친구가 농담을 해서 웃음이 나와요.",
        options: [
          { id: "a", text: "큰 소리로 웃어요", is_correct: false },
          { id: "b", text: "조용히 웃거나 참아요", is_correct: true },
          { id: "c", text: "다른 친구에게 크게 말해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "교실에서 떠들 때",
        situation: "수업 시간에 친구가 재미있는 농담을 해서 웃음이 나와요.",
        options: [
          { id: "a", text: "큰 소리로 웃는다", is_correct: false },
          { id: "b", text: "입을 가리고 조용히 웃거나 참는다", is_correct: true },
          { id: "c", text: "친구에게도 큰 소리로 이야기한다", is_correct: false }
        ]
      },
      advanced: {
        title: "수업 중 집중 방해 상황",
        situation: "수업 시간 중 농담 때문에 교실 분위기가 흐트러졌습니다. 지우가 바람직하게 행동하는 방법은 무엇일까요?",
        options: [
          { id: "a", text: "크게 웃어 분위기를 더 흐트러뜨린다", is_correct: false },
          { id: "b", text: "조용히 웃음을 참고, 수업에 집중한다", is_correct: true },
          { id: "c", text: "다른 친구에게 농담을 퍼뜨린다", is_correct: false }
        ]
      }
    },

    // 4) 준비물 안 가져옴
    noSupplies: {
      beginner: {
        title: "준비물 안 가져옴",
        situation: "지우가 연필을 안 가져왔어요.",
        options: [
          { id: "a", text: "친구 연필을 몰래 가져와요", is_correct: false },
          { id: "b", text: "친구에게 빌려 달라고 해요", is_correct: true },
          { id: "c", text: "연필 없다고 수업 안 해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "준비물을 안 가져왔을 때",
        situation: "지우가 미술 시간에 색연필을 안 가져왔어요.",
        options: [
          { id: "a", text: "몰래 다른 친구 색연필을 쓴다", is_correct: false },
          { id: "b", text: "친구에게 양해를 구하고 빌려서 쓴다", is_correct: true },
          { id: "c", text: "아무 말 안 하고 그냥 안 한다", is_correct: false }
        ]
      },
      advanced: {
        title: "수업 준비물 미지참",
        situation: "지우는 준비물을 챙기지 못했습니다. 수업 참여를 위해 가장 바람직한 대처는?",
        options: [
          { id: "a", text: "모른 척하며 수업을 포기한다", is_correct: false },
          { id: "b", text: "사실을 인정하고 친구/교사의 도움을 정중히 요청한다", is_correct: true },
          { id: "c", text: "허락 없이 타인의 준비물을 사용한다", is_correct: false }
        ]
      }
    },

    // 5) 급식에서 싫은 음식
    cafeteriaDislike: {
      beginner: {
        title: "급식이 싫을 때",
        situation: "브로콜리가 나왔어요. 지우는 싫어요.",
        options: [
          { id: "a", text: "바닥에 버려요", is_correct: false },
          { id: "b", text: "조금 먹어 보거나 선생님께 말해요", is_correct: true },
          { id: "c", text: "친구에게 몰래 떠줘요", is_correct: false }
        ]
      },
      intermediate: {
        title: "급식 시간 예절",
        situation: "급식에 싫어하는 반찬이 나왔어요.",
        options: [
          { id: "a", text: "음식을 장난치며 버린다", is_correct: false },
          { id: "b", text: "가능한 만큼 먹어 보거나 선생님께 정중히 말씀드린다", is_correct: true },
          { id: "c", text: "다른 친구에게 억지로 떠준다", is_correct: false }
        ]
      },
      advanced: {
        title: "식사 태도와 선택",
        situation: "싫은 음식이 나왔을 때 바람직한 태도는?",
        options: [
          { id: "a", text: "기분대로 버리며 주변을 더럽힌다", is_correct: false },
          { id: "b", text: "위생과 예절을 지키며 소량 시도하거나 대체를 정중히 요청한다", is_correct: true },
          { id: "c", text: "타인 접시에 무단으로 옮긴다", is_correct: false }
        ]
      }
    },

    // 6) 시험에서 모르는 문제
    testUnknown: {
      beginner: {
        title: "모르는 문제",
        situation: "시험에서 너무 어려운 문제가 나왔어요.",
        options: [
          { id: "a", text: "옆 친구 답을 봐요", is_correct: false },
          { id: "b", text: "아는 만큼만 풀어요", is_correct: true },
          { id: "c", text: "선생님께 화내요", is_correct: false }
        ]
      },
      intermediate: {
        title: "시험에서 모르는 문제가 나왔을 때",
        situation: "모르는 문제가 있어요.",
        options: [
          { id: "a", text: "커닝한다", is_correct: false },
          { id: "b", text: "아는 부분만 쓰고 모르는 건 비워 둔다", is_correct: true },
          { id: "c", text: "시험지를 구겨 버린다", is_correct: false }
        ]
      },
      advanced: {
        title: "평가에서의 정직",
        situation: "정답을 모를 때 올바른 태도는?",
        options: [
          { id: "a", text: "부정행위로 점수를 얻으려 한다", is_correct: false },
          { id: "b", text: "아는 범위 내에서 최선을 다해 답하고 정직함을 지킨다", is_correct: true },
          { id: "c", text: "감정적으로 시험을 방해한다", is_correct: false }
        ]
      }
    },

    // 7) 친구 물건을 망가뜨렸을 때
    brokeItem: {
      beginner: {
        title: "물건을 망가뜨렸어요",
        situation: "친구 연필을 부러뜨렸어요.",
        options: [
          { id: "a", text: "모른 척해요", is_correct: false },
          { id: "b", text: "사과하고 새 것으로 갚겠다고 해요", is_correct: true },
          { id: "c", text: "원래 그랬다고 거짓말해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "친구 물건을 실수로 망가뜨렸을 때",
        situation: "빌린 물건을 실수로 망가뜨렸어요.",
        options: [
          { id: "a", text: "숨기고 돌려준다", is_correct: false },
          { id: "b", text: "사과하고 보상 방법을 상의한다", is_correct: true },
          { id: "c", text: "다른 친구 탓을 한다", is_correct: false }
        ]
      },
      advanced: {
        title: "실수에 대한 책임",
        situation: "타인의 물건을 파손했을 때 적절한 대응은?",
        options: [
          { id: "a", text: "책임을 회피하고 변명한다", is_correct: false },
          { id: "b", text: "사실을 인정하고 사과하며 합리적 보상을 제안한다", is_correct: true },
          { id: "c", text: "제3자에게 책임을 전가한다", is_correct: false }
        ]
      }
    },

    // 8) 청소 시간 태도
    cleaningDuty: {
      beginner: {
        title: "청소 시간",
        situation: "청소 시간이에요. 지우는 놀고 싶어요.",
        options: [
          { id: "a", text: "숨어서 안 해요", is_correct: false },
          { id: "b", text: "내 구역을 깨끗이 해요", is_correct: true },
          { id: "c", text: "대충 하고 놀러 가요", is_correct: false }
        ]
      },
      intermediate: {
        title: "청소를 해야 할 때",
        situation: "반 친구들과 청소하는 시간입니다.",
        options: [
          { id: "a", text: "다른 사람에게만 시킨다", is_correct: false },
          { id: "b", text: "역할을 나누고 맡은 구역을 책임감 있게 청소한다", is_correct: true },
          { id: "c", text: "아무도 안 볼 때 쉬기만 한다", is_correct: false }
        ]
      },
      advanced: {
        title: "공동체 책임",
        situation: "공용 공간을 함께 쓰는 만큼 청결을 유지해야 합니다. 바람직한 태도는?",
        options: [
          { id: "a", text: "책임을 회피하고 참여하지 않는다", is_correct: false },
          { id: "b", text: "협력하여 역할을 분담하고 성실히 수행한다", is_correct: true },
          { id: "c", text: "형식적으로만 하고 다른 사람에게 떠넘긴다", is_correct: false }
        ]
      }
    },

    // 9) 친구와 싸웠을 때
    fightFriend: {
      beginner: {
        title: "친구랑 싸웠어요",
        situation: "지우가 친구랑 다퉜어요.",
        options: [
          { id: "a", text: "다시는 말 안 해요", is_correct: false },
          { id: "b", text: "먼저 사과해요", is_correct: true },
          { id: "c", text: "다른 친구들에게 흉을 봐요", is_correct: false }
        ]
      },
      intermediate: {
        title: "친구와 다툰 후",
        situation: "사소한 일로 친구와 다퉜어요.",
        options: [
          { id: "a", text: "다른 사람들에게 친구 욕을 한다", is_correct: false },
          { id: "b", text: "먼저 사과하고 화해한다", is_correct: true },
          { id: "c", text: "무시하고 관계를 끊는다", is_correct: false }
        ]
      },
      advanced: {
        title: "관계 회복 태도",
        situation: "친구와 갈등이 생겼을 때 바람직한 해결 방법은?",
        options: [
          { id: "a", text: "적대적으로 행동하며 갈등을 키운다", is_correct: false },
          { id: "b", text: "대화를 통해 오해를 풀고 먼저 사과한다", is_correct: true },
          { id: "c", text: "타인에게 친구를 헐뜯는다", is_correct: false }
        ]
      }
    },

    // 10) 선생님께 혼날 때
    scoldedByTeacher: {
      beginner: {
        title: "선생님께 혼났어요",
        situation: "지우가 실수해서 선생님께 혼났어요.",
        options: [
          { id: "a", text: "선생님께 화내요", is_correct: false },
          { id: "b", text: "잘못을 인정해요", is_correct: true },
          { id: "c", text: "친구 탓을 해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "혼날 때 태도",
        situation: "실수로 친구를 다치게 해 선생님께 꾸중을 들었어요.",
        options: [
          { id: "a", text: "선생님께 대들며 화를 낸다", is_correct: false },
          { id: "b", text: "잘못을 인정하고 조심하겠다고 말한다", is_correct: true },
          { id: "c", text: "다른 친구 탓을 한다", is_correct: false }
        ]
      },
      advanced: {
        title: "책임 있는 태도",
        situation: "자신의 잘못으로 교사에게 지적을 받을 때, 올바른 태도는?",
        options: [
          { id: "a", text: "책임을 회피하고 변명한다", is_correct: false },
          { id: "b", text: "잘못을 인정하고 개선 의지를 보인다", is_correct: true },
          { id: "c", text: "화를 내며 반항한다", is_correct: false }
        ]
      }
    },

    // 11) 시험 부정행위
    cheating: {
      beginner: {
        title: "시험에서 부정행위",
        situation: "지우가 옆 친구 답을 보고 싶어요.",
        options: [
          { id: "a", text: "슬쩍 봐요", is_correct: false },
          { id: "b", text: "내 힘으로 풀어요", is_correct: true },
          { id: "c", text: "시험지를 훔쳐봐요", is_correct: false }
        ]
      },
      intermediate: {
        title: "시험 부정행위",
        situation: "시험 문제를 모르겠어요. 어떻게 할까요?",
        options: [
          { id: "a", text: "다른 친구 답안을 본다", is_correct: false },
          { id: "b", text: "내가 아는 만큼만 푼다", is_correct: true },
          { id: "c", text: "거짓으로 정답을 적는다", is_correct: false }
        ]
      },
      advanced: {
        title: "정직한 평가 태도",
        situation: "부정행위를 하면 어떤 문제가 생길까요?",
        options: [
          { id: "a", text: "점수만 잘 나오면 된다", is_correct: false },
          { id: "b", text: "정직하게 임해야 공정한 평가가 된다", is_correct: true },
          { id: "c", text: "남들도 하니 따라 한다", is_correct: false }
        ]
      }
    },

    // 12) 발표 시간 태도
    presentation: {
      beginner: {
        title: "발표할 때",
        situation: "지우 차례가 왔어요. 떨려요.",
        options: [
          { id: "a", text: "아무 말 안 해요", is_correct: false },
          { id: "b", text: "용기 내서 발표해요", is_correct: true },
          { id: "c", text: "친구를 대신 시켜요", is_correct: false }
        ]
      },
      intermediate: {
        title: "발표 태도",
        situation: "수업 시간에 앞에 나가 발표를 해야 해요.",
        options: [
          { id: "a", text: "겁이 나서 숨는다", is_correct: false },
          { id: "b", text: "차분히 말하고 끝까지 발표한다", is_correct: true },
          { id: "c", text: "장난을 치며 대충한다", is_correct: false }
        ]
      },
      advanced: {
        title: "발표 예절",
        situation: "발표는 자신의 생각을 공유하는 기회입니다. 올바른 태도는?",
        options: [
          { id: "a", text: "대충 말하며 시간을 보낸다", is_correct: false },
          { id: "b", text: "차분하고 명확하게 의견을 표현한다", is_correct: true },
          { id: "c", text: "다른 사람에게 떠넘긴다", is_correct: false }
        ]
      }
    },

    // 13) 교실 쓰레기
    trash: {
      beginner: {
        title: "쓰레기 버리기",
        situation: "지우 자리 옆에 쓰레기가 있어요. 내가 버린 건 아니에요.",
        options: [
          { id: "a", text: "그냥 둬요", is_correct: false },
          { id: "b", text: "주워서 쓰레기통에 버려요", is_correct: true },
          { id: "c", text: "누가 버렸는지 찾아 혼내요", is_correct: false }
        ]
      },
      intermediate: {
        title: "교실 쓰레기 발견",
        situation: "자리에 쓰레기가 떨어져 있어요.",
        options: [
          { id: "a", text: "내 것이 아니니 그냥 둔다", is_correct: false },
          { id: "b", text: "치워서 쓰레기통에 버린다", is_correct: true },
          { id: "c", text: "누가 버렸는지 찾아 탓한다", is_correct: false }
        ]
      },
      advanced: {
        title: "공동 공간 청결",
        situation: "공동 교실에서 쓰레기를 발견했을 때 적절한 태도는?",
        options: [
          { id: "a", text: "나와 상관없다며 무시한다", is_correct: false },
          { id: "b", text: "자발적으로 치우며 환경을 지킨다", is_correct: true },
          { id: "c", text: "범인을 찾아 비난한다", is_correct: false }
        ]
      }
    },

    // 14) 전학생 맞이하기
    welcomeNewStudent: {
      beginner: {
        title: "새 친구 왔어요",
        situation: "오늘 반에 새 친구가 왔어요.",
        options: [
          { id: "a", text: "모르는 척해요", is_correct: false },
          { id: "b", text: "먼저 인사하고 같이 놀자고 해요", is_correct: true },
          { id: "c", text: "다른 친구랑 수군거려요", is_correct: false }
        ]
      },
      intermediate: {
        title: "전학생을 만났을 때",
        situation: "우리 반에 전학생이 왔어요.",
        options: [
          { id: "a", text: "관심 없는 척한다", is_correct: false },
          { id: "b", text: "먼저 다가가 인사하고 도와준다", is_correct: true },
          { id: "c", text: "뒤에서 수근거리며 평가한다", is_correct: false }
        ]
      },
      advanced: {
        title: "새 구성원 환영 태도",
        situation: "새 친구가 반에 적응하도록 도울 때 바람직한 행동은?",
        options: [
          { id: "a", text: "무관심하게 방치한다", is_correct: false },
          { id: "b", text: "친절히 안내하고 활동에 참여하도록 돕는다", is_correct: true },
          { id: "c", text: "단점만 지적하며 소외시킨다", is_correct: false }
        ]
      }
    },

    // 15) 체육시간 팀 나누기
    peTeamSelect: {
      beginner: {
        title: "팀 같이 해요",
        situation: "축구팀을 나누는데, 축구를 못하는 친구가 있어요.",
        options: [
          { id: "a", text: "그 친구를 빼요", is_correct: false },
          { id: "b", text: "같이 하자고 도와줘요", is_correct: true },
          { id: "c", text: "공 못 잡게 해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "체육 시간 팀 배정",
        situation: "축구를 못하는 친구가 우리 팀에 들어왔어요.",
        options: [
          { id: "a", text: "다른 팀으로 보내려 한다", is_correct: false },
          { id: "b", text: "격려하며 함께 플레이하도록 돕는다", is_correct: true },
          { id: "c", text: "공을 못 만지게 한다", is_correct: false }
        ]
      },
      advanced: {
        title: "팀워크와 배려",
        situation: "실력이 다른 친구와 팀이 되었을 때, 팀워크를 높이는 태도는?",
        options: [
          { id: "a", text: "실수만 탓하며 제외한다", is_correct: false },
          { id: "b", text: "역할을 조정하고 장점을 살려 협력한다", is_correct: true },
          { id: "c", text: "경기 참여를 제한한다", is_correct: false }
        ]
      }
    },

    // 16) 복도에서 뛰지 않기
    noRunningHallway: {
      beginner: {
        title: "복도에서 뛰면 안 돼요",
        situation: "화장실이 급해요. 복도예요.",
        options: [
          { id: "a", text: "빨리 뛰어가요", is_correct: false },
          { id: "b", text: "빠르게 걸어가요", is_correct: true },
          { id: "c", text: "친구를 밀고 지나가요", is_correct: false }
        ]
      },
      intermediate: {
        title: "복도 안전",
        situation: "급해도 복도에서는 어떻게 해야 할까요?",
        options: [
          { id: "a", text: "전력 질주한다", is_correct: false },
          { id: "b", text: "속도를 줄여 걸어서 이동한다", is_correct: true },
          { id: "c", text: "사람을 밀치며 지나간다", is_correct: false }
        ]
      },
      advanced: {
        title: "공간 규칙 준수",
        situation: "복도는 많은 학생이 이동하는 공간입니다. 안전을 위한 올바른 행동은?",
        options: [
          { id: "a", text: "혼잡해도 뛰어다닌다", is_correct: false },
          { id: "b", text: "주변을 살피며 안전하게 보행한다", is_correct: true },
          { id: "c", text: "통행을 방해하며 밀친다", is_correct: false }
        ]
      }
    },

    // 17) 수업 중 질문하기
    askQuestion: {
      beginner: {
        title: "모르면 물어보기",
        situation: "설명이 어려워요. 모르겠어요.",
        options: [
          { id: "a", text: "그냥 넘어가요", is_correct: false },
          { id: "b", text: "손들고 다시 설명해 달라고 해요", is_correct: true },
          { id: "c", text: "친구와 수업 중에 떠들어요", is_correct: false }
        ]
      },
      intermediate: {
        title: "수업이 어려울 때",
        situation: "선생님 설명이 이해가 안 돼요.",
        options: [
          { id: "a", text: "모른 척한다", is_correct: false },
          { id: "b", text: "손을 들어 질문한다", is_correct: true },
          { id: "c", text: "옆 친구와 수업 중 대화한다", is_correct: false }
        ]
      },
      advanced: {
        title: "능동적 학습 태도",
        situation: "이해가 안 되는 부분이 있을 때, 학습 효율을 높이는 방법은?",
        options: [
          { id: "a", text: "이해하지 못한 채 넘어간다", is_correct: false },
          { id: "b", text: "적절한 때에 손들고 질문해 설명을 요청한다", is_correct: true },
          { id: "c", text: "수업을 방해하며 주변과 잡담한다", is_correct: false }
        ]
      }
    },

    // 18) 반 대표 선거
    classElection: {
      beginner: {
        title: "반장 뽑기",
        situation: "누구를 뽑을까요?",
        options: [
          { id: "a", text: "친한 친구만 뽑아요", is_correct: false },
          { id: "b", text: "반을 잘 이끌 친구를 뽑아요", is_correct: true },
          { id: "c", text: "아무나 대충 뽑아요", is_correct: false }
        ]
      },
      intermediate: {
        title: "반 대표를 뽑을 때",
        situation: "반 대표 선거가 있어요.",
        options: [
          { id: "a", text: "친해서 뽑는다", is_correct: false },
          { id: "b", text: "역할을 잘할 후보를 기준으로 뽑는다", is_correct: true },
          { id: "c", text: "귀찮아서 임의로 투표한다", is_correct: false }
        ]
      },
      advanced: {
        title: "공정한 선택",
        situation: "대표를 뽑을 때 고려해야 할 바람직한 기준은?",
        options: [
          { id: "a", text: "개인적 친분만 본다", is_correct: false },
          { id: "b", text: "책임감·소통·리더십 등 역할 적합성을 본다", is_correct: true },
          { id: "c", text: "아무 기준 없이 선택한다", is_correct: false }
        ]
      }
    },
    // 18) 친구가 울 때
comfortCryingFriend: {
  beginner: {
    title: "친구가 울어요",
    situation: "쉬는 시간에 지우 친구가 울고 있어요.",
    options: [
      { id: "a", text: "놀려요", is_correct: false },
      { id: "b", text: "괜찮냐고 물어보고 위로해요", is_correct: true },
      { id: "c", text: "그냥 지나가요", is_correct: false }
    ]
  },
  intermediate: {
    title: "친구 위로하기",
    situation: "친구가 속상해서 울고 있어요.",
    options: [
      { id: "a", text: "다른 사람들에게 떠벌린다", is_correct: false },
      { id: "b", text: "다가가서 위로하고 도와준다", is_correct: true },
      { id: "c", text: "그냥 무시한다", is_correct: false }
    ]
  },
  advanced: {
    title: "공감과 배려",
    situation: "친구가 힘들어 울고 있을 때 바람직한 태도는?",
    options: [
      { id: "a", text: "놀리며 상황을 가볍게 여긴다", is_correct: false },
      { id: "b", text: "공감하며 위로하고 필요한 도움을 제공한다", is_correct: true },
      { id: "c", text: "외면하고 혼자 두어버린다", is_correct: false }
    ]
  }
},

// 19) 발표 시간에 다른 친구 듣기
listenPresentation: {
  beginner: {
    title: "친구 발표 듣기",
    situation: "친구가 앞에서 발표하고 있어요.",
    options: [
      { id: "a", text: "떠들어요", is_correct: false },
      { id: "b", text: "조용히 들어요", is_correct: true },
      { id: "c", text: "장난쳐요", is_correct: false }
    ]
  },
  intermediate: {
    title: "발표 예절",
    situation: "친구가 발표하는 동안 어떻게 해야 할까요?",
    options: [
      { id: "a", text: "잡담을 한다", is_correct: false },
      { id: "b", text: "경청하며 집중한다", is_correct: true },
      { id: "c", text: "웃으며 방해한다", is_correct: false }
    ]
  },
  advanced: {
    title: "발표 존중 태도",
    situation: "타인의 발표 시간에 청중으로서 지켜야 할 태도는?",
    options: [
      { id: "a", text: "발표를 방해하며 집중을 흐트러뜨린다", is_correct: false },
      { id: "b", text: "경청하며 발표자의 노력을 존중한다", is_correct: true },
      { id: "c", text: "스스로만 이야기하며 주의를 흩뜨린다", is_correct: false }
    ]
  }
}

  },

  // ===== Transport 테마 (3세트) =====
  transport: {
    // 1) 자리지키기/양보
    giveSeat: {
      beginner: {
        title: "자리를 양보해요",
        situation: "지하철에 할머니가 타셨어요. 빈 자리가 없어요.",
        options: [
          { id: "a", text: "모른 척해요", is_correct: false },
          { id: "b", text: "자리를 양보해요", is_correct: true },
          { id: "c", text: "다른 사람이 하라고 해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "지하철에서 자리를 양보할 때",
        situation: "지하철에 할머니가 타셨는데 빈 자리가 없어요.",
        options: [
          { id: "a", text: "모른 척하고 앉아 있는다", is_correct: false },
          { id: "b", text: "자리에서 일어나 양보한다", is_correct: true },
          { id: "c", text: "다른 사람이 양보할 때까지 기다린다", is_correct: false }
        ]
      },
      advanced: {
        title: "배려가 필요한 승객을 만났을 때",
        situation: "혼잡한 지하철에서 거동이 불편한 어르신이 탑승했습니다. 공공 예절과 안전을 고려할 때 가장 바람직한 행동은 무엇일까요?",
        options: [
          { id: "a", text: "시선을 피하고 자리를 계속 차지한다", is_correct: false },
          { id: "b", text: "정중히 양보 의사를 밝히고 자리를 제공한다", is_correct: true },
          { id: "c", text: "주변 사람에게 대신 양보하라고 요청한다", is_correct: false }
        ]
      }
    },

    // 2) 버스에서 큰 소리
    volumeOnBus: {
      beginner: {
        title: "버스에서 조용히",
        situation: "버스에서 친구와 이야기하고 싶어요.",
        options: [
          { id: "a", text: "큰 소리로 떠들어요", is_correct: false },
          { id: "b", text: "작은 목소리로 짧게 말해요", is_correct: true },
          { id: "c", text: "전화로 크게 통화해요", is_correct: false }
        ]
      },
      intermediate: {
        title: "버스에서 이야기할 때",
        situation: "버스에서 친구와 재미있는 이야기를 하고 싶어요.",
        options: [
          { id: "a", text: "큰 소리로 이야기한다", is_correct: false },
          { id: "b", text: "작은 목소리로 조용히 이야기한다", is_correct: true },
          { id: "c", text: "스피커폰으로 통화한다", is_correct: false }
        ]
      },
      advanced: {
        title: "공공장소 소음 예절",
        situation: "승객이 많은 버스 안에서 대화를 해야 합니다. 타인의 쾌적함을 고려한 적절한 소통 방식은 무엇일까요?",
        options: [
          { id: "a", text: "흥분해서 목소리를 높이며 대화한다", is_correct: false },
          { id: "b", text: "필요한 말만 낮은 음성으로 짧게 전달한다", is_correct: true },
          { id: "c", text: "주변도 듣게끔 스피커폰을 사용한다", is_correct: false }
        ]
      }
    },

    // 3) 지하철 문 앞 질서
    subwayDoors: {
      beginner: {
        title: "먼저 내리고 타요",
        situation: "지하철 문이 열렸어요. 내리는 사람이 많아요.",
        options: [
          { id: "a", text: "사람을 밀고 먼저 타요", is_correct: false },
          { id: "b", text: "사람들이 다 내린 뒤에 타요", is_correct: true },
          { id: "c", text: "문 앞을 막고 서 있어요", is_correct: false }
        ]
      },
      intermediate: {
        title: "지하철 출입문에서",
        situation: "지하철 문이 열렸는데 내리는 사람들이 많아요.",
        options: [
          { id: "a", text: "사람들을 밀치고 먼저 탄다", is_correct: false },
          { id: "b", text: "내리는 사람을 먼저 보내고 탄다", is_correct: true },
          { id: "c", text: "문 앞에서 비켜주지 않는다", is_correct: false }
        ]
      },
      advanced: {
        title: "승하차 질서 지키기",
        situation: "혼잡한 플랫폼에서 전동차 문이 열렸습니다. 안전과 효율을 높이기 위한 올바른 승차 절차는 무엇일까요?",
        options: [
          { id: "a", text: "자리를 선점하려고 먼저 밀고 들어간다", is_correct: false },
          { id: "b", text: "내리는 승객을 먼저 보내고, 통로를 비켜 서서 대기한 후 탑승한다", is_correct: true },
          { id: "c", text: "문 바로 앞에서 움직이지 않고 버틴다", is_correct: false }
        ]
      }
    }
  },

  // ===== Playground 테마 (3세트) =====
  playground: {
    // 1) 미끄럼틀 줄서기
slideWaiting: {
  beginner: {
    title: "미끄럼틀 기다리기",
    situation: "친구들이 줄 서 있어요. 지우도 타고 싶어요.",
    options: [
      { id: "a", text: "줄을 새치기해요", is_correct: false },
      { id: "b", text: "차례를 기다려요", is_correct: true },
      { id: "c", text: "친구를 밀고 먼저 타요", is_correct: false }
    ]
  },
  intermediate: {
    title: "미끄럼틀 차례",
    situation: "놀이터 미끄럼틀 앞에 줄이 길어요. 지우는 빨리 타고 싶어요.",
    options: [
      { id: "a", text: "새치기한다", is_correct: false },
      { id: "b", text: "차례를 지켜 기다린다", is_correct: true },
      { id: "c", text: "친구를 밀쳐서 올라간다", is_correct: false }
    ]
  },
  advanced: {
    title: "질서 지키기",
    situation: "놀이기구 이용 규칙을 지키려면 어떻게 해야 할까요?",
    options: [
      { id: "a", text: "새치기하며 먼저 탄다", is_correct: false },
      { id: "b", text: "줄을 서서 차례대로 이용한다", is_correct: true },
      { id: "c", text: "다른 아이를 방해하며 자리를 뺏는다", is_correct: false }
    ]
  }
},

// 2) 그네 타기
swingTurn: {
  beginner: {
    title: "그네 타고 싶을 때",
    situation: "친구가 계속 그네를 타고 있어요.",
    options: [
      { id: "a", text: "친구를 밀어요", is_correct: false },
      { id: "b", text: "바꿔 달라고 말해요", is_correct: true },
      { id: "c", text: "억지로 앉아요", is_correct: false }
    ]
  },
  intermediate: {
    title: "그네 차례 지키기",
    situation: "지우는 그네를 타고 싶은데 친구가 계속 타고 있어요.",
    options: [
      { id: "a", text: "억지로 앉는다", is_correct: false },
      { id: "b", text: "교대로 타자고 정중히 말한다", is_correct: true },
      { id: "c", text: "친구를 밀어내고 차지한다", is_correct: false }
    ]
  },
  advanced: {
    title: "놀이기구 사용 규칙",
    situation: "그네를 오래 사용하는 친구에게 바람직한 요청은?",
    options: [
      { id: "a", text: "강제로 내리게 한다", is_correct: false },
      { id: "b", text: "정중히 교대하자고 요청한다", is_correct: true },
      { id: "c", text: "자리를 뺏으며 다툰다", is_correct: false }
    ]
  }
},

// 3) 친구가 다쳤을 때
friendInjured: {
  beginner: {
    title: "친구가 다쳤어요",
    situation: "친구가 넘어졌어요. 무릎이 아파 보여요.",
    options: [
      { id: "a", text: "그냥 놀아요", is_correct: false },
      { id: "b", text: "괜찮냐고 물어봐요", is_correct: true },
      { id: "c", text: "웃어요", is_correct: false }
    ]
  },
  intermediate: {
    title: "다친 친구",
    situation: "친구가 놀이기구에서 넘어졌어요.",
    options: [
      { id: "a", text: "웃는다", is_correct: false },
      { id: "b", text: "상태를 확인하고 어른에게 알린다", is_correct: true },
      { id: "c", text: "친구 잘못이라 말한다", is_correct: false }
    ]
  },
  advanced: {
    title: "안전 사고 대처",
    situation: "놀이 중 친구가 다쳤을 때 올바른 행동은?",
    options: [
      { id: "a", text: "장난으로 넘긴다", is_correct: false },
      { id: "b", text: "부상을 확인하고 즉시 보호자에게 알린다", is_correct: true },
      { id: "c", text: "책임을 떠넘기며 방관한다", is_correct: false }
    ]
  }
},

// 4) 시소 이용하기
seesawPlay: {
  beginner: {
    title: "시소 타기",
    situation: "시소를 타다 친구가 갑자기 내려서 지우가 쿵 했어요.",
    options: [
      { id: "a", text: "친구를 때려요", is_correct: false },
      { id: "b", text: "아프다고 말해요", is_correct: true },
      { id: "c", text: "똑같이 복수해요", is_correct: false }
    ]
  },
  intermediate: {
    title: "시소에서 다쳤을 때",
    situation: "친구가 갑자기 내려 지우가 떨어졌어요.",
    options: [
      { id: "a", text: "친구를 때린다", is_correct: false },
      { id: "b", text: "안전하게 타자고 이야기한다", is_correct: true },
      { id: "c", text: "복수로 뛰어내린다", is_correct: false }
    ]
  },
  advanced: {
    title: "놀이 안전 지키기",
    situation: "시소를 타다 사고가 나면 어떻게 행동해야 할까요?",
    options: [
      { id: "a", text: "화내며 다툰다", is_correct: false },
      { id: "b", text: "안전하게 타는 방법을 설명하며 조심한다", is_correct: true },
      { id: "c", text: "위험하게 다시 타본다", is_correct: false }
    ]
  }
},

// 5) 놀이 순서 지키기
toySharing: {
  beginner: {
    title: "장난감 차례",
    situation: "키즈카페에서 장난감을 같이 쓰고 싶어요.",
    options: [
      { id: "a", text: "친구 장난감을 뺏어요", is_correct: false },
      { id: "b", text: "순서를 기다려요", is_correct: true },
      { id: "c", text: "몰래 가져와요", is_correct: false }
    ]
  },
  intermediate: {
    title: "장난감 나눠 쓰기",
    situation: "친구가 장난감을 쓰고 있어요. 지우도 하고 싶어요.",
    options: [
      { id: "a", text: "뺏어 온다", is_correct: false },
      { id: "b", text: "순서를 기다리거나 같이 하자고 말한다", is_correct: true },
      { id: "c", text: "몰래 가져간다", is_correct: false }
    ]
  },
  advanced: {
    title: "공유 물건 예절",
    situation: "공용 장난감을 사용할 때 올바른 태도는?",
    options: [
      { id: "a", text: "다른 아이 것을 빼앗는다", is_correct: false },
      { id: "b", text: "차례를 기다리거나 양해를 구한다", is_correct: true },
      { id: "c", text: "몰래 가져가 사용한다", is_correct: false }
    ]
  }
},

// 6) 키즈카페 음식 규칙
foodRules: {
  beginner: {
    title: "간식 먹기",
    situation: "키즈카페에서 음식을 먹고 싶어요.",
    options: [
      { id: "a", text: "아무 데서나 먹어요", is_correct: false },
      { id: "b", text: "허용된 곳에서만 먹어요", is_correct: true },
      { id: "c", text: "친구에게 막 뿌려요", is_correct: false }
    ]
  },
  intermediate: {
    title: "키즈카페에서 음식",
    situation: "놀이터 안에서 간식을 먹고 싶어요.",
    options: [
      { id: "a", text: "놀이기구 위에서 먹는다", is_correct: false },
      { id: "b", text: "정해진 자리에서 먹는다", is_correct: true },
      { id: "c", text: "친구에게 던지며 장난친다", is_correct: false }
    ]
  },
  advanced: {
    title: "위생 지키기",
    situation: "공공 놀이 공간에서 음식을 먹을 때 규칙은?",
    options: [
      { id: "a", text: "아무 데서나 먹는다", is_correct: false },
      { id: "b", text: "정해진 구역에서만 먹고 청결을 지킨다", is_correct: true },
      { id: "c", text: "쓰레기를 아무 데나 버린다", is_correct: false }
    ]
  }
},
// 7) 모래놀이 갈등
sandConflict: {
  beginner: {
    title: "모래놀이 다툼",
    situation: "친구가 모래를 지우에게 뿌렸어요.",
    options: [
      { id: "a", text: "더 많이 뿌려요", is_correct: false },
      { id: "b", text: "그만하자고 말해요", is_correct: true },
      { id: "c", text: "울면서 모래를 발로 차요", is_correct: false }
    ]
  },
  intermediate: {
    title: "모래놀이 중 다툼",
    situation: "모래성을 쌓는데 친구가 모래를 뿌립니다.",
    options: [
      { id: "a", text: "복수로 더 세게 뿌린다", is_correct: false },
      { id: "b", text: "그만하자고 말하고 함께 놀 방법을 제안한다", is_correct: true },
      { id: "c", text: "싸움을 키운다", is_correct: false }
    ]
  },
  advanced: {
    title: "갈등 해결 태도",
    situation: "모래놀이에서 갈등이 생겼을 때 바람직한 대응은?",
    options: [
      { id: "a", text: "상대에게 모욕적으로 보복한다", is_correct: false },
      { id: "b", text: "불편함을 차분히 말하고 안전하게 함께 놀이하는 방안을 찾는다", is_correct: true },
      { id: "c", text: "상대를 밀치며 다툰다", is_correct: false }
    ]
  }
},

// 8) 길 잃은 아이(키즈카페/놀이터)
lostChild: {
  beginner: {
    title: "엄마를 잃은 아이",
    situation: "작은 아이가 울면서 엄마를 찾아요.",
    options: [
      { id: "a", text: "그냥 지나가요", is_correct: false },
      { id: "b", text: "직원이나 어른에게 알려요", is_correct: true },
      { id: "c", text: "혼자 데리고 멀리 가요", is_correct: false }
    ]
  },
  intermediate: {
    title: "미아를 봤을 때",
    situation: "키즈카페에서 아이가 엄마를 찾으며 울어요.",
    options: [
      { id: "a", text: "관심 갖지 않는다", is_correct: false },
      { id: "b", text: "직원/어른에게 즉시 알려 돕는다", is_correct: true },
      { id: "c", text: "휴대폰으로 찍어 올린다", is_correct: false }
    ]
  },
  advanced: {
    title: "안전한 도움 요청",
    situation: "미아를 발견했을 때 적절한 조치는?",
    options: [
      { id: "a", text: "아이 손을 잡고 혼자서 찾아다닌다", is_correct: false },
      { id: "b", text: "운영 staff나 보호자에게 즉시 알리고 그 자리에서 기다린다", is_correct: true },
      { id: "c", text: "주변 아이들과 소문을 낸다", is_correct: false }
    ]
  }
},

// 9) 공놀이로 다른 아이 물건 망가짐
ballAccident: {
  beginner: {
    title: "공놀이 사고",
    situation: "공이 굴러가서 다른 아이 블록 탑을 무너뜨렸어요.",
    options: [
      { id: "a", text: "모른 척해요", is_correct: false },
      { id: "b", text: "사과하고 같이 다시 쌓아요", is_correct: true },
      { id: "c", text: "그 아이 탓을 해요", is_correct: false }
    ]
  },
  intermediate: {
    title: "공놀이 중 실수",
    situation: "축구공이 다른 아이 작품을 망가뜨렸어요.",
    options: [
      { id: "a", text: "도망간다", is_correct: false },
      { id: "b", text: "사과하고 복구를 도와준다", is_correct: true },
      { id: "c", text: "상대에게 화낸다", is_correct: false }
    ]
  },
  advanced: {
    title: "실수 책임지기",
    situation: "놀이 중 자신의 실수로 피해가 생겼을 때 올바른 태도는?",
    options: [
      { id: "a", text: "책임을 회피한다", is_correct: false },
      { id: "b", text: "사과하고 원상복구를 함께 도우며 재발을 예방한다", is_correct: true },
      { id: "c", text: "상대에게 책임을 전가한다", is_correct: false }
    ]
  }
},

// 10) 작은 아이 배려하기
careSmallerKids: {
  beginner: {
    title: "작은 아이가 있어요",
    situation: "놀이터에 더 어린 아이가 있어요.",
    options: [
      { id: "a", text: "밀어요", is_correct: false },
      { id: "b", text: "조심히 놀아요", is_correct: true },
      { id: "c", text: "빨리 비키라고 소리쳐요", is_correct: false }
    ]
  },
  intermediate: {
    title: "어린 아이와 함께 놀 때",
    situation: "키즈카페에 더 어린 아이들이 있어요.",
    options: [
      { id: "a", text: "세게 뛰며 부딪친다", is_correct: false },
      { id: "b", text: "속도를 줄이고 안전 거리를 지킨다", is_correct: true },
      { id: "c", text: "길을 막으며 재촉한다", is_correct: false }
    ]
  },
  advanced: {
    title: "연령 차 배려",
    situation: "연령대가 섞인 공간에서 안전을 위해 필요한 태도는?",
    options: [
      { id: "a", text: "자기 속도만 유지하며 돌진한다", is_correct: false },
      { id: "b", text: "주변을 살피고 속도를 조절하며 작은 아이를 배려한다", is_correct: true },
      { id: "c", text: "작은 아이에게 이동을 강요한다", is_correct: false }
    ]
  }
},

// 11) 비 온 뒤 젖은 놀이기구
wetPlayground: {
  beginner: {
    title: "젖은 놀이터",
    situation: "비가 와서 미끄럼틀이 젖었어요.",
    options: [
      { id: "a", text: "그냥 타요", is_correct: false },
      { id: "b", text: "닦고 조심히 타요", is_correct: true },
      { id: "c", text: "더 빨리 타려고 달려요", is_correct: false }
    ]
  },
  intermediate: {
    title: "젖은 놀이기구",
    situation: "비 온 뒤 놀이기구가 미끄러워요.",
    options: [
      { id: "a", text: "아무 준비 없이 탄다", is_correct: false },
      { id: "b", text: "젖은 부분을 닦고 미끄럼 주의하며 이용한다", is_correct: true },
      { id: "c", text: "친구를 밀어 시험한다", is_correct: false }
    ]
  },
  advanced: {
    title: "미끄럼 사고 예방",
    situation: "젖은 표면에서의 안전한 이용 방법은?",
    options: [
      { id: "a", text: "속도를 높여 빨리 지나간다", is_correct: false },
      { id: "b", text: "물기를 제거하고 보호장비/주의를 갖춰 천천히 이용한다", is_correct: true },
      { id: "c", text: "위험성을 무시하고 장난친다", is_correct: false }
    ]
  }
},

// 12) 위험한 행동 말리기
stopUnsafePlay: {
  beginner: {
    title: "위험해요!",
    situation: "친구가 난간 위로 올라가요.",
    options: [
      { id: "a", text: "같이 올라가요", is_correct: false },
      { id: "b", text: "위험하다고 말해요", is_correct: true },
      { id: "c", text: "사진 찍어요", is_correct: false }
    ]
  },
  intermediate: {
    title: "안전하지 않은 행동",
    situation: "친구가 놀이기구 위에서 위험하게 장난쳐요.",
    options: [
      { id: "a", text: "따라 한다", is_correct: false },
      { id: "b", text: "위험을 알려 멈추게 하고 어른에게 알린다", is_correct: true },
      { id: "c", text: "더 과감하게 해보라 한다", is_correct: false }
    ]
  },
  advanced: {
    title: "안전 수호자 태도",
    situation: "위험한 놀이를 목격했을 때 바람직한 대응은?",
    options: [
      { id: "a", text: "관심을 끌기 위해 촬영하여 공유한다", is_correct: false },
      { id: "b", text: "즉시 말려 안전한 방법을 안내하고 관리자에게 알린다", is_correct: true },
      { id: "c", text: "부추기며 위험을 키운다", is_correct: false }
    ]
  }
},
// 13) 킥보드 안전
kickboardSafety: {
  beginner: {
    title: "킥보드 타기",
    situation: "앞에 작은 아이가 걸어가요.",
    options: [
      { id: "a", text: "빨리 가라고 소리쳐요", is_correct: false },
      { id: "b", text: "속도를 줄이고 양해를 구해요", is_correct: true },
      { id: "c", text: "그냥 빠르게 지나가요", is_correct: false }
    ]
  },
  intermediate: {
    title: "킥보드 안전",
    situation: "놀이터에서 킥보드를 타는데 앞에 어린아이가 있어요.",
    options: [
      { id: "a", text: "빨리 비키라고 재촉한다", is_correct: false },
      { id: "b", text: "속도를 줄이고 '지나갈게요'라고 말한다", is_correct: true },
      { id: "c", text: "그냥 스쳐 지나간다", is_correct: false }
    ]
  },
  advanced: {
    title: "공간 안전 배려",
    situation: "혼잡한 공간에서 킥보드를 안전하게 타려면?",
    options: [
      { id: "a", text: "속도를 유지하고 아이들을 피해간다", is_correct: false },
      { id: "b", text: "속도를 줄이고 상대에게 양해를 구한다", is_correct: true },
      { id: "c", text: "빨리 비키라고 큰소리친다", is_correct: false }
    ]
  }
},

// 14) 쓰레기 처리
trashClean: {
  beginner: {
    title: "쓰레기 주우기",
    situation: "바닥에 과자 봉지가 있어요.",
    options: [
      { id: "a", text: "그냥 둬요", is_correct: false },
      { id: "b", text: "쓰레기통에 버려요", is_correct: true },
      { id: "c", text: "발로 차요", is_correct: false }
    ]
  },
  intermediate: {
    title: "놀이터 쓰레기",
    situation: "바닥에 쓰레기를 봤을 때 어떻게 해야 할까요?",
    options: [
      { id: "a", text: "모른 척한다", is_correct: false },
      { id: "b", text: "쓰레기통에 버린다", is_correct: true },
      { id: "c", text: "더럽게 발로 찬다", is_correct: false }
    ]
  },
  advanced: {
    title: "환경 지키기",
    situation: "공용 공간에서 쓰레기를 발견했을 때 바람직한 태도는?",
    options: [
      { id: "a", text: "그냥 두고 간다", is_correct: false },
      { id: "b", text: "치워서 쓰레기통에 버린다", is_correct: true },
      { id: "c", text: "다른 사람에게 떠넘긴다", is_correct: false }
    ]
  }
},

// 15) 벤치 자리 양보
benchSeat: {
  beginner: {
    title: "자리 양보",
    situation: "벤치에서 앉아 있는데 할머니가 오셨어요.",
    options: [
      { id: "a", text: "계속 앉아있어요", is_correct: false },
      { id: "b", text: "자리를 양보해요", is_correct: true },
      { id: "c", text: "피해버려요", is_correct: false }
    ]
  },
  intermediate: {
    title: "벤치에서",
    situation: "놀이터 벤치에 앉아 있는데 어르신이 서 계세요.",
    options: [
      { id: "a", text: "모른 척한다", is_correct: false },
      { id: "b", text: "자리를 양보한다", is_correct: true },
      { id: "c", text: "자리 차지한다", is_correct: false }
    ]
  },
  advanced: {
    title: "어른 공경 태도",
    situation: "공공장소에서 어르신이 서 계실 때 어떻게 해야 할까요?",
    options: [
      { id: "a", text: "내 자리를 고집한다", is_correct: false },
      { id: "b", text: "자리를 양보하며 존중을 표현한다", is_correct: true },
      { id: "c", text: "시선을 피하며 외면한다", is_correct: false }
    ]
  }
},

// 16) 반납하기
returnToys: {
  beginner: {
    title: "장난감 반납",
    situation: "놀다 쓰던 장난감을 두고 가려 해요.",
    options: [
      { id: "a", text: "그냥 두고 가요", is_correct: false },
      { id: "b", text: "제자리에 돌려놔요", is_correct: true },
      { id: "c", text: "숨겨놔요", is_correct: false }
    ]
  },
  intermediate: {
    title: "사용 후 정리",
    situation: "키즈카페 장난감을 다 쓰면?",
    options: [
      { id: "a", text: "그대로 두고 간다", is_correct: false },
      { id: "b", text: "원래 자리에 반납한다", is_correct: true },
      { id: "c", text: "다른 데 숨긴다", is_correct: false }
    ]
  },
  advanced: {
    title: "공용 물건 정리",
    situation: "공용 장난감 사용 후 필요한 태도는?",
    options: [
      { id: "a", text: "치우지 않고 떠난다", is_correct: false },
      { id: "b", text: "정리해 제자리에 반납한다", is_correct: true },
      { id: "c", text: "다른 사람에게 치우게 한다", is_correct: false }
    ]
  }
},

// 17) 순서 다툼
fightingForTurn: {
  beginner: {
    title: "차례 다툼",
    situation: "지우와 친구가 먼저 타겠다며 싸워요.",
    options: [
      { id: "a", text: "서로 밀어요", is_correct: false },
      { id: "b", text: "가위바위보 해요", is_correct: true },
      { id: "c", text: "화내며 울어요", is_correct: false }
    ]
  },
  intermediate: {
    title: "순서 문제",
    situation: "놀이기구 차례 때문에 다툼이 생겼어요.",
    options: [
      { id: "a", text: "싸운다", is_correct: false },
      { id: "b", text: "가위바위보 등으로 공정하게 정한다", is_correct: true },
      { id: "c", text: "소리 지르며 우긴다", is_correct: false }
    ]
  },
  advanced: {
    title: "공정한 차례 결정",
    situation: "차례 때문에 갈등이 있을 때 바람직한 해결 방법은?",
    options: [
      { id: "a", text: "힘으로 차지한다", is_correct: false },
      { id: "b", text: "게임이나 합의로 순서를 정한다", is_correct: true },
      { id: "c", text: "소리를 높이며 우긴다", is_correct: false }
    ]
  }
},

// 18) 집에 갈 시간
goingHome: {
  beginner: {
    title: "집에 가자",
    situation: "엄마가 이제 집에 가자고 해요.",
    options: [
      { id: "a", text: "계속 놀아요", is_correct: false },
      { id: "b", text: "아쉽지만 집에 가요", is_correct: true },
      { id: "c", text: "울면서 떼 써요", is_correct: false }
    ]
  },
  intermediate: {
    title: "귀가 시간",
    situation: "집에 가야 하는데 아직 놀고 싶어요.",
    options: [
      { id: "a", text: "계속 버틴다", is_correct: false },
      { id: "b", text: "규칙을 지키고 집에 간다", is_correct: true },
      { id: "c", text: "화를 내며 떼쓴다", is_correct: false }
    ]
  },
  advanced: {
    title: "규칙 지키기",
    situation: "귀가 시간에 어른이 부르면 바람직한 태도는?",
    options: [
      { id: "a", text: "계속 놀며 반항한다", is_correct: false },
      { id: "b", text: "놀고 싶은 마음을 참으며 약속을 지킨다", is_correct: true },
      { id: "c", text: "화를 내며 불순종한다", is_correct: false }
    ]
  }
},
// 19) 숨바꼭질 안전
hideAndSeek: {
  beginner: {
    title: "숨바꼭질할 때",
    situation: "지우가 위험한 곳에 숨으려고 해요.",
    options: [
      { id: "a", text: "위험한 데 숨어요", is_correct: false },
      { id: "b", text: "안전한 데 숨어요", is_correct: true },
      { id: "c", text: "친구를 밀쳐내요", is_correct: false }
    ]
  },
  intermediate: {
    title: "숨바꼭질 중",
    situation: "친구가 미끄러운 계단 밑에 숨어요.",
    options: [
      { id: "a", text: "따라 들어간다", is_correct: false },
      { id: "b", text: "위험하다고 말해 안전한 곳으로 오라고 한다", is_correct: true },
      { id: "c", text: "그냥 모른 척한다", is_correct: false }
    ]
  },
  advanced: {
    title: "놀이 안전 지키기",
    situation: "숨바꼭질 놀이에서 위험한 장소를 발견했을 때 바람직한 대응은?",
    options: [
      { id: "a", text: "위험을 무시하고 놀이를 이어간다", is_correct: false },
      { id: "b", text: "위험을 알리고 안전한 장소에서 놀이하도록 안내한다", is_correct: true },
      { id: "c", text: "친구를 부추겨 더 위험하게 숨게 한다", is_correct: false }
    ]
  }
},

// 20) 놀이 공간 정리
cleanUp: {
  beginner: {
    title: "정리 시간",
    situation: "놀이가 끝났어요. 장난감이 바닥에 있어요.",
    options: [
      { id: "a", text: "그냥 나가요", is_correct: false },
      { id: "b", text: "장난감을 치워요", is_correct: true },
      { id: "c", text: "발로 차요", is_correct: false }
    ]
  },
  intermediate: {
    title: "정리하기",
    situation: "키즈카페에서 놀다가 집에 갈 시간이 되었어요.",
    options: [
      { id: "a", text: "정리하지 않고 간다", is_correct: false },
      { id: "b", text: "장난감을 제자리에 두고 간다", is_correct: true },
      { id: "c", text: "다른 사람에게 맡긴다", is_correct: false }
]
  },
  advanced: {
    title: "책임 있는 태도",
    situation: "놀이가 끝난 후 공용 공간에서 바람직한 태도는?",
    options: [
      { id: "a", text: "치우지 않고 자리를 떠난다", is_correct: false },
      { id: "b", text: "정리와 청결을 지키며 물건을 제자리에 둔다", is_correct: true },
      { id: "c", text: "다른 사람에게 떠넘긴다", is_correct: false }

        ]
      }
    }
  }
};
