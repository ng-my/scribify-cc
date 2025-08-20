//葡萄牙语
let message = {
  // 首页
  HomePage: {
    home: "Todas as Transcrições",
    times: "{times} transcrições gratuitas por dia, {left} restantes hoje. ",
    tips: "Atualize para Pro para transcrições ilimitadas.",
    update: "Atualizar agora",
    rename: "Renomear",
    delete: "Eliminar",
    cancel: "Cancelar",
    confirm: "Criar",
    dialogLabel: "Nome da pasta",
    recently: "Arquivos recentes",
    loading: "Carregando",
    tour: {
      step0: {
        title: "Bem-vindo ao {name}",
        tip: "Aqui, você pode:",
        content:
          "Transcrever conversas pontuais, reuniões, palestras e muito mais",
        next: "Começar"
      },
      step1: {
        title: "Transcrever arquivos",
        content:
          "Suporta três métodos de transcrição: arquivos locais, links e gravações."
      },
      step2: {
        title: "Criar uma pasta",
        content: 'Clique no "+" para criar uma pasta e organizar seus arquivos.'
      },
      step3: {
        title: "Ver detalhes da transcrição e editar",
        content:
          "Clique no item para ver os detalhes da transcrição e editar, bem como traduzi-la."
      },
      next: "próximo",
      finish: "Entendi"
    },
    export: {
      export: "Exportar",
      title: "Estamos a gerar a sua exportação",
      title2: "O seu arquivo está pronto",
      singleLoadingContent: "1 arquivo está sendo comprimido.",
      singleSuccessContent: "1 arquivo foi comprimido.",
      loadingContent: "{num} arquivos estão sendo comprimidos.",
      successContent: "{num} arquivos foram comprimidos.",
      cancel: "Cancelar a exportação",
      error: "Erro de exportação",
      dialog: {
        title: "Aviso",
        content: "Cancelar a exportação?",
        cancel: "Cancelar exportação",
        continue: "Continuar exportação"
      }
    },
    welcome: {
      title: "Bem-vindo ao Scribify!",
      description: "Aqui, pode:",
      transcribe:
        "Transcreva sem esforço com Scribify—transforme conversas de voz em texto claro, pesquisável e partilhável num instante.",
      precision:
        "Obtenha transcrições precisas com identificação de oradores e marcas temporais instantaneamente.",
      translate:
        "Quebre barreiras linguísticas: traduza transcrições para mais de 200 idiomas com facilidade.",
      edit: "Edite, refine e exporte as suas transcrições em formatos que se adequem às suas necessidades.",
      collaborate: "Colabore partilhando o seu texto transcrito com outros.",
      button: "Começar",
      tip: "Pronto para transformar áudio em texto transcrito? Comece a explorar agora!",
      tip2: "Comece a explorar agora!",
      tip1: "Pronto para transformar áudio em texto transcrito? "
    },
    subscriptionModal: {
      left: {
        title: "Obtenha o Plano Pro para desbloquear mais",
        c1: "Transcrições ilimitadas",
        c2: "Carregamentos de 10 horas",
        c3: "Prioridade máxima",
        c4: "99% de precisão na transcrição",
        c5: "Mais de 100 idiomas suportados",
        c6: "Identificação de oradores",
        c7: "Tradução de transcrição",
        t1: "Transcrições ilimitadas para uma pessoa.",
        t2: "Cada ficheiro pode ter até 10 horas / 5 GB. Carregue 50 ficheiros de uma vez.",
        t3: "Transcrevemos sempre os seus ficheiros o mais rapidamente possível com a prioridade máxima."
      },
      right: {
        title: "Obter Plano Pro",
        yearly: "Anual",
        monthly: "Mensal",
        save: "Poupança",
        preMonth: "por mês",
        preYear: "por ano",
        firstMonth: "primeiro mês",
        afterwards: "depois"
      },
      subscribe: "Subscrever"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "Falhou",
      selected: "Selecionado",
      success: "Sucesso",
      fileList: "Lista de Ficheiros"
    },
    dialog: {
      move: {
        title: "Mover",
        label: "Escolher uma pasta",
        placeholder: "Escolher uma pasta",
        confirm: "Mover",
        cancel: "Cancelar"
      },
      rename: {
        title: "Renomear",
        label: "Nome do arquivo",
        confirm: "Renomear",
        cancel: "Cancelar"
      },
      delete: {
        title: "Eliminar",
        file: "arquivo",
        files: "arquivos",
        label: "Confirmar eliminação? Esta ação não pode ser desfeita.",
        confirm: "Eliminar",
        cancel: "Cancelar"
      },
      share: {
        title: "Partilhar",
        label:
          "Qualquer pessoa com o seguinte link seguro pode ver esta transcrição e o arquivo de mídia associado.",
        confirm: "Copiar link",
        success: "Cópia bem-sucedida"
      },
      export: {
        title: "Exportar",
        select: "Selecione o formato que precisa",
        settings: "Configurações",
        speaker: "Incluir orador",
        timecodes: "Incluir códigos de tempo",
        confirm: "Exportar",
        cancel: "Cancelar",
        selectErr: "Por favor, selecione um ou mais formatos"
      }
    },
    search: {
      placeholder: "Pesquisar"
    },
    recently: "Recentes",
    record: "Gravar",
    transcribe: "Transcrever",
    unclassified: "Pastas não classificadas",
    buttons: {
      transcribe: "Transcrever arquivos",
      url: "Transcrever links",
      record: "Gravar e transcrever",
      recording: "Gravando..."
    },
    delSuccess: "Eliminado com sucesso",
    create: "Criar",
    endRecord: {
      title: "Aviso",
      content:
        "Está a gravar. Esta ação terminará a gravação. Quer terminar a gravação?",
      confirm: "Continuar Gravação",
      cancel: "Terminar Gravação"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Gravar",
      pause: "Pausar",
      resume: "Retomar",
      stop: "Parar",
      endRecord: "Terminar gravação",
      delete: "Eliminar",
      transcribe: "Transcrever",
      permissionDenied:
        "Permissão de microfone negada ou dispositivo não existe",
      dialog: {
        delete: {
          title: "Aviso",
          label: "Tem certeza de que deseja eliminar esta gravação?",
          confirm: "Eliminar",
          cancel: "Cancelar"
        },
        complete: {
          title: "Gravação concluída",
          label:
            "A gravação atingiu 10 horas e parou automaticamente. Por favor, transcreva.",
          confirm: "Entendi"
        },
        speaker: {
          content:
            "Para identificação de locutores, os arquivos estão limitados a 3 horas. Por favor, desmarque '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcrever uma mídia online",
        title: "Colar links",
        label:
          "Cole seu link de vídeo ou áudio do: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram e outras plataformas...",
        confirm: "Adicionar",
        cancel: "Cancelar",
        // 请输入正确的链接
        errorTitle:
          "O endereço do link que inseriu está incorreto. Por favor, verifique e tente novamente.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transcrever uma mídia online",
        dialogTitle: "Transcrever arquivos",
        tip1: "Arraste arquivos aqui ou clique para procurar",
        tip2: "Clique para procurar",
        or: "ou",
        supported: "Formatos suportados"
      },
      del: {
        title: "Aviso",
        content:
          "Todo o progresso será perdido. Confirmar o cancelamento da transcrição?",
        cancel: "Confirmar cancelamento",
        confirm: "Continuar a transcrever"
      },
      files: "Arquivos",
      resultDialogTitle: "Transcrever arquivos",
      resultDialogTitle2: "Transcrever ficheiro",
      cancel: "Cancelar",
      confirm: "Transcrever",
      return: "Voltar",
      addMore: "Adicionar mais",
      language: "Idioma do media",
      failed: "Falhou",
      tooLarge: "O ficheiro excede o limite (5G).",
      linkUpload: "A carregar",
      fileFormat: "O formato do arquivo não é permitido",
      localFiles: "Arquivos locais",
      pasteLink: "Link online",
      uploadErr: "Erro de carregamento",
      hashErr: "Erro de hash",
      table: {
        status: "Estado",
        file: "Arquivo",
        size: "Tamanho",
        noData: "Sem dados"
      },
      maxFileNum: "O número de arquivos não pode exceder {num}.",
      speaker: "Identificar Locutores",
      speakerLabel:
        "Detectar automaticamente quem está falando",
      guest: {
        transcribe: "Transcrever",
        file: "Arquivo",
        audio: "Arquivo de áudio/vídeo",
        Uploading: "Enviando..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "Recentes",
      popular: "Populares",
      other: "Outros",
      searchLanguage: "Pesquisar idioma",
      noMatch: "Nenhum idioma correspondente encontrado",
      English: "Inglês",
      "English(US)": "Inglês (EUA)",
      "English(UK)": "Inglês (Reino Unido)",
      Spanish: "Espanhol",
      Portuguese: "Português",
      French: "Francês",
      Italian: "Italiano",
      German: "Alemão",
      Dutch: "Holandês",
      Polish: "Polonês",
      Danish: "Dinamarquês",
      Japanese: "Japonês",
      Korean: "Coreano",
      Hungarian: "Húngaro",
      Czech: "Tcheco",
      Chinese: "Chinês",
      Hebrew: "Hebraico",
      Arabic: "Árabe",
      Azerbaijani: "Azerbaijano",
      Estonian: "Estoniano",
      Belarusian: "Bielorrusso",
      Bulgarian: "Búlgaro",
      Icelandic: "Islandês",
      Bosnian: "Bósnio",
      Persian: "Persa",
      Russian: "Russo",
      "Chinese(Traditional)": "Chinês (Tradicional)",
      Finnish: "Finlandês",
      Kazakh: "Cazaque",
      Galician: "Galego",
      Catalan: "Catalão",
      "Chinese(Simplified)": "Chinês (Simplificado)",
      Kannada: "Canarês",
      Croatian: "Croata",
      Latvian: "Letão",
      Lithuanian: "Lituano",
      Romanian: "Romeno",
      Marathi: "Marata",
      Malay: "Malaio",
      Macedonian: "Macedônio",
      Maori: "Maori",
      Afrikaans: "Africâner",
      Nepali: "Nepalês",
      Norwegian: "Norueguês",
      Swedish: "Sueco",
      Serbian: "Sérvio",
      Slovak: "Eslovaco",
      Slovenian: "Esloveno",
      Swahili: "Suaíli",
      Tagalog: "Tagalo",
      Tamil: "Tâmil",
      Thai: "Tailandês",
      Turkish: "Turco",
      Welsh: "Galês",
      Urdu: "Urdu",
      Ukrainian: "Ucraniano",
      Greek: "Grego",
      Armenian: "Armênio",
      Hindi: "Hindi",
      Indonesian: "Indonésio",
      Vietnamese: "Vietnamita",
      Albanian: "Albanês",
      Amharic: "Amárico",
      Assamese: "Assamês",
      Occitan: "Occitano",
      Bashkir: "Bashkir",
      Basque: "Basco",
      Breton: "Breton",
      Tibetan: "Tibetano",
      Faroese: "Faroês",
      Sanskrit: "Sânscrito",
      Khmer: "Khmer",
      Georgian: "Grego",
      Gujarati: "Gujarati",
      "Haitian Creole": "Crioulo Haitiano",
      Hausa: "Hausa",
      Latin: "Latim",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburguês",
      Malagasy: "Malagasy",
      Maltese: "Maltês",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengali",
      Burmese: "Birmanês",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Cingalês",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tajique",
      Tatar: "Tatar",
      Telugu: "Telugu",
      Turkmen: "Turcomano",
      Uzbek: "Uzbeko",
      Hawaiian: "Havaiano",
      "Norwegian Nynorsk": "Norueguês Nynorsk",
      Sindhi: "Sindi",
      Sundanese: "Sundanês",
      Yiddish: "Iídiche",
      Yoruba: "Iorubá",
      Javanese: "Iauajava",
      Cantonese: "Cantonês",
      Abkhaz: "Abkhaze",
      Afar: "Afar",
      alz: "Aluz",
      ach: "Acholi",
      awa: "Ava",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlandês",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossétio",
      tpi: "Pidgin de Papua",
      bew: "Badaw",
      ban: "Bali",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Bawur",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Sotho do Norte",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Chamorro",
      Chamorro: "Chamorro",
      Chechen: "Checheno",
      chk: "Chukcheo",
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
      "ndc-ZW": "Ndebele do Sul",
      "South Ndebele": "Ndebele do Sul",
      dov: "Dong",
      "bm-Nkoo": "N'Ko (alfabeto escrito)",
      "French(Canada)": "Francês (Canadá)",
      Fijian: "Fijiano",
      fon: "Fon",
      "Western Frisian": "Frísio Ocidental",
      fur: "Friulano",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Groenlandês",
      gom: "Gom",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirguiz",
      ktu: "Ktu",
      gaa: "Gbe",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corsicano",
      "crh-Latn": "Crimeu (Latim)",
      crh: "Crimeu (Cirílico)",
      Quechua: "Quechua",
      Kurdish: "Curdo (Kurmanji)",
      ckb: "Curdo (Soranî)",
      trp: "Trepang",
      ltg: "Latgalian",
      lij: "Liguriano",
      Limburgish: "Limburguês",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Românico",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaio (Jawi)",
      Marshallese: "Marshallês",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Maori (Crioulo)",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Lus",
      hmn: "Hmong",
      nhe: "Navajo (Navaho)",
      "Southern Sotho": "Sotho do Sul",
      new: "Nepalês (Navajo)",
      nus: "Nus",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shamkhî)",
      "pt-PT": "Português (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Lua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Sami (Norte)",
      Samoan: "Samoano",
      kri: "Crioulo de Serra Leoa",
      crs: "Crioulo de Seicheles",
      Sango: "Sango",
      "sat-Latn": "Santali (Latim)",
      sat: "Santali (Ogham)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaélico Escocês",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latim)",
      Tahitian: "Tahitiano",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassar",
      vec: "Vêneto",
      Uyghur: "Uigur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesiano",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Jamaican Creole",
      sah: "Iacuto",
      ace: "Acehês",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Iloko",
      "iu-Latn": "Inuktitut (Latim)",
      Inuktitut: "Inuktitut (Syllabary)",
      yua: "Yucateco Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "ou", // 或
    LoginBtn: "Entrar com Email",
    LoginGoogle: "Entrar com Google",
    SignupBtn: "Registar com Email",
    SignupGoogle: "Registar com Google",
    SignupDes: "Registe-se hoje e veja a magia — grátis.",
    SignupTitle: "Transcrição precisa e ilimitada",
    signup: "Registar", // 注册
    sign_up: "Registar", // 注册
    loginByGoogle: "Continuar com Google", // 使用Google登录
    emailAddress: "Por favor, insira o seu endereço de e-mail", // 请输入您的邮箱
    createAccount: "Criar uma nova conta", // 创建账户
    accountExists: "Já tem uma conta? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Ao prosseguir, você concorda com nossos {terms} e {policy}.",
      terms: "Termos",
      policy: "Política de Privacidade"
    },
    setPassword: "Definir uma palavra-passe", // 设置密码
    code: "Código de verificação", // 验证码
    resend: "Reenviar", // 重新发送
    enterPassword: "Palavra-passe: Mínimo de 6 caracteres.", // 请输入密码
    passwordLeval: "Nível de palavra-passe", // 密码强度
    Weak: "Fraca", // 弱 中 强
    Medium: "Média", // 弱 中 强
    Strong: "Forte", // 弱 中 强
    confirmPassword: "Confirme a sua palavra-passe", // 确认密码
    invalidEmail: "Endereço de e-mail inválido", // 无效的邮箱地址
    logInDirectly:
      "Esta conta já existe. Por favor, inicie sessão diretamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Erro no código de verificação. Tente novamente.", // 验证码错误，请重试
    atLeastSix: "A palavra-passe deve ter pelo menos 6 caracteres.", // 密码长度至少6位
    passwordNotMatch:
      "As palavras-passe não coincidem. Por favor, tente novamente.", // 密码不匹配，请重试
    login: "Iniciar sessão", // 登录
    log_in: "Iniciar sessão", // 登录
    log_In: "Iniciar Sessão", // 登录
    password: "Palavra-passe", // 密码
    forgotPassword: "Esqueceu a sua palavra-passe?", // 忘记密码？
    noAccount: "Não tem uma conta?", // 没有账户？注册
    accountNotExists: "Esta conta não existe.", // 账户不存在
    passwordError: "Erro na palavra-passe", // 密码错误
    sendCode: "Enviar código de verificação", // 发送验证码
    resetPassword: "Repor palavra-passe", // 重置密码
    resetYourPassword: "Redefina a sua palavra-passe", // 重置你的密码
    newOldCantSame: "A nova palavra-passe deve ser diferente da antiga.", // 新密码与旧密码不能相同
    passwordResetOk: "Palavra-passe redefinida com sucesso!", // 密码重置成功！
    signupToSaveProgress: "Complete o registo para guardar o seu progresso.",
    tip: "Dica",
    tipContentEmail:
      "Acabámos de enviar a senha de acesso da sua conta para o seu e-mail.",
    tipContentPassword:
      "Por favor verifique a sua caixa de entrada e faça login com o seu e-mail e senha.",
    codeToEmail:
      "Acabámos de enviar um código de verificação para o seu e-mail. Por favor verifique a sua caixa de entrada e cole o código de verificação acima."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Plano de subscrição",
    freeversion: "Grátis",
    transcribeTimesDay: "3 Transcrições Diárias",
    uploadMinutes: "Carregamentos de 30 minutos",
    lowerPriority: "Prioridade mais baixa",
    currentPlan: "Plano atual",
    professionalEdition: "edição profissional",
    unlimitedTranscription: "Transcrição ilimitada",
    unlimitedNumberOfTimes: "Frequência e duração de transcrição ilimitadas.",
    filesUploadedAtOnce:
      "Cada ficheiro pode ter até 10 horas/5 GB. Carregue 50 ficheiros de cada vez.",
    highestPriority: "prioridade máxima",
    weWillGiveTheHighest:
      "Transcreveremos sempre os seus ficheiros o mais rápido possível com a máxima prioridade.",
    theFirstMonth: "O primeiro mês",
    subscribeTo: "subscrever",
    basicVersionFree: "Versão básica (grátis)",
    return: "Voltar",
    annualize: "anual",
    monthly: "mensal",
    everyYear: "todos os anos",
    saved: "poupado",
    byTheMonth: "por mês",
    firstMonth: "primeiro mês",
    afterwardsEveryMonth: "Posteriormente, todos os meses",
    manageSubscription: "Gerir Subscrição",
    professionalYearbook: "Anual Profissional",
    professionalMonthly: "Mensal Profissional",
    subscriptionWillCancelledOn: "Sua assinatura será cancelada em",
    displayLanguage: "Idioma de exibição",
    update: "Atualizar Agora",
    basicversion: "Versão Básica (Grátis)",
    daily: "{start} de {end} transcrições diárias utilizadas",
    upgradetoPro: "Atualizar para Pro",
    accountSetting: "Definições da Conta",
    logOut: "Sair",
    account: "Conta",
    email: "E-mail",
    id: "ID",
    password: "Palavra-passe",
    resetPassword: "Repor palavra-passe",
    logIn: "Entrar",
    tryForFree: "Experimente grátis",
    notFund: "Não encontrado",
    couldntFind: "Não conseguimos encontrar o que procura.",
    proAnnual: "Pro Anual",
    proMonthly: "Pro Mensal",
    perMonth: "por mês",
    afterwards: "posteriormente",
    accuracy: "precisão da transcrição",
    supported: "idiomas suportados",
    identification: "Identificação do orador",
    transcriptSranslation: "Tradução da transcrição",
    perYear: "por ano",
    getProPlan: "Obter Plano Pro",
    changeToAnnual: "Mudar para Anual",
    automaticRenewalon: "Renovação automática a",
    eachMonth: "Renovação automática no dia {time} de cada mês.",
    automaticRenewal:
      "Renovação automática falhou, por favor verifique o método de pagamento.",
    eachYear: "Renovação automática no dia {time} de cada ano.",
    returnAccountSetting: "Voltar",
    needsToWaitLonger:
      "Aguarde mais tempo antes que os seus ficheiros sejam transcritos.",
    freeThreeTimesDay: "Transcreva 3 ficheiros gratuitamente todos os dias.",
    oneFileUploaded:
      "Cada ficheiro pode ter até 30 minutos de duração. Carregue 1 ficheiro de cada vez.",
    uploadWithinHours: "Carregamentos de 10 horas",
    yourSubscription: "A sua subscrição será cancelada em {time}.",
    save: "Economizar",
      freeversion2: "Plano Gratuito"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinês (Simplificado)",
      "Chinese(Traditional)": "Chinês (Tradicional)",
      Japanese: "Japonês",
      Danish: "Dinamarquês",
      German: "Alemão",
      English: "Inglês",
      Spanish: "Espanhol",
      French: "Francês",
      Italian: "Italiano",
      Hungarian: "Húngaro",
      Dutch: "Holandês",
      Norwegian: "Norueguês",
      Polish: "Polonês",
      Portuguese: "Português",
      Finnish: "Finlandês",
      Swedish: "Sueco",
      Turkish: "Turco",
      Greek: "Grego",
      Russian: "Russo",
      Ukrainian: "Ucraniano",
      Hebrew: "Hebraico",
      Arabic: "Árabe",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Modelo SaaS Nuxt3 de código aberto, pré-integrado com gateways de pagamento globais (Stripe/Cream), Google OAuth, rotas i18n e ferramentas de otimização SEO. Projetado para desenvolvedores que lançam aplicações web multilíngues, oferece suporte SSR/SSG e segurança de nível de produção logo de início.",
    startLink: "Iniciar teste gratuito~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Junte-se à lista de espera, receba as últimas notícias do NuxtPro em primeira mão E descontos!",
      placeholder: "Insira o seu e-mail",
      button: "Juntar-se à lista de espera",
      joinCountMessage:
        "🔥 Utilizador inicial #{count} acabou de se juntar à lista de espera!"
    },
    seo: {
      title: "Modelo SaaS Nuxt de código aberto | NuxtPro",
      description:
        "O modelo NuxtJS com tudo o que precisa para colocar o seu produto à frente dos clientes. Da ideia à produção em 5 minutos."
    },
    api: {
      title: "isto é uma demonstração",
      corpInfo: "informações corporativas"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "erro de download de vídeo"
      },
      mse: {
        code: 2,
        msg: "erro de anexo de stream"
      },
      parse: {
        code: 3,
        msg: "erro de análise"
      },
      format: {
        code: 4,
        msg: "formato incorreto"
      },
      decoder: {
        code: 5,
        msg: "erro de descodificação"
      },
      runtime: {
        code: 6,
        msg: "erros gramaticais"
      },
      timeout: {
        code: 7,
        msg: "tempo limite de reprodução"
      },
      other: {
        code: 8,
        msg: "outros erros"
      }
    },
    HAVE_NOTHING: "Não há informações sobre se o áudio/vídeo está pronto",
    HAVE_METADATA: "Os metadados de áudio/vídeo estão prontos ",
    HAVE_CURRENT_DATA:
      "Os dados sobre a localização atual de reprodução estão disponíveis, mas não há dados suficientes para reproduzir o próximo frame/milissegundo",
    HAVE_FUTURE_DATA:
      "Os dados atuais e pelo menos um frame de dados estão disponíveis",
    HAVE_ENOUGH_DATA:
      "Os dados disponíveis são suficientes para iniciar a reprodução",
    NETWORK_EMPTY: "O áudio/vídeo não foi inicializado",
    NETWORK_IDLE:
      "O áudio/vídeo está ativo e foi selecionado para recursos, mas nenhuma rede é utilizada",
    NETWORK_LOADING: "O navegador está a descarregar os dados",
    NETWORK_NO_SOURCE: "Nenhuma fonte de áudio/vídeo foi encontrada",
    MEDIA_ERR_ABORTED: "O processo de busca foi interrompido pelo utilizador",
    MEDIA_ERR_NETWORK: "Ocorreu um erro durante o download",
    MEDIA_ERR_DECODE: "Ocorreu um erro durante a descodificação",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Áudio/vídeo não é suportado",
    REPLAY: "Reproduzir novamente",
    ERROR: "A rede está offline",
    PLAY_TIPS: "Reproduzir",
    PAUSE_TIPS: "Pausar",
    PLAYNEXT_TIPS: "Reproduzir próximo",
    DOWNLOAD_TIPS: "Descarregar",
    ROTATE_TIPS: "Rodar",
    RELOAD_TIPS: "Recarregar",
    FULLSCREEN_TIPS: "Entrar em ecrã inteiro",
    EXITFULLSCREEN_TIPS: "Sair do ecrã inteiro",
    CSSFULLSCREEN_TIPS: "Ecrã inteiro CSS",
    EXITCSSFULLSCREEN_TIPS: "Sair do ecrã inteiro CSS",
    TEXTTRACK: "Legenda",
    PIP: "PIP",
    SCREENSHOT: "Captura de ecrã",
    LIVE: "AO VIVO",
    OFF: "Desligado",
    OPEN: "Abrir",
    MINI_DRAG: "Clique e mantenha pressionado para arrastar",
    MINISCREEN: "Mini-ecrã",
    REFRESH_TIPS: "Por favor, tente",
    REFRESH: "Atualizar",
    FORWARD: "avançar",
    LIVE_TIP: "Ao vivo",
    TM_SUBTITLE_SHOW_TIPS: "Ativar legendas",
    TM_SUBTITLE_HIDE_TIPS: "Desativar legendas",
    TM_MINIMIZE_TIPS: "Ocultar o vídeo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "política de Privacidade",
    lastUpdated: "Última atualização: 25 de agosto de 2025",
    policyDescription:
      'Esta Política descreve como o Scribify (doravante denominado "Scribify", "nosso", "nós") coleta, usa e divulga suas informações pessoais quando você usa nossos serviços, sites',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      ', e software (coletivamente, os "Serviços").',
    policyAgreement:
      "Leia esta Política de Privacidade com atenção e certifique-se de que a compreende. Ao utilizar qualquer um dos nossos Serviços, você concorda com esta Política de Privacidade. Caso não concorde com o uso dos seus dados pessoais em conformidade com esta Política, você deverá interromper imediatamente o uso dos nossos Serviços.",
    policyOverview:
      "Nesta política, descrevemos: quais dados coletamos e por quê; como seus dados são tratados; e seus direitos em relação aos seus dados. Não vendemos seus dados.",
    scopeTitle: "1. Âmbito desta Política de Privacidade",
    whatWeCollectTitle: "2. O que coletamos e por quê",
    accessShareTitle: "3. Quando acessamos ou compartilhamos suas informações",
    secureDataTitle: "4. Como protegemos seus dados",
    deleteContentTitle: "5. O que acontece quando você exclui seu conteúdo",
    locationTitle: "6. Localização do site e dos dados",
    childrenPrivacyTitle: "7. Privacidade das crianças",
    updatesTitle: "8. Atualizações desta Política de Privacidade",
    contactUsTitle: "9. Contate-nos",
    identityAccessTitle: "2.1 Identidade e acesso",
    billingInfoTitle: "2.2 Informações de cobrança",
    productInteractionsTitle: "2.3 Interações do produto",
    websiteInteractionsTitle: "2.4 Interações no site",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Correspondência voluntária",
    scopeContent:
      "Esta Política de Privacidade aplica-se apenas à nossa coleta e processamento de informações sobre os usuários dos Serviços. Esta Política de Privacidade não se aplica a quaisquer serviços, sites ou softwares operados por terceiros que estejam vinculados a nós (sejam esses links fornecidos por nós ou compartilhados por outros usuários), nem se aplica a conteúdo, dados, aplicativos ou materiais de terceiros. Recomendamos que você verifique as políticas de privacidade de qualquer site ou software de terceiros antes de fornecer qualquer informação a eles.",
    collectPrinciple:
      "Nosso princípio norteador é coletar apenas o que precisamos. Veja o que isso significa na prática:",
    identityAccessContent:
      "Ao se cadastrar em um de nossos produtos, solicitamos informações de identificação, como seu nome e endereço de e-mail. Isso visa fornecer funcionalidades essenciais do produto e permitir o envio de atualizações e outras informações essenciais.",
    billingInfoContent:
      "Ao se inscrever em um produto pago, você será solicitado a fornecer suas informações de pagamento e endereço de cobrança. As informações de pagamento são enviadas diretamente ao nosso processador de pagamentos e não chegam aos nossos servidores.",
    productInteractionsContent:
      "Armazenamos em nossos servidores o conteúdo que você carrega, recebe ou mantém em suas contas de produtos. A menos que você exclua esse conteúdo, podemos mantê-lo enquanto sua conta estiver ativa.",
    websiteInteractionsContent:
      "Coletamos informações sobre sua atividade de navegação para fins analíticos e estatísticos, como testes de taxa de conversão e experimentação com novos designs de produtos. Isso inclui, por exemplo, as versões do seu navegador e sistema operacional, seu endereço IP, quais páginas da web você visitou e quanto tempo elas levaram para carregar, e qual site o encaminhou para nós. Se você tiver uma conta e estiver conectado, esses dados de análise da web serão vinculados ao seu endereço IP e à sua conta de usuário até que sua conta não esteja mais ativa.",
    cookiesContent1:
      "Também usamos cookies primários persistentes e alguns cookies de terceiros para armazenar determinadas preferências, facilitar o uso de nossos aplicativos e realizar testes A/B, além de dar suporte a algumas análises.",
    cookiesContent2:
      "Um cookie é um pedaço de texto armazenado pelo seu navegador. Ele pode ajudar a lembrar informações de login e preferências do site. Também pode coletar informações como o tipo de navegador, sistema operacional, páginas visitadas, duração da visita, conteúdo visualizado e outros dados de fluxo de cliques. Você pode ajustar as configurações de retenção de cookies e aceitar ou bloquear cookies individuais nas configurações do seu navegador, embora nossos aplicativos não funcionem e outros aspectos do nosso serviço possam não funcionar corretamente se você desativar os cookies.",
    voluntaryCorrespondenceContent:
      "Quando você nos envia um e-mail com uma dúvida ou para pedir ajuda, guardamos essa correspondência, incluindo seu endereço de e-mail, para que tenhamos um histórico de correspondências anteriores para referência caso você entre em contato conosco no futuro.",
    accessShareContent1:
      "Para fornecer produtos ou serviços que você solicitou. Utilizamos alguns subprocessadores terceirizados para ajudar a executar nossos aplicativos e fornecer os Serviços a você. Isso inclui provedores de nuvem e análise.",
    accessShareContent2:
      "Para investigar, prevenir ou tomar medidas em relação a abusos. Acessar a conta de um cliente durante a investigação de possíveis abusos é uma medida de último recurso. Queremos proteger a privacidade e a segurança tanto de nossos clientes quanto das pessoas que nos relatam problemas, e fazemos o possível para equilibrar essas responsabilidades ao longo do processo. Se descobrirmos que você está usando nossos produtos para uma finalidade restrita, tomaremos as medidas necessárias, incluindo notificar as autoridades competentes, quando necessário.",
    accessShareContent3: "Quando exigido pela legislação aplicável.",
    userDataRequests:
      "- Solicitações de dados do usuário. Nossa política é não responder a solicitações governamentais de dados do usuário, a menos que sejamos obrigados por processo legal ou, em circunstâncias limitadas, em caso de solicitação emergencial. No entanto, se as autoridades policiais dos EUA tiverem o mandado, intimação criminal ou ordem judicial necessária exigindo que compartilhemos dados, devemos obedecer. Da mesma forma, somente responderemos a solicitações de autoridades governamentais fora dos EUA se obrigados pelo governo dos EUA por meio de procedimentos descritos em um tratado ou acordo de assistência jurídica mútua. Nossa política é notificar os usuários afetados antes de compartilharmos dados, a menos que sejamos legalmente proibidos de fazê-lo e exceto em alguns casos de emergência.",
    preservationRequests:
      "- Solicitações de preservação. Da mesma forma, nossa política é atender a solicitações de preservação de dados somente se exigido pela Lei Federal de Comunicações Armazenadas dos EUA, 18 USC Seção 2703(f), ou por uma intimação americana devidamente notificada para questões civis. Não compartilhamos dados preservados, a menos que seja exigido por lei ou obrigado por uma ordem judicial da qual optamos por não recorrer. Além disso, a menos que recebamos um mandado, ordem judicial ou intimação adequados antes do término do período de preservação exigido, destruiremos quaisquer cópias preservadas dos dados do cliente ao final do período de preservação.",
    taxAudit:
      "- Caso sejamos auditados por uma autoridade fiscal, poderemos ser obrigados a compartilhar informações relacionadas à cobrança. Nesse caso, compartilharemos apenas o mínimo necessário, como endereços de cobrança e informações sobre isenção fiscal.",
    secureDataContent1: "Todos os dados são criptografados via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "quando transmitidos de nossos servidores para seu navegador.",
    deleteContentContent:
      "Se você excluir qualquer conteúdo, ele ficará imediatamente inacessível.",
    locationContent:
      "Nossos produtos e outras propriedades da web são operados nos Estados Unidos. Se você estiver localizado na União Europeia, no Reino Unido ou em qualquer outro lugar fora dos Estados Unidos, esteja ciente de que quaisquer informações que você nos fornecer serão transferidas e armazenadas nos Estados Unidos. Ao utilizar nossos sites ou Serviços e/ou nos fornecer suas informações pessoais, você concorda com essa transferência.",
    childrenPrivacyContent:
      "Os Serviços não são destinados a crianças e não coletamos intencionalmente Informações Pessoais de crianças menores de 13 anos. Se você tiver menos de 13 anos, não envie nenhuma informação pessoal por meio dos Serviços. Se você acredita que uma criança nos forneceu Informações Pessoais em violação a esta Política, entre em contato conosco conforme indicado abaixo.",
    updatesContent:
      "Podemos atualizar esta política conforme necessário para cumprir com as regulamentações relevantes e refletir quaisquer novas práticas. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página.",
    contactUsContent1:
      "Se você tiver alguma dúvida, comentário ou reclamação sobre nossa Política de Privacidade, por favor",
    contactUs: "Contate-nos",
    contactUsContent2:
      "e nos esforçaremos para lidar com sua reclamação o mais rápido possível."
  },
  termsOfService: {
    termsOfServiceTitle: "Termos de Serviço",
    lastUpdated: "Última atualização: 21 de setembro de 2022",
    thankYouMessage: "Obrigado por usar nossos produtos!",
    companyReference:
      'Quando dizemos "Empresa", "nós", "nosso" ou "nos" neste documento, estamos nos referindo à Scribify.',
    servicesDefinition:
      'Quando dizemos "Serviços", queremos dizer qualquer produto criado e mantido pela Scribify, seja entregue em um navegador da web, aplicativo de desktop, aplicativo móvel ou outro formato.',
    termsUpdateNotice:
      "Poderemos atualizar estes Termos de Serviço no futuro. Normalmente, essas alterações visam esclarecer alguns destes termos, vinculando-os a uma política relacionada mais detalhada. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página e tomaremos as medidas cabíveis para notificar os titulares das contas.",
    acceptanceOfAgreementTitle: "1. Aceitação do Acordo",
    scribifyServicesTitle: "2. Serviços do Scribify",
    accountTermsTitle: "3. Termos da conta",
    paymentRefundsTitle: "4. Pagamento, Reembolsos e Alterações de Plano",
    cancellationTerminationTitle: "5. Cancelamento e Rescisão",
    submissionsTitle: "6. Submissões",
    uptimeSecurityTitle: "7. Tempo de atividade e segurança",
    siteManagementTitle: "8. Gerenciamento do Site",
    copyrightContentTitle: "9. Direitos autorais e propriedade de conteúdo",
    prohibitedActivitiesTitle: "10. Atividades Proibidas",
    featuresBugsTitle: "11. Recursos e bugs",
    correctionsTitle: "12. CORREÇÕES",
    userDataTitle: "13. Dados do Usuário",
    privacyPolicyTitle: "14. Política de Privacidade",
    liabilityTitle: "15. Responsabilidade",
    miscellaneousTitle: "16. Diversos",
    contactUsTitle: "17. Contate-nos",
    acceptanceContent1:
      "Ao utilizar nossos Serviços, você indica sua aceitação deste Contrato, que se torna um contrato vinculativo entre você e a Scribify. Você declara que tem capacidade legal para aceitar estes Termos e afirma ser maior de idade para firmar um contrato vinculativo. A aceitação pela Scribify está expressamente condicionada à sua concordância com todos os termos e condições deste Contrato.",
    acceptanceContent2:
      "Os Serviços não se destinam e não devem ser usados por menores de 18 anos. Ao usar os Serviços, você declara e garante que atende ao requisito de elegibilidade acima.",
    acceptanceContent3:
      'Os termos "você", "seu", "você mesmo" também incluem seus funcionários, agentes, representantes comerciais e quaisquer outros indivíduos aos quais você concede acesso aos Serviços por meio de sua Conta (conforme definido abaixo). Você é responsável por garantir que todas as pessoas que acessam os Serviços por meio de sua conta estejam cientes destes Termos e os cumpram.',
    acceptanceContent4:
      "A Scribify reserva-se o direito de revisar e atualizar estes Termos periodicamente, a seu exclusivo critério. Todas as alterações entram em vigor imediatamente após sua publicação. O uso contínuo dos Serviços após a publicação dos Termos revisados significa que você aceita e concorda com as alterações. Recomendamos que você consulte esta página periodicamente para estar ciente de quaisquer alterações, pois elas são vinculativas.",
    servicesContent1:
      "Nossos serviços permitem que os usuários transformem conversas de voz em texto transcrito que pode ser pesquisado, traduzido e compartilhado com outras pessoas.",
    servicesContent2:
      'Você pode escolher se deseja usar a versão gratuita dos Serviços ("Serviços Gratuitos") ou a versão paga baseada em assinatura dos Serviços, pela qual você pode ser obrigado a pagar taxas (os "Serviços Pagos").',
    servicesContent3:
      "Nós disponibilizaremos os Serviços a você. Você é responsável por tomar todas as providências necessárias para ter acesso aos Serviços.",
    accountTerms1:
      "- Você é responsável por manter a segurança da sua conta. A Empresa não pode e não será responsável por qualquer perda ou dano decorrente do seu descumprimento desta obrigação de segurança.",
    accountTerms2:
      "- Você não pode usar os Serviços para nenhuma finalidade ilegal, antiética ou imoral.",
    accountTerms3:
      "- Você é responsável por todo o conteúdo publicado e atividades que ocorrem em sua conta. Isso inclui conteúdo publicado por outras pessoas que: (a) tenham acesso às suas credenciais de login; ou (b) tenham seus próprios logins em sua conta.",
    accountTerms4:
      '- Você deve ser humano. Contas registradas por "bots" ou outros métodos automatizados não são permitidas.',
    paymentContent1:
      "- Para Serviços pagos que oferecem um teste gratuito, explicamos a duração do teste no momento da assinatura. Após o período de teste, você precisa pagar antecipadamente para continuar usando o Serviço. Se você não pagar, esses serviços serão encerrados.",
    paymentContent2:
      "- Se você estiver atualizando de um plano gratuito para um plano pago, cobraremos seu cartão imediatamente e seu ciclo de cobrança começará no dia da atualização.",
    paymentContent3:
      "- Todas as taxas excluem todos os impostos, taxas ou encargos cobrados pelas autoridades fiscais. Quando necessário, cobraremos esses impostos em nome da autoridade fiscal e os remeteremos às autoridades fiscais. Caso contrário, você será responsável pelo pagamento de todos os impostos, taxas ou encargos.",
    paymentContent4:
      "- Todas as compras não são reembolsáveis. Você pode cancelar qualquer serviço pago a qualquer momento, acessando sua conta. Para assinaturas pagas, o cancelamento entrará em vigor ao final do período pago atual, salvo indicação em contrário.",
    cancellationContent1:
      "- Se você cancelar o Serviço antes do término de qualquer período pago, o cancelamento entrará em vigor imediatamente e você não será cobrado novamente. Não rateamos automaticamente o tempo não utilizado no último ciclo de cobrança.",
    cancellationContent2:
      "- Temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro de nossos Serviços por qualquer motivo e a qualquer momento. Suspensão significa que você não poderá acessar a conta ou qualquer conteúdo nela contido. O encerramento resultará, além disso, na exclusão da sua conta ou do seu acesso à sua conta, e na perda e renúncia de todo o conteúdo da sua conta. Também nos reservamos o direito de recusar o uso dos Serviços a qualquer pessoa, por qualquer motivo e a qualquer momento. Temos esta cláusula porque, estatisticamente falando, das centenas de milhares de contas em nossos Serviços, há pelo menos uma praticando atos ilícitos.",
    cancellationContent3:
      "- Abuso verbal, físico, escrito ou de outro tipo (incluindo ameaças de abuso ou retaliação) contra funcionários ou executivos da Empresa pode resultar no encerramento imediato da conta.",
    submissionsContent:
      'Você reconhece e concorda que quaisquer perguntas, comentários, sugestões, ideias, feedback ou outras informações relativas ao Site ("Envios") fornecidos por você não são confidenciais e se tornarão nossa propriedade exclusiva. Deteremos direitos exclusivos, incluindo todos os direitos de propriedade intelectual, e teremos o direito de usar e disseminar irrestritamente estes Envios para qualquer finalidade lícita, comercial ou não, sem reconhecimento ou compensação a você. Você, por meio deste, renuncia a todos os direitos morais sobre tais Envios e garante que tais Envios são originais e que você tem o direito de enviá-los. Você concorda que não haverá recurso contra nós por qualquer violação ou apropriação indevida, alegada ou real, de qualquer direito de propriedade sobre seus Envios.',
    uptimeContent1:
      '- O uso dos Serviços é por sua conta e risco. Fornecemos estes Serviços "no estado em que se encontram" e "conforme disponíveis". Não oferecemos contratos de nível de serviço para a maioria dos nossos Serviços, mas levamos a sério o tempo de atividade dos nossos aplicativos.',
    uptimeContent2:
      "- Reservamo-nos o direito de desativar temporariamente sua conta caso seu uso exceda significativamente o uso típico dos Serviços por outros clientes. Obviamente, entraremos em contato com você antes de tomar qualquer medida, exceto em casos raros em que o nível de uso possa impactar negativamente o desempenho do Serviço para outros clientes.",
    uptimeContent3:
      "- Tomamos diversas medidas para proteger e proteger seus dados por meio de backups, redundâncias e criptografia. Aplicamos criptografia para transmissão de dados pela internet pública.",
    uptimeContent4:
      "- Usamos fornecedores terceirizados e parceiros de hospedagem para fornecer o hardware, software, rede, armazenamento e tecnologia relacionada necessários para executar os Serviços.",
    siteManagementContent:
      "Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar o Site em busca de violações destes Termos de Serviço; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos de Serviço, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desabilitar (na medida em que for tecnologicamente viável) qualquer uma de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem limitação, aviso ou responsabilidade, remover do Site ou desabilitar de outra forma todos os arquivos e conteúdos que sejam excessivos em tamanho ou que sejam de alguma forma onerosos para nossos sistemas; e (5) gerenciar o Site de outra forma projetada para proteger nossos direitos e propriedade e para facilitar o funcionamento adequado do Site.",
    copyrightContent1:
      "- Todo o conteúdo publicado nos Serviços deve estar em conformidade com a lei de direitos autorais dos EUA.",
    copyrightContent2:
      "- Não reivindicamos direitos de propriedade intelectual sobre o material que você fornece aos Serviços. Todos os materiais enviados permanecem seus.",
    copyrightContent3:
      "- Não fazemos uma triagem prévia do conteúdo, mas nos reservamos o direito (mas não a obrigação), a nosso exclusivo critério, de recusar ou remover qualquer conteúdo que esteja disponível por meio do Serviço.",
    copyrightContent4:
      "- Os nomes, a aparência e a funcionalidade dos Serviços são protegidos por direitos autorais © da Empresa. Todos os direitos reservados. Você não pode duplicar, copiar ou reutilizar qualquer parte do HTML, CSS, JavaScript ou elementos de design visual sem a permissão expressa por escrito da Empresa. Você deve solicitar permissão para usar o logotipo da Empresa ou qualquer logotipo dos Serviços para fins promocionais.",
    emailUs: "envie-nos um e-mail",
    copyrightContent5:
      "solicitações de uso de logotipos. Reservamo-nos o direito de revogar esta permissão caso você viole estes Termos de Serviço.",
    copyrightContent6:
      "- Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos Serviços, uso dos Serviços ou acesso aos Serviços sem a permissão expressa por escrito da Empresa.",
    copyrightContent7:
      "- Você não deve modificar outro site de modo a implicar falsamente que ele está associado aos Serviços ou à Empresa.",
    copyrightContent8:
      "- Respeitamos os direitos de propriedade intelectual de terceiros. Se você acredita que qualquer material disponível no Site ou por meio dele infringe quaisquer direitos autorais que você possui ou controla, entre em contato imediatamente.",
    contactUs: "Contate-nos",
    copyrightContent9:
      "Uma cópia da sua Notificação será enviada à pessoa que publicou ou armazenou o material abordado na Notificação. Esteja ciente de que, de acordo com a legislação aplicável, você poderá ser responsabilizado por danos caso faça declarações falsas em uma Notificação. Portanto, se você não tiver certeza de que o material localizado ou vinculado ao Site viola seus direitos autorais, considere primeiro entrar em contato com um advogado.",
    prohibitedActivitiesIntro:
      "Você não poderá acessar ou utilizar o Site para qualquer finalidade que não seja aquela para a qual o disponibilizamos. O Site não poderá ser utilizado em conexão com quaisquer empreendimentos comerciais, exceto aqueles que sejam especificamente endossados ou aprovados por nós.",
    prohibitedActivitiesUserAgreement:
      "Como usuário do Site, você concorda em não:",
    prohibitedActivity1:
      "- Recuperar sistematicamente dados ou outro conteúdo do Site para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa permissão por escrito.",
    prohibitedActivity2:
      "- Enganar, fraudar ou induzir a nós e a outros usuários em erro, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuários.",
    prohibitedActivity3:
      "- Contornar, desabilitar ou interferir de outra forma nos recursos de segurança do Site, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou impõem limitações ao uso do Site e/ou do Conteúdo nele contido.",
    prohibitedActivity4:
      "- Desprezar, manchar ou de outra forma prejudicar, em nossa opinião, nós e/ou o Site.",
    prohibitedActivity5:
      "- Usar qualquer informação obtida no Site para assediar, abusar ou prejudicar outra pessoa.",
    prohibitedActivity6:
      "- Fazer uso indevido de nossos serviços de suporte ou enviar relatórios falsos de abuso ou má conduta.",
    prohibitedActivity7:
      "- Usar o Site de maneira inconsistente com quaisquer leis ou regulamentos aplicáveis.",
    prohibitedActivity8:
      "- Envolver-se em enquadramento ou vinculação não autorizados ao Site.",
    prohibitedActivity9:
      "- Carregar ou transmitir (ou tentar carregar ou transmitir) vírus, cavalos de Troia ou outro material, incluindo uso excessivo de letras maiúsculas e spam (publicação contínua de texto repetitivo), que interfira no uso ininterrupto e no aproveitamento do Site por qualquer parte ou modifique, prejudique, interrompa, altere ou interfira no uso, recursos, funções, operação ou manutenção do Site.",
    prohibitedActivity10:
      "- Envolver-se em qualquer uso automatizado do sistema, como usar scripts para enviar comentários ou mensagens, ou usar qualquer mineração de dados, robôs ou ferramentas semelhantes de coleta e extração de dados.",
    prohibitedActivity11:
      "- Excluir o aviso de direitos autorais ou outros direitos de propriedade de qualquer Conteúdo.",
    prohibitedActivity12:
      "- Tentar se passar por outro usuário ou pessoa ou usar o nome de usuário de outro usuário.",
    prohibitedActivity13:
      '- Carregar ou transmitir (ou tentar carregar ou transmitir) qualquer material que atue como um mecanismo passivo ou ativo de coleta ou transmissão de informações, incluindo, sem limitação, formatos de intercâmbio gráfico transparentes ("gifs"), pixels 1×1, web bugs, cookies ou outros dispositivos semelhantes (às vezes chamados de "spyware" ou "mecanismos de coleta passiva" ou "pcms").',
    prohibitedActivity14:
      "- Interferir, interromper ou criar uma carga indevida no Site ou nas redes ou serviços conectados ao Site.",
    prohibitedActivity15:
      "- Assediar, incomodar, intimidar ou ameaçar qualquer um dos nossos funcionários ou agentes envolvidos no fornecimento de qualquer parte do Site para você.",
    prohibitedActivity16:
      "- Tentar contornar quaisquer medidas do Site projetadas para impedir ou restringir o acesso ao Site ou a qualquer parte do Site.",
    prohibitedActivity17:
      "- Copiar ou adaptar o software do Site, incluindo, mas não se limitando a Flash, PHP, HTML, JavaScript ou outro código.",
    prohibitedActivity18:
      "- Exceto quando permitido pela lei aplicável, decifrar, descompilar, desmontar ou fazer engenharia reversa de qualquer software que componha ou de qualquer forma faça parte do Site.",
    prohibitedActivity19:
      "- Exceto quando for resultado do uso de mecanismos de busca padrão ou navegadores da Internet, usar, lançar, desenvolver ou distribuir qualquer sistema automatizado, incluindo, sem limitação, qualquer spider, robô, utilitário de trapaça, scraper ou leitor offline que acesse o Site, ou usar ou lançar qualquer script não autorizado ou outro software.",
    prohibitedActivity20:
      "- Utilize um agente de compras ou agente de compras para fazer compras no Site.",
    prohibitedActivity21:
      "- Fazer qualquer uso não autorizado do Site, incluindo a coleta de nomes de usuários e/ou endereços de e-mail de usuários por meios eletrônicos ou outros, com a finalidade de enviar e-mails não solicitados, ou criar contas de usuários por meios automatizados ou sob falsos pretextos.",
    prohibitedActivity22:
      "- Usar o Site como parte de qualquer esforço para competir conosco ou usar o Site e/ou o Conteúdo para qualquer empreendimento de geração de receita ou empreendimento comercial.",
    prohibitedActivity23:
      "- Usar o Site para anunciar ou oferecer a venda de produtos e serviços.",
    prohibitedActivity24: "- Vender ou transferir seu perfil.",
    featuresContent1:
      "Projetamos nossos Serviços com cuidado, com base em nossa própria experiência e nas experiências de clientes que compartilham seu tempo e feedback. No entanto, não existe um serviço que agrade a todos. Não garantimos que nossos Serviços atenderão às suas necessidades ou expectativas específicas.",
    featuresContent2:
      "Também testamos todos os nossos recursos antes de lançá-los. Como acontece com qualquer software, nossos Serviços inevitavelmente apresentam alguns bugs. Monitoramos os bugs relatados e os solucionamos, especialmente aqueles relacionados à segurança ou privacidade. Nem todos os bugs relatados serão corrigidos e não garantimos que os Serviços estejam completamente livres de erros.",
    correctionsContent1:
      "Pode haver informações no Site que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e diversas outras informações. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações no Site a qualquer momento, sem aviso prévio.",
    correctionsContent2:
      "Não podemos garantir que o Site estará disponível o tempo todo. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenção relacionada ao Site, resultando em interrupções, atrasos ou erros. Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar o Site a qualquer momento ou por qualquer motivo, sem aviso prévio. Você concorda que não temos qualquer responsabilidade por qualquer perda, dano ou inconveniência causada pela sua incapacidade de acessar ou usar o Site durante qualquer período de inatividade ou descontinuação do Site. Nada nestes Termos de Serviço será interpretado como uma obrigação para nós de manter e dar suporte ao Site ou de fornecer quaisquer correções, atualizações ou lançamentos relacionados a ele.",
    userDataContent:
      "Manteremos determinados dados que você transmitir ao Site com a finalidade de gerenciar o desempenho do Site, bem como dados relacionados ao seu uso do Site. Embora realizemos backups regulares de dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que tenha realizado usando o Site. Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de tais dados.",
    privacyPolicyContent1:
      "Preocupamo-nos com a privacidade e a segurança dos dados. Consulte a nossa Política de Privacidade.",
    privacyPolicy: "política de Privacidade",
    privacyPolicyContent2:
      "Ao utilizar o Site, você concorda em estar vinculado à nossa Política de Privacidade, que está incorporada a estes Termos de Serviço. Informamos que o Site está hospedado nos Estados Unidos. Se você acessar o Site de qualquer outra região do mundo com leis ou outros requisitos que regem a coleta, o uso ou a divulgação de dados pessoais diferentes das leis aplicáveis nos Estados Unidos, ao continuar usando o Site, você estará transferindo seus dados para os Estados Unidos e concorda que seus dados sejam transferidos e processados nos Estados Unidos.",
    liabilityIntro:
      "Mencionamos a responsabilidade ao longo destes Termos, mas para colocar tudo em uma seção:",
    liabilityContent:
      "Você expressamente entende e concorda que a Empresa não será responsável, em lei ou em equidade, perante você ou qualquer terceiro por quaisquer danos diretos, indiretos, incidentais, lucros cessantes, especiais, consequenciais, punitivos ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, ágio, uso, dados ou outras perdas intangíveis (mesmo que a Empresa tenha sido avisada da possibilidade de tais danos), resultantes de: (1) o uso ou a incapacidade de usar os Serviços; (2) erros, enganos ou imprecisões de conteúdo e materiais; (3) danos pessoais ou materiais, de qualquer natureza, resultantes do seu acesso e uso do site; (4) o custo de aquisição de bens e serviços substitutos resultantes de quaisquer bens, dados, informações ou serviços adquiridos ou obtidos ou mensagens recebidas ou transações realizadas por meio ou a partir dos Serviços; (5) qualquer acesso ou uso não autorizado de nossos servidores seguros e/ou quaisquer e todas as informações pessoais e/ou informações financeiras armazenadas neles; (6) qualquer interrupção ou cessação de transmissão de ou para o site; (7) quaisquer bugs, vírus, cavalos de Troia ou similares que possam ser transmitidos ao site ou por meio dele por terceiros e/ou; (8) quaisquer erros ou omissões em qualquer conteúdo e materiais ou por qualquer perda ou dano de qualquer tipo incorrido como resultado do uso de qualquer conteúdo publicado, transmitido ou de outra forma disponibilizado por meio do site; (9) declarações ou conduta de terceiros no serviço; (10) ou qualquer outro assunto relacionado a estes Termos de Serviço ou aos Serviços, seja como quebra de contrato, ato ilícito (incluindo negligência ativa ou passiva) ou qualquer outra teoria de responsabilidade.",
    miscellaneousContent:
      "Estes Termos de Serviço e quaisquer políticas ou regras operacionais publicadas por nós no Site ou em relação ao Site constituem o acordo e entendimento integral entre você e nós. Nossa falha em exercer ou executar qualquer direito ou disposição destes Termos de Serviço não operará como uma renúncia de tal direito ou disposição. Estes Termos de Serviço operam na máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou omissão de ação causados por qualquer causa além do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos de Serviço for determinada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos de Serviço e não afetará a validade e a exequibilidade de quaisquer disposições restantes. Não há nenhuma relação de joint venture, parceria, emprego ou agência criada entre você e nós como resultado destes Termos de Serviço ou do uso do Site. Você concorda que estes Termos de Serviço não serão interpretados contra nós em virtude de tê-los elaborado. Você renuncia a toda e qualquer defesa que possa ter com base no formato eletrônico destes Termos de Serviço e na falta de assinatura pelas partes para executar estes Termos de Serviço.",
    contactUsContent1:
      "Se você tiver alguma dúvida sobre qualquer um dos Termos de Serviço, por favor",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Características",
    UnlimitedTranscription: "Transcrição ilimitada",
    BulkUpload: "Upload em massa",
    Accuracy: "96% de precisão",
    Pricing: "Preços",
    UseCases: "Casos de uso",
    AllUseCases: "Todos os casos de uso",
    Podcasters: "Podcasters",
    Journalists: "Jornalistas",
    ContentCreators: "Criadores de conteúdo",
    Researchers: "Pesquisadores",
    BusinessTeams: "Equipes de negócios",
    Educators: "Educadores",
    Resources: "Recursos",
    YouTubetoMP4: "YouTube para MP4",
    StartFreeTrial: "Experimente grátis"
  },
  Footer: {
    des: "O primeiro serviço de transcrição com IA verdadeiramente ilimitado do mundo. Sem limites, sem limites, apenas liberdade para criar.",
    Features: "Características",
    UseCases: "Casos de uso",
    Company: "Empresa",
    featureMenus: ["Transcrição ilimitada", "Upload em massa", "96% de precisão"],
    useCaseMenus: [
          "Todos os casos de uso",
          "Podcasters",
          "Jornalistas",
          "Criadores de conteúdo",
          "Pesquisadores",
          "Equipes de negócios",
          "Educadores"
        ],
    companyMenus: [
          "Sobre",
          "Preços",
          "Privacidade",
          "Termos"
        ]
  },
  Index: {
    Hero: {
      badge: 'Chega de "Shrinkflation" - Na verdade, ilimitado',
      h1: "Pare de pagar por limites:",
      gradient: "Transcrição de IA verdadeiramente ilimitada",
      subtitle: "Carregue todo o seu arquivo de podcast. Transcreva todas as suas entrevistas. Processe 50 arquivos de uma só vez. Sem limites mensais, sem limites de upload. Finalmente, uma transcrição que se adapta às suas necessidades reais.",
      FreeTrial: "Experimente grátis - sem cartão de crédito",
      HowWorks: "Veja como funciona",
      Unlimited: "Uploads de arquivos ilimitados",
      NoCap: "Sem limite de minutos mensais",
      Hour: "Arquivos de 10 horas suportados",
      ExploreUseCases: "Explorar casos de uso"
    },
    Stats: {
      monthlyMinutes: "Minutos mensais",
      fileUploads: "Uploads de arquivos",
      batchProcessing: "Processamento em lote",
      maxFileLength: "Comprimento máximo do arquivo"
    },
    FeaturesGrid: {
      try_now: "Experimente agora",
      no_signup: "Não é necessário se inscrever",
      experience_unltd: "Experimente uma transcrição verdadeiramente ilimitada",
      upload_50: "Carregue até 50 arquivos de uma vez, aqui mesmo",
      no_limits: "Não há mais limites ocultos",
      no_surprises: "Sem mais surpresas",
      transparency: "Enquanto outros reduzem discretamente seus minutos ou escondem limites em letras miúdas, nós acreditamos na transparência radical",
      feat_unltd: "Na verdade ilimitado",
      feat_unltd_desc: 'Nenhuma "política de uso justo" escondida em termos. Nenhum limite de armazenamento disfarçado de "ilimitado". Carregue seu arquivo inteiro, transcreva tudo. Falamos sério.',
      feat_bulk: "Liberdade de upload em massa",
      feat_bulk_desc: 'Cansado de "3 importações vitalícias" ou "10 arquivos por mês"? Envie 50 arquivos de uma só vez, quantas vezes precisar. Perfeito para processar pendências.',
      feat_batch: "Processamento em lote",
      feat_batch_desc: "Processe toda a sua temporada de podcast durante a noite. Envie 50 entrevistas de uma só vez. Deixe nossa IA trabalhar enquanto você dorme. Acorde com as transcrições completas.",
      feat_accuracy: "96% de precisão",
      feat_accuracy_desc: "IA líder do setor com pontuação inteligente, diarização de falantes para até 20 pessoas e tratamento perfeito de acentos e termos técnicos.",
      feat_langs: "Mais de 100 idiomas",
      feat_langs_desc: "Transcreva em mais de 100 idiomas e traduza para mais de 249. Sem custos adicionais para idiomas diferentes. Conteúdo global, um preço único.",
      feat_pro: "Recursos profissionais",
      feat_pro_desc: "Carimbos de data e hora em nível de palavra para posicionamento preciso de áudio/vídeo, identificação precisa do locutor mesmo durante trocas rápidas de conversa e texto perfeitamente formatado com parágrafos, frases e pontuação para facilitar a leitura."
    },
    UseCases: {
      built_for: "Construído para",
      "heavy_users": "Usuários pesados como você",
      "join_users": 'Junte-se aos YouTubers, criadores de conteúdo e podcasters que migraram dos serviços de "shrinkflation"',
      "podcasters": {
        "title": "Podcasters",
        "des": "Carregue todo o seu catálogo. Crie notas de apresentação para cada episódio. Chega de escolher quais episódios transcrever."
      },
      "content_creators": {
        "title": "Criadores de conteúdo",
        "des": "Transforme sua videoteca em texto pesquisável. Gere legendas para tudo. Sem contar minutos, só criando."
      },
      "journalists": {
        "title": "Jornalistas",
        "des": 'Envie todas as suas entrevistas de uma só vez. Chega de "10 arquivos por mês" quando o prazo está próximo. Processe tudo.'
      },
      researchers: {
        title: "Pesquisadores",
        des: "Transcreva horas de grupos focais e entrevistas. Envie todo o seu estudo de uma só vez. Obtenha a identificação precisa do palestrante."
      },
      business_teams: {
        title: "Equipes de negócios",
        des: "Grave todas as chamadas sem se preocupar com limites. Obtenha insights de IA sobre todas as conversas, não apenas algumas selecionadas."
      },
      educators: {
        title: "Educadores",
        des: "Transcreva a série completa de palestras. Torne todo o conteúdo acessível. Não é preciso escolher entre os cursos devido ao limite de minutos."
      }
    },
    Testimonials: {
      title: "Amado por",
      highlighted_users: "Mais de 50.000 usuários",
      subtitle: "Veja por que os profissionais escolhem NeverCap em vez de alternativas limitadas",
      Mike: {
        "text": "Puta merda, essa coisa funciona mesmo! Estou fazendo um podcast há 3 anos e estava transcrevendo tudo manualmente como um idiota. Enviei 6 episódios de uma vez e isso separou perfeitamente a mim e ao meu coapresentador. O episódio da cafeteria que eu achei que estava arruinado? Transcrição cristalina. Nunca mais vou voltar a digitar essas coisas sozinho.",
        "author": "Mike Rodríguez",
        "role": "Apresentador de podcast"
      },
      Sarah: {
        "text": "Dou aulas online e precisava de legendas para meus vídeos. Experimentei outras três ferramentas que tinham limites estranhos ou demoravam uma eternidade. Esta simplesmente... funciona? Enviei minha aula de espanhol e consegui legendas perfeitas em tipo 2 minutos. Meus alunos com problemas de audição estão muito felizes. Gostaria de ter encontrado isso antes!",
        "author": "Sarah Chen",
        "role": "Professor Online"
      },
      Jessica: {
        "text": "Tenho usado isso para minhas entrevistas e é incrível como é preciso. Tive uma entrevista de 2 horas em inglês e espanhol ruins e acertei tudo, até os carimbos de data e hora. Costumava pagar US$ 200 por mês ao meu estagiário só para transcrever as coisas. Isso está literalmente me economizando dinheiro todo mês.",
        "author": "Jessica Park",
        "role": "Jornalista freelancer"
      }
    },
    PricingPreview: {
      "title": "Preços transparentes",
      "highlighted_text": "Sem tampas ocultas",
      "subtitle": "Escolha o seu plano. Sem asteriscos, sem letras miúdas, sem surpresas."
    },
    FAQSection: {
      "title": "Perguntas frequentes",
      "titleHighlight": "Questões",
      "questions": [
            {
              "q": "política_ilimitada",
              "question": "É realmente ilimitado? Qual é o problema?",
              "answer": "Sim, é realmente ilimitado! Sem limites mensais de minutos, sem taxas de excedente. Os únicos limites são técnicos: arquivos individuais podem ter até 10 horas de duração ou 5 GB de tamanho, e você pode processar 50 arquivos de uma vez. Mas você pode enviar quantos lotes quiser, durante todo o mês."
            },
            {
              "q": "precisão",
              "question": "Quão precisa é a transcrição?",
              "answer": "Garantimos 96% de precisão para um áudio nítido. Nossa IA é treinada com milhões de horas de conteúdo diversificado e lida com sotaques, termos técnicos e múltiplos locutores com excepcional qualidade. Para áudios desafiadores, nossos recursos inteligentes de aprimoramento ajudam a aprimorar os resultados."
            },
            {
              "q": "línguas",
              "question": "Quais idiomas vocês oferecem suporte?",
              "answer": "Oferecemos transcrição em mais de 100 idiomas, incluindo inglês, espanhol, mandarim, hindi, árabe, francês e outros. Além disso, você pode traduzir suas transcrições para 249 idiomas diferentes, o que as torna perfeitas para conteúdo global."
            },
            {
              "q": "velocidade",
              "question": "Quão rápida é a transcrição?",
              "answer": "Rápido como um raio! Um arquivo de áudio de 1 hora normalmente é processado em menos de 5 minutos. Com o processamento em lote, você pode carregar 50 arquivos simultaneamente e deixá-los processar em paralelo. A maioria dos usuários acorda e encontra sua biblioteca inteira transcrita da noite para o dia."
            },
            {
              "q": "cancelamento",
              "question": "Posso cancelar a qualquer momento?",
              "answer": "Com certeza! Sem contratos, sem taxas de cancelamento. Você pode fazer upgrade, downgrade ou cancelar sua assinatura a qualquer momento no seu painel. Se cancelar, você manterá o acesso até o final do período de cobrança."
            },
            {
              "q": "segurança",
              "question": "Meus dados estão seguros?",
              "answer": "Sua segurança é nossa prioridade. Possuímos certificação SOC 2, usamos criptografia de 256 bits para todos os dados e nunca usamos seu conteúdo para treinar nossos modelos. Você pode excluir seus arquivos a qualquer momento, e nós os removemos automaticamente após 30 dias. Em conformidade com GDPR e CCPA."
            },
            {
              "q": "formatos_de_exportação",
              "question": "Quais formatos de exportação estão disponíveis?",
              "answer": "Baixe suas transcrições em qualquer formato que você precisar: PDF, Word (DOCX), Excel, CSV, legendas SRT, texto simples (TXT) e legendas VTT. Perfeito para qualquer fluxo de trabalho que você tenha."
            },
            {
              "q": "formatos de arquivo",
              "question": "Quais arquivos de áudio e vídeo posso enviar?",
              "answer": "Suportamos praticamente todos os formatos de áudio e vídeo que você encontrar: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV e muito mais. Se você consegue reproduzir, nós podemos transcrever."
            }
          ]
    },
    CTASection: {
      "title": "Pronto para se libertar dos limites?",
      "subtitle": "Junte-se a mais de 50.000 profissionais que migraram para transcrições verdadeiramente ilimitadas",
      "button": "Experimente NeverCap grátis",
      "disclaimer": "Não é necessário cartão de crédito para o Plano Gratuito • Atualize a qualquer momento para acesso ilimitado"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Chega de "Shrinkflation"',
      heroTitleLine1: "Verdadeiramente Ilimitado",
      heroTitleLine2: "Transcrição de IA",
      heroSubtitle: "Enquanto a Trint limita você a 50 horas e a Otter a 10 arquivos por mês, nós entregamos o que realmente prometemos: transcrição ilimitada, sem limites ocultos.",
      primaryCta: "Experimente grátis - sem cartão de crédito",
      secondaryCta: "Veja a verdade",
      comparisonBadLabel: "O que os outros fazem",
      comparisonBadTitle: "Limites ocultos em todos os lugares",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Ilimitado" = limite de 50 horas/mês',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Lontra:",
      comparisonBadItem2Text: "3 importações vitalícias (grátis), 10/mês (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Vaga-lumes:",
      comparisonBadItem3Text: "Limite de armazenamento de 800 minutos",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Descrição:",
      comparisonBadItem4Text: "Máximo 30 horas/mês",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Oculto nos termos e condições",
      comparisonGoodLabel: "O que fazemos",
      comparisonGoodTitle: "Na verdade ilimitado",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Sem limites de minutos mensais",
      comparisonGoodItem1Text: "sempre",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Uploads de arquivos ilimitados",
      comparisonGoodItem2Text: "sempre",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Sem limites de armazenamento",
      comparisonGoodItem3Text: "de forma alguma",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Upload em lote de 50 arquivos",
      comparisonGoodItem4Text: "a qualquer momento",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Política transparente",
      comparisonGoodItem5Text: "adiantado",
      feature1Label: "Sem limites",
      feature1TitlePart1: "Transcrever 1.000 horas?",
      feature1TitlePart2: "Mesmo preço.",
      feature1Description: "Pare de contar minutos. Pare de ficar de olho nos limites. Não importa se você transcreve 10 ou 10.000 horas por mês, você paga a mesma taxa fixa. Sem taxas extras. Sem contas surpresa.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Sem truques de política de "uso justo"',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Sem limitação após X horas",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Sem ansiedade de fim de mês",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Horas mensais",
      feature1Stat2Number: "$ 0",
      feature1Stat2Label: "Taxas de excedente",
      feature1Stat3Number: "24 horas por dia, 7 dias por semana",
      feature1Stat3Label: "Carregar a qualquer momento",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparente",
      feature2Label: "Liberdade em massa",
      feature2TitlePart1: "Carregue seu",
      feature2TitlePart2: "Arquivo inteiro",
      feature2Description: "O Otter oferece 3 importações vitalícias gratuitas e 10 por mês na versão Pro. Oferecemos opções ilimitadas. Envie seu backlog de podcast, todas as suas entrevistas e anos de gravações. Sem restrições.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 arquivos por lote",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Arquivos de 10 horas suportados",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Processe enquanto você dorme",
      feature2TableRow1Label: "Lontra Livre",
      feature2TableRow1Value: "3 importações vitalícias",
      feature2TableRow2Label: "Lontra Profissional",
      feature2TableRow2Value: "10 arquivos/mês",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Limite de 50 horas/mês",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Verdadeiramente Ilimitado ✓",
      feature3Label: "Prova Social",
      feature3TitlePart1: "Os usuários são",
      feature3TitlePart2: "Troca diária",
      feature3Description: '\"Pago US$ 100 por ano pelo Otter e eles me limitam a 10 importações de arquivos por mês. Assim que surgir uma alternativa com importações ilimitadas, eu vou embora!\" - Usuário real do Reddit',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Mais de 50.000 usuários mudaram",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Da "shrinkflation" de Otter',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Nunca mais voltarei",
      feature3Stat1Number: "50 mil+",
      feature3Stat1Label: "Usuários felizes",
      feature3Stat2Number: "1 milhão+",
      feature3Stat2Label: "Arquivos processados",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Precisão",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Sem taxas ocultas",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minutos/Mês",
      trustBadge2Number: "100+",
      trustBadge2Label: "Idiomas",
      trustBadge3Number: "96%",
      trustBadge3Label: "Precisão",
      trustBadge4Number: "50",
      trustBadge4Label: "Upload em lote",
      ctaTitle: "Pare de pagar por falsos ilimitados",
      ctaSubtitle: "Junte-se a milhares que migraram para a transcrição verdadeiramente ilimitada",
      finalCta: "Experimente NeverCap grátis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Liberdade de upload em massa",
      heroTitleLine1: "Carregar 50 arquivos.",
      heroTitleHighlight: "Processe tudo.",
      heroSubtitle: "O Otter oferece 3 importações vitalícias. TRÊS. Para toda a sua vida. Oferecemos uploads ilimitados, 50 arquivos por vez, sempre que você precisar.",
      primaryCta: "Iniciar upload em massa →",
      secondaryCta: "Veja os limites",
      redditQuote: '"Tenho 3 anos de episódios de podcast para transcrever. O Otter me disse que tenho 3 importações vitalícias. TRÊS. Isso é um insulto."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Frustração real do r/podcasting",
      comparisonSectionTitlePart1: "O",
      comparisonSectionTitleHighlight: "Limites Ridículos",
      comparisonSectionTitlePart2: "Eles impõem",
      comparisonSubtitle: "Como os concorrentes restringem sua capacidade de processar conteúdo",
      limitCard1Service: "Lontra Livre",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importações vitalícias",
      limitCard1DescriptionLine2: "(Sim, por TODA a sua vida)",
      limitCard2Service: "Lontra Profissional",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Arquivos por mês",
      limitCard2DescriptionLine2: "(Plano de US$ 100/ano)",
      limitCard3Service: "Descrição",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Arquivo de cada vez",
      limitCard3DescriptionLine2: "(Upload sequencial)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Uploads ilimitados",
      limitCard4DescriptionLine2: "50 arquivos por lote",
      feature1Label: "Potência em lote",
      feature1TitlePart1: "Processe seu",
      feature1TitleHighlight: "Arquivo inteiro",
      feature1TitlePart2: "Durante a noite",
      feature1Description: 'Carregue 50 arquivos antes de dormir. Acorde e complete as transcrições. Sem filas, sem esperas, sem mensagens de "atualize seu trabalho". Apenas poder de processamento na ponta dos seus dedos.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 uploads simultâneos",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Processamento paralelo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Arquivos de 10 horas suportados",
      feature1Point4Icon: "✓",
      feature1Point4Text: "5 GB por arquivo no máximo",
      uploadAnimationText1: "50 arquivos",
      uploadAnimationText2: "Descarte e Processamento",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "entrevista_crua.mp4",
      fileBadge3: "reunião_2024.wav",
      fileBadge4: "palestra_completa.mov",
      fileBadge5: "+ 46 outros arquivos...",
      feature2Label: "Velocidade",
      feature2TitlePart1: "Do Upload para",
      feature2TitleHighlight: "Feito em horas",
      feature2Description: "Nossa infraestrutura de processamento paralelo significa que seus 50 arquivos não precisam ficar na fila. Todos estão sendo transcritos simultaneamente. O que costumava levar semanas, agora leva horas.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Arquivo de 1 hora: 5 minutos",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 arquivos: processados em paralelo",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Notificação por e-mail quando concluído",
      timelineStep1Icon: "1",
      timelineStep1Title: "Carregar",
      timelineStep1Time: "0 min",
      timelineStep2Icon: "2",
      timelineStep2Title: "Processamento",
      timelineStep2Time: "5-30 minutos",
      timelineStep3Icon: "3",
      timelineStep3Title: "IA Mágica",
      timelineStep3Time: "30-60 minutos",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Completo",
      timelineStep4Time: "< 2 horas",
      feature3Label: "Liberdade",
      feature3TitlePart1: "Sem filas.",
      feature3TitleHighlight: "Sem espera.",
      feature3TitlePart2: "Sem limites.",
      feature3Description: 'Enquanto outros fazem você esperar em filas virtuais ou fazer upgrade para "processamento prioritário", nós tratamos cada upload com urgência. Seu conteúdo importa e não deve esperar.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Sem níveis de prioridade",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Mesma velocidade para todos",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Carregue a qualquer hora, 24 horas por dia, 7 dias por semana",
      feature3VisualNumber: "24 horas por dia, 7 dias por semana",
      feature3VisualTitle: "Sempre pronto",
      feature3VisualSubtext: "Faça upload sempre que a inspiração surgir",
      useCasesTitlePart1: "Perfeito para",
      useCasesTitleHighlight: "Carregadores pesados",
      useCasesSubtitle: "Cenários reais onde o upload em massa salva o dia",
      useCase1Title: "Arquivos de podcast",
      useCase1Description: "Carregue 3 anos de episódios de uma só vez. Crie transcrições para todo o seu catálogo. Gere conteúdo de SEO para cada episódio.",
      useCase2Title: "Criação de Cursos",
      useCase2Description: "Processe todos os seus vídeos de aulas simultaneamente. Crie transcrições acessíveis para os alunos. Crie materiais de curso pesquisáveis.",
      useCase3Title: "Lista de pendências de entrevistas",
      useCase3Description: "Elimine aquela montanha de entrevistas sem transcrição. Processe semanas de pesquisa em poucas horas. Cumpra seus prazos sem pânico.",
      useCase4Title: "Biblioteca do YouTube",
      useCase4Description: "Crie legendas para todo o seu canal. Crie posts de blog a partir de conteúdo em vídeo. Melhore o SEO em todos os vídeos.",
      useCase5Title: "Arquivos de Reuniões",
      useCase5Description: "Carregue meses de reuniões gravadas. Crie notas de reuniões pesquisáveis. Nunca mais perca decisões importantes.",
      useCase6Title: "Dados de Pesquisa",
      useCase6Description: "Processe grupos focais em massa. Transcreva todas as entrevistas dos participantes. Analise dados qualitativos com eficiência.",
      ctaTitle: "Pare de implorar por mais uploads",
      ctaSubtitle: "Obtenha processamento em massa ilimitado que realmente funciona",
      finalCta: "Carregar 50 arquivos agora →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Precisão líder do setor",
      heroTitleLine1: "96% de precisão.",
      heroTitleHighlight: "Cada palavra importa.",
      heroSubtitle: "Precisão líder do setor em 12 idiomas principais. Carimbos de data e hora em nível de palavra para sincronização perfeita. Identificação inteligente de locutores que lida com conversas rápidas. Formatação profissional realmente legível.",
      primaryCta: "Teste nossa precisão →",
      secondaryCta: "Ver idiomas",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Precisão em",
      statCard1DescriptionLine2: "12 idiomas principais",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Precisão com",
      statCard2DescriptionLine2: "Sotaques e dialetos",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Nível de palavra",
      statCard3DescriptionLine2: "Precisão do carimbo de data/hora",
      languageSectionTitlePart1: "96% de precisão em 12 idiomas principais",
      languageSubtitle: "Transcrição de nível profissional para conteúdo global",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Inglês",
      languageCard1Accuracy: "96% de precisão",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Espanhol",
      languageCard2Accuracy: "96% de precisão",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarim",
      languageCard3Accuracy: "96% de precisão",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Francês",
      languageCard4Accuracy: "96% de precisão",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Alemão",
      languageCard5Accuracy: "96% de precisão",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japonês",
      languageCard6Accuracy: "96% de precisão",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "coreano",
      languageCard7Accuracy: "96% de precisão",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Português",
      languageCard8Accuracy: "96% de precisão",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "russo",
      languageCard9Accuracy: "96% de precisão",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "italiano",
      languageCard10Accuracy: "96% de precisão",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Holandês",
      languageCard11Accuracy: "96% de precisão",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "árabe",
      languageCard12Accuracy: "96% de precisão",
      moreLanguagesText: "+ 88 idiomas suportados com precisão de 95%+",
      feature1Label: "Precisão",
      feature1TitlePart1: "Nível de palavra",
      feature1TitleHighlight: "Carimbos de data e hora",
      feature1Description: "Cada palavra é perfeitamente sincronizada com sua posição de áudio. Crie transcrições clicáveis, gere legendas precisas ou pule para momentos exatos em suas gravações. Precisão de 100 ms em que os profissionais confiam.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Precisão de registro de data e hora de 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfeito para edição de vídeo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Transcrições interativas clicáveis",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Legendas com precisão de quadro",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Orador 1",
      transcriptLine1Text: "Bem-vindos ao episódio de podcast de hoje.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Orador 2",
      transcriptLine2Text: "Obrigado por me receber no programa!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Orador 1",
      transcriptLine3Text: "Vamos mergulhar no nosso tópico principal...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Orador 2",
      transcriptLine4Text: "Com certeza, estou animado para discutir isso.",
      feature2Label: "IA inteligente",
      feature2TitlePart1: "Alças",
      feature2TitleHighlight: "Conversas rápidas",
      feature2Description: "Nossa IA identifica com precisão os interlocutores, mesmo durante falas sobrepostas, interrupções e conversas rápidas. Perfeito para entrevistas, podcasts e reuniões onde os interlocutores intervêm com frequência.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifica até 20 alto-falantes",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Lida perfeitamente com interrupções",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Trabalha com fala sobreposta",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Mantém a precisão na diafonia",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Palestrantes identificados",
      feature2VisualSubtext: "Mesmo em conversas rápidas",
      feature3Label: "Legibilidade",
      feature3TitlePart1: "Perfeitamente",
      feature3TitleHighlight: "Texto formatado",
      feature3Description: "Chega de paredes de texto. Nossa IA adiciona automaticamente parágrafos, frases e pontuação exatamente onde eles devem estar. O resultado? Transcrições realmente agradáveis de ler e fáceis de escanear.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Quebras de parágrafo inteligentes",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Pontuação precisa",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Capitalização adequada",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Saída limpa e digitalizável",
      formattingTitle: "Antes e depois",
      formattingBeforeLabel: "❌ Outros:",
      formattingBeforeText: "Então, hoje vamos falar sobre os novos recursos em que estamos trabalhando. Acho que você vai gostar muito deles. Eles foram solicitados pelos usuários por um longo tempo e finalmente os concluímos.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Então, hoje, vamos falar sobre os novos recursos em que estamos trabalhando. Acho que você vai gostar bastante deles. Eles eram pedidos pelos usuários há muito tempo, e finalmente os concluímos.",
      comparisonSubtitle: "Precisão",
      comparisonSectionTitle: "Comparação",
      comparisonDes: "Veja como nos comparamos com a concorrência",
      tableHeader1: "Recurso",
      tableHeader2: "NeverCap",
      tableHeader3: "Lontra.ai",
      tableHeader4: "Descrição",
      tableHeader5: "Rev",
      tableRow1Feature: "Precisão (áudio nítido)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Carimbos de data e hora em nível de palavra",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identificação do falante",
      tableRow3NeverCap: "20 alto-falantes",
      tableRow3Otter: "16 alto-falantes",
      tableRow3Descript: "10 alto-falantes",
      tableRow3Rev: "✕",
      tableRow4Feature: "Lida com diafonia",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Limitado",
      tableRow4Descript: "Limitado",
      tableRow4Rev: "✕",
      tableRow5Feature: "Formatação Inteligente",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Básico",
      tableRow6Feature: "12 idiomas a 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Experimente 96% de precisão",
      ctaSubtitle: "Envie seu áudio mais desafiador e veja a diferença",
      finalCta: "Teste nossa precisão agora →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Preços simples e transparentes",
      "highlighted_text": "Sem tampas ocultas",
      "description": "Escolha o plano que se adapta às suas necessidades. Faça upgrade ou downgrade a qualquer momento. Sem contratos, sem surpresas."
    },
    Cards: {
      "title": "Preços simples e transparentes.",
      "highlighted_text": "Sem tampas ocultas.",
      "description": "Escolha o plano que se adapta às suas necessidades. Faça upgrade ou downgrade a qualquer momento. Sem contratos, sem surpresas.",
      "plans": [
            {
              "name": "Livre",
              "price": "$ 0",
              "period": "mês",
              "discount": "Perfeito para experimentar nosso serviço",
              "limits": {
                "title": "Limites Diários",
                "items": [
                  "3 arquivos/dia (≈90 min total/dia)",
                  "Até 30 min por arquivo (≤250 MB)",
                  "Carregar 1 arquivo por vez",
                  "Fila de prioridade padrão"
                ]
              },
              "features": {
                "title": "Características",
                "items": [
                  "Mais de 100 idiomas",
                  "Etiquetas de alto-falantes",
                  "Tradução",
                  "Todos os formatos de exportação"
                ]
              },
              "cta": {
                "text": "Comece grátis. Sem cartão de crédito.",
                "button": "Comece grátis"
              }
            },
            {
              "name": "Pro Mensal",
              "price": "$ 17,99",
              "period": "mês",
              "discount": "US$ 9,99 no primeiro mês",
              "limits": {
                "title": "Sem limite mensal",
                "items": [
                  "Minutos totais ilimitados",
                  "Até 10 horas / 5 GB por arquivo",
                  "Carregar 50 arquivos de uma vez",
                  "Fila de prioridade"
                ]
              },
              "features": {
                "title": "Tudo de graça, mais",
                "items": [
                  "Carimbos de data e hora em nível de palavra",
                  "Identificação avançada de alto-falantes",
                  "Parágrafos formatados e pontuação",
                  "Suporte prioritário"
                ]
              },
              "cta": {
                "text": "Minutos ilimitados. Velocidade prioritária. Uploads em lote.",
                "button": "Vá Pro"
              },
              "badge": "Mais populares"
            },
            {
              "name": "Pro Anual",
              "price": "$ 8,99",
              "period": "mês",
              "discount": "Faturado anualmente $ 107,88",
              "limits": {
                "title": "Igual ao Pro Mensal",
                "items": [
                  "Minutos totais ilimitados",
                  "Até 10 horas / 5 GB por arquivo",
                  "Carregar 50 arquivos de uma vez",
                  "Fila de prioridade"
                ]
              },
              "features": {
                "title": "Tudo de graça, mais",
                "items": [
                  "Carimbos de data e hora em nível de palavra",
                  "Identificação avançada de alto-falantes",
                  "Parágrafos formatados e pontuação",
                  "Suporte prioritário"
                ]
              },
              "cta": {
                "text": "Minutos ilimitados. Velocidade prioritária. Uploads em lote.",
                "button": "Vá Pro"
              },
              "badge": "Melhor valor - Economize 50%"
            }
          ],
      "disclaimer": '"Ilimitado" significa sem limite mensal e sem redução artificial de velocidade. O uso justo se aplica à automação ou redistribuição abusiva.'
    },
    ComparisonTable: {
      "header": {
        "title": "Comparar todos os recursos",
        "highlighted_text": "Todos os recursos",
        "subtitle": "Veja exatamente o que você ganha com cada plano. Sem limitações ocultas."
      },
      "plans": [
              "Características",
              "Livre",
              "Pro Mensal",
              "Pro Anual"
            ],
      "features": [
            {
              "name": "Preço",
              "values": [
                "$ 0/mês",
                {
                  "main": "US$ 17,99/mês",
                  "note": "US$ 9,99 no primeiro mês"
                },
                {
                  "main": "US$ 8,99/mês",
                  "note": "Faturado $ 107,88/ano"
                }
              ]
            },
            {
              "name": "Minutos mensais",
              "values": ["~2.700 (90/dia)", "Ilimitado", "Ilimitado"]
            },
            {
              "name": "Duração máxima do arquivo",
              "values": ["30 minutos", "10 horas", "10 horas"]
            },
            {
              "name": "Tamanho máximo do arquivo",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Uploads em lote",
              "values": ["1 arquivo", "50 arquivos", "50 arquivos"]
            },
            {
              "name": "Velocidade de processamento",
              "values": ["Padrão", "Prioridade", "Prioridade"]
            },
            {
              "name": "Idiomas suportados",
              "values": ["Mais de 100 idiomas", "Mais de 100 idiomas", "Mais de 100 idiomas"]
            },
            {
              "name": "Tradução",
              "values": ["verdadeiro", "verdadeiro", "verdadeiro"]
            },
            {
              "name": "Identificação do falante",
              "values": ["Básico", "Avançado (20 falantes)", "Avançado (20 falantes)"]
            },
            {
              "name": "Carimbos de data e hora em nível de palavra",
              "values": ["falso", "verdadeiro", "verdadeiro"]
            },
            {
              "name": "Parágrafos formatados",
              "values": ["falso", "verdadeiro", "verdadeiro"]
            },
            {
              "name": "Formatos de exportação",
              "values": ["Todos os formatos", "Todos os formatos", "Todos os formatos"]
            },
            {
              "name": "Apoiar",
              "values": ["E-mail", "E-mail prioritário", "E-mail prioritário"]
            },
            {
              "name": "Retenção de dados",
              "values": ["30 dias", "Para sempre", "Para sempre"]
            }
          ]
    },
    FAQ: {
      "title": "Perguntas frequentes",
      "titleHighligt": "Questões",
      "items": [
            {
              "q": "política_ilimitada",
              "question": "É realmente ilimitado?",
              "answer": "Sim! Os planos Pro não têm limite de minutos mensais. Os únicos limites são técnicos: duração máxima de arquivo de 10 horas e tamanho de arquivo de 5 GB. Você pode processar quantos arquivos precisar."
            },
            {
              "q": "mudança_de_plano",
              "question": "Posso mudar de planos a qualquer momento?",
              "answer": "Com certeza! Você pode cancelar sua assinatura a qualquer momento no seu painel. Faça upgrade ou downgrade quando quiser."
            },
            {
              "q": "métodos de pagamento",
              "question": "Quais métodos de pagamento vocês aceitam?",
              "answer": "Aceitamos todos os principais cartões de crédito, cartões de débito e PayPal para pagamentos seguros e sem complicações."
            },
            {
              "q": "teste_gratuito",
              "question": "Existe um teste gratuito para o Pro?",
              "answer": "Sim! Experimente o Pro gratuitamente por 7 dias, sem precisar de cartão de crédito. E mais: ganhe 45% de desconto no primeiro mês ao assinar."
            },
            {
              "q": "retenção de arquivo",
              "question": "Por quanto tempo vocês guardam meus arquivos?",
              "answer": "Plano gratuito: 30 dias. Planos Pro: para sempre! Suas transcrições estarão sempre disponíveis na sua conta."
            },
            {
              "q": "segurança de dados",
              "question": "E quanto à segurança dos dados?",
              "answer": "Temos certificação SOC 2 e usamos criptografia de 256 bits. Nunca usamos seu conteúdo para treinar nossos modelos. Seus dados são seus."
            }
          ]
    },
    CTA: {
      "title": "Pronto para ir sem limites?",
      "subtitle": "Junte-se a mais de 50.000 profissionais que transcrevem sem limites",
      "button": "Experimente NeverCap Grátis →",
      "disclaimer": "Não é necessário cartão de crédito • Comece a transcrever em segundos"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Construído para",
      heavyUsers: "Usuários Pesados",
      whoActuallyNeed: "Quem realmente precisa de ilimitado",
      heroSubtitle: "De podcasters com anos de backlog a pesquisadores com centenas de entrevistas. Veja como profissionais usam NeverCap para se libertar de limites de upload e minutos.",
      podcasters: {
        title: "Podcasters",
        pain: '"Pare de escolher quais episódios merecem transcrições"',
        description: "Carregue todo o arquivo do seu podcast de uma só vez. Gere notas de apresentação, melhore o SEO e reutilize conteúdo sem contar minutos.",
        benefits: {
          benefit1: "Carregue todos os episódios, não apenas 3",
          benefit2: "Gere notas de apresentação otimizadas para SEO",
          benefit3: "Crie arquivos pesquisáveis",
          benefit4: "Reutilize em conteúdo de blog"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Episódios"
          },
          stat2: {
            number: "200 horas",
            label: "Salvo"
          },
          stat3: {
            number: "3x",
            label: "Tráfego SEO"
          }
        }
      },
      journalists: {
        title: "Jornalistas e escritores",
        pain: '"A pressão do prazo encontra as restrições de upload"',
        description: "Carregue todas as entrevistas em lote antes do prazo. Pesquise transcrições instantaneamente e nunca perca uma citação crucial.",
        benefits: {
          benefit1: "Upload em lote antes dos prazos",
          benefit2: "Pesquise todas as entrevistas de uma vez",
          benefit3: "Cotações precisas com carimbos de data e hora",
          benefit4: "Lidar com sotaques e idiomas"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Entrevistas/mês"
          },
          stat2: {
            number: "96%",
            label: "Precisão"
          },
          stat3: {
            number: "5 minutos",
            label: "Por hora"
          }
        }
      },
      contentCreators: {
        title: "Criadores de conteúdo",
        pain: '"Acessibilidade não deve ser cara"',
        description: "Legende todo o seu canal do YouTube. Gere legendas em vários idiomas e melhore o SEO do seu vídeo instantaneamente.",
        benefits: {
          benefit1: "Legende todos os vídeos de uma vez",
          benefit2: "249 traduções de idiomas",
          benefit3: "Arquivos SRT prontos para o YouTube",
          benefit4: "Aumente a classificação de SEO de vídeos"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Vídeos"
          },
          stat2: {
            number: "100+",
            label: "Idiomas"
          },
          stat3: {
            number: "249",
            label: "Traduções"
          }
        }
      },
      researchers: {
        title: "Pesquisadores e Acadêmicos",
        pain: '"Dados qualitativos não devem esperar na fila"',
        description: "Processe estudos de pesquisa inteiros de uma só vez. Realize grupos focais, entrevistas e painéis de discussão com identificação perfeita dos palestrantes.",
        benefits: {
          benefit1: "Grupos de foco de processo em massa",
          benefit2: "Identificação de 20 alto-falantes",
          benefit3: "Exportar para software de análise",
          benefit4: "Segurança compatível com GDPR"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Estudar"
          },
          stat2: {
            number: "96%",
            label: "Precisão do Grupo"
          },
          stat3: {
            number: "RGPD",
            label: "Compatível"
          }
        }
      },
      businessTeams: {
        title: "Equipes de negócios",
        pain: '"As gravações de reuniões devem ser fáceis"',
        description: "Grave reuniões diretamente ou carregue arquivos de áudio para transcrição instantânea. Crie arquivos pesquisáveis a partir de conversas ilimitadas e nunca mais perca discussões importantes.",
        benefits: {
          benefit1: "Gravação e transcrição direta de áudio",
          benefit2: "Gravações ilimitadas de reuniões",
          benefit3: "Arquivo de reuniões pesquisável",
          benefit4: "Carregue arquivos de áudio instantaneamente"
        },
        stats: {
          stat1: {
            number: "Ao vivo",
            label: "Gravação"
          },
          stat2: {
            number: "Instant",
            label: "Carregar"
          },
          stat3: {
            number: "20+",
            label: "Oradores"
          }
        }
      },
      educators: {
        title: "Educadores",
        pain: '"Vídeos do YouTube precisam de transcrição instantânea"',
        description: "Basta colar links do YouTube para obter transcrições instantâneas e legendas geradas automaticamente. Transforme qualquer vídeo educativo em conteúdo acessível e pesquisável.",
        benefits: {
          benefit1: "Transcrição do link direto do YouTube",
          benefit2: "Gerar legendas de vídeo automaticamente",
          benefit3: "Transcrever cursos inteiros",
          benefit4: "Arquivos de palestras pesquisáveis"
        },
        stats: {
          stat1: {
            number: "1-Clique",
            label: "Colar do YouTube"
          },
          stat2: {
            number: "Auto",
            label: "Legendas"
          },
          stat3: {
            number: "100+",
            label: "Idiomas"
          }
        }
      },
      quotes: {
        title: "Usuários reais,",
        titleHighlight: "Liberdade Real",
        subtitle: "Ouça depoimentos de profissionais que se libertaram de limites artificiais",
        testimonials: {
          mike: {
            textBefore: '"Eu tive',
            highlight: "3 anos de episódios",
            textAfter: 'sentado sem transcrição. Otter queria que eu escolhesse 3. TRÊS. NeverCap deixe-me enviar todos os 150 episódios em um fim de semana."',
            name: "Mike Rodríguez",
            role: "Apresentador de podcast"
          },
          jessica: {
            textBefore: "“Como jornalista freelancer, não posso pagar o Trint’s",
            highlight: "US$ 100/mês",
            textAfter: ', mas também não consigo trabalhar com o limite de 10 arquivos por mês do Otter. NeverCap salvou minha carreira."',
            name: "Jessica Park",
            role: "Jornalista freelancer"
          },
          sarah: {
            textBefore: "“Nossa equipe de pesquisa teve",
            highlight: "200 horas",
            textAfter: 'de gravações de grupos focais. Processamos tudo em um fim de semana, em vez de racionar minutos mensais."',
            name: "Dra. Sarah Chen",
            role: "Pesquisador Líder"
          },
          carlos: {
            textBefore: "“Eu crio conteúdo educacional em espanhol. NeverCap transcreve perfeitamente e",
            highlight: "traduz para o inglês",
            textAfter: 'para um alcance maior. Sem limites, apenas crescimento."',
            name: "Carlos Martínez",
            role: "Educador do YouTube"
          }
        }
      },
      industries: {
        title: "Confiável em todos os lugares",
        titleHighlight: "Indústrias",
        subtitle: "Profissionais em todos os lugares estão migrando para oportunidades verdadeiramente ilimitadas",
        list: {
          media: "Mídia e Publicação",
          education: "Educação",
          healthcare: "Assistência médica",
          technology: "Tecnologia",
          finance: "Financiar",
          legal: "Jurídico"
        }
      },
      cta: {
        title: "Seu caso de uso também precisa de algo ilimitado",
        subtitle: "Junte-se a mais de 50.000 profissionais que pararam de contar minutos e começaram a criar",
        button: "Comece sua jornada ilimitada →"
      }
    },
    Podcasters: {
      badge: "🎙️ Construído para Podcasters",
      heroTitle: "Transcreva seu",
      heroTitleHighlight: "Arquivo de podcast completo",
      heroSubtitle: "Carregue todo o seu catálogo. Crie notas de apresentação para cada episódio. Chega de escolher quais episódios transcrever. Processe 50 episódios de uma só vez, ilimitadas vezes por mês.",
      ctaPrimary: "Comece a transcrever gratuitamente",
      ctaSecondary: "Veja como funciona",
      trustBadge1: "🎙️ Mais de 10.000 podcasters",
      trustBadge2: "∞ Episódios ilimitados",
      trustBadge3: "📝 Transcrições prontas para SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Episódios/Mês"
        },
        stat2: {
          number: "50",
          label: "Upload em lote"
        },
        stat3: {
          number: "10 horas",
          label: "Duração máxima do episódio"
        },
        stat4: {
          number: "96%",
          label: "Precisão"
        }
      },
      problemTitle: "O",
      problemTitleHighlight: "Problema de transcrição de podcast",
      problemSubtitle: 'Outros serviços fazem você escolher quais episódios "valem a pena" transcrever',
      problems: {
        problem1: {
          title: "Limites de upload eliminam arquivos",
          description: "O Otter oferece 3 importações vitalícias gratuitas e 10 por mês na versão Pro. Como transcrever 3 anos de episódios?"
        },
        problem2: {
          title: "Oportunidades de SEO perdidas",
          description: "Cada episódio não transcrito representa perda de tráfego de SEO. Mas o Descript limita você a, no máximo, 30 horas/mês."
        },
        problem3: {
          title: "Os custos explodem com o crescimento",
          description: "À medida que seu podcast cresce, os custos de transcrição disparam. Taxas extras de US$ 2/hora tornam o dimensionamento impossível."
        }
      },
      solutionTitle: "O",
      solutionTitleHighlight: "NeverCap Solução",
      solutionDescription: "Transcrição verdadeiramente ilimitada. Carregue todo o seu arquivo. Transcreva todos os episódios. Gere notas de programa em escala. Sem limites, sem limites, apenas crescimento.",
      workflowTitle: "Seu fluxo de trabalho de podcast,",
      workflowTitleHighlight: "Simplificado",
      workflowSubtitle: "Da gravação às notas de show otimizadas para SEO em minutos",
      workflow: {
        step1: {
          title: "Carregar episódios",
          description: "Grave 50 episódios de uma só vez. MP3, MP4, WAV — nós cuidamos de todos eles."
        },
        step2: {
          title: "Transcrições de IA",
          description: "96% de precisão na identificação do locutor. Perfeito para entrevistas."
        },
        step3: {
          title: "Formatação Inteligente",
          description: "A IA adiciona parágrafos, frases e pontuação automaticamente."
        },
        step4: {
          title: "Publicar e classificar",
          description: "Exporte para o seu site. Veja seu tráfego de SEO crescer."
        }
      },
      featuresTitle: "Recursos Podcasters",
      featuresTitleHighlight: "Na verdade preciso",
      featuresSubtitle: "Construído por podcasters, para podcasters",
      features: {
        feature1: {
          title: "Detecção de vários alto-falantes",
          description: "Identifica e rotula automaticamente até 20 palestrantes. Perfeito para painéis de discussão, entrevistas e programas coapresentados."
        },
        feature2: {
          title: "Capítulos de carimbo de data/hora",
          description: "Gere carimbos de data/hora clicáveis para descrições do YouTube. Permita que os ouvintes acessem seus segmentos favoritos instantaneamente."
        },
        feature3: {
          title: "Formatação Inteligente",
          description: "Adicione parágrafos, frases e pontuação automaticamente. Obtenha transcrições limpas e legíveis. Economize horas na pós-produção."
        },
        feature4: {
          title: "Otimização de SEO",
          description: "Transcrições formatadas para mecanismos de busca. Aumente a visibilidade do seu podcast e alcance novos públicos."
        },
        feature5: {
          title: "Mais de 100 idiomas",
          description: "Transcreva em qualquer idioma. Traduza para mais de 249 idiomas. Alcance públicos globais sem esforço."
        },
        feature6: {
          title: "Processamento em lote",
          description: "Carregue 50 episódios antes de dormir. Acorde para terminar as transcrições. Processe todo o seu arquivo durante a noite."
        }
      },
      testimonialsTitle: "Podcasters que fizeram",
      testimonialsTitleHighlight: "O interruptor",
      testimonialsSubtitle: "Histórias reais de podcasters reais",
      testimonials: {
        mike: {
          text: '"Estou fazendo um podcast há 3 anos e transcrevia tudo manualmente, feito um idiota. Enviei 6 episódios de uma vez e isso me separou perfeitamente do meu coapresentador. O episódio da cafeteria que eu achei que estava arruinado? Transcrição cristalina. Nunca mais vou voltar a digitar isso sozinho."',
          name: "Mike Rodríguez",
          role: 'Apresentador do podcast "The Daily Grind"'
        },
        sarah: {
          text: '"A Otter estava me limitando a 10 importações de arquivos por mês. Tenho 150 episódios acumulados. NeverCap me permite enviar tudo em 3 lotes. Meu tráfego orgânico aumentou 300% desde que adicionei transcrições a episódios antigos. Isso literalmente se paga sozinho."',
          name: "Sarah Chen",
          role: 'Criador do "Tech Talks Today"'
        }
      },
      comparisonTitle: "Por que os podcasters escolhem",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Veja como nos comparamos à concorrência",
      comparison: {
        headers: {
          feature: "Recurso",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Criador de descrição"
        },
        rows: {
          monthlyLimit: {
            feature: "Limite de episódios mensais",
            nevercap: "Ilimitado",
            otter: "~13 episódios (1200 min)",
            descript: "~30 episódios (30 horas)"
          },
          uploadLimit: {
            feature: "Limite de upload de arquivo",
            nevercap: "Ilimitado",
            otter: "10 por mês",
            descript: "1 de cada vez"
          },
          batchProcessing: {
            feature: "Processamento em lote",
            nevercap: "50 arquivos",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Duração máxima do episódio",
            nevercap: "10 horas",
            otter: "90 minutos",
            descript: "Ilimitado"
          },
          speakerDetection: {
            feature: "Detecção de alto-falante",
            nevercap: "20 alto-falantes",
            otter: "16 alto-falantes",
            descript: "10 alto-falantes"
          },
          smartFormatting: {
            feature: "Formatação Inteligente",
            nevercap: "✓ Perfeito",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Preço",
            nevercap: "US$ 17,99/mês",
            otter: "US$ 16,99/mês",
            descript: "US$ 30/mês"
          }
        }
      },
      ctaTitle: "Comece a transcrever cada episódio",
      ctaSubtitle: "Junte-se a mais de 10.000 podcasters que nunca se preocupam com limites",
      ctaButton: "Envie seus primeiros 50 episódios grátis →",
      ctaDisclaimer: "Não é necessário cartão de crédito • Processe episódios ilimitados • Cancele a qualquer momento"
    },
    Journalists: {
      hero: {
        badge: "📰 Para jornalistas e escritores",
        title: "Transcreva todas as entrevistas.",
        titleHighlight: "Nunca perca uma citação.",
        subtitle: "Pare de escolher quais entrevistas merecem transcrição. Carregue todas as gravações de uma só vez, pesquise tudo instantaneamente e cumpra seus prazos sem a ansiedade de upload.",
        ctaPrimary: "Iniciar uploads ilimitados →",
        ctaSecondary: "Veja como funciona",
        stats: {
          uploads: {
            number: "∞",
            label: "Uploads de arquivos"
          },
          accuracy: {
            number: "96%",
            label: "Precisão"
          },
          speed: {
            number: "5 minutos",
            label: "Por hora"
          }
        },
        dashboard: {
          title: "Fila de entrevista",
          status: "• Todo o processamento",
          interviews: {
            cityCouncil: {
              title: "Reunião do Conselho Municipal",
              duration: "2h 15min • Carregando...",
              action: "Processamento"
            },
            expertInterview: {
              title: "Entrevista com especialista - Dr. Chen",
              duration: "45min • Transcrevendo...",
              action: "96% concluído"
            },
            pressConference: {
              title: "Conferência de imprensa",
              duration: "1h 30min • Pronto",
              action: "Ver →"
            },
            phoneInterview: {
              title: "Entrevista por telefone - Fonte",
              duration: "35min • Pronto",
              action: "Ver →"
            }
          }
        }
      },
      problem: {
        title: "O",
        titleHighlight: "Problema de transcrição de jornalista",
        subtitle: 'Outros serviços fazem você escolher quais entrevistas "valem a pena" transcrever',
        problems: {
          uploadLimits: {
            title: "Limites de upload matam investigações",
            description: "O Otter oferece 10 importações de arquivos por mês no Pro. Como transcrever 3 semanas de entrevistas investigativas?"
          },
          missingQuotes: {
            title: "Citações Cruciais Faltando",
            description: "Cada entrevista não transcrita poderia conter a citação principal da matéria. Mas Trint limita você a, no máximo, 50 horas/mês."
          },
          costExplosion: {
            title: "Os custos explodem com os prazos",
            description: "À medida que sua investigação se aprofunda, os custos de transcrição disparam. Taxas extras de US$ 100/mês tornam notícias de última hora impossíveis."
          }
        },
        solution: {
          title: "O",
          titleHighlight: "NeverCap Solução",
          description: "Transcrição verdadeiramente ilimitada. Envie toda a sua investigação. Transcreva todas as entrevistas. Pesquise todas as citações instantaneamente. Sem maiúsculas, sem limites, apenas jornalismo."
        }
      },
      solution: {
        title: "Finalmente,",
        titleHighlight: "Verdadeira Liberdade",
        titleSuffix: "para jornalistas",
        subtitle: "Carregue tudo. Transcreva tudo. Pesquise tudo.",
        solutions: {
          unlimitedUploads: {
            label: "Uploads ilimitados",
            title: "Carregue em lote toda a sua investigação",
            description: "Chega de escolher quais entrevistas transcrever. Carregue 50 arquivos de uma só vez. Processe meses de gravações da noite para o dia. Toda a sua investigação transcrita.",
            points: {
              simultaneousUpload: "Carregar 50 arquivos simultaneamente",
              noLimits: "Sem limites de upload mensais",
              processWhileWrite: "Processe enquanto escreve",
              longRecordings: "Gravações de 10 horas suportadas"
            },
            visual: {
              number: "50",
              label: "Arquivos de uma vez"
            }
          },
          instantSearch: {
            label: "Pesquisa instantânea",
            title: "Encontre qualquer cotação em segundos",
            description: "Pesquise em todas as suas transcrições instantaneamente. Encontre aquela citação perfeita de três meses atrás. Nunca mais perca declarações importantes em suas anotações.",
            points: {
              searchAll: "Pesquisar em todas as entrevistas",
              wordTimestamps: "Carimbos de data e hora em nível de palavra",
              jumpToMoments: "Ir para momentos exatos",
              exportCitations: "Exportar com citações"
            },
            searchDemo: {
              placeholder: "declaração de política climática",
              resultsText: "Encontrado em 4 entrevistas:",
              results: {
                mayorInterview: '"...nossa política climática irá transformar..."',
                expertPanel: '"...a declaração de política mostra claramente..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Precisão profissional",
            title: "96% de precisão que você pode citar",
            description: "Obtenha transcrições tão precisas que você pode citá-las diretamente. Lida com sotaques, termos técnicos e conversas rápidas. Formatação perfeita e realmente legível.",
            points: {
              accuracyGuarantee: "Garantia de precisão de 96%",
              handlesAccents: "Lida com sotaques e dialetos",
              smartPunctuation: "Pontuação e parágrafos inteligentes",
              speakerIdentification: "Identificação do falante"
            },
            visual: {
              accuracy: "96%",
              label: "Taxa de precisão",
              transcript: {
                speaker1: '"A investigação revelou discrepâncias significativas nos relatórios financeiros."',
                speaker2: '"Você pode explicar melhor essas discrepâncias específicas?"'
              }
            }
          }
        }
      },
      features: {
        title: "Tudo um",
        titleHighlight: "Necessidades do Jornalista",
        subtitle: "Ferramentas profissionais que respeitam seu fluxo de trabalho",
        featuresList: {
          languages: {
            title: "Mais de 100 idiomas",
            description: "Entreviste fontes globalmente em 12 idiomas principais com 96% de precisão."
          },
          exportFormats: {
            title: "Formatos de exportação",
            description: "Word, PDF, SRT, TXT. Compatível com qualquer fluxo de trabalho."
          },
          sourceProtection: {
            title: "Proteção de fonte",
            description: "Criptografia em nível bancário. Suas fontes permanecem confidenciais."
          },
          timestamps: {
            title: "Carimbos de data e hora",
            description: "Clique em qualquer citação para pular para o momento exato do áudio."
          },
          teamSharing: {
            title: "Compartilhamento de equipe",
            description: "Colabore com editores. Compartilhe transcrições com segurança."
          },
          mobileReady: {
            title: "Pronto para dispositivos móveis",
            description: "Carregue do celular. Revise as transcrições em qualquer lugar."
          },
          smartFormatting: {
            title: "Formatação Inteligente",
            description: "Parágrafos e pontuação automáticos para transcrições legíveis."
          },
          batchProcessing: {
            title: "Processamento em lote",
            description: "Carregue 50 arquivos de uma só vez. Processe durante a noite enquanto você dorme."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Fiquei 3 anos sem entrevistas transcritas por causa dos limites de upload. NeverCap me deixou processar tudo em um fim de semana. Uma mudança radical.",
          name: "Jessica Park",
          role: "Jornalista freelancer, ex-usuário do Otter"
        }
      },
      cta: {
        title: "Comece a transcrever",
        titleHighlight: "Sem Limites",
        subtitle: "Junte-se a milhares de jornalistas que pararam de contar os uploads e começaram a se concentrar nas histórias",
        ctaPrimary: "Experimente ilimitado grátis →",
        ctaSecondary: "Ver preços"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Para criadores de conteúdo",
        title: "Legenda sua",
        titleHighlight: "Canal inteiro",
        titleSuffix: "Sem Contar Minutos",
        subtitle: "Pare de escolher quais vídeos merecem legendas. Processe toda a sua biblioteca do YouTube, gere legendas em mais de 100 idiomas e baixe vídeos diretamente de qualquer plataforma. Sem limites mensais, sem restrições de upload – pura liberdade criativa.",
        ctaPrimary: "Iniciar legendas ilimitadas →",
        ctaSecondary: "Veja como funciona",
        stats: {
          videos: {
            number: "∞",
            label: "Vídeos/Mês"
          },
          languages: {
            number: "100+",
            label: "Idiomas"
          },
          accuracy: {
            number: "96%",
            label: "Precisão"
          },
          platforms: {
            number: "10+",
            label: "Plataformas"
          }
        }
      },
      platforms: {
        title: "Busque e transcreva de qualquer plataforma",
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
        title: "Tudo o que você precisa",
        titleHighlight: "Conteúdo de escala",
        subtitle: "Ferramentas profissionais sem limites profissionais",
        oneClickImport: {
          label: "Importação com um clique",
          title: "Colar link.",
          titleHighlight: "Obter transcrição.",
          description: "Chega de baixar e postar novamente. Basta colar seu link do YouTube, TikTok ou Instagram e obter transcrições instantâneas. Processe todo o backlog do seu canal em um fim de semana.",
          points: {
            directYoutube: "Transcrição do link direto do YouTube",
            multiplePlatforms: "Busque em mais de 10 plataformas",
            batchPlaylists: "Processar em lote playlists inteiras",
            autoSync: "Sincronização automática com seus canais"
          },
          demo: {
            instruction: "Cole a URL do seu vídeo:",
            url: "https://youtube.com/watch?v=...",
            status: "Buscando e transcrevendo..."
          }
        },
        globalReach: {
          label: "Alcance global",
          title: "Mais de 100 idiomas.",
          titleHighlight: "Limites Zero.",
          description: "Alcance públicos globais com tradução automática para mais de 100 idiomas. Gere legendas em vários idiomas simultaneamente. Sem custos adicionais nem limites mensais para traduções.",
          points: {
            highAccuracy: "96% de precisão em 12 idiomas principais",
            unlimitedTranslations: "Traduções ilimitadas incluídas",
            multicultural: "Perfeito para conteúdo multicultural",
            autoDetect: "Detecção automática do idioma de origem"
          },
          visual: {
            number: "100+",
            title: "Idiomas suportados",
            subtitle: "Traduza uma vez, alcance todos"
          }
        },
        flexibleExport: {
          label: "Exportação Flexível",
          title: "Todos os formatos",
          titleHighlight: "Você precisa",
          description: "Exporte no formato que melhor se adapta ao seu fluxo de trabalho. De arquivos SRT para o YouTube a VTT para web players, ou documentos editáveis para scripts. Exportações ilimitadas, tudo incluído em todos os planos.",
          points: {
            videoFormats: "SRT e VTT para plataformas de vídeo",
            editingFormats: "DOCX e PDF para edição",
            dataAnalysis: "CSV para análise de dados",
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
        title: "Do Upload para",
        titleHighlight: "Publicado",
        titleSuffix: "em minutos",
        subtitle: "A maneira mais rápida de legendar toda a sua biblioteca de conteúdo",
        steps: {
          pasteLinks: {
            title: "Colar links",
            description: "Insira um link do YouTube, TikTok ou qualquer vídeo. Ou envie os arquivos diretamente."
          },
          autoTranscribe: {
            title: "Transcrição automática",
            description: "Processamento de IA com 96% de precisão. Processa sotaques e múltiplos falantes."
          },
          editTranslate: {
            title: "Editar e traduzir",
            description: "Aperfeiçoe suas legendas. Traduza para mais de 100 idiomas instantaneamente."
          },
          exportPublish: {
            title: "Exportar e publicar",
            description: "Baixe em qualquer formato. Envie para sua plataforma. Pronto!"
          }
        }
      },
      testimonials: {
        title: "Os criadores são",
        titleHighlight: "Troca diária",
        subtitle: "De planos limitados à liberdade ilimitada",
        carlos: {
          textBefore: "Eu faço conteúdo educacional em espanhol. NeverCap transcreve perfeitamente e",
          textAfter: "Para um alcance maior. Sem limites, apenas crescimento. As visualizações do meu canal triplicaram depois de adicionar legendas multilíngues.",
          highlight: "traduz para o inglês",
          name: "Carlos Martínez",
          role: "Educador do YouTube • 250 mil inscritos"
        },
        sarah: {
          textBefore: "Descrição desejada $ 30/mês por",
          textAfter: "Tenho mais de 500 vídeos acumulados. NeverCap me permitiu processar tudo em um fim de semana. O aumento de SEO com as legendas se pagou no primeiro mês.",
          highlight: "30 horas",
          name: "Sarah Lee",
          role: "Vlogger de estilo de vida • 180 mil inscritos"
        },
        jake: {
          textBefore: "O",
          textAfter: "O recurso é revolucionário. Não preciso mais baixar nada. Só colar, transcrever e pronto. Processar meus clipes de podcast para o TikTok nunca foi tão fácil.",
          highlight: "busca direta no YouTube",
          name: "Jake Wilson",
          role: "Apresentador de podcast • Criador Top 1%"
        },
        yuki: {
          textBefore: "Crio conteúdo em 5 idiomas. Outros serviços são cobrados",
          textAfter: ". NeverCap me oferece traduções ilimitadas. Meu público internacional cresceu 400% desde que comecei a usar legendas nativas adequadas.",
          highlight: "por tradução",
          name: "Yuki Tanaka",
          role: "Criador de jogos • 500 mil inscritos"
        }
      },
      cta: {
        title: "Seu canal inteiro. Legendado. Hoje.",
        subtitle: "Junte-se a mais de 50.000 criadores que pararam de contar minutos e começaram a criar",
        button: "Iniciar legendas ilimitadas →"
      }
    },
    Researchers: {
      heroBadge: "Construído para Excelência Acadêmica",
      heroTitle1: "Transcreva todas as entrevistas.",
      heroTitle2: "Analise todos os seus dados.",
      heroSubtitle: "Pare de escolher quais grupos focais transcrever. Processe todos os seus dados qualitativos com 96% de precisão e identificação impecável dos falantes — mesmo com 20 participantes falando uns sobre os outros.",
      heroCtaPrimary: "Experimente grátis - sem cartão de crédito",
      heroCtaSecondary: "Veja como funciona",
      statsInterviewHours: "Horário de entrevista",
      statsAccuracy: "Precisão",
      statsSpeakersId: "ID dos alto-falantes",
      statsCompliant: "Compatível",
      problemTitle: "O Problema da Transcrição da Pesquisa",
      problemSubtitle: 'Outros serviços fazem você escolher quais dados "valem a pena" transcrever',
      problemCard1Title: "Limites de upload matam estudos",
      problemCard1Desc: "O Otter oferece 3 importações vitalícias. Como transcrever 200 horas de grupos focais?",
      problemCard2Title: "Dados Críticos Faltantes",
      problemCard2Desc: "Cada entrevista não transcrita pode conter insights inovadores. Mas a Rev cobra um mínimo de US$ 2 por minuto.",
      problemCard3Title: "O dinheiro da doação desaparece",
      problemCard3Desc: "À medida que seu conjunto de dados cresce, os custos de transcrição explodem. US$ 500 por grupo focal torna o dimensionamento impossível.",
      solutionTitle: "A solução NeverCap",
      solutionDesc: "Transcrição verdadeiramente ilimitada. Envie todo o seu estudo. Transcreva todas as entrevistas. Analise todos os seus dados. Sem limites, sem limites, apenas pesquisa.",
      feature1Label: "Sem limites",
      feature1Title: "Processe todo o seu estudo de uma só vez",
      feature1Desc: 'Carregue todas as 200 horas de entrevistas hoje à noite. Acorde com transcrições completas e pesquisáveis. Sem limites mensais, sem limites por arquivo, sem besteiras de "uso justo".',
      feature1Point1: "Carregar 50 arquivos em lote simultaneamente",
      feature1Point2: "Processar completamente os estudos longitudinais",
      feature1Point3: "Sem limites de armazenamento para transcrições",
      feature1Point4: "Exportar para NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Horas ilimitadas",
      feature1Visual2: "Mesmo preço para 10 ou 10.000 horas",
      feature2Label: "IA inteligente",
      feature2Title: "Grupos de foco em unhas sempre",
      feature2Desc: "Nossa IA monitora até 20 interlocutores, mesmo quando estão falando uns sobre os outros, interrompendo-se ou todos interagindo ao mesmo tempo. Cada voz é capturada e identificada corretamente.",
      feature2Point1: "Identificação de 20 alto-falantes",
      feature2Point2: "Lida com diafonia e interrupções",
      feature2Point3: "Etiquetas de alto-falantes que você pode renomear",
      feature2Point4: "Carimbo de data e hora para cada palavra",
      conversationParticipant1: "Participante 1",
      conversationText1: "A principal barreira que enfrentamos é definitivamente o custo do tratamento...",
      conversationParticipant2: "Participante 2",
      conversationText2: "Com certeza, mas eu acrescentaria que o acesso é—",
      conversationParticipant3: "Participante 3",
      conversationText3: "—Desculpe interromper, mas o transporte também é muito importante.",
      conversationText4: "Sim! Era exatamente isso que eu ia dizer.",
      conversationParticipant4: "Participante 4",
      conversationText5: "Nas áreas rurais, são todos os três: custo, acesso E transporte.",
      feature3Label: "Precisão",
      feature3Title: "96% de precisão que se mantém",
      feature3Desc: "Lida com jargões técnicos, sotaques carregados e terminologia específica da área como um profissional. Precisão suficiente para publicação, revisão por pares e para sua banca examinadora de dissertação.",
      feature3Point1: "Terminologia médica e científica",
      feature3Point2: "Mais de 100 idiomas e dialetos",
      feature3Point3: "Modos de leitura literal e limpa",
      feature3Point4: "Edite e exporte em qualquer formato",
      feature3Visual1: "Precisão de nível de pesquisa",
      feature3Visual2: "Mais de 50.000 pesquisadores confiam em você",
      feature4Label: "Segurança",
      feature4Title: "Segurança pronta para IRB",
      feature4Desc: "Seus dados confidenciais de pesquisa são protegidos com segurança de nível empresarial. Compatível com GDPR, opções prontas para HIPAA e trilhas de auditoria completas para atender aos requisitos do IRB.",
      feature4Point1: "Criptografia de ponta a ponta",
      feature4Point2: "Em conformidade com GDPR e CCPA",
      feature4Point3: "Políticas de exclusão automática",
      feature4Point4: "Colaboração segura da equipe",
      useCasesTitle: "Perfeito para todos os métodos de pesquisa",
      useCasesSubtitle: "Da etnografia aos ensaios clínicos",
      useCase1Title: "Grupos de Foco",
      useCase1Desc: "Lide com 8 a 20 participantes com falas sobrepostas. Identificação perfeita dos oradores, mesmo durante discussões acaloradas. Exporte diretamente para um software de análise qualitativa.",
      useCase2Title: "Entrevistas em profundidade",
      useCase2Desc: "Processe centenas de entrevistas individuais simultaneamente. Mantenha a consistência em todo o seu conjunto de dados. Pesquise em todas as transcrições instantaneamente.",
      useCase3Title: "Pesquisa Clínica",
      useCase3Desc: "Opções compatíveis com a HIPAA para entrevistas com pacientes. Transcrição precisa de terminologia médica. Manuseio seguro de dados de saúde sensíveis.",
      useCase4Title: "Estudos Etnográficos",
      useCase4Desc: "Gravações de campo em ambientes naturais. Suporta ruído de fundo e múltiplos interlocutores. Suporte para mais de 100 idiomas e dialetos.",
      useCase5Title: "Projetos de História Oral",
      useCase5Desc: "Preserve arquivos inteiros sem limites. Crie registros históricos pesquisáveis. Perfeito para estudos longitudinais e geracionais.",
      useCase6Title: "Pesquisa de Dissertação",
      useCase6Desc: "Preços acessíveis para estudantes com todos os recursos. Processe todo o seu conjunto de dados de forma acessível. Cumpra prazos apertados com processamento em lote.",
      testimonialTitle: "Confiável por pesquisadores líderes",
      testimonialText: "Nossa equipe de pesquisa tinha 200 horas de gravações de grupos focais do nosso estudo de saúde comunitária. Outros serviços queriam que selecionássemos quais sessões transcrever devido ao custo. NeverCap nos permitiu processar tudo em um fim de semana. A identificação de 20 participantes realmente funcionou — mesmo durante nossas discussões mais confusas, em que todos falavam ao mesmo tempo. Esta ferramenta mudou completamente a forma como lidamos com dados qualitativos.",
      testimonialAuthorName: "Dra. Sarah Chen",
      testimonialAuthorRole: "Pesquisador Principal, Instituto de Saúde Pública",
      ctaTitle: "Pare de escolher quais dados analisar",
      ctaSubtitle: "Junte-se a mais de 50.000 pesquisadores que transcrevem tudo",
      ctaButton: "Experimente NeverCap grátis"
    },
    BusinessTeams: {
      heroBadge: "Para equipes empresariais",
      heroTitle1: "Gravação da reunião feita",
      heroTitle2: "Sem esforço",
      heroSubtitle: "Grave reuniões diretamente no seu navegador ou carregue arquivos de áudio instantaneamente. Crie arquivos pesquisáveis a partir de conversas ilimitadas. Nunca mais perca discussões importantes com transcrições verdadeiramente ilimitadas.",
      heroCtaPrimary: "Comece a gravar agora →",
      heroCtaSecondary: "Veja como funciona",
      recordingStatus: "Gravação...",
      statsMeetingMinutes: "Ata da Reunião",
      statsLiveRecording: "Gravação ao vivo",
      statsSpeakerID: "ID do alto-falante",
      statsInstantUpload: "Upload e processamento instantâneos",
      featuresTitle: "Tudo o que as equipes precisam para capturar conhecimento",
      featuresSubtitle: "Da gravação ao vivo aos uploads instantâneos, eliminamos todos os pontos de atrito",
      feature1Title: "Grave diretamente no seu navegador",
      feature1Desc: "Sem downloads, sem plugins. Comece a gravar instantaneamente com um clique. Qualidade de áudio perfeita, detecção automática de locutores e transcrição em tempo real enquanto você fala.",
      feature1Benefit1: "Início da gravação com um clique",
      feature1Benefit2: "Nenhuma instalação de software",
      feature1Benefit3: "Funciona em qualquer dispositivo",
      feature1Benefit4: "Transcrição em tempo real",
      feature1Visual1: "Clique e grave",
      feature1Visual2: "Nenhuma configuração necessária",
      feature2Title: "Carregue qualquer arquivo de áudio instantaneamente",
      feature2Desc: "Tem gravações do Zoom, do Teams ou do seu celular? Envie-as instantaneamente. Suporte para todos os principais formatos de áudio e vídeo. Processe vários arquivos simultaneamente sem espera.",
      feature2Benefit1: "Suporta: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Capacidade de upload em lote",
      feature2Benefit3: "Arquivos de 10 horas suportados",
      feature2Benefit4: "Processe enquanto trabalha",
      feature2Visual1: "Arrastar e soltar arquivos",
      feature3Title: "Construído para colaboração em equipe",
      feature3Desc: "Compartilhe transcrições com sua equipe instantaneamente. Ouçam as gravações juntos, exportem as transcrições em vários formatos e garantam que todos estejam alinhados com os arquivos de reunião pesquisáveis.",
      feature3Benefit1: "Compartilhe transcrições com qualquer pessoa",
      feature3Benefit2: "Ouça gravações originais",
      feature3Benefit3: "Exportar transcrições em vários formatos",
      feature3Benefit4: "Arquivos pesquisáveis para toda a equipe",
      feature3Visual1: "Membros da equipe",
      feature3Visual2: "Colaboração ilimitada",
      feature4Title: "Encontre qualquer conversa instantaneamente",
      feature4Desc: "Pesquise em todas as suas reuniões de uma só vez. Encontre aquela decisão crucial do último trimestre ou aquela necessidade do cliente de meses atrás. A busca com inteligência artificial entende o contexto, não apenas palavras-chave.",
      feature4Benefit1: "Pesquisar todas as reuniões de uma vez",
      feature4Benefit2: "A IA entende o contexto",
      feature4Benefit3: "Filtrar por palestrante ou data",
      feature4SearchPlaceholder: "🔍 Pesquisar: 'Metas de receita para o 4º trimestre'",
      feature4SearchResults: "Encontrado em 3 reuniões:",
      feature4Meeting1: "Planejamento de Vendas - 15 de outubro",
      feature4Meeting1Text: '"...metas para o quarto trimestre definidas em US$ 2 milhões..."',
      feature4Meeting2: "Reunião do Conselho - Out 20",
      feature4Meeting2Text: '"...projeções de receita do 4º trimestre..."',
      workflowTitle: "Da gravação aos insights acionáveis",
      workflowSubtitle: "Um fluxo de trabalho perfeito que captura cada momento importante",
      workflowStep1Title: "Gravar ou carregar",
      workflowStep1Desc: "Comece a gravar ao vivo ou carregue arquivos de áudio existentes",
      workflowStep2Title: "Transcrição automática",
      workflowStep2Desc: "A IA transcreve com 96% de precisão em minutos",
      workflowStep3Title: "Colaborar",
      workflowStep3Desc: "Compartilhe, comente e extraia itens de ação",
      workflowStep4Title: "Pesquisar e Analisar",
      workflowStep4Desc: "Encontre insights sobre todas as suas reuniões",
      testimonialsTitle: "Times Amam NeverCap",
      testimonialsSubtitle: "Veja como as empresas transformam sua cultura de reuniões",
      testimonial1Text: '"Passamos de detalhes cruciais perdidos para um arquivo pesquisável de cada conversa. O recurso de gravação direta significa que nunca esquecemos de registrar discussões importantes."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Gerente de Produto, TechCorp",
      testimonial2Text: '"A Otter nos limitou a 10 uploads de arquivos por mês. Agora, enviamos todas as chamadas dos nossos clientes instantaneamente. Uma mudança radical para o acompanhamento da nossa equipe de vendas."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Diretor de Vendas, ConsultPro",
      testimonial3Text: '"A capacidade de pesquisar em meses de reuniões nos salvou durante nossa auditoria. Encontramos todas as decisões e aprovações em segundos."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Pare de perder conversas importantes",
      ctaSubtitle: "Junte-se a milhares de equipes que capturam todas as reuniões com transcrição ilimitada",
      ctaButton: "Comece a gravar gratuitamente →"
    },
    Educators: {
      heroBadge: "Para educadores e professores",
      heroTitle1: "Transforme qualquer vídeo educacional em",
      heroTitle2: "Conteúdo acessível",
      heroSubtitle: "Basta colar links do YouTube para obter transcrições instantâneas com legendas geradas automaticamente. Transforme aulas, tutoriais e vídeos educativos em conteúdo pesquisável e acessível, com o qual todos os alunos podem aprender.",
      heroCtaPrimary: "Experimente grátis - sem cartão de crédito",
      heroCtaSecondary: "Assistir demonstração",
      stats1Number: "1-Clique",
      stats1Label: "Transcrição do YouTube",
      stats2Number: "100+",
      stats2Label: "Idiomas suportados",
      stats3Number: "∞",
      stats3Label: "Vídeos ilimitados",
      stats4Number: "96%",
      stats4Label: "Taxa de precisão",
      featuresTitle: "Tudo o que os educadores precisam para transcrição de vídeos",
      featuresSubtitle: "De palestras do YouTube a aulas gravadas, torne todo o seu conteúdo acessível",
      feature1Title: "Links instantâneos do YouTube e da plataforma",
      feature1Desc: "Basta colar qualquer link de vídeo e obter transcrições instantâneas. Funciona com YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive e muito mais. Sem download, sem espera.",
      feature1Point1: "Transcrição de link direto - não é necessário fazer download",
      feature1Point2: "Suporte para todas as principais plataformas",
      feature1Point3: "Processe playlists inteiras de uma só vez",
      feature1Point4: "Trabalha com vídeos privados (com permissão)",
      feature2Title: "Geração automática de legendas e subtítulos",
      feature2Desc: "Crie legendas precisas instantaneamente para todos os seus vídeos educativos. Torne o conteúdo acessível para alunos com deficiência auditiva, falantes não nativos ou aqueles que preferem ler junto.",
      feature2Point1: "Formatos de exportação SRT, VTT e TXT",
      feature2Point2: "Carimbos de data e hora em nível de palavra para sincronização perfeita",
      feature2Point3: "Edite e personalize legendas facilmente",
      feature2Point4: "Carregar diretamente de volta para o YouTube",
      feature2Visual1: "Traduções de idiomas",
      feature2Visual2: "Torne seu conteúdo globalmente acessível",
      feature3Title: "Organizar por cursos e categorias",
      feature3Desc: "Crie pastas para organizar suas transcrições por curso, disciplina ou semestre. Mantenha todo o seu conteúdo educacional categorizado e facilmente pesquisável. Crie uma biblioteca abrangente de materiais de curso acessíveis.",
      feature3Point1: "Crie pastas e subpastas ilimitadas",
      feature3Point2: "Marque vídeos por tópico ou nível de dificuldade",
      feature3Point3: "Organize várias transcrições em massa",
      feature3Point4: "Pesquise todo o seu conteúdo instantaneamente",
      feature3VisualTitle: "Sua biblioteca de cursos",
      feature3Folder1: "Matemática 101",
      feature3Folder2: "Aulas de Física",
      feature3Folder3: "Vídeos de laboratório de biologia",
      feature3Folder4: "Documentários de História",
      feature3Folder5: "Aprendizagem de línguas",
      feature4Title: "Exporte em qualquer formato que você precisar",
      feature4Desc: "Baixe transcrições nos formatos TXT, DOCX ou PDF. Perfeito para criar guias de estudo, notas de aula ou materiais de curso acessíveis. Compartilhe com os alunos ou integre ao seu sistema de gestão de aprendizagem.",
      feature4Point1: "TXT para edição de texto simples",
      feature4Point2: "DOCX para documentos formatados",
      feature4Point3: "PDF para fácil compartilhamento e impressão",
      feature4Point4: "Exporte vários arquivos em massa de uma só vez",
      workflowTitle: "Como funciona",
      workflowSubtitle: "Do link do vídeo à transcrição acessível em minutos",
      workflowStep1Title: "Colar Link",
      workflowStep1Desc: "Copie qualquer URL de vídeo educacional e cole-o",
      workflowStep2Title: "Transcrição automática",
      workflowStep2Desc: "A IA transcreve com 96% de precisão",
      workflowStep3Title: "Gerar legendas",
      workflowStep3Desc: "Crie automaticamente legendas perfeitamente sincronizadas",
      workflowStep4Title: "Compartilhar e Exportar",
      workflowStep4Desc: "Baixe ou compartilhe com os alunos",
      useCasesTitle: "Perfeito para todas as necessidades educacionais",
      useCasesSubtitle: "Veja como os educadores estão usando NeverCap para aprimorar o aprendizado",
      useCase1Title: "Palestras gravadas",
      useCase1Text: "Transcreva semestres inteiros de aulas gravadas. Os alunos podem pesquisar tópicos específicos, revisar conceitos-chave e nunca perder informações importantes.",
      useCase2Title: "Cursos Online",
      useCase2Text: "Torne seus cursos online acessíveis a estudantes internacionais com traduções em mais de 100 idiomas. Aumente as matrículas e a satisfação.",
      useCase3Title: "Materiais de estudo",
      useCase3Text: "Converta tutoriais em vídeo em guias de estudo legíveis. Perfeito para alunos que preferem ler ou precisam revisar o conteúdo rapidamente.",
      useCase4Title: "Conformidade de acessibilidade",
      useCase4Text: "Atenda aos requisitos de acessibilidade fornecendo legendas e transcrições para todo o conteúdo de vídeo. Garanta acesso igualitário para todos os alunos.",
      useCase5Title: "Sala de aula invertida",
      useCase5Text: "Compartilhe videoaulas com transcrições antes da aula. Os alunos podem revisar no seu próprio ritmo e vir preparados para as discussões.",
      useCase6Title: "Pesquisa e Citações",
      useCase6Text: "Ajude os alunos a citar fontes de vídeo com precisão, com carimbos de data e hora. Perfeito para projetos de pesquisa e trabalhos acadêmicos.",
      testimonialTitle: "Mais de 50.000 educadores confiam em nós",
      testimonialSubtitle: "Veja por que professores do mundo todo escolhem NeverCap",
      testimonialText: '"Tenho usado NeverCap para transcrever todo o meu canal do YouTube de tutoriais de matemática. O que costumava levar semanas com outros serviços, agora leva horas. A possibilidade de colar links diretamente e obter transcrições instantâneas transformou a forma como crio conteúdo acessível. Meus alunos internacionais adoram especialmente as legendas em vários idiomas!"',
      testimonialAuthorName: "Professora Karen Mitchell",
      testimonialAuthorRole: "Professor de matemática, educador online",
      ctaTitle: "Torne todo o seu conteúdo educacional acessível",
      ctaSubtitle: "Junte-se a milhares de educadores que usam transcrição verdadeiramente ilimitada",
      ctaButton: "Experimente NeverCap grátis"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Baixe vídeos do YouTube como MP4",
        "placeholder": "Pesquise ou cole seu link do Youtube aqui",
        "clear_icon": "Limpar entrada",
        "Download": "Download",
        "loading_text": "Processando o link para download. Permaneça na página.",
        "howToDownload": "Como fazer o download?",
        "tutorial": "Assista ao tutorial"
      },
      part2: {
        "title": "Veja como transformar um vídeo do YouTube em um arquivo MP4 para download em 3 etapas fáceis",
        "steps": [
                {
                  title: "Copie o URL",
                  content: "Abra o vídeo desejado no YouTube e copie o link da barra de endereço do seu navegador."
                },
                {
                  title: "Cole o link",
                  content: "Acesse sua ferramenta de download de vídeos e cole o URL no campo de entrada."
                },
                {
                  title: "Baixe o MP4",
                  content: "Após o processamento, clique no botão de download para salvar seu arquivo MP4."
                }
              ]
      },
      part3: {
        content: [
                "Já se viu precisando assistir a vídeos do YouTube offline?",
                "Seja no metrô, em um avião, estudando um tutorial crucial, aprofundando-se em conteúdo para desenvolvimento de habilidades ou arquivando material de vídeo importante, ter acesso offline confiável é uma frustração comum. É aqui que nosso downloader se destaca.",
                "O downloader permite converter vídeos do YouTube para o formato MP4 de forma rápida e fácil para download. Salve-os no seu dispositivo e assista a qualquer hora.",
                "O processo é rápido, simples e sem complicações. Após o download, curta seus vídeos favoritos quando e onde quiser — sem precisar de internet."
              ]
      },
      part4: {
        content: ["Aqui estão os 5 principais benefícios do download", "Vídeos do YouTube como arquivos MP4"],
        list: [
                {
                  title: "Economize em custos de dados:",
                  content: "Normalmente, assistir a vídeos no YouTube consome uma quantidade significativa de dados móveis. Ao baixar para assistir offline, você pode evitar esses custos desnecessários."
                },
                {
                  title: "Assista em qualquer lugar, a qualquer hora:",
                  content: "Curta seus vídeos sem interrupções, mesmo com conexões de internet instáveis. Chega de preocupações com buffering."
                },
                {
                  title: "Fácil arquivamento e preservação:",
                  content: "Salvar vídeos como MP4 facilita a criação de sua coleção pessoal, especialmente para conteúdo que você considera realmente valioso ou importante."
                },
                {
                  title: "Compartilhamento mais simples:",
                  content: "Compartilhar um arquivo MP4 é muito mais prático do que enviar um link. Você pode enviar o arquivo de vídeo diretamente por aplicativos como WhatsApp ou Instagram, eliminando a etapa extra de abrir o YouTube."
                },
                {
                  title: "Visualização instantânea, momentos compartilhados:",
                  content: "Quer mostrar um vídeo favorito para amigos ou familiares próximos? Com o MP4 baixado, vocês podem assistir juntos sem problemas, sem pausas constrangedoras esperando o vídeo carregar."
                }
              ]
      },
      part5: {
        title: "Por que nosso Downloader se destaca",
        cards: [
                {
                  title: "Simplicidade de um clique",
                  content: "Configuração fácil e operação intuitiva."
                },
                {
                  title: "Extremamente rápido, ilimitado",
                  content: "Converta e baixe na velocidade máxima — sem limites, sem restrições."
                },
                {
                  title: "Converta rapidamente",
                  content: "Processe seus arquivos instantaneamente, sem necessidade de espera."
                },
                {
                  title: "Zero anúncios, zero distrações",
                  content: "Aproveite uma interface limpa, sem pop-ups, banners ou interrupções – apenas conversão de vídeo perfeita."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Qualidade original garantida",
                  content: "Seus downloads mantêm a resolução máxima do vídeo de origem para uma reprodução perfeita em pixels todas as vezes."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Funciona em qualquer lugar",
                  content: "Totalmente compatível com qualquer navegador, em qualquer dispositivo."
                }
              ]
      },
      part6: {
        title: ["Maximize seus downloads de vídeos do YouTube", "Com o Downloader"],
        content: [
                "Conversão fácil do YouTube para MP4: rápida, simples e gratuita.",
                "É aí que nos destacamos. Nossa interface intuitiva foi projetada para todos — sem necessidade de conhecimentos técnicos. Independentemente do seu nível de experiência, você pode converter vídeos instantaneamente. Sem necessidade de cadastro: obtenha exatamente o que precisa, imediatamente.",
                "Fique tranquilo — seus MP4s baixados mantêm a qualidade e a clareza do vídeo original, exatamente como você os assistiu no YouTube.",
                "Funciona em qualquer lugar. Totalmente compatível com todas as principais plataformas e dispositivos. Seja no Windows, macOS, Linux, Android ou iOS — usando um smartphone, tablet ou desktop — você pode baixar vídeos sem problemas."
              ]
      },
      part7: {
        title: "Perguntas-chave sobre como baixar vídeos do YouTube",
        list: [
                {
                  question: "Posso baixar um vídeo do YouTube se ele for protegido por direitos autorais?",
                  answer: "Baixar vídeos do YouTube protegidos por direitos autorais sem a permissão do detentor dos direitos autorais é ilegal."
                },
                {
                  question: "Esta ferramenta de download é segura?",
                  answer: "Sim, é seguro e confiável. Não solicitamos nenhuma informação pessoal dos usuários e tomamos medidas rigorosas contra vírus. Lembramos que você deve sempre ter cuidado ao baixar arquivos da internet: evite clicar em links suspeitos ou baixar arquivos questionáveis."
                },
                {
                  question: "Quais idiomas o download do YouTube para MP4 suporta?",
                  answer: "Nosso serviço oferece suporte para download de vídeos do YouTube em todos os idiomas populares."
                },
                {
                  question: "Quais fatores afetam o tempo que leva para baixar um vídeo do YouTube?",
                  answer: "Embora garantamos a experiência de download mais rápida possível, o tempo de download também é afetado por fatores como a duração do vídeo e a velocidade da sua conexão com a internet."
                },
                {
                  question: "Quando baixo um vídeo MP4 usando meu smartphone, onde ele é salvo?"
                },
                {
                  question: "Baixar um vídeo do YouTube como MP4 reduz a qualidade do vídeo?",
                  answer: "Não. Baixar vídeos do YouTube em MP4 usando nossa ferramenta mantém a qualidade original do vídeo. O processo de conversão preserva a qualidade original, garantindo que você tenha a mesma experiência de visualização do YouTube."
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Tecnologia de IA líder do setor",
      "title": "Sobre",
      "highlighted_text": "NeverCap",
      "description": "Nossa missão é fornecer os serviços de transcrição de áudio e vídeo mais precisos. Utilizando a tecnologia de IA líder do setor, alcançamos taxas de precisão de transcrição superiores a 96%. Para alguns dos principais idiomas, por meio da otimização técnica, podemos atingir até 99% de precisão."
    },
    Stats: {
      "title": "Nosso",
      "highlighted_text": "Impacto",
      "subtitle": "Fortalecendo a comunicação global com tecnologia de IA de ponta",
      "metrics": [
            {
              "value": "96%+",
              "label": "Taxa de precisão",
              "description": "Precisão de transcrição líder do setor com IA avançada"
            },
            {
              "value": "100+",
              "label": "Idiomas suportados",
              "description": "Reconhecimento de palavras faladas para conteúdo global"
            },
            {
              "value": "249+",
              "label": "Idiomas de tradução",
              "description": "Traduza o texto transcrito para praticamente qualquer idioma"
            }
          ]
    },
    Mission: {
      "title": "Por que escolher",
      "highlighted_text": "NeverCap",
      "subtitle": "Acreditamos em quebrar as barreiras linguísticas e tornar o conteúdo acessível a todos",
      "features": [
            {
              "icon": "🎯",
              "title": "Precisão incomparável",
              "description": "Nossos modelos de IA são continuamente refinados para fornecer taxas de precisão de transcrição superiores a 96%, com alguns idiomas principais atingindo até 99% de precisão por meio de otimização avançada."
            },
            {
              "icon": "🌍",
              "title": "Suporte global a idiomas",
              "description": "Suporte para mais de 100 idiomas em reconhecimento de palavra falada e recursos de tradução para mais de 249 idiomas, tornando seu conteúdo verdadeiramente global."
            },
            {
              "icon": "⚡",
              "title": "Processamento extremamente rápido",
              "description": "Processe horas de conteúdo de áudio e vídeo em minutos, não horas. Nosso pipeline de IA otimizado garante que você obtenha suas transcrições rapidamente, sem comprometer a qualidade."
            },
            {
              "icon": "🔒",
              "title": "Segurança de nível empresarial",
              "description": "A segurança dos seus dados é nossa prioridade. Utilizamos criptografia padrão do setor e cumprimos as normas globais de privacidade para manter seu conteúdo seguro e confidencial."
            }
          ]
    },
    Company: {
      "title": "Empresa",
      "highlighted_text": "Informação",
      "subtitle": "Entre em contato conosco para qualquer dúvida ou suporte",
      "details": [
            {
              "label": "nome da empresa",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Sede",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Estados Unidos"]
            },
            {
              "label": "Contate-nos",
              "value": ["e-mail", "Suporte disponível 24 horas por dia, 7 dias por semana"]
            }
          ]
    },
    CTA: {
      "title": "Pronto para experimentar a diferença?",
      "subtitle": "Junte-se a milhares de profissionais que confiam em NeverCap para suas necessidades de transcrição",
      "button": "Experimente NeverCap Grátis →",
      "disclaimer": "Não é necessário cartão de crédito • Comece a transcrever em segundos"
    }
  },
  Privacy: {
    title: "Privacidade",
    titleGradient: "Política",
    subtitle: "Saiba como coletamos, usamos e protegemos suas informações pessoais",
    "lastUpdated": "Última atualização: {data}",
    "lastUpdatedDate": "21 de julho de 2025",
    "privacyPolicyTitle": "política de Privacidade",
    "policyDescription": 'Esta Política descreve como NeverCap (doravante denominado \"NeverCap\", \"nosso\", \"nós\", \"nos\") coleta, usa e divulga suas informações pessoais quando você usa nossos serviços, sites (https://www.nevercap.ai/) e software (coletivamente, os \"Serviços\").',
    "policyAgreement": "Leia esta Política de Privacidade com atenção e certifique-se de que a compreende. Ao utilizar qualquer um dos nossos Serviços, você concorda com esta Política de Privacidade. Caso não concorde com o uso dos seus dados pessoais em conformidade com esta Política, você deverá interromper imediatamente o uso dos nossos Serviços.",
    "policyOverview": "Nesta política, descrevemos: quais dados coletamos e por quê; como seus dados são tratados; e seus direitos em relação aos seus dados. Não vendemos seus dados.",
    "scopeTitle": "1. Âmbito desta Política de Privacidade",
    "scopeDescription": "Esta Política de Privacidade aplica-se apenas à nossa coleta e processamento de informações sobre os usuários dos Serviços. Esta Política de Privacidade não se aplica a quaisquer serviços, sites ou softwares operados por terceiros que estejam vinculados a nós (sejam esses links fornecidos por nós ou compartilhados por outros usuários), nem se aplica a conteúdo, dados, aplicativos ou materiais de terceiros. Recomendamos que você verifique as políticas de privacidade de qualquer site ou software de terceiros antes de fornecer qualquer informação a eles.",
    "collectionTitle": "2. O que coletamos e por quê",
    "collectionPrinciple": "Nosso princípio norteador é coletar apenas o que precisamos. Veja o que isso significa na prática:",
    "identityTitle": "2.1 Identidade e acesso",
    "identityDescription": "Ao se cadastrar em um de nossos produtos, solicitamos informações de identificação, como seu nome e endereço de e-mail. Isso visa fornecer funcionalidades essenciais do produto e permitir que lhe enviemos atualizações do produto e outras informações essenciais.",
    "billingTitle": "2.2 Informações de cobrança",
    "billingDescription": "Ao se inscrever em um produto pago, você será solicitado a fornecer suas informações de pagamento e endereço de cobrança. As informações de pagamento são enviadas diretamente ao nosso processador de pagamentos e não chegam aos nossos servidores.",
    "productInteractionsTitle": "2.3 Interações do produto",
    "productInteractionsDescription": "Armazenamos em nossos servidores o conteúdo que você carrega, recebe ou mantém em suas contas de produtos. A menos que você exclua esse conteúdo, podemos mantê-lo enquanto sua conta estiver ativa.",
    "websiteInteractionsTitle": "2.4 Interações no site",
    "websiteInteractionsDescription": "Coletamos informações sobre sua atividade de navegação para fins analíticos e estatísticos, como testes de taxa de conversão e experimentação com novos designs de produtos. Isso inclui, por exemplo, as versões do seu navegador e sistema operacional, seu endereço IP, quais páginas da web você visitou e quanto tempo elas levaram para carregar, e qual site o encaminhou para nós. Se você tiver uma conta e estiver conectado, esses dados de análise da web serão vinculados ao seu endereço IP e à sua conta de usuário até que sua conta não esteja mais ativa.",
    "cookiesTitle": "2.5 Cookies",
    "cookiesDescription1": "Também usamos cookies primários persistentes e alguns cookies de terceiros para armazenar determinadas preferências, facilitar o uso de nossos aplicativos e realizar testes A/B, além de dar suporte a algumas análises.",
    "cookiesDescription2": "Um cookie é um pedaço de texto armazenado pelo seu navegador. Ele pode ajudar a lembrar informações de login e preferências do site. Também pode coletar informações como o tipo de navegador, sistema operacional, páginas visitadas, duração da visita, conteúdo visualizado e outros dados de fluxo de cliques. Você pode ajustar as configurações de retenção de cookies e aceitar ou bloquear cookies individuais nas configurações do seu navegador, embora nossos aplicativos não funcionem e outros aspectos do nosso serviço possam não funcionar corretamente se você desativar os cookies.",
    "correspondenceTitle": "2.6 Correspondência voluntária",
    "correspondenceDescription": "Quando você nos envia um e-mail com uma dúvida ou para pedir ajuda, guardamos essa correspondência, incluindo seu endereço de e-mail, para que tenhamos um histórico de correspondências anteriores para referência caso você entre em contato conosco no futuro.",
    "accessTitle": "3. Quando acessamos ou compartilhamos suas informações",
    "accessDescription1": "Para fornecer produtos ou serviços que você solicitou. Utilizamos alguns subprocessadores terceirizados para ajudar a executar nossos aplicativos e fornecer os Serviços a você. Isso inclui provedores de nuvem e análise.",
    "accessDescription2": "Para investigar, prevenir ou tomar medidas em relação a abusos. Acessar a conta de um cliente durante a investigação de possíveis abusos é uma medida de último recurso. Queremos proteger a privacidade e a segurança tanto de nossos clientes quanto das pessoas que nos relatam problemas, e fazemos o possível para equilibrar essas responsabilidades ao longo do processo. Se descobrirmos que você está usando nossos produtos para uma finalidade restrita, tomaremos as medidas necessárias, incluindo notificar as autoridades competentes, quando necessário.",
    "accessDescription3": "Quando exigido pela lei aplicável.",
    "dataRequests": "Solicitações de dados do usuário. Nossa política é não responder a solicitações governamentais de dados do usuário, a menos que sejamos obrigados por processo legal ou, em circunstâncias limitadas, em caso de solicitação emergencial. No entanto, se as autoridades policiais dos EUA tiverem o mandado, intimação criminal ou ordem judicial necessária exigindo que compartilhemos dados, devemos obedecer. Da mesma forma, somente responderemos a solicitações de autoridades governamentais fora dos EUA se obrigados pelo governo dos EUA por meio de procedimentos descritos em um tratado ou acordo de assistência jurídica mútua. Nossa política é notificar os usuários afetados antes de compartilharmos dados, a menos que sejamos legalmente proibidos de fazê-lo e exceto em alguns casos de emergência.",
    "preservationRequests": "Solicitações de preservação. Da mesma forma, nossa política é atender a solicitações de preservação de dados somente se exigido pela Lei Federal de Comunicações Armazenadas dos EUA, 18 USC Seção 2703(f), ou por uma intimação americana devidamente notificada para questões civis. Não compartilhamos dados preservados, a menos que seja exigido por lei ou obrigado por uma ordem judicial da qual optamos por não recorrer. Além disso, a menos que recebamos um mandado, ordem judicial ou intimação adequados antes do término do período de preservação exigido, destruiremos quaisquer cópias preservadas dos dados do cliente ao final do período de preservação.",
    "taxAudits": "Caso sejamos auditados por uma autoridade fiscal, poderemos ser obrigados a compartilhar informações relacionadas à cobrança. Nesse caso, compartilharemos apenas o mínimo necessário, como endereços de cobrança e informações sobre isenção fiscal.",
    "securityTitle": "4. Como protegemos seus dados",
    "securityDescription": "Todos os dados são criptografados via SSL/TLS quando transmitidos de nossos servidores para seu navegador.",
    "deletionTitle": "5. O que acontece quando você exclui seu conteúdo",
    "deletionDescription": "Se você excluir qualquer conteúdo, ele ficará imediatamente inacessível.",
    "locationTitle": "6. Localização do site e dos dados",
    "locationDescription": "Nossos produtos e outras propriedades da web são operados nos Estados Unidos. Se você estiver localizado na União Europeia, no Reino Unido ou em qualquer outro lugar fora dos Estados Unidos, esteja ciente de que quaisquer informações que você nos fornecer serão transferidas e armazenadas nos Estados Unidos. Ao utilizar nossos sites ou Serviços e/ou nos fornecer suas informações pessoais, você concorda com essa transferência.",
    "childrenTitle": "7. Privacidade das crianças",
    "childrenDescription": "Os Serviços não são destinados a crianças e não coletamos intencionalmente Informações Pessoais de crianças menores de 13 anos. Se você tiver menos de 13 anos, não envie nenhuma informação pessoal por meio dos Serviços. Se você acredita que uma criança nos forneceu Informações Pessoais em violação a esta Política, entre em contato conosco conforme indicado abaixo.",
    "updatesTitle": "8. Atualizações desta Política de Privacidade",
    "updatesDescription": "Podemos atualizar esta política conforme necessário para cumprir com as regulamentações relevantes e refletir quaisquer novas práticas. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página.",
    "contactTitle": "9. Contate-nos",
    "contactDescription": "Caso tenha alguma dúvida, comentário ou reclamação sobre nossa Política de Privacidade, entre em contato conosco e faremos o possível para lidar com sua reclamação o mais rápido possível.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Termos de",
    titleGradient: "Serviço",
    subtitle: "Por favor, leia estes termos cuidadosamente antes de usar nossos serviços",
    "lastUpdated": "Última atualização: {data}",
    "lastUpdatedDate": "21 de julho de 2025",
    "termsOfServiceTitle": "Termos de Serviço",
    "thankYou": "Obrigado por usar nossos produtos!",
    "companyDefinition": 'Quando dizemos \"Empresa\", \"nós\", \"nosso\" ou \"nos\" neste documento, estamos nos referindo a NeverCap.',
    "servicesDefinition": 'Quando dizemos \"Serviços\", queremos dizer qualquer produto criado e mantido por NeverCap, seja entregue em um navegador da web, aplicativo de desktop, aplicativo móvel ou outro formato.',
    "termsUpdate": "Poderemos atualizar estes Termos de Serviço no futuro. Normalmente, essas alterações visam esclarecer alguns destes termos, vinculando-os a uma política relacionada mais detalhada. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página e tomaremos as medidas cabíveis para notificar os titulares das contas.",
    "acceptanceTitle": "1. Aceitação do Acordo",
    "acceptanceDescription1": "Ao utilizar nossos Serviços, você indica sua aceitação deste Contrato, que se torna um contrato vinculativo entre você e NeverCap. Você declara que é legalmente capaz de aceitar estes Termos e afirma que é maior de idade para firmar um contrato vinculativo. A aceitação por NeverCap está expressamente condicionada à sua concordância com todos os termos e condições deste Contrato.",
    "eligibilityRequirement": "Os Serviços não se destinam e não devem ser usados por menores de 18 anos. Ao usar os Serviços, você declara e garante que atende ao requisito de elegibilidade acima.",
    "userResponsibility": 'Os termos "você", "seu", "você mesmo" também incluem seus funcionários, agentes, representantes comerciais e quaisquer outros indivíduos aos quais você concede acesso aos Serviços por meio de sua Conta (conforme definido abaixo). Você é responsável por garantir que todas as pessoas que acessam os Serviços por meio de sua conta estejam cientes destes Termos e os cumpram.',
    "termsRevision": "NeverCap reserva-se o direito de revisar e atualizar estes Termos periodicamente, a seu exclusivo critério. Todas as alterações entram em vigor imediatamente após sua publicação. O uso contínuo dos Serviços após a publicação dos Termos revisados significa que você aceita e concorda com as alterações. Recomendamos que você consulte esta página periodicamente para estar ciente de quaisquer alterações, pois elas são vinculativas.",
    "servicesTitle": "2. Serviços de NeverCap",
    "servicesDescription1": "Nossos serviços permitem que os usuários transformem conversas de voz em texto transcrito que pode ser pesquisado, traduzido e compartilhado com outras pessoas.",
    "servicesOptions": 'Você pode escolher se deseja usar a versão gratuita dos Serviços (os "Serviços Gratuitos") ou a versão paga baseada em assinatura dos Serviços, pela qual poderá ser necessário pagar taxas (os "Serviços Pagos").',
    "servicesAccess": "Nós disponibilizaremos os Serviços a você. Você é responsável por tomar todas as providências necessárias para ter acesso aos Serviços.",
    "accountTermsTitle": "3. Termos da conta",
    "accountSecurity": "Você é responsável por manter a segurança da sua conta. A Empresa não pode e não será responsável por qualquer perda ou dano decorrente do seu descumprimento desta obrigação de segurança.",
    "lawfulUse": "Você não pode usar os Serviços para nenhuma finalidade ilegal, antiética ou imoral.",
    "contentResponsibility": "Você é responsável por todo o conteúdo publicado e atividades que ocorrem em sua conta. Isso inclui conteúdo publicado por outras pessoas que: (a) tenham acesso às suas credenciais de login; ou (b) tenham seus próprios logins em sua conta.",
    "humanRequirement": 'Você deve ser humano. Contas registradas por "bots" ou outros métodos automatizados não são permitidas.',
    "paymentTitle": "4. Pagamento, Reembolsos e Alterações de Plano",
    "freeTrial": "Para Serviços pagos que oferecem um teste gratuito, explicamos a duração do teste no momento da inscrição. Após o período de teste, você precisa pagar antecipadamente para continuar usando o Serviço. Se você não pagar, esses serviços serão encerrados.",
    "upgradePolicy": "Se você estiver atualizando de um plano gratuito para um plano pago, cobraremos seu cartão imediatamente e seu ciclo de cobrança começará no dia da atualização.",
    "taxes": "Todas as taxas excluem todos os impostos, taxas ou encargos cobrados pelas autoridades fiscais. Quando necessário, cobraremos esses impostos em nome da autoridade fiscal e os remeteremos às autoridades fiscais. Caso contrário, você será responsável pelo pagamento de todos os impostos, taxas ou encargos.",
    "refunds": "Nenhuma compra é reembolsável. Você pode cancelar qualquer serviço pago a qualquer momento acessando sua conta. Para assinaturas pagas, o cancelamento entrará em vigor ao final do período pago atual, salvo indicação em contrário.",
    "cancellationTitle": "5. Cancelamento e Rescisão",
    "cancellationPolicy": "Se você cancelar o Serviço antes do término de qualquer período pago, o cancelamento entrará em vigor imediatamente e você não será cobrado novamente. Não rateamos automaticamente o tempo não utilizado no último ciclo de cobrança.",
    "terminationRights": "Reservamo-nos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro de nossos Serviços, por qualquer motivo e a qualquer momento. Suspensão significa que você não poderá acessar a conta ou qualquer conteúdo nela contido. O encerramento resultará, além disso, na exclusão da sua conta ou do seu acesso a ela, e na perda e renúncia de todo o conteúdo da sua conta. Também nos reservamos o direito de recusar o uso dos Serviços a qualquer pessoa, por qualquer motivo e a qualquer momento. Temos essa cláusula porque, estatisticamente falando, das centenas de milhares de contas em nossos Serviços, há pelo menos uma praticando atos ilícitos.",
    "abusePolicy": "Abuso verbal, físico, escrito ou de outro tipo (incluindo ameaças de abuso ou retaliação) contra funcionários ou executivos da Empresa pode resultar no encerramento imediato da conta.",
    "submissionsTitle": "6. Submissões",
    "submissionsDescription": 'Você reconhece e concorda que quaisquer perguntas, comentários, sugestões, ideias, feedback ou outras informações relativas ao Site ("Envios") fornecidas por você não são confidenciais e se tornarão nossa propriedade exclusiva. Deteremos direitos exclusivos, incluindo todos os direitos de propriedade intelectual, e teremos o direito de usar e disseminar irrestritamente estes Envios para qualquer finalidade lícita, comercial ou não, sem reconhecimento ou compensação a você. Você, por meio deste, renuncia a todos os direitos morais sobre tais Envios e garante que tais Envios são originais e que você tem o direito de enviá-los. Você concorda que não haverá recurso contra nós por qualquer violação ou apropriação indevida, alegada ou real, de qualquer direito de propriedade sobre seus Envios.',
    "uptimeTitle": "7. Tempo de atividade e segurança",
    "serviceAvailability": 'O uso dos Serviços é por sua conta e risco. Fornecemos estes Serviços "no estado em que se encontram" e "conforme disponíveis". Não oferecemos contratos de nível de serviço para a maioria dos nossos Serviços, mas levamos a sério o tempo de atividade dos nossos aplicativos.',
    "throttlingPolicy": "Reservamo-nos o direito de restringir ou limitar temporariamente o acesso à conta em casos raros em que a atividade de um usuário esteja impactando negativamente a estabilidade e o desempenho do Serviço para outros usuários. Em todos os casos, exceto nos mais críticos, entraremos em contato para encontrar uma solução antes de tomarmos qualquer medida.",
    "dataSecurity": "Tomamos diversas medidas para proteger e proteger seus dados por meio de backups, redundâncias e criptografia. Aplicamos criptografia para transmissão de dados pela internet pública.",
    "thirdPartyVendors": "Utilizamos fornecedores terceirizados e parceiros de hospedagem para fornecer o hardware, software, rede, armazenamento e tecnologia relacionada necessários para executar os Serviços.",
    "siteManagementTitle": "8. Gerenciamento do Site",
    "siteManagementDescription": "Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar o Site em busca de violações destes Termos de Serviço; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos de Serviço, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desabilitar (na medida em que for tecnologicamente viável) qualquer uma de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem limitação, aviso ou responsabilidade, remover do Site ou desabilitar de outra forma todos os arquivos e conteúdos que sejam excessivos em tamanho ou que sejam de alguma forma onerosos para nossos sistemas; e (5) gerenciar o Site de outra forma projetada para proteger nossos direitos e propriedade e para facilitar o funcionamento adequado do Site.",
    "copyrightTitle": "9. Direitos autorais e propriedade de conteúdo",
    "copyrightCompliance": "Todo o conteúdo publicado nos Serviços deve estar em conformidade com a lei de direitos autorais dos EUA.",
    "ipRights": "Não reivindicamos direitos de propriedade intelectual sobre o material que você fornece aos Serviços. Todos os materiais enviados permanecem seus.",
    "contentModeration": "Não fazemos uma triagem prévia do conteúdo, mas nos reservamos o direito (mas não a obrigação), a nosso exclusivo critério, de recusar ou remover qualquer conteúdo que esteja disponível por meio do Serviço.",
    "trademarkProtection": "Os nomes, a aparência e a funcionalidade dos Serviços são protegidos por direitos autorais © da Empresa. Todos os direitos reservados. Você não pode duplicar, copiar ou reutilizar qualquer parte do HTML, CSS, JavaScript ou elementos de design visual sem a permissão expressa por escrito da Empresa. Você deve solicitar permissão para usar o logotipo da Empresa ou quaisquer logotipos dos Serviços para fins promocionais. Envie-nos solicitações de uso de logotipos por e-mail. Reservamo-nos o direito de revogar essa permissão caso você viole estes Termos de Serviço.",
    "prohibitedExploitation": "Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos Serviços, uso dos Serviços ou acesso aos Serviços sem a permissão expressa por escrito da Empresa.",
    "impersonationProhibition": "Você não deve modificar outro site de modo a implicar falsamente que ele está associado aos Serviços ou à Empresa.",
    "dmcaPolicy": "Respeitamos os direitos de propriedade intelectual de terceiros. Se você acredita que qualquer material disponível no Site ou por meio dele infringe quaisquer direitos autorais que você possui ou controla, entre em contato conosco imediatamente. Uma cópia da sua Notificação será enviada à pessoa que publicou ou armazenou o material mencionado na Notificação. Esteja ciente de que, de acordo com a legislação aplicável, você poderá ser responsabilizado por danos caso faça declarações falsas em uma Notificação. Portanto, se você não tiver certeza de que o material localizado no Site ou vinculado a ele infringe seus direitos autorais, considere primeiro entrar em contato com um advogado.",
    "prohibitedActivitiesTitle": "10. Atividades Proibidas",
    "generalProhibition": "Você não poderá acessar ou utilizar o Site para qualquer finalidade que não seja aquela para a qual o disponibilizamos. O Site não poderá ser utilizado em conexão com quaisquer empreendimentos comerciais, exceto aqueles que sejam especificamente endossados ou aprovados por nós.",
    "userObligations": "Como usuário do Site, você concorda em não:",
    "dataScraping": "Recuperar sistematicamente dados ou outro conteúdo do Site para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa permissão por escrito.",
    "fraud": "Enganar, fraudar ou induzir a nós e a outros usuários em erro, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuários.",
    "securityInterference": "Contornar, desabilitar ou interferir de outra forma nos recursos relacionados à segurança do Site, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou impõem limitações ao uso do Site e/ou do Conteúdo nele contido.",
    "defamation": "Desprezar, manchar ou de outra forma prejudicar, em nossa opinião, nós e/ou o Site.",
    "harassment": "Usar qualquer informação obtida no Site para assediar, abusar ou prejudicar outra pessoa.",
    "supportAbuse": "Faça uso indevido de nossos serviços de suporte ou envie relatórios falsos de abuso ou má conduta.",
    "legalCompliance": "Usar o Site de maneira inconsistente com quaisquer leis ou regulamentos aplicáveis.",
    "framingProhibition": "Envolver-se em enquadramento ou vinculação não autorizados ao Site.",
    "malware": "Carregar ou transmitir (ou tentar carregar ou transmitir) vírus, cavalos de Troia ou outro material, incluindo uso excessivo de letras maiúsculas e spam (publicação contínua de texto repetitivo), que interfira no uso e aproveitamento ininterrupto do Site por qualquer parte ou modifique, prejudique, interrompa, altere ou interfira no uso, recursos, funções, operação ou manutenção do Site.",
    "automation": "Envolver-se em qualquer uso automatizado do sistema, como usar scripts para enviar comentários ou mensagens, ou usar qualquer mineração de dados, robôs ou ferramentas semelhantes de coleta e extração de dados.",
    "copyrightRemoval": "Excluir o aviso de direitos autorais ou outros direitos de propriedade de qualquer Conteúdo.",
    "impersonation": "Tentar representar outro usuário ou pessoa ou usar o nome de usuário de outro usuário.",
    "spyware": 'Carregar ou transmitir (ou tentar carregar ou transmitir) qualquer material que atue como um mecanismo passivo ou ativo de coleta ou transmissão de informações, incluindo, sem limitação, formatos de intercâmbio gráfico transparentes ("gifs"), pixels 1×1, web bugs, cookies ou outros dispositivos semelhantes (às vezes chamados de "spyware" ou "mecanismos de coleta passiva" ou "pcms").',
    "disruption": "Interferir, interromper ou criar uma carga indevida no Site ou nas redes ou serviços conectados ao Site.",
    "employeeHarassment": "Assediar, incomodar, intimidar ou ameaçar qualquer um dos nossos funcionários ou agentes envolvidos no fornecimento de qualquer parte do Site para você.",
    "accessCircumvention": "Tentar contornar quaisquer medidas do Site projetadas para impedir ou restringir o acesso ao Site ou a qualquer parte do Site.",
    "codeCopying": "Copie ou adapte o software do Site, incluindo, mas não se limitando a Flash, PHP, HTML, JavaScript ou outro código.",
    "reverseEngineering": "Exceto quando permitido pela lei aplicável, decifrar, descompilar, desmontar ou fazer engenharia reversa de qualquer software que componha ou de qualquer forma faça parte do Site.",
    "bots": "Exceto quando for resultado do uso de mecanismos de busca padrão ou navegadores da Internet, use, inicie, desenvolva ou distribua qualquer sistema automatizado, incluindo, sem limitação, qualquer spider, robô, utilitário de trapaça, scraper ou leitor offline que acesse o Site, ou use ou inicie qualquer script não autorizado ou outro software.",
    "buyingAgents": "Utilize um agente de compras ou agente de compras para fazer compras no Site.",
    "unauthorizedUse": "Fazer qualquer uso não autorizado do Site, incluindo a coleta de nomes de usuários e/ou endereços de e-mail de usuários por meios eletrônicos ou outros, com a finalidade de enviar e-mails não solicitados, ou criar contas de usuários por meios automatizados ou sob falsos pretextos.",
    "competition": "Use o Site como parte de qualquer esforço para competir conosco ou use o Site e/ou o Conteúdo para qualquer empreendimento de geração de receita ou empreendimento comercial.",
    "advertising": "Use o Site para anunciar ou oferecer a venda de produtos e serviços.",
    "profileTransfer": "Vender ou transferir seu perfil.",
    "featuresTitle": "11. Recursos e bugs",
    "featuresDescription": "Projetamos nossos Serviços com cuidado, com base em nossa própria experiência e nas experiências de clientes que compartilham seu tempo e feedback. No entanto, não existe um serviço que agrade a todos. Não garantimos que nossos Serviços atenderão às suas necessidades ou expectativas específicas.",
    "bugsDescription": "Também testamos todos os nossos recursos antes de lançá-los. Como acontece com qualquer software, nossos Serviços inevitavelmente apresentam alguns bugs. Monitoramos os bugs relatados e os solucionamos, especialmente aqueles relacionados à segurança ou privacidade. Nem todos os bugs relatados serão corrigidos e não garantimos que os Serviços estejam completamente livres de erros.",
    "correctionsTitle": "12. Correções",
    "informationAccuracy": "Pode haver informações no Site que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e diversas outras informações. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações no Site a qualquer momento, sem aviso prévio.",
    "siteAvailability": "Não podemos garantir que o Site estará disponível o tempo todo. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenção relacionada ao Site, resultando em interrupções, atrasos ou erros. Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar o Site a qualquer momento ou por qualquer motivo, sem aviso prévio. Você concorda que não temos qualquer responsabilidade por qualquer perda, dano ou inconveniência causada pela sua incapacidade de acessar ou usar o Site durante qualquer período de inatividade ou descontinuação do Site. Nada nestes Termos de Serviço será interpretado como uma obrigação para nós de manter e dar suporte ao Site ou de fornecer quaisquer correções, atualizações ou lançamentos relacionados a ele.",
    "userDataTitle": "13. Dados do Usuário",
    "userDataDescription": "Manteremos determinados dados que você transmitir ao Site com a finalidade de gerenciar o desempenho do Site, bem como dados relacionados ao seu uso do Site. Embora realizemos backups regulares de dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que tenha realizado usando o Site. Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de tais dados.",
    "privacyPolicyTitle": "14. Política de Privacidade",
    "privacyPolicyDescription": "Preocupamo-nos com a privacidade e a segurança dos dados. Consulte a nossa Política de Privacidade. Ao utilizar o Site, concorda em estar vinculado à nossa Política de Privacidade, que está incorporada nestes Termos de Serviço. Informamos que o Site está hospedado nos Estados Unidos. Se aceder ao Site a partir de qualquer outra região do mundo com leis ou outros requisitos que regem a recolha, utilização ou divulgação de dados pessoais que sejam diferentes das leis aplicáveis nos Estados Unidos, então, através da sua utilização contínua do Site, estará a transferir os seus dados para os Estados Unidos e concorda que os seus dados sejam transferidos e processados nos Estados Unidos.",
    "liabilityTitle": "15. Responsabilidade",
    "liabilityIntroduction": "Mencionamos a responsabilidade ao longo destes Termos, mas para colocar tudo em uma seção:",
    "liabilityWaiver": "Você expressamente entende e concorda que a Empresa não será responsável, em lei ou em equidade, perante você ou qualquer terceiro por quaisquer danos diretos, indiretos, incidentais, lucros cessantes, especiais, consequenciais, punitivos ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, ágio, uso, dados ou outras perdas intangíveis (mesmo que a Empresa tenha sido avisada da possibilidade de tais danos), resultantes de: (1) o uso ou a incapacidade de usar os Serviços; (2) erros, enganos ou imprecisões de conteúdo e materiais; (3) danos pessoais ou materiais, de qualquer natureza, resultantes do seu acesso e uso do site; (4) o custo de aquisição de bens e serviços substitutos resultantes de quaisquer bens, dados, informações ou serviços adquiridos ou obtidos ou mensagens recebidas ou transações realizadas por meio ou a partir dos Serviços; (5) qualquer acesso ou uso não autorizado de nossos servidores seguros e/ou quaisquer e todas as informações pessoais e/ou informações financeiras armazenadas neles; (6) qualquer interrupção ou cessação de transmissão de ou para o site; (7) quaisquer bugs, vírus, cavalos de Troia ou similares que possam ser transmitidos ao site ou por meio dele por terceiros e/ou; (8) quaisquer erros ou omissões em qualquer conteúdo e materiais ou por qualquer perda ou dano de qualquer tipo incorrido como resultado do uso de qualquer conteúdo publicado, transmitido ou de outra forma disponibilizado por meio do site; (9) declarações ou conduta de terceiros no serviço; (10) ou qualquer outro assunto relacionado a estes Termos de Serviço ou aos Serviços, seja como quebra de contrato, ato ilícito (incluindo negligência ativa ou passiva) ou qualquer outra teoria de responsabilidade.",
    "miscellaneousTitle": "16. Diversos",
    "miscellaneousDescription": "Estes Termos de Serviço e quaisquer políticas ou regras operacionais publicadas por nós no Site ou em relação ao Site constituem o acordo e entendimento integral entre você e nós. Nossa falha em exercer ou executar qualquer direito ou disposição destes Termos de Serviço não operará como uma renúncia de tal direito ou disposição. Estes Termos de Serviço operam na máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou omissão de ação causados por qualquer causa além do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos de Serviço for determinada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos de Serviço e não afetará a validade e a exequibilidade de quaisquer disposições restantes. Não há nenhuma relação de joint venture, parceria, emprego ou agência criada entre você e nós como resultado destes Termos de Serviço ou do uso do Site. Você concorda que estes Termos de Serviço não serão interpretados contra nós em virtude de tê-los elaborado. Você renuncia a toda e qualquer defesa que possa ter com base no formato eletrônico destes Termos de Serviço e na falta de assinatura pelas partes para executar estes Termos de Serviço.",
    "contactTitle": "17. Contate-nos",
    "contactDescription": "Caso tenha alguma dúvida sobre qualquer um dos Termos de Serviço, entre em contato conosco.",
    "neverCap": "NeverCap",
    "site": "Site",
    "services": "Serviços"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
