//horoscopes//

var signs = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ];

  var dates = [
    "December 23 – January 20",
    "January 21 – February 19",
    "February 20 – March 20",
    "March 21 – April 20",
    "April 21 – May 21",
    "May 22 – June 21",
    "June 22 – July 22",
    "July 23 – August 21",
    "August 22 – September 22",
    "September 24 – October 23",
    "October 24 – November 22",
    "November 23 – December 22",
  ];

  var traits = [
    "Practical, Ambitious, Disciplined, Patient, Humorous",
    "Friendly, Honest, Loyal, Original, Inventive, Independent",
    "Imaginative, Compassionate, Kind, Selfless, Intuitive",
    "Adventurous, Energetic, Courageous, Dynamic, Confident",
    "Patient, Reliable, Determined, Warmhearted, Loving",
    "Adaptable, Communicative, Witty, Intellectual, Youthful",
    "Loving, Intuitive, Cautious, Protective, Imaginative",
    "Generous, Warmhearted, Creative, Faithful, Open-minded",
    "Modest, Meticulous, Practical, Reliable, Intelligent",
    "Diplomatic, Romantic, Sociable, Idealistic, Charming",
    "Determined, Intuitive, Powerful, Exciting, Magnetic",
    "Optimistic, Jovial, Honest, Intellectual, Freedom-loving",
  ];

  var symbol = [
    "https://cdn-icons-png.flaticon.com/512/8347/8347817.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347819.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347821.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347797.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347800.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347803.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347806.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347808.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347809.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347812.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347814.png",
    "https://cdn-icons-png.flaticon.com/512/8347/8347816.png",
  ];

  var elements = [
    "Air",
    "Water",
    "Earth",
    "Fire",
  ];


