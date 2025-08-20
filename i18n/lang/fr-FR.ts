// 法语
let message = {
  // 首页
  HomePage: {
    home: "Accueil",
    times:
      "{times} transcriptions gratuites par jour, {left} restantes aujourd'hui. ",
    tips: "Passez à Pro pour des transcriptions illimitées.",
    update: "Mettre à niveau maintenant",
    rename: "Renommer",
    delete: "Supprimer",
    cancel: "Annuler",
    confirm: "Créer",
    dialogLabel: "Nom du dossier",
    recently: "Fichiers récents",
    loading: "Chargement",
    tour: {
      step0: {
        title: "Bienvenue sur {name}",
        tip: "Ici, vous pouvez :",
        content:
          "Transcrire des conversations uniques, des réunions, des conférences et plus encore",
        next: "Commencer"
      },
      step1: {
        title: "Transcrire des fichiers",
        content:
          "Prend en charge trois méthodes de transcription : fichiers locaux, liens et enregistrements."
      },
      step2: {
        title: "Créer un dossier",
        content:
          'Cliquez sur le "+" pour créer un dossier et organiser vos fichiers.'
      },
      step3: {
        title: "Voir les détails de la transcription et éditer",
        content:
          "Cliquez sur l'élément pour voir les détails de la transcription, l'éditer et la traduire."
      },
      next: "suivant",
      finish: "Compris"
    },
    export: {
      export: "Exporter",
      title: "Nous générons votre exportation",
      title2: "Votre fichier est prêt",
      singleLoadingContent: "1 fichier est en cours de compression.",
      singleSuccessContent: "1 fichier a été compressé.",
      loadingContent: "{num} fichiers sont en cours de compression.",
      successContent: "{num} fichiers ont été compressés.",
      cancel: "Annuler l'exportation",
      error: "Erreur d'exportation",
      dialog: {
        title: "Avertissement",
        content: "Annuler l'exportation ?",
        cancel: "Annuler l'exportation",
        continue: "Continuer l'exportation"
      }
    },
    welcome: {
      title: "Bienvenue sur Scribify !",
      description: "Ici, vous pouvez :",
      transcribe:
        "Transcrivez sans effort avec Scribify — transformez les conversations vocales en texte clair, consultable et partageable en un instant.",
      precision:
        "Obtenez des transcriptions précises avec identification des interlocuteurs et horodatage instantanément.",
      translate:
        "Brisez les barrières linguistiques : traduisez les transcriptions dans plus de 200 langues facilement.",
      edit: "Modifiez, affinez et exportez vos transcriptions dans des formats adaptés à vos besoins.",
      collaborate:
        "Collaborez en partageant votre texte transcrit avec d'autres personnes.",
      button: "Commencer",
      tip: "Prêt à transformer l'audio en texte transcrit ? Commencez à explorer maintenant !",
      tip2: "Commencez à explorer maintenant !",
      tip1: "Prêt à transformer l'audio en texte transcrit ? "
    },
    subscriptionModal: {
      left: {
        title: "Obtenez le Plan Pro pour débloquer plus",
        c1: "Transcriptions illimitées",
        c2: "Téléchargements de 10 heures",
        c3: "Priorité maximale",
        c4: "99% de précision de transcription",
        c5: "Plus de 100 langues prises en charge",
        c6: "Identification des interlocuteurs",
        c7: "Traduction de transcription",
        t1: "Transcriptions illimitées pour une personne.",
        t2: "Chaque fichier peut durer jusqu'à 10 heures / 5 Go. Téléchargez 50 fichiers à la fois.",
        t3: "Nous transcrirons toujours vos fichiers dès que possible avec la plus haute priorité."
      },
      right: {
        title: "Obtenir le Plan Pro",
        yearly: "Annuel",
        monthly: "Mensuel",
        save: "Économie",
        preMonth: "par mois",
        preYear: "par an",
        firstMonth: "premier mois",
        afterwards: "ensuite"
      },
      subscribe: "S'abonner"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Échoué",
      selected: "Sélectionné",
      success: "Succès",
      fileList: "Liste de Fichiers"
    },
    dialog: {
      move: {
        title: "Déplacer",
        label: "Choisissez un dossier",
        placeholder: "Choisissez un dossier",
        confirm: "Déplacer",
        cancel: "Annuler"
      },
      rename: {
        title: "Renommer",
        label: "Nom du fichier",
        confirm: "Renommer",
        cancel: "Annuler"
      },
      delete: {
        title: "Supprimer",
        file: "fichier",
        files: "fichiers",
        label:
          "Confirmer la suppression ? Cette action ne peut pas être annulée.",
        confirm: "Supprimer",
        cancel: "Annuler"
      },
      share: {
        title: "Partager",
        label:
          "Tout le monde avec le lien sécurisé suivant peut voir cette transcription et le fichier audio associé.",
        confirm: "Copier le lien",
        success: "Copie réussie"
      },
      export: {
        title: "Exporter",
        select: "Sélectionnez le format dont vous avez besoin",
        settings: "Paramètres",
        speaker: "Inclure le locuteur",
        timecodes: "Inclure les codes de temps",
        confirm: "Exporter",
        cancel: "Annuler",
        selectErr: "Veuillez sélectionner un ou plusieurs formats"
      }
    },
    search: {
      placeholder: "Rechercher"
    },
    recently: "Récemment",
    record: "Enregistrer",
    transcribe: "Transcrire",
    unclassified: "Dossiers non classés",
    buttons: {
      transcribe: "Transcrire les fichiers",
      url: "Transcrire les liens",
      record: "Enregistrer et transcrire",
      recording: "Enregistrement..."
    },
    delSuccess: "Supprimé avec succès",
    create: "Créer",
    endRecord: {
      title: "Invite",
      content:
        "Vous êtes en train d'enregistrer. Cette action terminera l'enregistrement. Voulez-vous terminer l'enregistrement ?",
      confirm: "Continuer l'Enregistrement",
      cancel: "Terminer l'Enregistrement"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Enregistrer",
      pause: "Pause",
      resume: "Reprendre",
      stop: "Arrêter",
      endRecord: "Terminer l'enregistrement",
      delete: "Supprimer",
      transcribe: "Transcrire",
      permissionDenied:
        "Permission microphonique refusée ou appareil non existant",
      dialog: {
        delete: {
          title: "Avertissement",
          label: "Êtes-vous sûr de vouloir supprimer cette enregistrement ?",
          confirm: "Supprimer",
          cancel: "Annuler"
        },
        complete: {
          title: "Enregistrement terminé",
          label:
            "L'enregistrement a atteint 10 heures et s'est automatiquement arrêté. Veuillez transcrire.",
          confirm: "Compris"
        },
        speaker: {
          content:
            "Pour l'identification des intervenants, les fichiers sont limités à 3 heures. Veuillez décocher '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcrire un média en ligne",
        title: "Coller les liens",
        label:
          "Collez votre lien vidéo ou audio depuis : YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram et d'autres plateformes...",
        confirm: "Ajouter",
        cancel: "Annuler",
        // Veuillez entrer un lien valide
        errorTitle:
          "Le lien que vous avez entré est incorrect. Veuillez vérifier et réessayer.",
        linkName: "Lien"
      },
      file: {
        orTitle: "Transcrire un média en ligne",
        dialogTitle: "Transcrire les fichiers",
        tip1: "Déposez les fichiers ici ou cliquez pour parcourir",
        tip2: "Cliquez pour parcourir",
        or: "ou",
        supported: "Formats pris en charge"
      },
      del: {
        title: "Avertissement",
        content:
          "Toutes les données de progression seront perdues. Confirmez-vous l'annulation de la transcription ?",
        cancel: "Confirmer l'annulation",
        confirm: "Continuer la transcription"
      },
      files: "Fichiers",
      resultDialogTitle: "Transcrire les fichiers",
      resultDialogTitle2: "Transcrire le fichier",
      cancel: "Annuler",
      confirm: "Transcrire",
      return: "Retour",
      addMore: "Ajouter plus",
      language: "Langue du média",
      failed: "Échoué",
      tooLarge: "Le fichier dépasse la limite (5G).",
      linkUpload: "Téléchargement",
      fileFormat: "Format de fichier non autorisé",
      localFiles: "Fichiers locaux",
      pasteLink: "Lien en ligne",
      uploadErr: "Erreur de téléchargement",
      hashErr: "Erreur de hachage",
      table: {
        status: "Statut",
        file: "Fichier",
        size: "Taille",
        noData: "Aucune donnée"
      },
      maxFileNum: "Le nombre de fichiers ne peut pas dépasser {num}.",
      speaker: "Identifier les intervenants",
      speakerLabel:
        "Détecter automatiquement qui parle",
      guest: {
        transcribe: "Transcrire",
        file: "Déposer",
        audio: "Fichier audio / vidéo",
        Uploading: "Téléchargement en cours..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Récemment",
      popular: "Populaire",
      other: "Autre",
      searchLanguage: "Rechercher une langue",
      noMatch: "Aucune langue correspondante trouvée",
      English: "Anglais",
      "English(US)": "Anglais (États-Unis)",
      "English(UK)": "Anglais (Royaume-Uni)",
      Spanish: "Espagnol",
      Portuguese: "Portugais",
      French: "Français",
      Italian: "Italien",
      German: "Allemand",
      Dutch: "Néerlandais",
      Polish: "Polonais",
      Danish: "Danois",
      Japanese: "Japonais",
      Korean: "Coréen",
      Hungarian: "Hongrois",
      Czech: "Tchèque",
      Chinese: "Chinois",
      Hebrew: "Hébreu",
      Arabic: "Arabe",
      Azerbaijani: "Azerbaïdjanais",
      Estonian: "Estonien",
      Belarusian: "Biélorusse",
      Bulgarian: "Bulgare",
      Icelandic: "Islandais",
      Bosnian: "Bosniaque",
      Persian: "Persan",
      Russian: "Russe",
      "Chinese(Traditional)": "Chinois (Traditionnel)",
      Finnish: "Finnois",
      Kazakh: "Kazakh",
      Galician: "Galicien",
      Catalan: "Catalan",
      "Chinese(Simplified)": "Chinois (Simplifié)",
      Kannada: "Kannada",
      Croatian: "Croate",
      Latvian: "Letton",
      Lithuanian: "Lituanien",
      Romanian: "Roumain",
      Marathi: "Marathi",
      Malay: "Malais",
      Macedonian: "Macédonien",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Népalais",
      Norwegian: "Norvégien",
      Swedish: "Suédois",
      Serbian: "Serbe",
      Slovak: "Slovaque",
      Slovenian: "Slovène",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamoul",
      Thai: "Thaï",
      Turkish: "Turc",
      Welsh: "Gallois",
      Urdu: "Ourdou",
      Ukrainian: "Ukrainien",
      Greek: "Grec",
      Armenian: "Arménien",
      Hindi: "Hindi",
      Indonesian: "Indonésien",
      Vietnamese: "Vietnamien",
      Albanian: "Albanais",
      Amharic: "Amharique",
      Assamese: "Assamais",
      Occitan: "Occitan",
      Bashkir: "Bachkir",
      Basque: "Basque",
      Breton: "Breton",
      Tibetan: "Tibétain",
      Faroese: "Féroïen",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Géorgien",
      Gujarati: "Gujarati",
      "Haitian Creole": "Créole haïtien",
      Hausa: "Haoussa",
      Latin: "Latin",
      Lao: "Laotien",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgeois",
      Malagasy: "Malgache",
      Maltese: "Maltais",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengali",
      Burmese: "Birman",
      Punjabi: "Pendjabi",
      Pashto: "Pachto",
      Sinhala: "Cingalais",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadjik",
      Tatar: "Tatar",
      Telugu: "Télougou",
      Turkmen: "Turkmène",
      Uzbek: "Ouzbek",
      Hawaiian: "Hawaïen",
      "Norwegian Nynorsk": "Norvégien Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Soundanais",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanais",
      Cantonese: "Cantonais",
      Abkhaz: "Abkhaze",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avar",
      Ewe: "Éwé",
      Aymara: "Aymara",
      Irish: "Irlandais",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossète",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinais",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Sepedi",
      bem: "Bemba",
      bik: "Bicolano",
      bal: "Baloutche",
      bho: "Bhojpuri",
      bua: "Bouriate",
      chm: "Mari des prairies",
      Chamorro: "Chamorro",
      Chechen: "Tchétchène",
      chk: "Chuuk",
      Chuvash: "Tchouvache",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tétoum",
      Divehi: "Maldivien",
      dyu: "Dioula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele du Sud",
      dov: "Dombe",
      "bm-Nkoo": "Bambara (N'ko)",
      "French(Canada)": "Français (Canada)",
      Fijian: "Fidjien",
      fon: "Fon",
      "Western Frisian": "Frison occidental",
      fur: "Frioulan",
      Fulah: "Peul",
      Kongo: "Kikongo",
      Kalaallisut: "Groenlandais",
      gom: "Konkani Goanais",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrückisch",
      Kyrgyz: "Kirghiz",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanouri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corse",
      "crh-Latn": "Tatar de Crimée (latin)",
      crh: "Tatar de Crimée (cyrillique)",
      Quechua: "Quechua",
      Kurdish: "Kurde (Kurmanji)",
      ckb: "Kurde (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalien",
      lij: "Ligure",
      Limburgish: "Limbourgeois",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Romani",
      mad: "Madurais",
      Manx: "Mannois",
      mwr: "Marwari",
      "ms-Arab": "Malais (Jawi)",
      Marshallese: "Marshallais",
      mam: "Mam",
      mai: "Maïthili",
      mfe: "Créole mauricien",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl de l'Est Huasteca",
      "Southern Sotho": "Sotho du Sud",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pendjabi (Shahmukhi)",
      "pt-PT": "Portugais (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasaï",
      Akan: "Akan",
      zap: "Zapotèque",
      "Northern Sami": "Sami du Nord",
      Samoan: "Samoan",
      kri: "Krio",
      crs: "Créole seychellois",
      Sango: "Sango",
      "sat-Latn": "Santali (latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Espéranto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaélique écossais",
      sus: "Soussou",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latin)",
      Tahitian: "Tahitien",
      Tonga: "Tongan",
      Tigrinya: "Tigrigna",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Touva",
      war: "Waray",
      mak: "Makassar",
      vec: "Vénitien",
      Uyghur: "Ouïghour",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Oudmourte",
      szl: "Silésien",
      scn: "Sicilien",
      hil: "Hiligaynon",
      jam: "Créole jamaïcain",
      sah: "Iakoute",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (latin)",
      Inuktitut: "Inuktitut (syllabaire)",
      yua: "Maya yucatèque",
      Dzongkha: "Dzongkha",
      Zulu: "Zoulou"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "ou", // 或
    LoginBtn: "Connectez-vous avec Email",
    LoginGoogle: "Connectez-vous avec Google",
    SignupBtn: "Inscrivez-vous avec Email",
    SignupGoogle: "Inscrivez-vous avec Google",
    SignupDes:
      "Inscrivez-vous aujourd'hui pour découvrir la magie — gratuitement.",
    SignupTitle: "Transcription précise et illimitée",
    signup: "S'inscrire", // 注册
    sign_up: "S'inscrire", // 注册
    loginByGoogle: "Continuer avec Google", // 使用Google登录
    emailAddress: "Veuillez entrer votre adresse email", // 请输入您的邮箱
    createAccount: "Créer un nouveau compte", // 创建账户
    accountExists: "Vous avez déjà un compte ? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "En continuant, vous acceptez nos {terms} et {policy}.",
      terms: "Conditions",
      policy: "Politique de confidentialité"
    },
    setPassword: "Définir un mot de passe", // 设置密码
    code: "Code de vérification", // 验证码
    resend: "Renvoyer", // 重新发送
    enterPassword: "Mot de passe : 6 caractères minimum.", // 请输入密码
    passwordLeval: "Niveau du mot de passe", // 密码强度
    Weak: "Faible", // 弱 中 强
    Medium: "Moyen", // 弱 中 强
    Strong: "Fort", // 弱 中 强
    confirmPassword: "Confirmez votre mot de passe", // 确认密码
    invalidEmail: "Adresse email invalide", // 无效的邮箱地址
    logInDirectly:
      "Ce compte existe déjà. Veuillez vous connecter directement.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Code de vérification erroné. Réessayez.", // 验证码错误，请重试
    atLeastSix: "Le mot de passe doit comporter au moins 6 caractères.", // 密码长度至少6位
    passwordNotMatch:
      "Les mots de passe ne correspondent pas. Veuillez réessayer.", // 密码不匹配，请重试
    login: "Connexion", // 登录
    log_in: "Connexion", // 登录
    log_In: "Connexion", // 登录
    password: "Mot de passe", // 密码
    forgotPassword: "Mot de passe oublié ?", // 忘记密码？
    noAccount: "Vous n'avez pas de compte ?", // 没有账户？注册
    accountNotExists: "Ce compte n'existe pas.", // 账户不存在
    passwordError: "Erreur de mot de passe", // 密码错误
    sendCode: "Envoyer le code de vérification", // 发送验证码
    resetPassword: "Réinitialiser le mot de passe", // 重置密码
    resetYourPassword: "Réinitialiser votre mot de passe", // 重置你的密码
    newOldCantSame:
      "Le nouveau mot de passe doit être différent de l'ancien mot de passe.", // 新密码与旧密码不能相同
    passwordResetOk: "Mot de passe réinitialisé avec succès !", // 密码重置成功！
    signupToSaveProgress:
      "Finalisez votre inscription pour sauvegarder votre progression.",
    tip: "Astuce",
    tipContentEmail:
      "Nous venons d'envoyer votre mot de passe de connexion à votre adresse e-mail.",
    tipContentPassword:
      "Veuillez vérifier votre boîte de réception et vous connecter avec votre e-mail et mot de passe.",
    codeToEmail:
      "Nous venons d'envoyer un code de vérification à votre adresse e-mail. Veuillez vérifier votre boîte de réception et coller le code de vérification ci-dessus."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnement",
    freeversion: "Gratuit",
    transcribeTimesDay: "3 transcriptions par jour",
    uploadMinutes: "Téléchargements de 30 minutes",
    lowerPriority: "Priorité inférieure",
    currentPlan: "Forfait actuel",
    professionalEdition: "version professionnelle",
    unlimitedTranscription: "Transcription illimitée",
    unlimitedNumberOfTimes: "Fréquence et durée de transcription illimitées.",
    filesUploadedAtOnce:
      "Chaque fichier peut durer jusqu'à 10 heures / 5 Go. Téléchargez 50 fichiers à la fois.",
    highestPriority: "priorité maximale",
    weWillGiveTheHighest:
      "Nous transcrirons toujours vos fichiers dès que possible avec la priorité la plus élevée.",
    theFirstMonth: "Le premier mois",
    subscribeTo: "s'abonner à",
    basicVersionFree: "Version de base (gratuite)",
    return: "Retour",
    annualize: "annuel",
    monthly: "mensuel",
    everyYear: "chaque année",
    saved: "économisé",
    byTheMonth: "par mois",
    firstMonth: "premier mois",
    afterwardsEveryMonth: "Ensuite, chaque mois",
    manageSubscription: "Gérer l'abonnement",
    professionalYearbook: "Abonnement annuel professionnel",
    professionalMonthly: "Abonnement mensuel professionnel",
    subscriptionWillCancelledOn: "Votre abonnement sera résilié le",
    displayLanguage: "Langue d'affichage",
    update: "Mettre à niveau maintenant",
    basicversion: "Version de base (Gratuite)",
    daily: "{start} sur {end} transcriptions quotidiennes utilisées",
    upgradetoPro: "Passer à la version Pro",
    accountSetting: "Paramètres du compte",
    logOut: "Se déconnecter",
    account: "Compte",
    email: "Email",
    id: "ID",
    password: "Mot de passe",
    resetPassword: "Réinitialiser le mot de passe",
    logIn: "Se connecter",
    tryForFree: "Essai gratuit",
    notFund: "Non trouvé",
    couldntFind: "Nous n'avons pas trouvé ce que vous cherchiez.",
    proAnnual: "Pro Annuel",
    proMonthly: "Pro Mensuel",
    perMonth: "par mois",
    afterwards: "ensuite",
    accuracy: "précision de transcription",
    supported: "langues prises en charge",
    identification: "Identification de l'orateur",
    transcriptSranslation: "Traduction de transcription",
    perYear: "par an",
    getProPlan: "Obtenir le forfait Pro",
    changeToAnnual: "Passer à l'annuel",
    automaticRenewalon: "Renouvellement automatique le",
    eachMonth: "Renouvellement automatique le {time} de chaque mois.",
    automaticRenewal:
      "Échec du renouvellement automatique, veuillez vérifier votre moyen de paiement.",
    eachYear: "Renouvellement automatique le {time} chaque année.",
    returnAccountSetting: "Retour",
    needsToWaitLonger:
      "Attendez plus longtemps avant que vos fichiers ne soient transcrits.",
    freeThreeTimesDay: "Transcrivez 3 fichiers gratuitement chaque jour.",
    oneFileUploaded:
      "Chaque fichier peut durer jusqu'à 30 minutes. Téléversez 1 fichier à la fois.",
    uploadWithinHours: "Téléchargements de 10 heures",
    yourSubscription: "Votre abonnement sera annulé le {time}.",
    save: "Économiser"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinois(Simplifié)",
      "Chinese(Traditional)": "Chinois(Traditionnel)",
      Japanese: "Japonais",
      Danish: "Danois",
      German: "Allemand",
      English: "Anglais",
      Spanish: "Espagnol",
      French: "Français",
      Italian: "Italien",
      Hungarian: "Hongrois",
      Dutch: "Néerlandais",
      Norwegian: "Norvégien",
      Polish: "Polonais",
      Portuguese: "Portugais",
      Finnish: "Finnois",
      Swedish: "Suédois",
      Turkish: "Turc",
      Greek: "Grec",
      Russian: "Russe",
      Ukrainian: "Ukrainien",
      Hebrew: "Hébreu",
      Arabic: "Arabe",
      Korean: "Coréen"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Commencer l'essai gratuit~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Rejoignez la liste d'attente, obtenez les dernières nouvelles de NuxtPro et les remises !",
      placeholder: "Entrez votre email",
      button: "Rejoindre la liste d'attente",
      joinCountMessage:
        "🔥 Utilisateur précoce #{count} vient de rejoindre la liste d'attente !"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "c'est une démonstration",
      corpInfo: "corp info"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "erreur de téléchargement vidéo"
      },
      mse: {
        code: 2,
        msg: "erreur d'ajout de flux"
      },
      parse: {
        code: 3,
        msg: "erreur de parsing"
      },
      format: {
        code: 4,
        msg: "format incorrect"
      },
      decoder: {
        code: 5,
        msg: "erreur de décodage"
      },
      runtime: {
        code: 6,
        msg: "erreurs grammaticales"
      },
      timeout: {
        code: 7,
        msg: "dépassement de délai"
      },
      other: {
        code: 8,
        msg: "autres erreurs"
      }
    },
    HAVE_NOTHING:
      "Il n'y a pas d'informations sur la disponibilité audio/vidéo",
    HAVE_METADATA: "Les métadonnées audio/vidéo sont prêtes ",
    HAVE_CURRENT_DATA:
      "Les données sur la position de lecture actuelle sont disponibles, mais il n'y a pas assez de données pour lire la prochaine image/milliseconde",
    HAVE_FUTURE_DATA:
      "Les données actuelles et au moins une image de données sont disponibles",
    HAVE_ENOUGH_DATA:
      "Les données disponibles sont suffisantes pour démarrer la lecture",
    NETWORK_EMPTY: "Audio/vidéo n'a pas été initialisé",
    NETWORK_IDLE:
      "Audio/vidéo est actif et a été sélectionné pour les ressources, mais aucun réseau n'est utilisé",
    NETWORK_LOADING: "Le navigateur télécharge les données",
    NETWORK_NO_SOURCE: "Aucune source audio/vidéo n'a été trouvée",
    MEDIA_ERR_ABORTED:
      "Le processus de récupération est annulé par l'utilisateur",
    MEDIA_ERR_NETWORK: "Une erreur est survenue lors du téléchargement",
    MEDIA_ERR_DECODE: "Une erreur est survenue lors du décodage",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/vidéo n'est pas supporté",
    REPLAY: "Relancer",
    ERROR: "Réseau hors ligne",
    PLAY_TIPS: "Lire",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Lire la suite",
    DOWNLOAD_TIPS: "Télécharger",
    ROTATE_TIPS: "Tourner",
    RELOAD_TIPS: "Recharger",
    FULLSCREEN_TIPS: "Aller en plein écran",
    EXITFULLSCREEN_TIPS: "Quitter le plein écran",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Quitter cssfullscreen",
    TEXTTRACK: "Sous-titre",
    PIP: "PIP",
    SCREENSHOT: "Capture d'écran",
    LIVE: "LIVE",
    OFF: "Désactivé",
    OPEN: "Ouvert",
    MINI_DRAG: "Cliquez et maintenez pour glisser",
    MINISCREEN: "Mini-écran",
    REFRESH_TIPS: "Veuillez réessayer",
    REFRESH: "Actualiser",
    FORWARD: "en avant",
    LIVE_TIP: "LIVE",
    TM_SUBTITLE_SHOW_TIPS: "Activer les sous-titres",
    TM_SUBTITLE_HIDE_TIPS: "Désactiver les sous-titres",
    TM_MINIMIZE_TIPS: "Masquer la vidéo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 25 août 2025",
    policyDescription:
      "Cette politique décrit comment Scribify (ci-après dénommé « Scribify », « notre », « nous ») collecte, utilise et divulgue vos informations personnelles lorsque vous utilisez nos services, sites Web",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "et des logiciels (collectivement, les « Services »).",
    policyAgreement:
      "Veuillez lire attentivement cette Politique de confidentialité et vous assurer de bien la comprendre. En utilisant l'un de nos Services, vous acceptez cette Politique de confidentialité. Si vous n'acceptez pas que nous utilisions vos données personnelles conformément à cette Politique, vous devez cesser immédiatement d'utiliser nos Services.",
    policyOverview:
      "Dans cette politique, nous expliquons : quelles données nous collectons et pourquoi ; comment vos données sont traitées ; et vos droits concernant vos données. Nous ne vendons pas vos données.",
    scopeTitle: "1. Portée de la présente politique de confidentialité",
    whatWeCollectTitle: "2. Ce que nous collectons et pourquoi",
    accessShareTitle:
      "3. Lorsque nous accédons à vos informations ou les partageons",
    secureDataTitle: "4. Comment nous sécurisons vos données",
    deleteContentTitle:
      "5. Que se passe-t-il lorsque vous supprimez votre contenu",
    locationTitle: "6. Localisation du site et des données",
    childrenPrivacyTitle: "7. Vie privée des enfants",
    updatesTitle: "8. Mises à jour de cette politique de confidentialité",
    contactUsTitle: "9. Contactez-nous",
    identityAccessTitle: "2.1 Identité et accès",
    billingInfoTitle: "2.2 Informations de facturation",
    productInteractionsTitle: "2.3 Interactions avec les produits",
    websiteInteractionsTitle: "2.4 Interactions sur le site Web",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Correspondance volontaire",
    scopeContent:
      "La présente Politique de confidentialité s'applique uniquement à la collecte et au traitement des informations concernant les utilisateurs des Services. Elle ne s'applique pas aux services, sites web ou logiciels exploités par des tiers liés à nous (que nous fournissions ces liens ou que d'autres utilisateurs les partagent), ni aux contenus, données, applications ou documents de tiers. Nous vous conseillons de consulter les politiques de confidentialité de tout site web ou logiciel tiers avant de leur fournir des informations.",
    collectPrinciple:
      "Notre principe directeur est de ne collecter que ce dont nous avons besoin. Voici ce que cela signifie concrètement :",
    identityAccessContent:
      "Lorsque vous vous inscrivez à l'un de nos produits, nous vous demandons des informations d'identification telles que votre nom et votre adresse e-mail. Ces informations nous permettent de bénéficier des fonctionnalités essentielles du produit et de vous envoyer des mises à jour et d'autres informations essentielles.",
    billingInfoContent:
      "Si vous souscrivez à un produit payant, vous serez invité à fournir vos informations de paiement et votre adresse de facturation. Ces informations sont transmises directement à notre processeur de paiement et ne transitent pas par nos serveurs.",
    productInteractionsContent:
      "Nous stockons sur nos serveurs le contenu que vous téléchargez, recevez ou conservez dans vos comptes produits. Sauf si vous supprimez ce contenu, nous pouvons le conserver tant que votre compte est actif.",
    websiteInteractionsContent:
      "Nous collectons des informations sur votre navigation à des fins d'analyse et de statistiques, telles que les tests de taux de conversion et l'expérimentation de nouveaux produits. Ces informations incluent, par exemple, les versions de votre navigateur et de votre système d'exploitation, votre adresse IP, les pages web que vous avez consultées et leur temps de chargement, ainsi que le site web qui vous a redirigé vers nous. Si vous possédez un compte et êtes connecté, ces données d'analyse web sont liées à votre adresse IP et à votre compte utilisateur jusqu'à la désactivation de votre compte.",
    cookiesContent1:
      "Nous utilisons également des cookies persistants propriétaires et certains cookies tiers pour stocker certaines préférences, faciliter l'utilisation de nos applications et effectuer des tests A/B ainsi que prendre en charge certaines analyses.",
    cookiesContent2:
      "Un cookie est un fichier texte stocké par votre navigateur. Il peut mémoriser vos informations de connexion et vos préférences de navigation. Il peut également collecter des informations telles que votre type de navigateur, votre système d'exploitation, les pages web consultées, la durée de votre visite, le contenu consulté et d'autres données relatives à votre parcours de navigation. Vous pouvez configurer les paramètres de conservation des cookies et accepter ou bloquer des cookies individuels dans les paramètres de votre navigateur. Cependant, si vous désactivez les cookies, nos applications et d'autres aspects de nos services risquent de ne pas fonctionner correctement.",
    voluntaryCorrespondenceContent:
      "Lorsque vous nous envoyez un e-mail avec une question ou pour demander de l'aide, nous conservons cette correspondance, y compris votre adresse e-mail, afin que nous ayons un historique de la correspondance passée à laquelle nous référer si vous nous contactez à l'avenir.",
    accessShareContent1:
      "Pour vous fournir les produits ou services que vous avez demandés. Nous faisons appel à des sous-traitants tiers pour gérer nos applications et vous fournir les services. Il s'agit notamment de fournisseurs de services cloud et d'analyse.",
    accessShareContent2:
      "Pour enquêter sur un abus, le prévenir ou prendre des mesures. L'accès au compte d'un client lors d'une enquête sur un abus potentiel est une mesure de dernier recours. Nous souhaitons protéger la confidentialité et la sécurité de nos clients et des personnes qui nous signalent des problèmes, et nous mettons tout en œuvre pour équilibrer ces responsabilités tout au long du processus. Si nous découvrons que vous utilisez nos produits à des fins restreintes, nous prendrons les mesures nécessaires, y compris en informant les autorités compétentes si nécessaire.",
    accessShareContent3: "Lorsque la loi applicable l’exige.",
    userDataRequests:
      "- Demandes de données utilisateur. Notre politique est de ne pas répondre aux demandes gouvernementales de données utilisateur, sauf obligation légale ou, dans certaines circonstances, en cas de demande urgente. Toutefois, si les autorités policières américaines disposent d'un mandat, d'une assignation pénale ou d'une décision de justice nous obligeant à partager des données, nous devons nous y conformer. De même, nous ne répondrons aux demandes émanant d'autorités gouvernementales extérieures aux États-Unis que si le gouvernement américain nous y contraint, conformément aux procédures décrites dans un traité ou un accord d'entraide judiciaire. Nous avons pour politique d'avertir les utilisateurs concernés avant de partager des données, sauf interdiction légale et sauf en cas d'urgence.",
    preservationRequests:
      "- Demandes de conservation. De même, notre politique est de répondre aux demandes de conservation de données uniquement si la loi américaine sur les communications stockées (18 USC Section 2703(f)) l'exige, ou si une assignation à comparaître en matière civile est dûment signifiée. Nous ne partageons pas les données conservées, sauf si la loi l'exige ou si nous y sommes contraints par une décision de justice que nous choisissons de ne pas contester. De plus, sauf si nous recevons un mandat, une ordonnance ou une assignation en bonne et due forme avant l'expiration de la période de conservation requise, nous détruirons toute copie conservée des données clients à la fin de cette période.",
    taxAudit:
      "- En cas de contrôle fiscal, nous pourrions être amenés à communiquer des informations de facturation. Dans ce cas, nous ne communiquerons que le strict nécessaire, comme les adresses de facturation et les informations d'exonération fiscale.",
    secureDataContent1: "Toutes les données sont cryptées via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "lorsqu'elles sont transmises depuis nos serveurs vers votre navigateur.",
    deleteContentContent:
      "Si vous supprimez du contenu, il deviendra immédiatement inaccessible.",
    locationContent:
      "Nos produits et autres sites web sont exploités aux États-Unis. Si vous résidez dans l'Union européenne, au Royaume-Uni ou ailleurs qu'aux États-Unis, sachez que toutes les informations que vous nous fournissez seront transférées et stockées aux États-Unis. En utilisant nos sites web ou nos Services et/ou en nous fournissant vos informations personnelles, vous consentez à ce transfert.",
    childrenPrivacyContent:
      "Les Services ne sont pas destinés aux enfants et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous avez moins de 13 ans, veuillez ne pas soumettre d'informations personnelles via les Services. Si vous pensez qu'un enfant nous a fourni des informations personnelles en violation de la présente Politique, veuillez nous contacter comme indiqué ci-dessous.",
    updatesContent:
      "Nous pouvons mettre à jour cette politique si nécessaire afin de nous conformer à la réglementation en vigueur et de refléter toute nouvelle pratique. Chaque fois que nous apportons une modification importante à nos politiques, nous actualisons la date en haut de cette page.",
    contactUsContent1:
      "Si vous avez des questions, des commentaires ou des plaintes concernant notre politique de confidentialité, veuillez",
    contactUs: "Contactez-nous",
    contactUsContent2:
      "et nous nous efforcerons de traiter votre réclamation dans les plus brefs délais."
  },
  termsOfService: {
    termsOfServiceTitle: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : 21 septembre 2022",
    thankYouMessage: "Merci d'utiliser nos produits !",
    companyReference:
      "Lorsque nous disons « Société », « nous », « notre » ou « nos » dans ce document, nous faisons référence à Scribify.",
    servicesDefinition:
      "Lorsque nous disons « Services », nous entendons tout produit créé et maintenu par Scribify, qu'il soit fourni dans un navigateur Web, une application de bureau, une application mobile ou un autre format.",
    termsUpdateNotice:
      "Nous sommes susceptibles de mettre à jour ces Conditions d'utilisation ultérieurement. Ces modifications visent généralement à clarifier certaines de ces conditions en créant un lien vers une politique connexe plus complète. Chaque fois que nous apportons une modification importante à nos politiques, nous actualiserons la date en haut de cette page et prendrons toutes les mesures nécessaires pour en informer les titulaires de compte.",
    acceptanceOfAgreementTitle: "1. Acceptation de l'accord",
    scribifyServicesTitle: "2. Services de Scribify",
    accountTermsTitle: "3. Conditions du compte",
    paymentRefundsTitle:
      "4. Paiement, remboursements et modifications de forfait",
    cancellationTerminationTitle: "5. Annulation et résiliation",
    submissionsTitle: "6. Soumissions",
    uptimeSecurityTitle: "7. Disponibilité et sécurité",
    siteManagementTitle: "8. Gestion du site",
    copyrightContentTitle: "9. Droits d'auteur et propriété du contenu",
    prohibitedActivitiesTitle: "10. Activités interdites",
    featuresBugsTitle: "11. Fonctionnalités et bugs",
    correctionsTitle: "12. CORRECTIONS",
    userDataTitle: "13. Données utilisateur",
    privacyPolicyTitle: "14. Politique de confidentialité",
    liabilityTitle: "15. Responsabilité",
    miscellaneousTitle: "16. Divers",
    contactUsTitle: "17. Contactez-nous",
    acceptanceContent1:
      "En utilisant nos Services, vous acceptez le présent Contrat, qui constitue un contrat contraignant entre vous et Scribify. Vous déclarez être légalement capable d'accepter les présentes Conditions et affirmez avoir l'âge légal pour conclure un contrat. L'acceptation par Scribify est expressément conditionnée à votre acceptation de l'ensemble des termes et conditions du présent Contrat.",
    acceptanceContent2:
      "Les Services ne sont pas destinés et ne doivent pas être utilisés par des personnes de moins de 18 ans. En utilisant les Services, vous déclarez et garantissez que vous remplissez les conditions d'éligibilité susmentionnées.",
    acceptanceContent3:
      "Les termes « vous », « votre », « vous-même » incluent également vos employés, agents, représentants commerciaux et toute autre personne à qui vous donnez accès aux Services via votre Compte (tel que défini ci-dessous). Vous êtes responsable de vous assurer que toutes les personnes accédant aux Services via votre compte connaissent les présentes Conditions et les respectent.",
    acceptanceContent4:
      "Scribify se réserve le droit de réviser et de mettre à jour les présentes Conditions de temps à autre, à sa seule discrétion. Toutes les modifications entrent en vigueur dès leur publication. En continuant à utiliser les Services après la publication des Conditions révisées, vous acceptez les modifications. Vous êtes invité à consulter régulièrement cette page afin de prendre connaissance de ces modifications, car elles vous engagent.",
    servicesContent1:
      "Nos services permettent aux utilisateurs de transformer des conversations vocales en texte transcrit qui peut être recherché, traduit et partagé avec d’autres.",
    servicesContent2:
      "Vous pouvez choisir d'utiliser la version gratuite des Services (« Services gratuits ») ou la version payante des Services par abonnement pour laquelle vous devrez peut-être payer des frais (les « Services payants »).",
    servicesContent3:
      "Nous mettrons les Services à votre disposition. Il vous incombe de prendre toutes les dispositions nécessaires pour y accéder.",
    accountTerms1:
      "- Vous êtes responsable de la sécurité de votre compte. La Société ne peut être tenue responsable de toute perte ou dommage résultant du non-respect de cette obligation de sécurité.",
    accountTerms2:
      "- Vous ne pouvez pas utiliser les Services à des fins illégales, contraires à l'éthique ou immorales.",
    accountTerms3:
      "- Vous êtes responsable de tout le contenu publié et de toute activité effectuée sur votre compte. Cela inclut le contenu publié par d'autres personnes qui : (a) ont accès à vos identifiants ; ou (b) possèdent leurs propres identifiants de connexion sur votre compte.",
    accountTerms4:
      "- Vous devez être un humain. Les comptes créés par des robots ou d'autres méthodes automatisées ne sont pas autorisés.",
    paymentContent1:
      "Pour les services payants proposant un essai gratuit, nous vous expliquons la durée de l'essai lors de votre inscription. Après la période d'essai, vous devrez payer à l'avance pour continuer à utiliser le service. Sans paiement, ces services prendront fin.",
    paymentContent2:
      "- Si vous passez d'un forfait gratuit à un forfait payant, nous débiterons votre carte immédiatement et votre cycle de facturation commence le jour de la mise à niveau.",
    paymentContent3:
      "- Tous les frais s'entendent hors taxes, prélèvements ou droits imposés par les autorités fiscales. Le cas échéant, nous percevons ces taxes pour le compte des autorités fiscales et les reversons à ces dernières. Dans le cas contraire, vous êtes responsable du paiement de ces taxes, prélèvements ou droits.",
    paymentContent4:
      "- Aucun achat n'est remboursable. Vous pouvez annuler tout service payant à tout moment en vous connectant à votre compte. Pour les abonnements payants, l'annulation prendra effet à la fin de la période d'abonnement en cours, sauf mention contraire.",
    cancellationContent1:
      "- Si vous annulez le Service avant la fin de la période payée, votre annulation prendra effet immédiatement et aucun nouveau prélèvement ne vous sera facturé. Nous ne calculons pas automatiquement au prorata le temps non utilisé lors du dernier cycle de facturation.",
    cancellationContent2:
      "- Nous nous réservons le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future de nos Services, pour quelque raison que ce soit et à tout moment. La suspension signifie que vous ne pourrez plus accéder à votre compte ni à son contenu. La résiliation entraînera également la suppression de votre compte ou de votre accès à celui-ci, ainsi que la confiscation et l'abandon de tout son contenu. Nous nous réservons également le droit de refuser l'utilisation des Services à quiconque, pour quelque raison que ce soit et à tout moment. Cette clause s'explique par le fait que, statistiquement parlant, parmi les centaines de milliers de comptes présents sur nos Services, au moins un commet une infraction.",
    cancellationContent3:
      "- Les abus verbaux, physiques, écrits ou autres (y compris les menaces d'abus ou de représailles) envers un employé ou un dirigeant de la Société peuvent entraîner la résiliation immédiate du compte.",
    submissionsContent:
      "Vous reconnaissez et acceptez que les questions, commentaires, suggestions, idées, retours ou autres informations concernant le Site (les « Soumissions ») que vous nous fournissez ne sont pas confidentiels et deviennent notre propriété exclusive. Nous détenons les droits exclusifs, y compris tous les droits de propriété intellectuelle, et sommes autorisés à utiliser et diffuser sans restriction ces Soumissions à toute fin légale, commerciale ou autre, sans reconnaissance ni compensation. Vous renoncez par les présentes à tous droits moraux sur ces Soumissions et garantissez par les présentes que ces Soumissions sont originales et que vous avez le droit de les soumettre. Vous acceptez qu'aucun recours ne soit possible contre nous pour toute violation ou détournement, allégué ou réel, de tout droit de propriété sur vos Soumissions.",
    uptimeContent1:
      "- Vous utilisez les Services à vos seuls risques. Nous les fournissons « en l'état » et « selon disponibilité ». Nous ne proposons pas de contrats de service pour la plupart de nos Services, mais nous accordons une grande importance à la disponibilité de nos applications.",
    uptimeContent2:
      "- Nous nous réservons le droit de désactiver temporairement votre compte si votre utilisation dépasse largement celle des autres clients des Services. Bien entendu, nous vous contacterons avant toute action, sauf dans les rares cas où le niveau d'utilisation pourrait nuire aux performances du Service pour les autres clients.",
    uptimeContent3:
      "Nous prenons de nombreuses mesures pour protéger et sécuriser vos données grâce à des sauvegardes, des redondances et le chiffrement. Nous appliquons le chiffrement pour la transmission de données sur l'Internet public.",
    uptimeContent4:
      "- Nous utilisons des fournisseurs tiers et des partenaires d'hébergement pour fournir le matériel, les logiciels, le réseau, le stockage et la technologie associée nécessaires à l'exécution des Services.",
    siteManagementContent:
      "Nous nous réservons le droit, mais non l'obligation, de : (1) surveiller le Site pour détecter toute violation des présentes Conditions d'utilisation ; (2) prendre les mesures juridiques appropriées contre quiconque, à notre seule discrétion, viole la loi ou les présentes Conditions d'utilisation, y compris, sans limitation, signaler cet utilisateur aux autorités chargées de l'application de la loi ; (3) à notre seule discrétion et sans limitation, refuser, restreindre l'accès, limiter la disponibilité ou désactiver (dans la mesure où cela est technologiquement possible) l'une de vos Contributions ou toute partie de celles-ci ; (4) à notre seule discrétion et sans limitation, préavis ou responsabilité, de supprimer du Site ou de désactiver de toute autre manière tous les fichiers et contenus qui sont de taille excessive ou qui sont de quelque manière que ce soit encombrants pour nos systèmes ; et (5) gérer le Site d'une manière conçue pour protéger nos droits et notre propriété et pour faciliter le bon fonctionnement du Site.",
    copyrightContent1:
      "- Tout le contenu publié sur les Services doit être conforme à la loi américaine sur le droit d'auteur.",
    copyrightContent2:
      "Nous ne revendiquons aucun droit de propriété intellectuelle sur le contenu que vous fournissez aux Services. Tous les contenus téléchargés restent votre propriété.",
    copyrightContent3:
      "- Nous ne présélectionnons pas le contenu, mais nous nous réservons le droit (mais pas l'obligation) à notre seule discrétion de refuser ou de supprimer tout contenu disponible via le Service.",
    copyrightContent4:
      "Les noms, l'apparence et la convivialité des Services sont protégés par le droit d'auteur © de la Société. Tous droits réservés. Vous ne pouvez pas dupliquer, copier ou réutiliser une quelconque partie des éléments HTML, CSS, JavaScript ou visuels sans l'autorisation écrite expresse de la Société. Vous devez demander l'autorisation d'utiliser le logo de la Société ou tout logo de Service à des fins promotionnelles. Veuillez",
    emailUs: "envoyez-nous un e-mail",
    copyrightContent5:
      "Demandes d'utilisation de logos. Nous nous réservons le droit de révoquer cette autorisation en cas de violation des présentes Conditions d'utilisation.",
    copyrightContent6:
      "- Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie des Services, l'utilisation des Services ou l'accès aux Services sans l'autorisation écrite expresse de la Société.",
    copyrightContent7:
      "- Vous ne devez pas modifier un autre site Web de manière à laisser entendre à tort qu'il est associé aux Services ou à la Société.",
    copyrightContent8:
      "Nous respectons les droits de propriété intellectuelle d'autrui. Si vous pensez qu'un contenu disponible sur ou via le Site porte atteinte à un droit d'auteur que vous détenez ou contrôlez, veuillez immédiatement nous le signaler.",
    contactUs: "Contactez-nous",
    copyrightContent9:
      "Une copie de votre notification sera envoyée à la personne ayant publié ou stocké le contenu visé par la notification. Veuillez noter que, conformément à la loi applicable, vous pouvez être tenu responsable de dommages et intérêts si vous faites de fausses déclarations dans une notification. Par conséquent, si vous n'êtes pas certain que le contenu figurant sur le site ou auquel il renvoie porte atteinte à vos droits d'auteur, nous vous conseillons de contacter au préalable un avocat.",
    prohibitedActivitiesIntro:
      "Vous ne pouvez accéder au Site ni l'utiliser à d'autres fins que celles pour lesquelles nous le mettons à disposition. Le Site ne peut être utilisé dans le cadre d'activités commerciales, sauf celles expressément approuvées par nous.",
    prohibitedActivitiesUserAgreement:
      "En tant qu'utilisateur du Site, vous acceptez de ne pas :",
    prohibitedActivity1:
      "- Récupérer systématiquement des données ou d'autres contenus du Site pour créer ou compiler, directement ou indirectement, une collection, une compilation, une base de données ou un répertoire sans notre autorisation écrite.",
    prohibitedActivity2:
      "- Nous tromper, nous escroquer ou nous induire en erreur, ainsi que d'autres utilisateurs, en particulier dans toute tentative d'obtenir des informations de compte sensibles telles que les mots de passe des utilisateurs.",
    prohibitedActivity3:
      "- Contourner, désactiver ou interférer de toute autre manière avec les fonctionnalités liées à la sécurité du Site, y compris les fonctionnalités qui empêchent ou restreignent l'utilisation ou la copie de tout Contenu ou imposent des limitations à l'utilisation du Site et/ou du Contenu qu'il contient.",
    prohibitedActivity4:
      "- Dénigrer, ternir ou nuire de toute autre manière, à notre avis, à nous-mêmes et/ou au Site.",
    prohibitedActivity5:
      "- Utiliser toute information obtenue à partir du Site afin de harceler, d'abuser ou de nuire à une autre personne.",
    prohibitedActivity6:
      "- Faire un usage abusif de nos services d’assistance ou soumettre de faux rapports d’abus ou de mauvaise conduite.",
    prohibitedActivity7:
      "- Utiliser le Site d’une manière incompatible avec les lois ou réglementations applicables.",
    prohibitedActivity8:
      "- Participer à un cadrage ou à un lien non autorisé vers le Site.",
    prohibitedActivity9:
      "- Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) des virus, des chevaux de Troie ou d'autres éléments, y compris l'utilisation excessive de majuscules et le spam (publication continue de texte répétitif), qui interfère avec l'utilisation et la jouissance ininterrompues du Site par une partie ou qui modifie, altère, perturbe, altère ou interfère avec l'utilisation, les fonctionnalités, les fonctions, le fonctionnement ou la maintenance du Site.",
    prohibitedActivity10:
      "- Participer à toute utilisation automatisée du système, comme l'utilisation de scripts pour envoyer des commentaires ou des messages, ou l'utilisation d'outils d'exploration de données, de robots ou d'outils similaires de collecte et d'extraction de données.",
    prohibitedActivity11:
      "- Supprimez les avis de droits d'auteur ou autres droits de propriété de tout contenu.",
    prohibitedActivity12:
      "- Tenter d'usurper l'identité d'un autre utilisateur ou d'une autre personne ou d'utiliser le nom d'utilisateur d'un autre utilisateur.",
    prohibitedActivity13:
      "- Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) tout matériel qui agit comme un mécanisme passif ou actif de collecte ou de transmission d'informations, y compris, sans limitation, les formats d'échange de graphiques clairs (« gifs »), les pixels 1 × 1, les bogues Web, les cookies ou autres dispositifs similaires (parfois appelés « logiciels espions » ou « mécanismes de collecte passive » ou « pcms »).",
    prohibitedActivity14:
      "- Interférer avec, perturber ou créer une charge excessive sur le Site ou les réseaux ou services connectés au Site.",
    prohibitedActivity15:
      "- Harceler, ennuyer, intimider ou menacer l'un de nos employés ou agents engagés dans la fourniture de toute partie du Site.",
    prohibitedActivity16:
      "- Tenter de contourner toute mesure du Site conçue pour empêcher ou restreindre l'accès au Site, ou à toute partie du Site.",
    prohibitedActivity17:
      "- Copier ou adapter le logiciel du Site, y compris, mais sans s'y limiter, Flash, PHP, HTML, JavaScript ou autre code.",
    prohibitedActivity18:
      "- Sauf dans les cas autorisés par la loi applicable, déchiffrer, décompiler, désassembler ou procéder à une ingénierie inverse de tout logiciel composant ou constituant de quelque manière que ce soit une partie du Site.",
    prohibitedActivity19:
      "- Sauf si cela résulte de l'utilisation standard d'un moteur de recherche ou d'un navigateur Internet, utilisez, lancez, développez ou distribuez tout système automatisé, y compris, sans limitation, toute araignée, tout robot, tout utilitaire de triche, tout scraper ou tout lecteur hors ligne qui accède au Site, ou utilisez ou lancez tout script ou autre logiciel non autorisé.",
    prohibitedActivity20:
      "- Faire appel à un agent d'achat ou à un intermédiaire pour effectuer des achats sur le Site.",
    prohibitedActivity21:
      "- Faire toute utilisation non autorisée du Site, y compris la collecte de noms d'utilisateur et/ou d'adresses e-mail d'utilisateurs par des moyens électroniques ou autres dans le but d'envoyer des e-mails non sollicités, ou de créer des comptes d'utilisateurs par des moyens automatisés ou sous de faux prétextes.",
    prohibitedActivity22:
      "- Utiliser le Site dans le cadre de tout effort visant à nous concurrencer ou utiliser le Site et/ou le Contenu pour toute activité génératrice de revenus ou entreprise commerciale.",
    prohibitedActivity23:
      "- Utiliser le Site pour faire de la publicité ou proposer à la vente des biens et services.",
    prohibitedActivity24: "- Vendre ou transférer votre profil.",
    featuresContent1:
      "Nous concevons nos services avec soin, en nous appuyant sur notre propre expérience et sur celle de nos clients qui partagent leur expérience et leurs commentaires. Cependant, il n'existe pas de service qui plaise à tout le monde. Nous ne garantissons pas que nos services répondront à vos besoins ou attentes spécifiques.",
    featuresContent2:
      "Nous testons également toutes nos fonctionnalités avant leur lancement. Comme tout logiciel, nos services comportent inévitablement des bugs. Nous suivons les bugs qui nous sont signalés et les corrigeons, notamment ceux liés à la sécurité ou à la confidentialité. Tous les bugs signalés ne sont pas corrigés et nous ne garantissons pas des services totalement exempts d'erreurs.",
    correctionsContent1:
      "Certaines informations du Site peuvent contenir des erreurs typographiques, des inexactitudes ou des omissions, notamment concernant les descriptions, les prix, la disponibilité et diverses autres informations. Nous nous réservons le droit de corriger toute erreur, inexactitude ou omission et de modifier ou mettre à jour les informations du Site à tout moment et sans préavis.",
    correctionsContent2:
      "Nous ne pouvons garantir la disponibilité permanente du Site. Nous pouvons rencontrer des problèmes matériels, logiciels ou autres, ou être amenés à effectuer des opérations de maintenance, entraînant des interruptions, des retards ou des erreurs. Nous nous réservons le droit de modifier, réviser, mettre à jour, suspendre, interrompre ou autrement modifier le Site à tout moment et pour quelque raison que ce soit, sans préavis. Vous reconnaissez que nous déclinons toute responsabilité en cas de perte, dommage ou inconvénient causé par votre incapacité à accéder au Site ou à l'utiliser pendant une période d'indisponibilité ou d'interruption de son fonctionnement. Aucune disposition des présentes Conditions d'utilisation ne saurait être interprétée comme nous obligeant à maintenir et à soutenir le Site, ni à fournir des corrections, mises à jour ou versions connexes.",
    userDataContent:
      "Nous conserverons certaines données que vous transmettez au Site afin d'en gérer les performances, ainsi que les données relatives à votre utilisation. Bien que nous effectuions régulièrement des sauvegardes de données, vous êtes seul responsable de toutes les données que vous transmettez ou liées à toute activité que vous avez entreprise sur le Site. Vous reconnaissez que nous déclinons toute responsabilité envers vous en cas de perte ou de corruption de ces données, et vous renoncez par les présentes à tout droit d'action contre nous découlant de cette perte ou corruption.",
    privacyPolicyContent1:
      "La confidentialité et la sécurité des données nous tiennent à cœur. Veuillez consulter notre",
    privacyPolicy: "politique de confidentialité",
    privacyPolicyContent2:
      "En utilisant le Site, vous acceptez d'être lié par notre Politique de confidentialité, intégrée aux présentes Conditions d'utilisation. Veuillez noter que le Site est hébergé aux États-Unis. Si vous accédez au Site depuis une autre région du monde dont les lois ou autres exigences régissant la collecte, l'utilisation ou la divulgation des données personnelles diffèrent des lois applicables aux États-Unis, votre utilisation continue du Site implique le transfert de vos données vers les États-Unis et vous acceptez que vos données soient transférées et traitées aux États-Unis.",
    liabilityIntro:
      "Nous mentionnons la responsabilité tout au long des présentes Conditions, mais pour tout regrouper dans une seule section :",
    liabilityContent:
      "Français Vous comprenez et acceptez expressément que la Société ne sera pas responsable, en droit ou en équité, envers vous ou envers un tiers de tout dommage direct, indirect, accessoire, perte de profits, spécial, consécutif, punitif ou exemplaire, y compris, mais sans s'y limiter, les dommages pour perte de profits, de clientèle, d'utilisation, de données ou autres pertes intangibles (même si la Société a été informée de la possibilité de tels dommages), résultant de : (1) l'utilisation ou l'impossibilité d'utiliser les Services ; (2) des erreurs, fautes ou inexactitudes de contenu et de matériel ; (3) des blessures corporelles ou des dommages matériels, de quelque nature que ce soit, résultant de votre accès et de votre utilisation du site ; (4) le coût d'approvisionnement de biens et services de substitution résultant de tout bien, donnée, information ou service acheté ou obtenu ou de messages reçus ou de transactions conclues via ou à partir des Services ; (5) tout accès ou utilisation non autorisé de nos serveurs sécurisés et/ou de toutes les informations personnelles et/ou financières qui y sont stockées ; (6) toute interruption ou cessation de transmission vers ou depuis le site ; (7) tout bug, virus, cheval de Troie ou autre qui pourrait être transmis au site ou via le site par un tiers, et/ou ; (8) toute erreur ou omission dans tout contenu et matériel ou pour toute perte ou dommage de toute nature subi à la suite de l'utilisation de tout contenu publié, transmis ou autrement mis à disposition via le site ; (9) les déclarations ou la conduite de tout tiers sur le service ; (10) ou toute autre question relative aux présentes Conditions d'utilisation ou aux Services, qu'il s'agisse d'une rupture de contrat, d'un délit (y compris la négligence, qu'elle soit active ou passive), ou de toute autre théorie de responsabilité.",
    miscellaneousContent:
      "Les présentes Conditions d'utilisation et toutes les politiques ou règles de fonctionnement publiées par nous sur le Site ou relatives à celui-ci constituent l'intégralité de l'accord et de l'entente entre vous et nous. Notre manquement à exercer ou à appliquer un droit ou une disposition des présentes Conditions d'utilisation ne saurait constituer une renonciation à ce droit ou à cette disposition. Les présentes Conditions d'utilisation s'appliquent dans toute la mesure permise par la loi. Nous pouvons céder tout ou partie de nos droits et obligations à des tiers à tout moment. Nous déclinons toute responsabilité en cas de perte, de dommage, de retard ou d'inaction causés par une cause indépendante de notre volonté. Si une disposition ou une partie d'une disposition des présentes Conditions d'utilisation est jugée illégale, nulle ou inapplicable, cette disposition ou partie de disposition est réputée dissociable des présentes Conditions d'utilisation et n'affecte pas la validité et l'applicabilité des autres dispositions. Aucune relation de coentreprise, de partenariat, d'emploi ou d'agence n'est créée entre vous et nous du fait des présentes Conditions d'utilisation ou de l'utilisation du Site. Vous acceptez que les présentes Conditions d'utilisation ne soient pas interprétées à notre détriment du fait de leur rédaction. Vous renoncez par la présente à toute défense que vous pourriez avoir sur la base de la forme électronique des présentes Conditions d'utilisation et de l'absence de signature par les parties aux présentes pour exécuter les présentes Conditions d'utilisation.",
    contactUsContent1:
      "Si vous avez une question sur l'une des conditions d'utilisation, veuillez",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Caractéristiques",
    UnlimitedTranscription: "Transcription illimitée",
    BulkUpload: "Téléchargement en masse",
    Accuracy: "96% de précision",
    Pricing: "Tarification",
    UseCases: "Cas d'utilisation",
    AllUseCases: "Tous les cas d'utilisation",
    Podcasters: "Podcasteurs",
    Journalists: "Journalistes",
    ContentCreators: "Créateurs de contenu",
    Researchers: "chercheurs",
    BusinessTeams: "Équipes commerciales",
    Educators: "Éducateurs",
    Resources: "Ressources",
    YouTubetoMP4: "YouTube en MP4",
    StartFreeTrial: "Essayez-le gratuitement"
  },
  Footer: {
    des: "Le premier service de transcription IA véritablement illimité au monde. Sans limite, juste la liberté de créer.",
    Features: "Caractéristiques",
    UseCases: "Cas d'utilisation",
    Company: "Entreprise",
    featureMenus: ["Transcription illimitée", "Téléchargement en masse", "96% de précision"],
    useCaseMenus: [
      "Tous les cas d'utilisation",
      "Podcasteurs",
      "Journalistes",
      "Créateurs de contenu",
      "chercheurs",
      "Équipes commerciales",
      "Éducateurs"
    ],
    companyMenus: [
      "À propos",
      "Tarification",
      "Confidentialité",
      "Termes"
    ]
  },
  Index: {
    Hero: {
      badge: "Plus de « shrinkflation » – en fait, il n'y a plus de limite",
      h1: "Arrêtez de payer pour les limites :",
      gradient: "Transcription IA véritablement illimitée",
      subtitle: "Téléchargez l'intégralité de vos archives de podcasts. Transcrivez toutes vos interviews. Traitez jusqu'à 50 fichiers simultanément. Pas de limite mensuelle ni de téléchargement. Enfin une transcription qui s'adapte à vos besoins.",
      FreeTrial: "Essayez-le gratuitement - Pas de carte de crédit",
      HowWorks: "Découvrez comment cela fonctionne",
      Unlimited: "Téléchargements de fichiers illimités",
      NoCap: "Pas de limite de minutes mensuelles",
      Hour: "Fichiers de 10 heures pris en charge",
      ExploreUseCases: "Explorer les cas d'utilisation"
    },
    Stats: {
      monthlyMinutes: "Procès-verbaux mensuels",
      fileUploads: "Téléchargements de fichiers",
      batchProcessing: "Traitement par lots",
      maxFileLength: "Longueur maximale du fichier"
    },
    FeaturesGrid: {
      try_now: "Essayez-le maintenant",
      no_signup: "Aucune inscription requise",
      experience_unltd: "Faites l'expérience d'une transcription véritablement illimitée",
      upload_50: "Téléchargez jusqu'à 50 fichiers à la fois, ici même",
      no_limits: "Plus de limites cachées",
      no_surprises: "Plus de surprises",
      transparency: "Alors que d’autres réduisent discrètement vos minutes ou cachent les plafonds dans les petits caractères, nous croyons en une transparence radicale",
      feat_unltd: "En fait illimité",
      feat_unltd_desc: "Pas de « politique d'utilisation équitable » enfouie sous des termes. Pas de limite de stockage déguisée en « illimité ». Importez l'intégralité de vos archives, transcrivez tout. Nous sommes sérieux.",
      feat_bulk: "Liberté de téléchargement en masse",
      feat_bulk_desc: "Fatigué des « 3 importations à vie » ou des « 10 fichiers par mois » ? Importez 50 fichiers simultanément, autant de fois que nécessaire. Idéal pour gérer les retards.",
      feat_batch: "Traitement par lots",
      feat_batch_desc: "Gérez toute votre saison de podcasts en une nuit. Téléchargez 50 interviews simultanément. Laissez notre IA travailler pendant votre sommeil. Réveillez-vous avec les transcriptions complètes.",
      feat_accuracy: "96% de précision",
      feat_accuracy_desc: "IA de pointe avec ponctuation intelligente, journalisation des locuteurs jusqu'à 20 locuteurs et gestion parfaite des accents et des termes techniques.",
      feat_langs: "Plus de 100 langues",
      feat_langs_desc: "Transcrivez dans plus de 100 langues et traduisez vers plus de 249 langues. Aucun frais supplémentaire pour les différentes langues. Contenu international, prix unique.",
      feat_pro: "Fonctionnalités professionnelles",
      feat_pro_desc: "Horodatages au niveau des mots pour un positionnement audio/vidéo précis, identification précise du locuteur même lors de changements de conversation rapides et texte parfaitement formaté avec des paragraphes, des phrases et une ponctuation pour une lecture facile."
    },
    UseCases: {
      built_for: "Conçu pour",
      "heavy_users": "Les gros utilisateurs comme vous",
      "join_users": "Rejoignez les YouTubeurs, les créateurs de contenu et les podcasteurs qui ont abandonné les services de « shrinkflation »",
      "podcasters": {
        "title": "Podcasteurs",
        "des": "Téléchargez l'intégralité de votre catalogue. Créez des notes pour chaque épisode. Plus besoin de choisir les épisodes à transcrire."
      },
      "content_creators": {
        "title": "Créateurs de contenu",
        "des": "Transformez votre vidéothèque en texte indexé. Générez des sous-titres pour chaque vidéo. Plus besoin de compter les minutes, créez simplement."
      },
      "journalists": {
        "title": "Journalistes",
        "des": "Téléchargez tous vos entretiens en une seule fois. Fini les blocages liés aux « 10 fichiers par mois » en cas de deadline. Traitez tout."
      },
      researchers: {
        title: "chercheurs",
        des: "Transcrivez des heures de groupes de discussion et d'entretiens. Téléchargez l'intégralité de votre étude en une seule fois. Identifiez précisément les intervenants."
      },
      business_teams: {
        title: "Équipes commerciales",
        des: "Enregistrez chaque appel sans vous soucier des limites. Obtenez des informations d'IA sur toutes les conversations, et pas seulement quelques-unes."
      },
      educators: {
        title: "Éducateurs",
        des: "Transcrivez l'intégralité des cours. Rendez tout le contenu accessible. Plus besoin de choisir entre les cours en raison de la limitation du temps de parole."
      }
    },
    Testimonials: {
      title: "Aimé par",
      highlighted_users: "Plus de 50 000 utilisateurs",
      subtitle: "Découvrez pourquoi les professionnels choisissent NeverCap plutôt que des alternatives limitées",
      Mike: {
        "text": "Putain, ça marche vraiment ! Je fais un podcast depuis 3 ans et je transcrivais tout manuellement comme un idiot. J'ai posté 6 épisodes d'un coup et ça nous a parfaitement séparés, mon co-animateur et moi. L'épisode du café que je croyais raté ? Transcription parfaitement nette. Je ne recommencerai plus jamais à recopier ce genre de trucs moi-même.",
        "author": "Mike Rodriguez",
        "role": "Animateur de podcast"
      },
      Sarah: {
        "text": "J'enseigne en ligne et j'avais besoin de sous-titres pour mes vidéos. J'ai essayé trois autres outils qui avaient des limites étranges ou prenaient une éternité. Celui-ci… fonctionne parfaitement ? J'ai mis en ligne mon cours d'espagnol et j'ai obtenu des sous-titres parfaits en 2 minutes environ. Mes élèves malentendants sont ravis. J'aurais aimé le trouver plus tôt !",
        "author": "Sarah Chen",
        "role": "Enseignant en ligne"
      },
      Jessica: {
        "text": "Je l'utilise pour mes entretiens et sa précision est incroyable. J'ai eu un entretien de deux heures en anglais approximatif et en espagnol, et tout était correct, même les horodatages. Avant, je payais mon stagiaire 200 $ par mois juste pour la transcription. Ça me fait économiser de l'argent chaque mois.",
        "author": "Jessica Park",
        "role": "Journaliste indépendant"
      }
    },
    PricingPreview: {
      "title": "Tarification transparente",
      "highlighted_text": "Pas de majuscules cachées",
      "subtitle": "Choisissez votre formule. Sans astérisques, sans petits caractères, sans surprises."
    },
    FAQSection: {
      "title": "Questions fréquemment posées",
      "titleHighlight": "Questions",
      "questions": [
        {
          "q": "politique_illimitée",
          "question": "Est-ce vraiment illimité ? Quel est le piège ?",
          "answer": "Oui, c'est vraiment illimité ! Pas de limite de minutes mensuelles, pas de frais de dépassement. Les seules limites sont techniques : chaque fichier peut durer jusqu'à 10 heures ou peser jusqu'à 5 Go, et vous pouvez traiter jusqu'à 50 fichiers simultanément. Mais vous pouvez télécharger autant de lots que vous le souhaitez, tout au long du mois."
        },
        {
          "q": "précision",
          "question": "Quelle est la précision de la transcription ?",
          "answer": "Nous garantissons une précision de 96 % pour un son clair. Notre IA est entraînée sur des millions d'heures de contenu varié et gère parfaitement les accents, les termes techniques et les locuteurs multiples. Pour les audios complexes, nos fonctionnalités d'amélioration intelligente optimisent les résultats."
        },
        {
          "q": "langues",
          "question": "Quelles langues prenez-vous en charge ?",
          "answer": "Nous prenons en charge la transcription dans plus de 100 langues, dont l'anglais, l'espagnol, le mandarin, l'hindi, l'arabe, le français et bien d'autres. De plus, vous pouvez traduire vos transcriptions dans 249 langues différentes, ce qui en fait un outil idéal pour les contenus internationaux."
        },
        {
          "q": "vitesse",
          "question": "Quelle est la rapidité de la transcription ?",
          "answer": "Rapide comme l'éclair ! Un fichier audio d'une heure est généralement traité en moins de 5 minutes. Grâce au traitement par lots, vous pouvez importer 50 fichiers simultanément et les traiter en parallèle. La plupart des utilisateurs découvrent leur bibliothèque entière transcrite du jour au lendemain."
        },
        {
          "q": "annulation",
          "question": "Puis-je annuler à tout moment ?",
          "answer": "Absolument ! Aucun engagement, aucun frais de résiliation. Vous pouvez passer à un abonnement supérieur, inférieur ou résilier à tout moment depuis votre tableau de bord. En cas de résiliation, vous conserverez l'accès jusqu'à la fin de votre période de facturation."
        },
        {
          "q": "sécurité",
          "question": "Mes données sont-elles sécurisées ?",
          "answer": "Votre sécurité est notre priorité. Nous sommes certifiés SOC 2, utilisons un chiffrement 256 bits pour toutes les données et n'utilisons jamais votre contenu pour entraîner nos modèles. Vous pouvez supprimer vos fichiers à tout moment ; nous les purgeons automatiquement après 30 jours. Conforme au RGPD et au CCPA."
        },
        {
          "q": "formats_d'exportation",
          "question": "Quels formats d'exportation sont disponibles ?",
          "answer": "Téléchargez vos transcriptions au format de votre choix : PDF, Word (DOCX), Excel, CSV, sous-titres SRT, texte brut (TXT) et légendes VTT. Idéal pour tous vos flux de travail."
        },
        {
          "q": "formats_de_fichiers",
          "question": "Quels fichiers audio et vidéo puis-je télécharger ?",
          "answer": "Nous prenons en charge la quasi-totalité des formats audio et vidéo : MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, et bien d'autres. Si vous pouvez les lire, nous pouvons les transcrire."
        }
      ]
    },
    CTASection: {
      "title": "Prêt à vous libérer des limites ?",
      "subtitle": "Rejoignez plus de 50 000 professionnels qui ont opté pour une transcription véritablement illimitée",
      "button": "Essayez NeverCap gratuitement",
      "disclaimer": "Aucune carte de crédit requise pour le plan gratuit • Effectuez une mise à niveau à tout moment pour un accès illimité"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "Fini la « shrinkflation »",
      heroTitleLine1: "Vraiment illimité",
      heroTitleLine2: "Transcription IA",
      heroSubtitle: "Alors que Trint vous limite à 50 heures et Otter à 10 fichiers par mois, nous vous offrons ce que nous promettons réellement : une transcription illimitée sans plafond caché.",
      primaryCta: "Essayez-le gratuitement - Pas de carte de crédit",
      secondaryCta: "Voir la vérité",
      comparisonBadLabel: "Ce que font les autres",
      comparisonBadTitle: "Des limites cachées partout",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: "« Illimité » = plafond de 50 heures/mois",
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Loutre:",
      comparisonBadItem2Text: "3 importations à vie (gratuites), 10/mois (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Lucioles :",
      comparisonBadItem3Text: "Limite de stockage de 800 minutes",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Description :",
      comparisonBadItem4Text: "Max 30 heures/mois",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Caché dans les termes et conditions",
      comparisonGoodLabel: "Ce que nous faisons",
      comparisonGoodTitle: "En fait illimité",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Pas de limite de minutes mensuelles",
      comparisonGoodItem1Text: "jamais",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Téléchargements de fichiers illimités",
      comparisonGoodItem2Text: "toujours",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Aucune limite de stockage",
      comparisonGoodItem3Text: "du tout",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Téléchargement par lots de 50 fichiers",
      comparisonGoodItem4Text: "à tout moment",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Politique transparente",
      comparisonGoodItem5Text: "à l'avance",
      feature1Label: "Aucune limite",
      feature1TitlePart1: "Transcrire 1 000 heures ?",
      feature1TitlePart2: "Même prix.",
      feature1Description: "Arrêtez de compter les minutes. Arrêtez de vous soucier des limites. Que vous transcriviez 10 heures ou 10 000 heures par mois, vous payez le même forfait. Pas de frais de dépassement. Pas de factures surprises.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Pas d'astuces en matière de politique d'« utilisation équitable »",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Pas de limitation après X heures",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Pas d'anxiété de fin de mois",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Heures mensuelles",
      feature1Stat2Number: "0 $",
      feature1Stat2Label: "Frais de dépassement",
      feature1Stat3Number: "24h/24 et 7j/7",
      feature1Stat3Label: "Télécharger à tout moment",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparent",
      feature2Label: "Liberté en vrac",
      feature2TitlePart1: "Téléchargez votre",
      feature2TitlePart2: "Archives complètes",
      feature2Description: "Otter vous offre 3 importations gratuites à vie, 10 par mois avec la version Pro. L'accès est illimité. Importez vos podcasts, toutes vos interviews et vos années d'enregistrement. Aucune restriction.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 fichiers par lot",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Fichiers de 10 heures pris en charge",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Traitez pendant que vous dormez",
      feature2TableRow1Label: "Sans loutre",
      feature2TableRow1Value: "3 importations à vie",
      feature2TableRow2Label: "Loutre Pro",
      feature2TableRow2Value: "10 fichiers/mois",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "plafond de 50 heures/mois",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Vraiment illimité ✓",
      feature3Label: "Preuve sociale",
      feature3TitlePart1: "Les utilisateurs sont",
      feature3TitlePart2: "Changement quotidien",
      feature3Description: "« Je paie 100 $ par an pour Otter, et ils me limitent à 10 importations de fichiers par mois. Dès qu'il existe une alternative avec des importations illimitées, je disparais ! » - Utilisateur réel de Reddit",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Plus de 50 000 utilisateurs ont changé",
      feature3Point2Icon: "✓",
      feature3Point2Text: "De la « shrinkflation » d'Otter",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Ne jamais revenir en arrière",
      feature3Stat1Number: "50 000+",
      feature3Stat1Label: "Utilisateurs satisfaits",
      feature3Stat2Number: "1 million et plus",
      feature3Stat2Label: "Fichiers traités",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Précision",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Pas de frais cachés",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutes/mois",
      trustBadge2Number: "100+",
      trustBadge2Label: "Langues",
      trustBadge3Number: "96%",
      trustBadge3Label: "Précision",
      trustBadge4Number: "50",
      trustBadge4Label: "Téléchargement par lots",
      ctaTitle: "Arrêtez de payer pour de faux abonnements illimités",
      ctaSubtitle: "Rejoignez des milliers de personnes qui sont passées à la transcription véritablement illimitée",
      finalCta: "Essayez NeverCap gratuitement"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Liberté de téléchargement en masse",
      heroTitleLine1: "Téléchargez 50 fichiers.",
      heroTitleHighlight: "Traitez tout.",
      heroSubtitle: "Otter vous offre 3 importations à vie. TROIS. À vie. Nous vous offrons des téléchargements illimités, 50 fichiers à la fois, quand vous le souhaitez.",
      primaryCta: "Démarrer le téléchargement en masse →",
      secondaryCta: "Voir les limites",
      redditQuote: "« J'ai trois ans d'épisodes de podcast à transcrire. Otter me dit que j'aurai droit à trois importations à vie. TROIS. C'est insultant. »",
      redditAuthorIcon: "📍",
      redditAuthorText: "Une véritable frustration de la part de r/podcasting",
      comparisonSectionTitlePart1: "Le",
      comparisonSectionTitleHighlight: "Des limites ridicules",
      comparisonSectionTitlePart2: "Ils imposent",
      comparisonSubtitle: "Comment les concurrents limitent votre capacité à traiter le contenu",
      limitCard1Service: "Sans loutre",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importations à vie",
      limitCard1DescriptionLine2: "(Oui, pour TOUTE ta vie)",
      limitCard2Service: "Loutre Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Fichiers par mois",
      limitCard2DescriptionLine2: "(Forfait 100 $/an)",
      limitCard3Service: "Description",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fichier à la fois",
      limitCard3DescriptionLine2: "(Téléchargement séquentiel)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Téléchargements illimités",
      limitCard4DescriptionLine2: "50 fichiers par lot",
      feature1Label: "Puissance par lots",
      feature1TitlePart1: "Traitez votre",
      feature1TitleHighlight: "Archives complètes",
      feature1TitlePart2: "Du jour au lendemain",
      feature1Description: "Téléchargez 50 fichiers avant de vous coucher. Réveillez-vous avec des transcriptions complètes. Pas de file d'attente, pas de message « Veuillez mettre à jour ». Juste la puissance de traitement à portée de main.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 téléchargements simultanés",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Traitement parallèle",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Fichiers de 10 heures pris en charge",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5 Go par fichier maximum",
      uploadAnimationText1: "50 fichiers",
      uploadAnimationText2: "Déposer et traiter",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "interview_raw.mp4",
      fileBadge3: "réunion_2024.wav",
      fileBadge4: "lecture_full.mov",
      fileBadge5: "+ 46 autres fichiers...",
      feature2Label: "Vitesse",
      feature2TitlePart1: "Du téléchargement à",
      feature2TitleHighlight: "Fait en quelques heures",
      feature2Description: "Grâce à notre infrastructure de traitement parallèle, vos 50 fichiers ne sont plus en attente. Ils sont tous transcrits simultanément. Ce qui prenait auparavant des semaines prend désormais quelques heures.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Fichier d'une heure : 5 minutes",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 fichiers : traités en parallèle",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notification par e-mail une fois terminé",
      timelineStep1Icon: "1",
      timelineStep1Title: "Télécharger",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Traitement",
      timelineStep2Time: "5 à 30 minutes",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magie de l'IA",
      timelineStep3Time: "30 à 60 minutes",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Complet",
      timelineStep4Time: "< 2 heures",
      feature3Label: "Liberté",
      feature3TitlePart1: "Pas de files d'attente.",
      feature3TitleHighlight: "Pas d'attente.",
      feature3TitlePart2: "Aucune limite.",
      feature3Description: "Tandis que d'autres vous font attendre dans des files virtuelles ou vous proposent un traitement prioritaire, nous traitons chaque téléchargement avec urgence. Votre contenu est important et ne devrait pas attendre.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Aucun niveau de priorité",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Même vitesse pour tous",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Téléchargez à tout moment, 24h/24 et 7j/7",
      feature3VisualNumber: "24h/24 et 7j/7",
      feature3VisualTitle: "Toujours prêt",
      feature3VisualSubtext: "Téléchargez dès que l'inspiration vous vient",
      useCasesTitlePart1: "Parfait pour",
      useCasesTitleHighlight: "Téléchargeurs importants",
      useCasesSubtitle: "Scénarios réels où le téléchargement en masse sauve la situation",
      useCase1Title: "Archives des podcasts",
      useCase1Description: "Téléchargez 3 années d'épisodes simultanément. Créez des transcriptions pour l'ensemble de votre catalogue. Générez du contenu SEO pour chaque épisode.",
      useCase2Title: "Création de cours",
      useCase2Description: "Traitez simultanément toutes vos vidéos de cours. Créez des transcriptions accessibles aux étudiants. Créez des supports de cours consultables.",
      useCase3Title: "Arriéré d'entretiens",
      useCase3Description: "Débarrassez-vous de cette montagne d'entretiens non transcrits. Traitez des semaines de recherche en quelques heures. Respectez vos délais sans paniquer.",
      useCase4Title: "Bibliothèque YouTube",
      useCase4Description: "Générez des sous-titres pour l'ensemble de votre chaîne. Créez des articles de blog à partir de contenu vidéo. Améliorez le référencement de toutes vos vidéos.",
      useCase5Title: "Archives des réunions",
      useCase5Description: "Téléchargez des mois de réunions enregistrées. Créez des notes consultables. Ne perdez plus jamais vos décisions importantes.",
      useCase6Title: "Données de recherche",
      useCase6Description: "Traitez les groupes de discussion en masse. Transcrivez tous les entretiens avec les participants. Analysez efficacement les données qualitatives.",
      ctaTitle: "Arrêtez de mendier pour plus de téléchargements",
      ctaSubtitle: "Bénéficiez d'un traitement en masse illimité qui fonctionne réellement",
      finalCta: "Télécharger 50 fichiers maintenant →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Précision à la pointe de l'industrie",
      heroTitleLine1: "96% de précision.",
      heroTitleHighlight: "Chaque mot compte.",
      heroSubtitle: "Une précision inégalée dans 12 langues principales. Horodatage au mot près pour une synchronisation parfaite. Identification intelligente du locuteur pour des conversations rapides. Formatage professionnel et lisible.",
      primaryCta: "Testez notre précision →",
      secondaryCta: "Voir les langues",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Précision dans",
      statCard1DescriptionLine2: "12 langues principales",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Précision avec",
      statCard2DescriptionLine2: "Accents et dialectes",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Niveau des mots",
      statCard3DescriptionLine2: "Précision de l'horodatage",
      languageSectionTitlePart1: "96 % de précision dans 12 langues principales",
      languageSubtitle: "Transcription de qualité professionnelle pour le contenu mondial",
      languageCard1Flag: "🇫🇷",
      languageCard1Name: "Anglais",
      languageCard1Accuracy: "96% de précision",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Espagnol",
      languageCard2Accuracy: "96% de précision",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "mandarin",
      languageCard3Accuracy: "96% de précision",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Français",
      languageCard4Accuracy: "96% de précision",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Allemand",
      languageCard5Accuracy: "96% de précision",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japonais",
      languageCard6Accuracy: "96% de précision",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "coréen",
      languageCard7Accuracy: "96% de précision",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "portugais",
      languageCard8Accuracy: "96% de précision",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "russe",
      languageCard9Accuracy: "96% de précision",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "italien",
      languageCard10Accuracy: "96% de précision",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Néerlandais",
      languageCard11Accuracy: "96% de précision",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "arabe",
      languageCard12Accuracy: "96% de précision",
      moreLanguagesText: "+ 88 langues supplémentaires prises en charge avec une précision de plus de 95 %",
      feature1Label: "Précision",
      feature1TitlePart1: "Niveau des mots",
      feature1TitleHighlight: "Horodatages",
      feature1Description: "Chaque mot est parfaitement synchronisé avec sa position audio. Créez des transcriptions cliquables, générez des sous-titres précis ou accédez directement à des moments précis de vos enregistrements. Une précision de 100 ms, une fiabilité professionnelle.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Précision d'horodatage de 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parfait pour le montage vidéo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Transcriptions interactives cliquables",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Sous-titres précis à l'image près",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Orateur 1",
      transcriptLine1Text: "Bienvenue dans l'épisode de podcast d'aujourd'hui.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Orateur 2",
      transcriptLine2Text: "Merci de m'avoir invité dans l'émission !",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Orateur 1",
      transcriptLine3Text: "Plongeons dans notre sujet principal...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Orateur 2",
      transcriptLine4Text: "Absolument, je suis ravi d’en discuter.",
      feature2Label: "IA intelligente",
      feature2TitlePart1: "Poignées",
      feature2TitleHighlight: "Conversations rapides",
      feature2Description: "Notre IA identifie précisément les intervenants, même en cas de chevauchement de discours, d'interruptions et de conversations rapides. Idéal pour les interviews, les podcasts et les réunions où les intervenants interviennent fréquemment.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifie jusqu'à 20 locuteurs",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Gère parfaitement les interruptions",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fonctionne avec des discours qui se chevauchent",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Maintient la précision de la diaphonie",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Intervenants identifiés",
      feature2VisualSubtext: "Même dans les conversations rapides",
      feature3Label: "Lisibilité",
      feature3TitlePart1: "Parfaitement",
      feature3TitleHighlight: "Texte formaté",
      feature3Description: "Fini les murs de texte interminables. Notre IA ajoute automatiquement les paragraphes, les phrases et la ponctuation exactement là où ils doivent être. Résultat ? Des transcriptions agréables à lire et faciles à parcourir.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Sauts de paragraphe intelligents",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Ponctuation précise",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Capitalisation appropriée",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Sortie propre et numérisable",
      formattingTitle: "Avant et après",
      formattingBeforeLabel: "❌ Autres :",
      formattingBeforeText: "Alors aujourd'hui, nous allons parler des nouvelles fonctionnalités sur lesquelles nous avons travaillé. Je pense que vous les aimerez vraiment. Elles ont été demandées par les utilisateurs depuis longtemps et nous les avons enfin réalisées.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Aujourd'hui, nous allons parler des nouvelles fonctionnalités sur lesquelles nous travaillons. Je pense que vous les apprécierez beaucoup. Elles étaient demandées par les utilisateurs depuis longtemps, et nous les avons enfin réalisées.",
      comparisonSubtitle: "Précision",
      comparisonSectionTitle: "Comparaison",
      comparisonDes: "Découvrez comment nous nous comparons à la concurrence",
      tableHeader1: "Fonctionnalité",
      tableHeader2: "NeverCap",
      tableHeader3: "Loutre.ai",
      tableHeader4: "Description",
      tableHeader5: "Tour",
      tableRow1Feature: "Précision (audio clair)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Horodatages au niveau des mots",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identification du locuteur",
      tableRow3NeverCap: "20 intervenants",
      tableRow3Otter: "16 intervenants",
      tableRow3Descript: "10 intervenants",
      tableRow3Rev: "✕",
      tableRow4Feature: "Gère la diaphonie",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limité",
      tableRow4Descript: "Limité",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formatage intelligent",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Basique",
      tableRow6Feature: "12 langues à 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Expérience de précision de 96 %",
      ctaSubtitle: "Téléchargez votre audio le plus difficile et voyez la différence",
      finalCta: "Testez notre précision maintenant →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Tarification simple et transparente",
      "highlighted_text": "Pas de majuscules cachées",
      "description": "Choisissez l'offre qui correspond à vos besoins. Passez à une offre supérieure ou inférieure à tout moment. Sans engagement, sans surprise."
    },
    Cards: {
      "title": "Tarification simple et transparente.",
      "highlighted_text": "Pas de majuscules cachées.",
      "description": "Choisissez l'offre qui correspond à vos besoins. Passez à une offre supérieure ou inférieure à tout moment. Sans engagement, sans surprise.",
      "plans": [
        {
          "name": "Gratuit",
          "price": "0 $",
          "period": "mois",
          "discount": "Idéal pour tester notre service",
          "limits": {
            "title": "Limites quotidiennes",
            "items": [
              "3 fichiers/jour (≈90 min au total/jour)",
              "Jusqu'à 30 minutes par fichier (≤ 250 Mo)",
              "Télécharger 1 fichier à la fois",
              "File d'attente prioritaire standard"
            ]
          },
          "features": {
            "title": "Caractéristiques",
            "items": [
              "Plus de 100 langues",
              "Étiquettes des haut-parleurs",
              "Traduction",
              "Tous les formats d'exportation"
            ]
          },
          "cta": {
            "text": "Commencez gratuitement. Sans carte de crédit.",
            "button": "Commencez gratuitement"
          }
        },
        {
          "name": "Pro Mensuel",
          "price": "17,99 $",
          "period": "mois",
          "discount": "9,99 $ pour le premier mois",
          "limits": {
            "title": "Pas de plafond mensuel",
            "items": [
              "Minutes totales illimitées",
              "Jusqu'à 10 heures / 5 Go par fichier",
              "Téléchargez 50 fichiers à la fois",
              "File d'attente prioritaire"
            ]
          },
          "features": {
            "title": "Tout est gratuit, plus",
            "items": [
              "Horodatages au niveau des mots",
              "Identification avancée des locuteurs",
              "Paragraphes formatés et ponctuation",
              "Soutien prioritaire"
            ]
          },
          "cta": {
            "text": "Minutes illimitées. Vitesse prioritaire. Téléchargements groupés.",
            "button": "Passez Pro"
          },
          "badge": "Le plus populaire"
        },
        {
          "name": "Pro Annuel",
          "price": "8,99 $",
          "period": "mois",
          "discount": "Facturé annuellement 107,88 $",
          "limits": {
            "title": "Identique à Pro Mensuel",
            "items": [
              "Minutes totales illimitées",
              "Jusqu'à 10 heures / 5 Go par fichier",
              "Téléchargez 50 fichiers à la fois",
              "File d'attente prioritaire"
            ]
          },
          "features": {
            "title": "Tout est gratuit, plus",
            "items": [
              "Horodatages au niveau des mots",
              "Identification avancée des locuteurs",
              "Paragraphes formatés et ponctuation",
              "Soutien prioritaire"
            ]
          },
          "cta": {
            "text": "Minutes illimitées. Vitesse prioritaire. Téléchargements groupés.",
            "button": "Passez Pro"
          },
          "badge": "Meilleur rapport qualité-prix - Économisez 50 %"
        }
      ],
      "disclaimer": "« Illimité » signifie qu'il n'y a pas de plafond mensuel ni de ralentissement artificiel. L'utilisation équitable s'applique à l'automatisation ou à la redistribution abusive."
    },
    ComparisonTable: {
      "header": {
        "title": "Comparer toutes les fonctionnalités",
        "highlighted_text": "Toutes les fonctionnalités",
        "subtitle": "Découvrez précisément ce que vous obtenez avec chaque forfait. Aucune limitation cachée."
      },
      "plans": [
        "Caractéristiques",
        "Gratuit",
        "Pro Mensuel",
        "Pro Annuel"
      ],
      "features": [
        {
          "name": "Prix",
          "values": [
            "0 $/mois",
            {
              "main": "17,99 $/mois",
              "note": "9,99 $ le premier mois"
            },
            {
              "main": "8,99 $/mois",
              "note": "Facturé 107,88 $/an"
            }
          ]
        },
        {
          "name": "Minutes mensuelles",
          "values": ["~2 700 (90/jour)", "Illimité", "Illimité"]
        },
        {
          "name": "Durée maximale du fichier",
          "values": ["30 minutes", "10 heures", "10 heures"]
        },
        {
          "name": "Taille maximale du fichier",
          "values": ["250 Mo", "5 Go", "5 Go"]
        },
        {
          "name": "Téléchargements par lots",
          "values": ["1 fichier", "50 fichiers", "50 fichiers"]
        },
        {
          "name": "Vitesse de traitement",
          "values": ["Standard", "Priorité", "Priorité"]
        },
        {
          "name": "Langues prises en charge",
          "values": ["Plus de 100 langues", "Plus de 100 langues", "Plus de 100 langues"]
        },
        {
          "name": "Traduction",
          "values": ["vrai", "vrai", "vrai"]
        },
        {
          "name": "Identification du locuteur",
          "values": ["Basique", "Avancé (20 locuteurs)", "Avancé (20 locuteurs)"]
        },
        {
          "name": "Horodatages au niveau des mots",
          "values": ["FAUX", "vrai", "vrai"]
        },
        {
          "name": "Paragraphes formatés",
          "values": ["FAUX", "vrai", "vrai"]
        },
        {
          "name": "Formats d'exportation",
          "values": ["Tous les formats", "Tous les formats", "Tous les formats"]
        },
        {
          "name": "Soutien",
          "values": ["E-mail", "Courriel prioritaire", "Courriel prioritaire"]
        },
        {
          "name": "Conservation des données",
          "values": ["30 jours", "Pour toujours", "Pour toujours"]
        }
      ]
    },
    FAQ: {
      "title": "Questions fréquemment posées",
      "titleHighligt": "Questions",
      "items": [
        {
          "q": "politique_illimitée",
          "question": "Est-ce vraiment illimité ?",
          "answer": "Oui ! Les forfaits Pro n'ont pas de limite de minutes mensuelles. Les seules limites sont techniques : durée maximale de 10 heures et taille maximale de 5 Go. Vous pouvez traiter autant de fichiers que nécessaire."
        },
        {
          "q": "plan_change",
          "question": "Puis-je changer de forfait à tout moment ?",
          "answer": "Absolument ! Vous pouvez résilier votre abonnement à tout moment depuis votre tableau de bord. Passez à un forfait supérieur ou inférieur à votre abonnement habituel."
        },
        {
          "q": "méthodes de paiement",
          "question": "Quels modes de paiement acceptez-vous ?",
          "answer": "Nous acceptons toutes les principales cartes de crédit, cartes de débit et PayPal pour des paiements sécurisés et sans tracas."
        },
        {
          "q": "essai_gratuit",
          "question": "Existe-t-il un essai gratuit pour Pro ?",
          "answer": "Oui ! Essayez Pro gratuitement pendant 7 jours, sans carte de crédit. De plus, bénéficiez de 45 % de réduction sur votre premier mois en vous abonnant."
        },
        {
          "q": "rétention_de_fichiers",
          "question": "Combien de temps conservez-vous mes fichiers ?",
          "answer": "Formule gratuite : 30 jours. Formules Pro : illimitées ! Vos relevés de notes sont toujours disponibles sur votre compte."
        },
        {
          "q": "sécurité des données",
          "question": "Qu'en est-il de la sécurité des données ?",
          "answer": "Nous sommes certifiés SOC 2 et utilisons un chiffrement 256 bits. Nous n'utilisons jamais votre contenu pour entraîner nos modèles. Vos données vous appartiennent."
        }
      ]
    },
    CTA: {
      "title": "Prêt à passer à l'illimité ?",
      "subtitle": "Rejoignez plus de 50 000 professionnels qui transcrivent sans limites",
      "button": "Essayez NeverCap gratuitement →",
      "disclaimer": "Aucune carte de crédit requise • Commencez à transcrire en quelques secondes"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Conçu pour",
      heavyUsers: "Utilisateurs intensifs",
      whoActuallyNeed: "Qui a réellement besoin d'un service illimité ?",
      heroSubtitle: "Des podcasteurs avec des années d'attente aux chercheurs avec des centaines d'interviews, découvrez comment les professionnels utilisent NeverCap pour s'affranchir des limites de téléchargement et de temps de réponse.",
      podcasters: {
        title: "Podcasteurs",
        pain: "« Arrêtez de choisir quels épisodes méritent une transcription »",
        description: "Téléchargez l'intégralité de vos archives de podcasts en une seule fois. Générez des notes d'émission, améliorez votre référencement et réutilisez votre contenu sans compter les minutes.",
        benefits: {
          benefit1: "Téléchargez tous les épisodes, pas seulement 3",
          benefit2: "Générer des notes d'émission optimisées pour le référencement",
          benefit3: "Créer des archives consultables",
          benefit4: "Réutiliser dans le contenu du blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Épisodes"
          },
          stat2: {
            number: "200 heures",
            label: "Sauvé"
          },
          stat3: {
            number: "3x",
            label: "Trafic SEO"
          }
        }
      },
      journalists: {
        title: "Journalistes et écrivains",
        pain: "« La pression des délais rencontre les restrictions de téléchargement »",
        description: "Téléchargez tous les entretiens par lots avant la date limite. Recherchez instantanément dans les transcriptions et ne manquez jamais une citation cruciale.",
        benefits: {
          benefit1: "Téléchargement par lots avant les délais",
          benefit2: "Rechercher toutes les interviews à la fois",
          benefit3: "Citations précises avec horodatage",
          benefit4: "Gérer les accents et les langues"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Entretiens/mois"
          },
          stat2: {
            number: "96%",
            label: "Précision"
          },
          stat3: {
            number: "5 minutes",
            label: "Par heure"
          }
        }
      },
      contentCreators: {
        title: "Créateurs de contenu",
        pain: "« L'accessibilité ne devrait pas coûter cher »",
        description: "Sous-titrez l'intégralité de votre chaîne YouTube. Générez des sous-titres en plusieurs langues et améliorez instantanément le référencement de vos vidéos.",
        benefits: {
          benefit1: "Sous-titrer toutes les vidéos à la fois",
          benefit2: "249 traductions linguistiques",
          benefit3: "Fichiers SRT prêts pour YouTube",
          benefit4: "Améliorez le classement SEO de vos vidéos"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Vidéos"
          },
          stat2: {
            number: "100+",
            label: "Langues"
          },
          stat3: {
            number: "249",
            label: "Traductions"
          }
        }
      },
      researchers: {
        title: "Chercheurs et universitaires",
        pain: "« Les données qualitatives ne doivent pas rester en attente »",
        description: "Traitez des études de recherche complètes en une seule fois. Gérez des groupes de discussion, des entretiens et des tables rondes avec une identification parfaite des intervenants.",
        benefits: {
          benefit1: "Traiter les groupes de discussion en masse",
          benefit2: "Identification de 20 locuteurs",
          benefit3: "Exporter vers un logiciel d'analyse",
          benefit4: "Sécurité conforme au RGPD"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Étude"
          },
          stat2: {
            number: "96%",
            label: "Précision du groupe"
          },
          stat3: {
            number: "RGPD",
            label: "Conforme"
          }
        }
      },
      businessTeams: {
        title: "Équipes commerciales",
        pain: "« L'enregistrement des réunions doit être facile »",
        description: "Enregistrez directement vos réunions ou téléchargez des fichiers audio pour une transcription instantanée. Créez des archives consultables à partir d'un nombre illimité de conversations et ne perdez plus jamais vos discussions importantes.",
        benefits: {
          benefit1: "Enregistrement audio direct et transcription",
          benefit2: "Enregistrements de réunions illimités",
          benefit3: "Archives de réunions consultables",
          benefit4: "Téléchargez des fichiers audio instantanément"
        },
        stats: {
          stat1: {
            number: "En direct",
            label: "Enregistrement"
          },
          stat2: {
            number: "Instantané",
            label: "Télécharger"
          },
          stat3: {
            number: "20+",
            label: "Intervenants"
          }
        }
      },
      educators: {
        title: "Éducateurs",
        pain: "« Les vidéos YouTube nécessitent une transcription instantanée »",
        description: "Collez simplement les liens YouTube pour obtenir des transcriptions instantanées et des sous-titres générés automatiquement. Transformez n'importe quelle vidéo éducative en contenu accessible et consultable.",
        benefits: {
          benefit1: "Transcription du lien direct YouTube",
          benefit2: "Générer automatiquement des sous-titres vidéo",
          benefit3: "Transcrire des cours entiers",
          benefit4: "Archives de conférences consultables"
        },
        stats: {
          stat1: {
            number: "1 clic",
            label: "Coller YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Légendes"
          },
          stat3: {
            number: "100+",
            label: "Langues"
          }
        }
      },
      quotes: {
        title: "Utilisateurs réels,",
        titleHighlight: "La vraie liberté",
        subtitle: "Écoutez les témoignages de professionnels qui se sont libérés des limites artificielles",
        testimonials: {
          mike: {
            textBefore: `"J'avais`,
            highlight: "3 ans d'épisodes",
            textAfter: "assis sans transcription. Otter voulait que j'en choisisse 3. TROIS. NeverCap laissez-moi télécharger les 150 épisodes en un week-end.",
            name: "Mike Rodriguez",
            role: "Animateur de podcast"
          },
          jessica: {
            textBefore: "« En tant que journaliste indépendant, je ne peux pas me permettre Trint.",
            highlight: "100 $/mois",
            textAfter: `, mais je ne peux pas non plus travailler avec la limite de 10 fichiers par mois d'Otter. NeverCap a sauvé ma carrière."`,
            name: "Jessica Park",
            role: "Journaliste indépendant"
          },
          sarah: {
            textBefore: "« Notre équipe de recherche avait",
            highlight: "200 heures",
            textAfter: "des enregistrements de groupes de discussion. Nous avons tout traité en un week-end au lieu de rationner les minutes mensuelles.",
            name: "Dr Sarah Chen",
            role: "Chercheur principal"
          },
          carlos: {
            textBefore: '"Je fais du contenu éducatif en espagnol. NeverCap transcrit parfaitement et',
            highlight: "traduit en anglais",
            textAfter: "Pour une portée plus large. Aucune limite, juste de la croissance.",
            name: "Carlos Martinez",
            role: "Éducateur YouTube"
          }
        }
      },
      industries: {
        title: "Approuvé partout",
        titleHighlight: "Industries",
        subtitle: "Les professionnels du monde entier se tournent vers un service véritablement illimité",
        list: {
          media: "Médias et édition",
          education: "Éducation",
          healthcare: "soins de santé",
          technology: "Technologie",
          finance: "Finance",
          legal: "Légal"
        }
      },
      cta: {
        title: "Votre cas d'utilisation a également besoin d'un nombre illimité",
        subtitle: "Rejoignez plus de 50 000 professionnels qui ont arrêté de compter les minutes et ont commencé à créer",
        button: "Commencez votre voyage illimité →"
      }
    },
    Podcasters: {
      badge: "🎙️ Conçu pour les podcasteurs",
      heroTitle: "Transcrivez votre",
      heroTitleHighlight: "Archives complètes du podcast",
      heroSubtitle: "Téléchargez l'intégralité de votre catalogue. Créez des notes pour chaque épisode. Plus besoin de choisir les épisodes à transcrire. Traitez 50 épisodes simultanément, un nombre illimité de fois par mois.",
      ctaPrimary: "Commencez à transcrire gratuitement",
      ctaSecondary: "Découvrez comment cela fonctionne",
      trustBadge1: "🎙️ Plus de 10 000 podcasteurs",
      trustBadge2: "∞ Épisodes illimités",
      trustBadge3: "📝 Transcriptions optimisées pour le référencement",
      stats: {
        stat1: {
          number: "∞",
          label: "Épisodes/mois"
        },
        stat2: {
          number: "50",
          label: "Téléchargement par lots"
        },
        stat3: {
          number: "10 heures",
          label: "Durée maximale de l'épisode"
        },
        stat4: {
          number: "96%",
          label: "Précision"
        }
      },
      problemTitle: "Le",
      problemTitleHighlight: "Problème de transcription de podcast",
      problemSubtitle: "D'autres services vous permettent de choisir quels épisodes « méritent » d'être transcrits",
      problems: {
        problem1: {
          title: "Limites de téléchargement Tuer les archives",
          description: "Otter vous offre 3 importations à vie gratuites, 10 par mois avec la version Pro. Comment transcrire 3 ans d'épisodes ?"
        },
        problem2: {
          title: "Manquer des opportunités de référencement",
          description: "Chaque épisode non transcrit représente une perte de trafic SEO. Mais Descript vous limite à 30 heures par mois au maximum."
        },
        problem3: {
          title: "Les coûts explosent avec la croissance",
          description: "À mesure que votre podcast se développe, les coûts de transcription montent en flèche. Des frais de dépassement de 2 $/heure rendent la mise à l'échelle impossible."
        }
      },
      solutionTitle: "Le",
      solutionTitleHighlight: "NeverCap Solution",
      solutionDescription: "Transcription véritablement illimitée. Importez l'intégralité de vos archives. Transcrivez chaque nouvel épisode. Générez des notes d'émission à grande échelle. Pas de limite, juste de la croissance.",
      workflowTitle: "Votre flux de travail de podcast,",
      workflowTitleHighlight: "Simplifié",
      workflowSubtitle: "De l'enregistrement aux notes d'émission optimisées pour le référencement en quelques minutes",
      workflow: {
        step1: {
          title: "Télécharger des épisodes",
          description: "Diffusez 50 épisodes à la fois. MP3, MP4, WAV - nous les gérons tous."
        },
        step2: {
          title: "L'IA transcrit",
          description: "Précision de 96 % pour l'identification du locuteur. Idéal pour les interviews."
        },
        step3: {
          title: "Formatage intelligent",
          description: "L'IA ajoute automatiquement des paragraphes, des phrases et de la ponctuation."
        },
        step4: {
          title: "Publier et classer",
          description: "Exportez vers votre site web. Voyez votre trafic SEO augmenter."
        }
      },
      featuresTitle: "Fonctionnalités Podcasteurs",
      featuresTitleHighlight: "En fait, j'en ai besoin",
      featuresSubtitle: "Conçu par des podcasteurs, pour des podcasteurs",
      features: {
        feature1: {
          title: "Détection multi-locuteurs",
          description: "Identifie et étiquette automatiquement jusqu'à 20 intervenants. Idéal pour les tables rondes, les interviews et les émissions co-animées."
        },
        feature2: {
          title: "Chapitres d'horodatage",
          description: "Générez des horodatages cliquables pour les descriptions YouTube. Permettez aux auditeurs d'accéder instantanément à leurs segments préférés."
        },
        feature3: {
          title: "Formatage intelligent",
          description: "Ajout automatique de paragraphes, de phrases et de ponctuation. Obtenez des transcriptions claires et lisibles. Gagnez du temps en post-production."
        },
        feature4: {
          title: "Optimisation SEO",
          description: "Transcriptions formatées pour les moteurs de recherche. Boostez la visibilité de votre podcast et touchez de nouveaux publics."
        },
        feature5: {
          title: "Plus de 100 langues",
          description: "Transcrivez dans n'importe quelle langue. Traduisez dans plus de 249 langues. Touchez facilement un public mondial."
        },
        feature6: {
          title: "Traitement par lots",
          description: "Téléchargez 50 épisodes avant de vous coucher. Réveillez-vous et recevez les transcriptions complètes. Traitez toutes vos archives pendant la nuit."
        }
      },
      testimonialsTitle: "Les podcasteurs qui ont fait",
      testimonialsTitleHighlight: "L'interrupteur",
      testimonialsSubtitle: "De vraies histoires de vrais podcasteurs",
      testimonials: {
        mike: {
          text: "Je fais un podcast depuis trois ans et je transcrivais tout manuellement comme un idiot. J'ai mis en ligne six épisodes d'un coup, et ça nous a parfaitement séparés, mon co-animateur et moi. L'épisode du café que je croyais raté ? Transcription parfaitement claire. Je ne recommencerai plus jamais à recopier ce genre de choses moi-même.",
          name: "Mike Rodriguez",
          role: "Animateur du podcast « The Daily Grind »"
        },
        sarah: {
          text: "Otter me limitait à 10 importations de fichiers par mois. J'ai 150 épisodes en attente. NeverCap m'a permis de tout télécharger en 3 lots. Mon trafic organique a augmenté de 300 % depuis que j'ai ajouté des transcriptions aux anciens épisodes. C'est rentable.",
          name: "Sarah Chen",
          role: "Créateur de « Tech Talks Today »"
        }
      },
      comparisonTitle: "Pourquoi les podcasteurs choisissent",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Découvrez comment nous nous comparons à la concurrence",
      comparison: {
        headers: {
          feature: "Fonctionnalité",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Créateur de descripteurs"
        },
        rows: {
          monthlyLimit: {
            feature: "Limite mensuelle d'épisodes",
            nevercap: "Illimité",
            otter: "~13 épisodes (1200 min)",
            descript: "~30 épisodes (30 heures)"
          },
          uploadLimit: {
            feature: "Limite de téléchargement de fichiers",
            nevercap: "Illimité",
            otter: "10 par mois",
            descript: "1 à la fois"
          },
          batchProcessing: {
            feature: "Traitement par lots",
            nevercap: "50 fichiers",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Durée maximale de l'épisode",
            nevercap: "10 heures",
            otter: "90 minutes",
            descript: "Illimité"
          },
          speakerDetection: {
            feature: "Détection du locuteur",
            nevercap: "20 intervenants",
            otter: "16 intervenants",
            descript: "10 intervenants"
          },
          smartFormatting: {
            feature: "Formatage intelligent",
            nevercap: "✓ Parfait",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Prix",
            nevercap: "17,99 $/mois",
            otter: "16,99 $/mois",
            descript: "30 $/mois"
          }
        }
      },
      ctaTitle: "Commencez à transcrire chaque épisode",
      ctaSubtitle: "Rejoignez plus de 10 000 podcasteurs qui ne se soucient jamais des limites",
      ctaButton: "Téléchargez vos 50 premiers épisodes gratuitement →",
      ctaDisclaimer: "Aucune carte de crédit requise • Traitez un nombre illimité d'épisodes • Annulez à tout moment"
    },
    Journalists: {
      hero: {
        badge: "📰 Pour les journalistes et les écrivains",
        title: "Transcrire chaque interview.",
        titleHighlight: "Ne manquez jamais une citation.",
        subtitle: "Ne choisissez plus les interviews qui méritent d'être transcrites. Téléchargez tous vos enregistrements en une seule fois, effectuez des recherches instantanées et respectez vos délais sans vous soucier du téléchargement.",
        ctaPrimary: "Démarrer les téléchargements illimités →",
        ctaSecondary: "Découvrez comment cela fonctionne",
        stats: {
          uploads: {
            number: "∞",
            label: "Téléchargements de fichiers"
          },
          accuracy: {
            number: "96%",
            label: "Précision"
          },
          speed: {
            number: "5 minutes",
            label: "Par heure"
          }
        },
        dashboard: {
          title: "File d'attente pour les entretiens",
          status: "• Tous les traitements",
          interviews: {
            cityCouncil: {
              title: "Réunion du conseil municipal",
              duration: "2h 15min • Téléchargement...",
              action: "Traitement"
            },
            expertInterview: {
              title: "Entretien avec un expert - Dr Chen",
              duration: "45min • Transcription...",
              action: "96% terminé"
            },
            pressConference: {
              title: "Conférence de presse",
              duration: "1h 30min • Prêt",
              action: "Voir →"
            },
            phoneInterview: {
              title: "Entretien téléphonique - Source",
              duration: "35 min • Prêt",
              action: "Voir →"
            }
          }
        }
      },
      problem: {
        title: "Le",
        titleHighlight: "Problème de transcription du journaliste",
        subtitle: "D'autres services vous permettent de choisir les entretiens qui « valent la peine » d'être transcrits",
        problems: {
          uploadLimits: {
            title: "Limites de téléchargement Enquêtes sur les meurtres",
            description: "Otter vous offre 10 importations de fichiers par mois avec la version Pro. Comment transcrire 3 semaines d'interviews d'enquête ?"
          },
          missingQuotes: {
            title: "Citations cruciales manquantes",
            description: "Chaque interview non retranscrite pourrait contenir la citation clé de l'article. Mais Trint vous limite à 50 heures par mois au maximum."
          },
          costExplosion: {
            title: "Les coûts explosent avec les délais",
            description: "À mesure que votre enquête s'approfondit, les coûts de transcription montent en flèche. Des frais de dépassement de 100 $ par mois rendent impossible la diffusion d'informations de dernière minute."
          }
        },
        solution: {
          title: "Le",
          titleHighlight: "NeverCap Solution",
          description: "Transcription illimitée. Téléchargez l'intégralité de votre enquête. Transcrivez chaque interview. Recherchez instantanément toutes les citations. Sans limite, sans limite, juste du journalisme."
        }
      },
      solution: {
        title: "Enfin,",
        titleHighlight: "La vraie liberté",
        titleSuffix: "pour les journalistes",
        subtitle: "Téléchargez tout. Transcrivez tout. Recherchez tout.",
        solutions: {
          unlimitedUploads: {
            label: "Téléchargements illimités",
            title: "Téléchargez par lots l'intégralité de votre enquête",
            description: "Plus besoin de choisir les entretiens à transcrire. Téléchargez 50 fichiers simultanément. Traitez des mois d'enregistrements en une seule fois. Votre enquête intégrale, transcrite.",
            points: {
              simultaneousUpload: "Télécharger 50 fichiers simultanément",
              noLimits: "Aucune limite de téléchargement mensuelle",
              processWhileWrite: "Processus pendant que vous écrivez",
              longRecordings: "Enregistrements de 10 heures pris en charge"
            },
            visual: {
              number: "50",
              label: "Fichiers à la fois"
            }
          },
          instantSearch: {
            label: "Recherche instantanée",
            title: "Trouvez n'importe quel devis en quelques secondes",
            description: "Recherchez instantanément dans tous vos relevés de notes. Trouvez la citation parfaite, datant d'il y a trois mois. Ne perdez plus jamais d'informations importantes dans vos notes.",
            points: {
              searchAll: "Rechercher dans tous les entretiens",
              wordTimestamps: "Horodatages au niveau des mots",
              jumpToMoments: "Accédez directement aux moments précis",
              exportCitations: "Exporter avec des citations"
            },
            searchDemo: {
              placeholder: "déclaration de politique climatique",
              resultsText: "Trouvé dans 4 interviews :",
              results: {
                mayorInterview: "« ...notre politique climatique va transformer... »",
                expertPanel: "« ...la déclaration de politique montre clairement... »"
              }
            }
          },
          professionalAccuracy: {
            label: "Précision professionnelle",
            title: "96 % de précision que vous pouvez citer",
            description: "Obtenez des transcriptions si précises que vous pouvez les citer directement. Gère les accents, les termes techniques et les conversations rapides. Formatage parfait et lisible.",
            points: {
              accuracyGuarantee: "Garantie de précision de 96 %",
              handlesAccents: "Gère les accents et les dialectes",
              smartPunctuation: "Ponctuation et paragraphes intelligents",
              speakerIdentification: "Identification du locuteur"
            },
            visual: {
              accuracy: "96%",
              label: "Taux de précision",
              transcript: {
                speaker1: "« L’enquête a révélé des divergences importantes dans les rapports financiers. »",
                speaker2: "« Pouvez-vous nous donner plus de détails sur ces divergences spécifiques ? »"
              }
            }
          }
        }
      },
      features: {
        title: "Tout ce qui est",
        titleHighlight: "Besoins des journalistes",
        subtitle: "Des outils professionnels qui respectent votre flux de travail",
        featuresList: {
          languages: {
            title: "Plus de 100 langues",
            description: "Interviewez des sources du monde entier dans 12 langues principales avec une précision de 96 %."
          },
          exportFormats: {
            title: "Formats d'exportation",
            description: "Word, PDF, SRT, TXT. Compatible avec tous les flux de travail."
          },
          sourceProtection: {
            title: "Protection de la source",
            description: "Chiffrement de niveau bancaire. Vos sources restent confidentielles."
          },
          timestamps: {
            title: "Horodatages",
            description: "Cliquez sur n’importe quelle citation pour accéder au moment audio exact."
          },
          teamSharing: {
            title: "Partage d'équipe",
            description: "Collaborez avec les éditeurs. Partagez vos transcriptions en toute sécurité."
          },
          mobileReady: {
            title: "Compatible avec les appareils mobiles",
            description: "Téléchargez depuis votre téléphone. Consultez vos transcriptions où que vous soyez."
          },
          smartFormatting: {
            title: "Formatage intelligent",
            description: "Paragraphes et ponctuation automatiques pour des transcriptions lisibles."
          },
          batchProcessing: {
            title: "Traitement par lots",
            description: "Téléchargez 50 fichiers simultanément. Traitez-les pendant la nuit, pendant votre sommeil."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "J'ai passé trois ans à enregistrer des interviews non transcrites à cause des limites de téléchargement. NeverCap Laissez-moi tout traiter en un week-end. Ça a changé la donne.",
          name: "Jessica Park",
          role: "Journaliste indépendant, ancien utilisateur d'Otter"
        }
      },
      cta: {
        title: "Commencer la transcription",
        titleHighlight: "Sans limites",
        subtitle: "Rejoignez des milliers de journalistes qui ont arrêté de compter les téléchargements et ont commencé à se concentrer sur les histoires",
        ctaPrimary: "Essayez gratuitement et en illimité →",
        ctaSecondary: "Voir les tarifs"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Pour les créateurs de contenu",
        title: "Légende Votre",
        titleHighlight: "Chaîne entière",
        titleSuffix: "Sans compter les minutes",
        subtitle: "Ne choisissez plus les vidéos qui méritent des sous-titres. Gérez l'intégralité de votre bibliothèque YouTube, générez des sous-titres dans plus de 100 langues et récupérez vos vidéos directement depuis n'importe quelle plateforme. Aucune limite mensuelle ni restriction de téléchargement : une liberté créative absolue.",
        ctaPrimary: "Démarrer le sous-titrage illimité →",
        ctaSecondary: "Découvrez comment cela fonctionne",
        stats: {
          videos: {
            number: "∞",
            label: "Vidéos/mois"
          },
          languages: {
            number: "100+",
            label: "Langues"
          },
          accuracy: {
            number: "96%",
            label: "Précision"
          },
          platforms: {
            number: "10+",
            label: "Plateformes"
          }
        }
      },
      platforms: {
        title: "Récupérer et transcrire depuis n'importe quelle plateforme",
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
        title: "Tout ce dont vous avez besoin pour",
        titleHighlight: "Contenu de l'échelle",
        subtitle: "Des outils professionnels sans limites professionnelles",
        oneClickImport: {
          label: "Importation en un clic",
          title: "Coller le lien.",
          titleHighlight: "Obtenir la transcription.",
          description: "Plus besoin de télécharger et de re-télécharger. Collez simplement votre lien YouTube, TikTok ou Instagram et obtenez des transcriptions instantanées. Traitez l'intégralité du backlog de votre chaîne en un week-end.",
          points: {
            directYoutube: "Transcription du lien direct YouTube",
            multiplePlatforms: "Récupérez depuis plus de 10 plateformes",
            batchPlaylists: "Traiter par lots des listes de lecture entières",
            autoSync: "Synchronisation automatique avec vos chaînes"
          },
          demo: {
            instruction: "Collez l'URL de votre vidéo :",
            url: "https://youtube.com/watch?v=...",
            status: "Récupération et transcription..."
          }
        },
        globalReach: {
          label: "Portée mondiale",
          title: "Plus de 100 langues.",
          titleHighlight: "Limites zéro.",
          description: "Touchez un public mondial grâce à la traduction automatique dans plus de 100 langues. Générez des sous-titres en plusieurs langues simultanément. Aucun frais supplémentaire ni plafond mensuel de traduction.",
          points: {
            highAccuracy: "96 % de précision dans 12 langues principales",
            unlimitedTranslations: "Traductions illimitées incluses",
            multicultural: "Idéal pour le contenu multiculturel",
            autoDetect: "Détection automatique de la langue source"
          },
          visual: {
            number: "100+",
            title: "Langues prises en charge",
            subtitle: "Traduisez une fois, atteignez tout le monde"
          }
        },
        flexibleExport: {
          label: "Exportation flexible",
          title: "Tous les formats",
          titleHighlight: "Vous avez besoin",
          description: "Exportez au format adapté à votre flux de travail. Des fichiers SRT pour YouTube aux fichiers VTT pour les lecteurs web, en passant par les documents modifiables pour les scripts. Exportations illimitées, incluses dans chaque forfait.",
          points: {
            videoFormats: "SRT et VTT pour plateformes vidéo",
            editingFormats: "DOCX et PDF pour l'édition",
            dataAnalysis: "CSV pour l'analyse des données",
            simpleScripts: "TXT pour les scripts simples"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "SMS",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "Du téléchargement à",
        titleHighlight: "Publié",
        titleSuffix: "en quelques minutes",
        subtitle: "Le moyen le plus rapide de sous-titrer l'intégralité de votre bibliothèque de contenu",
        steps: {
          pasteLinks: {
            title: "Coller des liens",
            description: "Ajoutez un lien YouTube, TikTok ou toute autre vidéo. Ou téléchargez directement des fichiers."
          },
          autoTranscribe: {
            title: "Transcription automatique",
            description: "L'IA traite les données avec une précision de 96 %. Elle gère les accents et les conversations multilingues."
          },
          editTranslate: {
            title: "Modifier et traduire",
            description: "Perfectionnez vos légendes. Traduisez instantanément dans plus de 100 langues."
          },
          exportPublish: {
            title: "Exporter et publier",
            description: "Téléchargez-le dans n'importe quel format. Transférez-le sur votre plateforme. C'est fait !"
          }
        }
      },
      testimonials: {
        title: "Les créateurs sont",
        titleHighlight: "Changement quotidien",
        subtitle: "Des plans limités à la liberté illimitée",
        carlos: {
          textBefore: "Je fais du contenu éducatif en espagnol. NeverCap transcrit parfaitement et",
          textAfter: "Pour une portée plus large. Aucune limite, juste de la croissance. Le nombre de vues sur ma chaîne a triplé après l'ajout de sous-titres multilingues.",
          highlight: "traduit en anglais",
          name: "Carlos Martinez",
          role: "Éducateur YouTube • 250 000 abonnés"
        },
        sarah: {
          textBefore: "Descript voulait 30 $/mois pour",
          textAfter: "J'ai plus de 500 vidéos en attente. NeverCap Laissez-moi tout traiter en un week-end. L'amélioration du référencement grâce aux sous-titres a été rentabilisée dès le premier mois.",
          highlight: "30 heures",
          name: "Sarah Lee",
          role: "Vlogueur lifestyle • 180 000 abonnés"
        },
        jake: {
          textBefore: "Le",
          textAfter: "Cette fonctionnalité change la donne. Je ne télécharge plus rien. Il suffit de coller, de transcrire et c'est tout. Traiter mes podcasts pour TikTok n'a jamais été aussi simple.",
          highlight: "récupération directe sur YouTube",
          name: "Jake Wilson",
          role: "Animateur de podcast • Créateur du top 1%"
        },
        yuki: {
          textBefore: "Je crée du contenu en 5 langues. Autres services payants.",
          textAfter: ". NeverCap me donne accès à des traductions illimitées. Mon audience internationale a augmenté de 400 % depuis que j'utilise des sous-titres natifs.",
          highlight: "par traduction",
          name: "Yuki Tanaka",
          role: "Créateur de jeux • 500 000 abonnés"
        }
      },
      cta: {
        title: "Toute votre chaîne. Sous-titrée. Aujourd'hui.",
        subtitle: "Rejoignez plus de 50 000 créateurs qui ont arrêté de compter les minutes et ont commencé à créer",
        button: "Démarrer le sous-titrage illimité →"
      }
    },
    Researchers: {
      heroBadge: "Conçu pour l'excellence académique",
      heroTitle1: "Transcrire chaque interview.",
      heroTitle2: "Analysez toutes vos données.",
      heroSubtitle: "Ne choisissez plus les groupes de discussion à transcrire. Traitez toutes vos données qualitatives avec une précision de 96 % et une identification parfaite des intervenants, même avec 20 participants qui parlent en même temps.",
      heroCtaPrimary: "Essayez-le gratuitement - Pas de carte de crédit",
      heroCtaSecondary: "Découvrez comment cela fonctionne",
      statsInterviewHours: "Heures d'entretien",
      statsAccuracy: "Précision",
      statsSpeakersId: "ID des intervenants",
      statsCompliant: "Conforme",
      problemTitle: "Le problème de la transcription de la recherche",
      problemSubtitle: "D'autres services vous permettent de choisir quelles données « méritent » d'être transcrites",
      problemCard1Title: "Limites de téléchargement Kill Studies",
      problemCard1Desc: "Otter vous offre 3 importations à vie. Comment transcrire 200 heures de groupes de discussion ?",
      problemCard2Title: "Données critiques manquantes",
      problemCard2Desc: "Chaque interview non transcrite pourrait contenir des informations révolutionnaires. Mais Rev facture un minimum de 2 $ la minute.",
      problemCard3Title: "L'argent des subventions disparaît",
      problemCard3Desc: "À mesure que votre ensemble de données augmente, les coûts de transcription explosent. 500 $ par groupe de discussion rendent la mise à l'échelle impossible.",
      solutionTitle: "La solution NeverCap",
      solutionDesc: "Transcription illimitée. Téléchargez l'intégralité de votre étude. Transcrivez chaque entretien. Analysez toutes vos données. Sans limite, juste de la recherche.",
      feature1Label: "Aucune limite",
      feature1Title: "Traitez l'intégralité de votre étude en une seule fois",
      feature1Desc: "Téléchargez vos 200 heures d'entretiens ce soir. Profitez de transcriptions complètes et consultables dès votre réveil. Pas de plafond mensuel, pas de limite par fichier, pas de « fair use » (utilisation équitable).",
      feature1Point1: "Téléchargement par lots de 50 fichiers simultanément",
      feature1Point2: "Traiter complètement les études longitudinales",
      feature1Point3: "Aucune limite de stockage sur les transcriptions",
      feature1Point4: "Exporter vers NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Heures illimitées",
      feature1Visual2: "Même prix que ce soit pour 10 ou 10 000 heures",
      feature2Label: "IA intelligente",
      feature2Title: "Groupes de discussion sur les ongles à chaque fois",
      feature2Desc: "Notre IA suit jusqu'à 20 intervenants, même lorsqu'ils parlent en même temps, se coupent la parole ou interviennent tous simultanément. Chaque voix est enregistrée et correctement étiquetée.",
      feature2Point1: "Identification de 20 locuteurs",
      feature2Point2: "Gère la diaphonie et les interruptions",
      feature2Point3: "Étiquettes des haut-parleurs que vous pouvez renommer",
      feature2Point4: "Horodatage pour chaque mot",
      conversationParticipant1: "Participant 1",
      conversationText1: "Le principal obstacle auquel nous sommes confrontés est certainement le coût du traitement...",
      conversationParticipant2: "Participant 2",
      conversationText2: "Absolument, mais j’ajouterais que l’accès est…",
      conversationParticipant3: "Participant 3",
      conversationText3: "—Désolé de vous interrompre, mais le transport est également un sujet important.",
      conversationText4: "Oui ! C'est exactement ce que j'allais dire.",
      conversationParticipant4: "Participant 4",
      conversationText5: "Dans les zones rurales, c'est les trois : le coût, l'accès ET le transport.",
      feature3Label: "Précision",
      feature3Title: "96 % de précision qui tient le coup",
      feature3Desc: "Maîtrise le jargon technique, les accents prononcés et la terminologie spécifique à son domaine comme un pro. Suffisamment précis pour la publication, l'évaluation par les pairs et votre comité de thèse.",
      feature3Point1: "Terminologie médicale et scientifique",
      feature3Point2: "Plus de 100 langues et dialectes",
      feature3Point3: "Modes de lecture verbatim et propre",
      feature3Point4: "Modifiez et exportez dans n'importe quel format",
      feature3Visual1: "Précision de niveau recherche",
      feature3Visual2: "Plus de 50 000 chercheurs nous font confiance",
      feature4Label: "Sécurité",
      feature4Title: "Sécurité prête pour l'IRB",
      feature4Desc: "Vos données de recherche sensibles sont protégées par une sécurité de niveau entreprise. Conformité au RGPD, options compatibles HIPAA et pistes d'audit complètes pour les exigences IRB.",
      feature4Point1: "Chiffrement de bout en bout",
      feature4Point2: "Conforme au RGPD et au CCPA",
      feature4Point3: "Politiques de suppression automatique",
      feature4Point4: "Collaboration d'équipe sécurisée",
      useCasesTitle: "Parfait pour chaque méthode de recherche",
      useCasesSubtitle: "De l'ethnographie aux essais cliniques",
      useCase1Title: "Groupes de discussion",
      useCase1Desc: "Gérez 8 à 20 participants avec des discours qui se chevauchent. Identification parfaite des intervenants, même lors de discussions animées. Exportez directement vers un logiciel d'analyse qualitative.",
      useCase2Title: "Entretiens approfondis",
      useCase2Desc: "Traitez des centaines d'entretiens individuels simultanément. Assurez la cohérence de l'ensemble de vos données. Effectuez des recherches instantanées dans toutes les transcriptions.",
      useCase3Title: "Recherche clinique",
      useCase3Desc: "Options conformes à la loi HIPAA pour les entretiens avec les patients. Transcription précise de la terminologie médicale. Traitement sécurisé des données de santé sensibles.",
      useCase4Title: "études ethnographiques",
      useCase4Desc: "Enregistrements de terrain en milieu naturel. Gestion du bruit de fond et des intervenants multiples. Prise en charge de plus de 100 langues et dialectes.",
      useCase5Title: "Projets d'histoire orale",
      useCase5Desc: "Préservez des archives entières sans limites. Créez des documents historiques consultables. Idéal pour les études longitudinales et générationnelles.",
      useCase6Title: "Recherche de thèse",
      useCase6Desc: "Tarifs adaptés aux étudiants avec fonctionnalités complètes. Traitez l'intégralité de vos données à moindre coût. Respectez les délais serrés grâce au traitement par lots.",
      testimonialTitle: "Approuvé par les plus grands chercheurs",
      testimonialText: "Notre équipe de recherche disposait de 200 heures d'enregistrements de groupes de discussion issus de notre étude de santé communautaire. D'autres services nous demandaient de choisir les séances à transcrire en raison du coût. NeverCap nous a permis de tout traiter en un week-end. L'identification des 20 locuteurs a fonctionné, même lors de nos discussions les plus tumultueuses, où tout le monde parlait en même temps. Cet outil a complètement révolutionné notre façon de traiter les données qualitatives.",
      testimonialAuthorName: "Dr Sarah Chen",
      testimonialAuthorRole: "Chercheur principal, Institut de santé publique",
      ctaTitle: "Arrêtez de choisir les données à analyser",
      ctaSubtitle: "Rejoignez plus de 50 000 chercheurs qui transcrivent tout",
      ctaButton: "Essayez NeverCap gratuitement"
    },
    BusinessTeams: {
      heroBadge: "Pour les équipes commerciales",
      heroTitle1: "Enregistrement de la réunion réalisé",
      heroTitle2: "Sans effort",
      heroSubtitle: "Enregistrez vos réunions directement dans votre navigateur ou téléchargez instantanément des fichiers audio. Créez des archives consultables à partir d'un nombre illimité de conversations. Ne perdez plus jamais vos discussions importantes grâce à la transcription véritablement illimitée.",
      heroCtaPrimary: "Commencer l'enregistrement maintenant →",
      heroCtaSecondary: "Découvrez comment cela fonctionne",
      recordingStatus: "Enregistrement...",
      statsMeetingMinutes: "Procès-verbal de la réunion",
      statsLiveRecording: "Enregistrement en direct",
      statsSpeakerID: "ID du locuteur",
      statsInstantUpload: "Téléchargement et traitement instantanés",
      featuresTitle: "Tout ce dont les équipes ont besoin pour capturer les connaissances",
      featuresSubtitle: "De l'enregistrement en direct aux téléchargements instantanés, nous avons éliminé tous les points de friction",
      feature1Title: "Enregistrez directement dans votre navigateur",
      feature1Desc: "Aucun téléchargement, aucun plugin. Enregistrez instantanément en un clic. Qualité audio parfaite, détection automatique du locuteur et transcription en temps réel pendant que vous parlez.",
      feature1Benefit1: "Démarrage de l'enregistrement en un clic",
      feature1Benefit2: "Aucune installation de logiciel",
      feature1Benefit3: "Fonctionne sur n'importe quel appareil",
      feature1Benefit4: "Transcription en temps réel",
      feature1Visual1: "Cliquez et enregistrez",
      feature1Visual2: "Aucune configuration requise",
      feature2Title: "Téléchargez n'importe quel fichier audio instantanément",
      feature2Desc: "Vous avez des enregistrements Zoom, Teams ou votre téléphone ? Téléchargez-les instantanément. Prise en charge de tous les principaux formats audio et vidéo. Traitez plusieurs fichiers simultanément sans attente.",
      feature2Benefit1: "Prise en charge : MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Capacité de téléchargement par lots",
      feature2Benefit3: "Fichiers de 10 heures pris en charge",
      feature2Benefit4: "Traiter pendant que vous travaillez",
      feature2Visual1: "Glisser-déposer des fichiers",
      feature3Title: "Conçu pour la collaboration en équipe",
      feature3Desc: "Partagez instantanément les transcriptions avec votre équipe. Écoutez les enregistrements ensemble, exportez les transcriptions dans plusieurs formats et assurez-vous que tout le monde reste connecté grâce aux archives de réunion consultables.",
      feature3Benefit1: "Partagez vos transcriptions avec n'importe qui",
      feature3Benefit2: "Écoutez les enregistrements originaux",
      feature3Benefit3: "Exporter des transcriptions dans plusieurs formats",
      feature3Benefit4: "Archives consultables à l'échelle de l'équipe",
      feature3Visual1: "Membres de l'équipe",
      feature3Visual2: "Collaboration illimitée",
      feature4Title: "Trouvez n'importe quelle conversation instantanément",
      feature4Desc: "Effectuez une recherche simultanée dans toutes vos réunions. Retrouvez une décision cruciale du trimestre précédent ou une exigence client datant de plusieurs mois. La recherche assistée par IA comprend le contexte, et pas seulement les mots-clés.",
      feature4Benefit1: "Rechercher toutes les réunions à la fois",
      feature4Benefit2: "L'IA comprend le contexte",
      feature4Benefit3: "Filtrer par intervenant ou par date",
      feature4SearchPlaceholder: "🔍 Recherche : « Objectifs de revenus du quatrième trimestre »",
      feature4SearchResults: "Trouvé dans 3 réunions :",
      feature4Meeting1: "Planification des ventes - 15 octobre",
      feature4Meeting1Text: "« ...objectifs pour le quatrième trimestre fixés à 2 millions de dollars... »",
      feature4Meeting2: "Réunion du conseil d'administration - 20 octobre",
      feature4Meeting2Text: "« ...projections de revenus pour le quatrième trimestre... »",
      workflowTitle: "De l'enregistrement aux informations exploitables",
      workflowSubtitle: "Un flux de travail fluide qui capture chaque moment important",
      workflowStep1Title: "Enregistrer ou télécharger",
      workflowStep1Desc: "Commencez à enregistrer en direct ou téléchargez des fichiers audio existants",
      workflowStep2Title: "Transcription automatique",
      workflowStep2Desc: "L'IA transcrit avec une précision de 96 % en quelques minutes",
      workflowStep3Title: "Collaborer",
      workflowStep3Desc: "Partagez, commentez et extrayez des éléments d'action",
      workflowStep4Title: "Rechercher et analyser",
      workflowStep4Desc: "Trouvez des informations sur toutes vos réunions",
      testimonialsTitle: "Les équipes aiment NeverCap",
      testimonialsSubtitle: "Découvrez comment les entreprises transforment leur culture de réunion",
      testimonial1Text: "« Nous sommes passés de détails cruciaux manquants à une archive consultable de chaque conversation. Grâce à la fonction d'enregistrement direct, nous n'oublions jamais les discussions importantes. »",
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Chef de produit, TechCorp",
      testimonial2Text: "Otter nous a limité à 10 téléchargements de fichiers par mois. Désormais, nous téléchargeons instantanément tous les appels de nos clients. Un véritable changement pour le suivi de notre équipe commerciale.",
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Directeur des ventes, ConsultPro",
      testimonial3Text: "« La possibilité de rechercher des informations sur plusieurs mois de réunions nous a sauvés lors de notre audit. Nous avons retrouvé chaque décision et chaque approbation en quelques secondes. »",
      testimonial3AuthorName: "Marc Liu",
      testimonial3AuthorRole: "Directeur de l'exploitation, FinanceHub",
      ctaTitle: "Arrêtez de perdre des conversations importantes",
      ctaSubtitle: "Rejoignez des milliers d'équipes qui capturent chaque réunion avec une transcription illimitée",
      ctaButton: "Commencez à enregistrer gratuitement →"
    },
    Educators: {
      heroBadge: "Pour les éducateurs et les enseignants",
      heroTitle1: "Transformez n'importe quelle vidéo éducative en",
      heroTitle2: "Contenu accessible",
      heroSubtitle: "Collez simplement les liens YouTube pour obtenir des transcriptions instantanées avec sous-titres générés automatiquement. Transformez vos cours, tutoriels et vidéos pédagogiques en contenu consultable et accessible à tous les étudiants.",
      heroCtaPrimary: "Essayez-le gratuitement - Pas de carte de crédit",
      heroCtaSecondary: "Regarder la démo",
      stats1Number: "1 clic",
      stats1Label: "Transcription YouTube",
      stats2Number: "100+",
      stats2Label: "Langues prises en charge",
      stats3Number: "∞",
      stats3Label: "Vidéos illimitées",
      stats4Number: "96%",
      stats4Label: "Taux de précision",
      featuresTitle: "Tout ce dont les enseignants ont besoin pour la transcription vidéo",
      featuresSubtitle: "Des conférences YouTube aux cours enregistrés, rendez tout votre contenu accessible",
      feature1Title: "Liens instantanés vers YouTube et la plateforme",
      feature1Desc: "Collez simplement le lien de votre vidéo et obtenez une transcription instantanée. Compatible avec YouTube, Vimeo, Facebook, Twitter, TikTok, Instagram, Dropbox, Google Drive et bien plus encore. Pas de téléchargement, pas d'attente.",
      feature1Point1: "Transcription par lien direct - aucun téléchargement nécessaire",
      feature1Point2: "Prise en charge de toutes les principales plates-formes",
      feature1Point3: "Traiter des listes de lecture entières à la fois",
      feature1Point4: "Fonctionne avec des vidéos privées (avec autorisation)",
      feature2Title: "Générer automatiquement des légendes et des sous-titres",
      feature2Desc: "Créez instantanément des sous-titres précis pour toutes vos vidéos éducatives. Rendez le contenu accessible aux élèves malentendants, aux locuteurs non natifs ou à ceux qui préfèrent lire en accompagnement.",
      feature2Point1: "Formats d'exportation SRT, VTT et TXT",
      feature2Point2: "Horodatages au niveau des mots pour une synchronisation parfaite",
      feature2Point3: "Modifiez et personnalisez facilement les sous-titres",
      feature2Point4: "Télécharger directement sur YouTube",
      feature2Visual1: "Traductions linguistiques",
      feature2Visual2: "Rendez votre contenu accessible à l'échelle mondiale",
      feature3Title: "Organiser par cours et catégories",
      feature3Desc: "Créez des dossiers pour organiser vos relevés de notes par cours, matière ou semestre. Classez soigneusement tout votre contenu pédagogique et facilitez les recherches. Créez une bibliothèque complète de supports de cours accessibles.",
      feature3Point1: "Créez des dossiers et sous-dossiers illimités",
      feature3Point2: "Étiquetez les vidéos par sujet ou par niveau de difficulté",
      feature3Point3: "Organiser en masse plusieurs transcriptions",
      feature3Point4: "Recherchez instantanément dans tout votre contenu",
      feature3VisualTitle: "Votre bibliothèque de cours",
      feature3Folder1: "Mathématiques 101",
      feature3Folder2: "Cours de physique",
      feature3Folder3: "Vidéos de laboratoire de biologie",
      feature3Folder4: "Documentaires historiques",
      feature3Folder5: "Apprentissage des langues",
      feature4Title: "Exportez dans le format dont vous avez besoin",
      feature4Desc: "Téléchargez des relevés de notes aux formats TXT, DOCX ou PDF. Idéal pour créer des guides d'étude, des notes de cours ou des supports de cours accessibles. Partagez-les avec vos étudiants ou intégrez-les à votre plateforme de gestion de l'apprentissage.",
      feature4Point1: "TXT pour une édition de texte simple",
      feature4Point2: "DOCX pour les documents formatés",
      feature4Point3: "PDF pour un partage et une impression faciles",
      feature4Point4: "Exporter en masse plusieurs fichiers à la fois",
      workflowTitle: "Comment ça marche",
      workflowSubtitle: "Du lien vidéo à la transcription accessible en quelques minutes",
      workflowStep1Title: "Coller le lien",
      workflowStep1Desc: "Copiez l'URL de n'importe quelle vidéo éducative et collez-la",
      workflowStep2Title: "Transcription automatique",
      workflowStep2Desc: "L'IA transcrit avec une précision de 96 %",
      workflowStep3Title: "Générer des sous-titres",
      workflowStep3Desc: "Créez automatiquement des sous-titres parfaitement synchronisés",
      workflowStep4Title: "Partager et exporter",
      workflowStep4Desc: "Téléchargez ou partagez avec les étudiants",
      useCasesTitle: "Parfait pour tous les besoins éducatifs",
      useCasesSubtitle: "Découvrez comment les enseignants utilisent NeverCap pour améliorer l'apprentissage",
      useCase1Title: "Conférences enregistrées",
      useCase1Text: "Transcrivez des semestres entiers de cours enregistrés. Les étudiants peuvent rechercher des sujets spécifiques, revoir les concepts clés et ne manquer aucune information importante.",
      useCase2Title: "Cours en ligne",
      useCase2Text: "Rendez vos cours en ligne accessibles aux étudiants internationaux grâce à des traductions dans plus de 100 langues. Augmentez les inscriptions et la satisfaction.",
      useCase3Title: "Matériel d'étude",
      useCase3Text: "Convertissez vos tutoriels vidéo en guides d'étude lisibles. Idéal pour les étudiants qui préfèrent lire ou qui ont besoin de réviser rapidement.",
      useCase4Title: "Conformité en matière d'accessibilité",
      useCase4Text: "Répondez aux exigences d'accessibilité en fournissant des sous-titres et des transcriptions pour tous les contenus vidéo. Assurez l'égalité d'accès pour tous les étudiants.",
      useCase5Title: "Classe inversée",
      useCase5Text: "Partagez des cours vidéo avec transcription avant le cours. Les étudiants peuvent réviser à leur rythme et venir préparés aux discussions.",
      useCase6Title: "Recherche et citations",
      useCase6Text: "Aidez les étudiants à citer leurs sources vidéo avec précision grâce à l'horodatage. Idéal pour les projets de recherche et les travaux universitaires.",
      testimonialTitle: "Plus de 50 000 enseignants nous font confiance",
      testimonialSubtitle: "Découvrez pourquoi les enseignants du monde entier choisissent NeverCap",
      testimonialText: "J'utilise NeverCap pour transcrire l'intégralité de mes tutoriels de mathématiques sur ma chaîne YouTube. Ce qui prenait des semaines avec d'autres services prend désormais des heures. La possibilité de coller des liens directement et d'obtenir des transcriptions instantanées a transformé ma façon de créer du contenu accessible. Mes étudiants internationaux apprécient particulièrement les sous-titres multilingues !",
      testimonialAuthorName: "Professeure Karen Mitchell",
      testimonialAuthorRole: "Professeur de mathématiques, éducateur en ligne",
      ctaTitle: "Rendez tout votre contenu éducatif accessible",
      ctaSubtitle: "Rejoignez des milliers d'éducateurs utilisant une transcription véritablement illimitée",
      ctaButton: "Essayez NeverCap gratuitement"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Télécharger des vidéos YouTube au format MP4",
        "placeholder": "Recherchez ou collez votre lien Youtube ici",
        "clear_icon": "Effacer les entrées",
        "Download": "Télécharger",
        "loading_text": "Traitement du lien de téléchargement. Restez sur la page.",
        "howToDownload": "Comment télécharger ?",
        "tutorial": "Regardez le tutoriel"
      },
      part2: {
        "title": "Voici comment transformer une vidéo YouTube en un fichier MP4 téléchargeable en 3 étapes faciles",
        "steps": [
          {
            title: "Copier l'URL",
            content: "Ouvrez votre vidéo YouTube cible, puis copiez le lien depuis la barre d’adresse de votre navigateur."
          },
          {
            title: "Collez le lien",
            content: "Accédez à votre outil de téléchargement de vidéos et collez l’URL dans son champ de saisie."
          },
          {
            title: "Télécharger le MP4",
            content: "Une fois traité, appuyez sur le bouton de téléchargement pour enregistrer votre fichier MP4."
          }
        ]
      },
      part3: {
        content: [
          "Avez-vous déjà eu besoin de regarder des vidéos YouTube hors ligne ?",
          "Que vous soyez en déplacement en métro, en avion, en train de suivre un tutoriel essentiel, de vous plonger dans un contenu destiné à développer vos compétences ou d'archiver des vidéos importantes, disposer d'un accès hors ligne fiable est souvent source de frustration. C'est là que notre téléchargeur prend tout son sens.",
          "Ce téléchargeur vous permet de convertir rapidement et facilement des vidéos YouTube au format MP4 pour les télécharger. Enregistrez-les sur votre appareil et regardez-les à tout moment.",
          "Le processus est rapide, simple et sans tracas. Une fois téléchargées, profitez de vos vidéos préférées où et quand vous le souhaitez, sans connexion Internet."
        ]
      },
      part4: {
        content: ["Voici les 5 principaux avantages du téléchargement", "Vidéos YouTube au format MP4"],
        list: [
          {
            title: "Économisez sur les coûts de données :",
            content: "Regarder des vidéos sur YouTube consomme généralement beaucoup de données mobiles. En les téléchargeant pour les visionner hors ligne, vous pouvez éviter ces frais inutiles."
          },
          {
            title: "Regardez n'importe où, n'importe quand :",
            content: "Profitez de vos vidéos en toute fluidité, même avec une connexion internet instable. Finis les soucis de mise en mémoire tampon."
          },
          {
            title: "Archivage et conservation faciles :",
            content: "L'enregistrement de vidéos au format MP4 simplifie la création de votre collection personnelle, en particulier pour le contenu que vous trouvez vraiment précieux ou important."
          },
          {
            title: "Partage plus simple :",
            content: "Partager un fichier MP4 est bien plus pratique que d'envoyer un lien. Vous pouvez envoyer le fichier vidéo directement via des applications comme WhatsApp ou Instagram, éliminant ainsi l'étape supplémentaire d'ouverture de YouTube."
          },
          {
            title: "Visionnage instantané, moments partagés :",
            content: "Vous êtes impatient de montrer votre vidéo préférée à vos amis ou à votre famille ? Une fois le fichier MP4 téléchargé, vous pouvez le regarder tous ensemble, sans interruption gênante."
          }
        ]
      },
      part5: {
        title: "Pourquoi notre téléchargeur se démarque",
        cards: [
          {
            title: "La simplicité en un clic",
            content: "Installation sans effort et fonctionnement intuitif."
          },
          {
            title: "Ultra-rapide, illimité",
            content: "Convertissez et téléchargez à une vitesse maximale — sans plafond, sans limite."
          },
          {
            title: "Convertissez à la volée",
            content: "Traitez vos fichiers instantanément, aucune attente requise."
          },
          {
            title: "Zéro publicité, zéro distraction",
            content: "Profitez d'une interface claire sans fenêtres contextuelles, bannières ou interruptions, juste une conversion vidéo transparente."
          },
          {
            icon: "5",
            color: "#DEE5FF",
            title: "Qualité originale garantie",
            content: "Vos téléchargements conservent la pleine résolution de la vidéo source pour une lecture parfaite au pixel près à chaque fois."
          },
          {
            icon: "6",
            color: "#DEF6EE",
            title: "Fonctionne partout",
            content: "Entièrement compatible avec n'importe quel navigateur, sur n'importe quel appareil."
          }
        ]
      },
      part6: {
        title: ["Maximisez vos téléchargements de vidéos YouTube", "Avec le téléchargeur"],
        content: [
          "Conversion YouTube en MP4 sans effort : rapide, simple et gratuite.",
          "C'est là que nous excellons. Notre interface conviviale est conçue pour tous ; aucune compétence technique n'est requise. Quel que soit votre niveau d'expérience, vous pouvez convertir des vidéos instantanément. Aucune inscription requise : obtenez immédiatement ce dont vous avez besoin.",
          "Soyez rassuré : vos MP4 téléchargés conservent la qualité et la clarté de la vidéo d'origine, exactement comme vous les avez regardés sur YouTube.",
          "Fonctionne partout. Entièrement compatible avec les principales plateformes et appareils. Que vous utilisiez Windows, macOS, Linux, Android ou iOS, que vous utilisiez un smartphone, une tablette ou un ordinateur, téléchargez des vidéos en toute simplicité."
        ]
      },
      part7: {
        title: "Questions clés sur le téléchargement de vidéos YouTube",
        list: [
          {
            question: "Puis-je télécharger une vidéo YouTube si elle est protégée par des droits d’auteur ?",
            answer: "Le téléchargement de vidéos YouTube protégées par des droits d'auteur sans l'autorisation du titulaire des droits d'auteur est illégal."
          },
          {
            question: "Cet outil de téléchargement est-il sûr ?",
            answer: "Oui, c'est sûr et fiable. Nous ne demandons aucune information personnelle aux utilisateurs et prenons des mesures strictes contre les virus. Nous vous rappelons de toujours faire preuve de prudence lorsque vous téléchargez des fichiers sur Internet : évitez de cliquer sur des liens suspects ou de télécharger des fichiers douteux."
          },
          {
            question: "Quelles langues le téléchargement YouTube vers MP4 prend-il en charge ?",
            answer: "Notre service prend en charge le téléchargement de vidéos YouTube dans toutes les langues populaires."
          },
          {
            question: "Quels facteurs affectent le temps nécessaire au téléchargement d’une vidéo YouTube ?",
            answer: "Bien que nous garantissions l'expérience de téléchargement la plus rapide possible, le temps de téléchargement est également affecté par des facteurs tels que la durée de la vidéo et la vitesse de votre connexion Internet."
          },
          {
            question: "Lorsque je télécharge une vidéo MP4 avec mon smartphone, où est-elle enregistrée ?"
          },
          {
            question: "Le téléchargement d’une vidéo YouTube au format MP4 réduit-il la qualité de la vidéo ?",
            answer: "Non. Le téléchargement de vidéos YouTube au format MP4 avec notre outil conserve la qualité vidéo d'origine. La conversion préserve la qualité source, vous garantissant ainsi une expérience de visionnage identique à celle de YouTube."
          }
        ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Technologie d'IA de pointe",
      "title": "À propos",
      "highlighted_text": "NeverCap",
      "description": "Notre mission est de fournir des services de transcription audio et vidéo d'une précision exceptionnelle. Grâce à une technologie d'IA de pointe, nous atteignons des taux de précision de transcription supérieurs à 96 %. Pour certaines langues majeures, grâce à l'optimisation technique, nous pouvons même atteindre 99 % de précision."
    },
    Stats: {
      "title": "Notre",
      "highlighted_text": "Impact",
      "subtitle": "Renforcer la communication mondiale grâce à une technologie d'IA de pointe",
      "metrics": [
        {
          "value": "96%+",
          "label": "Taux de précision",
          "description": "Précision de transcription à la pointe de l'industrie grâce à l'IA avancée"
        },
        {
          "value": "100+",
          "label": "Langues prises en charge",
          "description": "Reconnaissance de mots parlés pour le contenu mondial"
        },
        {
          "value": "249+",
          "label": "Langues de traduction",
          "description": "Traduire un texte transcrit dans pratiquement n'importe quelle langue"
        }
      ]
    },
    Mission: {
      "title": "Pourquoi choisir",
      "highlighted_text": "NeverCap",
      "subtitle": "Nous croyons qu'il faut briser les barrières linguistiques et rendre le contenu accessible à tous",
      "features": [
        {
          "icon": "🎯",
          "title": "Précision inégalée",
          "description": "Nos modèles d'IA sont continuellement affinés pour offrir des taux de précision de transcription dépassant 96 %, certaines langues majeures atteignant jusqu'à 99 % de précision grâce à une optimisation avancée."
        },
        {
          "icon": "🌍",
          "title": "Prise en charge linguistique mondiale",
          "description": "Prise en charge de plus de 100 langues dans la reconnaissance de mots parlés et capacités de traduction pour plus de 249 langues, rendant votre contenu véritablement mondial."
        },
        {
          "icon": "⚡",
          "title": "Traitement ultra-rapide",
          "description": "Traitez des heures de contenu audio et vidéo en quelques minutes, et non en heures. Notre pipeline d'IA optimisé vous garantit des transcriptions rapides, sans compromis sur la qualité."
        },
        {
          "icon": "🔒",
          "title": "Sécurité de niveau entreprise",
          "description": "La sécurité de vos données est notre priorité. Nous utilisons un chiffrement conforme aux normes du secteur et respectons les réglementations internationales en matière de confidentialité pour garantir la sécurité et la confidentialité de votre contenu."
        }
      ]
    },
    Company: {
      "title": "Entreprise",
      "highlighted_text": "Information",
      "subtitle": "Contactez-nous pour toute question ou assistance",
      "details": [
        {
          "label": "Nom de l'entreprise",
          "value": "SCRIBIFY AI INC"
        },
        {
          "label": "Quartier général",
          "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "États-Unis"]
        },
        {
          "label": "Contactez-nous",
          "value": ["e-mail", "Assistance disponible 24h/24 et 7j/7"]
        }
      ]
    },
    CTA: {
      "title": "Prêt à découvrir la différence ?",
      "subtitle": "Rejoignez des milliers de professionnels qui font confiance à NeverCap pour leurs besoins de transcription",
      "button": "Essayez NeverCap gratuitement →",
      "disclaimer": "Aucune carte de crédit requise • Commencez à transcrire en quelques secondes"
    }
  },
  Privacy: {
    title: "Confidentialité",
    titleGradient: "Politique",
    subtitle: "Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles",
    "lastUpdated": "Dernière mise à jour : {date}",
    "lastUpdatedDate": "21 juillet 2025",
    "privacyPolicyTitle": "politique de confidentialité",
    "policyDescription": 'Cette politique décrit comment NeverCap (ci-après dénommé \"NeverCap\", \"notre\", \"nous\", \"nos\") collecte, utilise et divulgue vos informations personnelles lorsque vous utilisez nos services, sites Web (https://www.nevercap.ai/) et logiciels (collectivement, les \"Services\").',
    "policyAgreement": "Veuillez lire attentivement cette Politique de confidentialité et vous assurer de bien la comprendre. En utilisant l'un de nos Services, vous acceptez cette Politique de confidentialité. Si vous n'acceptez pas que nous utilisions vos données personnelles conformément à cette Politique, vous devez cesser immédiatement d'utiliser nos Services.",
    "policyOverview": "Dans cette politique, nous expliquons : quelles données nous collectons et pourquoi ; comment vos données sont traitées ; et vos droits concernant vos données. Nous ne vendons pas vos données.",
    "scopeTitle": "1. Portée de la présente politique de confidentialité",
    "scopeDescription": "La présente Politique de confidentialité s'applique uniquement à la collecte et au traitement des informations concernant les utilisateurs des Services. Elle ne s'applique pas aux services, sites web ou logiciels exploités par des tiers liés à nous (que nous fournissions ces liens ou que d'autres utilisateurs les partagent), ni aux contenus, données, applications ou documents de tiers. Nous vous conseillons de consulter les politiques de confidentialité de tout site web ou logiciel tiers avant de leur fournir des informations.",
    "collectionTitle": "2. Ce que nous collectons et pourquoi",
    "collectionPrinciple": "Notre principe directeur est de ne collecter que ce dont nous avons besoin. Voici ce que cela signifie concrètement :",
    "identityTitle": "2.1 Identité et accès",
    "identityDescription": "Lorsque vous vous inscrivez à l'un de nos produits, nous vous demandons des informations d'identification telles que votre nom et votre adresse e-mail. Ces informations nous permettent de bénéficier des fonctionnalités essentielles du produit et de vous envoyer des mises à jour et d'autres informations essentielles.",
    "billingTitle": "2.2 Informations de facturation",
    "billingDescription": "Si vous souscrivez à un produit payant, vous serez invité à fournir vos informations de paiement et votre adresse de facturation. Ces informations sont transmises directement à notre processeur de paiement et ne transitent pas par nos serveurs.",
    "productInteractionsTitle": "2.3 Interactions avec les produits",
    "productInteractionsDescription": "Nous stockons sur nos serveurs le contenu que vous téléchargez, recevez ou conservez dans vos comptes produits. Sauf si vous supprimez ce contenu, nous pouvons le conserver tant que votre compte est actif.",
    "websiteInteractionsTitle": "2.4 Interactions sur le site Web",
    "websiteInteractionsDescription": "Nous collectons des informations sur votre navigation à des fins d'analyse et de statistiques, telles que les tests de taux de conversion et l'expérimentation de nouveaux produits. Ces informations incluent, par exemple, les versions de votre navigateur et de votre système d'exploitation, votre adresse IP, les pages web que vous avez consultées et leur temps de chargement, ainsi que le site web qui vous a redirigé vers nous. Si vous possédez un compte et êtes connecté, ces données d'analyse web sont liées à votre adresse IP et à votre compte utilisateur jusqu'à la désactivation de votre compte.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Nous utilisons également des cookies persistants propriétaires et certains cookies tiers pour stocker certaines préférences, faciliter l'utilisation de nos applications et effectuer des tests A/B ainsi que prendre en charge certaines analyses.",
    "cookiesDescription2": "Un cookie est un fichier texte stocké par votre navigateur. Il peut mémoriser vos informations de connexion et vos préférences de navigation. Il peut également collecter des informations telles que votre type de navigateur, votre système d'exploitation, les pages web consultées, la durée de votre visite, le contenu consulté et d'autres données relatives à votre parcours de navigation. Vous pouvez configurer les paramètres de conservation des cookies et accepter ou bloquer des cookies individuels dans les paramètres de votre navigateur. Cependant, si vous désactivez les cookies, nos applications et d'autres aspects de nos services risquent de ne pas fonctionner correctement.",
    "correspondenceTitle": "2.6 Correspondance volontaire",
    "correspondenceDescription": "Lorsque vous nous envoyez un e-mail avec une question ou pour demander de l'aide, nous conservons cette correspondance, y compris votre adresse e-mail, afin que nous ayons un historique de la correspondance passée à laquelle nous référer si vous nous contactez à l'avenir.",
    "accessTitle": "3. Lorsque nous accédons à vos informations ou les partageons",
    "accessDescription1": "Pour vous fournir les produits ou services que vous avez demandés. Nous faisons appel à des sous-traitants tiers pour gérer nos applications et vous fournir les services. Il s'agit notamment de fournisseurs de services cloud et d'analyse.",
    "accessDescription2": "Pour enquêter sur un abus, le prévenir ou prendre des mesures. L'accès au compte d'un client lors d'une enquête sur un abus potentiel est une mesure de dernier recours. Nous souhaitons protéger la confidentialité et la sécurité de nos clients et des personnes qui nous signalent des problèmes, et nous mettons tout en œuvre pour équilibrer ces responsabilités tout au long du processus. Si nous découvrons que vous utilisez nos produits à des fins restreintes, nous prendrons les mesures nécessaires, y compris en informant les autorités compétentes si nécessaire.",
    "accessDescription3": "Lorsque la loi applicable l’exige.",
    "dataRequests": "Demandes de données utilisateur. Notre politique est de ne pas répondre aux demandes gouvernementales de données utilisateur, sauf obligation légale ou, dans certaines circonstances, en cas de demande urgente. Toutefois, si les autorités policières américaines disposent d'un mandat, d'une assignation pénale ou d'une décision de justice nous obligeant à partager des données, nous devons nous y conformer. De même, nous ne répondrons aux demandes émanant d'autorités gouvernementales extérieures aux États-Unis que si le gouvernement américain nous y contraint, conformément aux procédures décrites dans un traité ou un accord d'entraide judiciaire. Nous avons pour politique d'avertir les utilisateurs concernés avant de partager des données, sauf interdiction légale et sauf en cas d'urgence.",
    "preservationRequests": "Demandes de conservation. De même, notre politique est de répondre aux demandes de conservation de données uniquement si la loi américaine sur les communications stockées (18 USC Section 2703(f)) l'exige, ou si une assignation à comparaître en matière civile est dûment signifiée. Nous ne partageons pas les données conservées, sauf si la loi l'exige ou si nous y sommes contraints par une décision de justice que nous choisissons de ne pas contester. De plus, sauf si nous recevons un mandat, une ordonnance ou une assignation en bonne et due forme avant l'expiration de la période de conservation requise, nous détruirons toutes les copies conservées des données clients à la fin de cette période.",
    "taxAudits": "Si nous sommes contrôlés par une autorité fiscale, nous pourrions être amenés à partager des informations de facturation. Dans ce cas, nous ne partagerons que le strict nécessaire, comme les adresses de facturation et les informations d'exonération fiscale.",
    "securityTitle": "4. Comment nous sécurisons vos données",
    "securityDescription": "Toutes les données sont cryptées via SSL/TLS lors de leur transmission depuis nos serveurs vers votre navigateur.",
    "deletionTitle": "5. Que se passe-t-il lorsque vous supprimez votre contenu",
    "deletionDescription": "Si vous supprimez du contenu, il deviendra immédiatement inaccessible.",
    "locationTitle": "6. Localisation du site et des données",
    "locationDescription": "Nos produits et autres sites web sont exploités aux États-Unis. Si vous résidez dans l'Union européenne, au Royaume-Uni ou ailleurs qu'aux États-Unis, sachez que toutes les informations que vous nous fournissez seront transférées et stockées aux États-Unis. En utilisant nos sites web ou nos Services et/ou en nous fournissant vos informations personnelles, vous consentez à ce transfert.",
    "childrenTitle": "7. Vie privée des enfants",
    "childrenDescription": "Les Services ne sont pas destinés aux enfants et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous avez moins de 13 ans, veuillez ne pas soumettre d'informations personnelles via les Services. Si vous pensez qu'un enfant nous a fourni des informations personnelles en violation de la présente Politique, veuillez nous contacter comme indiqué ci-dessous.",
    "updatesTitle": "8. Mises à jour de cette politique de confidentialité",
    "updatesDescription": "Nous pouvons mettre à jour cette politique si nécessaire afin de nous conformer à la réglementation en vigueur et de refléter toute nouvelle pratique. Chaque fois que nous apportons une modification importante à nos politiques, nous actualisons la date en haut de cette page.",
    "contactTitle": "9. Contactez-nous",
    "contactDescription": "Si vous avez des questions, des commentaires ou des plaintes concernant notre politique de confidentialité, veuillez nous contacter et nous nous efforcerons de traiter votre plainte dans les plus brefs délais.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Conditions de",
    titleGradient: "Service",
    subtitle: "Veuillez lire attentivement ces conditions avant d'utiliser nos services",
    "lastUpdated": "Dernière mise à jour : {date}",
    "lastUpdatedDate": "21 juillet 2025",
    "termsOfServiceTitle": "Conditions d'utilisation",
    "thankYou": "Merci d'utiliser nos produits !",
    "companyDefinition": "Lorsque nous disons « Société », « nous », « notre » ou « nos » dans ce document, nous faisons référence à NeverCap.",
    "servicesDefinition": "Lorsque nous disons « Services », nous entendons tout produit créé et maintenu par NeverCap, qu'il soit fourni dans un navigateur Web, une application de bureau, une application mobile ou un autre format.",
    "termsUpdate": "Nous sommes susceptibles de mettre à jour ces Conditions d'utilisation ultérieurement. Ces modifications visent généralement à clarifier certaines de ces conditions en créant un lien vers une politique connexe plus complète. Chaque fois que nous apportons une modification importante à nos politiques, nous actualiserons la date en haut de cette page et prendrons toutes les mesures nécessaires pour en informer les titulaires de compte.",
    "acceptanceTitle": "1. Acceptation de l'accord",
    "acceptanceDescription1": "En utilisant nos Services, vous acceptez le présent Contrat, qui constitue un contrat contraignant entre vous et NeverCap. Vous déclarez être légalement capable d'accepter les présentes Conditions et affirmez avoir l'âge légal pour conclure un contrat contraignant. L'acceptation de NeverCap est expressément conditionnée à votre acceptation de l'ensemble des termes et conditions du présent Contrat.",
    "eligibilityRequirement": "Les Services ne sont pas destinés et ne doivent pas être utilisés par des personnes de moins de 18 ans. En utilisant les Services, vous déclarez et garantissez que vous remplissez les conditions d'éligibilité susmentionnées.",
    "userResponsibility": "Les termes « vous », « votre », « vous-même » incluent également vos employés, agents, représentants commerciaux et toute autre personne à qui vous donnez accès aux Services via votre Compte (tel que défini ci-dessous). Vous êtes responsable de vous assurer que toutes les personnes accédant aux Services via votre compte connaissent les présentes Conditions et les respectent.",
    "termsRevision": "NeverCap se réserve le droit de réviser et de mettre à jour les présentes Conditions de temps à autre, à sa seule discrétion. Toutes les modifications entrent en vigueur dès leur publication. En continuant à utiliser les Services après la publication des Conditions révisées, vous acceptez les modifications. Vous êtes invité à consulter régulièrement cette page afin de prendre connaissance de ces modifications, car elles vous engagent.",
    "servicesTitle": "2. Services de NeverCap",
    "servicesDescription1": "Nos services permettent aux utilisateurs de transformer des conversations vocales en texte transcrit qui peut être recherché, traduit et partagé avec d’autres.",
    "servicesOptions": "Vous pouvez choisir d'utiliser la version gratuite des Services (les « Services gratuits ») ou la version payante des Services par abonnement pour laquelle vous devrez peut-être payer des frais (les « Services payants »).",
    "servicesAccess": "Nous mettrons les Services à votre disposition. Il vous incombe de prendre toutes les dispositions nécessaires pour y accéder.",
    "accountTermsTitle": "3. Conditions du compte",
    "accountSecurity": "Vous êtes responsable de la sécurité de votre compte. La Société ne peut être tenue responsable de toute perte ou dommage résultant du non-respect de cette obligation de sécurité.",
    "lawfulUse": "Vous ne pouvez pas utiliser les Services à des fins illégales, contraires à l’éthique ou immorales.",
    "contentResponsibility": "Vous êtes responsable de tout le contenu publié et de toute activité effectuée sur votre compte. Cela inclut le contenu publié par d'autres personnes qui : (a) ont accès à vos identifiants ; ou (b) possèdent leurs propres identifiants de connexion sur votre compte.",
    "humanRequirement": "Vous devez être un humain. Les comptes créés par des « bots » ou d'autres méthodes automatisées ne sont pas autorisés.",
    "paymentTitle": "4. Paiement, remboursements et modifications de forfait",
    "freeTrial": "Pour les services payants proposant un essai gratuit, nous vous expliquons la durée de l'essai lors de votre inscription. Après la période d'essai, vous devrez payer à l'avance pour continuer à utiliser le service. Sans paiement, ces services prendront fin.",
    "upgradePolicy": "Si vous passez d'un forfait gratuit à un forfait payant, nous débiterons votre carte immédiatement et votre cycle de facturation commence le jour de la mise à niveau.",
    "taxes": "Tous les frais s'entendent hors taxes, prélèvements ou droits imposés par les autorités fiscales. Le cas échéant, nous percevons ces taxes pour le compte des autorités fiscales et les reversons à ces dernières. Dans le cas contraire, vous êtes responsable du paiement de ces taxes, prélèvements ou droits.",
    "refunds": "Tous les achats sont non remboursables. Vous pouvez résilier tout service payant à tout moment en vous connectant à votre compte. Pour les abonnements payants, la résiliation prendra effet à la fin de la période d'abonnement en cours, sauf mention contraire.",
    "cancellationTitle": "5. Annulation et résiliation",
    "cancellationPolicy": "Si vous annulez le Service avant la fin de la période payée, votre annulation prendra effet immédiatement et vous ne serez pas facturé à nouveau. Nous ne calculons pas automatiquement au prorata le temps non utilisé lors du dernier cycle de facturation.",
    "terminationRights": "Nous nous réservons le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future de nos Services, pour quelque raison que ce soit et à tout moment. La suspension signifie que vous ne pourrez plus accéder à votre compte ni à son contenu. La résiliation entraînera également la suppression de votre compte ou de votre accès à celui-ci, ainsi que la confiscation et la renonciation à tout contenu de votre compte. Nous nous réservons également le droit de refuser l'utilisation des Services à quiconque, pour quelque raison que ce soit et à tout moment. Cette clause est nécessaire car, statistiquement parlant, parmi les centaines de milliers de comptes présents sur nos Services, au moins un commet une infraction.",
    "abusePolicy": "Les abus verbaux, physiques, écrits ou autres (y compris les menaces d'abus ou de représailles) envers un employé ou un dirigeant de la Société peuvent entraîner la résiliation immédiate du compte.",
    "submissionsTitle": "6. Soumissions",
    "submissionsDescription": "Vous reconnaissez et acceptez que les questions, commentaires, suggestions, idées, retours ou autres informations concernant le Site (les « Soumissions ») que vous nous fournissez ne sont pas confidentiels et deviennent notre propriété exclusive. Nous détenons les droits exclusifs, y compris tous les droits de propriété intellectuelle, et sommes autorisés à utiliser et diffuser sans restriction ces Soumissions à toute fin légale, commerciale ou autre, sans reconnaissance ni compensation. Vous renoncez par les présentes à tous droits moraux sur ces Soumissions et garantissez par les présentes que ces Soumissions sont originales et que vous avez le droit de les soumettre. Vous acceptez qu'aucun recours ne soit possible contre nous pour toute violation ou détournement, allégué ou réel, de tout droit de propriété sur vos Soumissions.",
    "uptimeTitle": "7. Disponibilité et sécurité",
    "serviceAvailability": "Vous utilisez les Services à vos propres risques. Nous les fournissons « en l'état » et « selon disponibilité ». Nous ne proposons pas de contrats de service pour la plupart de nos Services, mais nous accordons une grande importance à la disponibilité de nos applications.",
    "throttlingPolicy": "Nous nous réservons le droit de limiter temporairement l'accès à votre compte dans les rares cas où l'activité d'un utilisateur affecte négativement la stabilité et les performances du service pour les autres utilisateurs. Sauf dans les cas les plus critiques, nous vous contacterons pour trouver une solution avant d'intervenir.",
    "dataSecurity": "Nous prenons de nombreuses mesures pour protéger et sécuriser vos données grâce à des sauvegardes, des redondances et le chiffrement. Nous appliquons le chiffrement pour la transmission de données sur l'Internet public.",
    "thirdPartyVendors": "Nous faisons appel à des fournisseurs tiers et à des partenaires d'hébergement pour fournir le matériel, les logiciels, le réseau, le stockage et la technologie associée nécessaires à l'exécution des Services.",
    "siteManagementTitle": "8. Gestion du site",
    "siteManagementDescription": "Nous nous réservons le droit, mais non l'obligation, de : (1) surveiller le Site pour détecter toute violation des présentes Conditions d'utilisation ; (2) prendre les mesures juridiques appropriées contre quiconque, à notre seule discrétion, viole la loi ou les présentes Conditions d'utilisation, y compris, sans limitation, signaler cet utilisateur aux autorités chargées de l'application de la loi ; (3) à notre seule discrétion et sans limitation, refuser, restreindre l'accès, limiter la disponibilité ou désactiver (dans la mesure où cela est technologiquement possible) l'une de vos Contributions ou toute partie de celles-ci ; (4) à notre seule discrétion et sans limitation, préavis ou responsabilité, de supprimer du Site ou de désactiver de toute autre manière tous les fichiers et contenus qui sont de taille excessive ou qui sont de quelque manière que ce soit encombrants pour nos systèmes ; et (5) gérer le Site d'une manière conçue pour protéger nos droits et notre propriété et pour faciliter le bon fonctionnement du Site.",
    "copyrightTitle": "9. Droits d'auteur et propriété du contenu",
    "copyrightCompliance": "Tout le contenu publié sur les Services doit être conforme à la loi américaine sur le droit d'auteur.",
    "ipRights": "Nous ne revendiquons aucun droit de propriété intellectuelle sur le contenu que vous fournissez aux Services. Tous les contenus téléchargés restent votre propriété.",
    "contentModeration": "Nous ne présélectionnons pas le contenu, mais nous nous réservons le droit (mais non l'obligation) à notre seule discrétion de refuser ou de supprimer tout contenu disponible via le Service.",
    "trademarkProtection": "Les noms, l'apparence et la convivialité des Services sont protégés par le droit d'auteur © de la Société. Tous droits réservés. Vous ne pouvez pas dupliquer, copier ou réutiliser une quelconque partie des éléments HTML, CSS, JavaScript ou visuels sans l'autorisation écrite expresse de la Société. Vous devez demander l'autorisation d'utiliser le logo de la Société ou tout logo de Service à des fins promotionnelles. Veuillez nous envoyer vos demandes d'utilisation de logos par e-mail. Nous nous réservons le droit de révoquer cette autorisation en cas de violation des présentes Conditions d'utilisation.",
    "prohibitedExploitation": "Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie des Services, l'utilisation des Services ou l'accès aux Services sans l'autorisation écrite expresse de la Société.",
    "impersonationProhibition": "Vous ne devez pas modifier un autre site Web de manière à laisser entendre à tort qu'il est associé aux Services ou à la Société.",
    "dmcaPolicy": "Nous respectons les droits de propriété intellectuelle d'autrui. Si vous pensez qu'un contenu disponible sur ou via le Site porte atteinte à un droit d'auteur que vous détenez ou contrôlez, veuillez nous contacter immédiatement. Une copie de votre notification sera envoyée à la personne ayant publié ou stocké le contenu concerné. Veuillez noter que, conformément à la loi applicable, vous pouvez être tenu responsable de dommages et intérêts si vous faites de fausses déclarations dans une notification. Par conséquent, si vous n'êtes pas certain que le contenu présent sur le Site ou auquel il renvoie porte atteinte à vos droits d'auteur, nous vous recommandons de consulter au préalable un avocat.",
    "prohibitedActivitiesTitle": "10. Activités interdites",
    "generalProhibition": "Vous ne pouvez accéder au Site ni l'utiliser à d'autres fins que celles pour lesquelles nous le mettons à disposition. Le Site ne peut être utilisé dans le cadre d'activités commerciales, sauf celles expressément approuvées par nous.",
    "userObligations": "En tant qu'utilisateur du Site, vous acceptez de ne pas :",
    "dataScraping": "Récupérer systématiquement des données ou d’autres contenus du Site pour créer ou compiler, directement ou indirectement, une collection, une compilation, une base de données ou un répertoire sans notre autorisation écrite.",
    "fraud": "Tromper, frauder ou induire en erreur nous et les autres utilisateurs, en particulier dans toute tentative d'obtenir des informations de compte sensibles telles que les mots de passe des utilisateurs.",
    "securityInterference": "Contourner, désactiver ou interférer de toute autre manière avec les fonctionnalités liées à la sécurité du Site, y compris les fonctionnalités qui empêchent ou restreignent l'utilisation ou la copie de tout Contenu ou imposent des limitations à l'utilisation du Site et/ou du Contenu qu'il contient.",
    "defamation": "Dénigrer, ternir ou nuire de toute autre manière, à notre avis, à nous-mêmes et/ou au Site.",
    "harassment": "Utiliser toute information obtenue à partir du Site afin de harceler, d’abuser ou de nuire à une autre personne.",
    "supportAbuse": "Faire un usage abusif de nos services d’assistance ou soumettre de faux rapports d’abus ou de mauvaise conduite.",
    "legalCompliance": "Utiliser le Site d’une manière incompatible avec les lois ou réglementations applicables.",
    "framingProhibition": "Participer à un cadrage ou à un lien non autorisé vers le Site.",
    "malware": "Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) des virus, des chevaux de Troie ou d'autres éléments, y compris l'utilisation excessive de majuscules et le spam (publication continue de texte répétitif), qui interfèrent avec l'utilisation et la jouissance ininterrompues du Site par une partie ou qui modifient, altèrent, perturbent, altèrent ou interfèrent avec l'utilisation, les fonctionnalités, les fonctions, le fonctionnement ou la maintenance du Site.",
    "automation": "Participer à toute utilisation automatisée du système, comme l'utilisation de scripts pour envoyer des commentaires ou des messages, ou l'utilisation d'outils d'exploration de données, de robots ou d'outils similaires de collecte et d'extraction de données.",
    "copyrightRemoval": "Supprimez les avis de droits d’auteur ou autres droits de propriété de tout contenu.",
    "impersonation": "Tenter d'usurper l'identité d'un autre utilisateur ou d'une autre personne ou d'utiliser le nom d'utilisateur d'un autre utilisateur.",
    "spyware": `Téléchargez ou transmettez (ou tentez de télécharger ou de transmettre) tout matériel qui agit comme un mécanisme passif ou actif de collecte ou de transmission d'informations, y compris, sans limitation, les formats d'échange de graphiques clairs (\"gifs\"), les pixels 1×1, les bogues Web, les cookies ou autres dispositifs similaires (parfois appelés \"logiciels espions\" ou \"mécanismes de collecte passive\" ou \"pcms\").`,
    "disruption": "Interférer avec, perturber ou créer une charge excessive sur le Site ou les réseaux ou services connectés au Site.",
    "employeeHarassment": "Harceler, ennuyer, intimider ou menacer l'un de nos employés ou agents engagés dans la fourniture de toute partie du Site.",
    "accessCircumvention": "Tenter de contourner toute mesure du Site conçue pour empêcher ou restreindre l'accès au Site, ou à toute partie du Site.",
    "codeCopying": "Copiez ou adaptez le logiciel du Site, y compris, mais sans s'y limiter, Flash, PHP, HTML, JavaScript ou autre code.",
    "reverseEngineering": "Sauf dans les cas autorisés par la loi applicable, déchiffrer, décompiler, désassembler ou procéder à une ingénierie inverse de tout logiciel composant ou constituant de quelque manière que ce soit une partie du Site.",
    "bots": "Sauf si cela résulte de l'utilisation standard d'un moteur de recherche ou d'un navigateur Internet, utilisez, lancez, développez ou distribuez tout système automatisé, y compris, sans limitation, toute araignée, tout robot, tout utilitaire de triche, tout scraper ou tout lecteur hors ligne qui accède au Site, ou utilisez ou lancez tout script ou autre logiciel non autorisé.",
    "buyingAgents": "Utilisez un agent d'achat ou un intermédiaire pour effectuer des achats sur le Site.",
    "unauthorizedUse": "Faire toute utilisation non autorisée du Site, y compris la collecte de noms d'utilisateur et/ou d'adresses e-mail d'utilisateurs par des moyens électroniques ou autres dans le but d'envoyer des e-mails non sollicités, ou de créer des comptes d'utilisateurs par des moyens automatisés ou sous de faux prétextes.",
    "competition": "Utiliser le Site dans le cadre de tout effort visant à nous concurrencer ou utiliser le Site et/ou le Contenu pour toute activité génératrice de revenus ou entreprise commerciale.",
    "advertising": "Utilisez le Site pour faire de la publicité ou proposer à la vente des biens et des services.",
    "profileTransfer": "Vendez ou transférez votre profil.",
    "featuresTitle": "11. Fonctionnalités et bugs",
    "featuresDescription": "Nous concevons nos services avec soin, en nous appuyant sur notre propre expérience et sur celle de nos clients qui partagent leur expérience et leurs commentaires. Cependant, il n'existe pas de service qui plaise à tout le monde. Nous ne garantissons pas que nos services répondront à vos besoins ou attentes spécifiques.",
    "bugsDescription": "Nous testons également toutes nos fonctionnalités avant leur lancement. Comme tout logiciel, nos services comportent inévitablement des bugs. Nous suivons les bugs qui nous sont signalés et les corrigeons, notamment ceux liés à la sécurité ou à la confidentialité. Tous les bugs signalés ne sont pas corrigés et nous ne garantissons pas des services totalement exempts d'erreurs.",
    "correctionsTitle": "12. Corrections",
    "informationAccuracy": "Certaines informations du Site peuvent contenir des erreurs typographiques, des inexactitudes ou des omissions, notamment concernant les descriptions, les prix, la disponibilité et diverses autres informations. Nous nous réservons le droit de corriger toute erreur, inexactitude ou omission et de modifier ou mettre à jour les informations du Site à tout moment et sans préavis.",
    "siteAvailability": "Nous ne pouvons garantir la disponibilité permanente du Site. Nous pouvons rencontrer des problèmes matériels, logiciels ou autres, ou être amenés à effectuer des opérations de maintenance, entraînant des interruptions, des retards ou des erreurs. Nous nous réservons le droit de modifier, réviser, mettre à jour, suspendre, interrompre ou autrement modifier le Site à tout moment et pour quelque raison que ce soit, sans préavis. Vous reconnaissez que nous déclinons toute responsabilité en cas de perte, dommage ou inconvénient causé par votre incapacité à accéder au Site ou à l'utiliser pendant une période d'indisponibilité ou d'interruption de son fonctionnement. Aucune disposition des présentes Conditions d'utilisation ne saurait être interprétée comme nous obligeant à maintenir et à soutenir le Site, ni à fournir des corrections, mises à jour ou versions connexes.",
    "userDataTitle": "13. Données utilisateur",
    "userDataDescription": "Nous conserverons certaines données que vous transmettez au Site afin d'en gérer les performances, ainsi que les données relatives à votre utilisation. Bien que nous effectuions régulièrement des sauvegardes de données, vous êtes seul responsable de toutes les données que vous transmettez ou liées à toute activité que vous avez entreprise sur le Site. Vous reconnaissez que nous déclinons toute responsabilité envers vous en cas de perte ou de corruption de ces données, et vous renoncez par les présentes à tout droit d'action contre nous découlant de cette perte ou corruption.",
    "privacyPolicyTitle": "14. Politique de confidentialité",
    "privacyPolicyDescription": "La confidentialité et la sécurité des données nous tiennent à cœur. Veuillez consulter notre Politique de confidentialité. En utilisant le Site, vous acceptez d'être lié par notre Politique de confidentialité, intégrée aux présentes Conditions d'utilisation. Veuillez noter que le Site est hébergé aux États-Unis. Si vous accédez au Site depuis une autre région du monde dont les lois ou autres exigences régissant la collecte, l'utilisation ou la divulgation des données personnelles diffèrent de celles en vigueur aux États-Unis, votre utilisation continue du Site implique le transfert de vos données vers les États-Unis et vous acceptez que vos données soient transférées et traitées aux États-Unis.",
    "liabilityTitle": "15. Responsabilité",
    "liabilityIntroduction": "Nous mentionnons la responsabilité tout au long des présentes Conditions, mais pour tout regrouper dans une seule section :",
    "liabilityWaiver": "Français Vous comprenez et acceptez expressément que la Société ne sera pas responsable, en droit ou en équité, envers vous ou envers un tiers de tout dommage direct, indirect, accessoire, perte de profits, spécial, consécutif, punitif ou exemplaire, y compris, mais sans s'y limiter, les dommages pour perte de profits, de clientèle, d'utilisation, de données ou autres pertes intangibles (même si la Société a été informée de la possibilité de tels dommages), résultant de : (1) l'utilisation ou l'impossibilité d'utiliser les Services ; (2) des erreurs, fautes ou inexactitudes de contenu et de matériel ; (3) des blessures corporelles ou des dommages matériels, de quelque nature que ce soit, résultant de votre accès et de votre utilisation du site ; (4) le coût d'approvisionnement de biens et services de substitution résultant de tout bien, donnée, information ou service acheté ou obtenu ou de messages reçus ou de transactions conclues via ou à partir des Services ; (5) tout accès ou utilisation non autorisé de nos serveurs sécurisés et/ou de toutes les informations personnelles et/ou financières qui y sont stockées ; (6) toute interruption ou cessation de transmission vers ou depuis le site ; (7) tout bug, virus, cheval de Troie ou autre qui pourrait être transmis au site ou via le site par un tiers, et/ou ; (8) toute erreur ou omission dans tout contenu et matériel ou pour toute perte ou dommage de toute nature subi à la suite de l'utilisation de tout contenu publié, transmis ou autrement mis à disposition via le site ; (9) les déclarations ou la conduite de tout tiers sur le service ; (10) ou toute autre question relative aux présentes Conditions d'utilisation ou aux Services, qu'il s'agisse d'une rupture de contrat, d'un délit (y compris la négligence, qu'elle soit active ou passive), ou de toute autre théorie de responsabilité.",
    "miscellaneousTitle": "16. Divers",
    "miscellaneousDescription": "Les présentes Conditions d'utilisation et toutes les politiques ou règles de fonctionnement publiées par nous sur le Site ou relatives à celui-ci constituent l'intégralité de l'accord et de l'entente entre vous et nous. Notre manquement à exercer ou à appliquer un droit ou une disposition des présentes Conditions d'utilisation ne saurait constituer une renonciation à ce droit ou à cette disposition. Les présentes Conditions d'utilisation s'appliquent dans toute la mesure permise par la loi. Nous pouvons céder tout ou partie de nos droits et obligations à des tiers à tout moment. Nous déclinons toute responsabilité en cas de perte, de dommage, de retard ou d'inaction causés par une cause indépendante de notre volonté. Si une disposition ou une partie d'une disposition des présentes Conditions d'utilisation est jugée illégale, nulle ou inapplicable, cette disposition ou partie de disposition est réputée dissociable des présentes Conditions d'utilisation et n'affecte pas la validité et l'applicabilité des autres dispositions. Aucune relation de coentreprise, de partenariat, d'emploi ou d'agence n'est créée entre vous et nous du fait des présentes Conditions d'utilisation ou de l'utilisation du Site. Vous acceptez que les présentes Conditions d'utilisation ne soient pas interprétées à notre détriment du fait de leur rédaction. Vous renoncez par la présente à toute défense que vous pourriez avoir sur la base de la forme électronique des présentes Conditions d'utilisation et de l'absence de signature par les parties aux présentes pour exécuter les présentes Conditions d'utilisation.",
    "contactTitle": "17. Contactez-nous",
    "contactDescription": "Si vous avez une question sur l’une des conditions d’utilisation, veuillez nous contacter.",
    "neverCap": "NeverCap",
    "site": "Site",
    "services": "Services"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
