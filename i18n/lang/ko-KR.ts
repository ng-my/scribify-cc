// 韩语
let message = {
  // 홈페이지
  HomePage: {
    home: "홈",
    times: "하루 {times}회 무료 전사, 오늘 {left}회 남음.",
    tips: "무제한 전사를 위해 Pro로 업그레이드하세요.",
    update: "지금 업그레이드",
    rename: "이름 변경",
    delete: "삭제",
    cancel: "취소",
    confirm: "생성",
    dialogLabel: "폴더 이름",
    recently: "최근 파일",
    loading: "로딩 중",
    tour: {
      step0: {
        title: "{name}에 오신 것을 환영합니다",
        tip: "여기서 할 수 있는 일:",
        content: "일회성 대화, 회의, 강의 등을 트랜스크립션합니다",
        next: "시작하기"
      },
      step1: {
        title: "파일 트랜스크립션",
        content:
          "로컬 파일, 링크, 녹음 등 세 가지 트랜스크립션 방법을 지원합니다."
      },
      step2: {
        title: "폴더 만들기",
        content: '"+" 버튼을 클릭하여 폴더를 만들고 파일을 정리하세요.'
      },
      step3: {
        title: "트랜스크립션 세부 정보 보기 및 편집",
        content:
          "항목을 클릭하여 트랜스크립션 세부 정보를 보고 편집하며 번역할 수도 있습니다."
      },
      next: "다음",
      finish: "이해했습니다"
    },
    export: {
      export: "내보내기",
      title: "내보내기를 생성 중입니다",
      title2: "파일이 준비되었습니다",
      singleLoadingContent: "1개 파일을 압축 중입니다.",
      singleSuccessContent: "1개 파일이 압축되었습니다.",
      loadingContent: "{num}개 파일을 압축 중입니다.",
      successContent: "{num}개 파일이 압축되었습니다.",
      cancel: "내보내기 취소",
      error: "내보내기 오류",
      dialog: {
        title: "경고",
        content: "내보내기를 취소하시겠습니까?",
        cancel: "내보내기 취소",
        continue: "내보내기 계속"
      }
    },
    welcome: {
      title: "Scribify에 오신 것을 환영합니다!",
      description: "여기서 할 수 있는 일:",
      transcribe:
        "Scribify로 쉽게 음성을 텍스트로 변환—음성 대화를 명확하고 검색 가능하며 공유 가능한 텍스트로 순식간에 바꿔보세요.",
      precision:
        "화자 구분 및 타임스탬프가 포함된 정확한 문서를 즉시 받아보세요.",
      translate:
        "언어 장벽 허물기: 200개 이상의 언어로 문서를 쉽게 번역해 보세요.",
      edit: "필요에 맞게 문서를 편집, 개선 및 다양한 형식으로 내보내기가 가능합니다.",
      collaborate: "변환된 텍스트를 다른 사람들과 공유하며협업하세요.",
      button: "시작하기",
      tip: "오디오를 문서화된 텍스트로 변환할 준비가 되셨나요? 지금 바로 시작해 보세요!",
      tip2: "지금 탐색을 시작하세요!",
      tip1: "오디오를 전사된 텍스트로 변환할 준비가 되었나요? "
    },
    subscriptionModal: {
      left: {
        title: "프로 플랜으로 더 많은 기능 잠금 해제",
        c1: "무제한 문서화",
        c2: "10시간 업로드",
        c3: "최우선 처리",
        c4: "99% 문서화 정확도",
        c5: "100개 이상의 언어 지원",
        c6: "화자 식별",
        c7: "문서 번역",
        t1: "한 사람을 위한 무제한 문서화.",
        t2: "각 파일은 최대 10시간/5GB까지 가능. 한 번에 50개 파일 업로드.",
        t3: "항상 최우선 순위로 가능한 빨리 파일을 문서화해 드립니다."
      },
      right: {
        title: "프로 플랜 구매",
        yearly: "연간",
        monthly: "월간",
        save: "절약",
        preMonth: "월 당",
        preYear: "년 당",
        firstMonth: "첫 달",
        afterwards: "이후"
      },
      subscribe: "구독하기"
    }
  },
  // 폴더 페이지
  FolderPage: {
    table: {
      failed: "실패",
      selected: "선택됨",
      success: "성공",
      fileList: "파일 목록"
    },
    dialog: {
      move: {
        title: "이동",
        label: "폴더 선택",
        placeholder: "폴더 선택",
        confirm: "이동",
        cancel: "취소"
      },
      rename: {
        title: "이름 변경",
        label: "파일 이름",
        confirm: "이름 변경",
        cancel: "취소"
      },
      delete: {
        title: "삭제",
        file: "파일",
        files: "파일",
        label: "삭제를 확인하시겠습니까? 이 작업은 실행 취소할 수 없습니다.",
        confirm: "삭제",
        cancel: "취소"
      },
      share: {
        title: "공유",
        label:
          "다음 보안 링크가 있는 모든 사람이 이 트랜스크립트와 관련 미디어 파일을 볼 수 있습니다.",
        confirm: "링크 복사",
        success: "복사 성공"
      },
      export: {
        title: "내보내기",
        select: "필요한 형식을 선택하세요",
        settings: "설정",
        speaker: "화자 포함",
        timecodes: "타임코드 포함",
        confirm: "내보내기",
        cancel: "취소",
        selectErr: "하나 이상의 형식을 선택하세요"
      }
    },
    search: {
      placeholder: "검색"
    },
    recently: "최근",
    record: "녹음",
    transcribe: "트랜스크립션",
    unclassified: "미분류 폴더",
    buttons: {
      transcribe: "파일 트랜스크립션",
      url: "링크 트랜스크립션",
      record: "녹음 및 트랜스크립션",
      recording: "녹음 중..."
    },
    delSuccess: "성공적으로 삭제됨",
    create: "생성",
    endRecord: {
      title: "알림",
      content:
        "녹음 중입니다. 이 작업을 수행하면 녹음이 종료됩니다. 녹음을 종료하시겠습니까?",
      confirm: "녹음 계속",
      cancel: "녹음 종료"
    }
  },
  // 파일 업로드 및 녹음
  FileUploadAndRecording: {
    record: {
      record: "녹음",
      pause: "일시 중지",
      resume: "재개",
      stop: "중지",
      endRecord: "녹음 종료",
      delete: "삭제",
      transcribe: "트랜스크립션",
      permissionDenied: "마이크 권한이 거부되었거나 장치가 존재하지 않습니다",
      dialog: {
        delete: {
          title: "경고",
          label: "이 녹음을 삭제하시겠습니까?",
          confirm: "삭제",
          cancel: "취소"
        },
        complete: {
          title: "녹음 완료",
          label:
            "녹음이 10시간에 도달하여 자동으로 중지되었습니다. 트랜스크립션하세요.",
          confirm: "확인"
        },
        speaker: {
          content:
            "화자 식별을 위해 파일은 3시간으로 제한됩니다. '{text}' 선택을 해제해 주세요."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "온라인 미디어 트랜스크립션",
        title: "링크 붙여넣기",
        label:
          "YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram 등의 플랫폼에서 비디오 또는 오디오 링크 붙여넣기...",
        confirm: "추가",
        cancel: "취소",
        // 올바른 링크를 입력하세요
        errorTitle:
          "입력한 링크 주소가 올바르지 않습니다. 확인 후 다시 시도하세요.",
        linkName: "링크"
      },
      file: {
        orTitle: "온라인 미디어 트랜스크립션",
        dialogTitle: "파일 트랜스크립션",
        tip1: "파일을 여기로 드래그하거나 클릭하여 탐색",
        tip2: "클릭하여 탐색",
        or: "또는",
        supported: "지원 형식"
      },
      del: {
        title: "경고",
        content:
          "모든 진행 상황이 손실됩니다. 트랜스크립션 취소를 확인하시겠습니까?",
        cancel: "취소 확인",
        confirm: "트랜스크립션 계속"
      },
      files: "파일",
      resultDialogTitle: "파일 트랜스크립션",
      resultDialogTitle2: "파일 전사",
      cancel: "취소",
      confirm: "트랜스크립션",
      return: "돌아가기",
      addMore: "더 추가",
      language: "미디어 언어",
      failed: "실패",
      tooLarge: "파일이 제한을 초과했습니다 (5G).",
      linkUpload: "업로드 중",
      fileFormat: "파일 형식이 허용되지 않습니다",
      localFiles: "로컬 파일",
      pasteLink: "온라인 링크",
      uploadErr: "업로드 오류",
      hashErr: "해시 오류",
      table: {
        status: "상태",
        file: "파일",
        size: "크기",
        noData: "데이터 없음"
      },
      maxFileNum: "파일 수는 {num}개를 초과할 수 없습니다.",
      speaker: "화자 식별",
      speakerLabel: "누가 말하고 있는지 자동 감지",
      guest: {
        transcribe: "고쳐 쓰다",
        file: "파일",
        audio: "오디오/비디오 파일",
        Uploading: "업로드 중..."
      }
    }
  },
  // 트랜스크립션 상세 페이지
  TranscriptionPage: {
    langChooseV1: {
      recently: "최근",
      popular: "자주 사용",
      other: "기타",
      searchLanguage: "언어 검색",
      noMatch: "일치하는 언어를 찾을 수 없습니다",
      English: "영어",
      "English(US)": "영어(미국)",
      "English(UK)": "영어(영국)",
      Spanish: "스페인어",
      Portuguese: "포르투갈어",
      French: "프랑스어",
      Italian: "이탈리아어",
      German: "독일어",
      Dutch: "네덜란드어",
      Polish: "폴란드어",
      Danish: "덴마크어",
      Japanese: "일본어",
      Korean: "한국어",
      Hungarian: "헝가리어",
      Czech: "체코어",
      Chinese: "중국어",
      Hebrew: "히브리어",
      Arabic: "아랍어",
      Azerbaijani: "아제르바이잔어",
      Estonian: "에스토니아어",
      Belarusian: "벨라루스어",
      Bulgarian: "불가리아어",
      Icelandic: "아이슬란드어",
      Bosnian: "보스니아어",
      Persian: "페르시아어",
      Russian: "러시아어",
      "Chinese(Traditional)": "중국어(번체)",
      Finnish: "핀란드어",
      Kazakh: "카자흐어",
      Galician: "갈리시아어",
      Catalan: "카탈로니아어",
      "Chinese(Simplified)": "중국어(간체)",
      Kannada: "칸나다어",
      Croatian: "크로아티아어",
      Latvian: "라트비아어",
      Lithuanian: "리투아니아어",
      Romanian: "루마니아어",
      Marathi: "마라티어",
      Malay: "말레이어",
      Macedonian: "마케도니아어",
      Maori: "마오리어",
      Afrikaans: "아프리칸스어",
      Nepali: "네팔어",
      Norwegian: "노르웨이어",
      Swedish: "스웨덴어",
      Serbian: "세르비아어",
      Slovak: "슬로바키아어",
      Slovenian: "슬로베니아어",
      Swahili: "스와힐리어",
      Tagalog: "타갈로그어",
      Tamil: "타밀어",
      Thai: "태국어",
      Turkish: "터키어",
      Welsh: "웨일스어",
      Urdu: "우르두어",
      Ukrainian: "우크라이나어",
      Greek: "그리스어",
      Armenian: "아르메니아어",
      Hindi: "힌디어",
      Indonesian: "인도네시아어",
      Vietnamese: "베트남어",
      Albanian: "알바니아어",
      Amharic: "암하라어",
      Assamese: "아삼어",
      Occitan: "옥시탄어",
      Bashkir: "바시키르어",
      Basque: "바스크어",
      Breton: "브르통어",
      Tibetan: "티베트어",
      Faroese: "페로어",
      Sanskrit: "산스크리트어",
      Khmer: "크메르어",
      Georgian: "조지아어",
      Gujarati: "구자라트어",
      "Haitian Creole": "아이티 크리올어",
      Hausa: "하우사어",
      Latin: "라틴어",
      Lao: "라오어",
      Lingala: "링갈라어",
      Luxembourgish: "룩셈부르크어",
      Malagasy: "말라가시어",
      Maltese: "몰타어",
      Malayalam: "말라얄람어",
      Mongolian: "몽골어",
      Bengali: "벵골어",
      Burmese: "버마어",
      Punjabi: "펀자브어",
      Pashto: "파슈토어",
      Sinhala: "싱할라어",
      Shona: "쇼나어",
      Somali: "소말리어",
      Tajik: "타지크어",
      Tatar: "타타르어",
      Telugu: "텔루구어",
      Turkmen: "투르크멘어",
      Uzbek: "우즈베크어",
      Hawaiian: "하와이어",
      "Norwegian Nynorsk": "노르웨이 뉘노르스크어",
      Sindhi: "신디어",
      Sundanese: "순다어",
      Yiddish: "이디시어",
      Yoruba: "요루바어",
      Javanese: "자바어",
      Cantonese: "광둥어",
      Abkhaz: "압하즈어",
      Afar: "아파르어",
      alz: "알루르어",
      ach: "아촐리어",
      awa: "아와드어",
      Avaric: "아바르어",
      Ewe: "에웨어",
      Aymara: "아이마라어",
      Irish: "아일랜드어",
      Oriya: "오리야어",
      Oromo: "오로모어",
      Ossetian: "오세트어",
      tpi: "파푸아 피진어",
      bew: "베타위어",
      ban: "발리어",
      btx: "바타크 카로어",
      bbc: "바타크 토바어",
      bts: "바타크 시말룬군어",
      bci: "바울레어",
      Bambara: "밤바라어",
      pag: "판가시난어",
      pam: "팜팡가어",
      nso: "북부 소토어",
      bem: "벰바어",
      bik: "비콜어",
      bal: "발루치어",
      bho: "호즈푸리어",
      bua: "부랴트어",
      chm: "초원 마리어",
      Chamorro: "차모로어",
      Chechen: "체첸어",
      chk: "추크어",
      Chuvash: "추바시어",
      Tswana: "츠와나어",
      Tsonga: "총가어",
      "fa-AF": "다리어",
      shn: "샨어",
      tet: "테툼어",
      Divehi: "디베히어",
      dyu: "줄라어",
      tiv: "티브어",
      din: "딩카어",
      doi: "도그리어",
      "ndc-ZW": "은도어",
      "South Ndebele": "남부 은데벨레어",
      dov: "은둠바어",
      "bm-Nkoo": "은코 문자(서아프리카 문자)",
      "French(Canada)": "프랑스어(캐나다)",
      Fijian: "피지어",
      fon: "폰어",
      "Western Frisian": "서프리지아어",
      fur: "프리울리어",
      Fulah: "풀라어",
      Kongo: "콩고어",
      Kalaallisut: "그린란드어",
      gom: "콘칸어",
      Guarani: "과라니어",
      cnh: "하카 친어",
      hrx: "훈스뤼크어",
      Kyrgyz: "키르기스어",
      ktu: "키투바어",
      gaa: "가어",
      kac: "카친어",
      Kanuri: "카누리어",
      kha: "카시어",
      kek: "케크치어",
      Komi: "코미어",
      Xhosa: "코사어",
      Corsican: "코르시카어",
      "crh-Latn": "크림 타타르어(라틴 문자)",
      crh: "크림 타타르어(키릴 문자)",
      Quechua: "케추아어",
      Kurdish: "쿠르드어(쿠르만지어)",
      ckb: "쿠르드어(소라니어)",
      trp: "코크보로크어",
      ltg: "라트갈레어",
      lij: "리구리아어",
      Limburgish: "림뷔르흐어",
      Kirundi: "키룬디어",
      luo: "루오어",
      Luganda: "루간다어",
      Kinyarwanda: "르완다어",
      lmo: "롬바르드어",
      rom: "롬어",
      mad: "마두라어",
      Manx: "맨 섬어",
      mwr: "마르와리어",
      "ms-Arab": "말레이어(자위 문자)",
      Marshallese: "마셜어",
      mam: "맘어",
      mai: "마이틸리어",
      mfe: "모리셔스 크리올어",
      "mni-Mtei": "메이테이어(마니푸르어)",
      min: "미낭카바우어",
      lus: "미조어",
      hmn: "몽어",
      nhe: "나와틀어(동부 후아스테카)",
      "Southern Sotho": "남부 소토어",
      new: "네팔어(네와르어)",
      nus: "누에르어",
      pap: "파피아멘토어",
      "pa-Arab": "펀자브어(샤무키 문자)",
      "pt-PT": "포르투갈어(포르투갈)",
      Chichewa: "치체와어",
      cgg: "치가어",
      lua: "치루바어",
      Akan: "아칸어",
      zap: "사포테크어",
      "Northern Sami": "북부 사미어",
      Samoan: "사모아어",
      kri: "시에라리온 크리올어",
      crs: "세이셸 크리올어",
      Sango: "상고어",
      "sat-Latn": "산탈리어(라틴 문자)",
      sat: "산탈리어(올 치키 문자)",
      Esperanto: "에스페란토어",
      Swati: "스와티어",
      "Scottish Gaelic": "스코틀랜드 게일어",
      sus: "수수어",
      ceb: "세부아노어",
      ber: "타마지트어(티피나그 문자)",
      "ber-Latn": "타마지트어",
      Tahitian: "타히티어",
      Tonga: "통가어",
      Tigrinya: "티그리냐어",
      tcy: "툴루어",
      tum: "툼부카어",
      tyv: "투바어",
      war: "와라이어",
      mak: "마카사어",
      vec: "베네치아어",
      Uyghur: "위구르어",
      Venda: "벤다어",
      Wolof: "월로프어",
      udm: "우드무르트어",
      szl: "실레지아어",
      scn: "시칠리아어",
      hil: "힐리가이논어",
      jam: "자메이카 파투아어",
      sah: "야쿠트어",
      ace: "아체어",
      iba: "이반어",
      Igbo: "이그보어",
      ilo: "일로카노어",
      "iu-Latn": "이누이트어(라틴 문자)",
      Inuktitut: "이누이트어(음절)",
      yua: "유카테크 마야어",
      Dzongkha: "종카어",
      Zulu: "줄루어"
    }
  },
  // 로그인, 회원가입, 비밀번호 변경
  IdentityInfoManage: {
    or: "또는", // 또는
    LoginBtn: "이메일로 로그인",
    LoginGoogle: "Google로 로그인",
    SignupBtn: "이메일로 가입",
    SignupGoogle: "Google로 가입",
    SignupDes: "지금 가입하고 무료로 마법을 경험하세요.",
    SignupTitle: "정확하고 무제한 전사",
    signup: "회원가입", // 회원가입
    sign_up: "회원가입", // 회원가입
    loginByGoogle: "Google로 계속하기", // Google로 로그인
    emailAddress: "이메일 주소를 입력하세요", // 이메일을 입력하세요
    createAccount: "새 계정 만들기", // 계정 만들기
    accountExists: "이미 계정이 있으신가요? ", // 이미 계정이 있습니까? 로그인
    agreeTerm: {
      // 서비스 약관 및 개인정보 보호정책에 동의합니다
      agree: "계속 진행하면, 저희 {terms} 및 {policy}에 동의하게 됩니다.",
      terms: "약관",
      policy: "개인정보 보호정책"
    },
    setPassword: "비밀번호 설정", // 비밀번호 설정
    code: "인증 코드", // 인증 코드
    resend: "재전송", // 재전송
    enterPassword: "비밀번호: 최소 6자 이상.", // 비밀번호를 입력하세요
    passwordLeval: "비밀번호 수준", // 비밀번호 강도
    Weak: "약함", // 약함
    Medium: "중간", // 중간
    Strong: "강함", // 강함
    confirmPassword: "비밀번호 확인", // 비밀번호 확인
    invalidEmail: "유효하지 않은 이메일 주소", // 유효하지 않은 이메일 주소
    logInDirectly: "이 계정은 이미 존재합니다. 직접 로그인하세요.", // 계정이 이미 존재합니다. 바로 로그인하세요.
    codeErrorTryAgain: "인증 코드 오류. 다시 시도하세요.", // 인증 코드 오류. 다시 시도하세요.
    atLeastSix: "비밀번호는 최소 6자 이상이어야 합니다.", // 비밀번호는 최소 6자리 이상이어야 합니다.
    passwordNotMatch: "비밀번호가 일치하지 않습니다. 다시 시도하세요.", // 비밀번호가 일치하지 않습니다. 다시 시도하세요.
    login: "로그인", // 로그인
    log_in: "로그인", // 로그인
    log_In: "로그인", // 로그인
    password: "비밀번호", // 비밀번호
    forgotPassword: "비밀번호를 잊으셨나요?", // 비밀번호를 잊으셨나요?
    noAccount: "계정이 없으신가요?", // 계정이 없으신가요? 회원가입
    accountNotExists: "이 계정은 존재하지 않습니다.", // 계정이 존재하지 않습니다.
    passwordError: "비밀번호 오류", // 비밀번호 오류
    sendCode: "인증 코드 보내기", // 인증 코드 보내기
    resetPassword: "비밀번호 재설정", // 비밀번호 재설정
    resetYourPassword: "비밀번호 재설정", // 비밀번호 재설정
    newOldCantSame: "새 비밀번호는 이전 비밀번호와 달라야 합니다.", // 새 비밀번호는 이전 비밀번호와 동일할 수 없습니다.
    passwordResetOk: "비밀번호가 성공적으로 재설정되었습니다!", // 비밀번호가 성공적으로 재설정되었습니다!
    signupToSaveProgress: "가입을 완료하여 진행 상황 저장",
    tip: "팁",
    tipContentEmail:
      "고객님의 계정 로그인 비밀번호를 이메일로 발송해 드렸습니다.",
    tipContentPassword:
      "수신함을 확인하신 후 이메일과 비밀번호로 로그인해 주세요.",
    codeToEmail:
      "인증 코드를 이메일로 보냈습니다. 수신함을 확인하고 위에 인증 코드를 붙여넣어 주세요."
  },
  // 공유 세부 페이지
  Sharepage: {},
  // 초기화 페이지
  InitPage: {},
  // 계정 설정
  AccountSettingsPage: {
    subscription: "구독 플랜",
    freeversion: "무료",
    transcribeTimesDay: "일일 3회 변환",
    uploadMinutes: "30분 업로드",
    lowerPriority: "낮은 우선순위",
    currentPlan: "현재 플랜",
    professionalEdition: "프로페셔널 버전",
    unlimitedTranscription: "무제한 변환",
    unlimitedNumberOfTimes: "무제한 음성 텍스트 변환 횟수와 시간",
    filesUploadedAtOnce:
      "각 파일 최대 10시간/5GB. 한 번에 50개 파일 업로드 가능",
    highestPriority: "최고 우선순위",
    weWillGiveTheHighest: "항상 최우선 순위로 파일을 빠르게 변환해 드립니다.",
    theFirstMonth: "첫 달",
    subscribeTo: "구독하기",
    basicVersionFree: "기본 버전(무료)",
    return: "돌아가기",
    annualize: "연간",
    monthly: "월간",
    everyYear: "매년",
    saved: "저장됨",
    byTheMonth: "월별",
    firstMonth: "첫 달",
    afterwardsEveryMonth: "이후 매월",
    manageSubscription: "구독 관리",
    professionalYearbook: "프로페셔널 연간",
    professionalMonthly: "프로페셔널 월간",
    subscriptionWillCancelledOn: "구독이 아래 날짜에 취소될 예정입니다",
    displayLanguage: "표시 언어",
    update: "지금 업그레이드",
    basicversion: "기본 버전(무료)",
    daily: "일일 변환 {start}/{end} 사용",
    upgradetoPro: "Pro로 업그레이드",
    accountSetting: "계정 설정",
    logOut: "로그아웃",
    account: "계정",
    email: "이메일",
    id: "ID",
    password: "비밀번호",
    resetPassword: "비밀번호 재설정",
    logIn: "로그인",
    tryForFree: "무료로 사용해보기",
    notFund: "찾을 수 없음",
    couldntFind: "찾으시는 내용을 찾을 수 없습니다.",
    proAnnual: "프로 연간",
    proMonthly: "프로 월간",
    perMonth: "월",
    afterwards: "이후",
    accuracy: "변환 정확도",
    supported: "지원 언어",
    identification: "화자 식별",
    transcriptSranslation: "변환 번역",
    perYear: "연",
    getProPlan: "프로 플랜 구독",
    changeToAnnual: "연간으로 변경",
    automaticRenewalon: "자동 갱신일",
    eachMonth: "매월 {time}일에 자동 갱신.",
    automaticRenewal: "자동 갱신에 실패했습니다. 결제 방법을 확인해 주세요.",
    eachYear: "매년 {time} 자동 갱신.",
    returnAccountSetting: "돌아가기",
    needsToWaitLonger: "파일이 전사되기 전에 좀 더 기다려 주세요.",
    freeThreeTimesDay: "매일 3개의 파일을 무료로 전사할 수 있습니다.",
    oneFileUploaded:
      "각 파일은 최대 30분까지 가능합니다. 한 번에 1개의 파일을 업로드하세요.",
    uploadWithinHours: "10시간 업로드",
    yourSubscription: "구독은 {time}에 취소됩니다.",
    save: "절약"
  },
  // 언어 맵핑 관계
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "중국어(간체)",
      "Chinese(Traditional)": "중국어(번체)",
      Japanese: "일본어",
      Danish: "덴마크어",
      German: "독일어",
      English: "영어",
      Spanish: "스페인어",
      French: "프랑스어",
      Italian: "이탈리아어",
      Hungarian: "헝가리어",
      Dutch: "네덜란드어",
      Norwegian: "노르웨이어",
      Polish: "폴란드어",
      Portuguese: "포르투갈어",
      Finnish: "핀란드어",
      Swedish: "스웨덴어",
      Turkish: "터키어",
      Greek: "그리스어",
      Russian: "러시아어",
      Ukrainian: "우크라이나어",
      Hebrew: "히브리어",
      Arabic: "아랍어",
      Korean: "한국어"
    }
  },
  demo: {
    title: "넉스트프로",
    description:
      "글로벌 결제 게이트웨이(스트라이프/크림), 구글 OAuth, i18n 라우팅 및 검색 엔진 최적화 도구가 사전 통합된 오픈 소스 넉스트3 서비스형 소프트웨어(SaaS) 템플릿입니다. 다국어 웹 앱을 출시하는 개발자를 위해 설계되었으며, 서버 사이드 렌더링/정적 사이트 생성 지원과 기본 제공되는 프로덕션급 보안을 제공합니다.",
    startLink: "무료 체험 시작~",
    thirdPartyLink: "깃허브 →",
    waitlist: {
      cardTitle:
        "대기자 명단에 가입하고 최신 넉스트프로 뉴스와 할인 혜택을 가장 먼저 받아보세요!",
      placeholder: "이메일 입력",
      button: "대기자 명단 가입",
      joinCountMessage:
        "🔥 초기 사용자 #{count}님이 방금 대기자 명단에 가입했습니다!"
    },
    seo: {
      title: "오픈소스 넉스트 서비스형 소프트웨어 보일러플레이트 | 넉스트프로",
      description:
        "고객에게 제품을 선보이는 데 필요한 모든 것이 포함된 넉스트JS 보일러플레이트입니다. 아이디어에서 프로덕션까지 5분 만에 가능합니다."
    },
    api: {
      title: "데모입니다",
      corpInfo: "회사 정보"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "비디오 다운로드 오류"
      },
      mse: {
        code: 2,
        msg: "스트림 추가 오류"
      },
      parse: {
        code: 3,
        msg: "구문 분석 오류"
      },
      format: {
        code: 4,
        msg: "잘못된 형식"
      },
      decoder: {
        code: 5,
        msg: "디코딩 오류"
      },
      runtime: {
        code: 6,
        msg: "문법 오류"
      },
      timeout: {
        code: 7,
        msg: "재생 시간 초과"
      },
      other: {
        code: 8,
        msg: "기타 오류"
      }
    },
    HAVE_NOTHING: "오디오/비디오 준비 여부에 대한 정보가 없습니다",
    HAVE_METADATA: "오디오/비디오 메타데이터가 준비되었습니다",
    HAVE_CURRENT_DATA:
      "현재 재생 위치에 대한 데이터는 사용 가능하지만, 다음 프레임/밀리초를 재생하기에 충분한 데이터가 없습니다",
    HAVE_FUTURE_DATA: "현재 및 최소 한 프레임의 데이터를 사용할 수 있습니다",
    HAVE_ENOUGH_DATA: "사용 가능한 데이터가 재생을 시작하기에 충분합니다",
    NETWORK_EMPTY: "오디오/비디오가 초기화되지 않았습니다",
    NETWORK_IDLE:
      "오디오/비디오가 활성화되어 리소스로 선택되었지만 네트워크가 사용되지 않습니다",
    NETWORK_LOADING: "브라우저가 데이터를 다운로드 중입니다",
    NETWORK_NO_SOURCE: "오디오/비디오 소스를 찾을 수 없습니다",
    MEDIA_ERR_ABORTED: "가져오기 프로세스가 사용자에 의해 중단되었습니다",
    MEDIA_ERR_NETWORK: "다운로드 중 오류가 발생했습니다",
    MEDIA_ERR_DECODE: "디코딩 중 오류가 발생했습니다",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "오디오/비디오가 지원되지 않습니다",
    REPLAY: "다시 재생",
    ERROR: "네트워크가 오프라인입니다",
    PLAY_TIPS: "재생",
    PAUSE_TIPS: "일시 중지",
    PLAYNEXT_TIPS: "다음 재생",
    DOWNLOAD_TIPS: "다운로드",
    ROTATE_TIPS: "회전",
    RELOAD_TIPS: "다시 로드",
    FULLSCREEN_TIPS: "전체 화면으로",
    EXITFULLSCREEN_TIPS: "전체 화면 종료",
    CSSFULLSCREEN_TIPS: "CSS 전체 화면",
    EXITCSSFULLSCREEN_TIPS: "CSS 전체 화면 종료",
    TEXTTRACK: "자막",
    PIP: "화면 속 화면",
    SCREENSHOT: "스크린샷",
    LIVE: "실시간",
    OFF: "끄기",
    OPEN: "열기",
    MINI_DRAG: "클릭하고 길게 눌러 드래그",
    MINISCREEN: "미니 화면",
    REFRESH_TIPS: "시도해 보세요",
    REFRESH: "새로고침",
    FORWARD: "앞으로",
    LIVE_TIP: "실시간",
    TM_SUBTITLE_SHOW_TIPS: "자막 켜기",
    TM_SUBTITLE_HIDE_TIPS: "자막 끄기",
    TM_MINIMIZE_TIPS: "비디오 숨기기"
  },
  privacyPolicy: {
    privacyPolicyTitle: "개인정보 보호정책",
    lastUpdated: "최종 업데이트: 2025년 8월 25일",
    policyDescription:
      '본 정책은 Scribify(이하 "Scribify", "당사", "우리")가 귀하가 당사 서비스, 웹사이트를 사용할 때 귀하의 개인 정보를 수집, 사용 및 공개하는 방식을 설명합니다.',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: '및 소프트웨어(총칭하여 "서비스")입니다.',
    policyAgreement:
      "본 개인정보 보호정책을 주의 깊게 읽고 이해하시기 바랍니다. 당사 서비스를 이용함으로써 귀하는 본 개인정보 보호정책에 동의하는 것으로 간주됩니다. 본 정책에 따른 당사 개인정보 사용에 동의하지 않으시면 당사 서비스 이용을 즉시 중단하셔야 합니다.",
    policyOverview:
      "본 정책에는 당사가 수집하는 데이터와 수집 이유, 데이터 처리 방식, 그리고 데이터와 관련된 귀하의 권리에 대한 내용이 명시되어 있습니다. 당사는 귀하의 데이터를 판매하지 않습니다.",
    scopeTitle: "1. 본 개인정보 보호정책의 범위",
    whatWeCollectTitle: "2. 수집 내용 및 수집 이유",
    accessShareTitle: "3. 당사가 귀하의 정보에 접근하거나 공유하는 경우",
    secureDataTitle: "4. 귀하의 데이터를 보호하는 방법",
    deleteContentTitle: "5. 콘텐츠를 삭제하면 어떻게 되나요?",
    locationTitle: "6. 사이트 및 데이터의 위치",
    childrenPrivacyTitle: "7. 아동의 개인정보 보호",
    updatesTitle: "8. 본 개인정보 보호정책의 업데이트",
    contactUsTitle: "9. 문의하기",
    identityAccessTitle: "2.1 신원 및 접근",
    billingInfoTitle: "2.2 청구 정보",
    productInteractionsTitle: "2.3 제품 상호 작용",
    websiteInteractionsTitle: "2.4 웹사이트 상호작용",
    cookiesTitle: "2.5 쿠키",
    voluntaryCorrespondenceTitle: "2.6 자발적 서신",
    scopeContent:
      "본 개인정보 보호정책은 당사 서비스 사용자에 대한 정보 수집 및 처리에만 적용됩니다. 본 개인정보 보호정책은 당사에 링크된 제3자가 운영하는 서비스, 웹사이트 또는 소프트웨어(당사가 해당 링크를 제공하든 다른 사용자가 공유하든)에는 적용되지 않으며, 제3자의 콘텐츠, 데이터, 애플리케이션 또는 자료에도 적용되지 않습니다. 제3자 웹사이트 또는 소프트웨어에 정보를 제공하기 전에 해당 웹사이트 또는 소프트웨어의 개인정보 보호정책을 확인하시기 바랍니다.",
    collectPrinciple:
      "저희의 기본 원칙은 필요한 것만 수집하는 것입니다. 실제로 이 원칙이 의미하는 바는 다음과 같습니다.",
    identityAccessContent:
      "당사 제품에 가입하실 때 이름, 이메일 주소와 같은 개인 정보를 요청드립니다. 이는 필수적인 제품 기능을 제공하고 제품 업데이트 및 기타 필수 정보를 제공해 드리기 위한 것입니다.",
    billingInfoContent:
      "유료 상품에 가입하시면 결제 정보와 청구지 주소를 입력해 주셔야 합니다. 결제 정보는 저희 결제 처리 업체에 직접 전송되며 저희 서버에는 저장되지 않습니다.",
    productInteractionsContent:
      "귀하가 제품 계정에 업로드, 수신 또는 관리하는 콘텐츠는 당사 서버에 저장됩니다. 귀하가 해당 콘텐츠를 삭제하지 않는 한, 귀하의 계정이 활성 상태인 동안 해당 콘텐츠를 보관할 수 있습니다.",
    websiteInteractionsContent:
      "당사는 전환율 테스트 및 신제품 디자인 실험 등 분석 및 통계 목적으로 귀하의 브라우징 활동 정보를 수집합니다. 여기에는 브라우저 및 운영 체제 버전, IP 주소, 방문한 웹 페이지 및 로드 시간, 그리고 귀하를 당사로 연결한 웹사이트 등이 포함됩니다. 계정이 있고 로그인되어 있는 경우, 이러한 웹 분석 데이터는 계정이 더 이상 활성화되지 않을 때까지 귀하의 IP 주소 및 사용자 계정에 연결됩니다.",
    cookiesContent1:
      "또한 당사는 특정 기본 설정을 저장하고, 귀하가 당사 애플리케이션을 더 쉽게 사용할 수 있도록 하며, A/B 테스트를 수행하고 일부 분석을 지원하기 위해 지속적인 자사 쿠키와 일부 타사 쿠키를 사용합니다.",
    cookiesContent2:
      "쿠키는 브라우저에 저장되는 텍스트 파일입니다. 로그인 정보와 사이트 환경설정을 기억하는 데 도움이 될 수 있습니다. 또한 브라우저 유형, 운영 체제, 방문한 웹 페이지, 방문 시간, 열람한 콘텐츠, 기타 클릭 스트림 데이터 등의 정보를 수집할 수도 있습니다. 브라우저 설정에서 쿠키 보관 설정을 조정하고 개별 쿠키를 허용 또는 차단할 수 있습니다. 단, 쿠키를 비활성화하면 앱이 작동하지 않고 서비스의 다른 기능도 제대로 작동하지 않을 수 있습니다.",
    voluntaryCorrespondenceContent:
      "여러분이 질문이나 도움을 요청하기 위해 이메일을 보내면, 우리는 여러분의 이메일 주소를 포함한 해당 서신을 보관합니다. 그러면 미래에 여러분이 연락할 때 참고할 수 있도록 과거의 서신 내역을 보관할 수 있습니다.",
    accessShareContent1:
      "귀하가 요청하신 제품 또는 서비스를 제공하기 위해. 당사는 애플리케이션 실행 및 서비스 제공을 위해 일부 제3자 하위 처리업체를 이용하고 있습니다. 여기에는 클라우드 및 분석 서비스 제공업체가 포함됩니다.",
    accessShareContent2:
      "남용 사례를 조사, 예방 또는 관련 조치를 취하기 위함입니다. 잠재적 남용 사례를 조사할 때 고객 계정에 접근하는 것은 최후의 수단입니다. 당사는 고객과 문제를 신고하는 사람 모두의 개인정보와 안전을 보호하기 위해 최선을 다하며, 이러한 책임의 균형을 유지하기 위해 노력합니다. 귀하가 당사 제품을 제한된 목적으로 사용하고 있다는 사실이 발견될 경우, 당사는 필요한 조치를 취할 것이며, 필요한 경우 관련 당국에 신고할 것입니다.",
    accessShareContent3: "해당 법률에 따라 요구되는 경우.",
    userDataRequests:
      "- 사용자 데이터 요청. 당사는 법적 절차에 따른 강제성이 있거나 긴급 요청과 같은 제한적인 상황을 제외하고는 정부의 사용자 데이터 요청에 응답하지 않는 것을 정책으로 삼고 있습니다. 단, 미국 법 집행 기관이 데이터 공유를 요구하는 영장, 형사 소환장 또는 법원 명령을 소지한 경우, 당사는 이를 준수해야 합니다. 마찬가지로, 미국 외 국가 정부 기관의 요청에도 미국 정부가 상호 사법 공조 조약 또는 협정에 명시된 절차를 통해 강제하는 경우에만 응답합니다. 당사는 법적으로 금지된 경우와 일부 긴급 상황을 제외하고, 데이터를 공유하기 전에 관련 사용자에게 알리는 것을 정책으로 삼고 있습니다.",
    preservationRequests:
      "- 보존 요청. 마찬가지로, 당사의 정책은 미국 연방 저장 통신법(18 USC Section 2703(f)) 또는 민사 소송을 위한 미국 소환장이 적법하게 송달된 경우에만 데이터 보존 요청을 준수하는 것입니다. 당사는 법률에 의해 요구되거나 당사가 항소하지 않기로 결정한 법원 명령에 의해 강제되는 경우를 제외하고는 보존된 데이터를 공유하지 않습니다. 또한, 필요한 보존 기간이 만료되기 전에 적절한 영장, 법원 명령 또는 소환장을 받지 않는 한, 보존 기간 만료 시 고객 데이터의 모든 보존 사본을 파기합니다.",
    taxAudit:
      "- 세무 당국의 감사를 받는 경우, 청구 관련 정보를 공유해야 할 수 있습니다. 이 경우, 청구지 주소 및 면세 정보 등 필요한 최소한의 정보만 공유합니다.",
    secureDataContent1: "모든 데이터는 암호화됩니다.",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "당사 서버에서 귀하의 브라우저로 전송되는 경우.",
    deleteContentContent: "콘텐츠를 삭제하면 즉시 액세스할 수 없게 됩니다.",
    locationContent:
      "당사의 제품 및 기타 웹 자산은 미국에서 운영됩니다. 유럽 연합, 영국 또는 미국 외 지역에 거주하시는 경우, 귀하가 당사에 제공하는 모든 정보는 미국으로 전송되어 저장됩니다. 당사 웹사이트 또는 서비스를 이용하거나 당사에 개인 정보를 제공함으로써 귀하는 이러한 전송에 동의하는 것으로 간주됩니다.",
    childrenPrivacyContent:
      "본 서비스는 아동을 대상으로 하지 않으며, 13세 미만 아동의 개인 정보를 고의로 수집하지 않습니다. 13세 미만인 경우, 본 서비스를 통해 개인 정보를 제출하지 마십시오. 아동이 본 정책을 위반하여 당사에 개인 정보를 제공했다고 생각되시면 아래 안내에 따라 당사에 연락해 주십시오.",
    updatesContent:
      "관련 규정을 준수하고 새로운 관행을 반영하기 위해 필요에 따라 본 정책을 업데이트할 수 있습니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 새로 고칩니다.",
    contactUsContent1:
      "개인정보 보호정책에 대해 질문, 의견 또는 불만 사항이 있는 경우",
    contactUs: "문의하기",
    contactUsContent2:
      "귀하의 불만 사항은 최대한 빨리 처리되도록 노력하겠습니다."
  },
  termsOfService: {
    termsOfServiceTitle: "서비스 약관",
    lastUpdated: "최종 업데이트: 2022년 9월 21일",
    thankYouMessage: "저희 제품을 이용해 주셔서 감사합니다!",
    companyReference:
      '본 문서에서 "회사", "우리", "저희"라는 표현은 Scribify를 지칭합니다.',
    servicesDefinition:
      '"서비스"란 Scribify가 제작하고 유지 관리하는 모든 제품을 의미하며, 웹 브라우저, 데스크톱 애플리케이션, 모바일 애플리케이션 또는 다른 형식으로 제공됩니다.',
    termsUpdateNotice:
      "본 서비스 약관은 향후 업데이트될 수 있습니다. 일반적으로 이러한 변경은 확장된 관련 정책 링크를 통해 약관의 일부를 명확히 하기 위한 것입니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 갱신하고 계정 소유자에게 알리기 위한 기타 적절한 조치를 취할 것입니다.",
    acceptanceOfAgreementTitle: "1. 계약 수락",
    scribifyServicesTitle: "2. Scribify의 서비스",
    accountTermsTitle: "3. 계정 약관",
    paymentRefundsTitle: "4. 지불, 환불 및 계획 변경",
    cancellationTerminationTitle: "5. 취소 및 종료",
    submissionsTitle: "6. 제출물",
    uptimeSecurityTitle: "7. 가동 시간 및 보안",
    siteManagementTitle: "8. 사이트 관리",
    copyrightContentTitle: "9. 저작권 및 콘텐츠 소유권",
    prohibitedActivitiesTitle: "10. 금지된 활동",
    featuresBugsTitle: "11. 기능 및 버그",
    correctionsTitle: "12. 정정",
    userDataTitle: "13. 사용자 데이터",
    privacyPolicyTitle: "14. 개인정보 보호정책",
    liabilityTitle: "15. 책임",
    miscellaneousTitle: "16. 기타",
    contactUsTitle: "17. 문의하기",
    acceptanceContent1:
      "당사 서비스를 이용함으로써 귀하는 본 계약에 동의하는 것으로 간주되며, 본 계약은 귀하와 Scribify 간의 구속력 있는 계약이 됩니다. 귀하는 본 약관에 동의할 법적 능력이 있음을 진술하며, 구속력 있는 계약을 체결할 수 있는 법적 연령임을 확인합니다. Scribify의 동의는 귀하가 본 계약의 모든 조건에 동의하는 것을 명시적으로 조건으로 합니다.",
    acceptanceContent2:
      "본 서비스는 18세 미만의 사용자를 대상으로 하지 않으며, 18세 미만의 사용자는 본 서비스를 이용할 수 없습니다. 본 서비스를 이용함으로써 귀하는 앞서 언급한 자격 요건을 충족함을 진술하고 보증합니다.",
    acceptanceContent3:
      '"귀하", "귀하의", "귀하 자신"이라는 용어에는 귀하의 직원, 대리인, 사업 담당자 및 귀하의 계정을 통해 서비스에 대한 접근 권한을 제공하는 기타 모든 개인(아래 정의 참조)도 포함됩니다. 귀하는 귀하의 계정을 통해 서비스에 접근하는 모든 사람이 본 약관을 인지하고 준수하도록 할 책임이 있습니다.',
    acceptanceContent4:
      "Scribify는 단독 재량으로 본 약관을 수시로 개정하고 업데이트할 권리를 보유합니다. 모든 변경 사항은 게시되는 즉시 적용됩니다. 개정된 약관 게시 후에도 서비스를 계속 사용하는 것은 귀하가 변경 사항에 동의하고 수락하는 것으로 간주됩니다. 변경 사항은 귀하에게 구속력을 가지므로, 변경 사항을 파악하기 위해 이 페이지를 수시로 확인하시기 바랍니다.",
    servicesContent1:
      "당사 서비스를 이용하면 사용자는 음성 대화를 검색, 번역하고 다른 사람과 공유할 수 있는 텍스트로 변환할 수 있습니다.",
    servicesContent2:
      '귀하는 서비스의 무료 버전(이하 "무료 서비스")을 이용할지, 또는 수수료를 지불해야 하는 구독 기반 유료 버전 서비스(이하 "유료 서비스")를 이용할지 선택할 수 있습니다.',
    servicesContent3:
      "당사는 귀하에게 서비스를 제공합니다. 귀하는 서비스 이용에 필요한 모든 준비를 하실 책임이 있습니다.",
    accountTerms1:
      "- 귀하는 계정 보안 유지에 대한 책임이 있습니다. 회사는 귀하가 이 보안 의무를 준수하지 않아 발생하는 어떠한 손실이나 손해에 대해서도 책임을 지지 않습니다.",
    accountTerms2:
      "- 귀하는 불법적, 비윤리적 또는 부도덕한 목적으로 서비스를 이용할 수 없습니다.",
    accountTerms3:
      "- 귀하는 귀하의 계정에서 게시되는 모든 콘텐츠와 발생하는 모든 활동에 대해 책임을 집니다. 여기에는 (a) 귀하의 로그인 정보에 접근할 수 있는 사람, 또는 (b) 귀하의 계정에 자체 로그인 정보를 보유한 사람이 게시한 콘텐츠가 포함됩니다.",
    accountTerms4:
      '- 반드시 인간이어야 합니다. "봇"이나 기타 자동화된 방법으로 등록된 계정은 허용되지 않습니다.',
    paymentContent1:
      "- 무료 체험을 제공하는 유료 서비스의 경우, 가입 시 체험 기간을 안내해 드립니다. 체험 기간 이후에는 서비스를 계속 이용하려면 선불로 결제해야 합니다. 결제하지 않으면 서비스가 종료됩니다.",
    paymentContent2:
      "- 무료 플랜에서 유료 플랜으로 업그레이드하는 경우, 귀하의 카드에 즉시 요금이 청구되며, 청구 주기는 업그레이드 날짜부터 시작됩니다.",
    paymentContent3:
      "- 모든 수수료에는 세무 당국에서 부과하는 모든 세금, 부과금 또는 관세가 포함되어 있지 않습니다. 필요한 경우, 당사는 세무 당국을 대신하여 해당 세금을 징수하고 세무 당국에 납부합니다. 그렇지 않은 경우, 귀하는 모든 세금, 부과금 또는 관세를 납부할 책임이 있습니다.",
    paymentContent4:
      "- 모든 구매는 환불되지 않습니다. 유료 서비스는 계정에 로그인하여 언제든지 취소할 수 있습니다. 유료 구독의 경우, 별도로 명시되지 않는 한 현재 유료 기간이 종료되는 시점에 취소가 적용됩니다.",
    cancellationContent1:
      "- 결제된 기간 만료 전에 서비스를 취소하시면 즉시 취소가 적용되며 요금이 청구되지 않습니다. 마지막 청구 주기의 미사용 시간은 자동으로 일할 계산되지 않습니다.",
    cancellationContent2:
      "- 당사는 언제든지 어떤 이유로든 귀하의 계정을 정지 또는 해지하고 현재 또는 미래의 모든 서비스 이용을 거부할 권리가 있습니다. 정지는 귀하가 계정 또는 계정의 콘텐츠에 접근할 수 없음을 의미합니다. 해지 시 귀하의 계정 또는 계정 접근 권한이 삭제되고, 귀하의 계정에 있는 모든 콘텐츠가 몰수 및 양도됩니다. 당사는 또한 언제든지 어떤 이유로든 누구에게든 서비스 이용을 거부할 권리를 보유합니다. 이 조항을 마련한 이유는 통계적으로 볼 때, 당사 서비스의 수십만 개 계정 중 적어도 하나는 불법적인 행위를 하고 있기 때문입니다.",
    cancellationContent3:
      "- 회사 직원이나 임원에 대한 언어적, 신체적, 서면적 또는 기타 학대(학대나 보복 위협 포함)가 발생할 경우 계정이 즉시 종료될 수 있습니다.",
    submissionsContent:
      '귀하는 귀하가 당사에 제공한 본 사이트와 관련된 모든 질문, 의견, 제안, 아이디어, 피드백 또는 기타 정보("제출물")가 기밀이 아니며 당사의 단독 재산이 됨을 인정하고 동의합니다. 당사는 모든 지적 재산권을 포함한 독점적 권리를 소유하며, 귀하에 대한 인정이나 보상 없이 상업적 또는 기타 모든 합법적인 목적을 위해 이러한 제출물을 제한 없이 사용 및 배포할 권리가 있습니다. 귀하는 이로써 해당 제출물에 대한 모든 저작인격권을 포기하며, 해당 제출물이 귀하의 독창적인 제출물이거나 귀하가 해당 제출물을 제출할 권리가 있음을 보증합니다. 귀하는 귀하의 제출물에 대한 소유권 침해 또는 도용 혐의 또는 실제 침해에 대해 당사를 상대로 어떠한 구제 수단도 없다는 데 동의합니다.',
    uptimeContent1:
      '- 서비스 이용에 따른 모든 책임은 사용자에게 있습니다. 당사는 본 서비스를 "있는 그대로", "이용 가능한 그대로" 제공합니다. 당사는 대부분의 서비스에 대해 서비스 수준 계약을 제공하지 않지만, 애플리케이션 가동 시간을 중요하게 생각합니다.',
    uptimeContent2:
      "- 귀하의 사용량이 다른 고객의 일반적인 사용량을 크게 초과하는 경우, 당사는 귀하의 계정을 일시적으로 비활성화할 권리가 있습니다. 물론, 다른 고객의 서비스 성능에 부정적인 영향을 미칠 수 있는 드문 경우를 제외하고는 어떠한 조치도 취하기 전에 귀하에게 연락을 드릴 것입니다.",
    uptimeContent3:
      "- 당사는 백업, 중복성 및 암호화를 통해 귀하의 데이터를 보호하고 보안을 유지하기 위해 다양한 조치를 취하고 있습니다. 공용 인터넷을 통한 데이터 전송에는 암호화를 적용합니다.",
    uptimeContent4:
      "- 당사는 서비스를 운영하는 데 필요한 하드웨어, 소프트웨어, 네트워킹, 스토리지 및 관련 기술을 제공하기 위해 제3자 공급업체 및 호스팅 파트너를 활용합니다.",
    siteManagementContent:
      "당사는 다음의 권리를 보유하지만 의무는 없습니다. (1) 본 서비스 약관 위반 여부를 확인하기 위해 사이트를 모니터링합니다. (2) 당사의 단독 재량에 따라 법률 또는 본 서비스 약관을 위반하는 사람에 대해 적절한 법적 조치를 취합니다. 여기에는 해당 사용자를 법 집행 기관에 신고하는 것이 포함되지만 이에 국한되지 않습니다. (3) 당사의 단독 재량에 따라 제한 없이 귀하의 기여물 또는 그 일부를 거부하거나, 접근을 제한하거나, 이용 가능성을 제한하거나, 비활성화합니다(기술적으로 가능한 범위 내에서). (4) 당사의 단독 재량에 따라 제한 없이 통지 또는 책임을 지고 크기가 너무 크거나 당사 시스템에 부담을 주는 모든 파일 및 콘텐츠를 사이트에서 제거하거나 비활성화합니다. (5) 당사의 권리와 재산을 보호하고 사이트의 적절한 기능을 촉진하도록 설계된 방식으로 사이트를 관리합니다.",
    copyrightContent1:
      "- 서비스에 게시된 모든 콘텐츠는 미국 저작권법을 준수해야 합니다.",
    copyrightContent2:
      "- 당사는 귀하가 서비스에 제공하는 자료에 대해 어떠한 지적 재산권도 주장하지 않습니다. 업로드된 모든 자료는 귀하의 소유입니다.",
    copyrightContent3:
      "- 당사는 콘텐츠를 사전 검열하지 않지만, 서비스를 통해 제공되는 모든 콘텐츠를 거부하거나 삭제할 단독 재량권(단, 의무는 아님)을 보유합니다.",
    copyrightContent4:
      "- 서비스의 이름, 디자인 및 분위기는 회사의 저작권입니다. 모든 권리는 회사에 있습니다. 회사의 명시적인 서면 허가 없이 HTML, CSS, JavaScript 또는 시각적 디자인 요소의 어떠한 부분도 복제, 복사 또는 재사용할 수 없습니다. 홍보 목적으로 회사 로고 또는 서비스 로고를 사용하려면 허가를 받아야 합니다.",
    emailUs: "이메일로 문의하세요",
    copyrightContent5:
      "로고 사용 요청. 귀하가 본 서비스 약관을 위반하는 경우, 당사는 해당 허가를 철회할 권리를 보유합니다.",
    copyrightContent6:
      "- 귀하는 회사의 명시적인 서면 허가 없이 서비스의 일부 또는 전부를 재생산, 복제, 복사, 판매, 재판매 또는 이용하거나, 서비스의 이용 또는 서비스에 대한 접근을 하지 않을 것에 동의합니다.",
    copyrightContent7:
      "- 다른 웹사이트를 수정하여 그것이 서비스나 회사와 연관되어 있다는 잘못된 인상을 주어서는 안 됩니다.",
    copyrightContent8:
      "- 당사는 타인의 지적 재산권을 존중합니다. 본 사이트에서 또는 본 사이트를 통해 제공되는 자료가 귀하가 소유하거나 관리하는 저작권을 침해한다고 생각되시면 즉시",
    contactUs: "문의하기",
    copyrightContent9:
      "귀하의 통지 사본은 통지에 명시된 자료를 게시하거나 저장한 사람에게 발송됩니다. 통지에 중대한 허위 진술을 할 경우, 관련 법률에 따라 손해 배상 책임을 질 수 있습니다. 따라서 본 사이트에 게시되었거나 본 사이트에서 링크된 자료가 귀하의 저작권을 침해하는지 확실하지 않은 경우, 먼저 변호사와 상담하는 것이 좋습니다.",
    prohibitedActivitiesIntro:
      "귀하는 당사가 사이트를 제공하는 목적 이외의 다른 목적으로 본 사이트에 접속하거나 사용할 수 없습니다. 본 사이트는 당사가 명시적으로 지지 또는 승인한 경우를 제외하고 어떠한 상업적 활동과도 연계하여 사용될 수 없습니다.",
    prohibitedActivitiesUserAgreement:
      "사이트 사용자로서 귀하는 다음 사항에 동의하지 않습니다.",
    prohibitedActivity1:
      "- 당사의 서면 허가 없이 사이트에서 데이터나 기타 콘텐츠를 체계적으로 검색하여 직접 또는 간접적으로 컬렉션, 편집물, 데이터베이스 또는 디렉토리를 생성하거나 편집합니다.",
    prohibitedActivity2:
      "- 사용자 비밀번호와 같은 민감한 계정 정보를 알아내려는 시도를 포함하여, 저희와 다른 사용자를 속이거나 사기를 치거나 오도하는 행위.",
    prohibitedActivity3:
      "- 사이트의 보안 관련 기능을 우회, 비활성화 또는 방해하는 행위(콘텐츠 사용 또는 복사를 방지 또는 제한하거나 사이트 및/또는 사이트에 포함된 콘텐츠의 사용에 대한 제한을 시행하는 기능 포함)",
    prohibitedActivity4:
      "- 당사의 판단에 따라 당사 및/또는 사이트를 비방, 훼손하거나 기타 방식으로 해를 끼칩니다.",
    prohibitedActivity5:
      "- 사이트에서 얻은 정보를 이용해 다른 사람을 괴롭히거나, 학대하거나, 해를 끼치는 행위.",
    prohibitedActivity6:
      "- 당사의 지원 서비스를 부적절하게 이용하거나, 학대 또는 부정 행위에 대한 허위 신고를 제출합니다.",
    prohibitedActivity7:
      "- 해당 법률이나 규정에 맞지 않게 사이트를 사용하는 경우",
    prohibitedActivity8: "- 사이트의 허가 없는 프레이밍이나 링크에 관여합니다.",
    prohibitedActivity9:
      "- 대문자를 과도하게 사용하거나 스팸(반복되는 텍스트를 계속 게시하는 것)을 포함하여 바이러스, 트로이 목마 또는 기타 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하여 당사자가 사이트를 지속적으로 사용하고 즐기는 것을 방해하거나 사이트의 사용, 기능, 기능, 운영 또는 유지 관리를 수정, 손상, 방해, 변경 또는 방해하는 행위를 하는 행위입니다.",
    prohibitedActivity10:
      "- 스크립트를 사용하여 댓글이나 메시지를 보내거나, 데이터 마이닝, 로봇 또는 이와 유사한 데이터 수집 및 추출 도구를 사용하는 등 시스템의 자동화된 사용에 참여합니다.",
    prohibitedActivity11:
      "- 모든 콘텐츠에서 저작권이나 기타 소유권 고지를 삭제합니다.",
    prohibitedActivity12:
      "- 다른 사용자나 사람을 사칭하거나 다른 사용자의 사용자 이름을 사용하려고 시도합니다.",
    prohibitedActivity13:
      '- GIF(Clear Graphics Interchange Format), 1×1 픽셀, 웹 버그, 쿠키 또는 이와 유사한 장치(때때로 "스파이웨어" 또는 "수동 수집 메커니즘" 또는 "PCM"이라고 함)를 포함하되 이에 국한되지 않는 수동적 또는 능동적 정보 수집 또는 전송 메커니즘 역할을 하는 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하는 행위.',
    prohibitedActivity14:
      "- 사이트 또는 사이트에 연결된 네트워크나 서비스를 방해하거나 교란하거나 부당한 부담을 주는 행위.",
    prohibitedActivity15:
      "- 사이트의 어떠한 부분이라도 귀하에게 제공하는 당사 직원이나 대리인을 괴롭히거나, 괴롭히거나, 위협하거나, 협박하는 행위.",
    prohibitedActivity16:
      "- 사이트 또는 사이트의 일부에 대한 접근을 방해하거나 제한하도록 설계된 사이트의 모든 조치를 우회하려는 시도.",
    prohibitedActivity17:
      "- Flash, PHP, HTML, JavaScript 또는 기타 코드를 포함하되 이에 국한되지 않는 사이트 소프트웨어를 복사하거나 수정합니다.",
    prohibitedActivity18:
      "- 해당 법률에서 허용하는 경우를 제외하고, 사이트를 구성하거나 어떤 식으로든 사이트의 일부를 구성하는 소프트웨어의 모든 내용을 해독, 디컴파일, 분해 또는 역엔지니어링합니다.",
    prohibitedActivity19:
      "- 표준 검색 엔진이나 인터넷 브라우저 사용으로 인해 발생할 수 있는 결과를 제외하고, 스파이더, 로봇, 치트 유틸리티, 스크래퍼 또는 오프라인 리더를 포함하되 이에 국한되지 않고 사이트에 접속하는 모든 자동화 시스템을 사용, 실행, 개발 또는 배포하거나 허가되지 않은 스크립트나 기타 소프트웨어를 사용하거나 실행합니다.",
    prohibitedActivity20:
      "- 사이트에서 구매를 하기 위해 구매 대행인이나 구매대행인을 이용하세요.",
    prohibitedActivity21:
      "- 전자적 또는 기타 수단을 통해 사용자의 사용자 이름 및/또는 이메일 주소를 수집하여 원치 않는 이메일을 발송하거나 자동화된 수단이나 허위 명목으로 사용자 계정을 생성하는 등 사이트의 무단 사용을 금지합니다.",
    prohibitedActivity22:
      "- 본 사이트를 당사와 경쟁하기 위한 노력의 일환으로 사용하거나 수익을 창출하는 사업이나 상업적 기업을 위해 본 사이트 및/또는 콘텐츠를 사용합니다.",
    prohibitedActivity23:
      "- 본 사이트를 이용하여 상품 및 서비스를 광고하거나 판매를 제안합니다.",
    prohibitedActivity24: "- 프로필을 판매하거나 다른 방식으로 양도합니다.",
    featuresContent1:
      "저희는 저희만의 경험과 시간과 피드백을 공유해 주시는 고객 여러분의 경험을 바탕으로 신중하게 서비스를 설계합니다. 하지만 모든 사람을 만족시키는 서비스란 없습니다. 저희는 저희 서비스가 고객님의 특정 요구 사항이나 기대를 충족할 것이라고 보장하지 않습니다.",
    featuresContent2:
      "모든 기능을 출시 전에 테스트합니다. 다른 소프트웨어와 마찬가지로 저희 서비스에도 버그가 있을 수 있습니다. 저희는 보고된 버그를 추적하고 해결하며, 특히 보안이나 개인정보 보호와 관련된 버그는 더욱 그렇습니다. 보고된 모든 버그가 수정되는 것은 아니며, 완벽한 오류 없는 서비스를 보장하지 않습니다.",
    correctionsContent1:
      "본 사이트에는 설명, 가격, 재고 현황 및 기타 다양한 정보를 포함하여 오타, 부정확한 정보 또는 누락된 정보가 있을 수 있습니다. 당사는 사전 고지 없이 언제든지 오류, 부정확한 정보 또는 누락된 정보를 수정하고 본 사이트의 정보를 변경 또는 업데이트할 권리를 보유합니다.",
    correctionsContent2:
      "당사는 사이트가 항상 이용 가능하다는 것을 보장할 수 없습니다. 하드웨어, 소프트웨어 또는 기타 문제가 발생하거나 사이트 관련 유지 관리가 필요할 수 있으며, 이로 인해 중단, 지연 또는 오류가 발생할 수 있습니다. 당사는 귀하에게 통지하지 않고 언제든지 어떤 이유로든 사이트를 변경, 수정, 업데이트, 일시 중단, 중단 또는 기타 방식으로 수정할 권리를 보유합니다. 귀하는 사이트 가동 중단 또는 중단으로 인해 사이트에 접속하거나 사용할 수 없음으로 인해 발생하는 모든 손실, 피해 또는 불편에 대해 당사가 어떠한 책임도 지지 않는다는 데 동의합니다. 본 서비스 약관의 어떠한 내용도 당사가 사이트를 유지 관리 및 지원하거나 이와 관련된 수정, 업데이트 또는 배포를 제공할 의무를 지는 것으로 해석되지 않습니다.",
    userDataContent:
      "당사는 사이트 성능 관리 목적으로 귀하가 사이트로 전송하는 특정 데이터와 귀하의 사이트 이용과 관련된 데이터를 보관합니다. 당사는 정기적인 데이터 백업을 수행하지만, 귀하가 전송하는 모든 데이터 또는 사이트를 이용하여 수행한 모든 활동과 관련된 모든 데이터에 대한 책임은 전적으로 귀하에게 있습니다. 귀하는 당사가 해당 데이터의 손실 또는 손상에 대해 귀하에게 어떠한 책임도 지지 않는다는 데 동의하며, 이로써 해당 데이터의 손실 또는 손상으로 인해 발생하는 당사에 대한 모든 소송 권리를 포기합니다.",
    privacyPolicyContent1:
      "저희는 데이터 개인정보 보호 및 보안을 중요하게 생각합니다.",
    privacyPolicy: "개인정보 보호정책",
    privacyPolicyContent2:
      "본 사이트를 이용함으로써 귀하는 본 서비스 약관에 포함된 당사의 개인정보 보호정책을 준수하는 데 동의합니다. 본 사이트는 미국에서 호스팅됩니다. 미국의 관련 법률과 다른 개인 정보 수집, 사용 또는 공개에 관한 법률 또는 기타 요건이 적용되는 다른 지역에서 본 사이트에 접속하는 경우, 본 사이트를 계속 이용함으로써 귀하의 데이터는 미국으로 전송되며, 귀하는 귀하의 데이터가 미국으로 전송되고 미국에서 처리되는 데 동의합니다.",
    liabilityIntro:
      "본 약관 전반에 걸쳐 책임에 대해 언급하고 있지만, 모든 내용을 한 섹션에 정리하면 다음과 같습니다.",
    liabilityContent:
      "귀하는 회사가 다음으로 인해 발생하는 직접적, 간접적, 우발적, 이익 손실, 특별, 결과적, 징벌적 또는 모범적 손해(이익 손실, 영업권 손실, 사용 손실, 데이터 손실 또는 기타 무형 손실에 대한 손해 포함하되 이에 국한되지 않음)에 대해 법률상 또는 형평성상 귀하 또는 제3자에게 책임을 지지 않는다는 사실을 명확히 이해하고 동의합니다. (1) 서비스의 사용 또는 사용 불능; (2) 콘텐츠 및 자료의 오류, 실수 또는 부정확성; (3) 사이트에 대한 귀하의 접속 및 사용으로 인해 발생하는 모든 성격의 신체 상해 또는 재산 피해; (4) 서비스를 통해 구매 또는 취득한 상품, 데이터, 정보 또는 서비스 또는 수신된 메시지 또는 체결된 거래로 인해 발생하는 대체 상품 및 서비스의 조달 비용; (5) 당사의 보안 서버에 대한 무단 접속 또는 사용 및/또는 해당 서버에 저장된 모든 개인 정보 및/또는 재무 정보; (6) 사이트로의 또는 사이트로부터의 전송의 중단 또는 중지; (7) 제3자가 사이트를 통해 또는 사이트로 전송할 수 있는 버그, 바이러스, 트로이 목마 또는 이와 유사한 것, 및/또는; (8) 콘텐츠 및 자료의 오류 또는 누락, 또는 사이트를 통해 게시, 전송 또는 기타 방식으로 제공된 콘텐츠의 사용으로 인해 발생한 모든 종류의 손실 또는 손상; (9) 서비스에서 제3자의 진술 또는 행위; (10) 계약 위반, 불법 행위(능동적이든 수동적이든 과실 포함) 또는 기타 책임 이론으로서 이 서비스 약관 또는 서비스와 관련된 기타 사항.",
    miscellaneousContent:
      "본 서비스 약관 및 사이트에 게시하거나 사이트와 관련하여 게시한 모든 정책 또는 운영 규칙은 귀하와 당사 간의 전체 계약 및 이해를 구성합니다. 당사가 본 서비스 약관의 권리 또는 조항을 행사하거나 집행하지 않더라도 해당 권리 또는 조항을 포기한 것으로 간주되지 않습니다. 본 서비스 약관은 법률에서 허용하는 최대 범위에서 적용됩니다. 당사는 언제든지 당사의 권리 및 의무의 일부 또는 전부를 타인에게 양도할 수 있습니다. 당사는 당사의 합리적인 통제 범위를 벗어난 원인으로 인해 발생한 손실, 손해, 지연 또는 불이행에 대해 책임을 지지 않습니다. 본 서비스 약관의 조항 또는 조항의 일부가 불법, 무효 또는 집행 불가능하다고 판단되는 경우, 해당 조항 또는 조항의 일부는 본 서비스 약관에서 분리 가능한 것으로 간주되며 나머지 조항의 유효성 및 집행 가능성에 영향을 미치지 않습니다. 본 서비스 약관 또는 사이트 사용의 결과로 귀하와 당사 간에 합작 투자, 파트너십, 고용 또는 대리 관계가 생성되지 않습니다. 귀하는 본 서비스 약관을 작성했다는 이유로 본 서비스 약관이 당사에 불리하게 해석되지 않는다는 데 동의합니다. 귀하는 본 서비스 약관의 전자적 형태와 본 서비스 약관을 체결하기 위한 당사자들의 서명 부족을 근거로 귀하가 가질 수 있는 모든 방어수단을 포기합니다.",
    contactUsContent1: "서비스 약관에 대해 궁금한 사항이 있으면",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "특징",
    UnlimitedTranscription: "무제한 필사",
    BulkUpload: "대량 업로드",
    Accuracy: "96% 정확도",
    Pricing: "가격",
    UseCases: "사용 사례",
    AllUseCases: "모든 사용 사례",
    Podcasters: "팟캐스터",
    Journalists: "언론인들",
    ContentCreators: "콘텐츠 제작자",
    Researchers: "연구원들",
    BusinessTeams: "비즈니스 팀",
    Educators: "교육자들",
    Resources: "자원",
    YouTubetoMP4: "유튜브에서 MP4로",
    StartFreeTrial: "무료로 체험해보세요"
  },
  Footer: {
    des: "세계 최초의 진정한 무제한 AI 음성 번역 서비스. 제한도, 제한도 없이, 오직 창작의 자유만 누리세요.",
    Features: "특징",
    UseCases: "사용 사례",
    Company: "회사",
    featureMenus: ["무제한 필사", "대량 업로드", "96% 정확도"],
    useCaseMenus: [
      "모든 사용 사례",
      "팟캐스터",
      "언론인들",
      "콘텐츠 제작자",
      "연구원들",
      "비즈니스 팀",
      "교육자들"
    ],
    companyMenus: [
      "에 대한",
      "가격",
      "은둔",
      "자귀"
    ]
  },
  Index: {
    Hero: {
      badge: '더 이상 "수축 인플레이션"은 없습니다. 사실상 무제한입니다.',
      h1: "한도에 대한 지불 중단:",
      gradient: "진정한 무제한 AI 필사",
      subtitle: "전체 팟캐스트 아카이브를 업로드하세요. 모든 인터뷰를 녹취하세요. 최대 50개의 파일을 한 번에 처리하세요. 월별 사용량 제한이나 업로드 제한도 없습니다. 마지막으로, 실제 필요에 맞춰 확장 가능한 녹취를 제공합니다.",
      FreeTrial: "무료로 체험해 보세요 - 신용 카드 불필요",
      HowWorks: "작동 방식 보기",
      Unlimited: "무제한 파일 업로드",
      NoCap: "월별 통화 제한 없음",
      Hour: "10시간 파일 지원",
      ExploreUseCases: "사용 사례 탐색"
    },
    Stats: {
      monthlyMinutes: "월별 분",
      fileUploads: "파일 업로드",
      batchProcessing: "일괄 처리",
      maxFileLength: "최대 파일 길이"
    },
    FeaturesGrid: {
      try_now: "지금 시도해보세요",
      no_signup: "가입 필요 없음",
      experience_unltd: "진정으로 무한한 필사를 경험하세요",
      upload_50: "최대 50개의 파일을 한 번에 업로드하세요.",
      no_limits: "더 이상 숨겨진 한계는 없습니다",
      no_surprises: "더 이상 놀라움은 없다",
      transparency: "다른 사람들이 조용히 통화 시간을 줄이거나 작은 글씨로 상한선을 숨기는 반면, 우리는 급진적인 투명성을 믿습니다.",
      feat_unltd: "실제로 무제한",
      feat_unltd_desc: '약관에 묻힌 "공정 사용 정책"도 없고, "무제한"이라는 명목으로 저장 용량 제한도 없습니다. 전체 아카이브를 업로드하고, 모든 것을 기록하세요. 진심입니다.',
      feat_bulk: "대량 업로드 자유",
      feat_bulk_desc: '"평생 가져오기 3회"나 "매달 파일 10개"에 지치셨나요? 50개의 파일을 필요한 만큼 한 번에 업로드하세요. 잔여 파일 처리에 안성맞춤입니다.',
      feat_batch: "일괄 처리",
      feat_batch_desc: "팟캐스트 시즌 전체를 하룻밤 사이에 처리하세요. 50개의 인터뷰를 한 번에 업로드하세요. 자는 동안 AI가 작업하게 하세요. 아침에 일어나면 완성된 대본을 확인하세요.",
      feat_accuracy: "96% 정확도",
      feat_accuracy_desc: "스마트 구두점, 최대 20명의 화자에 대한 화자 일기 기능을 갖춘 업계 최고의 AI로, 악센트와 기술 용어를 완벽하게 처리합니다.",
      feat_langs: "100개 이상의 언어",
      feat_langs_desc: "100개 이상의 언어로 텍스트 변환하고, 249개 이상의 언어로 번역하세요. 다른 언어에 대한 추가 요금은 없습니다. 글로벌 콘텐츠를 하나의 가격으로 간편하게 이용하세요.",
      feat_pro: "전문적인 기능",
      feat_pro_desc: "정확한 오디오/비디오 위치 지정을 위한 단어 수준 타임스탬프, 빠른 대화 전환 중에도 정확한 화자 식별, 쉽게 읽을 수 있도록 단락, 문장, 구두점이 포함된 완벽한 형식의 텍스트."
    },
    UseCases: {
      built_for: "을 위해 만들어졌습니다",
      "heavy_users": "당신과 같은 헤비 유저",
      "join_users": '"shrinkflation" 서비스에서 전환한 YouTuber, 콘텐츠 제작자 및 팟캐스터와 함께하세요.',
      "podcasters": {
        "title": "팟캐스터",
        "des": "전체 백 카탈로그를 업로드하세요. 모든 에피소드에 대한 쇼 노트를 만드세요. 더 이상 어떤 에피소드를 녹취할지 고민할 필요가 없습니다."
      },
      "content_creators": {
        "title": "콘텐츠 제작자",
        "des": "비디오 라이브러리를 검색 가능한 텍스트로 변환하세요. 모든 항목에 자막을 생성하세요. 시간을 세지 않고, 그냥 만들어 보세요."
      },
      "journalists": {
        "title": "언론인들",
        "des": '모든 인터뷰를 한 번에 업로드하세요. 마감일을 앞두고 "매달 파일 10개"라는 부담은 이제 그만! 모든 것을 처리하세요.'
      },
      researchers: {
        title: "연구원들",
        des: "수 시간 분량의 포커스 그룹과 인터뷰를 녹취하세요. 전체 연구 내용을 한 번에 업로드하세요. 정확한 화자 식별 정보를 얻으세요."
      },
      business_teams: {
        title: "비즈니스 팀",
        des: "통화 제한에 대한 걱정 없이 모든 통화를 녹음하세요. 일부 대화뿐 아니라 모든 대화에 대한 AI 인사이트를 얻을 수 있습니다."
      },
      educators: {
        title: "교육자들",
        des: "전체 강의 시리즈를 필사하세요. 모든 콘텐츠를 접근성 있게 제공하세요. 시간 제한으로 인해 강좌를 선택하지 않아도 됩니다."
      }
    },
    Testimonials: {
      title: "사랑받는",
      highlighted_users: "50,000명 이상의 사용자",
      subtitle: "전문가들이 제한된 대안보다 NeverCap를 선택하는 이유를 알아보세요",
      Mike: {
        "text": "와, 이거 진짜 잘 되네! 3년 동안 팟캐스트를 하면서 모든 걸 바보처럼 직접 녹취하고 있었네. 에피소드 6개를 한꺼번에 업로드했더니 나와 공동 진행자가 완벽하게 분리됐어. 망가졌다고 생각했던 커피숍 에피소드는? 정말 깔끔하게 녹취됐네. 다시는 이런 걸 직접 타이핑하는 일은 없을 거야.",
        "author": "마이크 로드리게스",
        "role": "팟캐스트 진행자"
      },
      Sarah: {
        "text": "저는 온라인으로 강의를 하는데 영상에 자막이 필요했어요. 다른 도구 세 개를 써봤는데, 제한이 이상하거나 시간이 엄청 오래 걸렸어요. 그런데 이 도구는... 정말... 효과가 있더라고요. 스페인어 강의를 업로드했는데, 2분 만에 완벽한 자막이 나왔어요. 청각 장애가 있는 제 학생들이 정말 만족스러워하네요. 이 도구를 좀 더 빨리 찾았으면 좋았을 텐데요!",
        "author": "사라 첸",
        "role": "온라인 교사"
      },
      Jessica: {
        "text": "면접 때 이걸 써 봤는데, 정확도가 정말 믿을 수 없을 정도예요. 2시간 동안 엉터리 영어와 스페인어로 면접을 봤는데, 타임스탬프까지 전부 다 맞았어요. 예전에는 인턴에게 한 달에 200달러씩 주고 필기만 시켰었는데, 이제 매달 돈을 아낄 수 있게 됐네요.",
        "author": "제시카 파크",
        "role": "프리랜서 저널리스트"
      }
    },
    PricingPreview: {
      "title": "투명한 가격 책정",
      "highlighted_text": "숨겨진 대문자 없음",
      "subtitle": "원하는 플랜을 선택하세요. 별표도, 작은 글씨도, 놀라운 것도 없습니다."
    },
    FAQSection: {
      "title": "자주 묻는 질문",
      "titleHighlight": "질문",
      "questions": [
        {
          "q": "무제한 정책",
          "question": "정말 무제한인가요? 조건이 뭔가요?",
          "answer": "네, 정말 무제한입니다! 월별 통화 제한이나 초과 요금도 없습니다. 유일한 제한은 기술적인 부분입니다. 개별 파일은 최대 10시간 또는 5GB까지 가능하며, 한 번에 최대 50개의 파일을 처리할 수 있습니다. 하지만 한 달 내내 원하는 만큼 배치를 업로드할 수 있습니다."
        },
        {
          "q": "정확성",
          "question": "이 필사본은 얼마나 정확한가요?",
          "answer": "96%의 선명한 오디오 정확도를 보장합니다. 저희 AI는 수백만 시간 분량의 다양한 콘텐츠를 학습하여 억양, 전문 용어, 그리고 여러 화자의 음성을 매우 정확하게 처리합니다. 까다로운 오디오의 경우, 스마트한 오디오 향상 기능이 결과를 개선하는 데 도움을 드립니다."
        },
        {
          "q": "언어들",
          "question": "어떤 언어를 지원하시나요?",
          "answer": "영어, 스페인어, 중국어, 힌디어, 아랍어, 프랑스어 등 100개 이상의 언어로 텍스트 변환을 지원합니다. 또한, 249개 언어로 텍스트 변환을 지원하여 글로벌 콘텐츠에 적합합니다."
        },
        {
          "q": "속도",
          "question": "전사 속도는 얼마나 빠른가요?",
          "answer": "번개처럼 빠른 속도! 1시간 분량의 오디오 파일은 보통 5분 이내에 처리됩니다. 일괄 처리 기능을 사용하면 50개의 파일을 동시에 업로드하여 병렬로 처리할 수 있습니다. 대부분의 사용자는 밤새도록 라이브러리 전체가 필사되어 있는 것을 보고 잠에서 깨게 됩니다."
        },
        {
          "q": "해제",
          "question": "언제든지 취소할 수 있나요?",
          "answer": "물론입니다! 계약이나 취소 수수료가 없습니다. 대시보드에서 언제든지 구독을 업그레이드, 다운그레이드 또는 취소하실 수 있습니다. 구독을 취소하더라도 결제 기간이 끝날 때까지는 계속 이용하실 수 있습니다."
        },
        {
          "q": "보안",
          "question": "내 데이터는 안전한가요?",
          "answer": "고객님의 보안은 저희의 최우선 과제입니다. 저희는 SOC 2 인증을 받았으며, 모든 데이터에 256비트 암호화를 적용하고 고객님의 콘텐츠를 모델 학습에 절대 사용하지 않습니다. 언제든지 파일을 삭제하실 수 있으며, 30일 후 자동으로 삭제됩니다. GDPR 및 CCPA를 준수합니다."
        },
        {
          "q": "내보내기 형식",
          "question": "어떤 내보내기 형식을 사용할 수 있나요?",
          "answer": "PDF, Word(DOCX), Excel, CSV, SRT 자막, 일반 텍스트(TXT), VTT 캡션 등 원하는 형식으로 대본을 다운로드하세요. 어떤 워크플로우에도 완벽하게 대응합니다."
        },
        {
          "q": "파일 형식",
          "question": "어떤 오디오 및 비디오 파일을 업로드할 수 있나요?",
          "answer": "MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV 등 거의 모든 오디오 및 비디오 형식을 지원합니다. 재생이 가능하면 텍스트 변환도 가능합니다."
        }
      ]
    },
    CTASection: {
      "title": "한계를 벗어나 자유로워질 준비가 되셨나요?",
      "subtitle": "진정한 무제한 필사 기능으로 전환한 50,000명 이상의 전문가와 함께하세요.",
      "button": "NeverCap 무료로 체험해보세요",
      "disclaimer": "무료 플랜에는 신용 카드가 필요하지 않습니다. • 무제한 액세스를 위해 언제든지 업그레이드하세요."
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: '더 이상 "수축 인플레이션"은 없다',
      heroTitleLine1: "진정한 무제한",
      heroTitleLine2: "AI 전사",
      heroSubtitle: "Trint는 한 달에 최대 50시간으로 제한하고 Otter는 한 달에 최대 10개의 파일로 제한하는 반면, Trint는 실제로 약속한 대로 무제한의 변환을 제공합니다. 숨겨진 제한이 없습니다.",
      primaryCta: "무료로 체험해 보세요 - 신용 카드 불필요",
      secondaryCta: "진실을 보세요",
      comparisonBadLabel: "다른 사람들이 하는 일",
      comparisonBadTitle: "곳곳에 숨겨진 한계",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "트린트:",
      comparisonBadItem1Text: '"무제한" = 월 50시간 제한',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "수달:",
      comparisonBadItem2Text: "평생 가져오기 3회(무료), 월 10회(Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "반딧불이:",
      comparisonBadItem3Text: "800분 저장 제한",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "설명:",
      comparisonBadItem4Text: "최대 30시간/월",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "이용 약관에 숨겨져 있음",
      comparisonGoodLabel: "우리가 하는 일",
      comparisonGoodTitle: "실제로 무제한",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "월별 통화 제한 없음",
      comparisonGoodItem1Text: "항상",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "무제한 파일 업로드",
      comparisonGoodItem2Text: "언제나",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "저장 제한 없음",
      comparisonGoodItem3Text: "조금도",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50개 파일 일괄 업로드",
      comparisonGoodItem4Text: "언제든지",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "투명한 정책",
      comparisonGoodItem5Text: "선불",
      feature1Label: "제한 없음",
      feature1TitlePart1: "1,000시간을 필사하다?",
      feature1TitlePart2: "동일한 가격.",
      feature1Description: "분 단위 계산은 그만, 제한 시간 확인은 그만. 한 달에 10시간이든 10,000시간이든 똑같은 정액 요금만 내면 됩니다. 초과 요금도 없고, 예상치 못한 청구서도 없습니다.",
      feature1Point1Icon: "✓",
      feature1Point1Text: '"공정 사용" 정책 속임수는 없습니다',
      feature1Point2Icon: "✓",
      feature1Point2Text: "X시간 이후에는 조절이 불가능합니다.",
      feature1Point3Icon: "✓",
      feature1Point3Text: "월말 불안 없음",
      feature1Stat1Number: "무한대",
      feature1Stat1Label: "월별 근무 시간",
      feature1Stat2Number: "0달러",
      feature1Stat2Label: "초과 요금",
      feature1Stat3Number: "24시간 연중무휴",
      feature1Stat3Label: "언제든지 업로드 가능",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "투명한",
      feature2Label: "대량 자유",
      feature2TitlePart1: "업로드하세요",
      feature2TitlePart2: "전체 아카이브",
      feature2Description: "Otter는 평생 가져오기 3개를 무료로 제공하며, Pro 버전은 월 10개를 제공합니다. 무제한으로 이용하실 수 있습니다. 팟캐스트 백로그, 모든 인터뷰, 수년간의 녹음 자료를 업로드하세요. 제한은 없습니다.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "배치당 50개 파일",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10시간 파일 지원",
      feature2Point3Icon: "✓",
      feature2Point3Text: "잠자는 동안 처리하세요",
      feature2TableRow1Label: "오터 프리",
      feature2TableRow1Value: "평생 수입품 3개",
      feature2TableRow2Label: "오터 프로",
      feature2TableRow2Value: "10개 파일/월",
      feature2TableRow3Label: "트린트",
      feature2TableRow3Value: "월 50시간 상한",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "진정한 무제한 ✓",
      feature3Label: "사회적 증명",
      feature3TitlePart1: "사용자는",
      feature3TitlePart2: "매일 전환",
      feature3Description: '\"저는 Otter에 1년에 100달러를 내고 있는데, 한 달에 파일 가져오기가 10개로 제한돼 있어요. 무제한으로 가져올 수 있는 다른 대안이 나오는 순간, 저는 바로 떠날 거예요!" - 실제 Reddit 사용자',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50,000명 이상의 사용자가 전환되었습니다.",
      feature3Point2Icon: "✓",
      feature3Point2Text: '오터의 "수축 인플레이션"에서',
      feature3Point3Icon: "✓",
      feature3Point3Text: "다시는 돌아가지 않을 거야",
      feature3Stat1Number: "5만+",
      feature3Stat1Label: "행복한 사용자",
      feature3Stat2Number: "100만+",
      feature3Stat2Label: "처리된 파일",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "정확성",
      feature3Stat4Number: "무한대",
      feature3Stat4Label: "숨은 비용 없음",
      trustBadge1Number: "무한대",
      trustBadge1Label: "분/월",
      trustBadge2Number: "100개 이상",
      trustBadge2Label: "언어",
      trustBadge3Number: "96%",
      trustBadge3Label: "정확성",
      trustBadge4Number: "50",
      trustBadge4Label: "일괄 업로드",
      ctaTitle: "가짜 무제한 요금 지불 중단",
      ctaSubtitle: "진정으로 무제한적인 필사본으로 전환한 수천 명의 사람들과 함께하세요",
      finalCta: "NeverCap 무료로 체험해보세요"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "대량 업로드 자유",
      heroTitleLine1: "50개의 파일을 업로드하세요.",
      heroTitleHighlight: "모든 것을 처리하세요.",
      heroSubtitle: "Otter는 평생 가져오기를 3회 제공합니다. 3회. 평생 동안. 필요할 때마다 한 번에 최대 50개의 파일을 무제한으로 업로드할 수 있습니다.",
      primaryCta: "대량 업로드 시작 →",
      secondaryCta: "한계를 보세요",
      redditQuote: '"3년 치 팟캐스트 에피소드를 녹취해야 하는데, 오터는 평생 수입이 3개라고 하네요. 3개라니. 정말 모욕적이네요."',
      redditAuthorIcon: "📍",
      redditAuthorText: "r/podcasting으로 인한 실제 좌절",
      comparisonSectionTitlePart1: "그만큼",
      comparisonSectionTitleHighlight: "터무니없는 한계",
      comparisonSectionTitlePart2: "그들은 강요한다",
      comparisonSubtitle: "경쟁자가 콘텐츠 처리 능력을 제한하는 방법",
      limitCard1Service: "오터 프리",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "평생 수입",
      limitCard1DescriptionLine2: "(그렇습니다. 평생 동안요)",
      limitCard2Service: "오터 프로",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "월별 파일",
      limitCard2DescriptionLine2: "($100/년 플랜)",
      limitCard3Service: "설명",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "한 번에 파일",
      limitCard3DescriptionLine2: "(순차적 업로드)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "무한대",
      limitCard4DescriptionLine1: "무제한 업로드",
      limitCard4DescriptionLine2: "배치당 50개 파일",
      feature1Label: "배치 파워",
      feature1TitlePart1: "처리하세요",
      feature1TitleHighlight: "전체 아카이브",
      feature1TitlePart2: "밤새",
      feature1Description: '잠자리에 들기 전에 파일 50개를 업로드하세요. 일어나자마자 모든 내용을 확인하세요. 줄을 설 필요도, 기다릴 필요도, "업그레이드해 주세요" 메시지도 없습니다. 순수한 처리 능력만 손끝에 있습니다.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "동시 업로드 50개",
      feature1Point2Icon: "✓",
      feature1Point2Text: "병렬 처리",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10시간 파일 지원",
      feature1Point4Icon: "✓",
      feature1Point4Text: "파일당 최대 5GB",
      uploadAnimationText1: "50개 파일",
      uploadAnimationText2: "드롭 앤 프로세스",
      fileBadge1: "팟캐스트_ep_001.mp3",
      fileBadge2: "인터뷰_원본.mp4",
      fileBadge3: "회의_2024.wav",
      fileBadge4: "강의_전체.mov",
      fileBadge5: "+ 46개 파일 더...",
      feature2Label: "속도",
      feature2TitlePart1: "업로드부터",
      feature2TitleHighlight: "몇 시간 안에 완료",
      feature2Description: "저희의 병렬 처리 인프라 덕분에 50개의 파일을 한꺼번에 처리할 필요가 없습니다. 모든 파일이 동시에 기록됩니다. 이전에는 몇 주 걸리던 작업이 이제는 몇 시간 만에 완료됩니다.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1시간 파일: 5분",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50개 파일: 병렬 처리",
      feature2Point3Icon: "✓",
      feature2Point3Text: "완료되면 이메일 알림",
      timelineStep1Icon: "1",
      timelineStep1Title: "업로드",
      timelineStep1Time: "0분",
      timelineStep2Icon: "2",
      timelineStep2Title: "처리 중",
      timelineStep2Time: "5~30분",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI 마법",
      timelineStep3Time: "30~60분",
      timelineStep4Icon: "✓",
      timelineStep4Title: "완벽한",
      timelineStep4Time: "< 2시간",
      feature3Label: "자유",
      feature3TitlePart1: "줄을 설 필요가 없습니다.",
      feature3TitleHighlight: "기다릴 필요 없음.",
      feature3TitlePart2: "제한 없음.",
      feature3Description: '다른 업체들은 가상 줄에서 기다리게 하거나 "우선 처리"를 위해 업그레이드하게 하지만, 저희는 모든 업로드를 신속하게 처리합니다. 여러분의 콘텐츠는 소중하며, 더 이상 기다릴 필요가 없습니다.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "우선순위 계층 없음",
      feature3Point2Icon: "✓",
      feature3Point2Text: "모든 사람에게 동일한 속도",
      feature3Point3Icon: "✓",
      feature3Point3Text: "언제든지 업로드 가능, 24시간 연중무휴",
      feature3VisualNumber: "24시간 연중무휴",
      feature3VisualTitle: "항상 준비됨",
      feature3VisualSubtext: "영감이 떠오를 때마다 업로드하세요",
      useCasesTitlePart1: "완벽한",
      useCasesTitleHighlight: "헤비 업로더",
      useCasesSubtitle: "대량 업로드로 위기를 극복하는 실제 사례",
      useCase1Title: "팟캐스트 아카이브",
      useCase1Description: "3년 분량의 에피소드를 한 번에 업로드하세요. 전체 백 카탈로그에 대한 대본을 작성하세요. 모든 에피소드에 대한 SEO 콘텐츠를 제작하세요.",
      useCase2Title: "코스 생성",
      useCase2Description: "모든 강의 비디오를 동시에 처리하세요. 학생들이 쉽게 접근할 수 있는 대본을 만들고, 검색 가능한 강의 자료를 구축하세요.",
      useCase3Title: "인터뷰 백로그",
      useCase3Description: "산더미처럼 쌓인 녹취록을 정리하세요. 몇 주 치의 자료를 단 몇 시간 만에 처리하세요. 마감일도 당황하지 않고 맞추세요.",
      useCase4Title: "유튜브 라이브러리",
      useCase4Description: "전체 채널에 자막을 생성하세요. 동영상 콘텐츠로 블로그 게시물을 만들고, 모든 동영상의 SEO를 개선하세요.",
      useCase5Title: "회의 기록 보관소",
      useCase5Description: "수개월 분의 회의 녹화본을 업로드하세요. 검색 가능한 회의록을 만들 수 있습니다. 중요한 결정 사항을 다시는 잃어버리지 마세요.",
      useCase6Title: "연구 데이터",
      useCase6Description: "포커스 그룹을 대량으로 처리합니다. 모든 참여자 인터뷰를 녹취합니다. 정성적 데이터를 효율적으로 분석합니다.",
      ctaTitle: "더 많은 업로드를 구걸하는 것을 멈추세요",
      ctaSubtitle: "실제로 작동하는 무제한 대량 처리를 받으세요",
      finalCta: "지금 50개 파일 업로드 →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "업계 최고의 정확도",
      heroTitleLine1: "정확도 96%.",
      heroTitleHighlight: "모든 단어가 중요합니다.",
      heroSubtitle: "12개 주요 언어로 업계 최고 수준의 정확도를 제공합니다. 완벽한 동기화를 위한 단어 단위 타임스탬프. 빠른 대화를 처리하는 스마트 화자 식별 기능. 실제로 읽을 수 있는 전문적인 서식.",
      primaryCta: "정확도 테스트 →",
      secondaryCta: "언어 보기",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "정확도",
      statCard1DescriptionLine2: "12개 주요 언어",
      statCard2Percentage: "95% 이상",
      statCard2DescriptionLine1: "정확도",
      statCard2DescriptionLine2: "악센트 및 방언",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "단어 수준",
      statCard3DescriptionLine2: "타임스탬프 정밀도",
      languageSectionTitlePart1: "12개 주요 언어에서 96% 정확도",
      languageSubtitle: "글로벌 콘텐츠를 위한 전문가급 필사",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "영어",
      languageCard1Accuracy: "96% 정확도",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "스페인 사람",
      languageCard2Accuracy: "96% 정확도",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "만다린 오렌지",
      languageCard3Accuracy: "96% 정확도",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "프랑스 국민",
      languageCard4Accuracy: "96% 정확도",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "독일 사람",
      languageCard5Accuracy: "96% 정확도",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "일본어",
      languageCard6Accuracy: "96% 정확도",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "한국인",
      languageCard7Accuracy: "96% 정확도",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "포르투갈 인",
      languageCard8Accuracy: "96% 정확도",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "러시아인",
      languageCard9Accuracy: "96% 정확도",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "이탈리아 사람",
      languageCard10Accuracy: "96% 정확도",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "네덜란드 사람",
      languageCard11Accuracy: "96% 정확도",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "아라비아 말",
      languageCard12Accuracy: "96% 정확도",
      moreLanguagesText: "+ 95% 이상의 정확도로 지원되는 88개 언어 추가",
      feature1Label: "정도",
      feature1TitlePart1: "단어 수준",
      feature1TitleHighlight: "타임스탬프",
      feature1Description: "모든 단어가 오디오 위치와 완벽하게 동기화됩니다. 클릭 가능한 대본을 만들고, 정확한 자막을 생성하고, 녹음의 특정 순간으로 바로 이동할 수 있습니다. 전문가들이 신뢰하는 100ms의 정확도를 경험해 보세요.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms 타임스탬프 정밀도",
      feature1Point2Icon: "✓",
      feature1Point2Text: "비디오 편집에 완벽합니다",
      feature1Point3Icon: "✓",
      feature1Point3Text: "클릭 가능한 대화형 대본",
      feature1Point4Icon: "✓",
      feature1Point4Text: "프레임 단위의 정확한 자막",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "스피커 1",
      transcriptLine1Text: "오늘의 팟캐스트 에피소드에 오신 것을 환영합니다.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "스피커 2",
      transcriptLine2Text: "저를 쇼에 초대해 주셔서 감사합니다!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "스피커 1",
      transcriptLine3Text: "본론으로 들어가보겠습니다.",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "스피커 2",
      transcriptLine4Text: "물론입니다. 이에 대해 논의하게 되어 기쁩니다.",
      feature2Label: "스마트 AI",
      feature2TitlePart1: "손잡이",
      feature2TitleHighlight: "빠른 대화",
      feature2Description: "저희 AI는 중복된 말, 끊김, 그리고 빠른 대화 속에서도 화자를 정확하게 식별합니다. 화자가 자주 끼어드는 인터뷰, 팟캐스트, 회의에 적합합니다.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "최대 20명의 화자를 식별합니다",
      feature2Point2Icon: "✓",
      feature2Point2Text: "방해를 완벽하게 처리합니다",
      feature2Point3Icon: "✓",
      feature2Point3Text: "중복된 음성으로 작업",
      feature2Point4Icon: "✓",
      feature2Point4Text: "크로스토크에서 정확도를 유지합니다",
      feature2VisualNumber: "20",
      feature2VisualTitle: "확인된 연사",
      feature2VisualSubtext: "빠른 대화에서도",
      feature3Label: "가독성",
      feature3TitlePart1: "아주",
      feature3TitleHighlight: "서식이 지정된 텍스트",
      feature3Description: "더 이상 텍스트로 가득 찬 벽은 필요 없습니다. 저희 AI가 자동으로 단락, 문장, 구두점을 제자리에 정확하게 추가합니다. 그 결과, 읽기 편하고 훑어보기 쉬운 대본이 완성됩니다.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "스마트 문단 나누기",
      feature3Point2Icon: "✓",
      feature3Point2Text: "정확한 구두점",
      feature3Point3Icon: "✓",
      feature3Point3Text: "적절한 대문자 사용",
      feature3Point4Icon: "✓",
      feature3Point4Text: "깨끗하고 스캔 가능한 출력",
      formattingTitle: "이전과 이후",
      formattingBeforeLabel: "❌ 기타:",
      formattingBeforeText: "그래서 오늘은 우리가 작업해 온 새로운 기능에 대해 이야기하려고 합니다. 여러분이 정말 좋아할 것 같아요. 오랫동안 사용자들이 요청해 온 기능이 마침내 완성되었습니다.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "오늘은 저희가 작업해 온 새로운 기능들에 대해 이야기해 보겠습니다. 분명 마음에 드실 거예요. 오랫동안 사용자분들이 요청해 오셨던 기능들을 드디어 완성해 냈거든요.",
      comparisonSubtitle: "정확성",
      comparisonSectionTitle: "비교",
      comparisonDes: "우리가 경쟁자들과 어떻게 비교되는지 확인하세요",
      tableHeader1: "특징",
      tableHeader2: "NeverCap",
      tableHeader3: "오터.에이아이",
      tableHeader4: "설명",
      tableHeader5: "회전",
      tableRow1Feature: "정확도(선명한 오디오)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "단어 수준 타임스탬프",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "스피커 식별",
      tableRow3NeverCap: "20명의 연사",
      tableRow3Otter: "16명의 스피커",
      tableRow3Descript: "10명의 스피커",
      tableRow3Rev: "✕",
      tableRow4Feature: "크로스토크를 처리합니다",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "제한된",
      tableRow4Descript: "제한된",
      tableRow4Rev: "✕",
      tableRow5Feature: "스마트 서식",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "기초적인",
      tableRow6Feature: "12개 언어 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "96%의 정확도를 경험하세요",
      ctaSubtitle: "가장 어려운 오디오를 업로드하고 차이점을 확인하세요",
      finalCta: "지금 바로 정확도를 테스트해 보세요 →"
    }
  },
  Pricing: {
    Hero: {
      "title": "간단하고 투명한 가격 책정",
      "highlighted_text": "숨겨진 대문자 없음",
      "description": "필요에 맞는 플랜을 선택하세요. 언제든지 업그레이드 또는 다운그레이드할 수 있습니다. 약정이 없으므로 예상치 못한 문제도 없습니다."
    },
    Cards: {
      "title": "간단하고 투명한 가격 책정.",
      "highlighted_text": "숨겨진 대문자 없음.",
      "description": "필요에 맞는 플랜을 선택하세요. 언제든지 업그레이드 또는 다운그레이드할 수 있습니다. 약정이 없으므로 예상치 못한 문제도 없습니다.",
      "plans": [
        {
          "name": "무료",
          "price": "0달러",
          "period": "월",
          "discount": "저희 서비스를 체험해보시기에 완벽합니다",
          "limits": {
            "title": "일일 한도",
            "items": [
              "3개 파일/일(약 90분/일)",
              "파일당 최대 30분(≤250MB)",
              "한 번에 1개의 파일 업로드",
              "표준 우선순위 대기열"
            ]
          },
          "features": {
            "title": "특징",
            "items": [
              "100개 이상의 언어",
              "스피커 라벨",
              "번역",
              "모든 내보내기 형식"
            ]
          },
          "cta": {
            "text": "무료로 시작하세요. 신용카드가 필요 없습니다.",
            "button": "무료로 시작하세요"
          }
        },
        {
          "name": "프로 월간",
          "price": "17.99달러",
          "period": "월",
          "discount": "첫 달 9.99달러",
          "limits": {
            "title": "월별 상한 없음",
            "items": [
              "무제한 총 분",
              "최대 10시간 / 파일당 5GB",
              "한 번에 50개의 파일 업로드",
              "우선순위 대기열"
            ]
          },
          "features": {
            "title": "모든 것이 무료이며,",
            "items": [
              "단어 수준 타임스탬프",
              "고급 스피커 식별",
              "서식이 지정된 문단 및 구두점",
              "우선 지원"
            ]
          },
          "cta": {
            "text": "무제한 통화. 우선 속도. 일괄 업로드.",
            "button": "프로로 가다"
          },
          "badge": "가장 인기 있는"
        },
        {
          "name": "프로 연간",
          "price": "8.99달러",
          "period": "월",
          "discount": "연간 청구 $107.88",
          "limits": {
            "title": "Pro Monthly와 동일",
            "items": [
              "무제한 총 분",
              "최대 10시간 / 파일당 5GB",
              "한 번에 50개의 파일 업로드",
              "우선순위 대기열"
            ]
          },
          "features": {
            "title": "모든 것이 무료이며,",
            "items": [
              "단어 수준 타임스탬프",
              "고급 스피커 식별",
              "서식이 지정된 문단 및 구두점",
              "우선 지원"
            ]
          },
          "cta": {
            "text": "무제한 통화. 우선 속도. 일괄 업로드.",
            "button": "프로로 가다"
          },
          "badge": "최고의 가치 - 50% 절약"
        }
      ],
      "disclaimer": '"무제한"은 월별 한도나 인위적인 속도 저하가 없음을 의미합니다. 공정 사용은 악의적인 자동화 또는 재배포에 적용됩니다.'
    },
    ComparisonTable: {
      "header": {
        "title": "모든 기능 비교",
        "highlighted_text": "모든 기능",
        "subtitle": "각 플랜의 혜택을 정확히 확인하세요. 숨겨진 제한은 없습니다."
      },
      "plans": [
        "특징",
        "무료",
        "프로 월간",
        "프로 연간"
      ],
      "features": [
        {
          "name": "가격",
          "values": [
            "월 0달러",
            {
              "main": "월 17.99달러",
              "note": "첫 달 9.99달러"
            },
            {
              "main": "월 8.99달러",
              "note": "연간 107.88달러 청구됨"
            }
          ]
        },
        {
          "name": "월별 통화",
          "values": ["~2,700(90/일)", "제한 없는", "제한 없는"]
        },
        {
          "name": "최대 파일 기간",
          "values": ["30분", "10시간", "10시간"]
        },
        {
          "name": "최대 파일 크기",
          "values": ["250MB", "5GB", "5GB"]
        },
        {
          "name": "일괄 업로드",
          "values": ["1개 파일", "50개의 파일", "50개의 파일"]
        },
        {
          "name": "처리 속도",
          "values": ["기준", "우선 사항", "우선 사항"]
        },
        {
          "name": "지원 언어",
          "values": ["100개 이상의 언어", "100개 이상의 언어", "100개 이상의 언어"]
        },
        {
          "name": "번역",
          "values": ["진실", "진실", "진실"]
        },
        {
          "name": "스피커 식별",
          "values": ["기초적인", "고급(20명 발표)", "고급(20명 발표)"]
        },
        {
          "name": "단어 수준 타임스탬프",
          "values": ["거짓", "진실", "진실"]
        },
        {
          "name": "서식이 지정된 단락",
          "values": ["거짓", "진실", "진실"]
        },
        {
          "name": "내보내기 형식",
          "values": ["모든 형식", "모든 형식", "모든 형식"]
        },
        {
          "name": "지원하다",
          "values": ["이메일", "우선 이메일", "우선 이메일"]
        },
        {
          "name": "데이터 보존",
          "values": ["30일", "영원히", "영원히"]
        }
      ]
    },
    FAQ: {
      "title": "자주 묻는 질문",
      "titleHighligt": "질문",
      "items": [
        {
          "q": "무제한 정책",
          "question": "정말 무제한인가요?",
          "answer": "네! Pro 플랜은 월별 통화 제한이 없습니다. 유일한 제한은 기술적인 부분입니다. 최대 파일 길이는 10시간, 파일 크기는 5GB입니다. 필요한 만큼 파일을 처리할 수 있습니다."
        },
        {
          "q": "계획 변경",
          "question": "언제든지 요금제를 변경할 수 있나요?",
          "answer": "물론입니다! 대시보드에서 언제든지 구독을 취소하실 수 있습니다. 필요할 때마다 업그레이드하거나 다운그레이드하세요."
        },
        {
          "q": "결제 방법",
          "question": "어떤 결제 방법을 사용하실 수 있나요?",
          "answer": "당사는 안전하고 편리한 결제를 위해 모든 주요 신용카드, 직불카드, PayPal을 수락합니다."
        },
        {
          "q": "무료 체험",
          "question": "Pro에 대한 무료 체험판이 있나요?",
          "answer": "네! Pro를 7일 동안 무료로 체험해 보세요. 신용카드는 필요 없습니다. 게다가 구독하시면 첫 달 45% 할인 혜택을 받으실 수 있습니다."
        },
        {
          "q": "파일_보관",
          "question": "제 파일을 얼마나 오랫동안 보관하시나요?",
          "answer": "무료 플랜: 30일. 프로 플랜: 영구! 성적 증명서는 계정에서 언제든지 확인하실 수 있습니다."
        },
        {
          "q": "데이터 보안",
          "question": "데이터 보안은 어떻습니까?",
          "answer": "저희는 SOC 2 인증을 받았으며 256비트 암호화를 사용합니다. 고객님의 콘텐츠는 모델 학습에 절대 사용되지 않습니다. 고객님의 데이터는 고객님의 것입니다."
        }
      ]
    },
    CTA: {
      "title": "무제한으로 즐길 준비가 되셨나요?",
      "subtitle": "제한 없이 필사하는 50,000명 이상의 전문가와 함께하세요",
      "button": "NeverCap 무료로 체험해 보세요 →",
      "disclaimer": "신용 카드 필요 없음 • 몇 초 안에 필사 시작"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "을 위해 만들어졌습니다",
      heavyUsers: "헤비 유저",
      whoActuallyNeed: "실제로 무제한이 필요한 사람은 누구입니까?",
      heroSubtitle: "수년간의 백로그를 보유한 팟캐스터부터 수백 건의 인터뷰를 진행하는 연구자까지, 전문가들이 NeverCap를 활용하여 업로드 제한과 시간 제한에서 벗어나는 방법을 알아보세요.",
      podcasters: {
        title: "팟캐스터",
        pain: '"어떤 에피소드에 대본을 넣을지 선택하는 걸 멈추세요"',
        description: "전체 팟캐스트 아카이브를 한 번에 업로드하세요. 쇼 노트를 생성하고, SEO를 개선하고, 시간을 낭비하지 않고 콘텐츠를 재활용할 수 있습니다.",
        benefits: {
          benefit1: "3개 에피소드만 업로드하지 말고 모든 에피소드를 업로드하세요",
          benefit2: "SEO 친화적인 쇼 노트 생성",
          benefit3: "검색 가능한 아카이브 만들기",
          benefit4: "블로그 콘텐츠로 재활용"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "에피소드"
          },
          stat2: {
            number: "200시간",
            label: "저장됨"
          },
          stat3: {
            number: "3배",
            label: "SEO 트래픽"
          }
        }
      },
      journalists: {
        title: "저널리스트 및 작가",
        pain: '"마감 압박과 업로드 제한이 맞물려"',
        description: "마감일 전에 모든 인터뷰를 일괄 업로드하세요. 대본을 즉시 검색하고 중요한 인용구를 놓치지 마세요.",
        benefits: {
          benefit1: "마감일 전에 일괄 업로드",
          benefit2: "모든 인터뷰를 한 번에 검색하세요",
          benefit3: "타임스탬프가 포함된 정확한 견적",
          benefit4: "악센트와 언어를 다루세요"
        },
        stats: {
          stat1: {
            number: "30세 이상",
            label: "인터뷰/월"
          },
          stat2: {
            number: "96%",
            label: "정확성"
          },
          stat3: {
            number: "5분",
            label: "시간당"
          }
        }
      },
      contentCreators: {
        title: "콘텐츠 제작자",
        pain: '"접근성은 비용이 많이 들어서는 안 됩니다"',
        description: "YouTube 채널 전체에 자막을 추가하세요. 여러 언어로 자막을 생성하고 동영상 SEO를 즉시 개선하세요.",
        benefits: {
          benefit1: "모든 영상에 한 번에 자막 넣기",
          benefit2: "249개 언어 번역",
          benefit3: "YouTube에 적합한 SRT 파일",
          benefit4: "비디오 SEO 순위 높이기"
        },
        stats: {
          stat1: {
            number: "100개 이상",
            label: "비디오"
          },
          stat2: {
            number: "100개 이상",
            label: "언어"
          },
          stat3: {
            number: "249",
            label: "번역"
          }
        }
      },
      researchers: {
        title: "연구원 및 학자",
        pain: '"정성적 데이터는 줄을 서서 기다려서는 안 됩니다."',
        description: "전체 연구 조사를 한 번에 처리하세요. 포커스 그룹, 인터뷰, 패널 토론을 완벽하게 발표자를 파악하여 진행하세요.",
        benefits: {
          benefit1: "대량으로 포커스 그룹을 처리합니다",
          benefit2: "20개 스피커 식별",
          benefit3: "분석 소프트웨어로 내보내기",
          benefit4: "GDPR 준수 보안"
        },
        stats: {
          stat1: {
            number: "100개 이상",
            label: "공부하다"
          },
          stat2: {
            number: "96%",
            label: "그룹 정확도"
          },
          stat3: {
            number: "GDPR",
            label: "규정 준수"
          }
        }
      },
      businessTeams: {
        title: "비즈니스 팀",
        pain: '"회의 녹화는 간편해야 합니다."',
        description: "회의를 직접 녹음하거나 오디오 파일을 업로드하여 즉시 녹취하세요. 무제한 대화로 검색 가능한 아카이브를 구축하고 중요한 논의 내용을 다시는 잃어버리지 마세요.",
        benefits: {
          benefit1: "직접 오디오 녹음 및 필사",
          benefit2: "무제한 회의 녹화",
          benefit3: "검색 가능한 회의 아카이브",
          benefit4: "오디오 파일을 즉시 업로드하세요"
        },
        stats: {
          stat1: {
            number: "살다",
            label: "녹음"
          },
          stat2: {
            number: "즉각적인",
            label: "업로드"
          },
          stat3: {
            number: "20세 이상",
            label: "스피커"
          }
        }
      },
      educators: {
        title: "교육자들",
        pain: '"YouTube 동영상에는 즉각적인 필사가 필요합니다."',
        description: "YouTube 링크를 붙여넣기만 하면 즉시 대본과 자동 생성된 자막을 받아볼 수 있습니다. 어떤 교육용 동영상이든 접근 가능하고 검색 가능한 콘텐츠로 변환하세요.",
        benefits: {
          benefit1: "YouTube 링크 직접 변환",
          benefit2: "비디오 자막 자동 생성",
          benefit3: "전체 과정을 필사하세요",
          benefit4: "검색 가능한 강의 아카이브"
        },
        stats: {
          stat1: {
            number: "1-클릭",
            label: "유튜브 붙여넣기"
          },
          stat2: {
            number: "자동",
            label: "캡션"
          },
          stat3: {
            number: "100개 이상",
            label: "언어"
          }
        }
      },
      quotes: {
        title: "실제 사용자,",
        titleHighlight: "진정한 자유",
        subtitle: "인위적인 한계에서 벗어난 전문가들의 이야기를 들어보세요.",
        testimonials: {
          mike: {
            textBefore: '"나는 가지고 있었다',
            highlight: "3년간의 에피소드",
            textAfter: "번역 안 된 채로 앉아 있었어. 오터가 셋을 고르라고 했어. 셋. NeverCap 150화 전부 한 주말에 업로드할게.",
            name: "마이크 로드리게스",
            role: "팟캐스트 진행자"
          },
          jessica: {
            textBefore: '"프리랜서 저널리스트로서 저는 Trint의',
            highlight: "100달러/월",
            textAfter: ", 하지만 저는 Otter의 한 달에 10개 파일 제한으로 작업할 수 없습니다. NeverCap가 제 경력을 구해주었습니다.",
            name: "제시카 파크",
            role: "프리랜서 저널리스트"
          },
          sarah: {
            textBefore: '"우리 연구팀은',
            highlight: "200시간",
            textAfter: "포커스 그룹 녹음의 경우, 한 달에 한 번씩 녹음하는 대신 주말 동안 모든 작업을 처리했습니다.",
            name: "사라 첸 박사",
            role: "수석 연구원"
          },
          carlos: {
            textBefore: '"저는 스페인어로 교육 콘텐츠를 만듭니다. NeverCap 완벽하게 번역하고',
            highlight: "영어로 번역됩니다",
            textAfter: '더 넓은 도달 범위를 위해. 한계는 없고, 오직 성장만 있을 뿐입니다."',
            name: "카를로스 마르티네즈",
            role: "유튜브 교육자"
          }
        }
      },
      industries: {
        title: "전 세계적으로 신뢰받는",
        titleHighlight: "산업",
        subtitle: "전 세계 전문가들은 진정한 무제한으로 전환하고 있습니다.",
        list: {
          media: "미디어 및 출판",
          education: "교육",
          healthcare: "헬스케어",
          technology: "기술",
          finance: "재원",
          legal: "합법적인"
        }
      },
      cta: {
        title: "귀하의 사용 사례에도 무제한이 필요합니다",
        subtitle: "분을 세는 것을 멈추고 창조를 시작한 50,000명 이상의 전문가와 함께하세요.",
        button: "무한한 여정을 시작하세요 →"
      }
    },
    Podcasters: {
      badge: "🎙️ 팟캐스터를 위해 제작됨",
      heroTitle: "당신의 글을 필사하세요",
      heroTitleHighlight: "전체 팟캐스트 아카이브",
      heroSubtitle: "전체 백 카탈로그를 업로드하세요. 모든 에피소드에 대한 쇼 노트를 만드세요. 더 이상 어떤 에피소드를 녹취할지 고민할 필요가 없습니다. 한 달에 무제한으로 50개의 에피소드를 한 번에 처리할 수 있습니다.",
      ctaPrimary: "무료로 필사 시작",
      ctaSecondary: "작동 방식 보기",
      trustBadge1: "🎙️ 10,000명 이상의 팟캐스터",
      trustBadge2: "∞ 무제한 에피소드",
      trustBadge3: "📝 SEO 준비 완료 대본",
      stats: {
        stat1: {
          number: "무한대",
          label: "에피소드/월"
        },
        stat2: {
          number: "50",
          label: "일괄 업로드"
        },
        stat3: {
          number: "10시간",
          label: "최대 에피소드 길이"
        },
        stat4: {
          number: "96%",
          label: "정확성"
        }
      },
      problemTitle: "그만큼",
      problemTitleHighlight: "팟캐스트 필사 문제",
      problemSubtitle: "다른 서비스에서는 어떤 에피소드를 필사할 가치가 있는지 선택하게 합니다.",
      problems: {
        problem1: {
          title: "업로드 제한 아카이브 삭제",
          description: "Otter는 무료로 평생 가져오기 3개를 제공하고, Pro에서는 월 10개를 제공합니다. 3년 분량의 에피소드를 어떻게 녹취하나요?"
        },
        problem2: {
          title: "SEO 기회의 부재",
          description: "번역되지 않은 에피소드는 모두 SEO 트래픽 손실로 이어집니다. 하지만 Descript는 한 달에 최대 30시간으로 제한합니다."
        },
        problem3: {
          title: "성장과 함께 비용이 폭발적으로 증가",
          description: "팟캐스트가 커질수록 필사 비용이 엄청나게 치솟습니다. 시간당 2달러의 초과 요금이 부과되면 확장이 불가능합니다."
        }
      },
      solutionTitle: "그만큼",
      solutionTitleHighlight: "NeverCap 해결책",
      solutionDescription: "진정한 무제한 자막 제작. 전체 아카이브를 업로드하세요. 모든 새 에피소드를 자막으로 제작하세요. 대규모 쇼 노트를 생성하세요. 제한도, 용량도 없이, 오직 성장만 있을 뿐입니다.",
      workflowTitle: "귀하의 팟캐스트 워크플로,",
      workflowTitleHighlight: "쉽게 한",
      workflowSubtitle: "몇 분 만에 녹음부터 SEO 최적화된 쇼 노트까지",
      workflow: {
        step1: {
          title: "에피소드 업로드",
          description: "50개의 에피소드를 한 번에 업로드하세요. MP3, MP4, WAV - 모두 처리해드립니다."
        },
        step2: {
          title: "AI가 필사합니다",
          description: "화자 식별 정확도 96%. 인터뷰에 최적입니다."
        },
        step3: {
          title: "스마트 서식",
          description: "AI는 자동으로 문단, 문장, 구두점을 추가합니다."
        },
        step4: {
          title: "게시 및 순위",
          description: "웹사이트로 내보내고 SEO 트래픽 증가를 확인하세요."
        }
      },
      featuresTitle: "특징 팟캐스터",
      featuresTitleHighlight: "실제로 필요하다",
      featuresSubtitle: "팟캐스터를 위해, 팟캐스터가 만들었습니다",
      features: {
        feature1: {
          title: "다중 스피커 감지",
          description: "최대 20명의 발표자를 자동으로 식별하고 라벨을 지정합니다. 패널 토론, 인터뷰, 공동 진행 쇼에 적합합니다."
        },
        feature2: {
          title: "타임스탬프 챕터",
          description: "YouTube 설명에 클릭 가능한 타임스탬프를 생성하세요. 청취자가 원하는 부분으로 바로 이동할 수 있도록 하세요."
        },
        feature3: {
          title: "스마트 서식",
          description: "단락, 문장, 구두점을 자동으로 추가합니다. 깔끔하고 읽기 쉬운 대본을 얻을 수 있습니다. 후반 작업 시간을 절약하세요."
        },
        feature4: {
          title: "SEO 최적화",
          description: "검색 엔진에 맞춰 작성된 대본입니다. 팟캐스트의 검색 가능성을 높이고 새로운 청취자에게 다가가세요."
        },
        feature5: {
          title: "100개 이상의 언어",
          description: "어떤 언어로든 텍스트로 변환하세요. 249개 이상의 언어로 번역하세요. 전 세계 고객에게 손쉽게 다가가세요."
        },
        feature6: {
          title: "일괄 처리",
          description: "잠자리에 들기 전에 50개의 에피소드를 업로드하세요. 아침에 일어나 대본을 완성하세요. 밤새도록 전체 아카이브를 처리하세요."
        }
      },
      testimonialsTitle: "팟캐스터가 만든",
      testimonialsTitleHighlight: "스위치",
      testimonialsSubtitle: "실제 팟캐스터들의 실제 이야기",
      testimonials: {
        mike: {
          text: "3년 동안 팟캐스트를 하면서 모든 걸 바보처럼 직접 녹취했어요. 에피소드 6개를 한꺼번에 업로드했더니 저와 공동 진행자가 완벽하게 분리됐죠. 망가졌다고 생각했던 커피숍 에피소드는? 정말 깔끔하게 녹취됐어요. 다시는 이런 걸 직접 타이핑하는 일은 없을 거예요.",
          name: "마이크 로드리게스",
          role: '"The Daily Grind" 팟캐스트 진행자'
        },
        sarah: {
          text: '"Otter는 한 달에 파일 가져오기를 10개로 제한했어요. 150개의 에피소드가 쌓여 있었거든요. [*=*] 모든 것을 3번에 나눠서 업로드할 수 있게 해줬어요. 오래된 에피소드에 대본을 추가한 이후로 자연 트래픽이 300%나 증가했어요. 정말 투자 대비 효과가 있는 것 같아요."',
          name: "사라 첸",
          role: '"Tech Talks Today"의 제작자'
        }
      },
      comparisonTitle: "팟캐스터들이 선택하는 이유",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "우리가 경쟁자들과 어떻게 비교되는지 확인하세요",
      comparison: {
        headers: {
          feature: "특징",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "설명 작성자"
        },
        rows: {
          monthlyLimit: {
            feature: "월간 에피소드 제한",
            nevercap: "제한 없는",
            otter: "~13화(1200분)",
            descript: "~30회 (30시간)"
          },
          uploadLimit: {
            feature: "파일 업로드 제한",
            nevercap: "제한 없는",
            otter: "한 달에 10개",
            descript: "한 번에 1개씩"
          },
          batchProcessing: {
            feature: "일괄 처리",
            nevercap: "50개의 파일",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "최대 에피소드 길이",
            nevercap: "10시간",
            otter: "90분",
            descript: "제한 없는"
          },
          speakerDetection: {
            feature: "스피커 감지",
            nevercap: "20명의 연사",
            otter: "16명의 스피커",
            descript: "10명의 스피커"
          },
          smartFormatting: {
            feature: "스마트 서식",
            nevercap: "✓ 완벽함",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "가격",
            nevercap: "월 17.99달러",
            otter: "월 16.99달러",
            descript: "30달러/월"
          }
        }
      },
      ctaTitle: "모든 에피소드의 필사 시작",
      ctaSubtitle: "제한에 대해 걱정하지 않는 10,000명 이상의 팟캐스터와 함께하세요",
      ctaButton: "첫 50개 에피소드를 무료로 업로드하세요 →",
      ctaDisclaimer: "신용 카드 필요 없음 • 무제한 에피소드 처리 • 언제든지 취소 가능"
    },
    Journalists: {
      hero: {
        badge: "📰 저널리스트 및 작가를 위한",
        title: "모든 인터뷰를 필사하세요.",
        titleHighlight: "견적을 놓치지 마세요.",
        subtitle: "어떤 인터뷰를 녹취할지 고민하지 마세요. 모든 녹음 파일을 한 번에 업로드하고, 모든 자료를 즉시 검색하여 업로드에 대한 걱정 없이 마감일을 맞추세요.",
        ctaPrimary: "무제한 업로드 시작 →",
        ctaSecondary: "작동 방식 보기",
        stats: {
          uploads: {
            number: "무한대",
            label: "파일 업로드"
          },
          accuracy: {
            number: "96%",
            label: "정확성"
          },
          speed: {
            number: "5분",
            label: "시간당"
          }
        },
        dashboard: {
          title: "인터뷰 대기열",
          status: "• 모든 처리",
          interviews: {
            cityCouncil: {
              title: "시의회 회의",
              duration: "2시간 15분 • 업로드 중...",
              action: "처리 중"
            },
            expertInterview: {
              title: "전문가 인터뷰 - 첸 박사",
              duration: "45분 • 필사 중...",
              action: "96% 완료"
            },
            pressConference: {
              title: "기자 회견",
              duration: "1시간 30분 • 준비 완료",
              action: "보기 →"
            },
            phoneInterview: {
              title: "전화 인터뷰 - 출처",
              duration: "35분 • 준비 완료",
              action: "보기 →"
            }
          }
        }
      },
      problem: {
        title: "그만큼",
        titleHighlight: "기자 필사 문제",
        subtitle: "다른 서비스에서는 어떤 인터뷰를 필사할 가치가 있는지 선택하게 합니다.",
        problems: {
          uploadLimits: {
            title: "업로드 제한으로 인해 조사가 중단됨",
            description: "Otter Pro에서는 매달 10개의 파일을 가져올 수 있습니다. 3주간의 조사 인터뷰를 어떻게 녹취하시나요?"
          },
          missingQuotes: {
            title: "중요한 인용문이 누락되었습니다",
            description: "모든 녹취되지 않은 인터뷰에는 기사의 핵심 인용구가 포함될 수 있습니다. 하지만 트린트는 한 달에 최대 50시간으로 제한합니다."
          },
          costExplosion: {
            title: "마감일이 다가오면 비용이 폭발적으로 늘어납니다",
            description: "조사가 심화될수록 필사 비용은 급등합니다. 한 달에 100달러의 추가 요금을 내면 속보를 전하는 것은 불가능합니다."
          }
        },
        solution: {
          title: "그만큼",
          titleHighlight: "NeverCap 해결책",
          description: "진정한 무제한 필사. 조사 내용 전체를 업로드하세요. 모든 인터뷰를 필사하고, 모든 인용문을 즉시 검색하세요. 제한 없이, 오직 저널리즘만을 위해."
        }
      },
      solution: {
        title: "마지막으로,",
        titleHighlight: "진정한 자유",
        titleSuffix: "언론인을 위한",
        subtitle: "무엇이든 업로드하세요. 무엇이든 기록하세요. 무엇이든 검색하세요.",
        solutions: {
          unlimitedUploads: {
            label: "무제한 업로드",
            title: "전체 조사 내용을 일괄 업로드하세요",
            description: "더 이상 어떤 인터뷰를 녹취할지 고민할 필요가 없습니다. 50개의 파일을 한 번에 업로드하세요. 몇 달 치 녹음 파일을 하룻밤 사이에 처리하세요. 모든 조사 내용이 녹취됩니다.",
            points: {
              simultaneousUpload: "50개의 파일을 동시에 업로드",
              noLimits: "월별 업로드 제한 없음",
              processWhileWrite: "글을 쓰는 동안 처리하세요",
              longRecordings: "10시간 녹화 지원"
            },
            visual: {
              number: "50",
              label: "한 번에 파일"
            }
          },
          instantSearch: {
            label: "즉시 검색",
            title: "몇 초 안에 견적을 찾으세요",
            description: "모든 대본을 즉시 검색하세요. 3개월 전의 완벽한 명언을 찾아보세요. 노트에서 중요한 문장을 더 이상 잃어버리지 마세요.",
            points: {
              searchAll: "모든 인터뷰 검색",
              wordTimestamps: "단어 수준 타임스탬프",
              jumpToMoments: "정확한 순간으로 이동",
              exportCitations: "인용문과 함께 내보내기"
            },
            searchDemo: {
              placeholder: "기후 정책 성명",
              resultsText: "4개의 인터뷰에서 발견됨:",
              results: {
                mayorInterview: '"...우리의 기후 정책은 변화할 것입니다..."',
                expertPanel: '"...정책 성명서에는 분명히 다음과 같은 내용이 나와 있습니다..."'
              }
            }
          },
          professionalAccuracy: {
            label: "전문적인 정확성",
            title: "96% 정확도로 견적 가능",
            description: "정확한 필사본을 받아 직접 인용할 수 있습니다. 악센트, 전문 용어, 빠른 대화도 문제없이 처리합니다. 실제로 읽기 쉬운 완벽한 서식을 제공합니다.",
            points: {
              accuracyGuarantee: "96% 정확도 보장",
              handlesAccents: "악센트와 방언을 다룹니다",
              smartPunctuation: "스마트 구두점 및 문단",
              speakerIdentification: "스피커 식별"
            },
            visual: {
              accuracy: "96%",
              label: "정확도 비율",
              transcript: {
                speaker1: '"조사 결과, 재무 보고서에 상당한 불일치가 있는 것으로 드러났습니다."',
                speaker2: '"구체적인 차이점에 대해 자세히 설명해 주실 수 있나요?"'
              }
            }
          }
        }
      },
      features: {
        title: "모든 것",
        titleHighlight: "언론인의 필요",
        subtitle: "귀하의 워크플로를 존중하는 전문 도구",
        featuresList: {
          languages: {
            title: "100개 이상의 언어",
            description: "12개 주요 언어로 전 세계 인터뷰 소스를 96%의 정확도로 제공합니다."
          },
          exportFormats: {
            title: "내보내기 형식",
            description: "Word, PDF, SRT, TXT. 모든 워크플로우와 호환됩니다."
          },
          sourceProtection: {
            title: "소스 보호",
            description: "은행 수준의 암호화. 정보 출처는 기밀로 유지됩니다."
          },
          timestamps: {
            title: "타임스탬프",
            description: "정확한 오디오 장면으로 바로 이동하려면 인용문을 클릭하세요."
          },
          teamSharing: {
            title: "팀 공유",
            description: "편집자와 협업하고, 안전하게 대본을 공유하세요."
          },
          mobileReady: {
            title: "모바일 준비 완료",
            description: "휴대폰에서 업로드하세요. 어디서든 대본을 검토하세요."
          },
          smartFormatting: {
            title: "스마트 서식",
            description: "읽기 쉬운 필사본을 위한 자동 문단 및 구두점."
          },
          batchProcessing: {
            title: "일괄 처리",
            description: "한 번에 50개의 파일을 업로드하세요. 자는 동안 밤새 작업하세요."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "업로드 제한 때문에 3년 동안 인터뷰 내용을 녹취하지 못한 채 방치되어 있었습니다. NeverCap 주말 한 번에 모든 걸 처리할 수 있게 해 줬습니다. 정말 획기적인 아이디어였습니다.",
          name: "제시카 파크",
          role: "프리랜서 저널리스트, 전 Otter 사용자"
        }
      },
      cta: {
        title: "필사 시작",
        titleHighlight: "제한 없이",
        subtitle: "업로드 횟수 계산을 중단하고 스토리에 집중하기 시작한 수천 명의 언론인과 함께하세요.",
        ctaPrimary: "무제한 무료 체험 →",
        ctaSecondary: "가격 보기"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 콘텐츠 제작자를 위한",
        title: "캡션을 입력하세요",
        titleHighlight: "전체 채널",
        titleSuffix: "분을 세지 않고",
        subtitle: "어떤 동영상에 자막을 넣을지 고민할 필요 없어요. YouTube 라이브러리 전체를 처리하고, 100개 이상의 언어로 자막을 생성하고, 어떤 플랫폼에서든 바로 동영상을 가져올 수 있습니다. 월별 제한이나 업로드 제한 없이, 순수한 창작의 자유를 만끽하세요.",
        ctaPrimary: "무제한 자막 시작 →",
        ctaSecondary: "작동 방식 보기",
        stats: {
          videos: {
            number: "무한대",
            label: "비디오/월"
          },
          languages: {
            number: "100개 이상",
            label: "언어"
          },
          accuracy: {
            number: "96%",
            label: "정확성"
          },
          platforms: {
            number: "10+",
            label: "플랫폼"
          }
        }
      },
      platforms: {
        title: "모든 플랫폼에서 가져오기 및 변환",
        platformNames: {
          youtube: "유튜브",
          facebook: "페이스북",
          twitter: "X (트위터)",
          dropbox: "드롭박스",
          googleDrive: "구글 드라이브",
          vimeo: "비메오",
          tiktok: "틱톡",
          instagram: "인스타그램"
        }
      },
      features: {
        title: "당신이 필요로하는 모든 것",
        titleHighlight: "스케일 콘텐츠",
        subtitle: "전문적인 한계가 없는 전문적인 도구",
        oneClickImport: {
          label: "원클릭 가져오기",
          title: "링크 붙여넣기.",
          titleHighlight: "대본 받기",
          description: "더 이상 다운로드하고 다시 업로드할 필요가 없습니다. YouTube, TikTok, Instagram 링크를 붙여넣기만 하면 바로 대본을 받아볼 수 있습니다. 채널 전체의 백로그를 주말 한 번에 처리하세요.",
          points: {
            directYoutube: "YouTube 링크 직접 변환",
            multiplePlatforms: "10개 이상의 플랫폼에서 가져오기",
            batchPlaylists: "전체 재생목록 일괄 처리",
            autoSync: "채널과 자동 동기화"
          },
          demo: {
            instruction: "비디오 URL을 붙여넣으세요:",
            url: "https://youtube.com/watch?v=...",
            status: "가져오기 및 필사..."
          }
        },
        globalReach: {
          label: "글로벌 리치",
          title: "100개 이상의 언어.",
          titleHighlight: "제로 리미츠.",
          description: "100개 이상의 언어로 자동 번역하여 전 세계 시청자에게 다가가세요. 여러 언어 자막을 동시에 생성하세요. 추가 비용이나 월별 번역량 제한이 없습니다.",
          points: {
            highAccuracy: "12개 주요 언어에서 96% 정확도",
            unlimitedTranslations: "무제한 번역 포함",
            multicultural: "다문화 콘텐츠에 적합",
            autoDetect: "소스 언어 자동 감지"
          },
          visual: {
            number: "100개 이상",
            title: "지원 언어",
            subtitle: "한 번 번역하면 모든 사람에게 전달됩니다"
          }
        },
        flexibleExport: {
          label: "유연한 수출",
          title: "모든 형식",
          titleHighlight: "당신은 필요합니다",
          description: "워크플로우에 적합한 형식으로 내보내세요. YouTube용 SRT 파일부터 웹 플레이어용 VTT 파일, 또는 스크립트용 편집 가능한 문서까지, 모든 내보내기는 무제한이며 모든 플랜에 포함되어 있습니다.",
          points: {
            videoFormats: "비디오 플랫폼을 위한 SRT 및 VTT",
            editingFormats: "편집용 DOCX 및 PDF",
            dataAnalysis: "데이터 분석을 위한 CSV",
            simpleScripts: "간단한 스크립트용 TXT"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "텍스트",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "업로드부터",
        titleHighlight: "게시됨",
        titleSuffix: "몇 분 안에",
        subtitle: "전체 콘텐츠 라이브러리에 캡션을 추가하는 가장 빠른 방법",
        steps: {
          pasteLinks: {
            title: "링크 붙여넣기",
            description: "YouTube, TikTok 또는 다른 비디오 링크를 추가하거나 파일을 직접 업로드하세요."
          },
          autoTranscribe: {
            title: "자동 변환",
            description: "AI는 96%의 정확도로 처리합니다. 억양과 여러 화자를 지원합니다."
          },
          editTranslate: {
            title: "편집 및 번역",
            description: "자막을 더욱 완벽하게 만드세요. 100개 이상의 언어로 즉시 번역할 수 있습니다."
          },
          exportPublish: {
            title: "내보내기 및 게시",
            description: "원하는 형식으로 다운로드하고, 플랫폼에 업로드하세요. 완료!"
          }
        }
      },
      testimonials: {
        title: "창작자들은",
        titleHighlight: "매일 전환",
        subtitle: "제한된 계획에서 무한한 자유로",
        carlos: {
          textBefore: "저는 스페인어로 교육 콘텐츠를 만듭니다. NeverCap 완벽하게 번역하고",
          textAfter: "더 넓은 도달 범위를 위해. 제한 없이, 오직 성장만 있을 뿐. 다국어 자막을 추가한 후 채널 조회수가 3배나 증가했습니다.",
          highlight: "영어로 번역됩니다",
          name: "카를로스 마르티네즈",
          role: "YouTube 교육자 • 구독자 25만 명"
        },
        sarah: {
          textBefore: "설명 $30/월을 원함",
          textAfter: "500개가 넘는 영상이 밀렸어요. NeverCap 주말에 모든 걸 다 처리해 드릴게요. 자막 덕분에 SEO가 향상되어 첫 달에 투자한 비용이 아깝지 않았어요.",
          highlight: "30시간",
          name: "사라 리",
          role: "라이프스타일 블로거 • 구독자 18만 명"
        },
        jake: {
          textBefore: "그만큼",
          textAfter: "이 기능은 정말 획기적인 기능입니다. 더 이상 아무것도 다운로드하지 않아도 됩니다. 붙여넣고, 텍스트로 변환하면 끝입니다. TikTok에 올릴 팟캐스트 클립을 처리하는 게 이보다 더 쉬울 순 없죠.",
          highlight: "YouTube 직접 가져오기",
          name: "제이크 윌슨",
          role: "팟캐스트 진행자 • 상위 1% 크리에이터"
        },
        yuki: {
          textBefore: "저는 5개 언어로 콘텐츠를 제작합니다. 다른 서비스는 유료입니다.",
          textAfter: ". NeverCap는 무제한 번역을 제공합니다. 제대로 된 원어민 자막을 사용하기 시작한 이후로 해외 시청자가 400% 증가했습니다.",
          highlight: "번역당",
          name: "다나카 유키",
          role: "게임 크리에이터 • 구독자 50만 명"
        }
      },
      cta: {
        title: "오늘, 당신의 채널 전체에 자막이 추가되었습니다.",
        subtitle: "분 단위의 계산을 멈추고 창작을 시작한 50,000명 이상의 크리에이터와 함께하세요.",
        button: "무제한 자막 시작 →"
      }
    },
    Researchers: {
      heroBadge: "학업적 우수성을 위해 구축됨",
      heroTitle1: "모든 인터뷰를 필사하세요.",
      heroTitle2: "모든 데이터를 분석하세요.",
      heroSubtitle: "어떤 포커스 그룹을 녹취할지 고민하지 마세요. 20명의 참가자가 서로 말을 섞는 상황에서도 96%의 정확도와 완벽한 화자 식별로 모든 정성적 데이터를 처리하세요.",
      heroCtaPrimary: "무료로 체험해 보세요 - 신용 카드 불필요",
      heroCtaSecondary: "작동 방식 보기",
      statsInterviewHours: "인터뷰 시간",
      statsAccuracy: "정확성",
      statsSpeakersId: "스피커 ID",
      statsCompliant: "규정 준수",
      problemTitle: "연구 필사 문제",
      problemSubtitle: "다른 서비스에서는 어떤 데이터를 필사할 가치가 있는지 선택하게 합니다.",
      problemCard1Title: "업로드 제한으로 인해 연구 중단",
      problemCard1Desc: "Otter는 평생 가져오기 3개를 제공합니다. 200시간 분량의 포커스 그룹을 어떻게 녹취하시나요?",
      problemCard2Title: "중요한 데이터 누락",
      problemCard2Desc: "모든 녹취되지 않은 인터뷰는 획기적인 통찰력을 담고 있을 수 있습니다. 하지만 Rev는 최소 분당 2달러를 청구합니다.",
      problemCard3Title: "보조금이 사라지다",
      problemCard3Desc: "데이터 세트가 커질수록 필사 비용은 폭발적으로 늘어납니다. 포커스 그룹당 500달러로는 확장이 불가능합니다.",
      solutionTitle: "NeverCap 솔루션",
      solutionDesc: "진정한 무제한 필사. 연구 내용 전체를 업로드하세요. 모든 인터뷰를 필사하고, 모든 데이터를 분석하세요. 제한이나 제한 없이, 오직 연구만 가능합니다.",
      feature1Label: "제한 없음",
      feature1Title: "한 번에 전체 연구를 처리하세요",
      feature1Desc: '오늘 밤 200시간 분량의 인터뷰를 모두 업로드하세요. 아침에 일어나면 검색 가능한 완전한 대본을 볼 수 있습니다. 월별 제한도, 파일당 제한도, "공정 사용"이라는 헛소리도 없습니다.',
      feature1Point1: "50개 파일을 동시에 일괄 업로드",
      feature1Point2: "종단 연구를 완전히 처리합니다",
      feature1Point3: "성적증명서에는 저장 제한이 없습니다.",
      feature1Point4: "NVivo, MAXQDA, Atlas.ti로 내보내기",
      feature1Visual1: "무제한 시간",
      feature1Visual2: "10시간이든 10,000시간이든 가격은 동일합니다",
      feature2Label: "스마트 AI",
      feature2Title: "네일 포커스 그룹",
      feature2Desc: "저희 AI는 최대 20명의 화자를 서로 겹쳐서 말하거나, 서로 말을 끊거나, 모두 동시에 말을 하는 경우에도 추적합니다. 모든 음성을 정확하게 포착하고 분류합니다.",
      feature2Point1: "20개 스피커 식별",
      feature2Point2: "크로스토크 및 중단을 처리합니다.",
      feature2Point3: "이름을 바꿀 수 있는 스피커 라벨",
      feature2Point4: "모든 단어의 타임스탬프",
      conversationParticipant1: "참가자 1",
      conversationText1: "우리가 직면한 가장 큰 장벽은 바로 치료비입니다...",
      conversationParticipant2: "참가자 2",
      conversationText2: "물론입니다. 하지만 접근성은 다음과 같다고 덧붙이고 싶습니다.",
      conversationParticipant3: "참가자 3",
      conversationText3: "—방해해서 죄송하지만, 교통도 엄청 중요하죠.",
      conversationText4: "네! 제가 말하려고 했던 게 바로 그거예요.",
      conversationParticipant4: "참가자 4",
      conversationText5: "시골 지역에서는 비용, 접근성, 운송, 이 세 가지가 모두 중요합니다.",
      feature3Label: "정도",
      feature3Title: "96%의 정확도 유지",
      feature3Desc: "전문 용어, 강한 악센트, 그리고 특정 분야 전문 용어를 전문가처럼 능숙하게 구사합니다. 출판, 동료 심사, 그리고 논문 심사 위원회에도 충분히 적합한 정확성을 갖추고 있습니다.",
      feature3Point1: "의학 및 과학 용어",
      feature3Point2: "100개 이상의 언어 및 방언",
      feature3Point3: "Verbatim 및 Clean 읽기 모드",
      feature3Point4: "모든 형식으로 편집하고 내보내기",
      feature3Visual1: "연구 등급 정확도",
      feature3Visual2: "50,000명 이상의 연구자들이 신뢰합니다",
      feature4Label: "보안",
      feature4Title: "IRB 준비 보안",
      feature4Desc: "귀하의 민감한 연구 데이터는 엔터프라이즈급 보안으로 보호됩니다. GDPR 준수, HIPAA 지원 옵션, IRB 요건을 충족하는 완벽한 감사 추적 기능을 제공합니다.",
      feature4Point1: "종단간 암호화",
      feature4Point2: "GDPR 및 CCPA 준수",
      feature4Point3: "자동 삭제 정책",
      feature4Point4: "안전한 팀 협업",
      useCasesTitle: "모든 연구 방법에 적합",
      useCasesSubtitle: "민족지학에서 임상 시험까지",
      useCase1Title: "포커스 그룹",
      useCase1Desc: "8~20명의 참가자가 발언하는 내용이 중복될 수 있습니다. 열띤 토론 중에도 완벽하게 화자를 식별합니다. 정성 분석 소프트웨어로 바로 내보낼 수 있습니다.",
      useCase2Title: "심층 인터뷰",
      useCase2Desc: "수백 건의 일대일 인터뷰를 동시에 처리하세요. 전체 데이터세트의 일관성을 유지하고, 모든 녹취록을 즉시 검색하세요.",
      useCase3Title: "임상 연구",
      useCase3Desc: "환자 인터뷰를 위한 HIPAA 준수 옵션. 정확한 의학 용어 필사. 민감한 건강 데이터의 안전한 처리.",
      useCase4Title: "민족지학 연구",
      useCase4Desc: "자연 환경에서 현장 녹음이 가능합니다. 배경 소음과 여러 화자를 동시에 녹음할 수 있으며, 100개 이상의 언어와 방언을 지원합니다.",
      useCase5Title: "구술 역사 프로젝트",
      useCase5Desc: "제한 없이 전체 아카이브를 보존하세요. 검색 가능한 역사적 기록을 생성하세요. 종단 연구 및 세대 연구에 적합합니다.",
      useCase6Title: "논문 연구",
      useCase6Desc: "모든 기능을 갖춘 학생 친화적인 가격. 전체 데이터 세트를 저렴하게 처리하세요. 일괄 처리로 촉박한 마감일도 준수하세요.",
      testimonialTitle: "선도적인 연구자들의 신뢰를 받음",
      testimonialText: "저희 연구팀은 지역 사회 건강 연구에서 200시간 분량의 포커스 그룹 녹음 자료를 확보했습니다. 다른 기관들은 비용 때문에 어떤 세션을 녹취할지 직접 선택하라고 요구했습니다. NeverCap 주말 동안 모든 내용을 처리할 수 있었습니다. 20명의 발화자 식별 기능은 실제로 효과가 있었습니다. 모두가 동시에 말하는 가장 어수선한 토론에서도 말이죠. 이 도구는 정성적 데이터를 처리하는 방식을 완전히 바꿔 놓았습니다.",
      testimonialAuthorName: "사라 첸 박사",
      testimonialAuthorRole: "공중보건연구소 수석 연구원",
      ctaTitle: "어떤 데이터를 분석할지 선택하는 것을 중단하세요",
      ctaSubtitle: "모든 것을 필사하는 50,000명 이상의 연구원과 함께하세요",
      ctaButton: "NeverCap 무료로 체험해보세요"
    },
    BusinessTeams: {
      heroBadge: "비즈니스 팀을 위해",
      heroTitle1: "회의 녹음이 만들어졌습니다",
      heroTitle2: "노력없이",
      heroSubtitle: "브라우저에서 직접 회의를 녹화하거나 오디오 파일을 즉시 업로드하세요. 무제한 대화로 검색 가능한 아카이브를 구축하세요. 무제한으로 기록할 수 있는 진정한 무제한 기록 기능으로 중요한 대화를 더 이상 놓치지 마세요.",
      heroCtaPrimary: "지금 녹음 시작 →",
      heroCtaSecondary: "작동 방식 보기",
      recordingStatus: "녹음...",
      statsMeetingMinutes: "회의록",
      statsLiveRecording: "라이브 녹음",
      statsSpeakerID: "스피커 ID",
      statsInstantUpload: "즉시 업로드 및 처리",
      featuresTitle: "팀이 지식을 습득하는 데 필요한 모든 것",
      featuresSubtitle: "라이브 녹화부터 즉시 업로드까지 모든 마찰 지점을 제거했습니다.",
      feature1Title: "브라우저에서 직접 기록",
      feature1Desc: "다운로드나 플러그인 없이, 클릭 한 번으로 바로 녹음을 시작하세요. 완벽한 오디오 품질, 자동 화자 감지, 그리고 말하는 동안 실시간으로 음성을 변환해 줍니다.",
      feature1Benefit1: "원클릭 녹화 시작",
      feature1Benefit2: "소프트웨어 설치 없음",
      feature1Benefit3: "모든 기기에서 작동합니다",
      feature1Benefit4: "실시간 전사",
      feature1Visual1: "클릭 & 녹화",
      feature1Visual2: "설정이 필요하지 않습니다",
      feature2Title: "모든 오디오 파일을 즉시 업로드하세요",
      feature2Desc: "Zoom, Teams 또는 휴대폰에서 녹화된 파일이 있으신가요? 즉시 업로드하세요. 모든 주요 오디오 및 비디오 형식을 지원합니다. 대기 시간 없이 여러 파일을 동시에 처리할 수 있습니다.",
      feature2Benefit1: "지원: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "일괄 업로드 기능",
      feature2Benefit3: "10시간 파일 지원",
      feature2Benefit4: "작업하는 동안 처리",
      feature2Visual1: "드래그 앤 드롭 파일",
      feature3Title: "팀 협업을 위해 구축됨",
      feature3Desc: "팀원들과 즉시 회의록을 공유하세요. 녹음 파일을 함께 듣고, 다양한 형식으로 회의록을 내보내고, 검색 가능한 회의 아카이브를 통해 모두가 회의 내용을 공유할 수 있습니다.",
      feature3Benefit1: "누구와든 대본을 공유하세요",
      feature3Benefit2: "원본 녹음을 들어보세요",
      feature3Benefit3: "다양한 형식으로 대본 내보내기",
      feature3Benefit4: "팀 전체에서 검색 가능한 아카이브",
      feature3Visual1: "팀원들",
      feature3Visual2: "무제한 협업",
      feature4Title: "모든 대화를 즉시 찾으세요",
      feature4Desc: "모든 회의를 한 번에 검색하세요. 지난 분기의 중요한 결정이나 몇 달 전의 고객 요구 사항을 찾아보세요. AI 기반 검색은 키워드뿐 아니라 맥락도 이해합니다.",
      feature4Benefit1: "모든 회의를 한 번에 검색",
      feature4Benefit2: "AI는 맥락을 이해합니다",
      feature4Benefit3: "발표자 또는 날짜로 필터링",
      feature4SearchPlaceholder: "🔍 검색: '4분기 매출 목표'",
      feature4SearchResults: "3번의 회의에서 발견됨:",
      feature4Meeting1: "판매 계획 - 10월 15일",
      feature4Meeting1Text: '"...4분기 목표 200만 달러로 설정..."',
      feature4Meeting2: "이사회 회의 - 10월 20일",
      feature4Meeting2Text: '"...4분기 매출 예측..."',
      workflowTitle: "녹음에서 실행 가능한 통찰력까지",
      workflowSubtitle: "모든 중요한 순간을 포착하는 원활한 워크플로",
      workflowStep1Title: "녹화 또는 업로드",
      workflowStep1Desc: "라이브 녹음을 시작하거나 기존 오디오 파일을 업로드하세요",
      workflowStep2Title: "자동 변환",
      workflowStep2Desc: "AI는 몇 분 안에 96%의 정확도로 텍스트를 변환합니다.",
      workflowStep3Title: "협업하다",
      workflowStep3Desc: "작업 항목을 공유, 주석 달기 및 추출",
      workflowStep4Title: "검색 및 분석",
      workflowStep4Desc: "모든 회의에 대한 통찰력을 찾으세요",
      testimonialsTitle: "팀은 NeverCap을 좋아합니다",
      testimonialsSubtitle: "기업이 회의 문화를 어떻게 변화시키는지 살펴보세요",
      testimonial1Text: '"중요한 세부 정보를 놓치는 문제를 해결하고 모든 대화의 검색 가능한 아카이브를 보유하게 되었습니다. 직접 녹음 기능 덕분에 중요한 대화를 놓치지 않고 기록할 수 있습니다."',
      testimonial1AuthorName: "제임스 킴",
      testimonial1AuthorRole: "TechCorp 제품 관리자",
      testimonial2Text: '"Otter 덕분에 한 달에 파일 업로드가 10개로 제한되었습니다. 이제 모든 고객 문의를 즉시 업로드합니다. 영업팀의 후속 조치에 획기적인 변화를 가져왔습니다."',
      testimonial2AuthorName: "사라 로드리게스",
      testimonial2AuthorRole: "ConsultPro 영업 이사",
      testimonial3Text: '"몇 달 동안의 회의 내용을 검색할 수 있는 기능 덕분에 감사 과정에서 많은 도움이 되었습니다. 모든 결정과 승인을 몇 초 만에 찾을 수 있었습니다."',
      testimonial3AuthorName: "마크 리우",
      testimonial3AuthorRole: "FinanceHub 최고운영책임자(COO)",
      ctaTitle: "중요한 대화를 놓치지 마세요",
      ctaSubtitle: "무제한 필사 기능으로 모든 회의를 기록하는 수천 개의 팀에 합류하세요",
      ctaButton: "무료로 녹음 시작 →"
    },
    Educators: {
      heroBadge: "교육자 및 교사를 위한",
      heroTitle1: "모든 교육 비디오를",
      heroTitle2: "접근 가능한 콘텐츠",
      heroSubtitle: "YouTube 링크를 붙여넣기만 하면 자동 생성된 자막이 포함된 대본을 바로 받아볼 수 있습니다. 강의, 튜토리얼, 교육용 동영상을 모든 학생이 학습할 수 있도록 검색 가능하고 접근 가능한 콘텐츠로 변환하세요.",
      heroCtaPrimary: "무료로 체험해 보세요 - 신용 카드 불필요",
      heroCtaSecondary: "데모 보기",
      stats1Number: "1-클릭",
      stats1Label: "YouTube 대본",
      stats2Number: "100개 이상",
      stats2Label: "지원 언어",
      stats3Number: "무한대",
      stats3Label: "무제한 비디오",
      stats4Number: "96%",
      stats4Label: "정확도 비율",
      featuresTitle: "교육자에게 필요한 비디오 필사 자료",
      featuresSubtitle: "YouTube 강의부터 녹화된 수업까지 모든 콘텐츠를 접근 가능하게 만드세요",
      feature1Title: "즉각적인 YouTube 및 플랫폼 링크",
      feature1Desc: "비디오 링크를 붙여넣기만 하면 즉시 대본을 받아볼 수 있습니다. YouTube, Vimeo, Facebook, X(Twitter), TikTok, Instagram, Dropbox, Google Drive 등 다양한 플랫폼과 호환됩니다. 다운로드나 대기 시간 없이 바로 사용할 수 있습니다.",
      feature1Point1: "직접 링크 전사 - 다운로드 필요 없음",
      feature1Point2: "모든 주요 플랫폼 지원",
      feature1Point3: "전체 재생 목록을 한 번에 처리",
      feature1Point4: "비공개 영상 작업 (허가 필요)",
      feature2Title: "캡션 및 자막 자동 생성",
      feature2Desc: "모든 교육용 동영상에 정확한 자막을 즉시 생성하세요. 청각 장애가 있는 학생, 원어민이 아닌 학생, 또는 따라 읽는 것을 선호하는 학생들도 콘텐츠에 쉽게 접근할 수 있도록 하세요.",
      feature2Point1: "SRT, VTT 및 TXT 내보내기 형식",
      feature2Point2: "완벽한 동기화를 위한 단어 수준 타임스탬프",
      feature2Point3: "캡션을 쉽게 편집하고 사용자 정의하세요",
      feature2Point4: "YouTube에 직접 업로드",
      feature2Visual1: "언어 번역",
      feature2Visual2: "콘텐츠를 전 세계적으로 접근 가능하게 만드세요",
      feature3Title: "과정 및 카테고리별로 정리",
      feature3Desc: "폴더를 만들어 성적 증명서를 과목, 학기별로 정리하세요. 모든 교육 콘텐츠를 깔끔하게 분류하고 쉽게 검색할 수 있도록 하세요. 접근 가능한 강의 자료로 구성된 종합적인 라이브러리를 구축하세요.",
      feature3Point1: "무제한 폴더 및 하위 폴더 생성",
      feature3Point2: "주제 또는 난이도별로 비디오에 태그를 지정합니다.",
      feature3Point3: "여러 개의 대본을 대량으로 정리",
      feature3Point4: "모든 콘텐츠를 즉시 검색하세요",
      feature3VisualTitle: "귀하의 과정 라이브러리",
      feature3Folder1: "수학 101",
      feature3Folder2: "물리학 강의",
      feature3Folder3: "생물학 실험 영상",
      feature3Folder4: "역사 다큐멘터리",
      feature3Folder5: "언어 학습",
      feature4Title: "필요한 모든 형식으로 내보내기",
      feature4Desc: "TXT, DOCX 또는 PDF 형식으로 성적 증명서를 다운로드하세요. 학습 가이드, 강의 노트 또는 접근 가능한 강의 자료를 만드는 데 적합합니다. 학생들과 공유하거나 학습 관리 시스템에 통합할 수 있습니다.",
      feature4Point1: "간단한 텍스트 편집을 위한 TXT",
      feature4Point2: "형식이 지정된 문서의 경우 DOCX",
      feature4Point3: "쉽게 공유하고 인쇄할 수 있는 PDF",
      feature4Point4: "여러 파일을 한 번에 대량으로 내보내기",
      workflowTitle: "작동 원리",
      workflowSubtitle: "몇 분 안에 비디오 링크에서 접근 가능한 대본까지",
      workflowStep1Title: "링크 붙여넣기",
      workflowStep1Desc: "교육용 비디오 URL을 복사하여 붙여넣으세요.",
      workflowStep2Title: "자동 변환",
      workflowStep2Desc: "AI가 96%의 정확도로 필사합니다",
      workflowStep3Title: "캡션 생성",
      workflowStep3Desc: "완벽하게 동기화된 자막을 자동 생성합니다.",
      workflowStep4Title: "공유 및 내보내기",
      workflowStep4Desc: "학생들과 다운로드하거나 공유하세요",
      useCasesTitle: "모든 교육적 요구에 완벽합니다",
      useCasesSubtitle: "교육자들이 NeverCap를 사용하여 학습을 강화하는 방법을 확인하세요.",
      useCase1Title: "녹화된 강의",
      useCase1Text: "녹화된 강의의 전체 학기 내용을 기록하세요. 학생들은 특정 주제를 검색하고, 핵심 개념을 복습하며, 중요한 정보를 놓치지 않을 수 있습니다.",
      useCase2Title: "온라인 강좌",
      useCase2Text: "100개 이상의 언어로 번역된 온라인 강좌를 통해 해외 유학생도 쉽게 이용할 수 있도록 하세요. 수강률과 만족도를 높여보세요.",
      useCase3Title: "학습 자료",
      useCase3Text: "비디오 튜토리얼을 읽기 쉬운 학습 가이드로 변환하세요. 읽기를 선호하거나 내용을 빠르게 복습해야 하는 학생들에게 적합합니다.",
      useCase4Title: "접근성 규정 준수",
      useCase4Text: "모든 비디오 콘텐츠에 자막과 대본을 제공하여 접근성 요건을 충족하세요. 모든 학생에게 동등한 접근성을 보장하세요.",
      useCase5Title: "반전 교실",
      useCase5Text: "수업 전에 비디오 강의를 대본과 함께 공유하세요. 학생들은 자신의 속도에 맞춰 복습하고 토론을 준비할 수 있습니다.",
      useCase6Title: "연구 및 인용",
      useCase6Text: "타임스탬프를 통해 학생들이 비디오 출처를 정확하게 인용할 수 있도록 도와줍니다. 연구 프로젝트와 학술 논문에 적합합니다.",
      testimonialTitle: "50,000명 이상의 교육자들이 신뢰합니다",
      testimonialSubtitle: "전 세계 교사들이 NeverCap를 선택하는 이유를 알아보세요",
      testimonialText: "저는 수학 튜토리얼 YouTube 채널 전체를 NeverCap를 사용해서 녹취하고 있습니다. 다른 서비스에서는 몇 주씩 걸리던 작업이 이제는 몇 시간 만에 완료됩니다. 링크를 직접 붙여넣고 즉시 녹취록을 받을 수 있게 되면서 접근성 높은 콘텐츠를 만드는 방식이 완전히 달라졌습니다. 특히 제 유학생들은 다국어 자막 기능을 정말 좋아해요!",
      testimonialAuthorName: "카렌 미첼 교수",
      testimonialAuthorRole: "수학 교수, 온라인 교육자",
      ctaTitle: "모든 교육 콘텐츠를 접근 가능하게 만드세요",
      ctaSubtitle: "진정으로 무제한적인 필사본을 사용하는 수천 명의 교육자에 합류하세요",
      ctaButton: "NeverCap 무료로 체험해보세요"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "YouTube 동영상을 MP4로 다운로드",
        "placeholder": "여기에 YouTube 링크를 검색하거나 붙여넣으세요",
        "clear_icon": "명확한 입력",
        "Download": "다운로드",
        "loading_text": "다운로드 링크를 처리하는 중입니다. 페이지에 머물러 주세요.",
        "howToDownload": "어떻게 다운로드하나요?",
        "tutorial": "튜토리얼을 시청하세요"
      },
      part2: {
        "title": "3가지 간단한 단계로 YouTube 비디오를 다운로드 가능한 MP4 파일로 변환하는 방법은 다음과 같습니다.",
        "steps": [
          {
            title: "URL을 복사하세요",
            content: "대상 YouTube 동영상을 열고 브라우저 주소창에서 링크를 복사합니다."
          },
          {
            title: "링크를 붙여넣으세요",
            content: "비디오 다운로더 도구로 가서 URL을 입력 필드에 붙여넣으세요."
          },
          {
            title: "MP4를 다운로드하세요",
            content: "처리가 완료되면 다운로드 버튼을 눌러 MP4 파일을 저장하세요."
          }
        ]
      },
      part3: {
        content: [
          "오프라인으로 YouTube 동영상을 시청해야 할 때가 있나요?",
          "지하철을 타고 출퇴근하든, 비행기를 타든, 중요한 튜토리얼을 공부하든, 실력 향상을 위한 콘텐츠를 심도 있게 탐구하든, 중요한 비디오 자료를 보관하든, 안정적인 오프라인 액세스는 흔히 겪는 불편함입니다. 바로 이 부분에서 저희 다운로더가 빛을 발합니다.",
          "이 다운로더를 사용하면 YouTube 동영상을 MP4 형식으로 빠르고 쉽게 변환하여 다운로드할 수 있습니다. 기기에 저장하고 언제든지 시청하세요.",
          "빠르고 간편하며 번거로움이 없습니다. 다운로드한 후에는 인터넷 없이도 언제 어디서나 좋아하는 동영상을 감상하세요."
        ]
      },
      part4: {
        content: ["다운로드의 5가지 주요 이점은 다음과 같습니다.", "YouTube 비디오를 MP4 파일로 변환"],
        list: [
          {
            title: "데이터 비용 절약:",
            content: "일반적으로 YouTube에서 동영상을 시청하면 상당한 모바일 데이터가 소모됩니다. 오프라인 시청을 위해 다운로드하면 이러한 불필요한 비용을 피할 수 있습니다."
          },
          {
            title: "언제 어디서나 시청하세요:",
            content: "인터넷 연결이 불안정하더라도 끊김 없이 동영상을 감상하세요. 더 이상 버퍼링 걱정은 없습니다."
          },
          {
            title: "간편한 보관 및 보존:",
            content: "비디오를 MP4로 저장하면 개인 컬렉션을 쉽게 구축할 수 있으며, 특히 정말 가치 있거나 중요하다고 생각하는 콘텐츠에 대한 컬렉션을 쉽게 구축할 수 있습니다."
          },
          {
            title: "더욱 간편한 공유:",
            content: "MP4 파일을 공유하는 것은 링크를 보내는 것보다 훨씬 편리합니다. WhatsApp이나 Instagram 같은 앱을 통해 비디오 파일을 직접 전송할 수 있으므로 YouTube를 여는 추가 단계가 필요 없습니다."
          },
          {
            title: "즉시 보기, 공유된 순간:",
            content: "좋아하는 영상을 근처의 친구나 가족에게 자랑하고 싶으신가요? MP4 파일을 다운로드하면 로딩 중에 어색하게 기다릴 필요 없이 바로 함께 원활하게 시청할 수 있습니다."
          }
        ]
      },
      part5: {
        title: "왜 우리의 다운로더가 돋보이는가",
        cards: [
          {
            title: "원클릭 간편함",
            content: "간편한 설정과 직관적인 조작."
          },
          {
            title: "초고속, 무제한",
            content: "최고 속도로 변환하고 다운로드하세요. 제한이나 속도 제한이 없습니다."
          },
          {
            title: "즉시 변환",
            content: "즉시 파일을 처리하므로 기다릴 필요가 없습니다."
          },
          {
            title: "광고 없음, 방해 요소 없음",
            content: "팝업, 배너, 방해 요소 없이 깔끔한 인터페이스를 즐기세요. 매끄러운 비디오 변환만 가능합니다."
          },
          {
            icon: "5",
            color: "#디5FF",
            title: "정품 품질 보장",
            content: "다운로드한 영상은 원본 영상의 전체 해상도를 그대로 유지하므로 항상 픽셀 단위로 완벽하게 재생할 수 있습니다."
          },
          {
            icon: "6",
            color: "#데프6EE",
            title: "어디서나 작동합니다",
            content: "모든 브라우저, 모든 기기와 완벽하게 호환됩니다."
          }
        ]
      },
      part6: {
        title: ["YouTube 비디오 다운로드를 극대화하세요", "다운로더를 사용하여"],
        content: [
          "간편한 YouTube MP4 변환: 빠르고 간단하며 무료입니다.",
          "바로 이 부분에서 저희는 탁월합니다. 사용자 친화적인 인터페이스는 누구나 쉽게 사용할 수 있도록 설계되었으며, 전문적인 기술 지식은 필요하지 않습니다. 경험 수준에 관계없이 비디오를 즉시 변환할 수 있습니다. 가입 없이 바로 필요한 기능을 바로 사용할 수 있습니다.",
          "안심하세요. 다운로드한 MP4는 YouTube에서 시청한 것과 똑같은 원본 비디오 품질과 선명도를 유지합니다.",
          "어디서든 사용 가능합니다. 모든 주요 플랫폼과 기기에서 완벽하게 호환됩니다. Windows, macOS, Linux, Android, iOS 등 스마트폰, 태블릿, 데스크톱 등 어떤 운영체제를 사용하든 비디오를 원활하게 다운로드할 수 있습니다."
        ]
      },
      part7: {
        title: "YouTube 동영상 다운로드에 대한 주요 질문",
        list: [
          {
            question: "저작권이 있는 YouTube 동영상을 다운로드할 수 있나요?",
            answer: "저작권 소유자의 허가 없이 저작권이 있는 YouTube 동영상을 다운로드하는 것은 불법입니다."
          },
          {
            question: "이 다운로드 도구는 안전한가요?",
            answer: "네, 안전하고 신뢰할 수 있습니다. 저희는 사용자의 개인 정보를 요구하지 않으며 바이러스에 대한 강력한 조치를 취하고 있습니다. 인터넷에서 파일을 다운로드할 때는 항상 주의를 기울이시기 바랍니다. 의심스러운 링크를 클릭하거나 의심스러운 파일을 다운로드하지 마십시오."
          },
          {
            question: "YouTube에서 MP4로 다운로드할 때 어떤 언어가 지원되나요?",
            answer: "저희 서비스는 모든 인기 언어로 YouTube 동영상을 다운로드하는 것을 지원합니다."
          },
          {
            question: "YouTube 동영상을 다운로드하는 데 걸리는 시간에 영향을 미치는 요소는 무엇입니까?",
            answer: "가능한 가장 빠른 다운로드 환경을 보장하지만, 다운로드 시간은 비디오 길이와 인터넷 연결 속도와 같은 요인의 영향을 받습니다."
          },
          {
            question: "스마트폰을 사용하여 MP4 비디오를 다운로드하면 어디에 저장됩니까?"
          },
          {
            question: "YouTube 동영상을 MP4로 다운로드하면 비디오 화질이 저하되나요?",
            answer: "아니요. 저희 도구를 사용하여 YouTube 동영상을 MP4로 다운로드하면 원본 화질이 그대로 유지됩니다. 변환 과정에서 원본 화질이 그대로 유지되므로 YouTube에서 보는 것과 동일한 시청 환경을 경험할 수 있습니다."
          }
        ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 업계를 선도하는 AI 기술",
      "title": "에 대한",
      "highlighted_text": "NeverCap",
      "description": "저희의 사명은 가장 정확한 오디오 및 비디오 전사 서비스를 제공하는 것입니다. 업계 최고의 AI 기술을 활용하여 96% 이상의 전사 정확도를 달성합니다. 일부 주요 언어의 경우, 기술 최적화를 통해 99%의 정확도를 달성할 수 있습니다."
    },
    Stats: {
      "title": "우리의",
      "highlighted_text": "영향",
      "subtitle": "최첨단 AI 기술로 글로벌 커뮤니케이션 강화",
      "metrics": [
        {
          "value": "96% 이상",
          "label": "정확도 비율",
          "description": "고급 AI를 통한 업계 최고의 필사 정확도"
        },
        {
          "value": "100개 이상",
          "label": "지원 언어",
          "description": "글로벌 콘텐츠를 위한 음성 인식"
        },
        {
          "value": "249+",
          "label": "번역 언어",
          "description": "필사된 텍스트를 거의 모든 언어로 번역합니다."
        }
      ]
    },
    Mission: {
      "title": "왜 선택해야 하나요?",
      "highlighted_text": "NeverCap",
      "subtitle": "우리는 언어 장벽을 허물고 모든 사람이 콘텐츠를 이용할 수 있도록 하는 것을 믿습니다.",
      "features": [
        {
          "icon": "🎯",
          "title": "비교할 수 없는 정확성",
          "description": "당사의 AI 모델은 지속적으로 개선되어 96%가 넘는 전사 정확도를 제공하고 있으며, 일부 주요 언어는 고급 최적화를 통해 최대 99%의 정확도에 도달합니다."
        },
        {
          "icon": "🌍",
          "title": "글로벌 언어 지원",
          "description": "100개 이상의 언어에 대한 음성 인식 기능과 249개 이상의 언어에 대한 번역 기능을 지원하여 콘텐츠를 진정으로 글로벌하게 만들 수 있습니다."
        },
        {
          "icon": "⚡",
          "title": "번개처럼 빠른 처리",
          "description": "몇 시간 분량의 오디오 및 비디오 콘텐츠를 몇 시간이 아닌 단 몇 분 만에 처리하세요. 최적화된 AI 파이프라인을 통해 품질 저하 없이 신속하게 텍스트 변환을 완료할 수 있습니다."
        },
        {
          "icon": "🔒",
          "title": "엔터프라이즈급 보안",
          "description": "저희는 고객님의 데이터 보안을 최우선으로 생각합니다. 업계 표준 암호화를 사용하고 글로벌 개인정보 보호 규정을 준수하여 고객님의 콘텐츠를 안전하고 기밀로 보호합니다."
        }
      ]
    },
    Company: {
      "title": "회사",
      "highlighted_text": "정보",
      "subtitle": "질문이나 지원이 필요하시면 저희에게 연락하세요.",
      "details": [
        {
          "label": "회사 이름",
          "value": "스크리비파이 AI 주식회사"
        },
        {
          "label": "본부",
          "value": ["30 N 굴드 스트리트 Ste R", "셰리던, 와이오밍 82801", "미국"]
        },
        {
          "label": "문의하기",
          "value": ["이메일", "24시간 연중무휴 지원 가능"]
        }
      ]
    },
    CTA: {
      "title": "차이점을 경험할 준비가 되셨나요?",
      "subtitle": "NeverCap를 신뢰하는 수천 명의 전문가와 함께하세요.",
      "button": "NeverCap 무료로 체험해 보세요 →",
      "disclaimer": "신용 카드 필요 없음 • 몇 초 안에 필사 시작"
    }
  },
  Privacy: {
    title: "은둔",
    titleGradient: "정책",
    subtitle: "당사가 귀하의 개인 정보를 수집, 사용 및 보호하는 방법을 알아보세요",
    "lastUpdated": "최종 업데이트: {날짜}",
    "lastUpdatedDate": "2025년 7월 21일",
    "privacyPolicyTitle": "개인정보 보호정책",
    "policyDescription": `본 정책은 NeverCap(이하 "NeverCap", "우리", "저희", "당사"로 함)이 귀하가 당사의 서비스, 웹사이트(https://www.nevercap.ai/) 및 소프트웨어(종합적으로 "서비스"라 함)를 이용할 때 귀하의 개인정보를 수집, 사용 및 공개하는 방법을 설명합니다.`,
    "policyAgreement": "본 개인정보 보호정책을 주의 깊게 읽고 이해하시기 바랍니다. 당사 서비스를 이용함으로써 귀하는 본 개인정보 보호정책에 동의하는 것으로 간주됩니다. 본 정책에 따른 당사 개인정보 사용에 동의하지 않으시면 당사 서비스 이용을 즉시 중단하셔야 합니다.",
    "policyOverview": "본 정책에는 당사가 수집하는 데이터와 수집 이유, 데이터 처리 방식, 그리고 데이터와 관련된 귀하의 권리에 대한 내용이 명시되어 있습니다. 당사는 귀하의 데이터를 판매하지 않습니다.",
    "scopeTitle": "1. 본 개인정보 보호정책의 범위",
    "scopeDescription": "본 개인정보 보호정책은 당사 서비스 사용자에 대한 정보 수집 및 처리에만 적용됩니다. 본 개인정보 보호정책은 당사에 링크된 제3자가 운영하는 서비스, 웹사이트 또는 소프트웨어(당사가 해당 링크를 제공하든 다른 사용자가 공유하든)에는 적용되지 않으며, 제3자의 콘텐츠, 데이터, 애플리케이션 또는 자료에도 적용되지 않습니다. 제3자 웹사이트 또는 소프트웨어에 정보를 제공하기 전에 해당 웹사이트 또는 소프트웨어의 개인정보 보호정책을 확인하시기 바랍니다.",
    "collectionTitle": "2. 수집 내용 및 수집 이유",
    "collectionPrinciple": "저희의 기본 원칙은 필요한 것만 수집하는 것입니다. 실제로 이 원칙이 의미하는 바는 다음과 같습니다.",
    "identityTitle": "2.1 신원 및 접근",
    "identityDescription": "당사 제품에 가입하실 때 이름, 이메일 주소와 같은 개인 정보를 요청드립니다. 이는 필수적인 제품 기능을 제공하고 제품 업데이트 및 기타 필수 정보를 제공해 드리기 위한 것입니다.",
    "billingTitle": "2.2 청구 정보",
    "billingDescription": "유료 상품에 가입하시면 결제 정보와 청구지 주소를 입력해 주셔야 합니다. 결제 정보는 저희 결제 처리 업체에 직접 전송되며 저희 서버에는 저장되지 않습니다.",
    "productInteractionsTitle": "2.3 제품 상호 작용",
    "productInteractionsDescription": "귀하가 제품 계정에 업로드, 수신 또는 관리하는 콘텐츠는 당사 서버에 저장됩니다. 귀하가 해당 콘텐츠를 삭제하지 않는 한, 귀하의 계정이 활성 상태인 동안 해당 콘텐츠를 보관할 수 있습니다.",
    "websiteInteractionsTitle": "2.4 웹사이트 상호작용",
    "websiteInteractionsDescription": "당사는 전환율 테스트 및 신제품 디자인 실험 등 분석 및 통계 목적으로 귀하의 브라우징 활동 정보를 수집합니다. 여기에는 브라우저 및 운영 체제 버전, IP 주소, 방문한 웹 페이지 및 로드 시간, 그리고 귀하를 당사로 연결한 웹사이트 등이 포함됩니다. 계정이 있고 로그인되어 있는 경우, 이러한 웹 분석 데이터는 계정이 더 이상 활성화되지 않을 때까지 귀하의 IP 주소 및 사용자 계정에 연결됩니다.",
    "cookiesTitle": "2.5 쿠키",
    "cookiesDescription1": "또한 당사는 특정 기본 설정을 저장하고, 귀하가 당사 애플리케이션을 더 쉽게 사용할 수 있도록 하며, A/B 테스트를 수행하고 일부 분석을 지원하기 위해 지속적인 자사 쿠키와 일부 타사 쿠키를 사용합니다.",
    "cookiesDescription2": "쿠키는 브라우저에 저장되는 텍스트 파일입니다. 로그인 정보와 사이트 환경설정을 기억하는 데 도움이 될 수 있습니다. 또한 브라우저 유형, 운영 체제, 방문한 웹 페이지, 방문 시간, 열람한 콘텐츠, 기타 클릭 스트림 데이터 등의 정보를 수집할 수도 있습니다. 브라우저 설정에서 쿠키 보관 설정을 조정하고 개별 쿠키를 허용 또는 차단할 수 있습니다. 단, 쿠키를 비활성화하면 앱이 작동하지 않고 서비스의 다른 기능도 제대로 작동하지 않을 수 있습니다.",
    "correspondenceTitle": "2.6 자발적 서신",
    "correspondenceDescription": "여러분이 질문이나 도움을 요청하기 위해 이메일을 보내면, 우리는 여러분의 이메일 주소를 포함한 해당 서신을 보관합니다. 그러면 미래에 여러분이 연락할 때 참고할 수 있도록 과거의 서신 내역을 보관할 수 있습니다.",
    "accessTitle": "3. 당사가 귀하의 정보에 접근하거나 공유하는 경우",
    "accessDescription1": "귀하가 요청하신 제품 또는 서비스를 제공하기 위해. 당사는 애플리케이션 실행 및 서비스 제공을 위해 일부 제3자 하위 처리업체를 이용하고 있습니다. 여기에는 클라우드 및 분석 서비스 제공업체가 포함됩니다.",
    "accessDescription2": "남용 사례를 조사, 예방 또는 관련 조치를 취하기 위함입니다. 잠재적 남용 사례를 조사할 때 고객 계정에 접근하는 것은 최후의 수단입니다. 당사는 고객과 문제를 신고하는 사람 모두의 개인정보와 안전을 보호하기 위해 최선을 다하며, 이러한 책임의 균형을 유지하기 위해 노력합니다. 귀하가 당사 제품을 제한된 목적으로 사용하고 있다는 사실이 발견될 경우, 당사는 필요한 조치를 취할 것이며, 필요한 경우 관련 당국에 신고할 것입니다.",
    "accessDescription3": "해당 법률에 따라 요구되는 경우.",
    "dataRequests": "사용자 데이터 요청. 당사는 법적 절차에 따른 강제성이 있거나 긴급 요청과 같은 제한적인 상황을 제외하고는 정부의 사용자 데이터 요청에 응답하지 않는 것을 정책으로 삼고 있습니다. 단, 미국 법 집행 기관이 데이터 공유를 요구하는 영장, 형사 소환장 또는 법원 명령을 소지한 경우, 당사는 이를 준수해야 합니다. 마찬가지로, 미국 외 국가 정부 기관의 요청에도 미국 정부가 상호 사법 공조 조약 또는 협정에 명시된 절차를 통해 강제하는 경우에만 응답합니다. 당사는 법적으로 금지된 경우와 일부 긴급 상황을 제외하고, 데이터를 공유하기 전에 관련 사용자에게 알리는 것을 정책으로 삼고 있습니다.",
    "preservationRequests": "보존 요청. 마찬가지로, 당사의 정책은 미국 연방 저장 통신법(18 USC Section 2703(f)) 또는 민사 소송을 위한 미국 소환장이 적법하게 송달된 경우에만 데이터 보존 요청을 준수하는 것입니다. 당사는 법률에 의해 요구되거나 당사가 항소하지 않기로 결정한 법원 명령에 의해 강제되는 경우를 제외하고는 보존된 데이터를 공유하지 않습니다. 또한, 필요한 보존 기간이 만료되기 전에 적절한 영장, 법원 명령 또는 소환장을 받지 않는 한, 보존된 고객 데이터 사본은 보존 기간 만료 시 파기됩니다.",
    "taxAudits": "세무 당국의 감사를 받는 경우, 청구 관련 정보를 공유해야 할 수 있습니다. 이 경우, 청구지 주소 및 면세 정보 등 필요한 최소한의 정보만 공유합니다.",
    "securityTitle": "4. 귀하의 데이터를 보호하는 방법",
    "securityDescription": "모든 데이터는 당사 서버에서 귀하의 브라우저로 전송될 때 SSL/TLS를 통해 암호화됩니다.",
    "deletionTitle": "5. 콘텐츠를 삭제하면 어떻게 되나요?",
    "deletionDescription": "콘텐츠를 삭제하면 즉시 액세스할 수 없게 됩니다.",
    "locationTitle": "6. 사이트 및 데이터의 위치",
    "locationDescription": "당사의 제품 및 기타 웹 자산은 미국에서 운영됩니다. 유럽 연합, 영국 또는 미국 외 지역에 거주하시는 경우, 귀하가 당사에 제공하는 모든 정보는 미국으로 전송되어 저장됩니다. 당사 웹사이트 또는 서비스를 이용하거나 당사에 개인 정보를 제공함으로써 귀하는 이러한 전송에 동의하는 것으로 간주됩니다.",
    "childrenTitle": "7. 아동의 개인정보 보호",
    "childrenDescription": "본 서비스는 아동을 대상으로 하지 않으며, 13세 미만 아동의 개인 정보를 고의로 수집하지 않습니다. 13세 미만인 경우, 본 서비스를 통해 개인 정보를 제출하지 마십시오. 아동이 본 정책을 위반하여 당사에 개인 정보를 제공했다고 생각되시면 아래 안내에 따라 당사에 연락해 주십시오.",
    "updatesTitle": "8. 본 개인정보 보호정책의 업데이트",
    "updatesDescription": "관련 규정을 준수하고 새로운 관행을 반영하기 위해 필요에 따라 본 정책을 업데이트할 수 있습니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 새로 고칩니다.",
    "contactTitle": "9. 문의하기",
    "contactDescription": "개인정보 보호정책에 대한 질문, 의견 또는 불만 사항이 있으시면 당사에 문의해 주시기 바랍니다. 최대한 빨리 귀하의 불만 사항을 처리하도록 노력하겠습니다.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "약관",
    titleGradient: "서비스",
    subtitle: "당사 서비스를 이용하기 전에 이 약관을 주의 깊게 읽어주세요.",
    "lastUpdated": "최종 업데이트: {날짜}",
    "lastUpdatedDate": "2025년 7월 21일",
    "termsOfServiceTitle": "서비스 약관",
    "thankYou": "저희 제품을 이용해 주셔서 감사합니다!",
    "companyDefinition": '이 문서에서 \"회사\", \"우리\", \"저희\"라는 표현은 NeverCap를 의미합니다.',
    "servicesDefinition": '\"서비스\"란 NeverCap가 제작하고 유지 관리하는 모든 제품을 의미하며, 웹 브라우저, 데스크톱 애플리케이션, 모바일 애플리케이션 또는 다른 형식으로 제공됩니다.',
    "termsUpdate": "본 서비스 약관은 향후 업데이트될 수 있습니다. 일반적으로 이러한 변경은 확장된 관련 정책 링크를 통해 약관의 일부를 명확히 하기 위한 것입니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 갱신하고 계정 소유자에게 알리기 위한 기타 적절한 조치를 취할 것입니다.",
    "acceptanceTitle": "1. 계약 수락",
    "acceptanceDescription1": "당사 서비스를 이용함으로써 귀하는 본 계약에 동의하는 것으로 간주되며, 본 계약은 귀하와 NeverCap 간의 구속력 있는 계약이 됩니다. 귀하는 본 약관에 동의할 법적 능력이 있으며, 구속력 있는 계약을 체결할 수 있는 법적 연령임을 확인합니다. NeverCap의 동의는 귀하가 본 계약의 모든 조건에 동의하는 것을 명시적으로 조건으로 합니다.",
    "eligibilityRequirement": "본 서비스는 18세 미만의 사용자를 대상으로 하지 않으며, 18세 미만의 사용자는 본 서비스를 이용할 수 없습니다. 본 서비스를 이용함으로써 귀하는 앞서 언급한 자격 요건을 충족함을 진술하고 보증합니다.",
    "userResponsibility": '"귀하", "귀하의", "귀하 자신"이라는 용어에는 귀하의 직원, 대리인, 사업 담당자 및 귀하의 계정을 통해 서비스에 대한 접근 권한을 제공하는 기타 모든 개인(아래 정의 참조)도 포함됩니다. 귀하는 귀하의 계정을 통해 서비스에 접근하는 모든 사람이 본 약관을 인지하고 준수하도록 할 책임이 있습니다.',
    "termsRevision": "NeverCap는 단독 재량으로 본 약관을 수시로 수정하고 업데이트할 권리를 보유합니다. 모든 변경 사항은 게시되는 즉시 적용됩니다. 수정된 약관 게시 후에도 서비스를 계속 사용하는 것은 귀하가 변경 사항에 동의하고 수락하는 것으로 간주됩니다. 변경 사항은 귀하에게 구속력을 가지므로, 변경 사항을 파악하기 위해 이 페이지를 수시로 확인하시기 바랍니다.",
    "servicesTitle": "2. NeverCap의 서비스",
    "servicesDescription1": "당사 서비스를 이용하면 사용자는 음성 대화를 검색, 번역하고 다른 사람과 공유할 수 있는 텍스트로 변환할 수 있습니다.",
    "servicesOptions": '귀하는 서비스의 무료 버전("무료 서비스")을 사용할지, 또는 수수료를 지불해야 하는 구독 기반 유료 버전 서비스("유료 서비스")를 사용할지 선택할 수 있습니다.',
    "servicesAccess": "당사는 귀하에게 서비스를 제공합니다. 귀하는 서비스 이용에 필요한 모든 준비를 하실 책임이 있습니다.",
    "accountTermsTitle": "3. 계정 약관",
    "accountSecurity": "귀하는 계정 보안 유지에 대한 책임이 있습니다. 회사는 귀하가 이 보안 의무를 준수하지 않아 발생하는 어떠한 손실이나 손해에 대해서도 책임을 지지 않습니다.",
    "lawfulUse": "귀하는 서비스를 불법적, 비윤리적 또는 부도덕한 목적으로 사용할 수 없습니다.",
    "contentResponsibility": "귀하는 귀하의 계정에서 게시된 모든 콘텐츠 및 발생하는 모든 활동에 대해 책임을 집니다. 여기에는 (a) 귀하의 로그인 정보에 접근할 수 있는 사람 또는 (b) 귀하의 계정에 자체 로그인 정보를 보유한 사람이 게시한 콘텐츠가 포함됩니다.",
    "humanRequirement": '인간이어야 합니다. "봇"이나 기타 자동화된 방법으로 등록된 계정은 허용되지 않습니다.',
    "paymentTitle": "4. 지불, 환불 및 계획 변경",
    "freeTrial": "무료 체험판을 제공하는 유료 서비스의 경우, 가입 시 체험 기간을 안내해 드립니다. 체험 기간 이후에는 서비스를 계속 이용하려면 선불로 결제해야 합니다. 결제하지 않으면 서비스가 종료됩니다.",
    "upgradePolicy": "무료 플랜에서 유료 플랜으로 업그레이드하는 경우, 귀하의 카드에 즉시 요금이 청구되며 청구 주기는 업그레이드 날짜부터 시작됩니다.",
    "taxes": "모든 수수료에는 세무 당국에서 부과하는 모든 세금, 부과금 또는 관세가 포함되어 있지 않습니다. 필요한 경우, 당사는 세무 당국을 대신하여 해당 세금을 징수하고 세무 당국에 납부합니다. 그렇지 않은 경우, 귀하는 모든 세금, 부과금 또는 관세를 납부할 책임이 있습니다.",
    "refunds": "모든 구매는 환불되지 않습니다. 유료 서비스는 계정에 로그인하여 언제든지 취소할 수 있습니다. 유료 구독의 경우, 별도로 명시되지 않는 한 현재 유료 기간이 종료되는 시점에 취소가 적용됩니다.",
    "cancellationTitle": "5. 취소 및 종료",
    "cancellationPolicy": "결제된 기간 만료 전에 서비스를 취소하시면 즉시 취소가 적용되며 요금이 청구되지 않습니다. 마지막 청구 주기의 미사용 시간은 자동으로 일할 계산되지 않습니다.",
    "terminationRights": "당사는 언제든지 어떤 이유로든 귀하의 계정을 정지 또는 해지하고 현재 또는 미래의 모든 서비스 이용을 거부할 권리가 있습니다. 정지는 귀하가 계정 또는 계정의 콘텐츠에 접근할 수 없음을 의미합니다. 해지 시 귀하의 계정 또는 계정 접근 권한이 삭제되고, 귀하의 계정에 있는 모든 콘텐츠가 몰수 및 양도됩니다. 당사는 또한 언제든지 어떤 이유로든 누구에게든 서비스 이용을 거부할 권리를 보유합니다. 이 조항을 마련한 이유는 통계적으로 볼 때, 당사 서비스의 수십만 개 계정 중 적어도 하나는 불법적인 행위를 하고 있기 때문입니다.",
    "abusePolicy": "회사 직원이나 임원에 대한 언어적, 신체적, 서면적 또는 기타 학대(학대나 보복 위협 포함)가 발생할 경우 계정이 즉시 종료될 수 있습니다.",
    "submissionsTitle": "6. 제출물",
    "submissionsDescription": '귀하는 귀하가 당사에 제공하는 본 사이트와 관련된 모든 질문, 의견, 제안, 아이디어, 피드백 또는 기타 정보("제출물")가 기밀이 아니며 당사의 단독 재산이 됨을 인정하고 동의합니다. 당사는 모든 지적 재산권을 포함한 독점적 권리를 소유하며, 귀하에게 어떠한 인정이나 보상 없이 상업적 또는 기타 합법적인 목적을 위해 이러한 제출물을 제한 없이 사용 및 배포할 권리가 있습니다. 귀하는 이로써 해당 제출물에 대한 모든 저작인격권을 포기하며, 해당 제출물이 귀하의 독창적인 제출물이거나 귀하가 해당 제출물을 제출할 권리가 있음을 보증합니다. 귀하는 귀하의 제출물에 대한 소유권 침해 또는 부당 사용 혐의 또는 실제 침해에 대해 당사를 상대로 어떠한 구제 수단도 없다는 데 동의합니다.',
    "uptimeTitle": "7. 가동 시간 및 보안",
    "serviceAvailability": '서비스 이용에 따른 모든 책임은 사용자에게 있습니다. 당사는 본 서비스를 "있는 그대로" 및 "이용 가능한 대로" 제공합니다. 당사는 대부분의 서비스에 대해 서비스 수준 계약을 제공하지 않지만, 애플리케이션 가동 시간을 중요하게 생각합니다.',
    "throttlingPolicy": "사용자의 활동이 다른 사용자의 서비스 안정성과 성능에 부정적인 영향을 미치는 것으로 확인된 드문 경우, 당사는 계정 접근 권한을 일시적으로 제한할 권리를 보유합니다. 가장 중요한 경우를 제외하고는 조치를 취하기 전에 해결책을 찾기 위해 연락드리겠습니다.",
    "dataSecurity": "저희는 백업, 중복성, 암호화를 통해 귀하의 데이터를 안전하게 보호하기 위해 다양한 조치를 취하고 있습니다. 공용 인터넷을 통한 데이터 전송에는 암호화를 적용하고 있습니다.",
    "thirdPartyVendors": "당사는 서비스를 운영하는 데 필요한 하드웨어, 소프트웨어, 네트워킹, 스토리지 및 관련 기술을 제공하기 위해 제3자 공급업체 및 호스팅 파트너를 활용합니다.",
    "siteManagementTitle": "8. 사이트 관리",
    "siteManagementDescription": "당사는 다음의 권리를 보유하지만 의무는 없습니다. (1) 본 서비스 약관 위반 여부를 확인하기 위해 사이트를 모니터링합니다. (2) 당사의 단독 재량에 따라 법률 또는 본 서비스 약관을 위반하는 사람에 대해 적절한 법적 조치를 취합니다. 여기에는 해당 사용자를 법 집행 기관에 신고하는 것이 포함되지만 이에 국한되지 않습니다. (3) 당사의 단독 재량에 따라 제한 없이 귀하의 기여물 또는 그 일부를 거부하거나, 접근을 제한하거나, 이용 가능성을 제한하거나, 비활성화합니다(기술적으로 가능한 범위 내에서). (4) 당사의 단독 재량에 따라 제한 없이 통지 또는 책임을 지고 크기가 너무 크거나 당사 시스템에 부담을 주는 모든 파일 및 콘텐츠를 사이트에서 제거하거나 비활성화합니다. (5) 당사의 권리와 재산을 보호하고 사이트의 적절한 기능을 촉진하도록 설계된 방식으로 사이트를 관리합니다.",
    "copyrightTitle": "9. 저작권 및 콘텐츠 소유권",
    "copyrightCompliance": "서비스에 게시된 모든 콘텐츠는 미국 저작권법을 준수해야 합니다.",
    "ipRights": "당사는 귀하가 서비스에 제공하는 자료에 대해 어떠한 지적 재산권도 주장하지 않습니다. 업로드된 모든 자료는 귀하의 소유입니다.",
    "contentModeration": "당사는 콘텐츠를 사전 검열하지 않지만, 서비스를 통해 제공되는 모든 콘텐츠를 거부하거나 삭제할 단독 재량권(의무는 아님)을 보유합니다.",
    "trademarkProtection": "서비스의 이름, 디자인 및 분위기는 회사의 저작권입니다. 모든 권리는 회사에 있습니다. 회사의 명시적인 서면 허가 없이 HTML, CSS, JavaScript 또는 시각적 디자인 요소의 어떠한 부분도 복제, 복사 또는 재사용할 수 없습니다. 홍보 목적으로 회사 로고 또는 서비스 로고를 사용하려면 허가를 요청해야 합니다. 로고 사용 요청은 이메일로 보내주시기 바랍니다. 본 서비스 약관을 위반할 경우, 당사는 해당 허가를 철회할 권리를 보유합니다.",
    "prohibitedExploitation": "귀하는 회사의 명시적인 서면 허가 없이 서비스의 어떠한 부분도 재생산, 복제, 복사, 판매, 재판매 또는 이용하지 않고, 서비스의 이용이나 서비스에 대한 접근을 하지 않을 것에 동의합니다.",
    "impersonationProhibition": "다른 웹사이트를 수정하여 그것이 서비스나 회사와 연관되어 있다는 잘못된 인상을 주어서는 안 됩니다.",
    "dmcaPolicy": "저희는 타인의 지적 재산권을 존중합니다. 본 사이트에서 또는 본 사이트를 통해 제공되는 자료가 귀하가 소유하거나 관리하는 저작권을 침해한다고 생각되시면 즉시 저희에게 연락해 주십시오. 귀하의 신고서 사본은 신고서에 명시된 자료를 게시하거나 저장한 사람에게 발송됩니다. 신고서에 중대한 허위 진술을 할 경우, 관련 법률에 따라 손해 배상 책임을 질 수 있습니다. 따라서 본 사이트에서 발견되거나 링크된 자료가 귀하의 저작권을 침해하는지 확실하지 않은 경우, 먼저 변호사와 상담하는 것이 좋습니다.",
    "prohibitedActivitiesTitle": "10. 금지된 활동",
    "generalProhibition": "귀하는 당사가 사이트를 제공하는 목적 이외의 다른 목적으로 본 사이트에 접속하거나 사용할 수 없습니다. 본 사이트는 당사가 명시적으로 지지 또는 승인한 경우를 제외하고 어떠한 상업적 활동과도 연계하여 사용될 수 없습니다.",
    "userObligations": "사이트 사용자로서, 귀하는 다음 사항에 동의하지 않습니다.",
    "dataScraping": "당사의 서면 허가 없이 사이트에서 데이터나 기타 콘텐츠를 체계적으로 검색하여 직접 또는 간접적으로 컬렉션, 편집물, 데이터베이스 또는 디렉토리를 생성하거나 편집합니다.",
    "fraud": "특히 사용자 비밀번호와 같은 민감한 계정 정보를 알아내려는 시도에서 우리와 다른 사용자를 속이거나 사기를 치거나 오도하는 행위입니다.",
    "securityInterference": "사이트의 보안 관련 기능을 우회, 비활성화 또는 방해하는 행위에는 콘텐츠의 사용 또는 복사를 방지 또는 제한하거나 사이트 및/또는 사이트에 포함된 콘텐츠의 사용에 대한 제한을 시행하는 기능이 포함됩니다.",
    "defamation": "당사의 판단에 따라 당사 및/또는 본 사이트를 비방, 훼손 또는 기타 방식으로 해치는 행위입니다.",
    "harassment": "사이트에서 얻은 정보를 이용해 다른 사람을 괴롭히거나, 학대하거나, 해를 끼치는 행위입니다.",
    "supportAbuse": "당사의 지원 서비스를 부적절하게 이용하거나, 학대 또는 부정 행위에 대한 허위 신고를 제출합니다.",
    "legalCompliance": "해당 법률이나 규정에 맞지 않게 사이트를 사용하는 행위.",
    "framingProhibition": "사이트의 허가 없는 프레이밍이나 링크에 관여합니다.",
    "malware": "대문자를 과도하게 사용하거나 스팸(반복되는 텍스트를 계속 게시하는 것)을 포함하여 바이러스, 트로이 목마 또는 기타 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하여 당사자가 사이트를 지속적으로 사용하고 즐기는 것을 방해하거나 사이트의 사용, 기능, 기능, 운영 또는 유지 관리를 수정, 손상, 중단, 변경 또는 방해하는 행위를 하지 않습니다.",
    "automation": "스크립트를 사용하여 댓글이나 메시지를 보내거나, 데이터 마이닝, 로봇 또는 이와 유사한 데이터 수집 및 추출 도구를 사용하는 등 시스템의 자동화된 사용에 참여하지 마십시오.",
    "copyrightRemoval": "모든 콘텐츠에서 저작권이나 기타 소유권 고지를 삭제합니다.",
    "impersonation": "다른 사용자나 사람을 사칭하거나 다른 사용자의 사용자 이름을 사용하려고 시도합니다.",
    "spyware": '클리어 그래픽 교환 포맷("gifs"), 1×1 픽셀, 웹 버그, 쿠키 또는 이와 유사한 장치(때때로 "스파이웨어" 또는 "수동 수집 메커니즘" 또는 "pcms"라고도 함)를 포함하되 이에 국한되지 않는 수동적 또는 능동적 정보 수집 또는 전송 메커니즘 역할을 하는 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하는 행위.',
    "disruption": "사이트 또는 사이트에 연결된 네트워크나 서비스를 방해하거나 교란하거나 과도한 부담을 주는 행위입니다.",
    "employeeHarassment": "사이트의 어떠한 부분이라도 귀하에게 제공하는 당사 직원이나 대리인을 괴롭히거나, 괴롭히거나, 위협하거나, 협박하는 행위입니다.",
    "accessCircumvention": "사이트 또는 사이트의 일부에 대한 접근을 방해하거나 제한하기 위해 고안된 사이트의 모든 조치를 우회하려고 시도합니다.",
    "codeCopying": "Flash, PHP, HTML, JavaScript 또는 기타 코드를 포함하되 이에 국한되지 않는 사이트 소프트웨어를 복사하거나 수정합니다.",
    "reverseEngineering": "해당 법률에서 허용하는 경우를 제외하고, 사이트를 구성하거나 어떤 식으로든 사이트의 일부를 구성하는 소프트웨어의 모든 내용을 해독, 디컴파일, 분해 또는 역엔지니어링하지 마십시오.",
    "bots": "표준 검색 엔진이나 인터넷 브라우저 사용으로 인해 발생할 수 있는 경우를 제외하고, 스파이더, 로봇, 치트 유틸리티, 스크래퍼 또는 오프라인 리더를 포함하되 이에 국한되지 않고 사이트에 접속하는 모든 자동화 시스템을 사용, 실행, 개발 또는 배포하거나 허가되지 않은 스크립트나 기타 소프트웨어를 사용하거나 실행하는 행위.",
    "buyingAgents": "사이트에서 구매하려면 구매 대행인이나 구매 대리인을 이용하세요.",
    "unauthorizedUse": "전자적 또는 기타 수단을 통해 사용자의 사용자 이름 및/또는 이메일 주소를 수집하여 원치 않는 이메일을 발송하거나 자동화된 수단이나 허위 명목으로 사용자 계정을 생성하는 등 사이트의 무단 사용을 금지합니다.",
    "competition": "본 사이트를 당사와 경쟁하기 위한 노력의 일환으로 사용하거나 수익을 창출하는 사업이나 상업적 기업을 위해 본 사이트 및/또는 콘텐츠를 사용합니다.",
    "advertising": "본 사이트를 이용하여 상품 및 서비스를 광고하거나 판매를 제안하세요.",
    "profileTransfer": "프로필을 판매하거나 다른 방식으로 양도합니다.",
    "featuresTitle": "11. 기능 및 버그",
    "featuresDescription": "저희는 저희만의 경험과 시간과 피드백을 공유해 주시는 고객 여러분의 경험을 바탕으로 신중하게 서비스를 설계합니다. 하지만 모든 사람을 만족시키는 서비스란 없습니다. 저희는 저희 서비스가 고객님의 특정 요구 사항이나 기대를 충족할 것이라고 보장하지 않습니다.",
    "bugsDescription": "모든 기능을 출시 전에 테스트합니다. 다른 소프트웨어와 마찬가지로 저희 서비스에도 버그가 있을 수 있습니다. 저희는 보고된 버그를 추적하고 해결하며, 특히 보안이나 개인정보 보호와 관련된 버그는 더욱 그렇습니다. 보고된 모든 버그가 수정되는 것은 아니며, 완벽한 오류 없는 서비스를 보장하지 않습니다.",
    "correctionsTitle": "12. 수정 사항",
    "informationAccuracy": "본 사이트에는 설명, 가격, 재고 현황 및 기타 다양한 정보를 포함하여 오타, 부정확한 정보 또는 누락된 정보가 있을 수 있습니다. 당사는 사전 고지 없이 언제든지 오류, 부정확한 정보 또는 누락된 정보를 수정하고 본 사이트의 정보를 변경 또는 업데이트할 권리를 보유합니다.",
    "siteAvailability": "당사는 사이트가 항상 이용 가능하다는 것을 보장할 수 없습니다. 하드웨어, 소프트웨어 또는 기타 문제가 발생하거나 사이트 관련 유지 관리가 필요할 수 있으며, 이로 인해 중단, 지연 또는 오류가 발생할 수 있습니다. 당사는 귀하에게 통지하지 않고 언제든지 어떤 이유로든 사이트를 변경, 수정, 업데이트, 일시 중단, 중단 또는 기타 방식으로 수정할 권리를 보유합니다. 귀하는 사이트 가동 중단 또는 중단으로 인해 사이트에 접속하거나 사용할 수 없음으로 인해 발생하는 모든 손실, 피해 또는 불편에 대해 당사가 어떠한 책임도 지지 않는다는 데 동의합니다. 본 서비스 약관의 어떠한 내용도 당사가 사이트를 유지 관리 및 지원하거나 이와 관련된 수정, 업데이트 또는 배포를 제공할 의무를 지는 것으로 해석되지 않습니다.",
    "userDataTitle": "13. 사용자 데이터",
    "userDataDescription": "당사는 사이트 성능 관리 목적으로 귀하가 사이트로 전송하는 특정 데이터와 귀하의 사이트 이용과 관련된 데이터를 보관합니다. 당사는 정기적인 데이터 백업을 수행하지만, 귀하가 전송하는 모든 데이터 또는 사이트를 이용하여 수행한 모든 활동과 관련된 모든 데이터에 대한 책임은 전적으로 귀하에게 있습니다. 귀하는 당사가 해당 데이터의 손실 또는 손상에 대해 귀하에게 어떠한 책임도 지지 않는다는 데 동의하며, 이로써 해당 데이터의 손실 또는 손상으로 인해 발생하는 당사에 대한 모든 소송 권리를 포기합니다.",
    "privacyPolicyTitle": "14. 개인정보 보호정책",
    "privacyPolicyDescription": "당사는 데이터 개인정보 보호 및 보안을 중요하게 생각합니다. 개인정보 보호정책을 검토해 주십시오. 본 사이트를 이용함으로써 귀하는 본 서비스 약관에 포함된 당사의 개인정보 보호정책을 준수하는 데 동의하는 것입니다. 본 사이트는 미국에서 호스팅됩니다. 미국의 관련 법률과 다른 개인 정보 수집, 사용 또는 공개에 관한 법률 또는 기타 요건이 적용되는 다른 지역에서 본 사이트에 접속하는 경우, 본 사이트를 계속 이용함으로써 귀하의 데이터는 미국으로 전송되며, 귀하는 귀하의 데이터가 미국으로 전송되고 미국에서 처리되는 데 동의하는 것입니다.",
    "liabilityTitle": "15. 책임",
    "liabilityIntroduction": "본 약관 전반에 걸쳐 책임에 대해 언급하고 있지만, 모든 내용을 한 섹션에 정리하면 다음과 같습니다.",
    "liabilityWaiver": "귀하는 회사가 다음으로 인해 발생하는 직접적, 간접적, 우발적, 이익 손실, 특별, 결과적, 징벌적 또는 모범적 손해(이익 손실, 영업권 손실, 사용 손실, 데이터 손실 또는 기타 무형 손실에 대한 손해 포함하되 이에 국한되지 않음)에 대해 법률상 또는 형평성상 귀하 또는 제3자에게 책임을 지지 않는다는 사실을 명확히 이해하고 동의합니다. (1) 서비스의 사용 또는 사용 불능; (2) 콘텐츠 및 자료의 오류, 실수 또는 부정확성; (3) 사이트에 대한 귀하의 접속 및 사용으로 인해 발생하는 모든 성격의 신체 상해 또는 재산 피해; (4) 서비스를 통해 구매 또는 취득한 상품, 데이터, 정보 또는 서비스 또는 수신된 메시지 또는 체결된 거래로 인해 발생하는 대체 상품 및 서비스의 조달 비용; (5) 당사의 보안 서버에 대한 무단 접속 또는 사용 및/또는 해당 서버에 저장된 모든 개인 정보 및/또는 재무 정보; (6) 사이트로의 또는 사이트로부터의 전송의 중단 또는 중지; (7) 제3자가 사이트를 통해 또는 사이트로 전송할 수 있는 버그, 바이러스, 트로이 목마 또는 이와 유사한 것, 및/또는; (8) 콘텐츠 및 자료의 오류 또는 누락, 또는 사이트를 통해 게시, 전송 또는 기타 방식으로 제공된 콘텐츠의 사용으로 인해 발생한 모든 종류의 손실 또는 손상; (9) 서비스에서 제3자의 진술 또는 행위; (10) 계약 위반, 불법 행위(능동적이든 수동적이든 과실 포함) 또는 기타 책임 이론으로서 이 서비스 약관 또는 서비스와 관련된 기타 사항.",
    "miscellaneousTitle": "16. 기타",
    "miscellaneousDescription": "본 서비스 약관 및 사이트에 게시하거나 사이트와 관련하여 게시한 모든 정책 또는 운영 규칙은 귀하와 당사 간의 전체 계약 및 이해를 구성합니다. 당사가 본 서비스 약관의 권리 또는 조항을 행사하거나 집행하지 않더라도 해당 권리 또는 조항을 포기한 것으로 간주되지 않습니다. 본 서비스 약관은 법률에서 허용하는 최대 범위에서 적용됩니다. 당사는 언제든지 당사의 권리 및 의무의 일부 또는 전부를 타인에게 양도할 수 있습니다. 당사는 당사의 합리적인 통제 범위를 벗어난 원인으로 인해 발생한 손실, 손해, 지연 또는 불이행에 대해 책임을 지지 않습니다. 본 서비스 약관의 조항 또는 조항의 일부가 불법, 무효 또는 집행 불가능하다고 판단되는 경우, 해당 조항 또는 조항의 일부는 본 서비스 약관에서 분리 가능한 것으로 간주되며 나머지 조항의 유효성 및 집행 가능성에 영향을 미치지 않습니다. 본 서비스 약관 또는 사이트 사용의 결과로 귀하와 당사 간에 합작 투자, 파트너십, 고용 또는 대리 관계가 생성되지 않습니다. 귀하는 본 서비스 약관을 작성했다는 이유로 본 서비스 약관이 당사에 불리하게 해석되지 않는다는 데 동의합니다. 귀하는 본 서비스 약관의 전자적 형태와 본 서비스 약관을 체결하기 위한 당사자들의 서명 부족을 근거로 귀하가 가질 수 있는 모든 방어수단을 포기합니다.",
    "contactTitle": "17. 문의하기",
    "contactDescription": "서비스 약관에 관한 질문이 있으시면 저희에게 문의해 주시기 바랍니다.",
    "neverCap": "NeverCap",
    "site": "대지",
    "services": "서비스"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