var horoscopes = [
    ["Today, your adventurous spirit takes center stage. You're feeling confident and ready to conquer new challenges. Channel that energy into your career, and you'll see impressive results. However, don't forget to balance work and play to maintain your mental and physical well-being."],
    ["This is a time for self-reflection and personal growth. Reevaluate your goals and make necessary adjustments. Be patient with yourself and others, as your stubborn nature may cause friction. In matters of the heart, be open to compromise and communication for a harmonious relationship."],
    ["Your charm is on fire today, making it a fantastic time for socializing and networking. Use your communication skills to advance in your career, and don't shy away from sharing your creative ideas. In love, embrace your spontaneous side for memorable adventures."],
	  ["Your nurturing nature is in high demand today. Focus on strengthening your bonds with family and loved ones. At work, your intuitive skills shine, helping you make important decisions. Embrace your emotions and let them guide you toward personal growth."]
	  ["This is your time to shine. Your charisma is off the charts, making you a magnet for success in both your career and love life. Confidence is your superpower, so use it wisely. Just remember to stay humble and show appreciation for those who support you."],
	  ["Your attention to detail is a valuable asset this month. Use your analytical skills to tackle complex projects at work. In your personal life, seek balance and relaxation to prevent burnout. Love may surprise you when you least expect it, so stay open to new connections."],
    ["Harmony is your goal this month. Focus on creating a balanced work-life routine, as overcommitting can lead to stress. In relationships, communication is key, so express your feelings openly. Don't be afraid to make compromises to maintain peace and happiness."],
    ["Your intensity and determination are at their peak. Use this energy to tackle ambitious projects and overcome obstacles at work. In love, your magnetic allure is hard to resist, but be careful not to let jealousy and possessiveness overshadow your passion."],
    ["Your adventurous spirit is calling. Plan that long-awaited trip or embark on a new educational journey. At work, your optimism and enthusiasm can lead to new opportunities. In love, be honest and upfront about your intentions to avoid misunderstandings."],
    ["Your practicality is a valuable asset this month. Focus on your career goals, and don't be afraid to take calculated risks. In your personal life, nurture your relationships by showing your softer side. Love may come in the form of a meaningful commitment."],
    ["Your innovative ideas are in high demand at work. Embrace your uniqueness and share your vision with confidence. In your personal life, explore new hobbies and interests to keep life exciting. Be open to unconventional relationships that challenge the norm."],
    ["Your compassionate nature is your strength this month. Focus on helping others and giving back to your community. At work, trust your intuition to guide you in making important decisions. In love, your sensitivity and empathy make you an ideal partner for those seeking emotional connection."],
    ["This is your time to shine! Opportunities are on the horizon, so grab them with both hands. Your determination and energy will pave the way for success. Embrace change. It might be uncomfortable at first, but it will lead to personal growth. Trust your instincts and adapt with grace."],
    ["Communication is your superpower this month. Share your ideas and thoughts with confidence. Your words have the potential to inspire and influence. Your intuition is your guiding light. Trust your inner wisdom in making decisions. Nurture your relationships and let your emotions flow freely."],
    ["Your creative spirit is soaring. Use your talents to express yourself and make a lasting impact. The world is your stage; step into the spotlight."],
    ["Focus on self-care. Recharge your energy and prioritize your well-being. When you're at your best, you can conquer any challenge. Seek balance in all aspects of your life. Harmonize your relationships and find equilibrium in your daily routine. Peace and happiness await."],
    ["Embrace transformation. Let go of the old to make room for the new. Your resilience will see you through any transition. Adventure beckons. Explore new horizons and seek out thrilling experiences. Your optimism and enthusiasm will lead the way."],
    ["Your hard work is paying off. Stay committed to your goals, and success will be within your grasp. Your determination is unwavering."],
    ["Embrace your uniqueness. Your innovative ideas can spark change. Trust your instincts and be a trailblazer in your endeavors. Dive into your dreams. Your imagination knows no bounds. Trust your intuition and let it guide you toward your deepest desires."],
    ["Life has thrown you many challenges, but your determination and resilience have only grown stronger with age. This month, embrace your adventurous spirit and pursue new experiences. Travel, learn, and enjoy the world around you. Your wisdom and zest for life will inspire those around you."],
    ["You've built a solid foundation over the years, and it's time to reap the rewards. Financial stability and comfort are on the horizon. Take time to enjoy the finer things in life and pamper yourself. Don't forget to share your wealth of knowledge and resources with your loved ones."],
    ["Your curiosity and social charm continue to shine. This month, reconnect with old friends and make new ones. Your communication skills are a valuable asset, so use them to bridge generational gaps and foster meaningful connections. Your wisdom is a gift to those who seek it."],
    ["Family has always been at the center of your life, and this week is no exception. Reconnect with your loved ones and create lasting memories. Your nurturing nature is a source of comfort for those around you. Don't be afraid to lean on your support system when needed."],
    ["Your natural leadership abilities continue to shine, and you're never too old to take charge. Share your expertise and mentor others. Your wisdom and charisma make you a guiding light for those seeking direction. Embrace your role as a source of inspiration."],
    ["Your attention to detail and practicality have served you well over the years. This month, focus on self-care and health. Small lifestyle changes can lead to big improvements. Organize your life and find joy in simplicity. Your well-being is your greatest treasure."],
    ["Balance has always been important to you, and now is the time to find it in your own life. Seek harmony in your relationships and surroundings. Your wisdom and diplomacy can resolve conflicts and create peace. Embrace your role as a mediator and peacemaker."],
    ["Your intensity and determination remain unwavering. Use your passion to pursue personal goals and hobbies. Embrace transformation and let go of any past burdens. Your resilience is your strength, and it's never too late to reinvent yourself."],
    ["Your adventurous spirit continues to burn bright. Travel, explore, and broaden your horizons. Seek new knowledge and share your experiences with others. Your enthusiasm for life is contagious, and it's never too late to embark on a new adventure."],
    ["Your disciplined and responsible nature has brought you success. This month, take time to enjoy the fruits of your labor. Spend quality time with family and loved ones. Your legacy is built on the love and relationships you've nurtured over the years."],
    ["Your innovative thinking and humanitarian spirit are as strong as ever. Use your unique perspective to create positive change in your community and beyond. Your wisdom and forward-thinking ideas can inspire the next generation."],
    ["Your intuition and compassion continue to guide you. This month, focus on your spiritual well-being and inner peace. Share your wisdom through storytelling and art. Your creativity has the power to heal and inspire others."],
    ["This month, your energy and determination are at their peak. You're on fire, and nothing can stand in your way. Use this burst of enthusiasm to tackle important projects and make significant strides toward your goals. Just remember to channel your passion wisely, and you'll conquer whatever comes your way."],
    ["It's time to slow down and savor life's simple pleasures. Take a break from your usual routine and find comfort in relaxation. Spend time with loved ones, enjoy good food, and indulge in some self-care. By recharging your batteries, you'll be better equipped to face any challenges that lie ahead."],
    ["Your curiosity knows no bounds this month. Embrace your inquisitive nature and explore new interests. Whether it's picking up a new hobby, taking a short trip, or diving into a new book, you'll find inspiration and intellectual satisfaction in the pursuit of knowledge."],
    ["This week is all about emotional healing and nurturing your inner self. Take time to address any unresolved feelings or conflicts. Seek support from trusted friends or a therapist. By tending to your emotional well-being, you'll pave the way for greater happiness and stability in your life."],
    ["Your natural charisma is on full display this week. Use your magnetic personality to your advantage in social and professional settings. You have the power to captivate others and make a lasting impression. Just be sure to balance your confidence with humility to maintain strong relationships."],
    ["It's time to get organized and set your life in order. Tackle those lingering tasks and projects that you've been putting off. Your attention to detail and practicality will help you make significant progress and bring a sense of clarity to your world."],
    ["Balance and harmony are your guiding principles today. Focus on finding equilibrium in your relationships and personal life. Make decisions that promote fairness and cooperation, and you'll strengthen your connections with others while achieving a sense of inner peace."],
    ["Your intensity is your greatest strength, and this month, you're determined to make a transformative change. Dive deep into your passions and commit to personal growth. Embrace your power and use it wisely to shape your destiny."],
    ["Adventure and exploration beckon you today. Whether it's a physical journey or a mental quest, embrace opportunities to expand your horizons. Your optimism and enthusiasm will lead you to exciting discoveries and new horizons."],
    ["This week, your dedication to your goals is unwavering. Focus on your career and long-term ambitions. With your determination and hard work, you're poised for success. Just remember to find moments of relaxation to avoid burnout."],
    ["Your inventive and forward-thinking mind is your greatest asset this week. Embrace your unique ideas and perspectives. Share them with others, and you may inspire positive change in your community or workplace."],
    ["Your intuition and creativity are in the spotlight this month. Dive into artistic pursuits or explore your spiritual side. Trust your inner guidance to navigate life's twists and turns. Your imagination will lead you to beautiful and meaningful experiences."],
    ["Today, your fiery spirit is shining brighter than ever. You'll be feeling confident and ready to tackle any challenges that come your way. Embrace your natural leadership skills, but remember to listen to others too. Love is in the air, and you might find a new spark or reignite an old flame. Keep the passion alive!"],
    ["This week brings a focus on your finances. It's an excellent time to reevaluate your budget and set some financial goals. Don't be afraid to invest in yourself and your future. On the relationship front, be open to compromise and communication to strengthen your bonds."],
    ["Today, your charm and wit are irresistible. Use your communication skills to your advantage, both personally and professionally. However, avoid spreading yourself too thin. Make time for self-care and reconnecting with your inner self to maintain balance."],
    ["This month encourages you to step out of your comfort zone. New opportunities are on the horizon, so embrace change with an open heart. In matters of the heart, express your feelings honestly and let your vulnerability shine. Your emotions are your strength."],
    ["You're radiating confidence and creativity this month. Your artistic side is blossoming, so don't be shy about showcasing your talents. In relationships, focus on quality time with loved ones and prioritize self-love. You're the star of your own show, so shine brightly!"],
    ["This is your time to shine. Set clear goals and take steps toward achieving them. In love, be open to new connections and let your practicality guide your choices."],
    ["Balance is your keyword this month. Seek harmony in all aspects of your life, from your relationships to your daily routines. Don't be afraid to ask for what you need. Your social skills are a gift, so use them to build meaningful connections."],
    ["This month brings intensity and transformation. Dive deep into your passions and let go of what no longer serves you. Trust your intuition in matters of the heart and let vulnerability lead to profound connections. Embrace the changes, as they will lead to growth."],
    ["Your adventurous spirit is calling you this month. Seek out new experiences, travel if possible, and expand your horizons. In relationships, be honest about your desires and listen to your partner's needs. Your optimism is contagious, so share it with the world."],
    ["The planets encourages you to focus on your career and long-term goals. Your determination and discipline will help you achieve success. Don't neglect your personal life; balance is key. Nurture your relationships and remember to take breaks for self-care."],
    ["Your unique perspective is your strength this month. Embrace your individuality and don't be afraid to stand out. Your humanitarian side is also highlighted, so consider getting involved in a cause you're passionate about. In love, be open to unconventional connections."],
    ["This month brings a focus on your inner world. Take time for introspection and self-discovery. Trust your intuition and let your dreams guide you. In relationships, be compassionate and understanding. Your sensitivity is a gift that can create deep connections."],
	];

      function updateCapricorn() {
        document.getElementById("signName").innerHTML = signs[0];
        document.getElementById("signTrait").innerHTML = traits[0];
        document.getElementById("signDate").innerHTML = dates[0];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[0]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateAquarius() {
        document.getElementById("signName").innerHTML = signs[1];
        document.getElementById("signTrait").innerHTML = traits[1];
        document.getElementById("signDate").innerHTML = dates[1];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[1]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updatePisces() {
        document.getElementById("signName").innerHTML = signs[2];
        document.getElementById("signTrait").innerHTML = traits[2];
        document.getElementById("signDate").innerHTML = dates[2];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[2]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateAries() {
        document.getElementById("signName").innerHTML = signs[3];
        document.getElementById("signTrait").innerHTML = traits[3];
        document.getElementById("signDate").innerHTML = dates[3];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[3]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateTaurus() {
        document.getElementById("signName").innerHTML = signs[4];
        document.getElementById("signTrait").innerHTML = traits[4];
        document.getElementById("signDate").innerHTML = dates[4];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[4]);
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateGemini() {
        document.getElementById("signName").innerHTML = signs[5];
        document.getElementById("signTrait").innerHTML = traits[5];
        document.getElementById("signDate").innerHTML = dates[5];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[5]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateCancer() {
        document.getElementById("signName").innerHTML = signs[6];
        document.getElementById("signTrait").innerHTML = traits[6];
        document.getElementById("signDate").innerHTML = dates[6];
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[6]);
        imageElement.style.visibility = "visible";
      }

      function updateLeo() {
        document.getElementById("signName").innerHTML = signs[7];
        document.getElementById("signTrait").innerHTML = traits[7];
        document.getElementById("signDate").innerHTML = dates[7];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[7]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateVirgo() {
        document.getElementById("signName").innerHTML = signs[8];
        document.getElementById("signTrait").innerHTML = traits[8];
        document.getElementById("signDate").innerHTML = dates[8];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[8]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateLibra() {
        document.getElementById("signName").innerHTML = signs[9];
        document.getElementById("signTrait").innerHTML = traits[9];
        document.getElementById("signDate").innerHTML = dates[9];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[9]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateScorpio() {
        document.getElementById("signName").innerHTML = signs[10];
        document.getElementById("signTrait").innerHTML = traits[10];
        document.getElementById("signDate").innerHTML = dates[10];
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[10]);
        imageElement.style.visibility = "visible";
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
      }

      function updateSagittarius() {
        document.getElementById("signName").innerHTML = signs[11];
        document.getElementById("signTrait").innerHTML = traits[11];
        document.getElementById("signDate").innerHTML = dates[11];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
        var randomIndex = Math.floor(Math.random() * horoscopes.length);
        var randomHoroscope = horoscopes [randomIndex];
        document.getElementById("horoscope").innerHTML = randomHoroscope;
        var imageElement = document.getElementById("signSym");
        imageElement.setAttribute("src", symbol[11]);
        imageElement.style.visibility = "visible";
      }
    