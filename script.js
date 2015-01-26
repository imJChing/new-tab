window.onload = function start() {
	random = Math.floor((Math.random() * 163) + 1);
	var quotes = fetchQuote(random);
	document.getElementById('quote').innerHTML = quotes.quote;
	document.getElementById('author').innerHTML = "- " + quotes.author;
	setInterval(function() {
		displayDate()
	}, 100); // Time is refreshed at 100ms interval 
}

function displayDate() {
	var now = new Date()
	
	// Date display section
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
	document.getElementById('date').innerHTML = weekday[now.getDay()] + ', ' + now.getDate() + ' ' + month[now.getMonth()];
	
	// Time display section
	h = now.getHours(),
	m = now.getMinutes(),
	s = now.getSeconds();
	if (h < 10) h = '0' + h;
	if (m < 10) m = '0' + m;
	if (s < 10) s = '0' + s;
	document.getElementById('time').innerHTML = h + ':' + m;
}

function fetchQuote(index) {
	var lines = new Array();
    lines[0] = {quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"};
    lines[1] = {quote:"Your time is limited, so don't waste it living someone else's life.",author:"Steve Jobs"};
    lines[2] = {quote:"Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",author:"Carl Bard"};
    lines[3] = {quote:"When the past calls, let it go to voicemail, believe me, it has nothing new to say.",author:"Unknown"};
    lines[4] = {quote:"Rule #1 of life. Do what makes YOU happy.",author:"Unknown"};
    lines[5] = {quote:"Walk away from anything or anyone who takes away from your joy. Life is too short to put up with fools.",author:"Unknown"};
    lines[6] = {quote:"Yesterday you said Tomorrow, Just Do it",author:"Unknown"};
    lines[7] = {quote:"Just remember there is someone out there that is more than happy with less than what you have.",author:"Unknown"};
    lines[8] = {quote:"The biggest failure you can have in life is making the mistake of never trying at all.",author:"Unknown"};
    lines[9] = {quote:"You know what's worst than failure? Regrets.",author:"Unknown"};
    lines[10] = {quote:"I Trained 17 years to be an overnight success",author:"Lione Messi"};
    lines[11] = {quote:"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",author:"Wayne Dyer"};
    lines[12] = {quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"};
    lines[13] = {quote:"Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.",author:"Robert Frost"};
    lines[14] = {quote:"Imagination is more important than knowledge",author:"Unknown"};
    lines[15] = {quote:"You miss 100% of the shots you don't take.",author:"Wayne Gretzky"};
    lines[16] = {quote:"No one can ever perform your role in this world better than you. Be Original.",author:"S.Jobs"};
    lines[17] = {quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"};
    lines[18] = {quote:"Definiteness of purpose is the starting point of all achievement.",author:"W. Clement Stone"};
    lines[19] = {quote:"Life is what happens to you while you're busy making other plans.",author:"John Lennon"};
    lines[20] = {quote:"We become what we think about.",author:"Earl Nightingale"};
    lines[21] = {quote:"Tough times doesnt lasts, but tough people do",author:"Unknown"};
    lines[22] = {quote:"Life is 10% what happens to me and 90% of how I react to it.",author:"John Maxwell"};
    lines[23] = {quote:"If you do what you've always done, you'll get what you've always gotten.",author:"Tony Robbins"};
    lines[24] = {quote:"The mind is everything. What you think you become.",author:"Buddha"};
    lines[25] = {quote:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"};
    lines[26] = {quote:"An unexamined life is not worth living.",author:"Socrates"};
    lines[27] = {quote:"Eighty percent of success is showing up.",author:"Woody Allen"};
    lines[28] = {quote:"Don't wait. The time will never be just right.",author:"Napoleon Hill"};
    lines[29] = {quote:"Winning isn't everything, but wanting to win is.",author:"Vince Lombardi"};
    lines[30] = {quote:"I am not a product of my circumstances. I am a product of my decisions.",author:"Stephen Covey"};
    lines[31] = {quote:"Every child is an artist.  The problem is how to remain an artist once he grows up.",author:"Pablo Picasso"};
    lines[32] = {quote:"You can never cross the ocean until you have the courage to lose sight of the shore.",author:"Christopher Columbus"};
    lines[33] = {quote:"Life beings at the end of your comfort zone",author:"Unknown"};
    lines[34] = {quote:"Either you run the day, or the day runs you.",author:"Jim Rohn"};
    lines[35] = {quote:"Whether you think you can or you think you can't, you're right.",author:"Henry Ford"};
    lines[36] = {quote:"The two most important days in your life are the day you are born and the day you find out why.",author:"Mark Twain"};
    lines[37] = {quote:"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",author:"Johann Wolfgang von Goethe"};
    lines[38] = {quote:"The best revenge is massive success.",author:"Frank Sinatra"};
    lines[39] = {quote:"People often say that motivation doesn't last. Well, neither does bathing.  That's why we recommend it daily.",author:"Zig Ziglar"};
    lines[40] = {quote:"Inspiration exists, but it must find you working.",author:"Pablo Picasso"};
    lines[41] = {quote:"If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.",author:"Vincent Van Gogh"};
    lines[42] = {quote:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",author:"Aristotle"};
    lines[43] = {quote:"Obstacles are those frightful things you see when you take your eyes off the goal.",author:"Henry Ford"};
    lines[44] = {quote:"The only person you are destined to become is the person you decide to be.",author:"Ralph Waldo Emerson"};
    lines[45] = {quote:"Go confidently in the direction of your dreams.  Live the life you have imagined.",author:"Henry David Thoreau"};
    lines[46] = {quote:"The expert in anything was once a beginner",author:"Unknown"};
    lines[47] = {quote:"Comfort is enemy of achievement",author:"Unknown"};
    lines[48] = {quote:"Certain things catch your eye, but pursue only those that capture the heart.",author:"Ancient Indian Proverb"};
    lines[49] = {quote:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"};
    lines[50] = {quote:"Everything you've ever wanted is on the other side of fear.",author:"George Addair"};
    lines[51] = {quote:"The Worst mistake in life is not to make any",author:"Unknown"};
    lines[52] = {quote:"Once you choose hope, anything's possible.",author:"Christopher Reeve"};
    lines[53] = {quote:"Start where you are. Use what you have.  Do what you can.",author:"Arthur Ashe"};
    lines[54] = {quote:"Nobody who ever gave his best regretted it",author:"Unknown"};
    lines[55] = {quote:"Fall seven times and stand up eight.",author:"Japanese Proverb"};
    lines[56] = {quote:"When deeds speaks, words are nothing",author:"Pieere Joseph"};
    lines[57] = {quote:"Everything has beauty, but not everyone can see.",author:"Confucious"};
    lines[58] = {quote:"When I let go of what I am, I become what I might be.",author:"Lao Tzu"};
    lines[59] = {quote:"Happiness is not something ready-made.  It comes from your own actions.",author:"Dalai Lama"};
    lines[60] = {quote:"The only way of finding the limits of the possible is by going beyond them into the impossible.",author:"Arthur C. Clarke"};
    lines[61] = {quote:"If you are going through hell, keep going",author:"Winston Churchill"};
    lines[62] = {quote:"If the wind will not serve, take to the oars.",author:"Latin Proverb"};
    lines[63] = {quote:"You can't fall if you don't climb.  But there's no joy in living your whole life on the ground.",author:"Unknown"};
    lines[64] = {quote:"Whoever loves much, performs much, and can accomplish much, and what is done in love is done well.",author:"Vincent Van Gogh"};
    lines[65] = {quote:"Too many of us are not living our dreams because we are living our fears.",author:"Les Brown"};
    lines[66] = {quote:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",author:"Joshua J. Marine"};
    lines[67] = {quote:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"};
    lines[68] = {quote:"I didn't fail the test. I just found 100 ways to do it wrong.",author:"Benjamin Franklin"};
    lines[69] = {quote:"In order to succeed, your desire for success should be greater than your fear of failure.",author:"Bill Cosby"};
    lines[70] = {quote:"A person who never made a mistake never tried anything new.",author:"Albert Einstein"};
    lines[71] = {quote:"The person who says it cannot be done should not interrupt the person who is doing it.",author:"Chinese Proverb"};
    lines[72] = {quote:"There are no traffic jams along the extra mile.",author:"Roger Staubach"};
    lines[73] = {quote:"It is never too late to be what you might have been.",author:"George Eliot"};
    lines[74] = {quote:"You become what you believe.",author:"Oprah Winfrey"};
    lines[75] = {quote:"I would rather die of passion than of boredom.",author:"Vincent van Gogh"};
    lines[76] = {quote:"A truly rich man is one whose children run into his arms when his hands are empty.",author:"Unknown"};
    lines[77] = {quote:"It is always too early to quit",author:"Normal Vincent"};
    lines[78] = {quote:"Build your own dreams, or someone else will hire you to build theirs.",author:"Farrah Gray"};
    lines[79] = {quote:"Without deviation from the norm, progress is not possible.",author:"Frank Zappa"};
    lines[80] = {quote:"Education costs money.  But then so does ignorance.",author:"Sir Claus Moser"};
    lines[81] = {quote:"Remember that the happiest people are not those getting more, but those giving more.",author:"H. Jackson Brown, Jr."};
    lines[82] = {quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"};
    lines[83] = {quote:"Let the refining and improving of your own life keep you so busy that you have little time to criticize others.",author:"H. Jackson Brown, Jr."};
    lines[84] = {quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",author:"Dalai Lama"};
    lines[85] = {quote:"You can't use up creativity.  The more you use, the more you have.",author:"Maya Angelou"};
    lines[86] = {quote:"Our lives begin to end the day we become silent about things that matter.",author:"Martin Luther King Jr."};
    lines[87] = {quote:"Do what you can, where you are, with what you have.",author:"Teddy Roosevelt"};
    lines[88] = {quote:"The most common way people give up their power is by thinking they don't have any.",author:"Alice Walker"};
    lines[89] = {quote:"Dreaming, after all, is a form of planning.",author:"Gloria Steinem"};
    lines[90] = {quote:"It's your place in the world. Go on and do all you can with it, and make it the life you want to live.",author:"Mae Jemison"};
    lines[91] = {quote:"You may be disappointed if you fail, but you are doomed if you don't try.",author:"Beverly Sills"};
    lines[92] = {quote:"Remember no one can make you feel inferior without your consent.",author:"Eleanor Roosevelt"};
    lines[93] = {quote:"Life is what we make it, always has been, always will be.",author:"Grandma Moses"};
    lines[94] = {quote:"The question isn't who is going to let me; it's who is going to stop me.",author:"Ayn Rand"};
    lines[95] = {quote:"It's not the years in your life that count. It's the life in your years.",author:"Abraham Lincoln"};
    lines[96] = {quote:"Either write something worth reading or do something worth writing.",author:"Benjamin Franklin"};
    lines[97] = {quote:"Nothing is impossible, the word itself says, I'm possible!",author:"Audrey Hepburn"};
    lines[98] = {quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"};
    lines[99] = {quote:"If you can dream it, you can achieve it.",author:"Zig Ziglar"};
    lines[100] = {quote:"Just know, when you truly want success, you'll never give up on it. No matter how bad the situation may get.",author:"Unknown"};
    lines[101] = {quote:"Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.",author:"Les Brown"};
    lines[102] = {quote:"I don't regret the things I've done, I regret the things I didn't do when I had the chance.",author:"Unknown"};
    lines[103] = {quote:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",author:"Joshua J. Marine"};
    lines[104] = {quote:"Never Complain and Never Explain",author:"Benjamin disrail"};
    lines[105] = {quote:"The most effective way to do it, is to do it",author:"Amella Earhart"};
    lines[106] = {quote:"The Ultimate goal of ego is not to see something but to be something",author:"Unknown"};
    lines[107] = {quote:"You Never know what motivates you.",author:"Cicely Tyson"};
    lines[108] = {quote:"In order to succeed, your desire for success should be greater than your fear of failure.",author:"Bill Cosby"};
    lines[109] = {quote:"Go where you are celebrated  not tolerated. If they can't see the real value of you, it's time for a new start.",author:"Unknown"};
    lines[110] = {quote:"Don't be afraid to stand for what you believe in, even if that means standing alone..",author:"Unknown"};
    lines[111] = {quote:"The best revenge is massive success.",author:"Frank Sinatra"};
    lines[112] = {quote:"Forget all the reasons it won't work and believe the one reason that it will.",author:"Unknown"};
    lines[113] = {quote:"I am thankful for all of those who said NO to me. Its because of them I'm doing it myself.",author:"Albert Einstein"};
    lines[114] = {quote:"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",author:"Steve Jobs"};
    lines[115] = {quote:"Life is like photography. You need the negatives to develop.",author:"Unknown"};
    lines[116] = {quote:"Don't worry about failures, worry about the chances you miss when you don't even try.",author:"Jack Canfield"};
    lines[117] = {quote:"Build your own dreams, or someone else will hire you to build theirs.",author:"Farrah Gray"};
    lines[118] = {quote:"The only thing that stands between you and your dream is the will to try.",author:"Joel Brown"};
    lines[119] = {quote:"You can be who you want to be, as long as you want it bad enough",author:"Unknown"};
    lines[120] = {quote:"Every minute is only once.",author:"Paolo Coelho"};
    lines[121] = {quote:"Whoever saves one life, saves the world entire.",author:"Unknown"};
    lines[122] = {quote:"Discipline is remembering what you want.",author:"David Campbell"};
    lines[123] = {quote:"The life of great people can be summarized in ONE sentence.",author:"Unknown"};
    lines[124] = {quote:"Men talk of killing time, while time silently kills them.",author:"Dion Boucicault"};
    lines[125] = {quote:"Always bear in mind that your own resolution to succeed is more important than any one thing.",author:"Abraham Lincoln"};
    lines[126] = {quote:"Something leads to something, nothing leads to nothing.",author:"D.C."};
    lines[127] = {quote:"Genius is 1% inspiration and 99% perspiration" ,author:"Thomas Edison"};
    lines[128] = {quote:"As long as you're going to be thinking anyway, think big.",author:"Donald Trump"};
    lines[129] = {quote:"The only way to know how strong,is to keep testing your limits. ",author:"man of steel"};
    lines[130] = {quote:"One today is worth two tomorrows",author:"Benjamin Franklin"};
    lines[131] = {quote:"Success is when your signature becomes Autograph.",author:"Unknown"};
    lines[132] = {quote:"The best way to have a good idea is to have lots of ideas.",author:"Unknown"};
    lines[133] = {quote:"A diamond is coal stuck to its job.",author:"Suresh Lulla"};
    lines[134] = {quote:"Sometimes you win , sometimes you learn!",author:"Unknown"};
    lines[135] = {quote:"Sometimes you are the bird, and sometimes you are the statue.",author:"Unknown"}; 
    lines[136] = {quote:"We cannot change the cards we are dealt, just how we play the hand.",author:"Randy Pausch"};
    lines[137] = {quote:"No matter how bad things are, you can always make things worse.",author:"Randy Pausch"};
    lines[138] = {quote:"Luck is where preparation meets opportunity.",author:"Randy Pausch"};
    lines[139] = {quote:"It's not how hard you hit. It's how hard you get hit...and keep moving forward.",author:"Randy Pausch"};
    lines[140] = {quote:"Its important to have specific dreams. Dream Big. Dream without fear. ",author:"Randy Pausch"};
    lines[141] = {quote:"If you get rest, you get RUST",author:"Unknown"};
    lines[142] = {quote:"If you're not willing to risk it all. You don't want it bad enough",author:"Unknown"};
    lines[143] = {quote:"Nothing in this world that's worth having comes easy.",author:"Unknown"};
    lines[144] = {quote:"Dying is easy, loving is harder!",author:"Unknown"};
    lines[145] = {quote:"Failing to prepare is preparing to fail.",author:"Unknown"};
    lines[146] = {quote:"Strong people don't put others down, they lift them up.",author:"Unknown"};
    lines[147] = {quote:"If people are not laughing at your dreams, they are too small.",author:"Unknown"};
    lines[148] = {quote:"LIFE starts at the end of your Comfort Zone.",author:"Unknown"};
    lines[149] = {quote:"Your I can is more important than your I.Q.",author:"Unknown"};
    lines[150] = {quote:"Hard work beats Talent when Talent does not Work Hard.",author:"Unknown"};
    lines[151] = {quote:"A goal is a dream with a deadline",author:"Unknown"};
    lines[152] = {quote:"There's no points for second place",author:"Unknown"};
    lines[153] = {quote:"Deserve before you desire",author:"Unknown"};
    lines[154] = {quote:"You always can find a way to do it better.",author:"Unknown"};
    lines[155] = {quote:"Today I do what others won't, so that tomorrow I can accomplish what others don't.",author:"Jerry Rice"};
    lines[156] = {quote:"Learn to love what you have been told to fear.",author:"Unknown"};
    lines[157] = {quote:"It's not who you are underneath, what you do defines you.",author:"batman begins"};
    lines[158] = {quote:"One day's life of a lion is preferable to hundred years of a jackal.",author:"Tippu Sultan"};
    lines[159] = {quote:"I don't look to jump over 7-foot bars; I look around for one foot bars that I can step over.",author:"Warren Buffet"};
    lines[160] = {quote:"Pain is inevitable. Suffering is optional.",author:"Haruki Murakami"};
    lines[161] = {quote:"It's only after we've lost everything that we're free to do anything.",author:"Unknown"};
    lines[162] = {quote:"Dreams Become Reality, When intentions Become Actions!",author:"Unknown"};
    lines[163] = {quote:"Life is either a darling adventure, or nothing.",author:"Unknown"};

    return lines[index];   
}