//挪威语
let message = {
  // 首页
  HomePage: {
    home: "Alle Transkripsjoner",
    times: "{times} gratis transkripsjoner per dag, {left} igjen i dag. ",
    tips: "Oppgrader til Pro for ubegrenset transkripsjon.",
    update: "Oppgrader nå",
    rename: "Gi nytt navn",
    delete: "Slett",
    cancel: "Avbryt",
    confirm: "Opprett",
    dialogLabel: "Mappenavn",
    recently: "Nylige filer",
    loading: "Laster",
    tour: {
      step0: {
        title: "Velkommen til {name}",
        tip: "Her kan du:",
        content: "Transkribere enkeltsamtaler, møter, forelesninger og mer",
        next: "Kom i gang"
      },
      step1: {
        title: "Transkriber filer",
        content:
          "Støtter tre transkripsjonsmetoder: lokale filer, lenker og opptak."
      },
      step2: {
        title: "Opprett en mappe",
        content:
          'Klikk på "+" for å opprette en mappe og organisere filene dine.'
      },
      step3: {
        title: "Vis transkripsjonsdetaljer og rediger",
        content:
          "Klikk på elementet for å vise transkripsjonsdetaljer og redigere, samt oversette det."
      },
      next: "neste",
      finish: "Forstått"
    },
    export: {
      export: "Eksporter",
      title: "Vi genererer eksporten din",
      title2: "Filen din er klar",
      singleLoadingContent: "1 fil komprimeres.",
      singleSuccessContent: "1 fil har blitt komprimert.",
      loadingContent: "{num} filer komprimeres.",
      successContent: "{num} filer har blitt komprimert.",
      cancel: "Avbryt eksporten",
      error: "Eksporteringsfeil",
      dialog: {
        title: "Advarsel",
        content: "Avbryte eksporten?",
        cancel: "Avbryt eksport",
        continue: "Fortsett eksport"
      }
    },
    welcome: {
      title: "Velkommen til Scribify!",
      description: "Her kan du:",
      transcribe:
        "Transkriber uanstrengt med Scribify—gjør talesamtaler om til klar, søkbar og delbar tekst på et øyeblikk.",
      precision:
        "Få nøyaktige transkripsjoner med talegjenkjenning og tidsstempler øyeblikkelig.",
      translate:
        "Bryt språkbarrierer: oversett transkripsjoner til mer enn 200 språk med letthet.",
      edit: "Rediger, forbedre og eksporter transkripsjoner i formater som passer dine behov.",
      collaborate: "Samarbeid ved å dele din transkriberte tekst med andre.",
      button: "Kom i gang",
      tip: "Klar til å gjøre lyd om til transkribert tekst? Begynn å utforske nå!",
      tip2: "Begynn å utforske nå!",
      tip1: "Klar til å gjøre om lyd til transkribert tekst? "
    },
    subscriptionModal: {
      left: {
        title: "Få Pro-planen for å låse opp mer",
        c1: "Ubegrenset transkripsjon",
        c2: "10 timers opplastinger",
        c3: "Høyeste prioritet",
        c4: "99% transkripsjons-nøyaktighet",
        c5: "100+ støttede språk",
        c6: "Talegjenkjenning",
        c7: "Transkripsjons-oversettelse",
        t1: "Ubegrenset transkripsjon for én person.",
        t2: "Hver fil kan være opptil 10 timer / 5 GB. Last opp 50 filer om gangen.",
        t3: "Vi vil alltid transkribere filene dine så raskt som mulig med høyeste prioritet."
      },
      right: {
        title: "Få Pro-planen",
        yearly: "Årlig",
        monthly: "Månedlig",
        save: "Spart",
        preMonth: "per måned",
        preYear: "per år",
        firstMonth: "første måned",
        afterwards: "etterpå"
      },
      subscribe: "Abonner"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Mislykket",
      selected: "Valgt",
      success: "Vellykket",
      fileList: "Filliste"
    },
    dialog: {
      move: {
        title: "Flytt",
        label: "Velg en mappe",
        placeholder: "Velg en mappe",
        confirm: "Flytt",
        cancel: "Avbryt"
      },
      rename: {
        title: "Gi nytt navn",
        label: "Filnavn",
        confirm: "Gi nytt navn",
        cancel: "Avbryt"
      },
      delete: {
        title: "Slett",
        file: "fil",
        files: "filer",
        label: "Bekreft sletting? Denne handlingen kan ikke angres.",
        confirm: "Slett",
        cancel: "Avbryt"
      },
      share: {
        title: "Del",
        label:
          "Alle med følgende sikre lenke kan se denne transkripsjonen og den tilknyttede mediefilen.",
        confirm: "Kopier lenke",
        success: "Kopiering vellykket"
      },
      export: {
        title: "Eksporter",
        select: "Velg formatet du trenger",
        settings: "Innstillinger",
        speaker: "Inkluder taler",
        timecodes: "Inkluder tidskoder",
        confirm: "Eksporter",
        cancel: "Avbryt",
        selectErr: "Vennligst velg ett eller flere formater"
      }
    },
    search: {
      placeholder: "Søk"
    },
    recently: "Nylig",
    record: "Ta opp",
    transcribe: "Transkriber",
    unclassified: "Uklassifiserte mapper",
    buttons: {
      transcribe: "Transkriber filer",
      url: "Transkriber lenker",
      record: "Ta opp og transkriber",
      recording: "Tar opp..."
    },
    delSuccess: "Slettet",
    create: "Opprett",
    endRecord: {
      title: "Varsel",
      content:
        "Du tar opp. Denne handlingen vil avslutte opptaket. Vil du avslutte opptaket?",
      confirm: "Fortsett Opptak",
      cancel: "Avslutt Opptak"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Ta opp",
      pause: "Pause",
      resume: "Fortsett",
      stop: "Stopp",
      endRecord: "Avslutt opptak",
      delete: "Slett",
      transcribe: "Transkriber",
      permissionDenied:
        "Mikrofontillatelse nektet eller enheten eksisterer ikke",
      dialog: {
        delete: {
          title: "Advarsel",
          label: "Er du sikker på at du vil slette dette opptaket?",
          confirm: "Slett",
          cancel: "Avbryt"
        },
        complete: {
          title: "Opptak fullført",
          label:
            "Opptaket har nådd 10 timer og har automatisk stoppet. Vennligst transkriber.",
          confirm: "Forstått"
        },
        speaker: {
          content:
            "For taleridentifikasjon er filer begrenset til 3 timer. Fjern avhukingen for '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkriber et nettmedium",
        title: "Lim inn lenker",
        label:
          "Lim inn din video- eller lydlenke fra: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram og flere plattformer...",
        confirm: "Legg til",
        cancel: "Avbryt",
        // 请输入正确的链接
        errorTitle:
          "Lenkeadressen du har oppgitt er feil. Vennligst sjekk og prøv igjen.",
        linkName: "Lenke"
      },
      file: {
        orTitle: "Transkriber et nettmedium",
        dialogTitle: "Transkriber filer",
        tip1: "Dra filer hit eller klikk for å bla",
        tip2: "Klikk for å bla",
        or: "eller",
        supported: "Støttede formater"
      },
      del: {
        title: "Advarsel",
        content:
          "All fremgang vil gå tapt. Bekreft avbrytelse av transkripsjonen?",
        cancel: "Bekreft avbrytelse",
        confirm: "Fortsett transkribering"
      },
      files: "Filer",
      resultDialogTitle: "Transkriber filer",
      resultDialogTitle2: "Transkriber fil",
      cancel: "Avbryt",
      confirm: "Transkriber",
      return: "Tilbake",
      addMore: "Legg til mer",
      language: "Mediaspråk",
      failed: "Mislykket",
      tooLarge: "Filen overstiger grensen (5G).",
      linkUpload: "Laster opp",
      fileFormat: "Filformatet er ikke tillatt",
      localFiles: "Lokale filer",
      pasteLink: "Online lenke",
      uploadErr: "Opplastingsfeil",
      hashErr: "Hash-feil",
      table: {
        status: "Status",
        file: "Fil",
        size: "Størrelse",
        noData: "Ingen data"
      },
      maxFileNum: "Antall filer kan ikke overstige {num}.",
      speaker: "Identifiser talere",
      speakerLabel:
        "Oppdager automatisk hvem som snakker",
      guest: {
        transcribe: "Transkribere",
        file: "Fil",
        audio: "Lyd-/videofil",
        Uploading: "Laster opp..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Nylig",
      popular: "Populær",
      other: "Andre",
      searchLanguage: "Søk språk",
      noMatch: "Ingen samsvarende språk funnet",
      English: "Engelsk",
      "English(US)": "Engelsk (USA)",
      "English(UK)": "Engelsk (Storbritannia)",
      Spanish: "Spansk",
      Portuguese: "Portugisisk",
      French: "Fransk",
      Italian: "Italiensk",
      German: "Tysk",
      Dutch: "Nederlandsk",
      Polish: "Polsk",
      Danish: "Dansk",
      Japanese: "Japansk",
      Korean: "Koreansk",
      Hungarian: "Ungarsk",
      Czech: "Tsjekkisk",
      Chinese: "Kinesisk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Azerbaijani: "Aserbajdsjansk",
      Estonian: "Estisk",
      Belarusian: "Hviterussisk",
      Bulgarian: "Bulgarsk",
      Icelandic: "Islandsk",
      Bosnian: "Bosnisk",
      Persian: "Persisk",
      Russian: "Russisk",
      "Chinese(Traditional)": "Kinesisk (tradisjonell)",
      Finnish: "Finsk",
      Kazakh: "Kasakhisk",
      Galician: "Galisisk",
      Catalan: "Katalansk",
      "Chinese(Simplified)": "Kinesisk (forenklet)",
      Kannada: "Kannada",
      Croatian: "Kroatisk",
      Latvian: "Latvisk",
      Lithuanian: "Litauisk",
      Romanian: "Rumensk",
      Marathi: "Marathi",
      Malay: "Malayisk",
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
      Greek: "Gresk",
      Armenian: "Armensk",
      Hindi: "Hindi",
      Indonesian: "Indonesisk",
      Vietnamese: "Vietnamesisk",
      Albanian: "Albansk",
      Amharic: "Amharisk",
      Assamese: "Assamesisk",
      Occitan: "Occitan",
      Bashkir: "Bashkirisk",
      Basque: "Baskisk",
      Breton: "Breton",
      Tibetan: "Tibetansk",
      Faroese: "Færøysk",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisk",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreolsk",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgisk",
      Malagasy: "Malagasy",
      Maltese: "Maltesisk",
      Malayalam: "Malayalam",
      Mongolian: "Mongolsk",
      Bengali: "Bengali",
      Burmese: "Burmesisk",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Sinhala",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tajik",
      Tatar: "Tatar",
      Telugu: "Telugu",
      Turkmen: "Turkmen",
      Uzbek: "Uzbek",
      Hawaiian: "Hawaiiansk",
      "Norwegian Nynorsk": "Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisk",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanesisk",
      Cantonese: "Kantonesisk",
      Abkhaz: "Abkhazisk",
      Afar: "Afar",
      alz: "Alzh",
      ach: "Acholi",
      awa: "Awa",
      Avaric: "Avarisk",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irsk",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetisk",
      tpi: "Tpi",
      bew: "Badawi",
      ban: "Bali",
      btx: "Bata-Karo",
      bbc: "Bata-Kotabaru",
      bts: "Bata-Simalungun",
      bci: "Bawi",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Sør-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriatisk",
      chm: "Chamorro",
      Chamorro: "Chamorro",
      Chechen: "Chechen",
      chk: "Chukchi",
      Chuvash: "Chuvash",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndebele",
      "South Ndebele": "Sør-Ndebele",
      dov: "Dong",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Fransk (Kanada)",
      Fijian: "Fijiansk",
      fon: "Fon",
      "Western Frisian": "Vestfriesisk",
      fur: "Friulisk",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grønlandsk",
      gom: "Gom",
      Guarani: "Guarani",
      cnh: "Cahuapaneco",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisisk",
      ktu: "Ktu",
      gaa: "Gbe",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikansk",
      "crh-Latn": "Krim-Tatar (Latinsk)",
      crh: "Krim-Tatar (Syrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdisk (Kurmanji)",
      ckb: "Kurdisk (Soran)",
      trp: "Tromelin",
      ltg: "Latgalian",
      lij: "Ligurisk",
      Limburgish: "Limburgisk",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisk",
      rom: "Romansk",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaisk (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauretiusk kreolsk",
      "mni-Mtei": "Mizo (Mtei)",
      min: "Minangkabau",
      lus: "Lusoga",
      hmn: "Hmong",
      nhe: "Navajo (Ost-Sotkav)",
      "Southern Sotho": "Sør-Sotho",
      new: "Nepali språk (Navajo)",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shamkhî)",
      "pt-PT": "Portugisisk (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Lua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Sami (Nord)",
      Samoan: "Samoan",
      kri: "Sierra Leonekreolsk",
      crs: "Seychelleskreolsk",
      Sango: "Sango",
      "sat-Latn": "Santali (Latinsk)",
      sat: "Santali (Ogham)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gaelisk",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight",
      Tahitian: "Tahitian",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinisk",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetian",
      Uyghur: "Uyghur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtisk",
      szl: "Silesisk",
      scn: "Sicilisk",
      hil: "Hiligaynon",
      jam: "Jamaikansk patois",
      sah: "Jakutisk",
      ace: "Acehnesisk",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Latinsk)",
      Inuktitut: "Inuktitut (Stavelse)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "eller", // 或
    LoginBtn: "Logg inn med e-post",
    LoginGoogle: "Logg inn med Google",
    SignupBtn: "Registrer med e-post",
    SignupGoogle: "Registrer med Google",
    SignupDes: "Registrer deg i dag og opplev magien — gratis.",
    SignupTitle: "Nøyaktig og ubegrenset transkribering",
    signup: "Registrer deg", // 注册
    sign_up: "Registrer deg", // 注册
    loginByGoogle: "Fortsett med Google", // 使用Google登录
    emailAddress: "Vennligst oppgi e-postadressen din", // 请输入您的邮箱
    createAccount: "Opprett en ny konto", // 创建账户
    accountExists: "Har du allerede en konto? ", // 已经有账户了？登录
    agreeTerm: {
      agree: "Ved å fortsette, godtar du våre {terms} og {policy}.",
      terms: "Vilkår",
      policy: "Personvernregler"
    },
    setPassword: "Angi et passord", // 设置密码
    code: "Bekreftelseskode", // 验证码
    resend: "Send på nytt", // 重新发送
    enterPassword: "Passord: Minimum 6 tegn.", // 请输入密码
    passwordLeval: "Passordstyrke", // 密码强度
    Weak: "Svak", // 弱 中 强
    Medium: "Middels", // 弱 中 强
    Strong: "Sterk", // 弱 中 强
    confirmPassword: "Bekreft passordet ditt", // 确认密码
    invalidEmail: "Ugyldig e-postadresse", // 无效的邮箱地址
    logInDirectly:
      "Denne kontoen eksisterer allerede. Vennligst logg inn direkte.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Feil bekreftelseskode. Prøv igjen.", // 验证码错误，请重试
    atLeastSix: "Passordet må være minst 6 tegn langt.", // 密码长度至少6位
    passwordNotMatch: "Passordene samsvarer ikke. Vennligst prøv igjen.", // 密码不匹配，请重试
    login: "Logg inn", // 登录
    log_in: "Logg inn", // 登录
    log_In: "Logg Inn", // 登录
    password: "Passord", // 密码
    forgotPassword: "Glemt passordet ditt?", // 忘记密码？
    noAccount: "Har du ikke en konto?", // 没有账户？注册
    accountNotExists: "Denne kontoen eksisterer ikke.", // 账户不存在
    passwordError: "Passordfeil", // 密码错误
    sendCode: "Send bekreftelseskode", // 发送验证码
    resetPassword: "Tilbakestill passord", // 重置密码
    resetYourPassword: "Tilbakestill passordet ditt", // 重置你的密码
    newOldCantSame:
      "Det nye passordet må være forskjellig fra det gamle passordet.", // 新密码与旧密码不能相同
    passwordResetOk: "Passordet er tilbakestilt!", // 密码重置成功！
    signupToSaveProgress: "Fullfør registreringen for å lagre fremgangen din",
    tip: "Tips",
    tipContentEmail:
      "Vi har nettopp sendt innloggingspassordet for kontoen din til e-postadressen din.",
    tipContentPassword:
      "Vennligst sjekk innboksen din og logg inn med e-postadressen og passordet ditt.",
    codeToEmail:
      "Vi har nettopp sendt en verifiseringskode til e-posten din. Vennligst sjekk innboksen din og lim inn verifiseringskoden ovenfor."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transkripsjoner daglig",
    uploadMinutes: "30-minutters opplastinger",
    lowerPriority: "Lavere prioritet",
    currentPlan: "Nåværende plan",
    professionalEdition: "profesjonell utgave",
    unlimitedTranscription: "Ubegrenset transkripsjon",
    unlimitedNumberOfTimes: "Ubegrenset transkripsjonsfrekvens og varighet.",
    filesUploadedAtOnce:
      "Hver fil kan være opptil 10 timer lang / 5 GB. Last opp 50 filer samtidig.",
    highestPriority: "høyeste prioritet",
    weWillGiveTheHighest:
      "Vi vil alltid transkribere filene dine så raskt som mulig med høyest prioritet.",
    theFirstMonth: "Den første måneden",
    subscribeTo: "abonner på",
    basicVersionFree: "Grunnleggende versjon (gratis)",
    return: "Tilbake",
    annualize: "årlig",
    monthly: "månedlig",
    everyYear: "hvert år",
    saved: "spart",
    byTheMonth: "per måned",
    firstMonth: "første måned",
    afterwardsEveryMonth: "Deretter hver måned",
    manageSubscription: "Administrer abonnement",
    professionalYearbook: "Profesjonelt årlig",
    professionalMonthly: "Profesjonelt månedlig",
    subscriptionWillCancelledOn: "Abonnementet ditt vil bli avsluttet",
    displayLanguage: "Visningsspråk",
    update: "Oppgrader nå",
    basicversion: "Grunnleggende versjon (Gratis)",
    daily: "{start} av {end} daglige transkripsjoner brukt",
    upgradetoPro: "Oppgrader til Pro",
    accountSetting: "Kontoinnstillinger",
    logOut: "Logg ut",
    account: "Konto",
    email: "E-post",
    id: "ID",
    password: "Passord",
    resetPassword: "Tilbakestill passord",
    logIn: "Logg inn",
    tryForFree: "Prøv gratis",
    notFund: "Ikke funnet",
    couldntFind: "Vi kunne ikke finne det du lette etter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månedlig",
    perMonth: "per måned",
    afterwards: "etterpå",
    accuracy: "transkripsjonsnøyaktighet",
    supported: "støttede språk",
    identification: "Høytaleridentifikasjon",
    transcriptSranslation: "Transkripsjonsoversettelse",
    perYear: "per år",
    getProPlan: "Få Pro-planen",
    changeToAnnual: "Bytt til årlig",
    automaticRenewalon: "Automatisk fornyelse",
    eachMonth: "Automatisk fornyelse den {time}. hver måned.",
    automaticRenewal:
      "Automatisk fornyelse mislyktes, vennligst sjekk betalingsmetoden.",
    eachYear: "Automatisk fornyelse den {time} hvert år.",
    returnAccountSetting: "Tilbake",
    needsToWaitLonger: "Vent lenger før filene dine blir transkribert.",
    freeThreeTimesDay: "Transkriber 3 filer gratis hver dag.",
    oneFileUploaded:
      "Hver fil kan være opptil 30 minutter lang. Last opp 1 fil om gangen.",
    uploadWithinHours: "10-timers opplastinger",
    yourSubscription: "Abonnementet ditt vil bli avsluttet {time}.",
    save: "Spare",
      freeversion2: "Gratis Plan"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesisk (forenklet)",
      "Chinese(Traditional)": "Kinesisk (tradisjonell)",
      Japanese: "Japansk",
      Danish: "Dansk",
      German: "Tysk",
      English: "Engelsk",
      Spanish: "Spansk",
      French: "Fransk",
      Italian: "Italiensk",
      Hungarian: "Ungarsk",
      Dutch: "Nederlandsk",
      Norwegian: "Norsk",
      Polish: "Polsk",
      Portuguese: "Portugisisk",
      Finnish: "Finsk",
      Swedish: "Svensk",
      Turkish: "Tyrkisk",
      Greek: "Gresk",
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
      "​Åpen kildekode Nuxt3 SaaS-mal, forhåndsintegrert med globale betalingsportaler (Stripe/Cream), Google OAuth, i18n-ruting og SEO-optimaliseringsverktøy. Designet for utviklere som lanserer flerspråklige nettapplikasjoner, tilbyr det SSR/SSG-støtte og produksjonskvalitet sikkerhet ut av boksen.",
    startLink: "Start gratis prøveversjon~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Bli med på ventelisten, få de siste NuxtPro-nyhetene først OG rabatter!",
      placeholder: "Skriv inn e-postadressen din",
      button: "Bli med på ventelisten",
      joinCountMessage:
        "🔥 Tidlig bruker #{count} har nettopp blitt med på ventelisten!"
    },
    seo: {
      title: "Åpen kildekode Nuxt SaaS-mal | NuxtPro",
      description:
        "NuxtJS-malen med alt du trenger for å få produktet ditt foran kundene. Fra idé til produksjon på 5 minutter."
    },
    api: {
      title: "dette er en demo",
      corpInfo: "bedriftsinformasjon"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videolastingsfeil"
      },
      mse: {
        code: 2,
        msg: "strømtilleggsfeil"
      },
      parse: {
        code: 3,
        msg: "analysefeil"
      },
      format: {
        code: 4,
        msg: "feil format"
      },
      decoder: {
        code: 5,
        msg: "dekodingsfeil"
      },
      runtime: {
        code: 6,
        msg: "grammatikkfeil"
      },
      timeout: {
        code: 7,
        msg: "avspillingstimeout"
      },
      other: {
        code: 8,
        msg: "andre feil"
      }
    },
    HAVE_NOTHING: "Det finnes ingen informasjon om hvorvidt lyd/video er klar",
    HAVE_METADATA: "Lyd/video metadata er klar ",
    HAVE_CURRENT_DATA:
      "Data om gjeldende avspillingsplassering er tilgjengelig, men det er ikke nok data til å spille av neste ramme/millisekund",
    HAVE_FUTURE_DATA: "Gjeldende og minst én ramme av data er tilgjengelig",
    HAVE_ENOUGH_DATA:
      "Tilgjengelige data er tilstrekkelig for å starte avspilling",
    NETWORK_EMPTY: "Lyd/video har ikke blitt initialisert",
    NETWORK_IDLE:
      "Lyd/video er aktiv og er valgt for ressurser, men ingen nettverk brukes",
    NETWORK_LOADING: "Nettleseren laster ned dataene",
    NETWORK_NO_SOURCE: "Ingen lyd/video kilde ble funnet",
    MEDIA_ERR_ABORTED: "Nedlastingsprosessen er avbrutt av brukeren",
    MEDIA_ERR_NETWORK: "Det oppstod en feil under nedlasting",
    MEDIA_ERR_DECODE: "Det oppstod en feil under dekoding",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Lyd/video støttes ikke",
    REPLAY: "Spill av igjen",
    ERROR: "Nettverk er frakoblet",
    PLAY_TIPS: "Spill av",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Spill neste",
    DOWNLOAD_TIPS: "Last ned",
    ROTATE_TIPS: "Roter",
    RELOAD_TIPS: "Last inn på nytt",
    FULLSCREEN_TIPS: "Gå til fullskjerm",
    EXITFULLSCREEN_TIPS: "Avslutt fullskjerm",
    CSSFULLSCREEN_TIPS: "CSS-fullskjerm",
    EXITCSSFULLSCREEN_TIPS: "Avslutt CSS-fullskjerm",
    TEXTTRACK: "Undertekst",
    PIP: "PIP",
    SCREENSHOT: "Skjermbilde",
    LIVE: "DIREKTE",
    OFF: "Av",
    OPEN: "Åpne",
    MINI_DRAG: "Klikk og hold for å dra",
    MINISCREEN: "Miniskjerm",
    REFRESH_TIPS: "Vennligst prøv",
    REFRESH: "Oppdater",
    FORWARD: "fremover",
    LIVE_TIP: "Direkte",
    TM_SUBTITLE_SHOW_TIPS: "Slå på undertekster",
    TM_SUBTITLE_HIDE_TIPS: "Slå av undertekster",
    TM_MINIMIZE_TIPS: "Skjul videoen"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Personvernerklæring",
    lastUpdated: "Sist oppdatert: 25. august 2025",
    policyDescription:
      "Denne policyen beskriver hvordan Scribify (heretter referert til som «Scribify», «vår», «vi», «oss») samler inn, bruker og utleverer din personlige informasjon når du bruker tjenestene og nettstedene våre.",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "og programvare (samlet kalt «Tjenestene»).",
    policyAgreement:
      "Vennligst les denne personvernerklæringen nøye og sørg for at du forstår den. Ved å bruke noen av tjenestene våre, godtar du denne personvernerklæringen. Hvis du ikke samtykker i vår bruk av dine personopplysninger i samsvar med denne policyen, må du umiddelbart slutte å bruke tjenestene våre.",
    policyOverview:
      "I denne policyen beskriver vi hvilke data vi samler inn og hvorfor, hvordan dataene dine håndteres, og dine rettigheter med hensyn til dataene dine. Vi selger ikke dataene dine.",
    scopeTitle: "1. Omfanget av denne personvernerklæringen",
    whatWeCollectTitle: "2. Hva vi samler inn og hvorfor",
    accessShareTitle: "3. Når vi får tilgang til eller deler informasjonen din",
    secureDataTitle: "4. Hvordan vi sikrer dataene dine",
    deleteContentTitle: "5. Hva skjer når du sletter innholdet ditt",
    locationTitle: "6. Plassering av nettsted og data",
    childrenPrivacyTitle: "7. Barns personvern",
    updatesTitle: "8. Oppdateringer av denne personvernerklæringen",
    contactUsTitle: "9. Kontakt oss",
    identityAccessTitle: "2.1 Identitet og tilgang",
    billingInfoTitle: "2.2 Faktureringsinformasjon",
    productInteractionsTitle: "2.3 Produktinteraksjoner",
    websiteInteractionsTitle: "2.4 Nettstedsinteraksjoner",
    cookiesTitle: "2.5 informasjonskapsler",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondanse",
    scopeContent:
      "Denne personvernerklæringen gjelder kun for vår innsamling og behandling av informasjon om brukere av tjenestene. Denne personvernerklæringen gjelder ikke for tjenester, nettsteder eller programvare som drives av tredjeparter og som er lenket til oss (enten vi tilbyr disse lenkene eller andre brukere deler dem), og den gjelder heller ikke for innhold, data, applikasjoner eller materiale fra tredjeparter. Vi anbefaler at du sjekker personvernerklæringen til tredjepartsnettsteder eller programvare før du gir dem informasjon.",
    collectPrinciple:
      "Vårt veiledende prinsipp er å bare samle inn det vi trenger. Her er hva det betyr i praksis:",
    identityAccessContent:
      "Når du registrerer deg for et av produktene våre, ber vi om identifiserende informasjon som navn og e-postadresse. Dette er for å kunne tilby viktig produktfunksjonalitet og sende deg produktoppdateringer og annen viktig informasjon.",
    billingInfoContent:
      "Hvis du registrerer deg for et betalt produkt, vil du bli bedt om å oppgi betalingsinformasjon og faktureringsadresse. Betalingsinformasjonen sendes direkte til betalingsbehandleren vår og når ikke serverne våre.",
    productInteractionsContent:
      "Vi lagrer innholdet du laster opp, mottar eller vedlikeholder i produktkontoene dine på serverne våre. Med mindre du sletter dette innholdet, kan vi beholde det så lenge kontoen din er aktiv.",
    websiteInteractionsContent:
      "Vi samler inn informasjon om nettleseraktiviteten din for analyse og statistiske formål, som testing av konverteringsfrekvens og eksperimentering med nye produktdesign. Dette inkluderer for eksempel nettleser- og operativsystemversjoner, IP-adressen din, hvilke nettsider du besøkte og hvor lang tid det tok å laste inn, og hvilket nettsted som henviste deg til oss. Hvis du har en konto og er logget på, er disse nettanalysedataene knyttet til IP-adressen og brukerkontoen din inntil kontoen din ikke lenger er aktiv.",
    cookiesContent1:
      "Vi bruker også vedvarende førsteparts informasjonskapsler og noen tredjeparts informasjonskapsler for å lagre visse preferanser, gjøre det enklere for deg å bruke applikasjonene våre, utføre A/B-testing samt støtte noe analyse.",
    cookiesContent2:
      "En informasjonskapsel er en tekstbit som lagres av nettleseren din. Den kan bidra til å huske innloggingsinformasjon og nettstedsinnstillinger. Den kan også samle inn informasjon som nettlesertype, operativsystem, besøkte nettsider, besøksvarighet, vist innhold og andre klikkstrømdata. Du kan justere innstillinger for oppbevaring av informasjonskapsler og godta eller blokkere individuelle informasjonskapsler i nettleserinnstillingene dine, selv om appene våre ikke vil fungere, og andre aspekter ved tjenesten vår kanskje ikke fungerer som de skal hvis du slår av informasjonskapsler.",
    voluntaryCorrespondenceContent:
      "Når du sender oss en e-post med et spørsmål eller ber om hjelp, beholder vi denne korrespondansen, inkludert e-postadressen din, slik at vi har en historikk over tidligere korrespondanse å referere til hvis du tar kontakt i fremtiden.",
    accessShareContent1:
      "For å levere produkter eller tjenester du har bedt om. Vi bruker noen tredjeparts underdatabehandlere for å kjøre applikasjonene våre og levere tjenestene til deg. Dette inkluderer leverandører av skytjenester og analysetjenester.",
    accessShareContent2:
      "For å undersøke, forhindre eller iverksette tiltak angående misbruk. Tilgang til en kundes konto når man undersøker potensielt misbruk er en siste utvei. Vi ønsker å beskytte personvernet og sikkerheten til både kundene våre og de som rapporterer problemer til oss, og vi gjør vårt beste for å balansere dette ansvaret gjennom hele prosessen. Hvis vi oppdager at du bruker produktene våre til et begrenset formål, vil vi iverksette tiltak etter behov, inkludert å varsle relevante myndigheter der det er berettiget.",
    accessShareContent3: "Når det er påkrevd i henhold til gjeldende lov.",
    userDataRequests:
      "– Forespørsler om brukerdata. Vår policy er å ikke svare på forespørsler fra myndigheter om brukerdata med mindre vi er tvunget til det av en juridisk prosess eller under begrensede omstendigheter i tilfelle en nødforespørsel. Hvis amerikanske politimyndigheter har nødvendig arrestordre, stevning eller rettskjennelse som krever at vi deler data, må vi imidlertid etterkomme dette. På samme måte vil vi bare svare på forespørsler fra myndigheter utenfor USA hvis vi er tvunget til det av den amerikanske regjeringen gjennom prosedyrer som er beskrevet i en traktat eller avtale om gjensidig juridisk bistand. Det er vår policy å varsle berørte brukere før vi deler data, med mindre vi er juridisk forbudt å gjøre det, og unntatt i noen nødstilfeller.",
    preservationRequests:
      "– Forespørsler om bevaring. På samme måte er det vår policy å kun etterkomme forespørsler om å bevare data dersom det er pålagt av den amerikanske føderale lov om lagret kommunikasjon, 18 USC paragraf 2703(f), eller av en behørig amerikansk stevning for sivile saker. Vi deler ikke bevarte data med mindre det er pålagt av loven eller pålagt av en rettskjennelse som vi velger å ikke anke. Videre, med mindre vi mottar en behørig arrestordre, rettskjennelse eller stevning før den nødvendige bevaringsperioden utløper, vil vi ødelegge eventuelle bevarte kopier av kundedata ved slutten av bevaringsperioden.",
    taxAudit:
      "– Hvis vi blir revidert av en skattemyndighet, kan vi bli pålagt å dele faktureringsrelatert informasjon. Hvis det skjer, vil vi bare dele minimumsbehovet, for eksempel faktureringsadresser og informasjon om skattefritak.",
    secureDataContent1: "Alle data er kryptert via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "når den overføres fra serverne våre til nettleseren din.",
    deleteContentContent:
      "Hvis du sletter innhold, blir det umiddelbart utilgjengelig.",
    locationContent:
      "Våre produkter og andre nettsider drives i USA. Hvis du befinner deg i EU, Storbritannia eller andre steder utenfor USA, vær oppmerksom på at all informasjon du gir oss vil bli overført til og lagret i USA. Ved å bruke våre nettsteder eller tjenester og/eller gi oss din personlige informasjon, samtykker du til denne overføringen.",
    childrenPrivacyContent:
      "Tjenestene er ikke rettet mot barn, og vi samler ikke bevisst inn personopplysninger fra barn under 13 år. Hvis du er under 13 år, må du ikke sende inn personopplysninger gjennom tjenestene. Hvis du mener at et barn har gitt oss personopplysninger i strid med disse retningslinjene, kan du kontakte oss som angitt nedenfor.",
    updatesContent:
      "Vi kan oppdatere disse retningslinjene etter behov for å overholde relevante forskrifter og gjenspeile eventuelle nye praksiser. Når vi foretar en vesentlig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden.",
    contactUsContent1:
      "Hvis du har spørsmål, kommentarer eller klager angående vår personvernerklæring, vennligst",
    contactUs: "kontakt oss",
    contactUsContent2:
      "og vi vil gjøre vårt beste for å behandle klagen din så snart som mulig."
  },
  termsOfService: {
    termsOfServiceTitle: "Vilkår for bruk",
    lastUpdated: "Sist oppdatert: 21. september 2022",
    thankYouMessage: "Takk for at du bruker produktene våre!",
    companyReference:
      "Når vi sier «Selskap», «vi», «vår» eller «oss» i dette dokumentet, refererer vi til Scribify.",
    servicesDefinition:
      "Når vi sier «tjenester», mener vi ethvert produkt som er laget og vedlikeholdt av Scribify, enten det leveres i en nettleser, et skrivebordsprogram, en mobilapplikasjon eller et annet format.",
    termsUpdateNotice:
      "Vi kan oppdatere disse tjenestevilkårene i fremtiden. Vanligvis har disse endringene vært for å tydeliggjøre noen av disse vilkårene ved å lenke til en utvidet relatert policy. Når vi gjør en betydelig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden og iverksette andre nødvendige tiltak for å varsle kontoinnehavere.",
    acceptanceOfAgreementTitle: "1. Godkjenning av avtalen",
    scribifyServicesTitle: "2. Scribifys tjenester",
    accountTermsTitle: "3. Kontovilkår",
    paymentRefundsTitle: "4. Betaling, refusjon og planendringer",
    cancellationTerminationTitle: "5. Avbestilling og oppsigelse",
    submissionsTitle: "6. Innsendinger",
    uptimeSecurityTitle: "7. Oppetid og sikkerhet",
    siteManagementTitle: "8. Nettstedsadministrasjon",
    copyrightContentTitle: "9. Opphavsrett og innholdseierskap",
    prohibitedActivitiesTitle: "10. Forbudte aktiviteter",
    featuresBugsTitle: "11. Funksjoner og feil",
    correctionsTitle: "12. RETTELSER",
    userDataTitle: "13. Brukerdata",
    privacyPolicyTitle: "14. Personvernerklæring",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakt oss",
    acceptanceContent1:
      "Ved å bruke tjenestene våre, indikerer du at du godtar denne avtalen, som dermed blir en bindende kontrakt mellom deg og Scribify. Du erklærer at du er juridisk i stand til å godta disse vilkårene, og bekrefter at du er myndig nok til å inngå en bindende kontrakt. Scrifys aksept er uttrykkelig betinget av at du samtykker i alle vilkårene i denne avtalen.",
    acceptanceContent2:
      "Tjenestene er ikke ment for og skal ikke brukes av noen under 18 år. Ved å bruke tjenestene erklærer og garanterer du at du oppfyller de ovennevnte kvalifikasjonskravene.",
    acceptanceContent3:
      "Begrepene «du», «din» og «deg selv» skal også omfatte dine ansatte, agenter, forretningsrepresentanter og alle andre personer som du gir tilgang til Tjenestene gjennom Kontoen din (som definert nedenfor). Du er ansvarlig for å sørge for at alle personer som får tilgang til Tjenestene gjennom Kontoen din er klar over disse Vilkårene og overholder dem.",
    acceptanceContent4:
      "Scribify forbeholder seg retten til å revidere og oppdatere disse vilkårene fra tid til annen etter eget skjønn. Alle endringer trer i kraft umiddelbart etter publisering. Din fortsatte bruk av tjenestene etter publisering av reviderte vilkår betyr at du godtar og samtykker i endringene. Du forventes å sjekke denne siden fra tid til annen, slik at du er klar over eventuelle endringer, da de er bindende for deg.",
    servicesContent1:
      "Tjenestene våre lar brukere omdanne talesamtaler til transkribert tekst som kan søkes i, oversettes og deles med andre.",
    servicesContent2:
      "Du kan velge om du vil bruke gratisversjonen av tjenestene («Gratistjenester») eller den abonnementsbaserte, betalte versjonen av tjenestene som du kan bli pålagt å betale gebyrer for («Betalte tjenester»).",
    servicesContent3:
      "Vi vil gjøre tjenestene tilgjengelige for deg. Du er ansvarlig for å gjøre alle nødvendige ordninger for at du skal ha tilgang til tjenestene.",
    accountTerms1:
      "– Du er ansvarlig for å opprettholde sikkerheten til kontoen din. Selskapet kan ikke og vil ikke være ansvarlig for tap eller skade som følge av din manglende overholdelse av denne sikkerhetsforpliktelsen.",
    accountTerms2:
      "- Du har ikke lov til å bruke Tjenestene til noe ulovlig, uetisk eller umoralsk formål.",
    accountTerms3:
      "– Du er ansvarlig for alt innhold som legges ut og aktivitet som skjer på kontoen din. Dette inkluderer innhold som legges ut av andre som enten: (a) har tilgang til påloggingsinformasjonen din; eller (b) har sine egne pålogginger på kontoen din.",
    accountTerms4:
      "– Du må være et menneske. Kontoer registrert av «boter» eller andre automatiserte metoder er ikke tillatt.",
    paymentContent1:
      "– For betalte tjenester som tilbyr en gratis prøveperiode, forklarer vi prøveperiodens lengde når du registrerer deg. Etter prøveperioden må du betale på forhånd for å fortsette å bruke tjenesten. Hvis du ikke betaler, vil disse tjenestene opphøre.",
    paymentContent2:
      "– Hvis du oppgraderer fra et gratisabonnement til et betalt abonnement, belaster vi kortet ditt umiddelbart, og faktureringsperioden starter på oppgraderingsdagen.",
    paymentContent3:
      "– Alle gebyrer er eksklusive alle skatter, avgifter eller gebyrer pålagt av skattemyndighetene. Der det er nødvendig, vil vi innkreve disse skattene på vegne av skattemyndighetene og overføre dem til skattemyndighetene. Ellers er du ansvarlig for betaling av alle skatter, avgifter eller gebyrer.",
    paymentContent4:
      "– Alle kjøp refunderes ikke. Du kan når som helst kansellere betalte tjenester ved å logge inn på kontoen din. For betalte abonnementer vil oppsigelsen tre i kraft ved utgangen av den gjeldende betalte perioden, med mindre annet er oppgitt.",
    cancellationContent1:
      "– Hvis du kansellerer Tjenesten før utløpet av en betalt periode, vil kanselleringen tre i kraft umiddelbart, og du vil ikke bli belastet igjen. Vi fordeler ikke automatisk ubrukt tid forholdsmessig i forrige faktureringsperiode.",
    cancellationContent2:
      "– Vi har rett til å suspendere eller avslutte kontoen din og nekte enhver nåværende eller fremtidig bruk av tjenestene våre uansett grunn når som helst. Suspensjon betyr at du ikke vil kunne få tilgang til kontoen eller noe innhold på kontoen. Oppsigelse vil videre føre til sletting av kontoen din eller din tilgang til kontoen din, og tap og avståelse av alt innhold på kontoen din. Vi forbeholder oss også retten til å nekte bruk av tjenestene til hvem som helst uansett grunn når som helst. Vi har denne klausulen fordi statistisk sett, av hundretusenvis av kontoer på tjenestene våre, er det minst én som gjør noe skumelt.",
    cancellationContent3:
      "- Verbal, fysisk, skriftlig eller annen mishandling (inkludert trusler om mishandling eller gjengjeldelse) av selskapets ansatt eller leder kan føre til umiddelbar oppsigelse av kontoen.",
    submissionsContent:
      "Du erkjenner og samtykker i at eventuelle spørsmål, kommentarer, forslag, ideer, tilbakemeldinger eller annen informasjon angående nettstedet («bidrag») som du gir oss, ikke er konfidensielle og skal bli vår eiendom. Vi skal eie eksklusive rettigheter, inkludert alle immaterielle rettigheter, og skal ha rett til ubegrenset bruk og formidling av disse bidragene for ethvert lovlig formål, kommersielt eller annet, uten bekreftelse eller kompensasjon til deg. Du fraskriver deg herved alle moralske rettigheter til slike bidrag, og du garanterer herved at slike bidrag er originale fra deg, eller at du har rett til å sende inn slike bidrag. Du samtykker i at det ikke skal være noen regressrett mot oss for påstått eller faktisk krenkelse eller misbruk av noen eiendomsrett i dine bidrag.",
    uptimeContent1:
      "– Din bruk av tjenestene skjer på egen risiko. Vi tilbyr disse tjenestene «som de er» og «som tilgjengelig». Vi tilbyr ikke tjenestenivåavtaler for de fleste av tjenestene våre, men tar oppetiden til applikasjonene våre på alvor.",
    uptimeContent2:
      "– Vi forbeholder oss retten til å midlertidig deaktivere kontoen din dersom bruken din overstiger den vanlige bruken til andre kunder av tjenestene betydelig. Vi vil selvfølgelig kontakte deg før vi iverksetter tiltak, bortsett fra i sjeldne tilfeller der bruksnivået kan påvirke ytelsen til tjenesten negativt for andre kunder.",
    uptimeContent3:
      "– Vi tar mange tiltak for å beskytte og sikre dataene dine gjennom sikkerhetskopiering, redundans og kryptering. Vi håndhever kryptering for dataoverføring over det offentlige internett.",
    uptimeContent4:
      "– Vi bruker tredjepartsleverandører og hostingpartnere til å levere nødvendig maskinvare, programvare, nettverk, lagring og relatert teknologi som kreves for å kjøre Tjenestene.",
    siteManagementContent:
      "Vi forbeholder oss retten, men ikke plikten, til å: (1) overvåke nettstedet for brudd på disse tjenestevilkårene; (2) iverksette passende rettslige skritt mot alle som, etter eget skjønn, bryter loven eller disse tjenestevilkårene, inkludert, men ikke begrenset til, å rapportere en slik bruker til politimyndigheter; (3) etter eget skjønn og uten begrensning, nekte, begrense tilgang til, begrense tilgjengeligheten til eller deaktivere (i den grad det er teknologisk mulig) noen av dine bidrag eller deler av disse; (4) etter eget skjønn og uten begrensning, varsel eller ansvar, fjerne fra nettstedet eller på annen måte deaktivere alle filer og innhold som er for store eller på noen måte er byrdefulle for våre systemer; og (5) ellers administrere nettstedet på en måte som er utformet for å beskytte våre rettigheter og eiendom og for å legge til rette for at nettstedet fungerer som det skal.",
    copyrightContent1:
      "– Alt innhold som legges ut på Tjenestene må være i samsvar med amerikansk lov om opphavsrett.",
    copyrightContent2:
      "– Vi gjør ikke krav på noen immaterielle rettigheter over materialet du leverer til tjenestene. Alt materiale som lastes opp forblir ditt.",
    copyrightContent3:
      "– Vi forhåndssjekker ikke innhold, men forbeholder oss retten (men ikke plikten) til etter eget skjønn å nekte eller fjerne innhold som er tilgjengelig via Tjenesten.",
    copyrightContent4:
      "– Navnene, utseendet og følelsen av tjenestene er opphavsrettsbeskyttet © til selskapet. Alle rettigheter forbeholdt. Du kan ikke duplisere, kopiere eller gjenbruke noen del av HTML-, CSS-, JavaScript- eller visuelle designelementer uten uttrykkelig skriftlig tillatelse fra selskapet. Du må be om tillatelse til å bruke selskapets logo eller noen tjenestelogoer til markedsføringsformål. Vennligst",
    emailUs: "e-post oss",
    copyrightContent5:
      "forespørsler om bruk av logoer. Vi forbeholder oss retten til å trekke tilbake denne tillatelsen hvis du bryter disse tjenestevilkårene.",
    copyrightContent6:
      "- Du samtykker i å ikke reprodusere, duplisere, kopiere, selge, videreselge eller utnytte noen del av Tjenestene, bruk av Tjenestene eller tilgang til Tjenestene uten uttrykkelig skriftlig tillatelse fra Selskapet.",
    copyrightContent7:
      "– Du må ikke endre et annet nettsted på en feilaktig måte antyde at det er tilknyttet Tjenestene eller Selskapet.",
    copyrightContent8:
      "– Vi respekterer andres immaterielle rettigheter. Hvis du mener at materiale som er tilgjengelig på eller gjennom nettstedet krenker opphavsretten du eier eller kontrollerer, ber vi deg umiddelbart om å",
    contactUs: "kontakt oss",
    copyrightContent9:
      "En kopi av varselet ditt vil bli sendt til personen som la ut eller lagret materialet som er omtalt i varselet. Vær oppmerksom på at du i henhold til gjeldende lov kan bli holdt ansvarlig for erstatning dersom du gir vesentlige feilaktige fremstillinger i et varsel. Hvis du derfor ikke er sikker på om materiale som ligger på eller lenkes til av nettstedet krenker opphavsretten din, bør du først vurdere å kontakte en advokat.",
    prohibitedActivitiesIntro:
      "Du har ikke tillatelse til å få tilgang til eller bruke nettstedet til noe annet formål enn det vi gjør nettstedet tilgjengelig for. Nettstedet kan ikke brukes i forbindelse med kommersielle tiltak, bortsett fra de som er spesifikt anbefalt eller godkjent av oss.",
    prohibitedActivitiesUserAgreement:
      "Som bruker av nettstedet samtykker du i å ikke:",
    prohibitedActivity1:
      "- Systematisk hente data eller annet innhold fra nettstedet for å opprette eller kompilere, direkte eller indirekte, en samling, sammenstilling, database eller katalog uten skriftlig tillatelse fra oss.",
    prohibitedActivity2:
      "- Lure, bedra eller villede oss og andre brukere, spesielt i forsøk på å få tilgang til sensitiv kontoinformasjon som brukerpassord.",
    prohibitedActivity3:
      "- Omgå, deaktivere eller på annen måte forstyrre sikkerhetsrelaterte funksjoner på nettstedet, inkludert funksjoner som forhindrer eller begrenser bruk eller kopiering av innhold eller håndhever begrensninger på bruken av nettstedet og/eller innholdet der.",
    prohibitedActivity4:
      "- Nedsette, sverte eller på annen måte skade oss og/eller nettstedet etter vår mening.",
    prohibitedActivity5:
      "- Bruke informasjon innhentet fra nettstedet til å trakassere, misbruke eller skade en annen person.",
    prohibitedActivity6:
      "- Gjøre upassende bruk av våre støttetjenester eller sende inn falske rapporter om misbruk eller misbruk.",
    prohibitedActivity7:
      "- Bruke nettstedet på en måte som er uforenlig med gjeldende lover eller forskrifter.",
    prohibitedActivity8:
      "- Delta i uautorisert innramming av eller lenking til nettstedet.",
    prohibitedActivity9:
      "- Laste opp eller overføre (eller forsøke å laste opp eller overføre) virus, trojanske hester eller annet materiale, inkludert overdreven bruk av store bokstaver og spamming (kontinuerlig publisering av repeterende tekst), som forstyrrer en parts uavbrutte bruk og glede av nettstedet, eller som modifiserer, svekker, forstyrrer, endrer eller forstyrrer bruken, funksjonene, driften eller vedlikeholdet av nettstedet.",
    prohibitedActivity10:
      "- Delta i automatisert bruk av systemet, for eksempel bruk av skript for å sende kommentarer eller meldinger, eller bruk av datautvinning, roboter eller lignende verktøy for datainnsamling og -utvinning.",
    prohibitedActivity11:
      "- Slett opphavsretts- eller annen eiendomsrettserklæring fra alt innhold.",
    prohibitedActivity12:
      "- Forsøke å utgi seg for å være en annen bruker eller person, eller bruke brukernavnet til en annen bruker.",
    prohibitedActivity13:
      '- Laste opp eller overføre (eller forsøke å laste opp eller overføre) materiale som fungerer som en passiv eller aktiv informasjonsinnsamlings- eller overføringsmekanisme, inkludert, men ikke begrenset til, klare grafikkutvekslingsformater ("gifs"), 1×1-piksler, web bugs, informasjonskapsler eller andre lignende enheter (noen ganger referert til som "spyware" eller "passive innsamlingsmekanismer" eller "pcms").',
    prohibitedActivity14:
      "- Forstyrre, avbryte eller skape en urimelig belastning på nettstedet eller nettverkene eller tjenestene som er koblet til nettstedet.",
    prohibitedActivity15:
      "- Trakassere, irritere, skremme eller true noen av våre ansatte eller agenter som er involvert i å tilby deg deler av nettstedet.",
    prohibitedActivity16:
      "- Forsøke å omgå eventuelle tiltak på nettstedet som er utformet for å forhindre eller begrense tilgang til nettstedet, eller deler av nettstedet.",
    prohibitedActivity17:
      "- Kopiere eller tilpasse nettstedets programvare, inkludert, men ikke begrenset til, Flash, PHP, HTML, JavaScript eller annen kode.",
    prohibitedActivity18:
      "- Med unntak av det som er tillatt i henhold til gjeldende lov, dechiffrere, dekompilere, demontere eller omvendt utvikle programvare som omfatter eller på noen måte utgjør en del av nettstedet.",
    prohibitedActivity19:
      "- Med unntak av det som måtte være et resultat av standard bruk av søkemotorer eller nettlesere, bruke, lansere, utvikle eller distribuere automatiserte systemer, inkludert, men ikke begrenset til, spider-programmer, roboter, jukseverktøy, skrapere eller offline-lesere som får tilgang til nettstedet, eller bruk eller lansering av uautoriserte skript eller annen programvare.",
    prohibitedActivity20:
      "- Bruk en innkjøpsagent eller innkjøpsagent for å foreta kjøp på nettstedet.",
    prohibitedActivity21:
      "- Foreta uautorisert bruk av nettstedet, inkludert innsamling av brukernavn og/eller e-postadresser til brukere elektronisk eller på andre måter med det formål å sende uønsket e-post, eller opprette brukerkontoer automatisk eller under falske forutsetninger.",
    prohibitedActivity22:
      "- Bruke nettstedet som en del av enhver innsats for å konkurrere med oss eller på annen måte bruke nettstedet og/eller innholdet til inntektsgenererende oppgaver eller kommersielle foretak.",
    prohibitedActivity23:
      "- Bruk nettstedet til å annonsere eller tilby salg av varer og tjenester.",
    prohibitedActivity24: "- Selg eller overfør profilen din på annen måte.",
    featuresContent1:
      "Vi utformer tjenestene våre med omhu, basert på vår egen erfaring og erfaringene til kunder som deler sin tid og tilbakemeldinger. Det finnes imidlertid ingen tjeneste som tilfredsstiller alle. Vi gir ingen garantier for at tjenestene våre vil oppfylle dine spesifikke krav eller forventninger.",
    featuresContent2:
      "Vi tester også alle funksjonene våre før vi sender dem ut. Som med all programvare, inneholder tjenestene våre uunngåelig noen feil. Vi sporer feilene som rapporteres til oss og jobber med dem, spesielt de som er relatert til sikkerhet eller personvern. Ikke alle rapporterte feil vil bli rettet, og vi garanterer ikke helt feilfrie tjenester.",
    correctionsContent1:
      "Det kan være informasjon på nettstedet som inneholder typografiske feil, unøyaktigheter eller utelatelser, inkludert beskrivelser, priser, tilgjengelighet og diverse annen informasjon. Vi forbeholder oss retten til å korrigere eventuelle feil, unøyaktigheter eller utelatelser og til å endre eller oppdatere informasjonen på nettstedet når som helst, uten forvarsel.",
    correctionsContent2:
      "Vi kan ikke garantere at nettstedet vil være tilgjengelig til enhver tid. Vi kan oppleve problemer med maskinvare, programvare eller andre problemer, eller måtte utføre vedlikehold knyttet til nettstedet, noe som kan føre til avbrudd, forsinkelser eller feil. Vi forbeholder oss retten til å endre, revidere, oppdatere, suspendere, avvikle eller på annen måte modifisere nettstedet når som helst og av en hvilken som helst grunn uten varsel til deg. Du samtykker i at vi ikke har noe ansvar for tap, skade eller ulempe forårsaket av din manglende evne til å få tilgang til eller bruke nettstedet under nedetid eller avvikling av nettstedet. Ingenting i disse tjenestevilkårene skal tolkes slik at vi forplikter oss til å vedlikeholde og støtte nettstedet eller til å levere rettelser, oppdateringer eller utgivelser i forbindelse med dette.",
    userDataContent:
      "Vi vil lagre visse data du overfører til nettstedet med det formål å administrere nettstedets ytelse, samt data knyttet til din bruk av nettstedet. Selv om vi regelmessig sikkerhetskopierer data, er du eneansvarlig for alle data du overfører eller som er relatert til aktivitet du har utført ved bruk av nettstedet. Du samtykker i at vi ikke har noe ansvar overfor deg for tap eller ødeleggelse av slike data, og du fraskriver deg herved enhver rett til å reise søksmål mot oss som følge av slikt tap eller ødeleggelse av slike data.",
    privacyPolicyContent1:
      "Vi bryr oss om personvern og sikkerhet. Vennligst les vår",
    privacyPolicy: "Personvernerklæring",
    privacyPolicyContent2:
      "Ved å bruke nettstedet godtar du å være bundet av vår personvernerklæring, som er innlemmet i disse tjenestevilkårene. Vær oppmerksom på at nettstedet er vertskap for i USA. Hvis du besøker nettstedet fra en annen region i verden med lover eller andre krav som regulerer innsamling, bruk eller utlevering av personopplysninger som avviker fra gjeldende lover i USA, overfører du gjennom din fortsatte bruk av nettstedet dine data til USA, og du samtykker i at dataene dine overføres til og behandles i USA.",
    liabilityIntro:
      "Vi nevner ansvar gjennomgående i disse vilkårene, men for å samle alt i én seksjon:",
    liabilityContent:
      "Du forstår og samtykker uttrykkelig i at Selskapet ikke skal være ansvarlig, verken i henhold til lov eller billighetsrett, overfor deg eller noen tredjepart for direkte, indirekte, tilfeldige, tapte fortjeneste, spesielle, følgeskader, straffende eller eksemplariske erstatninger, inkludert, men ikke begrenset til, erstatning for tapt fortjeneste, goodwill, bruk, data eller andre immaterielle tap (selv om Selskapet har blitt informert om muligheten for slike skader), som følge av: (1) bruk eller manglende evne til å bruke Tjenestene; (2) feil, mangler eller unøyaktigheter i innhold og materiale; (3) personskade eller skade på eiendom, av noen art, som følge av din tilgang til og bruk av nettstedet; (4) kostnaden for anskaffelse av erstatningsvarer og -tjenester som følge av varer, data, informasjon eller tjenester kjøpt eller innhentet eller meldinger mottatt eller transaksjoner inngått gjennom eller fra Tjenestene; (5) uautorisert tilgang til eller bruk av våre sikre servere og/eller all personlig informasjon og/eller finansiell informasjon lagret der; (6) avbrudd eller opphør av overføring til eller fra nettstedet; (7) eventuelle feil, virus, trojanske hester eller lignende som kan overføres til eller gjennom nettstedet av en tredjepart, og/eller; (8) eventuelle feil eller utelatelser i innhold og materialer eller for tap eller skade av noe slag som følge av bruk av innhold som er lagt ut, overført eller på annen måte gjort tilgjengelig via nettstedet; (9) uttalelser eller oppførsel fra en tredjepart på tjenesten; (10) eller andre forhold knyttet til disse tjenestevilkårene eller tjenestene, enten som kontraktsbrudd, erstatningsansvar (inkludert aktiv eller passiv uaktsomhet) eller annen ansvarsteori.",
    miscellaneousContent:
      "Disse tjenestevilkårene og eventuelle retningslinjer eller driftsregler som er lagt ut av oss på nettstedet eller i forbindelse med nettstedet, utgjør hele avtalen og forståelsen mellom deg og oss. Dersom vi ikke utøver eller håndhever noen rettighet eller bestemmelse i disse tjenestevilkårene, skal dette ikke anses som en fraskrivelse av en slik rettighet eller bestemmelse. Disse tjenestevilkårene gjelder i den grad loven tillater det. Vi kan når som helst overdra noen eller alle våre rettigheter og forpliktelser til andre. Vi er ikke ansvarlige for tap, skade, forsinkelse eller unnlatelse av å handle forårsaket av årsaker utenfor vår rimelige kontroll. Hvis noen bestemmelse eller del av en bestemmelse i disse tjenestevilkårene anses å være ulovlig, ugyldig eller ikke-håndhevbar, anses denne bestemmelsen eller delen av bestemmelsen å være atskilt fra disse tjenestevilkårene og påvirker ikke gyldigheten og håndhevbarheten av eventuelle gjenværende bestemmelser. Det oppstår ikke noe joint venture-, partnerskaps-, ansettelses- eller agenturforhold mellom deg og oss som følge av disse tjenestevilkårene eller bruk av nettstedet. Du samtykker i at disse tjenestevilkårene ikke skal tolkes mot oss i kraft av at vi har utarbeidet dem. Du frasier deg herved ethvert forsvar du måtte ha basert på den elektroniske formen av disse tjenestevilkårene og mangelen på signering fra partene heri for å undertegne disse tjenestevilkårene.",
    contactUsContent1:
      "Hvis du har et spørsmål om noen av tjenestevilkårene, vennligst",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Funksjoner",
    UnlimitedTranscription: "Ubegrenset transkripsjon",
    BulkUpload: "Masseopplasting",
    Accuracy: "96 % nøyaktighet",
    Pricing: "Prissetting",
    UseCases: "Brukstilfeller",
    AllUseCases: "Alle brukstilfeller",
    Podcasters: "Podkastere",
    Journalists: "Journalister",
    ContentCreators: "Innholdsskapere",
    Researchers: "Forskere",
    BusinessTeams: "Forretningsteam",
    Educators: "Lærere",
    Resources: "Ressurser",
    YouTubetoMP4: "YouTube til MP4",
    StartFreeTrial: "Prøv det gratis"
  },
  Footer: {
    des: "Verdens første virkelig ubegrensede AI-transkripsjonstjeneste. Ingen tak, ingen begrensninger, bare frihet til å skape.",
    Features: "Funksjoner",
    UseCases: "Brukstilfeller",
    Company: "Bedrift",
    featureMenus: ["Ubegrenset transkripsjon", "Masseopplasting", "96 % nøyaktighet"],
    useCaseMenus: [
          "Alle brukstilfeller",
          "Podkastere",
          "Journalister",
          "Innholdsskapere",
          "Forskere",
          "Forretningsteam",
          "Lærere"
        ],
    companyMenus: [
          "Om",
          "Prissetting",
          "Privatliv",
          "Vilkår"
        ]
  },
  Index: {
    Hero: {
      badge: "Slutt på «krymping» – faktisk ubegrenset",
      h1: "Slutt å betale for grenser:",
      gradient: "Virkelig ubegrenset AI-transkripsjon",
      subtitle: "Last opp hele podkastarkivet ditt. Transkriber alle intervjuene dine. Behandle 50 filer samtidig. Ingen månedlige grenser, ingen opplastingsgrenser. Endelig transkripsjon som skaleres med dine faktiske behov.",
      FreeTrial: "Prøv det gratis – uten kredittkort",
      HowWorks: "Se hvordan det fungerer",
      Unlimited: "Ubegrenset filopplasting",
      NoCap: "Ingen månedlig grense for minutter",
      Hour: "Støttede filer på 10 timer",
      ExploreUseCases: "Utforsk brukstilfeller"
    },
    Stats: {
      monthlyMinutes: "Månedlige minutter",
      fileUploads: "Filopplastinger",
      batchProcessing: "Batchbehandling",
      maxFileLength: "Maksimal fillengde"
    },
    FeaturesGrid: {
      try_now: "Prøv det nå",
      no_signup: "Ingen påmelding nødvendig",
      experience_unltd: "Opplev virkelig ubegrenset transkripsjon",
      upload_50: "Last opp opptil 50 filer samtidig, her",
      no_limits: "Ingen flere skjulte grenser",
      no_surprises: "Ingen flere overraskelser",
      transparency: "Mens andre i stillhet reduserer minuttene dine eller skjuler tak i liten skrift, tror vi på radikal åpenhet",
      feat_unltd: "Egentlig ubegrenset",
      feat_unltd_desc: "Ingen «policy for rimelig bruk» begravd i ord og uttrykk. Ingen lagringsgrenser forkledd som «ubegrenset». Last opp hele arkivet ditt, transkriber alt. Vi mener det.",
      feat_bulk: "Frihet til masseopplasting",
      feat_bulk_desc: "Lei av «3 livstidsimporter» eller «10 filer per måned»? Last opp 50 filer samtidig, så mange ganger du trenger. Perfekt for å behandle etterslep.",
      feat_batch: "Batchbehandling",
      feat_batch_desc: "Behandle hele podkastsesongen din over natten. Last opp 50 intervjuer samtidig. La vår AI jobbe mens du sover. Våkn opp til fullførte transkripsjoner.",
      feat_accuracy: "96 % nøyaktighet",
      feat_accuracy_desc: "Bransjeledende AI med smart tegnsetting, dagbokregistrering for opptil 20 talere, og håndtering av aksenter og tekniske termer feilfritt.",
      feat_langs: "100+ språk",
      feat_langs_desc: "Transkriber til over 100 språk, oversett til over 249. Ingen ekstra kostnader for forskjellige språk. Globalt innhold, én enkel pris.",
      feat_pro: "Profesjonelle funksjoner",
      feat_pro_desc: "Tidsstempler på ordnivå for presis lyd-/videoposisjonering, nøyaktig taleridentifikasjon selv under raske samtalebytter og perfekt formatert tekst med avsnitt, setninger og tegnsetting for enkel lesing."
    },
    UseCases: {
      built_for: "Bygget for",
      "heavy_users": "Storbrukere som deg",
      "join_users": "Bli med YouTubere, innholdsskapere og podkastere som byttet fra «shrinkflation»-tjenester",
      "podcasters": {
        "title": "Podkastere",
        "des": "Last opp hele bakgrunnskatalogen din. Lag programnotater for hver episode. Du trenger ikke lenger å velge hvilke episoder du vil transkribere."
      },
      "content_creators": {
        "title": "Innholdsskapere",
        "des": "Gjør videobiblioteket ditt om til søkbar tekst. Generer teksting for alt. Ingen telling av minutter, bare skaping."
      },
      "journalists": {
        "title": "Journalister",
        "des": "Last opp alle intervjuene dine samtidig. Ikke flere hindringer for å få 10 filer per måned når fristen er over. Behandle alt."
      },
      researchers: {
        title: "Forskere",
        des: "Transkriber timevis med fokusgrupper og intervjuer. Last opp hele studien din samtidig. Få nøyaktig identifisering av talere."
      },
      business_teams: {
        title: "Forretningsteam",
        des: "Ta opp alle samtaler uten å bekymre deg for grenser. Få AI-innsikt i alle samtaler, ikke bare noen få utvalgte."
      },
      educators: {
        title: "Lærere",
        des: "Transkriber hele forelesningsserien. Gjør alt innhold tilgjengelig. Ingen valgmuligheter mellom kurs på grunn av minuttbegrensninger."
      }
    },
    Testimonials: {
      title: "Elsket av",
      highlighted_users: "50 000+ brukere",
      subtitle: "Se hvorfor fagfolk velger NeverCap fremfor begrensede alternativer",
      Mike: {
        "text": "Herregud, denne greia fungerer faktisk! Har laget en podkast i tre år og transkribert alt manuelt som en idiot. Lastet opp seks episoder samtidig, og det skilte meg og medprogramlederen min perfekt. Kaffebar-episoden jeg trodde var ødelagt? Krystallklar transkripsjon. Jeg kommer aldri til å skrive dette ut selv igjen.",
        "author": "Mike Rodriguez",
        "role": "Podcast-vert"
      },
      Sarah: {
        "text": "Jeg underviser på nett og trengte teksting til videoene mine. Prøvde tre andre verktøy som enten hadde rare begrensninger eller tok evigheter. Dette bare... fungerer? Lastet opp spanskforelesningen min og fikk perfekte tekstinger på omtrent to minutter. Studentene mine med hørselsproblemer er så fornøyde. Skulle ønske jeg fant dette før!",
        "author": "Sarah Chen",
        "role": "Lærer på nett"
      },
      Jessica: {
        "text": "Har brukt dette til intervjuer, og det er utrolig hvor nøyaktig det er. Hadde et 2-timers intervju på gebrokken engelsk + spansk, og alt stemte, til og med tidsstemplene. Brukte til å betale praktikanten min 200 dollar i måneden bare for å transkribere ting. Dette sparer meg bokstavelig talt penger hver måned.",
        "author": "Jessica Park",
        "role": "Frilansjournalist"
      }
    },
    PricingPreview: {
      "title": "Gjennomsiktig prising",
      "highlighted_text": "Ingen skjulte store bokstaver",
      "subtitle": "Velg din plan. Ingen stjerner, ingen liten skrift, ingen overraskelser"
    },
    FAQSection: {
      "title": "Ofte stilte",
      "titleHighlight": "Spørsmål",
      "questions": [
            {
              "q": "ubegrenset_policy",
              "question": "Er det virkelig ubegrenset? Hva er haken?",
              "answer": "Ja, det er virkelig ubegrenset! Ingen månedlige minuttbegrensninger, ingen gebyrer for overforbruk. De eneste begrensningene er tekniske: individuelle filer kan være opptil 10 timer lange eller 5 GB store, og du kan behandle 50 filer samtidig. Men du kan laste opp så mange grupper du vil, hele måneden."
            },
            {
              "q": "nøyaktighet",
              "question": "Hvor nøyaktig er transkripsjonen?",
              "answer": "Vi garanterer 96 % nøyaktighet for klar lyd. Vår AI er trent på millioner av timer med variert innhold og håndterer aksenter, tekniske termer og flere talere eksepsjonelt bra. For utfordrende lyd bidrar våre smarte forbedringsfunksjoner til å forbedre resultatene."
            },
            {
              "q": "språk",
              "question": "Hvilke språk støtter dere?",
              "answer": "Vi støtter transkripsjon på over 100 språk, inkludert engelsk, spansk, mandarin, hindi, arabisk, fransk og mer. I tillegg kan du oversette transkripsjonene dine til 249 forskjellige språk, noe som gjør det perfekt for globalt innhold."
            },
            {
              "q": "fart",
              "question": "Hvor rask er transkripsjonen?",
              "answer": "Lynraskt! En lydfil på 1 time behandles vanligvis på under 5 minutter. Med batchbehandling kan du laste opp 50 filer samtidig og la dem behandles parallelt. De fleste brukere våkner opp og finner at hele biblioteket deres er transkribert over natten."
            },
            {
              "q": "kansellering",
              "question": "Kan jeg avbestille når som helst?",
              "answer": "Absolutt! Ingen kontrakter, ingen avbestillingsgebyrer. Du kan oppgradere, nedgradere eller avbryte abonnementet ditt når som helst fra dashbordet ditt. Hvis du avbryter, beholder du tilgangen frem til slutten av faktureringsperioden."
            },
            {
              "q": "sikkerhet",
              "question": "Er dataene mine sikre?",
              "answer": "Din sikkerhet er vår prioritet. Vi er SOC 2-sertifiserte, bruker 256-bit kryptering for alle data, og bruker aldri innholdet ditt til å trene modellene våre. Du kan slette filene dine når som helst, og vi sletter dem automatisk etter 30 dager. GDPR- og CCPA-kompatibel."
            },
            {
              "q": "eksportformater",
              "question": "Hvilke eksportformater er tilgjengelige?",
              "answer": "Last ned transkripsjonene dine i alle formater du trenger: PDF, Word (DOCX), Excel, CSV, SRT-tekster, ren tekst (TXT) og VTT-tekster. Perfekt for enhver arbeidsflyt du har."
            },
            {
              "q": "filformater",
              "question": "Hvilke lyd- og videofiler kan jeg laste opp?",
              "answer": "Vi støtter så godt som alle lyd- og videoformater du kommer til å støte på: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV og mer. Hvis du kan spille det av, kan vi transkribere det."
            }
          ]
    },
    CTASection: {
      "title": "Klar til å bryte fri fra begrensninger?",
      "subtitle": "Bli med over 50 000 fagfolk som har gått over til virkelig ubegrenset transkripsjon",
      "button": "Prøv NeverCap Gratis",
      "disclaimer": "Ingen kredittkort kreves for gratisabonnementet • Oppgrader når som helst for ubegrenset tilgang"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "Ikke mer «krymping»",
      heroTitleLine1: "Virkelig ubegrenset",
      heroTitleLine2: "AI-transkripsjon",
      heroSubtitle: "Selv om Trint har en grense på 50 timer og Otter begrenser deg til 10 filer per måned, leverer vi det vi faktisk lover: ubegrenset transkripsjon uten skjulte grenser.",
      primaryCta: "Prøv det gratis – uten kredittkort",
      secondaryCta: "Se sannheten",
      comparisonBadLabel: "Hva andre gjør",
      comparisonBadTitle: "Skjulte grenser overalt",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trinn:",
      comparisonBadItem1Text: '"Ubegrenset" = 50 timer/måned grense',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Oter:",
      comparisonBadItem2Text: "3 livstidsimporter (gratis), 10/måned (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Ildfluer:",
      comparisonBadItem3Text: "Lagringsgrense på 800 minutter",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Beskrivelse:",
      comparisonBadItem4Text: "Maks 30 timer/måned",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Skjult i vilkår og betingelser",
      comparisonGoodLabel: "Hva vi gjør",
      comparisonGoodTitle: "Egentlig ubegrenset",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Ingen månedlige minuttgrenser",
      comparisonGoodItem1Text: "stadig",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Ubegrenset filopplasting",
      comparisonGoodItem2Text: "alltid",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Ingen lagringsgrenser",
      comparisonGoodItem3Text: "i det hele tatt",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 filer i batchopplasting",
      comparisonGoodItem4Text: "når som helst",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Gjennomsiktig politikk",
      comparisonGoodItem5Text: "på forhånd",
      feature1Label: "Ingen grenser",
      feature1TitlePart1: "Transkribere 1000 timer?",
      feature1TitlePart2: "Samme pris.",
      feature1Description: "Slutt å telle minutter. Slutt å se på store bokstaver. Enten du transkriberer 10 timer eller 10 000 timer per måned, betaler du samme faste pris. Ingen gebyrer for overskridelse. Ingen overraskelsesregninger.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Ingen triks for «fair use»-policyen",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ingen struping etter X timer",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ingen angst ved månedsslutt",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Månedlige timer",
      feature1Stat2Number: "0 kr",
      feature1Stat2Label: "Overskuddsgebyrer",
      feature1Stat3Number: "Døgnet rundt",
      feature1Stat3Label: "Last opp når som helst",
      feature1Stat4Number: "100 %",
      feature1Stat4Label: "Gjennomsiktig",
      feature2Label: "Massefrihet",
      feature2TitlePart1: "Last opp din",
      feature2TitlePart2: "Hele arkivet",
      feature2Description: "Otter gir deg 3 livstidsimporter gratis, 10 per måned på Pro. Vi gir deg ubegrenset. Last opp podcast-etterspørselen din, alle intervjuene dine, år med innspillinger. Ingen begrensninger.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 filer per gruppe",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Støtter 10-timers filer",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Prosess mens du sover",
      feature2TableRow1Label: "Oterfri",
      feature2TableRow1Value: "3 livstidsimporter",
      feature2TableRow2Label: "Oter Pro",
      feature2TableRow2Value: "10 filer/måned",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 timer/måned grense",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Helt ubegrenset ✓",
      feature3Label: "Sosial bevis",
      feature3TitlePart1: "Brukere er",
      feature3TitlePart2: "Bytter daglig",
      feature3Description: "«Jeg betaler 100 dollar i året for Otter, og de begrenser meg til 10 filimporter per måned. I det øyeblikket det finnes et alternativ med ubegrenset import, er jeg borte!» – Ekte Reddit-bruker",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Over 50 000 brukere byttet",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Fra Otters «krympeinflasjon»",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Går aldri tilbake",
      feature3Stat1Number: "50 000+",
      feature3Stat1Label: "Fornøyde brukere",
      feature3Stat2Number: "1 million+",
      feature3Stat2Label: "Filer behandlet",
      feature3Stat3Number: "96 %",
      feature3Stat3Label: "Nøyaktighet",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Ingen skjulte gebyrer",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutter/måned",
      trustBadge2Number: "100+",
      trustBadge2Label: "Språk",
      trustBadge3Number: "96 %",
      trustBadge3Label: "Nøyaktighet",
      trustBadge4Number: "50",
      trustBadge4Label: "Gruppeopplasting",
      ctaTitle: "Slutt å betale for Fake Unlimited",
      ctaSubtitle: "Bli med tusenvis som byttet til virkelig ubegrenset transkripsjon",
      finalCta: "Prøv NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Frihet til masseopplasting",
      heroTitleLine1: "Last opp 50 filer.",
      heroTitleHighlight: "Behandle alt.",
      heroSubtitle: "Otter gir deg 3 livstidsimporter. TRE. Hele livet ditt. Vi gir deg ubegrensede opplastinger, 50 filer om gangen, når du trenger dem.",
      primaryCta: "Start masseopplasting →",
      secondaryCta: "Se grensene",
      redditQuote: "«Jeg har tre år med podkastepisoder å transkribere. Otter forteller meg at jeg får tre livstidsimporter. TRE. Dette er fornærmende.»",
      redditAuthorIcon: "📍",
      redditAuthorText: "Ekte frustrasjon fra r/podcasting",
      comparisonSectionTitlePart1: "De",
      comparisonSectionTitleHighlight: "Latterlige grenser",
      comparisonSectionTitlePart2: "De pålegger",
      comparisonSubtitle: "Hvordan konkurrenter begrenser din mulighet til å behandle innhold",
      limitCard1Service: "Oterfri",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Livstidsimport",
      limitCard1DescriptionLine2: "(Ja, for HELE livet ditt)",
      limitCard2Service: "Oter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Filer per måned",
      limitCard2DescriptionLine2: "($100/årsplan)",
      limitCard3Service: "Beskrivelse",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fil om gangen",
      limitCard3DescriptionLine2: "(Sekvensiell opplasting)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Ubegrensede opplastinger",
      limitCard4DescriptionLine2: "50 filer per gruppe",
      feature1Label: "Batch Power",
      feature1TitlePart1: "Behandle din",
      feature1TitleHighlight: "Hele arkivet",
      feature1TitlePart2: "Over natten",
      feature1Description: 'Last opp 50 filer før du legger deg. Våkn opp til fullførte transkripsjoner. Ingen kø, ingen venting, ingen "vennligst oppgrader"-meldinger. Bare ren prosessorkraft lett tilgjengelig.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samtidige opplastinger",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallell prosessering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Støtter 10-timers filer",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maksimalt 5 GB per fil",
      uploadAnimationText1: "50 filer",
      uploadAnimationText2: "Slipp og bearbeid",
      fileBadge1: "podkast_ep_001.mp3",
      fileBadge2: "intervju_raw.mp4",
      fileBadge3: "møte_2024.wav",
      fileBadge4: "forelesning_full.mov",
      fileBadge5: "+ 46 filer til...",
      feature2Label: "Fart",
      feature2TitlePart1: "Fra opplasting til",
      feature2TitleHighlight: "Ferdig på timer",
      feature2Description: "Vår parallelle prosesseringsinfrastruktur betyr at dine 50 filer ikke står i kø. De blir alle transkribert samtidig. Det som pleide å ta uker, tar nå timer.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-times fil: 5 minutter",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 filer: behandlet parallelt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-postvarsel når det er ferdig",
      timelineStep1Icon: "1",
      timelineStep1Title: "Last opp",
      timelineStep1Time: "0 minutter",
      timelineStep2Icon: "2",
      timelineStep2Title: "Behandling",
      timelineStep2Time: "5–30 minutter",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-magi",
      timelineStep3Time: "30–60 minutter",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Fullstendig",
      timelineStep4Time: "< 2 timer",
      feature3Label: "Frihet",
      feature3TitlePart1: "Ingen køer.",
      feature3TitleHighlight: "Ingen venting.",
      feature3TitlePart2: "Ingen grenser.",
      feature3Description: "Mens andre lar deg vente i virtuelle køer eller oppgradere for «prioritert behandling», behandler vi hver opplasting med hastverk. Innholdet ditt er viktig, og det bør ikke vente.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Ingen prioritetsnivåer",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Samme hastighet for alle",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Last opp når som helst, døgnet rundt",
      feature3VisualNumber: "Døgnet rundt",
      feature3VisualTitle: "Alltid klar",
      feature3VisualSubtext: "Last opp når inspirasjonen slår til",
      useCasesTitlePart1: "Perfekt for",
      useCasesTitleHighlight: "Tunge opplastere",
      useCasesSubtitle: "Ekte scenarier der masseopplasting redder dagen",
      useCase1Title: "Podkastarkiver",
      useCase1Description: "Last opp episoder fra tre år samtidig. Lag transkripsjoner for hele bakgrunnskatalogen din. Generer SEO-innhold for hver episode.",
      useCase2Title: "Kursoppretting",
      useCase2Description: "Behandle alle forelesningsvideoene dine samtidig. Lag tilgjengelige transkripsjoner for studenter. Lag søkbart kursmateriell.",
      useCase3Title: "Intervjuetterslep",
      useCase3Description: "Fjern det fjellet av utranskriberte intervjuer. Behandle uker med research på timer. Overhold fristen uten panikk.",
      useCase4Title: "YouTube-biblioteket",
      useCase4Description: "Generer teksting for hele kanalen din. Lag blogginnlegg fra videoinnhold. Forbedre SEO på tvers av alle videoer.",
      useCase5Title: "Møtearkiv",
      useCase5Description: "Last opp måneder med møteopptak. Lag søkbare møtenotater. Mist aldri viktige avgjørelser igjen.",
      useCase6Title: "Forskningsdata",
      useCase6Description: "Behandle fokusgrupper i bulk. Transkribere alle deltakerintervjuer. Analysere kvalitative data effektivt.",
      ctaTitle: "Slutt å tigge om flere opplastinger",
      ctaSubtitle: "Få ubegrenset massebehandling som faktisk fungerer",
      finalCta: "Last opp 50 filer nå →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Bransjeledende nøyaktighet",
      heroTitleLine1: "96 % nøyaktighet.",
      heroTitleHighlight: "Hvert ord teller.",
      heroSubtitle: "Bransjeledende nøyaktighet på 12 hovedspråk. Tidsstempler på ordnivå for perfekt synkronisering. Smart taleridentifikasjon som håndterer raske samtaler. Profesjonell formatering som faktisk er lesbar.",
      primaryCta: "Test vår nøyaktighet →",
      secondaryCta: "Se språk",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Nøyaktighet i",
      statCard1DescriptionLine2: "12 hovedspråk",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Nøyaktighet med",
      statCard2DescriptionLine2: "Aksenter og dialekter",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Ordnivå",
      statCard3DescriptionLine2: "Tidsstempelpresisjon",
      languageSectionTitlePart1: "96 % nøyaktighet på 12 hovedspråk",
      languageSubtitle: "Profesjonell transkripsjon for globalt innhold",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Engelsk",
      languageCard1Accuracy: "96 % nøyaktighet",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spansk",
      languageCard2Accuracy: "96 % nøyaktighet",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96 % nøyaktighet",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Fransk",
      languageCard4Accuracy: "96 % nøyaktighet",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tysk",
      languageCard5Accuracy: "96 % nøyaktighet",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japansk",
      languageCard6Accuracy: "96 % nøyaktighet",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreansk",
      languageCard7Accuracy: "96 % nøyaktighet",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugisisk",
      languageCard8Accuracy: "96 % nøyaktighet",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russisk",
      languageCard9Accuracy: "96 % nøyaktighet",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiensk",
      languageCard10Accuracy: "96 % nøyaktighet",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Nederlandsk",
      languageCard11Accuracy: "96 % nøyaktighet",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabisk",
      languageCard12Accuracy: "96 % nøyaktighet",
      moreLanguagesText: "+ 88 flere språk støttes med 95 %+ nøyaktighet",
      feature1Label: "Presisjon",
      feature1TitlePart1: "Ordnivå",
      feature1TitleHighlight: "Tidsstempler",
      feature1Description: "Hvert ord er perfekt synkronisert med lydposisjonen. Lag klikkbare transkripsjoner, generer presise undertekster eller hopp til nøyaktige øyeblikk i opptakene dine. 100 ms presisjon som profesjonelle stoler på.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms tidsstempelpresisjon",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt for videoredigering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikkbare interaktive transkripsjoner",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Ramme-nøyaktige undertekster",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Høyttaler 1",
      transcriptLine1Text: "Velkommen til dagens podkastepisode.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Høyttaler 2",
      transcriptLine2Text: "Takk for at jeg fikk være med på showet!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Høyttaler 1",
      transcriptLine3Text: "La oss dykke ned i hovedtemaet vårt ...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Høyttaler 2",
      transcriptLine4Text: "Absolutt, jeg gleder meg til å diskutere dette.",
      feature2Label: "Smart AI",
      feature2TitlePart1: "Håndtak",
      feature2TitleHighlight: "Raske samtaler",
      feature2Description: "Vår AI identifiserer nøyaktig talere, selv under overlappende tale, avbrudd og raske samtaler frem og tilbake. Perfekt for intervjuer, podkaster og møter der talere ofte avbryter.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifiserer opptil 20 høyttalere",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Håndterer avbrudd perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fungerer med overlappende tale",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Opprettholder nøyaktighet i krysstale",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Talere identifisert",
      feature2VisualSubtext: "Selv i raske samtaler",
      feature3Label: "Lesbarhet",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formatert tekst",
      feature3Description: "Slutt på tekstvegger. AI-en vår legger automatisk til avsnitt, setninger og tegnsetting akkurat der de hører hjemme. Resultatet? Transkripsjoner som faktisk er behagelige å lese og enkle å skanne.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smarte avsnittsskift",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Nøyaktig tegnsetting",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Riktig bruk av store bokstaver",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Ren, skannbar utdata",
      formattingTitle: "Før og etter",
      formattingBeforeLabel: "❌ Andre:",
      formattingBeforeText: "Så i dag skulle vi snakke om de nye funksjonene vi har jobbet med. Jeg tror du kommer til å like dem. De har blitt etterspurt av brukere lenge, og vi har endelig fått dem ferdige.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Så i dag skal vi snakke om de nye funksjonene vi har jobbet med. Jeg tror dere vil like dem veldig godt. De har blitt etterspurt av brukere lenge, og vi har endelig fått dem ferdige.",
      comparisonSubtitle: "Nøyaktighet",
      comparisonSectionTitle: "Sammenligning",
      comparisonDes: "Se hvordan vi står oss mot konkurrentene",
      tableHeader1: "Trekk",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Beskrivelse",
      tableHeader5: "Rev",
      tableRow1Feature: "Nøyaktighet (klar lyd)",
      tableRow1NeverCap: "96 %",
      tableRow1Otter: "95 %",
      tableRow1Descript: "94 %",
      tableRow1Rev: "94 %",
      tableRow2Feature: "Tidsstempler på ordnivå",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Høyttaleridentifikasjon",
      tableRow3NeverCap: "20 høyttalere",
      tableRow3Otter: "16 høyttalere",
      tableRow3Descript: "10 høyttalere",
      tableRow3Rev: "✕",
      tableRow4Feature: "Håndterer krysstale",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begrenset",
      tableRow4Descript: "Begrenset",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart formatering",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Grunnleggende",
      tableRow6Feature: "12 språk med 96 %",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Opplev 96 % nøyaktighet",
      ctaSubtitle: "Last opp din mest utfordrende lydfil og se forskjellen",
      finalCta: "Test nøyaktigheten vår nå →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Enkel, gjennomsiktig prising",
      "highlighted_text": "Ingen skjulte store bokstaver",
      "description": "Velg abonnementet som passer dine behov. Oppgrader eller nedgrader når som helst. Ingen kontrakter, ingen overraskelser."
    },
    Cards: {
      "title": "Enkel, gjennomsiktig prising.",
      "highlighted_text": "Ingen skjulte bokstaver.",
      "description": "Velg abonnementet som passer dine behov. Oppgrader eller nedgrader når som helst. Ingen kontrakter, ingen overraskelser.",
      "plans": [
            {
              "name": "Gratis",
              "price": "0 kr",
              "period": "måned",
              "discount": "Perfekt for å prøve ut tjenesten vår",
              "limits": {
                "title": "Daglige grenser",
                "items": [
                  "3 filer/dag (≈90 min totalt/dag)",
                  "Opptil 30 min per fil (≤250 MB)",
                  "Last opp én fil om gangen",
                  "Standard prioritetskø"
                ]
              },
              "features": {
                "title": "Funksjoner",
                "items": [
                  "100+ språk",
                  "Høyttaleretiketter",
                  "Oversettelse",
                  "Alle eksportformater"
                ]
              },
              "cta": {
                "text": "Start gratis. Ingen kredittkort.",
                "button": "Start gratis"
              }
            },
            {
              "name": "Pro Månedlig",
              "price": "17,99 dollar",
              "period": "måned",
              "discount": "9,99 dollar for den første måneden",
              "limits": {
                "title": "Ingen månedlig grense",
                "items": [
                  "Ubegrenset antall minutter",
                  "Opptil 10 timer / 5 GB per fil",
                  "Last opp 50 filer samtidig",
                  "Prioritert kø"
                ]
              },
              "features": {
                "title": "Alt gratis, pluss",
                "items": [
                  "Tidsstempler på ordnivå",
                  "Avansert høyttaleridentifikasjon",
                  "Formaterte avsnitt og tegnsetting",
                  "Prioritert støtte"
                ]
              },
              "cta": {
                "text": "Ubegrensede minutter. Prioritert hastighet. Batchopplastinger.",
                "button": "Bli proff"
              },
              "badge": "Mest populær"
            },
            {
              "name": "Pro Årlig",
              "price": "8,99 dollar",
              "period": "måned",
              "discount": "Faktureres årlig $107,88",
              "limits": {
                "title": "Samme som Pro Monthly",
                "items": [
                  "Ubegrenset antall minutter",
                  "Opptil 10 timer / 5 GB per fil",
                  "Last opp 50 filer samtidig",
                  "Prioritert kø"
                ]
              },
              "features": {
                "title": "Alt gratis, pluss",
                "items": [
                  "Tidsstempler på ordnivå",
                  "Avansert høyttaleridentifikasjon",
                  "Formaterte avsnitt og tegnsetting",
                  "Prioritert støtte"
                ]
              },
              "cta": {
                "text": "Ubegrensede minutter. Prioritert hastighet. Batchopplastinger.",
                "button": "Bli proff"
              },
              "badge": "Beste verdi - Spar 50 %"
            }
          ],
      "disclaimer": "«Ubegrenset» betyr ingen månedlig grense og ingen kunstig nedbremsing. Lovlig bruk gjelder misbruk av automatisering eller omdistribusjon."
    },
    ComparisonTable: {
      "header": {
        "title": "Sammenlign alle funksjoner",
        "highlighted_text": "Alle funksjoner",
        "subtitle": "Se nøyaktig hva du får med hver plan. Ingen skjulte begrensninger."
      },
      "plans": [
              "Funksjoner",
              "Gratis",
              "Pro Månedlig",
              "Pro Årlig"
            ],
      "features": [
            {
              "name": "Pris",
              "values": [
                "0 kr/måned",
                {
                  "main": "17,99 dollar/måned",
                  "note": "9,99 dollar første måned"
                },
                {
                  "main": "8,99 dollar/måned",
                  "note": "Fakturert $107,88/år"
                }
              ]
            },
            {
              "name": "Månedlige minutter",
              "values": ["~2700 (90/dag)", "Ubegrenset", "Ubegrenset"]
            },
            {
              "name": "Maksimal filvarighet",
              "values": ["30 minutter", "10 timer", "10 timer"]
            },
            {
              "name": "Maksimal filstørrelse",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Batchopplastinger",
              "values": ["1 fil", "50 filer", "50 filer"]
            },
            {
              "name": "Behandlingshastighet",
              "values": ["Standard", "Prioritet", "Prioritet"]
            },
            {
              "name": "Språk som støttes",
              "values": ["100+ språk", "100+ språk", "100+ språk"]
            },
            {
              "name": "Oversettelse",
              "values": ["ekte", "ekte", "ekte"]
            },
            {
              "name": "Høyttaleridentifikasjon",
              "values": ["Grunnleggende", "Avansert (20 høyttalere)", "Avansert (20 høyttalere)"]
            },
            {
              "name": "Tidsstempler på ordnivå",
              "values": ["falsk", "ekte", "ekte"]
            },
            {
              "name": "Formaterte avsnitt",
              "values": ["falsk", "ekte", "ekte"]
            },
            {
              "name": "Eksportformater",
              "values": ["Alle formater", "Alle formater", "Alle formater"]
            },
            {
              "name": "Støtte",
              "values": ["E-post", "Prioritert e-post", "Prioritert e-post"]
            },
            {
              "name": "Datalagring",
              "values": ["30 dager", "For alltid", "For alltid"]
            }
          ]
    },
    FAQ: {
      "title": "Ofte stilte",
      "titleHighligt": "Spørsmål",
      "items": [
            {
              "q": "ubegrenset_policy",
              "question": "Er det virkelig ubegrenset?",
              "answer": "Ja! Pro-abonnementer har ingen månedlige grenser for antall minutter. De eneste begrensningene er tekniske: maks filvarighet på 10 timer og 5 GB filstørrelse. Du kan behandle så mange filer du trenger."
            },
            {
              "q": "planendring",
              "question": "Kan jeg endre planer når som helst?",
              "answer": "Absolutt! Du kan når som helst kansellere abonnementet ditt fra dashbordet. Oppgrader eller nedgrader når du trenger det."
            },
            {
              "q": "betalingsmåter",
              "question": "Hvilke betalingsmåter aksepterer dere?",
              "answer": "Vi aksepterer alle større kredittkort, debetkort og PayPal for sikre og problemfrie betalinger."
            },
            {
              "q": "gratis_prøveperiode",
              "question": "Finnes det en gratis prøveperiode for Pro?",
              "answer": "Ja! Prøv Pro gratis i 7 dager, uten behov for kredittkort. I tillegg får du 45 % rabatt på den første måneden når du abonnerer."
            },
            {
              "q": "filbevaring",
              "question": "Hvor lenge oppbevarer dere filene mine?",
              "answer": "Gratisabonnement: 30 dager. Pro-abonnement: For alltid! Transkripsjonene dine er alltid tilgjengelige i kontoen din."
            },
            {
              "q": "datasikkerhet",
              "question": "Hva med datasikkerhet?",
              "answer": "Vi er SOC 2-sertifiserte og bruker 256-bit kryptering. Vi bruker aldri innholdet ditt til å trene modellene våre. Dataene dine er dine."
            }
          ]
    },
    CTA: {
      "title": "Klar til å gå ubegrenset?",
      "subtitle": "Bli med over 50 000 fagfolk som transkriberer uten begrensninger",
      "button": "Prøv NeverCap Gratis →",
      "disclaimer": "Ingen kredittkort kreves • Start transkribering på sekunder"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Bygget for",
      heavyUsers: "Storbrukere",
      whoActuallyNeed: "Hvem trenger egentlig ubegrenset",
      heroSubtitle: "Fra podkastere med årevis med etterslep til forskere med hundrevis av intervjuer. Se hvordan fagfolk bruker NeverCap for å bryte seg løs fra opplastingsbegrensninger og minuttbegrensninger.",
      podcasters: {
        title: "Podkastere",
        pain: "«Slutt å velge hvilke episoder som fortjener transkripsjoner»",
        description: "Last opp hele podkastarkivet ditt på én gang. Generer programnotater, forbedre SEO og gi nytt formål til innhold uten å telle minutter.",
        benefits: {
          benefit1: "Last opp alle episodene, ikke bare 3",
          benefit2: "Generer SEO-vennlige shownotater",
          benefit3: "Opprett søkbare arkiver",
          benefit4: "Gjenbruk til blogginnhold"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episoder"
          },
          stat2: {
            number: "200 timer",
            label: "Lagret"
          },
          stat3: {
            number: "3 ganger",
            label: "SEO-trafikk"
          }
        }
      },
      journalists: {
        title: "Journalister og forfattere",
        pain: '"Fristpress møter opplastingsbegrensninger"',
        description: "Last opp alle intervjuer i bulk før fristen. Søk i transkripsjoner umiddelbart og gå aldri glipp av et viktig sitat.",
        benefits: {
          benefit1: "Batchopplasting før frister",
          benefit2: "Søk i alle intervjuene samtidig",
          benefit3: "Nøyaktige sitater med tidsstempler",
          benefit4: "Håndter aksenter og språk"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Intervjuer/mnd"
          },
          stat2: {
            number: "96 %",
            label: "Nøyaktighet"
          },
          stat3: {
            number: "5 minutter",
            label: "Per time"
          }
        }
      },
      contentCreators: {
        title: "Innholdsskapere",
        pain: "«Tilgjengelighet bør ikke være dyrt»",
        description: "Legg til teksting for hele YouTube-kanalen din. Generer tekstinger på flere språk og forbedrer SEO-en for videoene dine umiddelbart.",
        benefits: {
          benefit1: "Legg til teksting for alle videoene samtidig",
          benefit2: "249 språkoversettelser",
          benefit3: "YouTube-klare SRT-filer",
          benefit4: "Øk SEO-rangeringen for videoer"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videoer"
          },
          stat2: {
            number: "100+",
            label: "Språk"
          },
          stat3: {
            number: "249",
            label: "Oversettelser"
          }
        }
      },
      researchers: {
        title: "Forskere og akademikere",
        pain: '"Kvalitative data bør ikke vente i kø"',
        description: "Behandle hele forskningsstudier samtidig. Håndter fokusgrupper, intervjuer og paneldiskusjoner med perfekt taleridentifisering.",
        benefits: {
          benefit1: "Behandle fokusgrupper i bulk",
          benefit2: "Identifikasjon av 20 høyttalere",
          benefit3: "Eksporter til analyseprogramvare",
          benefit4: "GDPR-kompatibel sikkerhet"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studere"
          },
          stat2: {
            number: "96 %",
            label: "Gruppens nøyaktighet"
          },
          stat3: {
            number: "GDPR",
            label: "Kompatibel"
          }
        }
      },
      businessTeams: {
        title: "Forretningsteam",
        pain: "«Møteopptak skal være uanstrengt»",
        description: "Ta opp møter direkte eller last opp lydfiler for umiddelbar transkripsjon. Bygg søkbare arkiver fra et ubegrenset antall samtaler, og mist aldri viktige diskusjoner igjen.",
        benefits: {
          benefit1: "Direkte lydopptak og transkripsjon",
          benefit2: "Ubegrensede møteopptak",
          benefit3: "Søkbart møtearkiv",
          benefit4: "Last opp lydfiler umiddelbart"
        },
        stats: {
          stat1: {
            number: "Bo",
            label: "Innspilling"
          },
          stat2: {
            number: "Øyeblikkelig",
            label: "Last opp"
          },
          stat3: {
            number: "20+",
            label: "Høyttalere"
          }
        }
      },
      educators: {
        title: "Lærere",
        pain: "«YouTube-videoer trenger umiddelbar transkripsjon»",
        description: "Bare lim inn YouTube-lenker for å få umiddelbare transkripsjoner og automatisk genererte tekstinger. Forvandle enhver pedagogisk video til tilgjengelig, søkbart innhold.",
        benefits: {
          benefit1: "Transkripsjon av direkte YouTube-lenker",
          benefit2: "Generer videotekster automatisk",
          benefit3: "Transkribere hele kurs",
          benefit4: "Søkbare forelesningsarkiver"
        },
        stats: {
          stat1: {
            number: "1-klikk",
            label: "YouTube Lim inn"
          },
          stat2: {
            number: "Bil",
            label: "Teksting"
          },
          stat3: {
            number: "100+",
            label: "Språk"
          }
        }
      },
      quotes: {
        title: "Ekte brukere,",
        titleHighlight: "Ekte frihet",
        subtitle: "Hør fra fagfolk som brøt seg løs fra kunstige grenser",
        testimonials: {
          mike: {
            textBefore: '"Jeg hadde',
            highlight: "3 år med episoder",
            textAfter: "sitter utranskribert. Otter ville at jeg skulle velge 3. TRE. NeverCap la meg laste opp alle 150 episodene i løpet av én helg.",
            name: "Mike Rodriguez",
            role: "Podcast-vert"
          },
          jessica: {
            textBefore: "«Som frilansjournalist har jeg ikke råd til Trints»",
            highlight: "100 dollar/måned",
            textAfter: ", men jeg kan heller ikke jobbe med Otters grense på 10 filer per måned. NeverCap reddet karrieren min.",
            name: "Jessica Park",
            role: "Frilansjournalist"
          },
          sarah: {
            textBefore: "«Forskningsteamet vårt hadde",
            highlight: "200 timer",
            textAfter: "av fokusgruppeopptak. Vi behandlet alt i løpet av en helg i stedet for å rasjonere månedlige minutter.»",
            name: "Dr. Sarah Chen",
            role: "Ledende forsker"
          },
          carlos: {
            textBefore: "«Jeg lager pedagogisk innhold på spansk. NeverCap transkriberer perfekt og",
            highlight: "oversettes til engelsk",
            textAfter: "for bredere rekkevidde. Ingen grenser, bare vekst.»",
            name: "Carlos Martinez",
            role: "YouTube-pedagog"
          }
        }
      },
      industries: {
        title: "Pålitelig på tvers",
        titleHighlight: "Bransjer",
        subtitle: "Fagfolk overalt går over til virkelig ubegrenset",
        list: {
          media: "Media og publisering",
          education: "Utdannelse",
          healthcare: "Helsevesen",
          technology: "Teknologi",
          finance: "Finansiere",
          legal: "Juridisk"
        }
      },
      cta: {
        title: "Brukstilfellet ditt trenger også ubegrenset",
        subtitle: "Bli med over 50 000 fagfolk som sluttet å telle minutter og begynte å skape",
        button: "Start din ubegrensede reise →"
      }
    },
    Podcasters: {
      badge: "🎙️ Laget for podkastere",
      heroTitle: "Transkriber din",
      heroTitleHighlight: "Hele podkastarkivet",
      heroSubtitle: "Last opp hele bakgrunnskatalogen din. Lag programnotater for hver episode. Ikke mer valg av hvilke episoder du skal transkribere. Behandle 50 episoder samtidig, ubegrenset antall ganger per måned.",
      ctaPrimary: "Begynn å transkribere gratis",
      ctaSecondary: "Se hvordan det fungerer",
      trustBadge1: "🎙️ 10 000+ podkastere",
      trustBadge2: "∞ Ubegrenset antall episoder",
      trustBadge3: "📝 SEO-klare transkripsjoner",
      stats: {
        stat1: {
          number: "∞",
          label: "Episoder/måned"
        },
        stat2: {
          number: "50",
          label: "Gruppeopplasting"
        },
        stat3: {
          number: "10 timer",
          label: "Maksimal episodelengde"
        },
        stat4: {
          number: "96 %",
          label: "Nøyaktighet"
        }
      },
      problemTitle: "De",
      problemTitleHighlight: "Problem med transkripsjon av podkaster",
      problemSubtitle: "Andre tjenester lar deg velge hvilke episoder som er «verdt» å transkribere",
      problems: {
        problem1: {
          title: "Opplastingsgrenser Drep arkiver",
          description: "Otter gir deg 3 livstidsimporter gratis, 10 per måned på Pro. Hvordan transkriberer du 3 år med episoder?"
        },
        problem2: {
          title: "Manglende SEO-muligheter",
          description: "Hver episode som ikke er transkribert er tapt SEO-trafikk. Men Descript begrenser deg til 30 timer/måned i beste fall."
        },
        problem3: {
          title: "Kostnadene eksploderer med veksten",
          description: "Etter hvert som podkasten din vokser, skyter transkripsjonskostnadene i været. Overforbruksavgifter på 2 dollar i timen gjør skalering umulig."
        }
      },
      solutionTitle: "De",
      solutionTitleHighlight: "NeverCap Løsning",
      solutionDescription: "Ubegrenset transkripsjon. Last opp hele arkivet ditt. Transkriber hver nye episode. Generer programnotater i stor skala. Ingen grenser, ingen overskrifter, bare vekst.",
      workflowTitle: "Din podkast-arbeidsflyt,",
      workflowTitleHighlight: "Forenklet",
      workflowSubtitle: "Fra opptak til SEO-optimaliserte shownotater på få minutter",
      workflow: {
        step1: {
          title: "Last opp episoder",
          description: "Slipp 50 episoder samtidig. MP3, MP4, WAV – vi håndterer alt."
        },
        step2: {
          title: "AI-transkriberinger",
          description: "96 % nøyaktighet med taleridentifikasjon. Perfekt for intervjuer."
        },
        step3: {
          title: "Smart formatering",
          description: "AI legger til avsnitt, setninger og tegnsetting automatisk."
        },
        step4: {
          title: "Publiser og ranger",
          description: "Eksporter til nettstedet ditt. Se SEO-trafikken din vokse."
        }
      },
      featuresTitle: "Funksjoner Podkastere",
      featuresTitleHighlight: "Trenger faktisk",
      featuresSubtitle: "Laget av podkastere, for podkastere",
      features: {
        feature1: {
          title: "Deteksjon av flere høyttalere",
          description: "Identifiserer og merker automatisk opptil 20 foredragsholdere. Perfekt for paneldiskusjoner, intervjuer og program med felles programledere."
        },
        feature2: {
          title: "Tidsstempelkapitler",
          description: "Generer klikkbare tidsstempler for YouTube-beskrivelser. La lytterne hoppe til favorittsegmentene sine umiddelbart."
        },
        feature3: {
          title: "Smart formatering",
          description: "Legger automatisk til avsnitt, setninger og tegnsetting. Få rene og lesbare transkripsjoner. Spar timer på etterarbeid."
        },
        feature4: {
          title: "SEO-optimalisering",
          description: "Transkripsjoner formatert for søkemotorer. Øk podkastens synlighet og nå nye målgrupper."
        },
        feature5: {
          title: "100+ språk",
          description: "Transkriber på alle språk. Oversett til over 249 språk. Nå et globalt publikum uten problemer."
        },
        feature6: {
          title: "Batchbehandling",
          description: "Last opp 50 episoder før du legger deg. Våkn opp for å fullføre transkripsjoner. Behandle hele arkivet ditt over natten."
        }
      },
      testimonialsTitle: "Podkastere som lagde",
      testimonialsTitleHighlight: "Bryteren",
      testimonialsSubtitle: "Ekte historier fra ekte podkastere",
      testimonials: {
        mike: {
          text: "«Jeg har laget en podkast i tre år og har transkribert alt manuelt som en idiot. Jeg lastet opp seks episoder samtidig, og det skilte meg og medprogramlederen min perfekt. Kaffebarepisoden jeg trodde var ødelagt? Krystallklar transkripsjon. Jeg kommer aldri til å skrive dette ut selv igjen.»",
          name: "Mike Rodriguez",
          role: "Programleder for podkasten «The Daily Grind»"
        },
        sarah: {
          text: "«Otter begrenset meg til 10 filimporter per måned. Jeg har 150 episoder på etterskudd. NeverCap lar meg laste opp alt i 3 omganger. Den organiske trafikken min har økt med 300 % siden jeg la til transkripsjoner i gamle episoder. Dette betaler bokstavelig talt for seg selv.»",
          name: "Sarah Chen",
          role: "Skaperen av «Tech Talks Today»"
        }
      },
      comparisonTitle: "Hvorfor podkastere velger",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Se hvordan vi står oss mot konkurrentene",
      comparison: {
        headers: {
          feature: "Trekk",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Beskrivelsesskaper"
        },
        rows: {
          monthlyLimit: {
            feature: "Månedlig episodegrense",
            nevercap: "Ubegrenset",
            otter: "~13 episoder (1200 min)",
            descript: "~30 episoder (30 timer)"
          },
          uploadLimit: {
            feature: "Grense for filopplasting",
            nevercap: "Ubegrenset",
            otter: "10 per måned",
            descript: "1 om gangen"
          },
          batchProcessing: {
            feature: "Batchbehandling",
            nevercap: "50 filer",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksimal episodelengde",
            nevercap: "10 timer",
            otter: "90 minutter",
            descript: "Ubegrenset"
          },
          speakerDetection: {
            feature: "Høyttalerdeteksjon",
            nevercap: "20 høyttalere",
            otter: "16 høyttalere",
            descript: "10 høyttalere"
          },
          smartFormatting: {
            feature: "Smart formatering",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Pris",
            nevercap: "17,99 USD/mnd.",
            otter: "16,99 USD/mnd.",
            descript: "30 dollar/mnd."
          }
        }
      },
      ctaTitle: "Begynn å transkribere hver episode",
      ctaSubtitle: "Bli med over 10 000 podkastere som aldri bekymrer seg om grenser",
      ctaButton: "Last opp dine første 50 episoder gratis →",
      ctaDisclaimer: "Ingen kredittkort kreves • Behandle et ubegrenset antall episoder • Avbryt når som helst"
    },
    Journalists: {
      hero: {
        badge: "📰 For journalister og forfattere",
        title: "Transkriber hvert intervju.",
        titleHighlight: "Gå aldri glipp av et sitat.",
        subtitle: "Slutt å velge hvilke intervjuer som fortjener transkripsjon. Last opp alle opptakene samtidig, søk gjennom alt umiddelbart, og overhold tidsfristene dine uten opplastingsangst.",
        ctaPrimary: "Start ubegrensede opplastinger →",
        ctaSecondary: "Se hvordan det fungerer",
        stats: {
          uploads: {
            number: "∞",
            label: "Filopplastinger"
          },
          accuracy: {
            number: "96 %",
            label: "Nøyaktighet"
          },
          speed: {
            number: "5 minutter",
            label: "Per time"
          }
        },
        dashboard: {
          title: "Intervjukø",
          status: "• All behandling",
          interviews: {
            cityCouncil: {
              title: "Bystyremøte",
              duration: "2 t 15 min • Laster opp...",
              action: "Behandling"
            },
            expertInterview: {
              title: "Ekspertintervju - Dr. Chen",
              duration: "45 min • Transkribering...",
              action: "96 % ferdig"
            },
            pressConference: {
              title: "Pressekonferanse",
              duration: "1 t 30 min • Klar",
              action: "Vis →"
            },
            phoneInterview: {
              title: "Telefonintervju – Kilde",
              duration: "35 min • Klar",
              action: "Vis →"
            }
          }
        }
      },
      problem: {
        title: "De",
        titleHighlight: "Problem med transkripsjon av journalister",
        subtitle: "Andre tjenester lar deg velge hvilke intervjuer som er «verdt» å transkribere",
        problems: {
          uploadLimits: {
            title: "Opplastingsgrenser avbryter etterforskning",
            description: "Otter gir deg 10 filimporter per måned på Pro. Hvordan transkriberer du 3 uker med undersøkelsesintervjuer?"
          },
          missingQuotes: {
            title: "Manglende viktige sitater",
            description: "Hvert utranskribert intervju kan inneholde historiens viktigste sitat. Men Trint begrenser deg til 50 timer/måned i beste fall."
          },
          costExplosion: {
            title: "Kostnadene eksploderer med tidsfrister",
            description: "Etter hvert som etterforskningen din blir dypere, skyter transkripsjonskostnadene i været. 100 dollar i måneden for ekstra gebyrer gjør det umulig å få frem siste nytt."
          }
        },
        solution: {
          title: "De",
          titleHighlight: "NeverCap Løsning",
          description: "Ubegrenset transkripsjon. Last opp hele undersøkelsen din. Transkriber alle intervjuer. Søk i alle sitater umiddelbart. Ingen store bokstaver, ingen begrensninger, bare journalistikk."
        }
      },
      solution: {
        title: "Endelig,",
        titleHighlight: "Sann frihet",
        titleSuffix: "for journalister",
        subtitle: "Last opp alt. Transkriber alt. Søk i alt.",
        solutions: {
          unlimitedUploads: {
            label: "Ubegrensede opplastinger",
            title: "Masseopplasting av hele undersøkelsen din",
            description: "Ikke mer valg av hvilke intervjuer som skal transkriberes. Last opp 50 filer samtidig. Behandle måneder med opptak over natten. Hele etterforskningen din, transkribert.",
            points: {
              simultaneousUpload: "Last opp 50 filer samtidig",
              noLimits: "Ingen månedlige opplastingsgrenser",
              processWhileWrite: "Prosess mens du skriver",
              longRecordings: "Støtter 10-timers opptak"
            },
            visual: {
              number: "50",
              label: "Filer samtidig"
            }
          },
          instantSearch: {
            label: "Øyeblikkelig søk",
            title: "Finn et hvilket som helst tilbud på sekunder",
            description: "Søk i alle transkripsjonene dine umiddelbart. Finn det perfekte sitatet fra tre måneder siden. Mist aldri viktige utsagn i notatene dine igjen.",
            points: {
              searchAll: "Søk på tvers av alle intervjuer",
              wordTimestamps: "Tidsstempler på ordnivå",
              jumpToMoments: "Hopp til nøyaktige øyeblikk",
              exportCitations: "Eksporter med sitater"
            },
            searchDemo: {
              placeholder: "klimapolitisk uttalelse",
              resultsText: "Funnet i 4 intervjuer:",
              results: {
                mayorInterview: '"...vår klimapolitikk vil forvandles..."',
                expertPanel: '"...policyerklæringen viser tydelig..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Profesjonell nøyaktighet",
            title: "96 % nøyaktighet du kan sitere",
            description: "Få transkripsjoner så nøyaktige at du kan sitere dem direkte. Håndterer aksenter, tekniske termer og raske samtaler. Perfekt formatering som faktisk er lesbar.",
            points: {
              accuracyGuarantee: "96 % nøyaktighetsgaranti",
              handlesAccents: "Håndterer aksenter og dialekter",
              smartPunctuation: "Smart tegnsetting og avsnitt",
              speakerIdentification: "Høyttaleridentifikasjon"
            },
            visual: {
              accuracy: "96 %",
              label: "Nøyaktighet",
              transcript: {
                speaker1: "«Etterforskningen avdekket betydelige avvik i de økonomiske rapportene.»",
                speaker2: "«Kan du utdype disse spesifikke avvikene?»"
              }
            }
          }
        }
      },
      features: {
        title: "Alt et",
        titleHighlight: "Journalistbehov",
        subtitle: "Profesjonelle verktøy som respekterer arbeidsflyten din",
        featuresList: {
          languages: {
            title: "100+ språk",
            description: "Intervjukilder globalt på 12 hovedspråk med 96 % nøyaktighet."
          },
          exportFormats: {
            title: "Eksportformater",
            description: "Word, PDF, SRT, TXT. Kompatibel med alle arbeidsflyter."
          },
          sourceProtection: {
            title: "Kildevern",
            description: "Kryptering på banknivå. Kildene dine forblir konfidensielle."
          },
          timestamps: {
            title: "Tidsstempler",
            description: "Klikk på et hvilket som helst sitat for å hoppe til det nøyaktige lydøyeblikket."
          },
          teamSharing: {
            title: "Teamdeling",
            description: "Samarbeid med redaktører. Del transkripsjoner sikkert."
          },
          mobileReady: {
            title: "Mobilklar",
            description: "Last opp fra telefonen. Se gjennom transkripsjoner hvor som helst."
          },
          smartFormatting: {
            title: "Smart formatering",
            description: "Automatiske avsnitt og tegnsetting for lesbare transkripsjoner."
          },
          batchProcessing: {
            title: "Batchbehandling",
            description: "Last opp 50 filer samtidig. Behandle over natten mens du sover."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Jeg hadde tre år med intervjuer liggende uten transkribering på grunn av opplastingsbegrensninger. NeverCap la meg behandle alt på én helg. Revolusjonerende.",
          name: "Jessica Park",
          role: "Frilansjournalist, tidligere oterbruker"
        }
      },
      cta: {
        title: "Start transkribering",
        titleHighlight: "Uten grenser",
        subtitle: "Bli med tusenvis av journalister som sluttet å telle opplastinger og begynte å fokusere på historier",
        ctaPrimary: "Prøv ubegrenset gratis →",
        ctaSecondary: "Se priser"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 For innholdsskapere",
        title: "Skriv teksting",
        titleHighlight: "Hele kanalen",
        titleSuffix: "Uten å telle minutter",
        subtitle: "Slutt å velge hvilke videoer som fortjener teksting. Behandle hele YouTube-biblioteket ditt, generer teksting på over 100 språk og hent videoer direkte fra hvilken som helst plattform. Ingen månedlige grenser, ingen opplastingsbegrensninger – bare ren kreativ frihet.",
        ctaPrimary: "Start ubegrenset teksting →",
        ctaSecondary: "Se hvordan det fungerer",
        stats: {
          videos: {
            number: "∞",
            label: "Videoer/måned"
          },
          languages: {
            number: "100+",
            label: "Språk"
          },
          accuracy: {
            number: "96 %",
            label: "Nøyaktighet"
          },
          platforms: {
            number: "10+",
            label: "Plattformer"
          }
        }
      },
      platforms: {
        title: "Hent og transkriber fra hvilken som helst plattform",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Google Disk",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "Alt du trenger å",
        titleHighlight: "Skaler innhold",
        subtitle: "Profesjonelle verktøy uten profesjonelle grenser",
        oneClickImport: {
          label: "Import med ett klikk",
          title: "Lim inn lenke.",
          titleHighlight: "Få transkripsjon.",
          description: "Slutt på nedlasting og opplasting på nytt. Bare lim inn YouTube-, TikTok- eller Instagram-lenken din, og få transkripsjoner umiddelbart. Behandle hele kanalens etterslep på én helg.",
          points: {
            directYoutube: "Transkripsjon av direkte YouTube-lenker",
            multiplePlatforms: "Hent fra over 10 plattformer",
            batchPlaylists: "Batchprosesser hele spillelister",
            autoSync: "Automatisk synkronisering med kanalene dine"
          },
          demo: {
            instruction: "Lim inn video-URL-en din:",
            url: "https://youtube.com/watch?v=...",
            status: "Henter og transkriberer..."
          }
        },
        globalReach: {
          label: "Global rekkevidde",
          title: "100+ språk.",
          titleHighlight: "Null grenser.",
          description: "Nå et globalt publikum med automatisk oversettelse til over 100 språk. Generer undertekster på flere språk samtidig. Ingen ekstra kostnader, ingen månedlige tak på oversettelser.",
          points: {
            highAccuracy: "96 % nøyaktighet på 12 hovedspråk",
            unlimitedTranslations: "Ubegrensede oversettelser inkludert",
            multicultural: "Perfekt for flerkulturelt innhold",
            autoDetect: "Automatisk oppdaging av kildespråk"
          },
          visual: {
            number: "100+",
            title: "Støttede språk",
            subtitle: "Oversett én gang, nå ut til alle"
          }
        },
        flexibleExport: {
          label: "Fleksibel eksport",
          title: "Alle formater",
          titleHighlight: "Du trenger",
          description: "Eksporter i formatet som fungerer for arbeidsflyten din. Fra SRT-filer for YouTube til VTT for nettspillere, eller redigerbare dokumenter for skript. All eksport er ubegrenset, alt inkludert i alle planer.",
          points: {
            videoFormats: "SRT og VTT for videoplattformer",
            editingFormats: "DOCX og PDF for redigering",
            dataAnalysis: "CSV for dataanalyse",
            simpleScripts: "TXT for enkle skript"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "Tekst",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "Fra opplasting til",
        titleHighlight: "Publisert",
        titleSuffix: "i minutter",
        subtitle: "Den raskeste måten å tekste hele innholdsbiblioteket ditt",
        steps: {
          pasteLinks: {
            title: "Lim inn lenker",
            description: "Slipp YouTube, TikTok eller en hvilken som helst videolenke. Eller last opp filer direkte."
          },
          autoTranscribe: {
            title: "Automatisk transkribering",
            description: "AI-prosesser med 96 % nøyaktighet. Håndterer aksenter og flere talere."
          },
          editTranslate: {
            title: "Rediger og oversett",
            description: "Perfeksjoner tekstingen din. Oversett til over 100 språk umiddelbart."
          },
          exportPublish: {
            title: "Eksporter og publiser",
            description: "Last ned i hvilket som helst format. Last opp til plattformen din. Ferdig!"
          }
        }
      },
      testimonials: {
        title: "Skaperne er",
        titleHighlight: "Bytter daglig",
        subtitle: "Fra begrensede planer til ubegrenset frihet",
        carlos: {
          textBefore: "Jeg lager pedagogisk innhold på spansk. NeverCap transkriberer perfekt og",
          textAfter: "for bredere rekkevidde. Ingen grenser, bare vekst. Kanalvisningene mine økte tre ganger etter at jeg la til flerspråklige tekstinger.",
          highlight: "oversettes til engelsk",
          name: "Carlos Martinez",
          role: "YouTube-pedagog • 250 000 abonnenter"
        },
        sarah: {
          textBefore: "Beskrivelse ønskes $30/måned for",
          textAfter: "Jeg har over 500 videoer på etterskudd. NeverCap La meg behandle alt på én helg. SEO-boosten fra teksting betalte seg selv i løpet av den første måneden.",
          highlight: "30 timer",
          name: "Sarah Lee",
          role: "Livsstilsvlogger • 180 000 abonnenter"
        },
        jake: {
          textBefore: "De",
          textAfter: "Funksjonen er banebrytende. Jeg laster ikke ned noe lenger. Bare lim inn, transkriber, ferdig. Det har aldri vært enklere å behandle podkastklippene mine for TikTok.",
          highlight: "direkte YouTube-henting",
          name: "Jake Wilson",
          role: "Podkastvert • Topp 1 %-skaper"
        },
        yuki: {
          textBefore: "Jeg lager innhold på 5 språk. Andre tjenester koster penger.",
          textAfter: "NeverCap gir meg ubegrensede oversettelser. Mitt internasjonale publikum har vokst med 400 % siden jeg begynte å bruke skikkelig teksting på engelsk.",
          highlight: "per oversettelse",
          name: "Yuki Tanaka",
          role: "Spillskaper • 500 000 abonnenter"
        }
      },
      cta: {
        title: "Hele kanalen din. Med teksting. I dag.",
        subtitle: "Bli med over 50 000 innholdsskapere som sluttet å telle minutter og begynte å skape",
        button: "Start ubegrenset teksting →"
      }
    },
    Researchers: {
      heroBadge: "Bygget for akademisk dyktighet",
      heroTitle1: "Transkriber hvert intervju.",
      heroTitle2: "Analyser alle dataene dine.",
      heroSubtitle: "Slutt å velge hvilke fokusgrupper du skal transkribere. Behandle alle dine kvalitative data med 96 % nøyaktighet og feilfri taleridentifisering – selv med 20 deltakere som snakker iblant hverandre.",
      heroCtaPrimary: "Prøv det gratis – uten kredittkort",
      heroCtaSecondary: "Se hvordan det fungerer",
      statsInterviewHours: "Intervjutimer",
      statsAccuracy: "Nøyaktighet",
      statsSpeakersId: "Høyttaler-ID",
      statsCompliant: "Kompatibel",
      problemTitle: "Problemet med forskningstranskripsjon",
      problemSubtitle: "Andre tjenester lar deg velge hvilke data som er «verdt» å transkribere",
      problemCard1Title: "Opplastingsgrenser dreper studier",
      problemCard1Desc: "Otter gir deg 3 livstidsimporter. Hvordan transkriberer du 200 timer med fokusgrupper?",
      problemCard2Title: "Manglende kritiske data",
      problemCard2Desc: "Hvert utranskribert intervju kan inneholde banebrytende innsikter. Men Rev tar minimum 2 dollar per minutt.",
      problemCard3Title: "Tilskuddspengene forsvinner",
      problemCard3Desc: "Etter hvert som datasettet ditt vokser, eksploderer transkripsjonskostnadene. 500 dollar per fokusgruppe gjør skalering umulig.",
      solutionTitle: "Løsningen NeverCap",
      solutionDesc: "Ubegrenset transkripsjon. Last opp hele studien din. Transkriber hvert intervju. Analyser alle dataene dine. Ingen store bokstaver, ingen begrensninger, bare research.",
      feature1Label: "Ingen grenser",
      feature1Title: "Behandle hele studien din på én gang",
      feature1Desc: "Last opp alle 200 timene med intervjuer i kveld. Våkn opp til komplette, søkbare transkripsjoner. Ingen månedlige grenser, ingen begrensninger per fil, ikke noe tull om «rettferdig bruk».",
      feature1Point1: "Opplasting av 50 filer samtidig",
      feature1Point2: "Behandle longitudinelle studier fullstendig",
      feature1Point3: "Ingen lagringsgrenser for transkripsjoner",
      feature1Point4: "Eksporter til NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Ubegrensede timer",
      feature1Visual2: "Samme pris enten 10 eller 10 000 timer",
      feature2Label: "Smart AI",
      feature2Title: "Neglefokusgrupper hver gang",
      feature2Desc: "AI-en vår sporer opptil 20 talere, selv når de snakker iblant hverandre, avbryter hverandre eller alle snakker samtidig. Hver stemme blir fanget opp og merket riktig.",
      feature2Point1: "Identifikasjon av 20 høyttalere",
      feature2Point2: "Håndterer krysstale og avbrudd",
      feature2Point3: "Høyttaleretiketter du kan gi nytt navn til",
      feature2Point4: "Tidsstempel for hvert ord",
      conversationParticipant1: "Deltaker 1",
      conversationText1: "Den største hindringen vi står overfor er definitivt kostnadene ved behandlingen...",
      conversationParticipant2: "Deltaker 2",
      conversationText2: "Absolutt, men jeg vil legge til at tilgang er—",
      conversationParticipant3: "Deltaker 3",
      conversationText3: "– Beklager at jeg avbryter, men transport er også enormt.",
      conversationText4: "Ja! Det var akkurat det jeg skulle til å si.",
      conversationParticipant4: "Deltaker 4",
      conversationText5: "I landlige områder er det alle tre: kostnad, tilgang OG transport.",
      feature3Label: "Presisjon",
      feature3Title: "96 % nøyaktighet som holder mål",
      feature3Desc: "Håndterer teknisk sjargong, tykke aksenter og feltspesifikk terminologi som en proff. Nøyaktig nok for publisering, fagfellevurdering og avhandlingskomitéen din.",
      feature3Point1: "Medisinsk og vitenskapelig terminologi",
      feature3Point2: "100+ språk og dialekter",
      feature3Point3: "Ordrett og rene lesemoduser",
      feature3Point4: "Rediger og eksporter i alle formater",
      feature3Visual1: "Nøyaktighet på forskningsnivå",
      feature3Visual2: "Stolt på av over 50 000 forskere",
      feature4Label: "Sikkerhet",
      feature4Title: "IRB-klar sikkerhet",
      feature4Desc: "Dine sensitive forskningsdata er beskyttet med sikkerhet i bedriftsklassen. GDPR-kompatibel, HIPAA-klare alternativer og fullstendige revisjonsspor for IRB-krav.",
      feature4Point1: "Ende-til-ende-kryptering",
      feature4Point2: "GDPR- og CCPA-kompatibel",
      feature4Point3: "Retningslinjer for automatisk sletting",
      feature4Point4: "Sikkert teamsamarbeid",
      useCasesTitle: "Perfekt for alle forskningsmetoder",
      useCasesSubtitle: "Fra etnografi til kliniske studier",
      useCase1Title: "Fokusgrupper",
      useCase1Desc: "Håndter 8–20 deltakere med overlappende tale. Perfekt identifisering av talere selv under opphetede diskusjoner. Eksporter direkte til programvare for kvalitativ analyse.",
      useCase2Title: "Dybdegående intervjuer",
      useCase2Desc: "Behandle hundrevis av én-til-én-intervjuer samtidig. Oppretthold konsistens på tvers av hele datasettet. Søk på tvers av alle transkripsjoner umiddelbart.",
      useCase3Title: "Klinisk forskning",
      useCase3Desc: "HIPAA-kompatible alternativer for pasientintervjuer. Nøyaktig transkripsjon av medisinsk terminologi. Sikker håndtering av sensitive helsedata.",
      useCase4Title: "Etnografiske studier",
      useCase4Desc: "Feltopptak i naturlige omgivelser. Håndterer bakgrunnsstøy og flere talere. Støtter over 100 språk og dialekter.",
      useCase5Title: "Muntlig historieprosjekter",
      useCase5Desc: "Bevar hele arkiver uten begrensninger. Lag søkbare historiske opptegnelser. Perfekt for longitudinelle og generasjonsstudier.",
      useCase6Title: "Avhandlingsforskning",
      useCase6Desc: "Studentvennlig prising med alle funksjoner. Behandle hele datasettet ditt rimelig. Overhold stramme tidsfrister med batchbehandling.",
      testimonialTitle: "Stolt på av ledende forskere",
      testimonialText: "Forskningsteamet vårt hadde 200 timer med fokusgruppeopptak fra vår studie av folkehelse. Andre tjenester ville at vi skulle velge hvilke økter vi skulle transkribere på grunn av kostnadene. NeverCap lot oss behandle alt i løpet av en helg. Identifiseringen av 20 personer fungerte faktisk – selv under de mest rotete diskusjonene der alle snakket samtidig. Dette verktøyet har fullstendig endret måten vi håndterer kvalitative data på.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Ledende forsker, Folkehelseinstituttet",
      ctaTitle: "Slutt å velge hvilke data du skal analysere",
      ctaSubtitle: "Bli med over 50 000 forskere som transkriberer alt",
      ctaButton: "Prøv NeverCap Gratis"
    },
    BusinessTeams: {
      heroBadge: "For forretningsteam",
      heroTitle1: "Møteopptak gjort",
      heroTitle2: "Uanstrengt",
      heroSubtitle: "Ta opp møter direkte i nettleseren din, eller last opp lydfiler umiddelbart. Bygg søkbare arkiver fra et ubegrenset antall samtaler. Mist aldri viktige diskusjoner igjen med virkelig ubegrenset transkripsjon.",
      heroCtaPrimary: "Start opptaket nå →",
      heroCtaSecondary: "Se hvordan det fungerer",
      recordingStatus: "Innspilling...",
      statsMeetingMinutes: "Møtereferat",
      statsLiveRecording: "Liveopptak",
      statsSpeakerID: "Høyttaler-ID",
      statsInstantUpload: "Øyeblikkelig opplasting og prosess",
      featuresTitle: "Alt team trenger for å fange kunnskap",
      featuresSubtitle: "Fra liveopptak til umiddelbare opplastinger har vi eliminert alle friksjonspunkter",
      feature1Title: "Spill inn direkte i nettleseren din",
      feature1Desc: "Ingen nedlastinger, ingen programtillegg. Start opptaket umiddelbart med ett klikk. Perfekt lydkvalitet, automatisk høyttalergjenkjenning og transkripsjon i sanntid mens du snakker.",
      feature1Benefit1: "Start av opptak med ett klikk",
      feature1Benefit2: "Ingen programvareinstallasjon",
      feature1Benefit3: "Fungerer på alle enheter",
      feature1Benefit4: "Transkripsjon i sanntid",
      feature1Visual1: "Klikk og opptak",
      feature1Visual2: "Ingen oppsett nødvendig",
      feature2Title: "Last opp hvilken som helst lydfil umiddelbart",
      feature2Desc: "Har du opptak fra Zoom, Teams eller telefonen din? Last dem opp umiddelbart. Støtte for alle større lyd- og videoformater. Behandle flere filer samtidig uten venting.",
      feature2Benefit1: "Støtter: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Mulighet for batchopplasting",
      feature2Benefit3: "Støtter 10-timers filer",
      feature2Benefit4: "Prosess mens du jobber",
      feature2Visual1: "Dra og slipp filer",
      feature3Title: "Bygget for teamsamarbeid",
      feature3Desc: "Del transkripsjoner med teamet ditt umiddelbart. Lytt til opptak sammen, eksporter transkripsjoner i flere formater og sørg for at alle holder seg oppdatert med søkbare møtearkiver.",
      feature3Benefit1: "Del transkripsjoner med hvem som helst",
      feature3Benefit2: "Lytt til originalopptak",
      feature3Benefit3: "Eksporter transkripsjoner i flere formater",
      feature3Benefit4: "Søkbare arkiver for hele teamet",
      feature3Visual1: "Teammedlemmer",
      feature3Visual2: "Ubegrenset samarbeid",
      feature4Title: "Finn enhver samtale umiddelbart",
      feature4Desc: "Søk på tvers av alle møtene dine samtidig. Finn den avgjørende avgjørelsen fra forrige kvartal eller kundekravet fra måneder siden. AI-drevet søk forstår kontekst, ikke bare nøkkelord.",
      feature4Benefit1: "Søk i alle møter samtidig",
      feature4Benefit2: "AI forstår kontekst",
      feature4Benefit3: "Filtrer etter foredragsholder eller dato",
      feature4SearchPlaceholder: "🔍 Søk: «Omsetningsmål for 4. kvartal»",
      feature4SearchResults: "Funnet i 3 møter:",
      feature4Meeting1: "Salgsplanlegging - 15. oktober",
      feature4Meeting1Text: '"...mål for fjerde kvartal satt til 2 millioner dollar..."',
      feature4Meeting2: "Styremøte - 20. oktober",
      feature4Meeting2Text: '"...Omsetningsprognoser for 4. kvartal..."',
      workflowTitle: "Fra opptak til handlingsrettet innsikt",
      workflowSubtitle: "En sømløs arbeidsflyt som fanger opp alle viktige øyeblikk",
      workflowStep1Title: "Opptak eller opplasting",
      workflowStep1Desc: "Start innspillingen direkte eller last opp eksisterende lydfiler",
      workflowStep2Title: "Automatisk transkribering",
      workflowStep2Desc: "AI transkriberer med 96 % nøyaktighet på få minutter",
      workflowStep3Title: "Samarbeide",
      workflowStep3Desc: "Del, kommenter og trekk ut handlingspunkter",
      workflowStep4Title: "Søk og analyser",
      workflowStep4Desc: "Få innsikt på tvers av alle møtene dine",
      testimonialsTitle: "Lagene elsker NeverCap",
      testimonialsSubtitle: "Se hvordan bedrifter forvandler møtekulturen sin",
      testimonial1Text: "«Vi gikk fra å gå glipp av viktige detaljer til å ha et søkbart arkiv over hver samtale. Funksjonen for direkte opptak betyr at vi aldri glemmer å fange opp viktige diskusjoner.»",
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktsjef, TechCorp",
      testimonial2Text: "«Otter begrenset oss til 10 filopplastinger per måned. Nå laster vi opp alle kundesamtalene våre umiddelbart. Det var en banebrytende prosess for oppfølgingen til salgsteamet vårt.»",
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Salgsdirektør, ConsultPro",
      testimonial3Text: "«Muligheten til å søke på tvers av måneder med møter sparte oss under revisjonen. Fant alle avgjørelser og godkjenninger på sekunder.»",
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Driftssjef, FinanceHub",
      ctaTitle: "Slutt å miste viktige samtaler",
      ctaSubtitle: "Bli med tusenvis av team som spiller inn alle møter med ubegrenset transkripsjon",
      ctaButton: "Start innspillingen gratis →"
    },
    Educators: {
      heroBadge: "For lærere og lærere",
      heroTitle1: "Gjør hvilken som helst pedagogisk video om til",
      heroTitle2: "Tilgjengelig innhold",
      heroSubtitle: "Bare lim inn YouTube-lenker for å få umiddelbare transkripsjoner med automatisk genererte tekstinger. Gjør forelesninger, veiledninger og pedagogiske videoer om til søkbart og tilgjengelig innhold som alle studenter kan lære av.",
      heroCtaPrimary: "Prøv det gratis – uten kredittkort",
      heroCtaSecondary: "Se demoen",
      stats1Number: "1-klikk",
      stats1Label: "YouTube-transkripsjon",
      stats2Number: "100+",
      stats2Label: "Støttede språk",
      stats3Number: "∞",
      stats3Label: "Ubegrensede videoer",
      stats4Number: "96 %",
      stats4Label: "Nøyaktighet",
      featuresTitle: "Alt lærere trenger for videotranskripsjon",
      featuresSubtitle: "Fra YouTube-forelesninger til innspilte klasser – gjør alt innholdet ditt tilgjengelig",
      feature1Title: "Øyeblikkelige YouTube- og plattformlenker",
      feature1Desc: "Bare lim inn en hvilken som helst videolenke, og få transkripsjoner umiddelbart. Fungerer med YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive og mer. Ingen nedlasting, ingen venting.",
      feature1Point1: "Transkripsjon med direkte lenke – ingen nedlastinger nødvendig",
      feature1Point2: "Støtte for alle større plattformer",
      feature1Point3: "Behandle hele spillelister samtidig",
      feature1Point4: "Fungerer med private videoer (med tillatelse)",
      feature2Title: "Automatisk generering av teksting og undertekster",
      feature2Desc: "Lag nøyaktige tekstinger umiddelbart for alle dine undervisningsvideoer. Gjør innholdet tilgjengelig for elever med hørselshemminger, personer med fremmedspråk eller de som foretrekker å lese med.",
      feature2Point1: "SRT-, VTT- og TXT-eksportformater",
      feature2Point2: "Tidsstempler på ordnivå for perfekt synkronisering",
      feature2Point3: "Rediger og tilpass teksting enkelt",
      feature2Point4: "Last opp direkte tilbake til YouTube",
      feature2Visual1: "Språkoversettelser",
      feature2Visual2: "Gjør innholdet ditt globalt tilgjengelig",
      feature3Title: "Organiser etter kurs og kategorier",
      feature3Desc: "Opprett mapper for å organisere karakterutskrifter etter kurs, emne eller semester. Hold alt utdanningsinnholdet ditt pent kategorisert og lett søkbart. Bygg et omfattende bibliotek med tilgjengelig kursmateriell.",
      feature3Point1: "Opprett et ubegrenset antall mapper og undermapper",
      feature3Point2: "Merk videoer etter emne eller vanskelighetsgrad",
      feature3Point3: "Masseorganiser flere transkripsjoner",
      feature3Point4: "Søk i alt innholdet ditt umiddelbart",
      feature3VisualTitle: "Kursbiblioteket ditt",
      feature3Folder1: "Matematikk 101",
      feature3Folder2: "Fysikkforelesninger",
      feature3Folder3: "Videoer av biologilaboratoriet",
      feature3Folder4: "Historiske dokumentarer",
      feature3Folder5: "Språklæring",
      feature4Title: "Eksporter i hvilket som helst format du trenger",
      feature4Desc: "Last ned transkripsjoner i TXT-, DOCX- eller PDF-format. Perfekt for å lage studieveiledninger, forelesningsnotater eller tilgjengelig kursmateriell. Del med studenter eller integrer i læringsplattformen din.",
      feature4Point1: "TXT for enkel tekstredigering",
      feature4Point2: "DOCX for formaterte dokumenter",
      feature4Point3: "PDF for enkel deling og utskrift",
      feature4Point4: "Masseeksport av flere filer samtidig",
      workflowTitle: "Hvordan det fungerer",
      workflowSubtitle: "Fra videolink til tilgjengelig transkripsjon på få minutter",
      workflowStep1Title: "Lim inn lenke",
      workflowStep1Desc: "Kopier en URL til en hvilken som helst pedagogisk video og lim den inn",
      workflowStep2Title: "Automatisk transkribering",
      workflowStep2Desc: "AI transkriberer med 96 % nøyaktighet",
      workflowStep3Title: "Generer teksting",
      workflowStep3Desc: "Opprett perfekt synkroniserte undertekster automatisk",
      workflowStep4Title: "Del og eksporter",
      workflowStep4Desc: "Last ned eller del med elevene",
      useCasesTitle: "Perfekt for alle utdanningsbehov",
      useCasesSubtitle: "Se hvordan lærere bruker NeverCap for å forbedre læringen",
      useCase1Title: "Innspilte forelesninger",
      useCase1Text: "Transkriber hele semestre med innspilte forelesninger. Studentene kan søke etter bestemte emner, repetere nøkkelkonsepter og aldri gå glipp av viktig informasjon.",
      useCase2Title: "Nettkurs",
      useCase2Text: "Gjør nettkursene dine tilgjengelige for internasjonale studenter med oversettelser på over 100 språk. Øk påmeldingen og tilfredsheten.",
      useCase3Title: "Studiemateriell",
      useCase3Text: "Konverter videoopplæringer til lesbare studieguider. Perfekt for studenter som foretrekker å lese eller trenger å gjennomgå innhold raskt.",
      useCase4Title: "Tilgjengelighetssamsvar",
      useCase4Text: "Oppfyll tilgjengelighetskravene ved å tilby teksting og transkripsjoner for alt videoinnhold. Sørg for lik tilgang for alle elever.",
      useCase5Title: "Omvendt klasserom",
      useCase5Text: "Del videoforelesninger med transkripsjoner før timen. Studentene kan repetere i sitt eget tempo og komme forberedt til diskusjoner.",
      useCase6Title: "Forskning og sitater",
      useCase6Text: "Hjelp elevene med å sitere videokilder nøyaktig med tidsstempler. Perfekt for forskningsprosjekter og akademiske oppgaver.",
      testimonialTitle: "Stolt på av over 50 000 lærere",
      testimonialSubtitle: "Se hvorfor lærere over hele verden velger NeverCap",
      testimonialText: "«Jeg har brukt NeverCap til å transkribere hele YouTube-kanalen min med matteveiledninger. Det som pleide å ta uker med andre tjenester, tar nå timer. Muligheten til å lime inn lenker direkte og få umiddelbare transkripsjoner har forvandlet måten jeg lager tilgjengelig innhold på. Mine internasjonale studenter elsker spesielt de flerspråklige tekstingene!»",
      testimonialAuthorName: "Professor Karen Mitchell",
      testimonialAuthorRole: "Matematikkprofessor, nettlærer",
      ctaTitle: "Gjør alt ditt utdanningsinnhold tilgjengelig",
      ctaSubtitle: "Bli med tusenvis av lærere som bruker ubegrenset transkripsjon",
      ctaButton: "Prøv NeverCap Gratis"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Last ned YouTube-videoer som MP4",
        "placeholder": "Søk eller lim inn YouTube-lenken din her",
        "clear_icon": "Fjern inndata",
        "Download": "Last ned",
        "loading_text": "Behandler nedlastingslenken. Bli på siden.",
        "howToDownload": "Hvordan laste ned?",
        "tutorial": "Se veiledningen"
      },
      part2: {
        "title": "Slik gjør du om en YouTube-video til en nedlastbar MP4-fil i tre enkle trinn",
        "steps": [
                {
                  title: "Kopier URL-en",
                  content: "Åpne den ønskede YouTube-videoen, og kopier deretter lenken fra adressefeltet i nettleseren."
                },
                {
                  title: "Lim inn lenken",
                  content: "Gå til videonedlastingsverktøyet ditt og lim inn URL-en i inndatafeltet."
                },
                {
                  title: "Last ned MP4-filen",
                  content: "Når den er behandlet, trykker du på nedlastingsknappen for å lagre MP4-filen."
                }
              ]
      },
      part3: {
        content: [
                "Har du noen gang hatt behov for å se YouTube-videoer offline?",
                "Enten du pendler med t-banen, flyr, studerer en viktig veiledning, dykker ned i ferdighetsbyggende innhold eller arkiverer viktig videomateriale – det er en vanlig frustrasjon å ha pålitelig offline-tilgang. Det er her nedlastingsprogrammet vårt skinner.",
                "Nedlasteren lar deg raskt og enkelt konvertere YouTube-videoer til MP4-format for nedlasting. Lagre dem på enheten din, og se dem når som helst.",
                "Prosessen er rask, enkel og problemfri. Når den er nedlastet, kan du nyte favorittvideoene dine når og hvor du enn er – uten behov for internett."
              ]
      },
      part4: {
        content: ["Her er de 5 største fordelene med nedlasting", "YouTube-videoer som MP4-filer"],
        list: [
                {
                  title: "Spar på datakostnader:",
                  content: "Vanligvis bruker det å se videoer på YouTube mye mobildata. Ved å laste ned for visning uten nett kan du unngå disse unødvendige kostnadene."
                },
                {
                  title: "Se hvor som helst, når som helst:",
                  content: "Nyt videoene dine sømløst, selv med ustabile internettforbindelser. Ikke flere bekymringer om buffering."
                },
                {
                  title: "Enkel arkivering og bevaring:",
                  content: "Å lagre videoer som MP4-filer gjør det enkelt å bygge din personlige samling, spesielt for innhold du synes er virkelig verdifullt eller viktig."
                },
                {
                  title: "Enklere deling:",
                  content: "Det er mye enklere å dele en MP4-fil enn å sende en lenke. Du kan sende videofilen direkte via apper som WhatsApp eller Instagram, og dermed slipper du det ekstra trinnet med å åpne YouTube."
                },
                {
                  title: "Øyeblikkelig visning, delte øyeblikk:",
                  content: "Spent på å vise en favorittvideo til venner eller familie i nærheten? Med MP4-filen nedlastet kan dere alle se den sammen uten vanskelige pauser mens dere venter på at den skal lastes inn."
                }
              ]
      },
      part5: {
        title: "Hvorfor nedlasteren vår skiller seg ut",
        cards: [
                {
                  title: "Enkelhet med ett klikk",
                  content: "Enkel oppsett og intuitiv betjening."
                },
                {
                  title: "Lynraskt, ubegrenset",
                  content: "Konverter og last ned i topphastighet – ingen grenser, ingen innstillinger."
                },
                {
                  title: "Konverter på farten",
                  content: "Behandle filene dine umiddelbart, uten behov for venting."
                },
                {
                  title: "Null annonser, null distraksjoner",
                  content: "Nyt et rent grensesnitt uten popup-vinduer, bannere eller avbrudd – bare sømløs videokonvertering."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Original kvalitet garantert",
                  content: "Nedlastingene dine beholder kildevideoens fulle oppløsning for pikselperfekt avspilling hver gang."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fungerer hvor som helst",
                  content: "Fullt kompatibel med alle nettlesere, på alle enheter."
                }
              ]
      },
      part6: {
        title: ["Maksimer nedlastingene av YouTube-videoer", "Med nedlasteren"],
        content: [
                "Enkel konvertering fra YouTube til MP4: Raskt, enkelt og gratis.",
                "Det er der vi utmerker oss. Vårt brukervennlige grensesnitt er designet for alle – ingen tekniske ferdigheter kreves. Uansett erfaringsnivå kan du konvertere videoer umiddelbart. Ingen registrering nødvendig: Få akkurat det du trenger, med en gang.",
                "Du kan være trygg på at de nedlastede MP4-filene dine beholder den opprinnelige videokvaliteten og klarheten, akkurat slik du så dem på YouTube.",
                "Fungerer overalt. Fullt kompatibel på tvers av alle større plattformer og enheter. Enten du bruker Windows, macOS, Linux, Android eller iOS – og bruker en smarttelefon, et nettbrett eller en datamaskin – kan du laste ned videoer sømløst."
              ]
      },
      part7: {
        title: "Viktige spørsmål om nedlasting av YouTube-videoer",
        list: [
                {
                  question: "Kan jeg laste ned en YouTube-video hvis den er opphavsrettsbeskyttet?",
                  answer: "Det er ulovlig å laste ned opphavsrettsbeskyttede YouTube-videoer uten tillatelse fra opphavsrettseieren."
                },
                {
                  question: "Er dette nedlastingsverktøyet trygt?",
                  answer: "Ja, det er trygt og pålitelig. Vi krever ingen personlig informasjon fra brukere og tar strenge tiltak mot virus. Vi minner deg om å alltid være forsiktig når du laster ned filer fra internett: unngå å klikke på mistenkelige lenker eller laste ned tvilsomme filer."
                },
                {
                  question: "Hvilke språk støttes av nedlasting av YouTube til MP4?",
                  answer: "Tjenesten vår støtter nedlasting av YouTube-videoer på alle populære språk."
                },
                {
                  question: "Hvilke faktorer påvirker tiden det tar å laste ned en YouTube-video?",
                  answer: "Selv om vi sørger for den raskest mulige nedlastingsopplevelsen, påvirkes nedlastingstiden også av faktorer som videoens lengde og internettforbindelsens hastighet."
                },
                {
                  question: "Når jeg laster ned en MP4-video med smarttelefonen min, hvor lagres den?"
                },
                {
                  question: "Reduserer nedlasting av YouTube-video som MP4 videokvaliteten?",
                  answer: "Nei. Nedlasting av YouTube-videoer som MP4 med verktøyet vårt beholder den opprinnelige videokvaliteten. Konverteringsprosessen bevarer kildekvaliteten, slik at du får den samme seeropplevelsen som på YouTube."
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Bransjeledende AI-teknologi",
      "title": "Om",
      "highlighted_text": "NeverCap",
      "description": "Vårt oppdrag er å tilby de mest nøyaktige transkripsjonstjenestene for lyd og video. Ved å bruke bransjeledende AI-teknologi oppnår vi transkripsjonsnøyaktighet på over 96 %. For noen større språk kan vi gjennom teknisk optimalisering til og med nå 99 % nøyaktighet."
    },
    Stats: {
      "title": "Vår",
      "highlighted_text": "Påvirkning",
      "subtitle": "Styrker global kommunikasjon med banebrytende AI-teknologi",
      "metrics": [
            {
              "value": "96%+",
              "label": "Nøyaktighet",
              "description": "Bransjeledende transkripsjonsnøyaktighet med avansert AI"
            },
            {
              "value": "100+",
              "label": "Støttede språk",
              "description": "Talt ordgjenkjenning for globalt innhold"
            },
            {
              "value": "249+",
              "label": "Oversettelsesspråk",
              "description": "Oversett transkribert tekst til så godt som alle språk"
            }
          ]
    },
    Mission: {
      "title": "Hvorfor velge",
      "highlighted_text": "NeverCap",
      "subtitle": "Vi tror på å bryte ned språkbarrierer og gjøre innhold tilgjengelig for alle",
      "features": [
            {
              "icon": "🎯",
              "title": "Uovertruffen nøyaktighet",
              "description": "AI-modellene våre forbedres kontinuerlig for å levere transkripsjonsnøyaktighet på over 96 %, og noen større språk når opptil 99 % nøyaktighet gjennom avansert optimalisering."
            },
            {
              "icon": "🌍",
              "title": "Global språkstøtte",
              "description": "Støtte for over 100 språk innen talegjenkjenning og oversettelsesmuligheter for mer enn 249 språk, noe som gjør innholdet ditt virkelig globalt."
            },
            {
              "icon": "⚡",
              "title": "Lynrask behandling",
              "description": "Behandle timevis med lyd- og videoinnhold på minutter, ikke timer. Vår optimaliserte AI-pipeline sikrer at du får transkripsjonene dine raskt uten at det går på bekostning av kvaliteten."
            },
            {
              "icon": "🔒",
              "title": "Sikkerhet i bedriftsklassen",
              "description": "Din datasikkerhet er vår prioritet. Vi bruker kryptering i henhold til bransjestandard og overholder globale personvernregler for å holde innholdet ditt trygt og konfidensielt."
            }
          ]
    },
    Company: {
      "title": "Bedrift",
      "highlighted_text": "Informasjon",
      "subtitle": "Ta kontakt med oss for eventuelle spørsmål eller støtte",
      "details": [
            {
              "label": "Firmanavn",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Hovedkvarter",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "USA"]
            },
            {
              "label": "Kontakt oss",
              "value": ["e-post", "Støtte tilgjengelig døgnet rundt"]
            }
          ]
    },
    CTA: {
      "title": "Klar til å oppleve forskjellen?",
      "subtitle": "Bli med tusenvis av fagfolk som stoler på NeverCap for sine transkripsjonsbehov",
      "button": "Prøv NeverCap Gratis →",
      "disclaimer": "Ingen kredittkort kreves • Start transkribering på sekunder"
    }
  },
  Privacy: {
    title: "Privatliv",
    titleGradient: "Politikk",
    subtitle: "Lær hvordan vi samler inn, bruker og beskytter din personlige informasjon",
    "lastUpdated": "Sist oppdatert: {dato}",
    "lastUpdatedDate": "21. juli 2025",
    "privacyPolicyTitle": "Personvernerklæring",
    "policyDescription": "Denne policyen beskriver hvordan NeverCap (heretter referert til som «NeverCap», «vår», «vi», «oss») samler inn, bruker og utleverer din personlige informasjon når du bruker våre tjenester, nettsteder (https://www.nevercap.ai/) og programvare (samlet kalt «tjenestene»).",
    "policyAgreement": "Vennligst les denne personvernerklæringen nøye og sørg for at du forstår den. Ved å bruke noen av tjenestene våre, godtar du denne personvernerklæringen. Hvis du ikke samtykker i vår bruk av dine personopplysninger i samsvar med denne policyen, må du umiddelbart slutte å bruke tjenestene våre.",
    "policyOverview": "I denne policyen beskriver vi hvilke data vi samler inn og hvorfor, hvordan dataene dine håndteres, og dine rettigheter med hensyn til dataene dine. Vi selger ikke dataene dine.",
    "scopeTitle": "1. Omfanget av denne personvernerklæringen",
    "scopeDescription": "Denne personvernerklæringen gjelder kun for vår innsamling og behandling av informasjon om brukere av tjenestene. Denne personvernerklæringen gjelder ikke for tjenester, nettsteder eller programvare som drives av tredjeparter og som er lenket til oss (enten vi tilbyr disse lenkene eller andre brukere deler dem), og den gjelder heller ikke for innhold, data, applikasjoner eller materiale fra tredjeparter. Vi anbefaler at du sjekker personvernerklæringen til tredjepartsnettsteder eller programvare før du gir dem informasjon.",
    "collectionTitle": "2. Hva vi samler inn og hvorfor",
    "collectionPrinciple": "Vårt veiledende prinsipp er å bare samle inn det vi trenger. Her er hva det betyr i praksis:",
    "identityTitle": "2.1 Identitet og tilgang",
    "identityDescription": "Når du registrerer deg for et av produktene våre, ber vi om identifiserende informasjon som navn og e-postadresse. Dette er for å kunne tilby viktig produktfunksjonalitet og sende deg produktoppdateringer og annen viktig informasjon.",
    "billingTitle": "2.2 Faktureringsinformasjon",
    "billingDescription": "Hvis du registrerer deg for et betalt produkt, vil du bli bedt om å oppgi betalingsinformasjon og faktureringsadresse. Betalingsinformasjonen sendes direkte til betalingsbehandleren vår og når ikke serverne våre.",
    "productInteractionsTitle": "2.3 Produktinteraksjoner",
    "productInteractionsDescription": "Vi lagrer innholdet du laster opp, mottar eller vedlikeholder i produktkontoene dine på serverne våre. Med mindre du sletter dette innholdet, kan vi beholde det så lenge kontoen din er aktiv.",
    "websiteInteractionsTitle": "2.4 Nettstedsinteraksjoner",
    "websiteInteractionsDescription": "Vi samler inn informasjon om nettleseraktiviteten din for analyse og statistiske formål, som testing av konverteringsfrekvens og eksperimentering med nye produktdesign. Dette inkluderer for eksempel nettleser- og operativsystemversjoner, IP-adressen din, hvilke nettsider du besøkte og hvor lang tid det tok å laste inn, og hvilket nettsted som henviste deg til oss. Hvis du har en konto og er logget på, er disse nettanalysedataene knyttet til IP-adressen og brukerkontoen din inntil kontoen din ikke lenger er aktiv.",
    "cookiesTitle": "2.5 informasjonskapsler",
    "cookiesDescription1": "Vi bruker også vedvarende førsteparts informasjonskapsler og noen tredjeparts informasjonskapsler for å lagre visse preferanser, gjøre det enklere for deg å bruke applikasjonene våre, utføre A/B-testing samt støtte noe analyse.",
    "cookiesDescription2": "En informasjonskapsel er en tekstbit som lagres av nettleseren din. Den kan bidra til å huske innloggingsinformasjon og nettstedsinnstillinger. Den kan også samle inn informasjon som nettlesertype, operativsystem, besøkte nettsider, besøksvarighet, vist innhold og andre klikkstrømdata. Du kan justere innstillinger for oppbevaring av informasjonskapsler og godta eller blokkere individuelle informasjonskapsler i nettleserinnstillingene dine, selv om appene våre ikke vil fungere, og andre aspekter ved tjenesten vår kanskje ikke fungerer som de skal hvis du slår av informasjonskapsler.",
    "correspondenceTitle": "2.6 Frivillig korrespondanse",
    "correspondenceDescription": "Når du sender oss en e-post med et spørsmål eller ber om hjelp, beholder vi denne korrespondansen, inkludert e-postadressen din, slik at vi har en historikk over tidligere korrespondanse å referere til hvis du tar kontakt i fremtiden.",
    "accessTitle": "3. Når vi får tilgang til eller deler informasjonen din",
    "accessDescription1": "For å levere produkter eller tjenester du har bedt om. Vi bruker noen tredjeparts underdatabehandlere for å kjøre applikasjonene våre og levere tjenestene til deg. Dette inkluderer leverandører av skytjenester og analysetjenester.",
    "accessDescription2": "For å undersøke, forhindre eller iverksette tiltak angående misbruk. Tilgang til en kundes konto når man undersøker potensielt misbruk er en siste utvei. Vi ønsker å beskytte personvernet og sikkerheten til både kundene våre og de som rapporterer problemer til oss, og vi gjør vårt beste for å balansere dette ansvaret gjennom hele prosessen. Hvis vi oppdager at du bruker produktene våre til et begrenset formål, vil vi iverksette tiltak etter behov, inkludert å varsle relevante myndigheter der det er berettiget.",
    "accessDescription3": "Når det er påkrevd i henhold til gjeldende lov.",
    "dataRequests": "Forespørsler om brukerdata. Vår policy er å ikke svare på forespørsler fra myndigheter om brukerdata med mindre vi er tvunget til det av en juridisk prosess eller under begrensede omstendigheter i tilfelle en nødforespørsel. Hvis amerikanske politimyndigheter har nødvendig arrestordre, stevning eller rettskjennelse som krever at vi deler data, må vi imidlertid etterkomme dette. På samme måte vil vi bare svare på forespørsler fra myndigheter utenfor USA hvis vi er tvunget til det av den amerikanske regjeringen gjennom prosedyrer som er beskrevet i en traktat eller avtale om gjensidig juridisk bistand. Det er vår policy å varsle berørte brukere før vi deler data, med mindre vi er juridisk forbudt å gjøre det, og unntatt i noen nødstilfeller.",
    "preservationRequests": "Forespørsler om bevaring. På samme måte er det vår policy å kun etterkomme forespørsler om å bevare data dersom det er pålagt av den amerikanske føderale lov om lagret kommunikasjon, 18 USC paragraf 2703(f), eller av en behørig amerikansk stevning for sivile saker. Vi deler ikke bevarte data med mindre det er pålagt av loven eller pålagt av en rettskjennelse som vi velger å ikke anke. Videre, med mindre vi mottar en behørig arrestordre, rettskjennelse eller stevning før den nødvendige bevaringsperioden utløper, vil vi ødelegge eventuelle bevarte kopier av kundedata ved slutten av bevaringsperioden.",
    "taxAudits": "Hvis vi blir revidert av en skattemyndighet, kan vi bli pålagt å dele faktureringsrelatert informasjon. I så fall vil vi bare dele minimumsbehovet, for eksempel faktureringsadresser og informasjon om skattefritak.",
    "securityTitle": "4. Hvordan vi sikrer dataene dine",
    "securityDescription": "Alle data krypteres via SSL/TLS når de overføres fra serverne våre til nettleseren din.",
    "deletionTitle": "5. Hva skjer når du sletter innholdet ditt",
    "deletionDescription": "Hvis du sletter innhold, blir det umiddelbart utilgjengelig.",
    "locationTitle": "6. Plassering av nettsted og data",
    "locationDescription": "Våre produkter og andre nettsider drives i USA. Hvis du befinner deg i EU, Storbritannia eller andre steder utenfor USA, vær oppmerksom på at all informasjon du gir oss vil bli overført til og lagret i USA. Ved å bruke våre nettsteder eller tjenester og/eller gi oss din personlige informasjon, samtykker du til denne overføringen.",
    "childrenTitle": "7. Barns personvern",
    "childrenDescription": "Tjenestene er ikke rettet mot barn, og vi samler ikke bevisst inn personopplysninger fra barn under 13 år. Hvis du er under 13 år, må du ikke sende inn personopplysninger gjennom tjenestene. Hvis du mener at et barn har gitt oss personopplysninger i strid med disse retningslinjene, kan du kontakte oss som angitt nedenfor.",
    "updatesTitle": "8. Oppdateringer av denne personvernerklæringen",
    "updatesDescription": "Vi kan oppdatere disse retningslinjene etter behov for å overholde relevante forskrifter og gjenspeile eventuelle nye praksiser. Når vi foretar en vesentlig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden.",
    "contactTitle": "9. Kontakt oss",
    "contactDescription": "Hvis du har spørsmål, kommentarer eller klager angående vår personvernerklæring, kan du kontakte oss, så vil vi gjøre vårt beste for å behandle klagen din så snart som mulig.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Vilkår for",
    titleGradient: "Service",
    subtitle: "Vennligst les disse vilkårene nøye før du bruker tjenestene våre",
    "lastUpdated": "Sist oppdatert: {dato}",
    "lastUpdatedDate": "21. juli 2025",
    "termsOfServiceTitle": "Vilkår for bruk",
    "thankYou": "Takk for at du bruker produktene våre!",
    "companyDefinition": "Når vi sier «Selskapet», «vi», «vår» eller «oss» i dette dokumentet, refererer vi til NeverCap.",
    "servicesDefinition": "Når vi sier «tjenester», mener vi ethvert produkt som er laget og vedlikeholdt av NeverCap, enten det leveres i en nettleser, et skrivebordsprogram, en mobilapplikasjon eller et annet format.",
    "termsUpdate": "Vi kan oppdatere disse tjenestevilkårene i fremtiden. Vanligvis har disse endringene vært for å tydeliggjøre noen av disse vilkårene ved å lenke til en utvidet relatert policy. Når vi gjør en betydelig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden og iverksette andre nødvendige tiltak for å varsle kontoinnehavere.",
    "acceptanceTitle": "1. Godkjenning av avtalen",
    "acceptanceDescription1": "Ved å bruke tjenestene våre, indikerer du at du godtar denne avtalen, som dermed blir en bindende kontrakt mellom deg og NeverCap. Du erklærer at du er juridisk i stand til å godta disse vilkårene, og bekrefter at du er myndig nok til å inngå en bindende kontrakt. NeverCaps aksept er uttrykkelig betinget av at du samtykker i alle vilkårene i denne avtalen.",
    "eligibilityRequirement": "Tjenestene er ikke ment for og skal ikke brukes av noen under 18 år. Ved å bruke tjenestene erklærer og garanterer du at du oppfyller de ovennevnte kvalifikasjonskravene.",
    "userResponsibility": "Begrepene «du», «din», «deg selv» skal også omfatte dine ansatte, agenter, forretningsrepresentanter og alle andre personer som du gir tilgang til Tjenestene gjennom Kontoen din (som definert nedenfor). Du er ansvarlig for å sørge for at alle personer som får tilgang til Tjenestene gjennom Kontoen din er klar over disse Vilkårene og overholder dem.",
    "termsRevision": "NeverCap forbeholder seg retten til å revidere og oppdatere disse vilkårene fra tid til annen etter eget skjønn. Alle endringer trer i kraft umiddelbart når de publiseres. Din fortsatte bruk av tjenestene etter at de reviderte vilkårene er publisert, betyr at du godtar og samtykker i endringene. Du forventes å sjekke denne siden fra tid til annen, slik at du er klar over eventuelle endringer, da de er bindende for deg.",
    "servicesTitle": "2. NeverCaps tjenester",
    "servicesDescription1": "Tjenestene våre lar brukere omdanne talesamtaler til transkribert tekst som kan søkes i, oversettes og deles med andre.",
    "servicesOptions": "Du kan velge om du vil bruke gratisversjonen av tjenestene («Gratis tjenester») eller den abonnementsbaserte, betalte versjonen av tjenestene som du kan bli pålagt å betale gebyrer for (de «betalte tjenestene»).",
    "servicesAccess": "Vi vil gjøre tjenestene tilgjengelige for deg. Du er ansvarlig for å gjøre alle nødvendige ordninger for at du skal ha tilgang til tjenestene.",
    "accountTermsTitle": "3. Kontovilkår",
    "accountSecurity": "Du er ansvarlig for å opprettholde sikkerheten til kontoen din. Selskapet kan ikke og vil ikke være ansvarlig for tap eller skade som følge av din manglende overholdelse av denne sikkerhetsforpliktelsen.",
    "lawfulUse": "Du har ikke lov til å bruke Tjenestene til noe ulovlig, uetisk eller umoralsk formål.",
    "contentResponsibility": "Du er ansvarlig for alt innhold som legges ut og aktivitet som skjer på kontoen din. Dette inkluderer innhold som legges ut av andre som enten: (a) har tilgang til påloggingsinformasjonen din; eller (b) har sine egne pålogginger på kontoen din.",
    "humanRequirement": "Du må være et menneske. Kontoer registrert av «boter» eller andre automatiserte metoder er ikke tillatt.",
    "paymentTitle": "4. Betaling, refusjon og planendringer",
    "freeTrial": "For betalte tjenester som tilbyr en gratis prøveperiode, forklarer vi prøveperiodens lengde når du registrerer deg. Etter prøveperioden må du betale på forhånd for å fortsette å bruke tjenesten. Hvis du ikke betaler, vil disse tjenestene opphøre.",
    "upgradePolicy": "Hvis du oppgraderer fra et gratisabonnement til et betalt abonnement, belaster vi kortet ditt umiddelbart, og faktureringsperioden starter på oppgraderingsdagen.",
    "taxes": "Alle gebyrer er eksklusive alle skatter, avgifter eller gebyrer pålagt av skattemyndighetene. Der det er nødvendig, vil vi innkreve disse skattene på vegne av skattemyndighetene og overføre dem til skattemyndighetene. Ellers er du ansvarlig for betaling av alle skatter, avgifter eller gebyrer.",
    "refunds": "Alle kjøp refunderes ikke. Du kan når som helst kansellere betalte tjenester ved å logge inn på kontoen din. For betalte abonnementer vil oppsigelsen tre i kraft ved slutten av den nåværende betalte perioden, med mindre annet er oppgitt.",
    "cancellationTitle": "5. Avbestilling og oppsigelse",
    "cancellationPolicy": "Hvis du kansellerer Tjenesten før utløpet av en betalt periode, vil kanselleringen tre i kraft umiddelbart, og du vil ikke bli belastet igjen. Vi fordeler ikke automatisk ubrukt tid forholdsmessig i forrige faktureringsperiode.",
    "terminationRights": "Vi har rett til å suspendere eller avslutte kontoen din og nekte enhver nåværende eller fremtidig bruk av tjenestene våre uansett grunn når som helst. Suspensjon betyr at du ikke vil kunne få tilgang til kontoen eller noe innhold på kontoen. Oppsigelse vil videre føre til sletting av kontoen din eller din tilgang til kontoen din, og tap og avståelse av alt innhold på kontoen din. Vi forbeholder oss også retten til å nekte bruk av tjenestene til hvem som helst uansett grunn når som helst. Vi har denne klausulen fordi statistisk sett, av hundretusenvis av kontoer på tjenestene våre, er det minst én som gjør noe skumelt.",
    "abusePolicy": "Verbal, fysisk, skriftlig eller annen mishandling (inkludert trusler om mishandling eller gjengjeldelse) av selskapets ansatt eller leder kan føre til umiddelbar oppsigelse av kontoen.",
    "submissionsTitle": "6. Innsendinger",
    "submissionsDescription": "Du erkjenner og samtykker i at eventuelle spørsmål, kommentarer, forslag, ideer, tilbakemeldinger eller annen informasjon angående nettstedet («innsendinger») som du gir oss, ikke er konfidensielle og skal bli vår eiendom. Vi skal eie eksklusive rettigheter, inkludert alle immaterielle rettigheter, og skal ha rett til ubegrenset bruk og formidling av disse innsendingene for ethvert lovlig formål, kommersielt eller annet, uten anerkjennelse eller kompensasjon til deg. Du fraskriver deg herved alle moralske rettigheter til slike innsendinger, og du garanterer herved at slike innsendinger er originale fra deg, eller at du har rett til å sende inn slike innsendinger. Du samtykker i at det ikke skal være noen regressrett mot oss for påstått eller faktisk krenkelse eller misbruk av noen eiendomsrett i dine innsendinger.",
    "uptimeTitle": "7. Oppetid og sikkerhet",
    "serviceAvailability": "Din bruk av tjenestene skjer på egen risiko. Vi tilbyr disse tjenestene «som de er» og «som tilgjengelig». Vi tilbyr ikke tjenestenivåavtaler for de fleste av tjenestene våre, men tar oppetiden til applikasjonene våre på alvor.",
    "throttlingPolicy": "Vi forbeholder oss retten til midlertidig å begrense eller begrense kontotilgang i sjeldne tilfeller der det bekreftes at en brukers aktivitet påvirker stabiliteten og ytelsen til tjenesten for andre brukere negativt. I alle tilfeller unntatt de mest kritiske, vil vi kontakte deg for å finne en løsning før vi iverksetter tiltak.",
    "dataSecurity": "Vi tar mange tiltak for å beskytte og sikre dataene dine gjennom sikkerhetskopiering, redundans og kryptering. Vi håndhever kryptering for dataoverføring over det offentlige internett.",
    "thirdPartyVendors": "Vi bruker tredjepartsleverandører og hostingpartnere til å levere nødvendig maskinvare, programvare, nettverk, lagring og relatert teknologi som kreves for å kjøre Tjenestene.",
    "siteManagementTitle": "8. Nettstedsadministrasjon",
    "siteManagementDescription": "Vi forbeholder oss retten, men ikke plikten, til å: (1) overvåke nettstedet for brudd på disse tjenestevilkårene; (2) iverksette passende rettslige skritt mot alle som, etter eget skjønn, bryter loven eller disse tjenestevilkårene, inkludert, men ikke begrenset til, å rapportere en slik bruker til politimyndigheter; (3) etter eget skjønn og uten begrensning, nekte, begrense tilgang til, begrense tilgjengeligheten til eller deaktivere (i den grad det er teknologisk mulig) noen av dine bidrag eller deler av disse; (4) etter eget skjønn og uten begrensning, varsel eller ansvar, fjerne fra nettstedet eller på annen måte deaktivere alle filer og innhold som er for store eller på noen måte er byrdefulle for våre systemer; og (5) ellers administrere nettstedet på en måte som er utformet for å beskytte våre rettigheter og eiendom og for å legge til rette for at nettstedet fungerer som det skal.",
    "copyrightTitle": "9. Opphavsrett og innholdseierskap",
    "copyrightCompliance": "Alt innhold som legges ut på Tjenestene må være i samsvar med amerikansk lov om opphavsrett.",
    "ipRights": "Vi gjør ikke krav på noen immaterielle rettigheter over materialet du leverer til tjenestene. Alt materiale som lastes opp forblir ditt.",
    "contentModeration": "Vi forhåndssjekker ikke innhold, men forbeholder oss retten (men ikke plikten) til etter eget skjønn å nekte eller fjerne innhold som er tilgjengelig via Tjenesten.",
    "trademarkProtection": "Navnene, utseendet og følelsen av tjenestene er opphavsrettsbeskyttet © til selskapet. Alle rettigheter forbeholdt. Du kan ikke duplisere, kopiere eller gjenbruke noen del av HTML, CSS, JavaScript eller visuelle designelementer uten uttrykkelig skriftlig tillatelse fra selskapet. Du må be om tillatelse til å bruke selskapets logo eller noen tjenestelogoer til markedsføringsformål. Send oss forespørsler om å bruke logoer på e-post. Vi forbeholder oss retten til å trekke tilbake denne tillatelsen hvis du bryter disse tjenestevilkårene.",
    "prohibitedExploitation": "Du samtykker i å ikke reprodusere, duplisere, kopiere, selge, videreselge eller utnytte noen del av Tjenestene, bruk av Tjenestene eller tilgang til Tjenestene uten uttrykkelig skriftlig tillatelse fra Selskapet.",
    "impersonationProhibition": "Du må ikke endre et annet nettsted på en feilaktig måte antyde at det er tilknyttet Tjenestene eller Selskapet.",
    "dmcaPolicy": "Vi respekterer andres immaterielle rettigheter. Hvis du mener at materiale som er tilgjengelig på eller gjennom nettstedet krenker opphavsretten du eier eller kontrollerer, vennligst kontakt oss umiddelbart. En kopi av varselet ditt vil bli sendt til personen som la ut eller lagret materialet som er omtalt i varselet. Vær oppmerksom på at du i henhold til gjeldende lov kan bli holdt ansvarlig for erstatning hvis du gir vesentlige feilaktige fremstillinger i et varsel. Hvis du derfor ikke er sikker på om materiale som ligger på eller lenkes til av nettstedet krenker opphavsretten din, bør du først vurdere å kontakte en advokat.",
    "prohibitedActivitiesTitle": "10. Forbudte aktiviteter",
    "generalProhibition": "Du har ikke tillatelse til å få tilgang til eller bruke nettstedet til noe annet formål enn det vi gjør nettstedet tilgjengelig for. Nettstedet kan ikke brukes i forbindelse med kommersielle tiltak, bortsett fra de som er spesifikt anbefalt eller godkjent av oss.",
    "userObligations": "Som bruker av nettstedet samtykker du i å ikke:",
    "dataScraping": "Systematisk hente data eller annet innhold fra nettstedet for å opprette eller kompilere, direkte eller indirekte, en samling, sammenstilling, database eller katalog uten skriftlig tillatelse fra oss.",
    "fraud": "Lure, bedra eller villede oss og andre brukere, spesielt i forsøk på å få tilgang til sensitiv kontoinformasjon som brukerpassord.",
    "securityInterference": "Omgå, deaktivere eller på annen måte forstyrre sikkerhetsrelaterte funksjoner på nettstedet, inkludert funksjoner som forhindrer eller begrenser bruk eller kopiering av innhold eller håndhever begrensninger på bruken av nettstedet og/eller innholdet der.",
    "defamation": "Nedsette, sverte eller på annen måte skade oss og/eller nettstedet, etter vår mening.",
    "harassment": "Bruke informasjon innhentet fra nettstedet til å trakassere, misbruke eller skade en annen person.",
    "supportAbuse": "Gjøre urettmessig bruk av våre støttetjenester eller sende inn falske rapporter om misbruk eller misbruk.",
    "legalCompliance": "Bruke nettstedet på en måte som ikke er i samsvar med gjeldende lover eller forskrifter.",
    "framingProhibition": "Delta i uautorisert innramming av eller lenking til nettstedet.",
    "malware": "Laste opp eller overføre (eller forsøke å laste opp eller overføre) virus, trojanske hester eller annet materiale, inkludert overdreven bruk av store bokstaver og spamming (kontinuerlig publisering av repeterende tekst), som forstyrrer en parts uavbrutte bruk og glede av nettstedet, eller som modifiserer, svekker, forstyrrer, endrer eller forstyrrer bruken, funksjonene, driften eller vedlikeholdet av nettstedet.",
    "automation": "Bruke systemet automatisk, for eksempel ved å bruke skript til å sende kommentarer eller meldinger, eller ved å bruke datautvinning, roboter eller lignende verktøy for datainnsamling og -utvinning.",
    "copyrightRemoval": "Slett opphavsretts- eller annen eiendomsrettserklæring fra alt innhold.",
    "impersonation": "Forsøke å utgi seg for å være en annen bruker eller person, eller bruke brukernavnet til en annen bruker.",
    "spyware": "Laste opp eller overføre (eller forsøke å laste opp eller overføre) materiale som fungerer som en passiv eller aktiv informasjonsinnsamlings- eller overføringsmekanisme, inkludert, men ikke begrenset til, klare grafikkutvekslingsformater («gifs»), 1×1-piksler, web bugs, informasjonskapsler eller andre lignende enheter (noen ganger referert til som «spyware» eller «passive innsamlingsmekanismer» eller «pcms»).",
    "disruption": "Forstyrre, avbryte eller skape en urimelig belastning på nettstedet eller nettverkene eller tjenestene som er koblet til nettstedet.",
    "employeeHarassment": "Trakassere, irritere, skremme eller true noen av våre ansatte eller agenter som er involvert i å tilby deg deler av nettstedet.",
    "accessCircumvention": "Forsøke å omgå eventuelle tiltak på nettstedet som er utformet for å forhindre eller begrense tilgang til nettstedet, eller deler av nettstedet.",
    "codeCopying": "Kopiere eller tilpasse nettstedets programvare, inkludert, men ikke begrenset til, Flash, PHP, HTML, JavaScript eller annen kode.",
    "reverseEngineering": "Med unntak av det som er tillatt i henhold til gjeldende lov, dechiffrere, dekompilere, demontere eller reverskonstruere programvaren som omfatter eller på noen måte utgjør en del av nettstedet.",
    "bots": "Med unntak av det som måtte være et resultat av standard bruk av søkemotorer eller nettlesere, bruke, lansere, utvikle eller distribuere ethvert automatisert system, inkludert, men ikke begrenset til, enhver spider, robot, jukseverktøy, skraper eller frakoblet leser som får tilgang til nettstedet, eller bruk eller lansering av uautoriserte skript eller annen programvare.",
    "buyingAgents": "Bruk en innkjøpsagent eller innkjøpsagent for å foreta kjøp på nettstedet.",
    "unauthorizedUse": "Gjøre uautorisert bruk av nettstedet, inkludert å samle inn brukernavn og/eller e-postadresser til brukere elektronisk eller på andre måter med det formål å sende uønsket e-post, eller opprette brukerkontoer automatisk eller under falske forutsetninger.",
    "competition": "Bruke nettstedet som en del av enhver innsats for å konkurrere med oss eller på annen måte bruke nettstedet og/eller innholdet til inntektsgenererende oppgaver eller kommersielle foretak.",
    "advertising": "Bruk nettstedet til å annonsere eller tilby salg av varer og tjenester.",
    "profileTransfer": "Selg eller overfør profilen din på annen måte.",
    "featuresTitle": "11. Funksjoner og feil",
    "featuresDescription": "Vi utformer tjenestene våre med omhu, basert på vår egen erfaring og erfaringene til kunder som deler sin tid og tilbakemeldinger. Det finnes imidlertid ingen tjeneste som tilfredsstiller alle. Vi gir ingen garantier for at tjenestene våre vil oppfylle dine spesifikke krav eller forventninger.",
    "bugsDescription": "Vi tester også alle funksjonene våre før vi sender dem ut. Som med all programvare, inneholder tjenestene våre uunngåelig noen feil. Vi sporer feilene som rapporteres til oss og jobber med dem, spesielt de som er relatert til sikkerhet eller personvern. Ikke alle rapporterte feil vil bli rettet, og vi garanterer ikke helt feilfrie tjenester.",
    "correctionsTitle": "12. Rettelser",
    "informationAccuracy": "Det kan være informasjon på nettstedet som inneholder typografiske feil, unøyaktigheter eller utelatelser, inkludert beskrivelser, priser, tilgjengelighet og diverse annen informasjon. Vi forbeholder oss retten til å korrigere eventuelle feil, unøyaktigheter eller utelatelser og til å endre eller oppdatere informasjonen på nettstedet når som helst, uten forvarsel.",
    "siteAvailability": "Vi kan ikke garantere at nettstedet vil være tilgjengelig til enhver tid. Vi kan oppleve problemer med maskinvare, programvare eller andre problemer, eller måtte utføre vedlikehold knyttet til nettstedet, noe som kan føre til avbrudd, forsinkelser eller feil. Vi forbeholder oss retten til å endre, revidere, oppdatere, suspendere, avvikle eller på annen måte modifisere nettstedet når som helst og av en hvilken som helst grunn uten varsel til deg. Du samtykker i at vi ikke har noe ansvar for tap, skade eller ulempe forårsaket av din manglende evne til å få tilgang til eller bruke nettstedet under nedetid eller avvikling av nettstedet. Ingenting i disse tjenestevilkårene skal tolkes slik at vi forplikter oss til å vedlikeholde og støtte nettstedet eller til å levere rettelser, oppdateringer eller utgivelser i forbindelse med dette.",
    "userDataTitle": "13. Brukerdata",
    "userDataDescription": "Vi vil lagre visse data du overfører til nettstedet med det formål å administrere nettstedets ytelse, samt data knyttet til din bruk av nettstedet. Selv om vi regelmessig sikkerhetskopierer data, er du eneansvarlig for alle data du overfører eller som er relatert til aktivitet du har utført ved bruk av nettstedet. Du samtykker i at vi ikke har noe ansvar overfor deg for tap eller ødeleggelse av slike data, og du fraskriver deg herved enhver rett til å reise søksmål mot oss som følge av slikt tap eller ødeleggelse av slike data.",
    "privacyPolicyTitle": "14. Personvernerklæring",
    "privacyPolicyDescription": "Vi bryr oss om personvern og datasikkerhet. Vennligst les vår personvernerklæring. Ved å bruke nettstedet godtar du å være bundet av vår personvernerklæring, som er innlemmet i disse tjenestevilkårene. Vær oppmerksom på at nettstedet er vertskap for i USA. Hvis du besøker nettstedet fra en annen region i verden med lover eller andre krav som regulerer innsamling, bruk eller utlevering av personopplysninger som avviker fra gjeldende lover i USA, overfører du dataene dine til USA gjennom din fortsatte bruk av nettstedet, og du samtykker i at dataene dine overføres til og behandles i USA.",
    "liabilityTitle": "15. Ansvar",
    "liabilityIntroduction": "Vi nevner ansvar gjennomgående i disse vilkårene, men for å samle alt i én seksjon:",
    "liabilityWaiver": "Du forstår og samtykker uttrykkelig i at Selskapet ikke skal være ansvarlig, verken i henhold til lov eller billighetsrett, overfor deg eller noen tredjepart for direkte, indirekte, tilfeldige, tapte fortjeneste, spesielle, følgeskader, straffende eller eksemplariske erstatninger, inkludert, men ikke begrenset til, erstatning for tapt fortjeneste, goodwill, bruk, data eller andre immaterielle tap (selv om Selskapet har blitt informert om muligheten for slike skader), som følge av: (1) bruk eller manglende evne til å bruke Tjenestene; (2) feil, mangler eller unøyaktigheter i innhold og materiale; (3) personskade eller skade på eiendom, av noen art, som følge av din tilgang til og bruk av nettstedet; (4) kostnaden for anskaffelse av erstatningsvarer og -tjenester som følge av varer, data, informasjon eller tjenester kjøpt eller innhentet eller meldinger mottatt eller transaksjoner inngått gjennom eller fra Tjenestene; (5) uautorisert tilgang til eller bruk av våre sikre servere og/eller all personlig informasjon og/eller finansiell informasjon lagret der; (6) avbrudd eller opphør av overføring til eller fra nettstedet; (7) eventuelle feil, virus, trojanske hester eller lignende som kan overføres til eller gjennom nettstedet av en tredjepart, og/eller; (8) eventuelle feil eller utelatelser i innhold og materialer eller for tap eller skade av noe slag som følge av bruk av innhold som er lagt ut, overført eller på annen måte gjort tilgjengelig via nettstedet; (9) uttalelser eller oppførsel fra en tredjepart på tjenesten; (10) eller andre forhold knyttet til disse tjenestevilkårene eller tjenestene, enten som kontraktsbrudd, erstatningsansvar (inkludert aktiv eller passiv uaktsomhet) eller annen ansvarsteori.",
    "miscellaneousTitle": "16. Diverse",
    "miscellaneousDescription": "Disse tjenestevilkårene og eventuelle retningslinjer eller driftsregler som er lagt ut av oss på nettstedet eller i forbindelse med nettstedet, utgjør hele avtalen og forståelsen mellom deg og oss. Dersom vi ikke utøver eller håndhever noen rettighet eller bestemmelse i disse tjenestevilkårene, skal dette ikke anses som en fraskrivelse av en slik rettighet eller bestemmelse. Disse tjenestevilkårene gjelder i den grad loven tillater det. Vi kan når som helst overdra noen eller alle våre rettigheter og forpliktelser til andre. Vi er ikke ansvarlige for tap, skade, forsinkelse eller unnlatelse av å handle forårsaket av årsaker utenfor vår rimelige kontroll. Hvis noen bestemmelse eller del av en bestemmelse i disse tjenestevilkårene anses å være ulovlig, ugyldig eller ikke-håndhevbar, anses denne bestemmelsen eller delen av bestemmelsen å være atskilt fra disse tjenestevilkårene og påvirker ikke gyldigheten og håndhevbarheten av eventuelle gjenværende bestemmelser. Det oppstår ikke noe joint venture-, partnerskaps-, ansettelses- eller agenturforhold mellom deg og oss som følge av disse tjenestevilkårene eller bruk av nettstedet. Du samtykker i at disse tjenestevilkårene ikke skal tolkes mot oss i kraft av at vi har utarbeidet dem. Du frasier deg herved ethvert forsvar du måtte ha basert på den elektroniske formen av disse tjenestevilkårene og mangelen på signering fra partene heri for å undertegne disse tjenestevilkårene.",
    "contactTitle": "17. Kontakt oss",
    "contactDescription": "Hvis du har spørsmål om noen av tjenestevilkårene, kan du kontakte oss.",
    "neverCap": "NeverCap",
    "site": "Nettsted",
    "services": "Tjenester"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
