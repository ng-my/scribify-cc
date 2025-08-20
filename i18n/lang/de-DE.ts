// 德语
let message = {
  // 首页
  HomePage: {
    home: "Alle Transkripte",
    times:
      "{times} kostenlose Transkriptionen pro Tag, {left} heute verbleibend. ",
    tips: "Upgraden Sie auf Pro für unbegrenzte Transkriptionen.",
    update: "Jetzt upgraden",
    rename: "Umbenennen",
    delete: "Löschen",
    cancel: "Abbrechen",
    confirm: "Erstellen",
    dialogLabel: "Ordnername",
    recently: "Zuletzt verwendete Dateien",
    loading: "Laden",
    tour: {
      step0: {
        title: "Willkommen bei {name}",
        tip: "Hier können Sie:",
        content:
          "Einzelgespräche, Meetings, Vorlesungen und mehr transkribieren",
        next: "Loslegen"
      },
      step1: {
        title: "Dateien transkribieren",
        content:
          "Unterstützt drei Transkriptionsmethoden: lokale Dateien, Links und Aufnahmen."
      },
      step2: {
        title: "Ordner erstellen",
        content:
          'Klicken Sie auf das "+", um einen Ordner zu erstellen und Ihre Dateien zu organisieren.'
      },
      step3: {
        title: "Transkriptionsdetails anzeigen und bearbeiten",
        content:
          "Klicken Sie auf das Element, um Transkriptionsdetails anzuzeigen, zu bearbeiten und zu übersetzen."
      },
      next: "Weiter",
      finish: "Verstanden"
    },
    export: {
      export: "Exportieren",
      title: "Ihr Export wird erstellt",
      title2: "Ihre Datei ist bereit",
      singleLoadingContent: "1 Datei wird komprimiert.",
      singleSuccessContent: "1 Datei wurde komprimiert.",
      loadingContent: "{num} Dateien werden komprimiert.",
      successContent: "{num} Dateien wurden komprimiert.",
      cancel: "Export abbrechen",
      error: "Exportfehler",
      dialog: {
        title: "Warnung",
        content: "Export abbrechen?",
        cancel: "Export abbrechen",
        continue: "Export fortsetzen"
      }
    },
    welcome: {
      title: "Willkommen bei Scribify!",
      description: "Hier können Sie:",
      transcribe:
        "Mühelos mit Scribify transkribieren – verwandeln Sie Sprachgespräche sofort in klaren, durchsuchbaren und teilbaren Text.",
      precision:
        "Erhalten Sie präzise Transkripte mit Sprecherkennung und Zeitstempeln sofort.",
      translate:
        "Überwinden Sie Sprachbarrieren: Übersetzen Sie Transkripte in mehr als 200 Sprachen mit Leichtigkeit.",
      edit: "Bearbeiten, verfeinern und exportieren Sie Ihre Transkripte in Formaten, die Ihren Anforderungen entsprechen.",
      collaborate:
        "Arbeiten Sie zusammen, indem Sie Ihren transkribierten Text mit anderen teilen.",
      button: "Loslegen",
      tip: "Bereit, Audio in transkribierten Text umzuwandeln? Beginnen Sie jetzt mit der Erkundung!",
      tip2: "Jetzt erkunden!",
      tip1: "Bereit, Audio in transkribierten Text umzuwandeln? "
    },
    subscriptionModal: {
      left: {
        title: "Holen Sie sich den Pro-Plan für mehr Funktionen",
        c1: "Unbegrenzte Transkriptionen",
        c2: "10-Stunden-Uploads",
        c3: "Höchste Priorität",
        c4: "99% Transkriptionsgenauigkeit",
        c5: "Über 100 unterstützte Sprachen",
        c6: "Sprechererkennung",
        c7: "Transkriptübersetzung",
        t1: "Unbegrenzte Transkriptionen für eine Person.",
        t2: "Jede Datei kann bis zu 10 Stunden / 5 GB lang sein. Laden Sie 50 Dateien gleichzeitig hoch.",
        t3: "Wir transkribieren Ihre Dateien immer so schnell wie möglich mit höchster Priorität."
      },
      right: {
        title: "Pro-Plan erhalten",
        yearly: "Jährlich",
        monthly: "Monatlich",
        save: "Ersparnis",
        preMonth: "pro Monat",
        preYear: "pro Jahr",
        firstMonth: "erster Monat",
        afterwards: "danach"
      },
      subscribe: "Abonnieren"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Fehlgeschlagen",
      selected: "Ausgewählt",
      success: "Erfolgreich",
      fileList: "Dateiliste"
    },
    dialog: {
      move: {
        title: "Verschieben",
        label: "Ordner auswählen",
        placeholder: "Ordner auswählen",
        confirm: "Verschieben",
        cancel: "Abbrechen"
      },
      rename: {
        title: "Umbenennen",
        label: "Dateiname",
        confirm: "Umbenennen",
        cancel: "Abbrechen"
      },
      delete: {
        title: "Löschen",
        file: "Datei",
        files: "Dateien",
        label:
          "Möchten Sie die Löschung bestätigen? Diese Aktion kann nicht rückgängig gemacht werden.",
        confirm: "Löschen",
        cancel: "Abbrechen"
      },
      share: {
        title: "Teilen",
        label:
          "Jeder mit dem folgenden sicheren Link kann diese Transkript und die zugehörige Mediendatei ansehen.",
        confirm: "Link kopieren",
        success: "Erfolgreich kopiert"
      },
      export: {
        title: "Exportieren",
        select: "Wählen Sie das benötigte Format",
        settings: "Einstellungen",
        speaker: "Sprecher einschließen",
        timecodes: "Zeitcodes einschließen",
        confirm: "Exportieren",
        cancel: "Abbrechen",
        selectErr: "Bitte wählen Sie ein oder mehrere Formate aus"
      }
    },
    search: {
      placeholder: "Suchen"
    },
    recently: "Zuletzt",
    record: "Aufnehmen",
    transcribe: "Transcribieren",
    unclassified: "Unklassifizierte Ordner",
    buttons: {
      transcribe: "Dateien transcribieren",
      url: "Links transcribieren",
      record: "Aufnehmen und transcribieren",
      recording: "Aufnahme..."
    },
    delSuccess: "Erfolgreich gelöscht",
    create: "Erstellen",
    endRecord: {
      title: "Hinweis",
      content:
        "Sie nehmen auf. Diese Aktion beendet die Aufnahme. Möchten Sie die Aufnahme beenden?",
      confirm: "Aufnahme Fortsetzen",
      cancel: "Aufnahme Beenden"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Aufnehmen",
      pause: "Pausieren",
      resume: "Fortsetzen",
      stop: "Stoppen",
      endRecord: "Aufnahme beenden",
      delete: "Löschen",
      transcribe: "Transcribieren",
      permissionDenied:
        "Mikrofonberechtigung verweigert oder Gerät existiert nicht",
      dialog: {
        delete: {
          title: "Warnung",
          label: "Möchten Sie diese Aufnahme wirklich löschen?",
          confirm: "Löschen",
          cancel: "Abbrechen"
        },
        complete: {
          title: "Aufnahme abgeschlossen",
          label:
            "Die Aufnahme hat 10 Stunden erreicht und ist automatisch gestoppt. Bitte transcribieren.",
          confirm: "Verstanden"
        },
        speaker: {
          content:
            "Für die Sprecheridentifikation sind Dateien auf 3 Stunden begrenzt. Bitte deaktivieren Sie '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Online-Medien transcribieren",
        title: "Links einfügen",
        label:
          "Fügen Sie Ihren Video- oder Audio-Link von YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram und weiteren Plattformen ein...",
        confirm: "Hinzufügen",
        cancel: "Abbrechen",
        // Bitte geben Sie eine gültige URL ein
        errorTitle:
          "Die eingegebene URL ist ungültig. Bitte überprüfen Sie und versuchen Sie es erneut.",
        linkName: "Link"
      },
      file: {
        orTitle: "Online-Medien transcribieren",
        dialogTitle: "Dateien transcribieren",
        tip1: "Dateien hierher ziehen oder klicken zum Durchsuchen",
        tip2: "Klicken zum Durchsuchen",
        or: "oder",
        supported: "Unterstützte Formate"
      },
      del: {
        title: "Warnung",
        content:
          "Alle Fortschritte gehen verloren. Möchten Sie die Transkription abbrechen?",
        cancel: "Bestätigen Sie Abbrechen",
        confirm: "Fortsetzen"
      },
      files: "Dateien",
      resultDialogTitle: "Dateien transcribieren",
      resultDialogTitle2: "Datei transkribieren",
      cancel: "Abbrechen",
      confirm: "Transcribieren",
      return: "Zurück",
      addMore: "Mehr hinzufügen",
      language: "Mediensprache",
      failed: "Fehlgeschlagen",
      tooLarge: "Die Datei überschreitet das Limit (5G).",
      linkUpload: "Hochladen",
      fileFormat: "Dateiformat nicht erlaubt",
      localFiles: "Lokale Dateien",
      pasteLink: "Online-Link",
      uploadErr: "Uploadfehler",
      hashErr: "Hash-Fehler",
      table: {
        status: "Status",
        file: "Datei",
        size: "Größe",
        noData: "Keine Daten"
      },
      maxFileNum: "Die Anzahl der Dateien darf {num} nicht überschreiten.",
      speaker: "Sprecher identifizieren",
      speakerLabel:
        "Automatisch erkennen, wer spricht",
      guest: {
        transcribe: "Transkribieren",
        file: "Datei",
        audio: "Audio-/Videodatei",
        Uploading: "Hochladen..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Kürzlich",
      popular: "Beliebt",
      other: "Andere",
      searchLanguage: "Sprache suchen",
      noMatch: "Keine passende Sprache gefunden",
      English: "Englisch",
      "English(US)": "Englisch (US)",
      "English(UK)": "Englisch (UK)",
      Spanish: "Spanisch",
      Portuguese: "Portugiesisch",
      French: "Französisch",
      Italian: "Italienisch",
      German: "Deutsch",
      Dutch: "Niederländisch",
      Polish: "Polnisch",
      Danish: "Dänisch",
      Japanese: "Japanisch",
      Korean: "Koreanisch",
      Hungarian: "Ungarisch",
      Czech: "Tschechisch",
      Chinese: "Chinesisch",
      Hebrew: "Hebräisch",
      Arabic: "Arabisch",
      Azerbaijani: "Aserbaidschanisch",
      Estonian: "Estnisch",
      Belarusian: "Weißrussisch",
      Bulgarian: "Bulgarisch",
      Icelandic: "Isländisch",
      Bosnian: "Bosnisch",
      Persian: "Persisch",
      Russian: "Russisch",
      "Chinese(Traditional)": "Chinesisch (Traditionell)",
      Finnish: "Finnisch",
      Kazakh: "Kasachisch",
      Galician: "Galicisch",
      Catalan: "Katalanisch",
      "Chinese(Simplified)": "Chinesisch (Vereinfacht)",
      Kannada: "Kannada",
      Croatian: "Kroatisch",
      Latvian: "Lettisch",
      Lithuanian: "Litauisch",
      Romanian: "Rumänisch",
      Marathi: "Marathi",
      Malay: "Malaiisch",
      Macedonian: "Mazedonisch",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalesisch",
      Norwegian: "Norwegisch",
      Swedish: "Schwedisch",
      Serbian: "Serbisch",
      Slovak: "Slowakisch",
      Slovenian: "Slowenisch",
      Swahili: "Suaheli",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thailändisch",
      Turkish: "Türkisch",
      Welsh: "Walisisch",
      Urdu: "Urdu",
      Ukrainian: "Ukrainisch",
      Greek: "Griechisch",
      Armenian: "Armenisch",
      Hindi: "Hindi",
      Indonesian: "Indonesisch",
      Vietnamese: "Vietnamesisch",
      Albanian: "Albanisch",
      Amharic: "Amharisch",
      Assamese: "Assamesisch",
      Occitan: "Okzitanisch",
      Bashkir: "Baschkirisch",
      Basque: "Baskisch",
      Breton: "Bretonisch",
      Tibetan: "Tibetisch",
      Faroese: "Färöisch",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisch",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitianisch-Kreolisch",
      Hausa: "Hausa",
      Latin: "Latein",
      Lao: "Laotisch",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgisch",
      Malagasy: "Malagasy",
      Maltese: "Maltesisch",
      Malayalam: "Malayalam",
      Mongolian: "Mongolisch",
      Bengali: "Bengalisch",
      Burmese: "Birmanisch",
      Punjabi: "Punjabi",
      Pashto: "Paschtu",
      Sinhala: "Singhalesisch",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadschikisch",
      Tatar: "Tatarisch",
      Telugu: "Telugu",
      Turkmen: "Turkmenisch",
      Uzbek: "Usbekisch",
      Hawaiian: "Hawaiianisch",
      "Norwegian Nynorsk": "Norwegisch (Nynorsk)",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisch",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanisch",
      Cantonese: "Kantonesisch",
      Abkhaz: "Abchasisch",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Awarisch",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irisch",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetisch",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesisch",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Nord-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Belutschisch",
      bho: "Bhojpuri",
      bua: "Burjatisch",
      chm: "Mari (Wiese)",
      Chamorro: "Chamorro",
      Chechen: "Tschetschenisch",
      chk: "Chuukesisch",
      Chuvash: "Tschuwaschisch",
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
      "ndc-ZW": "Ndau (Simbabwe)",
      "South Ndebele": "Süd-Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (Westafrikanische Schrift)",
      "French(Canada)": "Französisch (Kanada)",
      Fijian: "Fidschianisch",
      fon: "Fon",
      "Western Frisian": "Westfriesisch",
      fur: "Friaulisch",
      Fulah: "Fulfulde",
      Kongo: "Kongo",
      Kalaallisut: "Grönländisch",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrückisch",
      Kyrgyz: "Kirgisisch",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsisch",
      "crh-Latn": "Krimtatarisch (Lateinisch)",
      crh: "Krimtatarisch (Kyrillisch)",
      Quechua: "Quechua",
      Kurdish: "Kurdisch (Kurmandschi)",
      ckb: "Kurdisch (Sorani)",
      trp: "Kokborok",
      ltg: "Lettgallisch",
      lij: "Ligurisch",
      Limburgish: "Limburgisch",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisch",
      rom: "Romani",
      mad: "Maduresisch",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaiisch (Jawi)",
      Marshallese: "Marshallesisch",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Osthuastekisches Nahuatl",
      "Southern Sotho": "Süd-Sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamentu",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugiesisch (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Kiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapotekisch",
      "Northern Sami": "Nordsamisch",
      Samoan: "Samoanisch",
      kri: "Krio",
      crs: "Seychellenkreol",
      Sango: "Sango",
      "sat-Latn": "Santali (Lateinisch)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swazi",
      "Scottish Gaelic": "Schottisch-Gälisch",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Lateinisch)",
      Tahitian: "Tahitianisch",
      Tonga: "Tongaisch",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuwinisch",
      war: "Waray",
      mak: "Makassarisch",
      vec: "Venezianisch",
      Uyghur: "Uigurisch",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtisch",
      szl: "Schlesisch",
      scn: "Sizilianisch",
      hil: "Hiligaynon",
      jam: "Jamaikanisch-Kreolisch",
      sah: "Jakutisch",
      ace: "Acehnesisch",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Lateinisch)",
      Inuktitut: "Inuktitut (Silbenschrift)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "oder", // 或
    LoginBtn: "Mit E-Mail anmelden",
    LoginGoogle: "Mit Google anmelden",
    SignupBtn: "Mit E-Mail registrieren",
    SignupGoogle: "Mit Google registrieren",
    SignupDes:
      "Registrieren Sie sich heute und erleben Sie die Magie – kostenlos.",
    SignupTitle: "Präzise & unbegrenzte Transkription",
    signup: "Registrieren", // 注册
    sign_up: "Registrieren", // 注册
    loginByGoogle: "Mit Google fortfahren", // 使用Google登录
    emailAddress: "Bitte geben Sie Ihre E-Mail-Adresse ein", // 请输入您的邮箱
    createAccount: "Neues Konto erstellen", // 创建账户
    accountExists: "Haben Sie bereits ein Konto? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree:
        "Durch das Fortfahren stimmen Sie unseren {terms} und {policy} zu.",
      terms: "Bedingungen",
      policy: "Datenschutzrichtlinie"
    },
    setPassword: "Passwort setzen", // 设置密码
    code: "Bestätigungscode", // 验证码
    resend: "Erneut senden", // 重新发送
    enterPassword: "Passwort: Mindestens 6 Zeichen.", // 请输入密码
    passwordLeval: "Passwortstärke", // 密码强度
    Weak: "Schwach", // 弱 中 强
    Medium: "Mittel", // 弱 中 强
    Strong: "Stark", // 弱 中 强
    confirmPassword: "Passwort bestätigen", // 确认密码
    invalidEmail: "Ungültige E-Mail-Adresse", // 无效的邮箱地址
    logInDirectly:
      "Dieses Konto existiert bereits. Bitte melden Sie sich direkt an.", // 账户已存在，请直接登录
    codeErrorTryAgain:
      "Bestätigungscode fehlerhaft. Bitte versuchen Sie es erneut.", // 验证码错误，请重试
    atLeastSix: "Das Passwort muss mindestens 6 Zeichen lang sein.", // 密码长度至少6位
    passwordNotMatch:
      "Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut.", // 密码不匹配，请重试
    login: "Anmelden", // 登录
    log_in: "Anmelden", // 登录
    log_In: "Anmelden", // 登录
    password: "Passwort", // 密码
    forgotPassword: "Passwort vergessen?", // 忘记密码？
    noAccount: "Haben Sie kein Konto? ", // 没有账户？注册
    accountNotExists: "Dieses Konto existiert nicht.", // 账户不存在
    passwordError: "Passwortfehler", // 密码错误
    sendCode: "Bestätigungscode senden", // 发送验证码
    resetPassword: "Passwort zurücksetzen", // 重置密码
    resetYourPassword: "Ihr Passwort zurücksetzen", // 重置你的密码
    newOldCantSame:
      "Das neue Passwort darf nicht mit dem alten übereinstimmen.", // 新密码与旧密码不能相同
    passwordResetOk: "Passwort erfolgreich zurückgesetzt！", // 密码重置成功！
    signupToSaveProgress:
      "Schließen Sie die Anmeldung ab, um Ihren Fortschritt zu speichern.",
    tip: "Hinweis",
    tipContentEmail:
      "Wir haben soeben Ihr Anmeldekennwort für das Konto an Ihre E-Mail gesendet.",
    tipContentPassword:
      "Bitte überprüfen Sie Ihren Posteingang und melden Sie sich mit Ihrer E-Mail und Ihrem Kennwort an.",
    codeToEmail:
      "Wir haben soeben einen Bestätigungscode an Ihre E-Mail gesendet. Bitte überprüfen Sie Ihren Posteingang und fügen Sie den Bestätigungscode oben ein."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementplan",
    freeversion: "Kostenlos",
    transcribeTimesDay: "3 Transkriptionen täglich",
    uploadMinutes: "30-Minuten-Uploads",
    lowerPriority: "Niedrigere Priorität",
    currentPlan: "Aktueller Plan",
    professionalEdition: "Professional Edition",
    unlimitedTranscription: "Unbegrenzte Transkription",
    unlimitedNumberOfTimes: "Unbegrenzte Transkriptionshäufigkeit und -dauer.",
    filesUploadedAtOnce:
      "Jede Datei kann bis zu 10 Stunden lang / 5 GB groß sein. 50 Dateien gleichzeitig hochladen.",
    highestPriority: "Höchste Priorität",
    weWillGiveTheHighest:
      "Wir transkribieren Ihre Dateien immer so schnell wie möglich mit höchster Priorität.",
    theFirstMonth: "Der erste Monat",
    subscribeTo: "abonnieren",
    basicVersionFree: "Basisversion (kostenlos)",
    return: "Zurück",
    annualize: "jährlich",
    monthly: "monatlich",
    everyYear: "jedes Jahr",
    saved: "gespart",
    byTheMonth: "pro Monat",
    firstMonth: "erster Monat",
    afterwardsEveryMonth: "Anschließend jeden Monat",
    manageSubscription: "Abonnement verwalten",
    professionalYearbook: "Professional-Jahresabo",
    professionalMonthly: "Professional-Monatsabo",
    subscriptionWillCancelledOn: "Ihr Abonnement wird am",
    displayLanguage: "Anzeigesprache",
    update: "Jetzt upgraden",
    basicversion: "Basisversion (Kostenlos)",
    daily: "{start} von {end} täglichen Transkriptionen verwendet",
    upgradetoPro: "Auf Pro upgraden",
    accountSetting: "Kontoeinstellungen",
    logOut: "Abmelden",
    account: "Konto",
    email: "E-Mail",
    id: "ID",
    password: "Passwort",
    resetPassword: "Passwort zurücksetzen",
    logIn: "Anmelden",
    tryForFree: "Kostenlos testen",
    notFund: "Nicht gefunden",
    couldntFind: "Wir konnten nicht finden, wonach Sie gesucht haben.",
    proAnnual: "Pro-Jahresabo",
    proMonthly: "Pro-Monatsabo",
    perMonth: "pro Monat",
    afterwards: "anschließend",
    accuracy: "Transkriptionsgenauigkeit",
    supported: "unterstützte Sprachen",
    identification: "Sprechererkennung",
    transcriptSranslation: "Transkriptübersetzung",
    perYear: "pro Jahr",
    getProPlan: "Pro-Plan erhalten",
    changeToAnnual: "Auf Jahresabo wechseln",
    automaticRenewalon: "Automatische Verlängerung am",
    eachMonth: "Automatische Verlängerung am {time} jedes Monats.",
    automaticRenewal:
      "Automatische Verlängerung fehlgeschlagen, bitte überprüfen Sie die Zahlungsmethode.",
    eachYear: "Automatische Verlängerung am {time} jedes Jahres.",
    returnAccountSetting: "Zurück",
    needsToWaitLonger:
      "Warten Sie länger, bis Ihre Dateien transkribiert werden.",
    freeThreeTimesDay: "3 Dateien täglich kostenlos transkribieren.",
    oneFileUploaded:
      "Jede Datei kann bis zu 30 Minuten lang sein. Laden Sie jeweils 1 Datei hoch.",
    uploadWithinHours: "10-Stunden-Uploads",
    yourSubscription: "Ihr Abonnement wird am {time} gekündigt.",
    save: "Sparen",
      freeversion2: "Kostenloser Plan"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinesisch (vereinfacht)",
      "Chinese(Traditional)": "Chinesisch (traditionell)",
      Japanese: "Japanisch",
      Danish: "Dänisch",
      German: "Deutsch",
      English: "Englisch",
      Spanish: "Spanisch",
      French: "Französisch",
      Italian: "Italienisch",
      Hungarian: "Ungarisch",
      Dutch: "Niederländisch",
      Norwegian: "Norwegisch",
      Polish: "Polnisch",
      Portuguese: "Portugiesisch",
      Finnish: "Finnisch",
      Swedish: "Schwedisch",
      Turkish: "Türkisch",
      Greek: "Griechisch",
      Russian: "Russisch",
      Ukrainian: "Ukrainisch",
      Hebrew: "Hebräisch",
      Arabic: "Arabisch",
      Korean: "Koreanisch"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Kostenloses Testen~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Treten Sie der Warteliste bei, um die neuesten NuxtPro-Nachrichten zuerst zu erhalten und Rabatte zu erhalten!",
      placeholder: "Geben Sie Ihre E-Mail-Adresse ein",
      button: "Warteliste beitreten",
      joinCountMessage:
        "🔥 Früher Benutzer #{count} hat sich der Warteliste reingeschrieben!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "Dies ist ein Demo",
      corpInfo: "Korporationsinformation"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "Video-Downloadfehler"
      },
      mse: {
        code: 2,
        msg: "Stream-Anhängenfehler"
      },
      parse: {
        code: 3,
        msg: "Parsenfehler"
      },
      format: {
        code: 4,
        msg: "falsches Format"
      },
      decoder: {
        code: 5,
        msg: "Decodierfehler"
      },
      runtime: {
        code: 6,
        msg: "Grammatikfehler"
      },
      timeout: {
        code: 7,
        msg: "Abspieltimeout"
      },
      other: {
        code: 8,
        msg: "Andere Fehler"
      }
    },
    HAVE_NOTHING:
      "Es gibt keine Information darüber, ob Audio/Video bereit ist",
    HAVE_METADATA: "Audio/Video-Metadaten sind bereit ",
    HAVE_CURRENT_DATA:
      "Daten zum aktuellen Abspielstand sind verfügbar, aber es gibt nicht genug Daten, um das nächste Frame/Millisekunde abzuspielen",
    HAVE_FUTURE_DATA:
      "Aktuell und mindestens ein Frame von Daten ist verfügbar",
    HAVE_ENOUGH_DATA: "Die verfügbaren Daten reichen aus, um abzuspielen",
    NETWORK_EMPTY: "Audio/Video wurde noch nicht initialisiert",
    NETWORK_IDLE:
      "Audio/Video ist aktiv und wurde für Ressourcen ausgewählt, aber keine Netzwerkressource wird verwendet",
    NETWORK_LOADING: "Der Browser lädt die Daten herunter",
    NETWORK_NO_SOURCE: "Keine Audio/Video-Quelle gefunden",
    MEDIA_ERR_ABORTED: "Der Abrufprozess wurde vom Benutzer abgebrochen",
    MEDIA_ERR_NETWORK: "Fehler beim Herunterladen aufgetreten",
    MEDIA_ERR_DECODE: "Fehler beim Decodieren aufgetreten",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/Video wird nicht unterstützt",
    REPLAY: "Wiedergabe",
    ERROR: "Netzwerk ist offline",
    PLAY_TIPS: "Abspielen",
    PAUSE_TIPS: "Pausieren",
    PLAYNEXT_TIPS: "Nächstes abspielen",
    DOWNLOAD_TIPS: "Herunterladen",
    ROTATE_TIPS: "Drehen",
    RELOAD_TIPS: "Neu laden",
    FULLSCREEN_TIPS: "Vollbild anzeigen",
    EXITFULLSCREEN_TIPS: "Vollbild verlassen",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
    TEXTTRACK: "Untertitel",
    PIP: "PIP",
    SCREENSHOT: "Bildschirmfoto",
    LIVE: "LIVE",
    OFF: "Aus",
    OPEN: "Öffnen",
    MINI_DRAG: "Klicken und halten zum Ziehen",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Bitte versuchen Sie es erneut",
    REFRESH: "Aktualisieren",
    FORWARD: "vorwärts",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Untertitel anzeigen",
    TM_SUBTITLE_HIDE_TIPS: "Untertitel ausblenden",
    TM_MINIMIZE_TIPS: "Video ausblenden"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert: 25. August 2025",
    policyDescription:
      "Diese Richtlinie beschreibt, wie Scribify (nachfolgend „Scribify“, „unser“, „wir“, „uns“ genannt) Ihre persönlichen Daten sammelt, verwendet und weitergibt, wenn Sie unsere Dienste, Websites nutzen",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "und Software (zusammen die „Dienste“).",
    policyAgreement:
      "Bitte lesen Sie diese Datenschutzrichtlinie sorgfältig durch und stellen Sie sicher, dass Sie sie verstehen. Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Datenschutzrichtlinie einverstanden. Sollten Sie mit der Verwendung Ihrer personenbezogenen Daten gemäß dieser Richtlinie nicht einverstanden sein, müssen Sie die Nutzung unserer Dienste unverzüglich einstellen.",
    policyOverview:
      "In dieser Richtlinie legen wir dar, welche Daten wir erheben und warum, wie wir mit Ihren Daten umgehen und welche Rechte Sie in Bezug auf Ihre Daten haben. Wir verkaufen Ihre Daten nicht.",
    scopeTitle: "1. Geltungsbereich dieser Datenschutzrichtlinie",
    whatWeCollectTitle: "2. Was wir sammeln und warum",
    accessShareTitle:
      "3. Wann wir auf Ihre Informationen zugreifen oder sie weitergeben",
    secureDataTitle: "4. Wie wir Ihre Daten schützen",
    deleteContentTitle: "5. Was passiert, wenn Sie Ihre Inhalte löschen",
    locationTitle: "6. Standort und Daten",
    childrenPrivacyTitle: "7. Datenschutz für Kinder",
    updatesTitle: "8. Aktualisierungen dieser Datenschutzrichtlinie",
    contactUsTitle: "9. Kontakt",
    identityAccessTitle: "2.1 Identität und Zugriff",
    billingInfoTitle: "2.2 Rechnungsinformationen",
    productInteractionsTitle: "2.3 Produktinteraktionen",
    websiteInteractionsTitle: "2.4 Website-Interaktionen",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Freiwillige Korrespondenz",
    scopeContent:
      "Diese Datenschutzrichtlinie gilt ausschließlich für unsere Erhebung und Verarbeitung von Informationen über Nutzer der Dienste. Diese Datenschutzrichtlinie gilt nicht für Dienste, Websites oder Software von Drittanbietern, die mit uns verlinkt sind (unabhängig davon, ob wir diese Links bereitstellen oder andere Nutzer sie teilen), und auch nicht für Inhalte, Daten, Anwendungen oder Materialien von Drittanbietern. Wir empfehlen Ihnen, die Datenschutzrichtlinien von Websites oder Software von Drittanbietern zu prüfen, bevor Sie ihnen Informationen zur Verfügung stellen.",
    collectPrinciple:
      "Unser Leitprinzip ist es, nur das zu sammeln, was wir brauchen. In der Praxis bedeutet das Folgendes:",
    identityAccessContent:
      "Wenn Sie sich für eines unserer Produkte anmelden, fragen wir nach Ihren persönlichen Daten wie Ihrem Namen und Ihrer E-Mail-Adresse. Dies dient der Bereitstellung wichtiger Produktfunktionen und ermöglicht es uns, Ihnen Produktaktualisierungen und andere wichtige Informationen zu senden.",
    billingInfoContent:
      "Wenn Sie sich für ein kostenpflichtiges Produkt anmelden, werden Sie aufgefordert, Ihre Zahlungsinformationen und Ihre Rechnungsadresse anzugeben. Die Zahlungsinformationen werden direkt an unseren Zahlungsabwickler übermittelt und gelangen nicht auf unsere Server.",
    productInteractionsContent:
      "Wir speichern die Inhalte, die Sie hochladen, empfangen oder in Ihren Produktkonten verwalten, auf unseren Servern. Sofern Sie diese Inhalte nicht löschen, behalten wir sie möglicherweise, solange Ihr Konto aktiv ist.",
    websiteInteractionsContent:
      "Wir erfassen Informationen über Ihr Surfverhalten für Analyse- und Statistikzwecke, beispielsweise zur Messung der Conversion-Rate und zum Experimentieren mit neuen Produktdesigns. Dazu gehören beispielsweise Ihre Browser- und Betriebssystemversion, Ihre IP-Adresse, die von Ihnen besuchten Webseiten und deren Ladezeit sowie die Website, über die Sie zu uns gelangt sind. Wenn Sie ein Konto besitzen und angemeldet sind, werden diese Webanalysedaten an Ihre IP-Adresse und Ihr Benutzerkonto gebunden, bis Ihr Konto nicht mehr aktiv ist.",
    cookiesContent1:
      "Wir verwenden außerdem dauerhafte Erstanbieter-Cookies und einige Drittanbieter-Cookies, um bestimmte Einstellungen zu speichern, Ihnen die Nutzung unserer Anwendungen zu erleichtern, A/B-Tests durchzuführen und einige Analysen zu unterstützen.",
    cookiesContent2:
      "Ein Cookie ist ein Text, der von Ihrem Browser gespeichert wird. Er kann dabei helfen, Anmeldeinformationen und Website-Einstellungen zu speichern. Außerdem können Informationen wie Browsertyp, Betriebssystem, besuchte Webseiten, Besuchsdauer, angezeigte Inhalte und andere Clickstream-Daten erfasst werden. Sie können die Cookie-Speicherungseinstellungen anpassen und einzelne Cookies in Ihren Browsereinstellungen akzeptieren oder blockieren. Allerdings funktionieren unsere Apps und andere Aspekte unseres Dienstes möglicherweise nicht ordnungsgemäß, wenn Sie Cookies deaktivieren.",
    voluntaryCorrespondenceContent:
      "Wenn Sie uns eine E-Mail mit einer Frage oder einer Bitte um Hilfe senden, bewahren wir diese Korrespondenz, einschließlich Ihrer E-Mail-Adresse, auf, sodass wir bei zukünftigen Kontaktaufnahmen auf einen Verlauf der bisherigen Korrespondenz zurückgreifen können.",
    accessShareContent1:
      "Zur Bereitstellung der von Ihnen angeforderten Produkte oder Dienstleistungen. Wir nutzen einige Subprozessoren von Drittanbietern, um unsere Anwendungen auszuführen und Ihnen die Dienste bereitzustellen. Dazu gehören Cloud- und Analyseanbieter.",
    accessShareContent2:
      "Um Missbrauch zu untersuchen, zu verhindern oder entsprechende Maßnahmen zu ergreifen. Der Zugriff auf das Konto eines Kunden bei der Untersuchung eines potenziellen Missbrauchs ist das letzte Mittel. Wir möchten die Privatsphäre und Sicherheit sowohl unserer Kunden als auch der Personen schützen, die uns Probleme melden, und wir tun unser Bestes, um diese Verantwortlichkeiten während des gesamten Prozesses auszugleichen. Sollten wir feststellen, dass Sie unsere Produkte für einen verbotenen Zweck nutzen, werden wir die erforderlichen Maßnahmen ergreifen und gegebenenfalls auch die zuständigen Behörden benachrichtigen.",
    accessShareContent3: "Wenn dies nach geltendem Recht erforderlich ist.",
    userDataRequests:
      "Anfragen nach Nutzerdaten. Wir reagieren grundsätzlich nicht auf Anfragen von Behörden nach Nutzerdaten, es sei denn, wir sind dazu durch ein Gerichtsverfahren oder in bestimmten Fällen im Falle einer dringenden Anfrage gezwungen. Sollten US-amerikanische Strafverfolgungsbehörden jedoch über einen erforderlichen Haftbefehl, eine strafrechtliche Vorladung oder einen Gerichtsbeschluss verfügen, der uns zur Weitergabe von Daten verpflichtet, sind wir verpflichtet, diesen nachzukommen. Ebenso reagieren wir nur auf Anfragen von Behörden außerhalb der USA, wenn die US-Regierung uns im Rahmen eines Rechtshilfeabkommens dazu verpflichtet. Es ist unsere Politik, betroffene Nutzer vor der Datenweitergabe zu benachrichtigen, es sei denn, dies ist uns gesetzlich untersagt und außer in einigen Notfällen.",
    preservationRequests:
      "- Anträge auf Datenaufbewahrung. Ebenso sehen unsere Grundsätze vor, Anträge auf Datenaufbewahrung nur dann zu erfüllen, wenn dies durch den US Federal Stored Communications Act, 18 USC Section 2703(f), oder eine ordnungsgemäß zugestellte US-Vorladung in Zivilsachen erforderlich ist. Wir geben gespeicherte Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind oder durch einen Gerichtsbeschluss dazu gezwungen werden, gegen den wir keinen Einspruch einlegen. Darüber hinaus vernichten wir alle gespeicherten Kopien von Kundendaten nach Ablauf der Aufbewahrungsfrist, sofern wir nicht vor Ablauf der erforderlichen Aufbewahrungsfrist einen ordnungsgemäßen Haftbefehl, Gerichtsbeschluss oder eine Vorladung erhalten.",
    taxAudit:
      "Im Falle einer Steuerprüfung sind wir möglicherweise verpflichtet, rechnungsbezogene Daten weiterzugeben. In diesem Fall geben wir nur die erforderlichen Daten weiter, wie z. B. Rechnungsadressen und Informationen zur Steuerbefreiung.",
    secureDataContent1: "Alle Daten werden verschlüsselt über",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "wenn sie von unseren Servern an Ihren Browser übertragen werden.",
    deleteContentContent:
      "Wenn Sie Inhalte löschen, sind diese sofort nicht mehr zugänglich.",
    locationContent:
      "Unsere Produkte und andere Webpräsenzen werden in den USA betrieben. Wenn Sie sich in der Europäischen Union, Großbritannien oder anderswo außerhalb der USA befinden, beachten Sie bitte, dass alle von Ihnen bereitgestellten Informationen in die USA übertragen und dort gespeichert werden. Indem Sie unsere Websites oder Dienste nutzen und/oder uns Ihre personenbezogenen Daten zur Verfügung stellen, stimmen Sie dieser Übertragung zu.",
    childrenPrivacyContent:
      "Die Dienste richten sich nicht an Kinder, und wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie unter 13 Jahre alt sind, übermitteln Sie bitte keine personenbezogenen Daten über die Dienste. Wenn Sie der Meinung sind, dass ein Kind uns personenbezogene Daten unter Verstoß gegen diese Richtlinie übermittelt hat, kontaktieren Sie uns bitte wie unten angegeben.",
    updatesContent:
      "Wir behalten uns das Recht vor, diese Richtlinie bei Bedarf zu aktualisieren, um den geltenden Vorschriften zu entsprechen und neue Praktiken zu berücksichtigen. Bei wesentlichen Änderungen unserer Richtlinien aktualisieren wir das Datum oben auf dieser Seite.",
    contactUsContent1:
      "Wenn Sie Fragen, Kommentare oder Beschwerden zu unserer Datenschutzrichtlinie haben, wenden Sie sich bitte an",
    contactUs: "Kontaktieren Sie uns",
    contactUsContent2:
      "und wir werden uns bemühen, Ihre Beschwerde so schnell wie möglich zu bearbeiten."
  },
  termsOfService: {
    termsOfServiceTitle: "Servicebedingungen",
    lastUpdated: "Zuletzt aktualisiert: 21. September 2022",
    thankYouMessage: "Vielen Dank, dass Sie unsere Produkte verwenden!",
    companyReference:
      "Wenn wir in diesem Dokument „Unternehmen“, „wir“, „unser“ oder „uns“ sagen, beziehen wir uns auf Scribify.",
    servicesDefinition:
      "Wenn wir „Dienste“ sagen, meinen wir jedes von Scribify erstellte und gepflegte Produkt, unabhängig davon, ob es in einem Webbrowser, einer Desktop-Anwendung, einer mobilen Anwendung oder einem anderen Format bereitgestellt wird.",
    termsUpdateNotice:
      "Wir behalten uns das Recht vor, diese Nutzungsbedingungen in Zukunft zu aktualisieren. In der Regel dienen diese Änderungen dazu, einige dieser Bedingungen durch Verlinkung zu einer erweiterten zugehörigen Richtlinie klarzustellen. Bei wesentlichen Änderungen unserer Richtlinien aktualisieren wir das Datum oben auf dieser Seite und informieren die Kontoinhaber entsprechend.",
    acceptanceOfAgreementTitle: "1. Annahme der Vereinbarung",
    scribifyServicesTitle: "2. Die Dienste von Scribify",
    accountTermsTitle: "3. Kontobedingungen",
    paymentRefundsTitle: "4. Zahlung, Rückerstattungen und Planänderungen",
    cancellationTerminationTitle: "5. Stornierung und Kündigung",
    submissionsTitle: "6. Einreichungen",
    uptimeSecurityTitle: "7. Verfügbarkeit und Sicherheit",
    siteManagementTitle: "8. Site-Management",
    copyrightContentTitle: "9. Urheberrecht und Eigentumsrechte an Inhalten",
    prohibitedActivitiesTitle: "10. Verbotene Aktivitäten",
    featuresBugsTitle: "11. Funktionen und Fehler",
    correctionsTitle: "12. KORREKTUREN",
    userDataTitle: "13. Benutzerdaten",
    privacyPolicyTitle: "14. Datenschutz",
    liabilityTitle: "15. Haftung",
    miscellaneousTitle: "16. Sonstiges",
    contactUsTitle: "17. Kontakt",
    acceptanceContent1:
      "Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Vereinbarung einverstanden. Diese stellt einen verbindlichen Vertrag zwischen Ihnen und Scribify dar. Sie erklären, dass Sie diese Bedingungen akzeptieren können und volljährig sind, um einen verbindlichen Vertrag abzuschließen. Die Annahme durch Scribify setzt ausdrücklich voraus, dass Sie allen Bedingungen dieser Vereinbarung zustimmen.",
    acceptanceContent2:
      "Die Dienste sind nicht für Personen unter 18 Jahren bestimmt und sollten nicht von diesen genutzt werden. Durch die Nutzung der Dienste erklären und gewährleisten Sie, dass Sie die vorstehenden Teilnahmevoraussetzungen erfüllen.",
    acceptanceContent3:
      "Die Begriffe „Sie“, „Ihr“, „Sie selbst“ umfassen auch Ihre Mitarbeiter, Vertreter, Geschäftsvertreter und alle anderen Personen, denen Sie über Ihr Konto (wie unten definiert) Zugriff auf die Dienste gewähren. Sie sind dafür verantwortlich, dass alle Personen, die über Ihr Konto auf die Dienste zugreifen, diese Bedingungen kennen und einhalten.",
    acceptanceContent4:
      "Scribify behält sich das Recht vor, diese Bedingungen von Zeit zu Zeit nach eigenem Ermessen zu überarbeiten und zu aktualisieren. Alle Änderungen treten mit ihrer Veröffentlichung sofort in Kraft. Ihre fortgesetzte Nutzung der Dienste nach der Veröffentlichung der überarbeiteten Bedingungen setzt voraus, dass Sie die Änderungen akzeptieren und ihnen zustimmen. Wir bitten Sie, diese Seite regelmäßig zu überprüfen, um über alle Änderungen informiert zu sein, da diese für Sie bindend sind.",
    servicesContent1:
      "Unsere Dienste ermöglichen es Benutzern, Sprachgespräche in transkribierten Text umzuwandeln, der durchsucht, übersetzt und mit anderen geteilt werden kann.",
    servicesContent2:
      "Sie können wählen, ob Sie die kostenlose Version der Dienste („Kostenlose Dienste“) oder die kostenpflichtige Version der Dienste auf Abonnementbasis nutzen möchten, für die möglicherweise Gebühren anfallen (die „Kostenpflichtigen Dienste“).",
    servicesContent3:
      "Wir stellen Ihnen die Dienste zur Verfügung. Sie sind dafür verantwortlich, alle notwendigen Vorkehrungen für den Zugriff auf die Dienste zu treffen.",
    accountTerms1:
      "- Sie sind für die Sicherheit Ihres Kontos verantwortlich. Das Unternehmen haftet nicht für Verluste oder Schäden, die sich aus der Nichteinhaltung dieser Sicherheitsverpflichtung ergeben.",
    accountTerms2:
      "- Sie dürfen die Dienste nicht für rechtswidrige, unethische oder unmoralische Zwecke nutzen.",
    accountTerms3:
      "- Sie sind für alle Inhalte und Aktivitäten verantwortlich, die über Ihr Konto veröffentlicht werden. Dies gilt auch für Inhalte, die von anderen Personen veröffentlicht werden, die entweder (a) Zugriff auf Ihre Anmeldedaten haben oder (b) über eigene Anmeldedaten für Ihr Konto verfügen.",
    accountTerms4:
      "- Sie müssen ein Mensch sein. Konten, die durch „Bots“ oder andere automatisierte Methoden registriert werden, sind nicht zulässig.",
    paymentContent1:
      "Bei kostenpflichtigen Diensten mit kostenloser Testversion informieren wir Sie bei der Anmeldung über die Dauer der Testphase. Nach Ablauf der Testphase ist eine Vorauszahlung erforderlich, um den Dienst weiterhin nutzen zu können. Andernfalls endet der Dienst.",
    paymentContent2:
      "- Wenn Sie von einem kostenlosen Plan auf einen kostenpflichtigen Plan upgraden, belasten wir Ihre Karte sofort und Ihr Abrechnungszeitraum beginnt am Tag des Upgrades.",
    paymentContent3:
      "Alle Gebühren verstehen sich exklusive aller Steuern, Abgaben oder Zölle der Steuerbehörden. Bei Bedarf erheben wir diese Steuern im Auftrag der Steuerbehörde und führen sie an die Steuerbehörden ab. Andernfalls sind Sie für die Zahlung aller Steuern, Abgaben oder Zölle verantwortlich.",
    paymentContent4:
      "- Alle Käufe sind nicht erstattungsfähig. Sie können alle kostenpflichtigen Dienste jederzeit kündigen, indem Sie sich in Ihr Konto einloggen. Bei kostenpflichtigen Abonnements wird Ihre Kündigung zum Ende der aktuellen Laufzeit wirksam, sofern nicht anders angegeben.",
    cancellationContent1:
      "- Wenn Sie den Service vor Ablauf der bezahlten Zeit kündigen, wird Ihre Kündigung sofort wirksam und es entstehen Ihnen keine weiteren Kosten. Wir berechnen nicht genutzte Zeit im letzten Abrechnungszeitraum nicht automatisch anteilig.",
    cancellationContent2:
      "Wir sind berechtigt, Ihr Konto jederzeit und aus beliebigem Grund zu sperren oder zu kündigen und Ihnen die aktuelle oder zukünftige Nutzung unserer Dienste zu verweigern. Eine Sperrung bedeutet, dass Sie keinen Zugriff mehr auf Ihr Konto und dessen Inhalte haben. Die Kündigung führt außerdem zur Löschung Ihres Kontos bzw. Ihres Zugriffs darauf sowie zum Verlust und zur Herausgabe aller Inhalte Ihres Kontos. Wir behalten uns außerdem das Recht vor, die Nutzung unserer Dienste jederzeit und aus beliebigem Grund zu verweigern. Diese Klausel ist notwendig, da statistisch gesehen mindestens eines der Hunderttausenden von Konten, die unsere Dienste nutzen, kriminelle Machenschaften begeht.",
    cancellationContent3:
      "- Verbale, physische, schriftliche oder sonstige Beleidigungen (einschließlich Drohungen mit Beleidigungen oder Vergeltungsmaßnahmen) gegenüber Mitarbeitern oder leitenden Angestellten des Unternehmens können zur sofortigen Kündigung des Kontos führen.",
    submissionsContent:
      "Sie erkennen an und erklären sich damit einverstanden, dass alle Fragen, Kommentare, Vorschläge, Ideen, Rückmeldungen oder sonstigen Informationen bezüglich der Website („Einreichungen“), die Sie uns übermitteln, nicht vertraulich sind und unser alleiniges Eigentum werden. Wir besitzen die ausschließlichen Rechte, einschließlich aller Rechte am geistigen Eigentum, und sind berechtigt, diese Einreichungen für jeden rechtmäßigen Zweck, ob kommerziell oder anderweitig, uneingeschränkt zu verwenden und zu verbreiten, ohne dass wir hierfür eine Anerkennung oder Entschädigung an Sie erhalten. Sie verzichten hiermit auf alle Urheberpersönlichkeitsrechte an solchen Einreichungen und garantieren, dass diese Einreichungen von Ihnen stammen oder dass Sie berechtigt sind, solche Einreichungen einzureichen. Sie erklären sich damit einverstanden, dass wir wegen einer angeblichen oder tatsächlichen Verletzung oder widerrechtlichen Aneignung von Eigentumsrechten an Ihren Einreichungen nicht in Anspruch genommen werden können.",
    uptimeContent1:
      "Die Nutzung der Dienste erfolgt ausschließlich auf Ihr Risiko. Wir stellen diese Dienste „wie besehen“ und „wie verfügbar“ zur Verfügung. Für die meisten unserer Dienste bieten wir keine Service-Level-Agreements an, legen aber großen Wert auf die Verfügbarkeit unserer Anwendungen.",
    uptimeContent2:
      "Wir behalten uns das Recht vor, Ihr Konto vorübergehend zu deaktivieren, wenn Ihre Nutzung die typische Nutzung anderer Kunden der Dienste deutlich übersteigt. Selbstverständlich werden wir Sie vor dem Ergreifen von Maßnahmen kontaktieren, außer in seltenen Fällen, in denen die Nutzung die Leistung des Dienstes für andere Kunden beeinträchtigen könnte.",
    uptimeContent3:
      "Wir ergreifen zahlreiche Maßnahmen zum Schutz und zur Sicherung Ihrer Daten durch Backups, Redundanzen und Verschlüsselung. Wir setzen die Verschlüsselung für die Datenübertragung über das öffentliche Internet durch.",
    uptimeContent4:
      "- Wir nutzen Drittanbieter und Hosting-Partner, um die notwendige Hardware, Software, Vernetzung, Speicherung und zugehörige Technologie bereitzustellen, die zum Ausführen der Dienste erforderlich ist.",
    siteManagementContent:
      "Wir behalten uns das Recht vor, sind jedoch nicht dazu verpflichtet: (1) die Site auf Verstöße gegen diese Servicebedingungen zu überwachen; (2) geeignete rechtliche Schritte gegen jeden einzuleiten, der nach unserem alleinigen Ermessen gegen das Gesetz oder diese Servicebedingungen verstößt, einschließlich, aber nicht beschränkt auf die Meldung des entsprechenden Benutzers an die Strafverfolgungsbehörden; (3) nach unserem alleinigen Ermessen und ohne Einschränkung Ihre Beiträge oder Teile davon abzulehnen, den Zugriff darauf einzuschränken, die Verfügbarkeit zu begrenzen oder sie (soweit technisch machbar) zu deaktivieren; (4) nach unserem alleinigen Ermessen und ohne Einschränkung, Benachrichtigung oder Haftung alle Dateien und Inhalte von der Site zu entfernen oder anderweitig zu deaktivieren, die übermäßig groß sind oder unsere Systeme in irgendeiner Weise belasten; und (5) die Site anderweitig in einer Weise zu verwalten, die unsere Rechte und unser Eigentum schützt und das ordnungsgemäße Funktionieren der Site ermöglicht.",
    copyrightContent1:
      "- Alle auf den Diensten veröffentlichten Inhalte müssen dem US-amerikanischen Urheberrecht entsprechen.",
    copyrightContent2:
      "- Wir erheben keinen Anspruch auf geistiges Eigentum an den Materialien, die Sie den Diensten zur Verfügung stellen. Alle hochgeladenen Materialien verbleiben in Ihrem Eigentum.",
    copyrightContent3:
      "- Wir prüfen Inhalte nicht vorab, behalten uns jedoch das Recht (aber nicht die Pflicht) vor, nach eigenem Ermessen über den Dienst verfügbare Inhalte abzulehnen oder zu entfernen.",
    copyrightContent4:
      "Die Namen, das Erscheinungsbild und die Gestaltung der Dienste unterliegen dem Copyright© des Unternehmens. Alle Rechte vorbehalten. Sie dürfen weder Teile des HTML-, CSS-, JavaScript- noch des visuellen Designelements ohne ausdrückliche schriftliche Genehmigung des Unternehmens duplizieren, kopieren oder wiederverwenden. Die Verwendung des Firmenlogos oder der Service-Logos für Werbezwecke muss von Ihnen beantragt werden. Bitte",
    emailUs: "Schreiben Sie uns eine E-Mail",
    copyrightContent5:
      "Anfragen zur Verwendung von Logos. Wir behalten uns das Recht vor, diese Erlaubnis zu widerrufen, wenn Sie gegen diese Servicebedingungen verstoßen.",
    copyrightContent6:
      "- Sie erklären sich damit einverstanden, keinen Teil der Dienste, die Nutzung der Dienste oder den Zugriff auf die Dienste ohne die ausdrückliche schriftliche Genehmigung des Unternehmens zu reproduzieren, zu vervielfältigen, zu kopieren, zu verkaufen, weiterzuverkaufen oder zu nutzen.",
    copyrightContent7:
      "- Sie dürfen keine andere Website so ändern, dass fälschlich der Eindruck entsteht, sie sei mit den Diensten oder dem Unternehmen verbunden.",
    copyrightContent8:
      "- Wir respektieren die geistigen Eigentumsrechte anderer. Wenn Sie der Meinung sind, dass auf oder über die Website verfügbares Material gegen ein Urheberrecht verstößt, das Sie besitzen oder kontrollieren, kontaktieren Sie uns bitte umgehend.",
    contactUs: "Kontaktieren Sie uns",
    copyrightContent9:
      "Eine Kopie Ihrer Benachrichtigung wird an die Person gesendet, die das in der Benachrichtigung angesprochene Material veröffentlicht oder gespeichert hat. Bitte beachten Sie, dass Sie gemäß geltendem Recht für Schäden haftbar gemacht werden können, wenn Sie in einer Benachrichtigung wesentliche Falschangaben machen. Wenn Sie sich nicht sicher sind, ob das auf der Website befindliche oder von der Website verlinkte Material Ihre Urheberrechte verletzt, sollten Sie zunächst einen Anwalt kontaktieren.",
    prohibitedActivitiesIntro:
      "Sie dürfen die Website nur für den von uns bereitgestellten Zweck aufrufen oder nutzen. Die Website darf nicht für kommerzielle Zwecke genutzt werden, es sei denn, wir unterstützen oder genehmigen diese ausdrücklich.",
    prohibitedActivitiesUserAgreement:
      "Als Benutzer der Site erklären Sie sich damit einverstanden, Folgendes nicht zu tun:",
    prohibitedActivity1:
      "- Systematisches Abrufen von Daten oder anderen Inhalten von der Site, um ohne unsere schriftliche Genehmigung direkt oder indirekt eine Sammlung, Zusammenstellung, Datenbank oder ein Verzeichnis zu erstellen oder zusammenzustellen.",
    prohibitedActivity2:
      "- Uns oder andere Benutzer auszutricksen, zu betrügen oder in die Irre zu führen, insbesondere bei dem Versuch, an vertrauliche Kontoinformationen wie Benutzerkennwörter zu gelangen.",
    prohibitedActivity3:
      "- Sicherheitsrelevante Funktionen der Site zu umgehen, zu deaktivieren oder anderweitig zu beeinträchtigen, einschließlich Funktionen, die die Verwendung oder das Kopieren von Inhalten verhindern oder einschränken oder Beschränkungen bei der Verwendung der Site und/oder der darin enthaltenen Inhalte erzwingen.",
    prohibitedActivity4:
      "- Uns und/oder die Site unserer Meinung nach herabsetzen, beschmutzen oder anderweitig schädigen.",
    prohibitedActivity5:
      "- Verwenden Sie keine von der Site erhaltenen Informationen, um eine andere Person zu belästigen, zu missbrauchen oder zu schädigen.",
    prohibitedActivity6:
      "- Unsere Support-Dienste missbräuchlich nutzen oder falsche Berichte über Missbrauch oder Fehlverhalten einreichen.",
    prohibitedActivity7:
      "- Die Site in einer Weise nutzen, die nicht mit geltenden Gesetzen oder Vorschriften vereinbar ist.",
    prohibitedActivity8: "- Unerlaubtes Framing oder Verlinken der Site.",
    prohibitedActivity9:
      "- Viren, Trojaner oder anderes Material hochzuladen oder zu übertragen (oder der Versuch des Hochladens oder Übertragens), einschließlich der übermäßigen Verwendung von Großbuchstaben und Spamming (fortlaufendes Posten sich wiederholender Texte), das die ununterbrochene Nutzung und den Genuss der Site durch eine Partei stört oder die Nutzung, Merkmale, Funktionen, den Betrieb oder die Wartung der Site modifiziert, beeinträchtigt, unterbricht, verändert oder stört.",
    prohibitedActivity10:
      "- Das System in irgendeiner Weise automatisiert zu nutzen, beispielsweise durch die Verwendung von Skripten zum Senden von Kommentaren oder Nachrichten oder durch die Verwendung von Data Mining, Robotern oder ähnlichen Tools zum Sammeln und Extrahieren von Daten.",
    prohibitedActivity11:
      "- Löschen Sie den Hinweis auf das Urheberrecht oder andere Eigentumsrechte aus allen Inhalten.",
    prohibitedActivity12:
      "- Versuchen Sie, sich als ein anderer Benutzer oder eine andere Person auszugeben oder den Benutzernamen eines anderen Benutzers zu verwenden.",
    prohibitedActivity13:
      "- Hochladen oder Übertragen (oder der Versuch des Hochladens oder Übertragens) von Material, das als passiver oder aktiver Mechanismus zum Sammeln oder Übertragen von Informationen fungiert, einschließlich, aber nicht beschränkt auf Clear Graphics Interchange Formats („GIFs“), 1×1-Pixel, Web-Bugs, Cookies oder andere ähnliche Geräte (manchmal als „Spyware“ oder „passive Sammelmechanismen“ oder „PCMs“ bezeichnet).",
    prohibitedActivity14:
      "- Die Site oder die mit der Site verbundenen Netzwerke oder Dienste zu stören, zu unterbrechen oder unangemessen zu belasten.",
    prohibitedActivity15:
      "- Belästigen, ärgern, einschüchtern oder bedrohen Sie keine unserer Mitarbeiter oder Vertreter, die mit der Bereitstellung von Teilen der Site für Sie betraut sind.",
    prohibitedActivity16:
      "- Versuchen, Maßnahmen der Site zu umgehen, die den Zugriff auf die Site oder Teile der Site verhindern oder einschränken sollen.",
    prohibitedActivity17:
      "- Kopieren oder Anpassen der Software der Site, einschließlich, aber nicht beschränkt auf Flash, PHP, HTML, JavaScript oder anderen Code.",
    prohibitedActivity18:
      "- Sofern nicht durch geltendes Recht gestattet, dürfen Sie die Software, die Teil der Site ist oder in irgendeiner Weise einen Teil der Site darstellt, nicht entschlüsseln, dekompilieren, disassemblieren oder zurückentwickeln.",
    prohibitedActivity19:
      "- Sofern dies nicht durch die Nutzung einer Standardsuchmaschine oder eines Internetbrowsers bedingt ist, dürfen Sie kein automatisiertes System verwenden, starten, entwickeln oder verteilen, einschließlich, aber nicht beschränkt auf Spider, Roboter, Cheat-Dienstprogramme, Scraper oder Offline-Reader, die auf die Site zugreifen, oder nicht autorisierte Skripts oder andere Software verwenden oder starten.",
    prohibitedActivity20:
      "- Verwenden Sie einen Einkaufsagenten oder Einkaufsvermittler, um Einkäufe auf der Site zu tätigen.",
    prohibitedActivity21:
      "- Die Site in irgendeiner unbefugten Weise zu nutzen, einschließlich der Erfassung von Benutzernamen und/oder E-Mail-Adressen von Benutzern auf elektronischem oder anderem Wege zum Zweck des Versendens unerwünschter E-Mails oder der Erstellung von Benutzerkonten auf automatisiertem Wege oder unter Vorspiegelung falscher Tatsachen.",
    prohibitedActivity22:
      "- Die Site als Teil von Bemühungen nutzen, mit uns in Wettbewerb zu treten oder die Site und/oder den Inhalt anderweitig für gewinnbringende Vorhaben oder kommerzielle Unternehmen zu nutzen.",
    prohibitedActivity23:
      "- Verwenden Sie die Site, um für Waren und Dienstleistungen zu werben oder deren Verkauf anzubieten.",
    prohibitedActivity24: "- Ihr Profil verkaufen oder anderweitig übertragen.",
    featuresContent1:
      "Wir entwickeln unsere Dienste sorgfältig und basieren dabei auf unseren eigenen Erfahrungen und den Erfahrungen unserer Kunden, die uns ihre Zeit und ihr Feedback mitteilen. Es gibt jedoch keinen Service, der allen gefällt. Wir übernehmen keine Garantie dafür, dass unsere Dienste Ihren spezifischen Anforderungen oder Erwartungen entsprechen.",
    featuresContent2:
      "Wir testen alle unsere Funktionen vor der Auslieferung. Wie bei jeder Software sind auch in unseren Diensten Fehler unvermeidlich. Wir verfolgen die uns gemeldeten Fehler und arbeiten sie ab, insbesondere im Zusammenhang mit Sicherheit oder Datenschutz. Nicht alle gemeldeten Fehler werden behoben, und wir garantieren keine vollständig fehlerfreien Dienste.",
    correctionsContent1:
      "Die Website kann Tippfehler, Ungenauigkeiten oder Auslassungen enthalten, darunter Beschreibungen, Preise, Verfügbarkeit und verschiedene weitere Informationen. Wir behalten uns das Recht vor, Fehler, Ungenauigkeiten oder Auslassungen zu korrigieren und die Informationen auf der Website jederzeit und ohne vorherige Ankündigung zu ändern oder zu aktualisieren.",
    correctionsContent2:
      "Wir können die ständige Verfügbarkeit der Website nicht garantieren. Es können Hardware-, Software- oder andere Probleme auftreten oder Wartungsarbeiten an der Website erforderlich sein, die zu Unterbrechungen, Verzögerungen oder Fehlern führen können. Wir behalten uns das Recht vor, die Website jederzeit und aus beliebigem Grund ohne vorherige Ankündigung zu ändern, zu überarbeiten, zu aktualisieren, auszusetzen, einzustellen oder anderweitig zu modifizieren. Sie erklären sich damit einverstanden, dass wir keinerlei Haftung für Verluste, Schäden oder Unannehmlichkeiten übernehmen, die dadurch entstehen, dass Sie während einer Ausfallzeit oder Einstellung der Website nicht auf die Website zugreifen oder sie nicht nutzen können. Diese Nutzungsbedingungen verpflichten uns nicht zur Wartung und Unterstützung der Website oder zur Bereitstellung von Korrekturen, Aktualisierungen oder Veröffentlichungen in diesem Zusammenhang.",
    userDataContent:
      "Wir speichern bestimmte Daten, die Sie an die Website übermitteln, zur Verwaltung der Website-Leistung sowie Daten im Zusammenhang mit Ihrer Website-Nutzung. Obwohl wir regelmäßig Datensicherungen durchführen, tragen Sie die alleinige Verantwortung für alle Daten, die Sie übermitteln oder die sich auf Ihre Aktivitäten auf der Website beziehen. Sie erklären sich damit einverstanden, dass wir Ihnen gegenüber nicht für den Verlust oder die Beschädigung solcher Daten haften und verzichten hiermit auf jegliche Klagen gegen uns, die sich aus einem solchen Verlust oder einer solchen Beschädigung solcher Daten ergeben.",
    privacyPolicyContent1:
      "Datenschutz und Sicherheit sind uns wichtig. Bitte lesen Sie unsere",
    privacyPolicy: "Datenschutzrichtlinie",
    privacyPolicyContent2:
      "Durch die Nutzung dieser Website erklären Sie sich mit unserer Datenschutzrichtlinie einverstanden, die Bestandteil dieser Servicebedingungen ist. Bitte beachten Sie, dass diese Website in den USA gehostet wird. Wenn Sie von einer anderen Region der Welt aus auf die Website zugreifen, in der Gesetze oder andere Anforderungen hinsichtlich der Erhebung, Nutzung oder Offenlegung personenbezogener Daten von den geltenden Gesetzen in den USA abweichen, übertragen Sie durch Ihre fortgesetzte Nutzung der Website Ihre Daten in die USA und stimmen der Übertragung und Verarbeitung Ihrer Daten in den USA zu.",
    liabilityIntro:
      "Wir erwähnen die Haftung in diesen Bedingungen überall, aber um alles in einem Abschnitt zusammenzufassen:",
    liabilityContent:
      "Sie verstehen und erklären sich ausdrücklich damit einverstanden, dass das Unternehmen weder Ihnen noch Drittparteien gegenüber gesetzlich oder nach Billigkeit für direkte, indirekte oder zufällige Schäden, Schäden aufgrund entgangenen Gewinns, Sonderschäden, Folgeschäden, Straf- oder Bußgelder haftet, einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Geschäftswert, Nutzung, Daten oder sonstige immaterielle Verluste (auch wenn das Unternehmen auf die Möglichkeit solcher Schäden hingewiesen wurde), die sich aus Folgendem ergeben: (1) der Nutzung oder der Unmöglichkeit der Nutzung der Services; (2) Fehlern, Irrtümern oder Ungenauigkeiten von Inhalten und Materialien; (3) Personen- oder Sachschäden jeglicher Art, die sich aus Ihrem Zugriff auf die Site und Ihrer Nutzung der Site ergeben; (4) Kosten für die Beschaffung von Ersatzgütern und -dienstleistungen, die sich aus über die Services erworbenen oder erhaltenen Gütern, Daten, Informationen oder Services oder aus empfangenen Nachrichten oder über die Services abgeschlossenen Transaktionen ergeben; (5) jeglichem unbefugten Zugriff auf oder der Nutzung unserer sicheren Server und/oder aller darauf gespeicherten personenbezogenen und/oder finanziellen Daten; (6) jeglicher Unterbrechung oder Einstellung der Übertragung zu oder von der Site; (7) jegliche Bugs, Viren, Trojaner oder Ähnliches, die von Dritten an oder über die Site übertragen werden können, und/oder (8) jegliche Fehler oder Auslassungen in Inhalten und Materialien oder jegliche Verluste oder Schäden jeglicher Art, die durch die Verwendung von Inhalten entstehen, die über die Site gepostet, übertragen oder anderweitig verfügbar gemacht werden; (9) Aussagen oder Verhalten von Dritten in Bezug auf den Dienst; (10) oder jegliche andere Angelegenheit im Zusammenhang mit diesen Servicebedingungen oder den Diensten, sei es als Vertragsbruch, unerlaubte Handlung (einschließlich aktiver oder passiver Fahrlässigkeit) oder jede andere Haftungstheorie.",
    miscellaneousContent:
      "Diese Nutzungsbedingungen und alle von uns auf der Website oder in Bezug auf die Website veröffentlichten Richtlinien oder Betriebsregeln stellen die gesamte Vereinbarung zwischen Ihnen und uns dar. Unser Versäumnis, ein Recht oder eine Bestimmung dieser Nutzungsbedingungen auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar. Diese Nutzungsbedingungen gelten im größtmöglichen gesetzlich zulässigen Umfang. Wir können unsere Rechte und Pflichten jederzeit vollständig oder teilweise an Dritte übertragen. Wir haften nicht für Verluste, Schäden, Verzögerungen oder Unterlassungen, die durch Ursachen außerhalb unserer Kontrolle verursacht werden. Sollte eine Bestimmung oder ein Teil einer Bestimmung dieser Nutzungsbedingungen rechtswidrig, ungültig oder nicht durchsetzbar sein, gilt diese Bestimmung oder dieser Teil als von diesen Nutzungsbedingungen abtrennbar und berührt nicht die Gültigkeit und Durchsetzbarkeit der übrigen Bestimmungen. Durch diese Nutzungsbedingungen oder die Nutzung der Website entsteht zwischen Ihnen und uns kein Joint Venture, keine Partnerschaft, kein Arbeitsverhältnis oder keine Agenturbeziehung. Sie erklären sich damit einverstanden, dass diese Nutzungsbedingungen aufgrund ihrer Erstellung nicht gegen uns ausgelegt werden. Sie verzichten hiermit auf sämtliche Einreden, die Ihnen möglicherweise aufgrund der elektronischen Form dieser Servicebedingungen und der fehlenden Unterzeichnung dieser Servicebedingungen durch die Parteien zustehen.",
    contactUsContent1:
      "Wenn Sie eine Frage zu den Servicebedingungen haben, wenden Sie sich bitte an",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Merkmale",
    UnlimitedTranscription: "Unbegrenzte Transkription",
    BulkUpload: "Massen-Upload",
    Accuracy: "96 % Genauigkeit",
    Pricing: "Preise",
    UseCases: "Anwendungsfälle",
    AllUseCases: "Alle Anwendungsfälle",
    Podcasters: "Podcaster",
    Journalists: "Journalisten",
    ContentCreators: "Inhaltsersteller",
    Researchers: "Forscher",
    BusinessTeams: "Geschäftsteams",
    Educators: "Pädagogen",
    Resources: "Ressourcen",
    YouTubetoMP4: "YouTube zu MP4",
    StartFreeTrial: "Kostenlos testen"
  },
  Footer: {
    des: "Der weltweit erste wirklich unbegrenzte KI-Transkriptionsdienst. Keine Obergrenzen, keine Einschränkungen, nur kreative Freiheit.",
    Features: "Merkmale",
    UseCases: "Anwendungsfälle",
    Company: "Unternehmen",
    featureMenus: ["Unbegrenzte Transkription", "Massen-Upload", "96 % Genauigkeit"],
    useCaseMenus: [
          "Alle Anwendungsfälle",
          "Podcaster",
          "Journalisten",
          "Inhaltsersteller",
          "Forscher",
          "Geschäftsteams",
          "Pädagogen"
        ],
    companyMenus: [
          "Um",
          "Preise",
          "Datenschutz",
          "Bedingungen"
        ]
  },
  Index: {
    Hero: {
      badge: "Keine „Shrinkflation“ mehr – tatsächlich unbegrenzt",
      h1: "Zahlen Sie nicht mehr für Limits:",
      gradient: "Wirklich unbegrenzte KI-Transkription",
      subtitle: "Laden Sie Ihr gesamtes Podcast-Archiv hoch. Transkribieren Sie alle Ihre Interviews. Verarbeiten Sie 50 Dateien gleichzeitig. Keine monatlichen Limits, keine Upload-Limits. Endlich Transkription, die sich Ihren tatsächlichen Bedürfnissen anpasst.",
      FreeTrial: "Kostenlos testen – Keine Kreditkarte erforderlich",
      HowWorks: "So funktioniert es",
      Unlimited: "Unbegrenzte Datei-Uploads",
      NoCap: "Keine monatliche Minutenbegrenzung",
      Hour: "10-Stunden-Dateien werden unterstützt",
      ExploreUseCases: "Anwendungsfälle erkunden"
    },
    Stats: {
      monthlyMinutes: "Monatliche Minuten",
      fileUploads: "Datei-Uploads",
      batchProcessing: "Stapelverarbeitung",
      maxFileLength: "Maximale Dateilänge"
    },
    FeaturesGrid: {
      try_now: "Jetzt testen",
      no_signup: "Keine Anmeldung erforderlich",
      experience_unltd: "Erleben Sie wirklich unbegrenzte Transkription",
      upload_50: "Laden Sie hier bis zu 50 Dateien gleichzeitig hoch",
      no_limits: "Keine versteckten Grenzen mehr",
      no_surprises: "Keine Überraschungen mehr",
      transparency: "Während andere stillschweigend Ihre Minuten reduzieren oder Obergrenzen im Kleingedruckten verstecken, glauben wir an radikale Transparenz",
      feat_unltd: "Tatsächlich unbegrenzt",
      feat_unltd_desc: "Keine versteckten „Fair Use“-Richtlinien. Keine als „unbegrenzt“ getarnten Speicherbeschränkungen. Laden Sie Ihr gesamtes Archiv hoch und transkribieren Sie alles. Wir meinen es ernst.",
      feat_bulk: "Freiheit beim Massen-Upload",
      feat_bulk_desc: "Keine Lust mehr auf „3 Importe im Laufe der Zeit“ oder „10 Dateien pro Monat“? Laden Sie 50 Dateien gleichzeitig hoch, so oft Sie möchten. Perfekt für die Bearbeitung von Rückständen.",
      feat_batch: "Stapelverarbeitung",
      feat_batch_desc: "Verarbeiten Sie Ihre gesamte Podcast-Saison über Nacht. Laden Sie 50 Interviews auf einmal hoch. Lassen Sie unsere KI arbeiten, während Sie schlafen. Wachen Sie mit fertigen Transkripten auf.",
      feat_accuracy: "96 % Genauigkeit",
      feat_accuracy_desc: "Branchenführende KI mit intelligenter Zeichensetzung, Sprecherdiarisierung für bis zu 20 Sprecher und einwandfreier Verarbeitung von Akzenten und Fachbegriffen.",
      feat_langs: "Über 100 Sprachen",
      feat_langs_desc: "Transkribieren Sie in über 100 Sprachen, übersetzen Sie in über 249 Sprachen. Keine zusätzlichen Gebühren für verschiedene Sprachen. Globaler Inhalt, ein einfacher Preis.",
      feat_pro: "Professionelle Funktionen",
      feat_pro_desc: "Zeitstempel auf Wortebene für eine präzise Audio-/Videopositionierung, genaue Sprecheridentifizierung auch bei schnellen Gesprächswechseln und perfekt formatierter Text mit Absätzen, Sätzen und Satzzeichen für einfaches Lesen."
    },
    UseCases: {
      built_for: "Gebaut für",
      "heavy_users": "Vielnutzer wie Sie",
      "join_users": "Schließen Sie sich YouTubern, Content-Erstellern und Podcastern an, die von „Shrinkflation“-Diensten gewechselt sind",
      "podcasters": {
        "title": "Podcaster",
        "des": "Laden Sie Ihren gesamten Backkatalog hoch. Erstellen Sie Shownotes für jede Episode. Sie müssen nicht mehr auswählen, welche Episoden transkribiert werden sollen."
      },
      "content_creators": {
        "title": "Inhaltsersteller",
        "des": "Verwandeln Sie Ihre Videobibliothek in durchsuchbaren Text. Erstellen Sie Untertitel für alles. Kein Minutenzählen, nur kreativ sein."
      },
      "journalists": {
        "title": "Journalisten",
        "des": "Laden Sie alle Ihre Interviews auf einmal hoch. Schluss mit „10 Dateien pro Monat“ bei Deadlines. Verarbeiten Sie alles."
      },
      researchers: {
        title: "Forscher",
        des: "Transkribieren Sie stundenlange Fokusgruppen und Interviews. Laden Sie Ihre gesamte Studie auf einmal hoch. Erhalten Sie eine genaue Sprecheridentifizierung."
      },
      business_teams: {
        title: "Geschäftsteams",
        des: "Zeichnen Sie jeden Anruf auf, ohne sich um Limits sorgen zu müssen. Erhalten Sie KI-Einblicke in alle Gespräche, nicht nur in einige wenige."
      },
      educators: {
        title: "Pädagogen",
        des: "Transkribieren Sie komplette Vorlesungsreihen. Stellen Sie alle Inhalte barrierefrei zur Verfügung. Keine Wahl zwischen Kursen aufgrund von Minutenbegrenzungen."
      }
    },
    Testimonials: {
      title: "Beliebt bei",
      highlighted_users: "Über 50.000 Benutzer",
      subtitle: "Erfahren Sie, warum Profis NeverCap den begrenzten Alternativen vorziehen",
      Mike: {
        "text": "Heilige Scheiße, das Ding funktioniert tatsächlich! Ich mache seit drei Jahren einen Podcast und habe wie ein Idiot alles manuell transkribiert. Habe sechs Folgen auf einmal hochgeladen und es hat mich und meinen Co-Moderator perfekt getrennt. Die Café-Folge, die ich für ruiniert hielt? Kristallklares Transkript. Ich werde nie wieder so etwas selbst abtippen.",
        "author": "Mike Rodriguez",
        "role": "Podcast-Host"
      },
      Sarah: {
        "text": "Ich unterrichte online und brauchte Untertitel für meine Videos. Habe drei andere Tools ausprobiert, die entweder seltsame Einschränkungen hatten oder ewig brauchten. Dieses hier funktioniert einfach. Ich habe meine Spanischvorlesung hochgeladen und hatte in etwa 2 Minuten perfekte Untertitel. Meine hörgeschädigten Schüler sind so glücklich. Ich wünschte, ich hätte es früher gefunden!",
        "author": "Sarah Chen",
        "role": "Online-Lehrer"
      },
      Jessica: {
        "text": "Ich benutze es für meine Interviews und es ist unglaublich, wie genau es ist. Hatte ein zweistündiges Interview in gebrochenem Englisch und Spanisch und es hat alles richtig gemacht, sogar die Zeitstempel. Früher habe ich meinem Praktikanten 200 Dollar pro Monat bezahlt, nur um Sachen zu transkribieren. Das spart mir buchstäblich jeden Monat Geld.",
        "author": "Jessica Park",
        "role": "Freiberuflicher Journalist"
      }
    },
    PricingPreview: {
      "title": "Transparente Preisgestaltung",
      "highlighted_text": "Keine versteckten Kappen",
      "subtitle": "Wählen Sie Ihren Plan. Keine Sternchen, kein Kleingedrucktes, keine Überraschungen"
    },
    FAQSection: {
      "title": "Häufig gestellte Fragen",
      "titleHighlight": "Fragen",
      "questions": [
            {
              "q": "unbegrenzte_Richtlinie",
              "question": "Ist es wirklich unbegrenzt? Wo ist der Haken?",
              "answer": "Ja, es ist wirklich unbegrenzt! Keine monatlichen Minutenlimits, keine Überschreitungsgebühren. Die einzigen Einschränkungen sind technischer Natur: Einzelne Dateien können bis zu 10 Stunden lang oder 5 GB groß sein, und Sie können 50 Dateien gleichzeitig verarbeiten. Sie können jedoch den ganzen Monat lang beliebig viele Stapel hochladen."
            },
            {
              "q": "Genauigkeit",
              "question": "Wie genau ist die Transkription?",
              "answer": "Wir garantieren 96 % Genauigkeit für klaren Ton. Unsere KI ist mit Millionen von Stunden unterschiedlicher Inhalte trainiert und verarbeitet Akzente, Fachbegriffe und mehrere Sprecher außergewöhnlich gut. Bei anspruchsvollem Audio helfen unsere intelligenten Verbesserungsfunktionen, die Ergebnisse zu verbessern."
            },
            {
              "q": "Sprachen",
              "question": "Welche Sprachen werden unterstützt?",
              "answer": "Wir unterstützen die Transkription in über 100 Sprachen, darunter Englisch, Spanisch, Mandarin, Hindi, Arabisch, Französisch und mehr. Darüber hinaus können Sie Ihre Transkripte in 249 verschiedene Sprachen übersetzen lassen – ideal für globale Inhalte."
            },
            {
              "q": "Geschwindigkeit",
              "question": "Wie schnell ist die Transkription?",
              "answer": "Blitzschnell! Eine einstündige Audiodatei wird in der Regel in weniger als 5 Minuten verarbeitet. Mit der Stapelverarbeitung können Sie 50 Dateien gleichzeitig hochladen und parallel verarbeiten lassen. Die meisten Benutzer stellen fest, dass ihre gesamte Bibliothek über Nacht transkribiert wurde."
            },
            {
              "q": "Stornierung",
              "question": "Kann ich jederzeit kündigen?",
              "answer": "Absolut! Keine Verträge, keine Kündigungsgebühren. Sie können Ihr Abonnement jederzeit über Ihr Dashboard upgraden, downgraden oder kündigen. Wenn Sie kündigen, behalten Sie den Zugriff bis zum Ende Ihres Abrechnungszeitraums."
            },
            {
              "q": "Sicherheit",
              "question": "Sind meine Daten sicher?",
              "answer": "Ihre Sicherheit hat für uns oberste Priorität. Wir sind SOC 2-zertifiziert, verwenden 256-Bit-Verschlüsselung für alle Daten und verwenden Ihre Inhalte niemals zum Trainieren unserer Modelle. Sie können Ihre Dateien jederzeit löschen, und wir bereinigen sie automatisch nach 30 Tagen. DSGVO- und CCPA-konform."
            },
            {
              "q": "Exportformate",
              "question": "Welche Exportformate stehen zur Verfügung?",
              "answer": "Laden Sie Ihre Transkripte in jedem gewünschten Format herunter: PDF, Word (DOCX), Excel, CSV, SRT-Untertitel, einfacher Text (TXT) und VTT-Untertitel. Perfekt für jeden Arbeitsablauf."
            },
            {
              "q": "Dateiformate",
              "question": "Welche Audio- und Videodateien kann ich hochladen?",
              "answer": "Wir unterstützen praktisch jedes Audio- und Videoformat: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV und mehr. Wenn Sie es abspielen können, können wir es transkribieren."
            }
          ]
    },
    CTASection: {
      "title": "Bereit, sich von Grenzen zu befreien?",
      "subtitle": "Schließen Sie sich über 50.000 Fachleuten an, die auf wirklich unbegrenzte Transkription umgestiegen sind",
      "button": "Testen Sie NeverCap kostenlos",
      "disclaimer": "Für den kostenlosen Plan ist keine Kreditkarte erforderlich. • Sie können jederzeit ein Upgrade für unbegrenzten Zugriff durchführen."
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "Keine „Schrumpfflation“ mehr",
      heroTitleLine1: "Wirklich unbegrenzt",
      heroTitleLine2: "KI-Transkription",
      heroSubtitle: "Während Trint Sie auf 50 Stunden und Otter auf 10 Dateien pro Monat begrenzt, halten wir, was wir tatsächlich versprechen: unbegrenzte Transkription ohne versteckte Begrenzungen.",
      primaryCta: "Kostenlos testen – Keine Kreditkarte erforderlich",
      secondaryCta: "Sehen Sie die Wahrheit",
      comparisonBadLabel: "Was andere tun",
      comparisonBadTitle: "Überall verborgene Grenzen",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: "„Unbegrenzt“ = 50 Stunden/Monat",
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Otter:",
      comparisonBadItem2Text: "3 Importe auf Lebenszeit (kostenlos), 10/Monat (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Glühwürmchen:",
      comparisonBadItem3Text: "800 Minuten Speicherlimit",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Beschreibung:",
      comparisonBadItem4Text: "Max. 30 Stunden/Monat",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Versteckt in den Allgemeinen Geschäftsbedingungen",
      comparisonGoodLabel: "Was wir tun",
      comparisonGoodTitle: "Tatsächlich unbegrenzt",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Keine monatlichen Minutenlimits",
      comparisonGoodItem1Text: "immer",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Unbegrenzte Datei-Uploads",
      comparisonGoodItem2Text: "stets",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Keine Speicherbeschränkungen",
      comparisonGoodItem3Text: "überhaupt",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Batch-Upload von 50 Dateien",
      comparisonGoodItem4Text: "jederzeit",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Transparente Politik",
      comparisonGoodItem5Text: "im Voraus",
      feature1Label: "Keine Grenzen",
      feature1TitlePart1: "1.000 Stunden transkribieren?",
      feature1TitlePart2: "Gleicher Preis.",
      feature1Description: "Schluss mit dem Minutenzählen. Schluss mit dem Beobachten von Obergrenzen. Egal, ob Sie 10 oder 10.000 Stunden pro Monat transkribieren, Sie zahlen immer den gleichen Pauschalpreis. Keine Überschreitungsgebühren. Keine Überraschungsrechnungen.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Keine Tricks im Rahmen der „Fair Use“-Richtlinie",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Keine Drosselung nach X Stunden",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Keine Angst vor dem Monatsende",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Monatliche Stunden",
      feature1Stat2Number: "0 $",
      feature1Stat2Label: "Überschreitungsgebühren",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Jederzeit hochladen",
      feature1Stat4Number: "100 %",
      feature1Stat4Label: "Transparent",
      feature2Label: "Massenfreiheit",
      feature2TitlePart1: "Laden Sie Ihre",
      feature2TitlePart2: "Gesamtes Archiv",
      feature2Description: "Otter bietet Ihnen 3 kostenlose Importe pro Lebenszeit und 10 pro Monat bei Pro. Wir bieten Ihnen unbegrenzte Importe. Laden Sie Ihren Podcast-Rückstand, alle Ihre Interviews und jahrelange Aufnahmen hoch. Keine Einschränkungen.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 Dateien pro Stapel",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-Stunden-Dateien werden unterstützt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Verarbeiten Sie, während Sie schlafen",
      feature2TableRow1Label: "Otterfrei",
      feature2TableRow1Value: "3 lebenslange Importe",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 Dateien/Monat",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Obergrenze von 50 Stunden/Monat",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Wirklich unbegrenzt ✓",
      feature3Label: "Sozialer Beweis",
      feature3TitlePart1: "Benutzer sind",
      feature3TitlePart2: "Täglich wechseln",
      feature3Description: "„Ich zahle 100 $ pro Jahr für Otter und sie beschränken mich auf 10 Dateiimporte pro Monat. Sobald es eine Alternative mit unbegrenzten Importen gibt, bin ich weg!“ – Echter Reddit-Benutzer",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Über 50.000 Benutzer haben umgestellt",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Von Otters „Shrinkflation“",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Niemals zurück",
      feature3Stat1Number: "50.000+",
      feature3Stat1Label: "Zufriedene Benutzer",
      feature3Stat2Number: "1M+",
      feature3Stat2Label: "Verarbeitete Dateien",
      feature3Stat3Number: "96 %",
      feature3Stat3Label: "Genauigkeit",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Keine versteckten Gebühren",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuten/Monat",
      trustBadge2Number: "100+",
      trustBadge2Label: "Sprachen",
      trustBadge3Number: "96 %",
      trustBadge3Label: "Genauigkeit",
      trustBadge4Number: "50",
      trustBadge4Label: "Stapel-Upload",
      ctaTitle: "Hören Sie auf, für Fake Unlimited zu bezahlen",
      ctaSubtitle: "Schließen Sie sich Tausenden an, die auf wirklich unbegrenzte Transkription umgestiegen sind",
      finalCta: "Testen Sie NeverCap kostenlos"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Freiheit beim Massen-Upload",
      heroTitleLine1: "Laden Sie 50 Dateien hoch.",
      heroTitleHighlight: "Alles verarbeiten.",
      heroSubtitle: "Otter bietet Ihnen 3 Importe auf Lebenszeit. DREI. Ein Leben lang. Wir ermöglichen Ihnen unbegrenzte Uploads, 50 Dateien gleichzeitig, wann immer Sie sie brauchen.",
      primaryCta: "Massenupload starten →",
      secondaryCta: "Grenzen erkennen",
      redditQuote: "„Ich muss Podcast-Episoden aus drei Jahren transkribieren. Otter sagt mir, ich bekomme drei lebenslange Importe. DREI. Das ist eine Beleidigung.“",
      redditAuthorIcon: "📍",
      redditAuthorText: "Echte Frustration von r/podcasting",
      comparisonSectionTitlePart1: "Der",
      comparisonSectionTitleHighlight: "Lächerliche Grenzen",
      comparisonSectionTitlePart2: "Sie verhängen",
      comparisonSubtitle: "Wie Wettbewerber Ihre Fähigkeit zur Verarbeitung von Inhalten einschränken",
      limitCard1Service: "Otterfrei",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Lebenslange Importe",
      limitCard1DescriptionLine2: "(Ja, Ihr GANZES Leben lang)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Dateien pro Monat",
      limitCard2DescriptionLine2: "(100 $/Jahresplan)",
      limitCard3Service: "Beschreibung",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Datei auf einmal",
      limitCard3DescriptionLine2: "(Sequentieller Upload)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Unbegrenzte Uploads",
      limitCard4DescriptionLine2: "50 Dateien pro Stapel",
      feature1Label: "Batch-Leistung",
      feature1TitlePart1: "Verarbeiten Sie Ihre",
      feature1TitleHighlight: "Gesamtes Archiv",
      feature1TitlePart2: "Über Nacht",
      feature1Description: "Laden Sie vor dem Schlafengehen 50 Dateien hoch. Wachen Sie auf und vervollständigen Sie Ihre Transkripte. Kein Anstehen, kein Warten, keine „Bitte aktualisieren“-Meldungen. Nur pure Rechenleistung auf Knopfdruck.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 gleichzeitige Uploads",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallelverarbeitung",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-Stunden-Dateien werden unterstützt",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maximal 5 GB pro Datei",
      uploadAnimationText1: "50 Dateien",
      uploadAnimationText2: "Ablegen und verarbeiten",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "meeting_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 weitere Dateien...",
      feature2Label: "Geschwindigkeit",
      feature2TitlePart1: "Vom Hochladen nach",
      feature2TitleHighlight: "In Stunden erledigt",
      feature2Description: "Dank unserer Infrastruktur für die parallele Verarbeitung müssen Ihre 50 Dateien nicht in einer Warteschlange warten. Sie werden alle gleichzeitig transkribiert. Was früher Wochen dauerte, dauert heute Stunden.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-Stunden-Datei: 5 Minuten",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 Dateien: parallel verarbeitet",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-Mail-Benachrichtigung bei Abschluss",
      timelineStep1Icon: "1",
      timelineStep1Title: "Hochladen",
      timelineStep1Time: "0 Minuten",
      timelineStep2Icon: "2",
      timelineStep2Title: "Verarbeitung",
      timelineStep2Time: "5-30 Minuten",
      timelineStep3Icon: "3",
      timelineStep3Title: "KI-Magie",
      timelineStep3Time: "30-60 Minuten",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Vollständig",
      timelineStep4Time: "< 2 Stunden",
      feature3Label: "Freiheit",
      feature3TitlePart1: "Keine Warteschlangen.",
      feature3TitleHighlight: "Kein Warten.",
      feature3TitlePart2: "Keine Grenzen.",
      feature3Description: "Während andere Sie in virtuellen Warteschlangen warten lassen oder für eine „Prioritätsbearbeitung“ upgraden, behandeln wir jeden Upload mit Dringlichkeit. Ihre Inhalte sind wichtig und sollten nicht warten.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Keine Prioritätsstufen",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Gleiche Geschwindigkeit für alle",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Jederzeit hochladen, rund um die Uhr",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Immer bereit",
      feature3VisualSubtext: "Laden Sie hoch, wann immer Sie inspiriert sind",
      useCasesTitlePart1: "Perfekt für",
      useCasesTitleHighlight: "Starke Uploader",
      useCasesSubtitle: "Reale Szenarien, in denen Massen-Uploads die Rettung sind",
      useCase1Title: "Podcast-Archiv",
      useCase1Description: "Laden Sie Episoden aus drei Jahren auf einmal hoch. Erstellen Sie Transkripte für Ihren gesamten Backkatalog. Generieren Sie SEO-Inhalte für jede Episode.",
      useCase2Title: "Kurserstellung",
      useCase2Description: "Verarbeiten Sie alle Ihre Vorlesungsvideos gleichzeitig. Erstellen Sie zugängliche Transkripte für Studierende. Erstellen Sie durchsuchbare Kursmaterialien.",
      useCase3Title: "Interview-Rückstand",
      useCase3Description: "Räumen Sie den Berg nicht transkribierter Interviews ab. Verarbeiten Sie wochenlange Recherche in wenigen Stunden. Halten Sie Ihre Deadline ohne Panik ein.",
      useCase4Title: "YouTube-Bibliothek",
      useCase4Description: "Generieren Sie Untertitel für Ihren gesamten Kanal. Erstellen Sie Blogbeiträge aus Videoinhalten. Verbessern Sie die SEO für alle Videos.",
      useCase5Title: "Sitzungsarchiv",
      useCase5Description: "Laden Sie aufgezeichnete Meetings über mehrere Monate hoch. Erstellen Sie durchsuchbare Meeting-Notizen. Verlieren Sie nie wieder wichtige Entscheidungen.",
      useCase6Title: "Forschungsdaten",
      useCase6Description: "Verarbeiten Sie Fokusgruppen in großen Mengen. Transkribieren Sie alle Teilnehmerinterviews. Analysieren Sie qualitative Daten effizient.",
      ctaTitle: "Hören Sie auf, um mehr Uploads zu betteln",
      ctaSubtitle: "Erhalten Sie unbegrenzte Massenverarbeitung, die wirklich funktioniert",
      finalCta: "Jetzt 50 Dateien hochladen →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Branchenführende Genauigkeit",
      heroTitleLine1: "96 % Genauigkeit.",
      heroTitleHighlight: "Jedes Wort zählt.",
      heroSubtitle: "Branchenführende Genauigkeit in 12 Hauptsprachen. Zeitstempel auf Wortebene für perfekte Synchronisierung. Intelligente Sprechererkennung für schnelle Gespräche. Professionelle Formatierung, die tatsächlich lesbar ist.",
      primaryCta: "Testen Sie unsere Genauigkeit →",
      secondaryCta: "Siehe Sprachen",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Genauigkeit in",
      statCard1DescriptionLine2: "12 Hauptsprachen",
      statCard2Percentage: "95 %+",
      statCard2DescriptionLine1: "Genauigkeit mit",
      statCard2DescriptionLine2: "Akzente und Dialekte",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Wortebene",
      statCard3DescriptionLine2: "Zeitstempelgenauigkeit",
      languageSectionTitlePart1: "96 % Genauigkeit in 12 Hauptsprachen",
      languageSubtitle: "Professionelle Transkription für globale Inhalte",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Englisch",
      languageCard1Accuracy: "96 % Genauigkeit",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spanisch",
      languageCard2Accuracy: "96 % Genauigkeit",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96 % Genauigkeit",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Französisch",
      languageCard4Accuracy: "96 % Genauigkeit",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Deutsch",
      languageCard5Accuracy: "96 % Genauigkeit",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japanisch",
      languageCard6Accuracy: "96 % Genauigkeit",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreanisch",
      languageCard7Accuracy: "96 % Genauigkeit",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugiesisch",
      languageCard8Accuracy: "96 % Genauigkeit",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Russisch",
      languageCard9Accuracy: "96 % Genauigkeit",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italienisch",
      languageCard10Accuracy: "96 % Genauigkeit",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Niederländisch",
      languageCard11Accuracy: "96 % Genauigkeit",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabisch",
      languageCard12Accuracy: "96 % Genauigkeit",
      moreLanguagesText: "+ 88 weitere Sprachen werden mit einer Genauigkeit von über 95 % unterstützt",
      feature1Label: "Präzision",
      feature1TitlePart1: "Wortebene",
      feature1TitleHighlight: "Zeitstempel",
      feature1Description: "Jedes Wort ist perfekt mit seiner Audioposition synchronisiert. Erstellen Sie anklickbare Transkripte, generieren Sie präzise Untertitel oder springen Sie zu genau den Momenten in Ihren Aufnahmen. 100 ms Präzision, auf die Profis vertrauen.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms Zeitstempelgenauigkeit",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt für die Videobearbeitung",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Anklickbare interaktive Transkripte",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Framegenaue Untertitel",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Sprecher 1",
      transcriptLine1Text: "Willkommen zur heutigen Podcast-Folge.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Sprecher 2",
      transcriptLine2Text: "Danke, dass ich in der Show sein durfte!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Sprecher 1",
      transcriptLine3Text: "Tauchen wir in unser Hauptthema ein …",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Sprecher 2",
      transcriptLine4Text: "Auf jeden Fall, ich freue mich darauf, darüber zu sprechen.",
      feature2Label: "Intelligente KI",
      feature2TitlePart1: "Griffe",
      feature2TitleHighlight: "Schnelle Gespräche",
      feature2Description: "Unsere KI identifiziert Sprecher präzise, selbst bei sich überschneidenden Redebeiträgen, Unterbrechungen und schnellen Gesprächen. Perfekt für Interviews, Podcasts und Meetings, bei denen Sprecher häufig unterbrechen.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifiziert bis zu 20 Sprecher",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Bewältigt Unterbrechungen perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Funktioniert mit überlappender Sprache",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Behält die Genauigkeit bei Übersprechen bei",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Sprecher identifiziert",
      feature2VisualSubtext: "Auch in schnellen Gesprächen",
      feature3Label: "Lesbarkeit",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formatierter Text",
      feature3Description: "Schluss mit Textwänden. Unsere KI fügt Absätze, Sätze und Satzzeichen automatisch genau dort ein, wo sie hingehören. Das Ergebnis? Transkripte, die sich angenehm lesen und leicht überfliegen lassen.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Intelligente Absatzumbrüche",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Genaue Zeichensetzung",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Richtige Groß- und Kleinschreibung",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Saubere, scanbare Ausgabe",
      formattingTitle: "Vorher & Nachher",
      formattingBeforeLabel: "❌ Andere:",
      formattingBeforeText: "also heute werden wir über die neuen Funktionen sprechen, an denen wir gearbeitet haben. Ich denke, sie werden Ihnen wirklich gefallen. Sie wurden von den Benutzern schon lange gefordert und wir haben sie endlich fertiggestellt.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Heute sprechen wir über die neuen Funktionen, an denen wir gearbeitet haben. Ich denke, sie werden euch gefallen. Die Nutzer haben sich die Funktionen schon lange gewünscht, und jetzt haben wir sie endlich umgesetzt.",
      comparisonSubtitle: "Genauigkeit",
      comparisonSectionTitle: "Vergleich",
      comparisonDes: "Sehen Sie, wie wir im Vergleich zur Konkurrenz abschneiden",
      tableHeader1: "Besonderheit",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Beschreibung",
      tableHeader5: "Rev",
      tableRow1Feature: "Genauigkeit (klarer Ton)",
      tableRow1NeverCap: "96 %",
      tableRow1Otter: "95 %",
      tableRow1Descript: "94 %",
      tableRow1Rev: "94 %",
      tableRow2Feature: "Zeitstempel auf Wortebene",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Sprecheridentifikation",
      tableRow3NeverCap: "20 Lautsprecher",
      tableRow3Otter: "16 Lautsprecher",
      tableRow3Descript: "10 Lautsprecher",
      tableRow3Rev: "✕",
      tableRow4Feature: "Bewältigt Übersprechen",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Beschränkt",
      tableRow4Descript: "Beschränkt",
      tableRow4Rev: "✕",
      tableRow5Feature: "Intelligente Formatierung",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Basic",
      tableRow6Feature: "12 Sprachen bei 96 %",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Erleben Sie 96 % Genauigkeit",
      ctaSubtitle: "Laden Sie Ihr anspruchsvollstes Audio hoch und sehen Sie den Unterschied",
      finalCta: "Testen Sie jetzt unsere Genauigkeit →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Einfache, transparente Preisgestaltung",
      "highlighted_text": "Keine versteckten Kappen",
      "description": "Wählen Sie den Tarif, der Ihren Bedürfnissen entspricht. Upgrade oder Downgrade sind jederzeit möglich. Keine Verträge, keine Überraschungen."
    },
    Cards: {
      "title": "Einfache, transparente Preisgestaltung.",
      "highlighted_text": "Keine versteckten Großbuchstaben.",
      "description": "Wählen Sie den Tarif, der Ihren Bedürfnissen entspricht. Upgrade oder Downgrade sind jederzeit möglich. Keine Verträge, keine Überraschungen.",
      "plans": [
            {
              "name": "Frei",
              "price": "0 $",
              "period": "Monat",
              "discount": "Perfekt zum Ausprobieren unseres Services",
              "limits": {
                "title": "Tageslimits",
                "items": [
                  "3 Dateien/Tag (≈90 Min. insgesamt/Tag)",
                  "Bis zu 30 Minuten pro Datei (≤250 MB)",
                  "Laden Sie jeweils 1 Datei hoch",
                  "Standard-Prioritätswarteschlange"
                ]
              },
              "features": {
                "title": "Merkmale",
                "items": [
                  "Über 100 Sprachen",
                  "Lautsprecherbeschriftungen",
                  "Übersetzung",
                  "Alle Exportformate"
                ]
              },
              "cta": {
                "text": "Kostenlos starten. Keine Kreditkarte erforderlich.",
                "button": "Kostenlos starten"
              }
            },
            {
              "name": "Pro Monatlich",
              "price": "17,99 €",
              "period": "Monat",
              "discount": "9,99 $ für den ersten Monat",
              "limits": {
                "title": "Keine monatliche Obergrenze",
                "items": [
                  "Unbegrenzte Gesamtminuten",
                  "Bis zu 10 Stunden / 5 GB pro Datei",
                  "50 Dateien gleichzeitig hochladen",
                  "Prioritätswarteschlange"
                ]
              },
              "features": {
                "title": "Alles in Free, plus",
                "items": [
                  "Zeitstempel auf Wortebene",
                  "Erweiterte Sprecheridentifizierung",
                  "Formatierte Absätze und Zeichensetzung",
                  "Vorrangiger Support"
                ]
              },
              "cta": {
                "text": "Unbegrenzte Minuten. Prioritätsgeschwindigkeit. Stapel-Uploads.",
                "button": "Go Pro"
              },
              "badge": "Am beliebtesten"
            },
            {
              "name": "Pro Annual",
              "price": "8,99 €",
              "period": "Monat",
              "discount": "Jährliche Abrechnung: 107,88 $",
              "limits": {
                "title": "Dasselbe wie Pro Monthly",
                "items": [
                  "Unbegrenzte Gesamtminuten",
                  "Bis zu 10 Stunden / 5 GB pro Datei",
                  "50 Dateien gleichzeitig hochladen",
                  "Prioritätswarteschlange"
                ]
              },
              "features": {
                "title": "Alles in Free, plus",
                "items": [
                  "Zeitstempel auf Wortebene",
                  "Erweiterte Sprecheridentifizierung",
                  "Formatierte Absätze und Zeichensetzung",
                  "Vorrangiger Support"
                ]
              },
              "cta": {
                "text": "Unbegrenzte Minuten. Prioritätsgeschwindigkeit. Stapel-Uploads.",
                "button": "Go Pro"
              },
              "badge": "Bestes Preis-Leistungs-Verhältnis – Sparen Sie 50 %"
            }
          ],
      "disclaimer": "„Unbegrenzt“ bedeutet keine monatliche Obergrenze und keine künstliche Verlangsamung. Bei missbräuchlicher Automatisierung oder Weiterverteilung gilt die Fair-Use-Regelung."
    },
    ComparisonTable: {
      "header": {
        "title": "Alle Funktionen vergleichen",
        "highlighted_text": "Alle Funktionen",
        "subtitle": "Sehen Sie genau, was Sie mit jedem Plan erhalten. Keine versteckten Einschränkungen."
      },
      "plans": [
              "Merkmale",
              "Frei",
              "Pro Monatlich",
              "Pro Annual"
            ],
      "features": [
            {
              "name": "Preis",
              "values": [
                "0 $/Monat",
                {
                  "main": "17,99 $/Monat",
                  "note": "9,99 $ im ersten Monat"
                },
                {
                  "main": "8,99 $/Monat",
                  "note": "Abgerechnet 107,88 $/Jahr"
                }
              ]
            },
            {
              "name": "Monatliche Minuten",
              "values": ["~2.700 (90/Tag)", "Unbegrenzt", "Unbegrenzt"]
            },
            {
              "name": "Maximale Dateidauer",
              "values": ["30 Minuten", "10 Stunden", "10 Stunden"]
            },
            {
              "name": "Maximale Dateigröße",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Stapel-Uploads",
              "values": ["1 Datei", "50 Dateien", "50 Dateien"]
            },
            {
              "name": "Verarbeitungsgeschwindigkeit",
              "values": ["Standard", "Priorität", "Priorität"]
            },
            {
              "name": "Unterstützte Sprachen",
              "values": ["Über 100 Sprachen", "Über 100 Sprachen", "Über 100 Sprachen"]
            },
            {
              "name": "Übersetzung",
              "values": ["WAHR", "WAHR", "WAHR"]
            },
            {
              "name": "Sprecheridentifikation",
              "values": ["Basic", "Fortgeschritten (20 Sprecher)", "Fortgeschritten (20 Sprecher)"]
            },
            {
              "name": "Zeitstempel auf Wortebene",
              "values": ["FALSCH", "WAHR", "WAHR"]
            },
            {
              "name": "Formatierte Absätze",
              "values": ["FALSCH", "WAHR", "WAHR"]
            },
            {
              "name": "Exportformate",
              "values": ["Alle Formate", "Alle Formate", "Alle Formate"]
            },
            {
              "name": "Unterstützung",
              "values": ["E-Mail", "Prioritäts-E-Mail", "Prioritäts-E-Mail"]
            },
            {
              "name": "Datenaufbewahrung",
              "values": ["30 Tage", "Für immer", "Für immer"]
            }
          ]
    },
    FAQ: {
      "title": "Häufig gestellte Fragen",
      "titleHighligt": "Fragen",
      "items": [
            {
              "q": "unbegrenzte_Richtlinie",
              "question": "Ist es wirklich unbegrenzt?",
              "answer": "Ja! Pro-Tarife haben keine monatlichen Minutenlimits. Die einzigen Einschränkungen sind technischer Natur: Maximale Dateidauer: 10 Stunden, Dateigröße: 5 GB. Sie können so viele Dateien verarbeiten, wie Sie benötigen."
            },
            {
              "q": "plan_change",
              "question": "Kann ich den Plan jederzeit ändern?",
              "answer": "Absolut! Sie können Ihr Abonnement jederzeit über Ihr Dashboard kündigen. Upgraden oder downgraden Sie, wann immer Sie möchten."
            },
            {
              "q": "Zahlungsmethoden",
              "question": "Welche Zahlungsmethoden akzeptieren Sie?",
              "answer": "Wir akzeptieren alle gängigen Kreditkarten, Debitkarten und PayPal für sichere und problemlose Zahlungen."
            },
            {
              "q": "kostenlose_Testversion",
              "question": "Gibt es eine kostenlose Testversion für Pro?",
              "answer": "Ja! Testen Sie Pro 7 Tage lang kostenlos. Keine Kreditkarte erforderlich. Außerdem erhalten Sie im ersten Monat 45 % Rabatt, wenn Sie ein Abonnement abschließen."
            },
            {
              "q": "Dateiaufbewahrung",
              "question": "Wie lange bewahren Sie meine Dateien auf?",
              "answer": "Kostenloser Plan: 30 Tage. Pro-Pläne: Für immer! Ihre Transkripte sind immer in Ihrem Konto verfügbar."
            },
            {
              "q": "Datensicherheit",
              "question": "Wie steht es um die Datensicherheit?",
              "answer": "Wir sind SOC 2-zertifiziert und verwenden 256-Bit-Verschlüsselung. Wir verwenden Ihre Inhalte niemals zum Trainieren unserer Modelle. Ihre Daten gehören Ihnen."
            }
          ]
    },
    CTA: {
      "title": "Bereit für Unlimited?",
      "subtitle": "Schließen Sie sich über 50.000 Fachleuten an und transkribieren Sie ohne Grenzen",
      "button": "Testen Sie NeverCap kostenlos →",
      "disclaimer": "Keine Kreditkarte erforderlich • Beginnen Sie in Sekundenschnelle mit der Transkription"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Gebaut für",
      heavyUsers: "Starke Benutzer",
      whoActuallyNeed: "Wer braucht wirklich unbegrenzte",
      heroSubtitle: "Von Podcastern mit jahrelangem Rückstand bis hin zu Forschern mit Hunderten von Interviews. Sehen Sie, wie Profis NeverCap verwenden, um Upload- und Minutenbeschränkungen zu umgehen.",
      podcasters: {
        title: "Podcaster",
        pain: "„Hören Sie auf, auszuwählen, welche Episoden Transkripte verdienen“",
        description: "Laden Sie Ihr gesamtes Podcast-Archiv auf einmal hoch. Erstellen Sie Shownotizen, verbessern Sie die SEO und verwenden Sie Inhalte neu, ohne Minuten zu zählen.",
        benefits: {
          benefit1: "Laden Sie alle Episoden hoch, nicht nur 3",
          benefit2: "SEO-freundliche Shownotizen erstellen",
          benefit3: "Erstellen Sie durchsuchbare Archive",
          benefit4: "In Blog-Inhalte umwandeln"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Folgen"
          },
          stat2: {
            number: "200 Stunden",
            label: "Gespeichert"
          },
          stat3: {
            number: "3x",
            label: "SEO-Verkehr"
          }
        }
      },
      journalists: {
        title: "Journalisten & Schriftsteller",
        pain: "„Termindruck trifft auf Upload-Beschränkungen“",
        description: "Laden Sie alle Interviews vor Ablauf der Frist stapelweise hoch. Durchsuchen Sie die Transkripte sofort und verpassen Sie nie wieder ein wichtiges Zitat.",
        benefits: {
          benefit1: "Batch-Upload vor Fristablauf",
          benefit2: "Alle Interviews auf einmal durchsuchen",
          benefit3: "Präzise Angebote mit Zeitstempeln",
          benefit4: "Akzente und Sprachen beherrschen"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Interviews/Monat"
          },
          stat2: {
            number: "96 %",
            label: "Genauigkeit"
          },
          stat3: {
            number: "5 Minuten",
            label: "Pro Stunde"
          }
        }
      },
      contentCreators: {
        title: "Inhaltsersteller",
        pain: "„Barrierefreiheit darf nicht teuer sein“",
        description: "Versehen Sie Ihren gesamten YouTube-Kanal mit Untertiteln. Erstellen Sie Untertitel in mehreren Sprachen und verbessern Sie sofort Ihre Video-SEO.",
        benefits: {
          benefit1: "Untertiteln Sie alle Videos auf einmal",
          benefit2: "249 Sprachübersetzungen",
          benefit3: "YouTube-fähige SRT-Dateien",
          benefit4: "Verbessern Sie das SEO-Ranking von Videos"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videos"
          },
          stat2: {
            number: "100+",
            label: "Sprachen"
          },
          stat3: {
            number: "249",
            label: "Übersetzungen"
          }
        }
      },
      researchers: {
        title: "Forscher & Akademiker",
        pain: "„Qualitative Daten sollten nicht in der Warteschlange stehen“",
        description: "Verarbeiten Sie komplette Forschungsstudien auf einmal. Führen Sie Fokusgruppen, Interviews und Podiumsdiskussionen mit perfekter Sprecheridentifikation durch.",
        benefits: {
          benefit1: "Fokusgruppen massenhaft verarbeiten",
          benefit2: "20-Sprecher-Identifikation",
          benefit3: "Export in Analysesoftware",
          benefit4: "DSGVO-konforme Sicherheit"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studie"
          },
          stat2: {
            number: "96 %",
            label: "Gruppengenauigkeit"
          },
          stat3: {
            number: "DSGVO",
            label: "Konform"
          }
        }
      },
      businessTeams: {
        title: "Geschäftsteams",
        pain: "„Meeting-Aufzeichnungen sollten mühelos sein“",
        description: "Zeichnen Sie Meetings direkt auf oder laden Sie Audiodateien zur sofortigen Transkription hoch. Erstellen Sie durchsuchbare Archive aus einer unbegrenzten Anzahl von Gesprächen und verlieren Sie nie wieder wichtige Diskussionen.",
        benefits: {
          benefit1: "Direkte Audioaufnahme und Transkription",
          benefit2: "Unbegrenzte Meeting-Aufzeichnungen",
          benefit3: "Durchsuchbares Besprechungsarchiv",
          benefit4: "Audiodateien sofort hochladen"
        },
        stats: {
          stat1: {
            number: "Live",
            label: "Aufnahme"
          },
          stat2: {
            number: "Sofort",
            label: "Hochladen"
          },
          stat3: {
            number: "20+",
            label: "Lautsprecher"
          }
        }
      },
      educators: {
        title: "Pädagogen",
        pain: "„YouTube-Videos benötigen eine sofortige Transkription“",
        description: "Fügen Sie einfach YouTube-Links ein, um sofort Transkripte und automatisch generierte Untertitel zu erhalten. Verwandeln Sie jedes Lehrvideo in zugängliche, durchsuchbare Inhalte.",
        benefits: {
          benefit1: "Direkte YouTube-Link-Transkription",
          benefit2: "Videountertitel automatisch generieren",
          benefit3: "Transkribieren Sie ganze Kurse",
          benefit4: "Durchsuchbare Vorlesungsarchive"
        },
        stats: {
          stat1: {
            number: "1-Klick",
            label: "YouTube-Einfügen"
          },
          stat2: {
            number: "Auto",
            label: "Untertitel"
          },
          stat3: {
            number: "100+",
            label: "Sprachen"
          }
        }
      },
      quotes: {
        title: "Echte Benutzer,",
        titleHighlight: "Echte Freiheit",
        subtitle: "Hören Sie von Fachleuten, die sich von künstlichen Grenzen befreit haben",
        testimonials: {
          mike: {
            textBefore: "„Ich hatte",
            highlight: "3 Jahre Episoden",
            textAfter: "liegt untranskribiert da. Otter wollte, dass ich 3 auswähle. DREI. NeverCap lass mich alle 150 Episoden an einem Wochenende hochladen.“",
            name: "Mike Rodriguez",
            role: "Podcast-Host"
          },
          jessica: {
            textBefore: "„Als freiberuflicher Journalist kann ich mir Trints nicht leisten",
            highlight: "100 $/Monat",
            textAfter: ', aber ich kann auch nicht mit Otters Limit von 10 Dateien pro Monat arbeiten. NeverCap hat meine Karriere gerettet."',
            name: "Jessica Park",
            role: "Freiberuflicher Journalist"
          },
          sarah: {
            textBefore: "„Unser Forschungsteam hatte",
            highlight: "200 Stunden",
            textAfter: "von Fokusgruppen-Aufzeichnungen. Wir haben alles an einem Wochenende verarbeitet, anstatt monatlich Minuten zu rationieren.“",
            name: "Dr. Sarah Chen",
            role: "Leitender Forscher"
          },
          carlos: {
            textBefore: '"Ich erstelle Bildungsinhalte auf Spanisch. NeverCap transkribiert perfekt und',
            highlight: "übersetzt ins Englische",
            textAfter: "für eine größere Reichweite. Keine Grenzen, nur Wachstum.“",
            name: "Carlos Martinez",
            role: "YouTube-Lehrer"
          }
        }
      },
      industries: {
        title: "Vertrauenswürdig",
        titleHighlight: "Branchen",
        subtitle: "Profis auf der ganzen Welt wechseln zu wirklich unbegrenzten",
        list: {
          media: "Medien & Verlagswesen",
          education: "Ausbildung",
          healthcare: "Gesundheitspflege",
          technology: "Technologie",
          finance: "Finanzen",
          legal: "Rechtliches"
        }
      },
      cta: {
        title: "Auch Ihr Anwendungsfall benötigt unbegrenzte",
        subtitle: "Schließen Sie sich über 50.000 Fachleuten an, die aufgehört haben, Minuten zu zählen und angefangen haben, kreativ zu sein",
        button: "Beginnen Sie Ihre grenzenlose Reise →"
      }
    },
    Podcasters: {
      badge: "🎙️ Für Podcaster entwickelt",
      heroTitle: "Transkribieren Sie Ihre",
      heroTitleHighlight: "Gesamtes Podcast-Archiv",
      heroSubtitle: "Laden Sie Ihren gesamten Backkatalog hoch. Erstellen Sie Shownotes für jede Episode. Sie müssen nicht mehr auswählen, welche Episoden transkribiert werden sollen. Verarbeiten Sie 50 Episoden gleichzeitig, unbegrenzt oft pro Monat.",
      ctaPrimary: "Kostenlose Transkription starten",
      ctaSecondary: "So funktioniert es",
      trustBadge1: "🎙️ Über 10.000 Podcaster",
      trustBadge2: "∞ Unbegrenzte Episoden",
      trustBadge3: "📝 SEO-fähige Transkripte",
      stats: {
        stat1: {
          number: "∞",
          label: "Folgen/Monat"
        },
        stat2: {
          number: "50",
          label: "Stapel-Upload"
        },
        stat3: {
          number: "10 Stunden",
          label: "Maximale Episodenlänge"
        },
        stat4: {
          number: "96 %",
          label: "Genauigkeit"
        }
      },
      problemTitle: "Der",
      problemTitleHighlight: "Problem mit der Podcast-Transkription",
      problemSubtitle: "Bei anderen Diensten müssen Sie auswählen, welche Episoden eine Transkription „lohnen“.",
      problems: {
        problem1: {
          title: "Upload-Limits töten Archive",
          description: "Otter bietet Ihnen 3 kostenlose Importe auf Lebenszeit und 10 pro Monat bei Pro. Wie transkribieren Sie Episoden aus 3 Jahren?"
        },
        problem2: {
          title: "Verpasste SEO-Möglichkeiten",
          description: "Jede nicht transkribierte Episode bedeutet verlorenen SEO-Verkehr. Aber Descript begrenzt Sie auf bestenfalls 30 Stunden/Monat."
        },
        problem3: {
          title: "Kosten explodieren mit dem Wachstum",
          description: "Mit dem Wachstum Ihres Podcasts steigen die Transkriptionskosten sprunghaft an. Überschreitungsgebühren von 2 $/Stunde machen eine Skalierung unmöglich."
        }
      },
      solutionTitle: "Der",
      solutionTitleHighlight: "NeverCap Lösung",
      solutionDescription: "Unbegrenzte Transkription. Laden Sie Ihr gesamtes Archiv hoch. Transkribieren Sie jede neue Episode. Erstellen Sie Show-Notizen in großem Umfang. Keine Obergrenzen, keine Grenzen, nur Wachstum.",
      workflowTitle: "Ihr Podcast-Workflow,",
      workflowTitleHighlight: "Vereinfacht",
      workflowSubtitle: "Von der Aufzeichnung bis zu SEO-optimierten Shownotes in Minuten",
      workflow: {
        step1: {
          title: "Episoden hochladen",
          description: "Veröffentlichen Sie 50 Episoden auf einmal. MP3, MP4, WAV – wir verarbeiten alles."
        },
        step2: {
          title: "KI transkribiert",
          description: "96 % Genauigkeit mit Sprechererkennung. Perfekt für Interviews."
        },
        step3: {
          title: "Intelligente Formatierung",
          description: "KI fügt automatisch Absätze, Sätze und Satzzeichen hinzu."
        },
        step4: {
          title: "Veröffentlichen und bewerten",
          description: "Exportieren Sie es auf Ihre Website. Beobachten Sie, wie Ihr SEO-Verkehr wächst."
        }
      },
      featuresTitle: "Funktionen Podcaster",
      featuresTitleHighlight: "Eigentlich brauchen",
      featuresSubtitle: "Von Podcastern für Podcaster entwickelt",
      features: {
        feature1: {
          title: "Erkennung mehrerer Sprecher",
          description: "Identifiziert und beschriftet automatisch bis zu 20 Sprecher. Perfekt für Podiumsdiskussionen, Interviews und gemeinsam moderierte Shows."
        },
        feature2: {
          title: "Zeitstempel Kapitel",
          description: "Generieren Sie anklickbare Zeitstempel für YouTube-Beschreibungen. So können Hörer direkt zu ihren Lieblingssegmenten springen."
        },
        feature3: {
          title: "Intelligente Formatierung",
          description: "Fügt automatisch Absätze, Sätze und Satzzeichen hinzu. Erhalten Sie saubere, lesbare Transkripte. Sparen Sie Stunden bei der Nachbearbeitung."
        },
        feature4: {
          title: "SEO-Optimierung",
          description: "Für Suchmaschinen formatierte Transkripte. Steigern Sie die Auffindbarkeit Ihres Podcasts und erreichen Sie neue Zielgruppen."
        },
        feature5: {
          title: "Über 100 Sprachen",
          description: "Transkribieren Sie in jeder Sprache. Übersetzen Sie in über 249 Sprachen. Erreichen Sie mühelos ein globales Publikum."
        },
        feature6: {
          title: "Stapelverarbeitung",
          description: "Laden Sie vor dem Schlafengehen 50 Episoden hoch. Stehen Sie auf, um die Transkripte fertigzustellen. Verarbeiten Sie Ihr gesamtes Archiv über Nacht."
        }
      },
      testimonialsTitle: "Podcaster, die es geschafft haben",
      testimonialsTitleHighlight: "Der Schalter",
      testimonialsSubtitle: "Echte Geschichten von echten Podcastern",
      testimonials: {
        mike: {
          text: "„Ich mache seit drei Jahren einen Podcast und habe wie ein Idiot alles manuell transkribiert. Ich habe sechs Episoden auf einmal hochgeladen und die Trennung zwischen mir und meinem Co-Moderator war perfekt. Die Coffee-Shop-Episode, die ich für ruiniert hielt? Kristallklares Transkript. Ich werde nie wieder dazu zurückkehren, das Zeug selbst abzutippen.“",
          name: "Mike Rodriguez",
          role: "Moderator des Podcasts „The Daily Grind“"
        },
        sarah: {
          text: "„Otter hat mich auf 10 Dateiimporte pro Monat beschränkt. Ich habe einen Rückstand von 150 Episoden. NeverCap ermöglicht es mir, alles in 3 Stapeln hochzuladen. Mein organischer Verkehr hat sich um 300 % erhöht, seit ich Transkripte zu alten Episoden hinzugefügt habe. Das zahlt sich buchstäblich von selbst.“",
          name: "Sarah Chen",
          role: "Schöpfer von „Tech Talks Today“"
        }
      },
      comparisonTitle: "Warum Podcaster wählen",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Sehen Sie, wie wir im Vergleich zur Konkurrenz abschneiden",
      comparison: {
        headers: {
          feature: "Besonderheit",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Beschreibung des Erstellers"
        },
        rows: {
          monthlyLimit: {
            feature: "Monatliches Episodenlimit",
            nevercap: "Unbegrenzt",
            otter: "~13 Folgen (1200 Min.)",
            descript: "~30 Folgen (30 Std.)"
          },
          uploadLimit: {
            feature: "Datei-Upload-Limit",
            nevercap: "Unbegrenzt",
            otter: "10 pro Monat",
            descript: "1 auf einmal"
          },
          batchProcessing: {
            feature: "Stapelverarbeitung",
            nevercap: "50 Dateien",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maximale Episodenlänge",
            nevercap: "10 Stunden",
            otter: "90 Minuten",
            descript: "Unbegrenzt"
          },
          speakerDetection: {
            feature: "Sprechererkennung",
            nevercap: "20 Lautsprecher",
            otter: "16 Lautsprecher",
            descript: "10 Lautsprecher"
          },
          smartFormatting: {
            feature: "Intelligente Formatierung",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Preis",
            nevercap: "17,99 $/Monat",
            otter: "16,99 $/Monat",
            descript: "30 $/Monat"
          }
        }
      },
      ctaTitle: "Beginnen Sie mit der Transkription jeder Episode",
      ctaSubtitle: "Schließen Sie sich über 10.000 Podcastern an, die sich nie um Grenzen sorgen",
      ctaButton: "Laden Sie Ihre ersten 50 Episoden kostenlos hoch →",
      ctaDisclaimer: "Keine Kreditkarte erforderlich • Unbegrenzte Anzahl an Episoden verarbeiten • Jederzeit kündbar"
    },
    Journalists: {
      hero: {
        badge: "📰 Für Journalisten und Autoren",
        title: "Transkribieren Sie jedes Interview.",
        titleHighlight: "Verpassen Sie nie wieder ein Angebot.",
        subtitle: "Sie müssen nicht mehr entscheiden, welche Interviews transkribiert werden sollen. Laden Sie alle Aufnahmen auf einmal hoch, durchsuchen Sie alles sofort und halten Sie Ihre Termine ein, ohne sich um das Hochladen sorgen zu müssen.",
        ctaPrimary: "Unbegrenzte Uploads starten →",
        ctaSecondary: "So funktioniert es",
        stats: {
          uploads: {
            number: "∞",
            label: "Datei-Uploads"
          },
          accuracy: {
            number: "96 %",
            label: "Genauigkeit"
          },
          speed: {
            number: "5 Minuten",
            label: "Pro Stunde"
          }
        },
        dashboard: {
          title: "Interview-Warteschlange",
          status: "• Alle Verarbeitungen",
          interviews: {
            cityCouncil: {
              title: "Stadtratssitzung",
              duration: "2 Std. 15 Min. • Hochladen …",
              action: "Verarbeitung"
            },
            expertInterview: {
              title: "Experteninterview - Dr. Chen",
              duration: "45 Min. • Transkribieren …",
              action: "96 % erledigt"
            },
            pressConference: {
              title: "Pressekonferenz",
              duration: "1 Std. 30 Min. • Fertig",
              action: "Ansicht →"
            },
            phoneInterview: {
              title: "Telefoninterview - Quelle",
              duration: "35 Min. • Fertig",
              action: "Ansicht →"
            }
          }
        }
      },
      problem: {
        title: "Der",
        titleHighlight: "Transkriptionsproblem für Journalisten",
        subtitle: "Bei anderen Diensten müssen Sie auswählen, welche Interviews eine Transkription „lohnen“.",
        problems: {
          uploadLimits: {
            title: "Upload-Limits verhindern Ermittlungen",
            description: "Otter ermöglicht Ihnen 10 Dateiimporte pro Monat auf Pro. Wie transkribieren Sie 3 Wochen investigativer Interviews?"
          },
          missingQuotes: {
            title: "Fehlende entscheidende Zitate",
            description: "Jedes nicht transkribierte Interview könnte das Schlüsselzitat der Geschichte enthalten. Trint beschränkt Sie jedoch auf höchstens 50 Stunden pro Monat."
          },
          costExplosion: {
            title: "Kosten explodieren mit Fristen",
            description: "Mit zunehmender Intensität Ihrer Ermittlungen steigen die Transkriptionskosten sprunghaft an. Überschreitungsgebühren von 100 US-Dollar pro Monat machen es unmöglich, aktuelle Nachrichten zu erhalten."
          }
        },
        solution: {
          title: "Der",
          titleHighlight: "NeverCap Lösung",
          description: "Unbegrenzte Transkription. Laden Sie Ihre gesamte Recherche hoch. Transkribieren Sie jedes Interview. Durchsuchen Sie alle Zitate sofort. Keine Obergrenzen, keine Grenzen, nur Journalismus."
        }
      },
      solution: {
        title: "Endlich,",
        titleHighlight: "Wahre Freiheit",
        titleSuffix: "für Journalisten",
        subtitle: "Alles hochladen. Alles transkribieren. Alles durchsuchen.",
        solutions: {
          unlimitedUploads: {
            label: "Unbegrenzte Uploads",
            title: "Stapel-Upload Ihrer gesamten Untersuchung",
            description: "Sie müssen nicht mehr auswählen, welche Interviews transkribiert werden sollen. Laden Sie 50 Dateien gleichzeitig hoch. Verarbeiten Sie monatelange Aufzeichnungen über Nacht. Ihre gesamte Untersuchung, transkribiert.",
            points: {
              simultaneousUpload: "50 Dateien gleichzeitig hochladen",
              noLimits: "Keine monatlichen Upload-Limits",
              processWhileWrite: "Verarbeiten Sie, während Sie schreiben",
              longRecordings: "10-Stunden-Aufnahmen werden unterstützt"
            },
            visual: {
              number: "50",
              label: "Dateien auf einmal"
            }
          },
          instantSearch: {
            label: "Sofortsuche",
            title: "Finden Sie jedes Angebot in Sekunden",
            description: "Durchsuchen Sie sofort alle Ihre Transkripte. Finden Sie das perfekte Zitat von vor drei Monaten. Verlieren Sie nie wieder wichtige Aussagen in Ihren Notizen.",
            points: {
              searchAll: "Suche in allen Interviews",
              wordTimestamps: "Zeitstempel auf Wortebene",
              jumpToMoments: "Springen Sie zu genauen Momenten",
              exportCitations: "Export mit Zitaten"
            },
            searchDemo: {
              placeholder: "Klimapolitische Erklärung",
              resultsText: "In 4 Interviews gefunden:",
              results: {
                mayorInterview: "„…unsere Klimapolitik wird sich verändern…“",
                expertPanel: "„…die Grundsatzerklärung zeigt deutlich…“"
              }
            }
          },
          professionalAccuracy: {
            label: "Professionelle Genauigkeit",
            title: "96 % Genauigkeit, die Sie angeben können",
            description: "Erhalten Sie Transkripte, die so präzise sind, dass Sie direkt zitieren können. Berücksichtigt Akzente, Fachbegriffe und schnelle Konversationen. Perfekte Formatierung, die tatsächlich lesbar ist.",
            points: {
              accuracyGuarantee: "96 % Genauigkeitsgarantie",
              handlesAccents: "Behandelt Akzente und Dialekte",
              smartPunctuation: "Intelligente Zeichensetzung und Absätze",
              speakerIdentification: "Sprecheridentifikation"
            },
            visual: {
              accuracy: "96 %",
              label: "Genauigkeitsrate",
              transcript: {
                speaker1: "„Die Untersuchung ergab erhebliche Unstimmigkeiten in den Finanzberichten.“",
                speaker2: "„Können Sie diese spezifischen Diskrepanzen näher erläutern?“"
              }
            }
          }
        }
      },
      features: {
        title: "Alles ein",
        titleHighlight: "Bedürfnisse von Journalisten",
        subtitle: "Professionelle Tools, die Ihren Workflow respektieren",
        featuresList: {
          languages: {
            title: "Über 100 Sprachen",
            description: "Befragen Sie Quellen weltweit in 12 Hauptsprachen mit einer Genauigkeit von 96 %."
          },
          exportFormats: {
            title: "Exportformate",
            description: "Word, PDF, SRT, TXT. Kompatibel mit jedem Workflow."
          },
          sourceProtection: {
            title: "Quellenschutz",
            description: "Verschlüsselung auf Bankniveau. Ihre Quellen bleiben vertraulich."
          },
          timestamps: {
            title: "Zeitstempel",
            description: "Klicken Sie auf ein beliebiges Zitat, um zum genauen Audiomoment zu springen."
          },
          teamSharing: {
            title: "Teamfreigabe",
            description: "Arbeiten Sie mit Redakteuren zusammen. Geben Sie Transkripte sicher frei."
          },
          mobileReady: {
            title: "Mobil bereit",
            description: "Vom Telefon hochladen. Transkripte überall überprüfen."
          },
          smartFormatting: {
            title: "Intelligente Formatierung",
            description: "Automatische Absätze und Zeichensetzung für lesbare Transkripte."
          },
          batchProcessing: {
            title: "Stapelverarbeitung",
            description: "Laden Sie 50 Dateien gleichzeitig hoch. Verarbeiten Sie sie über Nacht, während Sie schlafen."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Aufgrund von Upload-Beschränkungen lagen drei Jahre lang Interviews untranskribiert herum. NeverCap ermöglichte es mir, alles an einem Wochenende zu verarbeiten. Das war ein Wendepunkt.",
          name: "Jessica Park",
          role: "Freiberuflicher Journalist, ehemaliger Otter-Benutzer"
        }
      },
      cta: {
        title: "Beginnen Sie mit der Transkription",
        titleHighlight: "Ohne Grenzen",
        subtitle: "Schließen Sie sich Tausenden von Journalisten an, die aufgehört haben, Uploads zu zählen und sich auf Geschichten konzentrieren",
        ctaPrimary: "Unbegrenzt kostenlos testen →",
        ctaSecondary: "Preise anzeigen"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Für Content-Ersteller",
        title: "Beschriften Sie Ihre",
        titleHighlight: "Gesamter Kanal",
        titleSuffix: "Ohne Minuten zu zählen",
        subtitle: "Entscheiden Sie nicht länger, welche Videos Untertitel verdienen. Verarbeiten Sie Ihre gesamte YouTube-Bibliothek, generieren Sie Untertitel in über 100 Sprachen und holen Sie sich Videos direkt von jeder Plattform. Keine monatlichen Limits, keine Upload-Beschränkungen – einfach pure kreative Freiheit.",
        ctaPrimary: "Unbegrenzte Untertitelung starten →",
        ctaSecondary: "So funktioniert es",
        stats: {
          videos: {
            number: "∞",
            label: "Videos/Monat"
          },
          languages: {
            number: "100+",
            label: "Sprachen"
          },
          accuracy: {
            number: "96 %",
            label: "Genauigkeit"
          },
          platforms: {
            number: "10+",
            label: "Plattformen"
          }
        }
      },
      platforms: {
        title: "Abrufen und Transkribieren von jeder Plattform",
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
        title: "Alles, was Sie brauchen, um",
        titleHighlight: "Inhalt skalieren",
        subtitle: "Professionelle Werkzeuge ohne professionelle Grenzen",
        oneClickImport: {
          label: "Import mit einem Klick",
          title: "Link einfügen.",
          titleHighlight: "Transkript abrufen.",
          description: "Kein Herunterladen und erneutes Hochladen mehr. Fügen Sie einfach Ihren YouTube-, TikTok- oder Instagram-Link ein und erhalten Sie sofort Transkripte. Verarbeiten Sie den Rückstand Ihres gesamten Kanals an einem Wochenende.",
          points: {
            directYoutube: "Direkte YouTube-Link-Transkription",
            multiplePlatforms: "Von über 10 Plattformen abrufen",
            batchPlaylists: "Stapelverarbeitung ganzer Wiedergabelisten",
            autoSync: "Automatische Synchronisierung mit Ihren Kanälen"
          },
          demo: {
            instruction: "Fügen Sie Ihre Video-URL ein:",
            url: "https://youtube.com/watch?v=...",
            status: "Abrufen und Transkribieren …"
          }
        },
        globalReach: {
          label: "Globale Reichweite",
          title: "Über 100 Sprachen.",
          titleHighlight: "Keine Grenzen.",
          description: "Erreichen Sie ein globales Publikum mit automatischer Übersetzung in über 100 Sprachen. Erstellen Sie Untertitel in mehreren Sprachen gleichzeitig. Keine zusätzlichen Kosten, keine monatlichen Obergrenzen für Übersetzungen.",
          points: {
            highAccuracy: "96 % Genauigkeit in 12 Hauptsprachen",
            unlimitedTranslations: "Unbegrenzte Übersetzungen inklusive",
            multicultural: "Perfekt für multikulturelle Inhalte",
            autoDetect: "Automatische Erkennung der Ausgangssprache"
          },
          visual: {
            number: "100+",
            title: "Unterstützte Sprachen",
            subtitle: "Einmal übersetzen, alle erreichen"
          }
        },
        flexibleExport: {
          label: "Flexibler Export",
          title: "Jedes Format",
          titleHighlight: "Sie benötigen",
          description: "Exportieren Sie in das Format, das zu Ihrem Workflow passt. Von SRT-Dateien für YouTube über VTT für Webplayer bis hin zu editierbaren Dokumenten für Skripte. Alle Exporte sind unbegrenzt und in jedem Plan enthalten.",
          points: {
            videoFormats: "SRT & VTT für Videoplattformen",
            editingFormats: "DOCX und PDF zum Bearbeiten",
            dataAnalysis: "CSV zur Datenanalyse",
            simpleScripts: "TXT für einfache Skripte"
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
        title: "Vom Hochladen nach",
        titleHighlight: "Veröffentlicht",
        titleSuffix: "in Minuten",
        subtitle: "Der schnellste Weg, Ihre gesamte Inhaltsbibliothek mit Untertiteln zu versehen",
        steps: {
          pasteLinks: {
            title: "Links einfügen",
            description: "Fügen Sie einen YouTube-, TikTok- oder anderen Videolink ein. Oder laden Sie Dateien direkt hoch."
          },
          autoTranscribe: {
            title: "Automatische Transkription",
            description: "KI verarbeitet mit 96 % Genauigkeit. Behandelt Akzente und mehrere Sprecher."
          },
          editTranslate: {
            title: "Bearbeiten und Übersetzen",
            description: "Perfektionieren Sie Ihre Untertitel. Übersetzen Sie sofort in über 100 Sprachen."
          },
          exportPublish: {
            title: "Exportieren und Veröffentlichen",
            description: "In jedem beliebigen Format herunterladen. Auf Ihre Plattform hochladen. Fertig!"
          }
        }
      },
      testimonials: {
        title: "Schöpfer sind",
        titleHighlight: "Täglich wechseln",
        subtitle: "Von begrenzten Plänen zu unbegrenzter Freiheit",
        carlos: {
          textBefore: "Ich erstelle Bildungsinhalte auf Spanisch. NeverCap transkribiert perfekt und",
          textAfter: "Für eine größere Reichweite. Keine Grenzen, nur Wachstum. Die Aufrufe meines Kanals haben sich nach dem Hinzufügen mehrsprachiger Untertitel verdreifacht.",
          highlight: "übersetzt ins Englische",
          name: "Carlos Martinez",
          role: "YouTube-Lehrer • 250.000 Abonnenten"
        },
        sarah: {
          textBefore: "Beschreibung wollte 30 $/Monat für",
          textAfter: ". Ich habe über 500 Videos im Rückstand. NeverCap ermöglichte es mir, alles an einem Wochenende zu bearbeiten. Der SEO-Schub durch Untertitel hat sich bereits im ersten Monat bezahlt gemacht.",
          highlight: "30 Stunden",
          name: "Sarah Lee",
          role: "Lifestyle-Vlogger • 180.000 Abonnenten"
        },
        jake: {
          textBefore: "Der",
          textAfter: "Diese Funktion ist bahnbrechend. Ich lade nichts mehr herunter. Einfach einfügen, transkribieren, fertig. Die Verarbeitung meiner Podcast-Clips für TikTok war noch nie so einfach.",
          highlight: "direkter YouTube-Abruf",
          name: "Jake Wilson",
          role: "Podcast-Moderator • Top 1 % der Ersteller"
        },
        yuki: {
          textBefore: "Ich erstelle Inhalte in 5 Sprachen. Andere Dienste sind kostenpflichtig.",
          textAfter: ". NeverCap bietet mir unbegrenzte Übersetzungen. Mein internationales Publikum ist um 400 % gewachsen, seit ich angefangen habe, richtige muttersprachliche Untertitel zu verwenden.",
          highlight: "pro Übersetzung",
          name: "Yuki Tanaka",
          role: "Gaming-Ersteller • 500.000 Abonnenten"
        }
      },
      cta: {
        title: "Ihr ganzer Kanal. Mit Untertiteln. Heute.",
        subtitle: "Schließen Sie sich über 50.000 Kreativen an, die aufgehört haben, Minuten zu zählen und angefangen haben, kreativ zu sein",
        button: "Unbegrenzte Untertitelung starten →"
      }
    },
    Researchers: {
      heroBadge: "Für akademische Exzellenz konzipiert",
      heroTitle1: "Transkribieren Sie jedes Interview.",
      heroTitle2: "Analysieren Sie alle Ihre Daten.",
      heroSubtitle: "Sie müssen nicht mehr entscheiden, welche Fokusgruppen transkribiert werden sollen. Verarbeiten Sie alle Ihre qualitativen Daten mit 96 % Genauigkeit und einwandfreier Sprecheridentifizierung – selbst wenn 20 Teilnehmer durcheinanderreden.",
      heroCtaPrimary: "Kostenlos testen – Keine Kreditkarte erforderlich",
      heroCtaSecondary: "So funktioniert es",
      statsInterviewHours: "Interviewzeiten",
      statsAccuracy: "Genauigkeit",
      statsSpeakersId: "Sprecher-ID",
      statsCompliant: "Konform",
      problemTitle: "Das Problem der Forschungstranskription",
      problemSubtitle: "Bei anderen Diensten müssen Sie entscheiden, welche Daten eine Transkription „wert“ machen.",
      problemCard1Title: "Upload-Limits verhindern Studien",
      problemCard1Desc: "Otter bietet Ihnen 3 lebenslange Importe. Wie transkribieren Sie 200 Stunden Fokusgruppen?",
      problemCard2Title: "Fehlende kritische Daten",
      problemCard2Desc: "Jedes nicht transkribierte Interview könnte bahnbrechende Erkenntnisse enthalten. Rev berechnet jedoch mindestens 2 $ pro Minute.",
      problemCard3Title: "Fördergelder verschwinden",
      problemCard3Desc: "Wenn Ihr Datensatz wächst, explodieren die Transkriptionskosten. 500 US-Dollar pro Fokusgruppe machen eine Skalierung unmöglich.",
      solutionTitle: "Die NeverCap-Lösung",
      solutionDesc: "Unbegrenzte Transkription. Laden Sie Ihre gesamte Studie hoch. Transkribieren Sie jedes Interview. Analysieren Sie alle Ihre Daten. Keine Obergrenzen, keine Grenzen, nur Forschung.",
      feature1Label: "Keine Grenzen",
      feature1Title: "Verarbeiten Sie Ihre gesamte Studie in einem Durchgang",
      feature1Desc: "Laden Sie heute Abend alle 200 Stunden Interviews hoch. Wachen Sie auf und finden Sie vollständige, durchsuchbare Transkripte. Keine monatlichen Obergrenzen, keine Dateibeschränkungen, kein „Fair Use“-Blödsinn.",
      feature1Point1: "Batch-Upload von 50 Dateien gleichzeitig",
      feature1Point2: "Längsschnittstudien vollständig bearbeiten",
      feature1Point3: "Keine Speicherbeschränkungen für Transkripte",
      feature1Point4: "Export nach NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Unbegrenzte Stunden",
      feature1Visual2: "Gleicher Preis für 10 oder 10.000 Stunden",
      feature2Label: "Intelligente KI",
      feature2Title: "Fokusgruppen meistern jedes Mal",
      feature2Desc: "Unsere KI erfasst bis zu 20 Sprecher, selbst wenn sie durcheinanderreden, sich gegenseitig unterbrechen oder alle gleichzeitig einspringen. Jede Stimme wird erfasst und korrekt beschriftet.",
      feature2Point1: "20-Sprecher-Identifikation",
      feature2Point2: "Bewältigt Übersprechen und Unterbrechungen",
      feature2Point3: "Lautsprecherbezeichnungen, die Sie umbenennen können",
      feature2Point4: "Zeitstempel für jedes Wort",
      conversationParticipant1: "Teilnehmer 1",
      conversationText1: "Das größte Hindernis sind definitiv die Behandlungskosten …",
      conversationParticipant2: "Teilnehmer 2",
      conversationText2: "Absolut, aber ich möchte hinzufügen, dass der Zugriff –",
      conversationParticipant3: "Teilnehmer 3",
      conversationText3: "– entschuldigen Sie die Unterbrechung, aber der Transport ist auch ein großes Thema.",
      conversationText4: "Ja! Genau das wollte ich gerade sagen.",
      conversationParticipant4: "Teilnehmer 4",
      conversationText5: "In ländlichen Gebieten kommt es auf alle drei Faktoren an: Kosten, Zugang UND Transport.",
      feature3Label: "Präzision",
      feature3Title: "96 % Genauigkeit, die Bestand hat",
      feature3Desc: "Bewältigt Fachjargon, starke Akzente und fachspezifische Terminologie wie ein Profi. Genau genug für Veröffentlichungen, Peer-Reviews und Ihr Dissertationskomitee.",
      feature3Point1: "Medizinische und wissenschaftliche Terminologie",
      feature3Point2: "Über 100 Sprachen und Dialekte",
      feature3Point3: "Verbatim- und Clean-Read-Modi",
      feature3Point4: "Bearbeiten und exportieren Sie in jedem Format",
      feature3Visual1: "Genauigkeit auf Forschungsniveau",
      feature3Visual2: "Mehr als 50.000 Forscher vertrauen uns",
      feature4Label: "Sicherheit",
      feature4Title: "IRB-fähige Sicherheit",
      feature4Desc: "Ihre sensiblen Forschungsdaten werden mit Sicherheit auf Unternehmensniveau geschützt. DSGVO-konform, HIPAA-fähige Optionen und vollständige Prüfpfade für IRB-Anforderungen.",
      feature4Point1: "Ende-zu-Ende-Verschlüsselung",
      feature4Point2: "DSGVO- und CCPA-konform",
      feature4Point3: "Richtlinien zur automatischen Löschung",
      feature4Point4: "Sichere Teamzusammenarbeit",
      useCasesTitle: "Perfekt für jede Forschungsmethode",
      useCasesSubtitle: "Von der Ethnographie zu klinischen Studien",
      useCase1Title: "Fokusgruppen",
      useCase1Desc: "Bewältigen Sie 8–20 Teilnehmer mit überlappenden Reden. Perfekte Sprecheridentifizierung auch bei hitzigen Diskussionen. Direkter Export in qualitative Analysesoftware.",
      useCase2Title: "Ausführliche Interviews",
      useCase2Desc: "Verarbeiten Sie Hunderte von Einzelinterviews gleichzeitig. Sorgen Sie für Konsistenz in Ihrem gesamten Datensatz. Durchsuchen Sie alle Transkripte sofort.",
      useCase3Title: "Klinische Forschung",
      useCase3Desc: "HIPAA-konforme Optionen für Patienteninterviews. Präzise Transkription medizinischer Terminologie. Sicherer Umgang mit sensiblen Gesundheitsdaten.",
      useCase4Title: "Ethnographische Studien",
      useCase4Desc: "Feldaufnahmen in natürlicher Umgebung. Bewältigen Sie Hintergrundgeräusche und mehrere Sprecher. Unterstützung für über 100 Sprachen und Dialekte.",
      useCase5Title: "Oral History-Projekte",
      useCase5Desc: "Bewahren Sie ganze Archive ohne Einschränkungen auf. Erstellen Sie durchsuchbare historische Aufzeichnungen. Ideal für Längsschnitt- und Generationenstudien.",
      useCase6Title: "Dissertationsforschung",
      useCase6Desc: "Studentenfreundliche Preise mit vollem Funktionsumfang. Verarbeiten Sie Ihren gesamten Datensatz kostengünstig. Halten Sie enge Fristen mit der Stapelverarbeitung ein.",
      testimonialTitle: "Führende Forscher vertrauen uns",
      testimonialText: "Unser Forschungsteam verfügte über 200 Stunden Fokusgruppenaufzeichnungen aus unserer Gesundheitsstudie. Andere Dienste verlangten aus Kostengründen von uns, die zu transkribierenden Sitzungen selbst auszuwählen. NeverCap ermöglichte uns die Bearbeitung an einem Wochenende. Die 20-Sprecher-Identifizierung funktionierte tatsächlich – selbst bei unseren chaotischsten Diskussionen, bei denen alle gleichzeitig redeten. Dieses Tool hat unseren Umgang mit qualitativen Daten völlig verändert.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Leitender Forscher, Institut für öffentliche Gesundheit",
      ctaTitle: "Hören Sie auf, auszuwählen, welche Daten analysiert werden sollen",
      ctaSubtitle: "Schließen Sie sich über 50.000 Forschern an, die alles transkribieren",
      ctaButton: "Testen Sie NeverCap kostenlos"
    },
    BusinessTeams: {
      heroBadge: "Für Business-Teams",
      heroTitle1: "Besprechungsaufzeichnung erstellt",
      heroTitle2: "Mühelos",
      heroSubtitle: "Zeichnen Sie Meetings direkt im Browser auf oder laden Sie Audiodateien sofort hoch. Erstellen Sie durchsuchbare Archive aus einer unbegrenzten Anzahl von Gesprächen. Dank der unbegrenzten Transkription verlieren Sie nie wieder wichtige Gespräche.",
      heroCtaPrimary: "Jetzt mit der Aufnahme beginnen →",
      heroCtaSecondary: "So funktioniert es",
      recordingStatus: "Aufnahme...",
      statsMeetingMinutes: "Sitzungsprotokoll",
      statsLiveRecording: "Live-Aufnahme",
      statsSpeakerID: "Sprecher-ID",
      statsInstantUpload: "Sofortiges Hochladen und Verarbeiten",
      featuresTitle: "Alles, was Teams zum Erfassen von Wissen benötigen",
      featuresSubtitle: "Von der Live-Aufzeichnung bis zum sofortigen Hochladen haben wir jeden Reibungspunkt beseitigt",
      feature1Title: "Direkt in Ihrem Browser aufnehmen",
      feature1Desc: "Keine Downloads, keine Plugins. Starten Sie die Aufnahme sofort mit einem Klick. Perfekte Audioqualität, automatische Sprechererkennung und Echtzeit-Transkription während des Sprechens.",
      feature1Benefit1: "Aufnahmestart mit einem Klick",
      feature1Benefit2: "Keine Softwareinstallation",
      feature1Benefit3: "Funktioniert auf jedem Gerät",
      feature1Benefit4: "Echtzeit-Transkription",
      feature1Visual1: "Klicken und Aufzeichnen",
      feature1Visual2: "Keine Einrichtung erforderlich",
      feature2Title: "Laden Sie jede Audiodatei sofort hoch",
      feature2Desc: "Haben Sie Aufnahmen von Zoom, Teams oder Ihrem Telefon? Laden Sie sie sofort hoch. Unterstützung für alle gängigen Audio- und Videoformate. Verarbeiten Sie mehrere Dateien gleichzeitig ohne Wartezeit.",
      feature2Benefit1: "Unterstützt: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Batch-Upload-Funktion",
      feature2Benefit3: "10-Stunden-Dateien werden unterstützt",
      feature2Benefit4: "Prozess während der Arbeit",
      feature2Visual1: "Dateien per Drag & Drop verschieben",
      feature3Title: "Für die Zusammenarbeit im Team entwickelt",
      feature3Desc: "Teilen Sie Transkripte sofort mit Ihrem Team. Hören Sie sich Aufzeichnungen gemeinsam an, exportieren Sie Transkripte in verschiedenen Formaten und stellen Sie mit durchsuchbaren Besprechungsarchiven sicher, dass alle auf dem Laufenden bleiben.",
      feature3Benefit1: "Teilen Sie Transkripte mit jedem",
      feature3Benefit2: "Hören Sie Originalaufnahmen",
      feature3Benefit3: "Exportieren Sie Transkripte in mehreren Formaten",
      feature3Benefit4: "Teamweit durchsuchbare Archive",
      feature3Visual1: "Teammitglieder",
      feature3Visual2: "Grenzenlose Zusammenarbeit",
      feature4Title: "Finden Sie sofort jede Konversation",
      feature4Desc: "Durchsuchen Sie alle Ihre Meetings gleichzeitig. Finden Sie die wichtige Entscheidung des letzten Quartals oder die Kundenanforderung von vor Monaten. Die KI-gestützte Suche versteht den Kontext, nicht nur Schlüsselwörter.",
      feature4Benefit1: "Alle Meetings gleichzeitig durchsuchen",
      feature4Benefit2: "KI versteht Kontext",
      feature4Benefit3: "Filtern nach Sprecher oder Datum",
      feature4SearchPlaceholder: "🔍 Suche: „Umsatzziele Q4“",
      feature4SearchResults: "In 3 Meetings gefunden:",
      feature4Meeting1: "Verkaufsplanung – 15. Oktober",
      feature4Meeting1Text: "„…Ziele für Q4 auf 2 Mio. USD festgelegt…“",
      feature4Meeting2: "Vorstandssitzung – 20. Oktober",
      feature4Meeting2Text: "„…Umsatzprognosen für das vierte Quartal…“",
      workflowTitle: "Von der Aufzeichnung zu umsetzbaren Erkenntnissen",
      workflowSubtitle: "Ein nahtloser Workflow, der jeden wichtigen Moment festhält",
      workflowStep1Title: "Aufzeichnen oder Hochladen",
      workflowStep1Desc: "Starten Sie die Live-Aufnahme oder laden Sie vorhandene Audiodateien hoch",
      workflowStep2Title: "Automatische Transkription",
      workflowStep2Desc: "KI transkribiert mit 96 % Genauigkeit in Minuten",
      workflowStep3Title: "Zusammenarbeiten",
      workflowStep3Desc: "Aktionselemente teilen, kommentieren und extrahieren",
      workflowStep4Title: "Suchen und Analysieren",
      workflowStep4Desc: "Erhalten Sie Einblicke in alle Ihre Meetings",
      testimonialsTitle: "Teams lieben NeverCap",
      testimonialsSubtitle: "Erfahren Sie, wie Unternehmen ihre Meetingkultur verändern",
      testimonial1Text: "„Früher entgingen uns wichtige Details, heute verfügen wir über ein durchsuchbares Archiv aller Gespräche. Dank der Direktaufzeichnungsfunktion vergessen wir nie wieder, wichtige Gespräche aufzuzeichnen.“",
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktmanager, TechCorp",
      testimonial2Text: "„Otter hat uns auf 10 Datei-Uploads pro Monat beschränkt. Jetzt laden wir alle unsere Kundenanrufe sofort hoch. Das ist ein Wendepunkt für die Nachverfolgung unseres Vertriebsteams.“",
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Vertriebsleiter, ConsultPro",
      testimonial3Text: "„Die Möglichkeit, monatelange Meetings zu durchsuchen, hat uns bei unserem Audit geholfen. Wir haben jede Entscheidung und Genehmigung in Sekundenschnelle gefunden.“",
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Verpassen Sie keine wichtigen Gespräche mehr",
      ctaSubtitle: "Schließen Sie sich Tausenden von Teams an, die jedes Meeting mit unbegrenzter Transkription aufzeichnen",
      ctaButton: "Kostenlos mit der Aufnahme beginnen →"
    },
    Educators: {
      heroBadge: "Für Pädagogen und Lehrer",
      heroTitle1: "Verwandeln Sie jedes Lehrvideo in",
      heroTitle2: "Barrierefreie Inhalte",
      heroSubtitle: "Fügen Sie einfach YouTube-Links ein, um sofort Transkripte mit automatisch generierten Untertiteln zu erhalten. Verwandeln Sie Vorlesungen, Tutorials und Lehrvideos in durchsuchbare, zugängliche Inhalte, von denen jeder Student lernen kann.",
      heroCtaPrimary: "Kostenlos testen – Keine Kreditkarte erforderlich",
      heroCtaSecondary: "Demo ansehen",
      stats1Number: "1-Klick",
      stats1Label: "YouTube-Transkription",
      stats2Number: "100+",
      stats2Label: "Unterstützte Sprachen",
      stats3Number: "∞",
      stats3Label: "Unbegrenzte Videos",
      stats4Number: "96 %",
      stats4Label: "Genauigkeitsrate",
      featuresTitle: "Alles, was Pädagogen für die Videotranskription benötigen",
      featuresSubtitle: "Von YouTube-Vorlesungen bis hin zu aufgezeichneten Kursen: Machen Sie alle Ihre Inhalte zugänglich",
      feature1Title: "Sofortige YouTube- und Plattform-Links",
      feature1Desc: "Fügen Sie einfach einen beliebigen Videolink ein und erhalten Sie sofort Transkripte. Funktioniert mit YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive und mehr. Kein Download, kein Warten.",
      feature1Point1: "Direkte Linktranskription – keine Downloads erforderlich",
      feature1Point2: "Unterstützung für alle wichtigen Plattformen",
      feature1Point3: "Verarbeiten Sie ganze Wiedergabelisten auf einmal",
      feature1Point4: "Funktioniert mit privaten Videos (mit Genehmigung)",
      feature2Title: "Untertitel automatisch generieren",
      feature2Desc: "Erstellen Sie im Handumdrehen präzise Untertitel für alle Ihre Lehrvideos. Machen Sie Inhalte für Schüler mit Hörbehinderung, Nicht-Muttersprachler oder diejenigen zugänglich, die lieber mitlesen.",
      feature2Point1: "SRT-, VTT- und TXT-Exportformate",
      feature2Point2: "Zeitstempel auf Wortebene für perfekte Synchronisierung",
      feature2Point3: "Untertitel einfach bearbeiten und anpassen",
      feature2Point4: "Direkt wieder auf YouTube hochladen",
      feature2Visual1: "Sprachübersetzungen",
      feature2Visual2: "Machen Sie Ihre Inhalte weltweit zugänglich",
      feature3Title: "Nach Kursen und Kategorien organisieren",
      feature3Desc: "Erstellen Sie Ordner, um Ihre Zeugnisse nach Kurs, Fach oder Semester zu ordnen. Halten Sie alle Ihre Lerninhalte übersichtlich kategorisiert und leicht durchsuchbar. Bauen Sie eine umfassende Bibliothek mit zugänglichen Kursmaterialien auf.",
      feature3Point1: "Erstellen Sie unbegrenzt viele Ordner und Unterordner",
      feature3Point2: "Markieren Sie Videos nach Thema oder Schwierigkeitsgrad",
      feature3Point3: "Massenorganisieren mehrerer Transkripte",
      feature3Point4: "Durchsuchen Sie sofort alle Ihre Inhalte",
      feature3VisualTitle: "Ihre Kursbibliothek",
      feature3Folder1: "Mathematik 101",
      feature3Folder2: "Physikvorlesungen",
      feature3Folder3: "Videos zum Biologielabor",
      feature3Folder4: "Geschichtsdokumentationen",
      feature3Folder5: "Sprachen lernen",
      feature4Title: "Exportieren Sie in jedes gewünschte Format",
      feature4Desc: "Laden Sie Transkripte im TXT-, DOCX- oder PDF-Format herunter. Ideal für die Erstellung von Studienführern, Vorlesungsmitschriften oder barrierefreien Kursmaterialien. Teilen Sie sie mit Ihren Studierenden oder integrieren Sie sie in Ihr Lernmanagementsystem.",
      feature4Point1: "TXT für einfache Textbearbeitung",
      feature4Point2: "DOCX für formatierte Dokumente",
      feature4Point3: "PDF zum einfachen Teilen und Drucken",
      feature4Point4: "Massenexport mehrerer Dateien auf einmal",
      workflowTitle: "So funktioniert es",
      workflowSubtitle: "Vom Videolink zum barrierefreien Transkript in Minuten",
      workflowStep1Title: "Link einfügen",
      workflowStep1Desc: "Kopieren Sie die URL eines beliebigen Lehrvideos und fügen Sie sie ein",
      workflowStep2Title: "Automatische Transkription",
      workflowStep2Desc: "KI transkribiert mit 96 % Genauigkeit",
      workflowStep3Title: "Untertitel generieren",
      workflowStep3Desc: "Automatische Erstellung perfekt synchronisierter Untertitel",
      workflowStep4Title: "Teilen und exportieren",
      workflowStep4Desc: "Herunterladen oder mit Schülern teilen",
      useCasesTitle: "Perfekt für jeden Bildungsbedarf",
      useCasesSubtitle: "Sehen Sie, wie Pädagogen NeverCap verwenden, um das Lernen zu verbessern",
      useCase1Title: "Aufgezeichnete Vorlesungen",
      useCase1Text: "Transkribieren Sie ganze Semester aufgezeichneter Vorlesungen. Studierende können nach bestimmten Themen suchen, Schlüsselkonzepte wiederholen und verpassen nie wieder wichtige Informationen.",
      useCase2Title: "Online-Kurse",
      useCase2Text: "Machen Sie Ihre Online-Kurse mit Übersetzungen in über 100 Sprachen für internationale Studierende zugänglich. Steigern Sie die Einschreibungszahlen und die Zufriedenheit.",
      useCase3Title: "Studienmaterialien",
      useCase3Text: "Wandeln Sie Video-Tutorials in lesbare Studienführer um. Ideal für Studierende, die gerne lesen oder Inhalte schnell wiederholen müssen.",
      useCase4Title: "Einhaltung der Barrierefreiheit",
      useCase4Text: "Erfüllen Sie die Anforderungen an die Barrierefreiheit, indem Sie Untertitel und Transkripte für alle Videoinhalte bereitstellen. Sorgen Sie für gleichberechtigten Zugang für alle Studierenden.",
      useCase5Title: "Umgedrehtes Klassenzimmer",
      useCase5Text: "Teilen Sie Videovorlesungen mit Transkripten vor dem Unterricht. Die Studierenden können in ihrem eigenen Tempo lernen und sich auf Diskussionen vorbereiten.",
      useCase6Title: "Recherche & Zitate",
      useCase6Text: "Helfen Sie Studierenden, Videoquellen mit Zeitstempeln korrekt zu zitieren. Ideal für Forschungsprojekte und wissenschaftliche Arbeiten.",
      testimonialTitle: "Mehr als 50.000 Pädagogen vertrauen uns",
      testimonialSubtitle: "Erfahren Sie, warum sich Lehrer weltweit für NeverCap entscheiden",
      testimonialText: "„Ich verwende NeverCap, um meinen gesamten YouTube-Kanal mit Mathe-Tutorials zu transkribieren. Was bei anderen Diensten früher Wochen dauerte, dauert jetzt Stunden. Die Möglichkeit, Links direkt einzufügen und sofort Transkripte zu erhalten, hat die Art und Weise, wie ich barrierefreie Inhalte erstelle, verändert. Meine internationalen Studenten lieben besonders die mehrsprachigen Untertitel!“",
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Mathematikprofessor, Online-Lehrer",
      ctaTitle: "Machen Sie alle Ihre Bildungsinhalte zugänglich",
      ctaSubtitle: "Schließen Sie sich Tausenden von Pädagogen an, die wirklich unbegrenzte Transkription nutzen",
      ctaButton: "Testen Sie NeverCap kostenlos"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Laden Sie YouTube-Videos als MP4 herunter",
        "placeholder": "Suchen oder fügen Sie hier Ihren YouTube-Link ein",
        "clear_icon": "Eingabe löschen",
        "Download": "Herunterladen",
        "loading_text": "Der Link zum Download wird verarbeitet. Bleiben Sie auf der Seite.",
        "howToDownload": "Wie lade ich das herunter?",
        "tutorial": "Sehen Sie sich das Tutorial an"
      },
      part2: {
        "title": "So verwandeln Sie ein YouTube-Video in 3 einfachen Schritten in eine herunterladbare MP4-Datei",
        "steps": [
                {
                  title: "Kopieren Sie die URL",
                  content: "Öffnen Sie Ihr Ziel-YouTube-Video und kopieren Sie dann den Link aus der Adressleiste Ihres Browsers."
                },
                {
                  title: "Fügen Sie den Link ein",
                  content: "Gehen Sie zu Ihrem Video-Downloader-Tool und fügen Sie die URL in das Eingabefeld ein."
                },
                {
                  title: "Laden Sie die MP4-Datei herunter",
                  content: "Klicken Sie nach der Verarbeitung auf die Schaltfläche „Herunterladen“, um Ihre MP4-Datei zu speichern."
                }
              ]
      },
      part3: {
        content: [
                "Mussten Sie schon einmal YouTube-Videos offline ansehen?",
                "Ob Sie mit der U-Bahn zur Arbeit fahren, im Flugzeug fliegen, ein wichtiges Tutorial studieren, sich intensiv mit Inhalten zum Kompetenzaufbau befassen oder wichtiges Videomaterial archivieren – zuverlässiger Offline-Zugriff ist oft frustrierend. Hier kommt unser Downloader ins Spiel.",
                "Mit dem Downloader können Sie YouTube-Videos schnell und einfach in das MP4-Format konvertieren und herunterladen. Speichern Sie sie auf Ihrem Gerät und schauen Sie sie jederzeit an.",
                "Der Vorgang ist schnell, einfach und problemlos. Nach dem Download können Sie Ihre Lieblingsvideos jederzeit und überall genießen – kein Internet erforderlich."
              ]
      },
      part4: {
        content: ["Hier sind die 5 wichtigsten Vorteile des Herunterladens", "YouTube-Videos als MP4-Dateien"],
        list: [
                {
                  title: "Sparen Sie Datenkosten:",
                  content: "Normalerweise verbraucht das Ansehen von Videos auf YouTube erhebliche mobile Datenmengen. Durch das Herunterladen für die Offline-Wiedergabe können Sie diese unnötigen Kosten vermeiden."
                },
                {
                  title: "Überall und jederzeit ansehen:",
                  content: "Genießen Sie Ihre Videos nahtlos, selbst bei sporadischer Internetverbindung. Keine Pufferprobleme mehr."
                },
                {
                  title: "Einfache Archivierung und Aufbewahrung:",
                  content: "Durch das Speichern von Videos im MP4-Format können Sie ganz einfach Ihre persönliche Sammlung aufbauen, insbesondere für Inhalte, die Sie für wirklich wertvoll oder wichtig halten."
                },
                {
                  title: "Einfacheres Teilen:",
                  content: "Das Teilen einer MP4-Datei ist viel bequemer als das Senden eines Links. Sie können die Videodatei direkt über Apps wie WhatsApp oder Instagram senden, ohne dass Sie YouTube öffnen müssen."
                },
                {
                  title: "Sofortiges Ansehen, gemeinsame Momente:",
                  content: "Sie möchten Freunden oder der Familie in der Nähe aufgeregt Ihr Lieblingsvideo zeigen? Mit der heruntergeladenen MP4-Datei können Sie es sofort alle gemeinsam ansehen, ohne dass Sie auf das Laden warten müssen."
                }
              ]
      },
      part5: {
        title: "Warum unser Downloader heraussticht",
        cards: [
                {
                  title: "Einfachheit mit nur einem Klick",
                  content: "Mühelose Einrichtung und intuitive Bedienung."
                },
                {
                  title: "Blitzschnell, unbegrenzt",
                  content: "Konvertieren und herunterladen Sie mit Höchstgeschwindigkeit – keine Obergrenzen, keine Beschränkungen."
                },
                {
                  title: "Konvertieren im laufenden Betrieb",
                  content: "Verarbeiten Sie Ihre Dateien sofort, ohne dass Sie warten müssen."
                },
                {
                  title: "Keine Werbung, keine Ablenkungen",
                  content: "Genießen Sie eine übersichtliche Benutzeroberfläche ohne Popups, Banner oder Unterbrechungen – einfach nahtlose Videokonvertierung."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Originalqualität garantiert",
                  content: "Ihre Downloads behalten die volle Auflösung des Quellvideos bei, sodass jedes Mal eine pixelgenaue Wiedergabe möglich ist."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Funktioniert überall",
                  content: "Vollständig kompatibel mit jedem Browser und jedem Gerät."
                }
              ]
      },
      part6: {
        title: ["Maximieren Sie Ihre YouTube-Video-Downloads", "Mit dem Downloader"],
        content: [
                "Mühelose Konvertierung von YouTube in MP4: schnell, einfach und kostenlos.",
                "Genau darin liegen unsere Stärken. Unsere benutzerfreundliche Oberfläche ist für jeden geeignet – ganz ohne technische Vorkenntnisse. Unabhängig von Ihrer Erfahrung können Sie Videos sofort konvertieren. Keine Anmeldung erforderlich: Holen Sie sich sofort genau das, was Sie brauchen.",
                "Seien Sie versichert – Ihre heruntergeladenen MP4s behalten die ursprüngliche Videoqualität und -schärfe bei, genau so, wie Sie sie auf YouTube angesehen haben.",
                "Funktioniert überall. Vollständig kompatibel mit allen wichtigen Plattformen und Geräten. Egal, ob Sie Windows, macOS, Linux, Android oder iOS verwenden – ob Smartphone, Tablet oder Desktop – Sie können Videos nahtlos herunterladen."
              ]
      },
      part7: {
        title: "Wichtige Fragen zum Herunterladen von YouTube-Videos",
        list: [
                {
                  question: "Kann ich ein YouTube-Video herunterladen, wenn es urheberrechtlich geschützt ist?",
                  answer: "Das Herunterladen urheberrechtlich geschützter YouTube-Videos ohne die Erlaubnis des Urheberrechtsinhabers ist illegal."
                },
                {
                  question: "Ist dieses Download-Tool sicher?",
                  answer: "Ja, es ist sicher und vertrauenswürdig. Wir benötigen keine persönlichen Daten von Nutzern und ergreifen strenge Maßnahmen gegen Viren. Seien Sie beim Herunterladen von Dateien aus dem Internet stets vorsichtig: Klicken Sie nicht auf verdächtige Links und laden Sie keine fragwürdigen Dateien herunter."
                },
                {
                  question: "Welche Sprachen werden beim Herunterladen von YouTube auf MP4 unterstützt?",
                  answer: "Unser Dienst unterstützt das Herunterladen von YouTube-Videos in allen gängigen Sprachen."
                },
                {
                  question: "Welche Faktoren beeinflussen die Zeit, die zum Herunterladen eines YouTube-Videos benötigt wird?",
                  answer: "Obwohl wir für ein möglichst schnelles Download-Erlebnis sorgen, wird die Downloadzeit auch von Faktoren wie der Länge des Videos und der Geschwindigkeit Ihrer Internetverbindung beeinflusst."
                },
                {
                  question: "Wenn ich ein MP4-Video mit meinem Smartphone herunterlade, wo wird es gespeichert?"
                },
                {
                  question: "Verringert das Herunterladen eines YouTube-Videos als MP4 die Videoqualität?",
                  answer: "Nein. Beim Herunterladen von YouTube-Videos als MP4 mit unserem Tool bleibt die ursprüngliche Videoqualität erhalten. Der Konvertierungsprozess bewahrt die Quellqualität und sorgt so für das gleiche Seherlebnis wie auf YouTube."
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Branchenführende KI-Technologie",
      "title": "Um",
      "highlighted_text": "NeverCap",
      "description": "Unsere Mission ist es, die präzisesten Audio- und Videotranskriptionsdienste anzubieten. Dank branchenführender KI-Technologie erreichen wir Transkriptionsgenauigkeiten von über 96 %. Für einige wichtige Sprachen erreichen wir durch technische Optimierung sogar eine Genauigkeit von 99 %."
    },
    Stats: {
      "title": "Unser",
      "highlighted_text": "Auswirkungen",
      "subtitle": "Stärkung der globalen Kommunikation mit modernster KI-Technologie",
      "metrics": [
            {
              "value": "96 %+",
              "label": "Genauigkeitsrate",
              "description": "Branchenführende Transkriptionsgenauigkeit mit fortschrittlicher KI"
            },
            {
              "value": "100+",
              "label": "Unterstützte Sprachen",
              "description": "Spracherkennung für globale Inhalte"
            },
            {
              "value": "249+",
              "label": "Übersetzungssprachen",
              "description": "Übersetzen Sie transkribierten Text in praktisch jede Sprache"
            }
          ]
    },
    Mission: {
      "title": "Warum wählen",
      "highlighted_text": "NeverCap",
      "subtitle": "Wir glauben daran, Sprachbarrieren abzubauen und Inhalte für alle zugänglich zu machen",
      "features": [
            {
              "icon": "🎯",
              "title": "Unübertroffene Genauigkeit",
              "description": "Unsere KI-Modelle werden kontinuierlich verfeinert, um Transkriptionsgenauigkeitsraten von über 96 % zu erzielen. In einigen wichtigen Sprachen wird durch erweiterte Optimierung eine Genauigkeit von bis zu 99 % erreicht."
            },
            {
              "icon": "🌍",
              "title": "Globale Sprachunterstützung",
              "description": "Unterstützung für über 100 Sprachen bei der Erkennung gesprochener Wörter und Übersetzungsfunktionen für mehr als 249 Sprachen, wodurch Ihre Inhalte wirklich global werden."
            },
            {
              "icon": "⚡",
              "title": "Blitzschnelle Verarbeitung",
              "description": "Verarbeiten Sie stundenlange Audio- und Videoinhalte in Minuten, nicht Stunden. Unsere optimierte KI-Pipeline sorgt dafür, dass Sie Ihre Transkriptionen schnell und ohne Qualitätseinbußen erhalten."
            },
            {
              "icon": "🔒",
              "title": "Sicherheit auf Unternehmensniveau",
              "description": "Ihre Datensicherheit hat für uns oberste Priorität. Wir verwenden branchenübliche Verschlüsselung und halten uns an globale Datenschutzbestimmungen, um Ihre Inhalte sicher und vertraulich zu halten."
            }
          ]
    },
    Company: {
      "title": "Unternehmen",
      "highlighted_text": "Information",
      "subtitle": "Kontaktieren Sie uns bei Fragen oder Unterstützung",
      "details": [
            {
              "label": "Name der Firma",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Hauptsitz",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Vereinigte Staaten"]
            },
            {
              "label": "Kontaktieren Sie uns",
              "value": ["E-Mail", "Support rund um die Uhr verfügbar"]
            }
          ]
    },
    CTA: {
      "title": "Bereit, den Unterschied zu erleben?",
      "subtitle": "Schließen Sie sich Tausenden von Fachleuten an, die NeverCap für ihre Transkriptionsanforderungen vertrauen",
      "button": "Testen Sie NeverCap kostenlos →",
      "disclaimer": "Keine Kreditkarte erforderlich • Beginnen Sie in Sekundenschnelle mit der Transkription"
    }
  },
  Privacy: {
    title: "Datenschutz",
    titleGradient: "Politik",
    subtitle: "Erfahren Sie, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen",
    "lastUpdated": "Zuletzt aktualisiert: {date}",
    "lastUpdatedDate": "21. Juli 2025",
    "privacyPolicyTitle": "Datenschutzrichtlinie",
    "policyDescription": "Diese Richtlinie beschreibt, wie NeverCap (nachfolgend als „NeverCap“, „unser“, „wir“, „uns“ bezeichnet) Ihre personenbezogenen Daten sammelt, verwendet und weitergibt, wenn Sie unsere Dienste, Websites (https://www.nevercap.ai/) und Software (zusammen die „Dienste“) nutzen.",
    "policyAgreement": "Bitte lesen Sie diese Datenschutzrichtlinie sorgfältig durch und stellen Sie sicher, dass Sie sie verstehen. Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Datenschutzrichtlinie einverstanden. Wenn Sie mit der Verwendung Ihrer personenbezogenen Daten gemäß dieser Richtlinie nicht einverstanden sind, müssen Sie die Nutzung unserer Dienste unverzüglich einstellen.",
    "policyOverview": "In dieser Richtlinie legen wir dar, welche Daten wir erheben und warum, wie wir mit Ihren Daten umgehen und welche Rechte Sie in Bezug auf Ihre Daten haben. Wir verkaufen Ihre Daten nicht.",
    "scopeTitle": "1. Geltungsbereich dieser Datenschutzrichtlinie",
    "scopeDescription": "Diese Datenschutzrichtlinie gilt ausschließlich für die Erhebung und Verarbeitung von Informationen über Nutzer unserer Dienste. Diese Datenschutzrichtlinie gilt nicht für Dienste, Websites oder Software von Drittanbietern, die mit uns verlinkt sind (unabhängig davon, ob wir diese Links bereitstellen oder andere Nutzer sie teilen), und auch nicht für Inhalte, Daten, Anwendungen oder Materialien von Drittanbietern. Wir empfehlen Ihnen, die Datenschutzrichtlinien von Websites oder Software von Drittanbietern zu prüfen, bevor Sie ihnen Informationen zur Verfügung stellen.",
    "collectionTitle": "2. Was wir sammeln und warum",
    "collectionPrinciple": "Unser Leitprinzip ist es, nur das zu sammeln, was wir brauchen. In der Praxis bedeutet das Folgendes:",
    "identityTitle": "2.1 Identität und Zugriff",
    "identityDescription": "Wenn Sie sich für eines unserer Produkte anmelden, fragen wir nach identifizierenden Informationen wie Ihrem Namen und Ihrer E-Mail-Adresse. Dies dient dazu, wesentliche Produktfunktionen bereitzustellen und Ihnen Produktaktualisierungen und andere wichtige Informationen zukommen zu lassen.",
    "billingTitle": "2.2 Rechnungsinformationen",
    "billingDescription": "Wenn Sie sich für ein kostenpflichtiges Produkt anmelden, werden Sie aufgefordert, Ihre Zahlungsinformationen und Ihre Rechnungsadresse anzugeben. Die Zahlungsinformationen werden direkt an unseren Zahlungsabwickler übermittelt und gelangen nicht auf unsere Server.",
    "productInteractionsTitle": "2.3 Produktinteraktionen",
    "productInteractionsDescription": "Wir speichern die Inhalte, die Sie hochladen, empfangen oder in Ihren Produktkonten verwalten, auf unseren Servern. Sofern Sie diese Inhalte nicht löschen, behalten wir sie möglicherweise, solange Ihr Konto aktiv ist.",
    "websiteInteractionsTitle": "2.4 Website-Interaktionen",
    "websiteInteractionsDescription": "Wir erfassen Informationen über Ihr Surfverhalten für Analyse- und Statistikzwecke, beispielsweise zur Conversion-Rate-Prüfung und zum Experimentieren mit neuen Produktdesigns. Dazu gehören beispielsweise Ihre Browser- und Betriebssystemversion, Ihre IP-Adresse, die von Ihnen besuchten Webseiten und deren Ladezeit sowie die Website, von der Sie zu uns gelangt sind. Wenn Sie ein Konto besitzen und angemeldet sind, werden diese Webanalysedaten an Ihre IP-Adresse und Ihr Benutzerkonto gebunden, bis Ihr Konto nicht mehr aktiv ist.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Wir verwenden auch dauerhafte Erstanbieter-Cookies und einige Drittanbieter-Cookies, um bestimmte Einstellungen zu speichern, Ihnen die Nutzung unserer Anwendungen zu erleichtern, A/B-Tests durchzuführen und einige Analysen zu unterstützen.",
    "cookiesDescription2": "Ein Cookie ist ein Text, der von Ihrem Browser gespeichert wird. Er kann dabei helfen, Anmeldeinformationen und Website-Einstellungen zu speichern. Außerdem können Informationen wie Browsertyp, Betriebssystem, besuchte Webseiten, Besuchsdauer, angezeigte Inhalte und andere Clickstream-Daten erfasst werden. Sie können die Cookie-Speicherungseinstellungen anpassen und einzelne Cookies in Ihren Browsereinstellungen akzeptieren oder blockieren. Allerdings funktionieren unsere Apps und andere Aspekte unseres Dienstes möglicherweise nicht richtig, wenn Sie Cookies deaktivieren.",
    "correspondenceTitle": "2.6 Freiwillige Korrespondenz",
    "correspondenceDescription": "Wenn Sie uns eine E-Mail mit einer Frage oder einer Bitte um Hilfe senden, speichern wir diese Korrespondenz, einschließlich Ihrer E-Mail-Adresse, sodass wir auf einen Verlauf der vergangenen Korrespondenz zurückgreifen können, wenn Sie sich in Zukunft an uns wenden.",
    "accessTitle": "3. Wann wir auf Ihre Informationen zugreifen oder sie weitergeben",
    "accessDescription1": "Um die von Ihnen angeforderten Produkte oder Dienstleistungen bereitzustellen. Wir nutzen einige Subprozessoren von Drittanbietern, um unsere Anwendungen auszuführen und Ihnen die Dienste bereitzustellen. Dazu gehören Cloud- und Analyseanbieter.",
    "accessDescription2": "Um Missbrauch zu untersuchen, zu verhindern oder entsprechende Maßnahmen zu ergreifen. Der Zugriff auf das Konto eines Kunden bei der Untersuchung eines potenziellen Missbrauchs ist das letzte Mittel. Wir möchten die Privatsphäre und Sicherheit sowohl unserer Kunden als auch der Personen schützen, die uns Probleme melden, und wir tun unser Bestes, um diese Verantwortlichkeiten während des gesamten Prozesses auszugleichen. Sollten wir feststellen, dass Sie unsere Produkte für einen verbotenen Zweck nutzen, werden wir die erforderlichen Maßnahmen ergreifen und gegebenenfalls auch die zuständigen Behörden benachrichtigen.",
    "accessDescription3": "Wenn dies nach geltendem Recht erforderlich ist.",
    "dataRequests": "Anfragen nach Nutzerdaten. Wir reagieren grundsätzlich nicht auf behördliche Anfragen nach Nutzerdaten, es sei denn, wir sind dazu durch ein Gerichtsverfahren oder in bestimmten Fällen im Falle einer dringenden Anfrage gezwungen. Sollten US-amerikanische Strafverfolgungsbehörden jedoch über einen Haftbefehl, eine strafrechtliche Vorladung oder einen Gerichtsbeschluss verfügen, der uns zur Weitergabe von Daten verpflichtet, sind wir verpflichtet, diesem nachzukommen. Ebenso reagieren wir nur auf Anfragen von Behörden außerhalb der USA, wenn uns die US-Regierung im Rahmen eines Rechtshilfeabkommens oder -vertrags dazu zwingt. Wir benachrichtigen betroffene Nutzer grundsätzlich vor der Datenweitergabe, sofern uns dies nicht gesetzlich untersagt ist und nur in Notfällen.",
    "preservationRequests": "Anfragen zur Datenaufbewahrung. Wir kommen Anfragen zur Datenaufbewahrung grundsätzlich nur nach, wenn wir dazu durch den US Federal Stored Communications Act, 18 USC Section 2703(f), oder eine ordnungsgemäß zugestellte US-amerikanische Vorladung in Zivilsachen verpflichtet sind. Wir geben gespeicherte Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind oder durch einen Gerichtsbeschluss dazu gezwungen werden, gegen den wir keinen Einspruch einlegen. Darüber hinaus vernichten wir alle gespeicherten Kopien von Kundendaten nach Ablauf der Aufbewahrungsfrist, sofern wir nicht vor Ablauf der erforderlichen Aufbewahrungsfrist einen ordnungsgemäßen Haftbefehl, Gerichtsbeschluss oder eine Vorladung erhalten.",
    "taxAudits": "Im Falle einer Steuerprüfung sind wir möglicherweise verpflichtet, rechnungsbezogene Informationen weiterzugeben. In diesem Fall geben wir nur die erforderlichen Mindestdaten weiter, wie z. B. Rechnungsadressen und Informationen zur Steuerbefreiung.",
    "securityTitle": "4. So sichern wir Ihre Daten",
    "securityDescription": "Alle Daten werden bei der Übertragung von unseren Servern an Ihren Browser per SSL/TLS verschlüsselt.",
    "deletionTitle": "5. Was passiert, wenn Sie Ihre Inhalte löschen",
    "deletionDescription": "Wenn Sie Inhalte löschen, sind diese sofort nicht mehr zugänglich.",
    "locationTitle": "6. Standort und Daten",
    "locationDescription": "Unsere Produkte und andere Webpräsenzen werden in den USA betrieben. Wenn Sie sich in der Europäischen Union, Großbritannien oder anderswo außerhalb der USA befinden, beachten Sie bitte, dass alle von Ihnen bereitgestellten Informationen in die USA übertragen und dort gespeichert werden. Indem Sie unsere Websites oder Dienste nutzen und/oder uns Ihre personenbezogenen Daten zur Verfügung stellen, stimmen Sie dieser Übertragung zu.",
    "childrenTitle": "7. Datenschutz für Kinder",
    "childrenDescription": "Die Dienste richten sich nicht an Kinder, und wir erfassen wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie unter 13 Jahre alt sind, übermitteln Sie bitte keine personenbezogenen Daten über die Dienste. Wenn Sie der Meinung sind, dass ein Kind uns personenbezogene Daten unter Verstoß gegen diese Richtlinie bereitgestellt hat, kontaktieren Sie uns bitte wie unten angegeben.",
    "updatesTitle": "8. Aktualisierungen dieser Datenschutzrichtlinie",
    "updatesDescription": "Wir behalten uns das Recht vor, diese Richtlinie bei Bedarf zu aktualisieren, um den geltenden Vorschriften zu entsprechen und neue Praktiken zu berücksichtigen. Bei wesentlichen Änderungen unserer Richtlinien aktualisieren wir das Datum oben auf dieser Seite.",
    "contactTitle": "9. Kontakt",
    "contactDescription": "Wenn Sie Fragen, Kommentare oder Beschwerden zu unserer Datenschutzrichtlinie haben, kontaktieren Sie uns bitte und wir werden uns bemühen, Ihre Beschwerde so schnell wie möglich zu bearbeiten.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Bedingungen von",
    titleGradient: "Service",
    subtitle: "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienste nutzen",
    "lastUpdated": "Zuletzt aktualisiert: {date}",
    "lastUpdatedDate": "21. Juli 2025",
    "termsOfServiceTitle": "Servicebedingungen",
    "thankYou": "Vielen Dank, dass Sie unsere Produkte verwenden!",
    "companyDefinition": "Wenn wir in diesem Dokument „Unternehmen“, „wir“, „unser“ oder „uns“ sagen, beziehen wir uns auf NeverCap.",
    "servicesDefinition": "Wenn wir „Dienste“ sagen, meinen wir jedes von NeverCap erstellte und gepflegte Produkt, unabhängig davon, ob es in einem Webbrowser, einer Desktop-Anwendung, einer mobilen Anwendung oder einem anderen Format bereitgestellt wird.",
    "termsUpdate": "Wir behalten uns das Recht vor, diese Nutzungsbedingungen in Zukunft zu aktualisieren. In der Regel dienen diese Änderungen dazu, einige dieser Bedingungen durch Verlinkung auf eine erweiterte zugehörige Richtlinie klarzustellen. Bei wesentlichen Änderungen unserer Richtlinien aktualisieren wir das Datum oben auf dieser Seite und informieren die Kontoinhaber entsprechend.",
    "acceptanceTitle": "1. Annahme der Vereinbarung",
    "acceptanceDescription1": "Durch die Nutzung unserer Dienste erklären Sie sich mit dieser Vereinbarung einverstanden. Diese Vereinbarung stellt einen verbindlichen Vertrag zwischen Ihnen und NeverCap dar. Sie erklären, dass Sie rechtlich in der Lage sind, diese Bedingungen zu akzeptieren, und bestätigen, dass Sie volljährig sind, um einen verbindlichen Vertrag abzuschließen. Die Annahme durch NeverCap setzt ausdrücklich voraus, dass Sie allen Bedingungen dieser Vereinbarung zustimmen.",
    "eligibilityRequirement": "Die Dienste sind nicht für Personen unter 18 Jahren bestimmt und sollten von diesen nicht genutzt werden. Durch die Nutzung der Dienste erklären und gewährleisten Sie, dass Sie die oben genannten Teilnahmevoraussetzungen erfüllen.",
    "userResponsibility": "Die Begriffe „Sie“, „Ihr“, „Sie selbst“ umfassen auch Ihre Mitarbeiter, Agenten, Geschäftsvertreter und alle anderen Personen, denen Sie über Ihr Konto (wie unten definiert) Zugriff auf die Dienste gewähren. Sie sind dafür verantwortlich, dass alle Personen, die über Ihr Konto auf die Dienste zugreifen, diese Bedingungen kennen und einhalten.",
    "termsRevision": "NeverCap behält sich das Recht vor, diese Bedingungen von Zeit zu Zeit nach eigenem Ermessen zu überarbeiten und zu aktualisieren. Alle Änderungen treten mit ihrer Veröffentlichung sofort in Kraft. Ihre fortgesetzte Nutzung der Dienste nach der Veröffentlichung der überarbeiteten Bedingungen bedeutet, dass Sie die Änderungen akzeptieren und ihnen zustimmen. Wir bitten Sie, diese Seite regelmäßig zu überprüfen, um über alle Änderungen informiert zu sein, da diese für Sie bindend sind.",
    "servicesTitle": "2. NeverCaps Dienste",
    "servicesDescription1": "Unsere Dienste ermöglichen es Benutzern, Sprachgespräche in transkribierten Text umzuwandeln, der durchsucht, übersetzt und mit anderen geteilt werden kann.",
    "servicesOptions": "Sie können wählen, ob Sie die kostenlose Version der Dienste („Kostenlose Dienste“) oder die kostenpflichtige Version der Dienste auf Abonnementbasis nutzen möchten, für die möglicherweise Gebühren anfallen (die „Kostenpflichtigen Dienste“).",
    "servicesAccess": "Wir stellen Ihnen die Dienste zur Verfügung. Sie sind dafür verantwortlich, alle notwendigen Vorkehrungen für den Zugriff auf die Dienste zu treffen.",
    "accountTermsTitle": "3. Kontobedingungen",
    "accountSecurity": "Sie sind für die Sicherheit Ihres Kontos verantwortlich. Das Unternehmen haftet nicht für Verluste oder Schäden, die aus der Nichteinhaltung dieser Sicherheitsverpflichtung resultieren.",
    "lawfulUse": "Sie dürfen die Dienste nicht für rechtswidrige, unethische oder unmoralische Zwecke nutzen.",
    "contentResponsibility": "Sie sind für sämtliche Inhalte und Aktivitäten verantwortlich, die über Ihr Konto veröffentlicht werden. Dies gilt auch für Inhalte, die von anderen Personen veröffentlicht werden, die entweder (a) Zugriff auf Ihre Anmeldedaten haben oder (b) über eigene Anmeldedaten für Ihr Konto verfügen.",
    "humanRequirement": "Sie müssen ein Mensch sein. Konten, die durch „Bots“ oder andere automatisierte Methoden registriert wurden, sind nicht zulässig.",
    "paymentTitle": "4. Zahlung, Rückerstattungen und Planänderungen",
    "freeTrial": "Bei kostenpflichtigen Diensten mit kostenloser Testversion informieren wir Sie bei der Anmeldung über die Dauer der Testphase. Nach Ablauf der Testphase ist eine Vorauszahlung erforderlich, um den Dienst weiterhin nutzen zu können. Andernfalls endet der Dienst.",
    "upgradePolicy": "Wenn Sie von einem kostenlosen Plan auf einen kostenpflichtigen Plan upgraden, belasten wir Ihre Karte sofort und Ihr Abrechnungszeitraum beginnt am Tag des Upgrades.",
    "taxes": "Alle Gebühren verstehen sich exklusive aller Steuern, Abgaben oder Zölle der Steuerbehörden. Bei Bedarf erheben wir diese Steuern im Auftrag der Steuerbehörde und führen sie an die Steuerbehörden ab. Andernfalls sind Sie für die Zahlung aller Steuern, Abgaben oder Zölle verantwortlich.",
    "refunds": "Alle Käufe sind nicht erstattungsfähig. Sie können alle kostenpflichtigen Dienste jederzeit kündigen, indem Sie sich in Ihr Konto einloggen. Bei kostenpflichtigen Abonnements wird Ihre Kündigung zum Ende der aktuellen Laufzeit wirksam, sofern nicht anders angegeben.",
    "cancellationTitle": "5. Stornierung und Kündigung",
    "cancellationPolicy": "Wenn Sie den Dienst vor Ablauf der bezahlten Zeit kündigen, wird Ihre Kündigung sofort wirksam und es entstehen Ihnen keine weiteren Kosten. Wir berechnen nicht genutzte Zeit nicht automatisch anteilig im letzten Abrechnungszeitraum.",
    "terminationRights": "Wir sind berechtigt, Ihr Konto jederzeit und aus beliebigem Grund zu sperren oder zu kündigen und Ihnen die aktuelle oder zukünftige Nutzung unserer Dienste zu verweigern. Eine Sperrung bedeutet, dass Sie nicht mehr auf Ihr Konto und dessen Inhalte zugreifen können. Die Kündigung führt außerdem zur Löschung Ihres Kontos bzw. Ihres Zugriffs darauf sowie zum Verlust und zur Herausgabe aller Inhalte Ihres Kontos. Wir behalten uns außerdem das Recht vor, die Nutzung unserer Dienste jederzeit und aus beliebigem Grund zu verweigern. Diese Klausel ist notwendig, da statistisch gesehen mindestens eines der Hunderttausenden von Konten unserer Dienste kriminelle Machenschaften begeht.",
    "abusePolicy": "Verbale, körperliche, schriftliche oder sonstige Beleidigungen (einschließlich Drohungen mit Beleidigungen oder Vergeltung) gegenüber Mitarbeitern oder leitenden Angestellten des Unternehmens können zur sofortigen Kündigung des Kontos führen.",
    "submissionsTitle": "6. Einreichungen",
    "submissionsDescription": "Sie erkennen an und stimmen zu, dass alle Fragen, Kommentare, Vorschläge, Ideen, Rückmeldungen oder sonstigen Informationen bezüglich der Site („Einreichungen“), die Sie uns übermitteln, nicht vertraulich sind und in unser alleiniges Eigentum übergehen. Wir besitzen die ausschließlichen Rechte, einschließlich aller Rechte am geistigen Eigentum, und sind berechtigt, diese Einreichungen für jeden rechtmäßigen Zweck, ob kommerziell oder anderweitig, uneingeschränkt zu verwenden und zu verbreiten, ohne dass wir hierfür eine Anerkennung oder Entschädigung an Sie erhalten. Sie verzichten hiermit auf alle Urheberpersönlichkeitsrechte an solchen Einreichungen und garantieren hiermit, dass solche Einreichungen von Ihnen stammen oder dass Sie das Recht haben, solche Einreichungen einzureichen. Sie erklären sich damit einverstanden, dass wir wegen einer angeblichen oder tatsächlichen Verletzung oder widerrechtlichen Aneignung von Eigentumsrechten an Ihren Einreichungen nicht in Anspruch genommen werden können.",
    "uptimeTitle": "7. Verfügbarkeit und Sicherheit",
    "serviceAvailability": "Die Nutzung der Dienste erfolgt ausschließlich auf Ihr Risiko. Wir stellen diese Dienste „so wie sie sind“ und „so wie sie verfügbar sind“ zur Verfügung. Für die meisten unserer Dienste bieten wir keine Service-Level-Agreements an, legen aber großen Wert auf die Verfügbarkeit unserer Anwendungen.",
    "throttlingPolicy": "Wir behalten uns das Recht vor, den Kontozugriff in seltenen Fällen vorübergehend zu drosseln oder einzuschränken, wenn die Aktivität eines Nutzers nachweislich die Stabilität und Leistung des Dienstes für andere Nutzer beeinträchtigt. In allen Fällen, außer in den kritischsten, werden wir Sie kontaktieren, um eine Lösung zu finden, bevor wir Maßnahmen ergreifen.",
    "dataSecurity": "Wir ergreifen zahlreiche Maßnahmen zum Schutz und zur Sicherung Ihrer Daten durch Backups, Redundanzen und Verschlüsselung. Wir setzen die Verschlüsselung für die Datenübertragung über das öffentliche Internet durch.",
    "thirdPartyVendors": "Wir nutzen Drittanbieter und Hosting-Partner, um die notwendige Hardware, Software, Vernetzung, Speicherung und zugehörige Technologie bereitzustellen, die zum Ausführen der Dienste erforderlich ist.",
    "siteManagementTitle": "8. Site-Management",
    "siteManagementDescription": "Wir behalten uns das Recht vor, sind jedoch nicht dazu verpflichtet: (1) die Site auf Verstöße gegen diese Servicebedingungen zu überwachen; (2) geeignete rechtliche Schritte gegen jeden einzuleiten, der nach unserem alleinigen Ermessen gegen das Gesetz oder diese Servicebedingungen verstößt, einschließlich, aber nicht beschränkt auf die Meldung des entsprechenden Benutzers an die Strafverfolgungsbehörden; (3) nach unserem alleinigen Ermessen und ohne Einschränkung Ihre Beiträge oder Teile davon abzulehnen, den Zugriff darauf einzuschränken, die Verfügbarkeit einzuschränken oder sie (soweit technisch machbar) zu deaktivieren; (4) nach unserem alleinigen Ermessen und ohne Einschränkung, Benachrichtigung oder Haftung alle Dateien und Inhalte von der Site zu entfernen oder anderweitig zu deaktivieren, die übermäßig groß sind oder unsere Systeme in irgendeiner Weise belasten; und (5) die Site anderweitig in einer Weise zu verwalten, die unsere Rechte und unser Eigentum schützt und das ordnungsgemäße Funktionieren der Site ermöglicht.",
    "copyrightTitle": "9. Urheberrecht und Eigentumsrechte an Inhalten",
    "copyrightCompliance": "Alle auf den Diensten veröffentlichten Inhalte müssen dem US-amerikanischen Urheberrecht entsprechen.",
    "ipRights": "Wir erheben keinen Anspruch auf geistiges Eigentum an den Materialien, die Sie den Diensten zur Verfügung stellen. Alle hochgeladenen Materialien verbleiben in Ihrem Eigentum.",
    "contentModeration": "Wir prüfen Inhalte nicht vorab, behalten uns jedoch das Recht (aber nicht die Pflicht) vor, nach eigenem Ermessen über den Dienst verfügbare Inhalte abzulehnen oder zu entfernen.",
    "trademarkProtection": "Die Namen, das Erscheinungsbild und die Gestaltung der Dienste unterliegen dem Copyright© des Unternehmens. Alle Rechte vorbehalten. Sie dürfen weder HTML-, CSS-, JavaScript- noch visuelle Designelemente ohne ausdrückliche schriftliche Genehmigung des Unternehmens duplizieren, kopieren oder wiederverwenden. Die Verwendung des Firmenlogos oder der Service-Logos zu Werbezwecken muss von Ihnen beantragt werden. Anfragen zur Verwendung von Logos senden Sie uns bitte per E-Mail. Wir behalten uns das Recht vor, diese Genehmigung zu widerrufen, wenn Sie gegen diese Servicebedingungen verstoßen.",
    "prohibitedExploitation": "Sie erklären sich damit einverstanden, ohne die ausdrückliche schriftliche Genehmigung des Unternehmens keinen Teil der Dienste, die Nutzung der Dienste oder den Zugriff auf die Dienste zu reproduzieren, zu vervielfältigen, zu kopieren, zu verkaufen, weiterzuverkaufen oder zu verwerten.",
    "impersonationProhibition": "Sie dürfen keine andere Website so ändern, dass fälschlicherweise der Eindruck entsteht, sie sei mit den Diensten oder dem Unternehmen verbunden.",
    "dmcaPolicy": "Wir respektieren die geistigen Eigentumsrechte anderer. Sollten Sie der Meinung sein, dass auf oder über die Website verfügbares Material gegen Ihr Urheberrecht verstößt, kontaktieren Sie uns bitte umgehend. Eine Kopie Ihrer Meldung wird an die Person gesendet, die das in der Meldung angesprochene Material veröffentlicht oder gespeichert hat. Bitte beachten Sie, dass Sie gemäß geltendem Recht schadenersatzpflichtig sind, wenn Sie in einer Meldung wesentliche Falschangaben machen. Wenn Sie sich nicht sicher sind, ob Material auf der Website oder verlinktes Material Ihre Urheberrechte verletzt, sollten Sie zunächst einen Anwalt kontaktieren.",
    "prohibitedActivitiesTitle": "10. Verbotene Aktivitäten",
    "generalProhibition": "Sie dürfen auf die Website nur für den von uns bereitgestellten Zweck zugreifen oder sie nutzen. Die Website darf nicht für kommerzielle Zwecke genutzt werden, es sei denn, wir unterstützen oder genehmigen diese ausdrücklich.",
    "userObligations": "Als Benutzer der Site erklären Sie sich damit einverstanden, Folgendes nicht zu tun:",
    "dataScraping": "Systematisches Abrufen von Daten oder anderen Inhalten von der Site, um ohne unsere schriftliche Genehmigung direkt oder indirekt eine Sammlung, Zusammenstellung, Datenbank oder ein Verzeichnis zu erstellen oder zusammenzustellen.",
    "fraud": "Uns und andere Benutzer auszutricksen, zu betrügen oder in die Irre zu führen, insbesondere bei dem Versuch, an vertrauliche Kontoinformationen wie Benutzerkennwörter zu gelangen.",
    "securityInterference": "Sicherheitsrelevante Funktionen der Site zu umgehen, zu deaktivieren oder anderweitig zu beeinträchtigen, einschließlich Funktionen, die die Verwendung oder das Kopieren von Inhalten verhindern oder einschränken oder Beschränkungen bei der Verwendung der Site und/oder der darin enthaltenen Inhalte erzwingen.",
    "defamation": "Unserer Meinung nach uns und/oder die Site herabsetzen, beschmutzen oder anderweitig schädigen.",
    "harassment": "Verwenden Sie keine von der Site erhaltenen Informationen, um eine andere Person zu belästigen, zu missbrauchen oder zu schädigen.",
    "supportAbuse": "Unsere Support-Dienste missbräuchlich nutzen oder falsche Berichte über Missbrauch oder Fehlverhalten einreichen.",
    "legalCompliance": "Die Site in einer Weise nutzen, die gegen geltende Gesetze oder Vorschriften verstößt.",
    "framingProhibition": "Unerlaubtes Framing oder Verlinken der Site.",
    "malware": "Hochladen oder Übertragen (oder der Versuch des Hochladens oder Übertragens) von Viren, Trojanern oder anderem Material, einschließlich der übermäßigen Verwendung von Großbuchstaben und Spamming (fortlaufendes Posten sich wiederholender Texte), das die ununterbrochene Nutzung und den Genuss der Site durch eine Partei stört oder die Nutzung, Features, Funktionen, den Betrieb oder die Wartung der Site modifiziert, beeinträchtigt, unterbricht, verändert oder stört.",
    "automation": "Das System in irgendeiner Weise automatisiert zu nutzen, beispielsweise durch die Verwendung von Skripten zum Senden von Kommentaren oder Nachrichten oder durch die Verwendung von Data Mining, Robotern oder ähnlichen Tools zum Sammeln und Extrahieren von Daten.",
    "copyrightRemoval": "Löschen Sie den Hinweis auf das Urheberrecht oder andere Eigentumsrechte aus allen Inhalten.",
    "impersonation": "Versuchen Sie, sich als ein anderer Benutzer oder eine andere Person auszugeben oder den Benutzernamen eines anderen Benutzers zu verwenden.",
    "spyware": "Laden Sie kein Material hoch oder übertragen Sie es (oder versuchen Sie, es hochzuladen oder zu übertragen), das als passiver oder aktiver Mechanismus zur Erfassung oder Übertragung von Informationen fungiert, einschließlich, aber nicht beschränkt auf Clear Graphics Interchange Formats („GIFs“), 1×1-Pixel, Web-Bugs, Cookies oder andere ähnliche Geräte (manchmal als „Spyware“ oder „passive Erfassungsmechanismen“ oder „PCMs“ bezeichnet).",
    "disruption": "Die Site oder die mit der Site verbundenen Netzwerke oder Dienste zu stören, zu unterbrechen oder unangemessen zu belasten.",
    "employeeHarassment": "Belästigen, ärgern, einschüchtern oder bedrohen Sie keine unserer Mitarbeiter oder Vertreter, die mit der Bereitstellung eines Teils der Site für Sie beschäftigt sind.",
    "accessCircumvention": "Versuchen Sie, Maßnahmen der Site zu umgehen, die den Zugriff auf die Site oder Teile der Site verhindern oder einschränken sollen.",
    "codeCopying": "Kopieren oder Anpassen der Software der Site, einschließlich, aber nicht beschränkt auf Flash, PHP, HTML, JavaScript oder anderen Code.",
    "reverseEngineering": "Sofern nicht durch geltendes Recht gestattet, dürfen Sie die Software, die Teil der Site ist oder in irgendeiner Weise einen Teil davon darstellt, nicht entschlüsseln, dekompilieren, disassemblieren oder zurückentwickeln.",
    "bots": "Sofern dies nicht durch die Verwendung einer Standardsuchmaschine oder eines Internetbrowsers bedingt ist, dürfen Sie kein automatisiertes System verwenden, starten, entwickeln oder verteilen, einschließlich, aber nicht beschränkt auf Spider, Roboter, Cheat-Dienstprogramme, Scraper oder Offline-Reader, die auf die Site zugreifen, oder nicht autorisierte Skripts oder andere Software verwenden oder starten.",
    "buyingAgents": "Nutzen Sie einen Einkaufsagenten oder eine Einkaufsagentur, um Einkäufe auf der Site zu tätigen.",
    "unauthorizedUse": "Die Site in irgendeiner unbefugten Weise zu nutzen, einschließlich der Erfassung von Benutzernamen und/oder E-Mail-Adressen von Benutzern auf elektronischem oder anderem Wege zum Zweck des Versendens unerwünschter E-Mails oder der Erstellung von Benutzerkonten auf automatisiertem Wege oder unter Vorspiegelung falscher Tatsachen.",
    "competition": "Verwenden Sie die Site nicht, um mit uns in Wettbewerb zu treten, oder verwenden Sie die Site und/oder den Inhalt anderweitig für gewinnbringende Unternehmungen oder kommerzielle Unternehmen.",
    "advertising": "Verwenden Sie die Site, um für Waren und Dienstleistungen zu werben oder deren Verkauf anzubieten.",
    "profileTransfer": "Verkaufen oder übertragen Sie Ihr Profil anderweitig.",
    "featuresTitle": "11. Funktionen und Fehler",
    "featuresDescription": "Wir gestalten unsere Dienste sorgfältig und basieren dabei auf unseren eigenen Erfahrungen und den Erfahrungen unserer Kunden, die uns ihre Zeit und ihr Feedback mitteilen. Es gibt jedoch keinen Service, der allen gefällt. Wir übernehmen keine Garantie dafür, dass unsere Dienste Ihren spezifischen Anforderungen oder Erwartungen entsprechen.",
    "bugsDescription": "Wir testen alle unsere Funktionen vor der Auslieferung. Wie bei jeder Software sind auch in unseren Diensten Fehler unvermeidlich. Wir verfolgen die uns gemeldeten Fehler und arbeiten sie ab, insbesondere solche, die die Sicherheit oder den Datenschutz betreffen. Nicht alle gemeldeten Fehler werden behoben, und wir garantieren keine vollständig fehlerfreien Dienste.",
    "correctionsTitle": "12. Korrekturen",
    "informationAccuracy": "Die Website kann Tippfehler, Ungenauigkeiten oder Auslassungen enthalten, darunter Beschreibungen, Preise, Verfügbarkeit und verschiedene andere Informationen. Wir behalten uns das Recht vor, Fehler, Ungenauigkeiten oder Auslassungen zu korrigieren und die Informationen auf der Website jederzeit und ohne vorherige Ankündigung zu ändern oder zu aktualisieren.",
    "siteAvailability": "Wir können nicht garantieren, dass die Website jederzeit verfügbar ist. Es können Hardware-, Software- oder andere Probleme auftreten oder Wartungsarbeiten an der Website erforderlich sein, die zu Unterbrechungen, Verzögerungen oder Fehlern führen können. Wir behalten uns das Recht vor, die Website jederzeit und aus beliebigem Grund ohne vorherige Ankündigung zu ändern, zu überarbeiten, zu aktualisieren, auszusetzen, einzustellen oder anderweitig zu modifizieren. Sie erklären sich damit einverstanden, dass wir keinerlei Haftung für Verluste, Schäden oder Unannehmlichkeiten übernehmen, die dadurch entstehen, dass Sie während einer Ausfallzeit oder Einstellung der Website nicht auf die Website zugreifen oder sie nicht nutzen können. Nichts in diesen Servicebedingungen ist so auszulegen, dass wir verpflichtet sind, die Website zu warten und zu unterstützen oder in diesem Zusammenhang Korrekturen, Aktualisierungen oder Veröffentlichungen bereitzustellen.",
    "userDataTitle": "13. Benutzerdaten",
    "userDataDescription": "Wir speichern bestimmte Daten, die Sie an die Website übermitteln, zur Verwaltung der Website-Leistung sowie Daten im Zusammenhang mit Ihrer Nutzung der Website. Obwohl wir regelmäßig Datensicherungen durchführen, tragen Sie die alleinige Verantwortung für alle Daten, die Sie übermitteln oder die sich auf Ihre Aktivitäten auf der Website beziehen. Sie erklären sich damit einverstanden, dass wir Ihnen gegenüber nicht für den Verlust oder die Beschädigung solcher Daten haften, und verzichten hiermit auf jegliche Klagen gegen uns, die sich aus einem solchen Verlust oder einer solchen Beschädigung solcher Daten ergeben.",
    "privacyPolicyTitle": "14. Datenschutz",
    "privacyPolicyDescription": "Datenschutz und -sicherheit sind uns wichtig. Bitte lesen Sie unsere Datenschutzrichtlinie. Durch die Nutzung der Site erklären Sie sich mit unserer Datenschutzrichtlinie einverstanden, die in diese Servicebedingungen integriert ist. Bitte beachten Sie, dass die Site in den USA gehostet wird. Wenn Sie von einer anderen Region der Welt aus auf die Site zugreifen, in der Gesetze oder andere Anforderungen für die Erhebung, Verwendung oder Offenlegung personenbezogener Daten gelten, die von den geltenden Gesetzen in den USA abweichen, übertragen Sie durch Ihre fortgesetzte Nutzung der Site Ihre Daten in die USA und stimmen der Übertragung und Verarbeitung Ihrer Daten in den USA zu.",
    "liabilityTitle": "15. Haftung",
    "liabilityIntroduction": "Wir erwähnen die Haftung in diesen Bedingungen durchgehend, aber um alles in einem Abschnitt zusammenzufassen:",
    "liabilityWaiver": "Sie verstehen und erklären sich ausdrücklich damit einverstanden, dass das Unternehmen weder Ihnen noch Dritten gegenüber gesetzlich oder nach Billigkeit für direkte, indirekte oder zufällige Schäden, Schäden aufgrund entgangenen Gewinns, Sonderschäden, Folgeschäden, Straf- oder exemplarische Schäden haftet, einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Geschäftswert, Nutzung, Daten oder andere immaterielle Verluste (auch wenn das Unternehmen auf die Möglichkeit solcher Schäden hingewiesen wurde), die sich aus Folgendem ergeben: (1) der Nutzung oder der Unmöglichkeit der Nutzung der Dienste; (2) Fehlern, Irrtümern oder Ungenauigkeiten von Inhalten und Materialien; (3) Personen- oder Sachschäden jeglicher Art, die sich aus Ihrem Zugriff auf die Site und Ihrer Nutzung der Site ergeben; (4) den Kosten für die Beschaffung von Ersatzgütern und -dienstleistungen, die sich aus über die Dienste gekauften oder erhaltenen Waren, Daten, Informationen oder Dienstleistungen oder aus empfangenen Nachrichten oder abgeschlossenen Transaktionen ergeben; (5) jeglichem unbefugten Zugriff auf oder der Nutzung unserer sicheren Server und/oder sämtlicher darauf gespeicherter personenbezogener und/oder finanzieller Informationen; (6) jeglicher Unterbrechung oder Einstellung der Übertragung zu oder von der Site; (7) jegliche Bugs, Viren, Trojaner oder Ähnliches, die von Dritten auf die Site oder über die Site übertragen werden können, und/oder (8) jegliche Fehler oder Auslassungen in Inhalten und Materialien oder jegliche Verluste oder Schäden jeglicher Art, die durch die Verwendung von Inhalten entstehen, die über die Site gepostet, übertragen oder anderweitig verfügbar gemacht werden; (9) Aussagen oder Verhalten von Dritten in Bezug auf den Dienst; (10) oder jegliche andere Angelegenheit im Zusammenhang mit diesen Servicebedingungen oder den Diensten, sei es als Vertragsbruch, unerlaubte Handlung (einschließlich aktiver oder passiver Fahrlässigkeit) oder jede andere Haftungstheorie.",
    "miscellaneousTitle": "16. Sonstiges",
    "miscellaneousDescription": "Diese Nutzungsbedingungen und alle von uns auf der Website oder in Bezug auf die Website veröffentlichten Richtlinien oder Betriebsregeln stellen die gesamte Vereinbarung zwischen Ihnen und uns dar. Unser Versäumnis, ein Recht oder eine Bestimmung dieser Nutzungsbedingungen auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar. Diese Nutzungsbedingungen gelten im größtmöglichen gesetzlich zulässigen Umfang. Wir können unsere Rechte und Pflichten jederzeit vollständig oder teilweise an Dritte abtreten. Wir haften nicht für Verluste, Schäden, Verzögerungen oder Unterlassungen, die durch Ursachen außerhalb unserer Kontrolle verursacht werden. Sollte sich eine Bestimmung oder ein Teil einer Bestimmung dieser Nutzungsbedingungen als rechtswidrig, ungültig oder nicht durchsetzbar erweisen, gilt diese Bestimmung oder dieser Teil der Bestimmung als von diesen Nutzungsbedingungen abtrennbar und berührt nicht die Gültigkeit und Durchsetzbarkeit der übrigen Bestimmungen. Durch diese Nutzungsbedingungen oder die Nutzung der Website entsteht zwischen Ihnen und uns kein Joint Venture, keine Partnerschaft, kein Arbeits- oder Agenturverhältnis. Sie erklären sich damit einverstanden, dass diese Nutzungsbedingungen aufgrund ihrer Erstellung nicht zu unserem Nachteil ausgelegt werden. Sie verzichten hiermit auf sämtliche Einreden, die Ihnen möglicherweise aufgrund der elektronischen Form dieser Servicebedingungen und der fehlenden Unterzeichnung dieser Servicebedingungen durch die Parteien zustehen.",
    "contactTitle": "17. Kontakt",
    "contactDescription": "Wenn Sie Fragen zu den Servicebedingungen haben, kontaktieren Sie uns bitte.",
    "neverCap": "NeverCap",
    "site": "Website",
    "services": "Leistungen"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
