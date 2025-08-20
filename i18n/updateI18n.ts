#!/usr/bin/env ts-node

import {
  Project,
  SyntaxKind,
  ObjectLiteralExpression,
  PropertyAssignment,
  VariableDeclaration
} from "ts-morph";
import path from "path";
import fs from "fs";
import axios from "axios"; // 需要安装: npm install axios

// 语言配置
const languages = [
  "en-US",
  "es-ES",
  "it-IT",
  "fr-FR",
  "de-DE",
  "zh-CN",
  "zh-TW",
  "ja-JP",
  "ko-KR",
  "nl-NL",
  "pl-PL",
  "da-DK",
  "hu-HU",
  "no-NO",
  "pt-PT",
  "fi-FI",
  "sv-SE",
  "ru-RU",
  "tr-TR",
  "el-GR",
  "uk-UA",
  "he-IL",
  "ar-SA"
];

// 语言代码映射表
const languageMapping: { [key: string]: string } = {
  "en-US": "en",
  "es-ES": "es",
  "it-IT": "it",
  "fr-FR": "fr",
  "de-DE": "de",
  "zh-CN": "zh-cn",
  "zh-TW": "zh-tw",
  "ja-JP": "ja",
  "ko-KR": "ko",
  "nl-NL": "nl",
  "pl-PL": "pl",
  "da-DK": "da",
  "hu-HU": "hu",
  "no-NO": "no",
  "pt-PT": "pt",
  "fi-FI": "fi",
  "sv-SE": "sv",
  "ru-RU": "ru",
  "tr-TR": "tr",
  "el-GR": "el",
  "uk-UA": "uk",
  "he-IL": "he",
  "ar-SA": "ar"
};

<<<<<<< HEAD
const langPath = "./lang";
=======
const langPath = './lang';
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea

/**
 * ai翻译
 * */
