// 丹麦语
let message = {
  // 首页
  HomePage: {
    home: "Alle Transskriberinger",
    times: "{times} gratis transskriptioner per dag, {left} tilbage i dag.",
    tips: "Opgrader til Pro for ubegrænsede transskriptioner.",
    update: "Opgrader nu",
    rename: "Omdøb",
    delete: "Slet",
    cancel: "Annuller",
    confirm: "Opret",
    dialogLabel: "Mappenavn",
    recently: "Seneste filer",
    loading: "Indlæser",
    tour: {
      step0: {
        title: "Velkommen til {name}",
        tip: "Her kan du:",
        content: "Transskriber engangs samtaler, møder, forelæsninger og mere",
        next: "Kom i gang"
      },
      step1: {
        title: "Transskriber filer",
        content:
          "Understøtter tre transskriptionsmetoder: lokale filer, links og optagelser."
      },
      step2: {
        title: "Opret en mappe",
        content: 'Klik på "+" for at oprette en mappe og organisere dine filer.'
      },
      step3: {
        title: "Se transskriptionsdetaljer og rediger",
        content:
          "Klik på elementet for at se transskriptionsdetaljer og rediger, oversæt det også."
      },
      next: "næste",
      finish: "Forstået"
    },
    export: {
      export: "Eksporter",
      title: "Vi genererer din eksport",
      title2: "Din fil er klar",
      singleLoadingContent: "1 fil komprimeres.",
      singleSuccessContent: "1 fil er blevet komprimeret.",
      loadingContent: "{num} filer komprimeres.",
      successContent: "{num} filer er blevet komprimeret.",
      cancel: "Annuller eksporten",
      error: "Eksportfejl",
      dialog: {
        title: "Advarsel",
        content: "Annuller eksporten?",
        cancel: "Annuller eksport",
        continue: "Fortsæt eksport"
      }
    },
    welcome: {
      title: "Velkommen til Scribify!",
      description: "Her kan du:",
      transcribe:
        "Transskribér ubesværet med Scribify – omdan stemmesamtaler til klar, søgbar og delbar tekst på et øjeblik.",
      precision:
        "Få præcise transskriptioner med taleridentifikation og tidsstempler øjeblikkeligt.",
      translate:
        "Bryd sprogbarrierer: oversæt transskriptioner til mere end 200 sprog nemt og enkelt.",
      edit: "Redigér, forbedr og eksportér dine transskriptioner i formater, der passer til dine behov.",
      collaborate: "Samarbejd ved at dele din transskriberede tekst med andre.",
      button: "Kom i gang",
      tip: "Klar til at omdanne lyd til transskriberet tekst? Start med at udforske nu!",
      tip2: "Begynd at udforske nu!",
      tip1: "Klar til at omdanne lyd til transskriberet tekst? "
    },
    subscriptionModal: {
      left: {
        title: "Få Pro-planen for at låse op for mere",
        c1: "Ubegrænset transskription",
        c2: "10 timers uploads",
        c3: "Højeste prioritet",
        c4: "99% transskriptionsnøjagtighed",
        c5: "Mere end 100 understøttede sprog",
        c6: "Taleridentifikation",
        c7: "Transskriptionsoversættelse",
        t1: "Ubegrænset transskription for én person.",
        t2: "Hver fil kan være op til 10 timer / 5 GB. Upload 50 filer ad gangen.",
        t3: "Vi vil altid transskribere dine filer hurtigst muligt med højeste prioritet."
      },
      right: {
        title: "Få Pro-planen",
        yearly: "Årligt",
        monthly: "Månedligt",
        save: "Besparelse",
        preMonth: "pr. måned",
        preYear: "pr. år",
        firstMonth: "første måned",
        afterwards: "derefter"
      },
      subscribe: "Abonnér"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Mislykket",
      selected: "Valgt",
      success: "Succes",
      fileList: "Filliste"
    },
    dialog: {
      move: {
        title: "Flyt",
        label: "Vælg en mappe",
        placeholder: "Vælg en mappe",
        confirm: "Flyt",
        cancel: "Annuller"
      },
      rename: {
        title: "Omdøb",
        label: "Filnavn",
        confirm: "Omdøb",
        cancel: "Annuller"
      },
      delete: {
        title: "Slet",
        file: "fil",
        files: "filer",
        label: "Bekræft sletning? Denne handling kan ikke fortrydes.",
        confirm: "Slet",
        cancel: "Annuller"
      },
      share: {
        title: "Del",
        label:
          "Alle med følgende sikre link kan se denne transskription og den tilknyttede mediefil.",
        confirm: "Kopier link",
        success: "Kopiering lykkedes"
      },
      export: {
        title: "Eksporter",
        select: "Vælg det format du har brug for",
        settings: "Indstillinger",
        speaker: "Inkluder taler",
        timecodes: "Inkluder tidskoder",
        confirm: "Eksporter",
        cancel: "Annuller",
        selectErr: "Vælg venligst et eller flere formater"
      }
    },
    search: {
      placeholder: "Søg"
    },
    recently: "Senest",
    record: "Optag",
    transcribe: "Transskriber",
    unclassified: "Uklassificerede mapper",
    buttons: {
      transcribe: "Transskriber filer",
      url: "Transskriber links",
      record: "Optag og transskriber",
      recording: "Optager..."
    },
    delSuccess: "Slettet med succes",
    create: "Opret",
    endRecord: {
      title: "Prompt",
      content:
        "Du optager. Denne handling vil afslutte optagelsen. Vil du afslutte optagelsen?",
      confirm: "Fortsæt Optagelse",
      cancel: "Afslut Optagelse"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Optag",
      pause: "Pause",
      resume: "Genoptag",
      stop: "Stop",
      endRecord: "Afslut optagelse",
      delete: "Slet",
      transcribe: "Transskriber",
      permissionDenied: "Mikrofon tilladelse nægtet eller enhed findes ikke",
      dialog: {
        delete: {
          title: "Advarsel",
          label: "Er du sikker på, at du vil slette denne optagelse?",
          confirm: "Slet",
          cancel: "Annuller"
        },
        complete: {
          title: "Optagelse fuldført",
          label:
            "Optagelsen har nået 10 timer og er automatisk stoppet. Transskriber venligst.",
          confirm: "Forstået"
        },
        speaker: {
          content:
            "Til taleridentifikation er filer begrænset til 3 timer. Fjern markeringen i '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transskriber en online medie",
        title: "Indsæt links",
        label:
          "Indsæt dit video- eller lydlink fra: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram og flere platforme...",
        confirm: "Tilføj",
        cancel: "Annuller",
        // 请输入正确的链接
        errorTitle:
          "Linkadressen du indtastede er forkert. Kontroller venligst og prøv igen.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transskriber en online medie",
        dialogTitle: "Transskriber filer",
        tip1: "Træk filer hertil eller klik for at gennemse",
        tip2: "Klik for at gennemse",
        or: "eller",
        supported: "Understøttede formater"
      },
      del: {
        title: "Advarsel",
        content:
          "Al fremskridt vil gå tabt. Bekræft annullering af transskriptionen?",
        cancel: "Bekræft annullering",
        confirm: "Fortsæt transskribering"
      },
      files: "Filer",
      resultDialogTitle: "Transskriber filer",
      resultDialogTitle2: "Transskriber fil",
      cancel: "Annuller",
      confirm: "Transskriber",
      return: "Tilbage",
      addMore: "Tilføj flere",
      language: "Mediesprog",
      failed: "Mislykket",
      tooLarge: "Filen overstiger grænsen (5G).",
      linkUpload: "Uploader",
      fileFormat: "Filformat er ikke tilladt",
      localFiles: "Lokale filer",
      pasteLink: "Online link",
      uploadErr: "Uploadfejl",
      hashErr: "Hashfejl",
      table: {
        status: "Status",
        file: "Fil",
        size: "Størrelse",
        noData: "Ingen data"
      },
      maxFileNum: "Antallet af filer kan ikke overstige {num}.",
      speaker: "Identificer talere",
      speakerLabel:
        "Registrer automatisk hvem der taler",
      guest: {
        transcribe: "Transskriber",
        file: "Fil",
        audio: "Lyd-/videofil",
        Uploading: "Uploader..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Seneste",
      popular: "Populære",
      other: "Andre",
      searchLanguage: "Søg sprog",
      noMatch: "Ingen matchende sprog fundet",
      English: "Engelsk",
      "English(US)": "Engelsk (USA)",
      "English(UK)": "Engelsk (UK)",
      Spanish: "Spansk",
      Portuguese: "Portugisisk",
      French: "Fransk",
      Italian: "Italiensk",
      German: "Tysk",
      Dutch: "Hollandsk",
      Polish: "Polsk",
      Danish: "Dansk",
      Japanese: "Japansk",
      Korean: "Koreansk",
      Hungarian: "Ungarsk",
      Czech: "Tjekkisk",
      Chinese: "Kinesisk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Azerbaijani: "Aserbajdsjansk",
      Estonian: "Estisk",
      Belarusian: "Hviderussisk",
      Bulgarian: "Bulgarsk",
      Icelandic: "Islandsk",
      Bosnian: "Bosnisk",
      Persian: "Persisk",
      Russian: "Russisk",
      "Chinese(Traditional)": "Kinesisk (Traditionelt)",
      Finnish: "Finsk",
      Kazakh: "Kasakhisk",
      Galician: "Galicisk",
      Catalan: "Catalansk",
      "Chinese(Simplified)": "Kinesisk (Forenklet)",
      Kannada: "Kannada",
      Croatian: "Kroatisk",
      Latvian: "Lettisk",
      Lithuanian: "Litauisk",
      Romanian: "Rumænsk",
      Marathi: "Marathi",
      Malay: "Malajisk",
      Macedonian: "Makedonsk",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norsk",
      Swedish: "Svensk",
      Serbian: "Serbisk",
      Slovak: "Slovakisk",
      Slovenian: "Slovensk",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thai",
      Turkish: "Tyrkisk",
      Welsh: "Walisisk",
      Urdu: "Urdu",
      Ukrainian: "Ukrainsk",
      Greek: "Græsk",
      Armenian: "Armensk",
      Hindi: "Hindi",
      Indonesian: "Indonesisk",
      Vietnamese: "Vietnamesisk",
      Albanian: "Albansk",
      Amharic: "Amharisk",
      Assamese: "Assamesisk",
      Occitan: "Occitansk",
      Bashkir: "Bashkirisk",
      Basque: "Baskisk",
      Breton: "Bretonsk",
      Tibetan: "Tibetansk",
      Faroese: "Færøsk",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisk",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreol",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Laotisk",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgsk",
      Malagasy: "Malagassisk",
      Maltese: "Maltesisk",
      Malayalam: "Malayalam",
      Mongolian: "Mongolsk",
      Bengali: "Bengali",
      Burmese: "Burmesisk",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Singalesisk",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadsjikisk",
      Tatar: "Tatarisk",
      Telugu: "Telugu",
      Turkmen: "Turkmensk",
      Uzbek: "Usbekisk",
      Hawaiian: "Hawaiiansk",
      "Norwegian Nynorsk": "Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisk",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanesisk",
      Cantonese: "Kantonesisk",
      Abkhaz: "Abkhasisk",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avarisk",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irsk",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossetisk",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesisk",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Nord-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buryat",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Tjetjensk",
      chk: "Chuukesisk",
      Chuvash: "Tjuvasjisk",
      Tswana: "Setswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau (Zimbabwe)",
      "South Ndebele": "Syd-Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (Vestafrikansk skriftsprog)",
      "French(Canada)": "Fransk (Canada)",
      Fijian: "Fijiansk",
      fon: "Fon",
      "Western Frisian": "Vestfrisisk",
      fur: "Friulisk",
      Fulah: "Fula",
      Kongo: "Kikongo",
      Kalaallisut: "Grønlandsk",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisisk",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikansk",
      "crh-Latn": "Krim-Tatarisk (Latinsk)",
      crh: "Krim-Tatarisk (Kyrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdisk (Kurmanji)",
      ckb: "Kurdisk (Sorani)",
      trp: "Kokborok",
      ltg: "Latgallisk",
      lij: "Ligurisk",
      Limburgish: "Limburgsk",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisk",
      rom: "Romani",
      mad: "Maduresisk",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajisk (Jawi)",
      Marshallese: "Marshallsk",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Eastern Huasteca)",
      "Southern Sotho": "Syd-Sotho",
      new: "Newar",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugisisk (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapotekisk",
      "Northern Sami": "Nordsamisk",
      Samoan: "Samoansk",
      kri: "Krio",
      crs: "Seychellisk kreol",
      Sango: "Sango",
      "sat-Latn": "Santali (Latinsk)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gælisk",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latinsk)",
      Tahitian: "Tahitisk",
      Tonga: "Tongansk",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassarese",
      vec: "Venetiansk",
      Uyghur: "Uighurisk",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesisk",
      scn: "Siciliansk",
      hil: "Hiligaynon",
      jam: "Jamaicansk kreol",
      sah: "Jakutisk",
      ace: "Achinese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Latinsk)",
      Inuktitut: "Inuktitut (Stavelser)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "eller", // 或
    LoginBtn: "Log ind med e-mail",
    LoginGoogle: "Log ind med Google",
    SignupBtn: "Tilmeld med e-mail",
    SignupGoogle: "Tilmeld med Google",
    SignupDes: "Tilmeld dig i dag og oplev magien — gratis.",
    SignupTitle: "Præcis & ubegrænset transskription",
    signup: "Tilmeld", // 注册
    sign_up: "Tilmeld dig", // 注册
    loginByGoogle: "Fortsæt med Google", // 使用Google登录
    emailAddress: "Indtast venligst din e-mailadresse", // 请输入您的邮箱
    createAccount: "Opret en ny konto", // 创建账户
    accountExists: "Har du allerede en konto? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Ved at fortsætte accepterer du vores {terms} og {policy}.",
      terms: "Vilkår",
      policy: "Privatlivspolitik"
    },
    setPassword: "Sæt en adgangskode", // 设置密码
    code: "Verifikationskode", // 验证码
    resend: "Send igen", // 重新发送
    enterPassword: "Adgangskode: Mindst 6 tegn.", // 请输入密码
    passwordLeval: "Adgangskode niveau", // 密码强度
    Weak: "Svag", // 弱 中 强
    Medium: "Medium", // 弱 中 强
    Strong: "Stærk", // 弱 中 强
    confirmPassword: "Bekræft din adgangskode", // 确认密码
    invalidEmail: "Ugyldig e-mailadresse", // 无效的邮箱地址
    logInDirectly: "Denne konto eksisterer allerede. Log venligst direkte ind.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Verifikationskode fejl. Prøv igen.", // 验证码错误，请重试
    atLeastSix: "Adgangskoden skal være mindst 6 tegn lang.", // 密码长度至少6位
    passwordNotMatch: "Adgangskoder matcher ikke. Prøv venligst igen.", // 密码不匹配，请重试
    login: "Log ind", // 登录
    log_in: "Log ind", // 登录
    log_In: "Log ind", // 登录
    password: "Adgangskode", // 密码
    forgotPassword: "Glemt din adgangskode?", // 忘记密码？
    noAccount: "Har du ikke en konto？", // 没有账户？注册
    accountNotExists: "Denne konto eksisterer ikke.", // 账户不存在
    passwordError: "Adgangskode fejl", // 密码错误
    sendCode: "Send verifikationskode", // 发送验证码
    resetPassword: "Nulstil adgangskode", // 重置密码
    resetYourPassword: "Nulstil din adgangskode", // 重置你的密码
    newOldCantSame:
      "Den nye adgangskode skal være forskellig fra den gamle adgangskode.", // 新密码与旧密码不能相同
    passwordResetOk: "Adgangskode nulstillet med succes！", // 密码重置成功！
    signupToSaveProgress: "Færdiggør tilmeldingen for at gemme din fremgang.",
    tip: "Tip",
    tipContentEmail:
      "Vi har netop sendt din konto-loginadgangskode til din e-mail.",
    tipContentPassword:
      "Tjek venligst din indbakke og log ind med din e-mail og adgangskode.",
    codeToEmail:
      "Vi har lige sendt en verifikationskode til din e-mail. Tjek venligst din indbakke og indsæt verifikationskoden ovenfor."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transskriptioner dagligt",
    uploadMinutes: "30 minutters upload",
    lowerPriority: "Lavere prioritet",
    currentPlan: "Nuværende plan",
    professionalEdition: "professionel version",
    unlimitedTranscription: "Ubegrænset transskription",
    unlimitedNumberOfTimes: "Ubegrænset transskriptionsfrekvens og -varighed.",
    filesUploadedAtOnce:
      "Hver fil kan være op til 10 timer lang / 5 GB. Upload 50 filer ad gangen.",
    highestPriority: "højeste prioritet",
    weWillGiveTheHighest:
      "Vi vil altid transskribere dine filer hurtigst muligt med højeste prioritet.",
    theFirstMonth: "Den første måned",
    subscribeTo: "abonner på",
    basicVersionFree: "Basisversion (gratis)",
    return: "Tilbage",
    annualize: "årlig",
    monthly: "månedlig",
    everyYear: "hvert år",
    saved: "sparet",
    byTheMonth: "pr. måned",
    firstMonth: "første måned",
    afterwardsEveryMonth: "Derefter hver måned",
    manageSubscription: "Administrer abonnement",
    professionalYearbook: "Professionel årlig",
    professionalMonthly: "Professionel månedlig",
    subscriptionWillCancelledOn: "Dit abonnement vil blive annulleret den",
    displayLanguage: "Visningssprog",
    update: "Opgrader nu",
    basicversion: "Basisversion (Gratis)",
    daily: "{start} af {end} daglige transskriptioner brugt",
    upgradetoPro: "Opgrader til Pro",
    accountSetting: "Kontoindstillinger",
    logOut: "Log ud",
    account: "Konto",
    email: "E-mail",
    id: "ID",
    password: "Adgangskode",
    resetPassword: "Nulstil adgangskode",
    logIn: "Log ind",
    tryForFree: "Prøv gratis",
    notFund: "Ikke fundet",
    couldntFind: "Vi kunne ikke finde det, du ledte efter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månedlig",
    perMonth: "pr. måned",
    afterwards: "derefter",
    accuracy: "transskriptionsnøjagtighed",
    supported: "understøttede sprog",
    identification: "Taleridentifikation",
    transcriptSranslation: "Transskriptionsoversættelse",
    perYear: "pr. år",
    getProPlan: "Få Pro-planen",
    changeToAnnual: "Skift til årlig",
    automaticRenewalon: "Automatisk fornyelse den",
    eachMonth: "Automatisk fornyelse den {time} i hver måned.",
    automaticRenewal:
      "Automatisk fornyelse mislykkedes, tjek venligst betalingsmetoden.",
    eachYear: "Automatisk fornyelse den {time} hvert år.",
    returnAccountSetting: "Tilbage",
    needsToWaitLonger: "Vent længere, før dine filer bliver transskriberet.",
    freeThreeTimesDay: "Transskriber 3 filer gratis hver dag.",
    oneFileUploaded:
      "Hver fil kan være op til 30 minutter lang. Upload 1 fil ad gangen.",
    uploadWithinHours: "10-timers uploads",
    yourSubscription: "Dit abonnement annulleres den {time}.",
    save: "Spare",
      freeversion2: "Gratis Plan"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesisk (Forenklet)",
      "Chinese(Traditional)": "Kinesisk (Traditionelt)",
      Japanese: "Japansk",
      Danish: "Dansk",
      German: "Tysk",
      English: "Engelsk",
      Spanish: "Spansk",
      French: "Fransk",
      Italian: "Italiensk",
      Hungarian: "Ungarsk",
      Dutch: "Hollandsk",
      Norwegian: "Norsk",
      Polish: "Polsk",
      Portuguese: "Portugisisk",
      Finnish: "Finsk",
      Swedish: "Svensk",
      Turkish: "Tyrkisk",
      Greek: "Græsk",
      Russian: "Russisk",
      Ukrainian: "Ukrainsk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Korean: "Koreansk"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS skabelon, forud integreret med globale betalingsgateways (Stripe/Cream), Google OAuth, i18n routing og SEO optimeringsværktøjer. Designet til udviklere, der lancerer flersprogede webapps, tilbyder den SSR/SSG support og produktionsklar sikkerhed ud af boksen.",
    startLink: "Start gratis prøveperiode~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Tilslut dig ventelisten, få de seneste NuxtPro nyheder først OG rabatter!",
      placeholder: "Indtast din e-mail",
      button: "Tilslut venteliste",
      joinCountMessage: "🔥 Tidlig bruger #{count} lige tilsluttet ventelisten!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "NuxtJS boilerplaten med alt det, du har brug for for at få dit produkt foran kunderne. Fra idé til produktion på 5 minutter."
    },
    api: {
      title: "dette er en demo",
      corpInfo: "virksomhedsinfo"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "video download fejl"
      },
      mse: {
        code: 2,
        msg: "stream append fejl"
      },
      parse: {
        code: 3,
        msg: "parsing fejl"
      },
      format: {
        code: 4,
        msg: "forkert format"
      },
      decoder: {
        code: 5,
        msg: "dekodningsfejl"
      },
      runtime: {
        code: 6,
        msg: "grammatiske fejl"
      },
      timeout: {
        code: 7,
        msg: "afspil timeout"
      },
      other: {
        code: 8,
        msg: "andre fejl"
      }
    },
    HAVE_NOTHING: "Der er ingen information om, hvorvidt lyd/video er klar",
    HAVE_METADATA: "Lyd/video metadata er klar",
    HAVE_CURRENT_DATA:
      "Data om den nuværende afspilningsplacering er tilgængelig, men der er ikke nok data til at afspille næste frame/millisekund",
    HAVE_FUTURE_DATA: "Nuværende og mindst én frame af data er tilgængelig",
    HAVE_ENOUGH_DATA:
      "De tilgængelige data er tilstrækkelige til at starte afspilning",
    NETWORK_EMPTY: "Lyd/video er ikke blevet initialiseret",
    NETWORK_IDLE:
      "Lyd/video er aktiv og er blevet valgt til ressourcer, men intet netværk bruges",
    NETWORK_LOADING: "Browseren downloader dataene",
    NETWORK_NO_SOURCE: "Ingen lyd/video kilde blev fundet",
    MEDIA_ERR_ABORTED: "Hentningsprocessen afbrydes af brugeren",
    MEDIA_ERR_NETWORK: "Der opstod en fejl under download",
    MEDIA_ERR_DECODE: "Der opstod en fejl under dekodning",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Lyd/video understøttes ikke",
    REPLAY: "Genafspil",
    ERROR: "Netværk er offline",
    PLAY_TIPS: "Afspil",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Afspil næste",
    DOWNLOAD_TIPS: "Download",
    ROTATE_TIPS: "Roter",
    RELOAD_TIPS: "Genindlæs",
    FULLSCREEN_TIPS: "Gå fuldskærm",
    EXITFULLSCREEN_TIPS: "Afslut fuldskærm",
    CSSFULLSCREEN_TIPS: "Cssfuldskærm",
    EXITCSSFULLSCREEN_TIPS: "Afslut cssfuldskærm",
    TEXTTRACK: "Undertekst",
    PIP: "PIP",
    SCREENSHOT: "Skærmbillede",
    LIVE: "LIVE",
    OFF: "Slukket",
    OPEN: "Åbn",
    MINI_DRAG: "Klik og hold for at trække",
    MINISCREEN: "Miniskærm",
    REFRESH_TIPS: "Prøv venligst",
    REFRESH: "Opdater",
    FORWARD: "fremad",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Tænd undertekster",
    TM_SUBTITLE_HIDE_TIPS: "Sluk undertekster",
    TM_MINIMIZE_TIPS: "Skjul videoen"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Privatlivspolitik",
    lastUpdated: "Sidst opdateret: 25. august 2025",
    policyDescription:
      'Denne politik beskriver, hvordan Scribify (herefter benævnt "Scribify", "vores", "vi", "os") indsamler, bruger og videregiver dine personlige oplysninger, når du bruger vores tjenester, websteder',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 'og software (samlet kaldet "Tjenesterne").',
    policyAgreement:
      "Læs venligst denne privatlivspolitik omhyggeligt og sørg for, at du forstår den. Ved at bruge en af vores tjenester accepterer du denne privatlivspolitik. Hvis du ikke accepterer vores brug af dine personoplysninger i overensstemmelse med denne politik, skal du straks stoppe med at bruge vores tjenester.",
    policyOverview:
      "I denne politik beskriver vi: hvilke data vi indsamler og hvorfor; hvordan dine data håndteres; og dine rettigheder i forhold til dine data. Vi sælger ikke dine data.",
    scopeTitle: "1. Omfanget af denne privatlivspolitik",
    whatWeCollectTitle: "2. Hvad vi indsamler og hvorfor",
    accessShareTitle: "3. Hvornår vi tilgår eller deler dine oplysninger",
    secureDataTitle: "4. Sådan sikrer vi dine data",
    deleteContentTitle: "5. Hvad sker der, når du sletter dit indhold",
    locationTitle: "6. Placering af websted og data",
    childrenPrivacyTitle: "7. Børns privatliv",
    updatesTitle: "8. Opdateringer af denne privatlivspolitik",
    contactUsTitle: "9. Kontakt os",
    identityAccessTitle: "2.1 Identitet og adgang",
    billingInfoTitle: "2.2 Faktureringsoplysninger",
    productInteractionsTitle: "2.3 Produktinteraktioner",
    websiteInteractionsTitle: "2.4 Webstedsinteraktioner",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondance",
    scopeContent:
      "Denne privatlivspolitik gælder kun for vores indsamling og behandling af oplysninger om brugere af Tjenesterne. Denne privatlivspolitik gælder ikke for tjenester, websteder eller software, der drives af tredjeparter, og som er linket til os (uanset om vi leverer disse links, eller om andre brugere deler dem), og den gælder heller ikke for indhold, data, applikationer eller materialer fra tredjeparter. Vi anbefaler, at du tjekker privatlivspolitikkerne for tredjepartswebsteder eller -software, før du giver dem oplysninger.",
    collectPrinciple:
      "Vores ledende princip er kun at indsamle det, vi har brug for. Her er, hvad det betyder i praksis:",
    identityAccessContent:
      "Når du tilmelder dig et af vores produkter, beder vi om identificerende oplysninger såsom dit navn og din e-mailadresse. Dette er for at kunne levere essentiel produktfunktionalitet og sende dig produktopdateringer og andre vigtige oplysninger.",
    billingInfoContent:
      "Hvis du tilmelder dig et betalt produkt, vil du blive bedt om at angive dine betalingsoplysninger og faktureringsadresse. Betalingsoplysningerne sendes direkte til vores betalingsudbyder og når ikke vores servere.",
    productInteractionsContent:
      "Vi gemmer det indhold, du uploader, modtager eller vedligeholder på dine produktkonti, på vores servere. Medmindre du sletter dette indhold, kan vi gemme det, så længe din konto er aktiv.",
    websiteInteractionsContent:
      "Vi indsamler oplysninger om din browsingaktivitet til analyse- og statistiske formål, såsom test af konverteringsfrekvens og eksperimentering med nye produktdesigns. Dette omfatter f.eks. dine browser- og operativsystemversioner, din IP-adresse, hvilke websider du har besøgt, og hvor lang tid de tog at indlæse, og hvilket websted der henviste dig til os. Hvis du har en konto og er logget ind, er disse webanalysedata knyttet til din IP-adresse og brugerkonto, indtil din konto ikke længere er aktiv.",
    cookiesContent1:
      "Vi bruger også permanente førstepartscookies og nogle tredjepartscookies til at gemme bestemte præferencer, gøre det nemmere for dig at bruge vores applikationer og udføre A/B-test samt understøtte visse analyser.",
    cookiesContent2:
      "En cookie er et stykke tekst, der gemmes af din browser. Den kan hjælpe med at huske loginoplysninger og webstedspræferencer. Den kan også indsamle oplysninger såsom din browsertype, operativsystem, besøgte websider, besøgets varighed, set indhold og andre klikdata. Du kan justere indstillinger for cookieopbevaring og acceptere eller blokere individuelle cookies i dine browserindstillinger, selvom vores apps ikke fungerer, og andre aspekter af vores tjeneste muligvis ikke fungerer korrekt, hvis du slår cookies fra.",
    voluntaryCorrespondenceContent:
      "Når du sender os en e-mail med et spørgsmål eller for at bede om hjælp, gemmer vi denne korrespondance, inklusive din e-mailadresse, så vi har en historik over tidligere korrespondance, som vi kan bruge, hvis du kontakter os i fremtiden.",
    accessShareContent1:
      "For at levere produkter eller tjenester, du har anmodet om. Vi bruger nogle tredjeparts underdatabehandlere til at hjælpe med at køre vores applikationer og levere tjenesterne til dig. Dette inkluderer cloud- og analyseudbydere.",
    accessShareContent2:
      "At undersøge, forebygge eller træffe foranstaltninger vedrørende misbrug. Adgang til en kundes konto i forbindelse med undersøgelse af potentielt misbrug er en sidste udvej. Vi ønsker at beskytte privatlivets fred og sikkerheden for både vores kunder og de personer, der rapporterer problemer til os, og vi gør vores bedste for at afbalancere disse ansvarsområder gennem hele processen. Hvis vi opdager, at du bruger vores produkter til et begrænset formål, vil vi træffe nødvendige foranstaltninger, herunder underrette de relevante myndigheder, hvor det er berettiget.",
    accessShareContent3: "Når det er påkrævet i henhold til gældende lov.",
    userDataRequests:
      "- Anmodninger om brugerdata. Vores politik er ikke at svare på anmodninger fra myndigheder om brugerdata, medmindre vi er tvunget til det af en juridisk proces eller under begrænsede omstændigheder i tilfælde af en nødsituation. Hvis amerikanske retshåndhævende myndigheder har den nødvendige kendelse, strafferetlige stævning eller retskendelse, der kræver, at vi deler data, skal vi dog overholde dette. Ligeledes vil vi kun svare på anmodninger fra myndigheder uden for USA, hvis den amerikanske regering tvinger os til det gennem procedurer, der er beskrevet i en traktat eller aftale om gensidig retshjælp. Det er vores politik at underrette berørte brugere, før vi deler data, medmindre vi er juridisk forbudt at gøre det, og undtagen i visse nødsituationer.",
    preservationRequests:
      "- Anmodninger om databevaring. Ligeledes er det vores politik kun at efterkomme anmodninger om databevaring, hvis det er påkrævet af den amerikanske Federal Stored Communications Act, 18 USC Section 2703(f), eller af en behørigt forkyndt amerikansk stævning i civile sager. Vi deler ikke bevarede data, medmindre det er påkrævet ved lov eller påkrævet af en retskendelse, som vi vælger ikke at anke. Derudover vil vi, medmindre vi modtager en behørig kendelse, retskendelse eller stævning, inden den krævede bevaringsperiode udløber, destruere alle bevarede kopier af kundedata ved udgangen af bevaringsperioden.",
    taxAudit:
      "- Hvis vi bliver revideret af en skattemyndighed, kan vi være forpligtet til at dele faktureringsrelaterede oplysninger. Hvis det sker, deler vi kun det minimum, der er nødvendigt, såsom faktureringsadresser og oplysninger om skattefritagelse.",
    secureDataContent1: "Alle data krypteres via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "når den sendes fra vores servere til din browser.",
    deleteContentContent:
      "Hvis du sletter indhold, bliver det øjeblikkeligt utilgængeligt.",
    locationContent:
      "Vores produkter og andre web-ejendomme drives i USA. Hvis du befinder dig i Den Europæiske Union, Storbritannien eller andre steder uden for USA, skal du være opmærksom på, at alle oplysninger, du giver os, vil blive overført til og gemt i USA. Ved at bruge vores websteder eller tjenester og/eller give os dine personlige oplysninger, accepterer du denne overførsel.",
    childrenPrivacyContent:
      "Tjenesterne er ikke rettet mod børn, og vi indsamler ikke bevidst personlige oplysninger fra børn under 13 år. Hvis du er under 13 år, bedes du ikke indsende personlige oplysninger via Tjenesterne. Hvis du mener, at et barn har givet os personlige oplysninger i strid med denne politik, bedes du kontakte os som angivet nedenfor.",
    updatesContent:
      "Vi kan opdatere denne politik efter behov for at overholde relevante regler og afspejle eventuelle nye praksisser. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side.",
    contactUsContent1:
      "Hvis du har spørgsmål, kommentarer eller klager vedrørende vores privatlivspolitik, bedes du",
    contactUs: "kontakt os",
    contactUsContent2:
      "og vi vil bestræbe os på at behandle din klage hurtigst muligt."
  },
  termsOfService: {
    termsOfServiceTitle: "Servicevilkår",
    lastUpdated: "Sidst opdateret: 21. september 2022",
    thankYouMessage: "Tak fordi du bruger vores produkter!",
    companyReference:
      'Når vi siger "Virksomhed", "vi", "vores" eller "os" i dette dokument, henviser vi til Scribify.',
    servicesDefinition:
      'Når vi siger "Tjenester", mener vi ethvert produkt, der er oprettet og vedligeholdt af Scribify, uanset om det leveres i en webbrowser, desktopapplikation, mobilapplikation eller et andet format.',
    termsUpdateNotice:
      "Vi kan opdatere disse servicevilkår i fremtiden. Typisk har disse ændringer været for at præcisere nogle af disse vilkår ved at linke til en udvidet relateret politik. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side og tager andre passende skridt for at underrette kontohaverne.",
    acceptanceOfAgreementTitle: "1. Accept af aftale",
    scribifyServicesTitle: "2. Scribifys tjenester",
    accountTermsTitle: "3. Kontovilkår",
    paymentRefundsTitle: "4. Betaling, refusion og planændringer",
    cancellationTerminationTitle: "5. Annullering og opsigelse",
    submissionsTitle: "6. Indsendelser",
    uptimeSecurityTitle: "7. Oppetid og sikkerhed",
    siteManagementTitle: "8. Webstedsadministration",
    copyrightContentTitle: "9. Ophavsret og ejerskab af indhold",
    prohibitedActivitiesTitle: "10. Forbudte aktiviteter",
    featuresBugsTitle: "11. Funktioner og fejl",
    correctionsTitle: "12. RETTELSER",
    userDataTitle: "13. Brugerdata",
    privacyPolicyTitle: "14. Privatlivspolitik",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakt os",
    acceptanceContent1:
      "Ved at bruge vores Tjenester angiver du din accept af denne Aftale, som dermed bliver en bindende kontrakt mellem dig og Scribify. Du erklærer, at du er juridisk i stand til at acceptere disse Vilkår, og bekræfter, at du er myndig nok til at indgå en bindende kontrakt. Scrifys accept er udtrykkeligt betinget af din accept af alle vilkår og betingelser i denne Aftale.",
    acceptanceContent2:
      "Tjenesterne er ikke beregnet til og bør ikke bruges af personer under 18 år. Ved at bruge Tjenesterne erklærer og garanterer du, at du opfylder ovenstående berettigelseskrav.",
    acceptanceContent3:
      'Udtrykkene "du", "din", "dig selv" omfatter også dine medarbejdere, agenter, forretningsrepræsentanter og alle andre personer, som du giver adgang til Tjenesterne via din Konto (som defineret nedenfor). Du er ansvarlig for at sikre, at alle personer, der tilgår Tjenesterne via din konto, er bekendt med disse Vilkår og overholder dem.',
    acceptanceContent4:
      "Scribify forbeholder sig retten til at revidere og opdatere disse vilkår fra tid til anden efter eget skøn. Alle ændringer træder i kraft med det samme, når de offentliggøres. Din fortsatte brug af tjenesterne efter offentliggørelsen af de reviderede vilkår betyder, at du accepterer og accepterer ændringerne. Du forventes at tjekke denne side fra tid til anden, så du er opmærksom på eventuelle ændringer, da de er bindende for dig.",
    servicesContent1:
      "Vores tjenester gør det muligt for brugere at omdanne stemmesamtaler til transskriberet tekst, der kan søges i, oversættes og deles med andre.",
    servicesContent2:
      'Du kan vælge, om du vil bruge den gratis version af Tjenesterne ("Gratis Tjenester") eller den abonnementsbaserede, betalte version af Tjenesterne, som du muligvis skal betale gebyrer for ("Betalte Tjenester").',
    servicesContent3:
      "Vi stiller Tjenesterne til rådighed for dig. Du er ansvarlig for at træffe alle nødvendige foranstaltninger for at du kan få adgang til Tjenesterne.",
    accountTerms1:
      "- Du er ansvarlig for at opretholde sikkerheden på din konto. Virksomheden kan ikke og vil ikke være ansvarlig for tab eller skade som følge af din manglende overholdelse af denne sikkerhedsforpligtelse.",
    accountTerms2:
      "- Du må ikke bruge Tjenesterne til ulovlige, uetiske eller umoralske formål.",
    accountTerms3:
      "- Du er ansvarlig for alt indhold, der offentliggøres, og alt aktivitet, der finder sted på din konto. Dette inkluderer indhold, der offentliggøres af andre, som enten: (a) har adgang til dine loginoplysninger; eller (b) har deres egne logins på din konto.",
    accountTerms4:
      '- Du skal være et menneske. Konti registreret af "bots" eller andre automatiserede metoder er ikke tilladt.',
    paymentContent1:
      "- For betalte tjenester, der tilbyder en gratis prøveperiode, forklarer vi prøveperiodens varighed, når du tilmelder dig. Efter prøveperioden skal du betale forud for at fortsætte med at bruge tjenesten. Hvis du ikke betaler, ophører disse tjenester.",
    paymentContent2:
      "- Hvis du opgraderer fra et gratis abonnement til et betalt abonnement, debiterer vi dit kort med det samme, og din faktureringsperiode starter på opgraderingsdagen.",
    paymentContent3:
      "- Alle gebyrer er eksklusive alle skatter, afgifter eller gebyrer pålagt af skattemyndighederne. Hvor det er nødvendigt, opkræver vi disse skatter på vegne af skattemyndighederne og indbetaler dem til skattemyndighederne. Ellers er du ansvarlig for betaling af alle skatter, afgifter eller gebyrer.",
    paymentContent4:
      "- Alle køb refunderes ikke. Du kan til enhver tid opsige alle betalte tjenester ved at logge ind på din konto. For betalte abonnementer træder din opsigelse i kraft ved udgangen af den nuværende betalte periode, medmindre andet er angivet.",
    cancellationContent1:
      "- Hvis du opsiger Tjenesten inden udgangen af en betalt periode, træder din opsigelse i kraft med det samme, og du vil ikke blive opkrævet igen. Vi beregner ikke automatisk forholdsmæssigt den ubrugte tid i den seneste faktureringsperiode.",
    cancellationContent2:
      "- Vi har ret til at suspendere eller opsige din konto og nægte enhver nuværende eller fremtidig brug af vores Tjenester af en hvilken som helst grund når som helst. Suspendering betyder, at du ikke vil kunne få adgang til kontoen eller noget indhold på kontoen. Opsigelse vil desuden resultere i sletning af din konto eller din adgang til din konto, og tab og afkald på alt indhold på din konto. Vi forbeholder os også retten til at nægte brugen af Tjenesterne til enhver af en hvilken som helst grund når som helst. Vi har denne klausul, fordi statistisk set er der mindst én ud af de hundredtusindvis af konti på vores Tjenester, der gør noget skumelt.",
    cancellationContent3:
      "- Verbal, fysisk, skriftlig eller anden form for misbrug (herunder trusler om misbrug eller gengældelse) af virksomhedens medarbejder eller funktionær kan resultere i øjeblikkelig lukning af kontoen.",
    submissionsContent:
      'Du anerkender og accepterer, at eventuelle spørgsmål, kommentarer, forslag, ideer, feedback eller andre oplysninger vedrørende webstedet ("indsendelser"), som du giver os, ikke er fortrolige og bliver vores ejendom. Vi ejer eksklusive rettigheder, herunder alle immaterielle rettigheder, og har ret til ubegrænset brug og formidling af disse indsendelser til ethvert lovligt formål, kommercielt eller andet, uden anerkendelse eller kompensation til dig. Du giver hermed afkald på alle moralske rettigheder til sådanne indsendelser, og du garanterer hermed, at sådanne indsendelser er originale fra dig, eller at du har ret til at indsende sådanne indsendelser. Du accepterer, at der ikke kan gøres krav mod os for påstået eller faktisk krænkelse eller misbrug af nogen ejendomsret i dine indsendelser.',
    uptimeContent1:
      '- Din brug af Tjenesterne sker på eget ansvar. Vi leverer disse Tjenester "som de er" og "som tilgængelige". Vi tilbyder ikke serviceniveauaftaler for de fleste af vores Tjenester, men tager oppetiden for vores applikationer alvorligt.',
    uptimeContent2:
      "- Vi forbeholder os retten til midlertidigt at deaktivere din konto, hvis dit forbrug væsentligt overstiger det typiske forbrug for andre kunder af Tjenesterne. Vi vil naturligvis kontakte dig, før vi foretager os noget, undtagen i sjældne tilfælde, hvor brugsniveauet kan have en negativ indvirkning på Tjenestens ydeevne for andre kunder.",
    uptimeContent3:
      "- Vi tager mange forholdsregler for at beskytte og sikre dine data gennem sikkerhedskopiering, redundans og kryptering. Vi håndhæver kryptering til dataoverførsel over det offentlige internet.",
    uptimeContent4:
      "- Vi bruger tredjepartsleverandører og hostingpartnere til at levere den nødvendige hardware, software, netværk, lagring og relateret teknologi, der kræves for at køre Tjenesterne.",
    siteManagementContent:
      "Vi forbeholder os retten, men ikke forpligtelsen, til at: (1) overvåge webstedet for overtrædelser af disse servicevilkår; (2) tage passende retslige skridt mod enhver, der efter eget skøn overtræder loven eller disse servicevilkår, herunder, men ikke begrænset til, at rapportere en sådan bruger til retshåndhævende myndigheder; (3) efter eget skøn og uden begrænsning, nægte, begrænse adgang til, begrænse tilgængeligheden af eller deaktivere (i det omfang det er teknologisk muligt) dine bidrag eller dele deraf; (4) efter eget skøn og uden begrænsning, varsel eller ansvar, at fjerne fra webstedet eller på anden måde deaktivere alle filer og indhold, der er for store eller på nogen måde er belastende for vores systemer; og (5) på anden måde administrere webstedet på en måde, der er designet til at beskytte vores rettigheder og ejendom og til at fremme webstedets korrekte funktion.",
    copyrightContent1:
      "- Alt indhold, der offentliggøres på Tjenesterne, skal overholde amerikansk ophavsretslovgivning.",
    copyrightContent2:
      "- Vi gør ikke krav på nogen immaterielle rettigheder over det materiale, du leverer til Tjenesterne. Alt materiale, der uploades, forbliver dit.",
    copyrightContent3:
      "- Vi foretager ikke forhåndsscreening af indhold, men forbeholder os retten (men ikke pligten) til efter eget skøn at afvise eller fjerne indhold, der er tilgængeligt via Tjenesten.",
    copyrightContent4:
      "- Navnene, udseendet og følelsen af Tjenesterne er copyright© tilhørende Virksomheden. Alle rettigheder forbeholdes. Du må ikke duplikere, kopiere eller genbruge nogen del af HTML-, CSS-, JavaScript- eller visuelle designelementer uden udtrykkelig skriftlig tilladelse fra Virksomheden. Du skal anmode om tilladelse til at bruge Virksomhedens logo eller eventuelle Tjenestelogoer til reklameformål. Venligst",
    emailUs: "e-mail os",
    copyrightContent5:
      "anmodninger om at bruge logoer. Vi forbeholder os retten til at tilbagekalde denne tilladelse, hvis du overtræder disse servicevilkår.",
    copyrightContent6:
      "- Du accepterer ikke at reproducere, duplikere, kopiere, sælge, videresælge eller udnytte nogen del af Tjenesterne, brugen af Tjenesterne eller adgangen til Tjenesterne uden udtrykkelig skriftlig tilladelse fra Virksomheden.",
    copyrightContent7:
      "- Du må ikke ændre et andet websted på en måde, der fejlagtigt antyder, at det er forbundet med Tjenesterne eller Virksomheden.",
    copyrightContent8:
      "- Vi respekterer andres immaterielle rettigheder. Hvis du mener, at materiale, der er tilgængeligt på eller via webstedet, krænker en ophavsret, du ejer eller kontrollerer, bedes du straks",
    contactUs: "kontakt os",
    copyrightContent9:
      "En kopi af din meddelelse vil blive sendt til den person, der har lagt det materiale op, der er omhandlet i meddelelsen. Vær opmærksom på, at du i henhold til gældende lov kan blive holdt ansvarlig for erstatning, hvis du afgiver væsentlige urigtige oplysninger i en meddelelse. Hvis du derfor ikke er sikker på, at materiale, der findes på eller linkes til af webstedet, krænker din ophavsret, bør du overveje først at kontakte en advokat.",
    prohibitedActivitiesIntro:
      "Du må ikke tilgå eller bruge webstedet til andre formål end det, som vi stiller webstedet til rådighed for. Webstedet må ikke bruges i forbindelse med kommercielle bestræbelser, undtagen dem, der specifikt er godkendt af os.",
    prohibitedActivitiesUserAgreement:
      "Som bruger af webstedet accepterer du ikke at:",
    prohibitedActivity1:
      "- Systematisk hente data eller andet indhold fra webstedet for direkte eller indirekte at oprette eller kompilere en samling, kompilering, database eller fortegnelse uden skriftlig tilladelse fra os.",
    prohibitedActivity2:
      "- Narre, bedrage eller vildlede os og andre brugere, især i forsøg på at få adgang til følsomme kontooplysninger såsom brugeradgangskoder.",
    prohibitedActivity3:
      "- Omgå, deaktivere eller på anden måde forstyrre sikkerhedsrelaterede funktioner på webstedet, herunder funktioner, der forhindrer eller begrænser brugen eller kopieringen af indhold eller håndhæver begrænsninger på brugen af webstedet og/eller indholdet deri.",
    prohibitedActivity4:
      "- Nedgøre, plette eller på anden måde skade os og/eller webstedet efter vores mening.",
    prohibitedActivity5:
      "- Bruge oplysninger indhentet fra webstedet til at chikanere, misbruge eller skade en anden person.",
    prohibitedActivity6:
      "- Gøre ukorrekt brug af vores supporttjenester eller indsende falske rapporter om misbrug eller forseelser.",
    prohibitedActivity7:
      "- Bruge webstedet på en måde, der er uforenelig med gældende love eller regler.",
    prohibitedActivity8:
      "- Deltage i uautoriseret framing af eller linkning til webstedet.",
    prohibitedActivity9:
      "- Uploade eller overføre (eller forsøge at uploade eller overføre) virus, trojanske heste eller andet materiale, herunder overdreven brug af store bogstaver og spamming (kontinuerlig opslag af gentagne tekster), der forstyrrer en parts uafbrudte brug og nydelse af webstedet eller ændrer, forringer, forstyrrer, ændrer eller forstyrrer brugen, funktionerne, driften eller vedligeholdelsen af webstedet.",
    prohibitedActivity10:
      "- Bruge systemet automatisk på enhver måde, f.eks. ved at bruge scripts til at sende kommentarer eller beskeder eller ved at bruge datamining, robotter eller lignende dataindsamlings- og udtrækningsværktøjer.",
    prohibitedActivity11:
      "- Slet meddelelsen om ophavsret eller andre ejendomsrettigheder fra ethvert indhold.",
    prohibitedActivity12:
      "- Forsøg på at udgive dig for at være en anden bruger eller person eller bruge en anden brugers brugernavn.",
    prohibitedActivity13:
      '- Uploade eller overføre (eller forsøge at uploade eller overføre) materiale, der fungerer som en passiv eller aktiv informationsindsamlings- eller transmissionsmekanisme, herunder, men ikke begrænset til, klare grafikudvekslingsformater ("gifs"), 1×1 pixels, web bugs, cookies eller andre lignende enheder (undertiden omtalt som "spyware" eller "passive indsamlingsmekanismer" eller "pcms").',
    prohibitedActivity14:
      "- Forstyrre, afbryde eller skabe en urimelig belastning på webstedet eller de netværk eller tjenester, der er forbundet til webstedet.",
    prohibitedActivity15:
      "- Chikanere, irritere, intimidere eller true nogen af vores medarbejdere eller agenter, der er involveret i at levere nogen del af webstedet til dig.",
    prohibitedActivity16:
      "- Forsøg at omgå eventuelle foranstaltninger på webstedet, der er designet til at forhindre eller begrænse adgang til webstedet eller nogen del af webstedet.",
    prohibitedActivity17:
      "- Kopiere eller tilpasse webstedets software, herunder, men ikke begrænset til, Flash, PHP, HTML, JavaScript eller anden kode.",
    prohibitedActivity18:
      "- Medmindre det er tilladt i henhold til gældende lov, at dechifrere, dekompilere, disassemblere eller reverse engineere nogen af de softwareprogrammer, der omfatter eller på nogen måde udgør en del af webstedet.",
    prohibitedActivity19:
      "- Medmindre det er et resultat af standardbrug af søgemaskiner eller internetbrowsere, bruge, starte, udvikle eller distribuere ethvert automatiseret system, herunder, men ikke begrænset til, enhver spider, robot, snydeværktøj, scraper eller offline-læser, der tilgår webstedet, eller bruge eller starte ethvert uautoriseret script eller anden software.",
    prohibitedActivity20:
      "- Brug en indkøbsagent eller en indkøbsagent til at foretage køb på webstedet.",
    prohibitedActivity21:
      "- Foretage uautoriseret brug af webstedet, herunder indsamling af brugernavne og/eller e-mailadresser på brugere elektronisk eller på anden måde med det formål at sende uopfordrede e-mails eller oprette brugerkonti automatisk eller under falske forudsætninger.",
    prohibitedActivity22:
      "- Bruge webstedet som en del af enhver bestræbelse på at konkurrere med os eller på anden måde bruge webstedet og/eller indholdet til enhver indtægtsgenererende eller kommerciel virksomhed.",
    prohibitedActivity23:
      "- Bruge webstedet til at annoncere eller tilbyde at sælge varer og tjenester.",
    prohibitedActivity24: "- Sælg eller overfør din profil på anden måde.",
    featuresContent1:
      "Vi designer vores tjenester med omhu, baseret på vores egne erfaringer og erfaringerne fra kunder, der deler deres tid og feedback. Der findes dog ikke en service, der tilfredsstiller alle. Vi garanterer ikke, at vores tjenester opfylder dine specifikke krav eller forventninger.",
    featuresContent2:
      "Vi tester også alle vores funktioner, før vi sender dem. Som med al software indeholder vores tjenester uundgåeligt nogle fejl. Vi sporer de fejl, der rapporteres til os, og arbejder på dem, især dem, der er relateret til sikkerhed eller privatliv. Ikke alle rapporterede fejl vil blive rettet, og vi garanterer ikke fuldstændig fejlfri tjenester.",
    correctionsContent1:
      "Der kan være oplysninger på webstedet, der indeholder typografiske fejl, unøjagtigheder eller udeladelser, herunder beskrivelser, priser, tilgængelighed og forskellige andre oplysninger. Vi forbeholder os retten til at rette eventuelle fejl, unøjagtigheder eller udeladelser og til at ændre eller opdatere oplysningerne på webstedet når som helst og uden forudgående varsel.",
    correctionsContent2:
      "Vi kan ikke garantere, at webstedet vil være tilgængeligt til enhver tid. Vi kan opleve hardware-, software- eller andre problemer, eller vi kan være nødt til at udføre vedligeholdelse relateret til webstedet, hvilket resulterer i afbrydelser, forsinkelser eller fejl. Vi forbeholder os retten til at ændre, revidere, opdatere, suspendere, afbryde eller på anden måde modificere webstedet når som helst og af en hvilken som helst grund uden varsel til dig. Du accepterer, at vi ikke har noget ansvar for tab, skade eller ulempe forårsaget af din manglende evne til at få adgang til eller bruge webstedet under nedetid eller ophør af webstedet. Intet i disse servicevilkår skal fortolkes som en forpligtelse for os til at vedligeholde og supportere webstedet eller til at levere rettelser, opdateringer eller udgivelser i forbindelse hermed.",
    userDataContent:
      "Vi opbevarer visse data, som du overfører til webstedet, med det formål at administrere webstedets ydeevne, samt data vedrørende din brug af webstedet. Selvom vi regelmæssigt udfører sikkerhedskopier af data, er du eneansvarlig for alle data, som du overfører, eller som vedrører enhver aktivitet, du har foretaget ved hjælp af webstedet. Du accepterer, at vi ikke har noget ansvar over for dig for tab eller beskadigelse af sådanne data, og du giver hermed afkald på enhver ret til at anlægge sag mod os som følge af et sådant tab eller beskadigelse af sådanne data.",
    privacyPolicyContent1:
      "Vi bekymrer os om databeskyttelse og -sikkerhed. Gennemgå venligst vores",
    privacyPolicy: "Privatlivspolitik",
    privacyPolicyContent2:
      "Ved at bruge webstedet accepterer du at være bundet af vores privatlivspolitik, som er indarbejdet i disse servicevilkår. Vær opmærksom på, at webstedet hostes i USA. Hvis du tilgår webstedet fra en anden region i verden med love eller andre krav vedrørende indsamling, brug eller videregivelse af personoplysninger, der afviger fra gældende love i USA, overfører du dine data til USA gennem din fortsatte brug af webstedet, og du accepterer at få dine data overført til og behandlet i USA.",
    liabilityIntro:
      "Vi nævner ansvar i alle disse vilkår, men for at samle det hele i ét afsnit:",
    liabilityContent:
      "Du forstår og accepterer udtrykkeligt, at Virksomheden ikke er ansvarlig, hverken i henhold til loven eller billighedsretten, over for dig eller nogen tredjepart for direkte, indirekte, tilfældige, tabt fortjeneste, særlige, følgeskader, pønalerstatninger eller eksemplariske skader, herunder, men ikke begrænset til, erstatning for tabt fortjeneste, goodwill, brug, data eller andre immaterielle tab (selvom Virksomheden er blevet underrettet om muligheden for sådanne skader), som følge af: (1) brugen af eller manglende evne til at bruge Tjenesterne; (2) fejl, mangler eller unøjagtigheder i indhold og materialer; (3) personskade eller materiel skade af enhver art, som følge af din adgang til og brug af webstedet; (4) omkostningerne ved anskaffelse af erstatningsvarer og -tjenester som følge af varer, data, oplysninger eller tjenester købt eller erhvervet eller beskeder modtaget eller transaktioner indgået via eller fra Tjenesterne; (5) uautoriseret adgang til eller brug af vores sikre servere og/eller alle personlige oplysninger og/eller finansielle oplysninger lagret deri; (6) afbrydelse eller ophør af transmission til eller fra webstedet; (7) eventuelle fejl, vira, trojanske heste eller lignende, der måtte blive overført til eller via webstedet af tredjeparter, og/eller; (8) eventuelle fejl eller udeladelser i indhold og materialer eller for tab eller skade af enhver art, der opstår som følge af brugen af indhold, der er lagt ud, transmitteret eller på anden måde gjort tilgængeligt via webstedet; (9) udtalelser eller adfærd fra tredjeparter på tjenesten; (10) eller ethvert andet forhold vedrørende disse Servicevilkår eller Tjenesterne, uanset om det er som kontraktbrud, erstatning uden for kontrakt (herunder uagtsomhed, aktiv eller passiv) eller enhver anden ansvarsteori.",
    miscellaneousContent:
      "Disse Servicevilkår og eventuelle politikker eller driftsregler, som vi har offentliggjort på webstedet eller i forbindelse med webstedet, udgør hele aftalen og forståelsen mellem dig og os. Vores undladelse af at udøve eller håndhæve nogen rettighed eller bestemmelse i disse Servicevilkår skal ikke fungere som et afkald på en sådan rettighed eller bestemmelse. Disse Servicevilkår gælder i det videst mulige omfang, det er tilladt ved lov. Vi kan til enhver tid overdrage enhver eller alle vores rettigheder og forpligtelser til andre. Vi er ikke ansvarlige for tab, skade, forsinkelse eller undladelse af at handle forårsaget af årsager uden for vores rimelige kontrol. Hvis nogen bestemmelse eller del af en bestemmelse i disse Servicevilkår anses for at være ulovlig, ugyldig eller ikke-håndhævelig, anses denne bestemmelse eller del af bestemmelsen for at være adskilt fra disse Servicevilkår og påvirker ikke gyldigheden og håndhævelsen af eventuelle resterende bestemmelser. Der er ikke skabt noget joint venture-, partnerskabs-, ansættelses- eller agenturforhold mellem dig og os som følge af disse Servicevilkår eller brug af webstedet. Du accepterer, at disse Servicevilkår ikke vil blive fortolket imod os i kraft af at have udarbejdet dem. Du giver hermed afkald på ethvert forsvar, du måtte have baseret på den elektroniske form af disse Servicevilkår og manglen på underskrift fra parterne heri for at opfylde disse Servicevilkår.",
    contactUsContent1:
      "Hvis du har spørgsmål til nogen af servicevilkårene, bedes du venligst",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funktioner",
    UnlimitedTranscription: "Ubegrænset transskription",
    BulkUpload: "Masseupload",
    Accuracy: "96% nøjagtighed",
    Pricing: "Priser",
    UseCases: "Brugsscenarier",
    AllUseCases: "Alle brugsscenarier",
    Podcasters: "Podcastere",
    Journalists: "Journalister",
    ContentCreators: "Indholdsskabere",
    Researchers: "Forskere",
    BusinessTeams: "Forretningsteams",
    Educators: "Undervisere",
    Resources: "Ressourcer",
    YouTubetoMP4: "YouTube til MP4",
    StartFreeTrial: "Prøv det gratis"
  },
  Footer: {
    des: "Verdens første helt ubegrænsede AI-transkriptionstjeneste. Ingen begrænsninger, ingen lofter, bare frihed til at være kreativ.",
    Features: "Funktioner",
    UseCases: "Brugsscenarier",
    Company: "Selskab",
    featureMenus: ["Ubegrænset transskription", "Masseupload", "96% nøjagtighed"],
    useCaseMenus: [
          "Alle brugsscenarier",
          "Podcastere",
          "Journalister",
          "Indholdsskabere",
          "Forskere",
          "Forretningsteams",
          "Undervisere"
        ],
    companyMenus: [
          "Om",
          "Priser",
          "Privatliv",
          "Vilkår"
        ]
  },
  Index: {
    Hero: {
      badge: 'Slut med "krympning" - faktisk ubegrænset',
      h1: "Stop med at betale for grænser:",
      gradient: "Virkelig ubegrænset AI-transkription",
      subtitle: "Upload hele dit podcastarkiv. Transskriber alle dine interviews. Behandl 50 filer på én gang. Ingen månedlige begrænsninger, ingen uploadgrænser. Endelig transskription, der skalerer efter dine faktiske behov.",
      FreeTrial: "Prøv det gratis - Intet kreditkort",
      HowWorks: "Se hvordan det virker",
      Unlimited: "Ubegrænsede filuploads",
      NoCap: "Ingen månedlig minutgrænse",
      Hour: "Understøttede 10-timers filer",
      ExploreUseCases: "Udforsk brugsscenarier"
    },
    Stats: {
      monthlyMinutes: "Månedlige minutter",
      fileUploads: "Filuploads",
      batchProcessing: "Batchbehandling",
      maxFileLength: "Maksimal fillængde"
    },
    FeaturesGrid: {
      try_now: "Prøv det nu",
      no_signup: "Ingen tilmelding nødvendig",
      experience_unltd: "Oplev virkelig ubegrænset transskription",
      upload_50: "Upload op til 50 filer på én gang, lige her",
      no_limits: "Ingen flere skjulte grænser",
      no_surprises: "Ingen flere overraskelser",
      transparency: "Mens andre stille og roligt reducerer dine minutter eller skjuler lofter med småt, tror vi på radikal gennemsigtighed",
      feat_unltd: "Faktisk ubegrænset",
      feat_unltd_desc: 'Ingen "fair use policy" begravet i ord. Ingen lagerlofter forklædt som "ubegrænset". Upload hele dit arkiv, transskriber alt. Vi mener det.',
      feat_bulk: "Frihed til masseupload",
      feat_bulk_desc: 'Træt af "3 livstidsimporter" eller "10 filer pr. måned"? Upload 50 filer på én gang, så mange gange du har brug for. Perfekt til at behandle efterslæb.',
      feat_batch: "Batchbehandling",
      feat_batch_desc: "Behandl hele din podcastsæson natten over. Upload 50 interviews på én gang. Lad vores AI arbejde, mens du sover. Vågn op til færdige transskriptioner.",
      feat_accuracy: "96% nøjagtighed",
      feat_accuracy_desc: "Brancheførende AI med smart tegnsætning, dagbogsregistrering for op til 20 talere og håndtering af accenter og tekniske termer fejlfrit.",
      feat_langs: "100+ sprog",
      feat_langs_desc: "Transskriber på over 100 sprog, oversæt til over 249. Ingen ekstra omkostninger for forskellige sprog. Globalt indhold, én simpel pris.",
      feat_pro: "Professionelle funktioner",
      feat_pro_desc: "Tidsstempler på ordniveau for præcis positionering af lyd/video, præcis identifikation af talere selv under hurtige samtaleskift og perfekt formateret tekst med afsnit, sætninger og tegnsætning for nem læsning."
    },
    UseCases: {
      built_for: "Bygget til",
      "heavy_users": "Storforbrugere som dig",
      "join_users": 'Slut dig til YouTubere, indholdsskabere og podcastere, der skiftede fra "shrinkflation"-tjenester',
      "podcasters": {
        "title": "Podcastere",
        "des": "Upload hele dit bagkatalog. Opret shownoter til hver episode. Du behøver ikke længere at vælge, hvilke episoder du vil transskribere."
      },
      "content_creators": {
        "title": "Indholdsskabere",
        "des": "Lav dit videobibliotek om til søgbar tekst. Generer undertekster til alt. Ingen minuttertælling, bare skab."
      },
      "journalists": {
        "title": "Journalister",
        "des": 'Upload alle dine interviews på én gang. Ikke flere forhindringer som "10 filer om måneden", når deadline er overskredet. Behandl alt.'
      },
      researchers: {
        title: "Forskere",
        des: "Transskriber timevis af fokusgrupper og interviews. Upload hele din undersøgelse på én gang. Få præcis identifikation af talere."
      },
      business_teams: {
        title: "Forretningsteams",
        des: "Optag alle opkald uden at bekymre dig om begrænsninger. Få AI-indsigt i alle samtaler, ikke kun nogle få udvalgte."
      },
      educators: {
        title: "Undervisere",
        des: "Transskriber hele forelæsningsrækken. Gør alt indhold tilgængeligt. Ingen valgmuligheder på grund af minutbegrænsninger."
      }
    },
    Testimonials: {
      title: "Elsket af",
      highlighted_users: "50.000+ brugere",
      subtitle: "Se hvorfor professionelle vælger NeverCap frem for begrænsede alternativer",
      Mike: {
        "text": "Hold da op, det her virker faktisk! Jeg har lavet podcasts i 3 år og har transskriberet alt manuelt som en idiot. Jeg uploadede 6 episoder på én gang, og det adskilte mig og min medvært perfekt. Episoden med kaffebaren, som jeg troede var ødelagt? Krystalklar transskription. Jeg vil aldrig tilbage til at skrive det her ud selv.",
        "author": "Mike Rodriguez",
        "role": "Podcastvært"
      },
      Sarah: {
        "text": "Jeg underviser online og havde brug for undertekster til mine videoer. Jeg prøvede 3 andre værktøjer, der enten havde mærkelige begrænsninger eller tog evigheder. Dette her virker bare...? Uploadede min spanske forelæsning og fik perfekte undertekster på omkring 2 minutter. Mine elever med høreproblemer er så glade. Ville ønske, jeg havde fundet dette før!",
        "author": "Sarah Chen",
        "role": "Onlinelærer"
      },
      Jessica: {
        "text": "Jeg har brugt dette til mine interviews, og det er utroligt, hvor præcist det er. Havde et 2-timers interview på gebrokkent engelsk + spansk, og alt var korrekt, selv tidsstemplerne. Jeg plejede at betale min praktikant 200 dollars om måneden bare for at transskribere ting. Dette sparer mig bogstaveligt talt penge hver måned.",
        "author": "Jessica Park",
        "role": "Freelancejournalist"
      }
    },
    PricingPreview: {
      "title": "Gennemsigtig prisfastsættelse",
      "highlighted_text": "Ingen skjulte store bogstaver",
      "subtitle": "Vælg din plan. Ingen stjerner, intet med småt, ingen overraskelser"
    },
    FAQSection: {
      "title": "Ofte stillede",
      "titleHighlight": "Spørgsmål",
      "questions": [
            {
              "q": "ubegrænset_politik",
              "question": "Er det virkelig ubegrænset? Hvad er hage ved det?",
              "answer": "Ja, det er virkelig ubegrænset! Ingen månedlige minutgrænser, ingen gebyrer for overforbrug. De eneste begrænsninger er tekniske: individuelle filer kan være op til 10 timer lange eller 5 GB store, og du kan behandle 50 filer på én gang. Men du kan uploade så mange batches, som du vil, hele måneden."
            },
            {
              "q": "nøjagtighed",
              "question": "Hvor præcis er transskriptionen?",
              "answer": "Vi garanterer 96% nøjagtighed for klar lyd. Vores AI er trænet på millioner af timers forskelligartet indhold og håndterer accenter, tekniske termer og flere talere exceptionelt godt. Til udfordrende lyd hjælper vores smarte forbedringsfunktioner med at forbedre resultaterne."
            },
            {
              "q": "sprog",
              "question": "Hvilke sprog understøtter I?",
              "answer": "Vi understøtter transskription på over 100 sprog, herunder engelsk, spansk, mandarin, hindi, arabisk, fransk og flere. Derudover kan du oversætte dine transskriptioner til 249 forskellige sprog, hvilket gør det perfekt til globalt indhold."
            },
            {
              "q": "hastighed",
              "question": "Hvor hurtig er transkriptionen?",
              "answer": "Lynhurtigt! En lydfil på 1 time behandles typisk på under 5 minutter. Med batchbehandling kan du uploade 50 filer samtidigt og lade dem behandle parallelt. De fleste brugere vågner op og finder hele deres bibliotek transskriberet natten over."
            },
            {
              "q": "aflysning",
              "question": "Kan jeg annullere når som helst?",
              "answer": "Absolut! Ingen kontrakter, ingen afbestillingsgebyrer. Du kan opgradere, nedgradere eller annullere dit abonnement når som helst fra dit dashboard. Hvis du annullerer, beholder du adgangen indtil slutningen af din faktureringsperiode."
            },
            {
              "q": "sikkerhed",
              "question": "Er mine data sikre?",
              "answer": "Din sikkerhed er vores prioritet. Vi er SOC 2-certificerede, bruger 256-bit kryptering til alle data og bruger aldrig dit indhold til at træne vores modeller. Du kan slette dine filer når som helst, og vi sletter dem automatisk efter 30 dage. Vi overholder GDPR og CCPA."
            },
            {
              "q": "eksportformater",
              "question": "Hvilke eksportformater er tilgængelige?",
              "answer": "Download dine transskriptioner i ethvert format, du har brug for: PDF, Word (DOCX), Excel, CSV, SRT-undertekster, almindelig tekst (TXT) og VTT-undertekster. Perfekt til enhver arbejdsgang, du har."
            },
            {
              "q": "filformater",
              "question": "Hvilke lyd- og videofiler kan jeg uploade?",
              "answer": "Vi understøtter stort set alle lyd- og videoformater, du støder på: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV og mere. Hvis du kan afspille det, kan vi transskribere det."
            }
          ]
    },
    CTASection: {
      "title": "Klar til at bryde fri fra begrænsninger?",
      "subtitle": "Slut dig til mere end 50.000 professionelle, der er gået over til ubegrænset transskription",
      "button": "Prøv NeverCap Gratis",
      "disclaimer": "Intet kreditkort kræves for gratisplanen • Opgrader når som helst for ubegrænset adgang"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ikke mere "krympning"',
      heroTitleLine1: "Virkelig ubegrænset",
      heroTitleLine2: "AI-transkription",
      heroSubtitle: "Selvom Trint begrænser dig til 50 timer, og Otter begrænser dig til 10 filer om måneden, leverer vi det, vi rent faktisk lover: ubegrænset transskription uden skjulte begrænsninger.",
      primaryCta: "Prøv det gratis - Intet kreditkort",
      secondaryCta: "Se sandheden",
      comparisonBadLabel: "Hvad andre gør",
      comparisonBadTitle: "Skjulte grænser overalt",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trinity:",
      comparisonBadItem1Text: '"Ubegrænset" = 50 timer/måned maks.',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Odder:",
      comparisonBadItem2Text: "3 livstidsimporter (gratis), 10/måned (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Ildfluer:",
      comparisonBadItem3Text: "800 minutters lagringsgrænse",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Beskrivelse:",
      comparisonBadItem4Text: "Maks. 30 timer/måned",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Skjult i vilkår og betingelser",
      comparisonGoodLabel: "Hvad vi gør",
      comparisonGoodTitle: "Faktisk ubegrænset",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Ingen månedlige minutlofter",
      comparisonGoodItem1Text: "nogensinde",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Ubegrænsede filuploads",
      comparisonGoodItem2Text: "altid",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Ingen lagergrænser",
      comparisonGoodItem3Text: "overhovedet",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 filer batchupload",
      comparisonGoodItem4Text: "når som helst",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Gennemsigtig politik",
      comparisonGoodItem5Text: "på forhånd",
      feature1Label: "Ingen grænser",
      feature1TitlePart1: "Transskribere 1.000 timer?",
      feature1TitlePart2: "Samme pris.",
      feature1Description: "Stop med at tælle minutter. Stop med at se på store bogstaver. Uanset om du transskriberer 10 timer eller 10.000 timer om måneden, betaler du den samme faste pris. Ingen gebyrer for overskridelse. Ingen uventede regninger.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Ingen tricks til "fair use"-politikken',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ingen nedregulering efter X timer",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ingen angst ved månedens afslutning",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Månedlige timer",
      feature1Stat2Number: "0 kr.",
      feature1Stat2Label: "Gebyrer for overforbrug",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Upload når som helst",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Gennemsigtig",
      feature2Label: "Massefrihed",
      feature2TitlePart1: "Upload din",
      feature2TitlePart2: "Hele arkivet",
      feature2Description: "Otter giver dig 3 livstidsimporter gratis, 10 om måneden på Pro. Vi giver dig ubegrænset. Upload din podcast-backlog, alle dine interviews, års optagelser. Ingen begrænsninger.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 filer pr. batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Understøttede 10-timers filer",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Proces mens du sover",
      feature2TableRow1Label: "Odderfri",
      feature2TableRow1Value: "3 livstidsimporter",
      feature2TableRow2Label: "Odder Pro",
      feature2TableRow2Value: "10 filer/måned",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Maksimum 50 timer/måned",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Virkelig ubegrænset ✓",
      feature3Label: "Socialt bevis",
      feature3TitlePart1: "Brugere er",
      feature3TitlePart2: "Skifter dagligt",
      feature3Description: '"Jeg betaler 100 dollars om året for Otter, og de begrænser mig til 10 filimporter om måneden. I det øjeblik der er et alternativ med ubegrænset import, er jeg væk!" - Ægte Reddit-bruger',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000+ brugere skiftede",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Fra Otters "krympeinflation"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Går aldrig tilbage",
      feature3Stat1Number: "50.000+",
      feature3Stat1Label: "Glade brugere",
      feature3Stat2Number: "1 mio.+",
      feature3Stat2Label: "Behandlede filer",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Nøjagtighed",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Ingen skjulte gebyrer",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutter/måned",
      trustBadge2Number: "100+",
      trustBadge2Label: "Sprog",
      trustBadge3Number: "96%",
      trustBadge3Label: "Nøjagtighed",
      trustBadge4Number: "50",
      trustBadge4Label: "Batchupload",
      ctaTitle: "Stop med at betale for Fake Unlimited",
      ctaSubtitle: "Slut dig til tusindvis af dem, der skiftede til fuldstændig ubegrænset transskription",
      finalCta: "Prøv NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Frihed til masseupload",
      heroTitleLine1: "Upload 50 filer.",
      heroTitleHighlight: "Behandl alt.",
      heroSubtitle: "Otter giver dig 3 livstidsimporter. TRE. Hele dit liv. Vi giver dig ubegrænsede uploads, 50 filer ad gangen, når du har brug for det.",
      primaryCta: "Start masseupload →",
      secondaryCta: "Se grænserne",
      redditQuote: '"Jeg har 3 års podcast-episoder at transskribere. Otter fortæller mig, at jeg får 3 livstidsimporter. TRE. Det er fornærmende."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Ægte frustration fra r/podcasting",
      comparisonSectionTitlePart1: "De",
      comparisonSectionTitleHighlight: "Latterlige grænser",
      comparisonSectionTitlePart2: "De pålægger",
      comparisonSubtitle: "Hvordan konkurrenter begrænser din mulighed for at behandle indhold",
      limitCard1Service: "Odderfri",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Livstidsimport",
      limitCard1DescriptionLine2: "(Ja, for HELE dit liv)",
      limitCard2Service: "Odder Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Filer pr. måned",
      limitCard2DescriptionLine2: "($100/årsabonnement)",
      limitCard3Service: "Beskrivelse",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fil ad gangen",
      limitCard3DescriptionLine2: "(Sekventiel upload)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Ubegrænsede uploads",
      limitCard4DescriptionLine2: "50 filer pr. batch",
      feature1Label: "Batch Power",
      feature1TitlePart1: "Behandl din",
      feature1TitleHighlight: "Hele arkivet",
      feature1TitlePart2: "Natten over",
      feature1Description: 'Upload 50 filer inden sengetid. Vågn op og fuldfør transskriptioner. Ingen kø, ingen ventetid, ingen "opgrader venligst"-beskeder. Bare ren processorkraft lige ved hånden.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samtidige uploads",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallel behandling",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Understøttede 10-timers filer",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maksimalt 5 GB pr. fil",
      uploadAnimationText1: "50 filer",
      uploadAnimationText2: "Drop & Process",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "møde_2024.wav",
      fileBadge4: "forelæsning_fuld.mov",
      fileBadge5: "+ 46 flere filer...",
      feature2Label: "Hastighed",
      feature2TitlePart1: "Fra Upload til",
      feature2TitleHighlight: "Færdig på få timer",
      feature2Description: "Vores parallelle behandlingsinfrastruktur betyder, at dine 50 filer ikke venter i kø. De bliver alle transskriberet samtidigt. Det, der plejede at tage uger, tager nu timer.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-times fil: 5 minutter",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 filer: behandles parallelt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-mail-besked når du er færdig",
      timelineStep1Icon: "1",
      timelineStep1Title: "Upload",
      timelineStep1Time: "0 minutter",
      timelineStep2Icon: "2",
      timelineStep2Title: "Forarbejdning",
      timelineStep2Time: "5-30 minutter",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-magi",
      timelineStep3Time: "30-60 minutter",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Komplet",
      timelineStep4Time: "< 2 timer",
      feature3Label: "Frihed",
      feature3TitlePart1: "Ingen køer.",
      feature3TitleHighlight: "Ingen ventetid.",
      feature3TitlePart2: "Ingen grænser.",
      feature3Description: 'Mens andre lader dig vente i virtuelle køer eller opgradere til "prioriteret behandling", behandler vi hver upload med hast. Dit indhold er vigtigt, og det bør ikke vente.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Ingen prioriterede niveauer",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Samme hastighed for alle",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Upload når som helst, døgnet rundt",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Altid klar",
      feature3VisualSubtext: "Upload når inspirationen rammer",
      useCasesTitlePart1: "Perfekt til",
      useCasesTitleHighlight: "Tunge uploadere",
      useCasesSubtitle: "Virkelige scenarier, hvor masseupload redder dagen",
      useCase1Title: "Podcast-arkiver",
      useCase1Description: "Upload 3 års episoder på én gang. Opret transskriptioner til hele dit bagkatalog. Generer SEO-indhold til hver episode.",
      useCase2Title: "Kursusoprettelse",
      useCase2Description: "Behandl alle dine forelæsningsvideoer samtidigt. Opret tilgængelige transskriptioner for studerende. Byg søgbare kursusmaterialer.",
      useCase3Title: "Interviewefterslæb",
      useCase3Description: "Ryd op for det bjerg af utransskriberede interviews. Behandl ugers research på få timer. Overhold din deadline uden panik.",
      useCase4Title: "YouTube-bibliotek",
      useCase4Description: "Generer undertekster til hele din kanal. Opret blogindlæg ud fra videoindhold. Forbedr SEO på tværs af alle videoer.",
      useCase5Title: "Mødearkiv",
      useCase5Description: "Upload måneders optagede møder. Opret søgbare mødenotater. Mist aldrig vigtige beslutninger igen.",
      useCase6Title: "Forskningsdata",
      useCase6Description: "Behandl fokusgrupper i bulk. Transskriber alle deltagerinterviews. Analysér kvalitative data effektivt.",
      ctaTitle: "Stop med at tigge om flere uploads",
      ctaSubtitle: "Få ubegrænset massebehandling, der rent faktisk virker",
      finalCta: "Upload 50 filer nu →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Brancheførende præcision",
      heroTitleLine1: "96% nøjagtighed.",
      heroTitleHighlight: "Hvert ord tæller.",
      heroSubtitle: "Brancheførende præcision på 12 hovedsprog. Tidsstempler på ordniveau for perfekt synkronisering. Smart højttaleridentifikation, der håndterer hurtige samtaler. Professionel formatering, der rent faktisk er læsbar.",
      primaryCta: "Test vores nøjagtighed →",
      secondaryCta: "Se sprog",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Nøjagtighed i",
      statCard1DescriptionLine2: "12 hovedsprog",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Nøjagtighed med",
      statCard2DescriptionLine2: "Accenter og dialekter",
      statCard3Percentage: "100ms",
      statCard3DescriptionLine1: "Ordniveau",
      statCard3DescriptionLine2: "Tidsstempelpræcision",
      languageSectionTitlePart1: "96% nøjagtighed på 12 hovedsprog",
      languageSubtitle: "Professionel transskription til globalt indhold",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Engelsk",
      languageCard1Accuracy: "96% nøjagtighed",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spansk",
      languageCard2Accuracy: "96% nøjagtighed",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96% nøjagtighed",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Fransk",
      languageCard4Accuracy: "96% nøjagtighed",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tysk",
      languageCard5Accuracy: "96% nøjagtighed",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japansk",
      languageCard6Accuracy: "96% nøjagtighed",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreansk",
      languageCard7Accuracy: "96% nøjagtighed",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugisisk",
      languageCard8Accuracy: "96% nøjagtighed",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russisk",
      languageCard9Accuracy: "96% nøjagtighed",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiensk",
      languageCard10Accuracy: "96% nøjagtighed",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Hollandsk",
      languageCard11Accuracy: "96% nøjagtighed",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabisk",
      languageCard12Accuracy: "96% nøjagtighed",
      moreLanguagesText: "+ 88 flere sprog understøttes med 95%+ nøjagtighed",
      feature1Label: "Præcision",
      feature1TitlePart1: "Ordniveau",
      feature1TitleHighlight: "Tidsstempler",
      feature1Description: "Hvert ord er perfekt synkroniseret med dets lydposition. Opret klikbare transskriptioner, generer præcise undertekster, eller hop til præcise øjeblikke i dine optagelser. 100 ms præcision, som professionelle stoler på.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms tidsstempelpræcision",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt til videoredigering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikbare interaktive transskriptioner",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Billednøjagtige undertekster",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Højttaler 1",
      transcriptLine1Text: "Velkommen til dagens podcast-episode.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Højttaler 2",
      transcriptLine2Text: "Tak fordi jeg måtte være med i showet!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Højttaler 1",
      transcriptLine3Text: "Lad os dykke ned i vores hovedtema...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Højttaler 2",
      transcriptLine4Text: "Absolut, jeg glæder mig til at diskutere det.",
      feature2Label: "Smart AI",
      feature2TitlePart1: "Håndtag",
      feature2TitleHighlight: "Hurtige samtaler",
      feature2Description: "Vores AI identificerer præcist talere, selv under overlappende tale, afbrydelser og hurtige frem-og-tilbage-samtaler. Perfekt til interviews, podcasts og møder, hvor talere ofte afbryder.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identificerer op til 20 talere",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Håndterer afbrydelser perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fungerer med overlappende tale",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Opretholder nøjagtighed i krydstale",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Identificerede talere",
      feature2VisualSubtext: "Selv i hurtige samtaler",
      feature3Label: "Læsbarhed",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formateret tekst",
      feature3Description: "Slut med tekstmure. Vores AI tilføjer automatisk afsnit, sætninger og tegnsætning præcis der, hvor de hører hjemme. Resultatet? Transskriptioner, der rent faktisk er behagelige at læse og nemme at scanne.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smarte afsnitskift",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Præcis tegnsætning",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Korrekt brug af store bogstaver",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Rent, scanbart output",
      formattingTitle: "Før og efter",
      formattingBeforeLabel: "❌ Andre:",
      formattingBeforeText: "Så i dag skal vi tale om de nye funktioner, vi har arbejdet på. Jeg tror, du vil kunne lide dem. De er blevet efterspurgt af brugerne i lang tid, og vi fik dem endelig færdige.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Så i dag skal vi tale om de nye funktioner, vi har arbejdet på. Jeg tror, I vil synes rigtig godt om dem. De har været efterspurgt af brugere i lang tid, og vi fik dem endelig færdige.",
      comparisonSubtitle: "Nøjagtighed",
      comparisonSectionTitle: "Sammenligning",
      comparisonDes: "Se hvordan vi klarer os i forhold til konkurrenterne",
      tableHeader1: "Funktion",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Beskrivelse",
      tableHeader5: "Pastor",
      tableRow1Feature: "Nøjagtighed (klar lyd)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Tidsstempler på ordniveau",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Taleridentifikation",
      tableRow3NeverCap: "20 talere",
      tableRow3Otter: "16 højttalere",
      tableRow3Descript: "10 højttalere",
      tableRow3Rev: "✕",
      tableRow4Feature: "Håndterer krydstale",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begrænset",
      tableRow4Descript: "Begrænset",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart formatering",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Grundlæggende",
      tableRow6Feature: "12 sprog ved 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Oplev 96% nøjagtighed",
      ctaSubtitle: "Upload din mest udfordrende lydfil og se forskellen",
      finalCta: "Test vores nøjagtighed nu →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Enkel, gennemsigtig prisfastsættelse",
      "highlighted_text": "Ingen skjulte store bogstaver",
      "description": "Vælg den plan, der passer til dine behov. Opgrader eller nedgrader når som helst. Ingen kontrakter, ingen overraskelser."
    },
    Cards: {
      "title": "Enkel, gennemsigtig prisfastsættelse.",
      "highlighted_text": "Ingen skjulte bogstaver.",
      "description": "Vælg den plan, der passer til dine behov. Opgrader eller nedgrader når som helst. Ingen kontrakter, ingen overraskelser.",
      "plans": [
            {
              "name": "Gratis",
              "price": "0 kr.",
              "period": "måned",
              "discount": "Perfekt til at afprøve vores service",
              "limits": {
                "title": "Daglige grænser",
                "items": [
                  "3 filer/dag (≈90 min i alt/dag)",
                  "Op til 30 min. pr. fil (≤250 MB)",
                  "Upload 1 fil ad gangen",
                  "Standard prioritetskø"
                ]
              },
              "features": {
                "title": "Funktioner",
                "items": [
                  "100+ sprog",
                  "Højttaleretiketter",
                  "Oversættelse",
                  "Alle eksportformater"
                ]
              },
              "cta": {
                "text": "Start gratis. Intet kreditkort.",
                "button": "Start gratis"
              }
            },
            {
              "name": "Pro Månedlig",
              "price": "17,99 kr.",
              "period": "måned",
              "discount": "9,99 USD for den første måned",
              "limits": {
                "title": "Ingen månedlig grænse",
                "items": [
                  "Ubegrænset antal minutter",
                  "Op til 10 timer / 5 GB pr. fil",
                  "Upload 50 filer på én gang",
                  "Prioriteret kø"
                ]
              },
              "features": {
                "title": "Alt er gratis, plus",
                "items": [
                  "Tidsstempler på ordniveau",
                  "Avanceret højttaleridentifikation",
                  "Formaterede afsnit og tegnsætning",
                  "Prioriteret støtte"
                ]
              },
              "cta": {
                "text": "Ubegrænsede minutter. Prioriteret hastighed. Batch uploads.",
                "button": "Go Pro"
              },
              "badge": "Mest populære"
            },
            {
              "name": "Pro Årlig",
              "price": "8,99 kr.",
              "period": "måned",
              "discount": "Faktureres årligt $107,88",
              "limits": {
                "title": "Samme som Pro Monthly",
                "items": [
                  "Ubegrænset antal minutter",
                  "Op til 10 timer / 5 GB pr. fil",
                  "Upload 50 filer på én gang",
                  "Prioriteret kø"
                ]
              },
              "features": {
                "title": "Alt er gratis, plus",
                "items": [
                  "Tidsstempler på ordniveau",
                  "Avanceret højttaleridentifikation",
                  "Formaterede afsnit og tegnsætning",
                  "Prioriteret støtte"
                ]
              },
              "cta": {
                "text": "Ubegrænsede minutter. Prioriteret hastighed. Batch uploads.",
                "button": "Go Pro"
              },
              "badge": "Bedste værdi - Spar 50%"
            }
          ],
      "disclaimer": '"Ubegrænset" betyder intet månedligt loft og ingen kunstig afmatning. Fair use gælder for misbrug af automatisering eller omdistribution.'
    },
    ComparisonTable: {
      "header": {
        "title": "Sammenlign alle funktioner",
        "highlighted_text": "Alle funktioner",
        "subtitle": "Se præcis hvad du får med hver plan. Ingen skjulte begrænsninger."
      },
      "plans": [
              "Funktioner",
              "Gratis",
              "Pro Månedlig",
              "Pro Årlig"
            ],
      "features": [
            {
              "name": "Pris",
              "values": [
                "0 kr./måned",
                {
                  "main": "17,99 USD/måned",
                  "note": "9,99 USD første måned"
                },
                {
                  "main": "8,99 USD/måned",
                  "note": "Faktureret $107,88/år"
                }
              ]
            },
            {
              "name": "Månedlige minutter",
              "values": ["~2.700 (90/dag)", "Ubegrænset", "Ubegrænset"]
            },
            {
              "name": "Maksimal filvarighed",
              "values": ["30 minutter", "10 timer", "10 timer"]
            },
            {
              "name": "Maksimal filstørrelse",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Batchuploads",
              "values": ["1 fil", "50 filer", "50 filer"]
            },
            {
              "name": "Behandlingshastighed",
              "values": ["Standard", "Prioritet", "Prioritet"]
            },
            {
              "name": "Understøttede sprog",
              "values": ["100+ sprog", "100+ sprog", "100+ sprog"]
            },
            {
              "name": "Oversættelse",
              "values": ["ægte", "ægte", "ægte"]
            },
            {
              "name": "Taleridentifikation",
              "values": ["Grundlæggende", "Avanceret (20 højttalere)", "Avanceret (20 højttalere)"]
            },
            {
              "name": "Tidsstempler på ordniveau",
              "values": ["falsk", "ægte", "ægte"]
            },
            {
              "name": "Formaterede afsnit",
              "values": ["falsk", "ægte", "ægte"]
            },
            {
              "name": "Eksportformater",
              "values": ["Alle formater", "Alle formater", "Alle formater"]
            },
            {
              "name": "Støtte",
              "values": ["E-mail", "Prioriteret e-mail", "Prioriteret e-mail"]
            },
            {
              "name": "Dataopbevaring",
              "values": ["30 dage", "For altid", "For altid"]
            }
          ]
    },
    FAQ: {
      "title": "Ofte stillede",
      "titleHighligt": "Spørgsmål",
      "items": [
            {
              "q": "ubegrænset_politik",
              "question": "Er det virkelig ubegrænset?",
              "answer": "Ja! Pro-abonnementer har ingen månedlige minutgrænser. De eneste begrænsninger er tekniske: 10 timers maksimal filvarighed og 5 GB filstørrelse. Du kan behandle så mange filer, som du har brug for."
            },
            {
              "q": "plan_ændring",
              "question": "Kan jeg ændre planer når som helst?",
              "answer": "Absolut! Du kan til enhver tid opsige dit abonnement fra dit dashboard. Opgrader eller nedgrader, når du har brug for det."
            },
            {
              "q": "betalingsmetoder",
              "question": "Hvilke betalingsmetoder accepterer I?",
              "answer": "Vi accepterer alle større kreditkort, debetkort og PayPal for sikre og problemfri betalinger."
            },
            {
              "q": "gratis_prøveperiode",
              "question": "Er der en gratis prøveperiode til Pro?",
              "answer": "Ja! Prøv Pro gratis i 7 dage, uden krav om kreditkort. Få desuden 45% rabat på din første måned, når du abonnerer."
            },
            {
              "q": "filtilbageholdelse",
              "question": "Hvor længe opbevarer I mine filer?",
              "answer": "Gratis abonnement: 30 dage. Pro-abonnementer: For altid! Dine transskriptioner er altid tilgængelige på din konto."
            },
            {
              "q": "datasikkerhed",
              "question": "Hvad med datasikkerhed?",
              "answer": "Vi er SOC 2-certificerede og bruger 256-bit kryptering. Vi bruger aldrig dit indhold til at træne vores modeller. Dine data er dine."
            }
          ]
    },
    CTA: {
      "title": "Klar til at gå ubegrænset?",
      "subtitle": "Slut dig til mere end 50.000 professionelle, der transskriberer uden begrænsninger",
      "button": "Prøv NeverCap Gratis →",
      "disclaimer": "Intet kreditkort kræves • Start transskribering på få sekunder"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Bygget til",
      heavyUsers: "Storbrugere",
      whoActuallyNeed: "Hvem har egentlig brug for ubegrænset",
      heroSubtitle: "Fra podcastere med mange års efterslæb til forskere med hundredvis af interviews. Se, hvordan professionelle bruger NeverCap til at bryde fri fra uploadgrænser og minutbegrænsninger.",
      podcasters: {
        title: "Podcastere",
        pain: '"Stop med at vælge, hvilke episoder der fortjener transskriptioner"',
        description: "Upload hele dit podcastarkiv på én gang. Generer shownotater, forbedrer SEO og genbrug indhold uden at tælle minutter.",
        benefits: {
          benefit1: "Upload alle episoder, ikke kun 3",
          benefit2: "Generer SEO-venlige shownotater",
          benefit3: "Opret søgbare arkiver",
          benefit4: "Genbrug til blogindhold"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episoder"
          },
          stat2: {
            number: "200 timer",
            label: "Gemt"
          },
          stat3: {
            number: "3 gange",
            label: "SEO-trafik"
          }
        }
      },
      journalists: {
        title: "Journalister og forfattere",
        pain: '"Deadlinepres møder uploadrestriktioner"',
        description: "Upload alle interviews i batch inden deadline. Søg øjeblikkeligt på tværs af transskriptioner, og gå aldrig glip af et vigtigt citat.",
        benefits: {
          benefit1: "Batchupload før deadlines",
          benefit2: "Søg i alle interviews på én gang",
          benefit3: "Præcise citater med tidsstempler",
          benefit4: "Håndter accenter og sprog"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Interviews/md."
          },
          stat2: {
            number: "96%",
            label: "Nøjagtighed"
          },
          stat3: {
            number: "5 minutter",
            label: "Pr. time"
          }
        }
      },
      contentCreators: {
        title: "Indholdsskabere",
        pain: '"Tilgængelighed bør ikke være dyrt"',
        description: "Brug undertekster til hele din YouTube-kanal. Generer undertekster på flere sprog, og forbedr din videos SEO med det samme.",
        benefits: {
          benefit1: "Tilføj undertekster til alle videoer på én gang",
          benefit2: "249 sprogoversættelser",
          benefit3: "YouTube-klare SRT-filer",
          benefit4: "Boost SEO-rangering for videoer"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videoer"
          },
          stat2: {
            number: "100+",
            label: "Sprog"
          },
          stat3: {
            number: "249",
            label: "Oversættelser"
          }
        }
      },
      researchers: {
        title: "Forskere og akademikere",
        pain: '"Kvalitative data bør ikke vente i kø"',
        description: "Behandl hele forskningsstudier på én gang. Håndter fokusgrupper, interviews og paneldiskussioner med perfekt taleridentifikation.",
        benefits: {
          benefit1: "Procesfokusgrupper i bulk",
          benefit2: "Identifikation af 20 talere",
          benefit3: "Eksporter til analysesoftware",
          benefit4: "GDPR-kompatibel sikkerhed"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studere"
          },
          stat2: {
            number: "96%",
            label: "Gruppens nøjagtighed"
          },
          stat3: {
            number: "GDPR",
            label: "Kompatibel"
          }
        }
      },
      businessTeams: {
        title: "Forretningsteams",
        pain: '"Mødeoptagelser skal være ubesværede"',
        description: "Optag møder direkte, eller upload lydfiler til øjeblikkelig transskription. Opbyg søgbare arkiver fra et ubegrænset antal samtaler, og mist aldrig vigtige diskussioner igen.",
        benefits: {
          benefit1: "Direkte lydoptagelse og transskription",
          benefit2: "Ubegrænsede mødeoptagelser",
          benefit3: "Søgbart mødearkiv",
          benefit4: "Upload lydfiler med det samme"
        },
        stats: {
          stat1: {
            number: "Levende",
            label: "Indspilning"
          },
          stat2: {
            number: "Øjeblikkelig",
            label: "Upload"
          },
          stat3: {
            number: "20+",
            label: "Højttalere"
          }
        }
      },
      educators: {
        title: "Undervisere",
        pain: '"YouTube-videoer skal transskriberes med det samme"',
        description: "Indsæt blot YouTube-links for at få øjeblikkelige transskriptioner og automatisk genererede undertekster. Forvandl enhver uddannelsesvideo til tilgængeligt, søgbart indhold.",
        benefits: {
          benefit1: "Transskription af direkte YouTube-link",
          benefit2: "Generer automatisk videotekster",
          benefit3: "Transskriber hele kurser",
          benefit4: "Søgbare forelæsningsarkiver"
        },
        stats: {
          stat1: {
            number: "1-klik",
            label: "YouTube-indsæt"
          },
          stat2: {
            number: "Bil",
            label: "Undertekster"
          },
          stat3: {
            number: "100+",
            label: "Sprog"
          }
        }
      },
      quotes: {
        title: "Rigtige brugere,",
        titleHighlight: "Ægte frihed",
        subtitle: "Hør fra professionelle, der brød fri fra kunstige begrænsninger",
        testimonials: {
          mike: {
            textBefore: '"Jeg havde',
            highlight: "3 års episoder",
            textAfter: 'sidder utranskriberet. Otter ville have mig til at vælge 3. TRE. NeverCap lad mig uploade alle 150 episoder på én weekend."',
            name: "Mike Rodriguez",
            role: "Podcastvært"
          },
          jessica: {
            textBefore: '"Som freelancejournalist har jeg ikke råd til Trints',
            highlight: "100 kr./måned",
            textAfter: ', men jeg kan heller ikke arbejde med Otters grænse på 10 filer om måneden. NeverCap reddede min karriere."',
            name: "Jessica Park",
            role: "Freelancejournalist"
          },
          sarah: {
            textBefore: '"Vores forskerhold havde',
            highlight: "200 timer",
            textAfter: 'af fokusgruppeoptagelser. Vi behandlede alt over en weekend i stedet for at rationere månedlige minutter."',
            name: "Dr. Sarah Chen",
            role: "Ledende forsker"
          },
          carlos: {
            textBefore: '"Jeg laver undervisningsmateriale på spansk. NeverCap transskriberer perfekt og',
            highlight: "oversættes til engelsk",
            textAfter: 'for bredere rækkevidde. Ingen grænser, kun vækst."',
            name: "Carlos Martinez",
            role: "YouTube-underviser"
          }
        }
      },
      industries: {
        title: "Tillid til alle",
        titleHighlight: "Industrier",
        subtitle: "Professionelle overalt skifter til virkelig ubegrænset",
        list: {
          media: "Medier og forlag",
          education: "Undervisning",
          healthcare: "Sundhedspleje",
          technology: "Teknologi",
          finance: "Finansiere",
          legal: "Legal"
        }
      },
      cta: {
        title: "Din brugssag har også brug for ubegrænset",
        subtitle: "Slut dig til over 50.000 professionelle, der stoppede med at tælle minutter og begyndte at skabe",
        button: "Start din ubegrænsede rejse →"
      }
    },
    Podcasters: {
      badge: "🎙️ Bygget til podcastere",
      heroTitle: "Transskriber din",
      heroTitleHighlight: "Hele podcastarkivet",
      heroSubtitle: "Upload hele dit bagkatalog. Opret shownoter til hver episode. Du behøver ikke længere at vælge, hvilke episoder du vil transskribere. Behandl 50 episoder på én gang, ubegrænset antal gange om måneden.",
      ctaPrimary: "Start med at transskribere gratis",
      ctaSecondary: "Se hvordan det virker",
      trustBadge1: "🎙️ 10.000+ podcastere",
      trustBadge2: "∞ Ubegrænsede episoder",
      trustBadge3: "📝 SEO-klare transskriptioner",
      stats: {
        stat1: {
          number: "∞",
          label: "Episoder/måned"
        },
        stat2: {
          number: "50",
          label: "Batchupload"
        },
        stat3: {
          number: "10 timer",
          label: "Maksimal episodelængde"
        },
        stat4: {
          number: "96%",
          label: "Nøjagtighed"
        }
      },
      problemTitle: "De",
      problemTitleHighlight: "Problem med podcast-transskription",
      problemSubtitle: 'Andre tjenester lader dig vælge, hvilke episoder der er "værd" at transskribere',
      problems: {
        problem1: {
          title: "Uploadgrænser Dræb arkiver",
          description: "Otter giver dig 3 livstidsimporter gratis, 10 om måneden på Pro. Hvordan transskriberer man 3 års episoder?"
        },
        problem2: {
          title: "Manglende SEO-muligheder",
          description: "Hver utranskriberet episode er tabt SEO-trafik. Men Descript begrænser dig til højst 30 timer/måned."
        },
        problem3: {
          title: "Omkostningerne eksploderer med væksten",
          description: "Efterhånden som din podcast vokser, stiger transskriptionsomkostningerne voldsomt. Gebyrer på 2 dollars i timen for overforbrug gør skalering umulig."
        }
      },
      solutionTitle: "De",
      solutionTitleHighlight: "NeverCap Løsning",
      solutionDescription: "Ægte ubegrænset transkription. Upload hele dit arkiv. Transskriber hver ny episode. Generer shownotater i stor skala. Ingen begrænsninger, ingen grænser, kun vækst.",
      workflowTitle: "Din podcast-arbejdsgang,",
      workflowTitleHighlight: "Forenklet",
      workflowSubtitle: "Fra optagelse til SEO-optimerede shownotater på få minutter",
      workflow: {
        step1: {
          title: "Upload episoder",
          description: "Drop 50 episoder på én gang. MP3, MP4, WAV - vi håndterer det hele."
        },
        step2: {
          title: "AI-transkriberinger",
          description: "96% nøjagtighed med taleridentifikation. Perfekt til interviews."
        },
        step3: {
          title: "Smart formatering",
          description: "AI tilføjer afsnit, sætninger og tegnsætning automatisk."
        },
        step4: {
          title: "Udgiv og rangér",
          description: "Eksportér til din hjemmeside. Se din SEO-trafik vokse."
        }
      },
      featuresTitle: "Funktioner Podcastere",
      featuresTitleHighlight: "Faktisk brug for",
      featuresSubtitle: "Lavet af podcastere, til podcastere",
      features: {
        feature1: {
          title: "Detektion af flere højttalere",
          description: "Identificerer og navngiver automatisk op til 20 talere. Perfekt til paneldiskussioner, interviews og medværter af shows."
        },
        feature2: {
          title: "Tidsstempelkapitler",
          description: "Generer klikbare tidsstempler til YouTube-beskrivelser. Lad lyttere hoppe til deres yndlingssegmenter med det samme."
        },
        feature3: {
          title: "Smart formatering",
          description: "Tilføjer automatisk afsnit, sætninger og tegnsætning. Få rene, læsbare transskriptioner. Spar timer på efterproduktion."
        },
        feature4: {
          title: "SEO-optimering",
          description: "Transskriptioner formateret til søgemaskiner. Øg din podcasts synlighed og nå ud til nye målgrupper."
        },
        feature5: {
          title: "100+ sprog",
          description: "Transskriber på alle sprog. Oversæt til over 249 sprog. Nå ud til et globalt publikum uden besvær."
        },
        feature6: {
          title: "Batchbehandling",
          description: "Upload 50 episoder før sengetid. Vågn op for at færdiggøre transskriptioner. Behandl hele dit arkiv natten over."
        }
      },
      testimonialsTitle: "Podcastere der lavede",
      testimonialsTitleHighlight: "Kontakten",
      testimonialsSubtitle: "Ægte historier fra ægte podcastere",
      testimonials: {
        mike: {
          text: '"Jeg har lavet en podcast i 3 år og har manuelt transskriberet alt som en idiot. Uploadede 6 episoder på én gang, og det adskilte mig og min medvært perfekt. Episoden med kaffebaren, jeg troede var ødelagt? Krystalklar transskription. Jeg vil aldrig tilbage til at skrive det her ud selv."',
          name: "Mike Rodriguez",
          role: 'Vært for podcasten "The Daily Grind"'
        },
        sarah: {
          text: '"Otter begrænsede mig til 10 filimporter om måneden. Jeg har 150 episoder i efterslæb. NeverCap Lad mig uploade alt i 3 batches. Min organiske trafik er steget med 300%, siden jeg tilføjede transskriptioner til gamle episoder. Dette betaler bogstaveligt talt sig selv."',
          name: "Sarah Chen",
          role: 'Skaberen af "Tech Talks Today"'
        }
      },
      comparisonTitle: "Hvorfor podcastere vælger",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Se hvordan vi klarer os i forhold til konkurrenterne",
      comparison: {
        headers: {
          feature: "Funktion",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Beskrivelsesskaber"
        },
        rows: {
          monthlyLimit: {
            feature: "Månedlig episodegrænse",
            nevercap: "Ubegrænset",
            otter: "~13 episoder (1200 min)",
            descript: "~30 episoder (30 timer)"
          },
          uploadLimit: {
            feature: "Grænse for filupload",
            nevercap: "Ubegrænset",
            otter: "10 om måneden",
            descript: "1 ad gangen"
          },
          batchProcessing: {
            feature: "Batchbehandling",
            nevercap: "50 filer",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksimal episodelængde",
            nevercap: "10 timer",
            otter: "90 minutter",
            descript: "Ubegrænset"
          },
          speakerDetection: {
            feature: "Højttalerdetektion",
            nevercap: "20 talere",
            otter: "16 højttalere",
            descript: "10 højttalere"
          },
          smartFormatting: {
            feature: "Smart formatering",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Pris",
            nevercap: "17,99 USD/md.",
            otter: "16,99 USD/md.",
            descript: "30 kr./md."
          }
        }
      },
      ctaTitle: "Begynd at transskribere hver episode",
      ctaSubtitle: "Slut dig til 10.000+ podcastere, der aldrig bekymrer sig om grænser",
      ctaButton: "Upload dine første 50 episoder gratis →",
      ctaDisclaimer: "Intet kreditkort kræves • Behandl et ubegrænset antal episoder • Annuller når som helst"
    },
    Journalists: {
      hero: {
        badge: "📰 For journalister og forfattere",
        title: "Transskriber hvert interview.",
        titleHighlight: "Gå aldrig glip af et citat.",
        subtitle: "Stop med at vælge, hvilke interviews der fortjener transskription. Upload alle optagelser på én gang, søg på tværs af alt med det samme, og overhold dine deadlines uden upload-angsten.",
        ctaPrimary: "Start ubegrænsede uploads →",
        ctaSecondary: "Se hvordan det virker",
        stats: {
          uploads: {
            number: "∞",
            label: "Filuploads"
          },
          accuracy: {
            number: "96%",
            label: "Nøjagtighed"
          },
          speed: {
            number: "5 minutter",
            label: "Pr. time"
          }
        },
        dashboard: {
          title: "Interviewkø",
          status: "• Al behandling",
          interviews: {
            cityCouncil: {
              title: "Byrådsmøde",
              duration: "2 timer 15 minutter • Uploader...",
              action: "Forarbejdning"
            },
            expertInterview: {
              title: "Ekspertinterview - Dr. Chen",
              duration: "45 min • Transskribering...",
              action: "96% Færdig"
            },
            pressConference: {
              title: "Pressekonference",
              duration: "1 t. 30 min. • Klar",
              action: "Vis →"
            },
            phoneInterview: {
              title: "Telefoninterview - Kilde",
              duration: "35 min • Klar",
              action: "Vis →"
            }
          }
        }
      },
      problem: {
        title: "De",
        titleHighlight: "Problem med journalisttransskription",
        subtitle: 'Andre tjenester lader dig vælge, hvilke interviews der er "værd" at transskribere',
        problems: {
          uploadLimits: {
            title: "Uploadgrænser afbryder efterforskninger",
            description: "Otter giver dig 10 filimporter om måneden i Pro. Hvordan transskriberer du 3 ugers undersøgende interviews?"
          },
          missingQuotes: {
            title: "Manglende afgørende citater",
            description: "Hvert utransskriberet interview kunne indeholde historiens nøglecitat. Men Trint begrænser dig til højst 50 timer/måned."
          },
          costExplosion: {
            title: "Omkostningerne eksploderer med deadlines",
            description: "Efterhånden som din undersøgelse bliver dybere, stiger transskriptionsomkostningerne voldsomt. Overskridelsesgebyrer på 100 dollars om måneden gør det umuligt at få nyheder."
          }
        },
        solution: {
          title: "De",
          titleHighlight: "NeverCap Løsning",
          description: "Ægte ubegrænset transskription. Upload hele din undersøgelse. Transskriber alle interviews. Søg i alle citater med det samme. Ingen store bogstaver, ingen begrænsninger, kun journalistik."
        }
      },
      solution: {
        title: "Endelig,",
        titleHighlight: "Sand frihed",
        titleSuffix: "for journalister",
        subtitle: "Upload alt. Transskriber alt. Søg i alt.",
        solutions: {
          unlimitedUploads: {
            label: "Ubegrænsede uploads",
            title: "Batchupload hele din undersøgelse",
            description: "Slut med at skulle vælge, hvilke interviews der skal transskriberes. Upload 50 filer på én gang. Behandl måneders optagelser natten over. Hele din undersøgelse, transskriberet.",
            points: {
              simultaneousUpload: "Upload 50 filer samtidigt",
              noLimits: "Ingen månedlige uploadgrænser",
              processWhileWrite: "Proces mens du skriver",
              longRecordings: "Understøtter 10-timers optagelser"
            },
            visual: {
              number: "50",
              label: "Filer på én gang"
            }
          },
          instantSearch: {
            label: "Øjeblikkelig søgning",
            title: "Find et hvilket som helst tilbud på få sekunder",
            description: "Søg øjeblikkeligt i alle dine transskriptioner. Find det perfekte citat fra for tre måneder siden. Mist aldrig vigtige udsagn i dine noter igen.",
            points: {
              searchAll: "Søg på tværs af alle interviews",
              wordTimestamps: "Tidsstempler på ordniveau",
              jumpToMoments: "Spring til præcise øjeblikke",
              exportCitations: "Eksportér med citater"
            },
            searchDemo: {
              placeholder: "klimapolitisk erklæring",
              resultsText: "Fundet i 4 interviews:",
              results: {
                mayorInterview: '"...vores klimapolitik vil forandre sig..."',
                expertPanel: '"...den politiske erklæring viser tydeligt..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Professionel præcision",
            title: "96% nøjagtighed, du kan citere",
            description: "Få transskriptioner så præcise, at du kan citere dem direkte. Håndterer accenter, tekniske termer og hurtige samtaler. Perfekt formatering, der rent faktisk er læsbar.",
            points: {
              accuracyGuarantee: "96% nøjagtighedsgaranti",
              handlesAccents: "Håndterer accenter og dialekter",
              smartPunctuation: "Smart tegnsætning og afsnit",
              speakerIdentification: "Taleridentifikation"
            },
            visual: {
              accuracy: "96%",
              label: "Nøjagtighedsgrad",
              transcript: {
                speaker1: '"Undersøgelsen afslørede betydelige uoverensstemmelser i de finansielle rapporter."',
                speaker2: '"Kan du uddybe disse specifikke uoverensstemmelser?"'
              }
            }
          }
        }
      },
      features: {
        title: "Alt et",
        titleHighlight: "Journalistbehov",
        subtitle: "Professionelle værktøjer, der respekterer din arbejdsgang",
        featuresList: {
          languages: {
            title: "100+ sprog",
            description: "Interviewkilder globalt på 12 hovedsprog med 96% nøjagtighed."
          },
          exportFormats: {
            title: "Eksportformater",
            description: "Word, PDF, SRT, TXT. Kompatibel med alle arbejdsgange."
          },
          sourceProtection: {
            title: "Kildebeskyttelse",
            description: "Kryptering på bankniveau. Dine kilder forbliver fortrolige."
          },
          timestamps: {
            title: "Tidsstempler",
            description: "Klik på et citat for at hoppe til det præcise lydøjeblik."
          },
          teamSharing: {
            title: "Teamdeling",
            description: "Samarbejd med redaktører. Del transskriptioner sikkert."
          },
          mobileReady: {
            title: "Mobilklar",
            description: "Upload fra telefon. Gennemgå transskriptioner hvor som helst."
          },
          smartFormatting: {
            title: "Smart formatering",
            description: "Automatiske afsnit og tegnsætning for læsbare transskriptioner."
          },
          batchProcessing: {
            title: "Batchbehandling",
            description: "Upload 50 filer på én gang. Behandl dem natten over, mens du sover."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Jeg havde 3 års utransskriberet interviews på grund af uploadbegrænsninger. NeverCap Lad mig behandle alt på én weekend. Game changer.",
          name: "Jessica Park",
          role: "Freelancejournalist, tidligere odderbruger"
        }
      },
      cta: {
        title: "Start transskribering",
        titleHighlight: "Uden grænser",
        subtitle: "Slut dig til tusindvis af journalister, der stoppede med at tælle uploads og begyndte at fokusere på historier",
        ctaPrimary: "Prøv ubegrænset gratis →",
        ctaSecondary: "Se priser"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Til indholdsskabere",
        title: "Brug din billedtekst",
        titleHighlight: "Hele kanalen",
        titleSuffix: "Uden at tælle minutter",
        subtitle: "Stop med at vælge, hvilke videoer der fortjener undertekster. Behandl hele dit YouTube-bibliotek, generer undertekster på over 100 sprog, og hent videoer direkte fra enhver platform. Ingen månedlige begrænsninger, ingen uploadbegrænsninger – bare ren kreativ frihed.",
        ctaPrimary: "Start ubegrænset tekstning →",
        ctaSecondary: "Se hvordan det virker",
        stats: {
          videos: {
            number: "∞",
            label: "Videoer/måned"
          },
          languages: {
            number: "100+",
            label: "Sprog"
          },
          accuracy: {
            number: "96%",
            label: "Nøjagtighed"
          },
          platforms: {
            number: "10+",
            label: "Platforme"
          }
        }
      },
      platforms: {
        title: "Hent og transkriber fra enhver platform",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Google Drev",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "Alt du behøver at",
        titleHighlight: "Skalér indhold",
        subtitle: "Professionelle værktøjer uden professionelle begrænsninger",
        oneClickImport: {
          label: "Import med ét klik",
          title: "Indsæt link.",
          titleHighlight: "Hent transskription.",
          description: "Slut med at downloade og uploade igen. Bare indsæt dit YouTube-, TikTok- eller Instagram-link, og få øjeblikkelige transskriptioner. Behandl hele din kanals backlog på én weekend.",
          points: {
            directYoutube: "Transskription af direkte YouTube-link",
            multiplePlatforms: "Hent fra 10+ platforme",
            batchPlaylists: "Batchbehandling af hele afspilningslister",
            autoSync: "Automatisk synkronisering med dine kanaler"
          },
          demo: {
            instruction: "Indsæt din video-URL:",
            url: "https://youtube.com/watch?v=...",
            status: "Henter og transskriberer..."
          }
        },
        globalReach: {
          label: "Global rækkevidde",
          title: "100+ sprog.",
          titleHighlight: "Nul grænser.",
          description: "Nå ud til et globalt publikum med automatisk oversættelse til over 100 sprog. Generer undertekster på flere sprog samtidigt. Ingen ekstra gebyrer, ingen månedlige begrænsninger på oversættelser.",
          points: {
            highAccuracy: "96% nøjagtighed på 12 hovedsprog",
            unlimitedTranslations: "Ubegrænsede oversættelser inkluderet",
            multicultural: "Perfekt til multikulturelt indhold",
            autoDetect: "Automatisk registrering af kildesprog"
          },
          visual: {
            number: "100+",
            title: "Understøttede sprog",
            subtitle: "Oversæt én gang, nå ud til alle"
          }
        },
        flexibleExport: {
          label: "Fleksibel eksport",
          title: "Alle formater",
          titleHighlight: "Du har brug for",
          description: "Eksporter i det format, der fungerer til din arbejdsgang. Fra SRT-filer til YouTube til VTT til webafspillere eller redigerbare dokumenter til scripts. Al eksport er ubegrænset, alt inkluderet i alle planer.",
          points: {
            videoFormats: "SRT & VTT til videoplatforme",
            editingFormats: "DOCX og PDF til redigering",
            dataAnalysis: "CSV til dataanalyse",
            simpleScripts: "TXT til simple scripts"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "Tekst",
            docx: "DOCX",
            pdf: "PDF-fil",
            csv: "CSV-fil"
          }
        }
      },
      workflow: {
        title: "Fra Upload til",
        titleHighlight: "Udgivet",
        titleSuffix: "i minutter",
        subtitle: "Den hurtigste måde at tekste hele dit indholdsbibliotek på",
        steps: {
          pasteLinks: {
            title: "Indsæt links",
            description: "Drop YouTube, TikTok eller et hvilket som helst videolink. Eller upload filer direkte."
          },
          autoTranscribe: {
            title: "Automatisk transskribering",
            description: "AI-processer med 96% nøjagtighed. Håndterer accenter og flere talere."
          },
          editTranslate: {
            title: "Rediger og oversæt",
            description: "Perfektioner dine undertekster. Oversæt til over 100 sprog med det samme."
          },
          exportPublish: {
            title: "Eksportér og publicér",
            description: "Download i ethvert format. Upload til din platform. Færdig!"
          }
        }
      },
      testimonials: {
        title: "Skabere er",
        titleHighlight: "Skifter dagligt",
        subtitle: "Fra begrænsede planer til ubegrænset frihed",
        carlos: {
          textBefore: "Jeg laver undervisningsmateriale på spansk. NeverCap transskriberer perfekt og",
          textAfter: "for bredere rækkevidde. Ingen grænser, kun vækst. Antal visninger på min kanal steg med 3 gange efter at have tilføjet flersprogede undertekster.",
          highlight: "oversættes til engelsk",
          name: "Carlos Martinez",
          role: "YouTube Educator • 250.000 abonnenter"
        },
        sarah: {
          textBefore: "Beskrivelse ønskes $30/måned for",
          textAfter: "Jeg har mere end 500 videoer i efterslæb. NeverCap Lad mig behandle alt på én weekend. SEO-boostet fra undertekster betalte sig selv ind i den første måned.",
          highlight: "30 timer",
          name: "Sarah Lee",
          role: "Livsstilsvlogger • 180.000 abonnenter"
        },
        jake: {
          textBefore: "De",
          textAfter: "Funktionen er revolutionerende. Jeg downloader ikke længere noget. Bare indsæt, transskriber, færdig. Det har aldrig været nemmere at behandle mine podcastklip til TikTok.",
          highlight: "direkte YouTube-hentning",
          name: "Jake Wilson",
          role: "Podcastvært • Top 1%-skaber"
        },
        yuki: {
          textBefore: "Jeg skaber indhold på 5 sprog. Andre tjenester koster penge.",
          textAfter: "NeverCap giver mig ubegrænsede oversættelser. Mit internationale publikum voksede med 400%, siden jeg begyndte at bruge ordentlige, indfødte undertekster.",
          highlight: "pr. oversættelse",
          name: "Yuki Tanaka",
          role: "Spilskaber • 500.000 abonnenter"
        }
      },
      cta: {
        title: "Hele din kanal. Med tekst. I dag.",
        subtitle: "Slut dig til 50.000+ skabere, der stoppede med at tælle minutter og begyndte at skabe",
        button: "Start ubegrænset tekstning →"
      }
    },
    Researchers: {
      heroBadge: "Bygget til akademisk ekspertise",
      heroTitle1: "Transskriber hvert interview.",
      heroTitle2: "Analysér alle dine data.",
      heroSubtitle: "Stop med at vælge, hvilke fokusgrupper du skal transskribere. Behandl alle dine kvalitative data med 96% nøjagtighed og fejlfri taleridentifikation – selv med 20 deltagere, der taler i munden på hinanden.",
      heroCtaPrimary: "Prøv det gratis - Intet kreditkort",
      heroCtaSecondary: "Se hvordan det virker",
      statsInterviewHours: "Interviewtimer",
      statsAccuracy: "Nøjagtighed",
      statsSpeakersId: "Højttaler-ID",
      statsCompliant: "Kompatibel",
      problemTitle: "Problemet med forskningstransskription",
      problemSubtitle: 'Andre tjenester lader dig vælge, hvilke data der er "værd" at transskribere',
      problemCard1Title: "Uploadgrænser dræber studier",
      problemCard1Desc: "Otter giver dig 3 livstidsimporter. Hvordan transskriberer du 200 timers fokusgrupper?",
      problemCard2Title: "Manglende kritiske data",
      problemCard2Desc: "Ethvert utransskriberet interview kan indeholde banebrydende indsigter. Men Rev opkræver minimum 2 dollars/minut.",
      problemCard3Title: "Tilskudspenge forsvinder",
      problemCard3Desc: "Efterhånden som dit datasæt vokser, eksploderer transskriptionsomkostningerne. 500 dollars pr. fokusgruppe gør skalering umulig.",
      solutionTitle: "Løsningen NeverCap",
      solutionDesc: "Ægte ubegrænset transskription. Upload hele din undersøgelse. Transskriber alle interviews. Analysér alle dine data. Ingen begrænsninger, ingen begrænsninger, kun research.",
      feature1Label: "Ingen grænser",
      feature1Title: "Behandl hele din undersøgelse på én gang",
      feature1Desc: 'Upload alle 200 timers interviews i aften. Vågn op til komplette, søgbare transskriptioner. Ingen månedlige lofter, ingen begrænsninger pr. fil, intet "fair use"-vrøvl.',
      feature1Point1: "Batchupload af 50 filer samtidigt",
      feature1Point2: "Behandl longitudinelle studier fuldstændigt",
      feature1Point3: "Ingen lagringsgrænser for transskriptioner",
      feature1Point4: "Eksporter til NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Ubegrænsede timer",
      feature1Visual2: "Samme pris uanset om det er 10 eller 10.000 timer",
      feature2Label: "Smart AI",
      feature2Title: "Neglefokusgrupper hver gang",
      feature2Desc: "Vores AI sporer op til 20 talere, selv når de taler i munden på hinanden, afbryder hinandens tone eller alle taler på én gang. Hver stemme opfanges og mærkes korrekt.",
      feature2Point1: "Identifikation af 20 talere",
      feature2Point2: "Håndterer krydstale og afbrydelser",
      feature2Point3: "Højttaleretiketter, du kan omdøbe",
      feature2Point4: "Tidsstempel for hvert ord",
      conversationParticipant1: "Deltager 1",
      conversationText1: "Den største barriere, vi står over for, er helt sikkert behandlingsomkostningerne...",
      conversationParticipant2: "Deltager 2",
      conversationText2: "Absolut, men jeg vil tilføje, at adgang er—",
      conversationParticipant3: "Deltager 3",
      conversationText3: "—undskyld at jeg afbryder, men transport er også enormt vigtigt.",
      conversationText4: "Ja! Det var præcis, hvad jeg ville sige.",
      conversationParticipant4: "Deltager 4",
      conversationText5: "I landdistrikterne er det alle tre: omkostninger, adgang OG transport.",
      feature3Label: "Præcision",
      feature3Title: "96% nøjagtighed, der holder",
      feature3Desc: "Håndterer teknisk jargon, tykke accenter og feltspecifik terminologi som en professionel. Præcis nok til publikation, peer review og din afhandlingskomité.",
      feature3Point1: "Medicinsk og videnskabelig terminologi",
      feature3Point2: "100+ sprog og dialekter",
      feature3Point3: "Ordrettet og rene læsetilstande",
      feature3Point4: "Rediger og eksporter i ethvert format",
      feature3Visual1: "Nøjagtighed i forskningsklasse",
      feature3Visual2: "Tillid fra mere end 50.000 forskere",
      feature4Label: "Sikkerhed",
      feature4Title: "IRB-klar sikkerhed",
      feature4Desc: "Dine følsomme forskningsdata er beskyttet med sikkerhed i virksomhedsklassen. GDPR-kompatibel, HIPAA-klare muligheder og komplette revisionsspor for IRB-krav.",
      feature4Point1: "End-to-end kryptering",
      feature4Point2: "GDPR- og CCPA-kompatibel",
      feature4Point3: "Politikker for automatisk sletning",
      feature4Point4: "Sikkert teamsamarbejde",
      useCasesTitle: "Perfekt til alle forskningsmetoder",
      useCasesSubtitle: "Fra etnografi til kliniske forsøg",
      useCase1Title: "Fokusgrupper",
      useCase1Desc: "Håndter 8-20 deltagere med overlappende tale. Perfekt identifikation af talere, selv under ophedede diskussioner. Eksporter direkte til kvalitativ analysesoftware.",
      useCase2Title: "Dybdegående interviews",
      useCase2Desc: "Behandl hundredvis af en-til-en-interviews samtidigt. Oprethold ensartethed på tværs af hele dit datasæt. Søg på tværs af alle transskriptioner med det samme.",
      useCase3Title: "Klinisk forskning",
      useCase3Desc: "HIPAA-kompatible muligheder for patientinterviews. Præcis transskription af medicinsk terminologi. Sikker håndtering af følsomme sundhedsdata.",
      useCase4Title: "Etnografiske studier",
      useCase4Desc: "Feltoptagelser i naturlige omgivelser. Håndter baggrundsstøj og flere talere. Understøttelse af over 100 sprog og dialekter.",
      useCase5Title: "Mundtlige historieprojekter",
      useCase5Desc: "Bevar hele arkiver uden begrænsninger. Opret søgbare historiske optegnelser. Perfekt til longitudinelle og generationsbaserede studier.",
      useCase6Title: "Afhandlingsforskning",
      useCase6Desc: "Studievenlig pris med alle funktioner. Behandl hele dit datasæt til en overkommelig pris. Overhold stramme deadlines med batchbehandling.",
      testimonialTitle: "Tillid fra førende forskere",
      testimonialText: "Vores forskerteam havde 200 timers fokusgruppeoptagelser fra vores undersøgelse af folkesundhed. Andre tjenester ønskede, at vi skulle vælge, hvilke sessioner vi skulle transskribere, på grund af omkostningerne. NeverCap lod os behandle alt i løbet af en weekend. Identifikationen af 20 talere fungerede faktisk – selv under vores mest rodede diskussioner, hvor alle talte på én gang. Dette værktøj har fuldstændig ændret, hvordan vi håndterer kvalitative data.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Ledende forsker, Institut for Folkesundhed",
      ctaTitle: "Stop med at vælge, hvilke data du vil analysere",
      ctaSubtitle: "Slut dig til 50.000+ forskere, der transskriberer alt",
      ctaButton: "Prøv NeverCap Gratis"
    },
    BusinessTeams: {
      heroBadge: "For forretningsteams",
      heroTitle1: "Mødeoptagelse foretaget",
      heroTitle2: "Ubesværet",
      heroSubtitle: "Optag møder direkte i din browser, eller upload lydfiler med det samme. Opbyg søgbare arkiver fra ubegrænsede samtaler. Mist aldrig vigtige diskussioner igen med virkelig ubegrænset transskription.",
      heroCtaPrimary: "Start optagelse nu →",
      heroCtaSecondary: "Se hvordan det virker",
      recordingStatus: "Indspilning...",
      statsMeetingMinutes: "Mødereferat",
      statsLiveRecording: "Liveoptagelse",
      statsSpeakerID: "Højttaler-ID",
      statsInstantUpload: "Øjeblikkelig upload og proces",
      featuresTitle: "Alt hvad teams behøver for at indsamle viden",
      featuresSubtitle: "Fra liveoptagelser til øjeblikkelige uploads har vi elimineret alle friktionspunkter",
      feature1Title: "Optag direkte i din browser",
      feature1Desc: "Ingen downloads, ingen plugins. Start optagelsen med det samme med et enkelt klik. Perfekt lydkvalitet, automatisk højttalerregistrering og transskription i realtid, mens du taler.",
      feature1Benefit1: "Start af optagelse med et enkelt klik",
      feature1Benefit2: "Ingen softwareinstallation",
      feature1Benefit3: "Fungerer på enhver enhed",
      feature1Benefit4: "Transskription i realtid",
      feature1Visual1: "Klik og optag",
      feature1Visual2: "Ingen opsætning nødvendig",
      feature2Title: "Upload enhver lydfil med det samme",
      feature2Desc: "Har du optagelser fra Zoom, Teams eller din telefon? Upload dem med det samme. Understøtter alle større lyd- og videoformater. Behandl flere filer samtidigt uden ventetid.",
      feature2Benefit1: "Understøtter: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Batch-upload-funktion",
      feature2Benefit3: "Understøttede 10-timers filer",
      feature2Benefit4: "Proces mens du arbejder",
      feature2Visual1: "Træk og slip filer",
      feature3Title: "Bygget til teamsamarbejde",
      feature3Desc: "Del transskriptioner med dit team med det samme. Lyt til optagelser sammen, eksporter transskriptioner i flere formater, og sørg for, at alle er på linje med søgbare mødearkiver.",
      feature3Benefit1: "Del transskriptioner med alle",
      feature3Benefit2: "Lyt til originale optagelser",
      feature3Benefit3: "Eksporter transskriptioner i flere formater",
      feature3Benefit4: "Søgbare arkiver for hele teamet",
      feature3Visual1: "Teammedlemmer",
      feature3Visual2: "Ubegrænset samarbejde",
      feature4Title: "Find enhver samtale med det samme",
      feature4Desc: "Søg på tværs af alle dine møder på én gang. Find den afgørende beslutning fra sidste kvartal eller det kundekrav fra måneder siden. AI-drevet søgning forstår kontekst, ikke kun nøgleord.",
      feature4Benefit1: "Søg i alle møder på én gang",
      feature4Benefit2: "AI forstår kontekst",
      feature4Benefit3: "Filtrer efter taler eller dato",
      feature4SearchPlaceholder: "🔍 Søg: 'Omsætningsmål for 4. kvartal'",
      feature4SearchResults: "Fundet på 3 møder:",
      feature4Meeting1: "Salgsplanlægning - 15. oktober",
      feature4Meeting1Text: '"...mål for 4. kvartal er sat til 2 millioner dollars..."',
      feature4Meeting2: "Bestyrelsesmøde - 20. oktober",
      feature4Meeting2Text: '"...Omsætningsprognoser for 4. kvartal..."',
      workflowTitle: "Fra optagelse til handlingsrettet indsigt",
      workflowSubtitle: "En problemfri arbejdsgang, der indfanger alle vigtige øjeblikke",
      workflowStep1Title: "Optag eller upload",
      workflowStep1Desc: "Start liveoptagelse eller upload eksisterende lydfiler",
      workflowStep2Title: "Automatisk transskribering",
      workflowStep2Desc: "AI transkriberer med 96% nøjagtighed på få minutter",
      workflowStep3Title: "Samarbejde",
      workflowStep3Desc: "Del, kommenter og udtræk handlingspunkter",
      workflowStep4Title: "Søg og analyser",
      workflowStep4Desc: "Få indsigt på tværs af alle dine møder",
      testimonialsTitle: "Holdene elsker NeverCap",
      testimonialsSubtitle: "Se hvordan virksomheder transformerer deres mødekultur",
      testimonial1Text: '"Vi gik fra at overse afgørende detaljer til at have et søgbart arkiv over hver samtale. Funktionen til direkte optagelse betyder, at vi aldrig glemmer at optage vigtige diskussioner."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktchef, TechCorp",
      testimonial2Text: '"Otter begrænsede os til 10 filuploads om måneden. Nu uploader vi alle vores klientopkald med det samme. Det vendte banen for vores salgsteams opfølgninger."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Salgsdirektør, ConsultPro",
      testimonial3Text: '"Muligheden for at søge på tværs af måneders møder reddede os under vores revision. Fandt alle beslutninger og godkendelser på få sekunder."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Driftschef, Finanshub",
      ctaTitle: "Stop med at miste vigtige samtaler",
      ctaSubtitle: "Slut dig til tusindvis af teams, der optager hvert møde med ubegrænset transskription",
      ctaButton: "Start optagelse gratis →"
    },
    Educators: {
      heroBadge: "Til undervisere og lærere",
      heroTitle1: "Lav enhver undervisningsvideo om til",
      heroTitle2: "Tilgængeligt indhold",
      heroSubtitle: "Indsæt blot YouTube-links for at få øjeblikkelige transskriptioner med automatisk genererede undertekster. Omdan forelæsninger, vejledninger og uddannelsesvideoer til søgbart og tilgængeligt indhold, som alle studerende kan lære af.",
      heroCtaPrimary: "Prøv det gratis - Intet kreditkort",
      heroCtaSecondary: "Se demo",
      stats1Number: "1-klik",
      stats1Label: "YouTube-transskription",
      stats2Number: "100+",
      stats2Label: "Understøttede sprog",
      stats3Number: "∞",
      stats3Label: "Ubegrænsede videoer",
      stats4Number: "96%",
      stats4Label: "Nøjagtighedsgrad",
      featuresTitle: "Alt hvad undervisere har brug for til videotransskription",
      featuresSubtitle: "Fra YouTube-forelæsninger til optagede klasser – gør alt dit indhold tilgængeligt",
      feature1Title: "Øjeblikkelige YouTube- og platformlinks",
      feature1Desc: "Indsæt blot et hvilket som helst videolink, og få transskriptioner med det samme. Fungerer med YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive og flere. Ingen download, ingen ventetid.",
      feature1Point1: "Transskription med direkte link - ingen download nødvendig",
      feature1Point2: "Understøttelse af alle større platforme",
      feature1Point3: "Behandl hele afspilningslister på én gang",
      feature1Point4: "Fungerer med private videoer (med tilladelse)",
      feature2Title: "Automatisk generering af undertekster",
      feature2Desc: "Opret øjeblikkeligt præcise undertekster til alle dine undervisningsvideoer. Gør indhold tilgængeligt for elever med hørehæmning, ikke-modersmålstalende eller dem, der foretrækker at læse med.",
      feature2Point1: "SRT-, VTT- og TXT-eksportformater",
      feature2Point2: "Tidsstempler på ordniveau for perfekt synkronisering",
      feature2Point3: "Rediger og tilpas nemt billedtekster",
      feature2Point4: "Upload direkte tilbage til YouTube",
      feature2Visual1: "Sprogoversættelser",
      feature2Visual2: "Gør dit indhold globalt tilgængeligt",
      feature3Title: "Organiser efter kurser og kategorier",
      feature3Desc: "Opret mapper for at organisere dine udskrifter efter kursus, emne eller semester. Hold alt dit uddannelsesindhold pænt kategoriseret og let søgbart. Opbyg et omfattende bibliotek af tilgængelige kursusmaterialer.",
      feature3Point1: "Opret et ubegrænset antal mapper og undermapper",
      feature3Point2: "Tag videoer efter emne eller sværhedsgrad",
      feature3Point3: "Masseorganiser flere transskriptioner",
      feature3Point4: "Søg øjeblikkeligt i alt dit indhold",
      feature3VisualTitle: "Dit kursusbibliotek",
      feature3Folder1: "Matematik 101",
      feature3Folder2: "Fysikforelæsninger",
      feature3Folder3: "Biologilaboratorievideoer",
      feature3Folder4: "Historiske dokumentarer",
      feature3Folder5: "Sprogindlæring",
      feature4Title: "Eksporter i ethvert format, du har brug for",
      feature4Desc: "Download transskriptioner i TXT-, DOCX- eller PDF-formater. Perfekt til at oprette studievejledninger, forelæsningsnotater eller tilgængelige kursusmaterialer. Del med studerende eller integrer i dit læringsstyringssystem.",
      feature4Point1: "TXT til simpel tekstredigering",
      feature4Point2: "DOCX til formaterede dokumenter",
      feature4Point3: "PDF til nem deling og udskrivning",
      feature4Point4: "Masseeksport af flere filer på én gang",
      workflowTitle: "Sådan fungerer det",
      workflowSubtitle: "Fra videolink til tilgængelig transskription på få minutter",
      workflowStep1Title: "Indsæt link",
      workflowStep1Desc: "Kopier en URL til en hvilken som helst uddannelsesvideo, og indsæt den",
      workflowStep2Title: "Automatisk transskribering",
      workflowStep2Desc: "AI transkriberer med 96% nøjagtighed",
      workflowStep3Title: "Generer billedtekster",
      workflowStep3Desc: "Opret automatisk perfekt synkroniserede undertekster",
      workflowStep4Title: "Del og eksporter",
      workflowStep4Desc: "Download eller del med eleverne",
      useCasesTitle: "Perfekt til ethvert uddannelsesbehov",
      useCasesSubtitle: "Se hvordan undervisere bruger NeverCap til at forbedre læring",
      useCase1Title: "Optagede forelæsninger",
      useCase1Text: "Transskriber hele semestre af optagede forelæsninger. Studerende kan søge efter specifikke emner, gennemgå nøglebegreber og aldrig gå glip af vigtig information.",
      useCase2Title: "Onlinekurser",
      useCase2Text: "Gør dine onlinekurser tilgængelige for internationale studerende med oversættelser på over 100 sprog. Øg tilmeldingen og tilfredsheden.",
      useCase3Title: "Studiematerialer",
      useCase3Text: "Konverter videovejledninger til læsbare studievejledninger. Perfekt til studerende, der foretrækker at læse eller har brug for at gennemgå indhold hurtigt.",
      useCase4Title: "Overholdelse af tilgængelighed",
      useCase4Text: "Opfyld tilgængelighedskravene ved at levere undertekster og transskriptioner til alt videoindhold. Sørg for lige adgang for alle elever.",
      useCase5Title: "Omvendt klasseværelse",
      useCase5Text: "Del videoforelæsninger med transskriptioner før undervisningen. Studerende kan gennemgå dem i deres eget tempo og komme forberedte til diskussioner.",
      useCase6Title: "Forskning og citater",
      useCase6Text: "Hjælp eleverne med at citere videokilder præcist med tidsstempler. Perfekt til forskningsprojekter og akademiske opgaver.",
      testimonialTitle: "Tillid fra mere end 50.000 undervisere",
      testimonialSubtitle: "Se hvorfor lærere verden over vælger NeverCap",
      testimonialText: '"Jeg har brugt NeverCap til at transskribere hele min YouTube-kanal med matematikvejledninger. Det, der plejede at tage uger med andre tjenester, tager nu timer. Muligheden for at indsætte links direkte og få øjeblikkelige transskriptioner har transformeret den måde, jeg skaber tilgængeligt indhold på. Mine internationale studerende elsker især de flersprogede undertekster!"',
      testimonialAuthorName: "Professor Karen Mitchell",
      testimonialAuthorRole: "Matematikprofessor, online underviser",
      ctaTitle: "Gør alt dit uddannelsesindhold tilgængeligt",
      ctaSubtitle: "Slut dig til tusindvis af undervisere, der bruger ubegrænset transskription",
      ctaButton: "Prøv NeverCap Gratis"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Download YouTube-videoer som MP4",
        "placeholder": "Søg eller indsæt dit YouTube-link her",
        "clear_icon": "Ryd input",
        "Download": "Download",
        "loading_text": "Behandler linket til download. Bliv på siden.",
        "howToDownload": "Hvordan downloader man?",
        "tutorial": "Se vejledningen"
      },
      part2: {
        "title": "Sådan konverterer du en YouTube-video til en MP4-fil, der kan downloades, i 3 nemme trin",
        "steps": [
                {
                  title: "Kopiér URL'en",
                  content: "Åbn din ønskede YouTube-video, og kopier derefter linket fra din browsers adresselinje."
                },
                {
                  title: "Indsæt linket",
                  content: "Gå til dit videodownloadværktøj og indsæt URL'en i dets inputfelt."
                },
                {
                  title: "Download MP4-filen",
                  content: "Når den er behandlet, skal du trykke på download-knappen for at gemme din MP4-fil."
                }
              ]
      },
      part3: {
        content: [
                "Har du nogensinde haft brug for at se YouTube-videoer offline?",
                "Uanset om du pendler med metroen, flyver med et fly, studerer en vigtig tutorial, dykker ned i færdighedsopbyggende indhold eller arkiverer vigtigt videomateriale – er det en almindelig frustration at have pålidelig offlineadgang. Det er her, vores downloader skinner.",
                "Downloadprogrammet lader dig hurtigt og nemt konvertere YouTube-videoer til MP4-format til download. Gem dem på din enhed, og se dem når som helst.",
                "Processen er hurtig, enkel og problemfri. Når den er downloadet, kan du nyde dine yndlingsvideoer, når som helst og hvor som helst du er – uden behov for internet."
              ]
      },
      part4: {
        content: ["Her er de 5 største fordele ved at downloade", "YouTube-videoer som MP4-filer"],
        list: [
                {
                  title: "Spar på dataomkostninger:",
                  content: "Normalt bruger det at se videoer på YouTube en betydelig mængde mobildata. Ved at downloade dem til offlinevisning kan du undgå disse unødvendige omkostninger."
                },
                {
                  title: "Se hvor som helst, når som helst:",
                  content: "Nyd dine videoer problemfrit, selv med ustabile internetforbindelser. Slut med bekymringer om buffering."
                },
                {
                  title: "Nem arkivering og bevaring:",
                  content: "At gemme videoer som MP4-filer gør det nemt at opbygge din personlige samling, især indhold, du finder virkelig værdifuldt eller vigtigt."
                },
                {
                  title: "Enklere deling:",
                  content: "Det er meget mere praktisk at dele en MP4-fil end at sende et link. Du kan sende videofilen direkte via apps som WhatsApp eller Instagram, hvilket eliminerer det ekstra trin med at åbne YouTube."
                },
                {
                  title: "Øjeblikkelig visning, delte øjeblikke:",
                  content: "Vil I begejstret vise en yndlingsvideo til venner eller familie i nærheden? Når I har downloadet MP4-filen, kan I alle se den problemfrit sammen med det samme, uden akavede pauser i ventetiden på, at den indlæses."
                }
              ]
      },
      part5: {
        title: "Hvorfor vores downloader skiller sig ud",
        cards: [
                {
                  title: "Enkelhed med ét klik",
                  content: "Nem opsætning og intuitiv betjening."
                },
                {
                  title: "Lynhurtig, ubegrænset",
                  content: "Konverter og download med tophastighed — ingen begrænsninger, ingen begrænsninger."
                },
                {
                  title: "Konvertér på farten",
                  content: "Behandl dine filer med det samme, ingen ventetid."
                },
                {
                  title: "Nul annoncer, nul distraktioner",
                  content: "Nyd en ren brugerflade uden pop op-vinduer, bannere eller afbrydelser – kun problemfri videokonvertering."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Original kvalitet garanteret",
                  content: "Dine downloads bevarer kildevideoens fulde opløsning for pixelperfekt afspilning hver gang."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fungerer overalt",
                  content: "Fuldt kompatibel med enhver browser, på enhver enhed."
                }
              ]
      },
      part6: {
        title: ["Maksimér dine YouTube-videodownloads", "Med downloaderen"],
        content: [
                "Nem YouTube til MP4-konvertering: Hurtig, enkel og gratis.",
                "Det er her, vi udmærker os. Vores brugervenlige grænseflade er designet til alle – ingen tekniske færdigheder kræves. Uanset dit erfaringsniveau kan du konvertere videoer med det samme. Ingen tilmelding nødvendig: Få præcis det, du har brug for, med det samme.",
                "Du kan være sikker på, at dine downloadede MP4-filer bevarer den originale videokvalitet og klarhed, præcis som du så dem på YouTube.",
                "Fungerer overalt. Fuldt kompatibel på tværs af alle større platforme og enheder. Uanset om du bruger Windows, macOS, Linux, Android eller iOS – og bruger en smartphone, tablet eller desktop – kan du downloade videoer problemfrit."
              ]
      },
      part7: {
        title: "Vigtige spørgsmål om download af YouTube-videoer",
        list: [
                {
                  question: "Kan jeg downloade en YouTube-video, hvis den er ophavsretligt beskyttet?",
                  answer: "Det er ulovligt at downloade ophavsretligt beskyttede YouTube-videoer uden ophavsretsindehaverens tilladelse."
                },
                {
                  question: "Er dette downloadværktøj sikkert?",
                  answer: "Ja, det er sikkert og troværdigt. Vi kræver ingen personlige oplysninger fra brugerne og tager strenge foranstaltninger mod virus. Vi minder dig om altid at være forsigtig, når du downloader filer fra internettet: undgå at klikke på mistænkelige links eller downloade tvivlsomme filer."
                },
                {
                  question: "Hvilke sprog understøttes af YouTube til MP4-download?",
                  answer: "Vores tjeneste understøtter download af YouTube-videoer på alle populære sprog."
                },
                {
                  question: "Hvilke faktorer påvirker den tid det tager at downloade en YouTube-video?",
                  answer: "Selvom vi sikrer den hurtigst mulige downloadoplevelse, påvirkes downloadtiden også af faktorer som videoens længde og din internetforbindelses hastighed."
                },
                {
                  question: "Når jeg downloader en MP4-video med min smartphone, hvor gemmes den så?"
                },
                {
                  question: "Forringer download af YouTube-video som MP4 videokvaliteten?",
                  answer: "Nej. Download af YouTube-videoer som MP4 ved hjælp af vores værktøj bevarer den originale videokvalitet. Konverteringsprocessen bevarer kildekvaliteten, hvilket sikrer, at du får den samme seeroplevelse som på YouTube."
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Brancheførende AI-teknologi",
      "title": "Om",
      "highlighted_text": "NeverCap",
      "description": "Vores mission er at levere de mest præcise transskriptionstjenester for lyd og video. Ved at udnytte brancheførende AI-teknologi opnår vi transskriptionsnøjagtigheder på over 96 %. For nogle større sprog kan vi gennem teknisk optimering endda nå 99 % nøjagtighed."
    },
    Stats: {
      "title": "Vores",
      "highlighted_text": "Indvirkning",
      "subtitle": "Styrkelse af global kommunikation med banebrydende AI-teknologi",
      "metrics": [
            {
              "value": "96%+",
              "label": "Nøjagtighedsgrad",
              "description": "Brancheførende transkriptionsnøjagtighed med avanceret AI"
            },
            {
              "value": "100+",
              "label": "Understøttede sprog",
              "description": "Taleordsgenkendelse til globalt indhold"
            },
            {
              "value": "249+",
              "label": "Oversættelsessprog",
              "description": "Oversæt transskriberet tekst til stort set alle sprog"
            }
          ]
    },
    Mission: {
      "title": "Hvorfor vælge",
      "highlighted_text": "NeverCap",
      "subtitle": "Vi tror på at nedbryde sprogbarrierer og gøre indhold tilgængeligt for alle",
      "features": [
            {
              "icon": "🎯",
              "title": "Uovertruffen præcision",
              "description": "Vores AI-modeller forbedres løbende for at levere transkriptionsnøjagtigheder på over 96 %, hvor nogle større sprog når op til 99 % nøjagtighed gennem avanceret optimering."
            },
            {
              "icon": "🌍",
              "title": "Global sprogstøtte",
              "description": "Understøttelse af over 100 sprog inden for talegenkendelse og oversættelsesfunktioner til mere end 249 sprog, hvilket gør dit indhold virkelig globalt."
            },
            {
              "icon": "⚡",
              "title": "Lynhurtig behandling",
              "description": "Behandl timevis af lyd- og videoindhold på få minutter, ikke timer. Vores optimerede AI-pipeline sikrer, at du får dine transskriptioner hurtigt uden at gå på kompromis med kvaliteten."
            },
            {
              "icon": "🔒",
              "title": "Sikkerhed i virksomhedsklassen",
              "description": "Din datasikkerhed er vores prioritet. Vi bruger branchestandardkryptering og overholder globale privatlivsregler for at holde dit indhold sikkert og fortroligt."
            }
          ]
    },
    Company: {
      "title": "Selskab",
      "highlighted_text": "Information",
      "subtitle": "Kontakt os for eventuelle spørgsmål eller support",
      "details": [
            {
              "label": "Firmanavn",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Hovedkvarter",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Forenede Stater"]
            },
            {
              "label": "Kontakt os",
              "value": ["e-mail", "Support tilgængelig 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Klar til at opleve forskellen?",
      "subtitle": "Slut dig til tusindvis af professionelle, der stoler på NeverCap til deres transskriptionsbehov",
      "button": "Prøv NeverCap Gratis →",
      "disclaimer": "Intet kreditkort kræves • Start transskribering på få sekunder"
    }
  },
  Privacy: {
    title: "Privatliv",
    titleGradient: "Politik",
    subtitle: "Lær hvordan vi indsamler, bruger og beskytter dine personlige oplysninger",
    "lastUpdated": "Sidst opdateret: {dato}",
    "lastUpdatedDate": "21. juli 2025",
    "privacyPolicyTitle": "Privatlivspolitik",
    "policyDescription": 'Denne politik beskriver, hvordan NeverCap (herefter benævnt "NeverCap", "vores", "vi", "os") indsamler, bruger og videregiver dine personlige oplysninger, når du bruger vores tjenester, websteder (https://www.nevercap.ai/) og software (samlet kaldet "Tjenesterne").',
    "policyAgreement": "Læs venligst denne privatlivspolitik omhyggeligt og sørg for, at du forstår den. Ved at bruge en af vores tjenester accepterer du denne privatlivspolitik. Hvis du ikke accepterer vores brug af dine personoplysninger i overensstemmelse med denne politik, skal du straks stoppe med at bruge vores tjenester.",
    "policyOverview": "I denne politik beskriver vi: hvilke data vi indsamler og hvorfor; hvordan dine data håndteres; og dine rettigheder i forhold til dine data. Vi sælger ikke dine data.",
    "scopeTitle": "1. Omfanget af denne privatlivspolitik",
    "scopeDescription": "Denne privatlivspolitik gælder kun for vores indsamling og behandling af oplysninger om brugere af Tjenesterne. Denne privatlivspolitik gælder ikke for tjenester, websteder eller software, der drives af tredjeparter, og som er linket til os (uanset om vi leverer disse links, eller om andre brugere deler dem), og den gælder heller ikke for indhold, data, applikationer eller materialer fra tredjeparter. Vi anbefaler, at du tjekker privatlivspolitikkerne for tredjepartswebsteder eller -software, før du giver dem oplysninger.",
    "collectionTitle": "2. Hvad vi indsamler og hvorfor",
    "collectionPrinciple": "Vores ledende princip er kun at indsamle det, vi har brug for. Her er, hvad det betyder i praksis:",
    "identityTitle": "2.1 Identitet og adgang",
    "identityDescription": "Når du tilmelder dig et af vores produkter, beder vi om identificerende oplysninger såsom dit navn og din e-mailadresse. Dette er for at kunne levere essentiel produktfunktionalitet og sende dig produktopdateringer og andre vigtige oplysninger.",
    "billingTitle": "2.2 Faktureringsoplysninger",
    "billingDescription": "Hvis du tilmelder dig et betalt produkt, vil du blive bedt om at angive dine betalingsoplysninger og faktureringsadresse. Betalingsoplysningerne sendes direkte til vores betalingsudbyder og når ikke vores servere.",
    "productInteractionsTitle": "2.3 Produktinteraktioner",
    "productInteractionsDescription": "Vi gemmer det indhold, du uploader, modtager eller vedligeholder på dine produktkonti, på vores servere. Medmindre du sletter dette indhold, kan vi gemme det, så længe din konto er aktiv.",
    "websiteInteractionsTitle": "2.4 Webstedsinteraktioner",
    "websiteInteractionsDescription": "Vi indsamler oplysninger om din browsingaktivitet til analyse- og statistiske formål, såsom test af konverteringsfrekvens og eksperimentering med nye produktdesigns. Dette omfatter f.eks. dine browser- og operativsystemversioner, din IP-adresse, hvilke websider du har besøgt, og hvor lang tid de tog at indlæse, og hvilket websted der henviste dig til os. Hvis du har en konto og er logget ind, er disse webanalysedata knyttet til din IP-adresse og brugerkonto, indtil din konto ikke længere er aktiv.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Vi bruger også permanente førstepartscookies og nogle tredjepartscookies til at gemme bestemte præferencer, gøre det nemmere for dig at bruge vores applikationer og udføre A/B-test samt understøtte visse analyser.",
    "cookiesDescription2": "En cookie er et stykke tekst, der gemmes af din browser. Den kan hjælpe med at huske loginoplysninger og webstedspræferencer. Den kan også indsamle oplysninger såsom din browsertype, operativsystem, besøgte websider, besøgets varighed, set indhold og andre klikdata. Du kan justere indstillinger for cookieopbevaring og acceptere eller blokere individuelle cookies i dine browserindstillinger, selvom vores apps ikke fungerer, og andre aspekter af vores tjeneste muligvis ikke fungerer korrekt, hvis du slår cookies fra.",
    "correspondenceTitle": "2.6 Frivillig korrespondance",
    "correspondenceDescription": "Når du sender os en e-mail med et spørgsmål eller for at bede om hjælp, gemmer vi denne korrespondance, inklusive din e-mailadresse, så vi har en historik over tidligere korrespondance, som vi kan bruge, hvis du kontakter os i fremtiden.",
    "accessTitle": "3. Hvornår vi tilgår eller deler dine oplysninger",
    "accessDescription1": "For at levere produkter eller tjenester, du har anmodet om. Vi bruger nogle tredjeparts underdatabehandlere til at hjælpe med at køre vores applikationer og levere tjenesterne til dig. Dette inkluderer cloud- og analyseudbydere.",
    "accessDescription2": "At undersøge, forebygge eller træffe foranstaltninger vedrørende misbrug. Adgang til en kundes konto i forbindelse med undersøgelse af potentielt misbrug er en sidste udvej. Vi ønsker at beskytte privatlivets fred og sikkerheden for både vores kunder og de personer, der rapporterer problemer til os, og vi gør vores bedste for at afbalancere disse ansvarsområder gennem hele processen. Hvis vi opdager, at du bruger vores produkter til et begrænset formål, vil vi træffe nødvendige foranstaltninger, herunder underrette de relevante myndigheder, hvor det er berettiget.",
    "accessDescription3": "Når det er påkrævet i henhold til gældende lov.",
    "dataRequests": "Anmodninger om brugerdata. Vores politik er ikke at svare på anmodninger fra myndigheder om brugerdata, medmindre vi er tvunget til det af en juridisk proces eller under begrænsede omstændigheder i tilfælde af en nødsituation. Hvis amerikanske retshåndhævende myndigheder har den nødvendige kendelse, strafferetlige stævning eller retskendelse, der kræver, at vi deler data, skal vi dog overholde dette. Ligeledes vil vi kun svare på anmodninger fra myndigheder uden for USA, hvis den amerikanske regering tvinger os til det gennem procedurer, der er beskrevet i en traktat eller aftale om gensidig retshjælp. Det er vores politik at underrette berørte brugere, før vi deler data, medmindre vi er juridisk forbudt at gøre det, og undtagen i visse nødsituationer.",
    "preservationRequests": "Anmodninger om bevarelse. Ligeledes er det vores politik kun at efterkomme anmodninger om at bevare data, hvis det er påkrævet af den amerikanske Federal Stored Communications Act, 18 USC Section 2703(f), eller af en behørigt forkyndt amerikansk stævning i civile sager. Vi deler ikke bevarede data, medmindre det er påkrævet ved lov eller påkrævet af en retskendelse, som vi vælger ikke at anke. Derudover vil vi, medmindre vi modtager en behørig kendelse, retskendelse eller stævning, inden den krævede bevarelsesperiode udløber, destruere alle bevarede kopier af kundedata ved udgangen af bevarelsesperioden.",
    "taxAudits": "Hvis vi bliver revideret af en skattemyndighed, kan vi være forpligtet til at dele faktureringsrelaterede oplysninger. Hvis det sker, deler vi kun det minimum, der er nødvendigt, såsom faktureringsadresser og oplysninger om skattefritagelse.",
    "securityTitle": "4. Sådan sikrer vi dine data",
    "securityDescription": "Alle data krypteres via SSL/TLS, når de overføres fra vores servere til din browser.",
    "deletionTitle": "5. Hvad sker der, når du sletter dit indhold",
    "deletionDescription": "Hvis du sletter indhold, bliver det øjeblikkeligt utilgængeligt.",
    "locationTitle": "6. Placering af websted og data",
    "locationDescription": "Vores produkter og andre web-ejendomme drives i USA. Hvis du befinder dig i Den Europæiske Union, Storbritannien eller andre steder uden for USA, skal du være opmærksom på, at alle oplysninger, du giver os, vil blive overført til og gemt i USA. Ved at bruge vores websteder eller tjenester og/eller give os dine personlige oplysninger, accepterer du denne overførsel.",
    "childrenTitle": "7. Børns privatliv",
    "childrenDescription": "Tjenesterne er ikke rettet mod børn, og vi indsamler ikke bevidst personlige oplysninger fra børn under 13 år. Hvis du er under 13 år, bedes du ikke indsende personlige oplysninger via Tjenesterne. Hvis du mener, at et barn har givet os personlige oplysninger i strid med denne politik, bedes du kontakte os som angivet nedenfor.",
    "updatesTitle": "8. Opdateringer af denne privatlivspolitik",
    "updatesDescription": "Vi kan opdatere denne politik efter behov for at overholde relevante regler og afspejle eventuelle nye praksisser. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side.",
    "contactTitle": "9. Kontakt os",
    "contactDescription": "Hvis du har spørgsmål, kommentarer eller klager vedrørende vores privatlivspolitik, bedes du kontakte os, og vi vil bestræbe os på at behandle din klage hurtigst muligt.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Vilkår for",
    titleGradient: "Service",
    subtitle: "Læs venligst disse vilkår omhyggeligt, inden du bruger vores tjenester",
    "lastUpdated": "Sidst opdateret: {dato}",
    "lastUpdatedDate": "21. juli 2025",
    "termsOfServiceTitle": "Servicevilkår",
    "thankYou": "Tak fordi du bruger vores produkter!",
    "companyDefinition": 'Når vi siger "Virksomhed", "vi", "vores" eller "os" i dette dokument, henviser vi til NeverCap.',
    "servicesDefinition": 'Når vi siger "Tjenester", mener vi ethvert produkt, der er oprettet og vedligeholdt af NeverCap, uanset om det leveres i en webbrowser, et desktopprogram, en mobilapplikation eller et andet format.',
    "termsUpdate": "Vi kan opdatere disse servicevilkår i fremtiden. Typisk har disse ændringer været for at præcisere nogle af disse vilkår ved at linke til en udvidet relateret politik. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side og tager andre passende skridt for at underrette kontohaverne.",
    "acceptanceTitle": "1. Accept af aftale",
    "acceptanceDescription1": "Ved at bruge vores Tjenester angiver du din accept af denne Aftale, som dermed bliver en bindende kontrakt mellem dig og NeverCap. Du erklærer, at du er juridisk i stand til at acceptere disse Vilkår, og bekræfter, at du er myndig nok til at indgå en bindende kontrakt. NeverCaps accept er udtrykkeligt betinget af din accept af alle vilkår og betingelser i denne Aftale.",
    "eligibilityRequirement": "Tjenesterne er ikke beregnet til og bør ikke bruges af personer under 18 år. Ved at bruge Tjenesterne erklærer og garanterer du, at du opfylder ovenstående berettigelseskrav.",
    "userResponsibility": 'Udtrykkene "du", "din", "dig selv" omfatter også dine medarbejdere, agenter, forretningsrepræsentanter og alle andre personer, som du giver adgang til Tjenesterne via din Konto (som defineret nedenfor). Du er ansvarlig for at sikre, at alle personer, der tilgår Tjenesterne via din konto, er bekendt med disse Vilkår og overholder dem.',
    "termsRevision": "NeverCap forbeholder sig retten til at revidere og opdatere disse vilkår fra tid til anden efter eget skøn. Alle ændringer træder i kraft med det samme, når de offentliggøres. Din fortsatte brug af tjenesterne efter offentliggørelsen af de reviderede vilkår betyder, at du accepterer og accepterer ændringerne. Du forventes at tjekke denne side fra tid til anden, så du er opmærksom på eventuelle ændringer, da de er bindende for dig.",
    "servicesTitle": "2. NeverCaps tjenester",
    "servicesDescription1": "Vores tjenester gør det muligt for brugere at omdanne stemmesamtaler til transskriberet tekst, der kan søges i, oversættes og deles med andre.",
    "servicesOptions": 'Du kan vælge, om du vil bruge den gratis version af Tjenesterne ("Gratis Tjenester") eller den abonnementsbaserede, betalte version af Tjenesterne, som du muligvis skal betale gebyrer for ("Betalte Tjenester").',
    "servicesAccess": "Vi stiller Tjenesterne til rådighed for dig. Du er ansvarlig for at træffe alle nødvendige foranstaltninger for at du kan få adgang til Tjenesterne.",
    "accountTermsTitle": "3. Kontovilkår",
    "accountSecurity": "Du er ansvarlig for at opretholde sikkerheden på din konto. Virksomheden kan ikke og vil ikke være ansvarlig for tab eller skade som følge af din manglende overholdelse af denne sikkerhedsforpligtelse.",
    "lawfulUse": "Du må ikke bruge Tjenesterne til ulovlige, uetiske eller umoralske formål.",
    "contentResponsibility": "Du er ansvarlig for alt indhold, der offentliggøres, og alt aktivitet, der finder sted på din konto. Dette inkluderer indhold, der offentliggøres af andre, som enten: (a) har adgang til dine loginoplysninger; eller (b) har deres egne logins på din konto.",
    "humanRequirement": 'Du skal være et menneske. Konti registreret af "bots" eller andre automatiserede metoder er ikke tilladt.',
    "paymentTitle": "4. Betaling, refusion og planændringer",
    "freeTrial": "For betalte tjenester, der tilbyder en gratis prøveperiode, forklarer vi prøveperiodens varighed, når du tilmelder dig. Efter prøveperioden skal du betale forud for at fortsætte med at bruge tjenesten. Hvis du ikke betaler, ophører disse tjenester.",
    "upgradePolicy": "Hvis du opgraderer fra et gratis abonnement til et betalt abonnement, debiterer vi dit kort med det samme, og din faktureringsperiode starter på opgraderingsdagen.",
    "taxes": "Alle gebyrer er eksklusive alle skatter, afgifter eller gebyrer pålagt af skattemyndighederne. Hvor det er nødvendigt, opkræver vi disse skatter på vegne af skattemyndighederne og indbetaler dem til skattemyndighederne. Ellers er du ansvarlig for betaling af alle skatter, afgifter eller gebyrer.",
    "refunds": "Alle køb refunderes ikke. Du kan til enhver tid opsige alle betalte tjenester ved at logge ind på din konto. For betalte abonnementer træder din opsigelse i kraft ved udgangen af den nuværende betalte periode, medmindre andet er angivet.",
    "cancellationTitle": "5. Annullering og opsigelse",
    "cancellationPolicy": "Hvis du opsiger Tjenesten inden udgangen af en betalt periode, træder din opsigelse i kraft med det samme, og du vil ikke blive opkrævet igen. Vi beregner ikke automatisk forholdsmæssigt den ubrugte tid i den seneste faktureringsperiode.",
    "terminationRights": "Vi har ret til at suspendere eller opsige din konto og nægte enhver nuværende eller fremtidig brug af vores Tjenester af en hvilken som helst grund når som helst. Suspendering betyder, at du ikke vil kunne få adgang til kontoen eller noget indhold på kontoen. Opsigelse vil desuden resultere i sletning af din konto eller din adgang til din konto, og tab og afkald på alt indhold på din konto. Vi forbeholder os også retten til at nægte brugen af Tjenesterne til enhver af en hvilken som helst grund når som helst. Vi har denne klausul, fordi statistisk set er der mindst én ud af de hundredtusindvis af konti på vores Tjenester, der gør noget skumelt.",
    "abusePolicy": "Verbal, fysisk, skriftlig eller anden form for misbrug (herunder trusler om misbrug eller gengældelse) af virksomhedens medarbejder eller funktionær kan resultere i øjeblikkelig lukning af kontoen.",
    "submissionsTitle": "6. Indsendelser",
    "submissionsDescription": 'Du anerkender og accepterer, at eventuelle spørgsmål, kommentarer, forslag, ideer, feedback eller andre oplysninger vedrørende webstedet ("Indsendelser"), som du giver os, ikke er fortrolige og bliver vores ejendom. Vi ejer eksklusive rettigheder, herunder alle immaterielle rettigheder, og har ret til ubegrænset brug og formidling af disse indsendelser til ethvert lovligt formål, kommercielt eller andet, uden anerkendelse eller kompensation til dig. Du giver hermed afkald på alle moralske rettigheder til sådanne indsendelser, og du garanterer hermed, at sådanne indsendelser er originale fra dig, eller at du har ret til at indsende sådanne indsendelser. Du accepterer, at der ikke kan gøres krav mod os for påstået eller faktisk krænkelse eller misbrug af nogen ejendomsret i dine indsendelser.',
    "uptimeTitle": "7. Oppetid og sikkerhed",
    "serviceAvailability": 'Din brug af Tjenesterne sker på egen risiko. Vi leverer disse Tjenester "som de er" og "som tilgængelige". Vi tilbyder ikke serviceniveauaftaler for de fleste af vores Tjenester, men tager oppetiden for vores applikationer alvorligt.',
    "throttlingPolicy": "Vi forbeholder os retten til midlertidigt at begrænse eller begrænse adgangen til kontoen i sjældne tilfælde, hvor det er bekræftet, at en brugers aktivitet påvirker tjenestens stabilitet og ydeevne negativt for andre brugere. I alle tilfælde undtagen de mest kritiske, vil vi kontakte dig for at finde en løsning, før vi handler.",
    "dataSecurity": "Vi tager mange forholdsregler for at beskytte og sikre dine data gennem sikkerhedskopiering, redundans og kryptering. Vi håndhæver kryptering til dataoverførsel over det offentlige internet.",
    "thirdPartyVendors": "Vi bruger tredjepartsleverandører og hostingpartnere til at levere den nødvendige hardware, software, netværk, lagring og relateret teknologi, der kræves for at køre Tjenesterne.",
    "siteManagementTitle": "8. Webstedsadministration",
    "siteManagementDescription": "Vi forbeholder os retten, men ikke forpligtelsen, til at: (1) overvåge webstedet for overtrædelser af disse servicevilkår; (2) tage passende retslige skridt mod enhver, der efter eget skøn overtræder loven eller disse servicevilkår, herunder, men ikke begrænset til, at rapportere en sådan bruger til retshåndhævende myndigheder; (3) efter eget skøn og uden begrænsning, nægte, begrænse adgang til, begrænse tilgængeligheden af eller deaktivere (i det omfang det er teknologisk muligt) dine bidrag eller dele deraf; (4) efter eget skøn og uden begrænsning, varsel eller ansvar, at fjerne fra webstedet eller på anden måde deaktivere alle filer og indhold, der er for store eller på nogen måde er belastende for vores systemer; og (5) på anden måde administrere webstedet på en måde, der er designet til at beskytte vores rettigheder og ejendom og til at fremme webstedets korrekte funktion.",
    "copyrightTitle": "9. Ophavsret og ejerskab af indhold",
    "copyrightCompliance": "Alt indhold, der offentliggøres på Tjenesterne, skal overholde amerikansk ophavsretslovgivning.",
    "ipRights": "Vi gør ikke krav på nogen immaterielle rettigheder over det materiale, du leverer til Tjenesterne. Alt materiale, der uploades, forbliver dit.",
    "contentModeration": "Vi foretager ikke forhåndsscreening af indhold, men forbeholder os retten (men ikke pligten) til efter eget skøn at afvise eller fjerne indhold, der er tilgængeligt via Tjenesten.",
    "trademarkProtection": "Navnene, udseendet og følelsen af Tjenesterne er copyright© tilhørende Virksomheden. Alle rettigheder forbeholdes. Du må ikke duplikere, kopiere eller genbruge nogen del af HTML-, CSS-, JavaScript- eller visuelle designelementer uden udtrykkelig skriftlig tilladelse fra Virksomheden. Du skal anmode om tilladelse til at bruge Virksomhedens logo eller nogen af Tjenestens logoer til reklameformål. Send os venligst en e-mail med anmodninger om at bruge logoer. Vi forbeholder os retten til at tilbagekalde denne tilladelse, hvis du overtræder disse Servicevilkår.",
    "prohibitedExploitation": "Du accepterer ikke at reproducere, duplikere, kopiere, sælge, videresælge eller udnytte nogen del af Tjenesterne, brugen af Tjenesterne eller adgangen til Tjenesterne uden udtrykkelig skriftlig tilladelse fra Virksomheden.",
    "impersonationProhibition": "Du må ikke ændre et andet websted på en måde, der fejlagtigt antyder, at det er forbundet med Tjenesterne eller Virksomheden.",
    "dmcaPolicy": "Vi respekterer andres immaterielle rettigheder. Hvis du mener, at materiale, der er tilgængeligt på eller via webstedet, krænker en ophavsret, du ejer eller kontrollerer, bedes du straks kontakte os. En kopi af din meddelelse vil blive sendt til den person, der har lagt det materiale, der er omhandlet i meddelelsen, op. Vær opmærksom på, at du i henhold til gældende lov kan blive holdt ansvarlig for erstatning, hvis du afgiver væsentlige urigtige oplysninger i en meddelelse. Hvis du derfor ikke er sikker på, at materiale, der findes på eller linkes til af webstedet, krænker din ophavsret, bør du overveje først at kontakte en advokat.",
    "prohibitedActivitiesTitle": "10. Forbudte aktiviteter",
    "generalProhibition": "Du må ikke tilgå eller bruge webstedet til andre formål end det, som vi stiller webstedet til rådighed for. Webstedet må ikke bruges i forbindelse med kommercielle bestræbelser, undtagen dem, der specifikt er godkendt af os.",
    "userObligations": "Som bruger af webstedet accepterer du ikke at:",
    "dataScraping": "Systematisk hente data eller andet indhold fra webstedet for direkte eller indirekte at oprette eller kompilere en samling, kompilering, database eller fortegnelse uden skriftlig tilladelse fra os.",
    "fraud": "Narre, bedrage eller vildlede os og andre brugere, især i ethvert forsøg på at få adgang til følsomme kontooplysninger såsom brugeradgangskoder.",
    "securityInterference": "Omgå, deaktivere eller på anden måde forstyrre sikkerhedsrelaterede funktioner på webstedet, herunder funktioner, der forhindrer eller begrænser brugen eller kopieringen af indhold eller håndhæver begrænsninger på brugen af webstedet og/eller indholdet deri.",
    "defamation": "Nedgøre, plette eller på anden måde skade os og/eller webstedet efter vores mening.",
    "harassment": "Bruge oplysninger indhentet fra webstedet til at chikanere, misbruge eller skade en anden person.",
    "supportAbuse": "Gøre ukorrekt brug af vores supporttjenester eller indsende falske rapporter om misbrug eller forseelser.",
    "legalCompliance": "Bruge webstedet på en måde, der er uforenelig med gældende love eller regler.",
    "framingProhibition": "Deltage i uautoriseret framing af eller linkning til webstedet.",
    "malware": "Uploade eller overføre (eller forsøge at uploade eller overføre) virus, trojanske heste eller andet materiale, herunder overdreven brug af store bogstaver og spamming (kontinuerlig opslag af gentagne tekster), der forstyrrer en parts uafbrudte brug og nydelse af webstedet eller ændrer, forringer, forstyrrer, ændrer eller forstyrrer brugen, funktionerne, driften eller vedligeholdelsen af webstedet.",
    "automation": "Bruge systemet automatisk på enhver måde, f.eks. ved at bruge scripts til at sende kommentarer eller beskeder eller ved at bruge datamining, robotter eller lignende dataindsamlings- og udtrækningsværktøjer.",
    "copyrightRemoval": "Slet meddelelsen om ophavsret eller andre ejendomsrettigheder fra ethvert indhold.",
    "impersonation": "Forsøg at udgive dig for at være en anden bruger eller person eller bruge en anden brugers brugernavn.",
    "spyware": 'Uploade eller overføre (eller forsøge at uploade eller overføre) materiale, der fungerer som en passiv eller aktiv informationsindsamlings- eller transmissionsmekanisme, herunder, men ikke begrænset til, clear graphics exchange formats ("gifs"), 1×1 pixels, web bugs, cookies eller andre lignende enheder (undertiden benævnt "spyware" eller "passive indsamlingsmekanismer" eller "pcms").',
    "disruption": "Forstyrre, afbryde eller skabe en urimelig belastning på webstedet eller de netværk eller tjenester, der er forbundet til webstedet.",
    "employeeHarassment": "Chikanere, irritere, intimidere eller true nogen af vores medarbejdere eller agenter, der er involveret i at levere nogen del af webstedet til dig.",
    "accessCircumvention": "Forsøg at omgå eventuelle foranstaltninger på webstedet, der er designet til at forhindre eller begrænse adgang til webstedet eller nogen del af webstedet.",
    "codeCopying": "Kopiere eller tilpasse webstedets software, herunder, men ikke begrænset til, Flash, PHP, HTML, JavaScript eller anden kode.",
    "reverseEngineering": "Medmindre det er tilladt i henhold til gældende lov, må du dechifrere, dekompilere, disassemblere eller reverse engineere nogen af de softwareprogrammer, der omfatter eller på nogen måde udgør en del af webstedet.",
    "bots": "Medmindre det er et resultat af standardbrug af søgemaskiner eller internetbrowsere, bruge, lancere, udvikle eller distribuere ethvert automatiseret system, herunder, men ikke begrænset til, enhver spider, robot, snydeværktøj, scraper eller offline-læser, der tilgår webstedet, eller brug eller lancering af ethvert uautoriseret script eller anden software.",
    "buyingAgents": "Brug en indkøbsagent eller en indkøbsagent til at foretage køb på webstedet.",
    "unauthorizedUse": "Foretage enhver uautoriseret brug af webstedet, herunder indsamling af brugernavne og/eller e-mailadresser på brugere elektronisk eller på anden måde med det formål at sende uopfordrede e-mails eller oprette brugerkonti automatisk eller under falske forudsætninger.",
    "competition": "Bruge webstedet som en del af enhver bestræbelse på at konkurrere med os eller på anden måde bruge webstedet og/eller indholdet til enhver indtægtsgenererende bestræbelse eller kommerciel virksomhed.",
    "advertising": "Brug webstedet til at annoncere eller tilbyde at sælge varer og tjenester.",
    "profileTransfer": "Sælg eller overfør din profil på anden måde.",
    "featuresTitle": "11. Funktioner og fejl",
    "featuresDescription": "Vi designer vores tjenester med omhu, baseret på vores egne erfaringer og erfaringerne fra kunder, der deler deres tid og feedback. Der findes dog ikke en service, der tilfredsstiller alle. Vi garanterer ikke, at vores tjenester opfylder dine specifikke krav eller forventninger.",
    "bugsDescription": "Vi tester også alle vores funktioner, før vi sender dem. Som med al software indeholder vores tjenester uundgåeligt nogle fejl. Vi sporer de fejl, der rapporteres til os, og arbejder på dem, især dem, der er relateret til sikkerhed eller privatliv. Ikke alle rapporterede fejl vil blive rettet, og vi garanterer ikke fuldstændig fejlfri tjenester.",
    "correctionsTitle": "12. Rettelser",
    "informationAccuracy": "Der kan være oplysninger på webstedet, der indeholder typografiske fejl, unøjagtigheder eller udeladelser, herunder beskrivelser, priser, tilgængelighed og forskellige andre oplysninger. Vi forbeholder os retten til at rette eventuelle fejl, unøjagtigheder eller udeladelser og til at ændre eller opdatere oplysningerne på webstedet når som helst og uden forudgående varsel.",
    "siteAvailability": "Vi kan ikke garantere, at webstedet vil være tilgængeligt til enhver tid. Vi kan opleve hardware-, software- eller andre problemer, eller vi kan være nødt til at udføre vedligeholdelse relateret til webstedet, hvilket resulterer i afbrydelser, forsinkelser eller fejl. Vi forbeholder os retten til at ændre, revidere, opdatere, suspendere, afbryde eller på anden måde modificere webstedet når som helst og af en hvilken som helst grund uden varsel til dig. Du accepterer, at vi ikke har noget ansvar for tab, skade eller ulempe forårsaget af din manglende evne til at få adgang til eller bruge webstedet under nedetid eller ophør af webstedet. Intet i disse servicevilkår skal fortolkes som en forpligtelse for os til at vedligeholde og supportere webstedet eller til at levere rettelser, opdateringer eller udgivelser i forbindelse hermed.",
    "userDataTitle": "13. Brugerdata",
    "userDataDescription": "Vi opbevarer visse data, som du overfører til webstedet, med det formål at administrere webstedets ydeevne, samt data vedrørende din brug af webstedet. Selvom vi regelmæssigt udfører sikkerhedskopier af data, er du eneansvarlig for alle data, som du overfører, eller som vedrører enhver aktivitet, du har foretaget ved hjælp af webstedet. Du accepterer, at vi ikke har noget ansvar over for dig for tab eller beskadigelse af sådanne data, og du giver hermed afkald på enhver ret til at anlægge sag mod os som følge af et sådant tab eller beskadigelse af sådanne data.",
    "privacyPolicyTitle": "14. Privatlivspolitik",
    "privacyPolicyDescription": "Vi bekymrer os om databeskyttelse og -sikkerhed. Gennemgå venligst vores privatlivspolitik. Ved at bruge webstedet accepterer du at være bundet af vores privatlivspolitik, som er indarbejdet i disse servicevilkår. Vær opmærksom på, at webstedet hostes i USA. Hvis du tilgår webstedet fra en anden region i verden med love eller andre krav vedrørende indsamling, brug eller videregivelse af personoplysninger, der afviger fra gældende love i USA, overfører du dine data til USA gennem din fortsatte brug af webstedet, og du accepterer at få dine data overført til og behandlet i USA.",
    "liabilityTitle": "15. Ansvar",
    "liabilityIntroduction": "Vi nævner ansvar i alle disse vilkår, men for at samle det hele i ét afsnit:",
    "liabilityWaiver": "Du forstår og accepterer udtrykkeligt, at Virksomheden ikke er ansvarlig, hverken i henhold til loven eller billighedsretten, over for dig eller nogen tredjepart for direkte, indirekte, tilfældige, tabt fortjeneste, særlige, følgeskader, pønalerstatninger eller eksemplariske skader, herunder, men ikke begrænset til, erstatning for tabt fortjeneste, goodwill, brug, data eller andre immaterielle tab (selvom Virksomheden er blevet underrettet om muligheden for sådanne skader), som følge af: (1) brugen af eller manglende evne til at bruge Tjenesterne; (2) fejl, mangler eller unøjagtigheder i indhold og materialer; (3) personskade eller materiel skade af enhver art, som følge af din adgang til og brug af webstedet; (4) omkostningerne ved anskaffelse af erstatningsvarer og -tjenester som følge af varer, data, oplysninger eller tjenester købt eller erhvervet eller beskeder modtaget eller transaktioner indgået via eller fra Tjenesterne; (5) uautoriseret adgang til eller brug af vores sikre servere og/eller alle personlige oplysninger og/eller finansielle oplysninger lagret deri; (6) afbrydelse eller ophør af transmission til eller fra webstedet; (7) eventuelle fejl, vira, trojanske heste eller lignende, der måtte blive overført til eller via webstedet af tredjeparter, og/eller; (8) eventuelle fejl eller udeladelser i indhold og materialer eller for tab eller skade af enhver art, der opstår som følge af brugen af indhold, der er lagt ud, transmitteret eller på anden måde gjort tilgængeligt via webstedet; (9) udtalelser eller adfærd fra tredjeparter på tjenesten; (10) eller ethvert andet forhold vedrørende disse Servicevilkår eller Tjenesterne, uanset om det er som kontraktbrud, erstatning uden for kontrakt (herunder uagtsomhed, aktiv eller passiv) eller enhver anden ansvarsteori.",
    "miscellaneousTitle": "16. Diverse",
    "miscellaneousDescription": "Disse Servicevilkår og eventuelle politikker eller driftsregler, som vi har offentliggjort på webstedet eller i forbindelse med webstedet, udgør hele aftalen og forståelsen mellem dig og os. Vores undladelse af at udøve eller håndhæve nogen rettighed eller bestemmelse i disse Servicevilkår skal ikke fungere som et afkald på en sådan rettighed eller bestemmelse. Disse Servicevilkår gælder i det videst mulige omfang, det er tilladt ved lov. Vi kan til enhver tid overdrage enhver eller alle vores rettigheder og forpligtelser til andre. Vi er ikke ansvarlige for tab, skade, forsinkelse eller undladelse af at handle forårsaget af årsager uden for vores rimelige kontrol. Hvis nogen bestemmelse eller del af en bestemmelse i disse Servicevilkår anses for at være ulovlig, ugyldig eller ikke-håndhævelig, anses denne bestemmelse eller del af bestemmelsen for at være adskilt fra disse Servicevilkår og påvirker ikke gyldigheden og håndhævelsen af eventuelle resterende bestemmelser. Der er ikke skabt noget joint venture-, partnerskabs-, ansættelses- eller agenturforhold mellem dig og os som følge af disse Servicevilkår eller brug af webstedet. Du accepterer, at disse Servicevilkår ikke vil blive fortolket imod os i kraft af at have udarbejdet dem. Du giver hermed afkald på ethvert forsvar, du måtte have baseret på den elektroniske form af disse Servicevilkår og manglen på underskrift fra parterne heri for at opfylde disse Servicevilkår.",
    "contactTitle": "17. Kontakt os",
    "contactDescription": "Hvis du har et spørgsmål om nogen af servicevilkårene, bedes du kontakte os.",
    "neverCap": "NeverCap",
    "site": "Websted",
    "services": "Tjenester"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
