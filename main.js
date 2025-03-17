// 首先, 非常感谢原作者的代码
// 删除原因: 1. 部分资源已经失效, 排版已经错位 2. 删除一部分不想要的东西
// 删除内容: (按照视觉的从上到下顺序, 后面是存在于哪个函数)
// 1. Github 左上角标 - buildGithubCorner()
// 2. 离开页面改变标题 - getMainMode()
// 3. 左上角的 "すのはら荘" 及相关效果 - buildCustomElements() & getMainMode() & goIntoNormalMode() & buildBloggerProfile()
// 4. 顶部工具栏的 友链 赞赏 关于 - buildCustomElements()
// 5. 顶部工具栏的子标签 - buildCustomElements()
// 6. 顶部滚动进度条 - scrollDy() & getScrollTop() & getScrollHeight() & getWindowHeight()
// 7. 全屏显示的, 回到顶部的小绳子 - buildCustomElements()
// 8. 删除了几个社交媒体 icon
// 9. 文章下方的 推荐 收藏 反对 - buildPostFavoriteBtn()
// 10. 最下方的 Copyright...Powered by..., 已经错位, 可以自行美化 - buildCopyright()
// 11. 工具栏, 只看到最下面的 "捕获"? - buildToolbar()
// ?. 添加标签icon (原作者注释, 不知道具体是什么) - buildCustomElements()
// ?. Build a tags button on navbar (原作者注释, 不知道具体是什么) - buildCustomElements()
// ?. 构建博主信息, 主页能搜到该元素, 但是看不见 - buildBloggerProfile()
// 修改的内容: 
// 1. 个人信息, 这个肯定得改, avatar 是头像 url, favicon 是不知道 - constructor()
// 2. 修改 goIntoReadingMode() 和 goIntoNormalMode(), 这两个作用就是自动显示或隐藏顶部栏, 名字取得啥玩意, 分别改成了 alwaysShowTopBar() 和 autoHideTopBar()
// 3. 移除顶部栏默认的选项, 设置自定义选项 - buildCustomElements()
// 4. 文章页作者信息, 变成获取 this.defaluts.profile 中的变量信息, 本来写死了原作者的主页 - constructor() & postHeader() 