<<<<<<< HEAD
let AI_CONFIG = {
  url: "https://api.siliconflow.cn/v1/chat/completions",
  apiKey: "sk-sswlyzxvwcbnxixpkznsbawlzbkltdbbezrdizyhiljbxziw", // 替换为你的 API Key
  model: "deepseek-ai/DeepSeek-v3" // deepseek-ai/DeepSeek-v3
};
AI_CONFIG = {
  url: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
  apiKey: "cca5560e-fa20-4b6c-aac5-88ac26d59a8b", // 替换为你的 API Key
  model: "doubao-seed-1-6-250615" // doubao
=======
const AI_CONFIG = {
  url: 'https://api.siliconflow.cn/v1/chat/completions',
  apiKey: 'sk-sswlyzxvwcbnxixpkznsbawlzbkltdbbezrdizyhiljbxziw', // 替换为你的 API Key
  model: 'deepseek-ai/DeepSeek-v3' // deepseek-ai/DeepSeek-v3
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
};

// 获取目标语言的完整名称
function getLanguageName(languageCode: string): string {
  const languageNames: { [key: string]: string } = {
<<<<<<< HEAD
    "zh-cn": "简体中文",
    "zh-tw": "繁体中文",
    en: "英语",
    es: "西班牙语",
    it: "意大利语",
    fr: "法语",
    de: "德语",
    ja: "日语",
    ko: "韩语",
    nl: "荷兰语",
    pl: "波兰语",
    da: "丹麦语",
    hu: "匈牙利语",
    no: "挪威语",
    pt: "葡萄牙语",
    fi: "芬兰语",
    sv: "瑞典语",
    ru: "俄语",
    tr: "土耳其语",
    el: "希腊语",
    uk: "乌克兰语",
    he: "希伯来语",
    ar: "阿拉伯语"
=======
    'zh-cn': '简体中文',
    'zh-tw': '繁体中文',
    'en': '英语',
    'es': '西班牙语',
    'it': '意大利语',
    'fr': '法语',
    'de': '德语',
    'ja': '日语',
    'ko': '韩语',
    'nl': '荷兰语',
    'pl': '波兰语',
    'da': '丹麦语',
    'hu': '匈牙利语',
    'no': '挪威语',
    'pt': '葡萄牙语',
    'fi': '芬兰语',
    'sv': '瑞典语',
    'ru': '俄语',
    'tr': '土耳其语',
    'el': '希腊语',
    'uk': '乌克兰语',
    'he': '希伯来语',
    'ar': '阿拉伯语'
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  };

  return languageNames[languageCode] || languageCode;
}

<<<<<<< HEAD
async function translateBatchWithAI(
  textArray: string[],
  targetLanguage = "zh-CN"
): Promise<string[]> {
=======
async function translateBatchWithAI(textArray: string[], targetLanguage = 'zh-CN'): Promise<string[]> {
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  const googleLangCode = getGoogleTranslateCode(targetLanguage);
  const targetLanguageName = getLanguageName(googleLangCode);

  // 构建翻译 prompt
  const prompt = `你是一个专业的UI界面翻译专家。请将以下英文文本翻译成${targetLanguageName}。
重要要求：
1. 这些是用户界面文本，请保持简洁和用户友好
2. 保持原文的格式，包括占位符如 {times}, {left}, {name}, {num} 等
3. 保持适当的大小写规范（首字母大写）
4. 不要翻译HTML实体，如 &quot; 保持原样
5. 按钮和操作文本要简洁有力
6. 保持专业术语的准确性
7. 不能遗漏
英文原文：
<<<<<<< HEAD
${textArray.map((text, index) => `${index + 1}. ${text}`).join("\n")}
请翻译成${targetLanguageName}，每行对应一个翻译结果：`;
  const data = {
    model: AI_CONFIG.model,
    messages: [
      {
        role: "system",
        content: prompt
      },
      {
        role: "user",
        content: prompt
      }
    ],
    stream: false, // 不使用流式响应
    max_tokens: 4000,
    temperature: 0.3 // 使用较低的温度以获得更稳定的翻译结果
  };
  const headers = {
    Authorization: `Bearer ${AI_CONFIG.apiKey}`,
    "Content-Type": "application/json"
  };
  try {
    console.log(
      `🤖 使用 AI 翻译 ${textArray.length} 个文本到 ${targetLanguageName}...`
    );
    console.log(textArray);

    const response = await fetch(AI_CONFIG.url, {
      method: "POST",
=======
${textArray.map((text, index) => `${index + 1}. ${text}`).join('\n')}
请翻译成${targetLanguageName}，每行对应一个翻译结果：`;
  const data = {
    "model": AI_CONFIG.model,
    "messages": [
      {
        "role": "system",
        "content": prompt
      },
      {
        "role": "user",
        "content": prompt
      }
    ],
    "stream": false, // 不使用流式响应
    "max_tokens": 4000,
    "temperature": 0.3 // 使用较低的温度以获得更稳定的翻译结果
  };
  const headers = {
    'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
    'Content-Type': 'application/json'
  };
  try {
    console.log(`🤖 使用 AI 翻译 ${textArray.length} 个文本到 ${targetLanguageName}...`);
    console.log(textArray);

    const response = await fetch(AI_CONFIG.url, {
      method: 'POST',
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
      headers: headers,
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`AI API 请求失败，状态码: ${response.status}`);
<<<<<<< HEAD
=======
    }
    const result = await response.json();

    if (!result.choices || !result.choices[0] || !result.choices[0].message) {
      throw new Error('AI API 返回格式错误');
    }
    const translatedContent = result.choices[0].message.content.trim();

    // 解析 AI 返回的翻译结果
    const translations = parseAITranslationResponse(translatedContent, textArray.length);

    if (translations.length !== textArray.length) {
      console.warn(`⚠️  AI 翻译结果数量不匹配: 期望 ${textArray.length} 个，实际 ${translations.length} 个`);
      // 重试
      return await translateBatchWithAI(textArray, targetLanguage);
      // 如果数量不匹配，补齐或截断
      // while (translations.length < textArray.length) {
      //   translations.push(textArray[translations.length]); // 用原文填充缺失的翻译
      // }
      // translations.splice(textArray.length); // 移除多余的翻译
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
    }
    const result = await response.json();

<<<<<<< HEAD
    if (!result.choices || !result.choices[0] || !result.choices[0].message) {
      throw new Error("AI API 返回格式错误");
    }
    const translatedContent = result.choices[0].message.content.trim();

    console.log("AI翻译结果", translatedContent);
    // 解析 AI 返回的翻译结果
    const translations = parseAITranslationResponse(
      translatedContent,
      textArray.length
    );

    if (translations.length !== textArray.length) {
      console.warn(
        `⚠️  AI 翻译结果数量不匹配: 期望 ${textArray.length} 个，实际 ${translations.length} 个`
      );
      // 重试
      return await translateBatchWithAI(textArray, targetLanguage);
      // 如果数量不匹配，补齐或截断
      // while (translations.length < textArray.length) {
      //   translations.push(textArray[translations.length]); // 用原文填充缺失的翻译
      // }
      // translations.splice(textArray.length); // 移除多余的翻译
    }

    console.log(translations);
    console.log(`✅ AI 翻译完成，共 ${translations.length} 个结果`);
    return translations;
  } catch (error: any) {
    console.error("❌ AI 翻译错误:", error.message);
    throw error;
  }
}

// 解析 AI 返回的翻译结果
function parseAITranslationResponse(
  content: string,
  expectedCount: number
): string[] {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // 方法1: 直接匹配数字开头的行（最准确）
  const numberedLines = lines
    .filter((line) => /^\d+\.\s+/.test(line)) // 匹配 "数字. " 开头的行
    .map((line) => line.replace(/^\d+\.\s*/, "").trim()) // 移除序号
    .slice(0, expectedCount);

  if (numberedLines.length === expectedCount) {
    return numberedLines;
  }

  // 方法2: 更宽松的匹配
  const possibleTranslations = lines
    .filter((line) => {
      // 排除明显的说明文字，但保留翻译内容
      return (
        !line.includes("翻译结果") &&
        !line.includes("原文") &&
        !line.includes("请翻译") &&
        !line.match(/^[一二三四五六七八九十\d]+[、．.]\s*$/)
      ); // 排除纯序号行
    })
    .map((line) => line.replace(/^\d+[\.、]\s*/, "").trim())
    .filter((line) => line.length > 10); // 翻译结果通常比较长

  if (possibleTranslations.length >= expectedCount) {
    return possibleTranslations.slice(0, expectedCount);
  }

  // 方法3: 如果前面都失败，按顺序取前N行非空内容
  const fallbackLines = lines
    .filter((line) => line.length > 5)
    .slice(0, expectedCount);

  return fallbackLines;
}

// 修改原来的 translateTexts 函数，增加 AI 翻译选项
async function translateTexts(
  texts: string[],
  targetLanguage: string,
  useAI: boolean = false
): Promise<string[]> {
  console.log(
    `📝 正在翻译 ${texts.length} 个文本到 ${targetLanguage} (${useAI ? "AI" : "Google"})...`
  );
  if (texts.length === 0) {
    return [];
  }
  const BATCH_SIZE = useAI ? 500 : 500; // AI 翻译使用较小的批次
=======
    console.log(translations);
    console.log(`✅ AI 翻译完成，共 ${translations.length} 个结果`);
    return translations;
  } catch (error: any) {
    console.error('❌ AI 翻译错误:', error.message);
    throw error;
  }
}

// 解析 AI 返回的翻译结果
function parseAITranslationResponse(content: string, expectedCount: number): string[] {
  // 尝试多种解析方式
  const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  // 方法1: 查找翻译结果部分
  let translationStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('翻译') || lines[i].includes('结果') || lines[i].includes('：') || lines[i].includes(':')) {
      translationStart = i + 1;
      break;
    }
  }

  if (translationStart > -1) {
    const translationLines = lines.slice(translationStart);
    const translations = translationLines
      .map(line => line.replace(/^\d+\.\s*/, '').trim()) // 移除序号
      .filter(line => line.length > 0)
      .slice(0, expectedCount); // 只取预期数量的结果

    if (translations.length > 0) {
      return translations;
    }
  }

  // 方法2: 假设所有非空行都是翻译结果
  const allValidLines = lines
    .filter(line => !line.includes('翻译') && !line.includes('原文') && !line.includes('：') && !line.includes(':'))
    .map(line => line.replace(/^\d+\.\s*/, '').trim())
    .filter(line => line.length > 0)
    .slice(0, expectedCount);

  if (allValidLines.length > 0) {
    return allValidLines;
  }

  // 方法3: 直接按行分割（最后的备选方案）
  const directSplit = content.split('\n')
    .map(line => line.replace(/^\d+\.\s*/, '').trim())
    .filter(line => line.length > 0 && !line.includes('请翻译') && !line.includes('英文原文'))
    .slice(-expectedCount); // 取最后的 expectedCount 行

  return directSplit.length > 0 ? directSplit : [];
}

// 修改原来的 translateTexts 函数，增加 AI 翻译选项
async function translateTexts(texts: string[], targetLanguage: string, useAI: boolean = false): Promise<string[]> {
  console.log(`📝 正在翻译 ${texts.length} 个文本到 ${targetLanguage} (${useAI ? 'AI' : 'Google'})...`);
  if (texts.length === 0) {
    return [];
  }
  const BATCH_SIZE = useAI ? 100 : 150; // AI 翻译使用较小的批次
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  const results: string[] = [];
  try {
    // 分批处理
    for (let i = 0; i < texts.length; i += BATCH_SIZE) {
      const batch = texts.slice(i, i + BATCH_SIZE);
<<<<<<< HEAD
      console.log(
        `📦 处理批次 ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(texts.length / BATCH_SIZE)} (${batch.length} 个文本)`
      );
      // 添加延迟避免API限制
      if (i > 0) {
        const delay = useAI ? 2000 : 1000; // AI 翻译使用更长的延迟
        console.log(`⏱️  等待 ${delay / 1000} 秒避免API限制...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
=======
      console.log(`📦 处理批次 ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(texts.length / BATCH_SIZE)} (${batch.length} 个文本)`);
      // 添加延迟避免API限制
      if (i > 0) {
        const delay = useAI ? 2000 : 1000; // AI 翻译使用更长的延迟
        console.log(`⏱️  等待 ${delay/1000} 秒避免API限制...`);
        await new Promise(resolve => setTimeout(resolve, delay));
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
      }
      const batchResults = useAI
        ? await translateBatchWithAI(batch, targetLanguage)
        : await translateBatch(batch, targetLanguage);

<<<<<<< HEAD
      const decodedResults = batchResults.map((text: any) =>
        decodeHtmlEntities(text)
      );

      results.push(...decodedResults);
      console.log(
        `✅ 批次完成，已翻译 ${results.length}/${texts.length} 个文本`
      );
=======
      const decodedResults = batchResults.map((text: any) => decodeHtmlEntities(text));

      results.push(...decodedResults);
      console.log(`✅ 批次完成，已翻译 ${results.length}/${texts.length} 个文本`);
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
    }
    console.log(`🎉 翻译完成！总共处理了 ${results.length} 个文本`);

    return results;
  } catch (error: any) {
    console.error(`❌ 翻译失败:`, error.message);
    console.log(`⚠️  返回原文本作为备用...`);
    return texts; // 如果翻译失败，返回原文数组
  }
}
/*
<<<<<<< HEAD
 * 谷歌翻译
 *
 * */
const proxyConfig = {
  protocol: "http",
  host: "127.0.0.1",
  port: 7890
=======
* 谷歌翻译
*
* */
const proxyConfig = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 7890,
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
};

// 获取谷歌翻译语言代码
function getGoogleTranslateCode(projectLangCode: string): string {
  return languageMapping[projectLangCode] || projectLangCode;
}

<<<<<<< HEAD
async function translateBatch(textArray: string[], targetLanguage = "zh-CN") {
  const googleLangCode = getGoogleTranslateCode(targetLanguage);

  const data = [[textArray, "en", googleLangCode], "wt_lib"];

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://translate-pa.googleapis.com/v1/translateHtml",
    headers: {
      "x-goog-api-key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520",
      "content-type": "application/json+protobuf"
    },
    data: data,
    // proxy: proxyConfig
=======
async function translateBatch(textArray: string[], targetLanguage = 'zh-CN') {
  const googleLangCode = getGoogleTranslateCode(targetLanguage);

  const data = [
    [
      textArray,
      'en',
      googleLangCode
    ],
    'wt_lib'
  ];

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://translate-pa.googleapis.com/v1/translateHtml',
    headers: {
      'x-goog-api-key': 'AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520',
      'content-type': 'application/json+protobuf'
    },
    data: data,
    proxy: proxyConfig
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  };

  try {
    const response = await axios.request(config);
<<<<<<< HEAD
    console.log(response.data[0])
    return response.data[0]; // 返回翻译结果数组
  } catch (error: any) {
    console.error("❌ 批量翻译错误:", error.message);
    translateBatch(textArray, targetLanguage);
=======
    return response.data[0]; // 返回翻译结果数组
  } catch (error: any) {
    console.error('❌ 批量翻译错误:', error.message);
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
    throw error; // 抛出错误让上层处理
  }
}

// 将嵌套对象转换为平铺对象
<<<<<<< HEAD
function flattenObject(
  obj: any,
  prefix: string = "",
  result: { [key: string]: string } = {}
): { [key: string]: string } {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (Array.isArray(value)) {
        // 🆕 处理数组：为每个元素创建索引键
        value.forEach((item, index) => {
          const arrayKey = `${newKey}[${index}]`;

          if (typeof item === "string") {
            // 数组中的字符串直接添加
            result[arrayKey] = item;
          } else if (typeof item === "object" && item !== null) {
            // 数组中的对象需要递归处理
            flattenObject(item, arrayKey, result);
          } else {
            // 其他类型转为字符串
            result[arrayKey] = String(item);
          }
        });
      } else if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // 普通对象递归处理
        flattenObject(value, newKey, result);
      } else {
        // 简单值直接添加
        result[newKey] = value;
=======
function flattenObject(obj: any, prefix: string = '', result: { [key: string]: string } = {}): { [key: string]: string } {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
      }
    }
  }
  return result;
}

