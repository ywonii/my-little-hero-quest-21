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
    }
  },
  library: {
  // 1) 조용히 하기
  quiet: {
    beginner: {
      title: "조용히 해야 해요",
      situation: "도서관에서 친구랑 이야기하고 싶어요.",
      options: [
        { id: "a", text: "큰 소리로 이야기해요", is_correct: false },
        { id: "b", text: "속삭이거나 밖에 나가서 말해요", is_correct: true },
        { id: "c", text: "다른 사람들 앞에서 크게 말해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "도서관에서 이야기할 때",
      situation: "도서관에서 친구와 재미있는 이야기를 하고 싶어요.",
      options: [
        { id: "a", text: "큰 소리로 떠든다", is_correct: false },
        { id: "b", text: "작은 목소리로 조심히 말한다", is_correct: true },
        { id: "c", text: "다른 사람들을 불러 모아 함께 이야기한다", is_correct: false }
      ]
    },
    advanced: {
      title: "학습 공간 예절",
      situation: "도서관은 학습과 독서를 위한 조용한 공간입니다. 이때 지우가 취할 행동으로 올바른 것은?",
      options: [
        { id: "a", text: "흥분해서 웃거나 큰 소리로 말한다", is_correct: false },
        { id: "b", text: "조용히 하며 주변 학습 분위기를 존중한다", is_correct: true },
        { id: "c", text: "다른 사람에게 장난을 건다", is_correct: false }
      ]
    }
  },

  // 2) 책 찾기
  findBook: {
    beginner: {
      title: "책 찾기",
      situation: "책을 찾고 있는데 못 찾겠어요.",
      options: [
        { id: "a", text: "책장을 막 뒤져요", is_correct: false },
        { id: "b", text: "사서 선생님께 물어봐요", is_correct: true },
        { id: "c", text: "다른 사람이 읽는 책을 빼앗아요", is_correct: false }
      ]
    },
    intermediate: {
      title: "도서관에서 책을 찾을 때",
      situation: "읽고 싶은 책이 어디 있는지 모르겠어요.",
      options: [
        { id: "a", text: "책을 아무렇게나 꺼내본다", is_correct: false },
        { id: "b", text: "사서에게 물어본다", is_correct: true },
        { id: "c", text: "남이 보고 있는 책을 뺏는다", is_correct: false }
      ]
    },
    advanced: {
      title: "도서관 자료 이용",
      situation: "원하는 자료가 어디에 있는지 알 수 없을 때, 가장 적절한 행동은?",
      options: [
        { id: "a", text: "책장을 뒤엎으며 찾는다", is_correct: false },
        { id: "b", text: "사서에게 문의하거나 검색 시스템을 이용한다", is_correct: true },
        { id: "c", text: "남의 책을 강제로 가져온다", is_correct: false }
      ]
    }
  },

  // 3) 음식 반입
  noFood: {
    beginner: {
      title: "도서관에서 먹기",
      situation: "책을 읽다가 배고파요.",
      options: [
        { id: "a", text: "책상 밑에서 과자를 먹어요", is_correct: false },
        { id: "b", text: "밖에 나가서 먹어요", is_correct: true },
        { id: "c", text: "몰래 음식을 먹어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "도서관에서 음식을 먹고 싶을 때",
      situation: "도서관에서 공부하다가 배가 고파졌어요.",
      options: [
        { id: "a", text: "도서관 안에서 몰래 먹는다", is_correct: false },
        { id: "b", text: "밖이나 허용된 곳에서 먹는다", is_correct: true },
        { id: "c", text: "다른 사람 몰래 과자를 꺼낸다", is_correct: false }
      ]
    },
    advanced: {
      title: "공공장소 음식 규칙",
      situation: "도서관에서는 음식 섭취가 제한됩니다. 가장 적절한 행동은 무엇일까요?",
      options: [
        { id: "a", text: "배가 고프니 자리에서 바로 먹는다", is_correct: false },
        { id: "b", text: "허용된 공간에서 섭취하거나 밖에서 해결한다", is_correct: true },
        { id: "c", text: "몰래 음식을 먹으며 규칙을 어긴다", is_correct: false }
      ]
    }
  }
},
  home: {
  // 1) 식사 시간
  dinnerTime: {
    beginner: {
      title: "밥 먹는 시간",
      situation: "엄마가 밥 먹으라고 불러요. 지우는 게임하고 싶어요.",
      options: [
        { id: "a", text: "게임을 계속해요", is_correct: false },
        { id: "b", text: "게임을 끄고 밥 먹으러 가요", is_correct: true },
        { id: "c", text: "밥을 안 먹어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "집에서 식사 시간",
      situation: "저녁 식사 시간인데 게임을 하고 싶어요.",
      options: [
        { id: "a", text: "게임을 하며 식사를 미룬다", is_correct: false },
        { id: "b", text: "게임을 끄고 가족과 함께 식사한다", is_correct: true },
        { id: "c", text: "밥을 먹으면서 게임을 한다", is_correct: false }
      ]
    },
    advanced: {
      title: "가족 식사 예절",
      situation: "가족과 함께하는 저녁 식사는 중요한 시간입니다. 바람직한 태도는 무엇일까요?",
      options: [
        { id: "a", text: "개인 놀이를 계속하며 식사를 거른다", is_correct: false },
        { id: "b", text: "가족과의 대화를 존중하며 식탁에 함께 앉는다", is_correct: true },
        { id: "c", text: "식사 도중 게임을 한다", is_correct: false }
      ]
    }
  },

  // 2) 숙제와 TV
  homeworkTV: {
    beginner: {
      title: "숙제하기",
      situation: "지우는 숙제를 해야 하는데 TV 보고 싶어요.",
      options: [
        { id: "a", text: "TV부터 봐요", is_correct: false },
        { id: "b", text: "숙제를 먼저 해요", is_correct: true },
        { id: "c", text: "TV 보면서 대충 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "집에서 숙제와 TV",
      situation: "숙제를 해야 하는데 재미있는 TV 프로그램이 나와요.",
      options: [
        { id: "a", text: "TV를 먼저 본다", is_correct: false },
        { id: "b", text: "숙제를 먼저 하고 TV를 본다", is_correct: true },
        { id: "c", text: "숙제를 대충 하면서 TV를 본다", is_correct: false }
      ]
    },
    advanced: {
      title: "시간 관리 습관",
      situation: "중요한 과제를 앞두고 오락거리가 눈에 띕니다. 바람직한 시간 관리 태도는?",
      options: [
        { id: "a", text: "오락을 먼저 즐기며 과제를 미룬다", is_correct: false },
        { id: "b", text: "과제를 우선적으로 수행하고 여가를 즐긴다", is_correct: true },
        { id: "c", text: "과제를 대충 하면서 동시에 즐긴다", is_correct: false }
      ]
    }
  },

  // 3) 동생과 장난감
  toys: {
    beginner: {
      title: "장난감 나누기",
      situation: "동생이 장난감을 갖고 싶어해요.",
      options: [
        { id: "a", text: "안 준다고 해요", is_correct: false },
        { id: "b", text: "조금 나눠줘요", is_correct: true },
        { id: "c", text: "동생 장난감을 빼앗아요", is_correct: false }
      ]
    },
    intermediate: {
      title: "동생과 장난감 나누기",
      situation: "동생이 내가 가지고 노는 장난감을 원해요.",
      options: [
        { id: "a", text: "절대 안 준다고 한다", is_correct: false },
        { id: "b", text: "조금 놀고 나서 나눠서 논다", is_correct: true },
        { id: "c", text: "동생 장난감을 뺏는다", is_correct: false }
      ]
    },
    advanced: {
      title: "형제와의 관계",
      situation: "가족과의 올바른 관계를 위해 장난감을 공유해야 할 때, 지우가 바람직하게 취할 행동은?",
      options: [
        { id: "a", text: "끝까지 독점하며 거부한다", is_correct: false },
        { id: "b", text: "적절히 순서를 조율해 함께 사용한다", is_correct: true },
        { id: "c", text: "상대 물건을 빼앗는다", is_correct: false }
      ]
    }
  }
},
  hospital: {
  // 1) 주사 맞기
  injection: {
    beginner: {
      title: "주사 맞을 때",
      situation: "의사선생님이 주사를 놓으려고 해요. 지우는 무서워요.",
      options: [
        { id: "a", text: "도망가요", is_correct: false },
        { id: "b", text: "무서워도 참고 맞아요", is_correct: true },
        { id: "c", text: "선생님을 밀쳐요", is_correct: false }
      ]
    },
    intermediate: {
      title: "병원에서 주사를 맞을 때",
      situation: "의사선생님이 주사를 놓으려고 하는데 지우는 겁이 나요.",
      options: [
        { id: "a", text: "소리를 지르며 거부한다", is_correct: false },
        { id: "b", text: "겁이 나도 가만히 주사를 맞는다", is_correct: true },
        { id: "c", text: "주사를 피하려고 의사선생님을 밀친다", is_correct: false }
      ]
    },
    advanced: {
      title: "의료 처치 상황에서의 태도",
      situation: "건강을 위해 주사 처치가 필요합니다. 두려움이 크더라도 어떻게 행동하는 것이 바람직할까요?",
      options: [
        { id: "a", text: "거부하며 도망가 안전을 위협한다", is_correct: false },
        { id: "b", text: "불안하지만 의료진 지시에 따라 차분히 처치를 받는다", is_correct: true },
        { id: "c", text: "불만을 표현하며 물리적으로 저항한다", is_correct: false }
      ]
    }
  },

  // 2) 대기실 예절
  waitingRoom: {
    beginner: {
      title: "대기실에서",
      situation: "병원 대기실에서 기다려요. 지루해요.",
      options: [
        { id: "a", text: "크게 떠들어요", is_correct: false },
        { id: "b", text: "조용히 책을 봐요", is_correct: true },
        { id: "c", text: "의자 위에 뛰어요", is_correct: false }
      ]
    },
    intermediate: {
      title: "병원 대기실에서 기다릴 때",
      situation: "병원 대기실에서 오래 기다려야 해서 지루해요.",
      options: [
        { id: "a", text: "큰 소리로 떠들며 돌아다닌다", is_correct: false },
        { id: "b", text: "책을 읽거나 조용히 논다", is_correct: true },
        { id: "c", text: "다른 환자들에게 말을 걸어 방해한다", is_correct: false }
      ]
    },
    advanced: {
      title: "공공장소에서의 배려",
      situation: "대기실에서 많은 환자들이 치료 순서를 기다리고 있습니다. 어떤 행동이 적절할까요?",
      options: [
        { id: "a", text: "지루함을 참지 못하고 소란을 피운다", is_correct: false },
        { id: "b", text: "조용히 책을 읽거나 시간을 보내며 다른 사람을 배려한다", is_correct: true },
        { id: "c", text: "다른 사람에게 말을 걸어 방해한다", is_correct: false }
      ]
    }
  },

  // 3) 아픈 곳 설명
  explainPain: {
    beginner: {
      title: "아픈 곳 말하기",
      situation: "의사선생님이 어디가 아프냐고 물어봐요.",
      options: [
        { id: "a", text: "아픈 데 없다고 거짓말해요", is_correct: false },
        { id: "b", text: "아픈 곳을 말해요", is_correct: true },
        { id: "c", text: "다른 얘기를 해요", is_correct: false }
      ]
    },
    intermediate: {
      title: "진료할 때",
      situation: "의사선생님이 어디가 아픈지 물어보세요.",
      options: [
        { id: "a", text: "아픈 곳이 없다고 거짓말한다", is_correct: false },
        { id: "b", text: "아픈 곳을 정확히 설명한다", is_correct: true },
        { id: "c", text: "관계없는 이야기를 한다", is_correct: false }
      ]
    },
    advanced: {
      title: "의료진과의 소통",
      situation: "정확한 진료를 위해 환자가 아픈 부위를 설명해야 합니다. 지우의 태도로 적절한 것은 무엇일까요?",
      options: [
        { id: "a", text: "사실을 숨기고 잘못된 정보를 준다", is_correct: false },
        { id: "b", text: "아픈 곳과 증상을 정확히 전달한다", is_correct: true },
        { id: "c", text: "관련 없는 이야기를 늘어놓는다", is_correct: false }
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
