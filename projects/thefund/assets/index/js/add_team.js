$(document).ready(function() {
    const array_user = [
        {   type:"team_add", name: "Rafis", surname: "Yusupov", login: "yusupov", post: "CEO",
            link_type: "1", link: "https://www.linkedin.com/in/rafis-yusupov-271892169/",
            info: "Master of Finance, lawyer, worked in government agencies and major banks of Russia for more than 5 years. He has more than 4 years of experience in leading positions in the field of financial Analytics."
        },
        {   type:"team_add",name: "Eduard", surname: "Nurullin", login: "nirullin", post: "CVO",
            link_type: "1", link: "https://www.linkedin.com/in/eduard-nurullin/",
            info: "Entrepreneur. Investor.<br/>Has leadership experience in IT sphere (Ex. CEO Hashboard inc.), Fintech (Ernst&Young) and Healthcare (Sankom ltd. Switzerland) of more than 5 years. ICO-expert. More than three years of experience in financial audit. Member of the Graphene Foundation."
        },
        {   type:"team_add", name: "Ksenia", surname: "Gavrilova", login: "gavrilova", post: "CMO",
            link_type: "1", link: "https://www.linkedin.com/in/ksenya-gavrilova/",
            info: "Has more than 4 years of experience in developing profitable marketing strategies around the world. Worked for a marketing Agency for ICO projects. Qualified in creating TTL promotion strategies, winner of the international marketing competition."
        },
        {   type:"team_add", name: "Tomàs", surname: "Pacheco", login: "pacheco", post: "Senior IT & Fintech Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/tom%C3%A0s-pacheco-55025371/",
            info: "IT manager and security auditor with more than 15 years of experience, manager of IT projects used to manage big IT projects software & communications,since 2017 involved in blockchain projects as trainer, project manager and project advisor in www.undercoverlab.com"
        },
        {   type:"team_add", name: "Artemiy", surname: "Radionov", login: "radionov", post: "Senior project manager",
            link_type: "1", link: "https://www.linkedin.com/in/artem-radionov-589687166/",
            info: "An ambitious young specialist with cryptocurrency investment experience of more than 2 years. Engaged in private valuation of real estate for more than 3 years."
        },
        {   type:"team_add", name: "Vladislav", surname: "Markushin", login: "markushin", post: "Technical Director",
            link_type: "1", link: "https://www.linkedin.com/in/vladislav-markushin-279966142/",
            info: "A programmer with work experience of more than 10 years. Has developed applications for WebGL and Android. Specialist in the field of mathematical and information systems modeling. For the last two years he has been working on creating of smart-contracts and blockchain technologies. Technical advisor for IT and ICO projects.<br/>Experienced AI Developer."
        },
        {   type:"team_add", name: "Mohamad", surname: "Youssef", login: "youssef", post: "AI Developer (consultant)",
            link_type: "1", link: "https://www.linkedin.com/in/mohamad-youssef/",
            info: "United Arab Emirates<br/>\n" +
                "Massachusetts Institute of Technology<br/>\n" +
                "Field Of Study Artificial Intelligence: Implications for Business Strategy<br/>\n" +
                "Specialties: ICT Strategy Development, Smart City, Digitization, Cloud Computing, Mobility, Data Center, System Integration, Product Development and Management, Managed Services, IT Outsourcing, and BPO.<br/>\n" +
                "Industries: ICT, Business Parks, Maritime, Logistics and Transportation, Online Business and Portals, Ports and Free Zones.<br/>"
        },
        {   type: "team_add", name: "Konstantin", surname: "Poskrebyshev", login: "poskrebyshev", post: "Senior Blockchain Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/kostyabro/",
            info: "Back-end developer with work experience of more than 6 years. He can write a code in C++/GoLand/Java. Developer of Artificial Intelligence. Developer of the ‘Hive’ Blockchain."
        },
        {   type:"team_add", name: "Sergey", surname: "Pomelov", login: "pomelov", post: "Chief Designer",
            link_type: "1", link: "https://www.linkedin.com/in/sergey-pomelov-371b4714b/",
            info: "A qualified graduate of a school of design with a work experience of more than 7 years; worked for many leading companies in various sectors. UI/UX design specialist."
        },
        {   type:"team_add", name: "Maxim", surname: "Pakhomov", login: "pakhomov", post: "Web Developer",
            link_type: "1", link: "https://www.linkedin.com/in/maksim-pakhomov-0b313a14a/",
            info: "A programmer with work experience of more than 3 years; was trained in a number of IT- schools, worked on many IT- projects.AI Developer (Assistant)."
        },
        {   type:"team_add", name: "Semyon", surname: "Pushkarev", login: "pushkarev", post: "Senior system administrator",
            link_type: "1", link: "https://www.linkedin.com/in/semyon-pushkarev-319926172/",
            info: "A programmer with work experience of more than 5 years, professional in the field of information security, network architect."
        },

        /**************
            ADVISORS
        ***************/
        {   type: "advisors_add", name: "Timo", surname: "Trippler", login: "trippler", post: "FinTech and InsurTech industry Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/TimoTrippler",
            info: "Timo Trippler is an ICO Advisor and entrepreneur with FinTech and InsurTech industry\n" +
                "background. He is an expert in financial market and risk management with 12 years of experience\n" +
                "in financial transactions. He advised various successful ICO projects and manages multiple crypto\n" +
                "fund portfolios.<br/>\n" +
                "He has been working in Blockchain field since 2015 and had a large number of various ICOs under\n" +
                "his advice.<br/>\n" +
                "He worked with a lot of ICOs and other projects, such as: AirPod, Loyakk, Faxport, Welltrado,\n" +
                "Inclusivity, Centareum, Place To Rent, Energy Premier, WeiCrowd, Med-O Network, Vegan Nation,\n" +
                "USAT, Tokenchanger, Autorize, Styxr, U Run It and many more.<br/>\n" +
                "Timo joined theFund´s advisor team and would provide professional guidance for theFund´s\n" +
                "global fundraising as well as future project incubation and crowdfunding sectors.<br/>\n" +
                "He uses his business network to raise funds from institutional Investors, Family Offices, Venture\n" +
                "Capital and Private Equity companies. He is currently connected to more than 300 institutional\n" +
                "Investors around the world. He travels to Blockchain summits and conferences to meet new\n" +
                "investors and to enlarge his fundraising network."
        },
        {   type: "advisors_add", name: "Ascanio", surname: "Baldeschi", login: "baldeschi", post: "PMO and Business Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/ascanio-baldeschi-pmp%C2%AE-4a31116/",
            info: "in 2016 shifted his focus to Blockchain technology, co-founding Blockchain360 with the aim of combining the potential of the technology with real application cases in business environment. He is a member of the ClubTI Milano where he follows the issues related to the applications of DLT (Distributed Ledger Technology) in the field of notarization, traceability and supply chains sustainability, blockchain enabled voting and smart contracts. He holds a PMP certification since 2012 issued by the Project Management Institute."
        },
        {   type: "advisors_add", name: "John", surname: "Iadeluca", login: "iadeluca", post: "Senior IR Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/john-iadeluca-42ba10154/",
            info: "Founder of Banz Hedge Fund<br/>\n" +
                "New York<br/>\n" +
                "Founder of Banz Hedge Fund, developer of Alpha6 Dark Pool, specialist at ICOBox - $400M + Raised for previous ICO's."
        },
        {   type: "advisors_add", name: "Manav", surname: "Kalra", login: "kalra", post: "ICO Advisor | Influencer | Blockchain Expert",
            link_type: "1", link: "https://www.linkedin.com/in/manav-kalra-%F0%9F%9A%80-6608b3162/",
            info: "ICOBench Expert. He is a Certified Bitcoin Professional from CryptoCurrency Certification Consortium (C4), Canada and has knowledge regarding Bitcoin Blockchain, Bitcoin Transactions, and how the Bitcoin network operates.<br/>\n" +
                "He has worked with several other ICO's.<br/>\n" +
                "He has knowledge to apply the Bitcoin technology to the professional area of expertise and understand privacy aspects, double-spending, and other issues that relate to the currency.\n"
        },
        {   type: "advisors_add", name: "Gazizov", surname: "Bulat", login: "bulat", post: "Legal advisor",
            link_type: "3", link: "https://www.instagram.com/bulatlawyer/?utm_source=ig_profile_share&igshid=lhsggj5gqk9p",
            info: "Specialization-international law. Civil law. Tax law. It law. He has extensive experience in ICO in various jurisdictions, a Member of the Association of lawyers of Russia. <br/>\n" +
                "Graduated from the Higher school of branding.<br/> \n" +
                "Included in the number of leading lawyers according to the international directory Chambers Europe, 2016\n"
        },

        {   type: "advisors_add", name: "Federico", surname: "Viganò", login: "vigano", post: "Marketing Specialist",
            link_type: "1", link: "https://www.linkedin.com/in/federicovigano/",
            info: "Marketing management | Cryptocurrencies and Blockchain enthusiast | ICOs marketing advisor<br/>\n" +
                "Lugano, Canton of Ticino, Switzerland<br/>\n" +
                "Fintech.Review - Co-Founder<br/>\n" +
                "Financial Technology, Blockchain, and Financial Rating<br/>\n" +
                "ONE4 Switzerland by OSM Network SA - Head of Marketing"
        },
        {   type: "advisors_add", name: "Daniil", surname: "Ivashin", login: "ivashin", post: "Community Relations Consultant",
            link_type: "2", link: "https://www.facebook.com/profile.php?id=100001313558518",
            info: "A skilled marketing graduate with work experience of more than 4 years. Worked as an SMM-specialist for major brands in various fields; organized a number of big events."
        },
        {   type: "advisors_add", name: "Sajid", surname: "Bhatt", login: "bhatt", post: "Audit Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/sajid-bhatt-3937591b/",
            info: "Assistant Manager at PwC Internal Audits<br/>\n" +
                "Bengaluru, Karnataka, India<br/>\n" +
                "Primary focus on:<br/>\n" +
                "Conduct Risk Assessments.<br/>\n" +
                "- Execute Risk Based Financial and Operational Audits of All Group companies & shared Services.<br/>\n" +
                "- Preparing Audit Plan, Testing controls and identifying Gaps.<br/>\n" +
                "- Providing recommendations.<br/>\n" +
                "- Preparing Internal Audit Reports.<br/>\n" +
                "- Assist Managers in conducting special Investigation Audits."
        },
        /**************
             EXPERTS
         ***************/
        /*
        {   type: "advisors_add", name: "Dr.", surname: "Shin", login: "shin", post: "D.Ed - IR Consultant",
            link_type: "0", link: "",
            info: "Founding Partner at Ultrafund.VC<br/>\n" +
                "San Francisco Bay Area<br/>\n" +
                "Blockchain/Crypto Assets Investor/Manager. 0 Upfront fee Hangzhou Incubator. Given many talks about blockchain (see posts) and Board of Advisor to many startup companies.Columbia University graduate in Doctor of Education<br/>\n" +
                "Serial Entrepreneur and Management/Executive positions for companies<br/>\n" +
                "Founder of entrepreneurship meet up groups with over 20k members."
        },*/
        {   type: "experts_add", name: "Semyon", surname: "Gleim", login: "gleim", post: "Managing Partner",
            link_type: "1", link: "https://www.linkedin.com/in/semyon-gleim-64710614a/",
            info: "CEO and founder of Paymon INC, President of Gleim Capital VC, investor, serial entrepreneur, ICO-advisor, member of Blockchain association in Russia, member of the Graphene Foundation."
        },
        {   type: "experts_add", name: "Md.Mofassair", surname: "Hossain", login: "hossain", post: "ICO Expert. IR Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/md-mofassair-hossain-515a90148/",
            info: "He is one of the top PR and Marketing Advisor at ICO Bench and top 30 in the people's of blockchain list. CEO and Founder of Perhalic. In the profession, he is Chartered Management Accountant (CIMA) also Investor and Advisor of 16+ ICOs in Blockchain industry. Also, he is the member of Israeli and Malta blockchain association And Global Blockchain Advisory Professionals. Working as an Ambassador of Humaniq and IMMO HIGH 101-300 top influencer in the world. His expert area is making successful ICO marketing and social media planning, strategies, budget allocation, bring partners launching bounty and airdrops also helps the team in building their empire."
        },
        {   type: "experts_add", name: "Sean", surname: "Brizendine", login: "brizendine", post: "ICO BENCH EXPERT. ICO Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/sean-brizendine-707/",
            info: "Over 7+ years of experience researching Bitcoin and Blockchain technology. Was rated 5+ POD (Proof of Developer) by CryptoAsian in 2014 and is a Certified IIB Council Blockchain Professional and Advisor plus an EC Council University Blockchain Cyber Talk Series Instructor. ICO Bench Expert. Participated in over 40 Blockchain Related Projects over the years and participated in some of the most successful Token Sales in Blockchain history. In August 2018 was interviewed live at the NASDAQ in Times Square New York by former Bloomberg Anchor Jane King regarding a Blockchain Technology Project Application and real world use case available today."
        },
        {
            type: "experts_add",
            name: "Maxime",
            surname: "Legros",
            login: "legros",
            post: "ICO and Blockchain consultant",
            link_type: "1",
            link: "https://www.linkedin.com/in/maxime-legros-718204129",
            info: "ICOBench Expert. Involved in the blockchain space since mid 2016, Maxime is passioned about technology and is always looking for real use cases projects to work with. He is experienced in supply chain (industrial purchaser) and has skills in negotiation and relationships development. Currently CEO of GSC Platform, Maxime is experienced also in management and knows how to run an ICO."
        },
        {   type: "experts_add", name: "Jags", surname: "Porandla", login: "porandla", post: "Blockchain expert, evangelist and crypto-advisor",
            link_type: "1", link: "https://www.linkedin.com/in/jagsporandla",
            info: "ICOBench Expert. He currently holds responsibilities as the COO of Bitcare.co and as the president and CEO of RapidBlocks.io. He is a speaker (conferences/TV) and advices many ICO/STOs. He has 25+ experience in IT, business operations, crowdfunding and taking he ideas to blockchain products."
        },
        {   type: "experts_add", name: "Felipe", surname: "Teixeira", login: "teixeira", post: "Blockchain Developer and investor",
            link_type: "1", link: "https://www.linkedin.com/in/luizfelipetx/",
            info: "Blockchain Developer and investor, winner of lot of prices on brazil hackthons, ranking codes. Serial entrepreneur . I have over 12 years of experience as a software engineer with a long experience in Java, php, python, CloudComputing, Design Partterns, Frameworks in general, Application servers in general, Android, JS Node and others. I also have experience with Golang (Go), which is a very applied stack nowadays on large projects. I am currently also Cto at terranova capital focusing on the development of tools for management of crypto and pools."
        },
        {   type: "experts_add", name: "Oti", surname: "Edema", login: "edema", post: "Certified Blockchain Expert",
            link_type: "1", link: "https://www.linkedin.com/in/oti-edema-34838485",
            info: "Certified Blockchain Expert and Entrepreneur, Blockchain Developer, and Director of Africa Blockchain Research Council.<br/>\n" +
                "He holds a Master Degree in Computer Networking from Anglia Ruskin University the United Kingdom, and a Prince 2 Project Management Certification.<br/>\n" +
                "He has worked as a lecturer at Anglia Ruskin University Cambridge United Kingdom, He has also worked as a Network Engineer and Project Manager at a different level and organizations.<br/>\n" +
                "Oti now focuses on the Blockchain Industry, researching how to apply blockchain technology to improve all aspects of human life.<br/>\n" +
                "He has a vast knowledge of current blockchain technology and is also currently advising ICOs at different capacity, with respect to their business requirements and achieving a successful ICO."
        },
        {   type: "experts_add", name: "Erica", surname: "Pakasi", login: "pakasi", post: "Senior AI Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/ericapakasi/",
            info: "Director SaaS CI at Oracle<br/>\n" +
                "Geneva Area, Switzerland<br/>\n" +
                "EX. Manager Human Capital Techology at Deloitte Geneva Area, Switzerland<br/>\n" +
                "Helping Thefund.io deliver high impact transformations"
        },

        {   type: "experts_add", name: "Krutesh", surname: "Shah", login: "shah", post: "ICO Expert and Blockchain Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/krutesh-shah",
            info: "ICOBench Expert. Expert in Business Analysis of Blockchain platforms and Infrastructure with an in-depth knowledge of ICO<br/>\n" +
                "start-to-finish processes. Skilled in Venture Creation and Strategic Partnership building.<br/>\n" +
                "Commercial specialties: Business development, Financial management, Strategic Partnerships, Project management, Performance management, Business modelling.<br/>\n" +
                "Technical specialties: Financial technology, Data modelling, Data analysis, Blockchain technology."
        },
        {   type: "experts_add", name: "Nikita", surname: "Lenchevskii", login: "lenchecskii", post: "Marketing Consultant",
            link_type: "1", link: "https://www.linkedin.com/in/nikita-lenchevskii-864091150/",
            info: "Has been working in marketing since 2014. Participated in the creation and development of projects in music, entertainment and advertising. Responsible for the development of marketing strategy."
        },
        {   type: "experts_add", name: "Nilesh", surname: "Kumar", login: "kumar", post: "AI Expert",
            link_type: "1", link: "https://www.linkedin.com/in/nilesh-kumar-597148102/",
            info: "Pakistan<br/>\n" +
                "AI Developer at Incline Artificial Intelligence<br/>\n" +
                "AI Developer at Automotive Artificial Intelligence (AAI) GmbH<br/>\n" +
                "Education:<br/>\n" +
                "National University of Computer and Emerging Sciences<br/>\n" +
                "Degree NameBachelor of Science (BS)<br/>\n" +
                "Field Of StudyComputer Science<br/>\n" +
                "GradeA"
        },
        {   type: "experts_add", name: "Maher", surname: "Madkour", login: "madkour", post: "Senior Audit consultant",
            link_type: "1", link: "https://www.linkedin.com/in/maher-madkour-b641965a/",
            info: "Senior Consultant - Tax & Zakat at PwC KSA<br/>\n" +
                "EX. Senior Tax Auditor at Baker Tilly Wahid Abdel Ghaffar & Co."
        },
    ];

    let img_href, img_link;
    for (var i = 0; i < array_user.length; i++) {
        switch (array_user[i].link_type) {
            case "0": img_href = ""; break;
            case "1":
                img_href = "assets/index/images/social_networks/white/linkedin.svg";
                break;
            case "2":
                img_href = "assets/index/images/social_networks/white/facebook.svg";
                break;
            case "3":
                img_href = "assets/index/images/social_networks/white/instagram.svg";
                break;
        }
        switch (array_user[i].type) {
            case "team_add":
                img_link = "assets/index/images/team/user/";
                break;
            case "advisors_add":
                img_link = "" +
                    "assets/index/images/team/advisors/";
                break;
            case "experts_add":
                img_link = "" +
                    "assets/index/images/team/experts/";
                break;
        }
        let type = "#" + String(array_user[i].type);
        $(type).append("" +
            "<div class=\"team_items\">\n" +
            "  <div class=\"pulse\">\n" +
            "    <div class=\"team_img\">\n" +
            "      <img src=\"" + img_link + array_user[i].login + ".png\" alt=\"UserPhoto\">\n" +
            "    </div>\n" +
            "    <a href=\"#" + array_user[i].login + "\" class=\"popup-content link_team\"><p>More</p></a>\n" +
            "  </div>\n" +
            "  <h1>" + array_user[i].name + "<br>" + array_user[i].surname + "</h1>\n" +
            "  <p>" + array_user[i].post + "</p>\n" +
            "</div>");

        $("#more_info_hidden").append("" +
            "<div id=\""+array_user[i].login+"\">\n" +
            "  <div class=\"container hidden_team_items\">\n" +
            "    <div class=\"photo_team_popup\">\n" +
            "      <img src=\""+ img_link + array_user[i].login +".png\" alt=\"\">\n" +
            "      <div class=\"social_href_popup\">" +
            "         <a href=\""+array_user[i].link+"\" target=\"_blank\">" +
            "         <img src=\""+img_href+"\" alt=\"teammate\">" +
            "      </a>" +
            "    </div>\n" +
            "    </div>\n" +
            "    <div class=\"popup_team_txt\">\n" +
            "      <h1>"+array_user[i].name+" "+array_user[i].surname+"</h1>\n" +
            "      <p class=\"post_team\">"+array_user[i].post+"</p>\n" +
            "      <p>"+array_user[i].info+"</p>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>");
    }

    $('.popup-content').magnificPopup({
        type: 'inline'
    });


}); 