<<<<<<< HEAD

// 将平铺对象转换回嵌套对象
// 🔍 简化版调试 - 只打印关键步骤
function unflattenObject(flatObj: { [key: string]: string }): any {
  Object.entries(flatObj).forEach(([k, v]) => {
    if (k.startsWith('a.')) {
      console.log(`   ${k}: "${v}"`);
    }
  });

  const result: any = {};

  for (const key in flatObj) {
    if (!key.startsWith('a.')) continue; // 只处理a开头的键来调试

    const value = flatObj[key];

    const keys = parseKeyPath(key);

    let current = result;

    // 遍历路径
    for (let i = 0; i < keys.length; i++) {
      const segment = keys[i];
      const isLastSegment = i === keys.length - 1;

      if (segment.isArray) {
        // 当前段是数组索引，如 "b[0]" 或 "c[1]"
        const arrayName = segment.name;
        const arrayIndex = segment.index!;

        console.log(`🔧 数组操作: ${arrayName}[${arrayIndex}]`);

        if (!Array.isArray(current[arrayName])) {
          console.log(`➕ 创建数组: ${arrayName}`);
          current[arrayName] = [];
=======
// 将平铺对象转换回嵌套对象
function unflattenObject(flatObj: { [key: string]: string }): any {
  const result: any = {};

  for (const key in flatObj) {
    const keys = key.split('.');
    let current = result;

    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!current[k]) {
        current[k] = {};
      }
      current = current[k];
    }

    current[keys[keys.length - 1]] = flatObj[key];
  }

  return result;
}

// 创建默认的语言文件
function createDefaultLanguageFile(filePath: string): void {
  const defaultContent = `let message = {
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
`;

  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, defaultContent, 'utf-8');
  console.log(`📄 创建默认语言文件: ${filePath}`);
}

// 从TypeScript文件解析对象
function parseObjectFromFile(filePath: string): any {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在，创建默认文件: ${filePath}`);
    createDefaultLanguageFile(filePath);
    return {}; // 返回空对象，因为刚创建的文件message为空
  }

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const variableStatements = sourceFile.getVariableStatements();

  for (const statement of variableStatements) {
    const declarations = statement.getDeclarations();
    for (const declaration of declarations) {
      const name = declaration.getName();
      if (name === 'message') {
        const initializer = declaration.getInitializer();
        if (initializer && initializer.getKind() === SyntaxKind.ObjectLiteralExpression) {
          return parseObjectLiteral(initializer as ObjectLiteralExpression);
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
        }
      }
    }
  }

<<<<<<< HEAD
        while (current[arrayName].length <= arrayIndex) {
          current[arrayName].push(null);
=======
  console.log(`⚠️  未找到 message 变量声明: ${filePath}`);
  return {};
}

// 解析对象字面量
function parseObjectLiteral(obj: ObjectLiteralExpression): any {
  const result: any = {};

  obj.getProperties().forEach(prop => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const key = propAssignment.getName();
      const value = propAssignment.getInitializer();

      if (value) {
        if (value.getKind() === SyntaxKind.ObjectLiteralExpression) {
          result[key] = parseObjectLiteral(value as ObjectLiteralExpression);
        } else if (value.getKind() === SyntaxKind.StringLiteral) {
          result[key] = value.getText().slice(1, -1);
        } else if (value.getKind() === SyntaxKind.TemplateExpression ||
          value.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
          const text = value.getText();
          result[key] = text.slice(1, -1);
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
        }
      }
    }
  });

<<<<<<< HEAD
        if (isLastSegment) {
          current[arrayName][arrayIndex] = value;
          console.log(`✅ 设置 ${arrayName}[${arrayIndex}] = "${value}"`);
        } else {
          if (current[arrayName][arrayIndex] === null) {
            const nextSegment = keys[i + 1];
            current[arrayName][arrayIndex] = nextSegment.isArray ? [] : {};
            console.log(`➕ 在 ${arrayName}[${arrayIndex}] 创建 ${nextSegment.isArray ? '数组' : '对象'}`);
          }
          current = current[arrayName][arrayIndex];
        }
      } else {
        // 当前段是对象属性，如 "a" 或 "d"
        const propName = segment.name;

        console.log(`🔧 属性操作: ${propName}`);

        if (isLastSegment) {
          current[propName] = value;
          console.log(`✅ 设置 ${propName} = "${value}"`);
        } else {
          if (!current[propName]) {
            const nextSegment = keys[i + 1];
            // 🚨 关键修复：如果下一段是数组段，当前属性应该是对象，不是数组！
            // 因为 a.b[0] 中，a 是对象，a.b 才是数组
            current[propName] = {};  // 🔥 总是创建对象！
            console.log(`➕ 创建对象属性: ${propName}`);
          }
          current = current[propName];
        }
      }
    }

  }

  console.log(`\n🎯 最终 result.a:`, JSON.stringify(result.a, null, 2));

  // 处理其他键（同样的逻辑，但不打印）
  for (const key in flatObj) {
    if (key.startsWith('a.')) continue;

    const value = flatObj[key];
    const keys = parseKeyPath(key);
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const segment = keys[i];
      const isLastSegment = i === keys.length - 1;

      if (segment.isArray) {
        const arrayName = segment.name;
        const arrayIndex = segment.index!;

        if (!Array.isArray(current[arrayName])) {
          current[arrayName] = [];
        }
        while (current[arrayName].length <= arrayIndex) {
          current[arrayName].push(null);
        }

        if (isLastSegment) {
          current[arrayName][arrayIndex] = value;
        } else {
          if (current[arrayName][arrayIndex] === null) {
            const nextSegment = keys[i + 1];
            current[arrayName][arrayIndex] = nextSegment.isArray ? [] : {};
          }
          current = current[arrayName][arrayIndex];
        }
      } else {
        const propName = segment.name;

        if (isLastSegment) {
          current[propName] = value;
        } else {
          if (!current[propName]) {
            current[propName] = {};  // 🔥 同样修复
          }
          current = current[propName];
        }
      }
    }
  }

  return result;
}

// 创建默认的语言文件
function createDefaultLanguageFile(filePath: string): void {
  const defaultContent = `let message = {
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
`;

  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, defaultContent, "utf-8");
  console.log(`📄 创建默认语言文件: ${filePath}`);
}

// 从TypeScript文件解析对象
function parseObjectFromFile(filePath: string): any {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在，创建默认文件: ${filePath}`);
    createDefaultLanguageFile(filePath);
    return {}; // 返回空对象，因为刚创建的文件message为空
  }

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const variableStatements = sourceFile.getVariableStatements();

  for (const statement of variableStatements) {
    const declarations = statement.getDeclarations();
    for (const declaration of declarations) {
      const name = declaration.getName();
      if (name === "message") {
        const initializer = declaration.getInitializer();
        if (
          initializer &&
          initializer.getKind() === SyntaxKind.ObjectLiteralExpression
        ) {
          return parseObjectLiteral(initializer as ObjectLiteralExpression);
        }
      }
    }
  }

  console.log(`⚠️  未找到 message 变量声明: ${filePath}`);
  return {};
}

// 解析对象字面量
function parseObjectLiteral(obj: ObjectLiteralExpression): any {
  const result: any = {};

  obj.getProperties().forEach((prop) => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const key = propAssignment.getName();
      const value = propAssignment.getInitializer();

      if (value) {
        if (value.getKind() === SyntaxKind.ObjectLiteralExpression) {
          // 嵌套对象
          result[key] = parseObjectLiteral(value as ObjectLiteralExpression);
        } else if (value.getKind() === SyntaxKind.ArrayLiteralExpression) {
          // 🆕 新增：数组字面量支持
          result[key] = parseArrayLiteral(value as any);
        } else if (value.getKind() === SyntaxKind.StringLiteral) {
          // 字符串字面量
          result[key] = value.getText().slice(1, -1);
        } else if (
          value.getKind() === SyntaxKind.TemplateExpression ||
          value.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral
        ) {
          // 模板字符串
          const text = value.getText();
          result[key] = text.slice(1, -1);
        }
      }
    }
  });

  return result;
}

