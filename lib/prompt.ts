export const SYSTEM_PROMPT = "你是一位小说家，你的任务是根据用户提供的对话历史（包含之前的故事片段和用户的最新选择）和「故事续写要求」，创作故事续写.";
export const CHOICE_SYSTEM_PROMPT = "你的唯一输出必须是单个、完整且语法绝对正确的 JSON 对象。禁止在 JSON 对象之外添加任何其他内容。"

export const genreOptions = [
  { id: 'wuxia', name: '武侠江湖', description: '剑气纵横，侠义情仇', icon: '🗡️', prompt:'创作一个武侠故事的开篇。聚焦于一位身负秘密或血海深仇的主角，他/她正处于一个关键的抉择点或危险的境地，周遭暗流涌动，门派与江湖势力若隐若现。' },
  { id: 'scifi', name: '科幻探索', description: '星际旅行，未知奥秘', icon: '🚀' ,prompt:'创作一个科幻故事的开篇。将主角置于一个远离地球的未知环境（如陌生星球、深空探测器、异常空间），遭遇无法用现有知识解释的现象或智慧信号，迫使其做出关乎生存或探索的艰难决定。'},
  { id: 'fantasy', name: '奇幻魔法', description: '魔法世界，神秘力量', icon: '✨' ,prompt:'创作一个奇幻故事的开篇。主角应意外卷入一场涉及古老魔法、预言或神秘生物的危机中。他/她可能身怀异能而不自知，或持有一件看似平凡却蕴藏力量的物品。故事需营造出浓厚的神秘氛围和潜在的危险。'},
  { id: 'mystery', name: '悬疑推理', description: '层层谜团，抽丝剥茧', icon: '🔍' ,prompt:'创作一个悬疑推理故事的开篇。设置一个看似平静却暗藏玄机的场景，引入一个令人不安的反常细节或一个无法解释的事件。主角（如侦探、记者或普通人）需要被这个谜团吸引或卷入其中，故事需营造出紧张、诡异或压抑的氛围。'},
  { id: 'cultivation', name: '玄幻修仙', description: '三十年河东,三十年河西', icon: '☯️' ,prompt:'创作一个玄幻修仙故事的开篇。主角可以是一个资质平庸但意志坚韧的少年/少女，或是一个遭遇变故的天才。他/她需意外获得一部残缺功法、一件上古法宝，或卷入修真门派的纷争，从而踏上坎坷的修行之路。突出修真世界的残酷法则和主角的不屈意志。'},
  { id: 'palace', name: '架空宫斗', description: '朝堂暗斗，权谋智博', icon: '👑', prompt:'创作一个架空宫廷争斗故事的开篇。主角可以是一位初入宫闱的女子（如新晋妃嫔、宫女、或外戚女），或是一位身处权力中心的男性（如皇子、大臣或侍卫）。他/她需面对错综复杂的皇室关系与朝堂派系，周围充满虚伪的笑容和精心设计的陷阱。请描绘一个看似平静奢华但暗流涌动的宫廷环境，铺陈一个微妙的政治局势或权力转移的关键时刻。故事中应体现主角的聪慧、手段或特殊才能，以及他/她在危机中的选择，暗示即将展开的连环谋略与权力博弈。'}

];

export const START_USER_PROMPT = (genreIdOrName: string) => {
  const selectedGenre = genreOptions.find(option => 
    option.id === genreIdOrName || option.name === genreIdOrName
  );
  
  const novel_prompt =  selectedGenre?.prompt || genreOptions[0].prompt;
  return `**内容生成任务**：
根据以下「风格提示」和「内容与风格要求」，生成故事开篇,段落之间必须使用且仅使用 \n\n 分隔。

**风格提示**：${novel_prompt}

**内容与风格要求**：
1.  **引人入胜的开篇**：
    *   **制造悬念与冲突**：开篇需迅速建立悬念、引入核心冲突或提出一个引人好奇的问题，抓住读者注意力。
    *   **鲜活的感官描写**：运用具体的视觉、听觉、嗅觉、触觉等细节，营造氛围，让读者身临其境（"展示，而非告知"）。
    *   **确立基调**：故事开篇的语言风格、节奏和情感色彩必须与「风格提示」高度一致。
    *   **避免陈词滥调**：在情节构思、人物设定和语言表达上力求新颖，避开常见的套路和俗语。
    *   **合适的标点符号**：段落之间使用恰当的标点符号（如句号、问号、感叹号），保持句子的完整性和连贯性。
2.  **故事长度**：开篇故事长度控制在 1000 至 2000 字之间。`;
}

export const STOR_ING_USER_PROMPT = `**内容生成任务**：
根据用户提供的对话历史（包含之前的故事片段和用户的最新选择）和以下「故事续写要求」，创作故事续写.

**故事续写要求**：
1.  **高度连贯性**：续写内容**必须**紧密衔接之前的故事情节和用户做出的最新选择。保持人物性格、动机、故事背景和整体基调的一致性。**允许在叙事需要时进行合理的场景切换或时间跳跃，但必须过渡自然，服务于故事整体逻辑，** 绝不允许出现逻辑断裂或与前文矛盾之处。
2.  **服务故事主线**：续写部分**必须**有效地推动核心情节发展，或深化人物形象，或揭示重要信息。避免无关的旁枝末节或仅仅为了填充字数的无效描写（牢记"故事优先"原则）。
3.  **保持吸引力 ("好看")**：
    *   在连贯的基础上，继续营造悬念、加剧冲突或探索新的情节可能性，维持读者的阅读兴趣。
    *   运用生动具体的描写（视觉、听觉等感官细节），保持故事的画面感和真实感。
    *   语言风格应与故事已有部分保持一致，力求精准、流畅。
4.  **字数控制**：续写的故事内容长度严格控制在 1000 至 2000 字之间。
5.  **合适的标点符号**：段落之间使用恰当的标点符号（如句号、问号、感叹号），保持句子的完整性和连贯性。`;

export const CHOICE_USER_PROMPT = `**！！！绝对强制输出格式！！！**
你的唯一输出**必须**是单个、完整且语法绝对正确的 JSON 对象。**禁止**在 JSON 对象之外添加任何字符、解释、注释、代码标记（如 \`\`\`json）或任何形式的元评论。任何偏离此格式的输出都将被视为完全失败。

**JSON 结构（必须严格遵守）**：
[
  "第一个选项描述",
  "第二个选项描述",
  "第三个选项描述"
]

**JSON 格式细节（强制）**：
1.  **引号**：所有 JSON 键和字符串值**必须**使用双引号 (").
2.  **转义**：字符串值内部的所有特殊字符（如 "、换行符等）**必须**正确转义（例如：\", \n）。
3.  **完整性**：确保 JSON 对象完整，无截断、无语法错误（如多余逗号）。

**内容生成任务**：
根据用户提供的对话历史（包含之前的故事片段和用户的最新选择）和以下「故事续写要求」，创作故事选项，并填充到上述 JSON 结构的对应字段中。

**故事续写要求**：
1.   提出的**三个**选项必须是基于当前故事点的合理延伸，**可以包含直接情节推进、角色具体行动或决定、探索不同地点/视角、或引入新的变数**。
2.   选项之间应有明显区分，各自导向不同的、有意义的情节发展方向。
3.   **至少包含一个**提供显著变化、转折或探索不同可能性的选项，以增加故事的丰富度和不可预测性。
4.   **所有选项必须**与当前故事背景和人物状态保持逻辑关联，**不得完全脱离故事**，并具有潜在的叙事价值。
5.   选项描述需简洁、清晰，能准确预示选择后的故事走向。`;