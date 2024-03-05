const kurdishBtn = document.getElementById('kurdishBtn');
const englishBtn = document.getElementById('englishBtn');
const arabicBtn = document.getElementById('arabicBtn');
const content = document.getElementById('content');

document.addEventListener("DOMContentLoaded", function() {
    // Simulate click on Kurdish button
    document.getElementById("kurdishBtn").click();
});


const englishTips = [
    "<h3>Improving your social content involves several key strategies and considerations.</h3>",
    "<h3>Here are some tips to help you enhance your social media presence:</h3>",
    "<br>",
    "<p><b>1 - Understand Your Audience:</b> Know who your target audience is and what kind of content they engage with. Tailor your content to their preferences, interests, and demographics.</p>",
    "<p><b>2 - Consistency is Key:</b> Maintain a consistent posting schedule to keep your audience engaged and to establish credibility. Consistency helps you stay on top of your audience's minds.</p>",
    "<p><b>3 - Quality Over Quantity:</b> Focus on creating high-quality content that adds value to your audience. Avoid spamming your followers with irrelevant or low-quality posts.</p>",
    "<p><b>4 - Visual Appeal:</b> Use visually appealing images, videos, and graphics to capture your audience's attention. Invest in high-quality visuals that align with your brand identity.</p>",
    "<p><b>5 - Engage with Your Audience:</b> Respond to comments, messages, and mentions promptly. Engaging with your audience helps build relationships and fosters a sense of community around your brand.</p>",
    "<p><b>6 - Tell Stories:</b> People love stories. Use storytelling techniques to make your content more relatable, memorable, and engaging. Share behind-the-scenes insights, customer testimonials, or personal anecdotes.</p>",
    "<p><b>7 - Stay Up-to-Date:</b> Keep abreast of current trends, events, and conversations happening on social media. Incorporate relevant trends and topics into your content to stay relevant and increase engagement.</p>",
    "<p><b>8 - Use Hashtags Wisely:</b> Research and use relevant hashtags to increase the discoverability of your content. However, avoid overusing hashtags, as it can make your posts look spammy.</p>",
    "<p><b>9 - Call to Action (CTA):</b> Include clear and compelling calls to action in your posts to encourage your audience to take the desired action, whether it's liking, commenting, sharing, or visiting your website.</p>",
    "<p><b>10 - Analytics and Optimization:</b> Regularly analyze your social media metrics to understand what content resonates best with your audience. Use this data to optimize your content strategy and improve performance over time.</p>",
    "<p><b>11 - Experiment and Learn:</b> Don't be afraid to try new content formats, platforms, or strategies. Experimentation is key to discovering what works best for your audience. Continuously monitor and learn from your results to refine your approach.</p>",

];