// 🆕 新增：解析数组字面量
function parseArrayLiteral(arr: any): any[] {
  const result: any[] = [];

  // 获取数组元素
  arr.getElements().forEach((element: any) => {
    if (element.getKind() === SyntaxKind.StringLiteral) {
      // 字符串元素
      result.push(element.getText().slice(1, -1));
    } else if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
      // 对象元素
      result.push(parseObjectLiteral(element));
    } else if (element.getKind() === SyntaxKind.ArrayLiteralExpression) {
      // 嵌套数组
      result.push(parseArrayLiteral(element));
    } else if (
      element.getKind() === SyntaxKind.TemplateExpression ||
      element.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral
    ) {
      // 模板字符串
      const text = element.getText();
      result.push(text.slice(1, -1));
    } else if (element.getKind() === SyntaxKind.NumericLiteral) {
      // 数字
      result.push(Number(element.getText()));
    } else if (element.getKind() === SyntaxKind.TrueKeyword) {
      // 布尔值 true
      result.push(true);
    } else if (element.getKind() === SyntaxKind.FalseKeyword) {
      // 布尔值 false
      result.push(false);
    } else if (element.getKind() === SyntaxKind.NullKeyword) {
      // null
      result.push(null);
    } else {
      // 其他类型，保留原始文本
      result.push(element.getText());
    }
  });

  return result;
}

// 🆕 新增：格式化数组用于输出
function formatArray(arr: any[], indent: number = 2): string {
  if (arr.length === 0) {
    return "[]";
  }

  // 如果数组比较简单（只包含字符串、数字、布尔值），使用单行格式
  const isSimpleArray = arr.every(item =>
    typeof item === 'string' ||
    typeof item === 'number' ||
    typeof item === 'boolean' ||
    item === null
  );

  if (isSimpleArray && arr.length <= 3) {
    return "[" + arr.map(formatSimpleArrayValue).join(", ") + "]";
  }

  // 复杂数组使用多行格式
  const spaces = " ".repeat(indent);
  let result = "[\n";

  arr.forEach((item, index) => {
    const isLast = index === arr.length - 1;

    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      // 对象元素
      result += `${spaces}${formatObjectCompletely(item, indent + 2)}${isLast ? "" : ","}\n`;
    } else if (Array.isArray(item)) {
      // 数组元素
      result += `${spaces}${formatArray(item, indent + 2)}${isLast ? "" : ","}\n`;
    } else {
      // 简单值
      result += `${spaces}${formatSimpleArrayValue(item)}${isLast ? "" : ","}\n`;
    }
  });

  result += " ".repeat(indent - 2) + "]";
  return result;
}

// 🆕 格式化数组中的简单值
function formatSimpleArrayValue(value: any): string {
  if (typeof value === 'string') {
    return formatSimpleValue(value);
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'boolean') {
    return value.toString();
  } else if (value === null) {
    return 'null';
  } else {
    return String(value);
  }
}



// 🆕 新增：格式化简单值
// 🆕 更好的解决方案：使用 JSON.stringify 自动处理转义
// 🆕 强制使用单引号的版本（更清晰）
function formatSimpleValue(value: string): string {
  // 🆕 先解码HTML实体
  const decodedValue = decodeHtmlEntities(value);

  // 1. 如果包含模板字符串语法，使用反引号
  if (decodedValue.includes("`") || decodedValue.includes("${")) {
    return `\`${decodedValue}\``;
  }

  // 2. 如果包含双引号但不包含单引号，使用单引号包裹
  else if (decodedValue.includes('"') && !decodedValue.includes("'")) {
    return `'${decodedValue}'`;
  }

  // 3. 如果同时包含双引号和单引号，使用反引号
  else if (decodedValue.includes('"') && decodedValue.includes("'")) {
    return `\`${decodedValue}\``;
  }

  // 4. 默认使用双引号，但手动处理转义（不用JSON.stringify）
  else {
    // 手动转义双引号，但保持 \n 为 \n（不转义成 \\n）
    const escaped = decodedValue.replace(/"/g, '\\"');
    return `"${escaped}"`;
  }
}

// 🆕 HTML实体解码函数
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#39;/g, "'") // &#39; → '
    .replace(/&#x27;/g, "'") // &#x27; → '
    .replace(/&quot;/g, '"') // &quot; → "
    .replace(/&amp;/g, "&") // &amp; → &
    .replace(/&lt;/g, "<") // &lt; → <
    .replace(/&gt;/g, ">"); // &gt; → >
}

// 🆕 新增：从对象字面量中删除指定的keys
function removeKeysFromObjectLiteral(
  objLiteral: ObjectLiteralExpression,
  keysToRemove: string[]
): void {
  const propertiesToRemove: PropertyAssignment[] = [];

  // 收集需要删除的属性
  objLiteral.getProperties().forEach((prop) => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const key = propAssignment.getName();

      if (keysToRemove.includes(key)) {
        propertiesToRemove.push(propAssignment);
      }
    }
  });

  // 删除收集到的属性
  propertiesToRemove.forEach((prop) => {
    console.log(`🗑️  删除属性: ${prop.getName()}`);
    prop.remove();
  });
}

interface KeySegment {
  name: string;
  isArray: boolean;
  index?: number;
}

