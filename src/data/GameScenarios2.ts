// src/data/GameScenarios2.ts
// 추가 난이도별( beginner / intermediate / advanced ) 시나리오 데이터

export const SCENARIOS2 = {
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
 }
};