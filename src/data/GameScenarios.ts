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
  // ===== Transport 테마 (1~20세트) =====
 transport: {
  // 1) 자리 양보 (어르신/임산부/몸 불편한 분)
  offerSeat: {
    beginner: {
      title: "자리를 양보해요",
      situation: "버스에 할머니가 타셨어요. 빈자리가 없어요.",
      options: [
        { id: "a", text: "모른 척해요", is_correct: false },
        { id: "b", text: "일어나서 자리를 양보해요", is_correct: true },
        { id: "c", text: "다른 사람이 하라고 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "필요한 분에게 자리",
      situation: "임산부 표시가 있는 배지를 본 지우는 어떻게 할까요?",
      options: [
        { id: "a", text: "눈을 피한다", is_correct: false },
        { id: "b", text: "정중히 자리를 권한다", is_correct: true },
        { id: "c", text: "자리를 더 눕혀 앉는다", is_correct: false }
      ]
    },
    advanced: {
      title: "배려 좌석의 의미",
      situation: "교통약자에게 좌석을 배려해야 하는 이유와 태도는?",
      options: [
        { id: "a", text: "피곤하니 무조건 먼저 앉는다", is_correct: false },
        { id: "b", text: "필요한 분을 우선 고려해 자발적으로 양보한다", is_correct: true },
        { id: "c", text: "눈치 보이며 외면한다", is_correct: false }
      ]
    }
  },

  // 2) 작은 목소리로 대화
  talkVolume: {
    beginner: {
      title: "작은 목소리",
      situation: "지하철에서 친구와 이야기해요.",
      options: [
        { id: "a", text: "큰 소리로 떠들어요", is_correct: false },
        { id: "b", text: "작은 목소리로 말해요", is_correct: true },
        { id: "c", text: "노래를 불러요", is_correct: false }
      ]
    },
    intermediate: {
      title: "대중교통 예절",
      situation: "다른 승객이 휴식을 취해요.",
      options: [
        { id: "a", text: "영상 소리를 크게 튼다", is_correct: false },
        { id: "b", text: "이어폰을 쓰고 조용히 대화한다", is_correct: true },
        { id: "c", text: "전화로 크게 웃는다", is_correct: false }
      ]
    },
    advanced: {
      title: "공공장소 배려",
      situation: "혼잡한 지하철에서 소음을 줄이는 바람직한 방법은?",
      options: [
        { id: "a", text: "통화·영상 소리를 크게 한다", is_correct: false },
        { id: "b", text: "볼륨을 줄이고 필요한 말만 조용히 한다", is_correct: true },
        { id: "c", text: "주변 반응을 시험하듯 더 떠든다", is_correct: false }
      ]
    }
  },

  // 3) 급정거로 부딪혔을 때
  suddenStopBump: {
    beginner: {
      title: "부딪혔을 때",
      situation: "버스가 멈춰서 옆 사람과 부딪혔어요.",
      options: [
        { id: "a", text: "모른 척해요", is_correct: false },
        { id: "b", text: "미안하다고 말해요", is_correct: true },
        { id: "c", text: "그 사람을 밀어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "예의 있게 사과",
      situation: "급정거로 실수로 발이 닿았어요.",
      options: [
        { id: "a", text: "지하철 탓만 한다", is_correct: false },
        { id: "b", text: "바로 사과하고 조심한다", is_correct: true },
        { id: "c", text: "다시 밀치며 화낸다", is_correct: false }
      ]
    },
    advanced: {
      title: "혼잡 상황의 태도",
      situation: "혼잡·급정거 등 비의도적 접촉 시 적절한 행동은?",
      options: [
        { id: "a", text: "상대를 탓하며 언성을 높인다", is_correct: false },
        { id: "b", text: "간단히 사과하고 안전히 균형을 잡는다", is_correct: true },
        { id: "c", text: "보복성 행동을 한다", is_correct: false }
      ]
    }
  },

  // 4) 음식 섭취 예절
  eatOnBus: {
    beginner: {
      title: "버스에서 간식",
      situation: "버스에서 과자를 먹고 싶어요.",
      options: [
        { id: "a", text: "부스러기를 흘리며 먹어요", is_correct: false },
        { id: "b", text: "다른 사람에게 방해 안 되게 참아요", is_correct: true },
        { id: "c", text: "냄새 나는 음식을 꺼내요", is_correct: false }
      ]
    },
    intermediate: {
      title: "냄새·청결",
      situation: "대중교통에서 음식 섭취는?",
      options: [
        { id: "a", text: "강한 냄새 음식도 괜찮다", is_correct: false },
        { id: "b", text: "규정을 지키고 필요 시 최소화한다", is_correct: true },
        { id: "c", text: "흘려도 그냥 둔다", is_correct: false }
      ]
    },
    advanced: {
      title: "공유공간 위생",
      situation: "밀폐된 차내에서 먹는 행동의 바람직한 기준은?",
      options: [
        { id: "a", text: "냄새·소음 상관없이 먹는다", is_correct: false },
        { id: "b", text: "필요 시 물·가벼운 것만, 청결을 지킨다", is_correct: true },
        { id: "c", text: "좌석·바닥에 흘려도 무시한다", is_correct: false }
      ]
    }
  },

  // 5) 교통카드를 놓쳤을 때
  missingTransitCard: {
    beginner: {
      title: "카드 없어요",
      situation: "버스를 타려는데 교통카드를 안 가져왔어요.",
      options: [
        { id: "a", text: "그냥 몰래 타요", is_correct: false },
        { id: "b", text: "기사님께 말하고 현금으로 내요", is_correct: true },
        { id: "c", text: "다른 사람 뒤에 숨어 타요", is_correct: false }
      ]
    },
    intermediate: {
      title: "요금 지불",
      situation: "교통카드를 분실했을 때 올바른 행동은?",
      options: [
        { id: "a", text: "무임승차한다", is_correct: false },
        { id: "b", text: "대체 지불 방법을 문의한다", is_correct: true },
        { id: "c", text: "개찰구를 뛰어넘는다", is_correct: false }
      ]
    },
    advanced: {
      title: "규정 준수",
      situation: "요금을 지불할 수 없을 때의 바람직한 태도는?",
      options: [
        { id: "a", text: "규정을 무시하고 탑승한다", is_correct: false },
        { id: "b", text: "직원·기사에게 사정을 알리고 규정대로 처리한다", is_correct: true },
        { id: "c", text: "다른 승객의 카드를 빌린다", is_correct: false }
      ]
    }
  },

  // 6) 휴대폰·게임 소리
  gameSoundSubway: {
    beginner: {
      title: "소리 끄기",
      situation: "지하철에서 게임을 해요.",
      options: [
        { id: "a", text: "소리를 크게 켜요", is_correct: false },
        { id: "b", text: "이어폰을 쓰거나 소리를 꺼요", is_correct: true },
        { id: "c", text: "주변에 들리게 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "미디어 예절",
      situation: "영상·게임을 볼 때는?",
      options: [
        { id: "a", text: "스피커로 크게 튼다", is_correct: false },
        { id: "b", text: "이어폰·무음으로 사용한다", is_correct: true },
        { id: "c", text: "좌석 전체가 들리게 한다", is_correct: false }
      ]
    },
    advanced: {
      title: "소음 최소화",
      situation: "공간 소음을 줄이는 디지털 사용법은?",
      options: [
        { id: "a", text: "알림·벨소리를 최대치로 둔다", is_correct: false },
        { id: "b", text: "진동·무음과 이어폰을 활용한다", is_correct: true },
        { id: "c", text: "이어폰 없이 영상 재생한다", is_correct: false }
      ]
    }
  },

  // 7) 임산부 배려석
  seatForPregnant: {
    beginner: {
      title: "임산부 자리",
      situation: "배가 불러 보이는 아주머니가 타셨어요.",
      options: [
        { id: "a", text: "모른 척해요", is_correct: false },
        { id: "b", text: "자리 양보해요", is_correct: true },
        { id: "c", text: "다른 칸으로 가요", is_correct: false }
      ]
    },
    intermediate: {
      title: "배려석 사용",
      situation: "임산부 배려석에 앉아 있던 지우는?",
      options: [
        { id: "a", text: "계속 앉아 있다", is_correct: false },
        { id: "b", text: "즉시 일어나 자리를 드린다", is_correct: true },
        { id: "c", text: "눈을 감고 자는 척한다", is_correct: false }
      ]
    },
    advanced: {
      title: "우선권 이해",
      situation: "배려석 정책의 취지와 실천은?",
      options: [
        { id: "a", text: "아무나 먼저 앉아도 된다", is_correct: false },
        { id: "b", text: "필요한 승객에게 우선권을 보장한다", is_correct: true },
        { id: "c", text: "자리 양보 요청을 무시한다", is_correct: false }
      ]
    }
  },

  // 8) 발을 밟았을 때
  footSteppedOn: {
    beginner: {
      title: "발 밟았어요",
      situation: "사람이 많아 실수로 발을 밟았어요.",
      options: [
        { id: "a", text: "그냥 지나가요", is_correct: false },
        { id: "b", text: "미안하다고 말해요", is_correct: true },
        { id: "c", text: "상대 발도 밟아요", is_correct: false }
      ]
    },
    intermediate: {
      title: "혼잡 매너",
      situation: "발이 닿았을 때 무엇이 맞을까요?",
      options: [
        { id: "a", text: "눈을 흘기며 짜증낸다", is_correct: false },
        { id: "b", text: "사과하고 거리 두기를 시도한다", is_correct: true },
        { id: "c", text: "더 세게 밀친다", is_correct: false }
      ]
    },
    advanced: {
      title: "갈등 예방",
      situation: "밀집 공간에서의 우발적 접촉 대응은?",
      options: [
        { id: "a", text: "상대를 탓하며 다툰다", is_correct: false },
        { id: "b", text: "짧게 사과·양해를 구하고 재발을 줄인다", is_correct: true },
        { id: "c", text: "복수한다", is_correct: false }
      ]
    }
  },

  // 9) 떨어진 물건 부탁하기
  pickUpDropped: {
    beginner: {
      title: "물건 떨어졌어요",
      situation: "필통이 앞사람 발 밑으로 갔어요.",
      options: [
        { id: "a", text: "포기해요", is_correct: false },
        { id: "b", text: "정중히 주워달라고 말해요", is_correct: true },
        { id: "c", text: "발로 툭툭 차요", is_correct: false }
      ]
    },
    intermediate: {
      title: "정중한 요청",
      situation: "앞사람 공간에 내 물건이 들어갔을 때?",
      options: [
        { id: "a", text: "강하게 밀치고 집는다", is_correct: false },
        { id: "b", text: "양해를 구하고 부탁한다", is_correct: true },
        { id: "c", text: "소리쳐서 지시한다", is_correct: false }
      ]
    },
    advanced: {
      title: "의사소통 매너",
      situation: "좁은 공간에서 타인에게 도움을 청할 때의 태도는?",
      options: [
        { id: "a", text: "무례하게 손을 뻗는다", is_correct: false },
        { id: "b", text: "상대 공간을 존중하며 부탁한다", is_correct: true },
        { id: "c", text: "짜증 섞인 말투로 명령한다", is_correct: false }
      ]
    }
  },

  // 10) 먼저 내리게 하기
  letPassengersExit: {
    beginner: {
      title: "먼저 내리게",
      situation: "지하철 문이 열렸어요. 내리는 사람이 많아요.",
      options: [
        { id: "a", text: "밀고 먼저 타요", is_correct: false },
        { id: "b", text: "다 내리고 타요", is_correct: true },
        { id: "c", text: "문 앞을 막아요", is_correct: false }
      ]
    },
    intermediate: {
      title: "승하차 질서",
      situation: "혼잡역 승·하차 예절은?",
      options: [
        { id: "a", text: "타던 사람을 밀어낸다", is_correct: false },
        { id: "b", text: "하차가 먼저, 그 다음 승차한다", is_correct: true },
        { id: "c", text: "문 앞에서 버틴다", is_correct: false }
      ]
    },
    advanced: {
      title: "흐름 유지",
      situation: "플랫폼 혼잡을 줄이는 기본 원칙은?",
      options: [
        { id: "a", text: "동선과 반대로 움직인다", is_correct: false },
        { id: "b", text: "하차 우선·대기선 준수로 흐름을 지킨다", is_correct: true },
        { id: "c", text: "문턱 앞에 정지해 막는다", is_correct: false }
      ]
    }
  },

  // 11) 하차 시 동선·문 막지 않기
  exitRearDoor: {
    beginner: {
      title: "문 앞 비우기",
      situation: "버스에서 내릴 사람이 있어요.",
      options: [
        { id: "a", text: "문 앞을 막아요", is_correct: false },
        { id: "b", text: "잠깐 비켜줘요", is_correct: true },
        { id: "c", text: "더 앞에 서 있어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "하차 동선",
      situation: "내릴 승객이 다가오면?",
      options: [
        { id: "a", text: "자리에서 움직이지 않는다", is_correct: false },
        { id: "b", text: "통로를 열어주고 이동을 돕는다", is_correct: true },
        { id: "c", text: "어깨로 막는다", is_correct: false }
      ]
    },
    advanced: {
      title: "문턱 정체 방지",
      situation: "문 앞 체류를 줄이는 에티켓은?",
      options: [
        { id: "a", text: "문 앞에서 고정적으로 머문다", is_correct: false },
        { id: "b", text: "잠시 하차·재승차 또는 안쪽으로 이동한다", is_correct: true },
        { id: "c", text: "짐으로 문을 막는다", is_correct: false }
      ]
    }
  },

  // 12) 가방 앞으로 메기
  backpackCarryFront: {
    beginner: {
      title: "가방 예절",
      situation: "가방이 앉은 사람에게 닿아요.",
      options: [
        { id: "a", text: "그대로 둬요", is_correct: false },
        { id: "b", text: "가방을 앞으로 메요", is_correct: true },
        { id: "c", text: "사람을 밀어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "공간 배려",
      situation: "혼잡한 전동차에서 배낭은?",
      options: [
        { id: "a", text: "등에 멘 채 휘두른다", is_correct: false },
        { id: "b", text: "앞으로 메거나 내려서 발밑에 둔다", is_correct: true },
        { id: "c", text: "좌석 위에 올려둔다", is_correct: false }
      ]
    },
    advanced: {
      title: "안전·여유 공간",
      situation: "혼잡 구간에서 수하물 관리 원칙은?",
      options: [
        { id: "a", text: "타인 공간을 침범해도 신경 쓰지 않는다", is_correct: false },
        { id: "b", text: "앞으로 메거나 옆으로 두어 충돌을 줄인다", is_correct: true },
        { id: "c", text: "통로를 막아 둔다", is_correct: false }
      ]
    }
  },

  // 13) 어르신 지팡이/유모차 돕기
  helpElderlyCane: {
    beginner: {
      title: "도와드리기",
      situation: "할아버지가 지팡이를 떨어뜨렸어요.",
      options: [
        { id: "a", text: "그냥 둬요", is_correct: false },
        { id: "b", text: "주워 드려요", is_correct: true },
        { id: "c", text: "장난쳐요", is_correct: false }
      ]
    },
    intermediate: {
      title: "배려 행동",
      situation: "유모차가 승하차하려 해요.",
      options: [
        { id: "a", text: "통로를 막는다", is_correct: false },
        { id: "b", text: "문 옆을 비워 길을 만든다", is_correct: true },
        { id: "c", text: "밀치며 먼저 탄다", is_correct: false }
      ]
    },
    advanced: {
      title: "안전 우선",
      situation: "보행 보조기·유모차 승객을 만났을 때?",
      options: [
        { id: "a", text: "앞질러 비집고 들어간다", is_correct: false },
        { id: "b", text: "속도를 줄이고 공간을 양보한다", is_correct: true },
        { id: "c", text: "급하게 밀어 통과시킨다", is_correct: false }
      ]
    }
  },

  // 14) 음악은 이어폰으로
  musicWithEarphones: {
    beginner: {
      title: "이어폰 쓰기",
      situation: "버스에서 음악을 듣고 싶어요.",
      options: [
        { id: "a", text: "스피커로 크게 틀어요", is_correct: false },
        { id: "b", text: "이어폰을 써요", is_correct: true },
        { id: "c", text: "박수치며 따라 불러요", is_correct: false }
      ]
    },
    intermediate: {
      title: "볼륨 조절",
      situation: "이어폰을 써도 소리가 샙니다.",
      options: [
        { id: "a", text: "최대 볼륨으로 듣는다", is_correct: false },
        { id: "b", text: "볼륨을 낮춰 소음 누출을 줄인다", is_correct: true },
        { id: "c", text: "주변 상관없이 따라 부른다", is_correct: false }
      ]
    },
    advanced: {
      title: "청력·배려",
      situation: "장시간 이동 시 음악 청취의 바람직한 습관은?",
      options: [
        { id: "a", text: "고음량으로 장시간 청취한다", is_correct: false },
        { id: "b", text: "적정 볼륨을 유지하고 주변을 배려한다", is_correct: true },
        { id: "c", text: "노래를 합창한다", is_correct: false }
      ]
    }
  },

  // 15) 문 막지 않기(문틈·개찰구)
  blockingDoors: {
    beginner: {
      title: "문 막지 않기",
      situation: "지하철 문이 닫히려고 해요.",
      options: [
        { id: "a", text: "손과 발로 막아요", is_correct: false },
        { id: "b", text: "다음 차를 기다려요", is_correct: true },
        { id: "c", text: "문 사이에 서 있어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "안전 우선",
      situation: "개찰구·스크린도어를 억지로 막으면?",
      options: [
        { id: "a", text: "시간을 벌 수 있다", is_correct: false },
        { id: "b", text: "고장·사고 위험이 있어 피한다", is_correct: true },
        { id: "c", text: "모두가 자주 하는 일이다", is_correct: false }
      ]
    },
    advanced: {
      title: "설비 보호",
      situation: "문 막기로 인한 안전·운행 지연을 줄이는 방법은?",
      options: [
        { id: "a", text: "닫히는 문을 밀어 연다", is_correct: false },
        { id: "b", text: "여유를 두고 탑승하며 다음 열차를 이용한다", is_correct: true },
        { id: "c", text: "문턱에 짐을 둔다", is_correct: false }
      ]
    }
  },

  // 16) 에스컬레이터 안전
  escalatorSafety: {
    beginner: {
      title: "에스컬레이터",
      situation: "지하철 에스컬레이터를 탈 때예요.",
      options: [
        { id: "a", text: "뛰어 올라가요", is_correct: false },
        { id: "b", text: "손잡이를 잡고 서 있어요", is_correct: true },
        { id: "c", text: "장난치며 밀어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "넘어짐 주의",
      situation: "사람이 많을 때 에스컬레이터 이용은?",
      options: [
        { id: "a", text: "달리며 추월한다", is_correct: false },
        { id: "b", text: "걷지 말고 간격을 유지한다", is_correct: true },
        { id: "c", text: "손잡이를 잡지 않는다", is_correct: false }
      ]
    },
    advanced: {
      title: "시설 안전 수칙",
      situation: "에스컬레이터에서의 안전 원칙은?",
      options: [
        { id: "a", text: "장난·역주행을 해본다", is_correct: false },
        { id: "b", text: "손잡이 잡고 발선 안쪽에 서서 이용한다", is_correct: true },
        { id: "c", text: "큰 짐을 들고 뛰어간다", is_correct: false }
      ]
    }
  },

  // 17) 노약자석·우선석 예절
  prioritySeatRespect: {
    beginner: {
      title: "노약자석",
      situation: "우선석에 앉아 있어요.",
      options: [
        { id: "a", text: "게임에 몰두해요", is_correct: false },
        { id: "b", text: "필요한 분이 보이면 바로 일어나요", is_correct: true },
        { id: "c", text: "이어폰 끼고 모른 척해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "우선석 배려",
      situation: "몸이 불편해 보이는 분이 다가와요.",
      options: [
        { id: "a", text: "눈을 피한다", is_correct: false },
        { id: "b", text: "먼저 자리 양보를 제안한다", is_correct: true },
        { id: "c", text: "자리를 더 차지한다", is_correct: false }
      ]
    },
    advanced: {
      title: "사회적 약자 배려",
      situation: "우선석 운용의 취지에 맞는 행동은?",
      options: [
        { id: "a", text: "눈치만 보고 비켜주지 않는다", is_correct: false },
        { id: "b", text: "필요한 분의 이용을 돕고 스스로 이동한다", is_correct: true },
        { id: "c", text: "짐을 올려두고 점유한다", is_correct: false }
      ]
    }
  },

  // 18) 플랫폼 줄 서기
  queueAtPlatform: {
    beginner: {
      title: "줄 서요",
      situation: "지하철 칸 앞 바닥에 줄 서는 표시가 있어요.",
      options: [
        { id: "a", text: "표시를 무시해요", is_correct: false },
        { id: "b", text: "줄 표시를 보고 서요", is_correct: true },
        { id: "c", text: "새치기해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "질서 지키기",
      situation: "대기선과 화살표가 보일 때?",
      options: [
        { id: "a", text: "문 정면을 막는다", is_correct: false },
        { id: "b", text: "표시선에 맞춰 양옆으로 줄 선다", is_correct: true },
        { id: "c", text: "틈새로 끼어든다", is_correct: false }
      ]
    },
    advanced: {
      title: "혼잡 완화",
      situation: "플랫폼 혼잡을 줄이는 기본 질서는?",
      options: [
        { id: "a", text: "표시를 무시하고 임의로 선다", is_correct: false },
        { id: "b", text: "대기선·하차 공간을 구분해 선다", is_correct: true },
        { id: "c", text: "새치기로 흐름을 깨뜨린다", is_correct: false }
      ]
    }
  },

  // 19) 기침 예절/마스크
  coughEtiquetteTransit: {
    beginner: {
      title: "기침 나올 때",
      situation: "지하철에서 기침이 나와요.",
      options: [
        { id: "a", text: "가리지 않고 기침해요", is_correct: false },
        { id: "b", text: "마스크 쓰거나 옷소매로 가려요", is_correct: true },
        { id: "c", text: "사람 쪽으로 고개 돌려요", is_correct: false }
      ]
    },
    intermediate: {
      title: "기침 예절",
      situation: "혼잡한 대중교통에서 기침할 때는?",
      options: [
        { id: "a", text: "손도 안 가리고 기침한다", is_correct: false },
        { id: "b", text: "기침 예절을 지키고 사람 많은 곳은 피한다", is_correct: true },
        { id: "c", text: "계속 큰 기침 소리를 낸다", is_correct: false }
      ]
    },
    advanced: {
      title: "감염 예방",
      situation: "밀폐된 차내에서의 위생적 행동은?",
      options: [
        { id: "a", text: "기침·재채기를 가리지 않는다", is_correct: false },
        { id: "b", text: "마스크·소매로 가리고 손 위생을 지킨다", is_correct: true },
        { id: "c", text: "좌석·기둥을 만진 손을 그대로 둔다", is_correct: false }
      ]
    }
  },

  // 20) 길을 잃었을 때 도움 요청
  lostWayTransfer: {
    beginner: {
      title: "길을 몰라요",
      situation: "환승역에서 어디로 가야 할지 몰라요.",
      options: [
        { id: "a", text: "아무 데나 가요", is_correct: false },
        { id: "b", text: "역무원에게 물어봐요", is_correct: true },
        { id: "c", text: "사람을 밀치고 가요", is_correct: false }
      ]
    },
    intermediate: {
      title: "안내 찾기",
      situation: "길을 잃었을 때 바람직한 방법은?",
      options: [
        { id: "a", text: "출구로 나가 다시 표를 산다", is_correct: false },
        { id: "b", text: "안내 표지/역무원에게 문의한다", is_correct: true },
        { id: "c", text: "아무 열차나 탄다", is_correct: false }
      ]
    },
    advanced: {
      title: "문제해결 태도",
      situation: "복잡한 환승에서 효율적으로 길을 찾는 방법은?",
      options: [
        { id: "a", text: "감으로 이동하며 시간을 낭비한다", is_correct: false },
        { id: "b", text: "노선도·표지·안내를 활용해 확인한다", is_correct: true },
        { id: "c", text: "사람 흐름만 따라간다", is_correct: false }
       ]
     }
   }
  },
  // ===== Home 테마 (1~20세트) =====
 home: {
  // 1) 식사 시간
  dinnerTime: {
    beginner: {
      title: "밥 먹는 시간",
      situation: "가족이 저녁을 먹자고 해요.",
      options: [
        { id: "a", text: "게임을 계속해요", is_correct: false },
        { id: "b", text: "게임을 끄고 식탁에 앉아요", is_correct: true },
        { id: "c", text: "밥을 가져와서 게임하며 먹어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "저녁 식사 예절",
      situation: "게임 중이지만 저녁 식사 시간이 되었어요.",
      options: [
        { id: "a", text: "끝날 때까지 기다리라고 한다", is_correct: false },
        { id: "b", text: "저장하고 게임을 끄고 식사한다", is_correct: true },
        { id: "c", text: "식탁에서 이어서 게임한다", is_correct: false }
      ]
    },
    advanced: {
      title: "가족 시간 존중",
      situation: "가족 식사 시간에 바람직한 태도는?",
      options: [
        { id: "a", text: "개인 활동을 우선하며 불참한다", is_correct: false },
        { id: "b", text: "기기 사용을 멈추고 대화에 참여한다", is_correct: true },
        { id: "c", text: "자리에서 계속 영상을 시청한다", is_correct: false }
      ]
    }
  },

  // 2) 숙제 우선순위
  homeworkFirst: {
    beginner: {
      title: "숙제 먼저",
      situation: "TV가 재미있지만 숙제를 해야 해요.",
      options: [
        { id: "a", text: "TV부터 봐요", is_correct: false },
        { id: "b", text: "숙제를 먼저 해요", is_correct: true },
        { id: "c", text: "TV 보면서 대충 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "공부 시간 관리",
      situation: "숙제와 TV 중 무엇을 먼저 할까요?",
      options: [
        { id: "a", text: "TV부터 보고 늦게 숙제한다", is_correct: false },
        { id: "b", text: "숙제를 끝내고 보상으로 TV를 본다", is_correct: true },
        { id: "c", text: "둘 다 동시에 한다", is_correct: false }
      ]
    },
    advanced: {
      title: "자기조절 능력",
      situation: "집에서 우선순위를 세울 때 올바른 선택은?",
      options: [
        { id: "a", text: "즉각적인 즐거움을 우선한다", is_correct: false },
        { id: "b", text: "해야 할 일을 먼저 끝내고 쉬어간다", is_correct: true },
        { id: "c", text: "미루고 밤새 급히 처리한다", is_correct: false }
      ]
    }
  },

  // 3) 형제자매와 장난감 나눠 쓰기
  siblingSharing: {
    beginner: {
      title: "동생과 장난감",
      situation: "동생이 내가 하던 장난감을 갖고 싶어해요.",
      options: [
        { id: "a", text: "뺏기지 않게 숨겨요", is_correct: false },
        { id: "b", text: "조금 더 놀고 교대로 나눠요", is_correct: true },
        { id: "c", text: "동생 장난감도 뺏어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "형제자매와 공정하게",
      situation: "같은 장난감을 함께 쓰고 싶어요.",
      options: [
        { id: "a", text: "뺏어서 혼자 쓴다", is_correct: false },
        { id: "b", text: "시간을 정해 교대로 사용한다", is_correct: true },
        { id: "c", text: "동생 것을 숨겨둔다", is_correct: false }
      ]
    },
    advanced: {
      title: "갈등 없는 공유",
      situation: "형제자매 간 장난감 공유에서 바람직한 태도는?",
      options: [
        { id: "a", text: "힘으로 차지한다", is_correct: false },
        { id: "b", text: "규칙을 정하고 서로 지킨다", is_correct: true },
        { id: "c", text: "말싸움으로 해결한다", is_correct: false }
      ]
    }
  },

  // 4) 방 정리
  roomCleaning: {
    beginner: {
      title: "방 치우기",
      situation: "방에 장난감이 바닥에 있어요.",
      options: [
        { id: "a", text: "그냥 두고 놀아요", is_correct: false },
        { id: "b", text: "장난감을 제자리에 둬요", is_correct: true },
        { id: "c", text: "침대 밑에 밀어 넣어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "정리 습관",
      situation: "정리 시간이 되었어요.",
      options: [
        { id: "a", text: "정리하지 않는다", is_correct: false },
        { id: "b", text: "카테고리별로 깔끔하게 정리한다", is_correct: true },
        { id: "c", text: "보이는 데만 치운다", is_correct: false }
      ]
    },
    advanced: {
      title: "생활 자립",
      situation: "생활 공간을 깨끗하게 유지하려면?",
      options: [
        { id: "a", text: "정리를 미루어 더 어지럽힌다", is_correct: false },
        { id: "b", text: "사용 후 바로 정리하는 습관을 만든다", is_correct: true },
        { id: "c", text: "누군가가 대신해주길 기다린다", is_correct: false }
      ]
    }
  },

  // 5) 잠자기 준비
  bedtime: {
    beginner: {
      title: "잠잘 시간",
      situation: "잘 시간이 됐어요.",
      options: [
        { id: "a", text: "몰래 일어나 놀아요", is_correct: false },
        { id: "b", text: "양치하고 잠자리에 누워요", is_correct: true },
        { id: "c", text: "이불 속에서 게임해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "취침 루틴",
      situation: "내일 일찍 일어나야 해요.",
      options: [
        { id: "a", text: "영상 보다가 늦게 잔다", is_correct: false },
        { id: "b", text: "루틴(세수·양치) 후 제시간에 잔다", is_correct: true },
        { id: "c", text: "침대에서 간식 먹는다", is_correct: false }
      ]
    },
    advanced: {
      title: "수면 위생",
      situation: "건강한 수면 습관을 위해 필요한 것은?",
      options: [
        { id: "a", text: "취침 직전 화면 사용을 늘린다", is_correct: false },
        { id: "b", text: "규칙적인 루틴과 기기 사용 제한을 지킨다", is_correct: true },
        { id: "c", text: "졸릴 때까지 무한 시청한다", is_correct: false }
      ]
    }
  },

  // 6) 집 전화/초인종 대응
  phoneDoor: {
    beginner: {
      title: "전화/초인종",
      situation: "부모님이 없을 때 집 초인종이 울려요.",
      options: [
        { id: "a", text: "문을 바로 열어요", is_correct: false },
        { id: "b", text: "열지 말고 어른에게 연락해요", is_correct: true },
        { id: "c", text: "아무 말 없이 문 밖으로 나가요", is_correct: false }
      ]
    },
    intermediate: {
      title: "낯선 사람",
      situation: "부모님이 없는데 모르는 사람이 문을 두드려요.",
      options: [
        { id: "a", text: "문을 열고 대화한다", is_correct: false },
        { id: "b", text: "문을 열지 않고 보호자에게 연락한다", is_correct: true },
        { id: "c", text: "문을 열고 들여보낸다", is_correct: false }
      ]
    },
    advanced: {
      title: "가정 안전",
      situation: "어린이가 혼자 있을 때 안전 수칙은?",
      options: [
        { id: "a", text: "신분 확인 없이 문을 연다", is_correct: false },
        { id: "b", text: "문을 열지 않고 보호자/신뢰 가능한 어른에게 알린다", is_correct: true },
        { id: "c", text: "상대 요구를 그대로 따른다", is_correct: false }
      ]
    }
  },

  // 7) 손님 응대
  guestManners: {
    beginner: {
      title: "손님 오셨다",
      situation: "부모님 친구가 집에 오셨어요.",
      options: [
        { id: "a", text: "인사 안 하고 방에 들어가요", is_correct: false },
        { id: "b", text: "정중히 인사해요", is_correct: true },
        { id: "c", text: "소리를 질러요", is_correct: false }
      ]
    },
    intermediate: {
      title: "예절 지키기",
      situation: "거실에서 어른들이 이야기 중이에요.",
      options: [
        { id: "a", text: "중간에 크게 끼어든다", is_correct: false },
        { id: "b", text: "인사하고 방해하지 않는다", is_correct: true },
        { id: "c", text: "장난감을 던진다", is_correct: false }
      ]
    },
    advanced: {
      title: "가정의 예의",
      situation: "손님 방문 시 어린이의 바람직한 태도는?",
      options: [
        { id: "a", text: "무례한 말로 분위기를 깬다", is_correct: false },
        { id: "b", text: "인사·배려로 예의를 보인다", is_correct: true },
        { id: "c", text: "손님 물건을 만지작거린다", is_correct: false }
      ]
    }
  },

  // 8) 컴퓨터/콘솔 사용 시간
  screenTime: {
    beginner: {
      title: "게임 시간 끝",
      situation: "게임 시간이 끝났어요.",
      options: [
        { id: "a", text: "몰래 계속해요", is_correct: false },
        { id: "b", text: "약속대로 꺼요", is_correct: true },
        { id: "c", text: "더 크게 틀어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "기기 사용 제한",
      situation: "정해진 사용 시간이 지나갔어요.",
      options: [
        { id: "a", text: "조금만 더 하자고 떼쓴다", is_correct: false },
        { id: "b", text: "타이머에 맞춰 종료한다", is_correct: true },
        { id: "c", text: "부모님 몰래 새벽에 한다", is_correct: false }
      ]
    },
    advanced: {
      title: "디지털 리터러시",
      situation: "건강한 미디어 사용 습관은?",
      options: [
        { id: "a", text: "제한 없이 사용한다", is_correct: false },
        { id: "b", text: "시간 규칙을 지키고 휴식을 가진다", is_correct: true },
        { id: "c", text: "수면 시간을 줄여 사용한다", is_correct: false }
      ]
    }
  },

  // 9) 심부름
  errand: {
    beginner: {
      title: "심부름 하기",
      situation: "부모님이 우유를 사오라고 해요.",
      options: [
        { id: "a", text: "귀찮다고 거절해요", is_correct: false },
        { id: "b", text: "기쁘게 다녀와요", is_correct: true },
        { id: "c", text: "돈을 잃어버리고 숨겨요", is_correct: false }
      ]
    },
    intermediate: {
      title: "책임 있게",
      situation: "부탁받은 심부름을 어떻게 할까요?",
      options: [
        { id: "a", text: "게임하다 잊어버린다", is_correct: false },
        { id: "b", text: "메모하고 안전하게 다녀온다", is_correct: true },
        { id: "c", text: "다른 물건을 임의로 산다", is_correct: false }
      ]
    },
    advanced: {
      title: "책임감 기르기",
      situation: "심부름을 맡았을 때 올바른 태도는?",
      options: [
        { id: "a", text: "대충 하고 보고하지 않는다", is_correct: false },
        { id: "b", text: "지시를 확인하고 결과를 정확히 전달한다", is_correct: true },
        { id: "c", text: "지시와 다른 일을 한다", is_correct: false }
      ]
    }
  },

  // 10) 요리 도와주기
  cookingHelp: {
    beginner: {
      title: "요리 돕기",
      situation: "부모님이 요리를 도와달래요.",
      options: [
        { id: "a", text: "재료로 장난쳐요", is_correct: false },
        { id: "b", text: "말을 잘 듣고 도와요", is_correct: true },
        { id: "c", text: "맛만 봐요", is_correct: false }
      ]
    },
    intermediate: {
      title: "부엌 안전",
      situation: "부엌에서 도울 때 주의할 점은?",
      options: [
        { id: "a", text: "칼·불 근처에서 장난친다", is_correct: false },
        { id: "b", text: "안전수칙을 듣고 조심히 돕는다", is_correct: true },
        { id: "c", text: "바닥에 물을 흘린다", is_correct: false }
      ]
    },
    advanced: {
      title: "가사 협력",
      situation: "가정에서 요리를 도울 때 바람직한 태도는?",
      options: [
        { id: "a", text: "위험을 무시하고 서두른다", is_correct: false },
        { id: "b", text: "위생·안전을 지키며 협력한다", is_correct: true },
        { id: "c", text: "규칙을 어기고 장난친다", is_correct: false }
      ]
    }
  },

  // 11) 감기 예절
  coldEtiquette: {
    beginner: {
      title: "감기 걸렸을 때",
      situation: "기침이 나와요.",
      options: [
        { id: "a", text: "아무렇게나 기침해요", is_correct: false },
        { id: "b", text: "마스크 쓰거나 옷소매로 가려요", is_correct: true },
        { id: "c", text: "가족 쪽을 향해 기침해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "가정 내 위생",
      situation: "감기에 걸렸을 때 가족을 배려하려면?",
      options: [
        { id: "a", text: "기침 예절을 지키지 않는다", is_correct: false },
        { id: "b", text: "손 씻기·기침 예절을 지킨다", is_correct: true },
        { id: "c", text: "수건을 함께 쓴다", is_correct: false }
      ]
    },
    advanced: {
      title: "감염 예방",
      situation: "집에서 아플 때 올바른 태도는?",
      options: [
        { id: "a", text: "위생 수칙을 무시한다", is_correct: false },
        { id: "b", text: "공용 물건 소독·환기·기침 예절을 지킨다", is_correct: true },
        { id: "c", text: "식기를 함께 사용한다", is_correct: false }
      ]
    }
  },

  // 12) 다음 날 준비
  prepForSchool: {
    beginner: {
      title: "내일 준비",
      situation: "학교 준비물을 챙겨야 해요.",
      options: [
        { id: "a", text: "아침에 하자고 미뤄요", is_correct: false },
        { id: "b", text: "지금 미리 챙겨요", is_correct: true },
        { id: "c", text: "부모님이 대신하길 기다려요", is_correct: false }
      ]
    },
    intermediate: {
      title: "미리 준비",
      situation: "다음 날 필요한 물건을 챙길 때는?",
      options: [
        { id: "a", text: "출발 직전에 허둥댄다", is_correct: false },
        { id: "b", text: "전날 밤 체크리스트로 준비한다", is_correct: true },
        { id: "c", text: "아무것도 안 챙긴다", is_correct: false }
      ]
    },
    advanced: {
      title: "자기관리",
      situation: "등교 전 준비를 잘하는 방법은?",
      options: [
        { id: "a", text: "즉흥적으로 처리한다", is_correct: false },
        { id: "b", text: "전날 계획·정리로 아침 스트레스를 줄인다", is_correct: true },
        { id: "c", text: "부모에게 전부 맡긴다", is_correct: false }
      ]
    }
  },

  // 13) 가족 영화/취향 갈등
  familyMovie: {
    beginner: {
      title: "영화 고르기",
      situation: "가족이 같이 영화를 보려고 해요.",
      options: [
        { id: "a", text: "내 것만 고집해요", is_correct: false },
        { id: "b", text: "서로 상의해서 정해요", is_correct: true },
        { id: "c", text: "화내고 방으로 가요", is_correct: false }
      ]
    },
    intermediate: {
      title: "취향 존중",
      situation: "내가 원하는 영화가 아니에요.",
      options: [
        { id: "a", text: "다른 사람 취향을 무시한다", is_correct: false },
        { id: "b", text: "가족과 합의해 결정한다", is_correct: true },
        { id: "c", text: "중간에 자리를 박차고 나간다", is_correct: false }
      ]
    },
    advanced: {
      title: "협상과 배려",
      situation: "가족 활동에서 의견이 다를 때 바람직한 태도는?",
      options: [
        { id: "a", text: "고집만 부린다", is_correct: false },
        { id: "b", text: "순서 정하기/교대 선택 등으로 합의한다", is_correct: true },
        { id: "c", text: "언쟁으로 시간을 낭비한다", is_correct: false }
      ]
    }
  },

  // 14) 새로운 규칙(게임 시간 감소)
  newRule: {
    beginner: {
      title: "새 규칙",
      situation: "게임 시간을 줄이는 새 규칙이 생겼어요.",
      options: [
        { id: "a", text: "몰래 어겨요", is_correct: false },
        { id: "b", text: "이유를 듣고 지켜요", is_correct: true },
        { id: "c", text: "화를 내요", is_correct: false }
      ]
    },
    intermediate: {
      title: "규칙 수용",
      situation: "부모님이 사용 시간을 줄이자고 해요.",
      options: [
        { id: "a", text: "무조건 반항한다", is_correct: false },
        { id: "b", text: "이유를 묻고 합의한 규칙을 지킨다", is_correct: true },
        { id: "c", text: "몰래 시간을 늘린다", is_correct: false }
      ]
    },
    advanced: {
      title: "규칙의 의미",
      situation: "가정 내 규칙이 생길 때 올바른 태도는?",
      options: [
        { id: "a", text: "규칙을 무시한다", is_correct: false },
        { id: "b", text: "이유를 이해하고 협력한다", is_correct: true },
        { id: "c", text: "몰래 빠져나갈 방법을 찾는다", is_correct: false }
      ]
    }
  },

  // 15) 조부모와의 시간
  grandparents: {
    beginner: {
      title: "할머니, 할아버지",
      situation: "오랜만에 조부모님이 오셨어요.",
      options: [
        { id: "a", text: "인사만 하고 방에 가요", is_correct: false },
        { id: "b", text: "대화하며 시간을 보네요", is_correct: true },
        { id: "c", text: "시끄럽다고 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "세대 배려",
      situation: "조부모님과 시간을 보내는 법은?",
      options: [
        { id: "a", text: "휴대폰만 본다", is_correct: false },
        { id: "b", text: "함께 할 수 있는 활동을 찾는다", is_correct: true },
        { id: "c", text: "대화를 피한다", is_correct: false }
      ]
    },
    advanced: {
      title: "가족 관계",
      situation: "가족 내 다양한 세대를 배려하는 태도는?",
      options: [
        { id: "a", text: "관심을 보이지 않는다", is_correct: false },
        { id: "b", text: "존중과 경청으로 소통한다", is_correct: true },
        { id: "c", text: "불편하다고 피한다", is_correct: false }
      ]
    }
  },

  // 16) 이웃 소음 민원
  neighborNoise: {
    beginner: {
      title: "조용히 하자",
      situation: "이웃이 시끄럽다고 했어요.",
      options: [
        { id: "a", text: "더 크게 놀아요", is_correct: false },
        { id: "b", text: "발소리를 줄이고 조용히 해요", is_correct: true },
        { id: "c", text: "문을 쾅쾅 닫아요", is_correct: false }
      ]
    },
    intermediate: {
      title: "층간 소음",
      situation: "밤에 쿵쿵 뛰면?",
      options: [
        { id: "a", text: "괜찮다며 계속 뛴다", is_correct: false },
        { id: "b", text: "시간대·소음을 지켜 배려한다", is_correct: true },
        { id: "c", text: "문제 제기에 화를 낸다", is_correct: false }
      ]
    },
    advanced: {
      title: "공동주거 배려",
      situation: "공동주택에서 소음을 줄이는 태도는?",
      options: [
        { id: "a", text: "생활 소음을 무시한다", is_correct: false },
        { id: "b", text: "시간·소음 규칙을 지키고 매트를 활용한다", is_correct: true },
        { id: "c", text: "항의에 맞대응으로 소리를 더 낸다", is_correct: false }
      ]
    }
  },

  // 17) 반려동물 돌보기
  petCare: {
    beginner: {
      title: "강아지 키울 때",
      situation: "강아지가 실수를 했어요.",
      options: [
        { id: "a", text: "모른 척해요", is_correct: false },
        { id: "b", text: "바로 치우고 돌봐요", is_correct: true },
        { id: "c", text: "크게 혼내요", is_correct: false }
      ]
    },
    intermediate: {
      title: "반려동물 배려",
      situation: "산책과 물·밥 챙기기는?",
      options: [
        { id: "a", text: "기분 내킬 때만 한다", is_correct: false },
        { id: "b", text: "정해진 시간에 꾸준히 챙긴다", is_correct: true },
        { id: "c", text: "잊어버리면 그냥 넘긴다", is_correct: false }
      ]
    },
    advanced: {
      title: "책임 있는 보호자",
      situation: "반려동물과 함께 사는 기본 태도는?",
      options: [
        { id: "a", text: "감정대로 혼내기만 한다", is_correct: false },
        { id: "b", text: "위생·훈련·건강관리를 꾸준히 실천한다", is_correct: true },
        { id: "c", text: "돌봄을 다른 사람에게만 맡긴다", is_correct: false }
      ]
    }
  },

  // 18) 실수로 물건을 깨뜨렸을 때
  breakSomething: {
    beginner: {
      title: "물건을 깨뜨렸어요",
      situation: "꽃병을 실수로 깨뜨렸어요.",
      options: [
        { id: "a", text: "숨겨요", is_correct: false },
        { id: "b", text: "솔직히 말하고 사과해요", is_correct: true },
        { id: "c", text: "동생 탓을 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "실수 인정",
      situation: "잘못으로 물건을 망가뜨렸어요.",
      options: [
        { id: "a", text: "거짓말로 넘긴다", is_correct: false },
        { id: "b", text: "사과하고 해결 방법을 상의한다", is_correct: true },
        { id: "c", text: "남 탓을 한다", is_correct: false }
      ]
    },
    advanced: {
      title: "책임지는 태도",
      situation: "가정에서 실수를 했을 때 바람직한 태도는?",
      options: [
        { id: "a", text: "책임을 회피한다", is_correct: false },
        { id: "b", text: "사실을 인정하고 수습 방안을 찾는다", is_correct: true },
        { id: "c", text: "다른 사람에게 전가한다", is_correct: false }
      ]
    }
  },

  // 19) 용돈 관리
  allowance: {
    beginner: {
      title: "용돈 쓰기",
      situation: "갖고 싶은 게 많아요.",
      options: [
        { id: "a", text: "모두 한 번에 써요", is_correct: false },
        { id: "b", text: "필요한 것부터 계획해요", is_correct: true },
        { id: "c", text: "부모님께 더 달래요", is_correct: false }
      ]
    },
    intermediate: {
      title: "계획 소비",
      situation: "용돈을 아껴 쓰려면?",
      options: [
        { id: "a", text: "충동구매한다", is_correct: false },
        { id: "b", text: "목표와 예산을 정한다", is_correct: true },
        { id: "c", text: "그때그때 쓰고 본다", is_correct: false }
      ]
    },
    advanced: {
      title: "금융 습관",
      situation: "어린이의 올바른 소비 태도는?",
      options: [
        { id: "a", text: "원하는 대로 다 산다", is_correct: false },
        { id: "b", text: "우선순위·저축·기부를 고려한다", is_correct: true },
        { id: "c", text: "부모님 돈도 마음대로 쓴다", is_correct: false }
      ]
    }
  },

  // 20) 빨래·집안일 분담
  choresShare: {
    beginner: {
      title: "집안일 도와주기",
      situation: "빨래를 개는 걸 도와달래요.",
      options: [
        { id: "a", text: "모른 척해요", is_correct: false },
        { id: "b", text: "같이 개요", is_correct: true },
        { id: "c", text: "옷을 바닥에 던져요", is_correct: false }
      ]
    },
    intermediate: {
      title: "가사 분담",
      situation: "가족이 각자 맡은 집안일이 있어요.",
      options: [
        { id: "a", text: "내 차례여도 하지 않는다", is_correct: false },
        { id: "b", text: "정해진 일을 제때 한다", is_correct: true },
        { id: "c", text: "다른 사람에게 떠넘긴다", is_correct: false }
      ]
    },
    advanced: {
      title: "협력과 책임",
      situation: "가정에서 집안일을 공정하게 나누는 태도는?",
      options: [
        { id: "a", text: "하기 싫은 일은 미룬다", is_correct: false },
        { id: "b", text: "역할을 분담하고 책임을 다한다", is_correct: true },
        { id: "c", text: "항상 다른 사람에게 시킨다", is_correct: false }
       ]
     }
   }
 },


  // ===== Playground 테마 (3세트) =====
  playground: {
    // 1) 미끄럼틀 줄서기
    waitingSlide: {
      beginner: {
        title: "미끄럼틀 줄서기",
        situation: "친구들이 줄 서 있어요. 지우는 빨리 타고 싶어요.",
        options: [
          { id: "a", text: "줄을 새치기해요", is_correct: false },
          { id: "b", text: "차례대로 기다려요", is_correct: true },
          { id: "c", text: "친구를 밀고 먼저 타요", is_correct: false }
        ]
      },
      intermediate: {
        title: "미끄럼틀 기다릴 때",
        situation: "놀이터 미끄럼틀에 많은 친구들이 줄을 서 있어요. 지우는 빨리 타고 싶어요.",
        options: [
          { id: "a", text: "줄을 새치기한다", is_correct: false },
          { id: "b", text: "차례를 지켜 기다린다", is_correct: true },
          { id: "c", text: "다른 친구를 밀쳐서 먼저 탄다", is_correct: false }
        ]
      },
      advanced: {
        title: "공정한 차례 지키기",
        situation: "놀이터 미끄럼틀 앞에 긴 줄이 있습니다. 지우는 빨리 타고 싶지만, 공정성과 안전을 고려해야 합니다. 어떤 행동이 가장 바람직할까요?",
        options: [
          { id: "a", text: "순서를 무시하고 새치기하여 타버린다", is_correct: false },
          { id: "b", text: "질서를 지키며 차례를 기다리고, 친구들에게도 차례를 지키자고 말한다", is_correct: true },
          { id: "c", text: "친구들을 밀어내며 먼저 올라간다", is_correct: false }
        ]
      }
    },

    // 2) 그네
    swing: {
      beginner: {
        title: "그네 차례 지키기",
        situation: "친구가 그네를 계속 타고 있어요. 지우도 타고 싶어요.",
        options: [
          { id: "a", text: "그네를 흔들어 내려오게 해요", is_correct: false },
          { id: "b", text: "친구에게 잠깐 바꿔달라고 해요", is_correct: true },
          { id: "c", text: "친구를 밀어내고 타요", is_correct: false }
        ]
      },
      intermediate: {
        title: "그네를 타고 싶을 때",
        situation: "놀이터에서 지우가 그네를 타고 싶은데, 다른 친구가 계속 타고 있어요.",
        options: [
          { id: "a", text: "그네를 흔들어서 친구를 내려오게 한다", is_correct: false },
          { id: "b", text: "정중하게 잠깐 바꿔 달라고 부탁한다", is_correct: true },
          { id: "c", text: "친구를 밀어서 그네에서 내리게 한다", is_correct: false }
        ]
      },
      advanced: {
        title: "공유 놀이기구 사용하기",
        situation: "놀이터에서 한 친구가 오랫동안 그네를 타고 있습니다. 지우도 타고 싶은데, 어떻게 행동하는 것이 가장 올바를까요?",
        options: [
          { id: "a", text: "그네를 강제로 흔들어 친구를 불편하게 만든다", is_correct: false },
          { id: "b", text: "차례를 존중하며 정중하게 교대로 타자고 요청한다", is_correct: true },
          { id: "c", text: "친구를 밀쳐내고 억지로 자리를 차지한다", is_correct: false }
        ]
      }
    },

    // 3) 다친 친구
    injuredFriend: {
      beginner: {
        title: "친구가 다쳤을 때",
        situation: "친구가 미끄럼틀에서 넘어졌어요. 무릎이 아파 보여요.",
        options: [
          { id: "a", text: "웃으면서 장난쳐요", is_correct: false },
          { id: "b", text: "괜찮냐고 물어보고 선생님께 말해요", is_correct: true },
          { id: "c", text: "모른 척하고 그냥 놀아요", is_correct: false }
        ]
      },
      intermediate: {
        title: "친구가 다쳤을 때",
        situation: "미끄럼틀에서 친구가 넘어져 무릎을 다쳤어요.",
        options: [
          { id: "a", text: "재미있다며 웃는다", is_correct: false },
          { id: "b", text: "괜찮은지 확인하고 어른에게 알려준다", is_correct: true },
          { id: "c", text: "다친 것은 자기 잘못이라고 말한다", is_correct: false }
        ]
      },
      advanced: {
        title: "위험 상황에서 도움 주기",
        situation: "미끄럼틀에서 친구가 넘어져 부상을 입었습니다. 지우는 어떤 태도로 행동하는 것이 바람직할까요?",
        options: [
          { id: "a", text: "웃으며 대수롭지 않게 넘긴다", is_correct: false },
          { id: "b", text: "친구의 상태를 확인하고, 즉시 교사나 보호자에게 알린다", is_correct: true },
          { id: "c", text: "친구 잘못이라며 책임을 전가한다", is_correct: false }
        ]
      }
    }
  }
};
