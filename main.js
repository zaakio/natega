

function changeLink() {
    var nationalIdInput = document.getElementById('nationalId');
    var loginLink = document.getElementById('loginLink');
    var signInDiv = document.querySelector('.sign-in');
    var body = document.querySelector('body');


        //vars
        var link = document.getElementById('lli');
        var stafo1 = document.createElement('div');
        var nomo = document.createElement('h1')
        var newDiv = document.createElement('div');
        var fasl = document.createElement('h1');
        var table = document.createElement('table');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var tr1 = document.createElement('tr');
        var tr2 = document.createElement('tr');
        var tr3 = document.createElement('tr');
        var tr4 = document.createElement('tr');
        var tr5 = document.createElement('tr');
        var tr6 = document.createElement('tr');
        var tr7 = document.createElement('tr');
        var tr8 = document.createElement('tr');
        var tr9 = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');
        var td10 = document.createElement('td');
        var td11 = document.createElement('td');
        var td12 = document.createElement('td');
        var td13 = document.createElement('td');
        var td14 = document.createElement('td');
        var td15 = document.createElement('td');
        var td16 = document.createElement('td');
        var td17 = document.createElement('td');
        var td18 = document.createElement('td');
        var td19 = document.createElement('td');
        var td20 = document.createElement('td');
        var td21 = document.createElement('td');
        var td22 = document.createElement('td');
        var td23 = document.createElement('td');
        var td24 = document.createElement('td');
        var newHeight = '720px';


    // ابراهيم جمعه محمد ربيع
    if (nationalIdInput.value === '45801') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'ابراهيم جمعه محمد ربيع';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '42.2 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '25 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '31 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '23 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    // براهيم سعيد سعيد على
    if (nationalIdInput.value === '45802') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'ابراهيم سعيد سعيد على  ';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '44.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '37.2 / 40';
        td6.textContent = ' جيد جدا';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '27 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '35 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '27 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    // احمد الرفاعى احمد الرفاعى
    if (nationalIdInput.value === '45803') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'احمد الرفاعى احمد';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '38.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '31.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '25 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '37 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '25 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.7 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '28.3 / 30';
        td21.textContent = 'ممتاز';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '29.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    //احمد حسين حسن احمد
    if (nationalIdInput.value === '45804') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد حسين حسن احمد';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '44.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '17.2 / 40';
        td6.textContent = 'ضعيف ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '21 / 30';
        td9.textContent = 'جيد جدا';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '29 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '21 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '25.2 / 30';
        td18.textContent = 'جيد جدا';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '25.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '26.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    // احمد خالد يونس على بدوى   
    if (nationalIdInput.value === '45805') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد خالد يونس على';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '45.5 / 50';
        td3.textContent = 'جيد ';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '29.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '28 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '35 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '27 / 30';
        td15.textContent = 'ممتاز ';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '22.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    // احمد شوقى امام شوقى   
    if (nationalIdInput.value === '45806') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد شوقى امام شوقى';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '42.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '25 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '31 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '23 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    //   احمد صابر امام
    if (nationalIdInput.value === '45807') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد صابر امام';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '42.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '25 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '31 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '23 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    //    احمد عادل زكى ابراهيم
    if (nationalIdInput.value === '45808') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد عادل زكى';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '42.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '25 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '31 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '23 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    // احمد عبد الغنى عبد الغنى   
    if (nationalIdInput.value === '45809') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد عبد الغنى';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '32.5 / 50';
        td3.textContent = 'جيد ';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '22 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '31 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '21 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '25.2 / 30';
        td18.textContent = 'جيد جدا';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    //    احمد عبد الفتاح عبد الوهاب
    if (nationalIdInput.value === '45810') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد عبد الفتاح';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '47.5 / 60';
        td3.textContent = 'ممتاز';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '37.2 / 40';
        td6.textContent = 'ممتاز ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '28 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '33 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '25.5 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '29.3 / 30';
        td21.textContent = 'ممتاز';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
    //    احمد محمد ابو اليزيد
    if (nationalIdInput.value === '45811') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد محمد ابواليزيد';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه /1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '42.5 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.2 / 40';
        td6.textContent = 'جيد ';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '25 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '31 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '23 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '28.2 / 30';
        td18.textContent = 'ممتاز';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '24.3 / 30';
        td21.textContent = 'جيد';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتاز';

        //--------------------------


    } 
     // احمد محمد صلاح 
     if (nationalIdInput.value === '45812') {

        signInDiv.innerHTML = '';

        //-----------------------------------
        link.href
        //.stafo1-style      
        stafo1.style.width = '100%'
        stafo1.style.height = '200px'
        stafo1.style.background = "#f1f3f400";
        //------------------------------------
        //.signInDiv-style
        signInDiv.style.height = newHeight;
        signInDiv.style.background = "#f1f3f400";
        signInDiv.style.margin = '0' 
        signInDiv.style.paddin = '0' 
        signInDiv.style.display = 'block' 
        signInDiv.style.justifyContent = '0' 
        signInDiv.style.alignItems = '0' 
        //------------------------------------
        //.nomo-style
        nomo.textContent = 'الاسم / احمد محمد صلاح';
        nomo.style.fontSize = '30px';
        //------------------------------------
        //.fasl-style
        fasl.textContent = 'اللجنه / 1';
        //----------------------------------
        //body
        body.style.background = '#ddd';


        //{appendChild}
        signInDiv.appendChild(stafo1)
        stafo1.appendChild(nomo);
        stafo1.appendChild(fasl);
        signInDiv.appendChild(table)
        //----------------------

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);

        //-----------------------

        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        //------------------------

        tr3.appendChild(td4);
        tr3.appendChild(td5);
        tr3.appendChild(td6);

        //-------------------------

        tr4.appendChild(td7);
        tr4.appendChild(td8);
        tr4.appendChild(td9);

        //-------------------------

        tr5.appendChild(td10);
        tr5.appendChild(td11);
        tr5.appendChild(td12);

        //------------------------

        tr6.appendChild(td13);
        tr6.appendChild(td14);
        tr6.appendChild(td15);

        //--------------------------

        tr7.appendChild(td16);
        tr7.appendChild(td17);
        tr7.appendChild(td18);

        //--------------------------

        tr8.appendChild(td19);
        tr8.appendChild(td20);
        tr8.appendChild(td21);

        //--------------------------

        tr9.appendChild(td22);
        tr9.appendChild(td23);
        tr9.appendChild(td24);

        //-------------------------
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        table.appendChild(tr5);
        table.appendChild(tr6);
        table.appendChild(tr7);
        table.appendChild(tr8);
        table.appendChild(tr9);


        ////////////////////////////////////

        //text-content//

        th1.textContent = 'الماده';
        th2.textContent = 'الدرجه';
        th3.textContent = 'التقدير';
        //----------------------------

        td1.textContent = 'اللغه العربيه';
        td2.textContent = '40.3 / 50';
        td3.textContent = 'جيد جدا';
        //---------------------------

        td4.textContent = 'اللغه الاجنبيه 1';
        td5.textContent = '27.5 / 40';
        td6.textContent = 'جيد جدا';
        //--------------------------

        td7.textContent = 'اللغه الاجنبيه 2';
        td8.textContent = '28 / 30';
        td9.textContent = 'ممتاز';
        //------------------------

        td10.textContent = 'رياضه بحته';
        td11.textContent = '32 / 40';
        td12.textContent = 'جيد جدا';
        //------------------------

        td13.textContent = 'رياضه تطبيقيه';
        td14.textContent = '20.2 / 30';
        td15.textContent = 'جيد جدا';
        //----------------------

        td16.textContent = 'الاحياء';
        td17.textContent = '25.6 / 30';
        td18.textContent = 'جيد  جدا';
        //--------------------------

        td19.textContent = 'الكيمياء';
        td20.textContent = '28.2 / 30';
        td21.textContent = 'ممتاز';
        //-------------------------

        td22.textContent = 'الفيزياء';
        td23.textContent = '27.5 / 30';
        td24.textContent = 'ممتااز';

        //--------------------------


    } 
 //  احمد محمد عبد العزيز
 if (nationalIdInput.value === '45813') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / احمد محمد عبدالعزيز';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
 // حسن محمد محمد الدسوقى    
 if (nationalIdInput.value === '45814') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / حسن محمد محمد الدسوقى';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//     زياد طارق عبد السلام
