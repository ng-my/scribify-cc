// 意大利语
let message = {
  // 首页
  HomePage: {
    home: "Home page",
    times: "{times} trascrizioni gratuite al giorno, {left} rimanenti oggi. ",
    tips: "Aggiorna a Pro per trascrizioni illimitate.",
    update: "Aggiorna ora",
    rename: "Rinomina",
    delete: "Elimina",
    cancel: "Annulla",
    confirm: "Crea",
    dialogLabel: "Nome cartella",
    recently: "File recenti",
    loading: "Caricamento",
    tour: {
      step0: {
        title: "Benvenuto in {name}",
        tip: "Qui puoi:",
        content: "Trascrivere conversazioni, riunioni, lezioni e altro ancora",
        next: "Inizia"
      },
      step1: {
        title: "Trascrivi file",
        content:
          "Supporta tre metodi di trascrizione: file locali, link e registrazioni."
      },
      step2: {
        title: "Crea una cartella",
        content:
          'Clicca su "+" per creare una cartella e organizzare i tuoi file.'
      },
      step3: {
        title: "Visualizza dettagli trascrizione e modifica",
        content:
          "Clicca sull'elemento per visualizzare i dettagli della trascrizione, modificarla e tradurla."
      },
      next: "Avanti",
      finish: "Fatto"
    },
    export: {
      export: "Esporta",
      title: "Stiamo generando la tua esportazione",
      title2: "Il tuo file è pronto",
      singleLoadingContent: "1 file in fase di compressione.",
      singleSuccessContent: "1 file è stato compresso.",
      loadingContent: "{num} file in fase di compressione.",
      successContent: "{num} file sono stati compressi.",
      cancel: "Annulla esportazione",
      error: "Errore esportazione",
      dialog: {
        title: "Avviso",
        content: "Annullare l'esportazione?",
        cancel: "Annulla esportazione",
        continue: "Continua esportazione"
      }
    },
    welcome: {
      title: "Benvenuto su Scribify!",
      description: "Qui puoi:",
      transcribe:
        "Trascrivi senza sforzo con Scribify: trasforma le conversazioni vocali in testo chiaro, ricercabile e condivisibile in un attimo.",
      precision:
        "Ottieni trascrizioni precise con parlanti e timestamp istantaneamente.",
      translate:
        "Abbatti le barriere linguistiche: traduci le trascrizioni in più di 200 lingue con facilità.",
      edit: "Modifica, perfeziona ed esporta le tue trascrizioni nei formati più adatti alle tue esigenze.",
      collaborate: "Collabora condividendo il tuo testo trascritto con altri.",
      button: "Inizia",
      tip: "Pronto a trasformare l'audio in testo trascritto? Inizia ad esplorare ora!",
      tip2: "Inizia ad esplorare ora!",
      tip1: "Pronto a trasformare l'audio in testo trascritto? "
    },
    subscriptionModal: {
      left: {
        title: "Ottieni il Piano Pro per sbloccare di più",
        c1: "Trascrizioni illimitate",
        c2: "Caricamenti di 10 ore",
        c3: "Massima priorità",
        c4: "99% di precisione nella trascrizione",
        c5: "Più di 100 lingue supportate",
        c6: "Identificazione dei parlanti",
        c7: "Traduzione delle trascrizioni",
        t1: "Trascrizioni illimitate per una persona.",
        t2: "Ogni file può durare fino a 10 ore / 5 GB. Carica 50 file alla volta.",
        t3: "Trascriveremo sempre i tuoi file il prima possibile con la massima priorità."
      },
      right: {
        title: "Ottieni il Piano Pro",
        yearly: "Annuale",
        monthly: "Mensile",
        save: "Risparmio",
        preMonth: "al mese",
        preYear: "all'anno",
        firstMonth: "primo mese",
        afterwards: "successivamente"
      },
      subscribe: "Abbonati"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Fallito",
      selected: "Selezionato",
      success: "Successo",
      fileList: "Elenco File"
    },
    dialog: {
      move: {
        title: "Sposta",
        label: "Scegli una cartella",
        placeholder: "Scegli una cartella",
        confirm: "Sposta",
        cancel: "Annulla"
      },
      rename: {
        title: "Rinomina",
        label: "Nome file",
        confirm: "Rinomina",
        cancel: "Annulla"
      },
      delete: {
        title: "Elimina",
        file: "file",
        files: "file",
        label: "Sei sicuro di voler eliminare?",
        confirm: "Elimina",
        cancel: "Annulla"
      },
      share: {
        title: "Condividi",
        label:
          "Chiunque con il seguente link sicuro può visualizzare questa trascrizione e il file multimediale associato.",
        confirm: "Copia link",
        success: "Copia riuscita"
      },
      export: {
        title: "Esporta",
        select: "Seleziona il formato di cui hai bisogno",
        settings: "Impostazioni",
        speaker: "Includi speaker",
        timecodes: "Includi timecodes",
        confirm: "Esporta",
        cancel: "Annulla",
        selectErr: "Seleziona uno o più formati"
      }
    },
    search: {
      placeholder: "Cerca"
    },
    recently: "Recentemente",
    record: "Registra",
    transcribe: "Trascrivi",
    unclassified: "Cartelle non classificate",
    buttons: {
      transcribe: "Trascrivi file",
      url: "Trascrivi link",
      record: "Registra e trascrivi",
      recording: "Registrazione..."
    },
    delSuccess: "Eliminato con successo",
    create: "Crea",
    endRecord: {
      title: "Avviso",
      content:
        "Stai registrando. Questa azione terminerà la registrazione. Vuoi terminare la registrazione?",
      confirm: "Continua Registrazione",
      cancel: "Termina Registrazione"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Registra",
      pause: "Pausa",
      resume: "Riprendi",
      stop: "Ferma",
      endRecord: "Termina registrazione",
      delete: "Elimina",
      transcribe: "Trascrivi",
      permissionDenied: "Permesso microfono negato o dispositivo non esistente",
      dialog: {
        delete: {
          title: "Avviso",
          label: "Sei sicuro di voler eliminare questa registrazione?",
          confirm: "Elimina",
          cancel: "Annulla"
        },
        complete: {
          title: "Registrazione Completata",
          label:
            "La registrazione ha raggiunto le 10 ore e si è automaticamente fermata. Per favore, trascrivi.",
          confirm: "Fatto"
        },
        speaker: {
          content:
            "Per l'identificazione del relatore, i file sono limitati a 3 ore. Deseleziona '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Trascrivi un media online",
        title: "Incolla link",
        label:
          "Incolla il tuo link video o audio da: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram e altre piattaforme...",
        confirm: "Aggiungi",
        cancel: "Annulla",
        // Inserisci un link corretto
        errorTitle: "Il link che hai inserito è errato. Controlla e riprova.",
        linkName: "Link"
      },
      file: {
        orTitle: "Trascrivi un media online",
        dialogTitle: "Trascrivi file",
        tip1: "Trascina i file qui o fai clic per sfogliare",
        tip2: "Fai clic per sfogliare",
        or: "o",
        supported: "Formati supportati"
      },
      del: {
        title: "Avviso",
        content:
          "Tutto il progresso verrà perso. Sei sicuro di voler annullare la trascrizione?",
        cancel: "Conferma annullamento",
        confirm: "Continua a trascrivere"
      },
      files: "File",
      resultDialogTitle: "Trascrivi file",
      resultDialogTitle2: "Trascrivi file",
      cancel: "Annulla",
      confirm: "Trascrivi",
      return: "Torna indietro",
      addMore: "Aggiungi altri",
      language: "Lingua del media",
      failed: "Fallito",
      tooLarge: "Il file supera il limite (5G).",
      linkUpload: "Caricamento",
      fileFormat: "Formato file non consentito",
      localFiles: "File locali",
      pasteLink: "Link online",
      uploadErr: "Errore caricamento",
      hashErr: "Errore hash",
      table: {
        status: "Stato",
        file: "File",
        size: "Dimensione",
        noData: "Nessun dato"
      },
      maxFileNum: "Il numero di file non può superare {num}.",
      speaker: "Identifica relatori",
      speakerLabel:
        "Rileva automaticamente chi sta parlando",
      guest: {
        transcribe: "Trascrivere",
        file: "File",
        audio: "File audio/video",
        Uploading: "Caricamento in corso..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Recentemente",
      popular: "Popolare",
      other: "Altro",
      searchLanguage: "Cerca lingua",
      noMatch: "Nessuna lingua corrispondente trovata",
      English: "Inglese",
      "English(US)": "Inglese (USA)",
      "English(UK)": "Inglese (Regno Unito)",
      Spanish: "Spagnolo",
      Portuguese: "Portoghese",
      French: "Francese",
      Italian: "Italiano",
      German: "Tedesco",
      Dutch: "Olandese",
      Polish: "Polacco",
      Danish: "Danese",
      Japanese: "Giapponese",
      Korean: "Coreano",
      Hungarian: "Ungherese",
      Czech: "Ceco",
      Chinese: "Cinese",
      Hebrew: "Ebraico",
      Arabic: "Arabo",
      Azerbaijani: "Azerbaigiano",
      Estonian: "Estone",
      Belarusian: "Bielorusso",
      Bulgarian: "Bulgaro",
      Icelandic: "Islandese",
      Bosnian: "Bosniaco",
      Persian: "Persiano",
      Russian: "Russo",
      "Chinese(Traditional)": "Cinese (Tradizionale)",
      Finnish: "Finlandese",
      Kazakh: "Kazako",
      Galician: "Galiziano",
      Catalan: "Catalano",
      "Chinese(Simplified)": "Cinese (Semplificato)",
      Kannada: "Kannada",
      Croatian: "Croato",
      Latvian: "Lettone",
      Lithuanian: "Lituano",
      Romanian: "Romeno",
      Marathi: "Marathi",
      Malay: "Malese",
      Macedonian: "Macedone",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalese",
      Norwegian: "Norvegese",
      Swedish: "Svedese",
      Serbian: "Serbo",
      Slovak: "Slovacco",
      Slovenian: "Sloveno",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Tailandese",
      Turkish: "Turco",
      Welsh: "Gallese",
      Urdu: "Urdu",
      Ukrainian: "Ucraino",
      Greek: "Greco",
      Armenian: "Armeno",
      Hindi: "Hindi",
      Indonesian: "Indonesiano",
      Vietnamese: "Vietnamita",
      Albanian: "Albanese",
      Amharic: "Amarico",
      Assamese: "Assamese",
      Occitan: "Occitano",
      Bashkir: "Bashkir",
      Basque: "Basco",
      Breton: "Bretone",
      Tibetan: "Tibetano",
      Faroese: "Faroese",
      Sanskrit: "Sanscrito",
      Khmer: "Khmer",
      Georgian: "Georgiano",
      Gujarati: "Gujarati",
      "Haitian Creole": "Creolo haitiano",
      Hausa: "Hausa",
      Latin: "Latino",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Lussemburghese",
      Malagasy: "Malgascio",
      Maltese: "Maltese",
      Malayalam: "Malayalam",
      Mongolian: "Mongolo",
      Bengali: "Bengalese",
      Burmese: "Birmano",
      Punjabi: "Punjabi",
      Pashto: "Pashtu",
      Sinhala: "Singalese",
      Shona: "Shona",
      Somali: "Somalo",
      Tajik: "Tagico",
      Tatar: "Tataro",
      Telugu: "Telugu",
      Turkmen: "Turkmeno",
      Uzbek: "Uzbeko",
      Hawaiian: "Hawaiano",
      "Norwegian Nynorsk": "Norvegese Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Giavanese",
      Cantonese: "Cantonese",
      Abkhaz: "Abkhaz",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlandese",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osseto",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinese",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Northern Sotho",
      bem: "Bemba",
      bik: "Bicolano",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Ceceno",
      chk: "Chuukese",
      Chuvash: "Chuvash",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Divehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele del Sud",
      dov: "Dondo",
      "bm-Nkoo": "Bambara N'Ko",
      "French(Canada)": "Francese (Canada)",
      Fijian: "Figiano",
      fon: "Fon",
      "Western Frisian": "Frisone occidentale",
      fur: "Friulano",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Kalaallisut",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirghiso",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "K'iche'",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corso",
      "crh-Latn": "Tataro di Crimea (Latino)",
      crh: "Tataro di Crimea (Cirillico)",
      Quechua: "Quechua",
      Kurdish: "Curdo (Kurmanji)",
      ckb: "Curdo (Sorani)",
      trp: "Kokborok",
      ltg: "Latgaliano",
      lij: "Ligure",
      Limburgish: "Limburghese",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardo",
      rom: "Romaní",
      mad: "Madura",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malese (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauriziano creolo",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl orientale",
      "Southern Sotho": "Sotho del Sud",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portoghese (Portogallo)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapoteco",
      "Northern Sami": "Sami settentrionale",
      Samoan: "Samoano",
      kri: "Krio",
      crs: "Creolo delle Seychelles",
      Sango: "Sango",
      "sat-Latn": "Santali (Latino)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaelico scozzese",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latino)",
      Tahitian: "Tahitiano",
      Tonga: "Tongano",
      Tigrinya: "Tigrino",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassarese",
      vec: "Veneziano",
      Uyghur: "Uiguro",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Slesiano",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Patois giamaicano",
      sah: "Sacha",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (Latino)",
      Inuktitut: "Inuktitut (Sillabico)",
      yua: "Maya Yucateco",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "o", // 或
    LoginBtn: "Accedi con Email",
    LoginGoogle: "Accedi con Google",
    SignupBtn: "Iscriviti con Email",
    SignupGoogle: "Iscriviti con Google",
    SignupDes: "Iscriviti oggi per vedere la magia — gratis.",
    SignupTitle: "Trascrizione accurata e illimitata",
    signup: "Registrati", // 注册
    sign_up: "Registrati", // 注册
    loginByGoogle: "Continua con Google", // 使用Google登录
    emailAddress: "Inserisci la tua email", // 请输入您的邮箱
    createAccount: "Crea un nuovo account", // 创建账户
    accountExists: "Hai già un account? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Continuando, acconsenti alle nostre {terms} e {policy}.",
      terms: "Condizioni",
      policy: "Informativa sulla privacy"
    },
    setPassword: "Imposta una password", // 设置密码
    code: "Codice di verifica", // 验证码
    resend: "Rinvia", // 重新发送
    enterPassword: "Password: minimo 6 caratteri.", // 请输入密码
    passwordLeval: "Livello password", // 密码强度
    Weak: "Debole", // 弱 中 强
    Medium: "Media", // 弱 中 强
    Strong: "Forte", // 弱 中 强
    confirmPassword: "Conferma la tua password", // 确认密码
    invalidEmail: "Indirizzo email non valido", // 无效的邮箱地址
    logInDirectly: "Questo account esiste già. Accedi direttamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Codice di verifica errato. Riprova.", // 验证码错误，请重试
    atLeastSix: "La password deve essere lunga almeno 6 caratteri.", // 密码长度至少6位
    passwordNotMatch: "Le password non corrispondono. Riprova.", // 密码不匹配，请重试
    login: "Accedi", // 登录
    log_in: "Accedi", // 登录
    log_In: "Accedi", // 登录
    password: "Password", // 密码
    forgotPassword: "Password dimenticata?", // 忘记密码？
    noAccount: "Non hai un account? ", // 没有账户？注册
    accountNotExists: "Questo account non esiste.", // 账户不存在
    passwordError: "Errore password", // 密码错误
    sendCode: "Invia codice di verifica", // 发送验证码
    resetPassword: "Reimposta password", // 重置密码
    resetYourPassword: "Resetta la tua password", // 重置你的密码
    newOldCantSame: "La nuova password deve essere diversa da quella vecchia.", // 新密码与旧密码不能相同
    passwordResetOk: "Password resettata con successo！", // 密码重置成功！
    signupToSaveProgress:
      "Completa la registrazione per salvare i tuoi progressi.",
    tip: "Suggerimento",
    tipContentEmail:
      "Abbiamo appena inviato la password di accesso del tuo account alla tua email.",
    tipContentPassword:
      "Controlla la posta in arrivo e accedi con la tua email e password.",
    codeToEmail:
      "Abbiamo appena inviato un codice di verifica alla tua email. Controlla la tua casella di posta e incolla il codice di verifica sopra."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Piano di abbonamento",
    freeversion: "Gratuito",
    transcribeTimesDay: "3 trascrizioni giornaliere",
    uploadMinutes: "Caricamenti di 30 minuti",
    lowerPriority: "Priorità inferiore",
    currentPlan: "Piano attuale",
    professionalEdition: "edizione professionale",
    unlimitedTranscription: "Trascrizione illimitata",
    unlimitedNumberOfTimes: "Frequenza e durata di trascrizione illimitate.",
    filesUploadedAtOnce:
      "Ogni file può durare fino a 10 ore / 5 GB. Carica 50 file contemporaneamente.",
    highestPriority: "massima priorità",
    weWillGiveTheHighest:
      "Trascriveremo sempre i tuoi file il prima possibile con la massima priorità.",
    theFirstMonth: "Il primo mese",
    subscribeTo: "abbonati a",
    basicVersionFree: "Versione base (gratuita)",
    return: "Indietro",
    annualize: "annuale",
    monthly: "mensile",
    everyYear: "ogni anno",
    saved: "risparmiato",
    byTheMonth: "al mese",
    firstMonth: "primo mese",
    afterwardsEveryMonth: "Successivamente, ogni mese",
    manageSubscription: "Gestisci abbonamento",
    professionalYearbook: "Annuale professionale",
    professionalMonthly: "Mensile professionale",
    subscriptionWillCancelledOn: "Il tuo abbonamento verrà cancellato il",
    displayLanguage: "Lingua di visualizzazione",
    update: "Aggiorna ora",
    basicversion: "Versione base (Gratuita)",
    daily: "{start} di {end} trascrizioni giornaliere utilizzate",
    upgradetoPro: "Passa a Pro",
    accountSetting: "Impostazioni account",
    logOut: "Esci",
    account: "Account",
    email: "Email",
    id: "ID",
    password: "Password",
    resetPassword: "Reimposta password",
    logIn: "Accedi",
    tryForFree: "Prova gratuitamente",
    notFund: "Non trovato",
    couldntFind: "Non abbiamo trovato quello che cercavi.",
    proAnnual: "Pro Annuale",
    proMonthly: "Pro Mensile",
    perMonth: "al mese",
    afterwards: "successivamente",
    accuracy: "precisione di trascrizione",
    supported: "lingue supportate",
    identification: "Identificazione relatore",
    transcriptSranslation: "Traduzione trascrizione",
    perYear: "all'anno",
    getProPlan: "Ottieni piano Pro",
    changeToAnnual: "Passa ad annuale",
    automaticRenewalon: "Rinnovo automatico il",
    eachMonth: "Rinnovo automatico il {time} di ogni mese.",
    automaticRenewal:
      "Rinnovo automatico fallito, si prega di verificare il metodo di pagamento.",
    eachYear: "Rinnovo automatico il {time} ogni anno.",
    returnAccountSetting: "Ritorna",
    needsToWaitLonger:
      "Attendi più a lungo prima che i tuoi file vengano trascritti.",
    freeThreeTimesDay: "Trascrivi 3 file gratuitamente ogni giorno.",
    oneFileUploaded:
      "Ogni file può durare fino a 30 minuti. Carica 1 file alla volta.",
    uploadWithinHours: "Caricamenti di 10 ore",
    yourSubscription: "Il tuo abbonamento verrà annullato il {time}.",
    save: "Risparmiare"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Cinese(Semplificato)",
      "Chinese(Traditional)": "Cinese(Tradizionale)",
      Japanese: "Giapponese",
      Danish: "Danese",
      German: "Tedesco",
      English: "Inglese",
      Spanish: "Spagnolo",
      French: "Francese",
      Italian: "Italiano",
      Hungarian: "Ungherese",
      Dutch: "Olandese",
      Norwegian: "Norvegese",
      Polish: "Polacco",
      Portuguese: "Portoghese",
      Finnish: "Finlandese",
      Swedish: "Svedese",
      Turkish: "Turco",
      Greek: "Greco",
      Russian: "Russo",
      Ukrainian: "Ucraino",
      Hebrew: "Ebraico",
      Arabic: "Arabo",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Prova gratis~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Unisciti alla lista d'attesa, ottieni le ultime news di NuxtPro PRIMA e sconti!",
      placeholder: "Inserisci la tua email",
      button: "Unisciti alla lista d'attesa",
      joinCountMessage:
        "🔥 Utente iniziale #{count} si è appena unito alla lista d'attesa!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "Questo è un demo",
      corpInfo: "info aziendale"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "errore download video"
      },
      mse: {
        code: 2,
        msg: "errore append stream"
      },
      parse: {
        code: 3,
        msg: "errore di parsing"
      },
      format: {
        code: 4,
        msg: "formato errato"
      },
      decoder: {
        code: 5,
        msg: "errore di decodifica"
      },
      runtime: {
        code: 6,
        msg: "errori grammaticali"
      },
      timeout: {
        code: 7,
        msg: "timeout di riproduzione"
      },
      other: {
        code: 8,
        msg: "altri errori"
      }
    },
    HAVE_NOTHING: "Non ci sono informazioni sulla disponibilità di audio/video",
    HAVE_METADATA: "Audio/video metadata pronta ",
    HAVE_CURRENT_DATA:
      "I dati sulla posizione di riproduzione corrente sono disponibili, ma non ci sono abbastanza dati per riprodurre il prossimo frame/millisecondo",
    HAVE_FUTURE_DATA:
      "Dati correnti e almeno un frame di dati sono disponibili",
    HAVE_ENOUGH_DATA: "I dati disponibili sono sufficienti per riprodurre",
    NETWORK_EMPTY: "Audio/video non inizializzato",
    NETWORK_IDLE:
      "Audio/video è attivo e selezionato per le risorse, ma non viene utilizzato alcun network",
    NETWORK_LOADING: "Il browser sta scaricando i dati",
    NETWORK_NO_SOURCE: "Nessuna sorgente audio/video trovata",
    MEDIA_ERR_ABORTED: "Il processo di fetch è interrotto dall'utente",
    MEDIA_ERR_NETWORK: "Si è verificato un errore durante il download",
    MEDIA_ERR_DECODE: "Si è verificato un errore durante la decodifica",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video non supportato",
    REPLAY: "Riproduci",
    ERROR: "Rete offline",
    PLAY_TIPS: "Riproduci",
    PAUSE_TIPS: "Pausa",
    PLAYNEXT_TIPS: "Riproduci il prossimo",
    DOWNLOAD_TIPS: "Scarica",
    ROTATE_TIPS: "Ruota",
    RELOAD_TIPS: "Ricarica",
    FULLSCREEN_TIPS: "Vai in modalità a schermo intero",
    EXITFULLSCREEN_TIPS: "Esci dalla modalità a schermo intero",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Esci dalla cssfullscreen",
    TEXTTRACK: "Sottotitolo",
    PIP: "PIP",
    SCREENSHOT: "Schermata",
    LIVE: "LIVE",
    OFF: "Off",
    OPEN: "Apri",
    MINI_DRAG: "Clicca e tieni premuto per trascinare",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Prova a",
    REFRESH: "Aggiorna",
    FORWARD: "avanti",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Accendi i sottotitoli",
    TM_SUBTITLE_HIDE_TIPS: "Disabilita i sottotitoli",
    TM_MINIMIZE_TIPS: "Nascondi il video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "politica sulla riservatezza",
    lastUpdated: "Ultimo aggiornamento: 25 agosto 2025",
    policyDescription:
      'La presente Informativa descrive come Scribify (di seguito denominata "Scribify", "nostro", "noi", "ci") raccoglie, utilizza e divulga le tue informazioni personali quando utilizzi i nostri servizi, siti web',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 'e software (collettivamente, i "Servizi").',
    policyAgreement:
      "Si prega di leggere attentamente la presente Informativa sulla privacy e di assicurarsi di averla compresa. Utilizzando uno qualsiasi dei nostri Servizi, l'utente accetta la presente Informativa sulla privacy. Se non acconsente all'utilizzo dei suoi dati personali in conformità con la presente Informativa, è tenuto a interrompere immediatamente l'utilizzo dei nostri Servizi.",
    policyOverview:
      "In questa informativa, indichiamo: quali dati raccogliamo e perché; come vengono trattati i tuoi dati; e i tuoi diritti in merito ai tuoi dati. Non vendiamo i tuoi dati.",
    scopeTitle:
      "1. Ambito di applicazione della presente Informativa sulla privacy",
    whatWeCollectTitle: "2. Cosa raccogliamo e perché",
    accessShareTitle: "3. Quando accediamo o condividiamo le tue informazioni",
    secureDataTitle: "4. Come proteggiamo i tuoi dati",
    deleteContentTitle: "5. Cosa succede quando elimini i tuoi contenuti",
    locationTitle: "6. Ubicazione del sito e dei dati",
    childrenPrivacyTitle: "7. Privacy dei bambini",
    updatesTitle: "8. Aggiornamenti alla presente Informativa sulla privacy",
    contactUsTitle: "9. Contattaci",
    identityAccessTitle: "2.1 Identità e accesso",
    billingInfoTitle: "2.2 Informazioni di fatturazione",
    productInteractionsTitle: "2.3 Interazioni con i prodotti",
    websiteInteractionsTitle: "2.4 Interazioni con il sito web",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 Corrispondenza volontaria",
    scopeContent:
      "La presente Informativa sulla privacy si applica esclusivamente alla raccolta e al trattamento delle informazioni relative agli utenti dei Servizi. Non si applica a servizi, siti web o software gestiti da terze parti a noi collegati (sia che tali link siano forniti da noi o condivisi da altri utenti), né a contenuti, dati, applicazioni o materiali di terze parti. Si consiglia di consultare le informative sulla privacy di qualsiasi sito web o software di terze parti prima di fornire loro informazioni.",
    collectPrinciple:
      "Il nostro principio guida è raccogliere solo ciò di cui abbiamo bisogno. Ecco cosa significa in pratica:",
    identityAccessContent:
      "Quando ti registri per uno dei nostri prodotti, ti chiediamo informazioni identificative come nome e indirizzo email. Questo ci permette di fornire funzionalità essenziali del prodotto e di inviarti aggiornamenti e altre informazioni essenziali.",
    billingInfoContent:
      "Se ti iscrivi a un prodotto a pagamento, ti verrà chiesto di fornire i tuoi dati di pagamento e l'indirizzo di fatturazione. I dati di pagamento vengono inviati direttamente al nostro processore di pagamento e non raggiungono i nostri server.",
    productInteractionsContent:
      "Conserviamo sui nostri server i contenuti che carichi, ricevi o gestisci nei tuoi account prodotto. A meno che tu non elimini tali contenuti, potremmo conservarli finché il tuo account sarà attivo.",
    websiteInteractionsContent:
      "Raccogliamo informazioni sulla tua attività di navigazione per scopi analitici e statistici, come test del tasso di conversione e sperimentazione di nuovi design di prodotto. Questo include, ad esempio, le versioni del tuo browser e del tuo sistema operativo, il tuo indirizzo IP, le pagine web che hai visitato e il tempo di caricamento, e quale sito web ti ha indirizzato a noi. Se hai un account e hai effettuato l'accesso, questi dati di analisi web sono associati al tuo indirizzo IP e al tuo account utente finché il tuo account non sarà più attivo.",
    cookiesContent1:
      "Utilizziamo anche cookie proprietari persistenti e alcuni cookie di terze parti per memorizzare determinate preferenze, semplificare l'utilizzo delle nostre applicazioni ed eseguire test A/B, nonché supportare alcune analisi.",
    cookiesContent2:
      "Un cookie è un frammento di testo memorizzato dal tuo browser. Può aiutare a ricordare le informazioni di accesso e le preferenze del sito. Potrebbe anche raccogliere informazioni come il tipo di browser, il sistema operativo, le pagine web visitate, la durata della visita, i contenuti visualizzati e altri dati relativi al flusso di clic. Puoi modificare le impostazioni di conservazione dei cookie e accettare o bloccare singoli cookie nelle impostazioni del tuo browser, sebbene le nostre app non funzioneranno e altri aspetti del nostro servizio potrebbero non funzionare correttamente se disattivi i cookie.",
    voluntaryCorrespondenceContent:
      "Quando ci invii un'e-mail con una domanda o per chiedere aiuto, conserviamo tale corrispondenza, incluso il tuo indirizzo e-mail, in modo da avere uno storico della corrispondenza passata a cui fare riferimento se ci contatterai in futuro.",
    accessShareContent1:
      "Per fornirti i prodotti o i servizi che hai richiesto. Utilizziamo alcuni sub-responsabili terzi per aiutarci a gestire le nostre applicazioni e fornirti i Servizi. Tra questi rientrano i fornitori di servizi cloud e di analisi.",
    accessShareContent2:
      "Per indagare, prevenire o intervenire in caso di abusi. L'accesso all'account di un cliente durante le indagini su potenziali abusi è una misura di ultima istanza. Vogliamo proteggere la privacy e la sicurezza sia dei nostri clienti che di coloro che ci segnalano problemi e facciamo del nostro meglio per bilanciare queste responsabilità durante l'intero processo. Se scopriamo che stai utilizzando i nostri prodotti per uno scopo limitato, adotteremo le misure necessarie, inclusa la notifica alle autorità competenti ove necessario.",
    accessShareContent3: "Quando richiesto dalla legge applicabile.",
    userDataRequests:
      "- Richieste di dati utente. La nostra politica è di non rispondere alle richieste governative relative ai dati utente, a meno che non siamo obbligati da un procedimento legale o, in circostanze limitate, in caso di richiesta di emergenza. Tuttavia, qualora le autorità competenti statunitensi dispongano del mandato, di una citazione in giudizio o di un ordine del tribunale che ci imponga di condividere i dati, siamo tenuti a rispettarli. Allo stesso modo, risponderemo alle richieste provenienti da autorità governative al di fuori degli Stati Uniti solo se obbligati dal governo statunitense attraverso le procedure delineate in un trattato o accordo di mutua assistenza legale. La nostra politica è quella di informare gli utenti interessati prima di condividere i dati, a meno che non ci sia legalmente vietato farlo e fatta eccezione per alcuni casi di emergenza.",
    preservationRequests:
      "- Richieste di conservazione. Analogamente, la nostra politica è di soddisfare le richieste di conservazione dei dati solo se obbligati ai sensi del Federal Stored Communications Act statunitense, 18 USC Sezione 2703(f), o da una citazione in giudizio statunitense correttamente notificata in materia civile. Non condividiamo i dati conservati a meno che non siamo obbligati dalla legge o da un'ordinanza del tribunale contro la quale scegliamo di non presentare ricorso. Inoltre, a meno che non riceviamo un mandato, un'ordinanza del tribunale o una citazione in giudizio prima della scadenza del periodo di conservazione richiesto, distruggeremo tutte le copie conservate dei dati dei clienti al termine del periodo di conservazione.",
    taxAudit:
      "- In caso di verifica da parte di un'autorità fiscale, potremmo essere tenuti a condividere informazioni relative alla fatturazione. In tal caso, condivideremo solo il minimo necessario, come gli indirizzi di fatturazione e le informazioni sull'esenzione fiscale.",
    secureDataContent1: "Tutti i dati sono crittografati tramite",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "quando vengono trasmessi dai nostri server al tuo browser.",
    deleteContentContent:
      "Se elimini un contenuto, questo diventerà immediatamente inaccessibile.",
    locationContent:
      "I nostri prodotti e altre proprietà web sono gestiti negli Stati Uniti. Se ti trovi nell'Unione Europea, nel Regno Unito o in un altro luogo al di fuori degli Stati Uniti, tieni presente che tutte le informazioni che ci fornisci saranno trasferite e archiviate negli Stati Uniti. Utilizzando i nostri siti web o Servizi e/o fornendoci i tuoi dati personali, acconsenti a tale trasferimento.",
    childrenPrivacyContent:
      "I Servizi non sono rivolti ai minori e non raccogliamo consapevolmente Informazioni Personali da minori di età inferiore a 13 anni. Se hai meno di 13 anni, ti preghiamo di non inviare alcuna informazione personale tramite i Servizi. Se ritieni che un minore ci abbia fornito Informazioni Personali in violazione della presente Informativa, ti preghiamo di contattarci come indicato di seguito.",
    updatesContent:
      "Potremmo aggiornare questa informativa se necessario per conformarci alle normative pertinenti e riflettere eventuali nuove pratiche. Ogni volta che apporteremo modifiche significative alle nostre informative, aggiorneremo la data in cima a questa pagina.",
    contactUsContent1:
      "Se hai domande, commenti o reclami sulla nostra Informativa sulla privacy, ti preghiamo di",
    contactUs: "contattaci",
    contactUsContent2:
      "e faremo il possibile per gestire il tuo reclamo il prima possibile."
  },
  termsOfService: {
    termsOfServiceTitle: "Termini di servizio",
    lastUpdated: "Ultimo aggiornamento: 21 settembre 2022",
    thankYouMessage: "Grazie per aver utilizzato i nostri prodotti!",
    companyReference:
      'Quando in questo documento parliamo di "Società", "noi", "nostro" o "ci", ci riferiamo a Scribify.',
    servicesDefinition:
      `Quando parliamo di "Servizi", intendiamo qualsiasi prodotto creato e gestito da Scribify, sia che venga fornito tramite un browser web, un'applicazione desktop, un'applicazione mobile o un altro formato.`,
    termsUpdateNotice:
      "Potremmo aggiornare i presenti Termini di Servizio in futuro. In genere, queste modifiche sono state apportate per chiarire alcuni di questi termini, collegandoli a un'informativa correlata più ampia. Ogni volta che apporteremo una modifica significativa alle nostre informative, aggiorneremo la data in cima a questa pagina e adotteremo qualsiasi altra misura appropriata per informare i titolari di account.",
    acceptanceOfAgreementTitle: "1. Accettazione del Contratto",
    scribifyServicesTitle: "2. Servizi di Scribify",
    accountTermsTitle: "3. Termini dell'account",
    paymentRefundsTitle: "4. Pagamenti, rimborsi e modifiche al piano",
    cancellationTerminationTitle: "5. Annullamento e risoluzione",
    submissionsTitle: "6. Invii",
    uptimeSecurityTitle: "7. Tempo di attività e sicurezza",
    siteManagementTitle: "8. Gestione del sito",
    copyrightContentTitle: "9. Copyright e proprietà dei contenuti",
    prohibitedActivitiesTitle: "10. Attività proibite",
    featuresBugsTitle: "11. Caratteristiche e bug",
    correctionsTitle: "12. CORREZIONI",
    userDataTitle: "13. Dati utente",
    privacyPolicyTitle: "14. Informativa sulla privacy",
    liabilityTitle: "15. Responsabilità",
    miscellaneousTitle: "16. Varie",
    contactUsTitle: "17. Contattaci",
    acceptanceContent1:
      "Utilizzando i nostri Servizi, accetti il presente Contratto, che di conseguenza diventa un contratto vincolante tra te e Scribify. Dichiari di essere legalmente in grado di accettare i presenti Termini e affermi di avere l'età legale per stipulare un contratto vincolante. L'accettazione da parte di Scribify è espressamente subordinata al tuo assenso a tutti i termini e le condizioni del presente Contratto.",
    acceptanceContent2:
      "I Servizi non sono destinati e non devono essere utilizzati da persone di età inferiore a 18 anni. Utilizzando i Servizi, dichiari e garantisci di soddisfare i requisiti di idoneità di cui sopra.",
    acceptanceContent3:
      'I termini "tu", "tuo", "te stesso" includono anche i tuoi dipendenti, agenti, rappresentanti commerciali e qualsiasi altro individuo a cui fornisci accesso ai Servizi tramite il tuo Account (come definito di seguito). Sei responsabile di garantire che tutte le persone che accedono ai Servizi tramite il tuo account siano a conoscenza dei presenti Termini e li rispettino.',
    acceptanceContent4:
      "Scribify si riserva il diritto di rivedere e aggiornare i presenti Termini di volta in volta a sua esclusiva discrezione. Tutte le modifiche hanno effetto immediato dalla loro pubblicazione. L'utilizzo continuato dei Servizi dopo la pubblicazione dei Termini modificati implica l'accettazione delle modifiche. Si prega di controllare periodicamente questa pagina per essere a conoscenza di eventuali modifiche, in quanto vincolanti per l'utente.",
    servicesContent1:
      "I nostri Servizi consentono agli utenti di trasformare le conversazioni vocali in testo trascritto che può essere ricercato, tradotto e condiviso con altri.",
    servicesContent2:
      'Puoi scegliere se utilizzare la versione gratuita dei Servizi ("Servizi gratuiti") oppure la versione a pagamento dei Servizi basata su abbonamento, per la quale potrebbe essere richiesto il pagamento di una quota ("Servizi a pagamento").',
    servicesContent3:
      "Ti metteremo a disposizione i Servizi. Sei responsabile di prendere tutte le disposizioni necessarie per accedere ai Servizi.",
    accountTerms1:
      "- Sei responsabile della sicurezza del tuo account. La Società non può e non sarà responsabile per eventuali perdite o danni derivanti dal mancato rispetto di questo obbligo di sicurezza.",
    accountTerms2:
      "- Non è consentito utilizzare i Servizi per scopi illegali, non etici o immorali.",
    accountTerms3:
      "- Sei responsabile di tutti i contenuti pubblicati e delle attività che si svolgono tramite il tuo account. Ciò include i contenuti pubblicati da altri che: (a) hanno accesso alle tue credenziali di accesso; o (b) dispongono di propri dati di accesso associati al tuo account.",
    accountTerms4:
      '- Devi essere un essere umano. Gli account registrati tramite "bot" o altri metodi automatizzati non sono ammessi.',
    paymentContent1:
      "- Per i Servizi a pagamento che offrono una prova gratuita, ne spieghiamo la durata al momento dell'iscrizione. Dopo il periodo di prova, è necessario pagare in anticipo per continuare a utilizzare il Servizio. In caso di mancato pagamento, questi servizi termineranno.",
    paymentContent2:
      "- Se esegui l'upgrade da un piano gratuito a un piano a pagamento, l'addebito sulla tua carta avverrà immediatamente e il ciclo di fatturazione inizierà il giorno dell'upgrade.",
    paymentContent3:
      "- Tutti i prezzi sono al netto di tasse, imposte o dazi imposti dalle autorità fiscali. Ove richiesto, riscuoteremo tali tasse per conto delle autorità fiscali e le verseremo alle stesse. In caso contrario, il pagamento di tutte le tasse, imposte o dazi sarà a vostro carico.",
    paymentContent4:
      "- Tutti gli acquisti non sono rimborsabili. Puoi annullare qualsiasi servizio a pagamento in qualsiasi momento accedendo al tuo account. Per gli abbonamenti a pagamento, la cancellazione avrà effetto alla fine del periodo di pagamento in corso, salvo diversa indicazione.",
    cancellationContent1:
      "- Se annulli il Servizio prima della scadenza del periodo di tempo pagato, la cancellazione avrà effetto immediato e non ti verrà addebitato alcun costo aggiuntivo. Non calcoliamo automaticamente il tempo non utilizzato nell'ultimo ciclo di fatturazione.",
    cancellationContent2:
      "- Ci riserviamo il diritto di sospendere o chiudere il tuo account e di rifiutare qualsiasi utilizzo attuale o futuro dei nostri Servizi per qualsiasi motivo e in qualsiasi momento. La sospensione implica che non potrai accedere all'account o a qualsiasi contenuto in esso contenuto. La chiusura comporterà inoltre l'eliminazione del tuo account o del tuo accesso allo stesso, nonché la confisca e la rinuncia a tutti i contenuti presenti nel tuo account. Ci riserviamo inoltre il diritto di rifiutare l'utilizzo dei Servizi a chiunque, per qualsiasi motivo e in qualsiasi momento. Abbiamo questa clausola perché, statisticamente parlando, tra le centinaia di migliaia di account sui nostri Servizi, ce n'è almeno uno che compie azioni illecite.",
    cancellationContent3:
      "- L'abuso verbale, fisico, scritto o di altro tipo (incluse minacce di abuso o ritorsione) nei confronti di un dipendente o funzionario della Società può comportare l'immediata chiusura dell'account.",
    submissionsContent:
      `L'utente riconosce e accetta che qualsiasi domanda, commento, suggerimento, idea, feedback o altra informazione relativa al Sito ("Invii") da lui forniti non è riservata e diventerà di nostra esclusiva proprietà. Avremo i diritti esclusivi, inclusi tutti i diritti di proprietà intellettuale, e avremo diritto all'uso e alla diffusione illimitati di tali Invii per qualsiasi scopo lecito, commerciale o di altro tipo, senza alcun riconoscimento o compenso a suo favore. Con la presente, l'utente rinuncia a tutti i diritti morali su tali Invii e garantisce che tali Invii sono originali o che ha il diritto di inviare tali Invii. L'utente accetta che non vi sarà alcun ricorso contro di noi per qualsiasi presunta o effettiva violazione o appropriazione indebita di qualsiasi diritto di proprietà sui suoi Invii.`,
    uptimeContent1:
      `- L'utilizzo dei Servizi è a vostro esclusivo rischio. Forniamo questi Servizi "così come sono" e "secondo disponibilità". Non offriamo accordi sul livello di servizio per la maggior parte dei nostri Servizi, ma prendiamo seriamente l'uptime delle nostre applicazioni.`,
    uptimeContent2:
      "- Ci riserviamo il diritto di disattivare temporaneamente il tuo account se il tuo utilizzo supera significativamente l'utilizzo tipico dei Servizi da parte di altri clienti. Naturalmente, ti contatteremo prima di intraprendere qualsiasi azione, tranne nei rari casi in cui il livello di utilizzo potrebbe influire negativamente sulle prestazioni del Servizio per altri clienti.",
    uptimeContent3:
      "- Adottiamo numerose misure per proteggere e proteggere i tuoi dati attraverso backup, ridondanze e crittografia. Applichiamo la crittografia per la trasmissione dei dati sulla rete Internet pubblica.",
    uptimeContent4:
      "- Ci avvaliamo di fornitori terzi e partner di hosting per fornire l'hardware, il software, le reti, lo storage e la tecnologia correlata necessari per gestire i Servizi.",
    siteManagementContent:
      "Ci riserviamo il diritto, ma non l'obbligo, di: (1) monitorare il Sito per violazioni di questi Termini di servizio; (2) intraprendere azioni legali appropriate contro chiunque, a nostra esclusiva discrezione, violi la legge o questi Termini di servizio, incluso, senza limitazioni, segnalare tale utente alle autorità competenti; (3) a nostra esclusiva discrezione e senza limitazioni, rifiutare, limitare l'accesso, limitare la disponibilità o disabilitare (nella misura in cui tecnologicamente fattibile) uno qualsiasi dei tuoi Contributi o una qualsiasi parte di essi; (4) a nostra esclusiva discrezione e senza limitazioni, preavviso o responsabilità, rimuovere dal Sito o altrimenti disabilitare tutti i file e i contenuti che sono di dimensioni eccessive o che sono in qualsiasi modo gravosi per i nostri sistemi; e (5) altrimenti gestire il Sito in un modo progettato per proteggere i nostri diritti e proprietà e per facilitare il corretto funzionamento del Sito.",
    copyrightContent1:
      "- Tutti i contenuti pubblicati sui Servizi devono essere conformi alla legge statunitense sul copyright.",
    copyrightContent2:
      "- Non rivendichiamo alcun diritto di proprietà intellettuale sul materiale che fornisci ai Servizi. Tutto il materiale caricato rimane di tua proprietà.",
    copyrightContent3:
      "- Non eseguiamo controlli preventivi sui contenuti, ma ci riserviamo il diritto (ma non l'obbligo) a nostra esclusiva discrezione di rifiutare o rimuovere qualsiasi contenuto disponibile tramite il Servizio.",
    copyrightContent4:
      "- I nomi, l'aspetto e le funzionalità dei Servizi sono protetti da copyright© della Società. Tutti i diritti riservati. Non è consentito duplicare, copiare o riutilizzare alcuna parte di HTML, CSS, JavaScript o elementi di design visivo senza l'esplicita autorizzazione scritta della Società. È necessario richiedere l'autorizzazione per utilizzare il logo della Società o qualsiasi logo dei Servizi per scopi promozionali.",
    emailUs: "inviaci un'e-mail",
    copyrightContent5:
      "richieste di utilizzo dei loghi. Ci riserviamo il diritto di revocare questa autorizzazione in caso di violazione dei presenti Termini di servizio.",
    copyrightContent6:
      "- L'utente accetta di non riprodurre, duplicare, copiare, vendere, rivendere o sfruttare alcuna parte dei Servizi, l'uso dei Servizi o l'accesso ai Servizi senza l'espresso consenso scritto della Società.",
    copyrightContent7:
      "- Non è consentito modificare un altro sito web in modo da insinuare falsamente che sia associato ai Servizi o alla Società.",
    copyrightContent8:
      "- Rispettiamo i diritti di proprietà intellettuale altrui. Se ritieni che qualsiasi materiale disponibile sul Sito o tramite il Sito violi un copyright di tua proprietà o da te controllato, ti preghiamo di segnalarcelo immediatamente.",
    contactUs: "contattaci",
    copyrightContent9:
      "Una copia della Notifica verrà inviata alla persona che ha pubblicato o archiviato il materiale a cui si riferisce la Notifica. Si prega di notare che, ai sensi della legge applicabile, si può essere ritenuti responsabili per danni in caso di dichiarazioni sostanzialmente false in una Notifica. Pertanto, se non si è certi che il materiale presente sul Sito o collegato tramite link violi il proprio diritto d'autore, si consiglia di contattare prima un avvocato.",
    prohibitedActivitiesIntro:
      "Non è consentito accedere o utilizzare il Sito per scopi diversi da quelli per cui lo rendiamo disponibile. Il Sito non può essere utilizzato in relazione a iniziative commerciali, ad eccezione di quelle specificamente approvate o approvate da noi.",
    prohibitedActivitiesUserAgreement:
      "In qualità di utente del Sito, accetti di non:",
    prohibitedActivity1:
      "- Recuperare sistematicamente dati o altri contenuti dal Sito per creare o compilare, direttamente o indirettamente, una raccolta, una compilazione, un database o una directory senza la nostra autorizzazione scritta.",
    prohibitedActivity2:
      "- Ingannare, truffare o fuorviare noi e gli altri utenti, in particolare nel tentativo di apprendere informazioni sensibili sull'account, come le password degli utenti.",
    prohibitedActivity3:
      "- Aggirare, disabilitare o interferire in altro modo con le funzionalità del Sito relative alla sicurezza, incluse le funzionalità che impediscono o limitano l'uso o la copia di qualsiasi Contenuto o impongono limitazioni all'uso del Sito e/o del Contenuto in esso presente.",
    prohibitedActivity4:
      "- Denigrare, rovinare o comunque danneggiare, a nostro avviso, noi e/o il Sito.",
    prohibitedActivity5:
      "- Utilizzare qualsiasi informazione ottenuta dal Sito per molestare, abusare o danneggiare un'altra persona.",
    prohibitedActivity6:
      "- Fare un uso improprio dei nostri servizi di supporto o inviare false segnalazioni di abusi o cattiva condotta.",
    prohibitedActivity7:
      "- Utilizzare il Sito in modo non conforme alle leggi o ai regolamenti applicabili.",
    prohibitedActivity8:
      "- Eseguire operazioni di framing o linking non autorizzate sul Sito.",
    prohibitedActivity9:
      "- Caricare o trasmettere (o tentare di caricare o trasmettere) virus, trojan horse o altro materiale, incluso l'uso eccessivo di lettere maiuscole e spamming (pubblicazione continua di testo ripetitivo), che interferisca con l'uso ininterrotto e il godimento del Sito da parte di qualsiasi parte o modifichi, danneggi, interrompa, alteri o interferisca con l'uso, le caratteristiche, le funzioni, il funzionamento o la manutenzione del Sito.",
    prohibitedActivity10:
      "- Utilizzare in modo automatizzato il sistema, ad esempio utilizzando script per inviare commenti o messaggi, oppure utilizzando data mining, robot o strumenti simili per la raccolta e l'estrazione di dati.",
    prohibitedActivity11:
      "- Eliminare l'avviso di copyright o di altri diritti proprietari da qualsiasi Contenuto.",
    prohibitedActivity12:
      "- Tentare di impersonare un altro utente o persona o di utilizzare il nome utente di un altro utente.",
    prohibitedActivity13:
      '- Caricare o trasmettere (o tentare di caricare o trasmettere) qualsiasi materiale che agisca come meccanismo di raccolta o trasmissione di informazioni attivo o passivo, inclusi, a titolo esemplificativo ma non esaustivo, formati di scambio di grafica trasparente ("gif"), pixel 1×1, web bug, cookie o altri dispositivi simili (talvolta denominati "spyware" o "meccanismi di raccolta passiva" o "pcm").',
    prohibitedActivity14:
      "- Interferire, interrompere o creare un carico eccessivo sul Sito o sulle reti o sui servizi ad esso collegati.",
    prohibitedActivity15:
      "- Molestare, infastidire, intimidire o minacciare uno qualsiasi dei nostri dipendenti o agenti impegnati nella fornitura di qualsiasi parte del Sito.",
    prohibitedActivity16:
      "- Tentare di aggirare qualsiasi misura del Sito progettata per impedire o limitare l'accesso al Sito o a qualsiasi sua parte.",
    prohibitedActivity17:
      "- Copiare o adattare il software del Sito, inclusi, a titolo esemplificativo ma non esaustivo, Flash, PHP, HTML, JavaScript o altri codici.",
    prohibitedActivity18:
      "- Fatta eccezione per quanto consentito dalla legge applicabile, decifrare, decompilare, disassemblare o sottoporre a reverse engineering qualsiasi software che comprenda o in qualsiasi modo costituisca una parte del Sito.",
    prohibitedActivity19:
      "- Fatta eccezione per quanto possa essere il risultato dell'utilizzo standard di un motore di ricerca o di un browser Internet, utilizzare, avviare, sviluppare o distribuire qualsiasi sistema automatizzato, inclusi, senza limitazioni, spider, robot, cheat utility, scraper o lettori offline che accedono al Sito, o utilizzare o avviare qualsiasi script non autorizzato o altro software.",
    prohibitedActivity20:
      "- Utilizzare un agente di acquisto o un agente di acquisto per effettuare acquisti sul Sito.",
    prohibitedActivity21:
      "- Fare qualsiasi uso non autorizzato del Sito, inclusa la raccolta di nomi utente e/o indirizzi e-mail degli utenti tramite mezzi elettronici o di altro tipo allo scopo di inviare e-mail indesiderate o creare account utente tramite mezzi automatizzati o con falsi pretesti.",
    prohibitedActivity22:
      "- Utilizzare il Sito come parte di qualsiasi sforzo per competere con noi o altrimenti utilizzare il Sito e/o il Contenuto per qualsiasi iniziativa volta a generare profitti o attività commerciale.",
    prohibitedActivity23:
      "- Utilizzare il Sito per pubblicizzare o offrire in vendita beni e servizi.",
    prohibitedActivity24:
      "- Vendere o trasferire in altro modo il tuo profilo.",
    featuresContent1:
      "Progettiamo i nostri Servizi con cura, basandoci sulla nostra esperienza e su quella dei clienti che condividono il loro tempo e il loro feedback. Tuttavia, non esiste un servizio che soddisfi tutti. Non garantiamo che i nostri Servizi soddisfino le vostre specifiche esigenze o aspettative.",
    featuresContent2:
      "Testiamo inoltre tutte le nostre funzionalità prima di distribuirle. Come per qualsiasi software, i nostri Servizi presentano inevitabilmente dei bug. Monitoriamo i bug segnalati e li risolviamo, in particolare quelli relativi alla sicurezza o alla privacy. Non tutti i bug segnalati verranno risolti e non garantiamo Servizi completamente privi di errori.",
    correctionsContent1:
      "Il Sito potrebbe contenere informazioni contenenti errori tipografici, inesattezze o omissioni, tra cui descrizioni, prezzi, disponibilità e varie altre informazioni. Ci riserviamo il diritto di correggere eventuali errori, inesattezze o omissioni e di modificare o aggiornare le informazioni presenti sul Sito in qualsiasi momento e senza preavviso.",
    correctionsContent2:
      "Non possiamo garantire la disponibilità continua del Sito. Potremmo riscontrare problemi hardware, software o di altro tipo, oppure dover eseguire operazioni di manutenzione relative al Sito, con conseguenti interruzioni, ritardi o errori. Ci riserviamo il diritto di modificare, rivedere, aggiornare, sospendere, interrompere o altrimenti modificare il Sito in qualsiasi momento e per qualsiasi motivo, senza preavviso. Accetti che non abbiamo alcuna responsabilità per eventuali perdite, danni o disagi causati dalla tua impossibilità di accedere o utilizzare il Sito durante qualsiasi periodo di inattività o interruzione del Sito. Nulla di quanto contenuto nei presenti Termini di Servizio sarà interpretato in modo da obbligarci a mantenere e supportare il Sito o a fornire correzioni, aggiornamenti o release in relazione ad esso.",
    userDataContent:
      "Conserveremo alcuni dati che trasmettete al Sito allo scopo di gestirne le prestazioni, nonché i dati relativi al vostro utilizzo del Sito. Sebbene eseguiamo regolarmente backup dei dati, siete gli unici responsabili di tutti i dati che trasmettete o relativi a qualsiasi attività da voi intrapresa utilizzando il Sito. Accettate che non avremo alcuna responsabilità nei vostri confronti per eventuali perdite o danneggiamenti di tali dati e rinunciate a qualsiasi diritto di azione nei nostri confronti derivante da tali perdite o danneggiamenti.",
    privacyPolicyContent1:
      "Ci preoccupiamo della privacy e della sicurezza dei dati. Si prega di consultare la nostra",
    privacyPolicy: "politica sulla riservatezza",
    privacyPolicyContent2:
      "Utilizzando il Sito, accetti di essere vincolato dalla nostra Informativa sulla privacy, che è incorporata nei presenti Termini di servizio. Si prega di notare che il Sito è ospitato negli Stati Uniti. Se accedi al Sito da qualsiasi altra regione del mondo con leggi o altri requisiti che regolano la raccolta, l'utilizzo o la divulgazione dei dati personali diversi dalle leggi applicabili negli Stati Uniti, attraverso l'utilizzo continuato del Sito, trasferisci i tuoi dati negli Stati Uniti e accetti che i tuoi dati vengano trasferiti ed elaborati negli Stati Uniti.",
    liabilityIntro:
      "Menzioniamo la responsabilità in tutti i presenti Termini, ma per riassumerla in un'unica sezione:",
    liabilityContent:
      "L'utente riconosce e accetta espressamente che la Società non sarà responsabile, in base alla legge o all'equità, nei confronti dell'utente o di terze parti per eventuali danni diretti, indiretti, incidentali, per mancato guadagno, speciali, consequenziali, punitivi o esemplari, inclusi, a titolo esemplificativo ma non esaustivo, danni per perdita di profitto, avviamento, utilizzo, dati o altre perdite immateriali (anche se la Società è stata informata della possibilità di tali danni), derivanti da: (1) l'utilizzo o l'impossibilità di utilizzare i Servizi; (2) errori, sbagli o inesattezze di contenuti e materiali; (3) lesioni personali o danni alla proprietà, di qualsiasi natura, derivanti dall'accesso e dall'utilizzo del sito; (4) il costo di approvvigionamento di beni e servizi sostitutivi risultante da beni, dati, informazioni o servizi acquistati o ottenuti o messaggi ricevuti o transazioni effettuate tramite o dai Servizi; (5) qualsiasi accesso o utilizzo non autorizzato dei nostri server sicuri e/o di tutte le informazioni personali e/o finanziarie ivi memorizzate; (6) qualsiasi interruzione o cessazione della trasmissione da o verso il sito; (7) eventuali bug, virus, trojan horse o simili che potrebbero essere trasmessi da o tramite il sito da terze parti e/o; (8) eventuali errori od omissioni in qualsiasi contenuto e materiale o per qualsiasi perdita o danno di qualsiasi tipo subito a seguito dell'uso di qualsiasi contenuto pubblicato, trasmesso o altrimenti reso disponibile tramite il sito; (9) dichiarazioni o condotte di terze parti sul servizio; (10) o qualsiasi altra questione relativa a questi Termini di servizio o ai Servizi, sia come violazione del contratto, illecito civile (inclusa negligenza attiva o passiva) o qualsiasi altra teoria di responsabilità.",
    miscellaneousContent:
      "I presenti Termini di Servizio e qualsiasi politica o regola operativa da noi pubblicata sul Sito o in relazione al Sito costituiscono l'intero accordo e l'intesa tra te e noi. Il mancato esercizio o la mancata applicazione di qualsiasi diritto o disposizione dei presenti Termini di Servizio non costituirà una rinuncia a tale diritto o disposizione. I presenti Termini di Servizio operano nella misura massima consentita dalla legge. Possiamo cedere a terzi, in tutto o in parte, i nostri diritti e obblighi in qualsiasi momento. Non saremo responsabili per eventuali perdite, danni, ritardi o omissioni causati da cause al di fuori del nostro ragionevole controllo. Qualora una qualsiasi disposizione o parte di una disposizione dei presenti Termini di Servizio venga ritenuta illegale, nulla o inapplicabile, tale disposizione o parte di essa sarà considerata separabile dai presenti Termini di Servizio e non pregiudicherà la validità e l'applicabilità delle restanti disposizioni. Non esiste alcun rapporto di joint venture, partnership, lavoro o agenzia tra te e noi a seguito dei presenti Termini di Servizio o dell'utilizzo del Sito. Accetti che i presenti Termini di Servizio non saranno interpretati contro di noi in virtù del fatto di averli redatti. Con la presente si rinuncia a qualsiasi difesa a propria discrezione basata sulla forma elettronica delle presenti Condizioni di servizio e sulla mancata sottoscrizione da parte delle parti per l'esecuzione delle presenti Condizioni di servizio.",
    contactUsContent1:
      "Se hai una domanda su uno qualsiasi dei Termini di servizio, per favore",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Caratteristiche",
    UnlimitedTranscription: "Trascrizione illimitata",
    BulkUpload: "Caricamento in blocco",
    Accuracy: "Precisione del 96%",
    Pricing: "Prezzi",
    UseCases: "Casi d'uso",
    AllUseCases: "Tutti i casi d'uso",
    Podcasters: "Podcaster",
    Journalists: "giornalisti",
    ContentCreators: "Creatori di contenuti",
    Researchers: "Ricercatori",
    BusinessTeams: "Team aziendali",
    Educators: "Educatori",
    Resources: "Risorse",
    YouTubetoMP4: "YouTube in MP4",
    StartFreeTrial: "Provalo gratis"
  },
  Footer: {
    des: "Il primo servizio di trascrizione basato sull'intelligenza artificiale al mondo davvero illimitato. Nessun limite, nessun limite, solo libertà di creare.",
    Features: "Caratteristiche",
    UseCases: "Casi d'uso",
    Company: "Azienda",
    featureMenus: ["Trascrizione illimitata", "Caricamento in blocco", "Precisione del 96%"],
    useCaseMenus: [
      "Tutti i casi d'uso",
      "Podcaster",
      "giornalisti",
      "Creatori di contenuti",
      "Ricercatori",
      "Team aziendali",
      "Educatori"
    ],
    companyMenus: [
      "Di",
      "Prezzi",
      "Riservatezza",
      "Termini"
    ]
  },
  Index: {
    Hero: {
      badge: 'Basta con la "shrinkflation" - In realtà illimitata',
      h1: "Smetti di pagare per i limiti:",
      gradient: "Trascrizione AI veramente illimitata",
      subtitle: "Carica l'intero archivio dei tuoi podcast. Trascrivi tutte le tue interviste. Elabora 50 file contemporaneamente. Nessun limite mensile, nessun limite di caricamento. Finalmente una trascrizione che si adatta alle tue reali esigenze.",
      FreeTrial: "Provalo gratis - Nessuna carta di credito",
      HowWorks: "Guarda come funziona",
      Unlimited: "Caricamento file illimitato",
      NoCap: "Nessun limite di minuti mensili",
      Hour: "File da 10 ore supportati",
      ExploreUseCases: "Esplora i casi d'uso"
    },
    Stats: {
      monthlyMinutes: "Minuti mensili",
      fileUploads: "Caricamento file",
      batchProcessing: "Elaborazione batch",
      maxFileLength: "Lunghezza massima del file"
    },
    FeaturesGrid: {
      try_now: "Provalo ora",
      no_signup: "Nessuna registrazione richiesta",
      experience_unltd: "Prova una trascrizione davvero illimitata",
      upload_50: "Carica fino a 50 file contemporaneamente, proprio qui",
      no_limits: "Niente più limiti nascosti",
      no_surprises: "Niente più sorprese",
      transparency: "Mentre altri riducono silenziosamente i tuoi minuti o nascondono i limiti in caratteri piccoli, noi crediamo nella trasparenza radicale",
      feat_unltd: "In realtà illimitato",
      feat_unltd_desc: `Nessuna "politica di fair use" nascosta nei termini. Nessun limite di spazio di archiviazione mascherato da "illimitato". Carica l'intero archivio, trascrivi tutto. Lo diciamo sul serio.`,
      feat_bulk: "Libertà di caricamento in blocco",
      feat_bulk_desc: 'Stanco di "3 importazioni a vita" o "10 file al mese"? Carica 50 file contemporaneamente, tutte le volte che vuoi. Perfetto per gestire gli arretrati.',
      feat_batch: "Elaborazione batch",
      feat_batch_desc: "Elabora l'intera stagione del tuo podcast durante la notte. Carica 50 interviste contemporaneamente. Lascia che la nostra intelligenza artificiale lavori mentre dormi. Svegliati con le trascrizioni complete.",
      feat_accuracy: "Precisione del 96%",
      feat_accuracy_desc: "Intelligenza artificiale leader del settore con punteggiatura intelligente, diarizzazione fino a 20 interlocutori e gestione impeccabile di accenti e termini tecnici.",
      feat_langs: "Oltre 100 lingue",
      feat_langs_desc: "Trascrivi in oltre 100 lingue, traduci in oltre 249. Nessun costo aggiuntivo per le diverse lingue. Contenuti globali, un unico prezzo semplice.",
      feat_pro: "Caratteristiche professionali",
      feat_pro_desc: "Timestamp a livello di parola per un posizionamento audio/video preciso, un'identificazione accurata dell'interlocutore anche durante rapidi cambi di conversazione e un testo perfettamente formattato con paragrafi, frasi e punteggiatura per una facile lettura."
    },
    UseCases: {
      built_for: "Costruito per",
      "heavy_users": "Utenti assidui come te",
      "join_users": 'Unisciti agli YouTuber, ai creatori di contenuti e ai podcaster che sono passati dai servizi di "shrinkflation"',
      "podcasters": {
        "title": "Podcaster",
        "des": "Carica l'intero catalogo. Crea note di presentazione per ogni episodio. Non dovrai più scegliere quali episodi trascrivere."
      },
      "content_creators": {
        "title": "Creatori di contenuti",
        "des": "Trasforma la tua videoteca in testo ricercabile. Genera sottotitoli per ogni contenuto. Non conteggiare i minuti, crea e basta."
      },
      "journalists": {
        "title": "giornalisti",
        "des": 'Carica tutte le tue interviste in una sola volta. Niente più blocchi da "10 file al mese" quando hai scadenze. Elabora tutto.'
      },
      researchers: {
        title: "Ricercatori",
        des: "Trascrivi ore di focus group e interviste. Carica l'intero studio in una sola volta. Ottieni un'identificazione accurata del relatore."
      },
      business_teams: {
        title: "Team aziendali",
        des: "Registra ogni chiamata senza preoccuparti dei limiti. Ottieni informazioni IA su tutte le conversazioni, non solo su alcune selezionate."
      },
      educators: {
        title: "Educatori",
        des: "Trascrivi l'intera serie di lezioni. Rendi tutti i contenuti accessibili. Non dovrai più scegliere tra i corsi a causa del limite di minuti."
      }
    },
    Testimonials: {
      title: "Amato da",
      highlighted_users: "Oltre 50.000 utenti",
      subtitle: "Scopri perché i professionisti scelgono NeverCap rispetto ad alternative limitate",
      Mike: {
        "text": "Oddio, questa cosa funziona davvero! Ho fatto un podcast per 3 anni e trascrivevo tutto a mano come un idiota. Ho caricato 6 episodi contemporaneamente e ho separato perfettamente me e il mio co-conduttore. L'episodio del bar che pensavo fosse rovinato? Trascrizione cristallina. Non tornerò mai più a scrivere queste cose da solo.",
        "author": "Mike Rodriguez",
        "role": "Conduttore di podcast"
      },
      Sarah: {
        "text": "Insegno online e avevo bisogno di sottotitoli per i miei video. Ho provato altri 3 strumenti che avevano limiti strani o richiedevano un'eternità. Questo... funziona davvero? Ho caricato la mia lezione di spagnolo e ho ottenuto sottotitoli perfetti in circa 2 minuti. I miei studenti con problemi di udito sono così contenti. Vorrei averlo trovato prima!",
        "author": "Sarah Chen",
        "role": "Insegnante online"
      },
      Jessica: {
        "text": "Ho usato questo strumento per i miei colloqui ed è incredibilmente preciso. Ho fatto un colloquio di due ore in un inglese e uno spagnolo stentati e ha azzeccato tutto, persino i timestamp. Pagavo 200 dollari al mese al mio stagista solo per trascrivere il materiale. Questo mi fa letteralmente risparmiare ogni mese.",
        "author": "Jessica Park",
        "role": "Giornalista freelance"
      }
    },
    PricingPreview: {
      "title": "Prezzi trasparenti",
      "highlighted_text": "Nessun limite nascosto",
      "subtitle": "Scegli il tuo piano. Nessun asterisco, nessuna clausola, nessuna sorpresa"
    },
    FAQSection: {
      "title": "Domande frequenti",
      "titleHighlight": "Domande",
      "questions": [
        {
          "q": "politica illimitata",
          "question": "È davvero illimitato? Qual è il trucco?",
          "answer": "Sì, è davvero illimitato! Nessun limite mensile ai minuti, nessun costo aggiuntivo. Gli unici limiti sono tecnici: i singoli file possono durare fino a 10 ore o avere una dimensione massima di 5 GB, e puoi elaborare 50 file contemporaneamente. Ma puoi caricare tutti i batch che desideri, per tutto il mese."
        },
        {
          "q": "precisione",
          "question": "Quanto è accurata la trascrizione?",
          "answer": "Garantiamo una precisione del 96% per un audio nitido. La nostra intelligenza artificiale è stata addestrata su milioni di ore di contenuti diversi e gestisce in modo eccezionale accenti, termini tecnici e interlocutori multipli. Per i contenuti audio più complessi, le nostre funzionalità di ottimizzazione intelligente contribuiscono a migliorare i risultati."
        },
        {
          "q": "lingue",
          "question": "Quali lingue supportate?",
          "answer": "Supportiamo la trascrizione in oltre 100 lingue, tra cui inglese, spagnolo, mandarino, hindi, arabo, francese e altre ancora. Inoltre, puoi tradurre le tue trascrizioni in 249 lingue diverse, il che le rende perfette per contenuti globali."
        },
        {
          "q": "velocità",
          "question": "Quanto è veloce la trascrizione?",
          "answer": "Velocissimo! Un file audio di un'ora viene in genere elaborato in meno di 5 minuti. Con l'elaborazione in batch, è possibile caricare 50 file contemporaneamente e lasciarli elaborare in parallelo. La maggior parte degli utenti si sveglia e trova l'intera libreria trascritta durante la notte."
        },
        {
          "q": "cancellazione",
          "question": "Posso annullare in qualsiasi momento?",
          "answer": "Assolutamente sì! Nessun contratto, nessuna penale di cancellazione. Puoi effettuare un upgrade, un downgrade o annullare l'abbonamento in qualsiasi momento dalla tua dashboard. Se annulli l'abbonamento, manterrai l'accesso fino alla fine del periodo di fatturazione."
        },
        {
          "q": "sicurezza",
          "question": "I miei dati sono al sicuro?",
          "answer": "La tua sicurezza è la nostra priorità. Siamo certificati SOC 2, utilizziamo la crittografia a 256 bit per tutti i dati e non utilizziamo mai i tuoi contenuti per addestrare i nostri modelli. Puoi eliminare i tuoi file in qualsiasi momento e li elimineremo automaticamente dopo 30 giorni. Conformi a GDPR e CCPA."
        },
        {
          "q": "formati di esportazione",
          "question": "Quali formati di esportazione sono disponibili?",
          "answer": "Scarica le tue trascrizioni in qualsiasi formato tu voglia: PDF, Word (DOCX), Excel, CSV, sottotitoli SRT, testo normale (TXT) e sottotitoli VTT. Perfetto per qualsiasi flusso di lavoro tu abbia."
        },
        {
          "q": "formati_file",
          "question": "Quali file audio e video posso caricare?",
          "answer": "Supportiamo praticamente tutti i formati audio e video che incontrerai: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV e molti altri. Se riesci a riprodurlo, possiamo trascriverlo."
        }
      ]
    },
    CTASection: {
      "title": "Pronti a liberarvi dai limiti?",
      "subtitle": "Unisciti a oltre 50.000 professionisti che hanno effettuato il passaggio a una trascrizione davvero illimitata",
      "button": "Prova NeverCap Gratis",
      "disclaimer": "Nessuna carta di credito richiesta per il piano gratuito • Esegui l'upgrade in qualsiasi momento per un accesso illimitato"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Basta con la "shrinkflation"',
      heroTitleLine1: "Veramente illimitato",
      heroTitleLine2: "Trascrizione AI",
      heroSubtitle: "Mentre Trint ti impone un limite di 50 ore e Otter di 10 file al mese, noi manteniamo ciò che promettiamo: trascrizioni illimitate senza limiti nascosti.",
      primaryCta: "Provalo gratis - Nessuna carta di credito",
      secondaryCta: "Vedi la verità",
      comparisonBadLabel: "Cosa fanno gli altri",
      comparisonBadTitle: "Limiti nascosti ovunque",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Illimitato" = limite di 50 ore/mese',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Lontra:",
      comparisonBadItem2Text: "3 importazioni a vita (gratuite), 10/mese (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Lucciole:",
      comparisonBadItem3Text: "Limite di archiviazione di 800 minuti",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descrizione:",
      comparisonBadItem4Text: "Max 30 ore/mese",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Nascosto nei termini e condizioni",
      comparisonGoodLabel: "Cosa facciamo",
      comparisonGoodTitle: "In realtà illimitato",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Nessun limite mensile di minuti",
      comparisonGoodItem1Text: "mai",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Caricamento file illimitato",
      comparisonGoodItem2Text: "Sempre",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Nessun limite di archiviazione",
      comparisonGoodItem3Text: "affatto",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Caricamento in batch di 50 file",
      comparisonGoodItem4Text: "in qualsiasi momento",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Politica trasparente",
      comparisonGoodItem5Text: "in anticipo",
      feature1Label: "Nessun limite",
      feature1TitlePart1: "Trascrivere 1.000 ore?",
      feature1TitlePart2: "Stesso prezzo.",
      feature1Description: "Smettete di contare i minuti. Smettete di guardare i limiti. Che trascriviate 10 o 10.000 ore al mese, pagherete la stessa tariffa fissa. Nessun costo aggiuntivo. Nessuna bolletta a sorpresa.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Nessun trucco sulla politica del "fair use"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Nessuna limitazione dopo X ore",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Nessuna ansia di fine mese",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Ore mensili",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Costi di superamento",
      feature1Stat3Number: "24 ore su 24, 7 giorni su 7",
      feature1Stat3Label: "Carica in qualsiasi momento",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Trasparente",
      feature2Label: "Libertà di massa",
      feature2TitlePart1: "Carica il tuo",
      feature2TitlePart2: "Archivio intero",
      feature2Description: "Otter ti offre 3 importazioni gratuite a vita, 10 al mese con la versione Pro. Ti offriamo un numero illimitato di contenuti. Carica il tuo arretrato di podcast, tutte le tue interviste, anni di registrazioni. Nessuna restrizione.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 file per lotto",
      feature2Point2Icon: "✓",
      feature2Point2Text: "File da 10 ore supportati",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Elabora mentre dormi",
      feature2TableRow1Label: "Lontra libera",
      feature2TableRow1Value: "3 importazioni a vita",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 file/mese",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Limite di 50 ore/mese",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Veramente illimitato ✓",
      feature3Label: "Prova sociale",
      feature3TitlePart1: "Gli utenti sono",
      feature3TitlePart2: "Cambio giornaliero",
      feature3Description: `"Pago 100 dollari all'anno per Otter e mi limitano a 10 importazioni di file al mese. Non appena ci sarà un'alternativa con importazioni illimitate, me ne andrò!" - Vero utente Reddit`,
      feature3Point1Icon: "✓",
      feature3Point1Text: "Oltre 50.000 utenti hanno cambiato",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Dalla "shrinkflation" di Otter',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Non tornare mai più",
      feature3Stat1Number: "50.000+",
      feature3Stat1Label: "Utenti soddisfatti",
      feature3Stat2Number: "1 milione+",
      feature3Stat2Label: "File elaborati",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Precisione",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Nessun costo nascosto",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuti/mese",
      trustBadge2Number: "100+",
      trustBadge2Label: "Lingue",
      trustBadge3Number: "96%",
      trustBadge3Label: "Precisione",
      trustBadge4Number: "50",
      trustBadge4Label: "Caricamento in batch",
      ctaTitle: "Smetti di pagare per falsi servizi illimitati",
      ctaSubtitle: "Unisciti alle migliaia di persone che sono passate a una trascrizione davvero illimitata",
      finalCta: "Prova NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Libertà di caricamento in blocco",
      heroTitleLine1: "Carica 50 file.",
      heroTitleHighlight: "Elabora tutto.",
      heroSubtitle: "Otter ti offre 3 importazioni a vita. TRE. Per tutta la vita. Ti offriamo caricamenti illimitati, 50 file alla volta, ogni volta che ne hai bisogno.",
      primaryCta: "Avvia caricamento in blocco →",
      secondaryCta: "Vedi i limiti",
      redditQuote: '"Devo trascrivere 3 anni di episodi di podcast. Otter mi dice che ne ho 3 import a vita. TRE. Questo è offensivo."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Vera frustrazione da r/podcasting",
      comparisonSectionTitlePart1: "IL",
      comparisonSectionTitleHighlight: "Limiti ridicoli",
      comparisonSectionTitlePart2: "Loro impongono",
      comparisonSubtitle: "Come i concorrenti limitano la tua capacità di elaborare i contenuti",
      limitCard1Service: "Lontra libera",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importazioni a vita",
      limitCard1DescriptionLine2: "(Sì, per TUTTA la tua vita)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "File al mese",
      limitCard2DescriptionLine2: "(Piano da $ 100/anno)",
      limitCard3Service: "Descrizione",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "File alla volta",
      limitCard3DescriptionLine2: "(Caricamento sequenziale)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Caricamenti illimitati",
      limitCard4DescriptionLine2: "50 file per lotto",
      feature1Label: "Potenza in lotti",
      feature1TitlePart1: "Elabora il tuo",
      feature1TitleHighlight: "Archivio intero",
      feature1TitlePart2: "Durante la notte",
      feature1Description: 'Carica 50 file prima di andare a letto. Svegliati e completa le trascrizioni. Niente code, niente attese, niente messaggi di "aggiornamento". Solo pura potenza di elaborazione a portata di mano.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 caricamenti simultanei",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Elaborazione parallela",
      feature1Point3Icon: "✓",
      feature1Point3Text: "File da 10 ore supportati",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Massimo 5 GB per file",
      uploadAnimationText1: "50 file",
      uploadAnimationText2: "Lascia cadere e lavora",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "intervista_raw.mp4",
      fileBadge3: "riunione_2024.wav",
      fileBadge4: "lezione_completa.mov",
      fileBadge5: "+ altri 46 file...",
      feature2Label: "Velocità",
      feature2TitlePart1: "Da Carica a",
      feature2TitleHighlight: "Fatto in poche ore",
      feature2Description: "Grazie alla nostra infrastruttura di elaborazione parallela, i tuoi 50 file non saranno più in coda. Verranno tutti trascritti simultaneamente. Ciò che prima richiedeva settimane, ora richiede ore.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "File da 1 ora: 5 minuti",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 file: elaborati in parallelo",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notifica via email al termine",
      timelineStep1Icon: "1",
      timelineStep1Title: "Caricamento",
      timelineStep1Time: "0 minuti",
      timelineStep2Icon: "2",
      timelineStep2Title: "Elaborazione",
      timelineStep2Time: "5-30 minuti",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magia dell'intelligenza artificiale",
      timelineStep3Time: "30-60 minuti",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Completare",
      timelineStep4Time: "< 2 ore",
      feature3Label: "Libertà",
      feature3TitlePart1: "Nessuna coda.",
      feature3TitleHighlight: "Nessuna attesa.",
      feature3TitlePart2: "Nessun limite.",
      feature3Description: 'Mentre altri ti fanno aspettare in file virtuali o ti chiedono di passare a un "processo prioritario", noi trattiamo ogni caricamento con urgenza. I tuoi contenuti sono importanti e non dovrebbero aspettare.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Nessun livello di priorità",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Stessa velocità per tutti",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Carica in qualsiasi momento, 24 ore su 24, 7 giorni su 7",
      feature3VisualNumber: "24 ore su 24, 7 giorni su 7",
      feature3VisualTitle: "Sempre pronto",
      feature3VisualSubtext: "Carica ogni volta che ti viene l'ispirazione",
      useCasesTitlePart1: "Perfetto per",
      useCasesTitleHighlight: "Caricatori pesanti",
      useCasesSubtitle: "Scenari reali in cui il caricamento in blocco salva la giornata",
      useCase1Title: "Archivi podcast",
      useCase1Description: "Carica 3 anni di episodi contemporaneamente. Crea trascrizioni per l'intero catalogo. Genera contenuti SEO per ogni episodio.",
      useCase2Title: "Creazione del corso",
      useCase2Description: "Elabora simultaneamente tutti i video delle tue lezioni. Crea trascrizioni accessibili per gli studenti. Crea materiali didattici consultabili.",
      useCase3Title: "Arretrati delle interviste",
      useCase3Description: "Svuota quella montagna di interviste non trascritte. Elabora settimane di ricerca in poche ore. Rispetta le scadenze senza panico.",
      useCase4Title: "Libreria di YouTube",
      useCase4Description: "Genera sottotitoli per l'intero canale. Crea post per il blog a partire dai contenuti video. Migliora la SEO di tutti i video.",
      useCase5Title: "Archivio delle riunioni",
      useCase5Description: "Carica mesi di riunioni registrate. Crea appunti consultabili. Non perdere mai più decisioni importanti.",
      useCase6Title: "Dati di ricerca",
      useCase6Description: "Elaborare focus group in blocco. Trascrivere tutte le interviste ai partecipanti. Analizzare i dati qualitativi in modo efficiente.",
      ctaTitle: "Smettila di chiedere più caricamenti",
      ctaSubtitle: "Ottieni un'elaborazione di massa illimitata che funziona davvero",
      finalCta: "Carica 50 file ora →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Precisione leader del settore",
      heroTitleLine1: "Precisione del 96%.",
      heroTitleHighlight: "Ogni parola conta.",
      heroSubtitle: "Precisione leader del settore in 12 lingue principali. Timestamp a livello di parola per una sincronizzazione perfetta. Identificazione smart speaker che gestisce conversazioni rapide. Formattazione professionale effettivamente leggibile.",
      primaryCta: "Metti alla prova la nostra precisione →",
      secondaryCta: "Vedi Lingue",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Precisione in",
      statCard1DescriptionLine2: "12 lingue principali",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Precisione con",
      statCard2DescriptionLine2: "Accenti e dialetti",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Livello di parola",
      statCard3DescriptionLine2: "Precisione del timestamp",
      languageSectionTitlePart1: "Precisione del 96% in 12 lingue principali",
      languageSubtitle: "Trascrizione di livello professionale per contenuti globali",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Inglese",
      languageCard1Accuracy: "Precisione del 96%",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "spagnolo",
      languageCard2Accuracy: "Precisione del 96%",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarino",
      languageCard3Accuracy: "Precisione del 96%",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "francese",
      languageCard4Accuracy: "Precisione del 96%",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "tedesco",
      languageCard5Accuracy: "Precisione del 96%",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "giapponese",
      languageCard6Accuracy: "Precisione del 96%",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "coreano",
      languageCard7Accuracy: "Precisione del 96%",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "portoghese",
      languageCard8Accuracy: "Precisione del 96%",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "russo",
      languageCard9Accuracy: "Precisione del 96%",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italiano",
      languageCard10Accuracy: "Precisione del 96%",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Olandese",
      languageCard11Accuracy: "Precisione del 96%",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "arabo",
      languageCard12Accuracy: "Precisione del 96%",
      moreLanguagesText: "+ 88 altre lingue supportate con una precisione del 95%+",
      feature1Label: "Precisione",
      feature1TitlePart1: "Livello di parola",
      feature1TitleHighlight: "Timestamp",
      feature1Description: "Ogni parola è perfettamente sincronizzata con la sua posizione audio. Crea trascrizioni cliccabili, genera sottotitoli precisi o vai direttamente a momenti precisi delle tue registrazioni. Precisione di 100 ms, di cui i professionisti si fidano.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precisione del timestamp di 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfetto per il montaggio video",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Trascrizioni interattive cliccabili",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Sottotitoli precisi al fotogramma",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Oratore 1",
      transcriptLine1Text: "Benvenuti all'episodio odierno del podcast.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Oratore 2",
      transcriptLine2Text: "Grazie per avermi invitato allo show!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Oratore 1",
      transcriptLine3Text: "Approfondiamo il nostro argomento principale...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Oratore 2",
      transcriptLine4Text: "Certamente, non vedo l'ora di parlarne.",
      feature2Label: "IA intelligente",
      feature2TitlePart1: "Maniglie",
      feature2TitleHighlight: "Conversazioni rapide",
      feature2Description: "La nostra intelligenza artificiale identifica accuratamente gli interlocutori anche durante sovrapposizioni di discorsi, interruzioni e conversazioni rapide. Perfetto per interviste, podcast e riunioni in cui gli interlocutori intervengono frequentemente.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifica fino a 20 parlanti",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Gestisce perfettamente le interruzioni",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Funziona con discorso sovrapposto",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Mantiene la precisione nella diafonia",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Relatori identificati",
      feature2VisualSubtext: "Anche nelle conversazioni rapide",
      feature3Label: "Leggibilità",
      feature3TitlePart1: "Perfettamente",
      feature3TitleHighlight: "Testo formattato",
      feature3Description: "Niente più muri di testo. La nostra intelligenza artificiale aggiunge automaticamente paragrafi, frasi e punteggiatura esattamente dove servono. Il risultato? Trascrizioni piacevoli da leggere e facili da consultare.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Interruzioni di paragrafo intelligenti",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Punteggiatura accurata",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Capitalizzazione corretta",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Output pulito e scansionabile",
      formattingTitle: "Prima e dopo",
      formattingBeforeLabel: "❌ Altri:",
      formattingBeforeText: "Quindi oggi parleremo delle nuove funzionalità su cui stiamo lavorando. Penso che vi piaceranno molto. Sono state richieste dagli utenti per molto tempo e finalmente le abbiamo realizzate.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Quindi oggi parleremo delle nuove funzionalità su cui stiamo lavorando. Credo che vi piaceranno molto. Erano richieste dagli utenti da molto tempo e finalmente le abbiamo realizzate.",
      comparisonSubtitle: "Precisione",
      comparisonSectionTitle: "Confronto",
      comparisonDes: "Scopri come ci confrontiamo con la concorrenza",
      tableHeader1: "Caratteristica",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Descrizione",
      tableHeader5: "Rev",
      tableRow1Feature: "Precisione (audio chiaro)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Timestamp a livello di parola",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identificazione dell'altoparlante",
      tableRow3NeverCap: "20 relatori",
      tableRow3Otter: "16 altoparlanti",
      tableRow3Descript: "10 altoparlanti",
      tableRow3Rev: "✕",
      tableRow4Feature: "Gestisce la diafonia",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limitato",
      tableRow4Descript: "Limitato",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formattazione intelligente",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Di base",
      tableRow6Feature: "12 lingue al 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Prova una precisione del 96%",
      ctaSubtitle: "Carica il tuo audio più impegnativo e scopri la differenza",
      finalCta: "Metti alla prova la nostra precisione ora →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Prezzi semplici e trasparenti",
      "highlighted_text": "Nessun limite nascosto",
      "description": "Scegli il piano più adatto alle tue esigenze. Passa a un piano superiore o inferiore in qualsiasi momento. Nessun contratto, nessuna sorpresa."
    },
    Cards: {
      "title": "Prezzi semplici e trasparenti.",
      "highlighted_text": "Nessun limite nascosto.",
      "description": "Scegli il piano più adatto alle tue esigenze. Passa a un piano superiore o inferiore in qualsiasi momento. Nessun contratto, nessuna sorpresa.",
      "plans": [
        {
          "name": "Gratuito",
          "price": "$0",
          "period": "mese",
          "discount": "Perfetto per provare il nostro servizio",
          "limits": {
            "title": "Limiti giornalieri",
            "items": [
              "3 file/giorno (≈90 min totali/giorno)",
              "Fino a 30 minuti per file (≤250 MB)",
              "Carica 1 file alla volta",
              "Coda di priorità standard"
            ]
          },
          "features": {
            "title": "Caratteristiche",
            "items": [
              "Oltre 100 lingue",
              "Etichette degli altoparlanti",
              "Traduzione",
              "Tutti i formati di esportazione"
            ]
          },
          "cta": {
            "text": "Inizia gratis. Nessuna carta di credito.",
            "button": "Inizia gratis"
          }
        },
        {
          "name": "Pro Mensile",
          "price": "$17,99",
          "period": "mese",
          "discount": "$ 9,99 per il primo mese",
          "limits": {
            "title": "Nessun limite mensile",
            "items": [
              "Minuti totali illimitati",
              "Fino a 10 ore / 5 GB per file",
              "Carica 50 file contemporaneamente",
              "Coda prioritaria"
            ]
          },
          "features": {
            "title": "Tutto in Free, più",
            "items": [
              "Timestamp a livello di parola",
              "Identificazione avanzata dell'altoparlante",
              "Paragrafi formattati e punteggiatura",
              "Supporto prioritario"
            ]
          },
          "cta": {
            "text": "Minuti illimitati. Velocità prioritaria. Caricamenti in batch.",
            "button": "Diventa Pro"
          },
          "badge": "I più popolari"
        },
        {
          "name": "Pro Annual",
          "price": "$8,99",
          "period": "mese",
          "discount": "Fatturato annualmente $ 107,88",
          "limits": {
            "title": "Uguale a Pro Monthly",
            "items": [
              "Minuti totali illimitati",
              "Fino a 10 ore / 5 GB per file",
              "Carica 50 file contemporaneamente",
              "Coda prioritaria"
            ]
          },
          "features": {
            "title": "Tutto in Free, più",
            "items": [
              "Timestamp a livello di parola",
              "Identificazione avanzata dell'altoparlante",
              "Paragrafi formattati e punteggiatura",
              "Supporto prioritario"
            ]
          },
          "cta": {
            "text": "Minuti illimitati. Velocità prioritaria. Caricamenti in batch.",
            "button": "Diventa Pro"
          },
          "badge": "Miglior valore - Risparmia il 50%"
        }
      ],
      "disclaimer": `"Illimitato" significa nessun limite mensile e nessun rallentamento artificiale. Il fair use si applica anche all'automazione o alla ridistribuzione abusive.`
    },
    ComparisonTable: {
      "header": {
        "title": "Confronta tutte le funzionalità",
        "highlighted_text": "Tutte le funzionalità",
        "subtitle": "Scopri esattamente cosa ottieni con ogni piano. Nessuna limitazione nascosta."
      },
      "plans": [
        "Caratteristiche",
        "Gratuito",
        "Pro Mensile",
        "Pro Annual"
      ],
      "features": [
        {
          "name": "Prezzo",
          "values": [
            "$0/mese",
            {
              "main": "$ 17,99/mese",
              "note": "$ 9,99 primo mese"
            },
            {
              "main": "$ 8,99/mese",
              "note": "Fatturato $ 107,88/anno"
            }
          ]
        },
        {
          "name": "Minuti mensili",
          "values": ["~2.700 (90/giorno)", "Illimitato", "Illimitato"]
        },
        {
          "name": "Durata massima del file",
          "values": ["30 minuti", "10 ore", "10 ore"]
        },
        {
          "name": "Dimensione massima del file",
          "values": ["250 MB", "5 GB", "5 GB"]
        },
        {
          "name": "Caricamenti in batch",
          "values": ["1 fascicolo", "50 file", "50 file"]
        },
        {
          "name": "Velocità di elaborazione",
          "values": ["Standard", "Priorità", "Priorità"]
        },
        {
          "name": "Lingue supportate",
          "values": ["Oltre 100 lingue", "Oltre 100 lingue", "Oltre 100 lingue"]
        },
        {
          "name": "Traduzione",
          "values": ["VERO", "VERO", "VERO"]
        },
        {
          "name": "Identificazione dell'oratore",
          "values": ["Di base", "Avanzato (20 relatori)", "Avanzato (20 relatori)"]
        },
        {
          "name": "Timestamp a livello di parola",
          "values": ["falso", "VERO", "VERO"]
        },
        {
          "name": "Paragrafi formattati",
          "values": ["falso", "VERO", "VERO"]
        },
        {
          "name": "Formati di esportazione",
          "values": ["Tutti i formati", "Tutti i formati", "Tutti i formati"]
        },
        {
          "name": "Supporto",
          "values": ["E-mail", "Email prioritaria", "Email prioritaria"]
        },
        {
          "name": "Conservazione dei dati",
          "values": ["30 giorni", "Per sempre", "Per sempre"]
        }
      ]
    },
    FAQ: {
      "title": "Domande frequenti",
      "titleHighligt": "Domande",
      "items": [
        {
          "q": "politica illimitata",
          "question": "È davvero illimitato?",
          "answer": "Sì! I piani Pro non hanno limiti di minuti mensili. Gli unici limiti sono tecnici: durata massima dei file 10 ore e dimensione massima dei file 5 GB. Puoi elaborare tutti i file di cui hai bisogno."
        },
        {
          "q": "piano_cambio",
          "question": "Posso cambiare piano in qualsiasi momento?",
          "answer": "Assolutamente sì! Puoi annullare l'abbonamento in qualsiasi momento dalla tua dashboard. Puoi effettuare l'upgrade o il downgrade quando vuoi."
        },
        {
          "q": "metodi di pagamento",
          "question": "Quali metodi di pagamento accettate?",
          "answer": "Accettiamo tutte le principali carte di credito, carte di debito e PayPal per pagamenti sicuri e senza problemi."
        },
        {
          "q": "prova gratuita",
          "question": "Esiste una prova gratuita per Pro?",
          "answer": "Sì! Prova la versione Pro gratuitamente per 7 giorni, senza bisogno di carta di credito. In più, ottieni il 45% di sconto sul primo mese quando ti abboni."
        },
        {
          "q": "conservazione dei file",
          "question": "Per quanto tempo conserverete i miei file?",
          "answer": "Piano gratuito: 30 giorni. Piani Pro: per sempre! Le tue trascrizioni sono sempre disponibili sul tuo account."
        },
        {
          "q": "sicurezza dei dati",
          "question": "E la sicurezza dei dati?",
          "answer": "Siamo certificati SOC 2 e utilizziamo la crittografia a 256 bit. Non utilizziamo mai i tuoi contenuti per addestrare i nostri modelli. I tuoi dati sono tuoi."
        }
      ]
    },
    CTA: {
      "title": "Pronti per un'esperienza illimitata?",
      "subtitle": "Unisciti a oltre 50.000 professionisti che trascrivono senza limiti",
      "button": "Prova NeverCap Gratis →",
      "disclaimer": "Nessuna carta di credito richiesta • Inizia a trascrivere in pochi secondi"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Costruito per",
      heavyUsers: "Utenti abituali",
      whoActuallyNeed: "Chi ha realmente bisogno di illimitato",
      heroSubtitle: "Dai podcaster con anni di arretrati ai ricercatori con centinaia di interviste. Scopri come i professionisti usano NeverCap per superare i limiti di caricamento e i limiti di minuti.",
      podcasters: {
        title: "Podcaster",
        pain: '"Smettetela di scegliere quali episodi meritano le trascrizioni"',
        description: "Carica l'intero archivio dei tuoi podcast in una sola volta. Genera note di presentazione, migliora la SEO e riutilizza i contenuti senza contare i minuti.",
        benefits: {
          benefit1: "Carica tutti gli episodi, non solo 3",
          benefit2: "Genera note di presentazione ottimizzate per SEO",
          benefit3: "Crea archivi ricercabili",
          benefit4: "Riutilizzare i contenuti del blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episodi"
          },
          stat2: {
            number: "200 ore",
            label: "Salvato"
          },
          stat3: {
            number: "3x",
            label: "Traffico SEO"
          }
        }
      },
      journalists: {
        title: "Giornalisti e scrittori",
        pain: '"La pressione delle scadenze incontra le restrizioni di caricamento"',
        description: "Carica in batch tutte le interviste prima della scadenza. Cerca all'istante tra le trascrizioni e non perdere mai una citazione importante.",
        benefits: {
          benefit1: "Caricamento in batch prima delle scadenze",
          benefit2: "Cerca tutte le interviste contemporaneamente",
          benefit3: "Preventivi accurati con timestamp",
          benefit4: "Gestire accenti e lingue"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Interviste/mese"
          },
          stat2: {
            number: "96%",
            label: "Precisione"
          },
          stat3: {
            number: "5 minuti",
            label: "All'ora"
          }
        }
      },
      contentCreators: {
        title: "Creatori di contenuti",
        pain: `"L'accessibilità non dovrebbe essere costosa"`,
        description: "Aggiungi sottotitoli all'intero canale YouTube. Genera sottotitoli in più lingue e migliora all'istante la SEO dei tuoi video.",
        benefits: {
          benefit1: "Aggiungi sottotitoli a tutti i video contemporaneamente",
          benefit2: "249 traduzioni in lingue diverse",
          benefit3: "File SRT pronti per YouTube",
          benefit4: "Migliora il posizionamento SEO dei video"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Video"
          },
          stat2: {
            number: "100+",
            label: "Lingue"
          },
          stat3: {
            number: "249",
            label: "Traduzioni"
          }
        }
      },
      researchers: {
        title: "Ricercatori e accademici",
        pain: '"I dati qualitativi non dovrebbero aspettare in coda"',
        description: "Elabora interi studi di ricerca in una sola volta. Gestisci focus group, interviste e tavole rotonde con una perfetta identificazione del relatore.",
        benefits: {
          benefit1: "Elaborare focus group in blocco",
          benefit2: "Identificazione di 20 parlanti",
          benefit3: "Esportazione nel software di analisi",
          benefit4: "Sicurezza conforme al GDPR"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studio"
          },
          stat2: {
            number: "96%",
            label: "Precisione di gruppo"
          },
          stat3: {
            number: "GDPR",
            label: "Compiacente"
          }
        }
      },
      businessTeams: {
        title: "Team aziendali",
        pain: '"Le registrazioni delle riunioni dovrebbero essere semplici"',
        description: "Registra le riunioni direttamente o carica file audio per una trascrizione immediata. Crea archivi ricercabili da un numero illimitato di conversazioni e non perdere mai più discussioni importanti.",
        benefits: {
          benefit1: "Registrazione audio diretta e trascrizione",
          benefit2: "Registrazioni illimitate delle riunioni",
          benefit3: "Archivio riunioni consultabile",
          benefit4: "Carica file audio all'istante"
        },
        stats: {
          stat1: {
            number: "Vivere",
            label: "Registrazione"
          },
          stat2: {
            number: "Istantaneo",
            label: "Caricamento"
          },
          stat3: {
            number: "20+",
            label: "Altoparlanti"
          }
        }
      },
      educators: {
        title: "Educatori",
        pain: '"I video di YouTube necessitano di una trascrizione immediata"',
        description: "Basta incollare i link di YouTube per ottenere trascrizioni istantanee e sottotitoli generati automaticamente. Trasforma qualsiasi video didattico in contenuti accessibili e ricercabili.",
        benefits: {
          benefit1: "Trascrizione del collegamento diretto di YouTube",
          benefit2: "Genera automaticamente sottotitoli video",
          benefit3: "Trascrivi interi corsi",
          benefit4: "Archivi delle lezioni consultabili"
        },
        stats: {
          stat1: {
            number: "1 clic",
            label: "Incolla su YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Didascalie"
          },
          stat3: {
            number: "100+",
            label: "Lingue"
          }
        }
      },
      quotes: {
        title: "Utenti reali,",
        titleHighlight: "Vera libertà",
        subtitle: "Ascolta i professionisti che si sono liberati dai limiti artificiali",
        testimonials: {
          mike: {
            textBefore: '"Avevo',
            highlight: "3 anni di episodi",
            textAfter: 'seduto senza trascrizione. Otter voleva che ne scegliessi 3. TRE. NeverCap fammi caricare tutti i 150 episodi in un weekend."',
            name: "Mike Rodriguez",
            role: "Conduttore di podcast"
          },
          jessica: {
            textBefore: '"Come giornalista freelance, non posso permettermi Trint',
            highlight: "$ 100/mese",
            textAfter: ', ma non riesco a lavorare con il limite di 10 file al mese di Otter. NeverCap mi ha salvato la carriera."',
            name: "Jessica Park",
            role: "Giornalista freelance"
          },
          sarah: {
            textBefore: '"Il nostro team di ricerca aveva',
            highlight: "200 ore",
            textAfter: `delle registrazioni dei focus group. Abbiamo elaborato tutto nell'arco di un weekend, invece di razionare i minuti mensili."`,
            name: "Dott.ssa Sarah Chen",
            role: "Ricercatore capo"
          },
          carlos: {
            textBefore: '"Realizzo contenuti didattici in spagnolo. NeverCap trascrive perfettamente e',
            highlight: "si traduce in inglese",
            textAfter: 'per una portata più ampia. Nessun limite, solo crescita."',
            name: "Carlos Martinez",
            role: "Insegnante di YouTube"
          }
        }
      },
      industries: {
        title: "Affidabile in tutto il mondo",
        titleHighlight: "Industrie",
        subtitle: "I professionisti di tutto il mondo stanno passando a un'esperienza davvero illimitata",
        list: {
          media: "Media e editoria",
          education: "Istruzione",
          healthcare: "Assistenza sanitaria",
          technology: "Tecnologia",
          finance: "Finanza",
          legal: "Legal"
        }
      },
      cta: {
        title: "Anche il tuo caso d'uso ha bisogno di un numero illimitato",
        subtitle: "Unisciti a oltre 50.000 professionisti che hanno smesso di contare i minuti e hanno iniziato a creare",
        button: "Inizia il tuo viaggio illimitato →"
      }
    },
    Podcasters: {
      badge: "🎙️ Progettato per i podcaster",
      heroTitle: "Trascrivi il tuo",
      heroTitleHighlight: "Archivio podcast completo",
      heroSubtitle: "Carica l'intero catalogo. Crea note di presentazione per ogni episodio. Non dovrai più scegliere quali episodi trascrivere. Elabora 50 episodi contemporaneamente, un numero illimitato di volte al mese.",
      ctaPrimary: "Inizia a trascrivere gratuitamente",
      ctaSecondary: "Guarda come funziona",
      trustBadge1: "🎙️ Oltre 10.000 podcaster",
      trustBadge2: "∞ Episodi illimitati",
      trustBadge3: "📝 Trascrizioni SEO-Ready",
      stats: {
        stat1: {
          number: "∞",
          label: "Episodi/mese"
        },
        stat2: {
          number: "50",
          label: "Caricamento in batch"
        },
        stat3: {
          number: "10 ore",
          label: "Lunghezza massima dell'episodio"
        },
        stat4: {
          number: "96%",
          label: "Precisione"
        }
      },
      problemTitle: "IL",
      problemTitleHighlight: "Problema di trascrizione del podcast",
      problemSubtitle: 'Altri servizi ti fanno scegliere quali episodi "vale la pena" di trascrivere',
      problems: {
        problem1: {
          title: "Limiti di caricamento Elimina archivi",
          description: "Otter ti offre 3 importazioni gratuite a vita, 10 al mese con la versione Pro. Come si trascrivono 3 anni di episodi?"
        },
        problem2: {
          title: "Opportunità SEO mancanti",
          description: "Ogni episodio non trascritto è traffico SEO perso. Ma Descript ti limita a 30 ore al mese al massimo."
        },
        problem3: {
          title: "I costi esplodono con la crescita",
          description: "Man mano che il tuo podcast cresce, i costi di trascrizione salgono alle stelle. Le commissioni aggiuntive di 2 dollari l'ora rendono impossibile la scalabilità."
        }
      },
      solutionTitle: "IL",
      solutionTitleHighlight: "NeverCap Soluzione",
      solutionDescription: "Trascrizione davvero illimitata. Carica l'intero archivio. Trascrivi ogni nuovo episodio. Genera note di presentazione su larga scala. Nessun limite, nessun limite, solo crescita.",
      workflowTitle: "Il tuo flusso di lavoro per podcast,",
      workflowTitleHighlight: "Semplificato",
      workflowSubtitle: "Dalla registrazione alle note dello spettacolo ottimizzate per SEO in pochi minuti",
      workflow: {
        step1: {
          title: "Carica episodi",
          description: "Rilascia 50 episodi contemporaneamente. MP3, MP4, WAV: li gestiamo tutti."
        },
        step2: {
          title: "L'intelligenza artificiale trascrive",
          description: "Precisione del 96% nell'identificazione dell'interlocutore. Perfetto per le interviste."
        },
        step3: {
          title: "Formattazione intelligente",
          description: "L'intelligenza artificiale aggiunge automaticamente paragrafi, frasi e punteggiatura."
        },
        step4: {
          title: "Pubblica e classifica",
          description: "Esporta sul tuo sito web. Guarda crescere il tuo traffico SEO."
        }
      },
      featuresTitle: "Caratteristiche Podcaster",
      featuresTitleHighlight: "In realtà ho bisogno",
      featuresSubtitle: "Creato da podcaster, per podcaster",
      features: {
        feature1: {
          title: "Rilevamento multi-altoparlante",
          description: "Identifica ed etichetta automaticamente fino a 20 relatori. Perfetto per dibattiti, interviste e programmi co-condotti."
        },
        feature2: {
          title: "Capitoli con timestamp",
          description: "Genera timestamp cliccabili per le descrizioni di YouTube. Permetti agli ascoltatori di passare immediatamente ai loro segmenti preferiti."
        },
        feature3: {
          title: "Formattazione intelligente",
          description: "Aggiunge automaticamente paragrafi, frasi e punteggiatura. Ottieni trascrizioni pulite e leggibili. Risparmia ore di post-produzione."
        },
        feature4: {
          title: "Ottimizzazione SEO",
          description: "Trascrizioni formattate per i motori di ricerca. Aumenta la visibilità del tuo podcast e raggiungi un nuovo pubblico."
        },
        feature5: {
          title: "Oltre 100 lingue",
          description: "Trascrivi in qualsiasi lingua. Traduci in oltre 249 lingue. Raggiungi un pubblico globale senza sforzo."
        },
        feature6: {
          title: "Elaborazione batch",
          description: "Carica 50 episodi prima di andare a letto. Alzati per completare le trascrizioni. Elabora l'intero archivio durante la notte."
        }
      },
      testimonialsTitle: "Podcaster che hanno realizzato",
      testimonialsTitleHighlight: "L'interruttore",
      testimonialsSubtitle: "Storie vere di veri podcaster",
      testimonials: {
        mike: {
          text: `"Faccio podcast da 3 anni e trascrivevo tutto a mano come un idiota. Ho caricato 6 episodi contemporaneamente e ho separato perfettamente me e il mio co-conduttore. L'episodio del bar che pensavo fosse rovinato? Trascrizione cristallina. Non tornerò mai più a trascrivere queste cose da solo."`,
          name: "Mike Rodriguez",
          role: 'Conduttore del podcast "The Daily Grind"'
        },
        sarah: {
          text: '"Otter mi limitava a 10 importazioni di file al mese. Ho 150 episodi in arretrato. NeverCap lasciami caricare tutto in 3 lotti. Il mio traffico organico è aumentato del 300% da quando ho aggiunto le trascrizioni ai vecchi episodi. Questo si ripaga letteralmente da solo."',
          name: "Sarah Chen",
          role: 'Creatore di "Tech Talks Today"'
        }
      },
      comparisonTitle: "Perché i podcaster scelgono",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Scopri come ci confrontiamo con la concorrenza",
      comparison: {
        headers: {
          feature: "Caratteristica",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Creatore di descrizioni"
        },
        rows: {
          monthlyLimit: {
            feature: "Limite mensile di episodi",
            nevercap: "Illimitato",
            otter: "~13 episodi (1200 min)",
            descript: "~30 episodi (30 ore)"
          },
          uploadLimit: {
            feature: "Limite di caricamento file",
            nevercap: "Illimitato",
            otter: "10 al mese",
            descript: "1 alla volta"
          },
          batchProcessing: {
            feature: "Elaborazione batch",
            nevercap: "50 file",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Lunghezza massima dell'episodio",
            nevercap: "10 ore",
            otter: "90 minuti",
            descript: "Illimitato"
          },
          speakerDetection: {
            feature: "Rilevamento dell'altoparlante",
            nevercap: "20 relatori",
            otter: "16 altoparlanti",
            descript: "10 altoparlanti"
          },
          smartFormatting: {
            feature: "Formattazione intelligente",
            nevercap: "✓ Perfetto",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Prezzo",
            nevercap: "$ 17,99/mese",
            otter: "$ 16,99/mese",
            descript: "$30/mese"
          }
        }
      },
      ctaTitle: "Inizia a trascrivere ogni episodio",
      ctaSubtitle: "Unisciti a oltre 10.000 podcaster che non si preoccupano mai dei limiti",
      ctaButton: "Carica i tuoi primi 50 episodi gratis →",
      ctaDisclaimer: "Nessuna carta di credito richiesta • Elabora episodi illimitati • Annulla in qualsiasi momento"
    },
    Journalists: {
      hero: {
        badge: "📰 Per giornalisti e scrittori",
        title: "Trascrivi ogni intervista.",
        titleHighlight: "Non perdere mai una citazione.",
        subtitle: "Smetti di scegliere quali interviste meritano la trascrizione. Carica tutte le registrazioni in una volta sola, cerca all'istante tra tutti i contenuti e rispetta le scadenze senza l'ansia del caricamento.",
        ctaPrimary: "Avvia caricamenti illimitati →",
        ctaSecondary: "Guarda come funziona",
        stats: {
          uploads: {
            number: "∞",
            label: "Caricamento file"
          },
          accuracy: {
            number: "96%",
            label: "Precisione"
          },
          speed: {
            number: "5 minuti",
            label: "All'ora"
          }
        },
        dashboard: {
          title: "Coda per i colloqui",
          status: "• Tutta l'elaborazione",
          interviews: {
            cityCouncil: {
              title: "Riunione del Consiglio Comunale",
              duration: "2h 15min • Caricamento in corso...",
              action: "Elaborazione"
            },
            expertInterview: {
              title: "Intervista all'esperto - Dott. Chen",
              duration: "45 min • Trascrizione in corso...",
              action: "Fatto al 96%"
            },
            pressConference: {
              title: "Conferenza stampa",
              duration: "1h 30min • Pronto",
              action: "Visualizza →"
            },
            phoneInterview: {
              title: "Intervista telefonica - Fonte",
              duration: "35 min • Pronto",
              action: "Visualizza →"
            }
          }
        }
      },
      problem: {
        title: "IL",
        titleHighlight: "Problema di trascrizione del giornalista",
        subtitle: 'Altri servizi ti fanno scegliere quali interviste "vale la pena" trascrivere',
        problems: {
          uploadLimits: {
            title: "Limiti di caricamento uccidono le indagini",
            description: "Otter Pro ti offre 10 importazioni di file al mese. Come si trascrivono 3 settimane di interviste investigative?"
          },
          missingQuotes: {
            title: "Citazioni cruciali mancanti",
            description: "Ogni intervista non trascritta potrebbe contenere la citazione chiave dell'articolo. Ma Trint ti limita a 50 ore al mese al massimo."
          },
          costExplosion: {
            title: "I costi esplodono con le scadenze",
            description: "Man mano che le indagini si approfondiscono, i costi di trascrizione salgono alle stelle. Costi aggiuntivi di 100 dollari al mese rendono impossibile diffondere notizie dell'ultima ora."
          }
        },
        solution: {
          title: "IL",
          titleHighlight: "NeverCap Soluzione",
          description: "Trascrizione illimitata. Carica l'intera indagine. Trascrivi ogni intervista. Cerca tutte le citazioni all'istante. Senza limiti, senza limiti, solo giornalismo."
        }
      },
      solution: {
        title: "Finalmente,",
        titleHighlight: "Vera libertà",
        titleSuffix: "per i giornalisti",
        subtitle: "Carica tutto. Trascrivi tutto. Cerca tutto.",
        solutions: {
          unlimitedUploads: {
            label: "Caricamenti illimitati",
            title: "Carica in batch l'intera indagine",
            description: "Non dovrai più scegliere quali interviste trascrivere. Carica 50 file contemporaneamente. Elabora mesi di registrazioni durante la notte. L'intera indagine, trascritta.",
            points: {
              simultaneousUpload: "Carica 50 file contemporaneamente",
              noLimits: "Nessun limite di caricamento mensile",
              processWhileWrite: "Elabora mentre scrivi",
              longRecordings: "Registrazioni supportate da 10 ore"
            },
            visual: {
              number: "50",
              label: "File contemporaneamente"
            }
          },
          instantSearch: {
            label: "Ricerca istantanea",
            title: "Trova qualsiasi preventivo in pochi secondi",
            description: "Cerca all'istante in tutte le tue trascrizioni. Trova la citazione perfetta di tre mesi fa. Non perdere mai più frasi importanti nei tuoi appunti.",
            points: {
              searchAll: "Cerca in tutte le interviste",
              wordTimestamps: "Timestamp a livello di parola",
              jumpToMoments: "Vai ai momenti esatti",
              exportCitations: "Esporta con citazioni"
            },
            searchDemo: {
              placeholder: "dichiarazione di politica climatica",
              resultsText: "Presente in 4 interviste:",
              results: {
                mayorInterview: '"...la nostra politica sul clima si trasformerà..."',
                expertPanel: '"...la dichiarazione politica mostra chiaramente..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Precisione professionale",
            title: "Precisione del 96% che puoi citare",
            description: "Ottieni trascrizioni così accurate da poterle citare direttamente. Gestisce accenti, termini tecnici e conversazioni rapide. Formattazione perfetta e realmente leggibile.",
            points: {
              accuracyGuarantee: "Garanzia di precisione del 96%",
              handlesAccents: "Gestisce accenti e dialetti",
              smartPunctuation: "Punteggiatura e paragrafi intelligenti",
              speakerIdentification: "Identificazione dell'oratore"
            },
            visual: {
              accuracy: "96%",
              label: "Tasso di precisione",
              transcript: {
                speaker1: `"L'indagine ha rivelato discrepanze significative nei rendiconti finanziari."`,
                speaker2: '"Puoi spiegarci meglio queste discrepanze specifiche?"'
              }
            }
          }
        }
      },
      features: {
        title: "Tutto un",
        titleHighlight: "Bisogni del giornalista",
        subtitle: "Strumenti professionali che rispettano il tuo flusso di lavoro",
        featuresList: {
          languages: {
            title: "Oltre 100 lingue",
            description: "Interviste provenienti da tutto il mondo in 12 lingue principali con una precisione del 96%."
          },
          exportFormats: {
            title: "Formati di esportazione",
            description: "Word, PDF, SRT, TXT. Compatibile con qualsiasi flusso di lavoro."
          },
          sourceProtection: {
            title: "Protezione della fonte",
            description: "Crittografia di livello bancario. Le tue fonti rimangono riservate."
          },
          timestamps: {
            title: "Timestamp",
            description: "Clicca su una citazione per passare direttamente al momento audio esatto."
          },
          teamSharing: {
            title: "Condivisione di squadra",
            description: "Collabora con gli editor. Condividi le trascrizioni in modo sicuro."
          },
          mobileReady: {
            title: "Pronto per dispositivi mobili",
            description: "Carica dal telefono. Rivedi le trascrizioni ovunque."
          },
          smartFormatting: {
            title: "Formattazione intelligente",
            description: "Paragrafi e punteggiatura automatici per trascrizioni leggibili."
          },
          batchProcessing: {
            title: "Elaborazione batch",
            description: "Carica 50 file contemporaneamente. Elaborali durante la notte, mentre dormi."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Avevo 3 anni di interviste non trascritte a causa dei limiti di caricamento. NeverCap mi ha permesso di elaborare tutto in un weekend. Una svolta.",
          name: "Jessica Park",
          role: "Giornalista freelance, ex utente di Otter"
        }
      },
      cta: {
        title: "Inizia a trascrivere",
        titleHighlight: "Senza limiti",
        subtitle: "Unisciti a migliaia di giornalisti che hanno smesso di contare i caricamenti e hanno iniziato a concentrarsi sulle storie",
        ctaPrimary: "Prova gratuita illimitata →",
        ctaSecondary: "Visualizza i prezzi"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Per i creatori di contenuti",
        title: "Didascalia Il tuo",
        titleHighlight: "Intero canale",
        titleSuffix: "Senza contare i minuti",
        subtitle: "Smetti di scegliere quali video meritano i sottotitoli. Elabora l'intera libreria di YouTube, genera sottotitoli in oltre 100 lingue e scarica i video direttamente da qualsiasi piattaforma. Nessun limite mensile, nessuna restrizione di caricamento: solo pura libertà creativa.",
        ctaPrimary: "Avvia sottotitoli illimitati →",
        ctaSecondary: "Guarda come funziona",
        stats: {
          videos: {
            number: "∞",
            label: "Video/mese"
          },
          languages: {
            number: "100+",
            label: "Lingue"
          },
          accuracy: {
            number: "96%",
            label: "Precisione"
          },
          platforms: {
            number: "10+",
            label: "Piattaforme"
          }
        }
      },
      platforms: {
        title: "Recupera e trascrivi da qualsiasi piattaforma",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Google Drive",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "Tutto ciò di cui hai bisogno",
        titleHighlight: "Contenuto della scala",
        subtitle: "Strumenti professionali senza limiti professionali",
        oneClickImport: {
          label: "Importazione con un clic",
          title: "Incolla il collegamento.",
          titleHighlight: "Ottieni la trascrizione.",
          description: "Niente più download e ricaricamenti. Basta incollare il link di YouTube, TikTok o Instagram e ottenere trascrizioni istantanee. Gestisci l'intero backlog del tuo canale in un solo weekend.",
          points: {
            directYoutube: "Trascrizione del collegamento diretto di YouTube",
            multiplePlatforms: "Recupera da oltre 10 piattaforme",
            batchPlaylists: "Elaborazione batch di intere playlist",
            autoSync: "Sincronizzazione automatica con i tuoi canali"
          },
          demo: {
            instruction: "Incolla l'URL del tuo video:",
            url: "https://youtube.com/watch?v=...",
            status: "Recupero e trascrizione in corso..."
          }
        },
        globalReach: {
          label: "Portata globale",
          title: "Oltre 100 lingue.",
          titleHighlight: "Limiti zero.",
          description: "Raggiungi un pubblico globale con la traduzione automatica in oltre 100 lingue. Genera sottotitoli in più lingue contemporaneamente. Nessun costo aggiuntivo, nessun limite mensile per le traduzioni.",
          points: {
            highAccuracy: "Precisione del 96% in 12 lingue principali",
            unlimitedTranslations: "Traduzioni illimitate incluse",
            multicultural: "Perfetto per contenuti multiculturali",
            autoDetect: "Rilevamento automatico della lingua di origine"
          },
          visual: {
            number: "100+",
            title: "Lingue supportate",
            subtitle: "Traduci una volta, raggiungi tutti"
          }
        },
        flexibleExport: {
          label: "Esportazione flessibile",
          title: "Ogni formato",
          titleHighlight: "Hai bisogno",
          description: "Esporta nel formato più adatto al tuo flusso di lavoro. Dai file SRT per YouTube ai VTT per i lettori web, fino ai documenti modificabili per gli script. Esportazioni illimitate, incluse in ogni piano.",
          points: {
            videoFormats: "SRT e VTT per piattaforme video",
            editingFormats: "DOCX e PDF per la modifica",
            dataAnalysis: "CSV per l'analisi dei dati",
            simpleScripts: "TXT per script semplici"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "TXT",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "Da Carica a",
        titleHighlight: "Pubblicato",
        titleSuffix: "in pochi minuti",
        subtitle: "Il modo più veloce per sottotitolare l'intera libreria di contenuti",
        steps: {
          pasteLinks: {
            title: "Incolla i link",
            description: "Inserisci un link a YouTube, TikTok o a qualsiasi altro video. Oppure carica direttamente i file."
          },
          autoTranscribe: {
            title: "Trascrizione automatica",
            description: "L'intelligenza artificiale elabora con una precisione del 96%. Gestisce accenti e più parlanti."
          },
          editTranslate: {
            title: "Modifica e traduci",
            description: "Perfeziona i tuoi sottotitoli. Traduci all'istante in oltre 100 lingue."
          },
          exportPublish: {
            title: "Esporta e pubblica",
            description: "Scaricalo in qualsiasi formato. Caricalo sulla tua piattaforma. Fatto!"
          }
        }
      },
      testimonials: {
        title: "I creatori sono",
        titleHighlight: "Cambio giornaliero",
        subtitle: "Dai piani limitati alla libertà illimitata",
        carlos: {
          textBefore: "Realizzo contenuti didattici in spagnolo. NeverCap trascrive perfettamente e",
          textAfter: "Per una portata più ampia. Nessun limite, solo crescita. Le visualizzazioni del mio canale sono triplicate dopo aver aggiunto i sottotitoli multilingue.",
          highlight: "si traduce in inglese",
          name: "Carlos Martinez",
          role: "YouTube Educator • 250.000 iscritti"
        },
        sarah: {
          textBefore: "Descrittore richiesto $ 30/mese per",
          textAfter: "Ho più di 500 video in arretrato. NeverCap Lasciami elaborare tutto in un weekend. L'incremento SEO dovuto ai sottotitoli si è ripagato nel primo mese.",
          highlight: "30 ore",
          name: "Sarah Lee",
          role: "Vlogger di lifestyle • 180.000 iscritti"
        },
        jake: {
          textBefore: "IL",
          textAfter: "Questa funzionalità è rivoluzionaria. Non scarico più nulla. Incollo, trascrivo, fatto. Elaborare le clip dei miei podcast per TikTok non è mai stato così facile.",
          highlight: "recupero diretto da YouTube",
          name: "Jake Wilson",
          role: "Host di podcast • Creatore tra i migliori 1%"
        },
        yuki: {
          textBefore: "Creo contenuti in 5 lingue. Altri servizi sono a pagamento.",
          textAfter: ". NeverCap mi offre traduzioni illimitate. Il mio pubblico internazionale è cresciuto del 400% da quando ho iniziato a usare sottotitoli nativi.",
          highlight: "per traduzione",
          name: "Yuki Tanaka",
          role: "Creatore di giochi • 500.000 iscritti"
        }
      },
      cta: {
        title: "Tutto il tuo canale. Sottotitolato. Oggi.",
        subtitle: "Unisciti a oltre 50.000 creatori che hanno smesso di contare i minuti e hanno iniziato a creare",
        button: "Avvia sottotitoli illimitati →"
      }
    },
    Researchers: {
      heroBadge: "Costruito per l'eccellenza accademica",
      heroTitle1: "Trascrivi ogni intervista.",
      heroTitle2: "Analizza tutti i tuoi dati.",
      heroSubtitle: "Smetti di scegliere quali focus group trascrivere. Elabora tutti i tuoi dati qualitativi con una precisione del 96% e un'identificazione impeccabile dell'oratore, anche con 20 partecipanti che parlano uno sopra l'altro.",
      heroCtaPrimary: "Provalo gratis - Nessuna carta di credito",
      heroCtaSecondary: "Guarda come funziona",
      statsInterviewHours: "Orari del colloquio",
      statsAccuracy: "Precisione",
      statsSpeakersId: "ID degli altoparlanti",
      statsCompliant: "Compiacente",
      problemTitle: "Il problema della trascrizione della ricerca",
      problemSubtitle: 'Altri servizi ti fanno scegliere quali dati "vale la pena" di trascrivere',
      problemCard1Title: "I limiti di caricamento uccidono gli studi",
      problemCard1Desc: "Otter ti offre 3 import a vita. Come si trascrivono 200 ore di focus group?",
      problemCard2Title: "Dati critici mancanti",
      problemCard2Desc: "Ogni intervista non trascritta potrebbe contenere spunti rivoluzionari. Ma Rev addebita un minimo di 2 dollari al minuto.",
      problemCard3Title: "I soldi della sovvenzione scompaiono",
      problemCard3Desc: "Con l'aumentare del set di dati, i costi di trascrizione aumentano vertiginosamente. 500 $ per focus group rendono impossibile la scalabilità.",
      solutionTitle: "La soluzione NeverCap",
      solutionDesc: "Trascrizione illimitata. Carica l'intero studio. Trascrivi ogni intervista. Analizza tutti i tuoi dati. Nessun limite, nessun limite, solo ricerca.",
      feature1Label: "Nessun limite",
      feature1Title: "Elabora l'intero studio in una volta sola",
      feature1Desc: 'Carica tutte le 200 ore di interviste stasera. Svegliati e trova trascrizioni complete e consultabili. Nessun limite mensile, nessun limite per file, nessuna sciocchezza sul "fair use".',
      feature1Point1: "Caricamento in batch di 50 file contemporaneamente",
      feature1Point2: "Elaborare completamente gli studi longitudinali",
      feature1Point3: "Nessun limite di archiviazione per le trascrizioni",
      feature1Point4: "Esporta in NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Ore illimitate",
      feature1Visual2: "Stesso prezzo sia per 10 che per 10.000 ore",
      feature2Label: "IA intelligente",
      feature2Title: "Gruppi di discussione sulle unghie ogni volta",
      feature2Desc: "La nostra intelligenza artificiale traccia fino a 20 interlocutori, anche quando parlano uno sopra l'altro, si interrompono o intervengono tutti contemporaneamente. Ogni voce viene catturata ed etichettata correttamente.",
      feature2Point1: "Identificazione di 20 parlanti",
      feature2Point2: "Gestisce diafonia e interruzioni",
      feature2Point3: "Etichette degli altoparlanti che puoi rinominare",
      feature2Point4: "Marca temporale per ogni parola",
      conversationParticipant1: "Partecipante 1",
      conversationText1: "Il principale ostacolo che dobbiamo affrontare è sicuramente il costo delle cure...",
      conversationParticipant2: "Partecipante 2",
      conversationText2: "Assolutamente sì, ma aggiungerei che l'accesso è...",
      conversationParticipant3: "Partecipante 3",
      conversationText3: "—scusate l'interruzione, ma anche i trasporti sono un problema enorme.",
      conversationText4: "Sì! È esattamente quello che stavo per dire.",
      conversationParticipant4: "Partecipante 4",
      conversationText5: "Nelle zone rurali, sono tutti e tre i fattori: costo, accesso e trasporto.",
      feature3Label: "Precisione",
      feature3Title: "Precisione del 96% che regge",
      feature3Desc: "Gestisce il gergo tecnico, gli accenti forti e la terminologia specifica del settore come un professionista. Abbastanza accurato per la pubblicazione, la revisione paritaria e la commissione di tesi.",
      feature3Point1: "Terminologia medica e scientifica",
      feature3Point2: "Oltre 100 lingue e dialetti",
      feature3Point3: "Modalità di lettura letterale e pulita",
      feature3Point4: "Modifica ed esporta in qualsiasi formato",
      feature3Visual1: "Precisione di livello di ricerca",
      feature3Visual2: "Scelto da oltre 50.000 ricercatori",
      feature4Label: "Sicurezza",
      feature4Title: "Sicurezza IRB-Ready",
      feature4Desc: "I tuoi dati di ricerca sensibili sono protetti con sistemi di sicurezza di livello aziendale. Conformità al GDPR, opzioni compatibili con HIPAA e percorsi di controllo completi per i requisiti IRB.",
      feature4Point1: "Crittografia end-to-end",
      feature4Point2: "Conforme al GDPR e al CCPA",
      feature4Point3: "Criteri di eliminazione automatica",
      feature4Point4: "Collaborazione di squadra sicura",
      useCasesTitle: "Perfetto per ogni metodo di ricerca",
      useCasesSubtitle: "Dall'etnografia alla sperimentazione clinica",
      useCase1Title: "Gruppi focali",
      useCase1Desc: "Gestisci da 8 a 20 partecipanti con discorsi sovrapposti. Perfetta identificazione dell'oratore anche durante discussioni accese. Esportazione diretta verso software di analisi qualitativa.",
      useCase2Title: "Interviste approfondite",
      useCase2Desc: "Elabora centinaia di interviste individuali contemporaneamente. Mantieni la coerenza nell'intero set di dati. Cerca all'istante in tutte le trascrizioni.",
      useCase3Title: "Ricerca clinica",
      useCase3Desc: "Opzioni conformi all'HIPAA per le interviste ai pazienti. Trascrizione accurata della terminologia medica. Gestione sicura dei dati sanitari sensibili.",
      useCase4Title: "Studi etnografici",
      useCase4Desc: "Registrazioni sul campo in ambienti naturali. Gestisce il rumore di fondo e più interlocutori. Supporta oltre 100 lingue e dialetti.",
      useCase5Title: "Progetti di storia orale",
      useCase5Desc: "Conserva interi archivi senza limiti. Crea record storici consultabili. Perfetto per studi longitudinali e generazionali.",
      useCase6Title: "Ricerca di tesi",
      useCase6Desc: "Prezzi convenienti per gli studenti con funzionalità complete. Elabora l'intero set di dati a prezzi accessibili. Rispetta le scadenze più strette con l'elaborazione in batch.",
      testimonialTitle: "Scelto dai principali ricercatori",
      testimonialText: "Il nostro team di ricerca disponeva di 200 ore di registrazioni di focus group dal nostro studio sulla salute della comunità. Altri servizi volevano che scegliessimo quali sessioni trascrivere a causa del costo. NeverCap ci ha permesso di elaborare tutto in un weekend. L'identificazione di 20 interlocutori ha funzionato davvero, anche durante le nostre discussioni più confuse, in cui tutti parlavano contemporaneamente. Questo strumento ha cambiato radicalmente il nostro modo di gestire i dati qualitativi.",
      testimonialAuthorName: "Dott.ssa Sarah Chen",
      testimonialAuthorRole: "Ricercatore capo, Istituto di sanità pubblica",
      ctaTitle: "Smetti di scegliere quali dati analizzare",
      ctaSubtitle: "Unisciti a oltre 50.000 ricercatori che trascrivono tutto",
      ctaButton: "Prova NeverCap Gratis"
    },
    BusinessTeams: {
      heroBadge: "Per i team aziendali",
      heroTitle1: "Registrazione della riunione effettuata",
      heroTitle2: "Senza sforzo",
      heroSubtitle: "Registra le riunioni direttamente nel tuo browser o carica file audio all'istante. Crea archivi ricercabili da un numero illimitato di conversazioni. Non perdere mai più discussioni importanti con una trascrizione davvero illimitata.",
      heroCtaPrimary: "Inizia subito a registrare →",
      heroCtaSecondary: "Guarda come funziona",
      recordingStatus: "Registrazione...",
      statsMeetingMinutes: "Verbale della riunione",
      statsLiveRecording: "Registrazione dal vivo",
      statsSpeakerID: "ID dell'altoparlante",
      statsInstantUpload: "Caricamento e elaborazione immediati",
      featuresTitle: "Tutto ciò di cui i team hanno bisogno per acquisire conoscenze",
      featuresSubtitle: "Dalla registrazione in diretta ai caricamenti istantanei, abbiamo eliminato ogni punto di attrito",
      feature1Title: "Registra direttamente nel tuo browser",
      feature1Desc: "Nessun download, nessun plugin. Inizia a registrare all'istante con un clic. Qualità audio perfetta, rilevamento automatico dell'oratore e trascrizione in tempo reale mentre parli.",
      feature1Benefit1: "Avvio della registrazione con un clic",
      feature1Benefit2: "Nessuna installazione di software",
      feature1Benefit3: "Funziona su qualsiasi dispositivo",
      feature1Benefit4: "Trascrizione in tempo reale",
      feature1Visual1: "Clicca e registra",
      feature1Visual2: "Nessuna configurazione richiesta",
      feature2Title: "Carica qualsiasi file audio all'istante",
      feature2Desc: "Hai registrazioni da Zoom, Teams o dal tuo telefono? Caricale all'istante. Supporta tutti i principali formati audio e video. Elabora più file contemporaneamente senza tempi di attesa.",
      feature2Benefit1: "Supporta: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Capacità di caricamento in batch",
      feature2Benefit3: "File da 10 ore supportati",
      feature2Benefit4: "Elabora mentre lavori",
      feature2Visual1: "Trascina e rilascia i file",
      feature3Title: "Progettato per la collaborazione di squadra",
      feature3Desc: "Condividi le trascrizioni con il tuo team all'istante. Ascolta le registrazioni insieme, esporta le trascrizioni in più formati e assicurati che tutti rimangano aggiornati grazie agli archivi delle riunioni consultabili.",
      feature3Benefit1: "Condividi le trascrizioni con chiunque",
      feature3Benefit2: "Ascolta le registrazioni originali",
      feature3Benefit3: "Esportare le trascrizioni in più formati",
      feature3Benefit4: "Archivi ricercabili a livello di team",
      feature3Visual1: "Membri del team",
      feature3Visual2: "Collaborazione illimitata",
      feature4Title: "Trova qualsiasi conversazione all'istante",
      feature4Desc: "Cerca in tutte le tue riunioni contemporaneamente. Trova quella decisione cruciale dell'ultimo trimestre o quella richiesta del cliente di mesi fa. La ricerca basata sull'intelligenza artificiale comprende il contesto, non solo le parole chiave.",
      feature4Benefit1: "Cerca tutte le riunioni contemporaneamente",
      feature4Benefit2: "L'intelligenza artificiale comprende il contesto",
      feature4Benefit3: "Filtra per relatore o data",
      feature4SearchPlaceholder: "🔍 Cerca: 'Obiettivi di fatturato del quarto trimestre'",
      feature4SearchResults: "Trovato in 3 incontri:",
      feature4Meeting1: "Pianificazione delle vendite - 15 ottobre",
      feature4Meeting1Text: '"...obiettivi per il quarto trimestre fissati a 2 milioni di dollari..."',
      feature4Meeting2: "Riunione del Consiglio di Amministrazione - 20 ottobre",
      feature4Meeting2Text: '"...proiezioni sui ricavi del quarto trimestre..."',
      workflowTitle: "Dalla registrazione alle informazioni fruibili",
      workflowSubtitle: "Un flusso di lavoro fluido che cattura ogni momento importante",
      workflowStep1Title: "Registra o carica",
      workflowStep1Desc: "Inizia a registrare in diretta o carica file audio esistenti",
      workflowStep2Title: "Trascrizione automatica",
      workflowStep2Desc: "L'intelligenza artificiale trascrive con una precisione del 96% in pochi minuti",
      workflowStep3Title: "Collaborare",
      workflowStep3Desc: "Condividi, commenta ed estrai elementi di azione",
      workflowStep4Title: "Cerca e analizza",
      workflowStep4Desc: "Trova approfondimenti in tutte le tue riunioni",
      testimonialsTitle: "Le squadre amano NeverCap",
      testimonialsSubtitle: "Scopri come le aziende trasformano la loro cultura delle riunioni",
      testimonial1Text: `"Siamo passati dal trascurare dettagli cruciali all'avere un archivio consultabile di ogni conversazione. Grazie alla funzione di registrazione diretta, non dimentichiamo mai di registrare le discussioni importanti."`,
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Responsabile di prodotto, TechCorp",
      testimonial2Text: `"Otter ci ha limitato a 10 caricamenti di file al mese. Ora carichiamo tutte le chiamate dei nostri clienti all'istante. Una svolta per i follow-up del nostro team di vendita."`,
      testimonial2AuthorName: "Sara Rodriguez",
      testimonial2AuthorRole: "Direttore vendite, ConsultPro",
      testimonial3Text: '"La possibilità di effettuare ricerche su mesi di riunioni ci ha salvato durante la nostra verifica. Abbiamo trovato ogni decisione e approvazione in pochi secondi."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Direttore operativo, FinanceHub",
      ctaTitle: "Smetti di perdere conversazioni importanti",
      ctaSubtitle: "Unisciti a migliaia di team registrando ogni riunione con trascrizione illimitata",
      ctaButton: "Inizia a registrare gratuitamente →"
    },
    Educators: {
      heroBadge: "Per educatori e insegnanti",
      heroTitle1: "Trasforma qualsiasi video educativo in",
      heroTitle2: "Contenuto accessibile",
      heroSubtitle: "Basta incollare i link di YouTube per ottenere trascrizioni istantanee con sottotitoli generati automaticamente. Trasforma lezioni, tutorial e video didattici in contenuti ricercabili e accessibili da cui ogni studente può imparare.",
      heroCtaPrimary: "Provalo gratis - Nessuna carta di credito",
      heroCtaSecondary: "Guarda la demo",
      stats1Number: "1 clic",
      stats1Label: "Trascrizione di YouTube",
      stats2Number: "100+",
      stats2Label: "Lingue supportate",
      stats3Number: "∞",
      stats3Label: "Video illimitati",
      stats4Number: "96%",
      stats4Label: "Tasso di precisione",
      featuresTitle: "Tutto ciò di cui gli educatori hanno bisogno per la trascrizione video",
      featuresSubtitle: "Dalle lezioni su YouTube alle lezioni registrate, rendi tutti i tuoi contenuti accessibili",
      feature1Title: "Link istantanei a YouTube e piattaforme",
      feature1Desc: "Basta incollare qualsiasi link video e ottenere trascrizioni istantanee. Funziona con YouTube, Vimeo, Facebook, Twitter, TikTok, Instagram, Dropbox, Google Drive e altro ancora. Nessun download, nessuna attesa.",
      feature1Point1: "Trascrizione tramite collegamento diretto - nessun download necessario",
      feature1Point2: "Supporto per tutte le principali piattaforme",
      feature1Point3: "Elabora intere playlist contemporaneamente",
      feature1Point4: "Funziona con video privati (con autorizzazione)",
      feature2Title: "Generazione automatica di sottotitoli e didascalie",
      feature2Desc: "Crea all'istante sottotitoli accurati per tutti i tuoi video didattici. Rendi i contenuti accessibili agli studenti con problemi di udito, ai non madrelingua o a coloro che preferiscono leggere.",
      feature2Point1: "Formati di esportazione SRT, VTT e TXT",
      feature2Point2: "Timestamp a livello di parola per una sincronizzazione perfetta",
      feature2Point3: "Modifica e personalizza facilmente le didascalie",
      feature2Point4: "Carica direttamente su YouTube",
      feature2Visual1: "Traduzioni linguistiche",
      feature2Visual2: "Rendi i tuoi contenuti accessibili a livello globale",
      feature3Title: "Organizza per corsi e categorie",
      feature3Desc: "Crea cartelle per organizzare le tue trascrizioni per corso, materia o semestre. Mantieni tutti i tuoi contenuti didattici ordinati e facilmente consultabili. Crea una libreria completa di materiali didattici accessibili.",
      feature3Point1: "Crea cartelle e sottocartelle illimitate",
      feature3Point2: "Tagga i video in base all'argomento o al livello di difficoltà",
      feature3Point3: "Organizza in blocco più trascrizioni",
      feature3Point4: "Cerca all'istante in tutti i tuoi contenuti",
      feature3VisualTitle: "La tua biblioteca di corsi",
      feature3Folder1: "Matematica 101",
      feature3Folder2: "Lezioni di fisica",
      feature3Folder3: "Video di laboratorio di biologia",
      feature3Folder4: "Documentari storici",
      feature3Folder5: "Apprendimento delle lingue",
      feature4Title: "Esporta in qualsiasi formato di cui hai bisogno",
      feature4Desc: "Scarica le trascrizioni in formato TXT, DOCX o PDF. Perfette per creare guide di studio, appunti delle lezioni o materiali didattici accessibili. Condividile con gli studenti o integrale nel tuo sistema di gestione dell'apprendimento.",
      feature4Point1: "TXT per la semplice modifica del testo",
      feature4Point2: "DOCX per documenti formattati",
      feature4Point3: "PDF per una facile condivisione e stampa",
      feature4Point4: "Esportazione in blocco di più file contemporaneamente",
      workflowTitle: "Come funziona",
      workflowSubtitle: "Dal collegamento video alla trascrizione accessibile in pochi minuti",
      workflowStep1Title: "Incolla collegamento",
      workflowStep1Desc: "Copia qualsiasi URL di un video didattico e incollalo",
      workflowStep2Title: "Trascrizione automatica",
      workflowStep2Desc: "L'intelligenza artificiale trascrive con una precisione del 96%",
      workflowStep3Title: "Genera didascalie",
      workflowStep3Desc: "Crea automaticamente sottotitoli perfettamente sincronizzati",
      workflowStep4Title: "Condividi ed esporta",
      workflowStep4Desc: "Scarica o condividi con gli studenti",
      useCasesTitle: "Perfetto per ogni esigenza educativa",
      useCasesSubtitle: "Scopri come gli educatori utilizzano NeverCap per migliorare l'apprendimento",
      useCase1Title: "Lezioni registrate",
      useCase1Text: "Trascrivi interi semestri di lezioni registrate. Gli studenti possono cercare argomenti specifici, ripassare i concetti chiave e non perdere mai informazioni importanti.",
      useCase2Title: "Corsi online",
      useCase2Text: "Rendi i tuoi corsi online accessibili agli studenti internazionali con traduzioni in oltre 100 lingue. Aumenta le iscrizioni e la soddisfazione.",
      useCase3Title: "Materiali di studio",
      useCase3Text: "Converti i tutorial video in guide di studio comprensibili. Perfetto per gli studenti che preferiscono leggere o hanno bisogno di ripassare rapidamente i contenuti.",
      useCase4Title: "Conformità all'accessibilità",
      useCase4Text: "Soddisfa i requisiti di accessibilità fornendo sottotitoli e trascrizioni per tutti i contenuti video. Garantisci pari accesso a tutti gli studenti.",
      useCase5Title: "Classe capovolta",
      useCase5Text: "Condividi le videolezioni con le relative trascrizioni prima della lezione. Gli studenti possono rivedere le lezioni al proprio ritmo e arrivare preparati alle discussioni.",
      useCase6Title: "Ricerca e citazioni",
      useCase6Text: "Aiuta gli studenti a citare accuratamente le fonti video con timestamp. Perfetto per progetti di ricerca e articoli accademici.",
      testimonialTitle: "Scelto da oltre 50.000 educatori",
      testimonialSubtitle: "Scopri perché gli insegnanti di tutto il mondo scelgono NeverCap",
      testimonialText: `"Ho usato NeverCap per trascrivere l'intero canale YouTube di tutorial di matematica. Quello che prima richiedeva settimane con altri servizi, ora richiede ore. La possibilità di incollare i link direttamente e ottenere trascrizioni istantanee ha trasformato il mio modo di creare contenuti accessibili. I miei studenti internazionali adorano in particolare i sottotitoli multilingue!"`,
      testimonialAuthorName: "Prof.ssa Karen Mitchell",
      testimonialAuthorRole: "Professore di matematica, educatore online",
      ctaTitle: "Rendi accessibili tutti i tuoi contenuti educativi",
      ctaSubtitle: "Unisciti a migliaia di educatori che utilizzano una trascrizione davvero illimitata",
      ctaButton: "Prova NeverCap Gratis"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Scarica i video di YouTube in formato MP4",
        "placeholder": "Cerca o incolla qui il tuo link Youtube",
        "clear_icon": "Cancella input",
        "Download": "Scaricamento",
        "loading_text": "Elaborazione del link per il download. Rimani sulla pagina.",
        "howToDownload": "Come scaricare?",
        "tutorial": "Guarda il tutorial"
      },
      part2: {
        "title": "Ecco come trasformare un video di YouTube in un file MP4 scaricabile in 3 semplici passaggi",
        "steps": [
          {
            title: "Copia l'URL",
            content: "Apri il video YouTube di destinazione, quindi copia il collegamento dalla barra degli indirizzi del browser."
          },
          {
            title: "Incolla il collegamento",
            content: "Vai allo strumento per scaricare video e incolla l'URL nel campo di input."
          },
          {
            title: "Scarica l'MP4",
            content: "Una volta elaborato, premi il pulsante di download per salvare il file MP4."
          }
        ]
      },
      part3: {
        content: [
          "Ti è mai capitato di dover guardare video di YouTube offline?",
          "Che tu stia viaggiando in metropolitana, prendendo un aereo, studiando un tutorial fondamentale, immergendoti in contenuti per lo sviluppo di competenze o archiviando materiale video importante, avere un accesso offline affidabile è una frustrazione comune. È qui che il nostro downloader dà il meglio di sé.",
          "Il downloader ti consente di convertire rapidamente e facilmente i video di YouTube in formato MP4 per il download. Salvali sul tuo dispositivo e guardali quando vuoi.",
          "Il processo è veloce, semplice e senza complicazioni. Una volta scaricato, potrai goderti i tuoi video preferiti ovunque e in qualsiasi momento, senza bisogno di una connessione Internet."
        ]
      },
      part4: {
        content: ["Ecco i 5 principali vantaggi del download", "Video di YouTube come file MP4"],
        list: [
          {
            title: "Risparmia sui costi dei dati:",
            content: "Di solito, guardare video su YouTube consuma una notevole quantità di dati mobili. Scaricandoli per la visione offline, puoi evitare questi costi inutili."
          },
          {
            title: "Guarda ovunque, in qualsiasi momento:",
            content: "Goditi i tuoi video senza interruzioni, anche con connessioni internet discontinue. Niente più preoccupazioni di buffering."
          },
          {
            title: "Archiviazione e conservazione facili:",
            content: "Salvare i video come MP4 semplifica la creazione della tua collezione personale, soprattutto per i contenuti che ritieni davvero preziosi o importanti."
          },
          {
            title: "Condivisione più semplice:",
            content: "Condividere un file MP4 è molto più comodo che inviare un link. Puoi inviare il file video direttamente tramite app come WhatsApp o Instagram, eliminando il passaggio aggiuntivo di aprire YouTube."
          },
          {
            title: "Visualizzazione istantanea, momenti condivisi:",
            content: "Vuoi mostrare con entusiasmo il tuo video preferito ad amici o parenti? Scaricando l'MP4, potrete guardarlo tutti insieme, senza interruzioni e senza dover attendere il caricamento."
          }
        ]
      },
      part5: {
        title: "Perché il nostro downloader si distingue",
        cards: [
          {
            title: "Semplicità con un clic",
            content: "Configurazione semplice e funzionamento intuitivo."
          },
          {
            title: "Velocissimo, illimitato",
            content: "Converti e scarica alla massima velocità: senza limiti, senza limiti."
          },
          {
            title: "Converti al volo",
            content: "Elabora i tuoi file all'istante, senza tempi di attesa."
          },
          {
            title: "Zero pubblicità, zero distrazioni",
            content: "Goditi un'interfaccia pulita, senza pop-up, banner o interruzioni: solo una conversione video fluida."
          },
          {
            icon: "5",
            color: "#DEE5FF",
            title: "Qualità originale garantita",
            content: "I tuoi download mantengono la piena risoluzione del video sorgente, per una riproduzione perfetta ogni volta."
          },
          {
            icon: "6",
            color: "#DEF6EE",
            title: "Funziona ovunque",
            content: "Completamente compatibile con qualsiasi browser, su qualsiasi dispositivo."
          }
        ]
      },
      part6: {
        title: ["Massimizza i download dei tuoi video su YouTube", "Con il downloader"],
        content: [
          "Conversione da YouTube a MP4 senza sforzo: veloce, semplice e gratuita.",
          "È qui che eccelliamo. La nostra interfaccia intuitiva è progettata per tutti: non sono richieste competenze tecniche. Indipendentemente dal tuo livello di esperienza, puoi convertire i video all'istante. Non è richiesta alcuna registrazione: ottieni esattamente ciò di cui hai bisogno, subito.",
          "Non preoccuparti: i tuoi MP4 scaricati mantengono la qualità e la nitidezza del video originale, esattamente come li hai guardati su YouTube.",
          "Funziona ovunque. Completamente compatibile con tutte le principali piattaforme e dispositivi. Che tu utilizzi Windows, macOS, Linux, Android o iOS, uno smartphone, un tablet o un computer desktop, puoi scaricare video senza problemi."
        ]
      },
      part7: {
        title: "Domande chiave sul download di video di YouTube",
        list: [
          {
            question: "Posso scaricare un video di YouTube se è protetto da copyright?",
            answer: "Scaricare video di YouTube protetti da copyright senza l'autorizzazione del titolare del copyright è illegale."
          },
          {
            question: "Questo strumento di download è sicuro?",
            answer: "Sì, è sicuro e affidabile. Non richiediamo alcuna informazione personale agli utenti e adottiamo misure severe contro i virus. Ti ricordiamo di prestare sempre attenzione quando scarichi file da Internet: evita di cliccare su link sospetti o di scaricare file discutibili."
          },
          {
            question: "Quali lingue sono supportate dal download da YouTube a MP4?",
            answer: "Il nostro servizio supporta il download di video di YouTube in tutte le lingue più diffuse."
          },
          {
            question: "Quali fattori influiscono sul tempo necessario per scaricare un video da YouTube?",
            answer: "Anche se garantiamo l'esperienza di download più veloce possibile, il tempo di download è influenzato anche da fattori quali la lunghezza del video e la velocità della connessione Internet."
          },
          {
            question: "Quando scarico un video MP4 tramite il mio smartphone, dove viene salvato?"
          },
          {
            question: "Scaricare un video di YouTube in formato MP4 riduce la qualità del video?",
            answer: "No. Scaricare video di YouTube in formato MP4 tramite il nostro strumento mantiene la qualità video originale. Il processo di conversione preserva la qualità originale, garantendoti la stessa esperienza visiva di YouTube."
          }
        ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Tecnologia AI leader del settore",
      "title": "Di",
      "highlighted_text": "NeverCap",
      "description": "La nostra missione è fornire i servizi di trascrizione audio e video più accurati. Sfruttando la tecnologia di intelligenza artificiale leader del settore, raggiungiamo tassi di accuratezza della trascrizione superiori al 96%. Per alcune delle principali lingue, grazie all'ottimizzazione tecnica, possiamo raggiungere persino il 99%."
    },
    Stats: {
      "title": "Nostro",
      "highlighted_text": "Impatto",
      "subtitle": "Potenziare la comunicazione globale con la tecnologia AI all'avanguardia",
      "metrics": [
        {
          "value": "96%+",
          "label": "Tasso di precisione",
          "description": "Precisione di trascrizione leader del settore con intelligenza artificiale avanzata"
        },
        {
          "value": "100+",
          "label": "Lingue supportate",
          "description": "Riconoscimento delle parole pronunciate per contenuti globali"
        },
        {
          "value": "249+",
          "label": "Lingue di traduzione",
          "description": "Traduci il testo trascritto praticamente in qualsiasi lingua"
        }
      ]
    },
    Mission: {
      "title": "Perché scegliere",
      "highlighted_text": "NeverCap",
      "subtitle": "Crediamo nell'abbattimento delle barriere linguistiche e nel rendere i contenuti accessibili a tutti",
      "features": [
        {
          "icon": "🎯",
          "title": "Precisione senza pari",
          "description": "I nostri modelli di intelligenza artificiale vengono costantemente perfezionati per garantire tassi di accuratezza della trascrizione superiori al 96%, con alcune lingue principali che raggiungono fino al 99% di accuratezza tramite ottimizzazione avanzata."
        },
        {
          "icon": "🌍",
          "title": "Supporto linguistico globale",
          "description": "Supporto per oltre 100 lingue nel riconoscimento vocale e capacità di traduzione per più di 249 lingue, rendendo i tuoi contenuti davvero globali."
        },
        {
          "icon": "⚡",
          "title": "Elaborazione ultraveloce",
          "description": "Elabora ore di contenuti audio e video in pochi minuti, non in ore. La nostra pipeline di intelligenza artificiale ottimizzata ti garantisce di ottenere le tue trascrizioni rapidamente senza sacrificare la qualità."
        },
        {
          "icon": "🔒",
          "title": "Sicurezza di livello aziendale",
          "description": "La sicurezza dei tuoi dati è la nostra priorità. Utilizziamo la crittografia standard del settore e rispettiamo le normative globali sulla privacy per garantire la sicurezza e la riservatezza dei tuoi contenuti."
        }
      ]
    },
    Company: {
      "title": "Azienda",
      "highlighted_text": "Informazioni",
      "subtitle": "Contattaci per qualsiasi domanda o supporto",
      "details": [
        {
          "label": "Nome dell'azienda",
          "value": "SCRIBIFY AI INC"
        },
        {
          "label": "Sede centrale",
          "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Stati Uniti"]
        },
        {
          "label": "Contattaci",
          "value": ["e-mail", "Supporto disponibile 24 ore su 24, 7 giorni su 7"]
        }
      ]
    },
    CTA: {
      "title": "Pronti a provare la differenza?",
      "subtitle": "Unisciti a migliaia di professionisti che si affidano a NeverCap per le loro esigenze di trascrizione",
      "button": "Prova NeverCap Gratis →",
      "disclaimer": "Nessuna carta di credito richiesta • Inizia a trascrivere in pochi secondi"
    }
  },
  Privacy: {
    title: "Riservatezza",
    titleGradient: "Politica",
    subtitle: "Scopri come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali",
    "lastUpdated": "Ultimo aggiornamento: {data}",
    "lastUpdatedDate": "21 luglio 2025",
    "privacyPolicyTitle": "politica sulla riservatezza",
    "policyDescription": 'La presente Informativa descrive come NeverCap (di seguito denominata \"NeverCap\", \"nostro\", \"noi\", \"ci\") raccoglie, utilizza e divulga le tue informazioni personali quando utilizzi i nostri servizi, siti web (https://www.nevercap.ai/) e software (collettivamente, i \"Servizi\").',
    "policyAgreement": "Si prega di leggere attentamente la presente Informativa sulla privacy e di assicurarsi di averla compresa. Utilizzando uno qualsiasi dei nostri Servizi, l'utente accetta la presente Informativa sulla privacy. Se non acconsente all'utilizzo dei suoi dati personali in conformità con la presente Informativa, è tenuto a interrompere immediatamente l'utilizzo dei nostri Servizi.",
    "policyOverview": "In questa informativa, indichiamo: quali dati raccogliamo e perché; come vengono gestiti i tuoi dati; e i tuoi diritti in merito ai tuoi dati. Non vendiamo i tuoi dati.",
    "scopeTitle": "1. Ambito di applicazione della presente Informativa sulla privacy",
    "scopeDescription": "La presente Informativa sulla privacy si applica esclusivamente alla raccolta e al trattamento delle informazioni sugli utenti dei Servizi. La presente Informativa sulla privacy non si applica a servizi, siti web o software gestiti da terze parti a noi collegati (sia che tali link siano forniti da noi o condivisi da altri utenti), né a contenuti, dati, applicazioni o materiali di terze parti. Ti consigliamo di consultare le informative sulla privacy di qualsiasi sito web o software di terze parti prima di fornire loro qualsiasi informazione.",
    "collectionTitle": "2. Cosa raccogliamo e perché",
    "collectionPrinciple": "Il nostro principio guida è raccogliere solo ciò di cui abbiamo bisogno. Ecco cosa significa in pratica:",
    "identityTitle": "2.1 Identità e accesso",
    "identityDescription": "Quando ti registri per uno dei nostri prodotti, ti chiediamo informazioni identificative come nome e indirizzo email. Questo ci serve per garantire le funzionalità essenziali del prodotto e per inviarti aggiornamenti sui prodotti e altre informazioni essenziali.",
    "billingTitle": "2.2 Informazioni di fatturazione",
    "billingDescription": "Se ti registri per un prodotto a pagamento, ti verrà chiesto di fornire i tuoi dati di pagamento e l'indirizzo di fatturazione. I dati di pagamento vengono inviati direttamente al nostro processore di pagamento e non raggiungono i nostri server.",
    "productInteractionsTitle": "2.3 Interazioni del prodotto",
    "productInteractionsDescription": "Conserviamo sui nostri server i contenuti che carichi, ricevi o gestisci nei tuoi account prodotto. A meno che tu non elimini tali contenuti, potremmo conservarli finché il tuo account sarà attivo.",
    "websiteInteractionsTitle": "2.4 Interazioni del sito web",
    "websiteInteractionsDescription": "Raccogliamo informazioni sulla tua attività di navigazione per scopi analitici e statistici, come test del tasso di conversione e sperimentazione di nuovi design di prodotto. Ciò include, ad esempio, le versioni del tuo browser e del tuo sistema operativo, il tuo indirizzo IP, le pagine web che hai visitato e il tempo impiegato per caricarle, e quale sito web ti ha indirizzato a noi. Se hai un account e hai effettuato l'accesso, questi dati di analisi web sono associati al tuo indirizzo IP e al tuo account utente finché il tuo account non sarà più attivo.",
    "cookiesTitle": "2.5 Cookie",
    "cookiesDescription1": "Utilizziamo anche cookie proprietari persistenti e alcuni cookie di terze parti per memorizzare determinate preferenze, semplificare l'utilizzo delle nostre applicazioni ed eseguire test A/B, nonché supportare alcune analisi.",
    "cookiesDescription2": "Un cookie è un frammento di testo memorizzato dal tuo browser. Può aiutare a ricordare le informazioni di accesso e le preferenze del sito. Potrebbe anche raccogliere informazioni come il tipo di browser, il sistema operativo, le pagine web visitate, la durata della visita, i contenuti visualizzati e altri dati relativi al flusso di clic. Puoi modificare le impostazioni di conservazione dei cookie e accettare o bloccare singoli cookie nelle impostazioni del tuo browser, sebbene le nostre app non funzioneranno e altri aspetti del nostro servizio potrebbero non funzionare correttamente se disattivi i cookie.",
    "correspondenceTitle": "2.6 Corrispondenza volontaria",
    "correspondenceDescription": "Quando ci invii un'e-mail con una domanda o per chiedere aiuto, conserviamo tale corrispondenza, incluso il tuo indirizzo e-mail, in modo da avere una cronologia della corrispondenza passata a cui fare riferimento se ci contatterai in futuro.",
    "accessTitle": "3. Quando accediamo o condividiamo le tue informazioni",
    "accessDescription1": "Per fornirti i prodotti o i servizi che hai richiesto. Utilizziamo alcuni sub-responsabili terzi per aiutarci a gestire le nostre applicazioni e fornirti i Servizi. Tra questi rientrano i fornitori di servizi cloud e di analisi.",
    "accessDescription2": "Per indagare, prevenire o intervenire in caso di abusi. L'accesso all'account di un cliente durante le indagini su potenziali abusi è una misura di ultima istanza. Vogliamo proteggere la privacy e la sicurezza sia dei nostri clienti che di coloro che ci segnalano problemi e facciamo del nostro meglio per bilanciare queste responsabilità durante l'intero processo. Se scopriamo che stai utilizzando i nostri prodotti per uno scopo limitato, prenderemo i provvedimenti necessari, inclusa la notifica alle autorità competenti ove giustificato.",
    "accessDescription3": "Quando richiesto dalla legge applicabile.",
    "dataRequests": "Richieste di dati utente. La nostra politica è di non rispondere alle richieste governative di dati utente, a meno che non siamo obbligati da un procedimento legale o, in circostanze limitate, in caso di richiesta di emergenza. Tuttavia, qualora le autorità competenti degli Stati Uniti dispongano del mandato, di una citazione in giudizio o di un ordine del tribunale che ci imponga di condividere i dati, siamo tenuti a rispettarli. Allo stesso modo, risponderemo alle richieste provenienti da autorità governative al di fuori degli Stati Uniti solo se obbligati dal governo statunitense attraverso le procedure delineate in un trattato o accordo di mutua assistenza legale. È nostra politica informare gli utenti interessati prima di condividere i dati, a meno che non ci sia legalmente vietato farlo e salvo in alcuni casi di emergenza.",
    "preservationRequests": "Richieste di conservazione. Analogamente, la nostra politica è di soddisfare le richieste di conservazione dei dati solo se obbligati dal Federal Stored Communications Act statunitense, 18 USC Sezione 2703(f), o da una citazione in giudizio statunitense correttamente notificata per questioni civili. Non condividiamo i dati conservati a meno che non sia richiesto dalla legge o da un'ordinanza del tribunale contro la quale scegliamo di non presentare ricorso. Inoltre, a meno che non riceviamo un mandato, un'ordinanza del tribunale o una citazione in giudizio prima della scadenza del periodo di conservazione richiesto, distruggeremo tutte le copie conservate dei dati dei clienti al termine del periodo di conservazione.",
    "taxAudits": "In caso di verifica da parte di un'autorità fiscale, potremmo essere tenuti a condividere informazioni relative alla fatturazione. In tal caso, condivideremo solo il minimo necessario, come gli indirizzi di fatturazione e le informazioni sull'esenzione fiscale.",
    "securityTitle": "4. Come proteggiamo i tuoi dati",
    "securityDescription": "Tutti i dati vengono crittografati tramite SSL/TLS quando vengono trasmessi dai nostri server al tuo browser.",
    "deletionTitle": "5. Cosa succede quando elimini i tuoi contenuti",
    "deletionDescription": "Se elimini un contenuto, questo diventerà immediatamente inaccessibile.",
    "locationTitle": "6. Ubicazione del sito e dei dati",
    "locationDescription": "I nostri prodotti e altre proprietà web sono gestiti negli Stati Uniti. Se ti trovi nell'Unione Europea, nel Regno Unito o in un altro luogo al di fuori degli Stati Uniti, tieni presente che tutte le informazioni che ci fornisci saranno trasferite e archiviate negli Stati Uniti. Utilizzando i nostri siti web o Servizi e/o fornendoci i tuoi dati personali, acconsenti a tale trasferimento.",
    "childrenTitle": "7. Privacy dei bambini",
    "childrenDescription": "I Servizi non sono rivolti ai minori e non raccogliamo consapevolmente Informazioni Personali da minori di età inferiore ai 13 anni. Se hai meno di 13 anni, ti preghiamo di non inviare alcuna informazione personale tramite i Servizi. Se ritieni che un minore ci abbia fornito Informazioni Personali in violazione della presente Informativa, ti preghiamo di contattarci come indicato di seguito.",
    "updatesTitle": "8. Aggiornamenti alla presente Informativa sulla privacy",
    "updatesDescription": "Potremmo aggiornare la presente informativa secondo necessità per conformarci alle normative vigenti e riflettere eventuali nuove prassi. Ogni volta che apporteremo modifiche significative alle nostre informative, aggiorneremo la data in cima a questa pagina.",
    "contactTitle": "9. Contattaci",
    "contactDescription": "In caso di domande, commenti o reclami sulla nostra Informativa sulla privacy, contattateci e faremo il possibile per gestire il vostro reclamo il prima possibile.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Termini di",
    titleGradient: "Servizio",
    subtitle: "Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi",
    "lastUpdated": "Ultimo aggiornamento: {data}",
    "lastUpdatedDate": "21 luglio 2025",
    "termsOfServiceTitle": "Termini di servizio",
    "thankYou": "Grazie per aver utilizzato i nostri prodotti!",
    "companyDefinition": 'Quando in questo documento parliamo di \"Società\", \"noi\", \"nostro\" o \"ci\", ci riferiamo a NeverCap.',
    "servicesDefinition": `Quando parliamo di \"Servizi\", intendiamo qualsiasi prodotto creato e gestito da NeverCap, sia che venga fornito tramite un browser web, un'applicazione desktop, un'applicazione mobile o un altro formato.`,
    "termsUpdate": "Potremmo aggiornare i presenti Termini di Servizio in futuro. In genere, queste modifiche sono state apportate per chiarire alcuni di questi termini, collegandoli a un'informativa correlata più ampia. Ogni volta che apporteremo una modifica significativa alle nostre informative, aggiorneremo la data in cima a questa pagina e adotteremo qualsiasi altra misura appropriata per informare i titolari di account.",
    "acceptanceTitle": "1. Accettazione dell'accordo",
    "acceptanceDescription1": "Utilizzando i nostri Servizi, accetti il presente Contratto, che diventa pertanto un contratto vincolante tra te e NeverCap. Dichiari di essere legalmente in grado di accettare i presenti Termini e affermi di avere l'età legale per stipulare un contratto vincolante. L'accettazione di NeverCap è espressamente subordinata al tuo assenso a tutti i termini e le condizioni del presente Contratto.",
    "eligibilityRequirement": "I Servizi non sono destinati e non devono essere utilizzati da persone di età inferiore ai 18 anni. Utilizzando i Servizi, dichiari e garantisci di soddisfare i requisiti di idoneità di cui sopra.",
    "userResponsibility": 'I termini "tu", "tuo", "te stesso" includono anche i tuoi dipendenti, agenti, rappresentanti commerciali e qualsiasi altro individuo a cui fornisci accesso ai Servizi tramite il tuo Account (come definito di seguito). Sei responsabile di garantire che tutte le persone che accedono ai Servizi tramite il tuo account siano a conoscenza dei presenti Termini e li rispettino.',
    "termsRevision": "NeverCap si riserva il diritto di rivedere e aggiornare i presenti Termini di volta in volta a sua esclusiva discrezione. Tutte le modifiche sono efficaci immediatamente dopo la pubblicazione. L'utilizzo continuato dei Servizi dopo la pubblicazione dei Termini modificati implica l'accettazione delle modifiche. L'utente è tenuto a controllare periodicamente questa pagina per essere a conoscenza di eventuali modifiche, in quanto vincolanti per l'utente.",
    "servicesTitle": "2. Servizi di NeverCap",
    "servicesDescription1": "I nostri Servizi consentono agli utenti di trasformare le conversazioni vocali in testo trascritto che può essere ricercato, tradotto e condiviso con altri.",
    "servicesOptions": 'Puoi scegliere se utilizzare la versione gratuita dei Servizi (\"Servizi gratuiti\") o la versione a pagamento dei Servizi basata su abbonamento, per la quale potrebbe essere richiesto il pagamento di una quota (\"Servizi a pagamento\").',
    "servicesAccess": "Ti metteremo a disposizione i Servizi. Sei responsabile di prendere tutte le disposizioni necessarie per accedere ai Servizi.",
    "accountTermsTitle": "3. Termini dell'account",
    "accountSecurity": "L'utente è responsabile della sicurezza del proprio account. La Società non può e non sarà responsabile per eventuali perdite o danni derivanti dal mancato rispetto di questo obbligo di sicurezza.",
    "lawfulUse": "Non è consentito utilizzare i Servizi per scopi illegali, non etici o immorali.",
    "contentResponsibility": "Sei responsabile di tutti i contenuti pubblicati e delle attività svolte tramite il tuo account. Ciò include i contenuti pubblicati da altri che: (a) hanno accesso alle tue credenziali di accesso; o (b) dispongono di propri dati di accesso al tuo account.",
    "humanRequirement": 'Devi essere un essere umano. Gli account registrati tramite "bot" o altri metodi automatizzati non sono consentiti.',
    "paymentTitle": "4. Pagamento, rimborsi e modifiche al piano",
    "freeTrial": "Per i Servizi a pagamento che offrono una prova gratuita, ne spieghiamo la durata al momento dell'iscrizione. Dopo il periodo di prova, è necessario pagare in anticipo per continuare a utilizzare il Servizio. In caso di mancato pagamento, i servizi verranno interrotti.",
    "upgradePolicy": "Se esegui l'upgrade da un piano gratuito a uno a pagamento, l'addebito sulla tua carta avverrà immediatamente e il ciclo di fatturazione inizierà il giorno dell'upgrade.",
    "taxes": "Tutte le tariffe sono al netto di tasse, imposte o dazi imposti dalle autorità fiscali. Ove richiesto, riscuoteremo tali tasse per conto delle autorità fiscali e le verseremo alle stesse. In caso contrario, il pagamento di tutte le tasse, imposte o dazi sarà a vostro carico.",
    "refunds": "Tutti gli acquisti non sono rimborsabili. Puoi annullare qualsiasi servizio a pagamento in qualsiasi momento accedendo al tuo account. Per gli abbonamenti a pagamento, la cancellazione avrà effetto al termine del periodo di pagamento in corso, salvo diversa indicazione.",
    "cancellationTitle": "5. Annullamento e risoluzione",
    "cancellationPolicy": "Se annulli il Servizio prima della scadenza del periodo di tempo pagato, la cancellazione avrà effetto immediato e non ti verrà addebitato alcun costo aggiuntivo. Non effettuiamo automaticamente la ripartizione proporzionale del tempo non utilizzato nell'ultimo ciclo di fatturazione.",
    "terminationRights": "Ci riserviamo il diritto di sospendere o chiudere il tuo account e di rifiutare qualsiasi utilizzo attuale o futuro dei nostri Servizi per qualsiasi motivo e in qualsiasi momento. La sospensione implica l'impossibilità di accedere all'account o a qualsiasi contenuto in esso contenuto. La chiusura comporterà inoltre la cancellazione del tuo account o del tuo accesso allo stesso, nonché la confisca e la rinuncia a tutti i contenuti presenti nel tuo account. Ci riserviamo inoltre il diritto di rifiutare l'utilizzo dei Servizi a chiunque, per qualsiasi motivo e in qualsiasi momento. Abbiamo questa clausola perché, statisticamente parlando, su centinaia di migliaia di account sui nostri Servizi, ce n'è almeno uno che compie azioni illecite.",
    "abusePolicy": "L'abuso verbale, fisico, scritto o di altro tipo (incluse minacce di abuso o ritorsione) nei confronti di un dipendente o di un funzionario della Società può comportare la chiusura immediata dell'account.",
    "submissionsTitle": "6. Invii",
    "submissionsDescription": `L'utente riconosce e accetta che qualsiasi domanda, commento, suggerimento, idea, feedback o altra informazione riguardante il Sito ("Contributi") da lui forniti non è riservata e diventerà di nostra esclusiva proprietà. Avremo i diritti esclusivi, inclusi tutti i diritti di proprietà intellettuale, e avremo diritto all'uso e alla diffusione illimitati di tali Contributi per qualsiasi scopo lecito, commerciale o di altro tipo, senza alcun riconoscimento o compenso per l'utente. Con la presente, l'utente rinuncia a tutti i diritti morali su tali Contributi e garantisce che tali Contributi sono originali o che ha il diritto di inviarli. L'utente accetta che non vi sarà alcun ricorso contro di noi per qualsiasi presunta o effettiva violazione o appropriazione indebita di qualsiasi diritto di proprietà sui suoi Contributi.`,
    "uptimeTitle": "7. Tempo di attività e sicurezza",
    "serviceAvailability": `L'utilizzo dei Servizi è a vostro esclusivo rischio. Forniamo questi Servizi "così come sono" e "come disponibili". Non offriamo accordi sul livello di servizio per la maggior parte dei nostri Servizi, ma prendiamo molto seriamente l'operatività delle nostre applicazioni.`,
    "throttlingPolicy": "Ci riserviamo il diritto di limitare o limitare temporaneamente l'accesso all'account nei rari casi in cui l'attività di un utente abbia un impatto negativo sulla stabilità e sulle prestazioni del Servizio per gli altri utenti. In tutti i casi, tranne quelli più critici, ti contatteremo per trovare una soluzione prima di intervenire.",
    "dataSecurity": "Adottiamo numerose misure per proteggere e mettere in sicurezza i tuoi dati attraverso backup, ridondanze e crittografia. Applichiamo la crittografia per la trasmissione dei dati sulla rete Internet pubblica.",
    "thirdPartyVendors": "Ci avvaliamo di fornitori terzi e partner di hosting per fornire l'hardware, il software, la rete, lo storage e la tecnologia correlata necessari per gestire i Servizi.",
    "siteManagementTitle": "8. Gestione del sito",
    "siteManagementDescription": "Ci riserviamo il diritto, ma non l'obbligo, di: (1) monitorare il Sito per violazioni di questi Termini di servizio; (2) intraprendere azioni legali appropriate contro chiunque, a nostra esclusiva discrezione, violi la legge o questi Termini di servizio, incluso, senza limitazioni, segnalare tale utente alle autorità competenti; (3) a nostra esclusiva discrezione e senza limitazioni, rifiutare, limitare l'accesso, limitare la disponibilità o disabilitare (nella misura in cui tecnologicamente fattibile) uno qualsiasi dei tuoi Contributi o una qualsiasi parte di essi; (4) a nostra esclusiva discrezione e senza limitazioni, preavviso o responsabilità, rimuovere dal Sito o altrimenti disabilitare tutti i file e i contenuti che sono di dimensioni eccessive o sono in qualsiasi modo gravosi per i nostri sistemi; e (5) altrimenti gestire il Sito in un modo progettato per proteggere i nostri diritti e proprietà e per facilitare il corretto funzionamento del Sito.",
    "copyrightTitle": "9. Copyright e proprietà dei contenuti",
    "copyrightCompliance": "Tutti i contenuti pubblicati sui Servizi devono essere conformi alla legge statunitense sul copyright.",
    "ipRights": "Non rivendichiamo alcun diritto di proprietà intellettuale sul materiale che fornisci ai Servizi. Tutto il materiale caricato rimane di tua proprietà.",
    "contentModeration": "Non eseguiamo controlli preventivi sui contenuti, ma ci riserviamo il diritto (ma non l'obbligo) a nostra esclusiva discrezione di rifiutare o rimuovere qualsiasi contenuto disponibile tramite il Servizio.",
    "trademarkProtection": "I nomi, l'aspetto e le funzionalità dei Servizi sono protetti da copyright© della Società. Tutti i diritti riservati. Non è consentito duplicare, copiare o riutilizzare alcuna parte di HTML, CSS, JavaScript o elementi di design visivo senza l'espressa autorizzazione scritta della Società. È necessario richiedere l'autorizzazione per utilizzare il logo della Società o qualsiasi logo dei Servizi a fini promozionali. Si prega di inviare le richieste di utilizzo dei loghi via e-mail. Ci riserviamo il diritto di revocare tale autorizzazione in caso di violazione dei presenti Termini di Servizio.",
    "prohibitedExploitation": "L'utente accetta di non riprodurre, duplicare, copiare, vendere, rivendere o sfruttare alcuna parte dei Servizi, l'uso dei Servizi o l'accesso ai Servizi senza l'espresso consenso scritto della Società.",
    "impersonationProhibition": "Non è consentito modificare un altro sito web in modo da insinuare falsamente che sia associato ai Servizi o alla Società.",
    "dmcaPolicy": "Rispettiamo i diritti di proprietà intellettuale altrui. Se ritieni che qualsiasi materiale disponibile sul Sito o tramite esso violi un copyright di tua proprietà o sotto il tuo controllo, ti preghiamo di contattarci immediatamente. Una copia della tua Notifica verrà inviata alla persona che ha pubblicato o archiviato il materiale oggetto della Notifica. Ti informiamo che, ai sensi della legge applicabile, potresti essere ritenuto responsabile per danni in caso di false dichiarazioni in una Notifica. Pertanto, se non sei sicuro che il materiale presente sul Sito o collegato tramite link violi il tuo copyright, ti consigliamo di contattare prima un avvocato.",
    "prohibitedActivitiesTitle": "10. Attività proibite",
    "generalProhibition": "Non è consentito accedere o utilizzare il Sito per scopi diversi da quelli per cui lo rendiamo disponibile. Il Sito non può essere utilizzato in relazione ad attività commerciali, ad eccezione di quelle specificamente approvate o approvate da noi.",
    "userObligations": "In qualità di utente del Sito, accetti di non:",
    "dataScraping": "Recuperare sistematicamente dati o altri contenuti dal Sito per creare o compilare, direttamente o indirettamente, una raccolta, una compilazione, un database o una directory senza la nostra autorizzazione scritta.",
    "fraud": "Ingannare, truffare o fuorviare noi e gli altri utenti, in particolare nel tentativo di apprendere informazioni sensibili sull'account, come le password degli utenti.",
    "securityInterference": "Eludere, disabilitare o interferire in altro modo con le funzionalità relative alla sicurezza del Sito, incluse le funzionalità che impediscono o limitano l'uso o la copia di qualsiasi Contenuto o impongono limitazioni all'uso del Sito e/o del Contenuto in esso presente.",
    "defamation": "Denigrare, infangare o comunque danneggiare, a nostro avviso, noi e/o il Sito.",
    "harassment": "Utilizzare qualsiasi informazione ottenuta dal Sito per molestare, abusare o danneggiare un'altra persona.",
    "supportAbuse": "Fare un uso improprio dei nostri servizi di supporto o inviare false segnalazioni di abusi o cattiva condotta.",
    "legalCompliance": "Utilizzare il Sito in modo non conforme alle leggi o ai regolamenti applicabili.",
    "framingProhibition": "Eseguire operazioni di framing o linking non autorizzati al Sito.",
    "malware": "Caricare o trasmettere (o tentare di caricare o trasmettere) virus, cavalli di Troia o altro materiale, incluso l'uso eccessivo di lettere maiuscole e lo spamming (pubblicazione continua di testo ripetitivo), che interferisca con l'uso ininterrotto e il godimento del Sito da parte di qualsiasi parte o modifichi, danneggi, interrompa, alteri o interferisca con l'uso, le caratteristiche, le funzioni, il funzionamento o la manutenzione del Sito.",
    "automation": "Non utilizzare in alcun modo il sistema in modo automatizzato, ad esempio utilizzando script per inviare commenti o messaggi, o utilizzando data mining, robot o strumenti simili per la raccolta e l'estrazione di dati.",
    "copyrightRemoval": "Eliminare l'avviso di copyright o altri diritti proprietari da qualsiasi Contenuto.",
    "impersonation": "Tentare di impersonare un altro utente o persona o di utilizzare il nome utente di un altro utente.",
    "spyware": 'Caricare o trasmettere (o tentare di caricare o trasmettere) qualsiasi materiale che agisca come meccanismo di raccolta o trasmissione di informazioni attivo o passivo, inclusi, a titolo esemplificativo ma non esaustivo, formati di scambio di grafica trasparente (\"gif\"), pixel 1×1, web bug, cookie o altri dispositivi simili (talvolta denominati \"spyware\" o \"meccanismi di raccolta passiva\" o \"pcm\").',
    "disruption": "Interferire, interrompere o creare un carico eccessivo sul Sito o sulle reti o sui servizi connessi al Sito.",
    "employeeHarassment": "Molestare, infastidire, intimidire o minacciare uno qualsiasi dei nostri dipendenti o agenti impegnati a fornirti qualsiasi parte del Sito.",
    "accessCircumvention": "Tentare di aggirare qualsiasi misura del Sito progettata per impedire o limitare l'accesso al Sito o a qualsiasi sua parte.",
    "codeCopying": "Copiare o adattare il software del Sito, inclusi, a titolo esemplificativo ma non esaustivo, Flash, PHP, HTML, JavaScript o altri codici.",
    "reverseEngineering": "Salvo quanto consentito dalla legge applicabile, è vietato decifrare, decompilare, disassemblare o sottoporre a reverse engineering qualsiasi software che comprenda o in qualsiasi modo costituisca una parte del Sito.",
    "bots": "Fatta eccezione per quanto possa essere il risultato dell'utilizzo standard di un motore di ricerca o di un browser Internet, utilizzare, avviare, sviluppare o distribuire qualsiasi sistema automatizzato, inclusi, a titolo esemplificativo ma non esaustivo, qualsiasi spider, robot, utility cheat, scraper o lettore offline che accede al Sito, o utilizzare o avviare qualsiasi script non autorizzato o altro software.",
    "buyingAgents": "Per effettuare acquisti sul Sito, utilizzare un agente di acquisto o un agente di acquisto.",
    "unauthorizedUse": "Fare qualsiasi uso non autorizzato del Sito, inclusa la raccolta di nomi utente e/o indirizzi e-mail degli utenti tramite mezzi elettronici o di altro tipo allo scopo di inviare e-mail indesiderate o creare account utente tramite mezzi automatizzati o con falsi pretesti.",
    "competition": "Utilizzare il Sito come parte di qualsiasi sforzo per competere con noi o altrimenti utilizzare il Sito e/o il Contenuto per qualsiasi iniziativa volta a generare profitti o impresa commerciale.",
    "advertising": "Utilizzare il Sito per pubblicizzare o offrire in vendita beni e servizi.",
    "profileTransfer": "Vendi o trasferisci in altro modo il tuo profilo.",
    "featuresTitle": "11. Caratteristiche e bug",
    "featuresDescription": "Progettiamo i nostri Servizi con cura, basandoci sulla nostra esperienza e su quella dei clienti che condividono il loro tempo e il loro feedback. Tuttavia, non esiste un servizio che soddisfi tutti. Non garantiamo che i nostri Servizi soddisfino le vostre specifiche esigenze o aspettative.",
    "bugsDescription": "Testiamo inoltre tutte le nostre funzionalità prima di distribuirle. Come per qualsiasi software, i nostri Servizi presentano inevitabilmente dei bug. Monitoriamo i bug segnalati e li risolviamo, in particolare quelli relativi alla sicurezza o alla privacy. Non tutti i bug segnalati verranno corretti e non garantiamo Servizi completamente privi di errori.",
    "correctionsTitle": "12. Correzioni",
    "informationAccuracy": "Il Sito potrebbe contenere informazioni contenenti errori tipografici, inesattezze o omissioni, tra cui descrizioni, prezzi, disponibilità e altre informazioni. Ci riserviamo il diritto di correggere eventuali errori, inesattezze o omissioni e di modificare o aggiornare le informazioni presenti sul Sito in qualsiasi momento, senza preavviso.",
    "siteAvailability": "Non possiamo garantire che il Sito sia disponibile in ogni momento. Potremmo riscontrare problemi hardware, software o di altro tipo, oppure dover eseguire interventi di manutenzione relativi al Sito, con conseguenti interruzioni, ritardi o errori. Ci riserviamo il diritto di modificare, rivedere, aggiornare, sospendere, interrompere o altrimenti modificare il Sito in qualsiasi momento o per qualsiasi motivo, senza preavviso. Accetti che non abbiamo alcuna responsabilità per eventuali perdite, danni o disagi causati dalla tua impossibilità di accedere o utilizzare il Sito durante qualsiasi periodo di inattività o interruzione del Sito. Nulla di quanto contenuto nei presenti Termini di Servizio sarà interpretato come un obbligo per noi di mantenere e supportare il Sito o di fornire correzioni, aggiornamenti o release in relazione ad esso.",
    "userDataTitle": "13. Dati dell'utente",
    "userDataDescription": "Conserveremo alcuni dati che trasmettete al Sito allo scopo di gestirne le prestazioni, nonché i dati relativi al vostro utilizzo del Sito. Sebbene eseguiamo regolarmente backup di routine dei dati, siete gli unici responsabili di tutti i dati che trasmettete o relativi a qualsiasi attività da voi intrapresa utilizzando il Sito. Accettate che non avremo alcuna responsabilità nei vostri confronti per eventuali perdite o danneggiamenti di tali dati e rinunciate a qualsiasi diritto di azione nei nostri confronti derivante da tali perdite o danneggiamenti.",
    "privacyPolicyTitle": "14. Informativa sulla privacy",
    "privacyPolicyDescription": "La privacy e la sicurezza dei dati sono di fondamentale importanza per noi. Ti invitiamo a consultare la nostra Informativa sulla privacy. Utilizzando il Sito, accetti di essere vincolato dalla nostra Informativa sulla privacy, che è parte integrante dei presenti Termini di servizio. Ti informiamo che il Sito è ospitato negli Stati Uniti. Se accedi al Sito da qualsiasi altra regione del mondo con leggi o altri requisiti che regolano la raccolta, l'utilizzo o la divulgazione dei dati personali diversi dalle leggi applicabili negli Stati Uniti, attraverso l'utilizzo continuato del Sito, trasferisci i tuoi dati negli Stati Uniti e accetti che i tuoi dati vengano trasferiti ed elaborati negli Stati Uniti.",
    "liabilityTitle": "15. Responsabilità",
    "liabilityIntroduction": "Menzioniamo la responsabilità in tutti i presenti Termini, ma per riassumerla in un'unica sezione:",
    "liabilityWaiver": "L'utente comprende e accetta espressamente che la Società non sarà responsabile, in base alla legge o all'equità, nei confronti dell'utente o di terzi per eventuali danni diretti, indiretti, incidentali, per mancato guadagno, speciali, consequenziali, punitivi o esemplari, inclusi, a titolo esemplificativo ma non esaustivo, danni per perdita di profitti, avviamento, utilizzo, dati o altre perdite immateriali (anche se la Società è stata informata della possibilità di tali danni), derivanti da: (1) l'uso o l'impossibilità di utilizzare i Servizi; (2) errori, sbagli o inesattezze di contenuti e materiali; (3) lesioni personali o danni alla proprietà, di qualsiasi natura, derivanti dall'accesso e dall'utilizzo del sito; (4) il costo di approvvigionamento di beni e servizi sostitutivi derivanti da beni, dati, informazioni o servizi acquistati o ottenuti o messaggi ricevuti o transazioni effettuate tramite o dai Servizi; (5) qualsiasi accesso o utilizzo non autorizzato dei nostri server sicuri e/o di tutte le informazioni personali e/o finanziarie ivi memorizzate; (6) qualsiasi interruzione o cessazione della trasmissione da o verso il sito; (7) eventuali bug, virus, trojan horse o simili che potrebbero essere trasmessi al o attraverso il sito da terze parti e/o; (8) eventuali errori od omissioni in qualsiasi contenuto e materiale o per qualsiasi perdita o danno di qualsiasi tipo subito a seguito dell'uso di qualsiasi contenuto pubblicato, trasmesso o altrimenti reso disponibile tramite il sito; (9) dichiarazioni o condotte di terze parti sul servizio; (10) o qualsiasi altra questione relativa ai presenti Termini di servizio o ai Servizi, sia come violazione del contratto, illecito civile (inclusa negligenza attiva o passiva) o qualsiasi altra teoria di responsabilità.",
    "miscellaneousTitle": "16. Varie",
    "miscellaneousDescription": "I presenti Termini di Servizio e qualsiasi politica o regola operativa da noi pubblicata sul Sito o in relazione al Sito costituiscono l'intero accordo e l'intesa tra te e noi. Il mancato esercizio o la mancata applicazione da parte nostra di qualsiasi diritto o disposizione dei presenti Termini di Servizio non costituirà una rinuncia a tale diritto o disposizione. I presenti Termini di Servizio operano nella misura massima consentita dalla legge. Possiamo cedere alcuni o tutti i nostri diritti e obblighi a terzi in qualsiasi momento. Non saremo responsabili per eventuali perdite, danni, ritardi o omissioni causati da cause al di fuori del nostro ragionevole controllo. Qualora una qualsiasi disposizione o parte di una disposizione dei presenti Termini di Servizio venga ritenuta illegale, nulla o inapplicabile, tale disposizione o parte di essa sarà considerata separabile dai presenti Termini di Servizio e non pregiudicherà la validità e l'applicabilità delle restanti disposizioni. Non esiste alcun rapporto di joint venture, partnership, lavoro o agenzia creato tra te e noi a seguito dei presenti Termini di Servizio o dell'utilizzo del Sito. Accetti che i presenti Termini di Servizio non saranno interpretati contro di noi in virtù del fatto di averli redatti. Con la presente rinunci a qualsiasi difesa che potresti avere in base alla forma elettronica dei presenti Termini di servizio e alla mancata firma da parte delle parti per eseguire i presenti Termini di servizio.",
    "contactTitle": "17. Contattaci",
    "contactDescription": "Se hai domande sui Termini di servizio, contattaci.",
    "neverCap": "NeverCap",
    "site": "Sito",
    "services": "Servizi"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