function parseKeyPath(key: string): KeySegment[] {
  const segments: KeySegment[] = [];
  const parts = key.split('.');

  for (const part of parts) {
    const arrayMatch = part.match(/^(.+)\[(\d+)\]$/);
    if (arrayMatch) {
      // 这是数组索引格式，如 "items[0]"
      const segment = {
        name: arrayMatch[1],
        isArray: true,
        index: parseInt(arrayMatch[2])
      };
      segments.push(segment);
      console.log(`   数组段: ${segment.name}[${segment.index}]`);
    } else {
      // 这是普通属性
      const segment = {
        name: part,
        isArray: false
      };
      segments.push(segment);
    }
  }

  return segments;
}
// 🆕 新增：智能删除嵌套对象中的keys
function removeKeysFromNestedObject(obj: any, keysToRemove: string[]): any {
  const result = JSON.parse(JSON.stringify(obj)); // 深拷贝

  keysToRemove.forEach((key) => {
    const segments = parseKeyPath(key);
    let current = result;
    const path: any[] = [current];

    // 找到目标路径
    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i];

      if (segment.isArray) {
        if (current[segment.name] && Array.isArray(current[segment.name]) &&
          current[segment.name][segment.index!] !== undefined) {
          current = current[segment.name][segment.index!];
          path.push(current);
        } else {
          return; // 路径不存在
        }
      } else {
        if (current[segment.name] && typeof current[segment.name] === "object") {
          current = current[segment.name];
          path.push(current);
        } else {
          return; // 路径不存在
        }
      }
    }

    // 删除最后的key
    const finalSegment = segments[segments.length - 1];
    if (finalSegment.isArray) {
      if (current[finalSegment.name] && Array.isArray(current[finalSegment.name])) {
        console.log(`🗑️  删除数组元素: ${key}`);
        current[finalSegment.name].splice(finalSegment.index!, 1);
      }
    } else {
      if (finalSegment.name in current) {
        console.log(`🗑️  删除属性: ${key}`);
        delete current[finalSegment.name];
=======
  return result;
}

// 🆕 新增：格式化简单值
// 🆕 更好的解决方案：使用 JSON.stringify 自动处理转义
// 🆕 强制使用单引号的版本（更清晰）
function formatSimpleValue(value: string): string {
  // 🆕 先解码HTML实体
  const decodedValue = decodeHtmlEntities(value);

  // 1. 如果包含模板字符串语法，使用反引号
  if (decodedValue.includes('`') || decodedValue.includes('${')) {
    return `\`${decodedValue}\``;
  }

  // 2. 如果包含双引号但不包含单引号，使用单引号包裹
  else if (decodedValue.includes('"') && !decodedValue.includes("'")) {
    return `'${decodedValue}'`;
  }

  // 3. 如果同时包含双引号和单引号，使用反引号
  else if (decodedValue.includes('"') && decodedValue.includes("'")) {
    return `\`${decodedValue}\``;
  }

  // 4. 默认使用双引号，但手动处理转义（不用JSON.stringify）
  else {
    // 手动转义双引号，但保持 \n 为 \n（不转义成 \\n）
    const escaped = decodedValue.replace(/"/g, '\\"');
    return `"${escaped}"`;
  }
}

// 🆕 HTML实体解码函数
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#39;/g, "'")     // &#39; → '
    .replace(/&#x27;/g, "'")   // &#x27; → '
    .replace(/&quot;/g, '"')   // &quot; → "
    .replace(/&amp;/g, "&")    // &amp; → &
    .replace(/&lt;/g, "<")     // &lt; → <
    .replace(/&gt;/g, ">");    // &gt; → >
}



// 🆕 新增：智能更新对象字面量，保留注释
function updateObjectLiteralWithComments(objLiteral: ObjectLiteralExpression, newObj: any): void {
  const existingProps = new Map<string, PropertyAssignment>();

  // 收集现有属性
  objLiteral.getProperties().forEach(prop => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const key = propAssignment.getName();
      existingProps.set(key, propAssignment);
    }
  });

  // 更新现有属性，添加新属性
  for (const [key, value] of Object.entries(newObj)) {
    const existingProp = existingProps.get(key);

    if (existingProp) {
      // 属性已存在，更新值
      const existingValue = existingProp.getInitializer();

      if (typeof value === 'object' && value !== null) {
        // 如果是嵌套对象且原来也是对象，递归更新
        if (existingValue && existingValue.getKind() === SyntaxKind.ObjectLiteralExpression) {
          updateObjectLiteralWithComments(existingValue as ObjectLiteralExpression, value);
        } else {
          // 原来不是对象，直接替换
          existingProp.setInitializer(formatObjectForInline(value));
        }
      } else {
        // 简单值，直接更新
        const quotedValue = formatSimpleValue(value as string);
        existingProp.setInitializer(quotedValue);
      }

      existingProps.delete(key); // 标记为已处理
    } else {
      // 新属性，添加到最后
      if (typeof value === 'object' && value !== null) {
        objLiteral.addPropertyAssignment({
          name: key,
          initializer: formatObjectForInline(value)
        });
      } else {
        objLiteral.addPropertyAssignment({
          name: key,
          initializer: formatSimpleValue(value as string)
        });
      }
    }
  }
}

// 🆕 新增：格式化对象用于内联
function formatObjectForInline(obj: any): string {
  return formatObjectCompletely(obj, 2);
}

// 原来的 formatObject 函数，重命名为 formatObjectCompletely
function formatObjectCompletely(obj: any, indent: number = 2): string {
  const spaces = ' '.repeat(indent);
  let result = '{\n';

  const entries = Object.entries(obj);

  entries.forEach(([key, value], index) => {
    const isLast = index === entries.length - 1; // 判断是否是最后一个属性

    if (typeof value === 'object' && value !== null) {
      result += `${spaces}${key}: ${formatObjectCompletely(value, indent + 2)}${isLast ? '' : ','}\n`;
    } else {
      const stringValue = value as string;
      let quotedValue: string;

      if (stringValue.includes('`') || stringValue.includes('${')) {
        quotedValue = `\`${stringValue}\``;
      } else if (stringValue.includes('"') && !stringValue.includes("'")) {
        quotedValue = `"${stringValue}"`;
      } else {
        quotedValue = `"${stringValue}"`;
      }

      result += `${spaces}${key}: ${quotedValue}${isLast ? '' : ','}\n`;
    }
  });

  result += ' '.repeat(indent - 2) + '}';
  return result;
}

// 将对象写入TypeScript文件，保留原有注释和结构
async function writeObjectToFile(filePath: string, obj: any): any {
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在，创建默认文件: ${filePath}`);
    createDefaultLanguageFile(filePath);
  }

  try {
    // 使用 ts-morph 来精确修改文件，保留注释和其他内容
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);

    // 找到 message 变量声明
    const variableStatements = sourceFile.getVariableStatements();
    let messageDeclaration: VariableDeclaration | undefined;

    for (const statement of variableStatements) {
      const declarations = statement.getDeclarations();
      for (const declaration of declarations) {
        if (declaration.getName() === 'message') {
          messageDeclaration = declaration;
          break;
        }
      }
      if (messageDeclaration) break;
    }

    if (messageDeclaration) {
      const initializer = messageDeclaration.getInitializer();
      if (initializer && initializer.getKind() === SyntaxKind.ObjectLiteralExpression) {
        // 🆕 关键修改：使用智能合并而不是完全替换
        updateObjectLiteralWithComments(initializer as ObjectLiteralExpression, obj);
        await sourceFile.save();
        console.log(`📝 已更新文件: ${filePath} (保留原有注释和结构)`);
      } else {
        throw new Error('message 不是对象字面量');
      }
    } else {
      console.error(`❌ 未找到 message 变量声明: ${filePath}`);
    }

  } catch (error: any) {
    console.error(`❌ 更新文件失败: ${filePath}`, error.message);

    // 如果 ts-morph 方式失败，回退到简单的字符串替换方式
    console.log(`⚠️  回退到字符串替换方式...`);

    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const objectStr = formatObjectCompletely(obj);

      // 使用正则表达式找到并替换 message 对象
      const updatedContent = content.replace(
        /let\s+message\s*=\s*\{[\s\S]*?\};/,
        `let message = ${objectStr};`
      );

      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      console.log(`📝 已通过字符串替换更新文件: ${filePath}`);

    } catch (fallbackError: any) {
      console.error(`❌ 字符串替换方式也失败了:`, fallbackError.message);

      // 最后的备用方案：完全重写文件（会丢失注释）
      const objectStr = formatObjectCompletely(obj);
      const fileContent = `let message = ${objectStr};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
`;
      fs.writeFileSync(filePath, fileContent, 'utf-8');
      console.log(`⚠️  已重写文件 (可能丢失注释): ${filePath}`);
    }
  }
}

// 找出缺失的键
function findMissingKeys(baseFlat: { [key: string]: string }, targetFlat: { [key: string]: string }): string[] {
  const missingKeys: string[] = [];

  for (const key in baseFlat) {
    if (!(key in targetFlat)) {
      missingKeys.push(key);
    }
  }

  return missingKeys;
}

// 🆕 新增功能：更新指定的keys
interface UpdateKeysOptions {
  keys: string[];           // 要更新的key数组，支持嵌套路径如 "user.profile.name"
  useAI?: boolean;          // 是否使用AI翻译
  targetLanguages?: string[]; // 目标语言，不传则更新所有语言
  forceUpdate?: boolean;    // 是否强制更新（即使目标key已存在）
  baseLanguage?: string;    // 🆕 基准语言文件，默认为 'zh-CN'
}

async function updateSpecificKeys(options: UpdateKeysOptions) {
  const {
    keys,
    useAI = false,
    targetLanguages,
    forceUpdate = true,
    baseLanguage = 'en-US'
  } = options;

  console.log('🚀 开始更新指定的keys...');
  console.log(`🎯 指定的keys: ${keys.join(', ')}`);
  console.log(`🔄 强制更新: ${forceUpdate ? '是' : '否'}`);
  console.log(`🤖 使用AI翻译: ${useAI ? '是' : '否'}`);
  console.log(`📚 基准语言: ${baseLanguage}`);

  const baseFilePath = path.join(langPath, `${baseLanguage}.ts`);
  console.log(`📖 读取基准文件: ${baseFilePath}`);

  const baseObj = parseObjectFromFile(baseFilePath);
  const baseFlat = flattenObject(baseObj);

  // 验证指定的keys是否存在于基准文件中
  const validKeys: string[] = [];
  const invalidKeys: string[] = [];

  for (const key of keys) {
    if (key in baseFlat) {
      validKeys.push(key);
    } else {
      invalidKeys.push(key);
    }
  }

  if (invalidKeys.length > 0) {
    console.warn(`⚠️  以下keys在基准文件中不存在: ${invalidKeys.join(', ')}`);
  }

  if (validKeys.length === 0) {
    console.log('❌ 没有有效的keys需要更新');
    return;
  }

  console.log(`✅ 有效的keys: ${validKeys.join(', ')}`);

  // 确定目标语言（排除基准语言）
  const langs = targetLanguages || languages.filter(lang => lang !== baseLanguage);

  for (const lang of langs) {
    console.log(`\n🌍 处理语言: ${lang}`);

    const targetFilePath = path.join(langPath, `${lang}.ts`);
    const targetObj = parseObjectFromFile(targetFilePath);
    const targetFlat = flattenObject(targetObj);

    // 确定需要更新的keys
    let keysToUpdate: string[] = [];

    if (forceUpdate) {
      keysToUpdate = validKeys;
      console.log(`🔄 强制更新模式: 将更新所有 ${keysToUpdate.length} 个指定keys`);
    } else {
      // 只更新不存在的keys
      keysToUpdate = validKeys.filter(key => !(key in targetFlat));
      console.log(`🔍 增量更新模式: 发现 ${keysToUpdate.length} 个缺失的keys`);

      if (keysToUpdate.length === 0) {
        console.log(`✅ ${lang} 文件中所有指定keys都已存在，跳过`);
        continue;
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
      }
    }
  });

<<<<<<< HEAD
  return result;
}

// 🆕 修改 updateObjectLiteralWithCommentsAndRemoval 函数，支持数组
function updateObjectLiteralWithCommentsAndRemoval(
  objLiteral: ObjectLiteralExpression,
  newObj: any,
  keysToRemove: string[] = []
): void {
  const existingProps = new Map<string, PropertyAssignment>();

  // 收集现有属性
  objLiteral.getProperties().forEach((prop) => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const key = propAssignment.getName();
      existingProps.set(key, propAssignment);
    }
  });

  // 1. 首先删除不需要的顶级keys
  const topLevelKeysToRemove = keysToRemove.filter((key) => !key.includes("."));
  topLevelKeysToRemove.forEach((key) => {
    const prop = existingProps.get(key);
    if (prop) {
      console.log(`🗑️  删除顶级属性: ${key}`);
      prop.remove();
      existingProps.delete(key);
    }
  });

  // 2. 更新现有属性，添加新属性
  for (const [key, value] of Object.entries(newObj)) {
    const existingProp = existingProps.get(key);

    if (existingProp) {
      // 属性已存在，更新值
      const existingValue = existingProp.getInitializer();

      if (Array.isArray(value)) {
        // 🆕 数组类型
        existingProp.setInitializer(formatArray(value));
      } else if (typeof value === "object" && value !== null) {
        // 嵌套对象且原来也是对象，递归更新
        if (
          existingValue &&
          existingValue.getKind() === SyntaxKind.ObjectLiteralExpression
        ) {
          const nestedKeysToRemove = keysToRemove
            .filter((k) => k.startsWith(`${key}.`))
            .map((k) => k.substring(key.length + 1));

          updateObjectLiteralWithCommentsAndRemoval(
            existingValue as ObjectLiteralExpression,
            value,
            nestedKeysToRemove
          );
        } else {
          // 原来不是对象，直接替换
          existingProp.setInitializer(formatObjectForInline(value));
        }
      } else {
        // 简单值，直接更新
        const quotedValue = formatSimpleValue(value as string);
        existingProp.setInitializer(quotedValue);
      }

      existingProps.delete(key); // 标记为已处理
    } else {
      // 新属性，添加到最后
      if (Array.isArray(value)) {
        // 🆕 数组
        objLiteral.addPropertyAssignment({
          name: key,
          initializer: formatArray(value)
        });
      } else if (typeof value === "object" && value !== null) {
        // 对象
        objLiteral.addPropertyAssignment({
          name: key,
          initializer: formatObjectForInline(value)
        });
      } else {
        // 简单值
        objLiteral.addPropertyAssignment({
          name: key,
          initializer: formatSimpleValue(value as string)
        });
      }
    }
  }
}

// 修改原来的智能更新函数
function updateObjectLiteralWithComments(
  objLiteral: ObjectLiteralExpression,
  newObj: any
): void {
  updateObjectLiteralWithCommentsAndRemoval(objLiteral, newObj, []);
}

// 🆕 新增：格式化对象用于内联
function formatObjectForInline(obj: any): string {
  return formatObjectCompletely(obj, 2);
}

// 原来的 formatObject 函数，重命名为 formatObjectCompletely
function formatObjectCompletely(obj: any, indent: number = 2): string {
  const spaces = " ".repeat(indent);
  let result = "{\n";

  const entries = Object.entries(obj);

  entries.forEach(([key, value], index) => {
    const isLast = index === entries.length - 1;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // 嵌套对象
      result += `${spaces}${key}: ${formatObjectCompletely(value, indent + 2)}${isLast ? "" : ","}\n`;
    } else if (Array.isArray(value)) {
      // 🆕 数组
      result += `${spaces}${key}: ${formatArray(value, indent + 2)}${isLast ? "" : ","}\n`;
    } else {
      // 简单值
      const quotedValue = formatSimpleValue(value as string);
      result += `${spaces}${key}: ${quotedValue}${isLast ? "" : ","}\n`;
    }
  });

  result += " ".repeat(indent - 2) + "}";
  return result;
}

// 将对象写入TypeScript文件，保留原有注释和结构，支持删除keys
async function writeObjectToFileWithRemoval(
  filePath: string,
  obj: any,
  keysToRemove: string[] = []
): Promise<void> {
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在，创建默认文件: ${filePath}`);
    createDefaultLanguageFile(filePath);
  }

  try {
    // 使用 ts-morph 来精确修改文件，保留注释和其他内容
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);

    // 找到 message 变量声明
    const variableStatements = sourceFile.getVariableStatements();
    let messageDeclaration: VariableDeclaration | undefined;

    for (const statement of variableStatements) {
      const declarations = statement.getDeclarations();
      for (const declaration of declarations) {
        if (declaration.getName() === "message") {
          messageDeclaration = declaration;
          break;
        }
      }
      if (messageDeclaration) break;
    }

    if (messageDeclaration) {
      const initializer = messageDeclaration.getInitializer();
      if (
        initializer &&
        initializer.getKind() === SyntaxKind.ObjectLiteralExpression
      ) {
        // 🆕 关键修改：使用支持删除的智能合并
        updateObjectLiteralWithCommentsAndRemoval(
          initializer as ObjectLiteralExpression,
          obj,
          keysToRemove
        );
        await sourceFile.save();
        console.log(
          `📝 已更新文件: ${filePath} (保留原有注释和结构, 删除了 ${keysToRemove.length} 个多余keys)`
        );
      } else {
        throw new Error("message 不是对象字面量");
      }
    } else {
      console.error(`❌ 未找到 message 变量声明: ${filePath}`);
    }
  } catch (error: any) {
    console.error(`❌ 更新文件失败: ${filePath}`, error.message);

    // 如果 ts-morph 方式失败，回退到简单的字符串替换方式
    console.log(`⚠️  回退到对象删除+字符串替换方式...`);

    try {
      // 先从对象中删除多余的keys
      const cleanedObj = removeKeysFromNestedObject(obj, keysToRemove);

      const content = fs.readFileSync(filePath, "utf-8");
      const objectStr = formatObjectCompletely(cleanedObj);

      // 使用正则表达式找到并替换 message 对象
      const updatedContent = content.replace(
        /let\s+message\s*=\s*\{[\s\S]*?\};/,
        `let message = ${objectStr};`
      );

      fs.writeFileSync(filePath, updatedContent, "utf-8");
      console.log(
        `📝 已通过字符串替换更新文件: ${filePath} (删除了 ${keysToRemove.length} 个多余keys)`
      );
    } catch (fallbackError: any) {
      console.error(`❌ 字符串替换方式也失败了:`, fallbackError.message);

      // 最后的备用方案：完全重写文件（会丢失注释）
      const cleanedObj = removeKeysFromNestedObject(obj, keysToRemove);
      const objectStr = formatObjectCompletely(cleanedObj);
      const fileContent = `let message = ${objectStr};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
`;
      fs.writeFileSync(filePath, fileContent, "utf-8");
      console.log(`⚠️  已重写文件 (可能丢失注释): ${filePath}`);
    }
  }
}

