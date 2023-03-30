/* ১.  লোকাল স্টোরেজ এ সেট করা ডাটা যে কোন components এর মাধ্যমে পাওয়া যায়  */

/* ২. লোকাল স্টোরেজ এ ডাটা সেট করার অনেকগুলো উদ্দেশ্যের মধ্যেই 
অন্যতম একটা হলো site reload দিলেও যেন ডাটা চলে না যায়  */


/* ৩. যখনই book now বাটন এ ক্লিক করি তখনই setWatchTime state টা চেঞ্জ হচ্ছে বারবার, 
এই setWatchTime state যখন চেঞ্জ হচ্ছে তখন WatchTime ভ্যালুটা sideCart এর ভিতরে যাচ্ছে।

তো ওই দিকে sideCart এ watchTime কে রিসিভ করা আছে আগে থেকেই, এই রিসিভ করা
 WatchTime কে যদি getWatchTimeFromStorage এর dependency তে সেট করি, 
 এরপর যখনই book now বাটন এ ক্লিক করব তখন সরাসরি সেটা পরিবর্তন হবে 
 এবং প্রদর্শন করবে।
  কোন reload দিয়ে localstorage থেকে
  get করা লাগতেছে না । book now ক্লিক করলে এই useEffect লোকাল স্টোরেজ
   থেকে update যে ভ্যালু আছে সেটাকে নিবে  এখন চাইলে সেটাকে নতুন কোন state এ 
    রেখে direct sideCart.jsx Er পরিবর্তনটাকে দেখানো যাবে 
 */