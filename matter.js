
    // while 1
    function kesmaQoldigi(a, b) {
      let i = 0;
      while (b <= a) {
        i++;
        a -= b;
      }
      console.log(a);
    }
    console.log(kesmaQoldigi(65, 3));
  
    // while 2
    function kesmalarSigimi(a, b) {
      let i = 0;
      while (b <= a) {
        i++;
        a -= b;
      }
  
      console.log(i);
    }
    console.log(kesmalarSigimi(74, 23));
  
    // while 3
    function qoldiqVaButunSon(n, k) {
      let i = 0;
      while (n <= k) {
        i++;
        k -= n;
      }
      console.log(` ${k} qoldiq`);
      console.log(`${i} butun`);
    }
    console.log(qoldiqVaButunSon(23, 322));
  
    // while 4
    function uchningDarajasi(n) {
        if (n<=0) {
            return "kiritilgan son 0 dan katta bo`lishi kerak";
        }
        let i = 1;
        while(i < n) {
            i *= 3;
        }
        if(i === n) {
            return "3 ning darajasi";
        } else {
            return "3 ning darajasi emas";

        }
    }
  // ustoz o`zi bergan masala
  {
    // 1 masala
    function fnc(numbers) {
      let musbat = 0,
        manfiy = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
          musbat += numbers[i];
        } else {
          manfiy += numbers[i];
        }
      }
      return {musbat, manfiy};
    }
    console.log(fnc([[3,4,5,-7,-3,-8]]));
  }
  {
    // 1 masla while
    function fnc(numbers) {
      let musbat = 0,
        manfiy = 0;
      let i = 0;
      while (i < numbers.length) {
        if (numbers[i] > 0) {
          musbat += numbers[i];
        } else {
          manfiy += numbers[i];
        }
  
        i++;
      }
      return {musbat, manfiy};
    }
    console.log(fnc([3,4,5,-7,-3,-8]));
  }
  
  {
    // 1 masla do while
    function fnc(numbers) {
      let musbat = 0,
        manfiy = 0;
      let i = 0;
      do {
        if (numbers[i] > 0) {
          musbat += numbers[i];
        } else {
          manfiy += numbers[i];
        }
        i++;
      } while (i < numbers.length);
      return {musbat,manfiy};
    }
    console.log(fnc([[3,4,5,-7,-3,-8]]));
  }
  {
    // 2 masala
    function fnc(numbers) {
      let sum = 0;
      for (let i = 0; i <= numbers; i += 2) {
        sum = sum + i;
      }
      return `juft sonlar yigindisi: ${sum}`;
    }
    console.log(fnc(90));
  }
  {
    function fnc(numbers) {
      let sum = 0;
      let i = 0;
      while (i <= numbers) {
        sum = sum + i;
        i += 2;
      }
      return `juft sonlar yigindisi: ${sum}`;
    }
    console.log(fnc(76));
  }
  {
    function fnc(numbers) {
      let sum = 0;
      let i = 0;
      do {
        sum = sum + i;
        i += 2;
      } while (i <= numbers);
      return `juft sonlar yigindisi: ${sum}`;
    }
    console.log(fnc(65));
  }
  
  {
    // 3 masala
    function fnc(a, b) {
      let sum = 0;
      for (let i = a; i <= b; i++) {
        sum = sum + i;
      }
      return sum;
    }
    console.log(fnc(23, 65));
  }
  {
    // 3 masal while
    function fnc(a, b) {
      let i = a;
      let sum = 0;
      while (i <= b) {
        sum = sum + i;
        i++;
      }
      return sum;
    }
    console.log(fnc(23, 65));
  }
  {
    // 3 masala do while
    function fnc(a, b) {
      let sum = 0;
      let i = a;
      do {
        sum = sum + i;
        i++;
      } while (i <= b);
      return sum;
    }
    console.log(fnc(23, 65));
  }
  
  {
    // 4 masala
    function fnc(n) {
      for (let i = n; i >= 0; i -= 2) {
        console.log(i);
      }
    }
    console.log(fnc(77));
  }
  {
    // 4 masalani while
    function fnc(n) {
      let i = n;
      while (i >= 0) {
        console.log(i);
        i -= 2;
      }
    }
    console.log(fnc(77));
  }
  {
    // 4 masala do while
    function fnc(n) {
      let i = n;
      do {
        console.log(i);
        i -= 2;
      } while (i >= 0);
    }
    console.log(fnc(77));
  }