const kurdishTips = [
    "<h3>به‌رهه‌می ئه‌گه‌رنی کردنی کارده‌كاتی ئه‌ندامه‌زراوی زۆر زه‌رزه‌ری زیاتری ده‌گه‌ڕی.</h3>",
    "<h3>ئه‌مه‌ تواناکیانه‌ی بۆ یارمه‌تی ده‌توانرێت له‌ سه‌رته‌مه‌یی ئەندامه‌زراوییتی زۆر بگۆڕێته‌وه‌:</h3>",
    "<br>",
    "<p><b>١ - مەعرفییەتی ئەندامێكانت بکە:</b> زانیاری دەستپێکردنی کەسانەکەی خەڵکەکە و جۆری مەکاتەوەی بە گرینگ دەبینە. مووچەکانت بۆ پێشفراویییەکانیان، هەڵبژاردنەکان و بەشداری زمانییەکان بکەوهەمووێکیتان پێکردنەوە.</p>",
    "<p><b>٢ - ھاوسەرچییەكانی كەی:</b> جەمکاریەکەی سەرەکیەکانت بکە. دەمەنی زمانی زیاتری دەکات بۆ چالاک بوونی خەڵکەکە و دەرزانی بنەڕەت. چالاک بوون پێکردنەوەیت دەمەن دیکە لە سەر ذهەنی خەڵکەکەیتان.</p>",
    "<p><b>٣ - بەرزی بەریكاریی بەرەوبەر:</b> بەرزی بەریكاریی بەرەوبەری مەکاتەوەییت بکە. بە کەرهەمێندراو بکە لە گرینگی زانیارییەکانیت. دیاری بکە لە پەیوەندی زانیاریی دەخەوێنەتی یان پەیامەکانی کەم کارەوە.</p>",
    "<p><b>٤ - جووتنی ناوەندی:</b> ویژوالەکان، فیلمەکان، و گرافیکەکانی خوارەوەیی بەکاربێنە بۆ ئەوانی کە دەنگداری زیاتری خەڵکەکانت بدەن. لە زۆر چاکی لەچوار ویژوالی زۆر بەهۆشیاریە بکە کە دووبارەی بە خەڵکەکانت هاوسەربژێری دەکات.</p>",
    "<p><b>٥ - پەیوەندی بکە لەگەڵ ئەندامێكانت:</b> لەسەر بیرکردنەوەی ئەندامێكان، پەیامەکان، و ناوەرۆکان پێشوو بنەڕەت. پەیوەندیبکەریت بۆ گرینگی ئەندامێكان، پەیوەندییەکان دەستی بکە بۆ کردنەوەی پێوەندیی چاودێری و هاوڕێیی بەردەوامی دەکەی لەسەر مارکە و براندەکەت.</p>",
    "<p><b>٦ - چیرۆکی گەل:</b> گەل خۆش دەکەن. بەکارهێنانی ئامانجی گەلی بکە بۆ زیاتر بوونی خواردنەوەی پەیامەکانت. سه‌رچاوه‌ی خواره‌وه‌ی دەکات بۆ ئەوانی کە دەنگدارییتان بدەن. بابەتەکانی سرەخۆ، گووازانەکانی کڕیار، یان کورتییەکانی پرسناڵ بژێرە.</p>",
    "<p><b>٧ - بەریبانی بە نوێی دەبەش بوون:</b> لە گۆڕانەکانی کورد، چەپەڕان، و گفتوگوەکانی ئەوە دەربارەی چی دەگەڕێن لە سۆشیاڵ میدیا چاودێری بکە. تاکووت و مووچەیانی چەپەڕان و مۆندۆلی کاری بەکاربێنە بۆ زیاتر بوونی خواردنەوەی پەیامەکانت.</p>",
    "<p><b>٨ - بەکارهێنانی هاشتاگەکان لە بوون:</b> هاشتاگەکانی مووچەکانی ژمارەی زیاتری دەبێت بۆ دەکرێتنی زانیارییەکانت کەتان دۆزرایی بکە. بەڵام زیاتربوونەوەی هاشتاگ بەکارنەبێ، چونکە ئەو بابەتەکانە چەندان ناوەرۆک دەکەن.</p>",
    "<p><b>٩ - پاشانگۆ چاک بکە:</b> پاشانگۆی باش و بانگکە بنەڕەتییان لە مەکاتەوە دەبنەڕێت بۆ کردنەوەی پەیامەکانیتان بۆ کردنەوەی کردارێکی دەیاری، سەرەڕاییی، هاوبووی، یان سەردانی وێبسایتەکەتان.</p>",
    "<p><b>١٠ - سەرجەم و بەرهەمبەرکردن:</b> مەکاتەوە مێتریکی سۆشیاڵ میدیاکان ببینە لە کارباری بەهۆشیاریی بۆ دەزانینی ئەوەی کدەم پەیامەکانی زیاتر بە کار بێت لە گرینگی ئەندامێکانت. ئەم داتایە بۆ بهێنانی ستراتیژیی زیاتری دەتوانیت بەکاربێنی بکەیت و کردارەکانت پەرەتووکری بکەیت لە ماوەیەکی ڕووناکی.</p>",
    "<p><b>١١ - ئەمەرکردن و فێربوون:</b> ناخۆشی ناکاتە نوێی قەلەبانگی یان سەیرییەکان، میۆرکردنی یان ستراتیژییەکانی نوێ. ئەمەرکردن ناوەڕۆکیەکەتان بۆ یارمه‌تی دەبێت بۆ کۆی پەیامەکانتان. رۆندانەوە و بەرنامەکردنەوەی ئەو ئەنجامانە بچووکە و زانینی چی ئەوەی بەهێزی زانیارییەکانتان دەبینی بکەو چارەسەری ڕێکخراوی خۆشتانە بکەوە.</p>",
];


