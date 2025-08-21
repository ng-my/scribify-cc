let message = {
  // 首页
  HomePage: {
    home: "全部转录",
    times: "每天{times}次免费转录，今天剩余{left}次。",
    tips: "升级到专业版以获得无限转录。",
    update: "立即升级",
    rename: "重命名",
    delete: "删除",
    cancel: "取消",
    confirm: "创建",
    dialogLabel: "文件夹名称",
    recently: "最近文件",
    loading: "加载中",
    tour: {
      step0: {
        title: "欢迎使用 {name}",
        tip: "在这里，您可以：",
        content: "转录一次性对话、会议、讲座等",
        next: "开始使用"
      },
      step1: {
        title: "转录文件",
        content: "支持三种转录方式：本地文件、链接和录音。"
      },
      step2: {
        title: "创建文件夹",
        content: '点击"+"创建文件夹并整理您的文件。'
      },
      step3: {
        title: "查看转录详情并编辑",
        content: "点击项目以查看转录详情并进行编辑和翻译。"
      },
      next: "下一步",
      finish: "知道了"
    },
    export: {
      export: "导出",
      title: "我们正在生成您的导出文件",
      title2: "您的文件已准备就绪",
      singleLoadingContent: "正在压缩 1 个文件。",
      singleSuccessContent: "已压缩 1 个文件。",
      loadingContent: "正在压缩 {num} 个文件。",
      successContent: "已压缩 {num} 个文件。",
      cancel: "取消导出",
      error: "导出错误",
      dialog: {
        title: "警告",
        content: "取消导出？",
        cancel: "取消导出",
        continue: "继续导出"
      }
    },
    welcome: {
      title: "欢迎使用 Scribify！",
      description: "在这里，您可以：",
      transcribe:
        "使用 Scribify 轻松转录—瞬间将语音对话转换为清晰、可搜索和可共享的文本。",
      precision: "立即获得带有说话者识别和时间戳的精确转录。",
      translate: "打破语言障碍：轻松将转录翻译成200多种语言。",
      edit: "编辑、完善并以适合您需求的格式导出转录文本。",
      collaborate: "通过与他人共享转录文本进行协作。",
      button: "开始使用",
      tip: "准备好将音频转换为转录文本了吗？现在就开始探索！",
      tip2: "立即开始探索！",
      tip1: "准备好将音频转换为转录文本吗？ "
    },
    subscriptionModal: {
      left: {
        title: "获取专业版解锁更多功能",
        c1: "无限转录",
        c2: "10小时上传",
        c3: "最高优先级",
        c4: "99%转录准确率",
        c5: "支持100多种语言",
        c6: "说话者识别",
        c7: "转录翻译",
        t1: "为一个人提供无限转录。",
        t2: "每个文件可长达10小时/5 GB。一次上传50个文件。",
        t3: "我们将始终以最高优先级尽快转录您的文件。"
      },
      right: {
        title: "获取专业版",
        yearly: "年付",
        monthly: "月付",
        save: "节省",
        preMonth: "每月",
        preYear: "每年",
        firstMonth: "第一个月",
        afterwards: "之后"
      },
      subscribe: "订阅"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      failed: "失败",
      selected: "已选择",
      success: "成功",
      fileList: "文件列表"
    },
    dialog: {
      move: {
        title: "移动",
        label: "选择文件夹",
        placeholder: "选择文件夹",
        confirm: "移动",
        cancel: "取消"
      },
      rename: {
        title: "重命名",
        label: "文件名",
        confirm: "重命名",
        cancel: "取消"
      },
      delete: {
        title: "删除",
        file: "文件",
        files: "文件",
        label: "确认删除？此操作无法撤销。",
        confirm: "删除",
        cancel: "取消"
      },
      share: {
        title: "分享",
        label: "任何拥有以下安全链接的人都可以查看此转录文本和相关的媒体文件。",
        confirm: "复制链接",
        success: "复制成功"
      },
      export: {
        title: "导出",
        select: "选择你需要的格式",
        settings: "设置",
        speaker: "包含说话人",
        timecodes: "包含时间码",
        confirm: "导出",
        cancel: "取消",
        selectErr: "请选择一个或多个格式"
      }
    },
    search: {
      placeholder: "搜索"
    },
    recently: "最近",
    record: "录音",
    transcribe: "转录",
    unclassified: "未分类文件夹",
    buttons: {
      transcribe: "转录文件",
      url: "转录链接",
      record: "录音并转录",
      recording: "录音中..."
    },
    delSuccess: "删除成功",
    create: "创建",
    endRecord: {
      title: "提示",
      content: "您正在录音。此操作将结束录音。您要结束录音吗？",
      confirm: "继续录音",
      cancel: "结束录音"
    }
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "录音",
      pause: "暂停",
      resume: "继续",
      stop: "停止",
      endRecord: "结束录制",
      delete: "删除",
      transcribe: "转录",
      permissionDenied: "麦克风权限被拒绝或设备不存在",
      dialog: {
        delete: {
          title: "警告",
          label: "您确定要删除此录音吗？",
          confirm: "删除",
          cancel: "取消"
        },
        complete: {
          title: "录音完成",
          label: "录音已达到10小时并自动停止。请进行转录。",
          confirm: "知道了"
        },
        speaker: {
          content: "发言人识别功能限制文件时长为 3 小时。请取消勾选“{text}”。"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "转录在线媒体",
        title: "粘贴链接",
        label:
          "粘贴来自 YouTube、Facebook、X、Dropbox、Google Drive、Vimeo、TikTok、Instagram 等平台的视频或音频链接...",
        confirm: "添加",
        cancel: "取消",
        errorTitle: "您输入的链接地址不正确。请检查后重试。",
        linkName: "链接"
      },
      file: {
        orTitle: "转录在线媒体",
        dialogTitle: "转录文件",
        tip1: "拖拽文件到此处或点击浏览",
        tip2: "点击浏览",
        or: "或",
        supported: "支持的格式"
      },
      del: {
        title: "警告",
        content: "所有进度将丢失。确认取消转录？",
        cancel: "确认取消",
        confirm: "继续转录"
      },
      files: "文件",
      resultDialogTitle: "转录文件",
      resultDialogTitle2: "转录文件",
      cancel: "取消",
      confirm: "转录",
      return: "返回",
      addMore: "添加更多",
      language: "媒体语言",
      failed: "失败",
      tooLarge: "文件超出限制（5G）。",
      linkUpload: "上传中",
      fileFormat: "文件格式不被允许",
      localFiles: "本地文件",
      pasteLink: "在线链接",
      uploadErr: "上传错误",
      hashErr: "哈希错误",
      table: {
        status: "状态",
        file: "文件",
        size: "大小",
        noData: "无数据"
      },
      maxFileNum: "文件数量不能超过 {num}。",
      speaker: "识别发言人",
      speakerLabel: "自动检测谁在说话",
      guest: {
        transcribe: "转录",
        file: "文件",
        audio: "音频/视频文件",
        Uploading: "正在上传..."
      }
    }
  },
  // 转录详情页
  TranscriptionPage: {
    langChooseV1: {
      recently: "最近",
      popular: "常用",
      other: "其他",
      searchLanguage: "搜索语言",
      noMatch: "未找到匹配的语言",
      English: "英语",
      "English(US)": "英语（美国）",
      "English(UK)": "英语（英国）",
      Spanish: "西班牙语",
      Portuguese: "葡萄牙语",
      French: "法语",
      Italian: "意大利语",
      German: "德语",
      Dutch: "荷兰语",
      Polish: "波兰语",
      Danish: "丹麦语",
      Japanese: "日语",
      Korean: "韩语",
      Hungarian: "匈牙利语",
      Czech: "捷克语",
      Chinese: "中文",
      Hebrew: "希伯来语",
      Arabic: "阿拉伯语",
      Azerbaijani: "阿塞拜疆语",
      Estonian: "爱沙尼亚语",
      Belarusian: "白俄罗斯语",
      Bulgarian: "保加利亚语",
      Icelandic: "冰岛语",
      Bosnian: "波斯尼亚语",
      Persian: "波斯语",
      Russian: "俄语",
      "Chinese(Traditional)": "繁体中文",
      Finnish: "芬兰语",
      Kazakh: "哈萨克语",
      Galician: "加利西亚语",
      Catalan: "加泰罗尼亚语",
      "Chinese(Simplified)": "简体中文",
      Kannada: "卡纳达语",
      Croatian: "克罗地亚语",
      Latvian: "拉脱维亚语",
      Lithuanian: "立陶宛语",
      Romanian: "罗马尼亚语",
      Marathi: "马拉地语",
      Malay: "马来语",
      Macedonian: "马其顿语",
      Maori: "毛利语",
      Afrikaans: "南非语 (阿非利卡语)",
      Nepali: "尼泊尔语",
      Norwegian: "挪威语",
      Swedish: "瑞典语",
      Serbian: "塞尔维亚语",
      Slovak: "斯洛伐克语",
      Slovenian: "斯洛文尼亚语",
      Swahili: "斯瓦希里语",
      Tagalog: "菲律宾语",
      Tamil: "泰米尔语",
      Thai: "泰语",
      Turkish: "土耳其语",
      Welsh: "威尔士语",
      Urdu: "乌尔都语",
      Ukrainian: "乌克兰语",
      Greek: "希腊语",
      Armenian: "亚美尼亚语",
      Hindi: "印地语",
      Indonesian: "印度尼西亚语",
      Vietnamese: "越南语",
      Albanian: "阿尔巴尼亚语",
      Amharic: "阿姆哈拉语",
      Assamese: "阿萨姆语",
      Occitan: "奥克语",
      Bashkir: "巴什基尔语",
      Basque: "巴斯克语",
      Breton: "布列塔尼语",
      Tibetan: "藏语",
      Faroese: "法罗语",
      Sanskrit: "梵语",
      Khmer: "高棉语",
      Georgian: "格鲁吉亚语",
      Gujarati: "古吉拉特语",
      "Haitian Creole": "海地克里奥尔语",
      Hausa: "豪萨语",
      Latin: "拉丁语",
      Lao: "老挝语",
      Lingala: "林加拉语",
      Luxembourgish: "卢森堡语",
      Malagasy: "马尔加什语",
      Maltese: "马耳他语",
      Malayalam: "马拉雅拉姆语",
      Mongolian: "蒙古语",
      Bengali: "孟加拉语",
      Burmese: "缅甸语",
      Punjabi: "旁遮普语",
      Pashto: "普什图语",
      Sinhala: "僧伽罗语",
      Shona: "修纳语",
      Somali: "索马里语",
      Tajik: "塔吉克语",
      Tatar: "鞑靼语",
      Telugu: "泰卢固语",
      Turkmen: "土库曼语",
      Uzbek: "乌兹别克语",
      Hawaiian: "夏威夷语",
      "Norwegian Nynorsk": "新挪威语",
      Sindhi: "信德语",
      Sundanese: "巽他语",
      Yiddish: "意第绪语",
      Yoruba: "约鲁巴语",
      Javanese: "爪哇语",
      Cantonese: "粤语",
      Abkhaz: "阿布哈兹语",
      Afar: "阿法尔语",
      alz: "阿卢尔语",
      ach: "阿乔利语",
      awa: "阿瓦德语",
      Avaric: "阿瓦尔语",
      Ewe: "埃维语",
      Aymara: "艾马拉语",
      Irish: "爱尔兰语",
      Oriya: "奥利亚语",
      Oromo: "奥罗莫语",
      Ossetian: "奥塞梯语",
      tpi: "巴布亚皮钦语",
      bew: "巴达维语",
      ban: "巴厘语",
      btx: "巴塔克卡罗语",
      bbc: "巴塔克托巴语",
      bts: "巴塔克西马隆贡语",
      bci: "巴乌雷语",
      Bambara: "班巴拉语",
      pag: "邦阿西楠语",
      pam: "邦板牙语",
      nso: "北索托语",
      bem: "奔巴语",
      bik: "比科尔语",
      bal: "俾路支语",
      bho: "博杰普尔语",
      bua: "布里亚特语",
      chm: "草原马里语",
      Chamorro: "查莫罗语",
      Chechen: "车臣语",
      chk: "楚克语",
      Chuvash: "楚瓦什语",
      Tswana: "茨瓦纳语",
      Tsonga: "聪加语",
      "fa-AF": "达里语",
      shn: "掸语",
      tet: "德顿语",
      Divehi: "迪维希语",
      dyu: "迪尤拉语",
      tiv: "蒂夫语",
      din: "丁卡语",
      doi: "多格拉语",
      "ndc-ZW": "恩道语",
      "South Ndebele": "恩德贝莱语（南部）",
      dov: "恩敦贝语",
      "bm-Nkoo": "恩科字母（西非书面文字）",
      "French(Canada)": "法语（加拿大）",
      Fijian: "斐济语",
      fon: "丰语",
      "Western Frisian": "弗里西语",
      fur: "弗留利语",
      Fulah: "富拉尼语",
      Kongo: "刚果语",
      Kalaallisut: "格陵兰语",
      gom: "贡根语",
      Guarani: "瓜拉尼语",
      cnh: "哈卡钦语",
      hrx: "洪斯吕克语",
      Kyrgyz: "吉尔吉斯语",
      ktu: "吉土巴语",
      gaa: "加语",
      kac: "景颇语",
      Kanuri: "卡努里语",
      kha: "卡西语",
      kek: "凯克其语",
      Komi: "科米语",
      Xhosa: "科萨语",
      Corsican: "科西嘉语",
      "crh-Latn": "克里米亚鞑靼语（拉丁文）",
      crh: "克里米亚鞑靼语（西里尔文）",
      Quechua: "克丘亚语",
      Kurdish: "库尔德语（库尔曼吉语）",
      ckb: "库尔德语（索拉尼）",
      trp: "廓克博若克语",
      ltg: "拉特加莱语",
      lij: "利古里亚语",
      Limburgish: "林堡语",
      Kirundi: "隆迪语",
      luo: "卢奥语",
      Luganda: "卢干达语",
      Kinyarwanda: "卢旺达语",
      lmo: "伦巴第语",
      rom: "罗姆语",
      mad: "马都拉语",
      Manx: "马恩岛语",
      mwr: "马尔瓦迪语",
      "ms-Arab": "马来语（爪夷文）",
      Marshallese: "马绍尔语",
      mam: "玛姆语",
      mai: "迈蒂利语",
      mfe: "毛里裘斯克里奥耳语",
      "mni-Mtei": "梅泰语（曼尼普尔语）",
      min: "米南语",
      lus: "米佐语",
      hmn: "苗语",
      nhe: "纳瓦特尔语（东部瓦斯特卡）",
      "Southern Sotho": "南索托语",
      new: "尼泊尔语言（尼瓦尔语）",
      nus: "努尔语",
      pap: "帕皮阿门托语",
      "pa-Arab": "旁遮普语（沙木基文）",
      "pt-PT": "葡萄牙语（葡萄牙）",
      Chichewa: "齐切瓦语",
      cgg: "奇加语",
      lua: "奇卢伯语",
      Akan: "契维语",
      zap: "萨巴特克语",
      "Northern Sami": "萨米语（北部）",
      Samoan: "萨摩亚语",
      kri: "塞拉利昂克里奥尔语",
      crs: "塞舌尔克里奥尔语",
      Sango: "桑戈语",
      "sat-Latn": "桑塔利语（拉丁文）",
      sat: "桑塔利语（欧甘文）",
      Esperanto: "世界语",
      Swati: "斯瓦特语",
      "Scottish Gaelic": "苏格兰盖尔语",
      sus: "苏苏语",
      ceb: "宿务语",
      ber: "塔马齐格特语（提非纳文）",
      "ber-Latn": "塔马塞特语",
      Tahitian: "塔希提语",
      Tonga: "汤加语",
      Tigrinya: "提格里尼亚语",
      tcy: "图鲁语",
      tum: "图姆布卡语",
      tyv: "图瓦语",
      war: "瓦瑞语",
      mak: "望加锡语",
      vec: "威尼斯语",
      Uyghur: "维吾尔语",
      Venda: "文达语",
      Wolof: "沃洛夫语",
      udm: "乌德穆尔特语",
      szl: "西里西亚语",
      scn: "西西里语",
      hil: "希利盖农语",
      jam: "牙买加土语",
      sah: "雅库特语",
      ace: "亚齐语",
      iba: "伊班语",
      Igbo: "伊博语",
      ilo: "伊洛卡诺语",
      "iu-Latn": "因纽特语（拉丁文）",
      Inuktitut: "因纽特语（音节）",
      yua: "尤卡坦玛雅语",
      Dzongkha: "宗卡语",
      Zulu: "祖鲁语"
    }
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "或", // 或
    LoginBtn: "使用邮箱登录",
    LoginGoogle: "使用 Google 登录",
    SignupBtn: "使用邮箱注册",
    SignupGoogle: "使用 Google 注册",
    SignupDes: "立即注册，免费体验神奇效果。",
    SignupTitle: "高精度且无限量转录",
    signup: "注册", // 注册
    sign_up: "注册", // 注册
    loginByGoogle: "使用Google登录", // 使用Google登录
    emailAddress: "请输入您的邮箱", // 请输入您的邮箱
    createAccount: "创建账户", // 创建账户
    accountExists: "已经有账户了? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "继续操作，即表示您同意我们的{terms}和{policy}。",
      terms: "条款",
      policy: "隐私政策"
    },
    setPassword: "设置密码", // 设置密码
    code: "验证码", // 验证码
    resend: "重新发送", // 重新发送
    enterPassword: "密码：最少6个字符。", // 请输入密码
    passwordLeval: "密码强度", // 密码强度
    Weak: "弱", // 弱 中 强
    Medium: "中", // 弱 中 强
    Strong: "强", // 弱 中 强
    confirmPassword: "确认密码", // 确认密码
    invalidEmail: "无效的邮箱地址", // 无效的邮箱地址
    logInDirectly: "账户已存在，请直接登录。", // 账户已存在，请直接登录
    codeErrorTryAgain: "验证码错误，请重试。", // 验证码错误，请重试
    atLeastSix: "密码长度至少6位。", // 密码长度至少6位
    passwordNotMatch: "密码不匹配，请重试。", // 密码不匹配，请重试
    login: "登录", // 登录
    log_in: "登录", // 登录
    log_In: "登录", // 登录
    password: "密码", // 密码
    forgotPassword: "忘记密码？", // 忘记密码？
    noAccount: "没有账户？", // 没有账户？注册
    accountNotExists: "账户不存在。", // 账户不存在
    passwordError: "密码错误", // 密码错误
    sendCode: "发送验证码", // 发送验证码
    resetPassword: "重置密码", // 重置密码
    resetYourPassword: "重置密码", // 重置你的密码
    newOldCantSame: "新密码与旧密码不能相同。", // 新密码与旧密码不能相同
    passwordResetOk: "密码重置成功！", // 密码重置成功！
    signupToSaveProgress: "完成注册以保存您的进度。", // 完成注册以保存您的进度
    tip: "提示",
    tipContentEmail: "我们已将您的账户登录密码发送至您的邮箱。",
    tipContentPassword: "请检查收件箱，使用邮箱和密码登录。",
    codeToEmail: "我们已向您的邮箱发送了验证码。请查收邮件并在上方粘贴验证码。"
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "订阅计划",
    freeversion: "免费版",
    transcribeTimesDay: "每日3次转录",
    uploadMinutes: "30分钟上传",
    lowerPriority: "较低优先级",
    currentPlan: "当前计划",
    professionalEdition: "专业版",
    unlimitedTranscription: "无限次转录",
    unlimitedNumberOfTimes: "转录频率和时长无限制。",
    filesUploadedAtOnce: "单个文件最长10小时/5GB。可同时上传50个文件。",
    highestPriority: "最高优先级",
    weWillGiveTheHighest: "我们将始终以最高优先级尽快转录您的文件。",
    theFirstMonth: "首月",
    subscribeTo: "订阅",
    basicVersionFree: "基础版（免费）",
    return: "返回",
    annualize: "按年订阅",
    monthly: "按月订阅",
    everyYear: "每年",
    saved: "已节省",
    byTheMonth: "按月",
    firstMonth: "首月",
    afterwardsEveryMonth: "之后每月",
    manageSubscription: "管理订阅",
    professionalYearbook: "专业年费版",
    professionalMonthly: "专业月费版",
    subscriptionWillCancelledOn: "订阅到期日",
    displayLanguage: "显示语言",
    update: "立即升级",
    basicversion: "基础版（免费）",
    daily: "已用{start}次，每日限额{end}次",
    upgradetoPro: "升级至专业版",
    accountSetting: "账户设置",
    logOut: "登出",
    account: "账户",
    email: "电子邮箱",
    id: "ID",
    password: "密码",
    resetPassword: "重置密码",
    logIn: "登录",
    tryForFree: "免费试用",
    notFund: "未找到",
    couldntFind: "找不到您要的内容。",
    proAnnual: "专业年费版",
    proMonthly: "专业月费版",
    perMonth: "每月",
    afterwards: "之后",
    accuracy: "转录准确率",
    supported: "支持语言",
    identification: "说话人识别",
    transcriptSranslation: "转录翻译",
    perYear: "每年",
    getProPlan: "获取专业版",
    changeToAnnual: "切换为年费",
    automaticRenewalon: "自动续费日期",
    eachMonth: "每月{time}日自动续订",
    automaticRenewal: "自动续费失败，请检查支付方式。",
    eachYear: "每年{time}自动续费",
    returnAccountSetting: "返回",
    needsToWaitLonger: "在文件转录完成前请稍作等待。",
    freeThreeTimesDay: "每天免费转录3个文件。",
    oneFileUploaded: "每个文件最长30分钟。每次上传1个文件。",
    uploadWithinHours: "10小时上传",
    yourSubscription: "您的订阅将于{time}取消",
    save: "节省",
      freeversion2: "免费套餐"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中文(简体)",
      "Chinese(Traditional)": "中文(繁体)",
      Japanese: "日语",
      Danish: "丹麦语",
      German: "德语",
      English: "英语",
      Spanish: "西班牙语",
      French: "法语",
      Italian: "意大利语",
      Hungarian: "匈牙利语",
      Dutch: "荷兰语",
      Norwegian: "挪威语",
      Polish: "波兰语",
      Portuguese: "葡萄牙语",
      Finnish: "芬兰语",
      Swedish: "瑞典语",
      Turkish: "土耳其语",
      Greek: "希腊语",
      Russian: "俄语",
      Ukrainian: "乌克兰语",
      Hebrew: "希伯来语",
      Arabic: "阿拉伯语",
      Korean: "韩语"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​开源的Nuxt3 SaaS模板，预集成全球支付网关（Stripe/Cream）、Google OAuth、i18n路由和SEO优化工具。专为开发多语言Web应用的开发者设计，提供SSR/SSG支持和生产级安全性。",
    startLink: "开始免费试用~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle: "加入候补名单，第一时间获取最新NuxtPro新闻和折扣！",
      placeholder: "输入您的邮箱",
      button: "加入候补名单",
      joinCountMessage: "🔥 早期用户 #{count} 刚刚加入了候补名单！"
    },
    seo: {
      title: "开源Nuxt SaaS样板 | NuxtPro",
      description:
        "包含您需要的一切的NuxtJS样板，让您的产品快速面向客户。从想法到生产只需5分钟。"
    },
    api: {
      title: "这是一个演示",
      corpInfo: "公司信息"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "视频下载错误"
      },
      mse: {
        code: 2,
        msg: "流追加错误"
      },
      parse: {
        code: 3,
        msg: "解析错误"
      },
      format: {
        code: 4,
        msg: "格式错误"
      },
      decoder: {
        code: 5,
        msg: "解码错误"
      },
      runtime: {
        code: 6,
        msg: "语法错误"
      },
      timeout: {
        code: 7,
        msg: "播放超时"
      },
      other: {
        code: 8,
        msg: "其他错误"
      }
    },
    HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
    HAVE_METADATA: "音频/视频的元数据已就绪",
    HAVE_CURRENT_DATA:
      "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
    HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
    HAVE_ENOUGH_DATA: "可用数据足以开始播放",
    NETWORK_EMPTY: "音频/视频尚未初始化",
    NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
    NETWORK_LOADING: "浏览器正在下载数据",
    NETWORK_NO_SOURCE: "未找到音频/视频来源",
    MEDIA_ERR_ABORTED: "取回过程被用户中止",
    MEDIA_ERR_NETWORK: "网络错误",
    MEDIA_ERR_DECODE: "解码错误",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
    REPLAY: "重播",
    ERROR: "网络连接似乎出现了问题",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暂停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下载",
    ROTATE_TIPS: "旋转",
    RELOAD_TIPS: "重新载入",
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "进入样式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出样式全屏",
    TEXTTRACK: "字幕",
    PIP: "画中画",
    SCREENSHOT: "截图",
    LIVE: "正在直播",
    OFF: "关闭",
    OPEN: "开启",
    MINI_DRAG: "点击按住可拖动视频",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "请试试",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播",
    TM_SUBTITLE_SHOW_TIPS: "开启字幕",
    TM_SUBTITLE_HIDE_TIPS: "关闭字幕",
    TM_MINIMIZE_TIPS: "隐藏视频"
  },
  privacyPolicy: {
    privacyPolicyTitle: "隐私政策",
    lastUpdated: "最后更新：2025年8月25日",
    policyDescription:
      "本政策描述了 Scribify（以下简称“Scribify”、“我们的”、“我们”）在您使用我们的服务、网站时如何收集、使用和披露您的个人信息",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition: "以及软件（统称为“服务”）。",
    policyAgreement:
      "请仔细阅读本隐私政策，并确保您理解其内容。使用我们的任何服务，即表示您同意本隐私政策。如果您不同意我们根据本政策使用您的个人数据，您必须立即停止使用我们的服务。",
    policyOverview:
      "在本政策中，我们阐述了：我们收集哪些数据以及收集原因；您的数据将如何处理；以及您对您的数据享有的权利。我们不会出售您的数据。",
    scopeTitle: "1.本隐私政策的范围",
    whatWeCollectTitle: "2. 我们收集哪些信息以及为什么",
    accessShareTitle: "3. 我们何时访问或共享您的信息",
    secureDataTitle: "4. 我们如何保护您的数据",
    deleteContentTitle: "5. 删除内容后会发生什么",
    locationTitle: "6. 站点和数据的位置",
    childrenPrivacyTitle: "7.儿童隐私",
    updatesTitle: "8. 本隐私政策的更新",
    contactUsTitle: "9. 联系我们",
    identityAccessTitle: "2.1 身份与访问",
    billingInfoTitle: "2.2 账单信息",
    productInteractionsTitle: "2.3 产品交互",
    websiteInteractionsTitle: "2.4 网站互动",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 自愿通信",
    scopeContent:
      "本隐私政策仅适用于我们对服务用户信息的收集和处理。本隐私政策不适用于任何链接到我们的第三方运营的服务、网站或软件（无论这些链接是由我们提供的还是其他用户分享的），也不适用于来自第三方的内容、数据、应用程序或资料。我们建议您在向任何第三方网站或软件提供任何信息之前，先查看其隐私政策。",
    collectPrinciple:
      "我们的指导原则是只收集我们需要的信息。以下是实际操作中的含义：",
    identityAccessContent:
      "当您注册我们的某款产品时，我们会要求您提供身份信息，例如您的姓名、电子邮件地址。这是为了提供必要的产品功能，并方便我们向您发送产品更新和其他重要信息。",
    billingInfoContent:
      "如果您注册付费产品，我们将要求您提供付款信息和账单地址。付款信息将直接提交给我们的付款处理器，不会发送到我们的服务器。",
    productInteractionsContent:
      "我们将您在产品帐户中上传、接收或维护的内容存储在我们的服务器上。除非您删除这些内容，否则只要您的帐户处于活跃状态，我们就会一直保留这些内容。",
    websiteInteractionsContent:
      "我们收集您的浏览活动信息，用于分析和统计目的，例如转化率测试和新产品设计实验。这些信息包括：例如，您的浏览器和操作系统版本、您的 IP 地址、您访问过的网页及其加载时间，以及哪个网站将您推荐给我们。如果您拥有账户并已登录，这些网络分析数据将与您的 IP 地址和用户账户绑定，直至您的账户不再活跃。",
    cookiesContent1:
      "我们还使用持久性第一方 cookie 和一些第三方 cookie 来存储某些偏好，让您更轻松地使用我们的应用程序，并执行 A/B 测试以及支持一些分析。",
    cookiesContent2:
      "Cookie 是浏览器存储的一段文本。它可以帮助您记住登录信息和站点偏好设置。它还可能收集您的浏览器类型、操作系统、访问过的网页、访问时长、浏览过的内容以及其他点击流数据等信息。您可以在浏览器设置中调整 Cookie 保留设置，并接受或阻止单个 Cookie。但是，如果您关闭 Cookie，我们的应用程序将无法运行，我们服务的其他方面也可能无法正常运行。",
    voluntaryCorrespondenceContent:
      "当您通过电子邮件向我们提出问题或寻求帮助时，我们会保留该通信记录，包括您的电子邮件地址，以便我们在您将来联系我们时可以参考过去的通信记录。",
    accessShareContent1:
      "为了提供您所请求的产品或服务。我们会使用一些第三方子处理器来协助运行我们的应用程序并向您提供服务。这包括云和分析提供商。",
    accessShareContent2:
      "调查、预防或采取行动应对滥用行为。在调查潜在滥用行为时，访问客户账户是不得已而为之。我们希望保护客户和举报人的隐私和安全，并在整个过程中尽力平衡这些责任。如果我们发现您将我们的产品用于受限用途，我们将采取必要的措施，包括在必要时通知相关部门。",
    accessShareContent3: "根据适用法律的要求。",
    userDataRequests:
      "- 用户数据请求。我们的政策是，除非法律程序强制要求或在有限的紧急情况下，否则我们不会响应政府的用户数据请求。但是，如果美国执法机构持有必要的搜查令、刑事传票或法院命令要求我们共享数据，我们必须遵守。同样，只有在美国政府通过司法互助条约或协议中规定的程序强制要求的情况下，我们才会响应来自美国境外政府机构的请求。我们的政策是在共享数据之前通知受影响的用户，除非法律禁止我们这样做，并且某些紧急情况除外。",
    preservationRequests:
      "- 保存请求。同样，我们的政策是，仅在美国《联邦存储通信法》第 18 USC 第 2703(f) 条或美国民事传票强制要求的情况下，我们才会遵守保存数据的请求。除非法律要求或法院命令强制要求（我们选择不上诉），否则我们不会共享已保存的数据。此外，除非我们在规定保存期到期前收到适当的搜查令、法院命令或传票，否则我们将在保存期结束时销毁任何已保存的客户数据副本。",
    taxAudit:
      "- 如果我们受到税务机关的审计，我们可能需要共享账单相关信息。在这种情况下，我们只会共享必要的最低限度的信息，例如账单地址和免税信息。",
    secureDataContent1: "所有数据均通过加密",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "当从我们的服务器传输到您的浏览器时。",
    deleteContentContent: "如果您删除任何内容，它将立即变得无法访问。",
    locationContent:
      "我们的产品和其他网络资产在美国运营。如果您位于欧盟、英国或美国以外的其他地方，请注意，您向我们提供的任何信息都将被传输至美国并存储于美国。使用我们的网站或服务和/或向我们提供您的个人信息，即表示您同意此类传输。",
    childrenPrivacyContent:
      "本服务并非针对儿童，我们不会故意收集 13 岁以下儿童的个人信息。如果您未满 13 岁，请勿通过本服务提交任何个人信息。如果您认为有儿童违反本政策向我们提供了个人信息，请按照以下方式联系我们。",
    updatesContent:
      "我们可能会根据需要更新本政策，以符合相关法规并反映任何新的做法。每当我们的政策做出重大变更时，我们都会更新本页面顶部的日期。",
    contactUsContent1: "如果您对我们的隐私政策有任何疑问、意见或投诉，请",
    contactUs: "联系我们",
    contactUsContent2: "我们将尽力尽快处理您的投诉。"
  },
  termsOfService: {
    termsOfServiceTitle: "服务条款",
    lastUpdated: "最后更新：2022 年 9 月 21 日",
    thankYouMessage: "感谢您使用我们的产品！",
    companyReference:
      "当我们在本文档中说“公司”、“我们”、“我们的”或“我们”时，我们指的是 Scribify。",
    servicesDefinition:
      "当我们说“服务”时，我们指的是 Scribify 创建和维护的任何产品，无论是通过网络浏览器、桌面应用程序、移动应用程序还是其他格式交付。",
    termsUpdateNotice:
      "我们未来可能会更新本服务条款。通常，这些变更旨在通过链接至更详细的相关政策来澄清部分条款。每当我们对政策做出重大变更时，我们都会更新本页面顶部的日期，并采取其他适当措施通知帐户持有人。",
    acceptanceOfAgreementTitle: "1. 接受协议",
    scribifyServicesTitle: "2. Scribify 的服务",
    accountTermsTitle: "3. 账户条款",
    paymentRefundsTitle: "4. 付款、退款和计划变更",
    cancellationTerminationTitle: "5. 取消和终止",
    submissionsTitle: "6. 提交内容",
    uptimeSecurityTitle: "7. 正常运行时间和安全性",
    siteManagementTitle: "8.现场管理",
    copyrightContentTitle: "9. 版权和内容所有权",
    prohibitedActivitiesTitle: "10.禁止的活动",
    featuresBugsTitle: "11. 功能和错误",
    correctionsTitle: "12. 更正",
    userDataTitle: "13.用户数据",
    privacyPolicyTitle: "14. 隐私政策",
    liabilityTitle: "15. 责任",
    miscellaneousTitle: "16. 其他",
    contactUsTitle: "17. 联系我们",
    acceptanceContent1:
      "使用我们的服务，即表示您接受本协议，本协议由此成为您与 Scribify 之间具有约束力的合同。您声明您具备法定能力接受这些条款，并确认您已达到订立具有约束力合同的法定年龄。Scribify 的接受明确以您同意本协议的所有条款和条件为前提。",
    acceptanceContent2:
      "该服务不适用于 18 岁以下的任何人，也不应该由 18 岁以下的任何人使用。通过使用该服务，您声明并保证您符合上述资格要求。",
    acceptanceContent3:
      "“您”、“您的”、“您本人”等词语也包括您的员工、代理人、业务代表以及您允许通过您的帐户（定义见下文）访问服务的任何其他个人。您有责任确保所有通过您的帐户访问服务的人员均知悉并遵守本条款。",
    acceptanceContent4:
      "Scribify 保留随时自行决定修改和更新本条款的权利。所有变更一经发布即刻生效。如果您在修订条款发布后继续使用服务，即表示您接受并同意这些变更。由于变更对您具有约束力，因此请您不时查看此页面，以了解任何变更。",
    servicesContent1:
      "我们的服务使用户能够将语音对话转换为可搜索、翻译和与他人共享的转录文本。",
    servicesContent2:
      "您可以选择使用服务的免费版本（“免费服务”）或可能需要支付费用的订阅式付费版本服务（“付费服务”）。",
    servicesContent3:
      "我们将向您提供服务。您有责任做好一切必要安排，以便访问服务。",
    accountTerms1:
      "- 您有责任维护您的账户安全。如果您未能履行此安全义务，本公司将不承担任何因您未能履行此安全义务而造成的任何损失或损害。",
    accountTerms2: "- 您不得将服务用于任何非法、不道德或不道德的目的。",
    accountTerms3:
      "- 您应对您帐户下发布的所有内容和活动负责。这包括以下人员发布的内容：(a) 有权访问您的登录凭据；或 (b) 在您的帐户下拥有自己的登录信息。",
    accountTerms4:
      "- 您必须是人类。不允许使用“机器人”或其他自动化方法注册的账户。",
    paymentContent1:
      "- 对于提供免费试用的付费服务，我们会在您注册时说明试用期限。试用期结束后，您需要提前付费才能继续使用服务。如果您不付费，这些服务将被终止。",
    paymentContent2:
      "- 如果您从免费计划升级到付费计划，我们将立即从您的卡中扣款，您的计费周期从升级当天开始。",
    paymentContent3:
      "- 所有费用均不含税务机关征收的任何税费、征税或关税。如有需要，我们将代表税务机关代收这些税费，并将税费汇给税务机关。否则，您需自行承担所有税费、征税或关税。",
    paymentContent4:
      "- 所有购买均不可退款。您可以随时登录您的帐户取消任何付费服务。对于付费订阅，除非另有说明，否则您的取消将在当前付费期限结束时生效。",
    cancellationContent1:
      "- 如果您在任何付费期限结束前取消服务，您的取消将立即生效，并且不会再次向您收费。我们不会在上一个计费周期内自动按比例分配未使用的时间。",
    cancellationContent2:
      "- 我们有权随时以任何理由暂停或终止您的帐户，并拒绝您当前或未来使用我们的服务。暂停意味着您将无法访问该帐户或帐户中的任何内容。终止将导致您的帐户或您对帐户的访问权限被删除，以及您帐户中所有内容的丧失和放弃。我们还保留随时以任何理由拒绝任何人使用服务的权利。我们制定此条款是因为从统计数据来看，在我们服务的数十万个帐户中，至少有一个帐户正在从事恶意活动。",
    cancellationContent3:
      "- 对公司员工或官员进行口头、身体、书面或其他辱骂（包括辱骂或报复威胁）可能会导致立即终止帐户。",
    submissionsContent:
      "您确认并同意，您向我们提供的关于本网站的任何问题、评论、建议、想法、反馈或其他信息（统称“提交内容”）均非保密信息，并将成为我们的唯一财产。我们拥有包括所有知识产权在内的专有权利，并有权出于任何合法目的（商业或其他目的）不受限制地使用和传播这些提交内容，而无需向您确认或支付任何报酬。您特此放弃对任何此类提交内容的所有精神权利，并保证任何此类提交内容均为您的原创或您有权提交此类提交内容。您同意，对于任何涉嫌或实际侵犯或盗用您提交内容中任何专有权利的行为，您不得向我们追诉。",
    uptimeContent1:
      "- 您使用本服务的风险由您自行承担。我们以“现状”和“可用”为基础提供这些服务。我们大多数服务不提供服务级别协议，但我们非常重视应用程序的正常运行时间。",
    uptimeContent2:
      "- 如果您的使用量显著超过其他用户的平均使用量，我们保留暂时停用您帐户的权利。当然，我们会在采取任何措施之前与您联系，除非在极少数情况下，您的使用量可能会对其他用户的服务性能产生负面影响。",
    uptimeContent3:
      "- 我们采取多种措施，通过备份、冗余和加密来保护您的数据安全。我们对通过公共互联网传输的数据强制加密。",
    uptimeContent4:
      "- 我们使用第三方供应商和托管合作伙伴来提供运行服务所需的必要硬件、软件、网络、存储和相关技术。",
    siteManagementContent:
      "我们保留以下权利（但没有义务）：（1）监控网站是否违反这些服务条款；（2）对我们自行决定违反法律或这些服务条款的任何人采取适当的法律行动，包括但不限于向执法部门举报该用户；（3）我们自行决定且不受限制地拒绝、限制访问、限制可用性或禁用（在技术可行的范围内）您的任何贡献或其任何部分；（4）我们自行决定且不受限制地、通知或承担责任，从网站中删除或以其他方式禁用所有过大或以任何方式对我们的系统造成负担的文件和内容；以及（5）以旨在保护我们的权利和财产并促进网站正常运行的方式管理网站。",
    copyrightContent1: "- 服务上发布的所有内容必须符合美国版权法。",
    copyrightContent2:
      "- 我们对您向服务提供的材料不主张任何知识产权。所有上传的材料仍归您所有。",
    copyrightContent3:
      "- 我们不预先筛选内容，但保留自行决定拒绝或删除通过服务提供的任何内容的权利（但没有义务）。",
    copyrightContent4:
      "- 服务的名称、外观和风格均受公司版权©保护。保留所有权利。未经公司明确书面许可，您不得复制、抄袭或重复使用任何 HTML、CSS、JavaScript 或视觉设计元素。您必须申请许可才能将公司徽标或任何服务徽标用于推广目的。请",
    emailUs: "给我们发电子邮件",
    copyrightContent5:
      "请求使用徽标。如果您违反本服务条款，我们保留撤销此许可的权利。",
    copyrightContent6:
      "- 您同意未经公司明确的书面许可，不得复制、复印、拷贝、出售、转售或利用服务的任何部分、使用服务或访问服务。",
    copyrightContent7: "- 您不得修改其他网站以错误地暗示其与服务或公司相关。",
    copyrightContent8:
      "- 我们尊重他人的知识产权。如果您认为本网站上或通过本网站提供的任何材料侵犯了您拥有或控制的任何版权，请立即",
    contactUs: "联系我们",
    copyrightContent9:
      "您的通知副本将发送给发布或存储通知中提及资料的人员。请注意，根据适用法律，如果您在通知中作出重大失实陈述，您可能需承担损害赔偿责任。因此，如果您不确定本网站上或链接的资料是否侵犯了您的版权，您应该首先考虑联系律师。",
    prohibitedActivitiesIntro:
      "您不得出于我们提供本网站目的以外的任何目的访问或使用本网站。除我们明确认可或批准的商业活动外，不得将本网站用于任何商业活动。",
    prohibitedActivitiesUserAgreement: "作为本网站的用户，您同意不：",
    prohibitedActivity1:
      "- 未经我们书面许可，系统地从网站检索数据或其他内容，以直接或间接地创建或编译集合、汇编、数据库或目录。",
    prohibitedActivity2:
      "- 欺骗、诈骗或误导我们和其他用户，尤其是试图了解用户密码等敏感帐户信息。",
    prohibitedActivity3:
      "- 规避、禁用或以其他方式干扰本网站的安全相关功能，包括阻止或限制使用或复制任何内容或强制限制使用本网站和/或其中包含的内容的功能。",
    prohibitedActivity4:
      "- 我们认为，贬低、玷污或以其他方式损害我们和/或本网站。",
    prohibitedActivity5: "- 使用从本网站获得的任何信息来骚扰、辱骂或伤害他人。",
    prohibitedActivity6:
      "- 不当使用我们的支持服务或提交虚假的滥用或不当行为报告。",
    prohibitedActivity7: "- 以不符合任何适用法律或法规的方式使用本网站。",
    prohibitedActivity8: "- 未经授权构建或链接本网站。",
    prohibitedActivity9:
      "- 上传或传输（或试图上传或传输）病毒、特洛伊木马或其他材料，包括过度使用大写字母和垃圾邮件（连续发布重复文本），干扰任何一方对网站的不间断使用和享受，或修改、损害、破坏、更改或干扰网站的使用、特性、功能、操作或维护。",
    prohibitedActivity10:
      "- 从事任何自动化系统使用，例如使用脚本发送评论或消息，或使用任何数据挖掘、机器人或类似的数据收集和提取工具。",
    prohibitedActivity11: "- 从任何内容中删除版权或其他所有权声明。",
    prohibitedActivity12: "- 试图冒充其他用户或个人或使用其他用户的用户名。",
    prohibitedActivity13:
      "- 上传或传输（或试图上传或传输）任何作为被动或主动信息收集或传输机制的材料，包括但不限于清晰图形交换格式（“gif”）、1×1像素、网络臭虫、cookies或其他类似设备（有时称为“间谍软件”或“被动收集机制”或“pcms”）。",
    prohibitedActivity14:
      "- 干扰、破坏或对本网站或与本网站相连的网络或服务造成不当负担。",
    prohibitedActivity15:
      "- 骚扰、烦扰、恐吓或威胁任何向您提供本网站任何部分的员工或代理人。",
    prohibitedActivity16:
      "- 试图绕过本网站为防止或限制访问本网站或本网站任何部分而设计的任何措施。",
    prohibitedActivity17:
      "- 复制或改编本网站的软件，包括但不限于 Flash、PHP、HTML、JavaScript 或其他代码。",
    prohibitedActivity18:
      "- 除适用法律允许外，不得对包含或以任何方式构成本网站一部分的任何软件进行解密、反编译、反汇编或反向工程。",
    prohibitedActivity19:
      "- 除标准搜索引擎或互联网浏览器的使用结果外，使用、启动、开发或分发任何自动化系统，包括但不限于访问本网站的任何蜘蛛、机器人、欺骗实用程序、抓取工具或离线阅读器，或使用或启动任何未经授权的脚本或其他软件。",
    prohibitedActivity20: "- 使用采购代理或采购代理在网站上进行购买。",
    prohibitedActivity21:
      "- 未经授权使用本网站，包括通过电子或其他方式收集用户的用户名和/或电子邮件地址以发送未经请求的电子邮件，或通过自动方式或虚假借口创建用户帐户。",
    prohibitedActivity22:
      "- 将本网站用作与我们竞争的任何努力的一部分，或以其他方式将本网站和/或内容用于任何创收活动或商业企业。",
    prohibitedActivity23: "- 使用本网站宣传或提供销售商品和服务。",
    prohibitedActivity24: "- 出售或以其他方式转让您的个人资料。",
    featuresContent1:
      "我们根据自身经验以及客户分享的时间和反馈，精心设计我们的服务。然而，不可能存在让所有人满意的服务。我们不保证我们的服务一定能满足您的特定要求或期望。",
    featuresContent2:
      "我们还会测试所有功能，然后再发布。与任何软件一样，我们的服务不可避免地会存在一些错误。我们会跟踪收到的错误报告并努力解决，尤其是与安全或隐私相关的错误。并非所有报告的错误都会得到修复，我们也无法保证服务完全没有错误。",
    correctionsContent1:
      "本网站上的信息可能存在排印错误、不准确或遗漏，包括描述、价格、供货情况以及其他各种信息。我们保留随时更正任何错误、不准确或遗漏以及更改或更新本网站信息的权利，恕不另行通知。",
    correctionsContent2:
      "我们无法保证本网站始终可用。我们可能会遇到硬件、软件或其他问题，或需要执行与本网站相关的维护，从而导致中断、延迟或错误。我们保留随时以任何理由更改、修订、更新、暂停、中止或以其他方式修改本网站的权利，恕不另行通知。您同意，对于因您在本网站停机或中止期间无法访问或使用本网站而造成的任何损失、损害或不便，我们概不负责。本服务条款中的任何内容均不得解释为我们有义务维护和支持本网站，或提供与此相关的任何更正、更新或发布。",
    userDataContent:
      "我们将保留您传输至本网站的某些数据，用于管理本网站的性能，以及与您使用本网站相关的数据。尽管我们会定期备份数据，但您应对您传输的所有数据或与您使用本网站进行的任何活动相关的数据承担全部责任。您同意，对于任何此类数据的丢失或损坏，我们概不负责，并且您特此放弃因任何此类数据的丢失或损坏而向我们提起诉讼的权利。",
    privacyPolicyContent1: "我们重视数据隐私和安全。请查看我们的",
    privacyPolicy: "隐私政策",
    privacyPolicyContent2:
      ". 使用本网站即表示您同意遵守我们的隐私政策，该政策已纳入本服务条款。请注意，本网站托管于美国。如果您从世界任何其他地区访问本网站，且该等地区在管理个人数据收集、使用或披露方面适用的法律或其他要求与美国适用法律不同，则您继续使用本网站即表示您将把您的数据传输至美国，并且您同意将您的数据传输至美国并在美国进行处理。",
    liabilityIntro: "我们在这些条款中都提到了责任，但将其全部放在一个部分：",
    liabilityContent:
      "您明确理解并同意，对于因以下原因造成的任何直接、间接、附带、利润损失、特殊、后果性、惩罚性或惩戒性损害，包括但不限于利润损失、商誉损失、使用损失、数据损失或其他无形损失（即使公司已被告知发生此类损害的可能性），本公司不对您或任何第三方承担法律或衡平法上的责任：（1）使用或无法使用服务；（2）内容和材料的错误、失误或不准确之处；（3）因您访问和使用本网站而造成的任何性质的人身伤害或财产损失；（4）因通过或从服务购买或获得的任何商品、数据、信息或服务或收到的消息或达成的交易而产生的替代商品和服务的采购成本；（5）未经授权访问或使用我们的安全服务器和/或存储在其中的任何和所有个人信息和/或财务信息；（6）中断或停止往返于本网站的传输； (7) 任何第三方传输到或通过本网站的任何错误、病毒、特洛伊木马或类似物，和/或； (8) 任何内容和材料中的任何错误或遗漏，或因使用通过本网站发布、传输或以其他方式提供的任何内容而导致的任何损失或损害； (9) 任何第三方在服务上的声明或行为； (10) 或与本服务条款或服务有关的任何其他事项，无论是违约、侵权行为（包括主动或被动的疏忽）还是任何其他责任理论。",
    miscellaneousContent:
      "本服务条款以及我们在网站上发布的或与网站相关的任何政策或运营规则构成您与我们之间的完整协议和谅解。我们未能行使或执行本服务条款中的任何权利或规定，并不构成对该权利或规定的放弃。本服务条款在法律允许的最大范围内有效。我们可随时将我们的部分或全部权利和义务转让给他人。对于因超出我们合理控制范围的任何原因造成的任何损失、损害、延误或未能采取行动，我们概不负责。如果本服务条款的任何规定或部分规定被认定为非法、无效或不可执行，则该规定或部分规定将被视为可与本服务条款分割，且不影响任何其他规定的有效性和可执行性。您与我们之间并未因本服务条款或使用本网站而建立合资、合作、雇佣或代理关系。您同意，本服务条款不会因起草本服务条款而被解释为我们无效。您特此放弃基于本服务条款的电子形式以及本协议各方未签署执行本服务条款而可能拥有的任何及所有抗辩。",
    contactUsContent1: "如果您对任何服务条款有疑问，请",
    contactUsContent2: "。"
  },
  HeadNavbar: {
    Features: "功能",
    UnlimitedTranscription: "无限转录",
    BulkUpload: "批量上传",
    Accuracy: "96%准确率",
    Pricing: "价格",
    UseCases: "使用案例",
    AllUseCases: "所有使用案例",
    Podcasters: "播客制作者",
    Journalists: "记者",
    ContentCreators: "内容创作者",
    Researchers: "研究人员",
    BusinessTeams: "商务团队",
    Educators: "教育工作者",
    Resources: "资源",
    YouTubetoMP4: "YouTube转MP4",
    StartFreeTrial: "开始免费试用"
  },
  Footer: {
    des: "全球首个真正无限的AI转录服务。无上限，无限制，自由创作。",
    Features: "特征",
    UseCases: "用例",
    Company: "公司",
    featureMenus: ["无限转录", "批量上传", "准确率高达 96%"],
    useCaseMenus: [
          "所有用例",
          "播客",
          "记者",
          "内容创作者",
          "研究人员",
          "业务团队",
          "教育工作者"
        ],
    companyMenus: [
          "关于",
          "定价",
          "隐私",
          "条款"
        ]
  },
  Index: {
    Hero: {
      badge: "不再出现“缩水通胀”——实际上无限",
      h1: "停止支付限制：",
      gradient: "真正无限的人工智能转录",
      subtitle: "我们的 AI 可以转录视频并将音频转换为文本，一次可处理 50 个文件，且无月度上限。真正实现随您扩展的转录服务。",
      FreeTrial: "免费试用 - 无需信用卡",
      HowWorks: "了解其工作原理",
      Unlimited: "无限文件上传",
      NoCap: "无每月通话分钟数上限",
      Hour: "支持 10 小时文件",
      ExploreUseCases: "探索用例"
    },
    Stats: {
      monthlyMinutes: "每月分钟数",
      fileUploads: "文件上传",
      batchProcessing: "批处理",
      maxFileLength: "最大文件长度"
    },
    FeaturesGrid: {
      try_now: "立即试用",
      no_signup: "无需注册",
      experience_unltd: "体验真正无限的转录",
      upload_50: "一次最多可在此上传 50 个文件",
      no_limits: "先进的",
      no_surprises: "人工智能转录",
      transparency: "不再有隐藏的限制，不再有意外——当其他人悄悄地减少你的时间或隐藏小字的限制时，我们相信彻底的透明度",
      feat_unltd: "实际上是无限的",
      feat_unltd_desc: "没有隐藏在条款中的“合理使用政策”。没有伪装成“无限”的存储上限。上传您的全部档案，即可转录所有内容，满足您所有的音频转录需求。我们说到做到。",
      feat_bulk: "批量上传自由",
      feat_bulk_desc: "厌倦了“一次性导入 3 次”或“每月 10 个文件”？一次上传 50 个文件，无限次上传。非常适合处理积压工作。",
      feat_batch: "批处理",
      feat_batch_desc: "一夜之间即可处理完整季播客。一次性上传 50 条访谈。让我们的 AI 在您睡眠时为您服务。醒来即可查看完整的转录稿。",
      feat_accuracy: "准确率高达 96%",
      feat_accuracy_desc: "我们行业领先的人工智能 (AI) 可以使用智能标点符号、最多 20 位说话者的说话者日记功能来转录音频，并能完美处理口音和技术术语。",
      feat_langs: "100多种语言",
      feat_langs_desc: "将视频和音频转录为 100 多种语言，并翻译成 249 多种语言。不同语言无需额外付费。全球内容，一口价。",
      feat_pro: "专业功能",
      feat_pro_desc: "单词级时间戳可实现精确的音频/视频定位，即使在快速对话切换期间也能准确识别说话人，并且段落、句子和标点符号的格式完美的文本可轻松阅读。",
        features: "特征"
    },
    UseCases: {
      built_for: "大部分",
      "heavy_users": "音频和视频转录",
      "join_users": "专为像您一样的重度用户打造 - 加入从“缩水型”服务转换过来的 YouTube 用户、内容创作者和播客",
      "podcasters": {
        "title": "播客",
        "des": "上传您所有的往期节目。为每一集创建节目笔记。无需再选择转录哪一集。"
      },
      "content_creators": {
        "title": "内容创作者",
        "des": "使用我们的服务自动转录视频文件，将您的视频库转换为可搜索的文本。为所有内容生成字幕。无需计算时间，直接创建即可。"
      },
      "journalists": {
        "title": "记者",
        "des": "一次性上传所有采访。截止日期前不再受“每月 10 个文件”的阻碍。处理所有内容。"
      },
      researchers: {
        title: "研究人员",
        des: "转录数小时的焦点小组和访谈记录。一次性上传您的整个研究。获得准确的说话人识别。"
      },
      business_teams: {
        title: "业务团队",
        des: "记录每一次通话，无需担心限制。获取所有对话的 AI 洞察，而非仅限于少数对话。"
      },
      educators: {
        title: "教育工作者",
        des: "转录整个系列讲座。让所有内容触手可及。无需因分钟数限制而选择课程。"
      }
    },
    Testimonials: {
      title: "深受喜爱",
      highlighted_users: "50,000+ 位用户",
      subtitle: "了解专业人士为何选择 NeverCap 而非其他有限的替代方案",
      Mike: {
        "text": "我的天，这玩意儿居然真的管用！我做了三年播客，以前总是像个傻瓜一样手动抄录所有内容。一次上传了六集，结果我和我的搭档主持人的对话竟然完美地分开了。我以为咖啡店那集被毁了？结果现在的抄录清晰极了。我再也不用自己打字了。",
        "author": "迈克·罗德里格斯",
        "role": "播客主持人"
      },
      Sarah: {
        "text": "我在线授课，需要为视频添加字幕。试过其他三个工具，要么限制很严格，要么耗时太长。这个……真的好用？上传了我的西班牙语课件，两分钟就得到了完美的字幕。我的听力有问题的学生都很高兴。真希望我早点找到这个！",
        "author": "陈莎拉",
        "role": "在线教师"
      },
      Jessica: {
        "text": "我一直在用它进行采访，它的准确性简直令人难以置信。我曾经用蹩脚的英语和西班牙语进行了一次两小时的采访，它把所有信息都准确无误，甚至时间戳都记对了。我以前每月要付给实习生200美元，只是为了转录内容。这真的让我每个月都省钱。",
        "author": "杰西卡·帕克",
        "role": "自由撰稿记者"
      }
    },
    PricingPreview: {
      "title": "透明定价",
      "highlighted_text": "无隐藏大写字母",
      "subtitle": "选择您的计划。没有星号，没有细则，没有意外"
    },
    FAQSection: {
      "title": "常见问题",
      "titleHighlight": "问题",
      "questions": [
            {
              "q": "人工智能转录",
              "question": "什么是 AI 转录以及它是如何工作的？",
              "answer": "AI 转录是利用先进的人工智能技术自动将音频转换为文本的过程。在 NeverCap，您只需上传文件，我们的 AI 即可将其转录，准确率高达 96%。我们的服务旨在将视频文件（例如 MP4、MOV）和音频文件（例如 MP3、WAV）转录为可读、可编辑的文本，并附带说话者标签和时间戳。"
            },
            {
              "q": "无限策略",
              "question": "真的是无限量吗？有什么陷阱吗？",
              "answer": "是的，它真的无限量！没有每月分钟数上限，也没有超额费用。唯一的限制是技术上的：单个文件最长可达 10 小时或 5GB，并且您可以一次处理 50 个文件。但您可以在一整月内上传任意数量的批次。"
            },
            {
              "q": "准确性",
              "question": "转录的准确度如何？",
              "answer": "我们保证 96% 的准确率，确保音频清晰。我们的 AI 经过数百万小时的多样化内容训练，能够出色地处理口音、专业术语以及多位说话者。对于难以识别的音频，我们的智能增强功能有助于提升效果。"
            },
            {
              "q": "语言",
              "question": "你们支持哪些语言？",
              "answer": "我们支持超过 100 种语言的转录，包括英语、西班牙语、普通话、印地语、阿拉伯语、法语等。此外，您还可以将转录文本翻译成 249 种不同的语言，完美契合全球内容。"
            },
            {
              "q": "速度",
              "question": "转录速度有多快？",
              "answer": "闪电般快速！一个 1 小时的音频文件通常只需 5 分钟即可处理完毕。使用批量处理功能，您可以同时上传 50 个文件并让它们并行处理。大多数用户一觉醒来，就会发现他们的整个音频库一夜之间就转录完毕了。"
            },
            {
              "q": "消除",
              "question": "我可以随时取消吗？",
              "answer": "绝对！无需合约，无需支付取消费用。您可以随时在控制面板升级、降级或取消订阅。取消订阅后，您将保留访问权限，直至您的结算期结束。"
            },
            {
              "q": "安全",
              "question": "我的数据安全吗？",
              "answer": "您的安全是我们的首要任务。我们已获得 SOC 2 认证，所有数据均采用 256 位加密，并且绝不会使用您的内容来训练我们的模型。您可以随时删除您的文件，我们会在 30 天后自动清除它们。符合 GDPR 和 CCPA 规定。"
            },
            {
              "q": "导出格式",
              "question": "有哪些导出格式可用？",
              "answer": "以您需要的任何格式下载您的成绩单：PDF、Word (DOCX)、Excel、CSV、SRT 字幕、纯文本 (TXT) 和 VTT 字幕。完美适配您的工作流程。"
            },
            {
              "q": "文件格式",
              "question": "我可以上传哪些音频和视频文件？",
              "answer": "我们支持几乎所有您能遇到的音频和视频格式：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV 等等。只要您能播放，我们就能转录。"
            }
          ]
    },
    CTASection: {
      "title": "准备好打破限制了吗？",
      "subtitle": "加入 50,000 多名已转向真正无限转录的专业人士",
      "button": "免费试用 NeverCap",
      "disclaimer": "免费计划无需信用卡 • 随时升级即可无限访问"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "不再出现“缩水通胀”",
      heroTitleLine1: "真正无限",
      heroTitleLine2: "人工智能转录",
      heroSubtitle: "虽然 Trint 限制您每月转录 50 小时，而 Otter 限制您每月转录 10 个文件，但我们兑现了我们的实际承诺：无限制转录，无隐藏上限。",
      primaryCta: "免费试用 - 无需信用卡",
      secondaryCta: "看清真相",
      comparisonBadLabel: "其他人的做法",
      comparisonBadTitle: "无处不在的隐藏限制",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "特林特：",
      comparisonBadItem1Text: "“无限制”=每月 50 小时上限",
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "獭：",
      comparisonBadItem2Text: "3 次终身导入（免费），10 次/月（专业版）",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "萤火虫：",
      comparisonBadItem3Text: "800分钟存储限制",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "描述：",
      comparisonBadItem4Text: "每月最多 30 小时",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "隐藏在条款和条件中",
      comparisonGoodLabel: "我们所做的",
      comparisonGoodTitle: "实际上是无限的",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "无每月分钟数上限",
      comparisonGoodItem1Text: "曾经",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "无限制文件上传",
      comparisonGoodItem2Text: "总是",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "无存储限制",
      comparisonGoodItem3Text: "根本",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50个文件批量上传",
      comparisonGoodItem4Text: "任何时候",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "透明的政策",
      comparisonGoodItem5Text: "预付",
      feature1Label: "无限制",
      feature1TitlePart1: "转录 1,000 小时？",
      feature1TitlePart2: "价格相同。",
      feature1Description: "告别分钟数计算，告别上限。无论您每月转录 10 小时还是 10,000 小时，只需支付相同的固定费用。无超额费用，无意外账单。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "没有“合理使用”政策花招",
      feature1Point2Icon: "✓",
      feature1Point2Text: "X 小时后无限制",
      feature1Point3Icon: "✓",
      feature1Point3Text: "没有月底焦虑",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "每月工作时间",
      feature1Stat2Number: "0美元",
      feature1Stat2Label: "超额费用",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "随时上传",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "透明的",
      feature2Label: "批量自由",
      feature2TitlePart1: "上传您的",
      feature2TitlePart2: "整个档案",
      feature2Description: "Otter 终身免费提供 3 次导入，Pro 版每月提供 10 次导入。我们提供无限量导入。您可以上传您的播客积压作品、所有访谈以及多年的录音。没有任何限制。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "每批 50 个文件",
      feature2Point2Icon: "✓",
      feature2Point2Text: "支持 10 小时文件",
      feature2Point3Icon: "✓",
      feature2Point3Text: "睡觉时进行处理",
      feature2TableRow1Label: "水獭自由",
      feature2TableRow1Value: "3次终身进口",
      feature2TableRow2Label: "水獭专业版",
      feature2TableRow2Value: "每月 10 个文件",
      feature2TableRow3Label: "特林特",
      feature2TableRow3Value: "每月 50 小时上限",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "真正无限 ✓",
      feature3Label: "社会认同",
      feature3TitlePart1: "用户是",
      feature3TitlePart2: "每日切换",
      feature3Description: "“我每年支付 100 美元购买 Otter，但他们每月限制我只能导入 10 个文件。一旦有无限导入的替代方案，我就放弃了！”——真正的 Reddit 用户",
      feature3Point1Icon: "✓",
      feature3Point1Text: "超过 50,000 名用户已切换",
      feature3Point2Icon: "✓",
      feature3Point2Text: "摘自奥特的《缩水通胀》",
      feature3Point3Icon: "✓",
      feature3Point3Text: "永不回头",
      feature3Stat1Number: "5万+",
      feature3Stat1Label: "满意的用户",
      feature3Stat2Number: "100万+",
      feature3Stat2Label: "已处理文件",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "准确性",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "无隐藏费用",
      trustBadge1Number: "∞",
      trustBadge1Label: "分钟/月",
      trustBadge2Number: "100+",
      trustBadge2Label: "语言",
      trustBadge3Number: "96%",
      trustBadge3Label: "准确性",
      trustBadge4Number: "50",
      trustBadge4Label: "批量上传",
      ctaTitle: "停止购买虚假无限流量",
      ctaSubtitle: "加入数千名转向真正无限转录的用户",
      finalCta: "免费试用 NeverCap"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "批量上传自由",
      heroTitleLine1: "上传 50 个文件。",
      heroTitleHighlight: "处理一切。",
      heroSubtitle: "Otter 终身提供 3 次导入。三次，终身有效。我们为您提供无限上传，每次最多 50 个文件，随时随地满足您的需求。",
      primaryCta: "开始批量上传 →",
      secondaryCta: "查看限制",
      redditQuote: "我有三年的播客节目要转录。Otter 告诉我，我只能终身导入三次。三次。这太侮辱人了。",
      redditAuthorIcon: "📍",
      redditAuthorText: "来自 r/podcasting 的真正挫败感",
      comparisonSectionTitlePart1: "这",
      comparisonSectionTitleHighlight: "荒谬的限制",
      comparisonSectionTitlePart2: "他们强加",
      comparisonSubtitle: "竞争对手如何限制您处理内容的能力",
      limitCard1Service: "水獭自由",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "终身进口",
      limitCard1DescriptionLine2: "（是的，在你的一生中）",
      limitCard2Service: "水獭专业版",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "每月文件数",
      limitCard2DescriptionLine2: "（每年 100 美元计划）",
      limitCard3Service: "描述",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "一次一个文件",
      limitCard3DescriptionLine2: "（顺序上传）",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "无限上传",
      limitCard4DescriptionLine2: "每批 50 个文件",
      feature1Label: "批量供电",
      feature1TitlePart1: "处理您的",
      feature1TitleHighlight: "整个档案",
      feature1TitlePart2: "过夜",
      feature1Description: "睡前上传 50 个文件。醒来即可完成转录。无需排队，无需等待，也无需“请升级”消息。只需动动指尖，即可享受强大的处理能力。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 个同时上传",
      feature1Point2Icon: "✓",
      feature1Point2Text: "并行处理",
      feature1Point3Icon: "✓",
      feature1Point3Text: "支持 10 小时文件",
      feature1Point4Icon: "✓",
      feature1Point4Text: "每个文件最大 5GB",
      uploadAnimationText1: "50个文件",
      uploadAnimationText2: "放下并处理",
      fileBadge1: "播客_ep_001.mp3",
      fileBadge2: "采访_raw.mp4",
      fileBadge3: "会议_2024.wav",
      fileBadge4: "讲座全文.mov",
      fileBadge5: "+ 46 个其他文件...",
      feature2Label: "速度",
      feature2TitlePart1: "从上传到",
      feature2TitleHighlight: "数小时内完成",
      feature2Description: "我们的并行处理基础设施意味着您的 50 个文件无需排队等候。它们将同时进行转录。过去需要数周才能完成的工作，现在只需数小时即可完成。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1小时文件：5分钟",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50个文件：并行处理",
      feature2Point3Icon: "✓",
      feature2Point3Text: "完成后通过电子邮件通知",
      timelineStep1Icon: "1",
      timelineStep1Title: "上传",
      timelineStep1Time: "0分钟",
      timelineStep2Icon: "2",
      timelineStep2Title: "加工",
      timelineStep2Time: "5-30分钟",
      timelineStep3Icon: "3",
      timelineStep3Title: "人工智能魔法",
      timelineStep3Time: "30-60分钟",
      timelineStep4Icon: "✓",
      timelineStep4Title: "完全的",
      timelineStep4Time: "< 2 小时",
      feature3Label: "自由",
      feature3TitlePart1: "无需排队。",
      feature3TitleHighlight: "无需等待。",
      feature3TitlePart2: "没有限制。",
      feature3Description: "其他人会让您排队等候或升级到“优先处理”平台，而我们会紧急处理您的每一次上传。您的内容至关重要，不容拖延。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "无优先级",
      feature3Point2Icon: "✓",
      feature3Point2Text: "每个人都享有相同的速度",
      feature3Point3Icon: "✓",
      feature3Point3Text: "全天候随时上传",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "时刻准备着",
      feature3VisualSubtext: "灵感迸发时立即上传",
      useCasesTitlePart1: "非常适合",
      useCasesTitleHighlight: "重度上传者",
      useCasesSubtitle: "批量上传挽救局面的真实场景",
      useCase1Title: "播客档案",
      useCase1Description: "一次性上传三年的剧集。为所有过往作品创建文字记录。为每集生成 SEO 内容。",
      useCase2Title: "课程创建",
      useCase2Description: "同时处理所有讲座视频。创建学生可访问的文字记录。构建可搜索的课程资料。",
      useCase3Title: "面试积压",
      useCase3Description: "清理堆积如山的未转录访谈。数小时即可完成数周的研究。轻松按时完成任务，无需担心。",
      useCase4Title: "YouTube 库",
      useCase4Description: "为您的整个频道生成字幕。根据视频内容创建博客文章。提升所有视频的 SEO。",
      useCase5Title: "会议档案",
      useCase5Description: "上传数月的会议记录。创建可搜索的会议记录。再也不用错过重要决策了。",
      useCase6Title: "研究数据",
      useCase6Description: "批量处理焦点小组。记录所有参与者的访谈。高效分析定性数据。",
      ctaTitle: "别再乞求上传更多内容了",
      ctaSubtitle: "获得真正有效的无限批量处理",
      finalCta: "立即上传 50 个文件 →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "行业领先的精度",
      heroTitleLine1: "准确率96%。",
      heroTitleHighlight: "每个字都很重要。",
      heroSubtitle: "12 种主要语言的行业领先准确度。单词级时间戳，实现完美同步。智能说话人识别，可处理快速对话。专业格式，清晰易读。",
      primaryCta: "测试我们的准确性 →",
      secondaryCta: "查看语言",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "准确度",
      statCard1DescriptionLine2: "12种主要语言",
      statCard2Percentage: "95%以上",
      statCard2DescriptionLine1: "准确度",
      statCard2DescriptionLine2: "口音和方言",
      statCard3Percentage: "100毫秒",
      statCard3DescriptionLine1: "词级",
      statCard3DescriptionLine2: "时间戳精度",
      languageSectionTitlePart1: "准确率高达 96%",
      languageSubtitle: "全球内容的专业级转录",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "英语",
      languageCard1Accuracy: "准确率高达 96%",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "西班牙语",
      languageCard2Accuracy: "准确率高达 96%",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "普通话",
      languageCard3Accuracy: "准确率高达 96%",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "法语",
      languageCard4Accuracy: "准确率高达 96%",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "德语",
      languageCard5Accuracy: "准确率高达 96%",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "日本人",
      languageCard6Accuracy: "准确率高达 96%",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "韩国人",
      languageCard7Accuracy: "准确率高达 96%",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "葡萄牙语",
      languageCard8Accuracy: "准确率高达 96%",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "俄语",
      languageCard9Accuracy: "准确率高达 96%",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "意大利语",
      languageCard10Accuracy: "准确率高达 96%",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "荷兰语",
      languageCard11Accuracy: "准确率高达 96%",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "阿拉伯",
      languageCard12Accuracy: "准确率高达 96%",
      moreLanguagesText: "+ 支持 88 种以上语言，准确率达 95% 以上",
      feature1Label: "精确",
      feature1TitlePart1: "词级",
      feature1TitleHighlight: "时间戳",
      feature1Description: "每个单词都与其音频位置完美同步。创建可点击的转录文本、生成精准的字幕，或跳转到录音中的精确时刻。100毫秒的精度，专业人士信赖。",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms 时间戳精度",
      feature1Point2Icon: "✓",
      feature1Point2Text: "非常适合视频编辑",
      feature1Point3Icon: "✓",
      feature1Point3Text: "可点击的交互式记录",
      feature1Point4Icon: "✓",
      feature1Point4Text: "帧精确字幕",
      transcriptLine1Timestamp: "00：12.450",
      transcriptLine1Speaker: "演讲者1",
      transcriptLine1Text: "欢迎收听今天的播客节目。",
      transcriptLine2Timestamp: "00：15.230",
      transcriptLine2Speaker: "演讲者2",
      transcriptLine2Text: "感谢邀请我参加节目！",
      transcriptLine3Timestamp: "00：17.890",
      transcriptLine3Speaker: "演讲者1",
      transcriptLine3Text: "让我们深入探讨我们的主要话题……",
      transcriptLine4Timestamp: "00：20.120",
      transcriptLine4Speaker: "演讲者2",
      transcriptLine4Text: "当然，我很高兴讨论这个问题。",
      feature2Label: "智能人工智能",
      feature2TitlePart1: "手柄",
      feature2TitleHighlight: "快速对话",
      feature2Description: "即使在重叠的讲话、打断以及快速的来回对话中，我们的AI也能准确识别说话者。非常适合采访、播客和会议等发言者频繁插话的场合。",
      feature2Point1Icon: "✓",
      feature2Point1Text: "识别最多 20 位发言者",
      feature2Point2Icon: "✓",
      feature2Point2Text: "完美处理中断",
      feature2Point3Icon: "✓",
      feature2Point3Text: "适用于重叠语音",
      feature2Point4Icon: "✓",
      feature2Point4Text: "保持串扰的准确性",
      feature2VisualNumber: "20",
      feature2VisualTitle: "已确定发言者",
      feature2VisualSubtext: "即使在快速对话中",
      feature3Label: "可读性",
      feature3TitlePart1: "完美",
      feature3TitleHighlight: "格式化文本",
      feature3Description: "告别冗长的文字。我们的 AI 会自动在合适的位置添加段落、句子和标点符号。结果如何？文字记录读起来赏心悦目，易于浏览。",
      feature3Point1Icon: "✓",
      feature3Point1Text: "智能段落分隔符",
      feature3Point2Icon: "✓",
      feature3Point2Text: "准确的标点符号",
      feature3Point3Icon: "✓",
      feature3Point3Text: "正确的大写字母",
      feature3Point4Icon: "✓",
      feature3Point4Text: "清晰、可扫描的输出",
      formattingTitle: "之前和之后",
      formattingBeforeLabel: "❌ 其他：",
      formattingBeforeText: "所以今天我们要讨论一下我们一直在开发的新功能，我想你会非常喜欢它们，这些功能是用户长期以来一直要求的，我们终于完成了。",
      formattingAfterLabel: "✓ NeverCap：",
      formattingAfterText: "所以今天，我们将讨论我们正在开发的新功能。我想你们一定会喜欢它们。这些功能是用户长期以来一直要求的，我们终于完成了。",
      comparisonSubtitle: "准确性",
      comparisonSectionTitle: "比较",
      comparisonDes: "看看我们如何与竞争对手抗衡",
      tableHeader1: "特征",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "描述",
      tableHeader5: "牧师",
      tableRow1Feature: "准确度（清晰音频）",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "字级时间戳",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "说话人识别",
      tableRow3NeverCap: "20位演讲者",
      tableRow3Otter: "16位演讲者",
      tableRow3Descript: "10位演讲者",
      tableRow3Rev: "✕",
      tableRow4Feature: "处理串扰",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "有限的",
      tableRow4Descript: "有限的",
      tableRow4Rev: "✕",
      tableRow5Feature: "智能格式",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "基本的",
      tableRow6Feature: "12 种语言，覆盖率 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "体验 96% 准确率",
      ctaSubtitle: "上传最具挑战性的音频并查看差异",
      finalCta: "立即测试我们的准确性 →",
        languageSectionTitlePart2: "12种主要语言"
    }
  },
  Pricing: {
    Hero: {
      "title": "简单、透明的定价",
      "highlighted_text": "无隐藏大写字母",
      "description": "选择适合您需求的套餐。随时升级或降级。无合约，无意外。"
    },
    Cards: {
      "title": "简单、透明的定价。",
      "highlighted_text": "无隐藏大写字母。",
      "description": "选择适合您需求的套餐。随时升级或降级。无合约，无意外。",
      "plans": [
            {
              "name": "自由的",
              "price": "0美元",
              "period": "月",
              "discount": "非常适合尝试我们的服务",
              "limits": {
                "title": "每日限额",
                "items": [
                  "3 个文件/天（≈90 分钟/天）",
                  "每个文件最多 30 分钟（≤250 MB）",
                  "一次上传 1 个文件",
                  "标准优先级队列"
                ]
              },
              "features": {
                "title": "特征",
                "items": [
                  "100多种语言",
                  "发言人标签",
                  "翻译",
                  "所有导出格式"
                ]
              },
              "cta": {
                "text": "免费开始。无需信用卡。",
                "button": "免费开始"
              }
            },
            {
              "name": "专业月刊",
              "price": "17.99 美元",
              "period": "月",
              "discount": "第一个月 9.99 美元",
              "limits": {
                "title": "无月度上限",
                "items": [
                  "总分钟数无限制",
                  "每个文件最多 10 小时/5 GB",
                  "一次上传 50 个文件",
                  "优先级队列"
                ]
              },
              "features": {
                "title": "所有内容均免费，此外",
                "items": [
                  "字级时间戳",
                  "高级说话人识别",
                  "格式化的段落和标点符号",
                  "优先支持"
                ]
              },
              "cta": {
                "text": "无限分钟。优先速度。批量上传。",
                "button": "走向专业"
              },
              "badge": "最受欢迎"
            },
            {
              "name": "专业年度",
              "price": "8.99 美元",
              "period": "月",
              "discount": "每年收费 107.88 美元",
              "limits": {
                "title": "与 Pro Monthly 相同",
                "items": [
                  "总分钟数无限制",
                  "每个文件最多 10 小时/5 GB",
                  "一次上传 50 个文件",
                  "优先级队列"
                ]
              },
              "features": {
                "title": "所有内容均免费，此外",
                "items": [
                  "字级时间戳",
                  "高级说话人识别",
                  "格式化的段落和标点符号",
                  "优先支持"
                ]
              },
              "cta": {
                "text": "无限分钟。优先速度。批量上传。",
                "button": "走向专业"
              },
              "badge": "最超值 - 节省 50%"
            }
          ],
      "disclaimer": "“无限”意味着没有月度上限，也不会人为减慢速度。合理使用适用于滥用自动化或重新分配的情况。"
    },
    ComparisonTable: {
      "header": {
        "title": "比较",
        "highlighted_text": "所有功能",
        "subtitle": "详细了解每个计划的福利。无任何隐藏限制。"
      },
      "plans": [
              "特征",
              "自由的",
              "专业月刊",
              "专业年度"
            ],
      "features": [
            {
              "name": "价格",
              "values": [
                "0美元/月",
                {
                  "main": "每月 17.99 美元",
                  "note": "第一个月 9.99 美元"
                },
                {
                  "main": "每月 8.99 美元",
                  "note": "每年收费 107.88 美元"
                }
              ]
            },
            {
              "name": "每月分钟数",
              "values": ["约 2,700（90/天）", "无限", "无限"]
            },
            {
              "name": "最大文件时长",
              "values": ["30分钟", "10小时", "10小时"]
            },
            {
              "name": "最大文件大小",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "批量上传",
              "values": ["1个文件", "50个文件", "50个文件"]
            },
            {
              "name": "处理速度",
              "values": ["标准", "优先事项", "优先事项"]
            },
            {
              "name": "支持的语言",
              "values": ["100多种语言", "100多种语言", "100多种语言"]
            },
            {
              "name": "翻译",
              "values": ["真的", "真的", "真的"]
            },
            {
              "name": "说话人识别",
              "values": ["基本的", "高级（20 位演讲者）", "高级（20 位演讲者）"]
            },
            {
              "name": "字级时间戳",
              "values": ["错误的", "真的", "真的"]
            },
            {
              "name": "格式化段落",
              "values": ["错误的", "真的", "真的"]
            },
            {
              "name": "导出格式",
              "values": ["所有格式", "所有格式", "所有格式"]
            },
            {
              "name": "支持",
              "values": ["电子邮件", "优先电子邮件", "优先电子邮件"]
            },
            {
              "name": "数据保留",
              "values": ["30天", "永远", "永远"]
            }
          ]
    },
    FAQ: {
      "title": "常见问题",
      "titleHighligt": "问题",
      "items": [
            {
              "q": "无限策略",
              "question": "真的是无限的吗？",
              "answer": "是的！专业版套餐没有每月分钟数上限。唯一的限制是技术层面的：文件时长上限为 10 小时，文件大小上限为 5GB。您可以根据需要处理任意数量的文件。"
            },
            {
              "q": "计划变更",
              "question": "我可以随时更改计划吗？",
              "answer": "当然！您可以随时在控制面板取消订阅。您可以随时升级或降级。"
            },
            {
              "q": "付款方式",
              "question": "你们接受什么付款方式？",
              "answer": "我们接受所有主要的信用卡、借记卡和 PayPal，以确保安全、无忧的付款。"
            },
            {
              "q": "免费试用",
              "question": "Pro 有免费试用版吗？",
              "answer": "是的！免费试用 Pro 7 天，无需信用卡。此外，订阅后首月可享 45% 折扣。"
            },
            {
              "q": "文件保留",
              "question": "你们会保留我的文件多久？",
              "answer": "免费套餐：30天。专业套餐：永久有效！您的成绩单将始终在您的帐户中可用。"
            },
            {
              "q": "数据安全",
              "question": "数据安全怎么样？",
              "answer": "我们已获得 SOC 2 认证，并使用 256 位加密。我们绝不会使用您的内容来训练我们的模型。您的数据属于您自己。"
            }
          ]
    },
    CTA: {
      "title": "准备好无限畅享了吗？",
      "subtitle": "加入 50,000 多名专业人士，不受限制地进行转录",
      "button": "免费试用 NeverCap →",
      "disclaimer": "无需信用卡 • 几秒钟内即可开始转录"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "专为",
      heavyUsers: "重度用户",
      whoActuallyNeed: "谁真正需要无限",
      heroSubtitle: "从积压多年工作的播客，到拥有数百个访谈记录的研究人员。看看专业人士如何使用NeverCap突破上传限制和分钟数上限。",
      podcasters: {
        title: "播客",
        pain: "“别再选择哪些剧集值得制作文字记录了”",
        description: "一次性上传您的整个播客存档。无需计算时间，即可生成节目笔记、优化 SEO 并重新利用内容。",
        benefits: {
          benefit1: "上传所有剧集，而不仅仅是 3 集",
          benefit2: "生成 SEO 友好的节目笔记",
          benefit3: "创建可搜索的档案",
          benefit4: "重新用于博客内容"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "剧集"
          },
          stat2: {
            number: "200小时",
            label: "已保存"
          },
          stat3: {
            number: "3倍",
            label: "SEO流量"
          }
        }
      },
      journalists: {
        title: "记者和作家",
        pain: "“截止日期压力与上传限制”",
        description: "在截止日期前批量上传所有访谈。即时搜索文字记录，不错过任何重要引言。",
        benefits: {
          benefit1: "在截止日期前批量上传",
          benefit2: "一次性搜索所有采访",
          benefit3: "带有时间戳的准确报价",
          benefit4: "处理口音和语言"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "每月面试次数"
          },
          stat2: {
            number: "96%",
            label: "准确性"
          },
          stat3: {
            number: "5分钟",
            label: "每小时"
          }
        }
      },
      contentCreators: {
        title: "内容创作者",
        pain: "“无障碍设施不应该昂贵”",
        description: "为您的整个 YouTube 频道添加字幕。生成多种语言的字幕，立即提升视频 SEO。",
        benefits: {
          benefit1: "一次性为所有视频添加字幕",
          benefit2: "249种语言翻译",
          benefit3: "适用于 YouTube 的 SRT 文件",
          benefit4: "提升视频 SEO 排名"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "视频"
          },
          stat2: {
            number: "100+",
            label: "语言"
          },
          stat3: {
            number: "249",
            label: "翻译"
          }
        }
      },
      researchers: {
        title: "研究人员和学者",
        pain: "“定性数据不应该排队”",
        description: "一次性处理所有研究报告。完美处理焦点小组、访谈和小组讨论，并实现完美的发言人识别。",
        benefits: {
          benefit1: "批量处理焦点小组",
          benefit2: "20 位说话者识别",
          benefit3: "导出至分析软件",
          benefit4: "GDPR合规安全"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "学习"
          },
          stat2: {
            number: "96%",
            label: "组准确度"
          },
          stat3: {
            number: "GDPR",
            label: "合规"
          }
        }
      },
      businessTeams: {
        title: "业务团队",
        pain: "“会议录音应该毫不费力”",
        description: "直接录制会议或上传音频文件进行即时转录。从无限量的对话中创建可搜索的存档，再也不会丢失重要的讨论内容。",
        benefits: {
          benefit1: "直接录音和转录",
          benefit2: "无限会议录音",
          benefit3: "可搜索的会议档案",
          benefit4: "立即上传音频文件"
        },
        stats: {
          stat1: {
            number: "居住",
            label: "记录"
          },
          stat2: {
            number: "立即的",
            label: "上传"
          },
          stat3: {
            number: "20+",
            label: "演讲嘉宾"
          }
        }
      },
      educators: {
        title: "教育工作者",
        pain: "“YouTube 视频需要即时转录”",
        description: "只需粘贴 YouTube 链接即可获取即时文本和自动生成的字幕。将任何教育视频转换为易于访问、可搜索的内容。",
        benefits: {
          benefit1: "直接 YouTube 链接转录",
          benefit2: "自动生成视频字幕",
          benefit3: "转录整个课程",
          benefit4: "可搜索的讲座档案"
        },
        stats: {
          stat1: {
            number: "一键",
            label: "YouTube 粘贴"
          },
          stat2: {
            number: "汽车",
            label: "字幕"
          },
          stat3: {
            number: "100+",
            label: "语言"
          }
        }
      },
      quotes: {
        title: "真实用户，",
        titleHighlight: "真正的自由",
        subtitle: "听听那些打破人为限制的专业人士怎么说",
        testimonials: {
          mike: {
            textBefore: "“我曾经",
            highlight: "三年的剧集",
            textAfter: "坐着不转录。Otter 想让我选 3。三。NeverCap 让我在一个周末上传全部 150 集。",
            name: "迈克·罗德里格斯",
            role: "播客主持人"
          },
          jessica: {
            textBefore: "“作为一名自由撰稿人，我买不起 Trint 的",
            highlight: "每月100美元",
            textAfter: "，但我也无法忍受 Otter 每月 10 个文件的限制。NeverCap 拯救了我的职业生涯。",
            name: "杰西卡·帕克",
            role: "自由撰稿记者"
          },
          sarah: {
            textBefore: "“我们的研究团队",
            highlight: "200小时",
            textAfter: "焦点小组录音。我们用一个周末就处理完了所有事情，而不是按月限量。",
            name: "陈莎拉博士",
            role: "首席研究员"
          },
          carlos: {
            textBefore: "“我用西班牙语制作教育内容。NeverCap转录完美，",
            highlight: "翻译成英文",
            textAfter: "扩大覆盖范围。没有限制，只有增长。",
            name: "卡洛斯·马丁内斯",
            role: "YouTube 讲师"
          }
        }
      },
      industries: {
        title: "值得信赖",
        titleHighlight: "行业",
        subtitle: "世界各地的专业人士正在转向真正无限的",
        list: {
          media: "媒体与出版",
          education: "教育",
          healthcare: "卫生保健",
          technology: "技术",
          finance: "金融",
          legal: "合法的"
        }
      },
      cta: {
        title: "您的用例也需要无限",
        subtitle: "加入 50,000 多名专业人士，不再计算时间，开始创造",
        button: "开启你的无限旅程 →"
      }
    },
    Podcasters: {
      badge: "🎙️ 专为播客打造",
      heroTitle: "转录您的",
      heroTitleHighlight: "整个播客档案",
      heroSubtitle: "上传您所有的后期作品。为每一集创建节目笔记。无需再选择转录哪些集。一次可处理 50 集，每月无限次。",
      ctaPrimary: "开始免费转录",
      ctaSecondary: "了解其工作原理",
      trustBadge1: "🎙️ 10,000+ 位播客",
      trustBadge2: "∞ 无限集数",
      trustBadge3: "📝 SEO 就绪成绩单",
      stats: {
        stat1: {
          number: "∞",
          label: "每月集数"
        },
        stat2: {
          number: "50",
          label: "批量上传"
        },
        stat3: {
          number: "10小时",
          label: "最大剧集长度"
        },
        stat4: {
          number: "96%",
          label: "准确性"
        }
      },
      problemTitle: "这",
      problemTitleHighlight: "播客转录问题",
      problemSubtitle: "其他服务让你选择哪些剧集“值得”转录",
      problems: {
        problem1: {
          title: "上传限制终止档案",
          description: "Otter 提供 3 次终身免费导入，Pro 版每月提供 10 次导入。如何转录 3 年的剧集？"
        },
        problem2: {
          title: "错失SEO机会",
          description: "每一集未转录的剧集都会损失 SEO 流量。但 Descript 每月最多只能限制你 30 小时。"
        },
        problem3: {
          title: "成本随增长而激增",
          description: "随着播客的增长，转录成本也会飙升。每小时 2 美元的超额费用使得扩展变得不可能。"
        }
      },
      solutionTitle: "这",
      solutionTitleHighlight: "NeverCap 解决方案",
      solutionDescription: "真正的无限转录。上传您的全部存档。转录每一集新剧集。批量生成节目笔记。无上限，无限制，持续增长。",
      workflowTitle: "您的播客工作流程，",
      workflowTitleHighlight: "简化",
      workflowSubtitle: "几分钟内即可从录制到 SEO 优化的节目笔记",
      workflow: {
        step1: {
          title: "上传剧集",
          description: "一次性发布 50 集。MP3、MP4、WAV 格式，我们都能处理。"
        },
        step2: {
          title: "AI转录",
          description: "说话人识别准确率高达 96%。非常适合面试。"
        },
        step3: {
          title: "智能格式",
          description: "AI 自动添加段落、句子和标点符号。"
        },
        step4: {
          title: "发布和排名",
          description: "导出到您的网站。观察您的 SEO 流量增长。"
        }
      },
      featuresTitle: "特色播客",
      featuresTitleHighlight: "确实需要",
      featuresSubtitle: "由播客打造，为播客打造",
      features: {
        feature1: {
          title: "多说话人检测",
          description: "自动识别并标记最多 20 位发言者。非常适合小组讨论、访谈和联合主持节目。"
        },
        feature2: {
          title: "时间戳章节",
          description: "为 YouTube 描述生成可点击的时间戳。让听众能够立即跳转到他们喜欢的片段。"
        },
        feature3: {
          title: "智能格式",
          description: "自动添加段落、句子和标点符号。获得清晰易读的文字记录。节省后期制作时间。"
        },
        feature4: {
          title: "SEO优化",
          description: "专为搜索引擎优化的文字记录格式。提升您的播客的曝光度，吸引更多新听众。"
        },
        feature5: {
          title: "100多种语言",
          description: "以任何语言转录。翻译至 249 种以上语言。轻松触达全球受众。"
        },
        feature6: {
          title: "批处理",
          description: "睡前上传 50 集。醒来完成转录。连夜处理你的全部存档。"
        }
      },
      testimonialsTitle: "制作播客的人",
      testimonialsTitleHighlight: "开关",
      testimonialsSubtitle: "来自真实播客的真实故事",
      testimonials: {
        mike: {
          text: "我做播客已经三年了，以前总是像个傻瓜一样手动抄录所有内容。一次上传了六集，我和我的搭档主持人的对话就完美地分开了。我以为咖啡店那集被毁了？结果现在的抄录清晰极了。我再也不用自己打字了。",
          name: "迈克·罗德里格斯",
          role: "“The Daily Grind”播客主持人"
        },
        sarah: {
          text: "Otter 之前限制我每月只能导入 10 个文件。我积压了 150 集。NeverCap 让我可以分 3 批上传所有内容。自从在旧集里添加了文字记录后，我的自然流量增长了 300%。这笔钱真的物超所值。",
          name: "陈莎拉",
          role: "《今日科技谈话》的创始人"
        }
      },
      comparisonTitle: "为什么播客选择",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "看看我们如何与竞争对手抗衡",
      comparison: {
        headers: {
          feature: "特征",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "描述创建者"
        },
        rows: {
          monthlyLimit: {
            feature: "每月集数限制",
            nevercap: "无限",
            otter: "约13集（1200分钟）",
            descript: "约 30 集（30 小时）"
          },
          uploadLimit: {
            feature: "文件上传限制",
            nevercap: "无限",
            otter: "每月10",
            descript: "一次 1 个"
          },
          batchProcessing: {
            feature: "批处理",
            nevercap: "50个文件",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "最大剧集长度",
            nevercap: "10小时",
            otter: "90分钟",
            descript: "无限"
          },
          speakerDetection: {
            feature: "说话人检测",
            nevercap: "20位演讲者",
            otter: "16位演讲者",
            descript: "10位演讲者"
          },
          smartFormatting: {
            feature: "智能格式",
            nevercap: "✓ 完美",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "价格",
            nevercap: "每月 17.99 美元",
            otter: "每月 16.99 美元",
            descript: "30美元/月"
          }
        }
      },
      ctaTitle: "开始转录每一集",
      ctaSubtitle: "加入 10,000 多名无忧无虑的播客",
      ctaButton: "免费上传您的前 50 集 →",
      ctaDisclaimer: "无需信用卡 • 无限次观看 • 随时取消"
    },
    Journalists: {
      hero: {
        badge: "📰 致记者和作家",
        title: "记录每一次采访。",
        titleHighlight: "绝不会错过任何报价。",
        subtitle: "无需再费心挑选哪些采访需要转录。一次性上传所有录音，立即搜索所有内容，轻松按时完成任务，无需担心上传问题。",
        ctaPrimary: "开始无限上传 →",
        ctaSecondary: "了解其工作原理",
        stats: {
          uploads: {
            number: "∞",
            label: "文件上传"
          },
          accuracy: {
            number: "96%",
            label: "准确性"
          },
          speed: {
            number: "5分钟",
            label: "每小时"
          }
        },
        dashboard: {
          title: "采访队列",
          status: "• 所有处理",
          interviews: {
            cityCouncil: {
              title: "市议会会议",
              duration: "2 小时 15 分钟 • 上传中...",
              action: "加工"
            },
            expertInterview: {
              title: "专家访谈——陈博士",
              duration: "45 分钟 • 转录……",
              action: "完成 96%"
            },
            pressConference: {
              title: "新闻发布会",
              duration: "1 小时 30 分钟 • 准备就绪",
              action: "查看 →"
            },
            phoneInterview: {
              title: "电话采访 - 来源",
              duration: "35分钟 • 准备就绪",
              action: "查看 →"
            }
          }
        }
      },
      problem: {
        title: "这",
        titleHighlight: "记者转录问题",
        subtitle: "其他服务让你选择哪些采访“值得”转录",
        problems: {
          uploadLimits: {
            title: "上传限制终止调查",
            description: "Otter Pro 每月提供 10 个文件导入。如何转录 3 周的调查访谈？"
          },
          missingQuotes: {
            title: "缺少关键引言",
            description: "每一段未转录的采访都可能包含故事的关键引言。但 Trint 每月最多限制你 50 小时。"
          },
          costExplosion: {
            title: "截止日期导致成本激增",
            description: "随着调查的深入，转录成本也会飙升。每月 100 美元的超额费用使得突发新闻无法报道。"
          }
        },
        solution: {
          title: "这",
          titleHighlight: "NeverCap 解决方案",
          description: "真正的无限转录。上传您的整个调查。转录每一次采访。立即搜索所有引述。无上限，无限制，只为新闻报道。"
        }
      },
      solution: {
        title: "最后，",
        titleHighlight: "真正的自由",
        titleSuffix: "记者",
        subtitle: "上传一切。转录一切。搜索一切。",
        solutions: {
          unlimitedUploads: {
            label: "无限上传",
            title: "批量上传您的整个调查",
            description: "无需再挑选要转录的采访内容。一次上传 50 个文件。连夜处理数月的录音。您的整个调查，都已转录。",
            points: {
              simultaneousUpload: "同时上传50个文件",
              noLimits: "无每月上传限制",
              processWhileWrite: "边写边处理",
              longRecordings: "支持10小时录音"
            },
            visual: {
              number: "50",
              label: "一次处理多个文件"
            }
          },
          instantSearch: {
            label: "即时搜索",
            title: "几秒钟内找到任何报价",
            description: "立即搜索所有记录。找到三个月前的完美引言。再也不用丢失笔记中的重要语句了。",
            points: {
              searchAll: "搜索所有访谈",
              wordTimestamps: "字级时间戳",
              jumpToMoments: "跳转到确切时刻",
              exportCitations: "导出引文"
            },
            searchDemo: {
              placeholder: "气候政策声明",
              resultsText: "在 4 次采访中发现：",
              results: {
                mayorInterview: "“……我们的气候政策将改变……”",
                expertPanel: "“……政策声明清楚地表明……”"
              }
            }
          },
          professionalAccuracy: {
            label: "专业精准",
            title: "96% 准确率，您可以引用",
            description: "获得精准的文字记录，方便您直接引用。处理口音、专业术语和快速对话。格式完美，易于阅读。",
            points: {
              accuracyGuarantee: "96%准确率保证",
              handlesAccents: "处理口音和方言",
              smartPunctuation: "智能标点和段落",
              speakerIdentification: "说话人识别"
            },
            visual: {
              accuracy: "96%",
              label: "准确率",
              transcript: {
                speaker1: "“调查发现财务报告存在重大差异。”",
                speaker2: "“您能详细说明一下这些具体差异吗？”"
              }
            }
          }
        }
      },
      features: {
        title: "一切都",
        titleHighlight: "记者的需求",
        subtitle: "尊重您的工作流程的专业工具",
        featuresList: {
          languages: {
            title: "100多种语言",
            description: "使用 12 种主要语言采访全球消息来源，准确率为 96%。"
          },
          exportFormats: {
            title: "导出格式",
            description: "Word、PDF、SRT、TXT。兼容任何工作流程。"
          },
          sourceProtection: {
            title: "源保护",
            description: "银行级加密，保障您的信息来源保密。"
          },
          timestamps: {
            title: "时间戳",
            description: "单击任意引语即可跳转到确切的音频时刻。"
          },
          teamSharing: {
            title: "团队共享",
            description: "与编辑协作。安全共享成绩单。"
          },
          mobileReady: {
            title: "移动就绪",
            description: "从手机上传。随时随地查看成绩单。"
          },
          smartFormatting: {
            title: "智能格式",
            description: "自动段落和标点符号，使抄本更易读。"
          },
          batchProcessing: {
            title: "批处理",
            description: "一次上传 50 个文件。即使您晚上睡觉，也能处理。"
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "由于上传限制，我之前三年的采访内容都没能转录。NeverCap 让我在一个周末就处理完了所有内容。这真是颠覆性的改变。",
          name: "杰西卡·帕克",
          role: "自由记者，前 Otter 用户"
        }
      },
      cta: {
        title: "开始转录",
        titleHighlight: "无限制",
        subtitle: "加入成千上万不再计算上传量并开始专注于报道的记者",
        ctaPrimary: "无限免费试用 →",
        ctaSecondary: "查看价格"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 对于内容创作者",
        title: "标题你的",
        titleHighlight: "整个频道",
        titleSuffix: "不计分钟",
        subtitle: "无需再费心挑选视频配字幕。处理您的整个 YouTube 库，生成 100 多种语言的字幕，并直接从任何平台获取视频。没有月费限制，没有上传限制——纯粹的创作自由。",
        ctaPrimary: "开始无限字幕 →",
        ctaSecondary: "了解其工作原理",
        stats: {
          videos: {
            number: "∞",
            label: "每月视频数"
          },
          languages: {
            number: "100+",
            label: "语言"
          },
          accuracy: {
            number: "96%",
            label: "准确性"
          },
          platforms: {
            number: "10+",
            label: "平台"
          }
        }
      },
      platforms: {
        title: "从任何平台获取并转录",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X（推特）",
          dropbox: "Dropbox",
          googleDrive: "Google 云端硬盘",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "您需要的一切",
        titleHighlight: "量表内容",
        subtitle: "专业工具，不受专业限制",
        oneClickImport: {
          label: "一键导入",
          title: "粘贴链接。",
          titleHighlight: "获取成绩单。",
          description: "无需下载和重新上传。只需粘贴您的 YouTube、TikTok 或 Instagram 链接，即可立即获取文字记录。一个周末即可处理您整个频道的积压内容。",
          points: {
            directYoutube: "直接 YouTube 链接转录",
            multiplePlatforms: "从 10 多个平台获取",
            batchPlaylists: "批量处理整个播放列表",
            autoSync: "与您的频道自动同步"
          },
          demo: {
            instruction: "粘贴您的视频网址：",
            url: "https://youtube.com/watch?v=...",
            status: "正在获取和转录..."
          }
        },
        globalReach: {
          label: "全球影响力",
          title: "100多种语言。",
          titleHighlight: "零限制。",
          description: "自动翻译 100 多种语言，触达全球受众。同时生成多种语言的字幕。无需额外付费，无月度翻译费用上限。",
          points: {
            highAccuracy: "12 种主要语言的准确率高达 96%",
            unlimitedTranslations: "包含无限次翻译",
            multicultural: "非常适合多元文化内容",
            autoDetect: "自动检测源语言"
          },
          visual: {
            number: "100+",
            title: "支持的语言",
            subtitle: "翻译一次，惠及所有人"
          }
        },
        flexibleExport: {
          label: "灵活导出",
          title: "每种格式",
          titleHighlight: "你需要",
          description: "以适合您工作流程的格式导出。从 YouTube 的 SRT 文件到网页播放器的 VTT 文件，再到脚本的可编辑文档，应有尽有。所有导出功能均不限次数，所有套餐均包含所有功能。",
          points: {
            videoFormats: "适用于视频平台的 SRT 和 VTT",
            editingFormats: "DOCX 和 PDF 可供编辑",
            dataAnalysis: "用于数据分析的 CSV",
            simpleScripts: "TXT 用于简单脚本"
          },
          formats: {
            srt: "固体放射治疗",
            vtt: "垂直发射测试",
            txt: "TXT",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "从上传到",
        titleHighlight: "发布",
        titleSuffix: "几分钟内",
        subtitle: "为整个内容库添加字幕的最快方法",
        steps: {
          pasteLinks: {
            title: "粘贴链接",
            description: "拖放 YouTube、TikTok 或任何视频链接。或者直接上传文件。"
          },
          autoTranscribe: {
            title: "自动转录",
            description: "人工智能处理准确率高达 96%。可处理不同口音和不同说话者。"
          },
          editTranslate: {
            title: "编辑和翻译",
            description: "完善您的字幕。立即翻译成 100 多种语言。"
          },
          exportPublish: {
            title: "导出和发布",
            description: "下载任意格式。上传至您的平台。完成！"
          }
        }
      },
      testimonials: {
        title: "创造者是",
        titleHighlight: "每日切换",
        subtitle: "从有限的计划到无限的自由",
        carlos: {
          textBefore: "我用西班牙语制作教育内容。NeverCap转录完美，",
          textAfter: "扩大覆盖面。没有限制，只有增长。添加多语言字幕后，我的频道观看量增加了 3 倍。",
          highlight: "翻译成英文",
          name: "卡洛斯·马丁内斯",
          role: "YouTube 讲师 • 25 万订阅者"
        },
        sarah: {
          textBefore: "Descript 要求每月支付 30 美元",
          textAfter: "我有 500 多个视频积压。NeverCap让我在一个周末就处理完了所有视频。字幕带来的 SEO 提升在第一个月就得到了回报。",
          highlight: "30小时",
          name: "莎拉·李",
          role: "生活方式视频博主 • 18 万订阅者"
        },
        jake: {
          textBefore: "这",
          textAfter: "这个功能彻底改变了游戏规则。我不再需要下载任何东西，只需粘贴、转录，就完成了。处理我的 TikTok 播客片段从未如此简单。",
          highlight: "直接获取 YouTube",
          name: "杰克·威尔逊",
          role: "播客主持人 • 排名前 1% 的创作者"
        },
        yuki: {
          textBefore: "我创作内容支持5种语言。其他服务需另收费",
          textAfter: "。NeverCap 为我提供了无限量的翻译。自从我开始使用合适的母语字幕以来，我的国际观众增长了 400%。",
          highlight: "每份翻译",
          name: "田中由纪",
          role: "游戏创作者 • 50 万订阅者"
        }
      },
      cta: {
        title: "您的整个频道。带字幕。今天。",
        subtitle: "加入 50,000 多名不再计算时间并开始创作的创作者",
        button: "开始无限字幕 →"
      }
    },
    Researchers: {
      heroBadge: "为学术卓越而建",
      heroTitle1: "记录每一次采访。",
      heroTitle2: "分析所有数据。",
      heroSubtitle: "无需再费力挑选要转录的焦点小组。处理所有定性数据，准确率高达 96%，即使 20 位参与者互相交谈，也能完美识别说话人。",
      heroCtaPrimary: "免费试用 - 无需信用卡",
      heroCtaSecondary: "了解其工作原理",
      statsInterviewHours: "面试时间",
      statsAccuracy: "准确性",
      statsSpeakersId: "演讲者 ID",
      statsCompliant: "合规",
      problemTitle: "研究转录问题",
      problemSubtitle: "其他服务让您选择哪些数据“值得”转录",
      problemCard1Title: "上传限制终止研究",
      problemCard1Desc: "Otter 提供 3 次终身导入。如何转录 200 小时的焦点小组讨论？",
      problemCard2Title: "缺少关键数据",
      problemCard2Desc: "每一次未转录的采访都可能包含突破性的见解。但 Rev 的最低收费是每分钟 2 美元。",
      problemCard3Title: "拨款消失",
      problemCard3Desc: "随着数据集的增长，转录成本也会激增。每个焦点小组 500 美元的成本使得扩展变得不可能。",
      solutionTitle: "NeverCap解决方案",
      solutionDesc: "真正的无限转录。上传您的整个研究。转录每一次访谈。分析所有数据。无上限，无限制，只为研究。",
      feature1Label: "无限制",
      feature1Title: "一次性处理整个研究",
      feature1Desc: "今晚上传全部 200 小时的采访。醒来即可获得完整、可搜索的文字记录。无月度上限，无单文件限制，更无“合理使用”的胡扯。",
      feature1Point1: "同时批量上传50个文件",
      feature1Point2: "完整处理纵向研究",
      feature1Point3: "成绩单无存储限制",
      feature1Point4: "导出至 NVivo、MAXQDA、Atlas.ti",
      feature1Visual1: "无限时",
      feature1Visual2: "无论 10 小时还是 10,000 小时，价格相同",
      feature2Label: "智能人工智能",
      feature2Title: "每次都能成功完成焦点小组讨论",
      feature2Desc: "我们的人工智能 (AI) 最多可追踪 20 位发言者，即使他们互相争吵、互相打断，或同时插话。每个声音都会被准确捕捉并标记。",
      feature2Point1: "20 位说话者识别",
      feature2Point2: "处理串扰和中断",
      feature2Point3: "您可以重命名的演讲者标签",
      feature2Point4: "每个单词的时间戳",
      conversationParticipant1: "参与者 1",
      conversationText1: "我们面临的主要障碍肯定是治疗费用……",
      conversationParticipant2: "参与者 2",
      conversationText2: "当然，但我要补充的是，访问权限是——",
      conversationParticipant3: "参与者 3",
      conversationText3: "—抱歉打扰了，但运输也很重要。",
      conversationText4: "是的！这正是我想说的。",
      conversationParticipant4: "参与者 4",
      conversationText5: "在农村地区，问题包括三个方面：成本、通道和交通。",
      feature3Label: "精确",
      feature3Title: "96% 的准确率",
      feature3Desc: "像专业人士一样处理专业术语、浓重口音和领域专用术语。准确度足以满足出版、同行评审和论文评审委员会的要求。",
      feature3Point1: "医学和科学术语",
      feature3Point2: "100多种语言和方言",
      feature3Point3: "逐字和清晰阅读模式",
      feature3Point4: "以任何格式编辑和导出",
      feature3Visual1: "研究级准确度",
      feature3Visual2: "受到 50,000 多名研究人员的信赖",
      feature4Label: "安全",
      feature4Title: "IRB 就绪安全",
      feature4Desc: "您的敏感研究数据受到企业级安全保护。符合 GDPR 要求，提供符合 HIPAA 要求的选项，以及符合 IRB 要求的完整审计跟踪。",
      feature4Point1: "端到端加密",
      feature4Point2: "符合 GDPR 和 CCPA 要求",
      feature4Point3: "自动删除政策",
      feature4Point4: "确保团队协作",
      useCasesTitle: "适合每种研究方法",
      useCasesSubtitle: "从民族志到临床试验",
      useCase1Title: "焦点小组",
      useCase1Desc: "处理 8-20 位参与者的重叠发言。即使在激烈的讨论中也能完美识别发言者。直接导出至定性分析软件。",
      useCase2Title: "深度访谈",
      useCase2Desc: "同时处理数百个一对一访谈。保持整个数据集的一致性。即时搜索所有记录。",
      useCase3Title: "临床研究",
      useCase3Desc: "符合 HIPAA 要求的患者访谈选项。精准的医学术语转录。安全处理敏感健康数据。",
      useCase4Title: "民族志研究",
      useCase4Desc: "在自然环境中进行现场录音。处理背景噪音和多位发言者。支持 100 多种语言和方言。",
      useCase5Title: "口述历史项目",
      useCase5Desc: "无限制保存完整档案。创建可搜索的历史记录。非常适合纵向研究和世代研究。",
      useCase6Title: "论文研究",
      useCase6Desc: "价格优惠，功能齐全，学生友好。经济实惠，处理您的整个数据集。批量处理，满足紧迫的截止日期。",
      testimonialTitle: "受到领先研究人员的信赖",
      testimonialText: "我们的研究团队从社区健康研究中收集了200小时的焦点小组录音。由于成本原因，其他服务机构希望我们自己挑选需要转录的会议内容。NeverCap让我们在一个周末内处理所有录音。20位发言者识别功能确实有效——即使在我们讨论最混乱、每个人都在同时发言的情况下也是如此。这个工具彻底改变了我们处理定性数据的方式。",
      testimonialAuthorName: "陈莎拉博士",
      testimonialAuthorRole: "公共卫生研究所首席研究员",
      ctaTitle: "停止选择要分析的数据",
      ctaSubtitle: "加入 50,000 多名转录一切内容的研究人员",
      ctaButton: "免费试用NeverCap"
    },
    BusinessTeams: {
      heroBadge: "对于商业团队",
      heroTitle1: "会议记录已制作",
      heroTitle2: "毫不费力",
      heroSubtitle: "直接在浏览器中录制会议或即时上传音频文件。从无限量的对话中构建可搜索的存档。真正无限量的转录，告别重要讨论。",
      heroCtaPrimary: "立即开始录制 →",
      heroCtaSecondary: "了解其工作原理",
      recordingStatus: "记录...",
      statsMeetingMinutes: "会议纪要",
      statsLiveRecording: "现场录音",
      statsSpeakerID: "说话人识别",
      statsInstantUpload: "即时上传和处理",
      featuresTitle: "团队获取知识所需的一切",
      featuresSubtitle: "从现场录制到即时上传，我们消除了每一个摩擦点",
      feature1Title: "直接在浏览器中录制",
      feature1Desc: "无需下载，无需插件。一键即可立即开始录音。完美音质，自动说话人检测，并在您说话时实时转录。",
      feature1Benefit1: "一键开始录制",
      feature1Benefit2: "无需安装软件",
      feature1Benefit3: "适用于任何设备",
      feature1Benefit4: "实时转录",
      feature1Visual1: "点击并记录",
      feature1Visual2: "无需设置",
      feature2Title: "立即上传任何音频文件",
      feature2Desc: "有 Zoom、Teams 或手机录制的会议记录？立即上传。支持所有主流音频和视频格式。同时处理多个文件，无需等待。",
      feature2Benefit1: "支持：MP3、MP4、M4A、MOV、AAC、WAV、OGG、OPUS、MPEG、WMA、WMV、FLAC",
      feature2Benefit2: "批量上传功能",
      feature2Benefit3: "支持 10 小时文件",
      feature2Benefit4: "工作时进行处理",
      feature2Visual1: "拖放文件",
      feature3Title: "专为团队协作而打造",
      feature3Desc: "立即与您的团队共享会议记录。一起聆听录音，导出多种格式的记录，并确保每个人都拥有可搜索的会议档案。",
      feature3Benefit1: "与任何人分享成绩单",
      feature3Benefit2: "聆听原始录音",
      feature3Benefit3: "以多种格式导出成绩单",
      feature3Benefit4: "团队范围内可搜索的档案",
      feature3Visual1: "团队成员",
      feature3Visual2: "无限协作",
      feature4Title: "立即查找任何对话",
      feature4Desc: "一次性搜索所有会议。查找上个季度的关键决策，或几个月前的客户需求。人工智能搜索不仅能理解关键词，还能理解上下文。",
      feature4Benefit1: "一次搜索所有会议",
      feature4Benefit2: "人工智能理解语境",
      feature4Benefit3: "按发言人或日期过滤",
      feature4SearchPlaceholder: "🔍 搜索：“第四季度收入目标”",
      feature4SearchResults: "在 3 次会议中发现：",
      feature4Meeting1: "销售计划 - 10 月 15 日",
      feature4Meeting1Text: "“...第四季度的目标设定为 200 万美元...”",
      feature4Meeting2: "董事会会议 - 10月20日",
      feature4Meeting2Text: "“...第四季度收入预测...”",
      workflowTitle: "从记录到可操作的见解",
      workflowSubtitle: "无缝工作流程，捕捉每个重要时刻",
      workflowStep1Title: "录制或上传",
      workflowStep1Desc: "开始现场录制或上传现有音频文件",
      workflowStep2Title: "自动转录",
      workflowStep2Desc: "AI 几分钟内即可完成转录，准确率达 96%",
      workflowStep3Title: "合作",
      workflowStep3Desc: "分享、评论和提取行动项目",
      workflowStep4Title: "搜索和分析",
      workflowStep4Desc: "在所有会议中寻找见解",
      testimonialsTitle: "团队热爱NeverCap",
      testimonialsSubtitle: "了解企业如何转变会议文化",
      testimonial1Text: "“我们从错过关键细节到拥有每次对话的可搜索存档，再也没有忘记。直接录音功能意味着我们永远不会忘记记录重要的讨论。”",
      testimonial1AuthorName: "詹姆斯·金",
      testimonial1AuthorRole: "TechCorp 产品经理",
      testimonial2Text: "Otter 限制我们每月只能上传 10 个文件。现在，我们可以立即上传所有客户通话记录。这对于我们销售团队的后续跟进来说，无疑是一次巨大的变革。",
      testimonial2AuthorName: "莎拉·罗德里格斯",
      testimonial2AuthorRole: "ConsultPro 销售总监",
      testimonial3Text: "“能够搜索数月的会议记录，这在审计过程中帮了我们大忙。几秒钟内就能找到所有决策和批准。”",
      testimonial3AuthorName: "刘马克",
      testimonial3AuthorRole: "FinanceHub 首席运营官",
      ctaTitle: "避免丢失重要对话",
      ctaSubtitle: "加入数千个团队，通过无限转录记录每次会议",
      ctaButton: "开始免费录音 →"
    },
    Educators: {
      heroBadge: "对于教育工作者和教师",
      heroTitle1: "将任何教育视频变成",
      heroTitle2: "无障碍内容",
      heroSubtitle: "只需粘贴 YouTube 链接，即可获得带有自动生成字幕的即时文本。将讲座、教程和教育视频转换为可搜索、可访问的内容，让每个学生都能从中学习。",
      heroCtaPrimary: "免费试用 - 无需信用卡",
      heroCtaSecondary: "观看演示",
      stats1Number: "一键",
      stats1Label: "YouTube 转录",
      stats2Number: "100+",
      stats2Label: "支持的语言",
      stats3Number: "∞",
      stats3Label: "无限视频",
      stats4Number: "96%",
      stats4Label: "准确率",
      featuresTitle: "教育工作者需要的视频转录的一切",
      featuresSubtitle: "从 YouTube 讲座到录制课程，让您的所有内容都易于访问",
      feature1Title: "即时 YouTube 和平台链接",
      feature1Desc: "只需粘贴任何视频链接即可立即获取文字记录。适用于 YouTube、Vimeo、Facebook、X (Twitter)、TikTok、Instagram、Dropbox、Google Drive 等平台。无需下载，无需等待。",
      feature1Point1: "直接链接转录 - 无需下载",
      feature1Point2: "支持各大主流平台",
      feature1Point3: "一次处理整个播放列表",
      feature1Point4: "适用于私人视频（经许可）",
      feature2Title: "自动生成字幕和副标题",
      feature2Desc: "立即为所有教育视频创建精准字幕。让有听力障碍的学生、非母语人士或喜欢跟读的学生也能轻松观看。",
      feature2Point1: "SRT、VTT 和 TXT 导出格式",
      feature2Point2: "字级时间戳，实现完美同步",
      feature2Point3: "轻松编辑和自定义字幕",
      feature2Point4: "直接上传回 YouTube",
      feature2Visual1: "语言翻译",
      feature2Visual2: "让您的内容在全球范围内可访问",
      feature3Title: "按课程和类别组织",
      feature3Desc: "创建文件夹，按课程、科目或学期整理您的成绩单。让您的所有教育内容井然有序、易于搜索。打造一个内容全面、易于访问的课程资料库。",
      feature3Point1: "创建无限的文件夹和子文件夹",
      feature3Point2: "按主题或难度级别标记视频",
      feature3Point3: "批量整理多个成绩单",
      feature3Point4: "立即搜索所有内容",
      feature3VisualTitle: "您的课程库",
      feature3Folder1: "数学101",
      feature3Folder2: "物理讲座",
      feature3Folder3: "生物实验室视频",
      feature3Folder4: "历史纪录片",
      feature3Folder5: "语言学习",
      feature4Title: "以您需要的任何格式导出",
      feature4Desc: "下载 TXT、DOCX 或 PDF 格式的成绩单。非常适合创建学习指南、课堂笔记或易于理解的课程资料。与学生共享或集成到您的学习管理系统。",
      feature4Point1: "TXT 用于简单文本编辑",
      feature4Point2: "DOCX 用于格式化文档",
      feature4Point3: "PDF格式，方便共享和打印",
      feature4Point4: "一次批量导出多个文件",
      workflowTitle: "工作原理",
      workflowSubtitle: "几分钟内即可从视频链接到可访问的文字记录",
      workflowStep1Title: "粘贴链接",
      workflowStep1Desc: "复制任何教育视频 URL 并粘贴",
      workflowStep2Title: "自动转录",
      workflowStep2Desc: "AI 转录准确率达 96%",
      workflowStep3Title: "生成字幕",
      workflowStep3Desc: "自动创建完美同步的字幕",
      workflowStep4Title: "分享与导出",
      workflowStep4Desc: "下载或与学生分享",
      useCasesTitle: "满足各种教育需求",
      useCasesSubtitle: "了解教育工作者如何使用NeverCap来增强学习",
      useCase1Title: "录制讲座",
      useCase1Text: "转录整个学期的录音讲座。学生可以搜索特定主题，复习关键概念，绝不会错过重要信息。",
      useCase2Title: "在线课程",
      useCase2Text: "您的在线课程提供 100 多种语言的翻译，方便国际学生访问。提高注册率和满意度。",
      useCase3Title: "学习资料",
      useCase3Text: "将视频教程转换为易读的学习指南。非常适合喜欢阅读或需要快速复习内容的学生。",
      useCase4Title: "无障碍合规性",
      useCase4Text: "为所有视频内容提供字幕和文字记录，满足无障碍访问要求。确保所有学生都能平等访问。",
      useCase5Title: "翻转课堂",
      useCase5Text: "课前分享视频讲座及文字记录。学生可以按照自己的节奏复习，并为讨论做好准备。",
      useCase6Title: "研究与引用",
      useCase6Text: "帮助学生使用时间戳准确引用视频来源。非常适合研究项目和学术论文。",
      testimonialTitle: "深受 50,000 多名教育工作者信赖",
      testimonialSubtitle: "了解世界各地的教师为何选择NeverCap",
      testimonialText: "我一直在使用NeverCap转录我的整个YouTube数学教程频道。以前用其他服务需要几周时间，现在只需几个小时。直接粘贴链接就能立即获得转录文本的功能彻底改变了我创作易理解内容的方式。我的国际学生尤其喜欢它的多语言字幕！",
      testimonialAuthorName: "凯伦·米切尔教授",
      testimonialAuthorRole: "数学教授，在线教育者",
      ctaTitle: "让所有教育内容都触手可及",
      ctaSubtitle: "加入数千名使用真正无限转录的教育工作者",
      ctaButton: "免费试用NeverCap"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "下载 YouTube 视频为 MP4",
        "placeholder": "在此处搜索或粘贴您的 Youtube 链接",
        "clear_icon": "清除输入",
        "Download": "下载",
        "loading_text": "正在处理下载链接。请继续留在页面上。",
        "howToDownload": "如何下载？",
        "tutorial": "观看教程"
      },
      part2: {
        "title": "只需 3 个简单步骤，即可将 YouTube 视频转换为可下载的 MP4 文件",
        "steps": [
                {
                  title: "复制 URL",
                  content: "打开目标 YouTube 视频，然后从浏览器的地址栏复制链接。"
                },
                {
                  title: "粘贴链接",
                  content: "前往您的视频下载工具并将 URL 粘贴到其输入字段中。"
                },
                {
                  title: "下载 MP4",
                  content: "处理完成后，点击下载按钮保存您的 MP4 文件。"
                }
              ]
      },
      part3: {
        content: [
                "您是否曾发现自己需要离线观看 YouTube 视频？",
                "无论您是乘坐地铁通勤、乘飞机出行、学习重要教程、深入学习技能提升内容，还是存档重要的视频资料，都常常会遇到难以获得可靠的离线访问的问题。而我们的下载器正是为此而生。",
                "这款下载器可让您快速轻松地将 YouTube 视频转换为 MP4 格式进行下载。将它们保存到您的设备，随时观看。",
                "整个过程快速、简单、轻松。下载完成后，无需网络，即可随时随地欣赏您喜爱的视频。"
              ]
      },
      part4: {
        content: ["下载的 5 大好处如下", "MP4 格式的 YouTube 视频"],
        list: [
                {
                  title: "节省数据成本：",
                  content: "通常，在 YouTube 上观看视频会消耗大量的移动流量。下载并离线观看可以避免这些不必要的费用。"
                },
                {
                  title: "随时随地观看：",
                  content: "即使网络连接不稳定，也能流畅地欣赏视频。无需再担心缓冲。"
                },
                {
                  title: "轻松存档和保存：",
                  content: "将视频保存为 MP4 可以轻松构建您的个人收藏，尤其是您认为真正有价值或重要的内容。"
                },
                {
                  title: "更简单的共享：",
                  content: "共享 MP4 文件比发送链接方便得多。您可以直接通过 WhatsApp 或 Instagram 等应用程序发送视频文件，省去了打开 YouTube 的额外步骤。"
                },
                {
                  title: "即时观看，共享时刻：",
                  content: "兴奋地向身边的亲朋好友展示自己喜欢的视频？下载 MP4 后，大家可以立即一起流畅观看，无需等待加载，省去了尴尬的停顿。"
                }
              ]
      },
      part5: {
        title: "为什么我们的下载器脱颖而出",
        cards: [
                {
                  title: "一键式操作",
                  content: "轻松设置和直观操作。"
                },
                {
                  title: "极速——速度快，无限",
                  content: "以最快速度转换和下载 — 无上限，无限制。"
                },
                {
                  title: "即时转换",
                  content: "立即处理您的文件，无需等待。"
                },
                {
                  title: "零广告，零干扰",
                  content: "享受干净的界面，没有弹出窗口、横幅或中断 - 只有无缝视频转换。"
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "原装品质保证",
                  content: "您的下载内容保留了源视频的完整分辨率，以便每次都能完美播放像素。"
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "可在任何地方使用",
                  content: "与任何设备上的任何浏览器完全兼容。"
                }
              ]
      },
      part6: {
        title: ["最大化您的 YouTube 视频下载量", "使用下载器"],
        content: [
                "轻松将 YouTube 转换为 MP4：快速、简单且免费。",
                "这正是我们的优势所在。我们设计的用户友好界面，人人适用——无需任何技术技能。无论您的经验水平如何，都能立即转换视频。无需注册：立即获得您所需的一切。",
                "请放心——您下载的 MP4 将保持原始视频质量和清晰度，与您在 YouTube 上观看的完全一样。",
                "随时随地，轻松便捷。全面兼容所有主流平台和设备。无论您使用 Windows、macOS、Linux、Android 还是 iOS 系统，无论是智能手机、平板电脑还是台式电脑，都能流畅下载视频。"
              ]
      },
      part7: {
        title: "下载 YouTube 视频的关键问题",
        list: [
                {
                  question: "如果 YouTube 视频有版权，我可以下载吗？",
                  answer: "未经版权所有者许可下载受版权保护的 YouTube 视频是违法的。"
                },
                {
                  question: "这个下载工具安全吗？",
                  answer: "是的，它安全可靠。我们无需用户提供任何个人信息，并采取了强有力的病毒防护措施。我们提醒您在从互联网下载文件时务必谨慎：避免点击可疑链接或下载可疑文件。"
                },
                {
                  question: "YouTube 至 MP4 下载支持哪些语言？",
                  answer: "我们的服务支持下载所有流行语言的 YouTube 视频。"
                },
                {
                  question: "哪些因素会影响下载 YouTube 视频所需的时间？",
                  answer: "虽然我们确保提供最快的下载体验，但下载时间也会受到视频长度和互联网连接速度等因素的影响。"
                },
                {
                  question: "当我使用智能手机下载 MP4 视频时，它保存在哪里？"
                },
                {
                  question: "将 YouTube 视频下载为 MP4 格式会降低视频质量吗？",
                  answer: "不会。使用我们的工具下载 YouTube 视频为 MP4 格式时，视频质量将保持不变。转换过程会保留源质量，确保您获得与 YouTube 相同的观看体验。"
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 行业领先的人工智能技术",
      "title": "关于",
      "highlighted_text": "NeverCap",
      "description": "我们的使命是提供最精准的音视频转录服务。凭借业界领先的人工智能技术，我们的转录准确率已超过 96%。对于某些主流语种，通过技术优化，准确率甚至可以达到 99%。"
    },
    Stats: {
      "title": "我们的",
      "highlighted_text": "影响",
      "subtitle": "以尖端人工智能技术赋能全球沟通",
      "metrics": [
            {
              "value": "96%以上",
              "label": "准确率",
              "description": "凭借先进的人工智能实现行业领先的转录准确性"
            },
            {
              "value": "100+",
              "label": "支持的语言",
              "description": "全球内容的口语识别"
            },
            {
              "value": "249+",
              "label": "翻译语言",
              "description": "将转录文本翻译成几乎任何语言"
            }
          ]
    },
    Mission: {
      "title": "为什么选择",
      "highlighted_text": "NeverCap",
      "subtitle": "我们致力于打破语言障碍，让每个人都能访问内容",
      "features": [
            {
              "icon": "🎯",
              "title": "无与伦比的精度",
              "description": "我们的 AI 模型经过不断完善，转录准确率已超过 96%，部分主要语言通过高级优化，准确率甚至可达到 99%。"
            },
            {
              "icon": "🌍",
              "title": "全球语言支持",
              "description": "支持超过 100 种语言的口语识别和超过 249 种语言的翻译功能，让您的内容真正实现全球化。"
            },
            {
              "icon": "⚡",
              "title": "闪电般快速处理",
              "description": "只需几分钟（而非几小时）即可处理长达数小时的音频和视频内容。我们优化的 AI 流程确保您快速获得转录，且不牺牲质量。"
            },
            {
              "icon": "🔒",
              "title": "企业级安全",
              "description": "您的数据安全是我们的首要任务。我们使用行业标准加密技术，并遵守全球隐私法规，确保您的内容安全保密。"
            }
          ]
    },
    Company: {
      "title": "公司",
      "highlighted_text": "信息",
      "subtitle": "如有任何疑问或需要支持，请与我们联系。",
      "details": [
            {
              "label": "公司名称",
              "value": "SCRIBIFY AI公司"
            },
            {
              "label": "总部",
              "value": ["30 N Gould St Ste R", "谢里登，怀俄明州 82801", "美国"]
            },
            {
              "label": "联系我们",
              "value": ["电子邮件", "全天候提供支持"]
            }
          ]
    },
    CTA: {
      "title": "准备好体验不同之处了吗？",
      "subtitle": "加入数以千计的专业人士，他们信赖NeverCap来满足他们的转录需求",
      "button": "免费试用NeverCap →",
      "disclaimer": "无需信用卡 • 几秒钟内即可开始转录"
    }
  },
  Privacy: {
    title: "隐私",
    titleGradient: "政策",
    subtitle: "了解我们如何收集、使用和保护您的个人信息",
    "lastUpdated": "最后更新时间：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "privacyPolicyTitle": "隐私政策",
    "policyDescription": "本政策描述了NeverCap（以下简称“NeverCap”、“我们的”、“我们”）在您使用我们的服务、网站（https://www.nevercap.ai/）和软件（统称为“服务”）时如何收集、使用和披露您的个人信息。",
    "policyAgreement": "请仔细阅读本隐私政策，并确保您理解其内容。使用我们的任何服务，即表示您同意本隐私政策。如果您不同意我们根据本政策使用您的个人数据，您必须立即停止使用我们的服务。",
    "policyOverview": "在本政策中，我们阐述了：我们收集哪些数据以及收集原因；您的数据将如何处理；以及您对您的数据享有的权利。我们不会出售您的数据。",
    "scopeTitle": "1. 本隐私政策的范围",
    "scopeDescription": "本隐私政策仅适用于我们对服务用户信息的收集和处理。本隐私政策不适用于任何链接到我们的第三方运营的服务、网站或软件（无论这些链接是由我们提供的还是其他用户分享的），也不适用于来自第三方的内容、数据、应用程序或资料。我们建议您在向任何第三方网站或软件提供任何信息之前，先查看其隐私政策。",
    "collectionTitle": "2. 我们收集哪些信息以及为什么",
    "collectionPrinciple": "我们的指导原则是只收集我们需要的信息。以下是实际操作中的含义：",
    "identityTitle": "2.1 身份与访问",
    "identityDescription": "当您注册我们的某款产品时，我们会要求您提供身份信息，例如您的姓名、电子邮件地址。这是为了提供必要的产品功能，并方便我们向您发送产品更新和其他重要信息。",
    "billingTitle": "2.2 账单信息",
    "billingDescription": "如果您注册付费产品，我们将要求您提供付款信息和账单地址。付款信息将直接提交给我们的付款处理器，不会发送到我们的服务器。",
    "productInteractionsTitle": "2.3 产品交互",
    "productInteractionsDescription": "我们将您在产品帐户中上传、接收或维护的内容存储在我们的服务器上。除非您删除这些内容，否则只要您的帐户处于活跃状态，我们就会一直保留这些内容。",
    "websiteInteractionsTitle": "2.4 网站互动",
    "websiteInteractionsDescription": "我们收集您的浏览活动信息，用于分析和统计目的，例如转化率测试和新产品设计实验。这些信息包括：例如，您的浏览器和操作系统版本、您的 IP 地址、您访问过的网页及其加载时间，以及哪个网站将您推荐给我们。如果您拥有账户并已登录，这些网络分析数据将与您的 IP 地址和用户账户绑定，直至您的账户不再活跃。",
    "cookiesTitle": "2.5 Cookie",
    "cookiesDescription1": "我们还使用持久性第一方 cookie 和一些第三方 cookie 来存储某些偏好，让您更轻松地使用我们的应用程序，并执行 A/B 测试以及支持一些分析。",
    "cookiesDescription2": "Cookie 是浏览器存储的一段文本。它可以帮助您记住登录信息和站点偏好设置。它还可能收集您的浏览器类型、操作系统、访问过的网页、访问时长、浏览过的内容以及其他点击流数据等信息。您可以在浏览器设置中调整 Cookie 保留设置，并接受或阻止单个 Cookie。但是，如果您关闭 Cookie，我们的应用程序将无法运行，我们服务的其他方面也可能无法正常运行。",
    "correspondenceTitle": "2.6 自愿通信",
    "correspondenceDescription": "当您通过电子邮件向我们提出问题或寻求帮助时，我们会保留该通信记录，包括您的电子邮件地址，以便我们在您将来联系我们时可以参考过去的通信记录。",
    "accessTitle": "3. 我们何时访问或共享您的信息",
    "accessDescription1": "为了提供您所请求的产品或服务。我们会使用一些第三方子处理器来协助运行我们的应用程序并向您提供服务。这包括云和分析提供商。",
    "accessDescription2": "调查、预防或采取行动应对滥用行为。在调查潜在滥用行为时，访问客户账户是不得已而为之。我们希望保护客户和举报人的隐私和安全，并在整个过程中尽力平衡这些责任。如果我们发现您将我们的产品用于受限用途，我们将采取必要的措施，包括在必要时通知相关部门。",
    "accessDescription3": "根据适用法律的要求。",
    "dataRequests": "用户数据请求。我们的政策是，除非法律程序强制要求或在有限的紧急情况下，否则我们不会响应政府的用户数据请求。但是，如果美国执法机构持有必要的搜查令、刑事传票或法院命令要求我们共享数据，我们必须遵守。同样，我们仅会在美国政府通过司法互助条约或协议中规定的程序强制要求的情况下，才会响应来自美国境外政府机构的请求。我们的政策是在共享数据之前通知受影响的用户，除非法律禁止我们这样做，并且某些紧急情况除外。",
    "preservationRequests": "保存请求。同样，我们的政策是，仅在美国《联邦存储通信法》第 18 USC 第 2703(f) 条或美国民事传票强制要求的情况下，我们才会遵守保存数据的请求。除非法律要求或法院命令强制要求（我们选择不上诉），否则我们不会共享已保存的数据。此外，除非我们在规定保存期到期前收到适当的搜查令、法院命令或传票，否则我们将在保存期结束时销毁任何已保存的客户数据副本。",
    "taxAudits": "如果我们受到税务机关的审计，我们可能需要共享账单相关信息。在这种情况下，我们只会共享必要的最低限度的信息，例如账单地址和免税信息。",
    "securityTitle": "4. 我们如何保护您的数据",
    "securityDescription": "所有数据从我们的服务器传输到您的浏览器时都通过 SSL/TLS 加密。",
    "deletionTitle": "5. 删除内容后会发生什么",
    "deletionDescription": "如果您删除任何内容，它将立即变得无法访问。",
    "locationTitle": "6. 站点和数据的位置",
    "locationDescription": "我们的产品和其他网络资产在美国运营。如果您位于欧盟、英国或美国以外的其他地方，请注意，您向我们提供的任何信息都将被传输至美国并存储于美国。使用我们的网站或服务和/或向我们提供您的个人信息，即表示您同意此类传输。",
    "childrenTitle": "7.儿童隐私",
    "childrenDescription": "本服务并非针对儿童，我们不会故意收集 13 岁以下儿童的个人信息。如果您未满 13 岁，请勿通过本服务提交任何个人信息。如果您认为有儿童违反本政策向我们提供了个人信息，请按照以下方式联系我们。",
    "updatesTitle": "8. 本隐私政策的更新",
    "updatesDescription": "我们可能会根据需要更新本政策，以符合相关法规并反映任何新的做法。每当我们的政策做出重大变更时，我们都会更新本页面顶部的日期。",
    "contactTitle": "9. 联系我们",
    "contactDescription": "如果您对我们的隐私政策有任何疑问、意见或投诉，请联系我们，我们将尽快处理您的投诉。",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "条款",
    titleGradient: "服务",
    subtitle: "在使用我们的服务之前，请仔细阅读这些条款",
    "lastUpdated": "最后更新时间：{date}",
    "lastUpdatedDate": "2025年7月21日",
    "termsOfServiceTitle": "服务条款",
    "thankYou": "感谢您使用我们的产品！",
    "companyDefinition": "当我们在本文档中说“公司”、“我们”、“我们的”或“我们”时，指的是NeverCap。",
    "servicesDefinition": "当我们说“服务”时，我们指的是由NeverCap创建和维护的任何产品，无论是通过网络浏览器、桌面应用程序、移动应用程序还是其他格式交付。",
    "termsUpdate": "我们未来可能会更新本服务条款。通常，这些变更旨在通过链接至更详细的相关政策来澄清部分条款。每当我们对政策做出重大变更时，我们都会更新本页面顶部的日期，并采取其他适当措施通知帐户持有人。",
    "acceptanceTitle": "1. 接受协议",
    "acceptanceDescription1": "使用我们的服务，即表示您接受本协议，本协议由此成为您与NeverCap之间具有约束力的合同。您声明您具备法定能力接受这些条款，并确认您已达到订立具有约束力合同的法定年龄。NeverCap的接受明确以您同意本协议的所有条款和条件为前提。",
    "eligibilityRequirement": "该服务不适用于 18 岁以下的任何人，也不应该由 18 岁以下的任何人使用。通过使用该服务，您声明并保证您符合上述资格要求。",
    "userResponsibility": "“您”、“您的”、“您本人”等术语也包括您的员工、代理人、业务代表以及您允许通过您的帐户（定义见下文）访问服务的任何其他个人。您有责任确保所有通过您的帐户访问服务的人员均知悉并遵守本条款。",
    "termsRevision": "NeverCap保留随时自行修改和更新本条款的权利。所有变更一经发布即刻生效。如果您在修订条款发布后继续使用服务，即表示您接受并同意这些变更。由于变更对您具有约束力，因此请您不时查看此页面，以了解所有变更。",
    "servicesTitle": "2. NeverCap的服务",
    "servicesDescription1": "我们的服务使用户能够将语音对话转换为可搜索、翻译和与他人共享的转录文本。",
    "servicesOptions": "您可以选择使用服务的免费版本（“免费服务”）或可能需要支付费用的订阅式付费版本服务（“付费服务”）。",
    "servicesAccess": "我们将向您提供服务。您有责任做好一切必要安排，以便访问服务。",
    "accountTermsTitle": "3. 账户条款",
    "accountSecurity": "您有责任维护您的账户安全。本公司无法且不会对因您未能遵守此安全义务而造成的任何损失或损害承担责任。",
    "lawfulUse": "您不得将服务用于任何非法、不道德或不道德的目的。",
    "contentResponsibility": "您应对您帐户下发布的所有内容和发生的活动负责。这包括以下人员发布的内容：(a) 有权访问您的登录凭据；或 (b) 在您的帐户下拥有自己的登录信息。",
    "humanRequirement": "您必须是人类。不允许使用“机器人”或其他自动化方法注册的帐户。",
    "paymentTitle": "4. 付款、退款和计划变更",
    "freeTrial": "对于提供免费试用的付费服务，我们会在您注册时说明试用期限。试用期结束后，您需要提前付款才能继续使用服务。如果您不付款，这些服务将会终止。",
    "upgradePolicy": "如果您从免费计划升级到付费计划，我们将立即从您的卡中扣款，您的计费周期从升级当天开始。",
    "taxes": "所有费用均不含税务机关征收的任何税费、征税或关税。如有需要，我们将代表税务机关代收这些税费，并将税费汇给税务机关。否则，您需自行承担所有税费、征税或关税。",
    "refunds": "所有购买均不可退款。您可以随时登录您的帐户取消任何付费服务。对于付费订阅，除非另有说明，否则您的取消将在当前付费期限结束时生效。",
    "cancellationTitle": "5. 取消和终止",
    "cancellationPolicy": "如果您在任何付费期限结束前取消服务，您的取消将立即生效，并且不会再次向您收费。我们不会自动按比例计算上一个计费周期中未使用的时间。",
    "terminationRights": "我们有权随时以任何理由暂停或终止您的帐户，并拒绝您当前或未来对我们服务的任何使用。暂停意味着您将无法访问该帐户或帐户中的任何内容。终止将导致您的帐户或您对帐户的访问权限被删除，以及您帐户中所有内容的丧失和放弃。我们还保留随时以任何理由拒绝任何人使用服务的权利。我们制定此条款是因为从统计数据来看，在我们服务的数十万个帐户中，至少有一个帐户正在从事恶意活动。",
    "abusePolicy": "对公司员工或官员的口头、身体、书面或其他辱骂（包括辱骂或报复威胁）可能会导致立即终止帐户。",
    "submissionsTitle": "6. 提交内容",
    "submissionsDescription": "您确认并同意，您向我们提供的关于本网站的任何问题、评论、建议、想法、反馈或其他信息（统称“提交内容”）均非保密信息，并将成为我们的唯一财产。我们拥有专有权利，包括所有知识产权，并有权出于任何合法目的（商业或其他目的）不受限制地使用和传播这些提交内容，而无需向您确认或支付任何报酬。您特此放弃对任何此类提交内容的所有精神权利，并保证任何此类提交内容均为您的原创或您有权提交此类提交内容。您同意，对于任何涉嫌或实际侵犯或盗用您提交内容中任何专有权利的行为，您不得向我们追诉。",
    "uptimeTitle": "7. 正常运行时间和安全性",
    "serviceAvailability": "您使用本服务的风险由您自行承担。我们以“现状”和“可用”为基础提供这些服务。我们大多数服务不提供服务级别协议，但我们非常重视应用程序的正常运行时间。",
    "throttlingPolicy": "在极少数情况下，如果用户的活动被证实会对其他用户的服务稳定性和性能造成负面影响，我们保留暂时限制帐户访问的权利。除最紧急的情况外，我们会在采取行动之前与您联系，寻求解决方案。",
    "dataSecurity": "我们采取多种措施，通过备份、冗余和加密来保护您的数据安全。我们对通过公共互联网传输的数据强制加密。",
    "thirdPartyVendors": "我们使用第三方供应商和托管合作伙伴来提供运行服务所需的必要硬件、软件、网络、存储和相关技术。",
    "siteManagementTitle": "8.现场管理",
    "siteManagementDescription": "我们保留以下权利（但没有义务）：（1）监控网站是否违反这些服务条款；（2）对我们自行决定违反法律或这些服务条款的任何人采取适当的法律行动，包括但不限于向执法部门举报该用户；（3）我们自行决定且不受限制地拒绝、限制访问、限制可用性或禁用（在技术可行的范围内）您的任何贡献或其任何部分；（4）我们自行决定且不受限制地、通知或承担责任，从网站中删除或以其他方式禁用所有过大或以任何方式对我们的系统造成负担的文件和内容；以及（5）以旨在保护我们的权利和财产并促进网站正常运行的方式管理网站。",
    "copyrightTitle": "9. 版权和内容所有权",
    "copyrightCompliance": "服务上发布的所有内容必须符合美国版权法。",
    "ipRights": "我们对您向服务提供的材料不主张任何知识产权。所有上传的材料仍归您所有。",
    "contentModeration": "我们不预先筛选内容，但保留自行决定拒绝或删除通过服务提供的任何内容的权利（但没有义务）。",
    "trademarkProtection": "服务的名称、外观和风格均受版权保护©，归公司所有。保留所有权利。未经公司明确书面许可，您不得复制、抄袭或重复使用任何HTML、CSS、JavaScript或视觉设计元素。您必须申请许可才能将公司徽标或任何服务徽标用于促销目的。请通过电子邮件向我们发送徽标使用请求。如果您违反本服务条款，我们保留撤销此许可的权利。",
    "prohibitedExploitation": "您同意未经公司明确的书面许可，不得复制、复印、拷贝、出售、转售或利用服务的任何部分、使用服务或访问服务。",
    "impersonationProhibition": "您不得修改其他网站以错误地暗示其与服务或公司相关。",
    "dmcaPolicy": "我们尊重他人的知识产权。如果您认为本网站上或通过本网站提供的任何材料侵犯了您拥有或控制的任何版权，请立即联系我们。您的通知副本将发送给发布或存储通知中提及的材料的人员。请注意，根据适用法律，如果您在通知中作出重大失实陈述，您可能需承担损害赔偿责任。因此，如果您不确定本网站上或通过本网站链接的材料是否侵犯了您的版权，您应该首先考虑联系律师。",
    "prohibitedActivitiesTitle": "10.禁止的活动",
    "generalProhibition": "您不得出于我们提供本网站目的以外的任何目的访问或使用本网站。除我们明确认可或批准的商业活动外，不得将本网站用于任何商业活动。",
    "userObligations": "作为本网站的用户，您同意不：",
    "dataScraping": "未经我们书面许可，系统地从网站检索数据或其他内容，以直接或间接地创建或编译集合、汇编、数据库或目录。",
    "fraud": "欺骗、诈骗或误导我们和其他用户，尤其是试图了解用户密码等敏感帐户信息。",
    "securityInterference": "规避、禁用或以其他方式干扰本网站的安全相关功能，包括阻止或限制使用或复制任何内容或强制限制使用本网站和/或其中包含的内容的功能。",
    "defamation": "我们认为，贬低、玷污或以其他方式损害我们和/或本网站。",
    "harassment": "使用从本网站获得的任何信息来骚扰、辱骂或伤害他人。",
    "supportAbuse": "不当使用我们的支持服务或提交虚假的滥用或不当行为报告。",
    "legalCompliance": "以不符合任何适用法律或法规的方式使用本网站。",
    "framingProhibition": "未经授权构建或链接本网站。",
    "malware": "上传或传输（或试图上传或传输）病毒、特洛伊木马或其他材料，包括过度使用大写字母和垃圾邮件（连续发布重复文本），干扰任何一方对网站的不间断使用和享受，或修改、损害、破坏、更改或干扰网站的使用、特性、功能、操作或维护。",
    "automation": "从事任何自动化的系统使用，例如使用脚本发送评论或消息，或使用任何数据挖掘、机器人或类似的数据收集和提取工具。",
    "copyrightRemoval": "从任何内容中删除版权或其他所有权声明。",
    "impersonation": "试图冒充其他用户或个人或使用其他用户的用户名。",
    "spyware": "上传或传输（或试图上传或传输）任何充当被动或主动信息收集或传输机制的材料，包括但不限于清晰图形交换格式（“gif”）、1×1像素、网络臭虫、cookies或其他类似设备（有时称为“间谍软件”或“被动收集机制”或“pcms”）。",
    "disruption": "干扰、破坏或对本网站或与本网站相连的网络或服务造成不当负担。",
    "employeeHarassment": "骚扰、烦扰、恐吓或威胁任何向您提供本网站任何部分的员工或代理人。",
    "accessCircumvention": "试图绕过本网站为防止或限制访问本网站或本网站任何部分而设计的任何措施。",
    "codeCopying": "复制或改编本网站的软件，包括但不限于 Flash、PHP、HTML、JavaScript 或其他代码。",
    "reverseEngineering": "除非适用法律允许，否则不得对包含或以任何方式构成本网站一部分的任何软件进行解密、反编译、反汇编或反向工程。",
    "bots": "除标准搜索引擎或互联网浏览器的使用结果外，使用、启动、开发或分发任何自动化系统，包括但不限于访问本网站的任何蜘蛛、机器人、欺骗实用程序、抓取工具或离线阅读器，或使用或启动任何未经授权的脚本或其他软件。",
    "buyingAgents": "使用采购代理或采购代理在网站上进行购买。",
    "unauthorizedUse": "未经授权使用本网站，包括通过电子或其他方式收集用户的用户名和/或电子邮件地址以发送未经请求的电子邮件，或通过自动方式或虚假借口创建用户帐户。",
    "competition": "将本网站用作与我们竞争的任何努力的一部分，或以其他方式将本网站和/或内容用于任何创收活动或商业企业。",
    "advertising": "使用本网站来宣传或提供销售商品和服务。",
    "profileTransfer": "出售或以其他方式转让您的个人资料。",
    "featuresTitle": "11. 功能和错误",
    "featuresDescription": "我们根据自身经验以及客户分享的时间和反馈，精心设计我们的服务。然而，不可能存在让所有人满意的服务。我们不保证我们的服务一定能满足您的特定要求或期望。",
    "bugsDescription": "我们还会测试所有功能，然后再发布。与任何软件一样，我们的服务不可避免地会存在一些错误。我们会跟踪收到的错误报告并努力解决，尤其是与安全或隐私相关的错误。并非所有报告的错误都会得到修复，我们也无法保证服务完全没有错误。",
    "correctionsTitle": "12. 更正",
    "informationAccuracy": "本网站上的信息可能存在排印错误、不准确或遗漏，包括描述、价格、供货情况以及其他各种信息。我们保留随时更正任何错误、不准确或遗漏以及更改或更新本网站信息的权利，恕不另行通知。",
    "siteAvailability": "我们无法保证本网站始终可用。我们可能会遇到硬件、软件或其他问题，或需要执行与本网站相关的维护，从而导致中断、延迟或错误。我们保留随时以任何理由更改、修订、更新、暂停、中止或以其他方式修改本网站的权利，恕不另行通知。您同意，对于因您在本网站停机或中止期间无法访问或使用本网站而造成的任何损失、损害或不便，我们概不负责。本服务条款中的任何内容均不得解释为我们有义务维护和支持本网站，或提供与此相关的任何更正、更新或发布。",
    "userDataTitle": "13.用户数据",
    "userDataDescription": "我们将保留您传输至本网站的某些数据，用于管理本网站的性能，以及与您使用本网站相关的数据。尽管我们会定期备份数据，但您应对您传输的所有数据或与您使用本网站进行的任何活动相关的数据承担全部责任。您同意，对于任何此类数据的丢失或损坏，我们概不负责，并且您特此放弃因任何此类数据的丢失或损坏而向我们提起诉讼的权利。",
    "privacyPolicyTitle": "14. 隐私政策",
    "privacyPolicyDescription": "我们重视数据隐私和安全。请查看我们的隐私政策。使用本网站即表示您同意接受我们的隐私政策的约束，该政策已纳入本服务条款。请注意，本网站托管于美国。如果您从世界任何其他地区访问本网站，且该等地区在个人数据收集、使用或披露方面的法律或其他要求与美国适用法律不同，则您继续使用本网站即表示您将把您的数据传输至美国，并且您同意将您的数据传输至美国并在美国进行处理。",
    "liabilityTitle": "15. 责任",
    "liabilityIntroduction": "我们在这些条款中都提到了责任，但将其全部放在一个部分：",
    "liabilityWaiver": "您明确理解并同意，对于因以下原因造成的任何直接、间接、附带、利润损失、特殊、后果性、惩罚性或惩戒性损害，包括但不限于利润损失、商誉损失、使用损失、数据损失或其他无形损失（即使公司已被告知发生此类损害的可能性），本公司不对您或任何第三方承担法律或衡平法上的责任：（1）使用或无法使用服务；（2）内容和材料的错误、失误或不准确之处；（3）因您访问和使用本网站而造成的任何性质的人身伤害或财产损失；（4）因通过或从服务购买或获得的任何商品、数据、信息或服务或收到的消息或达成的交易而产生的替代商品和服务的采购成本；（5）未经授权访问或使用我们的安全服务器和/或存储在其中的任何和所有个人信息和/或财务信息；（6）中断或停止往返于本网站的传输； (7) 任何第三方传输到或通过本网站的任何错误、病毒、特洛伊木马或类似物，和/或； (8) 任何内容和材料中的任何错误或遗漏，或因使用通过本网站发布、传输或以其他方式提供的任何内容而导致的任何损失或损害； (9) 任何第三方在服务上的声明或行为； (10) 或与本服务条款或服务有关的任何其他事项，无论是违约、侵权行为（包括主动或被动的疏忽）还是任何其他责任理论。",
    "miscellaneousTitle": "16. 其他",
    "miscellaneousDescription": "本服务条款以及我们在网站上发布的或与网站相关的任何政策或运营规则构成您与我们之间的完整协议和谅解。我们未能行使或执行本服务条款中的任何权利或规定，并不构成对该权利或规定的放弃。本服务条款在法律允许的最大范围内有效。我们可随时将我们的部分或全部权利和义务转让给他人。对于因超出我们合理控制范围的任何原因造成的任何损失、损害、延误或未能采取行动，我们概不负责。如果本服务条款的任何规定或部分规定被认定为非法、无效或不可执行，则该规定或部分规定将被视为可与本服务条款分割，且不影响任何其他规定的有效性和可执行性。您与我们之间并未因本服务条款或使用本网站而建立合资、合作、雇佣或代理关系。您同意，本服务条款不会因起草本服务条款而被解释为我们无效。您特此放弃基于本服务条款的电子形式以及本协议各方未签署执行本服务条款而可能拥有的任何及所有抗辩。",
    "contactTitle": "17. 联系我们",
    "contactDescription": "如果您对任何服务条款有疑问，请联系我们。",
    "neverCap": "NeverCap",
    "site": "地点",
    "services": "服务"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
