let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let show = document.querySelector('.showing');


let spcard1 = document.getElementById('spcard-1');
let spcard2 = document.getElementById('spcard-2');
let spcard3 = document.getElementById('spcard-3');
let spcard4 = document.getElementById('spcard-4');



btn1.addEventListener('click', e => {
    e.preventDefault();
    e.target.className = 'btn btn-light text-secondary active order-1'
    btn2.className = 'btn btn-light text-secondary order-2'
    btn3.className = 'btn btn-light text-secondary order-3'
    btn4.className = 'btn btn-light text-secondary order-4'
    show.innerHTML = `
        <div class="comment-title text-right mt-5">
                    <p class="text-secondary">چه زمانی یک کسب و کار می‌تواند به موفقیت‌های بزرگ دست پیدا کند؟ وقتی
                        که ستون‌های کار خود را
                        درست بنا کرده باشد. اگر با این جمله موافق هستید، پس فقط یک حرف دیگر باقی می‌ماند: <span
                            class="text-dark font-weight-bolder bg-warning">
                            تحقیق
                            کلمات کلیدی، یک ستون اصلی برای هر کسب و کار آنلاینی است.
                        </span> در این دوره، شما یاد می‌گیرید که
                        چطور این تحقیق را به صورت اصولی انجام دهید و به کمک آن، نتایجی فوق‌العاده بگیرید.

                    </p>

                    <br>
                    <br>
                    <h4>این دوره برای چه کسانی مناسب است؟</h4>
                    <p class="text-secondary">تحقیق کلمات کلیدی می‌تواند یک تاثیر عمیق و ماندگار روی رشد هر کسب و
                        کاری داشته باشد. البته به شرط آنکه درست انجام شود و از اطلاعات آن، درست استفاده شود. هر کسی
                        می‌تواند از این تحقیق استفاده کند تا تصمیم‌های بهتری در کار خود بگیرد و در نتیجه، تاثیرگذاری
                        بیشتری داشته باشد.</p>

                    <p>در واقع، اگر بخواهیم ساده بگوییم: <span class="font-weight-bolder"> چه شما یک کسب و کار
                            اینترنتی دارید و چه یک متخصص بازاریابی دیجیتال هستید (یا می‌خواهید باشید)، تحقیق کلمات
                            کلیدی جزو واجبات کار شماس</span> .</p>
                    <br>
                    <br>
                    <h4>تحقیق کلمات کلیدی چیست؟</h4>
                    <p class="text-secondary">اگر بخواهیم ساده توضیح بدهیم، به فرآیند بدست آوردن کلمات کلیدی مرتبط
                        با یک کسب و کار و آمار مرتبط با آنها، اصطلاحاً تحقیق کلمات کلیدی می‌گویند.</p>

                    <p class="text-secondary">حالا حتماً می‌پرسید که کلمات کلیدی چه هستند. کلمات کلیدی آن کلمات و
                        عبارت‌هایی هستند که کاربران برای پیدا کردن یک کسب و کار (در گوگل) جستجو می‌کنند. کلماتی که
                        برای یک کسب و کار، اهمیّتی حیاتی دارند.
                    </p>
                </div>
                <div class="comment-card">
                    <div style="width: 64%;" class="card mx-auto mt-5 text-center">
                        <div class="card-body">
                            <img src="assets/img/content-image.jpg" alt="" class="img-fluid">
                            <p class="card-text">یک نمونه ساده از تحقیق کلمات کلیدی و اطلاعات مرتبط با آن</p>
                        </div>
                    </div>
                </div>
                 <div class="commnets-comment text-right mt-5">
                    <div class="commnets-comment text-right mt-5">
                    <h4>نظرات دوره</h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card mt-4">
                                <div class="card-body">
                                    <div class="card-title d-flex">
                                        <span style="font-size: 47px; line-height: 1.3;"><i
                                                class="fa fa-user-circle-o text-secondary"></i></span>
                                        <h5 class="pr-3 mt-3">فاطمه محمدی</h5>
                                        <span class="mr-5 mt-3 mr-auto">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </span>

                                    </div>
                                    <p class="mt-3 text-secondary">
                                        من تهیه این دوره رو به تمام کسانی که به تولید محتوا علاقمند هستند یا
                                        وب‌سایت
                                        دارند و قصد دارن که رتبه خوبی توی موتورهای جستجو بگیرند، توصیه میکنم.
                                        عالی
                                        بود! واقعاً من که لذت بردم، یک کلاس کامل و کاربردی. ارزش چند بار دیدن رو
                                        داره. ممنون از نوین و استاد دوره، جناب رهبری بابت کیفیت آموزش‌ها.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card mt-4">
                                <div class="card-body">
                                    <div class="card-title d-flex">
                                        <span style="font-size: 47px; line-height: 1.3;"><i
                                                class="fa fa-user-circle-o text-secondary"></i></span>
                                        <h5 class="pr-3 mt-3">فاطمه محمدی</h5>
                                        <span class="mr-5 mt-3 mr-auto">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </span>

                                    </div>
                                    <p class="mt-3 text-secondary">
                                        من تهیه این دوره رو به تمام کسانی که به تولید محتوا علاقمند هستند یا
                                        وب‌سایت
                                        دارند و قصد دارن که رتبه خوبی توی موتورهای جستجو بگیرند، توصیه میکنم.
                                        عالی
                                        بود! واقعاً من که لذت بردم، یک کلاس کامل و کاربردی. ارزش چند بار دیدن رو
                                        داره. ممنون از نوین و استاد دوره، جناب رهبری بابت کیفیت آموزش‌ها.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card mt-4">
                                <div class="card-body">
                                    <div class="card-title d-flex">
                                        <span style="font-size: 47px; line-height: 1.3;"><i
                                                class="fa fa-user-circle-o text-secondary"></i></span>
                                        <h5 class="pr-3 mt-3">فاطمه محمدی</h5>
                                        <span class="mr-5 mt-3 mr-auto">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </span>

                                    </div>
                                    <p class="mt-3 text-secondary">
                                        من تهیه این دوره رو به تمام کسانی که به تولید محتوا علاقمند هستند یا
                                        وب‌سایت
                                        دارند و قصد دارن که رتبه خوبی توی موتورهای جستجو بگیرند، توصیه میکنم.
                                        عالی
                                        بود! واقعاً من که لذت بردم، یک کلاس کامل و کاربردی. ارزش چند بار دیدن رو
                                        داره. ممنون از نوین و استاد دوره، جناب رهبری بابت کیفیت آموزش‌ها.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>`

});