// 原来的写入函数保持不变（向后兼容）
async function writeObjectToFile(filePath: string, obj: any): Promise<void> {
  return writeObjectToFileWithRemoval(filePath, obj, []);
}

// 找出缺失的键
function findMissingKeys(
  baseFlat: { [key: string]: string },
  targetFlat: { [key: string]: string }
): string[] {
  const missingKeys: string[] = [];

  for (const key in baseFlat) {
    if (!(key in targetFlat)) {
      missingKeys.push(key);
    }
  }

  return missingKeys;
}

// 🆕 新增：找出多余的键（目标文件有但基准文件没有的）
function findExtraKeys(
  baseFlat: { [key: string]: string },
  targetFlat: { [key: string]: string }
): string[] {
  const extraKeys: string[] = [];

  for (const key in targetFlat) {
    if (!(key in baseFlat)) {
      extraKeys.push(key);
    }
  }

  return extraKeys;
}

// 🆕 新增功能：更新指定的keys
interface UpdateKeysOptions {
  keys: string[]; // 要更新的key数组，支持嵌套路径如 "user.profile.name"
  useAI?: boolean; // 是否使用AI翻译
  targetLanguages?: string[]; // 目标语言，不传则更新所有语言
  forceUpdate?: boolean; // 是否强制更新（即使目标key已存在）
  baseLanguage?: string; // 🆕 基准语言文件，默认为 'zh-CN'
}

