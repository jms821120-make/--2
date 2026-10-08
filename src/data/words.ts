/**
 * Comprehensive Korean Word Dictionary & Index
 * Contains valid standard Korean nouns with short definitions and category tags.
 */

export interface WordEntry {
  word: string;
  meaning: string;
  category?: string;
  isAttack?: boolean; // Word ending in a killer syllable
}

export const WORD_LIST: WordEntry[] = [
  // ㄱ
  { word: "가구", meaning: "집안에서 생활에 쓰이는 침대, 책상, 옷장 따위의 물건", category: "생활" },
  { word: "가면", meaning: "얼굴을 감추거나 다른 모습으로 꾸미기 위해 얼굴에 쓰는 물건", category: "소품" },
  { word: "가방", meaning: "물건을 넣어 들고 다니는 용구", category: "생활" },
  { word: "가을", meaning: "여름과 겨울 사이의 계절", category: "자연" },
  { word: "가족", meaning: "혈연, 혼인 따위로 결합된 사람들의 집단", category: "사회" },
  { word: "갈매기", meaning: "바다나 호수에 사는 흰색과 잿빛의 날짐승", category: "동물" },
  { word: "감기", meaning: "바이러스로 인해 호흡기에 생기는 전염병", category: "건강" },
  { word: "감자", meaning: "땅속에서 자라는 녹말이 풍부한 식용 덩이줄기", category: "음식" },
  { word: "강아지", meaning: "개의 새끼 또는 귀여운 반려견", category: "동물" },
  { word: "개구리", meaning: "양서류 동물로 '개굴개굴' 소리를 냄", category: "동물" },
  { word: "개나리", meaning: "봄에 노란 꽃이 피는 낙엽 활엽 관목", category: "식물" },
  { word: "거울", meaning: "빛의 반사를 이용하여 물체의 형상을 비추어 보는 도구", category: "생활" },
  { word: "거북이", meaning: "단단한 등딱지를 가진 파충류 동물", category: "동물" },
  { word: "건전지", meaning: "휴대용 전기 에너지를 공급하는 전지", category: "전자기기" },
  { word: "겨울", meaning: "가을과 봄 사이의 춥고 눈 내리는 계절", category: "자연" },
  { word: "고구마", meaning: "달콤하고 녹말이 많은 덩이뿌리 작물", category: "음식" },
  { word: "고양이", meaning: "부드러운 털과 유연한 몸을 가진 애완동물", category: "동물" },
  { word: "고향", meaning: "자기가 태어나서 자란 고장", category: "인문" },
  { word: "곰돌이", meaning: "귀여운 곰 또는 곰 인형", category: "인형" },
  { word: "공책", meaning: "글씨를 쓰거나 그림을 그릴 수 있는 책", category: "문구" },
  { word: "공항", meaning: "비행기가 이착륙하고 승객이 승하차하는 곳", category: "교통" },
  { word: "과자", meaning: "곡물 가루 따위로 달거나 짜게 구워 만든 간식", category: "음식" },
  { word: "과학", meaning: "자연계의 사물과 현상을 체계적으로 관찰·연구하는 학문", category: "학문" },
  { word: "구름", meaning: "공기 중의 수증기가 엉겨 하늘에 떠 있는 것", category: "자연" },
  { word: "구슬", meaning: "동그랗고 윤이 나는 장식용 물건이나 유리알", category: "놀이" },
  { word: "국수", meaning: "밀가루 반죽을 가늘고 길게 뽑아 삶아 먹는 음식", category: "음식" },
  { word: "국화", meaning: "가을에 피는 관상용 꽃", category: "식물" },
  { word: "군인", meaning: "나라를 지키기 위해 군대에 복무하는 사람", category: "직업" },
  { word: "귀걸이", meaning: "귓불에 달아 장식하는 귀금속", category: "패션" },
  { word: "귤", meaning: "주황색 껍질을 까서 먹는 새콤달콤한 겨울 과일", category: "음식" },
  { word: "그림", meaning: "선이나 색채로 평면에 표현한 형상", category: "예술" },
  { word: "금붕어", meaning: "수조에서 기르는 붉거나 황금빛의 물고기", category: "동물" },
  { word: "기러기", meaning: "가을에 떼를 지어 날아오는 철새", category: "동물" },
  { word: "기린", meaning: "목과 다리가 아주 긴 아프리카의 초식동물", category: "동물" },
  { word: "기차", meaning: "철도 레일 위를 달리는 승객 및 화물 운송 수단", category: "교통" },
  { word: "깃발", meaning: "천에 상징이나 무늬를 넣어 장대에 매단 것", category: "사물" },
  { word: "김치", meaning: "배추나 무를 소금에 절여 고춧가루, 양념과 함께 발효시킨 음식", category: "음식" },
  { word: "꿀벌", meaning: "꽃에서 꿀을 모으고 사회생활을 하는 곤충", category: "곤충" },
  { word: "기쁨", meaning: "원하는 일이 이루어져 흐뭇하고 유쾌한 감정", category: "감정", isAttack: true },
  { word: "그릇", meaning: "음식이나 물건을 담는 기구", category: "생활", isAttack: true },

  // ㄴ
  { word: "나비", meaning: "아름다운 날개로 꽃 사이를 날아다니는 곤충", category: "곤충" },
  { word: "나무", meaning: "줄기와 가지가 단단한 목질로 이루어진 여러해살이 식물", category: "식물" },
  { word: "나침반", meaning: "자침으로 방위를 가리키는 항해·측량 도구", category: "도구" },
  { word: "낙타", meaning: "등에 혹이 있고 사막에서 짐을 나르는 동물", category: "동물" },
  { word: "낚시", meaning: "낚싯바늘과 찌로 물고기를 낚는 행위나 레저", category: "레저" },
  { word: "난로", meaning: "방 안을 따뜻하게 덥히는 난방 장치", category: "가전" },
  { word: "날개", meaning: "새나 곤충, 비행기가 하늘을 날 수 있게 하는 기관", category: "신체" },
  { word: "남극", meaning: "지구의 가장 남쪽 끝 지역과 대륙", category: "지리" },
  { word: "냄비", meaning: "음식을 끓이거나 삶을 때 쓰는 손잡이 달린 쇠 그릇", category: "주방" },
  { word: "냉장고", meaning: "음식물을 차갑게 보관하여 신선도를 유지하는 가전제품", category: "가전" },
  { word: "너구리", meaning: "개과의 야행성 털짐승으로 둥근 얼굴에 검은 반점이 있음", category: "동물" },
  { word: "노래", meaning: "가사에 가락과 리듬을 붙여 부르는 음악", category: "음악" },
  { word: "노을", meaning: "해가 질 무렵 서쪽 하늘이 붉게 물드는 현상", category: "자연" },
  { word: "녹차", meaning: "찻잎을 발효시키지 않고 덖어 우려낸 맑은 차", category: "음료" },
  { word: "놀이터", meaning: "그네, 미끄럼틀 등이 설치되어 어린이들이 노는 곳", category: "장소" },
  { word: "농구", meaning: "높은 림의 골대에 공을 던져 넣어 점수를 겨루는 구기 스포츠", category: "스포츠" },
  { word: "농부", meaning: "논밭을 갈고 농사를 짓는 사람", category: "직업" },
  { word: "눈사람", meaning: "쌓인 눈을 뭉쳐 사람 형상으로 만든 조형물", category: "놀이" },
  { word: "늑대", meaning: "개과의 사나운 야생 육식동물", category: "동물" },
  { word: "나트륨", meaning: "소금의 구성 원소인 알칼리 금속 원소 (Na)", category: "화학", isAttack: true },
  { word: "눈물", meaning: "슬프거나 기쁠 때 눈에서 흘러나오는 액체", category: "신체" },

  // ㄷ
  { word: "다람쥐", meaning: "꼬리가 크고 밤이나 도토리를 잘 까먹는 작은 설치류", category: "동물" },
  { word: "다리미", meaning: "열과 압력으로 구겨진 옷을 펴는 도구", category: "가전" },
  { word: "단풍", meaning: "가을에 나뭇잎이 붉거나 노랗게 물드는 현상", category: "자연" },
  { word: "달리기", meaning: "발을 번갈아 디디며 빠르게 앞으로 나아가는 운동", category: "스포츠" },
  { word: "달력", meaning: "날짜와 요일, 절기 따위를 기록한 표", category: "생활" },
  { word: "닭갈비", meaning: "토막 친 닭고기를 매콤한 양념에 채소와 볶은 요리", category: "음식" },
  { word: "당근", meaning: "주황색 뿌리를 식용하는 채소", category: "식품" },
  { word: "대나무", meaning: "속이 비어 있고 마디가 뚜렷하며 푸른 곧은 식물", category: "식물" },
  { word: "대통령", meaning: "공화국에서 국가 원수이자 행정부의 수반", category: "사회" },
  { word: "도서관", meaning: "많은 책과 자료를 모아 두고 읽거나 빌려주는 건물", category: "장소" },
  { word: "도시락", meaning: "밥과 반찬을 담아 가지고 다니는 그릇이나 음식", category: "음식" },
  { word: "도토리", meaning: "참나무속 나무들의 열매로 다람쥐의 주식", category: "자연" },
  { word: "독수리", meaning: "시력이 매우 뛰어나고 날카로운 발톱을 지닌 맹금류", category: "동물" },
  { word: "돌고래", meaning: "지능이 높고 초음파로 소통하는 바다 포유류", category: "동물" },
  { word: "동물원", meaning: "여러 종류의 살아 있는 동물을 모아 기르고 관람시키는 곳", category: "장소" },
  { word: "동전", meaning: "금속으로 만든 화폐", category: "경제" },
  { word: "두더지", meaning: "땅속에 굴을 파고 살며 시력이 퇴화한 작은 포유류", category: "동물" },
  { word: "두부", meaning: "콩을 갈아 간수로 굳혀 만든 하얗고 부드러운 음식", category: "음식" },
  { word: "딸기", meaning: "붉은 과육에 씨가 겉에 콕콕 박힌 달콤한 봄 과일", category: "과일" },
  { word: "떡볶이", meaning: "가래떡을 고추장 양념에 채소와 함께 볶아 끓인 한국의 대표 간식", category: "음식" },
  { word: "동녘", meaning: "동쪽 방향이나 동쪽 하늘", category: "방향", isAttack: true },
  { word: "두루미", meaning: "목과 다리가 길며 머리 꼭대기가 붉은 학", category: "동물" },

  // ㄹ
  { word: "라면", meaning: "기름에 튀긴 면을 수프와 함께 끓여 먹는 인스턴트 식품", category: "음식" },
  { word: "라디오", meaning: "전파를 수신하여 음성 방송을 들려주는 음향 기기", category: "전자기기" },
  { word: "레몬", meaning: "노란 껍질에 산미가 아주 강한 시트러스 과일", category: "과일" },
  { word: "로봇", meaning: "사람의 일을 자동으로 대신하는 기계 장치", category: "기술" },
  { word: "로켓", meaning: "가스를 고속 분사하여 우주로 날아가는 추진 비행체", category: "우주" },
  { word: "리본", meaning: "매듭을 지어 선물이나 머리를 장식하는 띠", category: "패션" },
  { word: "라일락", meaning: "향기가 은은하고 짙은 보랏빛 또는 흰빛 꽃", category: "식물" },
  { word: "라듐", meaning: "강한 방사능을 띠는 알칼리 토금속 원소 (Ra)", category: "과학", isAttack: true },
  { word: "리튬", meaning: "가장 가벼운 금속 원소로 배터리에 널리 쓰임 (Li)", category: "과학", isAttack: true },

  // ㅁ
  { word: "마술", meaning: "손재주나 특수한 도구로 신기한 눈속임을 보여주는 묘기", category: "공연" },
  { word: "마을", meaning: "여러 집이 한데 모여 살아가는 구역", category: "지리" },
  { word: "만두", meaning: "밀가루 피에 고기와 채소 소를 넣고 빚어 찌거나 구운 음식", category: "음식" },
  { word: "망원경", meaning: "먼 곳에 있는 물체를 렌즈로 확대해 보는 광학 기구", category: "과학" },
  { word: "매미", meaning: "여름철 나무에 붙어 우렁차게 우는 곤충", category: "곤충" },
  { word: "머리핀", meaning: "머리카락을 고정하거나 장식하는 작은 핀", category: "패션" },
  { word: "메뚜기", meaning: "뒷다리가 길어 멀리 뛰는 초록빛 곤충", category: "곤충" },
  { word: "모자", meaning: "머리에 쓰는 패션 및 햇빛 차단용 소품", category: "패션" },
  { word: "목도리", meaning: "목을 따뜻하게 감싸는 방한용 긴 천", category: "의류" },
  { word: "무지개", meaning: "비 온 뒤 햇빛이 물방울에 굴절되어 하늘에 생기는 일곱 빛깔 호", category: "자연" },
  { word: "문어", meaning: "여덟 개의 다리에 빨판이 달린 바다 연체동물", category: "수산" },
  { word: "물방울", meaning: "동글동글 맺힌 물의 작은 방울", category: "자연" },
  { word: "미술관", meaning: "회화, 조각 등의 미술 작품을 전시하는 장소", category: "문화" },
  { word: "미역국", meaning: "생일에 먹는 미역을 넣고 맑게 끓인 국", category: "음식" },
  { word: "무릎", meaning: "넓적다리와 정강이 사이의 관절 부분", category: "신체", isAttack: true },

  // ㅂ
  { word: "바다", meaning: "지구 표면의 대부분을 덮고 있는 짠물의 큰 물줄기", category: "자연" },
  { word: "바나나", meaning: "껍질이 노랗고 부드러운 열대 과일", category: "과일" },
  { word: "바람개비", meaning: "바람을 받으면 뱅글뱅글 돌아가는 날개 달린 장난감", category: "놀이" },
  { word: "박쥐", meaning: "날개막으로 밤하늘을 날아다니는 유일한 날개 포유류", category: "동물" },
  { word: "반딧불이", meaning: "밤에 꽁무니에서 맑은 빛을 내는 곤충 (개똥벌레)", category: "곤충" },
  { word: "발자국", meaning: "걸어갈 때 땅에 남는 발 모양의 흔적", category: "흔적" },
  { word: "밤하늘", meaning: "별과 달이 총총히 빛나는 밤의 하늘", category: "자연" },
  { word: "밥그릇", meaning: "밥을 담는 오목한 식기", category: "식기", isAttack: true },
  { word: "방울토마토", meaning: "한입 크기로 방울처럼 작고 달콤한 토마토", category: "채소" },
  { word: "배구", meaning: "네트를 사이에 두고 손으로 공을 쳐 넘기는 구기 종목", category: "스포츠" },
  { word: "백조", meaning: "물 위를 우아하게 헤엄치는 흰색 큰 새 (고니)", category: "동물" },
  { word: "버섯", meaning: "그늘지고 습한 곳에서 자라는 갓 달린 균류", category: "식물" },
  { word: "버스", meaning: "많은 승객을 태우고 정해진 노선을 운행하는 대형 자동차", category: "교통" },
  { word: "벚꽃", meaning: "봄에 흐드러지게 피어 흩날리는 연분홍 꽃", category: "식물" },
  { word: "보물선", meaning: "바다 밑에 침몰한 보물을 실은 배", category: "모험" },
  { word: "복숭아", meaning: "껍질에 보송보송 털이 있고 과즙이 풍부한 여름 과일", category: "과일" },
  { word: "볼펜", meaning: "끝부분에 작은 볼이 굴러가며 잉크가 나오는 필기도구", category: "문구" },
  { word: "부엉이", meaning: "밤눈이 밝고 귀깃이 쫑긋 서 있는 야행성 조류", category: "동물" },
  { word: "부엌", meaning: "음식을 만들고 조리하는 방이나 공간", category: "가정", isAttack: true },
  { word: "비눗방울", meaning: "비눗물에 빨대를 대고 불면 공중에 둥둥 뜨는 방울", category: "놀이" },
  { word: "비행기", meaning: "날개와 엔진의 양력으로 공중을 날아다니는 항공기", category: "교통" },

  // ㅅ
  { word: "사과", meaning: "새콤달콤하고 아삭아삭한 붉은 껍질의 대표 과일", category: "과일" },
  { word: "사자", meaning: "풍성한 갈기를 지닌 '백수의 왕' 맹수", category: "동물" },
  { word: "사진기", meaning: "렌즈를 통해 필름이나 센서에 영상을 담는 카메라", category: "기기" },
  { word: "산토끼", meaning: "귀가 길고 깡충깡충 뛰어다니는 산 속 초식동물", category: "동물" },
  { word: "상어", meaning: "날카로운 이빨과 등지느러미를 가진 바다의 포식자", category: "어류" },
  { word: "새벽녘", meaning: "날이 밝아 올 무렵의 이른 아침", category: "시간", isAttack: true },
  { word: "샌드위치", meaning: "빵 사이에 햄, 치즈, 채소 등을 끼워 먹는 음식", category: "음식" },
  { word: "선물", meaning: "고마움이나 축하의 마음을 담아 남에게 주는 물건", category: "문화" },
  { word: "선풍기", meaning: "회전하는 날개로 시원한 바람을 일으키는 가전제품", category: "가전" },
  { word: "설탕", meaning: "사탕수수나 사탕무에서 추출한 달콤한 조미료", category: "식품" },
  { word: "소나무", meaning: "사계절 내내 푸른 바늘잎을 지닌 상록 침엽수", category: "식물" },
  { word: "소방차", meaning: "화재를 진압하고 인명을 구조하기 위한 긴급 출동 차량", category: "교통" },
  { word: "손목시계", meaning: "손목에 차고 다니며 시간을 확인하는 시계", category: "패션" },
  { word: "수박", meaning: "초록색 줄무늬 껍질 속에 붉고 시원한 과육이 든 여름 과일", category: "과일" },
  { word: "수수께끼", meaning: "어떤 사물이나 사실을 빗대어 묻고 맞히는 놀이", category: "놀이" },
  { word: "수첩", meaning: "간단한 메모나 일정을 적어 들고 다니는 작은 공책", category: "문구" },
  { word: "스마트폰", meaning: "컴퓨터 기능과 인터넷 검색이 가능한 다기능 휴대전화", category: "IT" },
  { word: "스케이트", meaning: "빙판 위를 미끄러지듯 달릴 수 있는 날 달린 신발", category: "스포츠" },
  { word: "슬리퍼", meaning: "실내나 가까운 곳에서 편하게 신는 뒷굽 없는 신발", category: "생활" },
  { word: "시계", meaning: "시, 분, 초를 나타내어 시간을 알려주는 기계", category: "도구" },
  { word: "신호등", meaning: "빨강, 노랑, 초록 불빛으로 도로의 통행을 지시하는 등", category: "교통" },

  // ㅇ
  { word: "아기", meaning: "태어난 지 얼마 되지 않은 어린아이", category: "사람" },
  { word: "아이스크림", meaning: "우유와 당분을 얼려 만든 차갑고 부드러운 빙과류", category: "간식" },
  { word: "악어", meaning: "강가나 늪지대에 살며 단단한 비늘을 지닌 대형 파충류", category: "동물" },
  { word: "안경", meaning: "시력을 교정하거나 눈을 보호하기 위해 쓰는 렌즈 도구", category: "잡화" },
  { word: "알루미늄", meaning: "가볍고 내구성이 우수하여 캔이나 창틀에 쓰이는 은백색 금속", category: "금속", isAttack: true },
  { word: "양말", meaning: "발을 보호하고 땀을 흡수하기 위해 신는 천", category: "의류" },
  { word: "양초", meaning: "파라핀이나 밀랍에 심지를 꽂아 불을 밝히는 도구", category: "생활" },
  { word: "어린이", meaning: "자라나는 어린 아이들을 대접하여 부르는 말", category: "사람" },
  { word: "얼룩말", meaning: "몸 전체에 흑백 줄무늬가 있는 아프리카 초원 말", category: "동물" },
  { word: "에어컨", meaning: "실내 온도를 시원하게 낮춰주는 냉방 기계", category: "가전" },
  { word: "여우", meaning: "귀가 뾰족하고 꼬리가 덥수룩한 꾀 많은 갯과의 동물", category: "동물" },
  { word: "여름", meaning: "봄과 가을 사이의 무덥고 푸르른 계절", category: "자연" },
  { word: "연필", meaning: "흑연 심을 나무로 감싼 필기도구", category: "문구" },
  { word: "오렌지", meaning: "비타민C가 풍부한 둥글고 주황빛인 과일", category: "과일" },
  { word: "오리", meaning: "물갈퀴가 있어 헤엄을 잘 치고 꽥꽥 우는 물새", category: "조류" },
  { word: "오로라", meaning: "극지방 밤하늘에 커튼처럼 너울거리는 신비한 빛무리", category: "우주" },
  { word: "옥수수", meaning: "낟알이 노랗게 알알이 박힌 볏과의 식용 식물", category: "작물" },
  { word: "온도계", meaning: "물체의 차갑고 더운 정도를 재는 계측 도구", category: "도구" },
  { word: "올빼미", meaning: "동그란 얼굴에 깃털이 부드러운 밤의 맹금류", category: "동물" },
  { word: "요구르트", meaning: "유산균을 발효시켜 새콤하고 달콤한 유제품", category: "음식" },
  { word: "우산", meaning: "비를 맞지 않도록 머리 위로 펼쳐 쓰는 도구", category: "생활" },
  { word: "우주선", meaning: "대기권을 벗어나 우주 공간을 비행하는 탈것", category: "우주" },
  { word: "운동화", meaning: "운동할 때 발을 편하게 감싸주는 신발", category: "패션" },
  { word: "원숭이", meaning: "나무를 잘 타고 지능이 높은 영장류 동물", category: "동물" },
  { word: "유치원", meaning: "취학 전 유아를 교육하는 교육 기관", category: "교육" },
  { word: "음악", meaning: "소리를 바탕으로 인간의 사상과 감정을 표현하는 예술", category: "예술" },
  { word: "의사", meaning: "병을 진찰하고 치료해 주는 자격을 가진 사람", category: "직업" },
  { word: "이야기", meaning: "어떤 사물이나 사람의 경험을 재미있게 말하는 것", category: "문학" },
  { word: "인형", meaning: "사람이나 동물의 모습을 본떠 만든 놀이용 조형물", category: "장난감" },
  { word: "잎사귀", meaning: "줄기나 가지에 붙어 있는 풀이나 나무의 잎", category: "식물" },

  // ㅈ
  { word: "자동차", meaning: "원동기로 바퀴를 굴려 도로를 달리는 차량", category: "교통" },
  { word: "자전거", meaning: "발로 페달을 밟아 체인을 돌려 나아가는 두 바퀴 탈것", category: "교통" },
  { word: "자석", meaning: "쇠붙이를 끌어당기는 성질을 가진 물체", category: "과학" },
  { word: "잠자리", meaning: "투명한 네 장의 날개로 공중을 비행하는 곤충", category: "곤충" },
  { word: "장갑", meaning: "손을 따뜻하게 하거나 보호하기 위해 끼는 물건", category: "패션" },
  { word: "장미", meaning: "줄기에 가시가 있고 향기롭고 화려한 꽃", category: "식물" },
  { word: "장난감", meaning: "아이들이 가지고 놀며 즐길 수 있도록 만든 물건", category: "놀이" },
  { word: "전화기", meaning: "먼 곳에 있는 사람과 음성으로 통화할 수 있는 기계", category: "통신" },
  { word: "점토", meaning: "모양을 빚기 좋은 찰진 흙이나 공예용 찰흙", category: "미술" },
  { word: "제비", meaning: "봄에 강남에서 날아와 처마 밑에 집을 짓는 철새", category: "조류" },
  { word: "지도", meaning: "지표면의 상태나 지형을 기호로 축소해 그린 그림", category: "지리" },
  { word: "지우개", meaning: "연필로 쓴 글씨나 그림을 문질러 지우는 도구", category: "문구" },
  { word: "지하철", meaning: "지하에 철도를 놓아 전동차를 운행하는 대중교통", category: "교통" },
  { word: "진달래", meaning: "봄철 산에 연분홍빛으로 무리 지어 피는 꽃", category: "식물" },

  // ㅊ
  { word: "창문", meaning: "빛과 바람이 들어오도록 벽에 낸 창", category: "건축" },
  { word: "채송화", meaning: "햇빛을 받으면 알록달록 활짝 피어나는 한해살이풀", category: "식물" },
  { word: "책상", meaning: "책을 읽거나 공부할 때 쓰는 가구", category: "가구" },
  { word: "책가방", meaning: "공책과 책을 넣어 메는 학생들의 가방", category: "학생" },
  { word: "철도", meaning: "기차가 다닐 수 있도록 쇠로 만든 레일을 깐 길", category: "교통" },
  { word: "촛불", meaning: "초의 심지에 붙은 불빛", category: "생활" },
  { word: "축구", meaning: "열한 명이 한 팀이 되어 발로 공을 차서 골대에 넣는 스포츠", category: "스포츠" },
  { word: "치즈", meaning: "우유의 단백질을 굳혀 발효시킨 고소한 유제품", category: "음식" },
  { word: "칠판", meaning: "분필로 글씨나 그림을 쓸 수 있는 검거나 초록색 판", category: "학교" },
  { word: "침대", meaning: "누워서 편안하게 잠을 잘 수 있도록 만든 가구", category: "가구" },

  // ㅋ
  { word: "카메라", meaning: "사진이나 동영상을 촬영하는 기계", category: "전자기기" },
  { word: "카페", meaning: "커피와 차, 디저트를 마시며 쉬어가는 장소", category: "장소" },
  { word: "칼륨", meaning: "생물체에 필수적인 알칼리 금속 원소 (포타슘)", category: "과학", isAttack: true },
  { word: "컴퓨터", meaning: "다양한 프로그램을 실행하고 정보를 처리하는 전자기기", category: "IT" },
  { word: "컵라면", meaning: "일회용 용기에 든 편리한 즉석 라면", category: "음식" },
  { word: "케이크", meaning: "생일이나 축하할 때 먹는 달콤하고 부드러운 빵", category: "디저트" },
  { word: "코끼리", meaning: "긴 코를 손처럼 자유자재로 쓰는 거대한 육상 동물", category: "동물" },
  { word: "코알라", meaning: "유칼립투스 잎을 먹으며 나무 위에서 잠자는 호주 동물", category: "동물" },
  { word: "쿠키", meaning: "밀가루 반죽을 작고 바삭하게 구워낸 과자", category: "디저트" },
  { word: "크레파스", meaning: "어린이들이 그림을 그릴 때 쓰는 유성 막대 안료", category: "문구" },
  { word: "키위", meaning: "갈색 털 껍질 속에 초록빛 새콤달콤한 과육이 든 과일", category: "과일" },

  // ㅌ
  { word: "타악기", meaning: "두드리거나 쳐서 소리를 내는 북, 심벌즈 등의 악기", category: "음악" },
  { word: "탁구", meaning: "작은 탁자 위에서 라켓으로 셀룰로이드 공을 주고받는 경기", category: "스포츠" },
  { word: "태극기", meaning: "대한민국의 국기로 태극 문양과 사괘가 있음", category: "국가" },
  { word: "태양", meaning: "태양계의 중심에서 스스로 빛과 열을 내는 항성", category: "우주" },
  { word: "토끼", meaning: "귀가 길고 풀을 뜯어 먹으며 점프를 잘하는 동물", category: "동물" },
  { word: "토마토", meaning: "붉고 즙이 많은 가지과의 열매 채소", category: "식품" },
  { word: "통나무", meaning: "가지를 치고 껍질째 벤 굵은 나무 기둥", category: "자재" },
  { word: "트럭", meaning: "짐과 화물을 싣고 나르는 대형 자동차", category: "교통" },
  { word: "티셔츠", meaning: "T자 모양의 편안한 반소매 윗옷", category: "의류" },

  // ㅍ
  { word: "파도", meaning: "바람이 불어 바다 표면이 출렁이며 밀려오는 물결", category: "자연" },
  { word: "파라솔", meaning: "해변이나 야외에서 햇빛을 가려주는 대형 양산", category: "레저" },
  { word: "파인애플", meaning: "가시 같은 겉껍질에 달고 시원한 노란 과육이 든 열대 과일", category: "과일" },
  { word: "판다", meaning: "대나무를 좋아하고 눈 주위가 검은 귀여운 곰과의 동물", category: "동물" },
  { word: "팽이", meaning: "채찍이나 손으로 굴려 뾰족한 끝으로 뱅뱅 도는 완구", category: "놀이" },
  { word: "포도", meaning: "알알이 송이를 이룬 보랏빛이나 청색의 달콤한 과일", category: "과일" },
  { word: "표범", meaning: "매화 모양의 얼룩 반점이 있는 날렵한 맹수", category: "동물" },
  { word: "풍선", meaning: "고무 주머니에 공기나 헬륨을 넣어 부풀린 물건", category: "놀이" },
  { word: "피아노", meaning: "건반을 누르면 해머가 현을 때려 맑은 화음을 내는 악기", category: "악기" },
  { word: "피자", meaning: "둥근 도우 위에 치즈와 여러 토핑을 얹어 구운 서양 요리", category: "음식" },

  // ㅎ
  { word: "하늘", meaning: "지표면 위로 끝없이 넓게 펼쳐진 푸른 공간", category: "자연" },
  { word: "하마", meaning: "물속에서 주로 지내며 입이 아주 큰 대형 포유류", category: "동물" },
  { word: "하루", meaning: "한낮과 한밤이 한 번 바뀌는 스물네 시간", category: "시간" },
  { word: "한복", meaning: "곡선의 아름다움을 살린 한국 고유의 전통 의상", category: "의류" },
  { word: "해바라기", meaning: "해를 향해 고개를 돌리는 커다란 노란 꽃", category: "식물" },
  { word: "해변", meaning: "바다와 맞닿아 있는 모래사장이나 자갈밭", category: "자연" },
  { word: "해질녘", meaning: "서쪽으로 해가 뉘엿뉘엿 지는 황혼 무렵", category: "자연", isAttack: true },
  { word: "햄버거", meaning: "둥근 빵 사이에 고기 패티와 양상추를 넣은 샌드위치", category: "음식" },
  { word: "호랑이", meaning: "검은 줄무늬와 위풍당당한 용맹함을 지닌 야생 맹수", category: "동물" },
  { word: "호수", meaning: "땅이 움푹 파여 물이 넓고 깊게 고인 자연 수역", category: "지리" },
  { word: "화분", meaning: "꽃이나 작은 식물을 심어 가꾸는 용기", category: "원예" },
  { word: "황금", meaning: "변하지 않고 누런 광채를 지닌 귀한 금속", category: "광물" },
  { word: "회전목마", meaning: "음악에 맞춰 오르내리며 빙글빙글 도는 놀이기구", category: "놀이공원" },
  { word: "휴대폰", meaning: "손에 들고 다니며 어디서나 통화할 수 있는 휴대전화", category: "IT" },

  // Additional rich words connecting diverse Korean syllables
  { word: "기압", meaning: "지구를 둘러싼 대기가 누르는 압력", category: "과학" },
  { word: "압력", meaning: "물체의 면에 수직으로 미치는 힘의 크기", category: "물리" },
  { word: "역도", meaning: "바벨을 들어 올려 무게를 겨루는 스포츠", category: "스포츠" },
  { word: "도자기", meaning: "흙을 빚어 높은 온도에서 구워낸 그릇이나 예술품", category: "공예" },
  { word: "기린", meaning: "키가 크고 목이 긴 초식동물", category: "동물" },
  { word: "인간", meaning: "생각하고 언어를 사용하며 도구를 만드는 존재", category: "인문" },
  { word: "간식", meaning: "끼니와 끼니 사이에 간단히 먹는 음식", category: "음식" },
  { word: "식사", meaning: "아침, 점심, 저녁에 밥과 반찬을 챙겨 먹는 일", category: "생활" },
  { word: "사자성어", meaning: "한자 네 글자로 이루어진 교훈이나 풍자의 성어", category: "문학" },
  { word: "어항", meaning: "금붕어나 열대어를 기르는 유리 수조", category: "생활" },
  { word: "항구", meaning: "배가 안전하게 정박하고 승객과 화물이 드나드는 곳", category: "교통" },
  { word: "구조대", meaning: "재난이나 조난 현장에서 사람을 구하는 전문 대원들", category: "안전" },
  { word: "대장", meaning: "어떤 무리나 단체를 지휘하고 이끄는 우두머리", category: "사회" },
  { word: "장화", meaning: "비가 오거나 물가에서 신는 목이 긴 고무신", category: "신발" },
  { word: "화가", meaning: "그림을 전문적으로 그리는 예술가", category: "예술" },
  { word: "가수", meaning: "노래를 전문적으로 부르는 대중 예술인", category: "음악" },
  { word: "수영", meaning: "물속에서 헤엄을 치는 운동이나 놀이", category: "스포츠" },
  { word: "영웅", meaning: "뛰어난 재능과 용기로 어려운 일을 해내는 사람", category: "인물" },
  { word: "웅덩이", meaning: "비가 와서 오목하게 파인 땅에 물이 고인 곳", category: "자연" },
  { word: "이슬", meaning: "밤사이 풀잎이나 나뭇잎에 맺히는 맑은 물방울", category: "자연" },
  { word: "슬기", meaning: "사리를 바르게 판단하고 일을 잘 처리하는 지혜", category: "인성" },
  { word: "기차표", meaning: "기차를 타기 위해 사는 승차권", category: "교통" },
  { word: "표범", meaning: "날렵하고 사냥을 잘하는 얼룩무늬 맹수", category: "동물" },
  { word: "범선", meaning: "돛을 달아 바람의 힘으로 항해하는 배", category: "해양" },
  { word: "선장", meaning: "선박의 운항과 선원을 총괄 지휘하는 최고 책임자", category: "직업" },
  { word: "장구", meaning: "허리가 잘록하고 양쪽에 가죽을 댄 한국의 전통 타악기", category: "전통" },
  { word: "구슬땀", meaning: "이마에 방울방울 맺히는 땀", category: "신체" },
  { word: "땀방울", meaning: "구슬처럼 맺힌 땀", category: "신체" },
  { word: "울타리", meaning: "풀이나 나무, 철조망으로 둘러막은 경계", category: "시설" },
  { word: "리듬", meaning: "소리의 셈여림과 장단이 규칙적으로 반복되는 음악적 흐름", category: "음악" },
  { word: "음료수", meaning: "갈증을 해소하기 위해 마시는 맑은 물이나 즙", category: "음료" },
  { word: "수박화채", meaning: "수박을 한입 크기로 썰어 얼음과 우유, 사이다에 띄운 여름 간식", category: "음식" },
  { word: "채점", meaning: "시험지나 과제의 점수를 매기는 일", category: "교육" },
  { word: "점심", meaning: "낮 열두 시 무렵에 먹는 끼니", category: "생활" },
  { word: "심장", meaning: "온몸에 혈액을 순환시키는 펌프 역할을 하는 기관", category: "인체" },
  { word: "장난", meaning: "재미나 장난기를 부려 하는 놀이나 행위", category: "놀이" },
  { word: "난초", meaning: "은은한 향과 고결한 자태를 지닌 화초", category: "식물" },
  { word: "초록색", meaning: "싱그러운 풀잎처럼 푸른 자연의 색채", category: "색상" },
  { word: "색연필", meaning: "알록달록 여러 가지 색깔의 심이 든 연필", category: "문구" },
  { word: "필통", meaning: "연필, 지우개 등의 학용품을 넣어 보관하는 통", category: "문구" },
  { word: "통화", meaning: "전화로 서로 말을 주고받음", category: "통신" },
  { word: "화요일", meaning: "월요일 다음, 수요일 앞의 요일", category: "시간" },
  { word: "일기장", meaning: "그날 겪은 일과 생각을 날마다 적는 공책", category: "문구" },
  { word: "장미꽃", meaning: "향기롭고 아름다운 붉은 장미의 꽃송이", category: "식물" },
  { word: "꽃병", meaning: "생화나 조화를 꽂아 두는 화병", category: "소품" },
  { word: "병원", meaning: "의사가 환자를 진찰하고 병을 고치는 시설", category: "의료" },
  { word: "원격수업", meaning: "인터넷이나 컴퓨터를 통해 멀리서 받는 강의", category: "IT" },
  { word: "업적", meaning: "노력하여 이루어 낸 훌륭한 일이나 공로", category: "사회" },
  { word: "적토마", meaning: "하루에 천 리를 달릴 수 있다는 붉은 명마", category: "역사" },
  { word: "마라톤", meaning: "42.195km를 쉬지 않고 달리는 장거리 육상 경기", category: "스포츠" },
  { word: "통신", meaning: "우편이나 전파 따위로 소식이나 신호를 주고받음", category: "통신" },
  { word: "신발", meaning: "발에 신고 길을 걷는 신의 통칭", category: "패션" },
  { word: "발명", meaning: "새로운 기술이나 물건을 처음으로 생각해 냄", category: "창의" },
  { word: "명절", meaning: "해마다 지키는 명절날 (설날, 추석 등)", category: "전통" },
  { word: "절약", meaning: "돈이나 물건을 아껴서 씀", category: "생활" },
  { word: "약속", meaning: "서로 무엇을 어떻게 하기로 미리 정함", category: "관계" },
  { word: "속담", meaning: "예로부터 전해 내려오는 교훈을 담은 짧은 격언", category: "언어" },
  { word: "담임선생님", meaning: "한 학급을 맡아 지도하는 교사", category: "학교" },
  { word: "님프", meaning: "신화에 등장하는 숲과 샘의 아름다운 요정", category: "신화" },
  { word: "프랑스", meaning: "유럽 서부에 위치한 에펠탑과 예술의 나라", category: "지리" },
  { word: "스마트워치", meaning: "심박수나 알림을 확인할 수 있는 첨단 손목시계", category: "IT" },
  { word: "치과", meaning: "이와 잇몸의 질환을 치료하는 병원 과목", category: "의료" },
  { word: "과제", meaning: "선생님이 학생에게 내주는 숙제나 탐구 과업", category: "교육" },
  { word: "제목", meaning: "책이나 글, 그림 등에 붙인 이름", category: "문학" },
  { word: "목걸이", meaning: "목에 걸어 아름답게 꾸미는 장신구", category: "패션" },
  { word: "이불", meaning: "잠잘 때 몸을 덮는 폭신한 침구", category: "침구" },
  { word: "불꽃놀이", meaning: "밤하늘에 화약 불꽃을 쏘아 올려 화려하게 감상하는 놀이", category: "축제" },
  { word: "이모티콘", meaning: "감정을 기호나 그림으로 표현한 귀여운 아이콘", category: "IT" },
  { word: "콘서트", meaning: "음악인들이 무대에서 관객들에게 펼치는 라이브 공연", category: "공연" },
  { word: "트램펄린", meaning: "탄력 있는 매트 위에서 높이 뛰어오르는 놀이기구 (방방)", category: "놀이" },
  { word: "린스", meaning: "머리를 감은 후 머릿결을 부드럽게 헹구는 용품", category: "생활" },
  { word: "스케치북", meaning: "그림을 그리기 위해 두꺼운 백지를 묶은 책", category: "문구" },
  { word: "북극곰", meaning: "북극의 얼음 위에서 살아가는 하얀 털의 북극 맹수", category: "동물" },
  { word: "곰팡이", meaning: "습한 곳에서 포자로 번식하는 미생물 균류", category: "생물" },
  { word: "이삭", meaning: "벼나 보리 따위의 곡식 줄기 끝에 달린 열매", category: "농업" },
  { word: "삭도", meaning: "공중에 와이어를 걸어 캐빈을 운행하는 케이블카", category: "교통" },
  { word: "도미노", meaning: "줄지어 세운 블록을 하나 쓰러뜨려 연쇄적으로 넘어뜨리는 놀이", category: "놀이" },
  { word: "노트북", meaning: "휴대하기 편한 접이식 개인용 컴퓨터", category: "IT" },
  { word: "북극", meaning: "지구의 가장 북쪽 끝 지점", category: "지리" },
  { word: "극지방", meaning: "남극과 북극 주변의 몹시 추운 지역", category: "지리" },
  { word: "방패", meaning: "적의 칼이나 화살을 막아내는 방어용 무구", category: "역사" },
  { word: "패스", meaning: "공을 팀 동료에게 건네는 동작", category: "스포츠" },
  { word: "스케이트보드", meaning: "바퀴 달린 널판 위에 올라타서 타는 레저 기구", category: "스포츠" },
  { word: "드라마", meaning: "배우들이 등장인물로 연기하는 방송 극", category: "문화" },
  { word: "마술사", meaning: "신기한 마술을 펼쳐 보이는 사람", category: "직업" },
  { word: "사탕", meaning: "설탕을 끓여 굳힌 달콤하고 딱딱한 과자", category: "간식" },
  { word: "탕수육", meaning: "돼지고기를 튀겨 새콤달콤한 소스를 부어 먹는 중화요리", category: "음식" },
  { word: "육교", meaning: "길을 건너기 위해 공중에 설치한 다리", category: "교통" },
  { word: "교실", meaning: "선생님과 학생들이 모여 수업을 듣는 방", category: "학교" },
  { word: "실내화", meaning: "건물 안에서 발을 편하게 감싸주는 신발", category: "생활" },
  { word: "화석", meaning: "옛 생물의 뼈나 자국이 지층에 남아 굳어진 것", category: "과학" },
  { word: "석양", meaning: "저녁 무렵에 지는 붉은 해", category: "자연" },
  { word: "양치질", meaning: "칫솔에 치약을 묻혀 치아를 깨끗이 닦는 일", category: "건강" },
  { word: "질문", meaning: "궁금한 것을 알기 위해 상대에게 물어봄", category: "대화" },
  { word: "문학", meaning: "언어를 예술적 재료로 삼아 인간의 삶을 표현한 예술", category: "학문" },
  { word: "학용품", meaning: "공부하는 데 필요한 필통, 지우개, 연필 따위의 물건", category: "문구" },
  { word: "품질", meaning: "물건의 성질이나 바탕의 우수한 정도", category: "산업" },
  { word: "질서", meaning: "혼란 없이 규칙을 잘 지키는 상태", category: "사회" },
  { word: "서점", meaning: "다양한 분야의 책을 파는 가게", category: "상점" },
  { word: "점토공예", meaning: "점토를 조물조물 빚어 만드는 미술 공예", category: "예술" },
  { word: "예술가", meaning: "그림, 조각, 음악 등 예술 활동을 하는 사람", category: "직업" },
  { word: "가로등", meaning: "밤길을 밝혀주기 위해 길가에 세운 전등", category: "시설" },
  { word: "등대", meaning: "밤바다를 항해하는 배들에게 빛을 비추어 길을 인도하는 탑", category: "해양" },
  { word: "대장간", meaning: "쇠를 달구어 낫, 칼 따위의 도구를 만들던 곳", category: "전통" },
  { word: "간판", meaning: "상점이나 건물의 이름을 알리기 위해 걸어 둔 판", category: "광고" },
  { word: "판소리", meaning: "소리꾼이 북 장단에 맞추어 이야기를 노래하는 한국 전통 성악", category: "음악" },
  { word: "리모컨", meaning: "원거리에서 텔레비전이나 에어컨을 조작하는 무선 기기", category: "기기" },
  { word: "컨테이너", meaning: "화물을 안전하게 실어 나르기 위한 대형 규격 상자", category: "물류" },
  { word: "너구리굴", meaning: "너구리가 서식하는 땅속 굴", category: "자연" },
  { word: "굴뚝", meaning: "난로의 연기를 밖으로 내보내는 통로", category: "건축" },
  { word: "뚝배기", meaning: "오랫동안 온기를 보존하는 질그릇 냄비", category: "식기" },
  { word: "기압계", meaning: "공기의 압력을 재는 과학 측정 기구", category: "과학" },
  { word: "계란", meaning: "닭이 낳은 알 (달걀)", category: "음식" },
  { word: "란제리", meaning: "여성용 속옷", category: "의류" },
  { word: "리듬체조", meaning: "볼, 후프 등을 활용해 음악에 맞춰 표현하는 체조", category: "스포츠" },
  { word: "조약돌", meaning: "물가에서 물결에 닳아 동글동글해진 작은 돌", category: "자연" },
  { word: "돌담", meaning: "돌을 층층이 쌓아 올린 담장", category: "건축" },
  { word: "담요", meaning: "보온을 위해 무릎이나 몸에 덮는 두터운 털천", category: "생활" },
  { word: "요술봉", meaning: "마술을 부릴 때 사용하는 신비한 막대기", category: "소품" },
  { word: "봉사활동", meaning: "대가 없이 남을 돕는 보람 있는 활동", category: "사회" },
  { word: "동화책", meaning: "아이들의 꿈과 상상력을 키워주는 이야기책", category: "도서" },
  { word: "책갈피", meaning: "읽던 페이지를 표시해 두는 얇은 표식", category: "문구" },
  { word: "피리", meaning: "구멍에 입김을 불어 맑은 소리를 내는 한국 전통 관악기", category: "악기" },
  { word: "리본공예", meaning: "예쁜 리본 끈을 엮어 꽃이나 장식품을 만드는 공예", category: "취미" },
  { word: "예절", meaning: "사람과 사람 사이에 마땅히 지켜야 할 바른 도리", category: "도덕" },
  { word: "절벽", meaning: "바위가 수직으로 깎아지른 듯 높이 솟은 낭떠러지", category: "자연" },
  { word: "벽화", meaning: "건물의 벽이나 바위 면에 그린 그림", category: "미술" },
  { word: "화산", meaning: "마그마와 가스가 땅속에서 뿜어져 나오는 산", category: "지구" },
  { word: "산림", meaning: "나무가 빽빽하게 우거진 숲", category: "자연" },
  { word: "림프절", meaning: "면역 세포가 모여 있는 림프관의 결절 부위", category: "의학" },
  { word: "절기", meaning: "태양의 움직임에 따라 한 해를 스물넷으로 나눈 기점", category: "문화" },
  { word: "기러기목", meaning: "조류의 한 목으로 기러기와 오리가 속함", category: "동물" },
  { word: "목수", meaning: "나무를 다루어 집을 짓거나 가구를 만드는 장인", category: "직업" },
  { word: "수첩", meaning: "손에 쥐기 쉬운 작은 공책", category: "문구" },
  { word: "첩경", meaning: "어떤 목적에 빠르게 이르는 지름길", category: "어휘" },
  { word: "경치", meaning: "눈앞에 펼쳐지는 아름다운 자연의 풍경", category: "자연" },
  { word: "치약", meaning: "칫솔에 묻혀 양치질할 때 쓰는 연마제", category: "생활" },
  { word: "약국", meaning: "의약품을 조제하고 판매하는 곳", category: "의료" },
  { word: "국민", meaning: "어떤 국가를 구성하는 사람", category: "사회" },
  { word: "민들레", meaning: "노란 꽃이 피고 하얀 깃털 씨앗이 바람에 날리는 들꽃", category: "식물" },
  { word: "레모네이드", meaning: "레몬즙에 탄산수나 물, 꿀을 탄 청량음료", category: "음료" },
  { word: "드론", meaning: "무선 전파로 조종하는 무인 비행체", category: "IT" },
  { word: "론볼", meaning: "잔디밭에서 둥근 공을 굴리는 스포츠", category: "스포츠" },
  { word: "볼펜", meaning: "구르는 작은 금속 볼로 쓰는 펜", category: "문구" },
  { word: "펜싱", meaning: "가늘고 긴 검으로 공격과 방어를 겨루는 스포츠", category: "스포츠" },
  { word: "싱크대", meaning: "부엌에서 설거지와 음식 조리를 하는 수전 설비", category: "주방" },
  { word: "대나무숲", meaning: "대나무가 울창하게 우거진 시원한 숲", category: "자연" },
  { word: "숲속", meaning: "나무들이 우거진 숲의 안쪽", category: "자연" },
  { word: "속도", meaning: "물체가 단위 시간 동안 움직인 빠르기", category: "물리" },
  { word: "도로", meaning: "사람과 차가 안전하게 다닐 수 있도록 닦아 놓은 길", category: "교통" },
  { word: "로봇청소기", meaning: "스스로 돌아다니며 먼지를 빨아들이는 스마트 청소기", category: "가전" },
  { word: "기온", meaning: "공기의 온도", category: "날씨" },
  { word: "온천", meaning: "지열로 덥혀져 따뜻한 지하수가 솟아나는 샘", category: "자연" },
  { word: "천체망원경", meaning: "달과 별을 관측하기 위한 대형 망원경", category: "천문" },
  { word: "경찰", meaning: "사회의 안전과 치안을 지키는 국가 기관 및 공무원", category: "사회" },
  { word: "찰흙", meaning: "손으로 주물러 여러 모양을 빚을 수 있는 부드러운 흙", category: "놀이" },
  { word: "흙먼지", meaning: "바람이 불어 공중에 흩날리는 미세한 흙가루", category: "자연" },
  { word: "지구", meaning: "우리가 살고 있는 태양계의 세 번째 행성", category: "우주" },
  { word: "구슬치기", meaning: "유리구슬을 손가락으로 퉁겨 맞히는 전통 골목놀이", category: "전통" },
  { word: "기술", meaning: "사물을 만들거나 다루는 솜씨나 방법", category: "과학" },
  { word: "술래잡기", meaning: "술래가 눈을 감고 숫자를 센 뒤 숨은 사람을 찾는 놀이", category: "놀이" },
  { word: "기념일", meaning: "뜻깊은 날을 잊지 않고 기리는 날", category: "문화" },
  { word: "일출", meaning: "아침에 해가 수평선 위로 솟아오름", category: "자연" },
  { word: "출구", meaning: "건물이나 역에서 밖으로 나가는 문", category: "시설" },
  { word: "구름다리", meaning: "공중에 높이 떠 있는 보행용 현수교", category: "교통" },
  { word: "다람쥐꼬리", meaning: "다람쥐의 풍성하고 폭신한 꼬리", category: "자연" },
  { word: "리트리버", meaning: "온순하고 총명한 대형 인기 반려견", category: "동물" },
  { word: "버터", meaning: "우유의 지방을 분리해 굳힌 고소한 유지 제품", category: "식품" },
  { word: "터미널", meaning: "고속버스가 출발하고 도착하는 큰 정류 시설", category: "교통" },
  { word: "널빤지", meaning: "얇고 편평하게 켠 나무 판자", category: "목재" },
  { word: "지우개똥", meaning: "연필 자국을 지울 때 종이 위에 뭉쳐 나오는 찌꺼기", category: "학용품" },
  { word: "똥강아지", meaning: "귀엽고 사랑스러운 강아지를 다정하게 부르는 말", category: "애칭" },
  { word: "지도자", meaning: "집단이나 사회를 올바르게 이끄는 사람", category: "사회" },
  { word: "자연", meaning: "사람의 힘이 더해지지 않고 스스로 존재하는 온 우주", category: "환경" },
  { word: "연꽃", meaning: "진흙 속에서 맑고 청초하게 피어나는 꽃", category: "식물" },
  { word: "꽃가루", meaning: "꽃의 수술에서 날리는 미세한 가루", category: "자연" },
  { word: "루비", meaning: "영롱한 붉은빛을 띠는 귀한 보석 (홍옥)", category: "보석" },
  { word: "비타민", meaning: "몸의 생리 기능을 조절하는 필수 유기 영양소", category: "건강" },
  { word: "민속놀이", meaning: "연날리기, 윷놀이 등 예부터 백성들이 즐기던 놀이", category: "전통" },
  { word: "이순신", meaning: "임진왜란에서 거북선으로 바다를 지킨 성웅 장군", category: "역사" },
  { word: "신호", meaning: "의사나 명령을 전달하기 위해 보내는 부호나 빛", category: "교통" }
];