btn2.addEventListener('click', e => {
    e.preventDefault();
    e.target.className = 'btn btn-light text-secondary active order-2';
    btn1.className = 'btn btn-light text-secondary order-1'
    btn3.className = 'btn btn-light text-secondary order-3'
    btn4.className = 'btn btn-light text-secondary order-4'
    show.innerHTML = `   <div class="comment-post mt-5">
<a href="#" class="text-decoration-none text-right" data-toggle="collapse" data-target="#collapse-1">
    <div  class="card mt-4">
        <div class="card-header d-flex">
            <span class="pl-3 text-dark"><i class="fa fa-plus"></i></span>

            <p class="text-secondary">
                مقدمه - آشنایی با تحقیق کلمات کلیدی

            </p>
            <span class="mr-auto text-secondary">30 دقیقه</span>
        </div>
         <div class="collapse" id="collapse-1">
            <div class="card-body">
                <p class="text-secondary">برای شروع باید بفهمیم که تحقیق کلمات کلیدی چیست و اصلاً چرا باید آن را جدی
                    گرفت. در انتهای این بخش به خوبی می‌دانید که چرا باید این دوره را جدی بگیرید.</p>

            </div>
            <div class="card-footer">
                <h6 class="text-dark">کلمۀ کلیدی چیست؟ تحقیق کلمات کلیدی چیست؟ چرا باید این تحقیق را جدی بگیریم؟</h6>
            </div>
         </div>
    </div>
</a>
<a href="#" class="text-decoration-none text-right" data-toggle="collapse" data-target="#collapse-2">
    <div class="card mt-4">
        <div class="card-header d-flex">
            <span class="pl-3 text-dark"><i class="fa fa-plus"></i></span>

            <p class="text-secondary">
                مقدمه - آشنایی با تحقیق کلمات کلیدی

            </p>
            <span class="mr-auto text-secondary">30 دقیقه</span>
        </div>
         <div class="collapse" id="collapse-2">
            <div class="card-body">
                <p class="text-secondary">برای شروع باید بفهمیم که تحقیق کلمات کلیدی چیست و اصلاً چرا باید آن را جدی
                    گرفت. در انتهای این بخش به خوبی می‌دانید که چرا باید این دوره را جدی بگیرید.</p>

            </div>
            <div class="card-footer">
                <h6 class="text-dark">کلمۀ کلیدی چیست؟ تحقیق کلمات کلیدی چیست؟ چرا باید این تحقیق را جدی بگیریم؟</h6>
            </div>
         </div>
    </div>
</a>
<a href="#" class="text-decoration-none text-right" data-toggle="collapse" data-target="#collapse-3">
    <div  class="card mt-4">
        <div  class="card-header d-flex">
            <span class="pl-3 text-dark"><i class="fa fa-plus"></i></span>

            <p class="text-secondary">
                مقدمه - آشنایی با تحقیق کلمات کلیدی

            </p>
            <span class="mr-auto text-secondary">30 دقیقه</span>
        </div>
         <div class="collapse" id="collapse-3">
            <div class="card-body">
                <p class="text-secondary">برای شروع باید بفهمیم که تحقیق کلمات کلیدی چیست و اصلاً چرا باید آن را جدی
                    گرفت. در انتهای این بخش به خوبی می‌دانید که چرا باید این دوره را جدی بگیرید.</p>

            </div>
            <div class="card-footer">
                <h6 class="text-dark">کلمۀ کلیدی چیست؟ تحقیق کلمات کلیدی چیست؟ چرا باید این تحقیق را جدی بگیریم؟</h6>
            </div>
         </div>
    </div>
</a>
<a href="#" class="text-decoration-none text-right" data-toggle="collapse" data-target="#collapse-4">
    <div class="card mt-4">
        <div class="card-header d-flex">
            <span class="pl-3 text-dark"><i class="fa fa-plus"></i></span>

            <p class="text-secondary">
                مقدمه - آشنایی با تحقیق کلمات کلیدی

            </p>
            <span class="mr-auto text-secondary">30 دقیقه</span>
        </div>
         <div class="collapse" id="collapse-4">
            <div class="card-body">
                <p class="text-secondary">برای شروع باید بفهمیم که تحقیق کلمات کلیدی چیست و اصلاً چرا باید آن را جدی
                    گرفت. در انتهای این بخش به خوبی می‌دانید که چرا باید این دوره را جدی بگیرید.</p>

            </div>
            <div class="card-footer">
                <h6 class="text-dark">کلمۀ کلیدی چیست؟ تحقیق کلمات کلیدی چیست؟ چرا باید این تحقیق را جدی بگیریم؟</h6>
            </div>
         </div>
    </div>
</a>
</div>`

});
btn3.addEventListener('click', e => {
    e.preventDefault();
    e.target.className = 'btn btn-light text-secondary order-3 active'
    btn1.className = 'btn btn-light text-secondary order-1'
    btn2.className = 'btn btn-light text-secondary order-2'
    btn4.className = 'btn btn-light text-secondary order-4'
    show.innerHTML = `
        <div class="comment-progress mt-5 text-center">
                <div class="row">
                    <div class="col-lg-3 mt-3 mb-4">
                        <h2 class="font-weight-bolder">4.55</h2>
                        <span>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                        </span>
                        <p class="text-secondary">
                            میانگین امتیاز (بر اساس 11 نظر)
                        </p>
                    </div>
                    <div class="col-lg-9">
                        <div class="main-progress d-flex mb-4">
                            <div class="progress" style="height: 1.2vh;width: 65%;">
                                <div class="progress-bar bg-warning w-25"role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="mr-5" style="margin-top: -10px;">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                            </span>
                            <span  class="text-secondary mr-3" style="margin-top: -9px;">7 (64%)</span>
                        </div>
                        <div class="main-progress d-flex mb-4">
                            <div class="progress" style="height: 1.2vh;width: 65%;">
                                <div class="progress-bar bg-warning w-25"role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="mr-5" style="margin-top: -10px;">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                            </span>
                            <span  class="text-secondary mr-3" style="margin-top: -9px;">7 (64%)</span>
                        </div>
                        <div class="main-progress d-flex mb-4">
                            <div class="progress" style="height: 1.2vh;width: 65%;">
                                <div class="progress-bar bg-warning w-25"role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="mr-5" style="margin-top: -10px;">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                            </span>
                            <span  class="text-secondary mr-3" style="margin-top: -9px;">7 (64%)</span>
                        </div>
                        <div class="main-progress d-flex mb-4">
                            <div class="progress" style="height: 1.2vh;width: 65%;">
                                <div class="progress-bar bg-warning w-25"role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="mr-5" style="margin-top: -10px;">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                            </span>
                            <span  class="text-secondary mr-3" style="margin-top: -9px;">7 (64%)</span>
                        </div>
                        <div class="main-progress d-flex mb-4">
                            <div class="progress" style="height: 1.2vh;width: 65%;">
                                <div class="progress-bar bg-warning w-25"role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span class="mr-5" style="margin-top: -10px;">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                            </span>
                            <span  class="text-secondary mr-3" style="margin-top: -9px;">7 (64%)</span>
                        </div>
                    </div>
                </div>
                <div class="card mt-4 border-left-0 border-right-0 border-bottom-0">
                    <div class="card-body">
                        <div class="card-title d-flex">
                            <span style="font-size: 47px; line-height: 1.3;"><i
                                    class="fa fa-user-circle-o text-secondary"></i></span>
                            <h5 class="pr-3 mt-3">فاطمه محمدی</h5>
                        
                            <span class="mr-5 mt-3 mr-auto">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-dark"></i>
                                <i class="fa fa-star text-dark"></i>
                            </span>

                        </div>
                        <p class="text-secondary comment-text">27 دسامبر 2018
                        </p>
                        <p class="mt-3 text-secondary text-right pb-1">
                            سلام خداقوت<br>
                            به غیر از فصل آخر بقیه فصل‌ها بی‌نظیر بودن<br>
                            ای کاش اصلاً فصل آخر نبود چون حس بدی داره و چیزهایی توش هست که اکثراً همه میدونن. <br>
                            در کل دمتون گرم و نسخه چاپی هم میبود که محشر میشد ;) <br>
                        </p>
                    </div>
                    
                </div>
                <div class="card mt-4 border-left-0 border-right-0 border-bottom-0">
                    <div class="card-body">
                        <div class="card-title d-flex">
                            <span style="font-size: 47px; line-height: 1.3;"><i
                                    class="fa fa-user-circle-o text-secondary"></i></span>
                            <h5 class="pr-3 mt-3">فاطمه محمدی</h5>
                        
                            <span class="mr-5 mt-3 mr-auto">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-dark"></i>
                                <i class="fa fa-star text-dark"></i>
                            </span>

                        </div>
                        <p class="text-secondary comment-text">27 دسامبر 2018
                        </p>
                        <p class="mt-3 text-secondary text-right pb-1">
                            سلام خداقوت<br>
                            به غیر از فصل آخر بقیه فصل‌ها بی‌نظیر بودن<br>
                            ای کاش اصلاً فصل آخر نبود چون حس بدی داره و چیزهایی توش هست که اکثراً همه میدونن. <br>
                            در کل دمتون گرم و نسخه چاپی هم میبود که محشر میشد ;) <br>
                        </p>
                    </div>
                    
                </div>
                <div class="card mt-4 border-left-0 border-right-0 border-bottom-0">
                    <div class="card-body">
                        <div class="card-title d-flex">
                            <span style="font-size: 47px; line-height: 1.3;"><i
                                    class="fa fa-user-circle-o text-secondary"></i></span>
                            <h5 class="pr-3 mt-3">فاطمه محمدی</h5>
                        
                            <span class="mr-5 mt-3 mr-auto">
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-warning"></i>
                                <i class="fa fa-star text-dark"></i>
                                <i class="fa fa-star text-dark"></i>
                            </span>

                        </div>
                        <p class="text-secondary comment-text">27 دسامبر 2018
                        </p>
                        <p class="mt-3 text-secondary text-right pb-1">
                            سلام خداقوت<br>
                            به غیر از فصل آخر بقیه فصل‌ها بی‌نظیر بودن<br>
                            ای کاش اصلاً فصل آخر نبود چون حس بدی داره و چیزهایی توش هست که اکثراً همه میدونن. <br>
                            در کل دمتون گرم و نسخه چاپی هم میبود که محشر میشد ;) <br>
                        </p>
                    </div>
                    
                </div>
                <div style="height: 9vh;" class="card bg-light">
                    <div class="card-body">
                        <p class="text-center">برای ارسال نظر باید محصول را خریده باشید.</p>
                    </div>
                </div>
            </div>
        `
})
btn4.addEventListener('click', e => {
    e.preventDefault();
    e.target.className = 'btn btn-light text-secondary order-4 active'
    btn1.className = 'btn btn-light text-secondary order-1'
    btn2.className = 'btn btn-light text-secondary order-2'
    btn3.className = 'btn btn-light text-secondary order-3'
    show.innerHTML = `
    <div class="question mt-5">
                    <div class="btn-group w-100">
                        <button class="btn btn-defult active border-dark ">پرسش و پاسخ درباره کتاب</button>
                        <button class="btn btn-defualt border-dark  rounded">پرسش های دانشجویان</button>
                    </div>
                    <div class="question-post">
                        <div class="card mt-4 border-0">
                            <div class="card-body">
                                <div class="card-title d-flex">
                                    <span style="font-size: 58px; line-height: 1.3;"><i
                                            class="fa fa-user-circle-o text-secondary"></i></span>
                                    <h5 class="pr-3 mt-3">مهدی منافی</h5>

                                    <span class="mr-3  text-secondary mt-3">
                                        <i class="fa fa-reply"></i>
                                    </span>

                                </div>
                                <p style="margin-top: -38px;" class="text-secondary text-right pr-4 mr-5">27
                                    دسامبر 2018
                                </p>
                                <p class="mt-3 text-secondary text-right pb-1">
                                    سلام خداقوت<br>
                                    به غیر از فصل آخر بقیه فصل‌ها بی‌نظیر بودن<br>
                                    ای کاش اصلاً فصل آخر نبود چون حس بدی داره و چیزهایی توش هست که اکثراً همه
                                    میدونن. <br>
                                    در کل دمتون گرم و نسخه چاپی هم میبود که محشر میشد ;) <br>
                                </p>
                            </div>

                        </div>
                        <div class="card mt-4 border-0">
                            <div class="card-body">
                                <div class="card-title d-flex">
                                    <span style="font-size: 58px; line-height: 1.3;"><i
                                            class="fa fa-user-circle-o text-secondary"></i></span>
                                    <h5 class="pr-3 mt-3">امیررضا همتی (رئیس مایکروسافت)
                                    </h5>

                                    <span class="mr-3  text-secondary mt-3">
                                        <i class="fa fa-reply"></i>
                                    </span>

                                </div>
                                <p style="margin-top: -38px;" class="text-secondary text-right pr-4 mr-5">27
                                    دسامبر 2018
                                </p>
                                <p class="mt-3 text-secondary text-right pb-1">
                                    سلام خداقوت<br>
                                    به غیر از فصل آخر بقیه فصل‌ها بی‌نظیر بودن<br>
                                    ای کاش اصلاً فصل آخر نبود چون حس بدی داره و چیزهایی توش هست که اکثراً همه
                                    میدونن. <br>
                                    در کل دمتون گرم و نسخه چاپی هم میبود که محشر میشد ;) <br>
                                </p>
                            </div>

                        </div>
                        <div class="card mt-4 border-0">
                            <div class="card-body">
                                <div class="card-title d-flex">
                                    <span style="font-size: 58px; line-height: 1.3;"><i
                                            class="fa fa-user-circle-o text-secondary"></i></span>
                                    <h5 class="pr-3 mt-3">اقای ایکس </h5>

                                    <span class="mr-3  text-secondary mt-3">
                                        <i class="fa fa-reply"></i>
                                    </span>

                                </div>
                                <p style="margin-top: -38px;" class="text-secondary text-right pr-4 mr-5">27
                                    دسامبر 2018
                                </p>
                                <p class="mt-3 text-secondary text-right pb-1">
                                    سلام خداقوت<br>
                                    به غیر از فصل آخر بقیه فصل‌ها بی‌نظیر بودن<br>
                                    ای کاش اصلاً فصل آخر نبود چون حس بدی داره و چیزهایی توش هست که اکثراً همه
                                    میدونن. <br>
                                    در کل دمتون گرم و نسخه چاپی هم میبود که محشر میشد ;) <br>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div class="questoin-form mt-4">
                        <form>
                            <div class="form-group">
                                <textarea name="erfan" class="form-control w-100" cols="30" rows="10"
                                    placeholder="متن خود را بنویسید"></textarea>
                            </div>
                            <div class="d-flex">
                                <input type="text" class="form-control ml-3 text-center"
                                    placeholder="نام و نام خانوادگی">
                                <input type="text" class="form-control mr-3 text-center"
                                    placeholder="پست الکترونیک">
                            </div>
                            <input type="submit" value="ارسال" class="btn btn-success btn-block mt-3">
                        </form>
                    </div>
                </div>

        `
})