(function ($) {
    $.extend({
        silence: (options) => {
            var silence = new Silence();
            silence.init(options);
        }
    });

    class Silence {
        constructor() {
            this.defaluts = {
                profile: {
                    author: "Luxury",
                    avatar: 'https://pic.cnblogs.com/avatar/3389865/20240207234337.png',
                    home: 'https://www.cnblogs.com/luxuxl/',
                    photos: 'https://www.cnblogs.com/luxuxl/gallery/2405086.html',
                },
                catalog: {
                    enable: true,
                    move: false,
                    index: true,
                    level1: 'h2',
                    level2: 'h3',
                    level3: 'h4',
                },
                signature: {
                    enable: true,
                    license: 'CC BY 4.0',
                    link: 'https://creativecommons.org/licenses/by/4.0',
                },
                sponsor: {
                    enable: true,
                    paypal: null,
                    wechat: null,
                    alipay: null,
                },
                topImg: {
                    homeTopImg: [
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620025745_wallhaven-o5762l.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620025745_wallhaven-m3rm88.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620025754_0494e945880511ebb6edd017c2d2eca2.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620025754_cad02a42c44e47bcaed6caf6a0e6344b.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620025754_792a4b6934fc491b81342206e3192e59.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620025754_6b522359092f4f48a1168e482085ce7a.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240620030045_headerBackground.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240625135538_wallpaper.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_47.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_42.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_45.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_44.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_41.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_48.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_39.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_43.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_46.webp",
                    ],
                    notHomeTopImg: [
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151709_wp_40.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151721_wp_30.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151722_wp_36.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151721_wp_38.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151721_wp_29.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151722_wp_34.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151722_wp_32.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151721_wp_33.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151721_wp_37.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151723_wp_35.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151722_wp_31.webp",
                        "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2405086/o_240627151732_wp_49.webp",
                    ]
                },
                topInfo: {
                    title: 'Luxury',
                    text: "宁愿一生孤度 | 也不愿随波逐流",
                    notice: "急雪乍翻香阁絮, 轻风吹到胆瓶梅, 心字已成灰",
                    github: "",
                    github_icon: "https://images.cnblogs.com/cnblogs_com/blogs/816612/galleries/2406643/o_240628012622_github32.png",
                    weibo: "",
                    weibo_icon: "https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190808095623418-1617766229.png",
                    telegram: "",
                    telegram_icon: "https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190808095628401-835828752.png",
                    music: "",
                    music_icon: "https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190808095640330-1209750721.png",
                    mail: "",
                    mail_icon: "https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190808095613956-1350546638.png",
                }
            };
        }

        get cnblogs() {
            return {
                header: '#header',
                blogTitle: '#blogTitle',
                publicProfile: '#profile_block',
                navigator: '#navigator',
                navList: '#navList',
                sideBar: '#sideBar',
                sideBarMain: '#sideBarMain',
                forFlow: '.forFlow',
                postTitle: '#cb_post_title_url',
                postDetail: '#post_detail',
                postBody: '#cnblogs_post_body',
                postDigg: '#div_digg',
                postCommentBody: '.blog_comment_body',
                feedbackContent: '.feedbackCon',
                postSignature: '#MySignature',
                footer: '#footer',
            };
        }

        get isPostPage() {
            return $(this.cnblogs.postDetail).length > 0;
        }

        // 初始化, 根据情况, 调用各个组件
        init(options) {
            if (options) {
                $.extend(true, this.defaluts, options);
            }
            this.buildCustomElements();
            if (this.isPostPage) {
                this.postHeader();
                this.setNotHomeTopImg();
                this.alwaysShowTopBar();
                this.buildPostCatalog();
                this.buildPostCodeCopyBtns();
                this.buildPostSignature();
                this.buildPostSponsor();
                this.buildPostCommentAvatars();
            } else {
                this.mainHeader();
                this.homeImg();
                this.autoHideTopBar();
                this.setHomeSuiBiList();
            }
        }

        // 构建自定义 DOM 元素
        buildCustomElements() {
            const profile = this.defaluts.profile;
            // Build a menu button on mobile browser.
            $('body').prepend(`<div class="esa-mobile-menu"></div>`);
            $('.esa-mobile-menu').on('click', () => {
                $(this.cnblogs.navigator).fadeToggle(200);
            });

            // 移除顶部栏默认选项, 添加自定义选项
            $("#navList").children().remove();
            $("#navList").append(`<li><a id="blog_nav_myhome" class="menu" href="${profile.home}">主页</a><i></i></li>`);
            $("#navList").append(`<li><a id="blog_nav_myhome" class="menu" href="https://i.cnblogs.com/posts">管理</a><i></i></li>`);
            // $("#navList").append(`<li><a id="blog_nav_mycategory" class="menu" href="${profile.home + 'post-categories'}">分类</a><i></i></li>`);
            $("#navList").append(`<li><a id="blog_nav_mycategory" class="menu" href="${profile.home + 'tag'}">标签</a><i></i></li>`);
            $("#navList").append(`<li><a id="blog_nav_mygallery" class="menu" href="${profile.photos}">相册</a><i></i></li>`);
        }

        // ================= 文章页 start =================

        // 文章页标题、作者信息
        postHeader() {
            // 设置文章页开头图片框架, 只是占位, 还没有设置图片 src
            var center =
                '<div class="pattern-center">' +
                ' <div class="pattern-attachment-img"><img src="" data-src=""' +
                '    style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"></div>' +
                ' <header class="pattern-header "><h1 class="entry-title"></h1></header>' +
                '</div>';
            $('#home').prepend(center);

            // 设置标题
            const sbTitle = $('#cb_post_title_url').text();
            $('.entry-title').text(sbTitle);
            $('.postTitle').css('display', 'none');

            // 设置作者信息
            let profile = this.defaluts.profile // 个人信息
            let post_date = $('#post-date').text() //发布时间
            let post_view_count = $('#post_view_count').text() //阅读数
            if (window.location.href.indexOf('articles') === -1) {
                var header =
                    `<p class="entry-census"><span><a href="${profile.home}"><img src="${profile.avatar}"></a></span><span><a href="${profile.home}" style="text-decoration: none;">${profile.author}</a></span><span class="bull">·</span>${post_date}<span class="bull">·</span>${post_view_count} 次阅读</p>`;
                $('.pattern-header').append(header)
                $('.pattern-center').addClass('single-center')
                $('.pattern-header').addClass('single-header')
            } else {
                return
            }
        }

        // 文章页开头图片
        setNotHomeTopImg() {
            const config = this.defaluts.topImg;
            // 设置主页图片
            let notHomeTopImg = config.notHomeTopImg, bgImg;

            notHomeTopImg.length > 0 ?
                (notHomeTopImg.length > 1 ? bgImg = notHomeTopImg[this.randomNum(0, notHomeTopImg.length - 1)] : bgImg = notHomeTopImg[0])
                : bgImg = "";
            $('.pattern-attachment-img img').attr('src', bgImg);
        }

        // 总是显示顶部栏
        alwaysShowTopBar() {
            let $win = $(window);
            let _that = this;
            if ($win.width() > 767) {
                $(_that.cnblogs.header).css('opacity', '1');
                $('#header #navList').css('margin-left', '0px');
                //修改文章布局
                $('#main').css({ 'margin': '0 auto', 'padding': '0 10px', 'min-width': '950px' });
            }
        }

        // 构建博客目录
        buildPostCatalog() {
            const config = this.defaluts.catalog;

            if (config.enable) {
                let levels = [config.level1, config.level2, config.level3];
                let $headers = $(this.cnblogs.postBody).find(levels.join(','));

                if (!$headers.length) {
                    return false;
                }

                let $catalog = $(
                    `<div class="esa-catalog">
                        <div class="esa-catalog-contents">
                            <div class="esa-catalog-title">目录</div>
                            <a class="esa-catalog-close">✕</a>
                        </div>
                    </div>`);

                let h1c = 0;
                let h2c = 0;
                let h3c = 0;

                let catalogContents = '<ul>';

                let cryptoObj = window.crypto || window.msCrypto; // for IE 11
                let eleIds = cryptoObj.getRandomValues(new Uint32Array($headers.length));

                $.each($headers, (index, header) => {
                    const tagName = $(header)[0].tagName.toLowerCase();
                    let titleIndex = '';
                    let titleContent = $(header).html();
                    let title = titleContent;
                    if (!config.index) {
                        switch (tagName) {
                            case config.level1:
                                titleContent = `<span class="level1">${titleContent}</span>`;
                                break;
                            case config.level2:
                                titleContent = `<span class="level2">${titleContent}</span>`;
                                break;
                            case config.level3:
                                titleContent = `<span class="level3">${titleContent}</span>`;
                                break;
                        }
                    } else {
                        if (tagName === config.level1) {
                            h1c++;
                            h2c = 0;
                            h3c = 0;
                            titleIndex = `<span class="level1">${h1c}. </span>`;
                        } else if (tagName === config.level2) {
                            h2c++;
                            h3c = 0;
                            titleIndex = `<span class="level2">${h1c}.${h2c}. </span>`;
                        } else if (tagName === config.level3) {
                            h3c++;
                            titleIndex = `<span class="level3">${h1c}.${h2c}.${h3c}. </span>`;
                        }
                    }

                    var idx = eleIds[index];

                    catalogContents +=
                        `<li class="li_${tagName}" title="${title}">
                            <i class="${idx}" ></i><a class="esa-anchor-link">${(titleIndex + titleContent)}</a>
                        </li>`;

                    $(header).attr('id', `${idx}`)
                        .html(`<span>${titleContent}</span><a href="#${idx}" class="esa-anchor">#</a>`)
                        .hover(() => {
                            $(header).find('.esa-anchor').css('opacity', 1);
                        }, () => {
                            $(header).find('.esa-anchor').css('opacity', 0);
                        });
                });
                catalogContents += `</ul>`;

                $catalog.find('.esa-catalog-contents').append(catalogContents);
                $catalog.appendTo('body');

                let $tabContent = $('.esa-catalog-contents');

                $tabContent.fadeIn();

                $('.esa-anchor-link').on('click', function () {
                    let position = $('#' + ($(this).prev('i').attr('class'))).offset().top - 80;
                    $('html, body').animate({
                        scrollTop: position
                    }, 300);
                });

                $('.esa-catalog-close').on('click', () => {
                    $tabContent.hide();
                });

                if (config.move) {
                    let move = {
                        start: false,
                        pois: [0, 0],
                    };
                    $('.esa-catalog-title').on('mousedown', function (e) {
                        e.preventDefault();
                        move.start = true;
                        let position = $('.esa-catalog').position();
                        let poisX = e.clientX - parseFloat(position.left);
                        let poisY = e.clientY - parseFloat(position.top);
                        move.pois = [poisX, poisY];
                    });
                    $(document).on('mousemove', (e) => {
                        if (move.start) {
                            let offsetX = e.clientX - move.pois[0];
                            let offsetY = e.clientY - move.pois[1];
                            let fixed = $('.esa-catalog').css('position') === 'fixed';

                            e.preventDefault();

                            move.stX = fixed ? 0 : $(window).scrollLeft();
                            move.stY = fixed ? 0 : $(window).scrollTop();

                            let setRig = $(window).width() - $('.esa-catalog').outerWidth() + move.stX;
                            let setBot = $(window).height() - $('.esa-catalog').outerHeight() + move.stY;

                            offsetX < move.stX && (offsetX = move.stX);
                            offsetX > setRig && (offsetX = setRig);
                            offsetY < move.stY && (offsetY = move.stY);
                            offsetY > setBot && (offsetY = setBot);

                            $('.esa-catalog').css({
                                left: offsetX,
                                top: offsetY,
                                right: 'auto',
                            });
                        }
                    }).on('mouseup', (_e) => {
                        if (move.start) {
                            move.start = false;
                        }
                    });
                }
            }
        }
        
        // 消息弹窗
        showMessage(content) {
            $('body').prepend(`<div class="esa-layer"><span class="esa-layer-content">${content}</span></div>`);
            let $layer = $('.esa-layer');
            $layer.fadeIn(200);
            setTimeout(() => {
                $layer.remove();
            }, 2000);
        }

        // 构建代码复制按钮
        buildPostCodeCopyBtns() {
            let $pres = $('.postBody .cnblogs-markdown').find('pre');

            if (!$pres.length) {
                return false;
            }

            $.each($pres, (index, pre) => {
                $(pre).find('code').attr('id', `copy_target_${index}`);
                $(pre).prepend(`<div class="esa-clipboard-button" data-clipboard-target="#copy_target_${index}" title="复制代码">Copy</div>`);
            });

            $.getScript(`https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js`, () => {
                let clipboard = new ClipboardJS('.esa-clipboard-button');
                clipboard.on('success', (e) => {
                    this.showMessage('代码已复制到粘贴板中');
                    e.clearSelection();
                });
                clipboard.on('error', (e) => {
                    this.showMessage('代码复制失败');
                });
            });
        }

        // 转载声明
        buildPostSignature() {
            const config = this.defaluts.signature;
            const profile = this.defaluts.profile;
            if (config.enable) {
                const postUrl = $(this.cnblogs.postTitle).attr('href');
                const content =
                    `<div class="esa-post-signature"> 
                    <p>作者：<a href="${profile.home}">${profile.author}</a></p> 
                    <p>出处：<a href="${postUrl}">${postUrl}</a></p> 
                    <p>本站使用「<a href="${config.link}"  target="_blank">${config.license}</a>」创作共享协议，转载请在文章明显位置注明作者及出处。</p> 
                </div>`;
                $(this.cnblogs.postSignature).html(content).show();
            }
        }

        // 构建赞赏模块
        buildPostSponsor() {
            const sponsor = this.defaluts.sponsor;
            const that = this;
            if (sponsor.enable) {
                $('#blog_post_info_block').prepend(`
                    <div class="esa-sponsor">
                        <div class="text tr3">Sponsor</div>
                        <ul class="box posa tr3">
                            <li class="paypal">PayPal</li>
                            <li class="alipay">AliPay</li>
                            <li class="wechat">WeChat</li>
                        </ul>
                        <div id="QRBox" class="posa left-100">
                            <div id="MainBox"></div>
                        </div>
                    </div>`);
            }
            

            const $sponsor = $('.esa-sponsor');
            const QRBox = $('#QRBox');
            const MainBox = $('#MainBox');

            function showQR(QR) {
                if (QR) {
                    MainBox.css('background-image', 'url(' + QR + ')');
                }
                $sponsor.find('.text, .box').addClass('blur');
                QRBox.fadeIn(300, function () {
                    MainBox.addClass('showQR');
                });
            }

            $sponsor.find('.box>li').click(function () {
                var type = $(this).attr('class');
                if (type === 'paypal') {
                    if (!sponsor.paypal) {
                        return that.showMessage('博主忘记设置 PayPal 收款地址');
                    }
                    window.open(sponsor.paypal, '_blank');
                } else if (type === 'alipay') {
                    if (!sponsor.alipay) {
                        return that.showMessage('博主忘记设置支付宝收款二维码');
                    }
                    showQR(sponsor.alipay);
                } else if (type === 'wechat') {
                    if (!sponsor.wechat) {
                        return that.showMessage('博主忘记设置微信收款二维码');
                    }
                    showQR(sponsor.wechat);
                }
            });

            MainBox.click(function () {
                MainBox.removeClass('showQR').addClass('hideQR');
                setTimeout(function (a) {
                    QRBox.fadeOut(300, function () {
                        MainBox.removeClass('hideQR');
                    });
                    $sponsor.find('.text, .box').removeClass('blur');
                }, 600);
            });
        }

        // 构建评论者头像
        buildPostCommentAvatars() {
            var builder = () => {
                $(this.cnblogs.postCommentBody).before(`<div class='esa-comment-avatar'><a target='_blank'><img /></a></div>`);
                let feedbackCon = $(this.cnblogs.feedbackContent);
                for (var i = 0; i < feedbackCon.length; i++) {
                    let avatar = 'https://pic.cnblogs.com/face/sample_face.gif';
                    let span = $(feedbackCon[i]).find("span:last")[0];
                    if (span) {
                        avatar = $(span).html().replace('http://', '//');
                    }
                    $(feedbackCon[i]).find(".esa-comment-avatar img").attr("src", avatar);
                    let href = $(feedbackCon[i]).parent().find(".comment_date").next().attr("href");
                    $(feedbackCon[i]).find(".esa-comment-avatar a").attr("href", href);
                }
            }
            if ($(this.cnblogs.postCommentBody).length) {
                builder();
            } else {
                let count = 1;
                // poll whether the feedbacks is loaded.
                let intervalId = setInterval(() => {
                    if ($(this.cnblogs.postCommentBody).length) {
                        clearInterval(intervalId);
                        builder();
                    }
                    if (count == 10) {
                        // no feedback.
                        clearInterval(intervalId);
                    }
                    count++;
                }, 500);
            }
        }

        // ================= 文章页 end =================

        // ====================== 主页 start ===============

        // 主页的 网格遮罩、标语、社交 logo
        mainHeader() {
            const config = this.defaluts.topInfo;
            var header =
                `<div class="headertop filter-dot">` +
                `</div>` +
                `<div class="main-header">` +
                `</div>` +
                `<div class="focusinfo no-select">` +
                `       <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="${config.title}">${config.title}</h1>` +
                `       <div class="header-info"><p><i class="fa fa-quote-left"></i> ${config.text} <i class="fa fa-quote-right"></i></p>` +
                `           <div class="top-social_v2">` +
                `              <li id="bg-pre"><img class="flipx" src="https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190808103709869-648245711.png"></li>` +
                `              <li><a href="${config.github}" target="_blank" class="social-github" title="github"><img src="${config.github_icon}"></a></li>` +
                `              <li><a href="${config.telegram}" target="_blank" class="social-lofter" title="telegram"><img src="${config.telegram_icon}"></a></li>` +
                `              <li><a href="${config.music}" target="_blank" class="social-wangyiyun" title="CloudMusic"><img src="${config.music_icon}"></a></li>` +
                `              <li><a href="${config.mail}" target="_blank" class="social-wangyiyun" title="E-mail"><img src="${config.mail_icon}"></a></li>` +
                `              <li id="bg-next"><img src="https://img2018.cnblogs.com/blog/1646268/201908/1646268-20190808103709869-648245711.png"></li>` +
                `           </div>` +
                `      </div>` +
                `</div>` +
                `<div class="wave">` +
                `   <div id="banner_wave_1"></div>` +
                `   <div id="banner_wave_2"></div>` +
                `</div>` +
                `<div class="scroll-down" data-offset="-45">` +
                `        <span class="hidden">Scroll Down</span>` +
                `        <i class="fa fa-chevron-down" aria-hidden="true"></i>` +
                `</div>`;
            $('#home').prepend(header);
        }

        // 主页壁纸
        homeImg() {
            const config = this.defaluts.topImg;
            // 设置主页图片
            let homeTopImg = config.homeTopImg, bgImg;
            let index = this.randomNum(0, homeTopImg.length - 1);
            homeTopImg.length > 0 ?
                (homeTopImg.length > 1 ? bgImg = homeTopImg[index] : bgImg = homeTopImg[0])
                : bgImg = "";
            $('.main-header').css({
                'background-image': 'url(' + bgImg + ')',
            });

            // 头图点击滚动到内容位置
            $('.scroll-down').click(function () {
                let endScroll;
                endScroll = $('#main').offset().top - 20;
                $('html,body').stop().animate({ scrollTop: endScroll }, 1000);
            });

            //切换首页壁纸
            $('#bg-pre').click(function () {
                index--;
                if (index < 0) {
                    index = homeTopImg.length - 1
                }
                let nextImg = homeTopImg[index]
                $('.main-header').css({
                    'background-image': 'url(' + nextImg + ')',
                });
            });
            $('#bg-next').click(function () {
                index++;
                if (index > homeTopImg.length - 1) {
                    index = 0
                }
                let preImg = homeTopImg[index]
                $('.main-header').css({
                    'background-image': 'url(' + preImg + ')',
                });

            })
        }

        // 自动隐藏顶部栏
        autoHideTopBar() {
            let $win = $(window);
            let _that = this;
            var oldScrollY = 0;
            if ($win.width() > 767) {
                $('#main').css({ 'min-width': '800px' });
                //鼠标悬浮判断，如果页面不是位于顶部则head不消失
                $(_that.cnblogs.header).hover(function () {
                    $(_that.cnblogs.header).css('opacity', '1');
                    $('#header #navList').css('margin-left', '0px');
                }, function () {
                    if ($(document).scrollTop() > 0) {
                        $(_that.cnblogs.header).css('opacity', '1');
                        $('#header #navList').css('margin-left', '0px');
                    } else {
                        $(_that.cnblogs.header).css('opacity', '0');
                        $('#header #navList').css('margin-left', '100px');
                    }

                })
                //鼠标悬浮logo判断
                $('.site-branding').hover(function () {
                    $(_that.cnblogs.header).css('opacity', '1');
                    $('#header #navList').css('margin-left', '0px');
                }, function () {
                    if ($(document).scrollTop() > 0) {
                        $(_that.cnblogs.header).css('opacity', '1');
                        $('#header #navList').css('margin-left', '0px');
                    } else {
                        $(_that.cnblogs.header).css('opacity', '0');
                        $('#header #navList').css('margin-left', '100px');
                    }

                })
                //页面滚动判断
                $win.scroll(function () {
                    oldScrollY = this.scrollY;
                    if (oldScrollY > 0) {
                        $(_that.cnblogs.header).css('opacity', '1');
                        $('#header #navList').css('margin-left', '0px');
                    } else {
                        $(_that.cnblogs.header).css('opacity', '0');
                        $('#header #navList').css('margin-left', '100px');
                    }
                });
            }
        }

        // 随笔列表 和 notice ...
        setHomeSuiBiList() {
            let article_list = document.getElementsByClassName('day');
            let author = this.defaluts.profile.author;
            for (let i = article_list.length - 1; i >= 0; i--) {
                let time = $('.day').find('div.dayTitle')[i].textContent.replace('年', '-').replace('月', '-').replace('日', ''); //获取年月日
                let postTitle = $('.day').find('div.postTitle')[i].innerHTML;
                let readMore = $('.day').find('a.c_b_p_desc_readmore')[i].href;
                let content = $('.day').find('div.c_b_p_desc')[i].textContent.replace('阅读全文', ''); //摘要
                let desc = $('.day').find('div.postDesc')[i].textContent;
                let readNum = desc.substring(desc.indexOf("(") + 1, desc.indexOf(")")); //阅读量
                let comNum = desc.substring(desc.lastIndexOf("(") + 1, desc.lastIndexOf(")")); //评论量
                let bianji = $('.day').find('div.postDesc')[i].firstElementChild.href; //获取编辑链接
                let url = this.defaluts.topImg.notHomeTopImg[i%this.defaluts.topImg.notHomeTopImg.length];
                let html = `<div class="post post-list-thumb post-list-show">` +
                    `  <div class="post-thumb"> <a href="${readMore}"> <img class="lazyload" src="${url}"  data-src="${url}"> </a></div>` +
                    `  <div class="post-content-wrap">` +
                    `   <div class="post-content">` +
                    `     <div class="post-date"> <i class="iconfont icon-time"></i>发布于 ${time}</div>` +
                    `     <div class="post-title">${postTitle}</div>` +
                    `     <div class="post-meta"> <span><i class="iconfont icon-attention"></i>${readNum} 热度</span> <span class="comments-number"><i class="iconfont icon-mark"></i>${comNum} 条评论</span> <span><i class="iconfont icon-cc-user"></i><a href="https://www.cnblogs.com/zouwangblog/p/11157339.html"></a>${author}</span></div>` +
                    `     <div class="float-content"><p>${content}</p>` +
                    `        <div class="post-bottom">` +
                    `           <a href="${readMore}" class="button-normal"><i class="iconfont icon-gengduo"></i></a>` +
                    `           <a href="${bianji}" class="button-normal"><i class="iconfont icon-bianji"></i></a>` +
                    `        </div>` +
                    `     </div>` +
                    `  </div>` +
                    ` </div>` +
                    `</div>`;
                $('.forFlow').prepend(html);
            }
            $('.post-list-thumb:odd').addClass('post-list-thumb-left')

            //构建notice
            const config = this.defaluts.topInfo;
            let notice = `<div class="notice"> <i class="iconfont icon-notification"></i><div class="notice-content">${config.notice}</div></div>`
            $('#main').prepend(notice);
        }

        // ====================== 主页 end ===============

        // 随机数
        randomNum = function (minNum, maxNum) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1);
                    break;
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
                    break;
                default:
                    return 0;
                    break;
            }
        };
    }
})(jQuery);