const arabicTips = [
    "<h3>تحسين محتواك الاجتماعي ينطوي على عدة استراتيجيات واعتبارات رئيسية.</h3>",
    "<h3>إليك بعض النصائح لمساعدتك على تعزيز وجودك على وسائل التواصل الاجتماعي:</h3>",
    "<br>",
    "<p><b>١ - فهم جمهورك:</b> اعرف من هم جمهورك المستهدف وأنواع المحتوى الذي يشاركون فيه. قم بتصميم محتواك بحسب تفضيلاتهم، واهتماماتهم، والبيانات الديموغرافية لهم.</p>",
    "<p><b>٢ - الاستمرارية هي الأساس:</b> حافظ على جدول زمني للنشر منتظم للحفاظ على اهتمام ومشاركة جمهورك، ولترسيخ المصداقية. الاستمرارية تساعدك على البقاء في أذهان جمهورك.</p>",
    "<p><b>٣ - الجودة أهم من الكمية:</b> ركز على إنشاء محتوى عالي الجودة يضيف قيمة لجمهورك. تجنب ملء إشارة متابعيك بالمشاركات غير المرغوب فيها أو منخفضة الجودة.</p>",
    "<p><b>٤ - جاذبية الصورة:</b> استخدم صورًا، فيديوهات، ورسومات جذابة بصريًا لجذب انتباه جمهورك. استثمر في صور بجودة عالية تتماشى مع هوية علامتك التجارية.</p>",
    "<p><b>٥ - تفاعل مع جمهورك:</b> رد على التعليقات، الرسائل، والإشارات بسرعة. التفاعل مع جمهورك يساعد في بناء العلاقات ويعزز الشعور بالمجتمع حول علامتك التجارية.</p>",
    "<p><b>٦ - حكايات:</b> الناس يحبون القصص. استخدم تقنيات السرد لجعل محتواك أكثر قربًا وتذكرًا ومشاركة. شارك أفكار خلف الكواليس، وشهادات العملاء، أو القصص الشخصية.</p>",
    "<p><b>٧ - البقاء على اطلاع:</b> ابق على اطلاع على التوجهات الحالية والأحداث والمحادثات التي تحدث على وسائل التواصل الاجتماعي. دمج التوجهات والمواضيع ذات الصلة في محتواك للبقاء على اطلاع وزيادة المشاركة.</p>",
    "<p><b>٨ - استخدام العلامات التجارية بحكمة:</b> ابحث واستخدم علامات تجارية ذات صلة لزيادة قابلية اكتشاف محتواك. ومع ذلك، تجنب الإفراط في استخدام العلامات التجارية، حيث يمكن أن يجعل منشوراتك تبدو كرسائل غير مرغوب فيها.</p>",
    "<p><b>٩ - نداء للعمل:</b> قم بتضمين نداءات للعمل واضحة ومقنعة في منشوراتك لتشجيع جمهورك على اتخاذ الإجراء المطلوب، سواء كان الأمر يتعلق بالإعجاب، التعليق، المشاركة، أو زيارة موقع الويب الخاص بك.</p>",
    "<p><b>١٠ - تحليل وتحسين:</b> قم بتحليل بشكل منتظم مقاييس التواصل الاجتماعي لفهم أي محتوى يتفاعل بشكل أفضل مع جمهورك. استخدم هذه البيانات لتحسين استراتيجية محتواك وتحسين الأداء مع مرور الوقت.</p>",
    "<p><b>١١ - تجريب وتعلم:</b> لا تخاف من تجربة تنسيقات المحتوى الجديدة، أو المنصات، أو الاستراتيجيات. التجريب هو الأساس لاكتشاف ما يعمل بشكل أفضل لجمهورك. راقب نتائجك باستمرار وتعلم منها لتنقيح نهجك.</p>",
];



kurdishBtn.addEventListener('click', () => {
    content.innerHTML = kurdishTips.join("");
    content.style.direction = 'rtl';
});

englishBtn.addEventListener('click', () => {
    content.innerHTML = englishTips.join("");
    content.style.direction = 'ltr';
});

arabicBtn.addEventListener('click', () => {
    content.innerHTML = arabicTips.join("");
    content.style.direction = 'rtl';
});