// Build index mapping for high-speed word retrieval
export const WORD_INDEX = new Map<string, WordEntry[]>();

WORD_LIST.forEach(entry => {
  const first = entry.word.charAt(0);
  if (!WORD_INDEX.has(first)) {
    WORD_INDEX.set(first, []);
  }
  WORD_INDEX.get(first)!.push(entry);
});

/**
 * Checks if a word is present in our dictionary
 */
export function findWordInDictionary(word: string): WordEntry | undefined {
  return WORD_LIST.find(w => w.word === word);
}

/**
 * Retrieves valid computer candidate words that can chain from `lastChar`,
 * taking Dueum Law (두음법칙) into account.
 */
export function getAvailableWordsForChar(
  charVariants: string[],
  usedWords: Set<string>,
  minWordLength: number = 2
): WordEntry[] {
  const candidates: WordEntry[] = [];

  for (const variant of charVariants) {
    const list = WORD_INDEX.get(variant) || [];
    for (const entry of list) {
      if (!usedWords.has(entry.word) && entry.word.length >= minWordLength) {
        candidates.push(entry);
      }
    }
  }

  return candidates;
}

/**
 * Computer words with strategic heuristic:
 * - Easy: picks common words, avoids attacking
 * - Normal: picks well-known words, slight variety
 * - Hard: prioritizes difficult or attack words if available!
 */
export function pickComputerWord(
  candidates: WordEntry[],
  difficulty: 'easy' | 'normal' | 'hard'
): WordEntry | null {
  if (candidates.length === 0) return null;

  if (difficulty === 'hard') {
    // Look for killer endings first
    const attackWord = candidates.find(w => w.isAttack);
    if (attackWord && Math.random() < 0.6) {
      return attackWord;
    }
  }

  if (difficulty === 'easy') {
    // Filter out attack words on easy
    const gentleWords = candidates.filter(w => !w.isAttack);
    const pool = gentleWords.length > 0 ? gentleWords : candidates;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Normal: random choice with slight weight to natural words
  return candidates[Math.floor(Math.random() * candidates.length)];
}
