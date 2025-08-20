// 西班牙语
let message = {
  // 首页
  HomePage: {
    home: "Inicio",
    times: "{times} transcripciones gratuitas por día, {left} restantes hoy. ",
    tips: "Actualiza a Pro para transcripciones ilimitadas.",
    update: "Actualizar ahora",
    rename: "Renombrar",
    delete: "Eliminar",
    cancel: "Cancelar",
    confirm: "Crear",
    dialogLabel: "Nombre de la carpeta",
    recently: "Archivos recientes",
    loading: "Cargando",
    tour: {
      step0: {
        title: "Bienvenido a {name}",
        tip: "Aquí puedes:",
        content:
          "Transcribir conversaciones puntuales, reuniones, conferencias y más",
        next: "Comenzar"
      },
      step1: {
        title: "Transcribir archivos",
        content:
          "Soporta tres métodos de transcripción: archivos locales, enlaces y grabaciones."
      },
      step2: {
        title: "Crear una carpeta",
        content:
          'Haz clic en el "+" para crear una carpeta y organizar tus archivos.'
      },
      step3: {
        title: "Ver detalles de la transcripción y editar",
        content:
          "Haga clic en el elemento para ver los detalles de la transcripción y editarlo y traducirlo también."
      },
      next: "Siguiente",
      finish: "Entendido"
    },
    export: {
      export: "Exportar",
      title: "Estamos generando tu exportación",
      title2: "Tu archivo está listo",
      singleLoadingContent: "1 archivo se está comprimiendo.",
      singleSuccessContent: "1 archivo ha sido comprimido.",
      loadingContent: "{num} archivos se están comprimiendo.",
      successContent: "{num} archivos han sido comprimidos.",
      cancel: "Cancelar la exportación",
      error: "Error de exportación",
      dialog: {
        title: "Advertencia",
        content: "¿Cancelar la exportación?",
        cancel: "Cancelar exportación",
        continue: "Continuar exportando"
      }
    },
    welcome: {
      title: "¡Bienvenido a Scribify!",
      description: "Aquí puedes:",
      transcribe:
        "Transcribe sin esfuerzo con Scribify: convierte conversaciones de voz en texto claro, buscable y compartible en un instante.",
      precision:
        "Obtén transcripciones precisas con identificación de hablantes y marcas de tiempo al instante.",
      translate:
        "Rompe las barreras del idioma: traduce transcripciones a más de 200 idiomas con facilidad.",
      edit: "Edita, refina y exporta tus transcripciones en formatos que se adapten a tus necesidades.",
      collaborate: "Colabora compartiendo tu texto transcrito con otros.",
      button: "Comenzar",
      tip: "¿Listo para convertir audio en texto transcrito? ¡Comienza a explorar ahora!",
      tip2: "¡Comienza a explorar ahora!",
      tip1: "¿Listo para convertir audio en texto transcrito? "
    },
    subscriptionModal: {
      left: {
        title: "Obtén el Plan Pro para desbloquear más",
        c1: "Transcripciones ilimitadas",
        c2: "Cargas de 10 horas",
        c3: "Máxima prioridad",
        c4: "99% de precisión en transcripción",
        c5: "Más de 100 idiomas soportados",
        c6: "Identificación de hablantes",
        c7: "Traducción de transcripciones",
        t1: "Transcripciones ilimitadas para una persona.",
        t2: "Cada archivo puede durar hasta 10 horas / 5 GB. Sube 50 archivos a la vez.",
        t3: "Siempre transcribiremos tus archivos lo antes posible con la máxima prioridad."
      },
      right: {
        title: "Obtén el Plan Pro",
        yearly: "Anual",
        monthly: "Mensual",
        save: "Ahorro",
        preMonth: "al mes",
        preYear: "al año",
        firstMonth: "primer mes",
        afterwards: "después"
      },
      subscribe: "Suscribirse"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Fallido",
      selected: "Seleccionado",
      success: "Éxito",
      fileList: "Lista de Archivos"
    },
    dialog: {
      move: {
        title: "Mover",
        label: "Elige una carpeta",
        placeholder: "Elige una carpeta",
        confirm: "Mover",
        cancel: "Cancelar"
      },
      rename: {
        title: "Renombrar",
        label: "Nombre del archivo",
        confirm: "Renombrar",
        cancel: "Cancelar"
      },
      delete: {
        title: "Eliminar",
        file: "archivo",
        files: "archivos",
        label: "¿Confirmar eliminación? Esta acción no se puede deshacer.",
        confirm: "Eliminar",
        cancel: "Cancelar"
      },
      share: {
        title: "Compartir",
        label:
          "Cualquiera con el siguiente enlace seguro puede ver esta transcripción y el archivo multimedia asociado.",
        confirm: "Copiar enlace",
        success: "¡Copiado con éxito!"
      },
      export: {
        title: "Exportar",
        select: "Selecciona el formato que necesitas",
        settings: "Configuraciones",
        speaker: "Incluir hablante",
        timecodes: "Incluir códigos de tiempo",
        confirm: "Exportar",
        cancel: "Cancelar",
        selectErr: "Por favor selecciona uno o más formatos"
      }
    },
    search: {
      placeholder: "Buscar"
    },
    recently: "Reciente",
    record: "Grabar",
    transcribe: "Transcribir",
    unclassified: "Carpetas no clasificadas",
    buttons: {
      transcribe: "Transcribir archivos",
      url: "Transcribir enlaces",
      record: "Grabar y transcribir",
      recording: "Grabando..."
    },
    delSuccess: "Eliminado con éxito",
    create: "Crear",
    endRecord: {
      title: "Aviso",
      content:
        "Estás grabando. Esta acción terminará la grabación. ¿Quieres terminar la grabación?",
      confirm: "Continuar Grabación",
      cancel: "Terminar Grabación"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Grabar",
      pause: "Pausar",
      resume: "Reanudar",
      stop: "Detener",
      endRecord: "Finalizar grabación",
      delete: "Eliminar",
      transcribe: "Transcribir",
      permissionDenied:
        "Permiso de micrófono denegado o el dispositivo no existe",
      dialog: {
        delete: {
          title: "Advertencia",
          label: "¿Estás seguro de que deseas eliminar esta grabación?",
          confirm: "Eliminar",
          cancel: "Cancelar"
        },
        complete: {
          title: "Grabación completada",
          label:
            "La grabación ha alcanzado las 10 horas y se ha detenido automáticamente. Por favor, transcribe.",
          confirm: "Entendido"
        },
        speaker: {
          content:
            "Para la identificación de hablantes, los archivos están limitados a 3 horas. Por favor, desmarca '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcribir un medio en línea",
        title: "Pegar enlaces",
        label:
          "Pega tu enlace de video o audio de: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram y más plataformas...",
        confirm: "Añadir",
        cancel: "Cancelar",
        // 请输入正确的链接
        errorTitle:
          "La dirección del enlace que ingresaste es incorrecta. Por favor, verifica e inténtalo de nuevo.",
        linkName: "Enlace"
      },
      file: {
        orTitle: "Transcribir un medio en línea",
        dialogTitle: "Transcribir archivos",
        tip1: "Arrastra archivos aquí o haz clic para buscar",
        tip2: "Haz clic para buscar",
        or: "o",
        supported: "Formatos admitidos"
      },
      del: {
        title: "Advertencia",
        content:
          "Todo el progreso se perderá. ¿Confirmar la cancelación de la transcripción?",
        cancel: "Confirmar cancelación",
        confirm: "Continuar transcribiendo"
      },
      files: "Archivos",
      resultDialogTitle: "Transcribir archivos",
      resultDialogTitle2: "Transcribir archivo",
      cancel: "Cancelar",
      confirm: "Transcribir",
      return: "Volver",
      addMore: "Agregar más",
      language: "Idioma del medio",
      failed: "Fallido",
      tooLarge: "El archivo excede el límite (5G).",
      linkUpload: "Subiendo",
      fileFormat: "El formato de archivo no está permitido",
      localFiles: "Archivos locales",
      pasteLink: "Enlace en línea",
      uploadErr: "Error de carga",
      hashErr: "Error de hash",
      table: {
        status: "Estado",
        file: "Archivo",
        size: "Tamaño",
        noData: "Sin datos"
      },
      maxFileNum: "El número de archivos no puede exceder de {num}.",
      speaker: "Identificar hablantes",
      speakerLabel:
        "Detectar automáticamente quién está hablando",
      guest: {
        transcribe: "Transcribir",
        file: "Archivo",
        audio: "Archivo de audio/vídeo",
        Uploading: "Subiendo..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Reciente",
      popular: "Popular",
      other: "Otro",
      searchLanguage: "Buscar idioma",
      noMatch: "No se encontró ningún idioma coincidente",
      English: "Inglés",
      "English(US)": "Inglés (EE.UU.)",
      "English(UK)": "Inglés (Reino Unido)",
      Spanish: "Español",
      Portuguese: "Portugués",
      French: "Francés",
      Italian: "Italiano",
      German: "Alemán",
      Dutch: "Neerlandés",
      Polish: "Polaco",
      Danish: "Danés",
      Japanese: "Japonés",
      Korean: "Coreano",
      Hungarian: "Húngaro",
      Czech: "Checo",
      Chinese: "Chino",
      Hebrew: "Hebreo",
      Arabic: "Árabe",
      Azerbaijani: "Azerbaiyano",
      Estonian: "Estonio",
      Belarusian: "Bielorruso",
      Bulgarian: "Búlgaro",
      Icelandic: "Islandés",
      Bosnian: "Bosnio",
      Persian: "Persa",
      Russian: "Ruso",
      "Chinese(Traditional)": "Chino (Tradicional)",
      Finnish: "Finlandés",
      Kazakh: "Kazajo",
      Galician: "Gallego",
      Catalan: "Catalán",
      "Chinese(Simplified)": "Chino (Simplificado)",
      Kannada: "Canarés",
      Croatian: "Croata",
      Latvian: "Letón",
      Lithuanian: "Lituano",
      Romanian: "Rumano",
      Marathi: "Maratí",
      Malay: "Malayo",
      Macedonian: "Macedonio",
      Maori: "Maorí",
      Afrikaans: "Afrikáans",
      Nepali: "Nepalí",
      Norwegian: "Noruego",
      Swedish: "Sueco",
      Serbian: "Serbio",
      Slovak: "Eslovaco",
      Slovenian: "Esloveno",
      Swahili: "Suajili",
      Tagalog: "Tagalo",
      Tamil: "Tamil",
      Thai: "Tailandés",
      Turkish: "Turco",
      Welsh: "Galés",
      Urdu: "Urdu",
      Ukrainian: "Ucraniano",
      Greek: "Griego",
      Armenian: "Armenio",
      Hindi: "Hindi",
      Indonesian: "Indonesio",
      Vietnamese: "Vietnamita",
      Albanian: "Albanés",
      Amharic: "Amárico",
      Assamese: "Asamés",
      Occitan: "Occitano",
      Bashkir: "Baskir",
      Basque: "Vasco",
      Breton: "Bretón",
      Tibetan: "Tibetano",
      Faroese: "Feroés",
      Sanskrit: "Sánscrito",
      Khmer: "Jemer",
      Georgian: "Georgiano",
      Gujarati: "Guyaratí",
      "Haitian Creole": "Criollo haitiano",
      Hausa: "Hausa",
      Latin: "Latín",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgués",
      Malagasy: "Malgache",
      Maltese: "Maltés",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengalí",
      Burmese: "Birmano",
      Punjabi: "Panyabí",
      Pashto: "Pastún",
      Sinhala: "Cingalés",
      Shona: "Shona",
      Somali: "Somalí",
      Tajik: "Tayiko",
      Tatar: "Tártaro",
      Telugu: "Telugu",
      Turkmen: "Turcomano",
      Uzbek: "Uzbeko",
      Hawaiian: "Hawaiano",
      "Norwegian Nynorsk": "Nynorsk noruego",
      Sindhi: "Sindhi",
      Sundanese: "Sundanés",
      Yiddish: "Yidis",
      Yoruba: "Yoruba",
      Javanese: "Javanés",
      Cantonese: "Cantonés",
      Abkhaz: "Abjasio",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avar",
      Ewe: "Ewé",
      Aymara: "Aimara",
      Irish: "Irlandés",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osetio",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinés",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinán",
      pam: "Pampango",
      nso: "Sotho del Norte",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Baluchi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Mari de la pradera",
      Chamorro: "Chamorro",
      Chechen: "Checheno",
      chk: "Chuukés",
      Chuvash: "Chuvasio",
      Tswana: "Setsuana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetun",
      Divehi: "Divehi",
      dyu: "Dioula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele del sur",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (escritura de África Occidental)",
      "French(Canada)": "Francés (Canadá)",
      Fijian: "Fiyiano",
      fon: "Fon",
      "Western Frisian": "Frisón occidental",
      fur: "Friulano",
      Fulah: "Fula",
      Kongo: "Kongo",
      Kalaallisut: "Groenlandés",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirguís",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Q'eqchi'",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corso",
      "crh-Latn": "Tártaro de Crimea (latino)",
      crh: "Tártaro de Crimea (cirílico)",
      Quechua: "Quechua",
      Kurdish: "Kurdo (Kurmanji)",
      ckb: "Kurdo (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalio",
      lij: "Ligur",
      Limburgish: "Limburgués",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardo",
      rom: "Romaní",
      mad: "Madura",
      Manx: "Manés",
      mwr: "Marwari",
      "ms-Arab": "Malayo (Jawi)",
      Marshallese: "Marshalés",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Criollo mauriciano",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Náhuatl (Huasteca oriental)",
      "Southern Sotho": "Sotho del Sur",
      new: "Nevari (Nepal Bhasa)",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Panyabí (Shahmukhi)",
      "pt-PT": "Portugués (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapoteco",
      "Northern Sami": "Sami del Norte",
      Samoan: "Samoano",
      kri: "Krio de Sierra Leona",
      crs: "Criollo de Seychelles",
      Sango: "Sango",
      "sat-Latn": "Santali (latino)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Suazi",
      "Scottish Gaelic": "Gaélico escocés",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latino)",
      Tahitian: "Tahitiano",
      Tonga: "Tongano",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvano",
      war: "Waray",
      mak: "Makassar",
      vec: "Véneto",
      Uyghur: "Uigur",
      Venda: "Venda",
      Wolof: "Wólof",
      udm: "Udmurto",
      szl: "Silesio",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Patois jamaiquino",
      sah: "Yakuto",
      ace: "Acehnés",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (latino)",
      Inuktitut: "Inuktitut (silabario)",
      yua: "Maya yucateco",
      Dzongkha: "Dzongkha",
      Zulu: "Zulú"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "o", // 或
    LoginBtn: "Inicia sesión con correo electrónico",
    LoginGoogle: "Inicia sesión con Google",
    SignupBtn: "Regístrate con correo electrónico",
    SignupGoogle: "Regístrate con Google",
    SignupDes: "Regístrate hoy para presenciar su magia — gratis.",
    SignupTitle: "Transcripción precisa e ilimitada",
    signup: "Registrarse", // 注册
    sign_up: "Registrarse", // 注册
    loginByGoogle: "Continuar con Google", // 使用Google登录
    emailAddress: "Por favor, introduce tu correo electrónico", // 请输入您的邮箱
    createAccount: "Crear una nueva cuenta", // 创建账户
    accountExists: "¿Ya tienes una cuenta? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Al continuar, aceptas nuestros {terms} y {policy}.",
      terms: "Términos",
      policy: "Política de privacidad"
    },
    setPassword: "Establecer una contraseña", // 设置密码
    code: "Código de verificación", // 验证码
    resend: "Reenviar", // 重新发送
    enterPassword: "Contraseña: Mínimo 6 caracteres.", // 请输入密码
    passwordLeval: "Nivel de contraseña", // 密码强度
    Weak: "Débil", // 弱 中 强
    Medium: "Medio", // 弱 中 强
    Strong: "Fuerte", // 弱 中 强
    confirmPassword: "Confirma tu contraseña", // 确认密码
    invalidEmail: "Dirección de correo electrónico no válida", // 无效的邮箱地址
    logInDirectly:
      "Esta cuenta ya existe. Por favor, inicia sesión directamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Código de verificación incorrecto. Inténtalo de nuevo.", // 验证码错误，请重试
    atLeastSix: "La contraseña debe tener al menos 6 caracteres.", // 密码长度至少6位
    passwordNotMatch: "Las contraseñas no coinciden. Inténtalo de nuevo.", // 密码不匹配，请重试
    login: "Iniciar sesión", // 登录
    log_in: "Iniciar sesión", // 登录
    log_In: "Iniciar sesión", // 登录
    password: "Contraseña", // 密码
    forgotPassword: "¿Olvidaste tu contraseña?", // 忘记密码？
    noAccount: "¿No tienes una cuenta？", // 没有账户？注册
    accountNotExists: "Esta cuenta no existe.", // 账户不存在
    passwordError: "Error de contraseña", // 密码错误
    sendCode: "Enviar código de verificación", // 发送验证码
    resetPassword: "Restablecer contraseña", // 重置密码
    resetYourPassword: "Restablece tu contraseña", // 重置你的密码
    newOldCantSame: "La nueva contraseña debe ser diferente de la anterior.", // 新密码与旧密码不能相同
    passwordResetOk: "¡Contraseña restablecida con éxito!", // 密码重置成功！
    signupToSaveProgress: "Completa el registro para guardar tu progreso.",
    tip: "Consejo",
    tipContentEmail:
      "Acabamos de enviar la contraseña de acceso de su cuenta a su correo electrónico.",
    tipContentPassword:
      "Por favor revise su bandeja de entrada e inicie sesión con su correo electrónico y contraseña.",
    codeToEmail:
      "Acabamos de enviar un código de verificación a su correo electrónico. Por favor revise su bandeja de entrada y pegue el código de verificación arriba."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Plan de suscripción",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transcripciones diarias",
    uploadMinutes: "Subidas de 30 minutos",
    lowerPriority: "Prioridad más baja",
    currentPlan: "Plan actual",
    professionalEdition: "edición profesional",
    unlimitedTranscription: "Transcripción ilimitada",
    unlimitedNumberOfTimes:
      "Frecuencia y duración de transcripción ilimitadas.",
    filesUploadedAtOnce:
      "Cada archivo puede durar hasta 10 horas/5 GB. Sube 50 archivos a la vez.",
    highestPriority: "máxima prioridad",
    weWillGiveTheHighest:
      "Siempre transcribiremos tus archivos lo antes posible con la máxima prioridad.",
    theFirstMonth: "El primer mes",
    subscribeTo: "suscribirse a",
    basicVersionFree: "Versión básica (gratis)",
    return: "Volver",
    annualize: "anualizar",
    monthly: "mensual",
    everyYear: "cada año",
    saved: "ahorrado",
    byTheMonth: "por mes",
    firstMonth: "primer mes",
    afterwardsEveryMonth: "Después, cada mes",
    manageSubscription: "Administrar suscripción",
    professionalYearbook: "Anual profesional",
    professionalMonthly: "Mensual profesional",
    subscriptionWillCancelledOn: "Tu suscripción se cancelará el",
    displayLanguage: "Idioma de visualización",
    update: "Actualizar ahora",
    basicversion: "Versión básica (Gratis)",
    daily: "{start} de {end} transcripciones diarias usadas",
    upgradetoPro: "Actualizar a Pro",
    accountSetting: "Configuración de cuenta",
    logOut: "Cerrar sesión",
    account: "Cuenta",
    email: "Correo electrónico",
    id: "ID",
    password: "Contraseña",
    resetPassword: "Restablecer contraseña",
    logIn: "Iniciar sesión",
    tryForFree: "Probar gratis",
    notFund: "No encontrado",
    couldntFind: "No pudimos encontrar lo que buscabas.",
    proAnnual: "Pro Anual",
    proMonthly: "Pro Mensual",
    perMonth: "por mes",
    afterwards: "después",
    accuracy: "precisión de transcripción",
    supported: "idiomas admitidos",
    identification: "Identificación de hablante",
    transcriptSranslation: "Traducción de transcripción",
    perYear: "por año",
    getProPlan: "Obtener plan Pro",
    changeToAnnual: "Cambiar a anual",
    automaticRenewalon: "Renovación automática el",
    eachMonth: "Renovación automática el día {time} de cada mes.",
    automaticRenewal:
      "Renovación automática fallida, por favor verifique el método de pago.",
    eachYear: "Renovación automática el {time} cada año.",
    returnAccountSetting: "Volver",
    needsToWaitLonger:
      "Espere un poco más antes de que sus archivos sean transcritos.",
    freeThreeTimesDay: "Transcribe 3 archivos gratis cada día.",
    oneFileUploaded:
      "Cada archivo puede tener una duración de hasta 30 minutos. Sube 1 archivo a la vez.",
    uploadWithinHours: "Cargas de 10 horas",
    yourSubscription: "Tu suscripción será cancelada el {time}.",
    save: "Ahorrar"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chino(Simplificado)",
      "Chinese(Traditional)": "Chino(Tradicional)",
      Japanese: "Japonés",
      Danish: "Danés",
      German: "Alemán",
      English: "Inglés",
      Spanish: "Español",
      French: "Francés",
      Italian: "Italiano",
      Hungarian: "Húngaro",
      Dutch: "Neerlandés",
      Norwegian: "Noruego",
      Polish: "Polaco",
      Portuguese: "Portugués",
      Finnish: "Finlandés",
      Swedish: "Sueco",
      Turkish: "Turco",
      Greek: "Griego",
      Russian: "Ruso",
      Ukrainian: "Ucraniano",
      Hebrew: "Hebreo",
      Arabic: "Árabe",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Plantilla SaaS de Nuxt3 de código abierto, preintegrada con pasarelas de pago globales (Stripe/Cream), Google OAuth, enrutamiento i18n y herramientas de optimización SEO. Diseñada para desarrolladores que lanzan aplicaciones web multilingües, ofrece soporte SSR/SSG y seguridad de nivel de producción lista para usar.",
    startLink: "Comienza la prueba gratuita~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "¡Únete a la lista de espera y recibe primero las últimas noticias y descuentos de NuxtPro!",
      placeholder: "Introduce tu correo electrónico",
      button: "Unirse a la lista de espera",
      joinCountMessage:
        "🔥 ¡El usuario temprano #{count} acaba de unirse a la lista de espera!"
    },
    seo: {
      title: "Plantilla SaaS de Nuxt de código abierto | NuxtPro",
      description:
        "El boilerplate de NuxtJS con todo lo que necesitas para poner tu producto frente a los clientes. De la idea a la producción en 5 minutos."
    },
    api: {
      title: "esto es una demo",
      corpInfo: "información de la empresa"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "error de descarga de video"
      },
      mse: {
        code: 2,
        msg: "error al añadir flujo"
      },
      parse: {
        code: 3,
        msg: "error de análisis"
      },
      format: {
        code: 4,
        msg: "formato incorrecto"
      },
      decoder: {
        code: 5,
        msg: "error de decodificación"
      },
      runtime: {
        code: 6,
        msg: "errores gramaticales"
      },
      timeout: {
        code: 7,
        msg: "tiempo de espera de reproducción"
      },
      other: {
        code: 8,
        msg: "otros errores"
      }
    },
    HAVE_NOTHING: "No hay información sobre si el audio/video está listo",
    HAVE_METADATA: "Los metadatos de audio/video están listos ",
    HAVE_CURRENT_DATA:
      "Hay datos sobre la ubicación de reproducción actual, pero no hay suficientes datos para reproducir el siguiente fotograma/milisegundo",
    HAVE_FUTURE_DATA:
      "Actualmente y al menos un fotograma de datos está disponible",
    HAVE_ENOUGH_DATA:
      "Los datos disponibles son suficientes para comenzar a reproducir",
    NETWORK_EMPTY: "El audio/video no ha sido inicializado",
    NETWORK_IDLE:
      "El audio/video está activo y se han seleccionado recursos, pero no se utiliza la red",
    NETWORK_LOADING: "El navegador está descargando los datos",
    NETWORK_NO_SOURCE: "No se encontró ninguna fuente de audio/video",
    MEDIA_ERR_ABORTED: "El usuario abortó el proceso de obtención",
    MEDIA_ERR_NETWORK: "Ocurrió un error al descargar",
    MEDIA_ERR_DECODE: "Ocurrió un error al decodificar",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video no es compatible",
    REPLAY: "Repetir",
    ERROR: "La red está desconectada",
    PLAY_TIPS: "Reproducir",
    PAUSE_TIPS: "Pausar",
    PLAYNEXT_TIPS: "Reproducir siguiente",
    DOWNLOAD_TIPS: "Descargar",
    ROTATE_TIPS: "Rotar",
    RELOAD_TIPS: "Recargar",
    FULLSCREEN_TIPS: "Pantalla completa",
    EXITFULLSCREEN_TIPS: "Salir de pantalla completa",
    CSSFULLSCREEN_TIPS: "Csspantallacompleta",
    EXITCSSFULLSCREEN_TIPS: "Salir de csspantallacompleta",
    TEXTTRACK: "Subtítulo",
    PIP: "PIP",
    SCREENSHOT: "Captura de pantalla",
    LIVE: "EN VIVO",
    OFF: "Apagar",
    OPEN: "Abrir",
    MINI_DRAG: "Haz clic y mantén presionado para arrastrar",
    MINISCREEN: "Minipantalla",
    REFRESH_TIPS: "Por favor, inténtalo",
    REFRESH: "Actualizar",
    FORWARD: "adelantar",
    LIVE_TIP: "En vivo",
    TM_SUBTITLE_SHOW_TIPS: "Activar subtítulos",
    TM_SUBTITLE_HIDE_TIPS: "Desactivar subtítulos",
    TM_MINIMIZE_TIPS: "Ocultar el video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "política de privacidad",
    lastUpdated: "Última actualización: 25 de agosto de 2025",
    policyDescription:
      'Esta Política describe cómo Scribify (en adelante, "Scribify", "nuestro", "nosotros") recopila, usa y divulga su información personal cuando utiliza nuestros servicios, sitios web',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      ', y software (colectivamente, los "Servicios").',
    policyAgreement:
      "Lea atentamente esta Política de Privacidad y asegúrese de comprenderla. Al utilizar cualquiera de nuestros Servicios, usted acepta esta Política de Privacidad. Si no está de acuerdo con el uso que hagamos de sus datos personales conforme a esta Política, debe dejar de usar nuestros Servicios inmediatamente.",
    policyOverview:
      "En esta política, explicamos qué datos recopilamos y por qué; cómo gestionamos sus datos; y sus derechos con respecto a ellos. No vendemos sus datos.",
    scopeTitle: "1. Alcance de esta Política de Privacidad",
    whatWeCollectTitle: "2. Qué recopilamos y por qué",
    accessShareTitle: "3. Cuándo accedemos o compartimos su información",
    secureDataTitle: "4. Cómo protegemos sus datos",
    deleteContentTitle: "5. ¿Qué sucede cuando eliminas tu contenido?",
    locationTitle: "6. Ubicación del sitio y datos",
    childrenPrivacyTitle: "7. Privacidad de los niños",
    updatesTitle: "8. Actualizaciones de esta Política de Privacidad",
    contactUsTitle: "9. Contáctenos",
    identityAccessTitle: "2.1 Identidad y acceso",
    billingInfoTitle: "2.2 Información de facturación",
    productInteractionsTitle: "2.3 Interacciones del producto",
    websiteInteractionsTitle: "2.4 Interacciones del sitio web",
    cookiesTitle: "2.5 Galletas",
    voluntaryCorrespondenceTitle: "2.6 Correspondencia voluntaria",
    scopeContent:
      "Esta Política de Privacidad se aplica únicamente a la recopilación y el procesamiento de información sobre los usuarios de los Servicios. No se aplica a ningún servicio, sitio web ni software operado por terceros que estén vinculados con nosotros (ya sea que proporcionemos dichos enlaces o que otros usuarios los compartan), ni al contenido, los datos, las aplicaciones ni los materiales de terceros. Le recomendamos que consulte las políticas de privacidad de cualquier sitio web o software de terceros antes de proporcionarles información.",
    collectPrinciple:
      "Nuestro principio rector es recolectar solo lo necesario. Esto significa en la práctica:",
    identityAccessContent:
      "Al suscribirse a uno de nuestros productos, le solicitamos información de identificación, como su nombre y correo electrónico. Esto nos permite ofrecerle funcionalidades esenciales del producto y enviarle actualizaciones y otra información esencial.",
    billingInfoContent:
      "Si se suscribe a un producto de pago, se le solicitará su información de pago y dirección de facturación. Esta información se envía directamente a nuestro procesador de pagos y no llega a nuestros servidores.",
    productInteractionsContent:
      "Almacenamos en nuestros servidores el contenido que usted sube, recibe o mantiene en sus cuentas de producto. A menos que lo elimine, podremos conservarlo mientras su cuenta esté activa.",
    websiteInteractionsContent:
      "Recopilamos información sobre su actividad de navegación con fines analíticos y estadísticos, como la evaluación de la tasa de conversión y la experimentación con nuevos diseños de productos. Esto incluye, por ejemplo, la versión de su navegador y sistema operativo, su dirección IP, las páginas web que visitó y su tiempo de carga, y el sitio web que lo refirió a nosotros. Si tiene una cuenta y ha iniciado sesión, estos datos de analítica web se vinculan a su dirección IP y cuenta de usuario hasta que su cuenta deje de estar activa.",
    cookiesContent1:
      "También utilizamos cookies propias persistentes y algunas cookies de terceros para almacenar determinadas preferencias, facilitarle el uso de nuestras aplicaciones, realizar pruebas A/B y respaldar algunos análisis.",
    cookiesContent2:
      "Una cookie es un fragmento de texto que almacena su navegador. Puede ayudarle a recordar la información de inicio de sesión y las preferencias del sitio. También puede recopilar información como el tipo de navegador, el sistema operativo, las páginas web visitadas, la duración de la visita, el contenido visualizado y otros datos de navegación. Puede ajustar la configuración de retención de cookies y aceptar o bloquear cookies individuales en la configuración de su navegador, aunque nuestras aplicaciones no funcionarán correctamente y otros aspectos de nuestro servicio podrían no funcionar correctamente si desactiva las cookies.",
    voluntaryCorrespondenceContent:
      "Cuando nos envía un correo electrónico con una pregunta o para solicitar ayuda, conservamos esa correspondencia, incluida su dirección de correo electrónico, para que tengamos un historial de correspondencia pasada para consultar si se comunica con nosotros en el futuro.",
    accessShareContent1:
      "Para proporcionarle los productos o servicios que ha solicitado. Utilizamos subprocesadores externos para el funcionamiento de nuestras aplicaciones y para prestarle los Servicios. Esto incluye proveedores de servicios en la nube y de análisis.",
    accessShareContent2:
      "Para investigar, prevenir o tomar medidas en caso de abuso. Acceder a la cuenta de un cliente para investigar un posible abuso es una medida de último recurso. Queremos proteger la privacidad y la seguridad tanto de nuestros clientes como de quienes nos informan sobre problemas, y hacemos todo lo posible por equilibrar estas responsabilidades durante todo el proceso. Si descubrimos que está utilizando nuestros productos para un fin restringido, tomaremos las medidas necesarias, incluyendo la notificación a las autoridades competentes cuando corresponda.",
    accessShareContent3: "Cuando lo requiera la legislación aplicable.",
    userDataRequests:
      "Solicitudes de datos de usuarios. Nuestra política es no responder a solicitudes gubernamentales de datos de usuarios, a menos que estemos obligados por un proceso legal o en circunstancias limitadas, en caso de una solicitud de emergencia. Sin embargo, si las autoridades policiales estadounidenses cuentan con la orden judicial, citación penal o resolución judicial que nos obligue a compartir datos, debemos cumplir. Asimismo, solo responderemos a solicitudes de autoridades gubernamentales fuera de EE. UU. si así lo exige el gobierno estadounidense mediante los procedimientos descritos en un tratado o acuerdo de asistencia legal mutua. Nuestra política es notificar a los usuarios afectados antes de compartir datos, a menos que tengamos prohibido hacerlo legalmente, y excepto en casos de emergencia.",
    preservationRequests:
      "Solicitudes de conservación. De igual forma, nuestra política es cumplir con las solicitudes de conservación de datos únicamente si así lo exige la Ley Federal de Comunicaciones Almacenadas de EE. UU., Título 18 del Código de los Estados Unidos, Sección 2703(f), o una citación judicial debidamente notificada en EE. UU. para asuntos civiles. No compartimos datos conservados a menos que lo exija la ley o una orden judicial que decidamos no apelar. Además, a menos que recibamos una orden judicial, una orden judicial o una citación judicial antes de que expire el plazo de conservación requerido, destruiremos cualquier copia conservada de los datos del cliente al finalizar dicho plazo.",
    taxAudit:
      "Si una autoridad fiscal nos audita, podríamos estar obligados a compartir información de facturación. En ese caso, compartiremos solo la mínima necesaria, como las direcciones de facturación y la información sobre exenciones fiscales.",
    secureDataContent1: "Todos los datos están encriptados mediante",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "cuando se transmiten desde nuestros servidores a su navegador.",
    deleteContentContent:
      "Si elimina cualquier contenido, éste quedará inmediatamente inaccesible.",
    locationContent:
      "Nuestros productos y otras propiedades web operan en Estados Unidos. Si se encuentra en la Unión Europea, el Reino Unido o en cualquier otro lugar fuera de Estados Unidos, tenga en cuenta que cualquier información que nos proporcione se transferirá y almacenará en Estados Unidos. Al utilizar nuestros sitios web o Servicios, o al proporcionarnos su información personal, usted consiente dicha transferencia.",
    childrenPrivacyContent:
      "Los Servicios no están dirigidos a menores y no recopilamos intencionalmente información personal de menores de 13 años. Si usted es menor de 13 años, le rogamos que no envíe información personal a través de los Servicios. Si cree que un menor nos ha proporcionado información personal infringiendo esta Política, póngase en contacto con nosotros como se indica a continuación.",
    updatesContent:
      "Podemos actualizar esta política según sea necesario para cumplir con la normativa pertinente y reflejar cualquier nueva práctica. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página.",
    contactUsContent1:
      "Si tiene alguna pregunta, comentario o queja sobre nuestra Política de Privacidad, por favor",
    contactUs: "Contáctanos",
    contactUsContent2:
      "y nos esforzaremos por atender su queja lo antes posible."
  },
  termsOfService: {
    termsOfServiceTitle: "Condiciones de servicio",
    lastUpdated: "Última actualización: 21 de septiembre de 2022",
    thankYouMessage: "¡Gracias por utilizar nuestros productos!",
    companyReference:
      'Cuando decimos "Compañía", "nosotros", "nuestro" o "nos" en este documento, nos referimos a Scribify.',
    servicesDefinition:
      'Cuando decimos "Servicios", nos referimos a cualquier producto creado y mantenido por Scribify, ya sea entregado dentro de un navegador web, una aplicación de escritorio, una aplicación móvil u otro formato.',
    termsUpdateNotice:
      "Es posible que actualicemos estos Términos de Servicio en el futuro. Normalmente, estos cambios se han realizado para aclarar algunos de estos términos mediante enlaces a una política relacionada más amplia. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página y tomaremos las medidas necesarias para notificar a los titulares de las cuentas.",
    acceptanceOfAgreementTitle: "1. Aceptación del Acuerdo",
    scribifyServicesTitle: "2. Servicios de Scribify",
    accountTermsTitle: "3. Condiciones de la cuenta",
    paymentRefundsTitle: "4. Pagos, reembolsos y cambios de plan",
    cancellationTerminationTitle: "5. Cancelación y terminación",
    submissionsTitle: "6. Envíos",
    uptimeSecurityTitle: "7. Tiempo de actividad y seguridad",
    siteManagementTitle: "8. Gestión del sitio",
    copyrightContentTitle: "9. Derechos de autor y propiedad del contenido",
    prohibitedActivitiesTitle: "10. Actividades prohibidas",
    featuresBugsTitle: "11. Características y errores",
    correctionsTitle: "12. CORRECCIONES",
    userDataTitle: "13. Datos del usuario",
    privacyPolicyTitle: "14. Política de privacidad",
    liabilityTitle: "15. Responsabilidad",
    miscellaneousTitle: "16. Varios",
    contactUsTitle: "17. Contáctenos",
    acceptanceContent1:
      "Al utilizar nuestros Servicios, usted acepta este Acuerdo, que se convierte en un contrato vinculante entre usted y Scribify. Declara tener la capacidad legal para aceptar estos Términos y afirma ser mayor de edad para formalizar un contrato vinculante. La aceptación por parte de Scribify está expresamente condicionada a su consentimiento a todos los términos y condiciones de este Acuerdo.",
    acceptanceContent2:
      "Los Servicios no están destinados a menores de 18 años ni deben ser utilizados por ellos. Al utilizar los Servicios, usted declara y garantiza que cumple con el requisito de elegibilidad anterior.",
    acceptanceContent3:
      'Los términos "usted", "su" y "usted mismo" también incluyen a sus empleados, agentes, representantes comerciales y cualquier otra persona a la que proporcione acceso a los Servicios a través de su Cuenta (según se define más adelante). Usted es responsable de garantizar que todas las personas que accedan a los Servicios a través de su cuenta conozcan y cumplan estos Términos.',
    acceptanceContent4:
      "Scribify se reserva el derecho de revisar y actualizar estos Términos periódicamente a su entera discreción. Todos los cambios entran en vigor inmediatamente después de su publicación. Su uso continuado de los Servicios tras la publicación de los Términos revisados implica que acepta y está de acuerdo con los cambios. Le recomendamos que consulte esta página periódicamente para estar al tanto de cualquier cambio, ya que es vinculante.",
    servicesContent1:
      "Nuestros Servicios permiten a los usuarios transformar conversaciones de voz en texto transcrito que se puede buscar, traducir y compartir con otros.",
    servicesContent2:
      'Usted puede elegir si desea utilizar la versión gratuita de los Servicios ("Servicios gratuitos") o la versión paga de los Servicios basada en suscripción por la que es posible que deba pagar tarifas (los "Servicios pagados").',
    servicesContent3:
      "Pondremos los Servicios a su disposición. Usted es responsable de hacer todos los arreglos necesarios para acceder a ellos.",
    accountTerms1:
      "Usted es responsable de mantener la seguridad de su cuenta. La Compañía no se responsabiliza de ninguna pérdida o daño derivado del incumplimiento de esta obligación de seguridad.",
    accountTerms2:
      "- No puede utilizar los Servicios para ningún propósito ilegal, poco ético o inmoral.",
    accountTerms3:
      "- Usted es responsable de todo el contenido publicado y de la actividad que se realice en su cuenta. Esto incluye el contenido publicado por otras personas que: (a) tengan acceso a sus credenciales de inicio de sesión; o (b) tengan sus propias credenciales de inicio de sesión en su cuenta.",
    accountTerms4:
      "Debe ser un humano. No se permiten cuentas registradas mediante bots ni otros métodos automatizados.",
    paymentContent1:
      "Para los Servicios de pago que ofrecen una prueba gratuita, le explicamos la duración de la prueba al registrarse. Después del periodo de prueba, deberá pagar por adelantado para seguir usando el Servicio. Si no paga, estos servicios finalizarán.",
    paymentContent2:
      "- Si está actualizando de un plan gratuito a un plan pago, cobraremos su tarjeta inmediatamente y su ciclo de facturación comenzará el día de la actualización.",
    paymentContent3:
      "Todas las tarifas no incluyen impuestos, gravámenes ni aranceles impuestos por las autoridades fiscales. Cuando sea necesario, recaudaremos dichos impuestos en nombre de la autoridad fiscal y los remitiremos a la misma. De lo contrario, usted será responsable del pago de todos los impuestos, gravámenes o aranceles.",
    paymentContent4:
      "- Ninguna compra es reembolsable. Puede cancelar cualquier servicio de pago en cualquier momento iniciando sesión en su cuenta. En el caso de las suscripciones de pago, la cancelación se hará efectiva al finalizar el periodo de pago actual, a menos que se indique lo contrario.",
    cancellationContent1:
      "Si cancela el Servicio antes de que finalice el tiempo pagado, su cancelación se hará efectiva de inmediato y no se le cobrará de nuevo. No prorrateamos automáticamente el tiempo no utilizado en el último ciclo de facturación.",
    cancellationContent2:
      "Nos reservamos el derecho de suspender o cancelar su cuenta y denegarle el uso actual o futuro de nuestros Servicios, por cualquier motivo y en cualquier momento. La suspensión implica que no podrá acceder a la cuenta ni a su contenido. La cancelación también resultará en la eliminación de su cuenta o su acceso a ella, así como en la pérdida y renuncia a todo el contenido de su cuenta. También nos reservamos el derecho de denegar el uso de los Servicios a cualquier persona, por cualquier motivo y en cualquier momento. Esta cláusula se aplica porque, estadísticamente, de los cientos de miles de cuentas en nuestros Servicios, al menos una realiza actividades ilícitas.",
    cancellationContent3:
      "- El abuso verbal, físico, escrito o de otro tipo (incluidas las amenazas de abuso o represalias) de un empleado o funcionario de la Compañía puede resultar en la cancelación inmediata de la cuenta.",
    submissionsContent:
      'Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, opinión u otra información relacionada con el Sitio ("Contenidos") que nos proporcione no es confidencial y pasará a ser de nuestra exclusiva propiedad. Tendremos los derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y la difusión sin restricciones de estos Contenidos para cualquier fin lícito, comercial o de otro tipo, sin necesidad de reconocimiento ni compensación para usted. Por la presente, usted renuncia a todos los derechos morales sobre dichos Contenidos y garantiza que son originales suyos o que tiene derecho a enviarlos. Usted acepta que no habrá recurso contra nosotros por ninguna infracción o apropiación indebida, presunta o real, de ningún derecho de propiedad sobre sus Contenidos.',
    uptimeContent1:
      "El uso que usted hace de los Servicios es bajo su propio riesgo. Los proporcionamos tal como están y según disponibilidad. No ofrecemos acuerdos de nivel de servicio para la mayoría de nuestros Servicios, pero nos tomamos muy en serio el tiempo de actividad de nuestras aplicaciones.",
    uptimeContent2:
      "Nos reservamos el derecho a desactivar temporalmente su cuenta si su uso supera significativamente el uso habitual de otros clientes de los Servicios. Por supuesto, nos pondremos en contacto con usted antes de tomar cualquier medida, salvo en casos excepcionales en los que el nivel de uso pueda afectar negativamente el rendimiento del Servicio para otros clientes.",
    uptimeContent3:
      "Tomamos numerosas medidas para proteger y asegurar sus datos mediante copias de seguridad, redundancias y cifrado. Aplicamos cifrado para la transmisión de datos a través de la internet pública.",
    uptimeContent4:
      "- Utilizamos proveedores externos y socios de alojamiento para proporcionar el hardware, el software, la red, el almacenamiento y la tecnología relacionada necesarios para ejecutar los Servicios.",
    siteManagementContent:
      "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear el Sitio para detectar violaciones de estos Términos de Servicio; (2) tomar las medidas legales apropiadas contra cualquier persona que, a nuestra entera discreción, viole la ley o estos Términos de Servicio, incluyendo, sin limitación, reportar a dicho usuario a las autoridades policiales; (3) a nuestra entera discreción y sin limitación, rechazar, restringir el acceso, limitar la disponibilidad de, o deshabilitar (en la medida que sea tecnológicamente factible) cualquiera de sus Contribuciones o cualquier parte de las mismas; (4) a nuestra entera discreción y sin limitación, aviso o responsabilidad, eliminar del Sitio o deshabilitar de otra manera todos los archivos y contenido que sean excesivos en tamaño o que de alguna manera sean una carga para nuestros sistemas; y (5) administrar de otra manera el Sitio de una manera diseñada para proteger nuestros derechos y propiedad y para facilitar el correcto funcionamiento del Sitio.",
    copyrightContent1:
      "- Todo el contenido publicado en los Servicios debe cumplir con la ley de derechos de autor de EE. UU.",
    copyrightContent2:
      "No reclamamos derechos de propiedad intelectual sobre el material que usted proporciona a los Servicios. Todo el material subido es suyo.",
    copyrightContent3:
      "- No seleccionamos previamente el contenido, pero nos reservamos el derecho (pero no la obligación), a nuestra entera discreción, de rechazar o eliminar cualquier contenido que esté disponible a través del Servicio.",
    copyrightContent4:
      "Los nombres, la apariencia y el funcionamiento de los Servicios son propiedad intelectual de la Compañía. Todos los derechos reservados. No puede duplicar, copiar ni reutilizar ninguna parte del HTML, CSS, JavaScript ni los elementos de diseño visual sin la autorización expresa por escrito de la Compañía. Debe solicitar permiso para usar el logotipo de la Compañía o cualquier logotipo del Servicio con fines promocionales.",
    emailUs: "Envíenos un correo electrónico",
    copyrightContent5:
      "Solicitudes de uso de logotipos. Nos reservamos el derecho de revocar este permiso si infringe estos Términos de Servicio.",
    copyrightContent6:
      "- Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte de los Servicios, el uso de los Servicios o el acceso a los Servicios sin el permiso expreso por escrito de la Compañía.",
    copyrightContent7:
      "- No debe modificar otro sitio web de manera que dé a entender falsamente que está asociado con los Servicios o la Empresa.",
    copyrightContent8:
      "Respetamos los derechos de propiedad intelectual de terceros. Si cree que algún material disponible en el Sitio o a través de él infringe algún derecho de autor que usted posee o controla, por favor, compruébelo inmediatamente.",
    contactUs: "Contáctanos",
    copyrightContent9:
      "Se enviará una copia de su Notificación a la persona que publicó o almacenó el material mencionado en ella. Tenga en cuenta que, de acuerdo con la legislación aplicable, podría ser responsable de daños y perjuicios si realiza declaraciones falsas en una Notificación. Por lo tanto, si no está seguro de que el material que se encuentra en el Sitio o enlaza a él infrinja sus derechos de autor, le recomendamos contactar primero con un abogado.",
    prohibitedActivitiesIntro:
      "No podrá acceder ni utilizar el Sitio para ningún otro fin que no sea el previsto. El Sitio no podrá utilizarse para fines comerciales, salvo aquellos que estén específicamente respaldados o aprobados por nosotros.",
    prohibitedActivitiesUserAgreement:
      "Como usuario del Sitio, usted acepta no:",
    prohibitedActivity1:
      "- Recuperar sistemáticamente datos u otro contenido del Sitio para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.",
    prohibitedActivity2:
      "- Engañar, defraudar o confundirnos a nosotros o a otros usuarios, especialmente en cualquier intento de obtener información confidencial de la cuenta, como las contraseñas de los usuarios.",
    prohibitedActivity3:
      "- Eludir, deshabilitar o interferir de otro modo con las características relacionadas con la seguridad del Sitio, incluidas las características que impiden o restringen el uso o la copia de cualquier Contenido o imponen limitaciones en el uso del Sitio y/o el Contenido incluido en el mismo.",
    prohibitedActivity4:
      "- Menospreciar, manchar o de cualquier otra manera perjudicar, en nuestra opinión, a nosotros y/o al Sitio.",
    prohibitedActivity5:
      "- Utilizar cualquier información obtenida del Sitio para acosar, abusar o dañar a otra persona.",
    prohibitedActivity6:
      "- Hacer un uso indebido de nuestros servicios de soporte o enviar informes falsos de abuso o mala conducta.",
    prohibitedActivity7:
      "- Utilizar el Sitio de una manera incompatible con las leyes o reglamentaciones aplicables.",
    prohibitedActivity8:
      "- Participar en la creación de marcos o enlaces no autorizados al Sitio.",
    prohibitedActivity9:
      "- Cargar o transmitir (o intentar cargar o transmitir) virus, caballos de Troya u otro material, incluido el uso excesivo de letras mayúsculas y el spam (publicación continua de texto repetitivo), que interfiera con el uso y disfrute ininterrumpido del Sitio por parte de cualquier parte o que modifique, deteriore, interrumpa, altere o interfiera con el uso, las características, las funciones, el funcionamiento o el mantenimiento del Sitio.",
    prohibitedActivity10:
      "- Participar en cualquier uso automatizado del sistema, como utilizar scripts para enviar comentarios o mensajes, o utilizar cualquier minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
    prohibitedActivity11:
      "- Eliminar el aviso de derechos de autor u otros derechos de propiedad de cualquier Contenido.",
    prohibitedActivity12:
      "- Intentar suplantar a otro usuario o persona o utilizar el nombre de usuario de otro usuario.",
    prohibitedActivity13:
      '- Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo pasivo o activo de recopilación o transmisión de información, incluidos, entre otros, formatos de intercambio de gráficos claros ("gifs"), píxeles 1×1, errores web, cookies u otros dispositivos similares (a veces denominados "spyware" o "mecanismos de recopilación pasiva" o "pcms").',
    prohibitedActivity14:
      "- Interferir, interrumpir o crear una carga indebida en el Sitio o las redes o servicios conectados al Sitio.",
    prohibitedActivity15:
      "- Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en proporcionarle cualquier parte del Sitio.",
    prohibitedActivity16:
      "- Intentar eludir cualquier medida del Sitio diseñada para impedir o restringir el acceso al Sitio o a cualquier parte del Sitio.",
    prohibitedActivity17:
      "- Copiar o adaptar el software del Sitio, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código.",
    prohibitedActivity18:
      "- Salvo que lo permita la ley aplicable, descifrar, descompilar, desensamblar o aplicar ingeniería inversa a ningún software que comprenda o forme parte de algún modo del Sitio.",
    prohibitedActivity19:
      "- Salvo que sea el resultado del uso estándar de un motor de búsqueda o de un navegador de Internet, utilizar, lanzar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier araña, robot, utilidad de trampa, raspador o lector fuera de línea que acceda al Sitio, o utilizar o lanzar cualquier script u otro software no autorizado.",
    prohibitedActivity20:
      "- Utilizar un agente de compras o agente de compras para realizar compras en el Sitio.",
    prohibitedActivity21:
      "- Hacer cualquier uso no autorizado del Sitio, incluyendo la recopilación de nombres de usuario y/o direcciones de correo electrónico de los usuarios por medios electrónicos o de otro tipo con el fin de enviar correo electrónico no solicitado, o crear cuentas de usuario por medios automatizados o bajo falsas pretensiones.",
    prohibitedActivity22:
      "- Utilizar el Sitio como parte de cualquier esfuerzo para competir con nosotros o, de otro modo, utilizar el Sitio y/o el Contenido para cualquier esfuerzo generador de ingresos o empresa comercial.",
    prohibitedActivity23:
      "- Utilizar el Sitio para publicitar u ofrecer vender bienes y servicios.",
    prohibitedActivity24:
      "- Vender o transferir de cualquier otra forma su perfil.",
    featuresContent1:
      "Diseñamos nuestros Servicios con esmero, basándonos en nuestra propia experiencia y en la de nuestros clientes, quienes comparten su tiempo y comentarios. Sin embargo, no existe un servicio que satisfaga a todos. No garantizamos que nuestros Servicios satisfagan sus necesidades o expectativas específicas.",
    featuresContent2:
      "También probamos todas nuestras funciones antes de lanzarlas. Como con cualquier software, nuestros Servicios inevitablemente presentan errores. Hacemos un seguimiento de los errores que nos informan y los solucionamos, especialmente los relacionados con la seguridad o la privacidad. No todos los errores informados se solucionarán y no garantizamos que nuestros Servicios estén completamente libres de errores.",
    correctionsContent1:
      "El Sitio puede contener información que contenga errores tipográficos, inexactitudes u omisiones, incluyendo descripciones, precios, disponibilidad y otra información diversa. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, así como de modificar o actualizar la información del Sitio en cualquier momento, sin previo aviso.",
    correctionsContent2:
      "No podemos garantizar la disponibilidad del Sitio en todo momento. Podríamos experimentar problemas de hardware, software u otros problemas, o necesitar realizar tareas de mantenimiento relacionadas con el Sitio, lo que podría provocar interrupciones, retrasos o errores. Nos reservamos el derecho a cambiar, revisar, actualizar, suspender, interrumpir o modificar el Sitio en cualquier momento y por cualquier motivo sin previo aviso. Usted acepta que no nos responsabilizamos de ninguna pérdida, daño o inconveniente causado por su imposibilidad de acceder o usar el Sitio durante cualquier periodo de inactividad o interrupción del mismo. Nada de lo dispuesto en estos Términos de Servicio se interpretará como una obligación para nosotros de mantener y dar soporte al Sitio ni de proporcionar correcciones, actualizaciones o actualizaciones relacionadas con el mismo.",
    userDataContent:
      "Mantendremos ciertos datos que transmita al Sitio para gestionar su rendimiento, así como los datos relacionados con su uso del mismo. Si bien realizamos copias de seguridad periódicas de los datos, usted es el único responsable de todos los datos que transmita o que se relacionen con cualquier actividad que haya realizado en el Sitio. Acepta que no nos responsabilizaremos de la pérdida o corrupción de dichos datos y, por la presente, renuncia a cualquier acción contra nosotros derivada de dicha pérdida o corrupción.",
    privacyPolicyContent1:
      "Nos preocupamos por la privacidad y seguridad de los datos. Por favor, revise nuestra",
    privacyPolicy: "política de privacidad",
    privacyPolicyContent2:
      "Al usar el Sitio, usted acepta nuestra Política de Privacidad, la cual se incorpora a estos Términos de Servicio. Tenga en cuenta que el Sitio está alojado en Estados Unidos. Si accede al Sitio desde cualquier otra región del mundo con leyes u otros requisitos que rijan la recopilación, el uso o la divulgación de datos personales que difieran de las leyes aplicables en Estados Unidos, al continuar usando el Sitio, estará transfiriendo sus datos a Estados Unidos y acepta que sus datos se transfieran y procesen allí.",
    liabilityIntro:
      "Mencionamos la responsabilidad a lo largo de estos Términos, pero para ponerlo todo en una sección:",
    liabilityContent:
      "Usted entiende y acepta expresamente que la Compañía no será responsable, en derecho o en equidad, ante usted o cualquier tercero por ningún daño directo, indirecto, incidental, lucro cesante, especial, consecuente, punitivo o ejemplar, incluyendo, pero no limitado a, daños por pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles (incluso si la Compañía ha sido informada de la posibilidad de tales daños), resultantes de: (1) el uso o la imposibilidad de usar los Servicios; (2) errores, equivocaciones o inexactitudes de contenido y materiales; (3) lesiones personales o daños a la propiedad, de cualquier naturaleza, resultantes de su acceso y uso del sitio; (4) el costo de adquisición de bienes y servicios sustitutos resultantes de cualquier bien, dato, información o servicio comprado u obtenido o mensajes recibidos o transacciones realizadas a través o desde los Servicios; (5) cualquier acceso no autorizado o uso de nuestros servidores seguros y/o cualquier información personal y/o información financiera almacenada en los mismos; (6) cualquier interrupción o cese de la transmisión hacia o desde el sitio; (7) cualquier error, virus, troyano o similares que puedan transmitirse hacia o a través del sitio por un tercero, y/o; (8) cualquier error u omisión en cualquier contenido y material o por cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso de cualquier contenido publicado, transmitido o puesto a disposición de otra manera a través del sitio; (9) declaraciones o conducta de cualquier tercero en el servicio; (10) o cualquier otro asunto relacionado con estos Términos de Servicio o los Servicios, ya sea como incumplimiento de contrato, agravio (incluida la negligencia, ya sea activa o pasiva), o cualquier otra teoría de responsabilidad.",
    miscellaneousContent:
      "Estos Términos de Servicio y cualquier política o norma operativa publicada por nosotros en el Sitio o con respecto al Sitio constituyen el acuerdo y entendimiento completo entre usted y nosotros. Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos de Servicio no constituirá una renuncia a dicho derecho o disposición. Estos Términos de Servicio operan en la máxima medida permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a terceros en cualquier momento. No seremos responsables de ninguna pérdida, daño, demora u omisión causada por cualquier causa fuera de nuestro control razonable. Si alguna disposición o parte de una disposición de estos Términos de Servicio se determina ilegal, nula o inaplicable, dicha disposición o parte de la disposición se considerará separable de estos Términos de Servicio y no afectará la validez y aplicabilidad de las disposiciones restantes. No se crea ninguna relación de empresa conjunta, sociedad, empleo o agencia entre usted y nosotros como resultado de estos Términos de Servicio o del uso del Sitio. Usted acepta que estos Términos de Servicio no se interpretarán en nuestra contra por el hecho de haberlos redactado. Por la presente, usted renuncia a todas y cada una de las defensas que pueda tener basadas en la forma electrónica de estos Términos de Servicio y la falta de firma de las partes para ejecutar estos Términos de Servicio.",
    contactUsContent1:
      "Si tiene alguna pregunta sobre cualquiera de los Términos de Servicio, por favor",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Características",
    UnlimitedTranscription: "Transcripción ilimitada",
    BulkUpload: "Carga masiva",
    Accuracy: "96% de precisión",
    Pricing: "Precios",
    UseCases: "Casos de uso",
    AllUseCases: "Todos los casos de uso",
    Podcasters: "Podcasters",
    Journalists: "Periodistas",
    ContentCreators: "Creadores de contenido",
    Researchers: "Investigadores",
    BusinessTeams: "Equipos de negocios",
    Educators: "Educadores",
    Resources: "Recursos",
    YouTubetoMP4: "YouTube a MP4",
    StartFreeTrial: "Pruébalo gratis"
  },
  Footer: {
    des: "El primer servicio de transcripción con IA verdaderamente ilimitado del mundo. Sin límites, sin restricciones, solo libertad para crear.",
    Features: "Características",
    UseCases: "Casos de uso",
    Company: "Compañía",
    featureMenus: ["Transcripción ilimitada", "Carga masiva", "96% de precisión"],
    useCaseMenus: [
      "Todos los casos de uso",
      "Podcasters",
      "Periodistas",
      "Creadores de contenido",
      "Investigadores",
      "Equipos de negocios",
      "Educadores"
    ],
    companyMenus: [
      "Acerca de",
      "Precios",
      "Privacidad",
      "Términos"
    ]
  },
  Index: {
    Hero: {
      badge: 'No más "Shrinkflation" - Realmente ilimitado',
      h1: "Deje de pagar por los límites:",
      gradient: "Transcripción de IA verdaderamente ilimitada",
      subtitle: "Sube todo tu archivo de podcast. Transcribe todas tus entrevistas. Procesa 50 archivos a la vez. Sin límites mensuales ni de carga. Por fin, una transcripción que se adapta a tus necesidades.",
      FreeTrial: "Pruébelo gratis - Sin tarjeta de crédito",
      HowWorks: "Vea cómo funciona",
      Unlimited: "Subidas de archivos ilimitadas",
      NoCap: "Sin límite de minutos mensuales",
      Hour: "Archivos admitidos de 10 horas",
      ExploreUseCases: "Explorar casos de uso"
    },
    Stats: {
      monthlyMinutes: "Minutos mensuales",
      fileUploads: "Subidas de archivos",
      batchProcessing: "Procesamiento por lotes",
      maxFileLength: "Longitud máxima de archivo"
    },
    FeaturesGrid: {
      try_now: "Pruébalo ahora",
      no_signup: "No es necesario registrarse",
      experience_unltd: "Experimente una transcripción verdaderamente ilimitada",
      upload_50: "Sube hasta 50 archivos a la vez, aquí mismo",
      no_limits: "No más límites ocultos",
      no_surprises: "No más sorpresas",
      transparency: "Mientras otros reducen silenciosamente sus minutos u ocultan límites en letra pequeña, nosotros creemos en la transparencia radical.",
      feat_unltd: "Realmente ilimitado",
      feat_unltd_desc: 'Sin una política de uso justo oculta entre los términos. Sin límites de almacenamiento disfrazados de "ilimitado". Sube tu archivo completo y transcríbalo todo. Lo decimos en serio.',
      feat_bulk: "Libertad de carga masiva",
      feat_bulk_desc: '¿Cansado de "3 importaciones de por vida" o "10 archivos al mes"? Sube 50 archivos a la vez, tantas veces como necesites. Perfecto para procesar trabajos atrasados.',
      feat_batch: "Procesamiento por lotes",
      feat_batch_desc: "Procesa toda tu temporada de podcast durante la noche. Sube 50 entrevistas a la vez. Deja que nuestra IA trabaje mientras duermes. Despierta con las transcripciones completas.",
      feat_accuracy: "96% de precisión",
      feat_accuracy_desc: "IA líder en la industria con puntuación inteligente, diarización de hablantes para hasta 20 hablantes y manejo impecable de acentos y términos técnicos.",
      feat_langs: "Más de 100 idiomas",
      feat_langs_desc: "Transcribe en más de 100 idiomas y traduce a más de 249. Sin cargos adicionales por idiomas diferentes. Contenido global, un precio único.",
      feat_pro: "Características profesionales",
      feat_pro_desc: "Marcas de tiempo a nivel de palabra para un posicionamiento preciso de audio/video, identificación precisa del hablante incluso durante cambios rápidos de conversación y texto perfectamente formateado con párrafos, oraciones y puntuación para una fácil lectura."
    },
    UseCases: {
      built_for: "Creado para",
      "heavy_users": "Usuarios habituales como tú",
      "join_users": 'Únase a los YouTubers, creadores de contenido y podcasters que cambiaron de servicios de "shrinkflation"',
      "podcasters": {
        "title": "Podcasters",
        "des": "Sube todo tu catálogo anterior. Crea notas para cada episodio. Olvídate de elegir qué episodios transcribir."
      },
      "content_creators": {
        "title": "Creadores de contenido",
        "des": "Convierte tu videoteca en texto con función de búsqueda. Genera subtítulos para todo. Sin contar minutos, solo creación."
      },
      "journalists": {
        "title": "Periodistas",
        "des": 'Sube todas tus entrevistas a la vez. Olvídate de los obstáculos de "10 archivos al mes" cuando tengas que entregar el trabajo. Procesa todo.'
      },
      researchers: {
        title: "Investigadores",
        des: "Transcriba horas de grupos focales y entrevistas. Cargue todo su estudio de una sola vez. Identifique con precisión a los oradores."
      },
      business_teams: {
        title: "Equipos de negocios",
        des: "Graba todas las llamadas sin preocuparte por los límites. Obtén información de IA sobre todas las conversaciones, no solo sobre algunas."
      },
      educators: {
        title: "Educadores",
        des: "Transcribe series completas de conferencias. Haz que todo el contenido sea accesible. Sin tener que elegir entre cursos debido al límite de minutos."
      }
    },
    Testimonials: {
      title: "Amado por",
      highlighted_users: "Más de 50.000 usuarios",
      subtitle: "Vea por qué los profesionales eligen NeverCap en lugar de alternativas limitadas",
      Mike: {
        "text": "¡Madre mía, esto sí funciona! Llevo 3 años haciendo un podcast y lo transcribía todo a mano como un idiota. Subí 6 episodios a la vez y me separó a la perfección de mi copresentador. ¿El episodio de la cafetería que pensé que estaba arruinado? Una transcripción nítida. Nunca más volveré a escribir esto yo mismo.",
        "author": "Mike Rodríguez",
        "role": "Presentador de podcast"
      },
      Sarah: {
        "text": "Doy clases en línea y necesitaba subtítulos para mis videos. Probé otras tres herramientas que tenían limitaciones extrañas o tardaban muchísimo. Esta simplemente... ¿funciona? Subí mi clase de español y conseguí subtítulos perfectos en unos dos minutos. Mis alumnos con problemas de audición están encantados. ¡Ojalá la hubiera encontrado antes!",
        "author": "Sarah Chen",
        "role": "Profesor en línea"
      },
      Jessica: {
        "text": "He estado usando esto para mis entrevistas y es increíblemente preciso. Tuve una entrevista de dos horas en inglés y español deficientes y todo salió perfecto, incluso las marcas de tiempo. Antes le pagaba a mi becario $200 al mes solo por transcribir. Esto me ahorra dinero cada mes.",
        "author": "Jessica Park",
        "role": "Periodista independiente"
      }
    },
    PricingPreview: {
      "title": "Precios transparentes",
      "highlighted_text": "Sin mayúsculas ocultas",
      "subtitle": "Elige tu plan. Sin asteriscos, sin letra pequeña, sin sorpresas."
    },
    FAQSection: {
      "title": "Preguntas frecuentes",
      "titleHighlight": "Preguntas",
      "questions": [
        {
          "q": "política ilimitada",
          "question": "¿Es realmente ilimitado? ¿Cuál es el truco?",
          "answer": "¡Sí, es realmente ilimitado! Sin límite de minutos mensuales ni cargos por exceso. Los únicos límites son técnicos: cada archivo puede durar hasta 10 horas o pesar 5 GB, y puedes procesar 50 archivos a la vez. Pero puedes subir tantos lotes como quieras, durante todo el mes."
        },
        {
          "q": "exactitud",
          "question": "¿Qué tan precisa es la transcripción?",
          "answer": "Garantizamos una precisión del 96 % para un audio nítido. Nuestra IA se ha entrenado con millones de horas de contenido diverso y gestiona acentos, términos técnicos y la presencia de múltiples hablantes de forma excepcional. Para audios complejos, nuestras funciones de mejora inteligente ayudan a optimizar los resultados."
        },
        {
          "q": "idiomas",
          "question": "¿Qué idiomas soportan?",
          "answer": "Ofrecemos transcripciones en más de 100 idiomas, incluyendo inglés, español, mandarín, hindi, árabe, francés y más. Además, puedes traducir tus transcripciones a 249 idiomas diferentes, lo que lo hace perfecto para contenido global."
        },
        {
          "q": "velocidad",
          "question": "¿Qué tan rápida es la transcripción?",
          "answer": "¡Superrápido! Un archivo de audio de una hora suele procesarse en menos de 5 minutos. Con el procesamiento por lotes, puedes cargar 50 archivos simultáneamente y procesarlos en paralelo. La mayoría de los usuarios descubren que toda su biblioteca ha sido transcrita durante la noche."
        },
        {
          "q": "cancelación",
          "question": "¿Puedo cancelar en cualquier momento?",
          "answer": "¡Por supuesto! Sin contratos ni cargos por cancelación. Puedes cambiar a una versión superior, inferior o cancelar tu suscripción en cualquier momento desde tu panel de control. Si cancelas, conservarás el acceso hasta el final de tu periodo de facturación."
        },
        {
          "q": "seguridad",
          "question": "¿Están seguros mis datos?",
          "answer": "Tu seguridad es nuestra prioridad. Contamos con la certificación SOC 2, utilizamos cifrado de 256 bits para todos los datos y nunca usamos tu contenido para entrenar nuestros modelos. Puedes eliminar tus archivos en cualquier momento y los purgamos automáticamente después de 30 días. Cumplimos con el RGPD y la CCPA."
        },
        {
          "q": "formatos de exportación",
          "question": "¿Qué formatos de exportación están disponibles?",
          "answer": "Descarga tus transcripciones en cualquier formato: PDF, Word (DOCX), Excel, CSV, subtítulos SRT, texto plano (TXT) y subtítulos VTT. Perfectas para cualquier flujo de trabajo."
        },
        {
          "q": "formatos de archivo",
          "question": "¿Qué archivos de audio y vídeo puedo cargar?",
          "answer": "Admitimos prácticamente todos los formatos de audio y video que pueda encontrar: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV y más. Si puede reproducirlo, podemos transcribirlo."
        }
      ]
    },
    CTASection: {
      "title": "¿Listo para liberarse de los límites?",
      "subtitle": "Únase a más de 50.000 profesionales que han hecho la transición a una transcripción verdaderamente ilimitada",
      "button": "Prueba NeverCap Gratis",
      "disclaimer": "No se requiere tarjeta de crédito para el plan gratuito • Actualice en cualquier momento para obtener acceso ilimitado"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'No más "Shrinkflation"',
      heroTitleLine1: "Verdaderamente ilimitado",
      heroTitleLine2: "Transcripción de IA",
      heroSubtitle: "Si bien Trint lo limita a 50 horas y Otter a 10 archivos por mes, nosotros ofrecemos lo que realmente prometemos: transcripción ilimitada sin límites ocultos.",
      primaryCta: "Pruébelo gratis - Sin tarjeta de crédito",
      secondaryCta: "Ver la verdad",
      comparisonBadLabel: "Lo que hacen los demás",
      comparisonBadTitle: "Límites ocultos en todas partes",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trinte:",
      comparisonBadItem1Text: '"Ilimitado" = límite de 50 horas/mes',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Nutria:",
      comparisonBadItem2Text: "3 importaciones de por vida (gratis), 10/mes (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Luciérnagas:",
      comparisonBadItem3Text: "Límite de almacenamiento de 800 minutos",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descripción:",
      comparisonBadItem4Text: "Máximo 30 horas/mes",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Oculto en los términos y condiciones",
      comparisonGoodLabel: "Qué hacemos",
      comparisonGoodTitle: "Realmente ilimitado",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Sin límites de minutos mensuales",
      comparisonGoodItem1Text: "alguna vez",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Subidas de archivos ilimitadas",
      comparisonGoodItem2Text: "siempre",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Sin límites de almacenamiento",
      comparisonGoodItem3Text: "en absoluto",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Carga por lotes de 50 archivos",
      comparisonGoodItem4Text: "en cualquier momento",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Política transparente",
      comparisonGoodItem5Text: "por adelantado",
      feature1Label: "Sin límites",
      feature1TitlePart1: "¿Transcribir 1.000 horas?",
      feature1TitlePart2: "Mismo precio.",
      feature1Description: "Deja de contar minutos. Deja de mirar mayúsculas. Ya sea que transcribas 10 o 10 000 horas al mes, pagas la misma tarifa plana. Sin cargos por exceso. Sin facturas sorpresa.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Sin trucos de política de "uso justo"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Sin limitación después de X horas",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Sin ansiedad de fin de mes",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Horas mensuales",
      feature1Stat2Number: "$0",
      feature1Stat2Label: "Cargos por exceso",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Subir en cualquier momento",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparente",
      feature2Label: "Libertad a granel",
      feature2TitlePart1: "Sube tu",
      feature2TitlePart2: "Archivo completo",
      feature2Description: "Otter te ofrece 3 importaciones de por vida gratis y 10 al mes con Pro. Te ofrecemos contenido ilimitado. Sube tu podcast, todas tus entrevistas y años de grabaciones. Sin restricciones.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 archivos por lote",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Se admiten archivos de 10 horas",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Procesa mientras duermes",
      feature2TableRow1Label: "Nutria libre",
      feature2TableRow1Value: "3 importaciones de por vida",
      feature2TableRow2Label: "Nutria Pro",
      feature2TableRow2Value: "10 archivos/mes",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Límite de 50 horas/mes",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Verdaderamente ilimitado ✓",
      feature3Label: "Prueba social",
      feature3TitlePart1: "Los usuarios son",
      feature3TitlePart2: "Cambio diario",
      feature3Description: '"Pago $100 al año por Otter y me limitan a importar 10 archivos al mes. En cuanto haya una alternativa con importaciones ilimitadas, ¡me voy!" - Usuario real de Reddit',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Más de 50.000 usuarios cambiaron",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'De la "contracción inflacionaria" de Otter',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Nunca volveremos atrás",
      feature3Stat1Number: "50 mil+",
      feature3Stat1Label: "Usuarios felices",
      feature3Stat2Number: "1 millón+",
      feature3Stat2Label: "Archivos procesados",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Exactitud",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Sin cargos ocultos",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutos/Mes",
      trustBadge2Number: "más de 100",
      trustBadge2Label: "Idiomas",
      trustBadge3Number: "96%",
      trustBadge3Label: "Exactitud",
      trustBadge4Number: "50",
      trustBadge4Label: "Carga por lotes",
      ctaTitle: "Deja de pagar por servicios ilimitados falsos",
      ctaSubtitle: "Únase a miles de personas que cambiaron a una transcripción verdaderamente ilimitada",
      finalCta: "Prueba NeverCap Gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Libertad de carga masiva",
      heroTitleLine1: "Subir 50 archivos.",
      heroTitleHighlight: "Procesar todo.",
      heroSubtitle: "Otter te ofrece tres importaciones de por vida. ¡TRES! Para toda la vida. Te ofrecemos subidas ilimitadas, hasta 50 archivos a la vez, cuando los necesites.",
      primaryCta: "Iniciar carga masiva →",
      secondaryCta: "Ver los límites",
      redditQuote: "Tengo tres años de episodios de podcast que transcribir. Otter me dice que tengo tres importaciones de por vida. ¡TRES! ¡Qué insultante!",
      redditAuthorIcon: "📍",
      redditAuthorText: "Verdadera frustración por parte de r/podcasting",
      comparisonSectionTitlePart1: "El",
      comparisonSectionTitleHighlight: "Límites ridículos",
      comparisonSectionTitlePart2: "Ellos imponen",
      comparisonSubtitle: "Cómo los competidores restringen su capacidad para procesar contenido",
      limitCard1Service: "Nutria libre",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importaciones de por vida",
      limitCard1DescriptionLine2: "(Sí, para TODA tu vida)",
      limitCard2Service: "Nutria Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Archivos por mes",
      limitCard2DescriptionLine2: "(Plan de $100/año)",
      limitCard3Service: "Descripción",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Archivo a la vez",
      limitCard3DescriptionLine2: "(Carga secuencial)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Subidas ilimitadas",
      limitCard4DescriptionLine2: "50 archivos por lote",
      feature1Label: "Energía por lotes",
      feature1TitlePart1: "Procesa tu",
      feature1TitleHighlight: "Archivo completo",
      feature1TitlePart2: "Durante la noche",
      feature1Description: 'Sube 50 archivos antes de dormir. Despierta para completar las transcripciones. Sin colas, sin esperas, sin mensajes de "actualización". Solo potencia de procesamiento a tu alcance.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 cargas simultáneas",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Procesamiento paralelo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Se admiten archivos de 10 horas",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Máximo de 5 GB por archivo",
      uploadAnimationText1: "50 archivos",
      uploadAnimationText2: "Soltar y procesar",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "entrevista_raw.mp4",
      fileBadge3: "reunión_2024.wav",
      fileBadge4: "conferencia_completa.mov",
      fileBadge5: "+ 46 archivos más...",
      feature2Label: "Velocidad",
      feature2TitlePart1: "Desde la carga hasta",
      feature2TitleHighlight: "Hecho en horas",
      feature2Description: "Nuestra infraestructura de procesamiento paralelo significa que sus 50 archivos no tienen que esperar en fila. Todos se transcriben simultáneamente. Lo que antes tomaba semanas ahora toma horas.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Archivo de 1 hora: 5 minutos",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 archivos: procesados en paralelo",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notificación por correo electrónico cuando haya terminado",
      timelineStep1Icon: "1",
      timelineStep1Title: "Subir",
      timelineStep1Time: "0 minutos",
      timelineStep2Icon: "2",
      timelineStep2Title: "Tratamiento",
      timelineStep2Time: "5-30 minutos",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magia de IA",
      timelineStep3Time: "30-60 minutos",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Completo",
      timelineStep4Time: "< 2 horas",
      feature3Label: "Libertad",
      feature3TitlePart1: "Sin colas.",
      feature3TitleHighlight: "Sin esperas.",
      feature3TitlePart2: "Sin límites.",
      feature3Description: "Mientras otros te hacen esperar en filas virtuales o te actualizan para obtener un procesamiento prioritario, nosotros tratamos cada carga con urgencia. Tu contenido importa y no debería esperar.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Sin niveles de prioridad",
      feature3Point2Icon: "✓",
      feature3Point2Text: "La misma velocidad para todos",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Sube en cualquier momento, 24 horas al día, 7 días a la semana",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Siempre listo",
      feature3VisualSubtext: "Sube contenido cuando te llegue la inspiración",
      useCasesTitlePart1: "Perfecto para",
      useCasesTitleHighlight: "Usuarios que suben mucho contenido",
      useCasesSubtitle: "Escenarios reales donde la carga masiva salva el día",
      useCase1Title: "Archivos de podcasts",
      useCase1Description: "Sube 3 años de episodios a la vez. Crea transcripciones para todo tu catálogo. Genera contenido SEO para cada episodio.",
      useCase2Title: "Creación de cursos",
      useCase2Description: "Procesa todos tus videos de clases simultáneamente. Crea transcripciones accesibles para los estudiantes. Crea materiales de curso con función de búsqueda.",
      useCase3Title: "Atraso en la entrevista",
      useCase3Description: "Despeja esa montaña de entrevistas sin transcribir. Procesa semanas de investigación en horas. Cumple con tu plazo sin pánico.",
      useCase4Title: "Biblioteca de YouTube",
      useCase4Description: "Genera subtítulos para todo tu canal. Crea entradas de blog a partir de contenido de video. Mejora el SEO en todos tus videos.",
      useCase5Title: "Archivos de reuniones",
      useCase5Description: "Sube meses de reuniones grabadas. Crea notas de reuniones con función de búsqueda. No vuelvas a perder decisiones importantes.",
      useCase6Title: "Datos de investigación",
      useCase6Description: "Procesar grupos focales en bloque. Transcriba todas las entrevistas con los participantes. Analice datos cualitativos eficientemente.",
      ctaTitle: "Deja de pedir más vídeos",
      ctaSubtitle: "Obtenga procesamiento masivo ilimitado que realmente funciona",
      finalCta: "Sube 50 archivos ahora →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Precisión líder en la industria",
      heroTitleLine1: "96% de precisión.",
      heroTitleHighlight: "Cada palabra importa.",
      heroSubtitle: "Precisión líder en la industria en 12 idiomas principales. Marcas de tiempo a nivel de palabra para una sincronización perfecta. Identificación inteligente del hablante que gestiona conversaciones rápidas. Formato profesional y legible.",
      primaryCta: "Pon a prueba nuestra precisión →",
      secondaryCta: "Ver idiomas",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Precisión en",
      statCard1DescriptionLine2: "12 idiomas principales",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Precisión con",
      statCard2DescriptionLine2: "Acentos y dialectos",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Nivel de palabra",
      statCard3DescriptionLine2: "Precisión de la marca de tiempo",
      languageSectionTitlePart1: "96% de precisión en 12 idiomas principales",
      languageSubtitle: "Transcripción de calidad profesional para contenido global",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Inglés",
      languageCard1Accuracy: "96% de precisión",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Español",
      languageCard2Accuracy: "96% de precisión",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "mandarín",
      languageCard3Accuracy: "96% de precisión",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Francés",
      languageCard4Accuracy: "96% de precisión",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Alemán",
      languageCard5Accuracy: "96% de precisión",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japonés",
      languageCard6Accuracy: "96% de precisión",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "coreano",
      languageCard7Accuracy: "96% de precisión",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "portugués",
      languageCard8Accuracy: "96% de precisión",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "ruso",
      languageCard9Accuracy: "96% de precisión",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "italiano",
      languageCard10Accuracy: "96% de precisión",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Holandés",
      languageCard11Accuracy: "96% de precisión",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "árabe",
      languageCard12Accuracy: "96% de precisión",
      moreLanguagesText: "+ 88 idiomas más compatibles con una precisión del 95 %",
      feature1Label: "Precisión",
      feature1TitlePart1: "Nivel de palabra",
      feature1TitleHighlight: "Marcas de tiempo",
      feature1Description: "Cada palabra está perfectamente sincronizada con su posición en el audio. Crea transcripciones interactivas, genera subtítulos precisos o salta a momentos exactos en tus grabaciones. Precisión de 100 ms en la que confían los profesionales.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precisión de marca de tiempo de 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfecto para edición de vídeo.",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Transcripciones interactivas en las que se puede hacer clic",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Subtítulos con precisión de fotograma",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Orador 1",
      transcriptLine1Text: "Bienvenidos al episodio del podcast de hoy.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Orador 2",
      transcriptLine2Text: "¡Gracias por invitarme al programa!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Orador 1",
      transcriptLine3Text: "Vamos a sumergirnos en nuestro tema principal...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Orador 2",
      transcriptLine4Text: "Por supuesto, estoy entusiasmado por discutir esto.",
      feature2Label: "IA inteligente",
      feature2TitlePart1: "Manijas",
      feature2TitleHighlight: "Conversaciones rápidas",
      feature2Description: "Nuestra IA identifica con precisión a los oradores, incluso durante conversaciones solapadas, interrupciones y conversaciones rápidas. Ideal para entrevistas, podcasts y reuniones donde los oradores intervienen con frecuencia.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifica hasta 20 hablantes",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Maneja las interrupciones perfectamente",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Funciona con habla superpuesta",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Mantiene la precisión en la diafonía",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Oradores identificados",
      feature2VisualSubtext: "Incluso en conversaciones rápidas",
      feature3Label: "Legibilidad",
      feature3TitlePart1: "Perfectamente",
      feature3TitleHighlight: "Texto formateado",
      feature3Description: "Se acabaron los muros de texto. Nuestra IA añade automáticamente párrafos, oraciones y puntuación justo donde corresponde. ¿El resultado? Transcripciones agradables de leer y fáciles de escanear.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Saltos de párrafo inteligentes",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Puntuación precisa",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Capitalización adecuada",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Salida limpia y escaneable",
      formattingTitle: "Antes y después",
      formattingBeforeLabel: "❌ Otros:",
      formattingBeforeText: "Así que hoy vamos a hablar sobre las nuevas funciones en las que hemos estado trabajando. Creo que realmente les gustarán. Los usuarios las han solicitado durante mucho tiempo y finalmente las logramos.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Hoy vamos a hablar sobre las nuevas funciones en las que hemos estado trabajando. Creo que les encantarán. Los usuarios las han solicitado durante mucho tiempo, y por fin las hemos implementado.",
      comparisonSubtitle: "Exactitud",
      comparisonSectionTitle: "Comparación",
      comparisonDes: "Vea cómo nos comparamos con la competencia",
      tableHeader1: "Característica",
      tableHeader2: "NeverCap",
      tableHeader3: "Nutria.ai",
      tableHeader4: "Descripción",
      tableHeader5: "Rdo",
      tableRow1Feature: "Precisión (audio claro)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Marcas de tiempo a nivel de palabra",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identificación del hablante",
      tableRow3NeverCap: "20 altavoces",
      tableRow3Otter: "16 altavoces",
      tableRow3Descript: "10 altavoces",
      tableRow3Rev: "✕",
      tableRow4Feature: "Maneja la diafonía",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limitado",
      tableRow4Descript: "Limitado",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formato inteligente",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Básico",
      tableRow6Feature: "12 idiomas al 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Experimente una precisión del 96%",
      ctaSubtitle: "Sube tu audio más desafiante y observa la diferencia",
      finalCta: "Pruebe nuestra precisión ahora →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Precios simples y transparentes",
      "highlighted_text": "Sin mayúsculas ocultas",
      "description": "Elige el plan que mejor se adapte a tus necesidades. Cambia de plan cuando quieras. Sin contratos ni sorpresas."
    },
    Cards: {
      "title": "Precios simples y transparentes.",
      "highlighted_text": "Sin mayúsculas ocultas.",
      "description": "Elige el plan que mejor se adapte a tus necesidades. Cambia de plan cuando quieras. Sin contratos ni sorpresas.",
      "plans": [
        {
          "name": "Gratis",
          "price": "$0",
          "period": "mes",
          "discount": "Perfecto para probar nuestro servicio.",
          "limits": {
            "title": "Límites diarios",
            "items": [
              "3 archivos/día (≈90 min en total/día)",
              "Hasta 30 minutos por archivo (≤250 MB)",
              "Subir 1 archivo a la vez",
              "Cola de prioridad estándar"
            ]
          },
          "features": {
            "title": "Características",
            "items": [
              "más de 100 idiomas",
              "Etiquetas de los altavoces",
              "Traducción",
              "Todos los formatos de exportación"
            ]
          },
          "cta": {
            "text": "Empieza gratis. Sin tarjeta de crédito.",
            "button": "Empieza gratis"
          }
        },
        {
          "name": "Pro Mensual",
          "price": "$17.99",
          "period": "mes",
          "discount": "$9.99 por el primer mes",
          "limits": {
            "title": "Sin límite mensual",
            "items": [
              "Minutos totales ilimitados",
              "Hasta 10 horas / 5 GB por archivo",
              "Subir 50 archivos a la vez",
              "cola de prioridad"
            ]
          },
          "features": {
            "title": "Todo en Gratis, más",
            "items": [
              "Marcas de tiempo a nivel de palabra",
              "Identificación avanzada de hablantes",
              "Párrafos formateados y puntuación",
              "Soporte prioritario"
            ]
          },
          "cta": {
            "text": "Minutos ilimitados. Velocidad prioritaria. Subidas por lotes.",
            "button": "Go Pro"
          },
          "badge": "Más populares"
        },
        {
          "name": "Pro Anual",
          "price": "$8.99",
          "period": "mes",
          "discount": "Facturado anualmente $107.88",
          "limits": {
            "title": "Igual que Pro Monthly",
            "items": [
              "Minutos totales ilimitados",
              "Hasta 10 horas / 5 GB por archivo",
              "Subir 50 archivos a la vez",
              "cola de prioridad"
            ]
          },
          "features": {
            "title": "Todo en Gratis, más",
            "items": [
              "Marcas de tiempo a nivel de palabra",
              "Identificación avanzada de hablantes",
              "Párrafos formateados y puntuación",
              "Soporte prioritario"
            ]
          },
          "cta": {
            "text": "Minutos ilimitados. Velocidad prioritaria. Subidas por lotes.",
            "button": "Go Pro"
          },
          "badge": "Mejor valor - Ahorre un 50%"
        }
      ],
      "disclaimer": '"Ilimitado" significa sin límite mensual ni ralentización artificial. El uso legítimo se aplica a la automatización o redistribución abusivas.'
    },
    ComparisonTable: {
      "header": {
        "title": "Comparar todas las funciones",
        "highlighted_text": "Todas las funciones",
        "subtitle": "Descubre exactamente lo que obtienes con cada plan. Sin limitaciones ocultas."
      },
      "plans": [
        "Características",
        "Gratis",
        "Pro Mensual",
        "Pro Anual"
      ],
      "features": [
        {
          "name": "Precio",
          "values": [
            "$0/mes",
            {
              "main": "$17,99/mes",
              "note": "$9.99 el primer mes"
            },
            {
              "main": "$8.99/mes",
              "note": "Facturado $107.88/año"
            }
          ]
        },
        {
          "name": "Minutos mensuales",
          "values": ["~2.700 (90/día)", "Ilimitado", "Ilimitado"]
        },
        {
          "name": "Duración máxima del archivo",
          "values": ["30 minutos", "10 horas", "10 horas"]
        },
        {
          "name": "Tamaño máximo de archivo",
          "values": ["250 MB", "5 GB", "5 GB"]
        },
        {
          "name": "Cargas por lotes",
          "values": ["1 archivo", "50 archivos", "50 archivos"]
        },
        {
          "name": "Velocidad de procesamiento",
          "values": ["Estándar", "Prioridad", "Prioridad"]
        },
        {
          "name": "Idiomas admitidos",
          "values": ["más de 100 idiomas", "más de 100 idiomas", "más de 100 idiomas"]
        },
        {
          "name": "Traducción",
          "values": ["verdadero", "verdadero", "verdadero"]
        },
        {
          "name": "Identificación del hablante",
          "values": ["Básico", "Avanzado (20 hablantes)", "Avanzado (20 hablantes)"]
        },
        {
          "name": "Marcas de tiempo a nivel de palabra",
          "values": ["FALSO", "verdadero", "verdadero"]
        },
        {
          "name": "Párrafos formateados",
          "values": ["FALSO", "verdadero", "verdadero"]
        },
        {
          "name": "Formatos de exportación",
          "values": ["Todos los formatos", "Todos los formatos", "Todos los formatos"]
        },
        {
          "name": "Apoyo",
          "values": ["Correo electrónico", "Correo electrónico prioritario", "Correo electrónico prioritario"]
        },
        {
          "name": "Retención de datos",
          "values": ["30 días", "Para siempre", "Para siempre"]
        }
      ]
    },
    FAQ: {
      "title": "Preguntas frecuentes",
      "titleHighligt": "Preguntas",
      "items": [
        {
          "q": "política ilimitada",
          "question": "¿Es realmente ilimitado?",
          "answer": "¡Sí! Los planes Pro no tienen límite de minutos mensuales. Los únicos límites son técnicos: duración máxima de archivo de 10 horas y tamaño de archivo de 5 GB. Puedes procesar tantos archivos como necesites."
        },
        {
          "q": "cambio de plan",
          "question": "¿Puedo cambiar de plan en cualquier momento?",
          "answer": "¡Por supuesto! Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. Puedes cambiar a una versión superior o inferior cuando lo necesites."
        },
        {
          "q": "métodos de pago",
          "question": "¿Qué métodos de pago aceptan?",
          "answer": "Aceptamos todas las principales tarjetas de crédito, tarjetas de débito y PayPal para pagos seguros y sin complicaciones."
        },
        {
          "q": "prueba gratuita",
          "question": "¿Hay una prueba gratuita para Pro?",
          "answer": "¡Sí! Prueba Pro gratis durante 7 días, sin necesidad de tarjeta de crédito. Además, obtén un 45% de descuento en tu primer mes al suscribirte."
        },
        {
          "q": "retención de archivos",
          "question": "¿Durante cuánto tiempo conservan mis archivos?",
          "answer": "Plan gratuito: 30 días. Planes Pro: ¡Para siempre! Tus transcripciones siempre estarán disponibles en tu cuenta."
        },
        {
          "q": "seguridad de datos",
          "question": "¿Qué pasa con la seguridad de los datos?",
          "answer": "Contamos con certificación SOC 2 y utilizamos cifrado de 256 bits. Nunca usamos tu contenido para entrenar nuestros modelos. Tus datos son tuyos."
        }
      ]
    },
    CTA: {
      "title": "¿Listo para ir ilimitado?",
      "subtitle": "Únase a más de 50.000 profesionales que transcriben sin límites",
      "button": "Prueba NeverCap Gratis →",
      "disclaimer": "No se requiere tarjeta de crédito • Comience a transcribir en segundos"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Creado para",
      heavyUsers: "Usuarios habituales",
      whoActuallyNeed: "¿Quién necesita realmente lo ilimitado?",
      heroSubtitle: "Desde podcasters con años de retraso hasta investigadores con cientos de entrevistas. Descubre cómo los profesionales usan NeverCap para liberarse de los límites de carga y de minutos.",
      podcasters: {
        title: "Podcasters",
        pain: '"Dejen de elegir qué episodios merecen transcripciones"',
        description: "Sube todo tu archivo de podcasts de una sola vez. Genera notas de programa, mejora el SEO y reutiliza el contenido sin perder tiempo.",
        benefits: {
          benefit1: "Sube todos los episodios, no solo 3",
          benefit2: "Generar notas de presentación optimizadas para SEO",
          benefit3: "Crear archivos que se puedan buscar",
          benefit4: "Reutilizar en el contenido del blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episodios"
          },
          stat2: {
            number: "200 horas",
            label: "Guardado"
          },
          stat3: {
            number: "3x",
            label: "Tráfico SEO"
          }
        }
      },
      journalists: {
        title: "Periodistas y escritores",
        pain: "La presión de los plazos se combina con las restricciones de carga.",
        description: "Sube todas las entrevistas por lotes antes de la fecha límite. Busca en las transcripciones al instante y no te pierdas ninguna cita importante.",
        benefits: {
          benefit1: "Carga por lotes antes de las fechas límite",
          benefit2: "Buscar todas las entrevistas a la vez",
          benefit3: "Cotizaciones precisas con marcas de tiempo",
          benefit4: "Manejar acentos e idiomas"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Entrevistas/mes"
          },
          stat2: {
            number: "96%",
            label: "Exactitud"
          },
          stat3: {
            number: "5 minutos",
            label: "Por hora"
          }
        }
      },
      contentCreators: {
        title: "Creadores de contenido",
        pain: '"La accesibilidad no debería ser cara"',
        description: "Subtitula todo tu canal de YouTube. Genera subtítulos en varios idiomas y mejora el SEO de tus vídeos al instante.",
        benefits: {
          benefit1: "Subtitular todos los vídeos a la vez",
          benefit2: "249 traducciones de idiomas",
          benefit3: "Archivos SRT compatibles con YouTube",
          benefit4: "Mejorar el posicionamiento SEO de los vídeos"
        },
        stats: {
          stat1: {
            number: "más de 100",
            label: "Vídeos"
          },
          stat2: {
            number: "más de 100",
            label: "Idiomas"
          },
          stat3: {
            number: "249",
            label: "Traducciones"
          }
        }
      },
      researchers: {
        title: "Investigadores y académicos",
        pain: '"Los datos cualitativos no deberían esperar en la cola"',
        description: "Procese estudios de investigación completos a la vez. Gestione grupos focales, entrevistas y mesas redondas con una identificación perfecta de los ponentes.",
        benefits: {
          benefit1: "Grupos focales de procesos en masa",
          benefit2: "Identificación de 20 hablantes",
          benefit3: "Exportar a software de análisis",
          benefit4: "Seguridad conforme con el RGPD"
        },
        stats: {
          stat1: {
            number: "más de 100",
            label: "Estudiar"
          },
          stat2: {
            number: "96%",
            label: "Precisión del grupo"
          },
          stat3: {
            number: "RGPD",
            label: "Obediente"
          }
        }
      },
      businessTeams: {
        title: "Equipos de negocios",
        pain: "Grabar reuniones debería ser sencillo.",
        description: "Grabe reuniones directamente o suba archivos de audio para transcripción instantánea. Cree archivos con función de búsqueda a partir de conversaciones ilimitadas y no vuelva a perder conversaciones importantes.",
        benefits: {
          benefit1: "Grabación y transcripción de audio directa",
          benefit2: "Grabaciones de reuniones ilimitadas",
          benefit3: "Archivo de reuniones con función de búsqueda",
          benefit4: "Sube archivos de audio al instante"
        },
        stats: {
          stat1: {
            number: "Vivir",
            label: "Grabación"
          },
          stat2: {
            number: "Instante",
            label: "Subir"
          },
          stat3: {
            number: "20+",
            label: "Oradores"
          }
        }
      },
      educators: {
        title: "Educadores",
        pain: "Los vídeos de YouTube necesitan transcripción instantánea.",
        description: "Simplemente pega enlaces de YouTube para obtener transcripciones instantáneas y subtítulos generados automáticamente. Transforma cualquier video educativo en contenido accesible y con función de búsqueda.",
        benefits: {
          benefit1: "Transcripción del enlace directo de YouTube",
          benefit2: "Generar subtítulos de vídeo automáticamente",
          benefit3: "Transcribir cursos completos",
          benefit4: "Archivos de conferencias con función de búsqueda"
        },
        stats: {
          stat1: {
            number: "1 clic",
            label: "Pegar en YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Subtítulos"
          },
          stat3: {
            number: "más de 100",
            label: "Idiomas"
          }
        }
      },
      quotes: {
        title: "Usuarios reales,",
        titleHighlight: "Libertad real",
        subtitle: "Escuche a profesionales que rompieron con los límites artificiales",
        testimonials: {
          mike: {
            textBefore: '"Tuve',
            highlight: "3 años de episodios",
            textAfter: "Sin transcribir. Otter quería que eligiera tres. Tres. NeverCap Déjame subir los 150 episodios en un fin de semana.",
            name: "Mike Rodríguez",
            role: "Presentador de podcast"
          },
          jessica: {
            textBefore: '"Como periodista independiente, no puedo permitirme el lujo de Trint.',
            highlight: "$100/mes",
            textAfter: ', pero tampoco puedo trabajar con el límite de 10 archivos por mes de Otter. NeverCap salvó mi carrera."',
            name: "Jessica Park",
            role: "Periodista independiente"
          },
          sarah: {
            textBefore: '"Nuestro equipo de investigación había',
            highlight: "200 horas",
            textAfter: "de grabaciones de grupos focales. Procesamos todo en un fin de semana en lugar de racionar los minutos mensuales.",
            name: "Dra. Sarah Chen",
            role: "Investigador principal"
          },
          carlos: {
            textBefore: '"Hago contenido educativo en español. NeverCap transcribe perfectamente y',
            highlight: "se traduce al inglés",
            textAfter: "Para un alcance más amplio. Sin límites, solo crecimiento.",
            name: "Carlos Martínez",
            role: "Educador de YouTube"
          }
        }
      },
      industries: {
        title: "De confianza en todos lados",
        titleHighlight: "Industrias",
        subtitle: "Los profesionales de todo el mundo están cambiando a un mundo verdaderamente ilimitado.",
        list: {
          media: "Medios y publicaciones",
          education: "Educación",
          healthcare: "Cuidado de la salud",
          technology: "Tecnología",
          finance: "Finanzas",
          legal: "Legal"
        }
      },
      cta: {
        title: "Su caso de uso también necesita lo ilimitado",
        subtitle: "Únase a más de 50.000 profesionales que dejaron de contar minutos y comenzaron a crear",
        button: "Comienza tu viaje ilimitado →"
      }
    },
    Podcasters: {
      badge: "🎙️ Creado para podcasters",
      heroTitle: "Transcribe tu",
      heroTitleHighlight: "Archivo completo de podcasts",
      heroSubtitle: "Sube todo tu catálogo anterior. Crea notas para cada episodio. Olvídate de elegir qué episodios transcribir. Procesa 50 episodios a la vez, sin límite de veces al mes.",
      ctaPrimary: "Comience a transcribir gratis",
      ctaSecondary: "Vea cómo funciona",
      trustBadge1: "🎙️ Más de 10 000 podcasters",
      trustBadge2: "∞ Episodios ilimitados",
      trustBadge3: "Transcripciones preparadas para SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Episodios/Mes"
        },
        stat2: {
          number: "50",
          label: "Carga por lotes"
        },
        stat3: {
          number: "10 horas",
          label: "Duración máxima del episodio"
        },
        stat4: {
          number: "96%",
          label: "Exactitud"
        }
      },
      problemTitle: "El",
      problemTitleHighlight: "Problema de transcripción de podcast",
      problemSubtitle: 'Otros servicios te hacen elegir qué episodios "vale la pena" transcribir',
      problems: {
        problem1: {
          title: "Los límites de carga eliminan archivos",
          description: "Otter te ofrece 3 importaciones de por vida de forma gratuita y 10 al mes en Pro. ¿Cómo se transcriben 3 años de episodios?"
        },
        problem2: {
          title: "Oportunidades de SEO perdidas",
          description: "Cada episodio sin transcribir representa tráfico SEO perdido. Pero Descript te limita a 30 horas al mes como máximo."
        },
        problem3: {
          title: "Los costos se disparan con el crecimiento",
          description: "A medida que tu podcast crece, los costos de transcripción se disparan. Los cargos por exceso de $2 por hora hacen que la escalabilidad sea imposible."
        }
      },
      solutionTitle: "El",
      solutionTitleHighlight: "NeverCap Solución",
      solutionDescription: "Transcripción ilimitada. Sube todo tu archivo. Transcribe cada nuevo episodio. Genera notas de programa a gran escala. Sin límites, solo crecimiento.",
      workflowTitle: "Tu flujo de trabajo de podcast,",
      workflowTitleHighlight: "Simplificado",
      workflowSubtitle: "De la grabación a las notas del programa optimizadas para SEO en minutos",
      workflow: {
        step1: {
          title: "Subir episodios",
          description: "Suelta 50 episodios a la vez. MP3, MP4, WAV: los gestionamos todos."
        },
        step2: {
          title: "La IA transcribe",
          description: "96% de precisión en la identificación del hablante. Perfecto para entrevistas."
        },
        step3: {
          title: "Formato inteligente",
          description: "La IA agrega párrafos, oraciones y puntuación automáticamente."
        },
        step4: {
          title: "Publicar y clasificar",
          description: "Exporta a tu sitio web. Observa cómo crece tu tráfico SEO."
        }
      },
      featuresTitle: "Características Podcasters",
      featuresTitleHighlight: "Realmente necesito",
      featuresSubtitle: "Creado por podcasters, para podcasters",
      features: {
        feature1: {
          title: "Detección de varios altavoces",
          description: "Identifica y etiqueta automáticamente hasta 20 ponentes. Ideal para mesas redondas, entrevistas y programas copresentados."
        },
        feature2: {
          title: "Capítulos con marca de tiempo",
          description: "Genera marcas de tiempo clicables para las descripciones de YouTube. Permite que los oyentes accedan a sus segmentos favoritos al instante."
        },
        feature3: {
          title: "Formato inteligente",
          description: "Añade automáticamente párrafos, oraciones y puntuación. Obtén transcripciones claras y legibles. Ahorra tiempo en posproducción."
        },
        feature4: {
          title: "Optimización SEO",
          description: "Transcripciones formateadas para motores de búsqueda. Aumenta la visibilidad de tu podcast y llega a nuevas audiencias."
        },
        feature5: {
          title: "Más de 100 idiomas",
          description: "Transcribe en cualquier idioma. Traduce a más de 249 idiomas. Llega a audiencias globales sin esfuerzo."
        },
        feature6: {
          title: "Procesamiento por lotes",
          description: "Sube 50 episodios antes de dormir. Despierta para completar las transcripciones. Procesa todo tu archivo durante la noche."
        }
      },
      testimonialsTitle: "Podcasters que hicieron",
      testimonialsTitleHighlight: "El interruptor",
      testimonialsSubtitle: "Historias reales de podcasters reales",
      testimonials: {
        mike: {
          text: "Llevo tres años haciendo un podcast y lo transcribía todo a mano como un idiota. Subí seis episodios a la vez y me distinguió a la perfección de mi copresentador. ¿El episodio de la cafetería que pensé que estaba arruinado? Una transcripción nítida. Nunca más volveré a escribir esto yo mismo.",
          name: "Mike Rodríguez",
          role: 'Presentador del podcast "The Daily Grind"'
        },
        sarah: {
          text: "Otter me limitaba a 10 importaciones de archivos al mes. Tengo 150 episodios atrasados. NeverCap Me permitió subir todo en 3 tandas. Mi tráfico orgánico ha aumentado un 300 % desde que añadí las transcripciones a los episodios antiguos. Esto se amortiza solo.",
          name: "Sarah Chen",
          role: 'Creador de "Tech Talks Today"'
        }
      },
      comparisonTitle: "¿Por qué los podcasters eligen?",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Vea cómo nos comparamos con la competencia",
      comparison: {
        headers: {
          feature: "Característica",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Creador de descripciones"
        },
        rows: {
          monthlyLimit: {
            feature: "Límite mensual de episodios",
            nevercap: "Ilimitado",
            otter: "~13 episodios (1200 min)",
            descript: "~30 episodios (30 horas)"
          },
          uploadLimit: {
            feature: "Límite de carga de archivos",
            nevercap: "Ilimitado",
            otter: "10 por mes",
            descript: "1 a la vez"
          },
          batchProcessing: {
            feature: "Procesamiento por lotes",
            nevercap: "50 archivos",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Duración máxima del episodio",
            nevercap: "10 horas",
            otter: "90 minutos",
            descript: "Ilimitado"
          },
          speakerDetection: {
            feature: "Detección de altavoces",
            nevercap: "20 altavoces",
            otter: "16 altavoces",
            descript: "10 altavoces"
          },
          smartFormatting: {
            feature: "Formato inteligente",
            nevercap: "✓ Perfecto",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Precio",
            nevercap: "$17,99/mes",
            otter: "$16,99/mes",
            descript: "$30/mes"
          }
        }
      },
      ctaTitle: "Comience a transcribir cada episodio",
      ctaSubtitle: "Únase a más de 10 000 podcasters que nunca se preocupan por los límites",
      ctaButton: "Sube tus primeros 50 episodios gratis →",
      ctaDisclaimer: "No se requiere tarjeta de crédito • Procesa episodios ilimitados • Cancela en cualquier momento"
    },
    Journalists: {
      hero: {
        badge: "📰 Para periodistas y escritores",
        title: "Transcribe cada entrevista.",
        titleHighlight: "Nunca te pierdas una cotización.",
        subtitle: "Deja de elegir qué entrevistas necesitan transcripción. Sube todas las grabaciones a la vez, busca en todo el contenido al instante y cumple con tus plazos sin la ansiedad de subirlas.",
        ctaPrimary: "Comience a subir archivos ilimitados →",
        ctaSecondary: "Vea cómo funciona",
        stats: {
          uploads: {
            number: "∞",
            label: "Subidas de archivos"
          },
          accuracy: {
            number: "96%",
            label: "Exactitud"
          },
          speed: {
            number: "5 minutos",
            label: "Por hora"
          }
        },
        dashboard: {
          title: "Cola de entrevistas",
          status: "• Todo el procesamiento",
          interviews: {
            cityCouncil: {
              title: "Reunión del Ayuntamiento",
              duration: "2h 15min • Cargando...",
              action: "Tratamiento"
            },
            expertInterview: {
              title: "Entrevista con el experto: Dr. Chen",
              duration: "45min • Transcribiendo...",
              action: "96% Listo"
            },
            pressConference: {
              title: "Conferencia de prensa",
              duration: "1h 30min • Listo",
              action: "Ver →"
            },
            phoneInterview: {
              title: "Entrevista telefónica - Fuente",
              duration: "35 min • Listo",
              action: "Ver →"
            }
          }
        }
      },
      problem: {
        title: "El",
        titleHighlight: "Problema de transcripción del periodista",
        subtitle: 'Otros servicios te hacen elegir qué entrevistas "vale la pena" transcribir',
        problems: {
          uploadLimits: {
            title: "Los límites de carga acaban con las investigaciones",
            description: "Otter te ofrece 10 importaciones de archivos al mes en Pro. ¿Cómo transcribes 3 semanas de entrevistas de investigación?"
          },
          missingQuotes: {
            title: "Citas cruciales faltantes",
            description: "Cada entrevista sin transcribir podría contener la cita clave de la historia. Pero Trint te limita a 50 horas al mes como máximo."
          },
          costExplosion: {
            title: "Los costos se disparan con los plazos",
            description: "A medida que su investigación se profundiza, los costos de transcripción se disparan. Los cargos por exceso de $100 al mes hacen que las noticias de última hora sean imposibles."
          }
        },
        solution: {
          title: "El",
          titleHighlight: "NeverCap Solución",
          description: "Transcripción ilimitada. Sube tu investigación completa. Transcribe cada entrevista. Busca todas las citas al instante. Sin límites, solo periodismo."
        }
      },
      solution: {
        title: "Finalmente,",
        titleHighlight: "La verdadera libertad",
        titleSuffix: "para periodistas",
        subtitle: "Sube todo. Transcribe todo. Busca todo.",
        solutions: {
          unlimitedUploads: {
            label: "Subidas ilimitadas",
            title: "Cargue por lotes toda su investigación",
            description: "Olvídate de elegir qué entrevistas transcribir. Sube 50 archivos a la vez. Procesa meses de grabaciones en un día. Toda tu investigación, transcrita.",
            points: {
              simultaneousUpload: "Subir 50 archivos simultáneamente",
              noLimits: "Sin límites de carga mensuales",
              processWhileWrite: "Procesa mientras escribes",
              longRecordings: "Se admiten grabaciones de 10 horas"
            },
            visual: {
              number: "50",
              label: "Archivos a la vez"
            }
          },
          instantSearch: {
            label: "Búsqueda instantánea",
            title: "Encuentra cualquier cotización en segundos",
            description: "Busca al instante en todas tus transcripciones. Encuentra la cita perfecta de hace tres meses. No vuelvas a perder declaraciones importantes en tus notas.",
            points: {
              searchAll: "Buscar en todas las entrevistas",
              wordTimestamps: "Marcas de tiempo a nivel de palabra",
              jumpToMoments: "Saltar a los momentos exactos",
              exportCitations: "Exportar con citas"
            },
            searchDemo: {
              placeholder: "declaración de política climática",
              resultsText: "Encontrado en 4 entrevistas:",
              results: {
                mayorInterview: '"...nuestra política climática transformará..."',
                expertPanel: '"...la declaración de política muestra claramente..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Precisión profesional",
            title: "96% de precisión que puedes citar",
            description: "Obtenga transcripciones tan precisas que podrá citarlas directamente. Maneja acentos, términos técnicos y conversaciones rápidas. Formato perfecto y legible.",
            points: {
              accuracyGuarantee: "Garantía de precisión del 96%",
              handlesAccents: "Maneja acentos y dialectos",
              smartPunctuation: "Puntuación y párrafos inteligentes",
              speakerIdentification: "Identificación del hablante"
            },
            visual: {
              accuracy: "96%",
              label: "Tasa de precisión",
              transcript: {
                speaker1: '"La investigación reveló discrepancias significativas en los informes financieros".',
                speaker2: "¿Puede explicarnos con más detalle esas discrepancias específicas?"
              }
            }
          }
        }
      },
      features: {
        title: "Todo un",
        titleHighlight: "Necesidades del periodista",
        subtitle: "Herramientas profesionales que respetan tu flujo de trabajo",
        featuresList: {
          languages: {
            title: "Más de 100 idiomas",
            description: "Entreviste fuentes a nivel mundial en 12 idiomas principales con un 96 % de precisión."
          },
          exportFormats: {
            title: "Formatos de exportación",
            description: "Word, PDF, SRT, TXT. Compatible con cualquier flujo de trabajo."
          },
          sourceProtection: {
            title: "Protección de la fuente",
            description: "Cifrado de nivel bancario. Tus fuentes se mantienen confidenciales."
          },
          timestamps: {
            title: "Marcas de tiempo",
            description: "Haga clic en cualquier cita para saltar al momento de audio exacto."
          },
          teamSharing: {
            title: "Compartir en equipo",
            description: "Colabora con los editores. Comparte transcripciones de forma segura."
          },
          mobileReady: {
            title: "Listo para dispositivos móviles",
            description: "Sube archivos desde el teléfono. Revisa tus transcripciones desde cualquier lugar."
          },
          smartFormatting: {
            title: "Formato inteligente",
            description: "Párrafos y puntuación automáticos para transcripciones legibles."
          },
          batchProcessing: {
            title: "Procesamiento por lotes",
            description: "Sube 50 archivos a la vez. Procesa durante la noche mientras duermes."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Tuve tres años de entrevistas sin transcribir por los límites de carga. NeverCap Me permitió procesar todo en un fin de semana. ¡Qué cambio!",
          name: "Jessica Park",
          role: "Periodista independiente, ex usuario de Otter"
        }
      },
      cta: {
        title: "Empezar a transcribir",
        titleHighlight: "Sin límites",
        subtitle: "Únase a miles de periodistas que dejaron de contar las subidas y comenzaron a centrarse en las historias.",
        ctaPrimary: "Prueba Unlimited gratis →",
        ctaSecondary: "Ver precios"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Para creadores de contenido",
        title: "Subtítulo Tu",
        titleHighlight: "Todo el canal",
        titleSuffix: "Sin contar minutos",
        subtitle: "Deja de elegir qué videos merecen subtítulos. Procesa toda tu biblioteca de YouTube, genera subtítulos en más de 100 idiomas y descarga videos directamente desde cualquier plataforma. Sin límites mensuales ni restricciones de subida: pura libertad creativa.",
        ctaPrimary: "Comience a usar subtítulos ilimitados →",
        ctaSecondary: "Vea cómo funciona",
        stats: {
          videos: {
            number: "∞",
            label: "Videos/Mes"
          },
          languages: {
            number: "más de 100",
            label: "Idiomas"
          },
          accuracy: {
            number: "96%",
            label: "Exactitud"
          },
          platforms: {
            number: "10+",
            label: "Plataformas"
          }
        }
      },
      platforms: {
        title: "Obtener y transcribir desde cualquier plataforma",
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
        title: "Todo lo que necesitas para",
        titleHighlight: "Contenido de escala",
        subtitle: "Herramientas profesionales sin límites profesionales",
        oneClickImport: {
          label: "Importación con un solo clic",
          title: "Pegar enlace.",
          titleHighlight: "Obtener la transcripción.",
          description: "Olvídate de descargar y volver a subir. Simplemente pega tu enlace de YouTube, TikTok o Instagram y obtén transcripciones instantáneas. Gestiona todo el contenido atrasado de tu canal en un fin de semana.",
          points: {
            directYoutube: "Transcripción del enlace directo de YouTube",
            multiplePlatforms: "Obtener desde más de 10 plataformas",
            batchPlaylists: "Procesar por lotes listas de reproducción completas",
            autoSync: "Sincronización automática con tus canales"
          },
          demo: {
            instruction: "Pegue la URL de su video:",
            url: "https://youtube.com/watch?v=...",
            status: "Obteniendo y transcribiendo..."
          }
        },
        globalReach: {
          label: "Alcance global",
          title: "Más de 100 idiomas.",
          titleHighlight: "Cero límites.",
          description: "Llega a audiencias globales con traducción automática a más de 100 idiomas. Genera subtítulos en varios idiomas simultáneamente. Sin cargos adicionales ni límites mensuales de traducción.",
          points: {
            highAccuracy: "96% de precisión en 12 idiomas principales",
            unlimitedTranslations: "Traducciones ilimitadas incluidas",
            multicultural: "Perfecto para contenido multicultural",
            autoDetect: "Detección automática del idioma de origen"
          },
          visual: {
            number: "más de 100",
            title: "Idiomas compatibles",
            subtitle: "Traduce una vez y llega a todos"
          }
        },
        flexibleExport: {
          label: "Exportación flexible",
          title: "Todos los formatos",
          titleHighlight: "Necesitas",
          description: "Exporta en el formato que mejor se adapte a tu flujo de trabajo. Desde archivos SRT para YouTube hasta VTT para reproductores web, o documentos editables para scripts. Exportaciones ilimitadas, todo incluido en todos los planes.",
          points: {
            videoFormats: "SRT y VTT para plataformas de vídeo",
            editingFormats: "DOCX y PDF para edición",
            dataAnalysis: "CSV para análisis de datos",
            simpleScripts: "TXT para scripts simples"
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
        title: "Desde la carga hasta",
        titleHighlight: "Publicado",
        titleSuffix: "en minutos",
        subtitle: "La forma más rápida de subtitular toda tu biblioteca de contenido",
        steps: {
          pasteLinks: {
            title: "Pegar enlaces",
            description: "Comparte un enlace de YouTube, TikTok o cualquier video. O sube los archivos directamente."
          },
          autoTranscribe: {
            title: "Transcripción automática",
            description: "La IA procesa con un 96 % de precisión. Admite acentos y habla con varios hablantes."
          },
          editTranslate: {
            title: "Editar y traducir",
            description: "Perfecciona tus subtítulos. Traduce a más de 100 idiomas al instante."
          },
          exportPublish: {
            title: "Exportar y publicar",
            description: "Descárgalo en cualquier formato. Súbelo a tu plataforma. ¡Listo!"
          }
        }
      },
      testimonials: {
        title: "Los creadores son",
        titleHighlight: "Cambio diario",
        subtitle: "De planes limitados a libertad ilimitada",
        carlos: {
          textBefore: "Hago contenido educativo en español. NeverCap transcribe perfectamente y",
          textAfter: "Para un mayor alcance. Sin límites, solo crecimiento. Las visualizaciones de mi canal se triplicaron tras añadir subtítulos multilingües.",
          highlight: "se traduce al inglés",
          name: "Carlos Martínez",
          role: "Educador de YouTube • 250.000 suscriptores"
        },
        sarah: {
          textBefore: "Se busca descriptivo por $30/mes",
          textAfter: "Tengo más de 500 videos atrasados. NeverCap Me dejó procesar todo en un fin de semana. El impulso SEO de los subtítulos se amortizó en el primer mes.",
          highlight: "30 horas",
          name: "Sarah Lee",
          role: "Vlogger de estilo de vida • 180.000 suscriptores"
        },
        jake: {
          textBefore: "El",
          textAfter: "Esta función es revolucionaria. Ya no tengo que descargar nada. Solo pego, transcribo y listo. Procesar mis clips de podcast para TikTok nunca ha sido tan fácil.",
          highlight: "búsqueda directa de YouTube",
          name: "Jake Wilson",
          role: "Presentador de podcast • Creador del 1% superior"
        },
        yuki: {
          textBefore: "Creo contenido en 5 idiomas. Otros servicios tienen costo.",
          textAfter: "NeverCap me ofrece traducciones ilimitadas. Mi audiencia internacional creció un 400 % desde que empecé a usar subtítulos nativos.",
          highlight: "por traducción",
          name: "Yuki Tanaka",
          role: "Creador de juegos • 500.000 suscriptores"
        }
      },
      cta: {
        title: "Tu canal completo. Subtitulado. Hoy.",
        subtitle: "Únase a más de 50.000 creadores que dejaron de contar minutos y comenzaron a crear.",
        button: "Comience a usar subtítulos ilimitados →"
      }
    },
    Researchers: {
      heroBadge: "Creado para la excelencia académica",
      heroTitle1: "Transcribe cada entrevista.",
      heroTitle2: "Analice todos sus datos.",
      heroSubtitle: "Deje de elegir qué grupos focales transcribir. Procese todos sus datos cualitativos con un 96 % de precisión y una identificación impecable de los oradores, incluso con 20 participantes hablando a la vez.",
      heroCtaPrimary: "Pruébelo gratis - Sin tarjeta de crédito",
      heroCtaSecondary: "Vea cómo funciona",
      statsInterviewHours: "Horas de entrevista",
      statsAccuracy: "Exactitud",
      statsSpeakersId: "Identificación de los oradores",
      statsCompliant: "Obediente",
      problemTitle: "El problema de la transcripción de la investigación",
      problemSubtitle: 'Otros servicios te hacen elegir qué datos "vale la pena" transcribir',
      problemCard1Title: "Los límites de carga acaban con los estudios",
      problemCard1Desc: "Otter te ofrece 3 importaciones de por vida. ¿Cómo se transcriben 200 horas de grupos focales?",
      problemCard2Title: "Datos críticos faltantes",
      problemCard2Desc: "Cada entrevista sin transcribir podría contener información reveladora. Pero Rev cobra un mínimo de $2 por minuto.",
      problemCard3Title: "El dinero de la subvención desaparece",
      problemCard3Desc: "A medida que su conjunto de datos crece, los costos de transcripción se disparan. $500 por grupo focal hacen que la escalabilidad sea imposible.",
      solutionTitle: "La solución NeverCap",
      solutionDesc: "Transcripción ilimitada. Sube tu estudio completo. Transcribe cada entrevista. Analiza todos tus datos. Sin límites, solo investigación.",
      feature1Label: "Sin límites",
      feature1Title: "Procesa todo tu estudio de una sola vez",
      feature1Desc: 'Sube las 200 horas de entrevistas esta noche. Despierta con transcripciones completas y con opciones de búsqueda. Sin límites mensuales, sin límite por archivo, sin tonterías sobre el "uso legítimo".',
      feature1Point1: "Carga por lotes de 50 archivos simultáneamente",
      feature1Point2: "Procesar estudios longitudinales por completo",
      feature1Point3: "No hay límites de almacenamiento para las transcripciones",
      feature1Point4: "Exportar a NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Horas ilimitadas",
      feature1Visual2: "El mismo precio ya sean 10 o 10.000 horas",
      feature2Label: "IA inteligente",
      feature2Title: "Grupos focales de uñas en todo momento",
      feature2Desc: "Nuestra IA rastrea hasta 20 hablantes, incluso cuando hablan al mismo tiempo, se interrumpen o intervienen todos a la vez. Cada voz se captura y etiqueta correctamente.",
      feature2Point1: "Identificación de 20 hablantes",
      feature2Point2: "Maneja la diafonía y las interrupciones",
      feature2Point3: "Etiquetas de altavoces que puedes renombrar",
      feature2Point4: "Marca de tiempo para cada palabra",
      conversationParticipant1: "Participante 1",
      conversationText1: "La principal barrera a la que nos enfrentamos es definitivamente el coste del tratamiento...",
      conversationParticipant2: "Participante 2",
      conversationText2: "Por supuesto, pero añadiría que el acceso es...",
      conversationParticipant3: "Participante 3",
      conversationText3: "—Perdón por interrumpir, pero el transporte también es muy importante.",
      conversationText4: "¡Sí! Eso es exactamente lo que iba a decir.",
      conversationParticipant4: "Participante 4",
      conversationText5: "En las zonas rurales, son las tres cosas: coste, acceso y transporte.",
      feature3Label: "Precisión",
      feature3Title: "96% de precisión que se mantiene",
      feature3Desc: "Maneja la jerga técnica, los acentos fuertes y la terminología específica del campo con profesionalidad. Suficientemente preciso para su publicación, revisión por pares y el comité de tesis.",
      feature3Point1: "Terminología médica y científica",
      feature3Point2: "Más de 100 idiomas y dialectos",
      feature3Point3: "Modos de lectura literal y limpia",
      feature3Point4: "Editar y exportar en cualquier formato",
      feature3Visual1: "Precisión de grado de investigación",
      feature3Visual2: "Con la confianza de más de 50.000 investigadores",
      feature4Label: "Seguridad",
      feature4Title: "Seguridad preparada para IRB",
      feature4Desc: "Sus datos de investigación confidenciales están protegidos con seguridad de nivel empresarial. Cumple con el RGPD, cuenta con opciones compatibles con HIPAA y cuenta con registros de auditoría completos para los requisitos del IRB.",
      feature4Point1: "Cifrado de extremo a extremo",
      feature4Point2: "Cumple con el RGPD y la CCPA",
      feature4Point3: "Políticas de eliminación automática",
      feature4Point4: "Colaboración segura en equipo",
      useCasesTitle: "Perfecto para cualquier método de investigación",
      useCasesSubtitle: "De la etnografía a los ensayos clínicos",
      useCase1Title: "Grupos focales",
      useCase1Desc: "Gestione de 8 a 20 participantes con intervenciones simultáneas. Identifique perfectamente al orador incluso en discusiones acaloradas. Exporte directamente a software de análisis cualitativo.",
      useCase2Title: "Entrevistas en profundidad",
      useCase2Desc: "Procese cientos de entrevistas individuales simultáneamente. Mantenga la coherencia en todo su conjunto de datos. Busque en todas las transcripciones al instante.",
      useCase3Title: "Investigación clínica",
      useCase3Desc: "Opciones que cumplen con la HIPAA para entrevistas con pacientes. Transcripción precisa de terminología médica. Manejo seguro de datos de salud confidenciales.",
      useCase4Title: "Estudios Etnográficos",
      useCase4Desc: "Grabaciones de campo en entornos naturales. Admite ruido de fondo y múltiples hablantes. Compatible con más de 100 idiomas y dialectos.",
      useCase5Title: "Proyectos de historia oral",
      useCase5Desc: "Conserve archivos completos sin límites. Cree registros históricos con función de búsqueda. Ideal para estudios longitudinales y generacionales.",
      useCase6Title: "Investigación de tesis",
      useCase6Desc: "Precios accesibles para estudiantes con funcionalidades completas. Procesa todo tu conjunto de datos de forma económica. Cumple plazos ajustados con el procesamiento por lotes.",
      testimonialTitle: "Con la confianza de los principales investigadores",
      testimonialText: "Nuestro equipo de investigación contó con 200 horas de grabaciones de grupos focales de nuestro estudio de salud comunitaria. Otros servicios nos pidieron que eligiéramos qué sesiones transcribir debido al costo. NeverCap nos permitió procesar todo en un fin de semana. La identificación de 20 participantes funcionó, incluso durante nuestras conversaciones más confusas, donde todos hablaban a la vez. Esta herramienta ha cambiado por completo la forma en que gestionamos los datos cualitativos.",
      testimonialAuthorName: "Dra. Sarah Chen",
      testimonialAuthorRole: "Investigador principal, Instituto de Salud Pública",
      ctaTitle: "Deje de elegir qué datos analizar",
      ctaSubtitle: "Únase a más de 50.000 investigadores que transcriben todo",
      ctaButton: "Prueba NeverCap Gratis"
    },
    BusinessTeams: {
      heroBadge: "Para equipos empresariales",
      heroTitle1: "Grabación de la reunión realizada",
      heroTitle2: "Fácil",
      heroSubtitle: "Graba reuniones directamente en tu navegador o sube archivos de audio al instante. Crea archivos con función de búsqueda a partir de conversaciones ilimitadas. No vuelvas a perder conversaciones importantes con la transcripción ilimitada.",
      heroCtaPrimary: "Empieza a grabar ahora →",
      heroCtaSecondary: "Vea cómo funciona",
      recordingStatus: "Grabación...",
      statsMeetingMinutes: "Actas de la reunión",
      statsLiveRecording: "Grabación en vivo",
      statsSpeakerID: "Identificación del orador",
      statsInstantUpload: "Carga y procesamiento instantáneos",
      featuresTitle: "Todo lo que los equipos necesitan para capturar el conocimiento",
      featuresSubtitle: "Desde grabaciones en vivo hasta cargas instantáneas, hemos eliminado todos los puntos de fricción.",
      feature1Title: "Grabar directamente en su navegador",
      feature1Desc: "Sin descargas ni plugins. Empieza a grabar al instante con un solo clic. Calidad de audio perfecta, detección automática del hablante y transcripción en tiempo real mientras hablas.",
      feature1Benefit1: "Inicio de grabación con un solo clic",
      feature1Benefit2: "Sin instalación de software",
      feature1Benefit3: "Funciona en cualquier dispositivo",
      feature1Benefit4: "Transcripción en tiempo real",
      feature1Visual1: "Haga clic y grabe",
      feature1Visual2: "No requiere configuración",
      feature2Title: "Sube cualquier archivo de audio al instante",
      feature2Desc: "¿Tienes grabaciones de Zoom, Teams o tu teléfono? Súbelas al instante. Compatible con los principales formatos de audio y video. Procesa varios archivos simultáneamente sin esperas.",
      feature2Benefit1: "Admite: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Capacidad de carga por lotes",
      feature2Benefit3: "Se admiten archivos de 10 horas",
      feature2Benefit4: "Procesa mientras trabajas",
      feature2Visual1: "Arrastrar y soltar archivos",
      feature3Title: "Creado para la colaboración en equipo",
      feature3Desc: "Comparte transcripciones con tu equipo al instante. Escuchen las grabaciones juntos, exporten transcripciones en múltiples formatos y mantengan a todos informados con los archivos de reuniones con función de búsqueda.",
      feature3Benefit1: "Comparte transcripciones con cualquier persona",
      feature3Benefit2: "Escuchar grabaciones originales",
      feature3Benefit3: "Exportar transcripciones en múltiples formatos",
      feature3Benefit4: "Archivos de búsqueda de todo el equipo",
      feature3Visual1: "Miembros del equipo",
      feature3Visual2: "Colaboración ilimitada",
      feature4Title: "Encuentra cualquier conversación al instante",
      feature4Desc: "Busque en todas sus reuniones a la vez. Encuentre esa decisión crucial del último trimestre o ese requisito de un cliente de hace meses. La búsqueda con IA entiende el contexto, no solo las palabras clave.",
      feature4Benefit1: "Buscar todas las reuniones a la vez",
      feature4Benefit2: "La IA entiende el contexto",
      feature4Benefit3: "Filtrar por orador o fecha",
      feature4SearchPlaceholder: "🔍 Buscar: 'Objetivos de ingresos del cuarto trimestre'",
      feature4SearchResults: "Encontrado en 3 reuniones:",
      feature4Meeting1: "Planificación de ventas - 15 de octubre",
      feature4Meeting1Text: '"...objetivos para el cuarto trimestre fijados en 2 millones de dólares..."',
      feature4Meeting2: "Reunión de la Junta Directiva - 20 de octubre",
      feature4Meeting2Text: '"...Proyecciones de ingresos del cuarto trimestre..."',
      workflowTitle: "De la grabación a la información procesable",
      workflowSubtitle: "Un flujo de trabajo continuo que captura cada momento importante",
      workflowStep1Title: "Grabar o cargar",
      workflowStep1Desc: "Comience a grabar en vivo o cargue archivos de audio existentes",
      workflowStep2Title: "Transcripción automática",
      workflowStep2Desc: "La IA transcribe con un 96 % de precisión en minutos",
      workflowStep3Title: "Colaborar",
      workflowStep3Desc: "Compartir, comentar y extraer elementos de acción",
      workflowStep4Title: "Buscar y analizar",
      workflowStep4Desc: "Encuentre información valiosa en todas sus reuniones",
      testimonialsTitle: "Los equipos aman NeverCap",
      testimonialsSubtitle: "Vea cómo las empresas transforman su cultura de reuniones",
      testimonial1Text: "Pasamos de perder detalles cruciales a tener un archivo con función de búsqueda de cada conversación. La función de grabación directa nos permite capturar conversaciones importantes.",
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Gerente de producto, TechCorp",
      testimonial2Text: "Otter nos limitó a subir 10 archivos al mes. Ahora subimos todas las llamadas de nuestros clientes al instante. Una innovación para el seguimiento de nuestro equipo de ventas.",
      testimonial2AuthorName: "Sarah Rodríguez",
      testimonial2AuthorRole: "Director de ventas, ConsultPro",
      testimonial3Text: "La posibilidad de buscar entre meses de reuniones nos salvó durante nuestra auditoría. Encontramos todas las decisiones y aprobaciones en segundos.",
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Director de operaciones de FinanceHub",
      ctaTitle: "Deja de perder conversaciones importantes",
      ctaSubtitle: "Únase a miles de equipos que capturan cada reunión con transcripción ilimitada",
      ctaButton: "Empieza a grabar gratis →"
    },
    Educators: {
      heroBadge: "Para educadores y profesores",
      heroTitle1: "Convierte cualquier vídeo educativo en",
      heroTitle2: "Contenido accesible",
      heroSubtitle: "Simplemente pega enlaces de YouTube para obtener transcripciones instantáneas con subtítulos generados automáticamente. Transforma clases, tutoriales y videos educativos en contenido accesible y con opciones de búsqueda, del que todos los estudiantes pueden aprender.",
      heroCtaPrimary: "Pruébelo gratis - Sin tarjeta de crédito",
      heroCtaSecondary: "Ver demostración",
      stats1Number: "1 clic",
      stats1Label: "Transcripción de YouTube",
      stats2Number: "más de 100",
      stats2Label: "Idiomas compatibles",
      stats3Number: "∞",
      stats3Label: "Vídeos ilimitados",
      stats4Number: "96%",
      stats4Label: "Tasa de precisión",
      featuresTitle: "Todo lo que los educadores necesitan para la transcripción de videos",
      featuresSubtitle: "Desde conferencias de YouTube hasta clases grabadas, haz que todo tu contenido sea accesible",
      feature1Title: "Enlaces instantáneos a YouTube y otras plataformas",
      feature1Desc: "Simplemente pega el enlace de cualquier video y obtén transcripciones instantáneas. Compatible con YouTube, Vimeo, Facebook, Twitter, TikTok, Instagram, Dropbox, Google Drive y más. Sin descargas ni esperas.",
      feature1Point1: "Transcripción de enlace directo: no se necesitan descargas",
      feature1Point2: "Soporte para todas las plataformas principales",
      feature1Point3: "Procesar listas de reproducción completas a la vez",
      feature1Point4: "Trabaja con videos privados (con permiso)",
      feature2Title: "Generar subtítulos y leyendas automáticamente",
      feature2Desc: "Crea subtítulos precisos al instante para todos tus videos educativos. Haz que el contenido sea accesible para estudiantes con discapacidad auditiva, hablantes no nativos o quienes prefieren leer con audio.",
      feature2Point1: "Formatos de exportación SRT, VTT y TXT",
      feature2Point2: "Marcas de tiempo a nivel de palabra para una sincronización perfecta",
      feature2Point3: "Edite y personalice subtítulos fácilmente",
      feature2Point4: "Subir directamente de nuevo a YouTube",
      feature2Visual1: "Traducciones de idiomas",
      feature2Visual2: "Haga que su contenido sea accesible globalmente",
      feature3Title: "Organizar por cursos y categorías",
      feature3Desc: "Crea carpetas para organizar tus expedientes académicos por curso, asignatura o semestre. Mantén todo tu contenido educativo organizado y fácil de buscar. Crea una biblioteca completa de materiales de cursos accesibles.",
      feature3Point1: "Crea carpetas y subcarpetas ilimitadas",
      feature3Point2: "Etiqueta los vídeos por tema o nivel de dificultad",
      feature3Point3: "Organice múltiples transcripciones en masa",
      feature3Point4: "Busca en todo tu contenido al instante",
      feature3VisualTitle: "Tu biblioteca de cursos",
      feature3Folder1: "Matemáticas 101",
      feature3Folder2: "Clases de física",
      feature3Folder3: "Vídeos de laboratorio de biología",
      feature3Folder4: "Documentales de historia",
      feature3Folder5: "Aprendizaje de idiomas",
      feature4Title: "Exporta en cualquier formato que necesites",
      feature4Desc: "Descarga transcripciones en formato TXT, DOCX o PDF. Ideal para crear guías de estudio, apuntes o materiales de curso accesibles. Compártelas con tus estudiantes o intégralas en tu sistema de gestión del aprendizaje.",
      feature4Point1: "TXT para edición de texto simple",
      feature4Point2: "DOCX para documentos formateados",
      feature4Point3: "PDF para compartir e imprimir fácilmente",
      feature4Point4: "Exportación masiva de varios archivos a la vez",
      workflowTitle: "Cómo funciona",
      workflowSubtitle: "Del enlace del vídeo a la transcripción accesible en minutos",
      workflowStep1Title: "Pegar enlace",
      workflowStep1Desc: "Copia la URL de cualquier video educativo y pégala",
      workflowStep2Title: "Transcripción automática",
      workflowStep2Desc: "La IA transcribe con una precisión del 96 %",
      workflowStep3Title: "Generar subtítulos",
      workflowStep3Desc: "Crea automáticamente subtítulos perfectamente sincronizados",
      workflowStep4Title: "Compartir y exportar",
      workflowStep4Desc: "Descargar o compartir con los estudiantes",
      useCasesTitle: "Perfecto para cada necesidad educativa",
      useCasesSubtitle: "Vea cómo los educadores utilizan NeverCap para mejorar el aprendizaje",
      useCase1Title: "Conferencias grabadas",
      useCase1Text: "Transcribe semestres completos de clases grabadas. Los estudiantes pueden buscar temas específicos, repasar conceptos clave y no perderse información importante.",
      useCase2Title: "Cursos en línea",
      useCase2Text: "Haz que tus cursos en línea sean accesibles para estudiantes internacionales con traducciones a más de 100 idiomas. Aumenta la matrícula y la satisfacción.",
      useCase3Title: "Materiales de estudio",
      useCase3Text: "Convierte videotutoriales en guías de estudio fáciles de leer. Ideal para estudiantes que prefieren leer o necesitan repasar el contenido rápidamente.",
      useCase4Title: "Cumplimiento de accesibilidad",
      useCase4Text: "Cumpla con los requisitos de accesibilidad proporcionando subtítulos y transcripciones para todo el contenido de video. Garantice la igualdad de acceso para todos los estudiantes.",
      useCase5Title: "Aula invertida",
      useCase5Text: "Comparta las videoclases con las transcripciones antes de la clase. Los estudiantes pueden repasar a su propio ritmo y prepararse para los debates.",
      useCase6Title: "Investigación y citas",
      useCase6Text: "Ayuda a los estudiantes a citar fuentes de video con precisión mediante marcas de tiempo. Ideal para proyectos de investigación y trabajos académicos.",
      testimonialTitle: "Más de 50.000 educadores confían en nosotros",
      testimonialSubtitle: "Descubra por qué los profesores de todo el mundo eligen NeverCap",
      testimonialText: "He estado usando NeverCap para transcribir todo mi canal de YouTube de tutoriales de matemáticas. Lo que antes me llevaba semanas con otros servicios ahora me lleva horas. La posibilidad de pegar enlaces directamente y obtener transcripciones instantáneas ha transformado mi forma de crear contenido accesible. ¡A mis estudiantes internacionales les encantan los subtítulos en varios idiomas!",
      testimonialAuthorName: "Profesora Karen Mitchell",
      testimonialAuthorRole: "Profesor de Matemáticas, Educador en Línea",
      ctaTitle: "Haga que todo su contenido educativo sea accesible",
      ctaSubtitle: "Únase a miles de educadores que utilizan una transcripción verdaderamente ilimitada",
      ctaButton: "Prueba NeverCap Gratis"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Descargar vídeos de YouTube como MP4",
        "placeholder": "Busca o pega tu enlace de Youtube aquí",
        "clear_icon": "Entrada clara",
        "Download": "Descargar",
        "loading_text": "Procesando el enlace de descarga. Permanezca en la página.",
        "howToDownload": "¿Como descargar?",
        "tutorial": "Mira el tutorial"
      },
      part2: {
        "title": "Aquí te explicamos cómo convertir un video de YouTube en un archivo MP4 descargable en 3 sencillos pasos",
        "steps": [
          {
            title: "Copiar la URL",
            content: "Abra el video de YouTube de destino y luego copie el enlace desde la barra de direcciones de su navegador."
          },
          {
            title: "Pegar el enlace",
            content: "Dirígete a tu herramienta de descarga de videos y pega la URL en su campo de entrada."
          },
          {
            title: "Descargar el MP4",
            content: "Una vez procesado, presione el botón de descarga para guardar su archivo MP4."
          }
        ]
      },
      part3: {
        content: [
          "¿Alguna vez te has encontrado con la necesidad de ver vídeos de YouTube sin conexión?",
          "Ya sea que estés viajando en metro, volando en avión, estudiando un tutorial crucial, profundizando en contenido para desarrollar habilidades o archivando material de video importante, tener acceso confiable sin conexión es una frustración común. Aquí es donde nuestro descargador destaca.",
          "El descargador te permite convertir videos de YouTube a formato MP4 de forma rápida y sencilla. Guárdalos en tu dispositivo y disfrútalos cuando quieras.",
          "El proceso es rápido, sencillo y sin complicaciones. Una vez descargados, disfruta de tus videos favoritos cuando y donde quieras, sin necesidad de internet."
        ]
      },
      part4: {
        content: ["Aquí están los 5 principales beneficios de descargar", "Vídeos de YouTube como archivos MP4"],
        list: [
          {
            title: "Ahorre en costos de datos:",
            content: "Normalmente, ver videos en YouTube consume una cantidad considerable de datos móviles. Al descargarlos para verlos sin conexión, puedes evitar estos gastos innecesarios."
          },
          {
            title: "Míralo en cualquier lugar, en cualquier momento:",
            content: "Disfruta de tus videos sin interrupciones, incluso con mala conexión a internet. Olvídate del buffering."
          },
          {
            title: "Fácil archivado y conservación:",
            content: "Guardar videos como MP4 facilita la creación de tu colección personal, especialmente para contenido que consideres verdaderamente valioso o importante."
          },
          {
            title: "Compartir más sencilla:",
            content: "Compartir un archivo MP4 es mucho más cómodo que enviar un enlace. Puedes enviar el video directamente a través de aplicaciones como WhatsApp o Instagram, eliminando así el paso extra de abrir YouTube."
          },
          {
            title: "Visualización instantánea, momentos compartidos:",
            content: "¿Te emociona mostrar tu video favorito a tus amigos o familiares que estén cerca? Con el MP4 descargado, podrán verlo todos juntos sin interrupciones, sin pausas incómodas mientras carga."
          }
        ]
      },
      part5: {
        title: "Por qué nuestro descargador se destaca",
        cards: [
          {
            title: "Simplicidad con un solo clic",
            content: "Configuración sin esfuerzo y funcionamiento intuitivo."
          },
          {
            title: "Ultrarrápido, ilimitado",
            content: "Convierte y descarga a máxima velocidad: sin límites ni limitaciones."
          },
          {
            title: "Convertir sobre la marcha",
            content: "Procese sus archivos instantáneamente, sin necesidad de esperar."
          },
          {
            title: "Cero anuncios, cero distracciones",
            content: "Disfrute de una interfaz limpia sin ventanas emergentes, banners ni interrupciones: solo una conversión de video perfecta."
          },
          {
            icon: "5",
            color: "#DEE5FF",
            title: "Calidad original garantizada",
            content: "Tus descargas conservan la resolución completa del video de origen para una reproducción con píxeles perfectos en todo momento."
          },
          {
            icon: "6",
            color: "#DEF6EE",
            title: "Funciona en cualquier lugar",
            content: "Totalmente compatible con cualquier navegador, en cualquier dispositivo."
          }
        ]
      },
      part6: {
        title: ["Maximiza tus descargas de videos de YouTube", "Con el descargador"],
        content: [
          "Conversión de YouTube a MP4 sin esfuerzo: rápida, sencilla y gratuita.",
          "Ahí es donde destacamos. Nuestra interfaz intuitiva está diseñada para todos; no se necesitan conocimientos técnicos. Sin importar tu nivel de experiencia, puedes convertir videos al instante. No necesitas registrarte: obtén exactamente lo que necesitas al instante.",
          "Tenga la seguridad de que los archivos MP4 descargados mantienen la calidad y la claridad del video original, exactamente como los vio en YouTube.",
          "Funciona dondequiera que vayas. Totalmente compatible con las principales plataformas y dispositivos. Ya sea que uses Windows, macOS, Linux, Android o iOS (un smartphone, una tableta o una computadora de escritorio), puedes descargar videos sin problemas."
        ]
      },
      part7: {
        title: "Preguntas clave sobre la descarga de vídeos de YouTube",
        list: [
          {
            question: "¿Puedo descargar un vídeo de YouTube si tiene derechos de autor?",
            answer: "Descargar vídeos de YouTube protegidos por derechos de autor sin el permiso del propietario de los derechos de autor es ilegal."
          },
          {
            question: "¿Es segura esta herramienta de descarga?",
            answer: "Sí, es seguro y confiable. No solicitamos información personal a los usuarios y tomamos medidas estrictas contra virus. Les recordamos que siempre tengan cuidado al descargar archivos de internet: eviten hacer clic en enlaces sospechosos o descargar archivos dudosos."
          },
          {
            question: "¿Qué idiomas admite la descarga de YouTube a MP4?",
            answer: "Nuestro servicio admite la descarga de vídeos de YouTube en todos los idiomas populares."
          },
          {
            question: "¿Qué factores afectan el tiempo que tarda en descargarse un vídeo de YouTube?",
            answer: "Si bien garantizamos la experiencia de descarga más rápida posible, el tiempo de descarga también se ve afectado por factores como la duración del video y la velocidad de su conexión a Internet."
          },
          {
            question: "Cuando descargo un vídeo MP4 usando mi teléfono inteligente, ¿dónde se guarda?"
          },
          {
            question: "¿Descargar un vídeo de YouTube como MP4 reduce la calidad del vídeo?",
            answer: "No. Al descargar videos de YouTube como MP4 con nuestra herramienta, se conserva la calidad original del video. El proceso de conversión conserva la calidad original, lo que garantiza la misma experiencia de visualización que en YouTube."
          }
        ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "Tecnología de IA líder en la industria",
      "title": "Acerca de",
      "highlighted_text": "NeverCap",
      "description": "Nuestra misión es brindar los servicios de transcripción de audio y video más precisos. Gracias a la tecnología de IA líder en la industria, logramos tasas de precisión de transcripción superiores al 96 %. En algunos de los principales idiomas, mediante la optimización técnica, podemos incluso alcanzar una precisión del 99 %."
    },
    Stats: {
      "title": "Nuestro",
      "highlighted_text": "Impacto",
      "subtitle": "Potenciando la comunicación global con tecnología de IA de vanguardia",
      "metrics": [
        {
          "value": "96%+",
          "label": "Tasa de precisión",
          "description": "Precisión de transcripción líder en la industria con IA avanzada"
        },
        {
          "value": "más de 100",
          "label": "Idiomas compatibles",
          "description": "Reconocimiento de palabras habladas para contenido global"
        },
        {
          "value": "249+",
          "label": "Idiomas de traducción",
          "description": "Traducir texto transcrito a prácticamente cualquier idioma"
        }
      ]
    },
    Mission: {
      "title": "¿Por qué elegir?",
      "highlighted_text": "NeverCap",
      "subtitle": "Creemos en romper las barreras del idioma y hacer que el contenido sea accesible para todos.",
      "features": [
        {
          "icon": "🎯",
          "title": "Precisión inigualable",
          "description": "Nuestros modelos de IA se perfeccionan continuamente para ofrecer índices de precisión de transcripción superiores al 96 %, y algunos idiomas importantes alcanzan hasta el 99 % de precisión mediante una optimización avanzada."
        },
        {
          "icon": "🌍",
          "title": "Soporte de idiomas global",
          "description": "Compatibilidad con más de 100 idiomas en reconocimiento de palabras habladas y capacidades de traducción para más de 249 idiomas, lo que hace que su contenido sea verdaderamente global."
        },
        {
          "icon": "⚡",
          "title": "Procesamiento ultrarrápido",
          "description": "Procese horas de contenido de audio y video en minutos, no en horas. Nuestro flujo de trabajo optimizado con IA le garantiza obtener sus transcripciones rápidamente sin sacrificar la calidad."
        },
        {
          "icon": "🔒",
          "title": "Seguridad de nivel empresarial",
          "description": "La seguridad de sus datos es nuestra prioridad. Utilizamos cifrado estándar de la industria y cumplimos con las normativas globales de privacidad para mantener su contenido seguro y confidencial."
        }
      ]
    },
    Company: {
      "title": "Compañía",
      "highlighted_text": "Información",
      "subtitle": "Ponte en contacto con nosotros para cualquier pregunta o ayuda.",
      "details": [
        {
          "label": "nombre de empresa",
          "value": "SCRIBIFY AI INC"
        },
        {
          "label": "Sede",
          "value": ["30 N Gould St Ste R", "Sheridan, Wyoming 82801", "Estados Unidos"]
        },
        {
          "label": "Contáctenos",
          "value": ["correo electrónico", "Soporte disponible 24/7"]
        }
      ]
    },
    CTA: {
      "title": "¿Listo para experimentar la diferencia?",
      "subtitle": "Únase a miles de profesionales que confían en NeverCap para sus necesidades de transcripción",
      "button": "Prueba NeverCap Gratis →",
      "disclaimer": "No se requiere tarjeta de crédito • Comience a transcribir en segundos"
    }
  },
  Privacy: {
    title: "Privacidad",
    titleGradient: "Política",
    subtitle: "Conozca cómo recopilamos, usamos y protegemos su información personal",
    "lastUpdated": "Última actualización: {fecha}",
    "lastUpdatedDate": "21 de julio de 2025",
    "privacyPolicyTitle": "política de privacidad",
    "policyDescription": 'Esta Política describe cómo NeverCap (en adelante denominado \"NeverCap\", \"nuestro\", \"nosotros\", \"nos\") recopila, usa y divulga su información personal cuando utiliza nuestros servicios, sitios web (https://www.nevercap.ai/) y software (colectivamente, los \"Servicios\").',
    "policyAgreement": "Lea atentamente esta Política de Privacidad y asegúrese de comprenderla. Al utilizar cualquiera de nuestros Servicios, usted acepta esta Política de Privacidad. Si no está de acuerdo con el uso que hagamos de sus datos personales conforme a esta Política, debe dejar de usar nuestros Servicios inmediatamente.",
    "policyOverview": "En esta política, explicamos qué datos recopilamos y por qué; cómo gestionamos sus datos; y sus derechos con respecto a ellos. No vendemos sus datos.",
    "scopeTitle": "1. Alcance de esta Política de Privacidad",
    "scopeDescription": "Esta Política de Privacidad se aplica únicamente a la recopilación y el procesamiento de información sobre los usuarios de los Servicios. No se aplica a ningún servicio, sitio web ni software operado por terceros que estén vinculados con nosotros (ya sea que proporcionemos dichos enlaces o que otros usuarios los compartan), ni al contenido, los datos, las aplicaciones ni los materiales de terceros. Le recomendamos que consulte las políticas de privacidad de cualquier sitio web o software de terceros antes de proporcionarles información.",
    "collectionTitle": "2. Qué recopilamos y por qué",
    "collectionPrinciple": "Nuestro principio rector es recolectar solo lo necesario. Esto significa en la práctica:",
    "identityTitle": "2.1 Identidad y acceso",
    "identityDescription": "Al suscribirse a uno de nuestros productos, le solicitamos información de identificación, como su nombre y correo electrónico. Esto nos permite ofrecerle funcionalidades esenciales del producto y enviarle actualizaciones y otra información esencial.",
    "billingTitle": "2.2 Información de facturación",
    "billingDescription": "Si se suscribe a un producto de pago, se le solicitará su información de pago y dirección de facturación. Esta información se envía directamente a nuestro procesador de pagos y no llega a nuestros servidores.",
    "productInteractionsTitle": "2.3 Interacciones del producto",
    "productInteractionsDescription": "Almacenamos en nuestros servidores el contenido que usted sube, recibe o mantiene en sus cuentas de producto. A menos que lo elimine, podremos conservarlo mientras su cuenta esté activa.",
    "websiteInteractionsTitle": "2.4 Interacciones del sitio web",
    "websiteInteractionsDescription": "Recopilamos información sobre su actividad de navegación con fines analíticos y estadísticos, como la evaluación de la tasa de conversión y la experimentación con nuevos diseños de productos. Esto incluye, por ejemplo, la versión de su navegador y sistema operativo, su dirección IP, las páginas web que visitó y su tiempo de carga, y el sitio web que lo refirió a nosotros. Si tiene una cuenta y ha iniciado sesión, estos datos de analítica web se vinculan a su dirección IP y cuenta de usuario hasta que su cuenta deje de estar activa.",
    "cookiesTitle": "2.5 Galletas",
    "cookiesDescription1": "También utilizamos cookies propias persistentes y algunas cookies de terceros para almacenar determinadas preferencias, facilitarle el uso de nuestras aplicaciones, realizar pruebas A/B y respaldar algunos análisis.",
    "cookiesDescription2": "Una cookie es un fragmento de texto que almacena su navegador. Puede ayudarle a recordar la información de inicio de sesión y las preferencias del sitio. También puede recopilar información como el tipo de navegador, el sistema operativo, las páginas web visitadas, la duración de la visita, el contenido visualizado y otros datos de navegación. Puede ajustar la configuración de retención de cookies y aceptar o bloquear cookies individuales en la configuración de su navegador, aunque nuestras aplicaciones no funcionarán correctamente y otros aspectos de nuestro servicio podrían no funcionar correctamente si desactiva las cookies.",
    "correspondenceTitle": "2.6 Correspondencia voluntaria",
    "correspondenceDescription": "Cuando nos envía un correo electrónico con una pregunta o para solicitar ayuda, conservamos esa correspondencia, incluida su dirección de correo electrónico, para que tengamos un historial de correspondencia pasada para consultar si se comunica con nosotros en el futuro.",
    "accessTitle": "3. Cuándo accedemos o compartimos su información",
    "accessDescription1": "Para proporcionarle los productos o servicios que ha solicitado. Utilizamos subprocesadores externos para el funcionamiento de nuestras aplicaciones y para prestarle los Servicios. Esto incluye proveedores de servicios en la nube y de análisis.",
    "accessDescription2": "Para investigar, prevenir o tomar medidas en caso de abuso. Acceder a la cuenta de un cliente para investigar un posible abuso es una medida de último recurso. Queremos proteger la privacidad y la seguridad tanto de nuestros clientes como de quienes nos informan sobre problemas, y hacemos todo lo posible por equilibrar estas responsabilidades durante todo el proceso. Si descubrimos que está utilizando nuestros productos para un fin restringido, tomaremos las medidas necesarias, incluyendo la notificación a las autoridades competentes cuando corresponda.",
    "accessDescription3": "Cuando lo requiera la legislación aplicable.",
    "dataRequests": "Solicitudes de datos de usuarios. Nuestra política es no responder a solicitudes gubernamentales de datos de usuarios, a menos que estemos obligados por un proceso legal o en circunstancias limitadas, en caso de una solicitud de emergencia. Sin embargo, si las autoridades policiales estadounidenses cuentan con la orden judicial, citación penal o resolución judicial que nos obligue a compartir datos, debemos cumplir. Asimismo, solo responderemos a solicitudes de autoridades gubernamentales fuera de EE. UU. si el gobierno estadounidense nos lo exige mediante los procedimientos descritos en un tratado o acuerdo de asistencia legal mutua. Nuestra política es notificar a los usuarios afectados antes de compartir datos, a menos que tengamos prohibido hacerlo legalmente, y excepto en casos de emergencia.",
    "preservationRequests": "Solicitudes de conservación. De igual forma, nuestra política es cumplir con las solicitudes de conservación de datos únicamente si así lo exige la Ley Federal de Comunicaciones Almacenadas de EE. UU., Título 18 del Código de los Estados Unidos, Sección 2703(f), o una citación judicial debidamente notificada en EE. UU. para asuntos civiles. No compartimos datos conservados a menos que lo exija la ley o una orden judicial que decidamos no apelar. Además, a menos que recibamos una orden judicial, una orden judicial o una citación judicial antes de que expire el plazo de conservación requerido, destruiremos cualquier copia conservada de los datos del cliente al finalizar dicho plazo.",
    "taxAudits": "Si una autoridad fiscal nos audita, podríamos estar obligados a compartir información de facturación. En ese caso, compartiremos solo la mínima necesaria, como las direcciones de facturación y la información sobre exenciones fiscales.",
    "securityTitle": "4. Cómo protegemos sus datos",
    "securityDescription": "Todos los datos se encriptan mediante SSL/TLS cuando se transmiten desde nuestros servidores a su navegador.",
    "deletionTitle": "5. ¿Qué sucede cuando eliminas tu contenido?",
    "deletionDescription": "Si elimina cualquier contenido, éste quedará inmediatamente inaccesible.",
    "locationTitle": "6. Ubicación del sitio y datos",
    "locationDescription": "Nuestros productos y otras propiedades web operan en Estados Unidos. Si se encuentra en la Unión Europea, el Reino Unido o en cualquier otro lugar fuera de Estados Unidos, tenga en cuenta que cualquier información que nos proporcione se transferirá y almacenará en Estados Unidos. Al utilizar nuestros sitios web o Servicios, o al proporcionarnos su información personal, usted consiente dicha transferencia.",
    "childrenTitle": "7. Privacidad de los niños",
    "childrenDescription": "Los Servicios no están dirigidos a menores y no recopilamos intencionalmente información personal de menores de 13 años. Si usted es menor de 13 años, le rogamos que no envíe información personal a través de los Servicios. Si cree que un menor nos ha proporcionado información personal infringiendo esta Política, póngase en contacto con nosotros como se indica a continuación.",
    "updatesTitle": "8. Actualizaciones de esta Política de Privacidad",
    "updatesDescription": "Podemos actualizar esta política según sea necesario para cumplir con la normativa pertinente y reflejar cualquier nueva práctica. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página.",
    "contactTitle": "9. Contáctenos",
    "contactDescription": "Si tiene alguna pregunta, comentario o queja sobre nuestra Política de privacidad, comuníquese con nosotros y nos esforzaremos por atender su queja lo antes posible.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Términos de",
    titleGradient: "Servicio",
    subtitle: "Lea atentamente estos términos antes de utilizar nuestros servicios.",
    "lastUpdated": "Última actualización: {fecha}",
    "lastUpdatedDate": "21 de julio de 2025",
    "termsOfServiceTitle": "Condiciones de servicio",
    "thankYou": "¡Gracias por utilizar nuestros productos!",
    "companyDefinition": 'Cuando decimos "Compañía", "nosotros", "nuestro" o "nos" en este documento, nos referimos a NeverCap.',
    "servicesDefinition": 'Cuando decimos "Servicios", nos referimos a cualquier producto creado y mantenido por NeverCap, ya sea entregado dentro de un navegador web, una aplicación de escritorio, una aplicación móvil u otro formato.',
    "termsUpdate": "Es posible que actualicemos estos Términos de Servicio en el futuro. Normalmente, estos cambios se han realizado para aclarar algunos de estos términos mediante enlaces a una política relacionada más amplia. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página y tomaremos las medidas necesarias para notificar a los titulares de las cuentas.",
    "acceptanceTitle": "1. Aceptación del Acuerdo",
    "acceptanceDescription1": "Al utilizar nuestros Servicios, usted acepta este Acuerdo, que se convierte en un contrato vinculante entre usted y NeverCap. Usted declara tener la capacidad legal para aceptar estos Términos y afirma ser mayor de edad para formalizar un contrato vinculante. La aceptación de NeverCap está expresamente condicionada a su consentimiento a todos los términos y condiciones de este Acuerdo.",
    "eligibilityRequirement": "Los Servicios no están destinados a menores de 18 años ni deben ser utilizados por ellos. Al utilizar los Servicios, usted declara y garantiza que cumple con el requisito de elegibilidad anterior.",
    "userResponsibility": 'Los términos "usted", "su", "usted mismo" también incluyen a sus empleados, agentes, representantes comerciales y cualquier otra persona a la que proporcione acceso a los Servicios a través de su Cuenta (según se define más adelante). Usted es responsable de garantizar que todas las personas que accedan a los Servicios a través de su cuenta conozcan y cumplan estos Términos.',
    "termsRevision": "NeverCap se reserva el derecho de revisar y actualizar estos Términos periódicamente a su entera discreción. Todos los cambios entran en vigor inmediatamente después de su publicación. Su uso continuado de los Servicios tras la publicación de los Términos revisados implica que acepta y está de acuerdo con los cambios. Le recomendamos que consulte esta página periódicamente para estar al tanto de cualquier cambio, ya que es vinculante.",
    "servicesTitle": "2. Servicios de NeverCap",
    "servicesDescription1": "Nuestros Servicios permiten a los usuarios transformar conversaciones de voz en texto transcrito que se puede buscar, traducir y compartir con otros.",
    "servicesOptions": 'Puede elegir si desea utilizar la versión gratuita de los Servicios ("Servicios gratuitos") o la versión paga de los Servicios basada en suscripción por la que es posible que deba pagar tarifas (los "Servicios pagos").',
    "servicesAccess": "Pondremos los Servicios a su disposición. Usted es responsable de hacer todos los arreglos necesarios para acceder a ellos.",
    "accountTermsTitle": "3. Condiciones de la cuenta",
    "accountSecurity": "Usted es responsable de mantener la seguridad de su cuenta. La Compañía no se responsabiliza de ninguna pérdida o daño derivado del incumplimiento de esta obligación de seguridad.",
    "lawfulUse": "No puede utilizar los Servicios para ningún propósito ilegal, poco ético o inmoral.",
    "contentResponsibility": "Usted es responsable de todo el contenido publicado y de la actividad que se realice en su cuenta. Esto incluye el contenido publicado por otras personas que: (a) tengan acceso a sus credenciales de inicio de sesión; o (b) tengan sus propias credenciales de inicio de sesión en su cuenta.",
    "humanRequirement": "Debe ser un humano. No se permiten cuentas registradas mediante bots ni otros métodos automatizados.",
    "paymentTitle": "4. Pagos, reembolsos y cambios de plan",
    "freeTrial": "Para los Servicios de pago que ofrecen una prueba gratuita, le explicamos la duración de la prueba al registrarse. Después del periodo de prueba, deberá pagar por adelantado para seguir usando el Servicio. Si no paga, estos servicios finalizarán.",
    "upgradePolicy": "Si está actualizando de un plan gratuito a un plan pago, cobraremos su tarjeta inmediatamente y su ciclo de facturación comenzará el día de la actualización.",
    "taxes": "Todas las tarifas no incluyen impuestos, gravámenes ni aranceles impuestos por las autoridades fiscales. Cuando sea necesario, recaudaremos dichos impuestos en nombre de la autoridad fiscal y los remitiremos a la misma. De lo contrario, usted será responsable del pago de todos los impuestos, gravámenes o aranceles.",
    "refunds": "Las compras no son reembolsables. Puede cancelar cualquier servicio de pago en cualquier momento iniciando sesión en su cuenta. En el caso de las suscripciones de pago, la cancelación se hará efectiva al finalizar el periodo de pago actual, a menos que se indique lo contrario.",
    "cancellationTitle": "5. Cancelación y terminación",
    "cancellationPolicy": "Si cancela el Servicio antes de que finalice el tiempo pagado, su cancelación se hará efectiva de inmediato y no se le cobrará de nuevo. No prorrateamos automáticamente el tiempo no utilizado en el último ciclo de facturación.",
    "terminationRights": "Nos reservamos el derecho de suspender o cancelar su cuenta y denegarle el uso actual o futuro de nuestros Servicios, por cualquier motivo y en cualquier momento. La suspensión implica que no podrá acceder a la cuenta ni a su contenido. Además, la cancelación resultará en la eliminación de su cuenta o su acceso a ella, así como en la pérdida y renuncia a todo el contenido de su cuenta. También nos reservamos el derecho de denegar el uso de los Servicios a cualquier persona, por cualquier motivo y en cualquier momento. Esta cláusula se aplica porque, estadísticamente, de los cientos de miles de cuentas en nuestros Servicios, al menos una realiza actividades ilícitas.",
    "abusePolicy": "El abuso verbal, físico, escrito o de otro tipo (incluidas las amenazas de abuso o represalias) de un empleado o funcionario de la Compañía puede resultar en la cancelación inmediata de la cuenta.",
    "submissionsTitle": "6. Envíos",
    "submissionsDescription": 'Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, opinión u otra información sobre el Sitio ("Contribuciones") que nos proporcione no es confidencial y pasará a ser de nuestra exclusiva propiedad. Tendremos los derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y la difusión sin restricciones de estas Contribuciones para cualquier fin lícito, comercial o de otro tipo, sin necesidad de reconocimiento ni compensación para usted. Por la presente, usted renuncia a todos los derechos morales sobre dichas Contribuciones y garantiza que dichas Contribuciones son originales suyas o que tiene derecho a enviarlas. Usted acepta que no habrá recurso alguno contra nosotros por ninguna infracción o apropiación indebida, presunta o real, de ningún derecho de propiedad sobre sus Contribuciones.',
    "uptimeTitle": "7. Tiempo de actividad y seguridad",
    "serviceAvailability": "El uso de los Servicios es bajo su propio riesgo. Los proporcionamos tal como están y según disponibilidad. No ofrecemos acuerdos de nivel de servicio para la mayoría de nuestros Servicios, pero nos tomamos muy en serio el tiempo de actividad de nuestras aplicaciones.",
    "throttlingPolicy": "Nos reservamos el derecho de restringir o limitar temporalmente el acceso a la cuenta en casos excepcionales en los que se verifique que la actividad de un usuario afecta negativamente la estabilidad y el rendimiento del Servicio para otros usuarios. Salvo en los casos más críticos, nos pondremos en contacto con usted para encontrar una solución antes de tomar medidas.",
    "dataSecurity": "Tomamos numerosas medidas para proteger y asegurar sus datos mediante copias de seguridad, redundancias y cifrado. Aplicamos cifrado para la transmisión de datos a través de la internet pública.",
    "thirdPartyVendors": "Utilizamos proveedores externos y socios de alojamiento para proporcionar el hardware, el software, la red, el almacenamiento y la tecnología relacionada necesarios para ejecutar los Servicios.",
    "siteManagementTitle": "8. Gestión del sitio",
    "siteManagementDescription": "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear el Sitio para detectar violaciones de estos Términos de Servicio; (2) tomar las medidas legales apropiadas contra cualquier persona que, a nuestra entera discreción, viole la ley o estos Términos de Servicio, incluyendo, sin limitación, reportar a dicho usuario a las autoridades policiales; (3) a nuestra entera discreción y sin limitación, rechazar, restringir el acceso, limitar la disponibilidad de, o deshabilitar (en la medida que sea tecnológicamente factible) cualquiera de sus Contribuciones o cualquier parte de las mismas; (4) a nuestra entera discreción y sin limitación, aviso o responsabilidad, eliminar del Sitio o deshabilitar de otra manera todos los archivos y contenido que sean excesivos en tamaño o que de alguna manera sean una carga para nuestros sistemas; y (5) administrar de otra manera el Sitio de una manera diseñada para proteger nuestros derechos y propiedad y para facilitar el correcto funcionamiento del Sitio.",
    "copyrightTitle": "9. Derechos de autor y propiedad del contenido",
    "copyrightCompliance": "Todo el contenido publicado en los Servicios debe cumplir con la ley de derechos de autor de EE. UU.",
    "ipRights": "No reclamamos derechos de propiedad intelectual sobre el material que usted proporciona a los Servicios. Todo el material subido es suyo.",
    "contentModeration": "No seleccionamos previamente el contenido, pero nos reservamos el derecho (pero no la obligación), a nuestra entera discreción, de rechazar o eliminar cualquier contenido que esté disponible a través del Servicio.",
    "trademarkProtection": "Los nombres, la apariencia y el funcionamiento de los Servicios son propiedad intelectual de la Compañía. Todos los derechos reservados. No puede duplicar, copiar ni reutilizar ninguna parte del HTML, CSS, JavaScript ni de los elementos de diseño visual sin la autorización expresa por escrito de la Compañía. Debe solicitar permiso para usar el logotipo de la Compañía o de cualquier Servicio con fines promocionales. Envíenos sus solicitudes de uso de logotipos por correo electrónico. Nos reservamos el derecho de revocar este permiso si infringe estos Términos de Servicio.",
    "prohibitedExploitation": "Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte de los Servicios, el uso de los Servicios o el acceso a los Servicios sin el permiso expreso por escrito de la Compañía.",
    "impersonationProhibition": "No debe modificar otro sitio web de manera que dé a entender falsamente que está asociado con los Servicios o la Compañía.",
    "dmcaPolicy": "Respetamos los derechos de propiedad intelectual de terceros. Si cree que algún material disponible en el Sitio o a través de él infringe algún derecho de autor que posea o controle, póngase en contacto con nosotros de inmediato. Se enviará una copia de su Notificación a la persona que publicó o almacenó el material mencionado en ella. Tenga en cuenta que, de acuerdo con la legislación aplicable, podría ser responsable de daños y perjuicios si realiza declaraciones falsas en una Notificación. Por lo tanto, si no está seguro de que el material que se encuentra en el Sitio o enlaza a él infrinja sus derechos de autor, le recomendamos consultar primero con un abogado.",
    "prohibitedActivitiesTitle": "10. Actividades prohibidas",
    "generalProhibition": "No podrá acceder ni utilizar el Sitio para ningún otro fin que no sea el previsto. El Sitio no podrá utilizarse para fines comerciales, salvo aquellos que estén específicamente respaldados o aprobados por nosotros.",
    "userObligations": "Como usuario del Sitio, usted acepta no:",
    "dataScraping": "Recuperar sistemáticamente datos u otro contenido del Sitio para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.",
    "fraud": "Engañar, defraudar o confundir a nosotros o a otros usuarios, especialmente en cualquier intento de obtener información confidencial de la cuenta, como las contraseñas de los usuarios.",
    "securityInterference": "Eludir, deshabilitar o interferir de otro modo con las características relacionadas con la seguridad del Sitio, incluidas las características que impiden o restringen el uso o la copia de cualquier Contenido o imponen limitaciones en el uso del Sitio y/o el Contenido incluido en el mismo.",
    "defamation": "Menospreciar, manchar o de cualquier otra manera dañar, en nuestra opinión, a nosotros y/o al Sitio.",
    "harassment": "Utilizar cualquier información obtenida del Sitio para acosar, abusar o dañar a otra persona.",
    "supportAbuse": "Hacer uso indebido de nuestros servicios de soporte o enviar informes falsos de abuso o mala conducta.",
    "legalCompliance": "Utilizar el Sitio de una manera incompatible con las leyes o reglamentaciones aplicables.",
    "framingProhibition": "Participar en la creación de marcos o enlaces no autorizados al Sitio.",
    "malware": "Cargar o transmitir (o intentar cargar o transmitir) virus, caballos de Troya u otro material, incluido el uso excesivo de letras mayúsculas y spam (publicación continua de texto repetitivo), que interfiera con el uso y disfrute ininterrumpido del Sitio por parte de cualquier parte o que modifique, deteriore, interrumpa, altere o interfiera con el uso, las características, las funciones, el funcionamiento o el mantenimiento del Sitio.",
    "automation": "Participar en cualquier uso automatizado del sistema, como utilizar scripts para enviar comentarios o mensajes, o utilizar minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
    "copyrightRemoval": "Eliminar el aviso de derechos de autor u otros derechos de propiedad de cualquier Contenido.",
    "impersonation": "Intentar suplantar a otro usuario o persona o utilizar el nombre de usuario de otro usuario.",
    "spyware": 'Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo pasivo o activo de recopilación o transmisión de información, incluidos, entre otros, formatos de intercambio de gráficos claros ("gifs"), píxeles 1×1, errores web, cookies u otros dispositivos similares (a veces denominados "spyware" o "mecanismos de recopilación pasiva" o "pcms").',
    "disruption": "Interferir, interrumpir o crear una carga indebida en el Sitio o las redes o servicios conectados al Sitio.",
    "employeeHarassment": "Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en brindarle cualquier parte del Sitio.",
    "accessCircumvention": "Intentar eludir cualquier medida del Sitio diseñada para impedir o restringir el acceso al Sitio o a cualquier parte del Sitio.",
    "codeCopying": "Copiar o adaptar el software del Sitio, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código.",
    "reverseEngineering": "Salvo que lo permita la ley aplicable, descifrar, descompilar, desensamblar o aplicar ingeniería inversa a ningún software que comprenda o forme parte de algún modo del Sitio.",
    "bots": "Salvo que sea el resultado del uso estándar de un motor de búsqueda o de un navegador de Internet, utilizar, lanzar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier araña, robot, utilidad de trampa, raspador o lector fuera de línea que acceda al Sitio, o utilizar o lanzar cualquier script u otro software no autorizado.",
    "buyingAgents": "Utilice un agente de compras o agente de compras para realizar compras en el Sitio.",
    "unauthorizedUse": "Realizar cualquier uso no autorizado del Sitio, incluida la recopilación de nombres de usuario y/o direcciones de correo electrónico de los usuarios por medios electrónicos o de otro tipo con el fin de enviar correo electrónico no solicitado o crear cuentas de usuario por medios automatizados o bajo falsas pretensiones.",
    "competition": "Utilizar el Sitio como parte de cualquier esfuerzo para competir con nosotros o, de otro modo, utilizar el Sitio y/o el Contenido para cualquier esfuerzo generador de ingresos o empresa comercial.",
    "advertising": "Utilice el Sitio para publicitar u ofrecer vender bienes y servicios.",
    "profileTransfer": "Vender o transferir de cualquier otra forma su perfil.",
    "featuresTitle": "11. Características y errores",
    "featuresDescription": "Diseñamos nuestros Servicios con esmero, basándonos en nuestra propia experiencia y en la de nuestros clientes, quienes comparten su tiempo y comentarios. Sin embargo, no existe un servicio que satisfaga a todos. No garantizamos que nuestros Servicios satisfagan sus necesidades o expectativas específicas.",
    "bugsDescription": "También probamos todas nuestras funciones antes de lanzarlas. Como con cualquier software, nuestros Servicios inevitablemente presentan errores. Hacemos un seguimiento de los errores que nos informan y los solucionamos, especialmente los relacionados con la seguridad o la privacidad. No todos los errores informados se solucionarán y no garantizamos que nuestros Servicios estén completamente libres de errores.",
    "correctionsTitle": "12. Correcciones",
    "informationAccuracy": "El Sitio puede contener información que contenga errores tipográficos, inexactitudes u omisiones, incluyendo descripciones, precios, disponibilidad y otra información diversa. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, así como de modificar o actualizar la información del Sitio en cualquier momento, sin previo aviso.",
    "siteAvailability": "No podemos garantizar la disponibilidad del Sitio en todo momento. Podríamos experimentar problemas de hardware, software u otros problemas, o necesitar realizar tareas de mantenimiento relacionadas con el Sitio, lo que podría provocar interrupciones, retrasos o errores. Nos reservamos el derecho a cambiar, revisar, actualizar, suspender, interrumpir o modificar el Sitio en cualquier momento y por cualquier motivo sin previo aviso. Usted acepta que no nos responsabilizamos de ninguna pérdida, daño o inconveniente causado por su imposibilidad de acceder o usar el Sitio durante cualquier periodo de inactividad o interrupción del mismo. Nada de lo dispuesto en estos Términos de Servicio se interpretará como una obligación para nosotros de mantener y dar soporte al Sitio ni de proporcionar correcciones, actualizaciones o actualizaciones relacionadas con el mismo.",
    "userDataTitle": "13. Datos del usuario",
    "userDataDescription": "Mantendremos ciertos datos que transmita al Sitio para gestionar su rendimiento, así como los datos relacionados con su uso del mismo. Si bien realizamos copias de seguridad periódicas de los datos, usted es el único responsable de todos los datos que transmita o que se relacionen con cualquier actividad que haya realizado en el Sitio. Acepta que no nos responsabilizaremos de la pérdida o corrupción de dichos datos y, por la presente, renuncia a cualquier acción contra nosotros derivada de dicha pérdida o corrupción.",
    "privacyPolicyTitle": "14. Política de privacidad",
    "privacyPolicyDescription": "Nos preocupamos por la privacidad y seguridad de sus datos. Por favor, revise nuestra Política de Privacidad. Al usar el Sitio, usted acepta nuestra Política de Privacidad, la cual se incorpora a estos Términos de Servicio. Tenga en cuenta que el Sitio está alojado en Estados Unidos. Si accede al Sitio desde cualquier otra región del mundo con leyes u otros requisitos que rijan la recopilación, el uso o la divulgación de datos personales que difieran de las leyes aplicables en Estados Unidos, al continuar usando el Sitio, usted estará transfiriendo sus datos a Estados Unidos y acepta que sus datos se transfieran y procesen allí.",
    "liabilityTitle": "15. Responsabilidad",
    "liabilityIntroduction": "Mencionamos la responsabilidad a lo largo de estos Términos, pero para ponerlo todo en una sección:",
    "liabilityWaiver": "Usted entiende y acepta expresamente que la Compañía no será responsable, en derecho o en equidad, ante usted o cualquier tercero por ningún daño directo, indirecto, incidental, lucro cesante, especial, consecuente, punitivo o ejemplar, incluyendo, pero no limitado a, daños por pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles (incluso si la Compañía ha sido informada de la posibilidad de tales daños), resultantes de: (1) el uso o la imposibilidad de usar los Servicios; (2) errores, equivocaciones o inexactitudes de contenido y materiales; (3) lesiones personales o daños a la propiedad, de cualquier naturaleza, resultantes de su acceso y uso del sitio; (4) el costo de adquisición de bienes y servicios sustitutos resultantes de cualquier bien, dato, información o servicio comprado u obtenido o mensajes recibidos o transacciones realizadas a través o desde los Servicios; (5) cualquier acceso no autorizado o uso de nuestros servidores seguros y/o cualquier información personal y/o información financiera almacenada en los mismos; (6) cualquier interrupción o cese de la transmisión hacia o desde el sitio; (7) cualquier error, virus, troyano o similares que puedan transmitirse hacia o a través del sitio por un tercero, y/o; (8) cualquier error u omisión en cualquier contenido y material o por cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso de cualquier contenido publicado, transmitido o puesto a disposición de otra manera a través del sitio; (9) declaraciones o conducta de cualquier tercero en el servicio; (10) o cualquier otro asunto relacionado con estos Términos de Servicio o los Servicios, ya sea como incumplimiento de contrato, agravio (incluida la negligencia, ya sea activa o pasiva), o cualquier otra teoría de responsabilidad.",
    "miscellaneousTitle": "16. Varios",
    "miscellaneousDescription": "Estos Términos de Servicio y cualquier política o norma operativa publicada por nosotros en el Sitio o con respecto al Sitio constituyen el acuerdo y entendimiento completo entre usted y nosotros. Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos de Servicio no constituirá una renuncia a dicho derecho o disposición. Estos Términos de Servicio operan en la máxima medida permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a terceros en cualquier momento. No seremos responsables de ninguna pérdida, daño, demora u omisión causada por cualquier causa fuera de nuestro control razonable. Si alguna disposición o parte de una disposición de estos Términos de Servicio se determina ilegal, nula o inaplicable, dicha disposición o parte de la disposición se considerará separable de estos Términos de Servicio y no afectará la validez y aplicabilidad de las disposiciones restantes. No se crea ninguna relación de empresa conjunta, sociedad, empleo o agencia entre usted y nosotros como resultado de estos Términos de Servicio o del uso del Sitio. Usted acepta que estos Términos de Servicio no se interpretarán en nuestra contra por el hecho de haberlos redactado. Por la presente, usted renuncia a todas y cada una de las defensas que pueda tener basadas en la forma electrónica de estos Términos de Servicio y la falta de firma de las partes para ejecutar estos Términos de Servicio.",
    "contactTitle": "17. Contáctenos",
    "contactDescription": "Si tiene alguna pregunta sobre cualquiera de los Términos de Servicio, comuníquese con nosotros.",
    "neverCap": "NeverCap",
    "site": "Sitio",
    "services": "Servicios"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