async function updateSpecificKeys(options: UpdateKeysOptions) {
  const {
    keys,
    useAI = false,
    targetLanguages,
    forceUpdate = true,
    baseLanguage = "en-US"
  } = options;

  console.log("🚀 开始更新指定的keys...");
  console.log(`🎯 指定的keys: ${keys.join(", ")}`);
  console.log(`🔄 强制更新: ${forceUpdate ? "是" : "否"}`);
  console.log(`🤖 使用AI翻译: ${useAI ? "是" : "否"}`);
  console.log(`📚 基准语言: ${baseLanguage}`);

  const baseFilePath = path.join(langPath, `${baseLanguage}.ts`);
  console.log(`📖 读取基准文件: ${baseFilePath}`);

  const baseObj = parseObjectFromFile(baseFilePath);
  const baseFlat = flattenObject(baseObj);

  // 验证指定的keys是否存在于基准文件中
  const validKeys: string[] = [];
  const invalidKeys: string[] = [];

  for (const key of keys) {
    if (key in baseFlat) {
      validKeys.push(key);
    } else {
      invalidKeys.push(key);
    }
  }

  if (invalidKeys.length > 0) {
    console.warn(`⚠️  以下keys在基准文件中不存在: ${invalidKeys.join(", ")}`);
  }

  if (validKeys.length === 0) {
    console.log("❌ 没有有效的keys需要更新");
    return;
  }

  console.log(`✅ 有效的keys: ${validKeys.join(", ")}`);

  // 确定目标语言（排除基准语言）
  const langs =
    targetLanguages || languages.filter((lang) => lang !== baseLanguage);

  for (const lang of langs) {
    console.log(`\n🌍 处理语言: ${lang}`);

    const targetFilePath = path.join(langPath, `${lang}.ts`);
    const targetObj = parseObjectFromFile(targetFilePath);
    const targetFlat = flattenObject(targetObj);

    // 确定需要更新的keys
    let keysToUpdate: string[] = [];

    if (forceUpdate) {
      keysToUpdate = validKeys;
      console.log(
        `🔄 强制更新模式: 将更新所有 ${keysToUpdate.length} 个指定keys`
      );
    } else {
      // 只更新不存在的keys
      keysToUpdate = validKeys.filter((key) => !(key in targetFlat));
      console.log(`🔍 增量更新模式: 发现 ${keysToUpdate.length} 个缺失的keys`);

      if (keysToUpdate.length === 0) {
        console.log(`✅ ${lang} 文件中所有指定keys都已存在，跳过`);
        continue;
      }
    }

    // 🆕 重要：始终从基准语言文件获取最新的文本进行翻译
    console.log(`📚 从基准语言 ${baseLanguage} 获取要翻译的文本...`);
    const textsToTranslate = keysToUpdate.map((key) => baseFlat[key]);

    console.log(`📝 需要翻译的keys示例:`);
    keysToUpdate.slice(0, 3).forEach((key) => {
      console.log(
        `  ${key}: "${baseFlat[key]}" (来自基准语言 ${baseLanguage})`
      );
    });

    // 调用翻译函数
    const translatedTexts = await translateTexts(textsToTranslate, lang, useAI);

    // 更新目标语言文件
    const updatedFlat = { ...targetFlat };
    keysToUpdate.forEach((key, index) => {
      const originalValue = targetFlat[key] || "(不存在)";
      const newValue = translatedTexts[index];

      // 🆕 记录更新详情
      if (forceUpdate && targetFlat[key]) {
        console.log(`🔄 更新 ${key}: "${originalValue}" → "${newValue}"`);
      } else {
        console.log(`➕ 新增 ${key}: "${newValue}"`);
      }

      updatedFlat[key] = newValue;
    });

    console.log(
      `📊 更新后 ${lang} 包含 ${Object.keys(updatedFlat).length} 个翻译键`
    );

    const updatedObj = unflattenObject(updatedFlat);

    console.log(`💾 写入文件: ${targetFilePath}`);
    await writeObjectToFile(targetFilePath, updatedObj);

    console.log(`✅ ${lang} 处理完成`);
  }

  console.log("\n🎉 指定keys更新完成！");
}

// 🆕 解析命令行参数的功能
function parseCommandLineArgs(): {
  mode: "all" | "keys";
  keys?: string[];
  useAI?: boolean;
  targetLanguages?: string[];
  forceUpdate?: boolean;
  baseLanguage?: string; // 🆕 基准语言参数
} {
  const args = process.argv.slice(2);

  // 检查是否指定了特定keys
  const keysIndex = args.indexOf("--keys");
  const useAIIndex = args.indexOf("--ai");
  const forceUpdateIndex = args.indexOf("--force");
  const langIndex = args.indexOf("--lang");
  const baseIndex = args.indexOf("--base"); // 🆕 基准语言参数

  // 🆕 获取基准语言参数
  let baseLanguage: string | undefined;
  if (baseIndex !== -1 && baseIndex + 1 < args.length) {
    baseLanguage = args[baseIndex + 1];
  }

  if (keysIndex !== -1 && keysIndex + 1 < args.length) {
    // 获取keys参数
    const keysString = args[keysIndex + 1];
    const keys = keysString.split(",").map((key) => key.trim());

    let targetLanguages: string[] | undefined;
    if (langIndex !== -1 && langIndex + 1 < args.length) {
      const langString = args[langIndex + 1];
      targetLanguages = langString.split(",").map((lang) => lang.trim());
    }

    return {
      mode: "keys",
      keys,
      useAI: useAIIndex !== -1,
      forceUpdate: forceUpdateIndex !== -1,
      targetLanguages,
      baseLanguage // 🆕 返回基准语言
    };
  }

  return {
    mode: "all",
=======
    // 🆕 重要：始终从基准语言文件获取最新的文本进行翻译
    console.log(`📚 从基准语言 ${baseLanguage} 获取要翻译的文本...`);
    const textsToTranslate = keysToUpdate.map(key => baseFlat[key]);

    console.log(`📝 需要翻译的keys示例:`);
    keysToUpdate.slice(0, 3).forEach(key => {
      console.log(`  ${key}: "${baseFlat[key]}" (来自基准语言 ${baseLanguage})`);
    });

    // 调用翻译函数
    const translatedTexts = await translateTexts(textsToTranslate, lang, useAI);

    // 更新目标语言文件
    const updatedFlat = { ...targetFlat };
    keysToUpdate.forEach((key, index) => {
      const originalValue = targetFlat[key] || '(不存在)';
      const newValue = translatedTexts[index];

      // 🆕 记录更新详情
      if (forceUpdate && targetFlat[key]) {
        console.log(`🔄 更新 ${key}: "${originalValue}" → "${newValue}"`);
      } else {
        console.log(`➕ 新增 ${key}: "${newValue}"`);
      }

      updatedFlat[key] = newValue;
    });

    console.log(`📊 更新后 ${lang} 包含 ${Object.keys(updatedFlat).length} 个翻译键`);

    const updatedObj = unflattenObject(updatedFlat);

    console.log(`💾 写入文件: ${targetFilePath}`);
    await writeObjectToFile(targetFilePath, updatedObj);

    console.log(`✅ ${lang} 处理完成`);
  }

  console.log('\n🎉 指定keys更新完成！');
}

// 🆕 解析命令行参数的功能
function parseCommandLineArgs(): {
  mode: 'all' | 'keys';
  keys?: string[];
  useAI?: boolean;
  targetLanguages?: string[];
  forceUpdate?: boolean;
  baseLanguage?: string; // 🆕 基准语言参数
} {
  const args = process.argv.slice(2);

  // 检查是否指定了特定keys
  const keysIndex = args.indexOf('--keys');
  const useAIIndex = args.indexOf('--ai');
  const forceUpdateIndex = args.indexOf('--force');
  const langIndex = args.indexOf('--lang');
  const baseIndex = args.indexOf('--base'); // 🆕 基准语言参数

  // 🆕 获取基准语言参数
  let baseLanguage: string | undefined;
  if (baseIndex !== -1 && baseIndex + 1 < args.length) {
    baseLanguage = args[baseIndex + 1];
  }

  if (keysIndex !== -1 && keysIndex + 1 < args.length) {
    // 获取keys参数
    const keysString = args[keysIndex + 1];
    const keys = keysString.split(',').map(key => key.trim());

    let targetLanguages: string[] | undefined;
    if (langIndex !== -1 && langIndex + 1 < args.length) {
      const langString = args[langIndex + 1];
      targetLanguages = langString.split(',').map(lang => lang.trim());
    }

    return {
      mode: 'keys',
      keys,
      useAI: useAIIndex !== -1,
      forceUpdate: forceUpdateIndex !== -1,
      targetLanguages,
      baseLanguage // 🆕 返回基准语言
    };
  }

  return {
    mode: 'all',
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
    useAI: useAIIndex !== -1,
    baseLanguage // 🆕 返回基准语言
  };
}

