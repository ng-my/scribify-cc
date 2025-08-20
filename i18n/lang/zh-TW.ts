let message = {
  // 首頁
  HomePage: {
    home: "所有轉錄",
    times: "每天{times}次免費轉錄，今天剩餘{left}次。",
    tips: "升級到專業版以獲得無限轉錄。",
    update: "立即升級",
    rename: "重新命名",
    delete: "刪除",
    cancel: "取消",
    confirm: "建立",
    dialogLabel: "資料夾名稱",
    recently: "最近檔案",
    loading: "載入中",
    tour: {
      step0: {
        title: "歡迎使用 {name}",
        tip: "在這裡，您可以：",
        content: "轉錄一次性對話、會議、講座等",
        next: "開始使用"
      },
      step1: {
        title: "轉錄檔案",
        content: "支援三種轉錄方式：本地檔案、連結和錄音。"
      },
      step2: {
        title: "建立資料夾",
        content: '點擊"+"建立資料夾並整理您的檔案。'
      },
      step3: {
        title: "查看轉錄詳情並編輯",
        content: "點擊項目以查看轉錄詳情並進行編輯和翻譯。"
      },
      next: "下一步",
      finish: "知道了"
    },
    export: {
      export: "匯出",
      title: "我們正在生成您的匯出檔案",
      title2: "您的檔案已準備就緒",
      singleLoadingContent: "正在壓縮 1 個檔案。",
      singleSuccessContent: "已壓縮 1 個檔案。",
      loadingContent: "正在壓縮 {num} 個檔案。",
      successContent: "已壓縮 {num} 個檔案。",
      cancel: "取消匯出",
      error: "匯出錯誤",
      dialog: {
        title: "警告",
        content: "取消匯出？",
        cancel: "取消匯出",
        continue: "繼續匯出"
      }
    },
    welcome: {
      title: "歡迎使用 Scribify！",
      description: "在這裡，您可以：",
      transcribe:
        "使用 Scribify 輕鬆轉錄—瞬間將語音對話轉換為清晰、可搜尋和可共享的文字。",
      precision: "立即獲得帶有說話者識別和時間戳的精確轉錄。",
      translate: "打破語言障礙：輕鬆將轉錄翻譯成200多種語言。",
      edit: "編輯、完善並以適合您需求的格式匯出轉錄文字。",
      collaborate: "通過與他人共享轉錄文字進行協作。",
      button: "開始使用",
      tip: "準備好將音訊轉換為轉錄文字了嗎？現在就開始探索！",
      tip2: "立即開始探索！",
      tip1: "準備好將音訊轉換為轉錄文字嗎？ "
    },
    subscriptionModal: {
      left: {
        title: "獲取專業版解鎖更多功能",
        c1: "無限轉錄",
        c2: "10小時上傳",
        c3: "最高優先級",
        c4: "99%轉錄準確率",
        c5: "支援100多種語言",
        c6: "說話者識別",
        c7: "轉錄翻譯",
        t1: "為一個人提供無限轉錄。",
        t2: "每個檔案可長達10小時/5 GB。一次上傳50個檔案。",
        t3: "我們將始終以最高優先級盡快轉錄您的檔案。"
      },
      right: {
        title: "獲取專業版",
        yearly: "年付",
        monthly: "月付",
        save: "節省",
        preMonth: "每月",
        preYear: "每年",
        firstMonth: "第一個月",
        afterwards: "之後"
      },
      subscribe: "訂閱"
    }
  },
  // 文件夾頁
  FolderPage: {
    table: {
      failed: "失敗",
      selected: "已選擇",
      success: "成功",
      fileList: "檔案清單"
    },
    dialog: {
      move: {
        title: "移動",
        label: "選擇資料夾",
        placeholder: "選擇資料夾",
        confirm: "移動",
        cancel: "取消"
      },
      rename: {
        title: "重新命名",
        label: "檔案名",
        confirm: "重新命名",
        cancel: "取消"
      },
      delete: {
        title: "刪除",
        file: "檔案",
        files: "檔案",
        label: "確認刪除？此操作無法撤銷。",
        confirm: "刪除",
        cancel: "取消"
      },
      share: {
        title: "分享",
        label: "任何擁有以下安全連結的人都可以查看此轉錄文本和相關的媒體檔案。",
        confirm: "複製連結",
        success: "複製成功"
      },
      export: {
        title: "匯出",
        select: "選擇你需要的格式",
        settings: "設定",
        speaker: "包含說話人",
        timecodes: "包含時間碼",
        confirm: "匯出",
        cancel: "取消",
        selectErr: "請選擇一個或多個格式"
      }
    },
    search: {
      placeholder: "搜尋"
    },
    recently: "最近",
    record: "錄音",
    transcribe: "轉錄",
    unclassified: "未分類資料夾",
    buttons: {
      transcribe: "轉錄檔案",
      url: "轉錄連結",
      record: "錄音並轉錄",
      recording: "錄音中..."
    },
    delSuccess: "刪除成功",
    create: "建立",
    endRecord: {
      title: "提示",
      content: "您正在錄音。此操作將結束錄音。您要結束錄音嗎？",
      confirm: "繼續錄音",
      cancel: "結束錄音"
    }
  },
  // 文件上傳與錄音
  FileUploadAndRecording: {
    record: {
      record: "錄音",
      pause: "暫停",
      resume: "繼續",
      stop: "停止",
      endRecord: "結束錄製",
      delete: "刪除",
      transcribe: "轉錄",
      permissionDenied: "麥克風權限被拒絕或設備不存在",
      dialog: {
        delete: {
          title: "警告",
          label: "您確定要刪除此錄音嗎？",
          confirm: "刪除",
          cancel: "取消"
        },
        complete: {
          title: "錄音完成",
          label: "錄音已達到10小時並自動停止。請進行轉錄。",
          confirm: "知道了"
        },
        speaker: {
          content: "說話者辨識功能限制檔案長度為 3 小時。請取消勾選「{text}」。"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "轉錄線上媒體",
        title: "貼上連結",
        label:
          "貼上您的影片或音訊連結，來源包括：YouTube、Facebook、X、Dropbox、Google Drive、Vimeo、TikTok、Instagram 等平台...",
        confirm: "新增",
        cancel: "取消",
        errorTitle: "您輸入的連結地址不正確。請檢查後重試。",
        linkName: "連結"
      },
      file: {
        orTitle: "轉錄線上媒體",
        dialogTitle: "轉錄檔案",
        tip1: "拖曳檔案至此或點擊瀏覽",
        tip2: "點擊瀏覽",
        or: "或",
        supported: "支援格式"
      },
      del: {
        title: "警告",
        content: "所有進度將遺失。確認取消轉錄？",
        cancel: "確認取消",
        confirm: "繼續轉錄"
      },
      files: "檔案",
      resultDialogTitle: "轉錄檔案",
      resultDialogTitle2: "轉錄檔案",
      cancel: "取消",
      confirm: "轉錄",
      return: "返回",
      addMore: "添加更多",
      language: "媒體語言",
      failed: "失敗",
      tooLarge: "檔案超出限制（5G）。",
      linkUpload: "上傳中",
      fileFormat: "檔案格式不被允許",
      localFiles: "本地檔案",
      pasteLink: "線上連結",
      uploadErr: "上傳錯誤",
      hashErr: "哈希錯誤",
      table: {
        status: "狀態",
        file: "檔案",
        size: "大小",
        noData: "無數據"
      },
      maxFileNum: "檔案數量不能超過 {num}。",
      speaker: "辨識說話者",
      speakerLabel: "自動偵測誰在說話",
      guest: {
        transcribe: "錄製",
        file: "文件",
        audio: "音訊/視訊文件",
        Uploading: "正在上傳..."
      }
    }
  },
  // 轉錄詳情頁
  TranscriptionPage: {
    langChooseV1: {
      recently: "最近",
      popular: "常用",
      other: "其他",
      searchLanguage: "搜尋語言",
      noMatch: "未找到匹配的語言",
      English: "英語",
      "English(US)": "英語（美國）",
      "English(UK)": "英語（英國）",
      Spanish: "西班牙語",
      Portuguese: "葡萄牙語",
      French: "法語",
      Italian: "義大利語",
      German: "德語",
      Dutch: "荷蘭語",
      Polish: "波蘭語",
      Danish: "丹麥語",
      Japanese: "日語",
      Korean: "韓語",
      Hungarian: "匈牙利語",
      Czech: "捷克語",
      Chinese: "中文",
      Hebrew: "希伯來語",
      Arabic: "阿拉伯語",
      Azerbaijani: "阿塞拜疆語",
      Estonian: "愛沙尼亞語",
      Belarusian: "白俄羅斯語",
      Bulgarian: "保加利亞語",
      Icelandic: "冰島語",
      Bosnian: "波斯尼亞語",
      Persian: "波斯語",
      Russian: "俄語",
      "Chinese(Traditional)": "繁體中文",
      Finnish: "芬蘭語",
      Kazakh: "哈薩克語",
      Galician: "加利西亞語",
      Catalan: "加泰羅尼亞語",
      "Chinese(Simplified)": "簡體中文",
      Kannada: "卡納達語",
      Croatian: "克羅地亞語",
      Latvian: "拉脫維亞語",
      Lithuanian: "立陶宛語",
      Romanian: "羅馬尼亞語",
      Marathi: "馬拉地語",
      Malay: "馬來語",
      Macedonian: "馬其頓語",
      Maori: "毛利語",
      Afrikaans: "南非語 (阿非利卡語)",
      Nepali: "尼泊爾語",
      Norwegian: "挪威語",
      Swedish: "瑞典語",
      Serbian: "塞爾維亞語",
      Slovak: "斯洛伐克語",
      Slovenian: "斯洛文尼亞語",
      Swahili: "斯瓦希里語",
      Tagalog: "菲律賓語",
      Tamil: "泰米爾語",
      Thai: "泰語",
      Turkish: "土耳其語",
      Welsh: "威爾士語",
      Urdu: "烏爾都語",
      Ukrainian: "烏克蘭語",
      Greek: "希臘語",
      Armenian: "亞美尼亞語",
      Hindi: "印地語",
      Indonesian: "印度尼西亞語",
      Vietnamese: "越南語",
      Albanian: "阿爾巴尼亞語",
      Amharic: "阿姆哈拉語",
      Assamese: "阿薩姆語",
      Occitan: "奧克語",
      Bashkir: "巴什基爾語",
      Basque: "巴斯克語",
      Breton: "布列塔尼語",
      Tibetan: "藏語",
      Faroese: "法羅語",
      Sanskrit: "梵語",
      Khmer: "高棉語",
      Georgian: "格魯吉亞語",
      Gujarati: "古吉拉特語",
      "Haitian Creole": "海地克里奧爾語",
      Hausa: "豪薩語",
      Latin: "拉丁語",
      Lao: "老撾語",
      Lingala: "林加拉語",
      Luxembourgish: "盧森堡語",
      Malagasy: "馬爾加什語",
      Maltese: "馬耳他語",
      Malayalam: "馬拉雅拉姆語",
      Mongolian: "蒙古語",
      Bengali: "孟加拉語",
      Burmese: "緬甸語",
      Punjabi: "旁遮普語",
      Pashto: "普什圖語",
      Sinhala: "僧伽羅語",
      Shona: "修納語",
      Somali: "索馬里語",
      Tajik: "塔吉克語",
      Tatar: "鞑靼語",
      Telugu: "泰盧固語",
      Turkmen: "土庫曼語",
      Uzbek: "烏茲別克語",
      Hawaiian: "夏威夷語",
      "Norwegian Nynorsk": "新挪威語",
      Sindhi: "信德語",
      Sundanese: "巽他語",
      Yiddish: "意第緒語",
      Yoruba: "約魯巴語",
      Javanese: "爪哇語",
      Cantonese: "粵語",
      Abkhaz: "阿布哈茲語",
      Afar: "阿法爾語",
      alz: "阿盧爾語",
      ach: "阿喬利語",
      awa: "阿瓦德語",
      Avaric: "阿瓦爾語",
      Ewe: "埃維語",
      Aymara: "艾馬拉語",
      Irish: "愛爾蘭語",
      Oriya: "奧利亞語",
      Oromo: "奧羅莫語",
      Ossetian: "奧塞梯語",
      tpi: "巴布亞皮欽語",
      bew: "巴達維語",
      ban: "巴厘語",
      btx: "巴塔克卡羅語",
      bbc: "巴塔克托巴語",
      bts: "巴塔克西馬隆貢語",
      bci: "巴烏雷語",
      Bambara: "班巴拉語",
      pag: "邦阿西楠語",
      pam: "邦板牙語",
      nso: "北索托語",
      bem: "奔巴語",
      bik: "比科爾語",
      bal: "俾路支語",
      bho: "博傑普爾語",
      bua: "布里亞特語",
      chm: "草原馬里語",
      Chamorro: "查莫羅語",
      Chechen: "車臣語",
      chk: "楚克語",
      Chuvash: "楚瓦什語",
      Tswana: "茨瓦納語",
      Tsonga: "聰加語",
      "fa-AF": "達里語",
      shn: "掸語",
      tet: "德頓語",
      Divehi: "迪維希語",
      dyu: "迪尤拉語",
      tiv: "蒂夫語",
      din: "丁卡語",
      doi: "多格拉語",
      "ndc-ZW": "恩道語",
      "South Ndebele": "恩德貝萊語（南部）",
      dov: "恩敦貝語",
      "bm-Nkoo": "恩科字母（西非書面文字）",
      "French(Canada)": "法語（加拿大）",
      Fijian: "斐濟語",
      fon: "豐語",
      "Western Frisian": "弗里西語",
      fur: "弗留利語",
      Fulah: "富拉尼語",
      Kongo: "剛果語",
      Kalaallisut: "格陵蘭語",
      gom: "貢根語",
      Guarani: "瓜拉尼語",
      cnh: "哈卡欽語",
      hrx: "洪斯呂克語",
      Kyrgyz: "吉爾吉斯語",
      ktu: "吉土巴語",
      gaa: "加語",
      kac: "景頗語",
      Kanuri: "卡努里語",
      kha: "卡西語",
      kek: "凱克其語",
      Komi: "科米語",
      Xhosa: "科薩語",
      Corsican: "科西嘉語",
      "crh-Latn": "克里米亞鞑靼語（拉丁文）",
      crh: "克里米亞鞑靼語（西里爾文）",
      Quechua: "克丘亞語",
      Kurdish: "庫爾德語（庫爾曼吉語）",
      ckb: "庫爾德語（索拉尼）",
      trp: "廓克博若克語",
      ltg: "拉特加萊語",
      lij: "利古里亞語",
      Limburgish: "林堡語",
      Kirundi: "隆迪語",
      luo: "盧奧語",
      Luganda: "盧干達語",
      Kinyarwanda: "盧旺達語",
      lmo: "倫巴第語",
      rom: "羅姆語",
      mad: "馬都拉語",
      Manx: "馬恩島語",
      mwr: "馬爾瓦迪語",
      "ms-Arab": "馬來語（爪夷文）",
      Marshallese: "馬紹爾語",
      mam: "瑪姆語",
      mai: "邁蒂利語",
      mfe: "毛里裘斯克里奧耳語",
      "mni-Mtei": "梅泰語（曼尼普爾語）",
      min: "米南語",
      lus: "米佐語",
      hmn: "苗語",
      nhe: "納瓦特爾語（東部瓦斯特卡）",
      "Southern Sotho": "南索托語",
      new: "尼泊爾語言（尼瓦爾語）",
      nus: "努爾語",
      pap: "帕皮阿門托語",
      "pa-Arab": "旁遮普語（沙木基文）",
      "pt-PT": "葡萄牙語（葡萄牙）",
      Chichewa: "齊切瓦語",
      cgg: "奇加語",
      lua: "奇盧伯語",
      Akan: "契維語",
      zap: "薩巴特克語",
      "Northern Sami": "薩米語（北部）",
      Samoan: "薩摩亞語",
      kri: "塞拉利昂克里奧爾語",
      crs: "塞舌爾克里奧爾語",
      Sango: "桑戈語",
      "sat-Latn": "桑塔利語（拉丁文）",
      sat: "桑塔利語（歐甘文）",
      Esperanto: "世界語",
      Swati: "斯瓦特語",
      "Scottish Gaelic": "蘇格蘭蓋爾語",
      sus: "蘇蘇語",
      ceb: "宿務語",
      ber: "塔馬齊格特語（提非納文）",
      "ber-Latn": "塔馬塞特語",
      Tahitian: "塔希提語",
      Tonga: "湯加語",
      Tigrinya: "提格里尼亞語",
      tcy: "圖魯語",
      tum: "圖姆布卡語",
      tyv: "圖瓦語",
      war: "瓦瑞語",
      mak: "望加錫語",
      vec: "威尼斯語",
      Uyghur: "維吾爾語",
      Venda: "文達語",
      Wolof: "沃洛夫語",
      udm: "烏德穆爾特語",
      szl: "西里西亞語",
      scn: "西西里語",
      hil: "希利蓋農語",
      jam: "牙買加土語",
      sah: "雅庫特語",
      ace: "亞齊語",
      iba: "伊班語",
      Igbo: "伊博語",
      ilo: "伊洛卡諾語",
      "iu-Latn": "因紐特語（拉丁文）",
      Inuktitut: "因紐特語（音節）",
      yua: "尤卡坦瑪雅語",
      Dzongkha: "宗卡語",
      Zulu: "祖魯語"
    }
  },
  // 登錄、註冊、修改密碼
  IdentityInfoManage: {
    or: "或", // 或
    LoginBtn: "使用信箱登入",
    LoginGoogle: "使用 Google 登入",
    SignupBtn: "使用信箱註冊",
    SignupGoogle: "使用 Google 註冊",
    SignupDes: "立即註冊，免費體驗神奇效果。",
    SignupTitle: "高精度且無限量轉錄",
    signup: "註冊", // 註冊
    sign_up: "註冊", // 註冊
    loginByGoogle: "使用Google登錄", // 使用Google登錄
    emailAddress: "請輸入您的郵箱", // 請輸入您的郵箱
    createAccount: "建立帳戶", // 建立帳戶
    accountExists: "已經有帳戶了? ", // 已經有帳戶了？登錄
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "繼續操作，即表示您同意我們的{terms}和{policy}。",
      terms: "條款",
      policy: "隱私政策"
    },
    setPassword: "設置密碼", // 設置密碼
    code: "驗證碼", // 驗證碼
    resend: "重新發送", // 重新發送
    enterPassword: "密碼：最少6個字元。", // 請輸入密碼
    passwordLeval: "密碼強度", // 密碼強度
    Weak: "弱", // 弱 中 強
    Medium: "中", // 弱 中 強
    Strong: "強", // 弱 中 強
    confirmPassword: "確認密碼", // 確認密碼
    invalidEmail: "無效的郵箱地址", // 無效的郵箱地址
    logInDirectly: "帳戶已存在，請直接登錄。", // 帳戶已存在，請直接登錄
    codeErrorTryAgain: "驗證碼錯誤，請重試。", // 驗證碼錯誤，請重試
    atLeastSix: "密碼長度至少6位。", // 密碼長度至少6位
    passwordNotMatch: "密碼不匹配，請重試。", // 密碼不匹配，請重試
    login: "登錄", // 登錄
    log_in: "登錄", // 登錄
    log_In: "登錄", // 登錄
    password: "密碼", // 密碼
    forgotPassword: "忘記密碼？", // 忘記密碼？
    noAccount: "沒有帳戶？", // 沒有帳戶？註冊
    accountNotExists: "帳戶不存在。", // 帳戶不存在
    passwordError: "密碼錯誤", // 密碼錯誤
    sendCode: "發送驗證碼", // 發送驗證碼
    resetPassword: "重設密碼", // 重置密碼
    resetYourPassword: "重置密碼", // 重置你的密碼
    newOldCantSame: "新密碼與舊密碼不能相同。", // 新密碼與舊密碼不能相同
    passwordResetOk: "密碼重置成功！", // 密碼重置成功！
    signupToSaveProgress: "完成註冊以保存您的進度",
    tip: "提示",
    tipContentEmail: "我們已將您的帳號登入密碼傳送至您的電子信箱。",
    tipContentPassword: "請檢查收件匣，使用電子郵件和密碼登入。",
    codeToEmail: "我們已向您的信箱發送了驗證碼。請查收郵件並在上方貼上驗證碼。"
  },
  // 分享詳情頁
  Sharepage: {},
  // 初始化頁
  InitPage: {},
  // 帳戶設定
  AccountSettingsPage: {
    subscription: "訂閱方案",
    freeversion: "免費版",
    transcribeTimesDay: "每日3次轉錄",
    uploadMinutes: "30分鐘上傳",
    lowerPriority: "較低優先級",
    currentPlan: "當前方案",
    professionalEdition: "專業版",
    unlimitedTranscription: "無限次轉錄",
    unlimitedNumberOfTimes: "轉錄頻率與時長無限制。",
    filesUploadedAtOnce: "單個檔案最長10小時/5GB。可同時上傳50個檔案。",
    highestPriority: "最高優先級",
    weWillGiveTheHighest: "我們將始終以最高優先級盡快轉錄您的檔案。",
    theFirstMonth: "首月",
    subscribeTo: "訂閱",
    basicVersionFree: "基礎版（免費）",
    return: "返回",
    annualize: "按年訂閱",
    monthly: "按月訂閱",
    everyYear: "每年",
    saved: "已節省",
    byTheMonth: "按月",
    firstMonth: "首月",
    afterwardsEveryMonth: "之後每月",
    manageSubscription: "管理訂閱",
    professionalYearbook: "專業年費版",
    professionalMonthly: "專業月費版",
    subscriptionWillCancelledOn: "訂閱到期日",
    displayLanguage: "顯示語言",
    update: "立即升級",
    basicversion: "基礎版（免費）",
    daily: "已用{start}次，每日限額{end}次",
    upgradetoPro: "升級至專業版",
    accountSetting: "帳戶設定",
    logOut: "登出",
    account: "帳戶",
    email: "電子郵件",
    id: "ID",
    password: "密碼",
    resetPassword: "重設密碼",
    logIn: "登入",
    tryForFree: "免費試用",
    notFund: "找不到",
    couldntFind: "找不到您要的內容。",
    proAnnual: "專業年費版",
    proMonthly: "專業月費版",
    perMonth: "每月",
    afterwards: "之後",
    accuracy: "轉錄準確率",
    supported: "支援語言",
    identification: "說話人識別",
    transcriptSranslation: "轉錄翻譯",
    perYear: "每年",
    getProPlan: "獲取專業版",
    changeToAnnual: "切換為年費",
    automaticRenewalon: "自動續費日期",
    eachMonth: "每月{time}日自動續訂",
    automaticRenewal: "自動續費失敗，請檢查支付方式。",
    eachYear: "每年{time}自動續費",
    returnAccountSetting: "返回",
    needsToWaitLonger: "在文件轉錄完成前請稍作等待。",
    freeThreeTimesDay: "每天免費轉錄3個文件。",
    oneFileUploaded: "每個文件最長30分鐘。每次上傳1個文件。",
    uploadWithinHours: "10小時上傳",
    yourSubscription: "您的訂閱將於{time}取消",
    save: "節省",
      freeversion2: "免費方案"
},
  // 語言對應關係
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中文(簡體)",
      "Chinese(Traditional)": "中文(繁體)",
      Japanese: "日語",
      Danish: "丹麥語",
      German: "德語",
      English: "英語",
      Spanish: "西班牙語",
      French: "法語",
      Italian: "義大利語",
      Hungarian: "匈牙利語",
      Dutch: "荷蘭語",
      Norwegian: "挪威語",
      Polish: "波蘭語",
      Portuguese: "葡萄牙語",
      Finnish: "芬蘭語",
      Swedish: "瑞典語",
      Turkish: "土耳其語",
      Greek: "希臘語",
      Russian: "俄語",
      Ukrainian: "烏克蘭語",
      Hebrew: "希伯來語",
      Arabic: "阿拉伯語",
      Korean: "韓語"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​開源的Nuxt3 SaaS模板，預集成全球支付網關（Stripe/Cream）、Google OAuth、i18n路由和SEO優化工具。專為開發多語言Web應用的開發者設計，提供SSR/SSG支持和生產級安全性。",
    startLink: "開始免費試用~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle: "加入候補名單，第一時間獲取最新NuxtPro新聞和折扣！",
      placeholder: "輸入您的郵箱",
      button: "加入候補名單",
      joinCountMessage: "🔥 早期用戶 #{count} 剛剛加入了候補名單！"
    },
    seo: {
      title: "開源Nuxt SaaS樣板 | NuxtPro",
      description:
        "包含您需要的一切的NuxtJS樣板，讓您的產品快速面向客戶。從想法到生產只需5分鐘。"
    },
    api: {
      title: "這是一個演示",
      corpInfo: "公司信息"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "視頻下載錯誤"
      },
      mse: {
        code: 2,
        msg: "流追加錯誤"
      },
      parse: {
        code: 3,
        msg: "解析錯誤"
      },
      format: {
        code: 4,
        msg: "格式錯誤"
      },
      decoder: {
        code: 5,
        msg: "解碼錯誤"
      },
      runtime: {
        code: 6,
        msg: "語法錯誤"
      },
      timeout: {
        code: 7,
        msg: "播放超時"
      },
      other: {
        code: 8,
        msg: "其他錯誤"
      }
    },
    HAVE_NOTHING: "沒有關於音頻/視頻是否就緒的信息",
    HAVE_METADATA: "音頻/視頻的元數據已就緒",
    HAVE_CURRENT_DATA:
      "關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下一幀/毫秒",
    HAVE_FUTURE_DATA: "當前及至少下一幀的數據是可用的",
    HAVE_ENOUGH_DATA: "可用數據足以開始播放",
    NETWORK_EMPTY: "音頻/視頻尚未初始化",
    NETWORK_IDLE: "音頻/視頻是活動的且已選取資源，但並未使用網路",
    NETWORK_LOADING: "瀏覽器正在下載數據",
    NETWORK_NO_SOURCE: "未找到音頻/視頻來源",
    MEDIA_ERR_ABORTED: "取回過程被用戶中止",
    MEDIA_ERR_NETWORK: "網路錯誤",
    MEDIA_ERR_DECODE: "解碼錯誤",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支援的音頻/視頻格式",
    REPLAY: "重播",
    ERROR: "網路連接似乎出現了問題",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暫停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下載",
    ROTATE_TIPS: "旋轉",
    RELOAD_TIPS: "重新載入",
    FULLSCREEN_TIPS: "進入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "進入樣式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出樣式全屏",
    TEXTTRACK: "字幕",
    PIP: "畫中畫",
    SCREENSHOT: "截圖",
    LIVE: "正在直播",
    OFF: "關閉",
    OPEN: "開啟",
    MINI_DRAG: "點擊按住可拖動視頻",
    MINISCREEN: "小螢幕",
    REFRESH_TIPS: "請試試",
    REFRESH: "刷新",
    FORWARD: "快進中",
    LIVE_TIP: "直播",
    TM_SUBTITLE_SHOW_TIPS: "開啟字幕",
    TM_SUBTITLE_HIDE_TIPS: "關閉字幕",
    TM_MINIMIZE_TIPS: "隱藏視頻"
  },
  privacyPolicy: {
    privacyPolicyTitle: "隱私權政策",
    lastUpdated: "最後更新：2025年8月25日",
    policyDescription:
      "本政策描述了 Scribify（以下簡稱「Scribify」、「我們的」、「我們」）在您使用我們的服務、網站時如何收集、使用和揭露您的個人資訊",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition: "以及軟體（統稱為「服務」）。",
    policyAgreement:
      "請仔細閱讀本隱私權政策，並確保您瞭解其內容。使用我們的任何服務，即表示您同意本隱私權政策。如果您不同意我們根據本政策使用您的個人數據，您必須立即停止使用我們的服務。",
    policyOverview:
      "在本政策中，我們闡述了：我們收集哪些資料以及收集原因；您的資料將如何處理；以及您對您的資料享有的權利。我們不會出售您的資料。",
    scopeTitle: "1.本隱私權政策的範圍",
    whatWeCollectTitle: "2. 我們收集哪些資訊以及為什麼",
    accessShareTitle: "3. 我們何時存取或分享您的訊息",
    secureDataTitle: "4. 我們如何保護您的數據",
    deleteContentTitle: "5. 刪除內容後會發生什麼",
    locationTitle: "6. 站點和資料的位置",
    childrenPrivacyTitle: "7.兒童隱私",
    updatesTitle: "8. 本隱私權政策的更新",
    contactUsTitle: "9. 聯絡我們",
    identityAccessTitle: "2.1 身分與訪問",
    billingInfoTitle: "2.2 帳單資訊",
    productInteractionsTitle: "2.3 產品交互",
    websiteInteractionsTitle: "2.4 網站互動",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 自願通信",
    scopeContent:
      "本隱私權政策僅適用於我們對服務使用者資訊的收集和處理。本隱私權政策不適用於任何連結至我們的第三方所經營的服務、網站或軟體（無論這些連結是由我們提供的或其他使用者分享的），也不適用於來自第三方的內容、資料、應用程式或資料。我們建議您在向任何第三方網站或軟體提供任何資訊之前，先查看其隱私權政策。",
    collectPrinciple:
      "我們的指導原則是只收集我們需要的資訊。以下是實際操作中的意義：",
    identityAccessContent:
      "當您註冊我們的某款產品時，我們會要求您提供身份訊息，例如您的姓名、電子郵件地址。這是為了提供必要的產品功能，並方便我們向您發送產品更新和其他重要資訊。",
    billingInfoContent:
      "如果您註冊付費產品，我們將要求您提供付款資訊和帳單地址。付款資訊將直接提交給我們的付款處理器，不會發送到我們的伺服器。",
    productInteractionsContent:
      "我們將您在產品帳戶中上傳、接收或維護的內容儲存在我們的伺服器上。除非您刪除這些內容，否則只要您的帳戶處於活躍狀態，我們就會一直保留這些內容。",
    websiteInteractionsContent:
      "我們收集您的瀏覽活動信息，用於分析和統計目的，例如轉換率測試和新產品設計實驗。這些資訊包括：例如，您的瀏覽器和作業系統版本、您的 IP 位址、您造訪的網頁及其載入時間，以及哪個網站將您推薦給我們。如果您擁有帳戶並已登錄，這些網路分析資料將與您的 IP 位址和使用者帳戶綁定，直到您的帳戶不再活躍。",
    cookiesContent1:
      "我們還使用持久性第一方 cookie 和一些第三方 cookie 來儲存某些偏好，讓您更輕鬆地使用我們的應用程序，並執行 A/B 測試以及支援一些分析。",
    cookiesContent2:
      "Cookie 是瀏覽器儲存的一段文字。它可以幫助您記住登入資訊和網站偏好設定。它還可能收集您的瀏覽器類型、作業系統、造訪過的網頁、造訪時間、瀏覽過的內容以及其他點擊流資料等資訊。您可以在瀏覽器設定中調整 Cookie 保留設置，並接受或封鎖單一 Cookie。但是，如果您關閉 Cookie，我們的應用程式將無法運行，我們服務的其他方面也可能無法正常運作。",
    voluntaryCorrespondenceContent:
      "當您透過電子郵件向我們提出問題或尋求協助時，我們會保留該通訊記錄，包括您的電子郵件地址，以便我們在您將來聯絡我們時可以參考過去的通訊記錄。",
    accessShareContent1:
      "為了提供您所要求的產品或服務。我們會使用一些第三方子處理器來協助運行我們的應用程式並向您提供服務。這包括雲端和分析提供者。",
    accessShareContent2:
      "調查、預防或採取行動應對濫用行為。在調查潛在濫用行為時，存取客戶帳戶是不得已而為之。我們希望保護客戶和舉報人的隱私和安全，並在整個過程中盡力平衡這些責任。如果我們發現您將我們的產品用於受限用途，我們將採取必要的措施，包括在必要時通知相關部門。",
    accessShareContent3: "根據適用法律的要求。",
    userDataRequests:
      "- 用戶資料請求。我們的政策是，除非法律程序強制要求或在有限的緊急情況下，否則我們不會回應政府的用戶資料請求。但是，如果美國執法機構持有必要的搜索令、刑事傳票或法院命令要求我們共享數據，我們必須遵守。同樣，只有在美國政府透過司法互助條約或協議中規定的程序強制要求的情況下，我們才會回應來自美國境外政府機構的請求。我們的政策是在共享資料之前通知受影響的用戶，除非法律禁止我們這樣做，並且某些緊急情況除外。",
    preservationRequests:
      "- 儲存請求。同樣，我們的政策是，只有在美國《聯邦儲存通訊法》第 18 USC 第 2703(f) 條或美國民事傳票強制要求的情況下，我們才會遵守保存資料的請求。除非法律要求或法院命令強制要求（我們選擇不上訴），否則我們不會共享已保存的資料。此外，除非我們在規定保存期到期前收到適當的搜索令、法院命令或傳票，否則我們將在保存期結束時銷毀任何已保存的客戶資料副本。",
    taxAudit:
      "- 如果我們受到稅務機關的審計，我們可能需要分享帳單相關資訊。在這種情況下，我們只會分享必要的最低限度的信息，例如帳單地址和免稅資訊。",
    secureDataContent1: "所有資料均透過加密",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "當從我們的伺服器傳輸到您的瀏覽器。",
    deleteContentContent: "如果您刪除任何內容，它將立即變得無法存取。",
    locationContent:
      "我們的產品和其他網路資產在美國運作。如果您位於歐盟、英國或美國以外的其他地方，請注意，您向我們提供的任何資訊都將傳輸至美國並儲存於美國。使用我們的網站或服務和/或向我們提供您的個人信息，即表示您同意此類傳輸。",
    childrenPrivacyContent:
      "本服務並非針對兒童，我們不會故意收集 13 歲以下兒童的個人資訊。若您未滿 13 歲，請勿透過本服務提交任何個人資訊。如果您認為有兒童違反本政策向我們提供了個人信息，請按照以下方式與我們聯繫。",
    updatesContent:
      "我們可能會根據需要更新本政策，以符合相關法規並反映任何新的做法。每當我們的政策做出重大變更時，我們都會更新本頁面頂部的日期。",
    contactUsContent1: "如果您對我們的隱私權政策有任何疑問、意見或投訴，請",
    contactUs: "聯絡我們",
    contactUsContent2: "我們將盡力盡快處理您的投訴。"
  },
  termsOfService: {
    termsOfServiceTitle: "服務條款",
    lastUpdated: "最後更新：2022 年 9 月 21 日",
    thankYouMessage: "感謝您使用我們的產品！",
    companyReference:
      "當我們在本文檔中說「本公司」、「我們」、「我們的」或「我們」時，我們指的是 Scribify。",
    servicesDefinition:
      "當我們說「服務」時，我們指的是 Scribify 創建和維護的任何產品，無論是透過網頁瀏覽器、桌面應用程式、行動應用程式或其他格式交付。",
    termsUpdateNotice:
      "我們未來可能會更新本服務條款。通常，這些變更旨在透過連結至更詳細的相關政策來澄清部分條款。每當我們對保單做出重大變更時，我們都會更新本頁面頂部的日期，並採取其他適當措施通知帳戶持有人。",
    acceptanceOfAgreementTitle: "1. 接受協議",
    scribifyServicesTitle: "2. Scribify 的服務",
    accountTermsTitle: "3. 帳戶條款",
    paymentRefundsTitle: "4. 付款、退款和計劃變更",
    cancellationTerminationTitle: "5. 取消和終止",
    submissionsTitle: "6. 提交內容",
    uptimeSecurityTitle: "7. 正常運作時間和安全性",
    siteManagementTitle: "8.現場管理",
    copyrightContentTitle: "9. 版權和內容所有權",
    prohibitedActivitiesTitle: "10.禁止的活動",
    featuresBugsTitle: "11. 功能和錯誤",
    correctionsTitle: "12. 更正",
    userDataTitle: "13.用戶數據",
    privacyPolicyTitle: "14. 隱私權政策",
    liabilityTitle: "15. 責任",
    miscellaneousTitle: "16. 其他",
    contactUsTitle: "17. 聯絡我們",
    acceptanceContent1:
      "使用我們的服務，即表示您接受本協議，本協議由此成為您與 Scribify 之間具有約束力的合約。您聲明您具備法定能力接受這些條款，並確認您已達到訂立具有約束力合約的法定年齡。 Scribify 的接受度明確以您同意本協議的所有條款和條件為前提。",
    acceptanceContent2:
      "該服務不適用於 18 歲以下的任何人，也不應該由 18 歲以下的任何人使用。透過使用本服務，您聲明並保證您符合上述資格要求。",
    acceptanceContent3:
      "「您」、「您的」、「您本人」等字眼也包括您的員工、代理人、業務代表以及您允許透過您的帳戶（定義見下文）存取服務的任何其他個人。您有責任確保所有透過您的帳號存取服務的人員均知悉並遵守本條款。",
    acceptanceContent4:
      "Scribify 保留隨時自行決定修改和更新本條款的權利。所有變更一經發布即刻生效。如果您在修訂條款發布後繼續使用本服務，即表示您接受並同意這些變更。由於變更對您具有約束力，因此請您不時查看此頁面，以了解任何變更。",
    servicesContent1:
      "我們的服務使用戶能夠將語音對話轉換為可搜尋、翻譯和與他人共享的轉錄文字。",
    servicesContent2:
      "您可以選擇使用本服務的免費版本（「免費服務」）或可能需要支付費用的訂閱式付費版本服務（「付費服務」）。",
    servicesContent3:
      "我們將向您提供服務。您有責任做好一切必要安排，以便存取服務。",
    accountTerms1:
      "- 您有責任維護您的帳戶安全。若您未能履行此安全義務，本公司將不承擔任何因您未能履行此安全義務而造成的任何損失或損害。",
    accountTerms2: "- 您不得將服務用於任何非法、不道德或不道德的目的。",
    accountTerms3:
      "- 您應對您帳戶下發布的所有內容和活動負責。這包括以下人員發佈的內容：(a) 有權存取您的登入憑證；或 (b) 在您的帳戶下擁有自己的登入資訊。",
    accountTerms4:
      "- 您必須是人類。不允許使用「機器人」或其他自動化方法註冊的帳戶。",
    paymentContent1:
      "- 對於提供免費試用的付費服務，我們會在您註冊時說明試用期限。試用期結束後，您需要提前付費才能繼續使用服務。如果您不付費，這些服務將被終止。",
    paymentContent2:
      "- 如果您從免費計劃升級到付費計劃，我們將立即從您的卡中扣款，您的計費週期從升級當天開始。",
    paymentContent3:
      "- 所有費用均不含稅務機關徵收的任何稅費、徵稅或關稅。如有需要，我們將代表稅務機關代收這些稅費，並將稅費匯給稅務機關。否則，您需自行承擔所有稅金、徵稅或關稅。",
    paymentContent4:
      "- 所有購買均不可退款。您可以隨時登入您的帳戶取消任何付費服務。對於付費訂閱，除非另有說明，否則您的取消將在當前付費期限結束時生效。",
    cancellationContent1:
      "- 如果您在任何付費期限結束前取消服務，您的取消將立即生效，並且不會再次向您收費。我們不會在上一個計費週期內自動按比例分配未使用的時間。",
    cancellationContent2:
      "- 我們有權隨時以任何理由暫停或終止您的帳戶，並拒絕您目前或未來使用我們的服務。暫停錶示您將無法存取該帳戶或帳戶中的任何內容。終止將導致您的帳戶或您對帳戶的存取權限被刪除，以及您帳戶中所有內容的喪失和放棄。我們也保留隨時以任何理由拒絕任何人使用服務的權利。我們制定此條款是因為從統計數據來看，在我們服務的數十萬個帳戶中，至少有一個帳戶正在從事惡意活動。",
    cancellationContent3:
      "- 對公司員工或官員進行口頭、身體、書面或其他辱罵（包括辱罵或報復威脅）可能會導致立即終止帳戶。",
    submissionsContent:
      "您確認並同意，您向我們提供的關於本網站的任何問題、評論、建議、想法、反饋或其他信息（統稱“提交內容”）均非保密信息，並將成為我們的唯一財產。我們擁有包括所有智慧財產權在內的專有權利，並有權出於任何合法目的（商業或其他目的）不受限制地使用和傳播這些提交內容，而無需向您確認或支付任何報酬。您特此放棄對任何此類提交內容的所有精神權利，並保證任何此類提交內容均為您的原創或您有權提交此類提交內容。您同意，對於任何涉嫌或實際侵犯或盜用您提交內容中任何專有權利的行為，您不得向我們追訴。",
    uptimeContent1:
      "- 您使用本服務的風險由您自行承擔。我們以「現狀」和「可用」為基礎提供這些服務。我們大多數服務不提供服務等級協議，但我們非常重視應用程式的正常運作時間。",
    uptimeContent2:
      "- 如果您的使用量顯著超過其他使用者的平均使用量，我們保留暫時停用您帳戶的權利。當然，我們會在採取任何措施之前與您聯繫，除非在極少數情況下，您的使用量可能會對其他使用者的服務效能產生負面影響。",
    uptimeContent3:
      "- 我們採取多種措施，透過備份、冗餘和加密來保護您的資料安全。我們對透過公共互聯網傳輸的資料強制加密。",
    uptimeContent4:
      "- 我們使用第三方供應商和託管合作夥伴來提供運行服務所需的必要硬體、軟體、網路、儲存和相關技術。",
    siteManagementContent:
      "我們保留以下權利（但沒有義務）：（1）監控網站是否違反本服務條款；（2）對我們自行決定違反法律或本服務條款的任何人採取適當的法律行動，包括但不限於向執法部門舉報該使用者；（3）我們自行決定且不受限制地拒絕、限制存取、限制可用性或停用（在技術可行的範圍內）您的任何貢獻或其任何部分；（4）我們自行決定且不受限制地、通知或承擔責任，從網站中刪除或以其他方式禁用所有過大或以任何方式對我們的系統造成負擔的文件和內容；以及（5）以旨在保護我們的權利和財產並促進網站正常運行的方式管理網站。",
    copyrightContent1: "- 服務上發布的所有內容必須符合美國版權法。",
    copyrightContent2:
      "- 我們對您提供給服務的資料不主張任何智慧財產權。所有上傳的資料仍歸您所有。",
    copyrightContent3:
      "- 我們不預先篩選內容，但保留自行決定拒絕或刪除透過本服務提供的任何內容的權利（但沒有義務）。",
    copyrightContent4:
      "- 本服務的名稱、外觀和風格均受本公司版權©保護。保留所有權利。未經本公司明確書面許可，您不得複製、抄襲或重複使用任何 HTML、CSS、JavaScript 或視覺設計元素。您必須申請許可才能將公司徽標或任何服務徽標用於推廣目的。請",
    emailUs: "給我們發電子郵件",
    copyrightContent5:
      "請求使用徽標。如果您違反本服務條款，我們保留撤銷此許可的權利。",
    copyrightContent6:
      "- 您同意未經本公司明確的書面許可，不得複製、影印、拷貝、出售、轉售或利用本服務的任何部分、使用本服務或存取服務。",
    copyrightContent7: "- 您不得修改其他網站以錯誤地暗示其與服務或公司相關。",
    copyrightContent8:
      "- 我們尊重他人的智慧財產權。如果您認為本網站上或透過本網站提供的任何資料侵犯了您擁有或控制的任何版權，請立即",
    contactUs: "聯絡我們",
    copyrightContent9:
      "您的通知副本將發送給發布或儲存通知中提及資料的人員。請注意，根據適用法律，如果您在通知中作出重大不實陳述，您可能需承擔損害賠償責任。因此，如果您不確定本網站上或連結的資料是否侵犯了您的版權，您應該先考慮聯絡律師。",
    prohibitedActivitiesIntro:
      "您不得為我們提供本網站目的以外的任何目的造訪或使用本網站。除我們明確認可或批准的商業活動外，本網站不得用於任何商業活動。",
    prohibitedActivitiesUserAgreement: "作為本網站的用戶，您同意不：",
    prohibitedActivity1:
      "- 未經我們書面許可，有系統地從網站檢索資料或其他內容，以直接或間接地建立或編譯集合、彙編、資料庫或目錄。",
    prohibitedActivity2:
      "- 欺騙、詐騙或誤導我們和其他用戶，尤其是試圖了解用戶密碼等敏感帳戶資訊。",
    prohibitedActivity3:
      "- 規避、停用或以其他方式乾擾本網站的安全相關功能，包括封鎖或限制使用或複製任何內容或強制限制使用本網站和/或其中包含的內容的功能。",
    prohibitedActivity4:
      "- 我們認為，貶低、玷污或以其他方式損害我們和/或本網站。",
    prohibitedActivity5: "- 使用從本網站獲得的任何資訊來騷擾、辱罵或傷害他人。",
    prohibitedActivity6:
      "- 不當使用我們的支援服務或提交虛假的濫用或不當行為報告。",
    prohibitedActivity7: "- 以不符合任何適用法律或法規的方式使用本網站。",
    prohibitedActivity8: "- 未經授權建置或連結本網站。",
    prohibitedActivity9:
      "- 上傳或傳輸（或試圖上傳或傳輸）病毒、特洛伊木馬或其他資料，包括過度使用大寫字母和垃圾郵件（連續發布重複文字），幹擾任何一方對網站的不間斷使用和享受，或修改、損害、破壞、更改或乾擾網站的使用、特性、功能、操作或維護。",
    prohibitedActivity10:
      "- 從事任何自動化系統使用，例如使用腳本發送評論或訊息，或使用任何資料探勘、機器人或類似的資料收集和提取工具。",
    prohibitedActivity11: "- 從任何內容中刪除版權或其他所有權聲明。",
    prohibitedActivity12:
      "- 試圖冒充其他使用者或個人或使用其他使用者的使用者名稱。",
    prohibitedActivity13:
      "- 上傳或傳輸（或試圖上傳或傳輸）任何作為被動或主動資訊收集或傳輸機制的資料，包括但不限於清晰圖形交換格式（「gif」）、1×1像素、網路臭蟲、cookies或其他類似裝置（有時稱為「間諜軟體」或「被動收集機制」或「pcms」）。",
    prohibitedActivity14:
      "- 幹擾、破壞或對本網站或與本網站連結的網路或服務造成不當負擔。",
    prohibitedActivity15:
      "- 騷擾、煩擾、恐嚇或威脅任何向您提供本網站任何部分的員工或代理人。",
    prohibitedActivity16:
      "- 試圖繞過本網站為防止或限制存取本網站或本網站任何部分而設計的任何措施。",
    prohibitedActivity17:
      "- 複製或改編本網站的軟體，包括但不限於 Flash、PHP、HTML、JavaScript 或其他程式碼。",
    prohibitedActivity18:
      "- 除適用法律允許外，不得對包含或以任何方式構成本網站一部分的任何軟體進行解密、反編譯、反彙編或反向工程。",
    prohibitedActivity19:
      "- 除標準搜尋引擎或網路瀏覽器的使用結果外，使用、啟動、開發或分發任何自動化系統，包括但不限於存取本網站的任何蜘蛛、機器人、欺騙實用程式、抓取工具或離線閱讀器，或使用或啟動任何未經授權的腳本或其他軟體。",
    prohibitedActivity20: "- 使用採購代理或採購代理在網站上進行購買。",
    prohibitedActivity21:
      "- 未經授權使用本網站，包括透過電子或其他方式收集使用者的使用者名稱和/或電子郵件地址以發送未經請求的電子郵件，或透過自動方式或虛假藉口建立使用者帳戶。",
    prohibitedActivity22:
      "- 將本網站用作與我們競爭的任何努力的一部分，或以其他方式將本網站和/或內容用於任何創收活動或商業企業。",
    prohibitedActivity23: "- 使用本網站宣傳或提供銷售商品和服務。",
    prohibitedActivity24: "- 出售或以其他方式轉讓您的個人資料。",
    featuresContent1:
      "我們根據自身經驗以及客戶分享的時間和回饋，精心設計我們的服務。然而，不可能有讓所有人滿意的服務。我們不保證我們的服務一定能滿足您的特定要求或期望。",
    featuresContent2:
      "我們也會測試所有功能，然後再發布。與任何軟體一樣，我們的服務不可避免地會存在一些錯誤。我們會追蹤收到的錯誤報告並努力解決，尤其是與安全或隱私相關的錯誤。並非所有報告的錯誤都會修復，我們也無法保證服務完全沒有錯誤。",
    correctionsContent1:
      "本網站上的資訊可能有排印錯誤、不準確或遺漏，包括描述、價格、供貨情況以及其他各種資訊。我們保留隨時更正任何錯誤、不準確或遺漏以及更改或更新本網站資訊的權利，恕不另行通知。",
    correctionsContent2:
      "我們無法保證本網站始終可用。我們可能會遇到硬體、軟體或其他問題，或需要執行與本網站相關的維護，導致中斷、延遲或錯誤。我們保留隨時以任何理由更改、修訂、更新、暫停、中止或以其他方式修改本網站的權利，恕不另行通知。您同意，對於您在本網站停機或中止期間無法存取或使用本網站而造成的任何損失、損害或不便，我們概不負責。本服務條款中的任何內容均不得解釋為我們有義務維護和支持本網站，或提供與此相關的任何更正、更新或發布。",
    userDataContent:
      "我們將保留您傳輸至本網站的某些數據，用於管理本網站的效能，以及與您使用本網站相關的數據。儘管我們會定期備份數據，但您應對您傳輸的所有數據或與您使用本網站進行的任何活動相關的數據承擔全部責任。您同意，對於任何此類資料的遺失或損壞，我們概不負責，並且您特此放棄因任何此類資料的遺失或損壞而向我們提起訴訟的權利。",
    privacyPolicyContent1: "我們重視資料隱私和安全。請查看我們的",
    privacyPolicy: "隱私權政策",
    privacyPolicyContent2:
      ". 使用本網站即表示您同意遵守我們的隱私權政策，該政策已納入本服務條款。請注意，本網站託管於美國。如果您從世界任何其他地區造訪本網站，且該等地區在管理個人資料收集、使用或揭露方面適用的法律或其他要求與美國適用法律不同，則您繼續使用本網站即表示您將把您的資料傳輸至美國，並且您同意將您的資料傳輸至美國並在美國進行處理。",
    liabilityIntro: "我們在這些條款中都提到了責任，但將其全部放在一個部分：",
    liabilityContent:
      "您明確瞭解並同意，對於因以下原因造成的任何直接、間接、附帶、利潤損失、特殊、後果性、懲罰性或懲戒性損害，包括但不限於利潤損失、商譽損失、使用損失、數據損失或其他無形損失（即使公司已被告知發生此類損害的可能性），本公司不對您或任何第三方承擔法律或衡平法上的錯誤責任：（1）準確之處；（3）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因透過或從本服務購買或取得的任何商品、資料、資訊或服務或收到的訊息或達成的交易而產生的替代商品和服務的採購成本；（5）未經授權存取或使用我們的安全伺服器和/或儲存在其中的任何財務資訊和所有資訊或使用我們的任何財務資訊（6/） (7) 任何第三方傳輸到或透過本網站的任何錯誤、病毒、特洛伊木馬或類似物，和/或； (8) 任何內容和資料中的任何錯誤或遺漏，或因使用透過本網站發布、傳輸或以其他方式提供的任何內容而導致的任何損失或損害； (9) 任何第三方在本服務上的聲明或行為； (10)或與本服務條款或服務有關的任何其他事項，無論是違約、侵權行為（包括主動或被動的疏忽）或任何其他責任理論。",
    miscellaneousContent:
      "本服務條款以及我們在網站上發布的或與網站相關的任何政策或營運規則構成您與我們之間的完整協議和諒解。我們未行使或執行本服務條款中的任何權利或規定，並不構成對該權利或規定的放棄。本服務條款在法律允許的最大範圍內有效。我們可隨時將我們的部分或全部權利和義務轉讓給他人。對於因超出我們合理控制範圍的任何原因造成的任何損失、損害、延誤或未能採取行動，我們概不負責。如果本服務條款的任何規定或部分規定被認定為非法、無效或不可執行，則該規定或部分規定將被視為可與本服務條款分割，且不影響任何其他規定的有效性和可執行性。您與我們之間並未因本服務條款或使用本網站而建立合資、合作、僱用或代理關係。您同意，本服務條款不會因起草本服務條款而被解釋為我們無效。您特此放棄基於本服務條款的電子形式以及本協議各方未簽署執行本服務條款而可能擁有的任何及所有抗辯。",
    contactUsContent1: "如果您對任何服務條款有疑問，請",
    contactUsContent2: "。"
  },
  HeadNavbar: {
    Features: "特徵",
    UnlimitedTranscription: "無限轉錄",
    BulkUpload: "批次上傳",
    Accuracy: "準確率高達 96%",
    Pricing: "定價",
    UseCases: "用例",
    AllUseCases: "所有用例",
    Podcasters: "podcast",
    Journalists: "記者",
    ContentCreators: "內容創作者",
    Researchers: "研究者",
    BusinessTeams: "業務團隊",
    Educators: "教育工作者",
    Resources: "資源",
    YouTubetoMP4: "YouTube 到 MP4",
    StartFreeTrial: "免費試用"
  },
  Footer: {
    des: "全球首個真正無限的AI轉錄服務。無上限，無限制，自由創作。",
    Features: "特徵",
    UseCases: "用例",
    Company: "公司",
    featureMenus: ["無限轉錄", "批次上傳", "準確率高達 96%"],
    useCaseMenus: [
          "所有用例",
          "podcast",
          "記者",
          "內容創作者",
          "研究者",
          "業務團隊",
          "教育工作者"
        ],
    companyMenus: [
          "關於",
          "定價",
          "隱私",
          "條款"
        ]
  },
  Index: {
    Hero: {
      badge: "不再出現「縮水通膨」——實際上無限",
      h1: "停止支付限制：",
      gradient: "真正無限的人工智慧轉錄",
      subtitle: "上傳您的整個播客存檔。轉錄所有訪談。一次處理 50 個檔案。無月上限，無上傳限制。最終，轉錄將根據您的實際需求進行擴展。",
      FreeTrial: "免費試用 - 無需信用卡",
      HowWorks: "了解其工作原理",
      Unlimited: "無限文件上傳",
      NoCap: "無每月通話分鐘數上限",
      Hour: "支援 10 小時文件",
      ExploreUseCases: "探索用例"
    },
    Stats: {
      monthlyMinutes: "每月分鐘數",
      fileUploads: "文件上傳",
      batchProcessing: "批次處理",
      maxFileLength: "最大文件長度"
    },
    FeaturesGrid: {
      try_now: "立即試用",
      no_signup: "無需註冊",
      experience_unltd: "體驗真正無限的轉錄",
      upload_50: "一次最多可在此上傳 50 個文件",
      no_limits: "不再有隱藏的限制",
      no_surprises: "不再有驚喜",
      transparency: "當其他人悄悄地減少你的會議記錄或隱藏小字時，我們相信徹底的透明度",
      feat_unltd: "實際上是無限的",
      feat_unltd_desc: "沒有隱藏在條款中的「合理使用政策」。沒有偽裝成「無限」的儲存上限。上傳您的全部檔案，轉錄所有內容。我們說到做到。",
      feat_bulk: "批次上傳自由",
      feat_bulk_desc: "厭倦了「一次性導入 3 次」或「每月 10 個文件」？一次上傳 50 個文件，無限次上傳。非常適合處理積壓工作。",
      feat_batch: "批次處理",
      feat_batch_desc: "一夜之間即可處理完整季播客。一次上傳 50 則訪談。讓我們的 AI 在您睡眠時為您服務。醒來即可查看完整的轉錄稿。",
      feat_accuracy: "準確率高達 96%",
      feat_accuracy_desc: "業界領先的人工智慧，具有智慧標點符號、最多 20 位說話者的說話者分類功能，並能完美處理口音和技術術語。",
      feat_langs: "100多種語言",
      feat_langs_desc: "轉錄至 100 多種語言，翻譯至 249 多種語言。不同語言無需額外付費。全球內容，一口價。",
      feat_pro: "專業功能",
      feat_pro_desc: "單字級時間戳可實現精確的音訊/視訊定位，即使在快速對話切換期間也能準確識別說話人，並且段落、句子和標點符號的格式完美的文本可輕鬆閱讀。"
    },
    UseCases: {
      built_for: "專為",
      "heavy_users": "像你一樣的重度用戶",
      "join_users": "加入從「縮水膨脹」服務轉向的 YouTube 用戶、內容創作者和播客行列",
      "podcasters": {
        "title": "podcast",
        "des": "上傳您所有的往期節目。為每一集創建節目筆記。無需再選擇轉錄哪一集。"
      },
      "content_creators": {
        "title": "內容創作者",
        "des": "將您的影片庫轉換為可搜尋的文字。為所有內容產生字幕。無需計算時間，只需建立即可。"
      },
      "journalists": {
        "title": "記者",
        "des": "一次上傳所有採訪。截止日期前不再受「每月 10 個文件」的阻礙。處理所有內容。"
      },
      researchers: {
        title: "研究者",
        des: "轉錄數小時的焦點小組和訪談記錄。一次上傳您的整個研究。獲得準確的說話者辨識。"
      },
      business_teams: {
        title: "業務團隊",
        des: "記錄每一次通話，無需擔心限制。獲取所有對話的 AI 洞察，而非僅限於少數對話。"
      },
      educators: {
        title: "教育工作者",
        des: "轉錄整個系列講座。讓所有內容觸手可及。無需因分鐘數限製而選擇課程。"
      }
    },
    Testimonials: {
      title: "深受喜愛",
      highlighted_users: "50,000+ 位用戶",
      subtitle: "了解為什麼專業人士選擇NeverCap而不是有限的替代方案",
      Mike: {
        "text": "我的天，這玩意兒居然真的管用！我做了三年播客，以前總是像個傻瓜一樣手動抄錄所有內容。一次上傳了六集，結果我和我的搭檔主持人的對話竟然完美地分開了。我以為咖啡店那集被毀了？結果現在的抄寫清晰極了。我再也不用自己打字了。",
        "author": "麥克羅德里格斯",
        "role": "podcast主持人"
      },
      Sarah: {
        "text": "我在線上授課，需要為影片添加字幕。試過其他三個工具，要嘛限制很嚴格，要嘛耗時太長。這個……真的好用？上傳了我的西班牙語課件，兩分鐘就得到了完美的字幕。我的聽力有問題的學生都很高興。真希望我早點找到這個！",
        "author": "陳莎拉",
        "role": "線上教師"
      },
      Jessica: {
        "text": "我一直在用它進行採訪，它的準確性簡直令人難以置信。我曾經用蹩腳的英語和西班牙語進行了一次兩小時的採訪，它把所有資訊都準確無誤，甚至時間戳都記對了。我以前每個月要付實習生200美元，只是為了轉錄內容。這真的讓我每個月都省錢。",
        "author": "傑西卡·帕克",
        "role": "自由撰稿記者"
      }
    },
    PricingPreview: {
      "title": "透明定價",
      "highlighted_text": "無隱藏大寫字母",
      "subtitle": "選擇您的計劃。沒有星號，沒有細則，沒有意外"
    },
    FAQSection: {
      "title": "常見問題",
      "titleHighlight": "問題",
      "questions": [
            {
              "q": "無限策略",
              "question": "真的是無限量嗎？有什麼陷阱嗎？",
              "answer": "是的，它真的無限量！沒有每月分鐘數上限，也沒有超額費用。唯一的限制是技術上的：單一檔案最長可達 10 小時或 5GB，並且您可以一次處理 50 個檔案。但您可以在一整天內上傳任意數量的批次。"
            },
            {
              "q": "準確性",
              "question": "轉錄的準確度如何？",
              "answer": "我們保證 96% 的準確率，確保音訊清晰。我們的 AI 經過數百萬小時的多樣化內容訓練，能夠出色地處理口音、專業術語以及多位說話者。對於難以辨識的音頻，我們的智慧增強功能有助於提升效果。"
            },
            {
              "q": "語言",
              "question": "你們支援哪些語言？",
              "answer": "我們支援超過 100 種語言的轉錄，包括英語、西班牙語、普通話、印地語、阿拉伯語、法語等。此外，您還可以將轉錄文字翻譯成 249 種不同的語言，完美契合全球內容。"
            },
            {
              "q": "速度",
              "question": "轉錄速度有多快？",
              "answer": "閃電般快速！一個 1 小時的音訊檔案通常只需 5 分鐘即可處理完畢。使用批次處理功能，您可以同時上傳 50 個檔案並讓它們並行處理。大多數使用者一覺醒來，就會發現他們的整個音訊庫一夜之間就轉錄完畢了。"
            },
            {
              "q": "消除",
              "question": "我可以隨時取消嗎？",
              "answer": "絕對！無需合約，無需支付取消費用。您可以隨時在控制面板升級、降級或取消訂閱。取消訂閱後，您將保留存取權限，直到您的結算期結束。"
            },
            {
              "q": "安全",
              "question": "我的資料安全嗎？",
              "answer": "您的安全是我們的首要任務。我們已獲得 SOC 2 認證，所有資料均採用 256 位元加密，且絕不會使用您的內容來訓練我們的模型。您可以隨時刪除您的文件，我們會在 30 天後自動清除它們。符合 GDPR 和 CCPA 規定。"
            },
            {
              "q": "導出格式",
              "question": "有哪些匯出格式可用？",
              "answer": "以您需要的任何格式下載您的成績單：PDF、Word (DOCX)、Excel、CSV、SRT 字幕、純文字 (TXT) 和 VTT 字幕。完美適配您的工作流程。"
            },
            {
              "q": "文件格式",
              "question": "我可以上傳哪些音訊和視訊檔案？",
              "answer": "我們支援幾乎所有您能遇到的音訊和視訊格式：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV 等等。只要您能播放，我們就能轉錄。"
            }
          ]
    },
    CTASection: {
      "title": "準備好打破限制了嗎？",
      "subtitle": "加入 50,000 多名已轉向真正無限轉錄的專業人士",
      "button": "免費試用NeverCap",
      "disclaimer": "免費方案無需信用卡 • 隨時升級即可無限訪問"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "不再出現“縮水通膨”",
      heroTitleLine1: "真正無限",
      heroTitleLine2: "人工智慧轉錄",
      heroSubtitle: "雖然 Trint 限制您每月轉錄 50 小時，而 Otter 限制您每月轉錄 10 個文件，但我們兌現了我們的實際承諾：無限制轉錄，無隱藏上限。",
      primaryCta: "免費試用 - 無需信用卡",
      secondaryCta: "看清真相",
      comparisonBadLabel: "其他人的做法",
      comparisonBadTitle: "無所不在的隱藏限制",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "特林特：",
      comparisonBadItem1Text: "「無限制」=每月 50 小時上限",
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "獺：",
      comparisonBadItem2Text: "3 次終身導入（免費），10 次/月（專業版）",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "螢火蟲：",
      comparisonBadItem3Text: "800分鐘儲存限制",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "描述：",
      comparisonBadItem4Text: "每月最多 30 小時",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "隱藏在條款與條件中",
      comparisonGoodLabel: "我們所做的",
      comparisonGoodTitle: "實際上是無限的",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "無每月分鐘數上限",
      comparisonGoodItem1Text: "曾經",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "無限檔案上傳",
      comparisonGoodItem2Text: "總是",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "無儲存限制",
      comparisonGoodItem3Text: "根本",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50個文件批次上傳",
      comparisonGoodItem4Text: "任何時候",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "透明的政策",
      comparisonGoodItem5Text: "預付",
      feature1Label: "無限制",
      feature1TitlePart1: "轉錄 1,000 小時？",
      feature1TitlePart2: "價格相同。",
      feature1Description: "告別分鐘數計算，告別上限。無論您每月轉錄 10 小時還是 10,000 小時，只需支付相同的固定費用。無超額費用，無意外帳單。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "沒有「合理使用」政策花招",
      feature1Point2Icon: "✓",
      feature1Point2Text: "X 小時後無限制",
      feature1Point3Icon: "✓",
      feature1Point3Text: "沒有月底焦慮",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "每月工作時間",
      feature1Stat2Number: "0美元",
      feature1Stat2Label: "超額費用",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "隨時上傳",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "透明的",
      feature2Label: "大量自由",
      feature2TitlePart1: "上傳您的",
      feature2TitlePart2: "整個檔案",
      feature2Description: "Otter 終身免費提供 3 次導入，Pro 版每月提供 10 次導入。我們提供無限量導入。您可以上傳您的播客積壓作品、所有訪談以及多年的錄音。沒有任何限制。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "每批 50 個文件",
      feature2Point2Icon: "✓",
      feature2Point2Text: "支援 10 小時文件",
      feature2Point3Icon: "✓",
      feature2Point3Text: "睡覺時進行處理",
      feature2TableRow1Label: "水獺自由",
      feature2TableRow1Value: "3次終身進口",
      feature2TableRow2Label: "水獺專業版",
      feature2TableRow2Value: "每月 10 個文件",
      feature2TableRow3Label: "特林特",
      feature2TableRow3Value: "每月 50 小時上限",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "真正無限 ✓",
      feature3Label: "社會認同",
      feature3TitlePart1: "用戶是",
      feature3TitlePart2: "每日切換",
      feature3Description: "「我每年支付 100 美元購買 Otter，但他們每月限制我只能導入 10 個文件。一旦有無限導入的替代方案，我就放棄了！」——真正的 Reddit 用戶",
      feature3Point1Icon: "✓",
      feature3Point1Text: "超過 50,000 名用戶已切換",
      feature3Point2Icon: "✓",
      feature3Point2Text: "摘自奧特的《縮水通膨》",
      feature3Point3Icon: "✓",
      feature3Point3Text: "永不回頭",
      feature3Stat1Number: "5萬+",
      feature3Stat1Label: "滿意的用戶",
      feature3Stat2Number: "100萬+",
      feature3Stat2Label: "已處理文件",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "準確性",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "無隱藏費用",
      trustBadge1Number: "∞",
      trustBadge1Label: "分鐘/月",
      trustBadge2Number: "100+",
      trustBadge2Label: "語言",
      trustBadge3Number: "96%",
      trustBadge3Label: "準確性",
      trustBadge4Number: "50",
      trustBadge4Label: "批次上傳",
      ctaTitle: "停止購買虛假無限流量",
      ctaSubtitle: "加入數千名轉向真正無限轉錄的用戶",
      finalCta: "免費試用NeverCap"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "批次上傳自由",
      heroTitleLine1: "上傳 50 個檔案。",
      heroTitleHighlight: "處理一切。",
      heroSubtitle: "Otter 終身提供 3 次導入。三次，終身有效。我們為您提供無限上傳，每次最多 50 個文件，隨時隨地滿足您的需求。",
      primaryCta: "開始批次上傳 →",
      secondaryCta: "查看限制",
      redditQuote: "我有三年的播客節目要轉錄。 Otter 告訴我，我只能終身導入三次。三次。這太侮辱人了。",
      redditAuthorIcon: "📍",
      redditAuthorText: "來自 r/podcasting 的真正挫敗感",
      comparisonSectionTitlePart1: "這",
      comparisonSectionTitleHighlight: "荒謬的限制",
      comparisonSectionTitlePart2: "他們強加",
      comparisonSubtitle: "競爭對手如何限制您處理內容的能力",
      limitCard1Service: "水獺自由",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "終身進口",
      limitCard1DescriptionLine2: "（是的，在你的一生中）",
      limitCard2Service: "水獺專業版",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "每月文件數",
      limitCard2DescriptionLine2: "（每年 100 美元計劃）",
      limitCard3Service: "描述",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "一次一個文件",
      limitCard3DescriptionLine2: "（順序上傳）",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "無限上傳",
      limitCard4DescriptionLine2: "每批 50 個文件",
      feature1Label: "大量供電",
      feature1TitlePart1: "處理您的",
      feature1TitleHighlight: "整個檔案",
      feature1TitlePart2: "過夜",
      feature1Description: "睡前上傳 50 個檔案。醒來即可完成轉錄。無需排隊，無需等待，也無需“請升級”訊息。只需動動指尖，即可享受強大的處理能力。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 個同時上傳",
      feature1Point2Icon: "✓",
      feature1Point2Text: "平行處理",
      feature1Point3Icon: "✓",
      feature1Point3Text: "支援 10 小時文件",
      feature1Point4Icon: "✓",
      feature1Point4Text: "每個檔案最大 5GB",
      uploadAnimationText1: "50個文件",
      uploadAnimationText2: "放下並處理",
      fileBadge1: "播客_ep_001.mp3",
      fileBadge2: "訪談_raw.mp4",
      fileBadge3: "會議_2024.wav",
      fileBadge4: "講座全文.mov",
      fileBadge5: "+ 46 個其他檔案...",
      feature2Label: "速度",
      feature2TitlePart1: "從上傳到",
      feature2TitleHighlight: "數小時內完成",
      feature2Description: "我們的平行處理基礎設施意味著您的 50 個文件無需排隊等候。它們將同時進行轉錄。過去需要數週才能完成的工作，現在只需數小時即可完成。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1小時文件：5分鐘",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50個檔案：並行處理",
      feature2Point3Icon: "✓",
      feature2Point3Text: "完成後透過電子郵件通知",
      timelineStep1Icon: "1",
      timelineStep1Title: "上傳",
      timelineStep1Time: "0分鐘",
      timelineStep2Icon: "2",
      timelineStep2Title: "加工",
      timelineStep2Time: "5-30分鐘",
      timelineStep3Icon: "3",
      timelineStep3Title: "人工智慧魔法",
      timelineStep3Time: "30-60分鐘",
      timelineStep4Icon: "✓",
      timelineStep4Title: "完全的",
      timelineStep4Time: "< 2 小時",
      feature3Label: "自由",
      feature3TitlePart1: "無需排隊。",
      feature3TitleHighlight: "無需等待。",
      feature3TitlePart2: "沒有限制。",
      feature3Description: "其他人會讓您排隊等候或升級到「優先處理」平台，而我們會緊急處理您的每一次上傳。您的內容至關重要，不容拖延。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "無優先級",
      feature3Point2Icon: "✓",
      feature3Point2Text: "每個人都享有相同的速度",
      feature3Point3Icon: "✓",
      feature3Point3Text: "全天候隨時上傳",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "時刻準備著",
      feature3VisualSubtext: "靈感迸發時隨時上傳",
      useCasesTitlePart1: "非常適合",
      useCasesTitleHighlight: "重度上傳者",
      useCasesSubtitle: "大量上傳挽救局面的真實場景",
      useCase1Title: "播客檔案",
      useCase1Description: "一次上傳三年的劇集。為所有過往劇集建立文字記錄。為每集產生 SEO 內容。",
      useCase2Title: "課程創建",
      useCase2Description: "同時處理所有講座影片。建立學生可存取的文字記錄。建立可搜尋的課程資料。",
      useCase3Title: "面試積壓",
      useCase3Description: "清理堆積如山的未轉錄訪談。數小時即可完成數週的研究。輕鬆按時完成任務，無需擔心。",
      useCase4Title: "YouTube 庫",
      useCase4Description: "為您的整個頻道產生字幕。根據影片內容建立部落格文章。提升所有影片的 SEO。",
      useCase5Title: "會議檔案",
      useCase5Description: "上傳數月的會議記錄。建立可搜尋的會議記錄。再也不用錯過重要決策了。",
      useCase6Title: "研究數據",
      useCase6Description: "批量處理焦點小組。記錄所有參與者的訪談。高效分析定性資料。",
      ctaTitle: "別再乞求上傳更多內容了",
      ctaSubtitle: "獲得真正有效的無限批量處理",
      finalCta: "立即上傳 50 個檔案 →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "業界領先的精度",
      heroTitleLine1: "準確率96%。",
      heroTitleHighlight: "每個字都很重要。",
      heroSubtitle: "12 種主要語言的業界領先準確度。單字級時間戳，實現完美同步。智慧說話者識別，可處理快速對話。專業格式，清晰易讀。",
      primaryCta: "測試我們的準確性 →",
      secondaryCta: "檢視語言",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "準確度",
      statCard1DescriptionLine2: "12種主要語言",
      statCard2Percentage: "95%以上",
      statCard2DescriptionLine1: "準確度",
      statCard2DescriptionLine2: "口音和方言",
      statCard3Percentage: "100毫秒",
      statCard3DescriptionLine1: "詞級",
      statCard3DescriptionLine2: "時間戳精度",
      languageSectionTitlePart1: "12 種主要語言準確率達 96%",
      languageSubtitle: "全球內容的專業級轉錄",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "英語",
      languageCard1Accuracy: "準確率高達 96%",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "西班牙語",
      languageCard2Accuracy: "準確率高達 96%",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "國語",
      languageCard3Accuracy: "準確率高達 96%",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "法語",
      languageCard4Accuracy: "準確率高達 96%",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "德文",
      languageCard5Accuracy: "準確率高達 96%",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "日本人",
      languageCard6Accuracy: "準確率高達 96%",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "韓國人",
      languageCard7Accuracy: "準確率高達 96%",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "葡萄牙語",
      languageCard8Accuracy: "準確率高達 96%",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "俄文",
      languageCard9Accuracy: "準確率高達 96%",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "義大利語",
      languageCard10Accuracy: "準確率高達 96%",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "荷蘭語",
      languageCard11Accuracy: "準確率高達 96%",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "阿拉伯",
      languageCard12Accuracy: "準確率高達 96%",
      moreLanguagesText: "+ 支援 88 種以上語言，準確率達 95% 以上",
      feature1Label: "精確",
      feature1TitlePart1: "詞級",
      feature1TitleHighlight: "時間戳",
      feature1Description: "每個單字都與其音訊位置完美同步。建立可點選的轉錄文字、產生精準的字幕，或跳到錄音中的精確時刻。 100毫秒的精準度，專業人士信賴。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms 時間戳精度",
      feature1Point2Icon: "✓",
      feature1Point2Text: "非常適合影片編輯",
      feature1Point3Icon: "✓",
      feature1Point3Text: "可點選的互動式記錄",
      feature1Point4Icon: "✓",
      feature1Point4Text: "幀精確字幕",
      transcriptLine1Timestamp: "00：12.450",
      transcriptLine1Speaker: "演講者1",
      transcriptLine1Text: "歡迎收聽今天的播客節目。",
      transcriptLine2Timestamp: "00：15.230",
      transcriptLine2Speaker: "演講者2",
      transcriptLine2Text: "感謝邀請我參加節目！",
      transcriptLine3Timestamp: "00：17.890",
      transcriptLine3Speaker: "演講者1",
      transcriptLine3Text: "讓我們深入探討我們的主要主題…",
      transcriptLine4Timestamp: "00：20.120",
      transcriptLine4Speaker: "演講者2",
      transcriptLine4Text: "當然，我很高興討論這個問題。",
      feature2Label: "智慧人工智慧",
      feature2TitlePart1: "手把",
      feature2TitleHighlight: "快速對話",
      feature2Description: "即使在語音重疊、打斷以及快速來回對話中，我們的AI也能準確識別說話者。非常適合採訪、播客和會議等發言者頻繁插話的場合。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "識別最多 20 位發言者",
      feature2Point2Icon: "✓",
      feature2Point2Text: "完美處理中斷",
      feature2Point3Icon: "✓",
      feature2Point3Text: "適用於重疊語音",
      feature2Point4Icon: "✓",
      feature2Point4Text: "保持串擾的準確性",
      feature2VisualNumber: "20",
      feature2VisualTitle: "已確定發言者",
      feature2VisualSubtext: "即使在快速對話中",
      feature3Label: "可讀性",
      feature3TitlePart1: "完美",
      feature3TitleHighlight: "格式化文字",
      feature3Description: "告別冗長的文字。我們的 AI 會自動在適當的位置加入段落、句子和標點符號。結果如何？文字記錄讀起來賞心悅目，易於瀏覽。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "智慧段落分隔符",
      feature3Point2Icon: "✓",
      feature3Point2Text: "準確的標點符號",
      feature3Point3Icon: "✓",
      feature3Point3Text: "正確的大寫字母",
      feature3Point4Icon: "✓",
      feature3Point4Text: "清晰、可掃描的輸出",
      formattingTitle: "之前和之後",
      formattingBeforeLabel: "❌ 其他：",
      formattingBeforeText: "所以今天我們要討論我們一直在開發的新功能，我想你會非常喜歡它們，這些功能是用戶長期以來一直要求的，我們終於完成了。",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "所以今天，我們將討論我們正在開發的新功能。我想你們一定會喜歡它們。這些功能是用戶長期以來一直要求的，我們終於完成了。",
      comparisonSubtitle: "準確性",
      comparisonSectionTitle: "比較",
      comparisonDes: "看看我們如何與競爭對手抗衡",
      tableHeader1: "特徵",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "描述",
      tableHeader5: "牧師",
      tableRow1Feature: "準確度（清晰音訊）",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "字級時間戳",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "說話者識別",
      tableRow3NeverCap: "20位演講者",
      tableRow3Otter: "16位演講者",
      tableRow3Descript: "10位演講者",
      tableRow3Rev: "✕",
      tableRow4Feature: "處理串擾",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "有限的",
      tableRow4Descript: "有限的",
      tableRow4Rev: "✕",
      tableRow5Feature: "智慧格式",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "基本的",
      tableRow6Feature: "12 種語言，覆蓋率 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "體驗 96% 準確率",
      ctaSubtitle: "上傳最具挑戰性的音訊並查看差異",
      finalCta: "立即測試我們的準確性 →"
    }
  },
  Pricing: {
    Hero: {
      "title": "簡單、透明的定價",
      "highlighted_text": "無隱藏大寫字母",
      "description": "選擇適合您需求的套餐。隨時升級或降級。無合約，無意外。"
    },
    Cards: {
      "title": "簡單、透明的定價。",
      "highlighted_text": "無隱藏大寫字母。",
      "description": "選擇適合您需求的套餐。隨時升級或降級。無合約，無意外。",
      "plans": [
            {
              "name": "自由的",
              "price": "0美元",
              "period": "月",
              "discount": "非常適合嘗試我們的服務",
              "limits": {
                "title": "每日限額",
                "items": [
                  "3 個文件/天（≈90 分鐘/天）",
                  "每個檔案最多 30 分鐘（≤250 MB）",
                  "一次上傳 1 個文件",
                  "標準優先權佇列"
                ]
              },
              "features": {
                "title": "特徵",
                "items": [
                  "100多種語言",
                  "發言人標籤",
                  "翻譯",
                  "所有匯出格式"
                ]
              },
              "cta": {
                "text": "免費開始。無需信用卡。",
                "button": "免費開始"
              }
            },
            {
              "name": "專業月刊",
              "price": "17.99 美元",
              "period": "月",
              "discount": "第一個月 9.99 美元",
              "limits": {
                "title": "無月上限",
                "items": [
                  "總分鐘數無限制",
                  "每個檔案最多 10 小時/5 GB",
                  "一次上傳 50 個文件",
                  "優先權佇列"
                ]
              },
              "features": {
                "title": "所有內容均免費，此外",
                "items": [
                  "字級時間戳",
                  "高級說話者識別",
                  "格式化的段落和標點符號",
                  "優先支持"
                ]
              },
              "cta": {
                "text": "無限分鐘。優先速度。批次上傳。",
                "button": "走向專業"
              },
              "badge": "最受歡迎"
            },
            {
              "name": "專業年度",
              "price": "8.99 美元",
              "period": "月",
              "discount": "每年收費 107.88 美元",
              "limits": {
                "title": "與 Pro Monthly 相同",
                "items": [
                  "總分鐘數無限制",
                  "每個檔案最多 10 小時/5 GB",
                  "一次上傳 50 個文件",
                  "優先權佇列"
                ]
              },
              "features": {
                "title": "所有內容均免費，此外",
                "items": [
                  "字級時間戳",
                  "高級說話者識別",
                  "格式化的段落和標點符號",
                  "優先支持"
                ]
              },
              "cta": {
                "text": "無限分鐘。優先速度。批次上傳。",
                "button": "走向專業"
              },
              "badge": "最超值 - 省 50%"
            }
          ],
      "disclaimer": "「無限」意味著沒有月度上限，也不會人為減慢速度。濫用自動化或重新分配服務的行為應遵循合理使用原則。"
    },
    ComparisonTable: {
      "header": {
        "title": "比較所有功能",
        "highlighted_text": "所有功能",
        "subtitle": "詳細了解每個計劃的福利。無任何隱藏限制。"
      },
      "plans": [
              "特徵",
              "自由的",
              "專業月刊",
              "專業年度"
            ],
      "features": [
            {
              "name": "價格",
              "values": [
                "0美元/月",
                {
                  "main": "每月 17.99 美元",
                  "note": "第一個月 9.99 美元"
                },
                {
                  "main": "每月 8.99 美元",
                  "note": "每年收費 107.88 美元"
                }
              ]
            },
            {
              "name": "每月分鐘數",
              "values": ["約 2,700（90/天）", "無限", "無限"]
            },
            {
              "name": "最大文件時長",
              "values": ["30分鐘", "10小時", "10小時"]
            },
            {
              "name": "最大檔案大小",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "批次上傳",
              "values": ["1個文件", "50個文件", "50個文件"]
            },
            {
              "name": "處理速度",
              "values": ["標準", "優先事項", "優先事項"]
            },
            {
              "name": "支援的語言",
              "values": ["100多種語言", "100多種語言", "100多種語言"]
            },
            {
              "name": "翻譯",
              "values": ["真的", "真的", "真的"]
            },
            {
              "name": "說話者識別",
              "values": ["基本的", "高級（20 位演講者）", "高級（20 位演講者）"]
            },
            {
              "name": "字級時間戳",
              "values": ["錯誤的", "真的", "真的"]
            },
            {
              "name": "格式化段落",
              "values": ["錯誤的", "真的", "真的"]
            },
            {
              "name": "導出格式",
              "values": ["所有格式", "所有格式", "所有格式"]
            },
            {
              "name": "支援",
              "values": ["電子郵件", "優先電子郵件", "優先電子郵件"]
            },
            {
              "name": "資料保留",
              "values": ["30天", "永遠", "永遠"]
            }
          ]
    },
    FAQ: {
      "title": "常見問題",
      "titleHighligt": "問題",
      "items": [
            {
              "q": "無限策略",
              "question": "真的是無限的嗎？",
              "answer": "是的！專業版套餐沒有每月分鐘數上限。唯一的限制是技術層面的：檔案時長上限為 10 小時，檔案大小上限為 5GB。您可以根據需要處理任意數量的文件。"
            },
            {
              "q": "計劃變更",
              "question": "我可以隨時更改計劃嗎？",
              "answer": "當然！您可以隨時在控制台取消訂閱。您可以隨時升級或降級。"
            },
            {
              "q": "付款方式",
              "question": "你們接受什麼付款方式？",
              "answer": "我們接受所有主要的信用卡、金融卡和 PayPal，以確保安全、無憂的付款。"
            },
            {
              "q": "免費試用",
              "question": "Pro 有免費試用版嗎？",
              "answer": "是的！免費試用 Pro 7 天，無需信用卡。此外，訂閱後首月可享 45% 折扣。"
            },
            {
              "q": "文件保留",
              "question": "你們會保留我的文件多久？",
              "answer": "免費套餐：30天。專業套餐：永久有效！您的成績單將始終在您的帳戶中可用。"
            },
            {
              "q": "資料安全",
              "question": "資料安全怎麼樣？",
              "answer": "我們已獲得 SOC 2 認證，並使用 256 位元加密。我們絕不會使用您的內容來訓練我們的模型。您的資料屬於您自己。"
            }
          ]
    },
    CTA: {
      "title": "準備好無限暢享了嗎？",
      "subtitle": "加入 50,000 多名專業人士，不受限制地進行轉錄",
      "button": "免費試用NeverCap →",
      "disclaimer": "無需信用卡 • 幾秒鐘內即可開始轉錄"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "專為",
      heavyUsers: "重度用戶",
      whoActuallyNeed: "誰真正需要無限",
      heroSubtitle: "從積壓多年工作的播客，到擁有數百個訪談記錄的研究人員。看看專業人士如何使用NeverCap突破上傳限制和分鐘數上限。",
      podcasters: {
        title: "podcast",
        pain: "“別再選擇哪些劇集值得製作文字記錄了”",
        description: "一次上傳您的整個播客存檔。無需計算時間，即可產生節目筆記、優化 SEO 並重新利用內容。",
        benefits: {
          benefit1: "上傳所有劇集，而不僅僅是 3 集",
          benefit2: "產生 SEO 友善的節目筆記",
          benefit3: "建立可搜尋的檔案",
          benefit4: "重新用於部落格內容"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "劇集"
          },
          stat2: {
            number: "200小時",
            label: "已儲存"
          },
          stat3: {
            number: "3倍",
            label: "SEO流量"
          }
        }
      },
      journalists: {
        title: "記者和作家",
        pain: "“截止日期壓力與上傳限制”",
        description: "在截止日期前批次上傳所有訪談。即時搜尋文字記錄，不錯過任何重要引言。",
        benefits: {
          benefit1: "在截止日期前批次上傳",
          benefit2: "一次搜尋所有採訪",
          benefit3: "帶有時間戳記的準確報價",
          benefit4: "處理口音和語言"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "每月面試次數"
          },
          stat2: {
            number: "96%",
            label: "準確性"
          },
          stat3: {
            number: "5分鐘",
            label: "每小時"
          }
        }
      },
      contentCreators: {
        title: "內容創作者",
        pain: "“無障礙設施不應該昂貴”",
        description: "為您的整個 YouTube 頻道添加字幕。產生多種語言的字幕，立即提升影片 SEO。",
        benefits: {
          benefit1: "一次為所有影片添加字幕",
          benefit2: "249種語言翻譯",
          benefit3: "適用於 YouTube 的 SRT 文件",
          benefit4: "提升影片 SEO 排名"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "影片"
          },
          stat2: {
            number: "100+",
            label: "語言"
          },
          stat3: {
            number: "249",
            label: "翻譯"
          }
        }
      },
      researchers: {
        title: "研究人員和學者",
        pain: "“定性資料不應該排隊”",
        description: "一次處理所有研究報告。完美處理焦點小組、訪談和小組討論，並實現完美的發言人識別。",
        benefits: {
          benefit1: "批量處理焦點小組",
          benefit2: "20 位說話者識別",
          benefit3: "匯出至分析軟體",
          benefit4: "GDPR合規安全"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "學習"
          },
          stat2: {
            number: "96%",
            label: "組準確度"
          },
          stat3: {
            number: "GDPR",
            label: "合規"
          }
        }
      },
      businessTeams: {
        title: "業務團隊",
        pain: "“會議錄音應該毫不費力”",
        description: "直接錄製會議或上傳音訊檔案進行即時轉錄。從無限量的對話中創建可搜尋的存檔，再也不會失去重要的討論內容。",
        benefits: {
          benefit1: "直接錄音和轉錄",
          benefit2: "無限會議錄音",
          benefit3: "可搜尋的會議檔案",
          benefit4: "立即上傳音訊文件"
        },
        stats: {
          stat1: {
            number: "居住",
            label: "記錄"
          },
          stat2: {
            number: "立即的",
            label: "上傳"
          },
          stat3: {
            number: "20+",
            label: "演講嘉賓"
          }
        }
      },
      educators: {
        title: "教育工作者",
        pain: "“YouTube 影片需要即時轉錄”",
        description: "只需貼上 YouTube 連結即可取得即時文字和自動生成的字幕。將任何教育影片轉換為易於存取、可搜尋的內容。",
        benefits: {
          benefit1: "直接 YouTube 連結轉錄",
          benefit2: "自動產生視訊字幕",
          benefit3: "轉錄整個課程",
          benefit4: "可搜尋的講座檔案"
        },
        stats: {
          stat1: {
            number: "一鍵",
            label: "YouTube 貼上"
          },
          stat2: {
            number: "汽車",
            label: "字幕"
          },
          stat3: {
            number: "100+",
            label: "語言"
          }
        }
      },
      quotes: {
        title: "真實用戶，",
        titleHighlight: "真正的自由",
        subtitle: "聽聽那些打破人為限制的專業人士怎麼說",
        testimonials: {
          mike: {
            textBefore: "「我曾經",
            highlight: "三年的劇集",
            textAfter: "坐著不轉錄。 Otter 要我選 3。三。 NeverCap 讓我在一個週末上傳全部 150 集。",
            name: "麥克羅德里格斯",
            role: "podcast主持人"
          },
          jessica: {
            textBefore: "「作為一名自由撰稿人，我買不起 Trint 的",
            highlight: "每月100美元",
            textAfter: "，但我也無法忍受 Otter 每月 10 個文件的限制。 NeverCap 拯救了我的職業生涯。",
            name: "傑西卡·帕克",
            role: "自由撰稿記者"
          },
          sarah: {
            textBefore: "“我們的研究團隊",
            highlight: "200小時",
            textAfter: "焦點小組錄音。我們用一個週末就處理完了所有事情，而不是按月限量。",
            name: "陳莎拉博士",
            role: "首席研究員"
          },
          carlos: {
            textBefore: "「我用西班牙文製作教育內容。NeverCap轉錄完美，",
            highlight: "翻譯成英文",
            textAfter: "擴大覆蓋範圍。沒有限制，只有成長。",
            name: "卡洛斯·馬丁內斯",
            role: "YouTube 講師"
          }
        }
      },
      industries: {
        title: "值得信賴",
        titleHighlight: "產業",
        subtitle: "世界各地的專業人士正在轉向真正無限的",
        list: {
          media: "媒體與出版",
          education: "教育",
          healthcare: "衛生保健",
          technology: "科技",
          finance: "金融",
          legal: "合法的"
        }
      },
      cta: {
        title: "您的用例也需要無限",
        subtitle: "加入 50,000 多名專業人士，不再計算時間，開始創造",
        button: "開啟你的無限旅程 →"
      }
    },
    Podcasters: {
      badge: "🎙️ 專為播客打造",
      heroTitle: "轉錄您的",
      heroTitleHighlight: "整個播客檔案",
      heroSubtitle: "上傳您所有的後期作品。為每一集創建節目筆記。無需再選擇轉錄哪些集。一次可處理 50 集，每月無限次。",
      ctaPrimary: "開始免費轉錄",
      ctaSecondary: "了解其工作原理",
      trustBadge1: "🎙️ 10,000+ 位播客",
      trustBadge2: "∞ 無限集數",
      trustBadge3: "📝 SEO 就緒成績單",
      stats: {
        stat1: {
          number: "∞",
          label: "每月集數"
        },
        stat2: {
          number: "50",
          label: "批次上傳"
        },
        stat3: {
          number: "10小時",
          label: "最大劇集長度"
        },
        stat4: {
          number: "96%",
          label: "準確性"
        }
      },
      problemTitle: "這",
      problemTitleHighlight: "播客轉錄問題",
      problemSubtitle: "其他服務讓你選擇哪些劇集「值得」轉錄",
      problems: {
        problem1: {
          title: "上傳限制終止檔案",
          description: "Otter 提供 3 次終身免費導入，Pro 版每月提供 10 次導入。如何轉錄 3 年的劇集？"
        },
        problem2: {
          title: "錯失SEO機會",
          description: "每一集未轉錄的劇集都會損失 SEO 流量。但 Descript 每月最多只能限制你 30 小時。"
        },
        problem3: {
          title: "成本隨成長激增",
          description: "隨著播客的成長，轉錄成本也會飆升。每小時 2 美元的超額費用使得擴展變得不可能。"
        }
      },
      solutionTitle: "這",
      solutionTitleHighlight: "NeverCap 解決方案",
      solutionDescription: "真正的無限轉錄。上傳您的全部存檔。轉錄每一集新劇集。批量生成節目筆記。無上限，無限制，持續成長。",
      workflowTitle: "您的播客工作流程，",
      workflowTitleHighlight: "簡化",
      workflowSubtitle: "幾分鐘內即可從錄製到 SEO 優化的節目筆記",
      workflow: {
        step1: {
          title: "上傳劇集",
          description: "一次發布 50 集。 MP3、MP4、WAV 格式，我們都能處理。"
        },
        step2: {
          title: "AI轉錄",
          description: "說話者辨識準確率高達 96%。非常適合面試。"
        },
        step3: {
          title: "智慧格式",
          description: "AI 會自動加入段落、句子和標點符號。"
        },
        step4: {
          title: "發布和排名",
          description: "匯出到您的網站。觀察您的 SEO 流量成長。"
        }
      },
      featuresTitle: "特色播客",
      featuresTitleHighlight: "確實需要",
      featuresSubtitle: "由播客打造，為播客打造",
      features: {
        feature1: {
          title: "多說話者檢測",
          description: "自動辨識並標記最多 20 位發言者。非常適合小組討論、訪談和共同主持節目。"
        },
        feature2: {
          title: "時間戳章節",
          description: "為 YouTube 描述產生可點擊的時間戳記。讓聽眾能夠立即跳到他們喜歡的片段。"
        },
        feature3: {
          title: "智慧格式",
          description: "自動加入段落、句子和標點符號。取得清晰易讀的文字記錄。節省後製時間。"
        },
        feature4: {
          title: "SEO優化",
          description: "專為搜尋引擎優化的文字記錄格式。提升您的播客的曝光度，吸引更多新聽眾。"
        },
        feature5: {
          title: "100多種語言",
          description: "以任何語言轉錄。翻譯至 249 種以上語言。輕鬆觸達全球受眾。"
        },
        feature6: {
          title: "批次處理",
          description: "睡前上傳 50 集。醒來完成轉錄。連夜處理你的全部存檔。"
        }
      },
      testimonialsTitle: "製作播客的人",
      testimonialsTitleHighlight: "開關",
      testimonialsSubtitle: "來自真實播客的真實故事",
      testimonials: {
        mike: {
          text: "我做播客已經三年了，以前總是像個傻瓜一樣手動抄錄所有內容。一次上傳了六集，我和我的搭檔主持人的對話就完美地分開了。我以為咖啡店那集被毀了？結果現在的抄寫清晰極了。我再也不用自己打字了。",
          name: "麥克羅德里格斯",
          role: "“The Daily Grind”播客主持人"
        },
        sarah: {
          text: "Otter 之前限制我每月只能匯入 10 個檔案。我積壓了 150 集。 NeverCap 讓我可以分 3 批上傳所有內容。自從在舊集裡添加了文字記錄後，我的自然流量增長了 300%。這筆錢真的物超所值。",
          name: "陳莎拉",
          role: "《今日科技談話》的創辦人"
        }
      },
      comparisonTitle: "為什麼播客選擇",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "看看我們如何與競爭對手抗衡",
      comparison: {
        headers: {
          feature: "特徵",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "描述創建者"
        },
        rows: {
          monthlyLimit: {
            feature: "每月集數限制",
            nevercap: "無限",
            otter: "約13集（1200分鐘）",
            descript: "約 30 集（30 小時）"
          },
          uploadLimit: {
            feature: "文件上傳限制",
            nevercap: "無限",
            otter: "每月10",
            descript: "一次 1 個"
          },
          batchProcessing: {
            feature: "批次處理",
            nevercap: "50個文件",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "最大劇集長度",
            nevercap: "10小時",
            otter: "90分鐘",
            descript: "無限"
          },
          speakerDetection: {
            feature: "說話者檢測",
            nevercap: "20位演講者",
            otter: "16位演講者",
            descript: "10位演講者"
          },
          smartFormatting: {
            feature: "智慧格式",
            nevercap: "✓ 完美",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "價格",
            nevercap: "每月 17.99 美元",
            otter: "每月 16.99 美元",
            descript: "30美元/月"
          }
        }
      },
      ctaTitle: "開始轉錄每一集",
      ctaSubtitle: "加入 10,000 多名無憂無慮的播客",
      ctaButton: "免費上傳您的前 50 集 →",
      ctaDisclaimer: "無需信用卡 • 無限次觀看 • 隨時取消"
    },
    Journalists: {
      hero: {
        badge: "📰 致記者和作家",
        title: "記錄每一次訪談。",
        titleHighlight: "絕不會錯過任何報價。",
        subtitle: "無需再費心挑選哪些訪談需要轉錄。一次上傳所有錄音，立即搜尋所有內容，輕鬆按時完成任務，無需擔心上傳問題。",
        ctaPrimary: "開始無限上傳 →",
        ctaSecondary: "了解其工作原理",
        stats: {
          uploads: {
            number: "∞",
            label: "文件上傳"
          },
          accuracy: {
            number: "96%",
            label: "準確性"
          },
          speed: {
            number: "5分鐘",
            label: "每小時"
          }
        },
        dashboard: {
          title: "採訪隊列",
          status: "• 所有處理",
          interviews: {
            cityCouncil: {
              title: "市議會會議",
              duration: "2 小時 15 分鐘 • 上傳...",
              action: "加工"
            },
            expertInterview: {
              title: "專家訪談—陳博士",
              duration: "45 分鐘 • 轉錄…",
              action: "完成 96%"
            },
            pressConference: {
              title: "新聞發布會",
              duration: "1 小時 30 分鐘 • 準備就緒",
              action: "查看 →"
            },
            phoneInterview: {
              title: "電話訪談 - 來源",
              duration: "35分鐘 • 準備就緒",
              action: "查看 →"
            }
          }
        }
      },
      problem: {
        title: "這",
        titleHighlight: "記者轉錄問題",
        subtitle: "其他服務讓你選擇哪些訪談「值得」轉錄",
        problems: {
          uploadLimits: {
            title: "上傳限制終止調查",
            description: "Otter Pro 每月提供 10 個文件導入。如何轉錄 3 週的調查訪談？"
          },
          missingQuotes: {
            title: "缺少關鍵引言",
            description: "每一段未轉錄的訪談都可能包含故事的關鍵引言。但 Trint 每月最多限制你 50 小時。"
          },
          costExplosion: {
            title: "截止日期導致成本激增",
            description: "隨著調查的深入，轉錄成本也會飆升。每月 100 美元的超額費用使得突發新聞無法報道。"
          }
        },
        solution: {
          title: "這",
          titleHighlight: "NeverCap 解決方案",
          description: "真正的無限轉錄。上傳您的整個調查。轉錄每一次訪談。立即搜尋所有引述。無上限，無限制，只為新聞報道。"
        }
      },
      solution: {
        title: "最後，",
        titleHighlight: "真正的自由",
        titleSuffix: "記者",
        subtitle: "上傳一切。轉錄一切。搜尋一切。",
        solutions: {
          unlimitedUploads: {
            label: "無限上傳",
            title: "大量上傳您的整個調查",
            description: "無需再挑選要轉錄的訪談內容。一次上傳 50 個檔案。連夜處理數月的錄音。您的整個調查，都已轉錄。",
            points: {
              simultaneousUpload: "同時上傳50個文件",
              noLimits: "無每月上傳限制",
              processWhileWrite: "邊寫邊處理",
              longRecordings: "支援10小時錄音"
            },
            visual: {
              number: "50",
              label: "一次處理多個文件"
            }
          },
          instantSearch: {
            label: "即時搜尋",
            title: "幾秒鐘內找到任何報價",
            description: "立即搜尋所有記錄。找到三個月前的完美引言。再也不用遺失筆記中的重要語句了。",
            points: {
              searchAll: "搜尋所有訪談",
              wordTimestamps: "字級時間戳",
              jumpToMoments: "跳到確切時刻",
              exportCitations: "導出引文"
            },
            searchDemo: {
              placeholder: "氣候政策聲明",
              resultsText: "在 4 次訪談中發現：",
              results: {
                mayorInterview: "“…我們的氣候政策將改變…”",
                expertPanel: "“……政策聲明清楚地表明……”"
              }
            }
          },
          professionalAccuracy: {
            label: "專業精準",
            title: "96% 準確率，您可以引用",
            description: "取得精準的文字記錄，方便您直接引用。處理口音、專業術語和快速對話。格式完美，易於閱讀。",
            points: {
              accuracyGuarantee: "96%準確率保證",
              handlesAccents: "處理口音和方言",
              smartPunctuation: "智慧標點和段落",
              speakerIdentification: "說話者識別"
            },
            visual: {
              accuracy: "96%",
              label: "準確率",
              transcript: {
                speaker1: "“調查發現財務報告有重大差異。”",
                speaker2: "“您能詳細說明一下這些具體差異嗎？”"
              }
            }
          }
        }
      },
      features: {
        title: "一切都",
        titleHighlight: "記者的需求",
        subtitle: "尊重您的工作流程的專業工具",
        featuresList: {
          languages: {
            title: "100多種語言",
            description: "使用 12 種主要語言採訪全球消息來源，準確率為 96%。"
          },
          exportFormats: {
            title: "導出格式",
            description: "Word、PDF、SRT、TXT。相容於任何工作流程。"
          },
          sourceProtection: {
            title: "來源保護",
            description: "銀行級加密，保障您的資料來源保密。"
          },
          timestamps: {
            title: "時間戳",
            description: "點擊任意引語即可跳到確切的音訊時刻。"
          },
          teamSharing: {
            title: "團隊共享",
            description: "與編輯協作。安全共享成績單。"
          },
          mobileReady: {
            title: "移動就緒",
            description: "從手機上傳。隨時隨地查看成績單。"
          },
          smartFormatting: {
            title: "智慧格式",
            description: "自動段落和標點符號，使抄本更易讀。"
          },
          batchProcessing: {
            title: "批次處理",
            description: "一次上傳 50 個檔案。即使您晚上睡覺，也能處理。"
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "由於上傳限制，我之前三年的訪談內容都沒能轉錄。 NeverCap 讓我在一個週末就處理完了所有內容。這真是顛覆性的改變。",
          name: "傑西卡·帕克",
          role: "自由記者，前 Otter 用戶"
        }
      },
      cta: {
        title: "開始轉錄",
        titleHighlight: "無限制",
        subtitle: "加入成千上萬不再計算上傳量並開始專注於報道的記者",
        ctaPrimary: "無限免費試用 →",
        ctaSecondary: "查看價格"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 對於內容創作者",
        title: "標題你的",
        titleHighlight: "整個頻道",
        titleSuffix: "不計分鐘",
        subtitle: "無需再費心挑選影片配字幕。處理您的整個 YouTube 庫，產生 100 多種語言的字幕，並直接從任何平台獲取影片。沒有月費限制，沒有上傳限制──純粹的創作自由。",
        ctaPrimary: "開始無限字幕 →",
        ctaSecondary: "了解其工作原理",
        stats: {
          videos: {
            number: "∞",
            label: "每月影片數"
          },
          languages: {
            number: "100+",
            label: "語言"
          },
          accuracy: {
            number: "96%",
            label: "準確性"
          },
          platforms: {
            number: "10+",
            label: "平台"
          }
        }
      },
      platforms: {
        title: "從任何平台獲取並轉錄",
        platformNames: {
          youtube: "Youtube",
          facebook: "Facebook",
          twitter: "X（推特）",
          dropbox: "Dropbox",
          googleDrive: "Google 雲端硬碟",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "您需要的一切",
        titleHighlight: "量表內容",
        subtitle: "專業工具，不受專業限制",
        oneClickImport: {
          label: "一鍵導入",
          title: "貼上連結。",
          titleHighlight: "取得成績單。",
          description: "無需下載和重新上傳。只需貼上您的 YouTube、TikTok 或 Instagram 鏈接，即可立即獲取文字記錄。一個週末即可處理您整個頻道的積壓內容。",
          points: {
            directYoutube: "直接 YouTube 連結轉錄",
            multiplePlatforms: "從 10 多個平台獲取",
            batchPlaylists: "批量處理整個播放列表",
            autoSync: "與您的頻道自動同步"
          },
          demo: {
            instruction: "貼上您的影片網址：",
            url: "https://youtube.com/watch?v=...",
            status: "正在獲取和轉錄..."
          }
        },
        globalReach: {
          label: "全球影響力",
          title: "100多種語言。",
          titleHighlight: "零限制。",
          description: "自動翻譯超過 100 種語言，觸達全球受眾。同時產生多種語言的字幕。無需額外付費，無每月翻譯費用上限。",
          points: {
            highAccuracy: "12 種主要語言的準確率高達 96%",
            unlimitedTranslations: "包含無限次翻譯",
            multicultural: "非常適合多元文化內容",
            autoDetect: "自動偵測來源語言"
          },
          visual: {
            number: "100+",
            title: "支援的語言",
            subtitle: "翻譯一次，惠及所有人"
          }
        },
        flexibleExport: {
          label: "靈活導出",
          title: "每種格式",
          titleHighlight: "你需要",
          description: "以適合您工作流程的格式匯出。從 YouTube 的 SRT 文件到網頁播放器的 VTT 文件，再到腳本的可編輯文檔，應有盡有。所有匯出功能均不限次數，所有方案均包含所有功能。",
          points: {
            videoFormats: "適用於視訊平台的 SRT 和 VTT",
            editingFormats: "DOCX 和 PDF 可供編輯",
            dataAnalysis: "用於數據分析的 CSV",
            simpleScripts: "TXT 用於簡單腳本"
          },
          formats: {
            srt: "固體放射治療",
            vtt: "垂直發射測試",
            txt: "TXT",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "從上傳到",
        titleHighlight: "發布",
        titleSuffix: "幾分鐘內",
        subtitle: "為整個內容庫添加字幕的最快方法",
        steps: {
          pasteLinks: {
            title: "貼上連結",
            description: "拖放 YouTube、TikTok 或任何影片連結。或直接上傳文件。"
          },
          autoTranscribe: {
            title: "自動轉錄",
            description: "人工智慧處理準確率高達 96%。可處理不同口音和不同說話者。"
          },
          editTranslate: {
            title: "編輯和翻譯",
            description: "完善您的字幕。立即翻譯成 100 多種語言。"
          },
          exportPublish: {
            title: "匯出和發布",
            description: "下載任意格式。上傳至您的平台。完成！"
          }
        }
      },
      testimonials: {
        title: "創造者是",
        titleHighlight: "每日切換",
        subtitle: "從有限的計劃到無限的自由",
        carlos: {
          textBefore: "我用西班牙語製作教育內容。 NeverCap轉錄完美，",
          textAfter: "擴大覆蓋面。沒有限制，只有成長。在添加多語言字幕後，我的頻道觀看量增加了 3 倍。",
          highlight: "翻譯成英文",
          name: "卡洛斯·馬丁內斯",
          role: "YouTube 講師 • 25 萬訂閱者"
        },
        sarah: {
          textBefore: "Descript 要求每月支付 30 美元",
          textAfter: "我有 500 多個視訊積壓。 NeverCap讓我在一個週末就處理完了所有影片。字幕帶來的 SEO 提昇在第一個月就得到了回報。",
          highlight: "30小時",
          name: "莎拉·李",
          role: "生活風格影片部落客 • 18 萬訂閱者"
        },
        jake: {
          textBefore: "這",
          textAfter: "這個功能徹底改變了遊戲規則。我不再需要下載任何東西，只需貼上、轉錄，就完成了。處理我的 TikTok 播客片段從未如此簡單。",
          highlight: "直接取得 YouTube",
          name: "傑克威爾遜",
          role: "播客主持人 • 前 1% 的創作者"
        },
        yuki: {
          textBefore: "我創作內容支援5種語言。其他服務需另收費",
          textAfter: "。 NeverCap 為我提供了無限量的翻譯。自從我開始使用合適的母語字幕以來，我的國際觀眾成長了 400%。",
          highlight: "每份翻譯",
          name: "田中由紀",
          role: "遊戲創作者 • 50 萬訂閱者"
        }
      },
      cta: {
        title: "您的整個頻道。帶字幕。今天。",
        subtitle: "加入 50,000 多名不再計算時間並開始創作的創作者",
        button: "開始無限字幕 →"
      }
    },
    Researchers: {
      heroBadge: "為學術卓越而建",
      heroTitle1: "記錄每一次訪談。",
      heroTitle2: "分析所有數據。",
      heroSubtitle: "無需再費力挑選要轉錄的焦點小組。處理所有定性數據，準確率高達 96%，即使 20 位參與者互相交談，也能完美識別說話者。",
      heroCtaPrimary: "免費試用 - 無需信用卡",
      heroCtaSecondary: "了解其工作原理",
      statsInterviewHours: "面試時間",
      statsAccuracy: "準確性",
      statsSpeakersId: "演講者 ID",
      statsCompliant: "合規",
      problemTitle: "研究轉錄問題",
      problemSubtitle: "其他服務讓您選擇哪些資料「值得」轉錄",
      problemCard1Title: "上傳限制終止研究",
      problemCard1Desc: "Otter 提供 3 次終身導入。如何轉錄 200 小時的焦點小組討論？",
      problemCard2Title: "缺少關鍵數據",
      problemCard2Desc: "每一次未轉錄的訪談都可能包含突破性的見解。但 Rev 的最低收費是每分鐘 2 美元。",
      problemCard3Title: "撥款消失",
      problemCard3Desc: "隨著資料集的成長，轉錄成本也會激增。每個焦點小組 500 美元的成本使得擴展變得不可能。",
      solutionTitle: "NeverCap解決方案",
      solutionDesc: "真正的無限轉錄。上傳您的整個研究。轉錄每一次訪談。分析所有數據。無上限，無限制，只為研究。",
      feature1Label: "無限制",
      feature1Title: "一次處理整個研究",
      feature1Desc: "今晚上傳全部 200 小時的訪談。醒來即可獲得完整、可搜尋的文字記錄。無月上限，無單檔限制，更無「合理使用」的胡扯。",
      feature1Point1: "同時批次上傳50個文件",
      feature1Point2: "完整處理縱貫研究",
      feature1Point3: "成績單無儲存限制",
      feature1Point4: "匯出至 NVivo、MAXQDA、Atlas.ti",
      feature1Visual1: "無限時",
      feature1Visual2: "無論 10 小時或 10,000 小時，價格相同",
      feature2Label: "智慧人工智慧",
      feature2Title: "每次都能成功完成焦點小組討論",
      feature2Desc: "我們的人工智慧 (AI) 最多可追蹤 20 位發言者，即使他們互相爭吵、互相打斷，或同時插話。每個聲音都會被準確捕捉並標記。",
      feature2Point1: "20 位說話者識別",
      feature2Point2: "處理串擾和中斷",
      feature2Point3: "您可以重新命名的演講者標籤",
      feature2Point4: "每個單字的時間戳",
      conversationParticipant1: "參與者 1",
      conversationText1: "我們面臨的主要障礙肯定是治療費用…",
      conversationParticipant2: "參與者 2",
      conversationText2: "當然，但我要補充的是，訪問權限是——",
      conversationParticipant3: "參與者 3",
      conversationText3: "—抱歉打擾了，但運輸也很重要。",
      conversationText4: "是的！這正是我想說的。",
      conversationParticipant4: "參與者 4",
      conversationText5: "在農村地區，問題包括三個面向：成本、通道和交通。",
      feature3Label: "精確",
      feature3Title: "96% 的準確率",
      feature3Desc: "像專業人士一樣處理專業術語、濃重口音和領域專用術語。準確度足以滿足出版、同儕審查和論文評審委員會的要求。",
      feature3Point1: "醫學和科學術語",
      feature3Point2: "100多種語言和方言",
      feature3Point3: "逐字與清晰閱讀模式",
      feature3Point4: "以任何格式編輯和匯出",
      feature3Visual1: "研究級準確度",
      feature3Visual2: "受到 50,000 多名研究人員的信賴",
      feature4Label: "安全",
      feature4Title: "IRB 就緒安全",
      feature4Desc: "您的敏感研究資料受到企業級安全保護。符合 GDPR 要求，提供符合 HIPAA 要求的選項，以及符合 IRB 要求的完整審計追蹤。",
      feature4Point1: "端對端加密",
      feature4Point2: "符合 GDPR 和 CCPA 要求",
      feature4Point3: "自動刪除政策",
      feature4Point4: "確保團隊協作",
      useCasesTitle: "適合每種研究方法",
      useCasesSubtitle: "從民族誌到臨床試驗",
      useCase1Title: "焦點小組",
      useCase1Desc: "處理 8-20 位參與者的重疊發言。即使在激烈的討論中也能完美辨識出發言者。直接匯出至定性分析軟體。",
      useCase2Title: "深度訪談",
      useCase2Desc: "同時處理數百個一對一訪談。保持整個資料集的一致性。即時搜尋所有記錄。",
      useCase3Title: "臨床研究",
      useCase3Desc: "符合 HIPAA 要求的患者訪談選項。精準的醫學術語轉錄。安全處理敏感健康資料。",
      useCase4Title: "民族誌研究",
      useCase4Desc: "在自然環境中進行現場錄音。處理背景噪音和多位發言者。支援 100 多種語言和方言。",
      useCase5Title: "口述歷史項目",
      useCase5Desc: "無限制保存完整檔案。建立可搜尋的歷史記錄。非常適合縱向研究和世代研究。",
      useCase6Title: "論文研究",
      useCase6Desc: "價格優惠，功能齊全，對學生友善。經濟實惠，處理您的整個資料集。批量處理，滿足緊迫的截止日期。",
      testimonialTitle: "受到領先研究人員的信賴",
      testimonialText: "我們的研究團隊從社區健康研究中收集了200小時的焦點團體錄音。由於成本原因，其他服務機構希望我們自己挑選需要轉錄的會議內容。 NeverCap讓我們在一個週末內處理所有錄音。 20位發言者識別功能確實有效——即使在我們討論最混亂、每個人都在同時發言的情況下也是如此。這個工具徹底改變了我們處理定性資料的方式。",
      testimonialAuthorName: "陳莎拉博士",
      testimonialAuthorRole: "公共衛生研究所首席研究員",
      ctaTitle: "停止選擇要分析的數據",
      ctaSubtitle: "加入 50,000 多名轉錄一切的研究人員",
      ctaButton: "免費試用NeverCap"
    },
    BusinessTeams: {
      heroBadge: "對於商業團隊",
      heroTitle1: "會議記錄已製作",
      heroTitle2: "毫不費力",
      heroSubtitle: "直接在瀏覽器中錄製會議或即時上傳音訊檔案。從無限量的對話中建立可搜尋的檔案。真正無限量的轉錄，告別重要討論。",
      heroCtaPrimary: "立即開始錄製 →",
      heroCtaSecondary: "了解其工作原理",
      recordingStatus: "記錄...",
      statsMeetingMinutes: "會議紀要",
      statsLiveRecording: "現場錄音",
      statsSpeakerID: "說話者識別",
      statsInstantUpload: "即時上傳和處理",
      featuresTitle: "團隊獲取知識所需的一切",
      featuresSubtitle: "從現場錄製到即時上傳，我們消除了每一個摩擦點",
      feature1Title: "直接在瀏覽器中錄製",
      feature1Desc: "無需下載，無需插件。一鍵即可立即開始錄音。完美音質，自動說話者檢測，並在您說話時即時轉錄。",
      feature1Benefit1: "一鍵開始錄製",
      feature1Benefit2: "無需安裝軟體",
      feature1Benefit3: "適用於任何設備",
      feature1Benefit4: "即時轉錄",
      feature1Visual1: "點擊並記錄",
      feature1Visual2: "無需設定",
      feature2Title: "立即上傳任何音訊文件",
      feature2Desc: "有 Zoom、Teams 或手機錄製的會議記錄？立即上傳。支援所有主流音訊和視訊格式。同時處理多個文件，無需等待。",
      feature2Benefit1: "支援：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV、FLAC",
      feature2Benefit2: "批次上傳功能",
      feature2Benefit3: "支援 10 小時文件",
      feature2Benefit4: "工作時進行處理",
      feature2Visual1: "拖放文件",
      feature3Title: "專為團隊協作打造",
      feature3Desc: "立即與您的團隊分享會議記錄。一起聆聽錄音，匯出多種格式的記錄，並確保每個人都擁有可搜尋的會議檔案。",
      feature3Benefit1: "與任何人分享成績單",
      feature3Benefit2: "聆聽原始錄音",
      feature3Benefit3: "以多種格式匯出成績單",
      feature3Benefit4: "團隊範圍內可搜尋的檔案",
      feature3Visual1: "團隊成員",
      feature3Visual2: "無限協作",
      feature4Title: "立即尋找任何對話",
      feature4Desc: "一次搜尋所有會議。尋找上個季度的關鍵決策，或幾個月前的客戶需求。人工智慧搜尋不僅能理解關鍵字，還能理解上下文。",
      feature4Benefit1: "一次搜尋所有會議",
      feature4Benefit2: "人工智慧理解語境",
      feature4Benefit3: "按發言人或日期過濾",
      feature4SearchPlaceholder: "🔍 搜尋：“第四季度收入目標”",
      feature4SearchResults: "在 3 次會議中發現：",
      feature4Meeting1: "銷售計劃 - 10 月 15 日",
      feature4Meeting1Text: "“...第四季的目標設定為 200 萬美元...”",
      feature4Meeting2: "董事會會議 - 10月20日",
      feature4Meeting2Text: "“...第四季營收預測...”",
      workflowTitle: "從記錄到可操作的見解",
      workflowSubtitle: "無縫工作流程，捕捉每個重要時刻",
      workflowStep1Title: "錄製或上傳",
      workflowStep1Desc: "開始現場錄製或上傳現有音訊文件",
      workflowStep2Title: "自動轉錄",
      workflowStep2Desc: "AI 可在幾分鐘內完成轉錄，準確率達 96%",
      workflowStep3Title: "合作",
      workflowStep3Desc: "分享、評論和提取行動項目",
      workflowStep4Title: "搜尋和分析",
      workflowStep4Desc: "在所有會議中尋找見解",
      testimonialsTitle: "團隊熱愛NeverCap",
      testimonialsSubtitle: "了解企業如何轉變會議文化",
      testimonial1Text: "“我們從錯過關鍵細節到擁有每次對話的可搜尋存檔，再也沒有忘記。直接錄音功能意味著我們永遠不會忘記記錄重要的討論。”",
      testimonial1AuthorName: "詹姆斯金",
      testimonial1AuthorRole: "TechCorp 產品經理",
      testimonial2Text: "Otter 限制我們每月只能上傳 10 個檔案。現在，我們可以立即上傳所有客戶通話記錄。這對於我們銷售團隊的後續追蹤來說，無疑是個巨大的變革。",
      testimonial2AuthorName: "莎拉·羅德里格斯",
      testimonial2AuthorRole: "ConsultPro 銷售總監",
      testimonial3Text: "“能夠搜尋數月的會議記錄，這在審計過程中幫了我們大忙。幾秒鐘內就能找到所有決策和批准。”",
      testimonial3AuthorName: "劉馬克",
      testimonial3AuthorRole: "FinanceHub 營運長",
      ctaTitle: "避免失去重要對話",
      ctaSubtitle: "加入數千個團隊，透過無限轉錄記錄每次會議",
      ctaButton: "開始免費錄音 →"
    },
    Educators: {
      heroBadge: "對於教育工作者和教師",
      heroTitle1: "將任何教育影片變成",
      heroTitle2: "無障礙內容",
      heroSubtitle: "只需貼上 YouTube 鏈接，即可獲得帶有自動生成字幕的即時文字。將講座、教學和教育影片轉換為可搜尋、可存取的內容，讓每個學生都能從中學習。",
      heroCtaPrimary: "免費試用 - 無需信用卡",
      heroCtaSecondary: "觀看示範",
      stats1Number: "一鍵",
      stats1Label: "YouTube 轉錄",
      stats2Number: "100+",
      stats2Label: "支援的語言",
      stats3Number: "∞",
      stats3Label: "無限視頻",
      stats4Number: "96%",
      stats4Label: "準確率",
      featuresTitle: "教育工作者需要的視頻轉錄的一切",
      featuresSubtitle: "從 YouTube 講座到錄製課程，讓您的所有內容都易於訪問",
      feature1Title: "即時 YouTube 和平台鏈接",
      feature1Desc: "只需貼上任何影片連結即可立即取得文字記錄。適用於 YouTube、Vimeo、Facebook、X (Twitter)、TikTok、Instagram、Dropbox、Google Drive 等平台。無需下載，無需等待。",
      feature1Point1: "直接連結轉錄 - 無需下載",
      feature1Point2: "支援所有主流平台",
      feature1Point3: "一次處理整個播放列表",
      feature1Point4: "適用於私人影片（經許可）",
      feature2Title: "自動產生字幕和副標題",
      feature2Desc: "立即為所有教育影片建立精準字幕。讓有聽力障礙的學生、非母語人士或喜歡跟讀的學生也能輕鬆觀看。",
      feature2Point1: "SRT、VTT 和 TXT 匯出格式",
      feature2Point2: "字級時間戳，實現完美同步",
      feature2Point3: "輕鬆編輯和自訂字幕",
      feature2Point4: "直接上傳回 YouTube",
      feature2Visual1: "語言翻譯",
      feature2Visual2: "讓您的內容在全球範圍內可訪問",
      feature3Title: "按課程和類別組織",
      feature3Desc: "建立資料夾，按課程、科目或學期整理您的成績單。讓您的所有教育內容井然有序、易於搜尋。打造一個內容全面、易於存取的課程資料庫。",
      feature3Point1: "建立無限的資料夾和子資料夾",
      feature3Point2: "按主題或難度級別標記視頻",
      feature3Point3: "大量整理多個成績單",
      feature3Point4: "立即搜尋所有內容",
      feature3VisualTitle: "您的課程庫",
      feature3Folder1: "數學101",
      feature3Folder2: "物理講座",
      feature3Folder3: "生物實驗室視頻",
      feature3Folder4: "歷史紀錄片",
      feature3Folder5: "語言學習",
      feature4Title: "以您需要的任何格式匯出",
      feature4Desc: "下載 TXT、DOCX 或 PDF 格式的成績單。非常適合創建學習指南、課堂筆記或易於理解的課程資料。與學生分享或整合到您的學習管理系統。",
      feature4Point1: "TXT 用於簡單文字編輯",
      feature4Point2: "DOCX 用於格式化文檔",
      feature4Point3: "PDF格式，方便分享和列印",
      feature4Point4: "一次批次匯出多個文件",
      workflowTitle: "工作原理",
      workflowSubtitle: "幾分鐘內即可從影片連結到可存取的文字記錄",
      workflowStep1Title: "貼上連結",
      workflowStep1Desc: "複製任何教育影片 URL 並貼上",
      workflowStep2Title: "自動轉錄",
      workflowStep2Desc: "AI 轉錄準確率達 96%",
      workflowStep3Title: "產生字幕",
      workflowStep3Desc: "自動創建完美同步的字幕",
      workflowStep4Title: "分享和匯出",
      workflowStep4Desc: "下載或與學生分享",
      useCasesTitle: "滿足各種教育需求",
      useCasesSubtitle: "了解教育工作者如何使用NeverCap來增強學習",
      useCase1Title: "錄製講座",
      useCase1Text: "轉錄整個學期的錄音講座。學生可以搜尋特定主題，複習關鍵概念，絕對不會錯過重要資訊。",
      useCase2Title: "線上課程",
      useCase2Text: "您的線上課程提供 100 多種語言的翻譯，方便國際學生訪問。提高註冊率和滿意度。",
      useCase3Title: "學習資料",
      useCase3Text: "將影片教學轉換為易讀的學習指南。非常適合喜歡閱讀或需要快速複習內容的學生。",
      useCase4Title: "無障礙合規性",
      useCase4Text: "為所有影片內容提供字幕和文字記錄，滿足無障礙存取要求。確保所有學生都能平等存取。",
      useCase5Title: "翻轉課堂",
      useCase5Text: "課前分享視訊講座及文字記錄。學生可以按照自己的步調複習，並為討論做好準備。",
      useCase6Title: "研究與引用",
      useCase6Text: "幫助學生使用時間戳記準確引用影片來源。非常適合研究計畫和學術論文。",
      testimonialTitle: "深受 5 萬多名教育工作者信賴",
      testimonialSubtitle: "了解世界各地的教師為何選擇NeverCap",
      testimonialText: "我一直在使用NeverCap來轉錄我的整個YouTube數學教學頻道。以前用其他服務需要幾週時間，現在只需幾個小時。直接貼上連結就能立即獲得轉錄文字的功能徹底改變了我創作易理解內容的方式。我的國際學生尤其喜歡它的多語言字幕！",
      testimonialAuthorName: "凱倫米切爾教授",
      testimonialAuthorRole: "數學教授，線上教育者",
      ctaTitle: "讓所有教育內容觸手可及",
      ctaSubtitle: "加入數千名使用真正無限轉錄的教育工作者",
      ctaButton: "免費試用NeverCap"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "下載 YouTube 影片為 MP4",
        "placeholder": "在此處搜尋或貼上您的 Youtube 鏈接",
        "clear_icon": "清除輸入",
        "Download": "下載",
        "loading_text": "正在處理下載連結。請繼續留在頁面上。",
        "howToDownload": "如何下載？",
        "tutorial": "觀看教學課程"
      },
      part2: {
        "title": "只需 3 個簡單步驟，即可將 YouTube 影片轉換為可下載的 MP4 文件",
        "steps": [
                {
                  title: "複製 URL",
                  content: "打開目標 YouTube 視頻，然後從瀏覽器的地址欄複製連結。"
                },
                {
                  title: "貼上連結",
                  content: "前往您的影片下載工具並將 URL 貼到其輸入欄位中。"
                },
                {
                  title: "下載 MP4",
                  content: "處理完成後，點擊下載按鈕儲存您的 MP4 檔案。"
                }
              ]
      },
      part3: {
        content: [
                "您是否曾發現自己需要離線觀看 YouTube 影片？",
                "無論您是乘坐地鐵通勤、乘飛機出行、學習重要教程、深入學習技能提升內容，還是存檔重要的視頻資料，都常常會遇到難以獲得可靠的離線訪問的問題。而我們的下載器正是為此而生。",
                "這款下載器可讓您快速輕鬆地將 YouTube 影片轉換為 MP4 格式進行下載。將它們保存到您的設備，隨時觀看。",
                "整個過程快速、簡單、輕鬆。下載完成後，無需網絡，即可隨時隨地欣賞您喜愛的影片。"
              ]
      },
      part4: {
        content: ["下載的 5 大好處如下", "MP4 格式的 YouTube 影片"],
        list: [
                {
                  title: "節省數據成本：",
                  content: "通常，在 YouTube 上觀看影片會消耗大量的行動流量。下載並離線觀看可以避免這些不必要的費用。"
                },
                {
                  title: "隨時隨地觀看：",
                  content: "即使網路連線不穩定，也能流暢地欣賞影片。無需再擔心緩衝。"
                },
                {
                  title: "輕鬆存檔和保存：",
                  content: "將影片儲存為 MP4 可以輕鬆建立您的個人收藏，尤其是您認為真正有價值或重要的內容。"
                },
                {
                  title: "更簡單的共享：",
                  content: "共享 MP4 檔案比發送連結方便得多。您可以直接透過 WhatsApp 或 Instagram 等應用程式發送影片文件，省去了打開 YouTube 的額外步驟。"
                },
                {
                  title: "即時觀看，分享時刻：",
                  content: "興奮地向身邊的親朋好友展示自己喜歡的影片？下載 MP4 後，大家可以立即一起流暢觀看，無需等待加載，省去了尷尬的停頓。"
                }
              ]
      },
      part5: {
        title: "為什麼我們的下載器脫穎而出",
        cards: [
                {
                  title: "一鍵式操作",
                  content: "輕鬆設定和直覺操作。"
                },
                {
                  title: "極速－速度快，無限",
                  content: "以最快速度轉換和下載 — 無上限，無限制。"
                },
                {
                  title: "即時轉換",
                  content: "立即處理您的文件，無需等待。"
                },
                {
                  title: "零廣告，零幹擾",
                  content: "享受乾淨的介面，沒有彈出視窗、橫幅或中斷 - 只有無縫視訊轉換。"
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "原廠品質保證",
                  content: "您的下載內容將保留來源影片的完整分辨率，以便每次都能完美播放像素。"
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "可在任何地方使用",
                  content: "與任何裝置上的任何瀏覽器完全相容。"
                }
              ]
      },
      part6: {
        title: ["最大化您的 YouTube 影片下載量", "使用下載器"],
        content: [
                "輕鬆將 YouTube 轉換為 MP4：快速、簡單且免費。",
                "這正是我們的優勢。我們設計的用戶友好介面，人人適用——無需任何技術技能。無論您的經驗程度如何，都能立即轉換影片。無需註冊：立即獲得您所需的一切。",
                "請放心——您下載的 MP4 將保持原始影片品質和清晰度，與您在 YouTube 上觀看的完全一樣。",
                "隨時隨地，輕鬆便捷。全面相容所有主流平台和設備。無論您使用 Windows、macOS、Linux、Android 或 iOS 系統，無論是智慧型手機、平板電腦或桌上型電腦，都能流暢下載影片。"
              ]
      },
      part7: {
        title: "下載 YouTube 影片的關鍵問題",
        list: [
                {
                  question: "如果 YouTube 影片有版權，我可以下載嗎？",
                  answer: "未經版權所有者許可下載受版權保護的 YouTube 影片是違法的。"
                },
                {
                  question: "這個下載工具安全嗎？",
                  answer: "是的，它安全可靠。我們無需用戶提供任何個人信息，並採取了強有力的病毒防護措施。我們提醒您在從網路下載檔案時務必謹慎：避免點擊可疑連結或下載可疑檔案。"
                },
                {
                  question: "YouTube 至 MP4 下載支援哪些語言？",
                  answer: "我們的服務支援下載所有流行語言的 YouTube 影片。"
                },
                {
                  question: "哪些因素會影響下載 YouTube 影片所需的時間？",
                  answer: "雖然我們確保提供最快的下載體驗，但下載時間也會受到影片長度和網路連線速度等因素的影響。"
                },
                {
                  question: "當我使用智慧型手機下載 MP4 影片時，它保存在哪裡？"
                },
                {
                  question: "將 YouTube 影片下載為 MP4 格式會降低影片品質嗎？",
                  answer: "不會。使用我們的工具下載 YouTube 影片為 MP4 格式時，影片品質將保持不變。轉換過程會保留來源質量，確保您獲得與 YouTube 相同的觀看體驗。"
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 業界領先的人工智慧技術",
      "title": "關於",
      "highlighted_text": "NeverCap",
      "description": "我們的使命是提供最精準的音視頻轉錄服務。憑藉著業界領先的人工智慧技術，我們的轉錄準確率已超過 96%。對於某些主流語種，透過技術優化，準確率甚至可以達到 99%。"
    },
    Stats: {
      "title": "我們的",
      "highlighted_text": "影響",
      "subtitle": "以尖端人工智慧技術賦能全球溝通",
      "metrics": [
            {
              "value": "96%以上",
              "label": "準確率",
              "description": "憑藉先進的人工智慧實現業界領先的轉錄準確性"
            },
            {
              "value": "100+",
              "label": "支援的語言",
              "description": "全球內容的口語識別"
            },
            {
              "value": "249+",
              "label": "翻譯語言",
              "description": "將轉錄文字翻譯成幾乎任何語言"
            }
          ]
    },
    Mission: {
      "title": "為什麼選擇",
      "highlighted_text": "NeverCap",
      "subtitle": "我們致力於打破語言障礙，讓每個人都能存取內容",
      "features": [
            {
              "icon": "🎯",
              "title": "無與倫比的精度",
              "description": "我們的 AI 模型經過不斷完善，轉錄準確率已超過 96%，部分主要語言經過進階優化，準確率甚至可達到 99%。"
            },
            {
              "icon": "🌍",
              "title": "全球語言支援",
              "description": "支援超過 100 種語言的口語辨識和超過 249 種語言的翻譯功能，讓您的內容真正實現全球化。"
            },
            {
              "icon": "⚡",
              "title": "閃電般快速處理",
              "description": "只需幾分鐘（而非幾小時）即可處理長達數小時的音訊和視訊內容。我們優化的 AI 流程確保您快速獲得轉錄，且不犧牲品質。"
            },
            {
              "icon": "🔒",
              "title": "企業級安全",
              "description": "您的資料安全是我們的首要任務。我們使用業界標準加密技術，並遵守全球隱私法規，確保您的內容安全保密。"
            }
          ]
    },
    Company: {
      "title": "公司",
      "highlighted_text": "資訊",
      "subtitle": "如有任何疑問或需要支持，請與我們聯絡。",
      "details": [
            {
              "label": "公司名稱",
              "value": "SCRIBIFY AI公司"
            },
            {
              "label": "總部",
              "value": ["30 N Gould St Ste R", "謝裡登，懷俄明州 82801", "美國"]
            },
            {
              "label": "聯絡我們",
              "value": ["電子郵件", "全天候提供支援"]
            }
          ]
    },
    CTA: {
      "title": "準備好體驗不同之處了嗎？",
      "subtitle": "加入數以千計的專業人士，他們信賴NeverCap來滿足他們的轉錄需求",
      "button": "免費試用NeverCap →",
      "disclaimer": "無需信用卡 • 幾秒鐘內即可開始轉錄"
    }
  },
  Privacy: {
    title: "隱私",
    titleGradient: "政策",
    subtitle: "了解我們如何收集、使用和保護您的個人資訊",
    "lastUpdated": "最後更新時間：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "privacyPolicyTitle": "隱私權政策",
    "policyDescription": "本政策描述了NeverCap（以下簡稱「NeverCap」、「我們的」、「我們」）在您使用我們的服務、網站（https://www.nevercap.ai/）和軟體（統稱為「服務」）時如何收集、使用和揭露您的個人資訊。",
    "policyAgreement": "請仔細閱讀本隱私權政策，並確保您瞭解其內容。使用我們的任何服務，即表示您同意本隱私權政策。如果您不同意我們根據本政策使用您的個人數據，您必須立即停止使用我們的服務。",
    "policyOverview": "在本政策中，我們闡述了：我們收集哪些資料以及收集原因；您的資料將如何處理；以及您對您的資料享有的權利。我們不會出售您的資料。",
    "scopeTitle": "1. 本隱私權政策的範圍",
    "scopeDescription": "本隱私權政策僅適用於我們對服務使用者資訊的收集和處理。本隱私權政策不適用於任何連結至我們的第三方所經營的服務、網站或軟體（無論這些連結是由我們提供的或其他使用者分享的），也不適用於來自第三方的內容、資料、應用程式或資料。我們建議您在向任何第三方網站或軟體提供任何資訊之前，先查看其隱私權政策。",
    "collectionTitle": "2. 我們收集哪些資訊以及為什麼",
    "collectionPrinciple": "我們的指導原則是只收集我們需要的資訊。以下是實際操作中的意義：",
    "identityTitle": "2.1 身分與訪問",
    "identityDescription": "當您註冊我們的某款產品時，我們會要求您提供身份訊息，例如您的姓名、電子郵件地址。這是為了提供必要的產品功能，並方便我們向您發送產品更新和其他重要資訊。",
    "billingTitle": "2.2 帳單資訊",
    "billingDescription": "如果您註冊付費產品，我們將要求您提供付款資訊和帳單地址。付款資訊將直接提交給我們的付款處理器，不會發送到我們的伺服器。",
    "productInteractionsTitle": "2.3 產品交互",
    "productInteractionsDescription": "我們將您在產品帳戶中上傳、接收或維護的內容儲存在我們的伺服器上。除非您刪除這些內容，否則只要您的帳戶處於活躍狀態，我們就會一直保留這些內容。",
    "websiteInteractionsTitle": "2.4 網站互動",
    "websiteInteractionsDescription": "我們收集您的瀏覽活動信息，用於分析和統計目的，例如轉換率測試和新產品設計實驗。這些資訊包括：例如，您的瀏覽器和作業系統版本、您的 IP 位址、您造訪的網頁及其載入時間，以及哪個網站將您推薦給我們。如果您擁有帳戶並已登錄，這些網路分析資料將與您的 IP 位址和使用者帳戶綁定，直到您的帳戶不再活躍。",
    "cookiesTitle": "2.5 Cookie",
    "cookiesDescription1": "我們還使用持久性第一方 cookie 和一些第三方 cookie 來儲存某些偏好，讓您更輕鬆地使用我們的應用程序，並執行 A/B 測試以及支援一些分析。",
    "cookiesDescription2": "Cookie 是瀏覽器儲存的一段文字。它可以幫助您記住登入資訊和網站偏好設定。它還可能收集您的瀏覽器類型、作業系統、造訪過的網頁、造訪時間、瀏覽過的內容以及其他點擊流資料等資訊。您可以在瀏覽器設定中調整 Cookie 保留設置，並接受或封鎖單一 Cookie。但是，如果您關閉 Cookie，我們的應用程式將無法運行，我們服務的其他方面也可能無法正常運作。",
    "correspondenceTitle": "2.6 自願通信",
    "correspondenceDescription": "當您透過電子郵件向我們提出問題或尋求協助時，我們會保留該通訊記錄，包括您的電子郵件地址，以便我們在您將來聯絡我們時可以參考過去的通訊記錄。",
    "accessTitle": "3. 我們何時存取或分享您的訊息",
    "accessDescription1": "為了提供您所要求的產品或服務。我們會使用一些第三方子處理器來協助運行我們的應用程式並向您提供服務。這包括雲端和分析提供者。",
    "accessDescription2": "調查、預防或採取行動應對濫用行為。在調查潛在濫用行為時，存取客戶帳戶是不得已而為之。我們希望保護客戶和舉報人的隱私和安全，並在整個過程中盡力平衡這些責任。如果我們發現您將我們的產品用於受限用途，我們將採取必要的措施，包括在必要時通知相關部門。",
    "accessDescription3": "根據適用法律的要求。",
    "dataRequests": "用戶資料請求。我們的政策是，除非法律程序強制要求或在有限的緊急情況下，否則我們不會回應政府的用戶資料請求。但是，如果美國執法機構持有必要的搜索令、刑事傳票或法院命令要求我們共享數據，我們必須遵守。同樣，我們只會在美國政府透過司法互助條約或協議中規定的程序強制要求的情況下，才會回應來自美國境外政府機構的請求。我們的政策是在共享資料之前通知受影響的用戶，除非法律禁止我們這樣做，並且某些緊急情況除外。",
    "preservationRequests": "保存請求。同樣，我們的政策是，只有在美國《聯邦儲存通訊法》第 18 USC 第 2703(f) 條或美國民事傳票強制要求的情況下，我們才會遵守保存資料的請求。除非法律要求或法院命令強制要求（我們選擇不上訴），否則我們不會共享已保存的資料。此外，除非我們在規定保存期到期前收到適當的搜索令、法院命令或傳票，否則我們將在保存期結束時銷毀任何已保存的客戶資料副本。",
    "taxAudits": "如果我們受到稅務機關的審計，我們可能需要分享帳單相關資訊。在這種情況下，我們只會分享必要的最低限度的信息，例如帳單地址和免稅資訊。",
    "securityTitle": "4. 我們如何保護您的數據",
    "securityDescription": "所有資料從我們的伺服器傳輸到您的瀏覽器時都透過 SSL/TLS 加密。",
    "deletionTitle": "5. 刪除內容後會發生什麼",
    "deletionDescription": "如果您刪除任何內容，它將立即變得無法存取。",
    "locationTitle": "6. 站點和資料的位置",
    "locationDescription": "我們的產品和其他網路資產在美國運作。如果您位於歐盟、英國或美國以外的其他地方，請注意，您向我們提供的任何資訊都將傳輸至美國並儲存於美國。使用我們的網站或服務和/或向我們提供您的個人信息，即表示您同意此類傳輸。",
    "childrenTitle": "7.兒童隱私",
    "childrenDescription": "本服務並非針對兒童，我們不會故意收集 13 歲以下兒童的個人資訊。若您未滿 13 歲，請勿透過本服務提交任何個人資訊。如果您認為有兒童違反本政策向我們提供了個人信息，請按照以下方式與我們聯繫。",
    "updatesTitle": "8. 本隱私權政策的更新",
    "updatesDescription": "我們可能會根據需要更新本政策，以符合相關法規並反映任何新的做法。每當我們的政策做出重大變更時，我們都會更新本頁面頂部的日期。",
    "contactTitle": "9. 聯絡我們",
    "contactDescription": "如果您對我們的隱私權政策有任何疑問、意見或投訴，請聯絡我們，我們將盡快處理您的投訴。",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "條款",
    titleGradient: "服務",
    subtitle: "在使用我們的服務之前，請仔細閱讀這些條款",
    "lastUpdated": "最後更新時間：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "termsOfServiceTitle": "服務條款",
    "thankYou": "感謝您使用我們的產品！",
    "companyDefinition": "當我們在本文檔中說「本公司」、「我們」、「我們的」或「我們」時，指的是NeverCap。",
    "servicesDefinition": "當我們說「服務」時，我們指的是由NeverCap創建和維護的任何產品，無論是透過網頁瀏覽器、桌面應用程式、行動應用程式或其他格式交付。",
    "termsUpdate": "我們未來可能會更新本服務條款。通常，這些變更旨在透過連結至更詳細的相關政策來澄清部分條款。每當我們對保單做出重大變更時，我們都會更新本頁面頂部的日期，並採取其他適當措施通知帳戶持有人。",
    "acceptanceTitle": "1. 接受協議",
    "acceptanceDescription1": "使用我們的服務，即表示您接受本協議，本協議由此成為您與NeverCap之間具有約束力的合約。您聲明您具備法定能力接受這些條款，並確認您已達到訂立具有約束力合約的法定年齡。 NeverCap的接受明確以您同意本協議的所有條款和條件為前提。",
    "eligibilityRequirement": "該服務不適用於 18 歲以下的任何人，也不應該由 18 歲以下的任何人使用。透過使用本服務，您聲明並保證您符合上述資格要求。",
    "userResponsibility": "「您」、「您的」、「您本人」等術語也包括您的員工、代理人、業務代表以及您允許透過您的帳戶（定義見下文）存取服務的任何其他個人。您有責任確保所有透過您的帳號存取服務的人員均知悉並遵守本條款。",
    "termsRevision": "NeverCap保留隨時自行修改和更新本條款的權利。所有變更一經發布即刻生效。如果您在修訂條款發布後繼續使用本服務，即表示您接受並同意這些變更。由於變更對您具有約束力，因此請您不時查看此頁面，以了解所有變更。",
    "servicesTitle": "2. NeverCap的服務",
    "servicesDescription1": "我們的服務使用戶能夠將語音對話轉換為可搜尋、翻譯和與他人共享的轉錄文字。",
    "servicesOptions": "您可以選擇使用本服務的免費版本（「免費服務」）或可能需要支付費用的訂閱式付費版本服務（「付費服務」）。",
    "servicesAccess": "我們將向您提供服務。您有責任做好一切必要安排，以便存取服務。",
    "accountTermsTitle": "3. 帳戶條款",
    "accountSecurity": "您有責任維護您的帳戶安全。本公司無法且不會對您未遵守此安全義務而造成的任何損失或損害負責。",
    "lawfulUse": "您不得將服務用於任何非法、不道德或不道德的目的。",
    "contentResponsibility": "您應對您帳戶下發布的所有內容和發生的活動負責。這包括以下人員發佈的內容：(a) 有權存取您的登入憑證；或 (b) 在您的帳戶下擁有自己的登入資訊。",
    "humanRequirement": "您必須是人類。不允許使用「機器人」或其他自動化方法註冊的帳戶。",
    "paymentTitle": "4. 付款、退款和計劃變更",
    "freeTrial": "對於提供免費試用的付費服務，我們會在您註冊時說明試用期限。試用期結束後，您需要提前付款才能繼續使用服務。如果您不付款，這些服務將會終止。",
    "upgradePolicy": "如果您從免費計劃升級到付費計劃，我們將立即從您的卡中扣款，您的計費週期從升級當天開始。",
    "taxes": "所有費用均不含稅務機關徵收的任何稅費、徵稅或關稅。如有需要，我們將代表稅務機關代收這些稅費，並將稅費匯給稅務機關。否則，您需自行承擔所有稅金、徵稅或關稅。",
    "refunds": "所有購買均不可退款。您可以隨時登入您的帳戶取消任何付費服務。對於付費訂閱，除非另有說明，否則您的取消將在當前付費期限結束時生效。",
    "cancellationTitle": "5. 取消和終止",
    "cancellationPolicy": "如果您在任何付費期限結束前取消服務，您的取消將立即生效，並且不會再次向您收費。我們不會自動按比例計算上一個計費週期中未使用的時間。",
    "terminationRights": "我們有權隨時以任何理由暫停或終止您的帳戶，並拒絕您目前或未來對我們服務的任何使用。暫停錶示您將無法存取該帳戶或帳戶中的任何內容。終止將導致您的帳戶或您對帳戶的存取權限被刪除，以及您帳戶中所有內容的喪失和放棄。我們也保留隨時以任何理由拒絕任何人使用服務的權利。我們制定此條款是因為從統計數據來看，在我們服務的數十萬個帳戶中，至少有一個帳戶正在從事惡意活動。",
    "abusePolicy": "對公司員工或官員的口頭、身體、書面或其他辱罵（包括辱罵或報復威脅）可能會導致立即終止帳戶。",
    "submissionsTitle": "6. 提交內容",
    "submissionsDescription": "您確認並同意，您向我們提供的關於本網站的任何問題、評論、建議、想法、反饋或其他信息（統稱“提交內容”）均非保密信息，並將成為我們的唯一財產。我們擁有專有權利，包括所有智慧財產權，並有權出於任何合法目的（商業或其他目的）不受限制地使用和傳播這些提交內容，而無需向您確認或支付任何報酬。您特此放棄對任何此類提交內容的所有精神權利，並保證任何此類提交內容均為您的原創或您有權提交此類提交內容。您同意，對於任何涉嫌或實際侵犯或盜用您提交內容中任何專有權利的行為，您不得向我們追訴。",
    "uptimeTitle": "7. 正常運作時間和安全性",
    "serviceAvailability": "您使用本服務的風險由您自行承擔。我們以「現狀」和「可用」為基礎提供這些服務。我們大多數服務不提供服務等級協議，但我們非常重視應用程式的正常運作時間。",
    "throttlingPolicy": "在極少數情況下，如果使用者的活動被證實會對其他使用者的服務穩定性和效能造成負面影響，我們保留暫時限制帳戶存取的權利。除最緊急的情況外，我們會在採取行動之前與您聯繫，尋求解決方案。",
    "dataSecurity": "我們採取多種措施，透過備份、冗餘和加密來保護您的資料安全。我們對透過公共互聯網傳輸的資料強制加密。",
    "thirdPartyVendors": "我們使用第三方供應商和託管合作夥伴來提供運行服務所需的必要硬體、軟體、網路、儲存和相關技術。",
    "siteManagementTitle": "8.現場管理",
    "siteManagementDescription": "我們保留以下權利（但沒有義務）：（1）監控網站是否違反本服務條款；（2）對我們自行決定違反法律或本服務條款的任何人採取適當的法律行動，包括但不限於向執法部門舉報該使用者；（3）我們自行決定且不受限制地拒絕、限制存取、限制可用性或停用（在技在手術可行的範圍內）您的任何貢獻或其任何部分；（4）我們自行決定且不受限制地、通知或承擔責任，從網站中刪除或以其他方式禁用所有過大或以任何方式對我們的系統造成負擔的文件和內容；以及（5）以旨在保護我們的權利和財產並促進網站正常運行的方式管理網站。",
    "copyrightTitle": "9. 版權和內容所有權",
    "copyrightCompliance": "服務上發布的所有內容必須符合美國版權法。",
    "ipRights": "我們對您提供給服務的資料不主張任何智慧財產權。所有上傳的資料仍歸您所有。",
    "contentModeration": "我們不預先篩選內容，但保留自行決定拒絕或刪除透過本服務提供的任何內容的權利（但沒有義務）。",
    "trademarkProtection": "本服務的名稱、外觀和風格均受版權保護©，並歸本公司所有。保留所有權利。未經本公司明確書面許可，您不得複製、抄襲或重複使用任何HTML、CSS、JavaScript或視覺設計元素。您必須申請許可才能將公司徽標或任何服務徽標用於促銷目的。請透過電子郵件向我們發送徽標使用請求。如果您違反本服務條款，我們保留撤銷此許可的權利。",
    "prohibitedExploitation": "您同意未經本公司明確的書面許可，不得複製、影印、拷貝、出售、轉售或利用本服務的任何部分、使用服務或存取服務。",
    "impersonationProhibition": "您不得修改其他網站以錯誤地暗示其與服務或公司相關。",
    "dmcaPolicy": "我們尊重他人的智慧財產權。如果您認為本網站上或透過本網站提供的任何資料侵犯了您擁有或控制的任何版權，請立即與我們聯絡。您的通知副本將發送給發布或儲存通知中提及的資料的人員。請注意，根據適用法律，如果您在通知中作出重大不實陳述，您可能需承擔損害賠償責任。因此，如果您不確定本網站上或透過本網站連結的資料是否侵犯了您的版權，您應該先考慮聯絡律師。",
    "prohibitedActivitiesTitle": "10.禁止的活動",
    "generalProhibition": "您不得為我們提供本網站目的以外的任何目的造訪或使用本網站。除我們明確認可或批准的商業活動外，本網站不得用於任何商業活動。",
    "userObligations": "作為本網站的用戶，您同意不：",
    "dataScraping": "未經我們書面許可，有系統地從網站檢索資料或其他內容，以直接或間接地建立或編譯集合、彙編、資料庫或目錄。",
    "fraud": "欺騙、詐騙或誤導我們和其他用戶，尤其是試圖了解用戶密碼等敏感帳戶資訊。",
    "securityInterference": "規避、停用或以其他方式乾擾本網站的安全相關功能，包括阻止或限制使用或複製任何內容或強制限制使用本網站和/或其中包含的內容的功能。",
    "defamation": "我們認為，貶低、玷污或以其他方式損害我們和/或本網站。",
    "harassment": "使用從本網站獲得的任何資訊來騷擾、辱罵或傷害他人。",
    "supportAbuse": "不當使用我們的支援服務或提交虛假的濫用或不當行為報告。",
    "legalCompliance": "以不符合任何適用法律或法規的方式使用本網站。",
    "framingProhibition": "未經授權建置或連結本網站。",
    "malware": "上傳或傳輸（或試圖上傳或傳輸）病毒、特洛伊木馬或其他資料，包括過度使用大寫字母和垃圾郵件（連續發布重複文字），幹擾任何一方對網站的不間斷使用和享受，或修改、損害、破壞、更改或乾擾網站的使用、特性、功能、操作或維護。",
    "automation": "從事任何自動化的系統使用，例如使用腳本發送評論或訊息，或使用任何資料探勘、機器人或類似的資料收集和提取工具。",
    "copyrightRemoval": "從任何內容中刪除版權或其他所有權聲明。",
    "impersonation": "試圖冒充其他使用者或個人或使用其他使用者的使用者名稱。",
    "spyware": "上傳或傳輸（或試圖上傳或傳輸）任何充當被動或主動資訊收集或傳輸機制的資料，包括但不限於清晰圖形交換格式（「gif」）、1×1像素、網路臭蟲、cookies或其他類似裝置（有時稱為「間諜軟體」或「被動收集機制」或「pcms」）。",
    "disruption": "幹擾、破壞或對本網站或與本網站連結的網路或服務造成不當負擔。",
    "employeeHarassment": "騷擾、煩擾、恐嚇或威脅任何向您提供本網站任何部分的員工或代理人。",
    "accessCircumvention": "試圖繞過本網站為防止或限制存取本網站或本網站任何部分而設計的任何措施。",
    "codeCopying": "複製或改編本網站的軟體，包括但不限於 Flash、PHP、HTML、JavaScript 或其他程式碼。",
    "reverseEngineering": "除非適用法律允許，否則不得對包含或以任何方式構成本網站一部分的任何軟體進行解密、反編譯、反彙編或反向工程。",
    "bots": "除標準搜尋引擎或網路瀏覽器的使用結果外，使用、啟動、開發或分發任何自動化系統，包括但不限於存取本網站的任何蜘蛛、機器人、欺騙實用程式、抓取工具或離線閱讀器，或使用或啟動任何未經授權的腳本或其他軟體。",
    "buyingAgents": "使用採購代理或採購代理在網站上進行購買。",
    "unauthorizedUse": "未經授權使用本網站，包括透過電子或其他方式收集使用者的使用者名稱和/或電子郵件地址以發送未經請求的電子郵件，或透過自動方式或虛假藉口建立使用者帳戶。",
    "competition": "將本網站用作與我們競爭的任何努力的一部分，或以其他方式將本網站和/或內容用於任何創收活動或商業企業。",
    "advertising": "使用本網站來宣傳或提供銷售商品和服務。",
    "profileTransfer": "出售或以其他方式轉讓您的個人資料。",
    "featuresTitle": "11. 功能和錯誤",
    "featuresDescription": "我們根據自身經驗以及客戶分享的時間和回饋，精心設計我們的服務。然而，不可能有讓所有人滿意的服務。我們不保證我們的服務一定能滿足您的特定要求或期望。",
    "bugsDescription": "我們也會測試所有功能，然後再發布。與任何軟體一樣，我們的服務不可避免地會存在一些錯誤。我們會追蹤收到的錯誤報告並努力解決，尤其是與安全或隱私相關的錯誤。並非所有報告的錯誤都會修復，我們也無法保證服務完全沒有錯誤。",
    "correctionsTitle": "12. 更正",
    "informationAccuracy": "本網站上的資訊可能有排印錯誤、不準確或遺漏，包括描述、價格、供貨情況以及其他各種資訊。我們保留隨時更正任何錯誤、不準確或遺漏以及更改或更新本網站資訊的權利，恕不另行通知。",
    "siteAvailability": "我們無法保證本網站始終可用。我們可能會遇到硬體、軟體或其他問題，或需要執行與本網站相關的維護，導致中斷、延遲或錯誤。我們保留隨時以任何理由更改、修訂、更新、暫停、中止或以其他方式修改本網站的權利，恕不另行通知。您同意，對於您在本網站停機或中止期間無法存取或使用本網站而造成的任何損失、損害或不便，我們概不負責。本服務條款中的任何內容均不得解釋為我們有義務維護和支持本網站，或提供與此相關的任何更正、更新或發布。",
    "userDataTitle": "13.用戶數據",
    "userDataDescription": "我們將保留您傳輸至本網站的某些數據，用於管理本網站的效能，以及與您使用本網站相關的數據。儘管我們會定期備份數據，但您應對您傳輸的所有數據或與您使用本網站進行的任何活動相關的數據承擔全部責任。您同意，對於任何此類資料的遺失或損壞，我們概不負責，並且您特此放棄因任何此類資料的遺失或損壞而向我們提起訴訟的權利。",
    "privacyPolicyTitle": "14. 隱私權政策",
    "privacyPolicyDescription": "我們重視資料隱私和安全。請查看我們的隱私權政策。使用本網站即表示您同意接受我們的隱私權政策的約束，該政策已納入本服務條款。請注意，本網站託管於美國。如果您從世界任何其他地區造訪本網站，且該等地區在個人資料收集、使用或揭露方面的法律或其他要求與美國適用法律不同，則您繼續使用本網站即表示您將把您的資料傳輸至美國，並且您同意將您的資料傳輸至美國並在美國進行處理。",
    "liabilityTitle": "15. 責任",
    "liabilityIntroduction": "我們在這些條款中都提到了責任，但將其全部放在一個部分：",
    "liabilityWaiver": "您明確瞭解並同意，對於因以下原因造成的任何直接、間接、附帶、利潤損失、特殊、後果性、懲罰性或懲戒性損害，包括但不限於利潤損失、商譽損失、使用損失、資料損失或其他無形損失（即使本公司已被告知發生此類損害的可能性），本公司不對您或任何第三方承擔法律或衡平法上的錯誤準確之處；（3）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因透過或從本服務購買或取得的任何商品、資料、資訊或服務或收到的訊息或達成的交易而產生的替代商品和服務的採購成本；（5）未經授權存取或使用我們的安全伺服器和/或儲存在其中的任何財務資訊和所有資訊或使用我們的任何財務資訊（6/） (7) 任何第三方傳輸到或透過本網站的任何錯誤、病毒、特洛伊木馬或類似物，和/或； (8) 任何內容和資料中的任何錯誤或遺漏，或因使用透過本網站發布、傳輸或以其他方式提供的任何內容而導致的任何損失或損害； (9) 任何第三方在本服務上的聲明或行為； (10)或與本服務條款或服務有關的任何其他事項，無論是違約、侵權行為（包括主動或被動的疏忽）或任何其他責任理論。",
    "miscellaneousTitle": "16. 其他",
    "miscellaneousDescription": "本服務條款以及我們在網站上發布的或與網站相關的任何政策或營運規則構成您與我們之間的完整協議和諒解。我們未行使或執行本服務條款中的任何權利或規定，並不構成對該權利或規定的放棄。本服務條款在法律允許的最大範圍內有效。我們可隨時將我們的部分或全部權利和義務轉讓給他人。對於因超出我們合理控制範圍的任何原因造成的任何損失、損害、延誤或未能採取行動，我們概不負責。如果本服務條款的任何規定或部分規定被認定為非法、無效或不可執行，則該規定或部分規定將被視為可與本服務條款分割，且不影響任何其他規定的有效性和可執行性。您與我們之間並未因本服務條款或使用本網站而建立合資、合作、僱用或代理關係。您同意，本服務條款不會因起草本服務條款而被解釋為我們無效。您特此放棄基於本服務條款的電子形式以及本協議各方未簽署執行本服務條款而可能擁有的任何及所有抗辯。",
    "contactTitle": "17. 聯絡我們",
    "contactDescription": "如果您對任何服務條款有疑問，請與我們聯絡。",
    "neverCap": "NeverCap",
    "site": "地點",
    "services": "服務"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