if (nationalIdInput.value === '45815') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / زياد طارق عبد السلام';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '28.3 / 30';
    td24.textContent = 'ممتاز';

    //--------------------------


} 
//     
if (nationalIdInput.value === '45816') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / زياد عماد الدين محمد' ;
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//   سليم نبيل محمد  
if (nationalIdInput.value === '45817') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'سليم نبيل محمد طه';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//     صلاح عزوز صلاح عبد العزيز
if (nationalIdInput.value === '45818') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / صلاح عزوز صلاح';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
// عبد الجواد محمود عبد الجواد    
if (nationalIdInput.value === '45819') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / عبد الجواد محمود عبد الجواد';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//     عبد الرحمن احمد نبيه السباعى
if (nationalIdInput.value === '45820') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / عبدالرحمن احمد نبيه';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 1';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//     عبدالرحمن انور عبد الطيف
if (nationalIdInput.value === '45821') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = ' الاسم / عبدالرحمن انور';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 2';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//      عبدالرحمن ربيع احمد
if (nationalIdInput.value === '45822') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / عبدالرحمن ربيع احمد';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 2';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '40 / 50';
    td3.textContent = 'جيد جدا';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '27.5 / 40';
    td6.textContent = 'جيد ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '22 / 40';
    td12.textContent = 'جيد ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '23 / 30';
    td15.textContent = 'جيد جدا';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '26.2 / 30 ';
    td18.textContent = 'جيد جدا';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24.3 / 30';
    td24.textContent = 'جيد';

    //--------------------------


} 
//       me
if (nationalIdInput.value === '45835') {

    signInDiv.innerHTML = '';

    //-----------------------------------
    link.href
    //.stafo1-style      
    stafo1.style.width = '100%'
    stafo1.style.height = '200px'
    stafo1.style.background = "#f1f3f400";
    //------------------------------------
    //.signInDiv-style
    signInDiv.style.height = newHeight;
    signInDiv.style.background = "#f1f3f400";
    signInDiv.style.margin = '0' 
    signInDiv.style.paddin = '0' 
    signInDiv.style.display = 'block' 
    signInDiv.style.justifyContent = '0' 
    signInDiv.style.alignItems = '0' 
    //------------------------------------
    //.nomo-style
    nomo.textContent = 'الاسم / محمد السيد زكى عطيه';
    nomo.style.fontSize = '30px';
    //------------------------------------
    //.fasl-style
    fasl.textContent = 'اللجنه / 2';
    //----------------------------------
    //body
    body.style.background = '#ddd';


    //{appendChild}
    signInDiv.appendChild(stafo1)
    stafo1.appendChild(nomo);
    stafo1.appendChild(fasl);
    signInDiv.appendChild(table)
    //----------------------

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

    //-----------------------

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    //------------------------

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    //-------------------------

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

    //-------------------------

    tr5.appendChild(td10);
    tr5.appendChild(td11);
    tr5.appendChild(td12);

    //------------------------

    tr6.appendChild(td13);
    tr6.appendChild(td14);
    tr6.appendChild(td15);

    //--------------------------

    tr7.appendChild(td16);
    tr7.appendChild(td17);
    tr7.appendChild(td18);

    //--------------------------

    tr8.appendChild(td19);
    tr8.appendChild(td20);
    tr8.appendChild(td21);

    //--------------------------

    tr9.appendChild(td22);
    tr9.appendChild(td23);
    tr9.appendChild(td24);

    //-------------------------
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);
    table.appendChild(tr9);


    ////////////////////////////////////

    //text-content//

    th1.textContent = 'الماده';
    th2.textContent = 'الدرجه';
    th3.textContent = 'التقدير';
    //----------------------------

    td1.textContent = 'اللغه العربيه';
    td2.textContent = '42 / 50';
    td3.textContent = 'ممتاز';
    //---------------------------

    td4.textContent = 'اللغه الاجنبيه 1';
    td5.textContent = '32.5 / 40';
    td6.textContent = 'جيد جدا ';
    //--------------------------

    td7.textContent = 'اللغه الاجنبيه 2';
    td8.textContent = '29.5 / 30';
    td9.textContent = 'ممتاز';
    //------------------------

    td10.textContent = 'رياضه بحته';
    td11.textContent = '38 / 40';
    td12.textContent = 'ممتاز ';
    //------------------------

    td13.textContent = 'رياضه تطبيقيه';
    td14.textContent = '27.5 / 30';
    td15.textContent = 'ممتاز ';
    //----------------------

    td16.textContent = 'الاحياء';
    td17.textContent = '27.6 / 30 ';
    td18.textContent = 'ممتاز ';
    //--------------------------

    td19.textContent = 'الكيمياء';
    td20.textContent = '28.2 / 30';
    td21.textContent = 'ممتاز';
    //-------------------------

    td22.textContent = 'الفيزياء';
    td23.textContent = '24 / 30';
    td24.textContent = 'ممتاز';

    //--------------------------


} 

}