<<<<<<< HEAD
// 🆕 修改主函数，默认增加删除多余keys的功能
async function processAllMissingKeys(
  useAI: boolean = false,
  baseLanguage: string = "en-US"
) {
  console.log("🚀 开始处理多语言文件...");
  console.log(`📚 基准语言: ${baseLanguage}`);

  const baseFilePath = path.join(langPath, `${baseLanguage}.ts`);
=======
// 原有的主函数（处理所有缺失的keys）
async function processAllMissingKeys(useAI: boolean = false, baseLanguage: string = 'en-US') { // 🆕 添加基准语言参数
  console.log('🚀 开始处理多语言文件...');
  console.log(`📚 基准语言: ${baseLanguage}`); // 🆕 显示基准语言

  const baseFilePath = path.join(langPath, `${baseLanguage}.ts`); // 🆕 使用参数化的基准语言
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  console.log(`📖 读取基准文件: ${baseFilePath}`);

  const baseObj = parseObjectFromFile(baseFilePath);
  const baseFlat = flattenObject(baseObj);

  console.log(`📊 基准文件包含 ${Object.keys(baseFlat).length} 个翻译键`);
<<<<<<< HEAD
  console.log("基准文件平铺结构预览:", Object.keys(baseFlat).slice(0, 3));

  for (const lang of languages) {
    if (lang === baseLanguage) continue;
=======
  console.log('基准文件平铺结构预览:', Object.keys(baseFlat).slice(0, 3));

  for (const lang of languages) {
    if (lang === baseLanguage) continue; // 🆕 动态排除基准语言
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea

    console.log(`\n🌍 处理语言: ${lang}`);

    const targetFilePath = path.join(langPath, `${lang}.ts`);
    const targetObj = parseObjectFromFile(targetFilePath);
    const targetFlat = flattenObject(targetObj);

<<<<<<< HEAD
    console.log(
      `📊 ${lang} 文件当前包含 ${Object.keys(targetFlat).length} 个翻译键`
    );

    // 🆕 1. 查找缺失的keys（需要添加）
    const missingKeys = findMissingKeys(baseFlat, targetFlat);

    // 🆕 2. 查找多余的keys（需要删除）
    const extraKeys = findExtraKeys(baseFlat, targetFlat);

    console.log(
      `🔍 发现 ${missingKeys.length} 个缺失的键，${extraKeys.length} 个多余的键`
    );

    // 显示缺失和多余的keys示例
    if (missingKeys.length > 0) {
      console.log(
        "缺失键示例:",
        missingKeys.slice(0, 3).map((key) => `${key}: "${baseFlat[key]}"`)
      );
    }
    if (extraKeys.length > 0) {
      console.log(
        "多余键示例:",
        extraKeys.slice(0, 3).map((key) => `${key}: "${targetFlat[key]}"`)
      );
    }

    // 🆕 3. 处理翻译（只处理缺失的keys）
    let updatedFlat = { ...targetFlat };

    if (missingKeys.length > 0) {
      const textsToTranslate = missingKeys.map((key) => baseFlat[key]);

      console.log("开始翻译缺失的keys...");
      const translatedTexts = await translateTexts(
        textsToTranslate,
        lang,
        useAI
      );

      // 添加翻译结果
      missingKeys.forEach((key, index) => {
        updatedFlat[key] = translatedTexts[index];
        console.log(`➕ 新增: ${key}`);
      });
    }

    // 🆕 4. 删除多余的keys（从平铺对象中删除）
    if (extraKeys.length > 0) {
      console.log("开始删除多余的keys...");
      extraKeys.forEach((key) => {
        console.log(`🗑️  删除: ${key}: "${updatedFlat[key]}"`);
        delete updatedFlat[key];
      });
    }

    console.log(
      `📊 处理后 ${lang} 包含 ${Object.keys(updatedFlat).length} 个翻译键 (新增: ${missingKeys.length}, 删除: ${extraKeys.length})`
    );

    // 🆕 5. 转换回嵌套对象并写入文件（使用支持删除的版本）
    const updatedObj = unflattenObject(updatedFlat);

    console.log(`💾 写入文件: ${targetFilePath}`);
    await writeObjectToFileWithRemoval(targetFilePath, updatedObj, extraKeys);
=======
    console.log(`📊 ${lang} 文件当前包含 ${Object.keys(targetFlat).length} 个翻译键`);

    const missingKeys = findMissingKeys(baseFlat, targetFlat);

    if (missingKeys.length === 0) {
      console.log(`✅ ${lang} 文件无缺失键`);
      continue;
    }

    console.log(`🔍 发现 ${missingKeys.length} 个缺失的键`);
    console.log('缺失键示例:', missingKeys.slice(0, 3).map(key => `${key}: "${baseFlat[key]}"`));

    const textsToTranslate = missingKeys.map(key => baseFlat[key]);

    // 调用真实翻译函数
    const translatedTexts = await translateTexts(textsToTranslate, lang, useAI);

    const updatedFlat = { ...targetFlat };
    missingKeys.forEach((key, index) => {
      updatedFlat[key] = translatedTexts[index];
    });

    console.log(`📝 更新后 ${lang} 包含 ${Object.keys(updatedFlat).length} 个翻译键`);

    const updatedObj = unflattenObject(updatedFlat);

    console.log(`💾 写入文件: ${targetFilePath}`);
    await writeObjectToFile(targetFilePath, updatedObj);
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea

    console.log(`✅ ${lang} 处理完成`);
  }

<<<<<<< HEAD
  console.log("\n🎉 所有语言文件处理完成！");
  console.log(
    "📈 总结：自动添加了缺失的翻译，并删除了多余的翻译，保持所有语言文件与基准文件同步。"
  );
=======
  console.log('\n🎉 所有语言文件处理完成！');
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
}

// 修改后的主函数
async function main() {
  const config = parseCommandLineArgs();

<<<<<<< HEAD
  if (config.mode === "keys" && config.keys) {
=======
  if (config.mode === 'keys' && config.keys) {
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
    // 更新指定keys模式
    await updateSpecificKeys({
      keys: config.keys,
      useAI: config.useAI,
      targetLanguages: config.targetLanguages,
      forceUpdate: config.forceUpdate,
      baseLanguage: config.baseLanguage // 🆕 传递基准语言参数
    });
  } else {
<<<<<<< HEAD
    // 🆕 处理所有缺失keys模式（现在默认包含删除多余keys功能）
    await processAllMissingKeys(config.useAI, config.baseLanguage || "en-US");
  }
}

// 🆕 更新帮助信息
function showHelp() {
  console.log(`
📖 多语言翻译工具使用说明 (现已默认包含删除多余翻译功能)

# 处理所有缺失的翻译，并删除多余的翻译（默认基于 en-US）
tsx ./updatei18n.ts

# 使用AI翻译处理所有缺失和多余的翻译
=======
    // 处理所有缺失keys模式（原有功能）
    await processAllMissingKeys(config.useAI, config.baseLanguage || 'en-US'); // 🆕 传递基准语言参数，默认 'en-US'
  }
}

// 🆕 添加帮助信息
function showHelp() {
  console.log(`
📖 多语言翻译工具使用说明

# 处理所有缺失的翻译（原功能，默认基于 en-US）
tsx ./updatei18n.ts

# 使用AI翻译处理所有缺失的翻译
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
tsx ./updatei18n.ts --ai

# 指定基准语言文件（默认为 en-US）
tsx ./updatei18n.ts --base zh-CN

<<<<<<< HEAD
# 更新指定的keys到所有语言（不会删除多余keys）
=======
# 更新指定的keys到所有语言（默认基于 zh-CN）
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
tsx ./updatei18n.ts --keys "user.name,user.email,settings.title"

# 使用AI翻译指定的keys
tsx ./updatei18n.ts --keys "user.name,user.email" --ai

# 强制更新指定的keys（即使已存在）
tsx ./updatei18n.ts --keys "user.name,user.email" --force

# 只更新到指定语言
tsx ./updatei18n.ts --keys "user.name,user.email" --lang "en-US,fr-FR,ja-JP"

# 指定基准语言为英文，更新指定keys
tsx ./updatei18n.ts --keys "user.profile.name,settings.theme" --base en-US

# 组合使用：指定基准语言+AI翻译+强制更新+指定目标语言
tsx ./updatei18n.ts --keys "user.profile.name,settings.theme" --base en-US --ai --force --lang "zh-CN,fr-FR"

<<<<<<< HEAD
🆕 新功能说明：
✅ 默认删除多余翻译：在处理所有缺失翻译时，会自动删除其他文件中存在但基准文件中不存在的keys
✅ 保留注释和格式：删除操作会保留原有的注释和代码结构
✅ 智能清理：删除key后会自动清理空的父对象
✅ 详细日志：显示删除的具体内容和数量统计

参数说明：
--base <语言代码>     指定基准语言文件（如：zh-CN, en-US），默认处理全部时为 en-US，处理指定keys时为 zh-CN
--keys <键列表>       指定要更新的keys，用逗号分隔（不会删除多余keys）
=======
参数说明：
--base <语言代码>     指定基准语言文件（如：zh-CN, en-US），默认处理全部时为 en-US，处理指定keys时为 zh-CN
--keys <键列表>       指定要更新的keys，用逗号分隔
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
--ai                 使用AI翻译替代Google翻译
--force              强制更新（即使目标key已存在）
--lang <语言列表>     指定目标语言，用逗号分隔
--help, -h           显示此帮助信息
`);
}

// 检查是否需要显示帮助
<<<<<<< HEAD
if (process.argv.includes("--help") || process.argv.includes("-h")) {
=======
if (process.argv.includes('--help') || process.argv.includes('-h')) {
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  showHelp();
  process.exit(0);
}

main().catch(console.error);
