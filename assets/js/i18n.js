/*
 * i18n.js — trilingual dictionary (fr default / zh / en) + tiny binding engine.
 * No framework, no build step. Exposes window.I18N for main.js.
 */
(function () {
  "use strict";

  var DICT = {
    fr: {
      nav: {
        brandName: `Yang FEI`,
        brandTag: `Lesliam · AI Engineer`,
        links: {
          parcours: `Parcours`,
          competences: `Compétences`,
          projetsOC: `Projets OC`,
          reflexivite: `Réflexivité`,
          contact: `Contact`
        },
        langSwitchLabel: `Langue`,
        themeToggleAria: `Basculer entre thème clair et sombre`,
        themeToggleLight: `Thème : clair`,
        themeToggleDark: `Thème : sombre`
      },
      hero: {
        eyebrow: `AI Engineer, reconversion embarqué → IA`,
        title: `Yang FEI`,
        brandLine: `alias « Lesliam »`,
        subtext: `Neuf ans d'ingénierie embarquée BLE, aujourd'hui ingénierie IA complète : le projet final fusionne les deux dans un terminal vocal auto-hébergé.`,
        objective: `En recherche d'un poste d'AI Engineer — IA embarquée (edge) et systèmes auto-hébergés, avec un fort intérêt pour la santé (IRM cérébrales P10, agent de triage médical P14).`,
        ctaProject: `Voir le projet final (P15)`,
        ctaSkills: `Voir les compétences`,
        ctaContact: `Me contacter`,
        heroImgAlt: `Lesliam, la mascotte du portfolio, debout et souriante`,
        chapterTag: `chapitre premier`
      },
      parcours: {
        kicker: `Le parcours, raconté en quatre chapitres`,
        storyTitle: `D'un SoC BLE à un agent IA`,
        title: `Parcours`,
        intro: `Neuf ans d'ingénierie embarquée automobile, puis une reconversion complète vers l'ingénierie IA : formation OpenClassrooms AI Engineer, 14 projets, de la modélisation classique aux agents LLM. Chaque chapitre ci-dessous est une scène de ce récit.`,
        chapters: [
          {
            chapNum: `01`, chapLabel: `Chapitre 01 · 2009 – 2015`, title: `Les fondations`,
            lead: `Tout commence par l'électronique. Génie électronique et télécommunications à l'Université Maritime de Dalian, puis les écotechnologies électroniques-optiques à Polytech Orléans, option architecture autonome.`,
            imgAlt: `Scène : Lesliam étudiant, entouré de schémas d'électronique et de télécommunications.`,
            stamps: [{ year: `2009–2012`, org: `Dalian` }, { year: `2012–2015`, org: `Polytech Orléans` }]
          },
          {
            chapNum: `02`, chapLabel: `Chapitre 02 · 2014 – 2015`, title: `Les premiers pas`,
            lead: `Deux stages tracent la route. Traitement d'image médical en C++ au laboratoire PRISME, puis l'évaluation de solutions Bluetooth / Bluetooth Smart chez MAATEL, pour l'électronique médicale et industrielle. Le sans-fil devient une vocation.`,
            imgAlt: `Scène : Lesliam en stage, au travail sur du traitement d'image et des modules Bluetooth.`,
            stamps: [{ year: `2014`, org: `PRISME · C++` }, { year: `2015`, org: `MAATEL · BLE` }]
          },
          {
            chapNum: `03`, chapLabel: `Chapitre 03 · 2016 – 2025`, title: `L'ère embarquée`,
            lead: `Neuf ans au cœur du métier. Une première solution BLE automobile chez IT Link (mission Valeo), puis la plateforme BLE de Valeo à Créteil : architecture, spécification, implémentation, tests unitaires et d'intégration. ARM Cortex-M / RTOS, sécurité JWT / RSA / ECC, bootloader et OTA sur SoC BLE.`,
            imgAlt: `Scène : Lesliam ingénieur embarqué, présentant une plateforme BLE automobile.`,
            stamps: [{ year: `2016–2018`, org: `IT Link` }, { year: `2018–2025`, org: `Valeo, Créteil` }]
          },
          {
            chapNum: `04`, chapLabel: `Chapitre 04 · 2025 – 2026`, title: `La reconversion IA`,
            lead: `Le grand saut. Formation complète OpenClassrooms AI Engineer : 14 projets, du machine learning classique aux agents LLM (P2 à P15). Les réflexes de l'automobile — requirements, revue systématique, traçabilité — deviennent une méthode d'ingénierie IA.`,
            imgAlt: `Scène : Lesliam face à un tableau de projets IA, dans sa reconversion AI Engineer.`,
            stamps: [{ year: `2025–2026`, org: `OpenClassrooms` }, { year: `14`, org: `projets · P2 vers P15` }]
          }
        ],
        languagesTitle: `Langues`,
        languages: [`Français courant (TCF B2)`, `Anglais courant (TOEIC 855/990)`, `Chinois (langue maternelle)`]
      },
      competences: {
        kicker: `L'atelier`,
        title: `Compétences`,
        intro: `Cinq branches techniques et six soft skills, chacune reliée aux projets qui en font la preuve. Les niveaux de maîtrise ci-dessous sont une auto-évaluation éditoriale.`,
        atelierCaption: `L'établi : des outils différents, une même culture qualité.`,
        mindMapLink: `Voir la carte mentale complète`,
        atelierImgAlt: `Lesliam au travail dans son atelier, entouré des outils de ses branches de compétences.`,
        branches: [
          {
            id: `ia-ml`, title: `IA / Machine Learning`,
            skills: [
              { name: `Machine learning classique`, level: 4, evidence: `P3, P4, P5, P6, P8` },
              { name: `Computer vision`, level: 3, evidence: `P2, P10` },
              { name: `NLP / LLM`, level: 4, evidence: `P7, P13, P14` },
              { name: `RAG (recherche augmentée)`, level: 4, evidence: `P7` },
              { name: `Agents LLM · LangChain / LangGraph`, level: 4, evidence: `P7 · P13` },
              { name: `Fine-tuning (SFT / DPO)`, level: 4, evidence: `P14 + runs personnels` },
              { name: `Apprentissage par renforcement`, level: 3, evidence: `P11` }
            ]
          },
          {
            id: `mlops`, title: `MLOps`,
            skills: [
              { name: `MLflow (cycle de vie)`, level: 4, evidence: `P6` },
              { name: `API de serving`, level: 4, evidence: `P5, P8` },
              { name: `CI/CD · GitHub Actions`, level: 4, evidence: `P5 · P8 · P14` },
              { name: `Quantification de modèles`, level: 3, evidence: `Coach FR (P15)` },
              { name: `Monitoring · dérive (Evidently)`, level: 4, evidence: `P8` },
              { name: `RGPD · anonymisation`, level: 3, evidence: `P14` }
            ]
          },
          {
            id: `embarque`, title: `Embarqué`,
            skills: [
              { name: `C embarqué`, level: 5, evidence: `9 ans, Valeo / IT Link` },
              { name: `Cortex-M / RTOS`, level: 5, evidence: `9 ans, Valeo / IT Link` },
              { name: `Bluetooth Low Energy`, level: 5, evidence: `cœur de métier, 9 ans` },
              { name: `Bootloader / OTA`, level: 4, evidence: `Valeo, SoC BLE, base LIN` },
              { name: `Sécurité (JWT / RSA / ECC)`, level: 4, evidence: `Valeo` }
            ]
          },
          {
            id: `infra`, title: `Infra / self-hosting`,
            skills: [
              { name: `Linux (administration)`, level: 4, evidence: `station CachyOS auto-administrée` },
              { name: `GPU / calcul local`, level: 4, evidence: `RTX 5080, fine-tuning local` },
              { name: `Docker · conteneurisation`, level: 4, evidence: `NAS + station IA, déploiements OC` },
              { name: `LLM auto-hébergés (Ollama)`, level: 4, evidence: `usage quotidien` },
              { name: `Domotique (Home Assistant)`, level: 4, evidence: `stack vocal Wyoming` }
            ]
          },
          {
            id: `demo`, wide: true, title: `Démo & vulgarisation`,
            skills: [
              { name: `Gradio`, level: 3, evidence: `POC et démo du coach vocal (P15)` },
              { name: `Streamlit`, level: 3, evidence: `démos data / ML légères` }
            ]
          }
        ],
        softTitle: `Soft skills`,
        softIntro: `Six compétences transverses, chacune reliée à une preuve concrète.`,
        softSkills: [
          { title: `Rigueur et culture qualité`, proof: `9 ans de process qualité automobile (spécification → design → implémentation → test)` },
          { title: `Autonomie et apprentissage continu`, proof: `reconversion complète + infrastructure IA personnelle auto-administrée` },
          { title: `Résolution de problèmes`, proof: `du debugging embarqué au debugging de pipelines ML` },
          { title: `Communication multiculturelle`, proof: `trilingue FR / EN / ZH, équipes internationales et multiculturelles` },
          { title: `Pédagogie et vulgarisation`, proof: `supports d'étude trilingues, vulgarisation technique de sujets complexes` },
          { title: `Gestion de projet et arbitrage sous contrainte`, proof: `cadrage et arbitrages de périmètre (P9, P15)` }
        ],
        synthese: [
          {
            id: `infra-perso`,
            title: `Infrastructure personnelle en production`,
            lead: `Trois systèmes conçus, déployés et utilisés au quotidien à la maison, hors cadre scolaire.`,
            items: [
              { name: `LearnForge — révision espacée (FSRS)`, note: `Application de mémorisation développée et utilisée quotidiennement.` },
              { name: `Stack vocal Whisper / Piper / Home Assistant`, note: `En production à la maison ; sert directement le projet P15.` },
              { name: `ai-agent-system — orchestration d'agents IA`, note: `Workflows, tickets Linear, mémoire persistante.` }
            ]
          },
          {
            id: `fil-rouge`,
            title: `Fil rouge — croisement unique`,
            lead: `Neuf ans de discipline embarquée (mémoire en kilo-octets, temps réel, OTA, sécurité) croisés avec l'ingénierie IA complète : le projet P15 est littéralement la fusion des deux carrières.`,
            items: [
              { name: `Cortex-M / RTOS + fine-tuning de LLM`, note: `Très peu de profils maîtrisent les deux domaines.` },
              { name: `Qualité automobile vers MLOps`, note: `Spécification, test, traçabilité se transposent directement : reproductibilité, audit, rollback.` },
              { name: `Preuves d'autonomie`, note: `Infrastructure IA personnelle complète, projets personnels en production à la maison.` },
              { name: `Trilingue FR / EN / ZH`, note: `Atout pour les équipes internationales et multiculturelles.` }
            ]
          }
        ]
      },
      projet: {
        kicker: `Le focus · Approfondissement du projet final`,
        title: `Projet final · P15 : Coach Vocal FR`,
        context: `Le projet technique du P15, projet final du parcours OpenClassrooms AI Engineer (14 projets, P2 à P15) : un partenaire d'entraînement oral en français, disponible en permanence à domicile, qui corrige les erreurs de langue selon un format pédagogique constant et simule les questions d'un manager, sans exposer les conversations à un service cloud.`,
        needTitle: `Pourquoi un terminal vocal dédié`,
        needText: `La pratique orale exige la voix, pas un chatbot texte, et un objet toujours prêt plutôt qu'un ordinateur portable à ouvrir. L'objet matérialise aussi la rencontre des deux carrières : terminal embarqué et intelligence auto-hébergée.`,
        archTitle: `Architecture retenue : une cascade edge / serveur`,
        archImg: `assets/arch/architecture_fr.png`,
        archImgAlt: `Illustration dessinée à la main de l'architecture cascade edge/serveur du Coach Vocal FR : terminal ESP32-S3 relié en Wi-Fi à un serveur local RTX 5080.`,
        archNodes: {
          terminalTitle: `Terminal ESP32-S3`,
          terminalItems: [`Micro + AFE`, `Mot d'éveil on-device (ESPHome + microWakeWord)`, `Haut-parleur + écran`],
          arrowOut: `Wi-Fi / LAN`,
          serverTitle: `Serveur local (RTX 5080)`,
          serverItems: [`Whisper : reconnaissance vocale (STT)`, `LLM coach : Ollama qwen2.5:14b`, `Piper : synthèse vocale (TTS)`, `Orchestration Home Assistant`],
          arrowBack: `réponse audio`,
          privacyNote: `Aucune donnée ne sort du réseau local.`
        },
        pillarsTitle: `Deux piliers méthodologiques IA`,
        pillar1: {
          title: `Cycle de vie du modèle de mot d'éveil (KWS)`,
          steps: [`Entraînement d'un mot d'éveil personnalisé`, `Quantification`, `Déploiement OTA`, `Télémétrie de confiance`, `Surveillance de dérive`, `Réentraînement`]
        },
        pillar2: {
          title: `Comportement du coach : fine-tuning vs prompting, avec preuve`,
          text: `Le fine-tuning local (SFT/DPO) vise la constance comportementale (français exclusif, format de correction fixe, relances socratiques) et la résistance à la dérive en contexte long, pas l'injection de connaissances. Preuve : évaluation comparative prompt-baseline vs modèle affiné sur un même jeu de test.`
        },
        methodTitle: `Méthode d'exécution`,
        methodText: `Sprint de 4 semaines piloté en mode équipe d'agents IA : décomposition en tickets Linear, agents de développement en parallèle, revue humaine systématique de chaque livraison avec quiz de compréhension du code. Décisions de périmètre tracées sur une échelle de descope prédéfinie.`,
        linksTitle: `Liens`,
        repoLabel: `Voir le dépôt public`,
        reportLink: `Rapport de conduite de projet (PDF)`
      },
      projetsOC: {
        kicker: `La bibliothèque des travaux`,
        title: `Projets OpenClassrooms`,
        intro: `Une sélection de livrables représentatifs, preuves des compétences ci-dessus. Le parcours complet compte 14 projets (P2 à P15) ; le P15, projet final, clôt la sélection ci-dessous.`,
        flagshipTag: `Projet final`,
        cards: [
          { code: `P6`, title: `Credit Scoring System (MLOps)`, desc: `Première boucle MLOps complète : cycle de vie, MLflow, reproductibilité.`, tags: [`MLOps`, `MLflow`], repo: `https://github.com/Lesliam/openclassrooms_project6` },
          { code: `P7`, title: `CultuRAG`, desc: `Chatbot de recommandation culturelle : RAG, recherche vectorielle, LLM.`, tags: [`RAG`, `LLM`], repo: `https://github.com/Lesliam/openclassrooms_project7` },
          { code: `P8`, title: `Credit Scoring API`, desc: `Mise en production d'un modèle de scoring pour Prêt à Dépenser.`, tags: [`API`, `Mise en production`], repo: `https://github.com/Lesliam/openclassrooms_project8` },
          { code: `P10`, title: `Classification d'IRM cérébrales`, desc: `Diagnostic assisté en semi-supervisé : IRM cérébrales Normal / Cancer, 100 images étiquetées sur 1 500, embeddings ResNet50 puis label spreading.`, tags: [`Semi-supervisé`, `Santé`], repo: `https://github.com/Lesliam/openclassrooms_project10` },
          { code: `P13`, title: `Chess Opening Coach`, desc: `POC produit IA de bout en bout pour la Fédération Française des Échecs.`, tags: [`Produit IA`, `POC`], repo: `https://github.com/Lesliam/openclassrooms_project13` },
          { code: `P14`, title: `Agent de triage médical`, desc: `POC d'agent LLM : orchestration et fine-tuning.`, tags: [`Agents LLM`, `Fine-tuning`], repo: `https://github.com/Lesliam/openclassrooms_project14` },
          { code: `P15`, title: `Coach Vocal FR`, desc: `Terminal vocal edge auto-hébergé : coach oral en français, sans cloud.`, tags: [`Edge AI`, `Auto-hébergé`], repo: `https://github.com/Lesliam/openclassrooms-project15`, flagship: true }
        ],
        repoAsk: `On y va ?`,
        opensNewTabHint: `(ouvre un nouvel onglet)`,
        viewRepoLabel: `Voir le dépôt`,
        allTitle: `Tous les projets`,
        allMeta: `P2 – P15 · 14 projets`,
        allProjects: [
          { code: `P2`, title: `Segmentation de vêtements (API Hugging Face) + conformité RGPD/AI Act`, repo: `https://github.com/Lesliam/openclassrooms_project2` },
          { code: `P3`, title: `Benchmarking énergétique des bâtiments (Seattle)`, repo: `https://github.com/Lesliam/openclassrooms_project3` },
          { code: `P4`, title: `Classification RH — turnover (TechNova)`, repo: `https://github.com/Lesliam/openclassrooms_project4` },
          { code: `P5`, title: `Déploiement modèle en production — API FastAPI (Futurisys)`, repo: `https://github.com/Lesliam/openclassrooms_project5` },
          { code: `P6`, title: `Credit Scoring System (MLOps)`, repo: `https://github.com/Lesliam/openclassrooms_project6` },
          { code: `P7`, title: `CultuRAG — chatbot de recommandation culturelle`, repo: `https://github.com/Lesliam/openclassrooms_project7` },
          { code: `P8`, title: `Credit Scoring API (Prêt à Dépenser)`, repo: `https://github.com/Lesliam/openclassrooms_project8` },
          { code: `P9`, title: `Fashion-Insta — cadrage IA`, repo: `https://github.com/Lesliam/openclassrooms_project9` },
          { code: `P10`, title: `Analyse d'images médicales semi-supervisée`, repo: `https://github.com/Lesliam/openclassrooms_project10` },
          { code: `P11`, title: `Agent RL — atterrisseur lunaire`, repo: `https://github.com/Lesliam/openclassrooms_project11` },
          { code: `P12`, title: `Extraction de données multimodales de sites web`, repo: `https://github.com/Lesliam/openclassrooms_project12` },
          { code: `P13`, title: `Chess Opening Coach — POC FFE`, repo: `https://github.com/Lesliam/openclassrooms_project13` },
          { code: `P14`, title: `POC agent de triage médical`, repo: `https://github.com/Lesliam/openclassrooms_project14` },
          { code: `P15`, title: `Coach Vocal FR (projet final)`, repo: `https://github.com/Lesliam/openclassrooms-project15` }
        ]
      },
      reflexivite: {
        kicker: `Le carnet de marge`,
        title: `Réflexivité`,
        intro: `Ce que je referais autrement, ce qui a changé dans ma méthodologie, comment ma vision du métier a évolué.`,
        items: [
          { q: `Avec le recul, qu'aurais-tu fait différemment ?`, a: `Mettre en place dès le départ un système complet de compétences IA et de workflows structurés, pour éviter les cycles répétés d'explication et de conception d'un projet à l'autre, et instaurer un audit périodique de cet outillage, qui se dégrade en silence s'il n'est pas révisé.` },
          { q: `Qu'est-ce qui a changé dans ta méthodologie ?`, a: `Avant l'IA, mon travail d'ingénieur embarqué consistait à tout produire moi-même, de façon intégrée. Depuis l'arrivée des assistants IA, mon rôle a basculé vers le prompt engineering, la gestion de compétences et d'agents, et l'ingénierie de boucles de travail : je conçois le système et j'audite, les agents exécutent. J'ai transposé directement de l'automobile : produire les requirements avant de construire, imposer review et tests systématiques, garder toutes les étapes traçables. Ce que j'ai abandonné : la maîtrise ligne par ligne du code. Je suis désormais responsable de l'architecture.`, aside: `Je ne mémorise plus chaque ligne, mais je reste capable d'expliquer n'importe quelle ligne à la demande : chaque PR passe par ma revue avec quiz de compréhension avant d'être fusionnée. Ce qui a changé, c'est le niveau où réside ma maîtrise par défaut : l'architecture ; le zoom ligne à ligne reste disponible à tout moment.` },
          { q: `Comment ta perception du métier d'AI Engineer a-t-elle évolué ?`, a: `Au début, je pensais que ce métier se résumait à savoir utiliser l'IA. En réalité, il exige de comprendre tout le spectre : machine learning classique, fine-tuning, toutes les familles de techniques. Ma vision en 2026 : une relation de collaboration avec l'humain, où l'humain reste responsable de l'audit et de la conception du système, les agents étant chargés d'exécuter le travail avec efficacité.` },
          { q: `Quels sont tes axes d'amélioration et défis restants ?`, a: `Maintenir ma capacité d'apprentissage continu, car les technologies évoluent de jour en jour. Maintenant que l'IA a fait tomber les barrières techniques, le défi est de dépasser mon propre plafond en matière de conception et d'usage, car la différenciation ne se joue plus sur l'accès à la technique mais sur la qualité du design et de l'orchestration.` }
        ]
      },
      contact: {
        kicker: `Le mot de la fin`,
        title: `Contact & objectif`,
        objectiveTitle: `Objectif professionnel`,
        objectiveText: `Un poste d'AI Engineer à la croisée de l'IA embarquée (edge) et des systèmes auto-hébergés, là où la discipline de l'ingénierie temps réel rencontre l'ingénierie IA moderne. Un intérêt particulier pour les applications en santé (IRM cérébrales P10, agent de triage médical P14).`,
        languagesTitle: `Langues`,
        linksTitle: `Liens`,
        githubLabel: `GitHub`,
        linkedinLabel: `LinkedIn`,
        footerNote: `Yang FEI · alias Lesliam · Portfolio AI Engineer 2026`
      },
      common: {
        skipToContent: `Aller au contenu principal`,
        ariaLangChanged: `Langue changée pour le français`
      }
    },

    zh: {
      nav: {
        brandName: `费洋`,
        brandTag: `Lesliam · AI 工程师`,
        links: {
          parcours: `职业历程`,
          competences: `技能`,
          projetsOC: `OC 项目`,
          reflexivite: `反思总结`,
          contact: `联系方式`
        },
        langSwitchLabel: `语言`,
        themeToggleAria: `切换明亮或深色主题`,
        themeToggleLight: `主题：明亮`,
        themeToggleDark: `主题：深色`
      },
      hero: {
        eyebrow: `AI 工程师，从嵌入式转型到人工智能`,
        title: `费洋`,
        brandLine: `笔名「Lesliam」`,
        subtext: `九年嵌入式 BLE 工程经验，如今转向全栈人工智能：毕业作品把两者融合成一台自托管的边缘语音终端。`,
        objective: `正在寻找 AI 工程师岗位：边缘 AI 与自托管系统，尤其关注医疗健康（P10 脑部 MRI、P14 医疗分诊 agent）。`,
        ctaProject: `查看最终项目（P15）`,
        ctaSkills: `查看技能`,
        ctaContact: `联系我`,
        heroImgAlt: `Lesliam，作品集的吉祥物角色，站立微笑`,
        chapterTag: `第一章`
      },
      parcours: {
        kicker: `职业历程，以四个章节讲述`,
        storyTitle: `从 BLE 芯片到 AI 智能体`,
        title: `职业历程`,
        intro: `九年汽车嵌入式工程经验，随后完全转型进入人工智能工程领域 —— OpenClassrooms AI 工程师课程，14 个项目，从经典建模到大语言模型智能体。下面的每一章都是这段故事的一幕。`,
        chapters: [
          {
            chapNum: `01`, chapLabel: `第一章 · 2009 – 2015`, title: `根基`,
            lead: `一切始于电子学。在大连海事大学学习电子与通信工程，随后在奥尔良理工学院（Polytech Orléans）学习电子光学生态技术，主修自主系统方向。`,
            imgAlt: `场景：Lesliam 身为学生，被电子与通信原理图环绕。`,
            stamps: [{ year: `2009–2012`, org: `大连` }, { year: `2012–2015`, org: `奥尔良理工学院` }]
          },
          {
            chapNum: `02`, chapLabel: `第二章 · 2014 – 2015`, title: `初试身手`,
            lead: `两段实习铺就了道路。先在 PRISME 实验室用 C++ 进行医学图像处理，随后在 MAATEL 评估面向医疗与工业电子的蓝牙 / Bluetooth Smart 方案。无线技术由此成为志向。`,
            imgAlt: `场景：Lesliam 在实习期间，专注于图像处理与蓝牙模块的工作。`,
            stamps: [{ year: `2014`, org: `PRISME · C++` }, { year: `2015`, org: `MAATEL · BLE` }]
          },
          {
            chapNum: `03`, chapLabel: `第三章 · 2016 – 2025`, title: `嵌入式时代`,
            lead: `九年深耕核心业务。先在 IT Link（外派 Valeo）完成首个汽车 BLE 方案，随后在 Valeo 克雷泰伊负责 BLE 平台：架构、规格、实现、单元与集成测试。ARM Cortex-M / RTOS、JWT / RSA / ECC 安全机制、BLE 芯片上的引导程序与 OTA。`,
            imgAlt: `场景：Lesliam 作为嵌入式工程师，展示一套汽车 BLE 平台。`,
            stamps: [{ year: `2016–2018`, org: `IT Link` }, { year: `2018–2025`, org: `Valeo，克雷泰伊` }]
          },
          {
            chapNum: `04`, chapLabel: `第四章 · 2025 – 2026`, title: `转型人工智能`,
            lead: `纵身一跃。完整的 OpenClassrooms AI 工程师课程：14 个项目，从经典机器学习到大语言模型智能体（P2 至 P15）。来自汽车行业的习惯 —— 需求先行、系统性评审、可追溯性 —— 变成了一套人工智能工程方法论。`,
            imgAlt: `场景：Lesliam 面对一面人工智能项目展示板，处于 AI 工程师转型之中。`,
            stamps: [{ year: `2025–2026`, org: `OpenClassrooms` }, { year: `14`, org: `个项目 · P2 至 P15` }]
          }
        ],
        languagesTitle: `语言能力`,
        languages: [`法语流利（TCF B2）`, `英语流利（TOEIC 855/990）`, `中文 —— 母语`]
      },
      competences: {
        kicker: `工作坊`,
        title: `技能`,
        intro: `五个技术分支与六项软技能，每一项都对应可验证的项目证据。以下掌握程度为个人评估结果。`,
        atelierCaption: `工作台：不同的工具，同一种质量文化。`,
        mindMapLink: `查看完整思维导图`,
        atelierImgAlt: `Lesliam 在工作坊中忙碌，周围环绕着各个技能分支的工具。`,
        branches: [
          {
            id: `ia-ml`, title: `人工智能 / 机器学习`,
            skills: [
              { name: `经典机器学习`, level: 4, evidence: `P3、P4、P5、P6、P8` },
              { name: `计算机视觉`, level: 3, evidence: `P2、P10` },
              { name: `自然语言处理 / 大语言模型`, level: 4, evidence: `P7、P13、P14` },
              { name: `检索增强生成（RAG）`, level: 4, evidence: `P7` },
              { name: `LLM 智能体 · LangChain / LangGraph`, level: 4, evidence: `P7 · P13` },
              { name: `微调（SFT / DPO）`, level: 4, evidence: `P14 + 个人训练实验` },
              { name: `强化学习`, level: 3, evidence: `P11` }
            ]
          },
          {
            id: `mlops`, title: `MLOps`,
            skills: [
              { name: `MLflow —— 生命周期管理`, level: 4, evidence: `P6` },
              { name: `模型服务 API`, level: 4, evidence: `P5、P8` },
              { name: `CI/CD · GitHub Actions`, level: 4, evidence: `P5 · P8 · P14` },
              { name: `模型量化`, level: 3, evidence: `Coach FR (P15)` },
              { name: `监控 · 漂移检测（Evidently）`, level: 4, evidence: `P8` },
              { name: `GDPR · 匿名化`, level: 3, evidence: `P14` }
            ]
          },
          {
            id: `embarque`, title: `嵌入式`,
            skills: [
              { name: `嵌入式 C`, level: 5, evidence: `9 年，Valeo / IT Link` },
              { name: `Cortex-M / RTOS`, level: 5, evidence: `9 年，Valeo / IT Link` },
              { name: `低功耗蓝牙（BLE）`, level: 5, evidence: `核心专长，9 年` },
              { name: `引导程序 / OTA 升级`, level: 4, evidence: `Valeo —— BLE 芯片，基于 LIN` },
              { name: `安全（JWT / RSA / ECC）`, level: 4, evidence: `Valeo` }
            ]
          },
          {
            id: `infra`, title: `基础设施 / 自托管`,
            skills: [
              { name: `Linux 系统管理`, level: 4, evidence: `自主管理的 CachyOS 工作站` },
              { name: `GPU / 本地算力`, level: 4, evidence: `RTX 5080，本地微调` },
              { name: `Docker · 容器化`, level: 4, evidence: `NAS + AI 工作站，OC 项目部署` },
              { name: `自托管大语言模型（Ollama）`, level: 4, evidence: `日常使用` },
              { name: `智能家居（Home Assistant）`, level: 4, evidence: `Wyoming 语音技术栈` }
            ]
          },
          {
            id: `demo`, wide: true, title: `演示与技术科普`,
            skills: [
              { name: `Gradio`, level: 3, evidence: `P15 语音教练的 POC 与演示` },
              { name: `Streamlit`, level: 3, evidence: `轻量数据 / ML 演示应用` }
            ]
          }
        ],
        softTitle: `软技能`,
        softIntro: `六项跨领域能力，均有具体证据支持。`,
        softSkills: [
          { title: `严谨性与质量文化`, proof: `9 年汽车行业质量流程经验（规格制定 → 设计 → 实现 → 测试）` },
          { title: `自主性与持续学习`, proof: `完整职业转型 + 自主管理的个人 AI 基础设施` },
          { title: `问题解决能力`, proof: `从嵌入式调试到机器学习流水线调试` },
          { title: `跨文化沟通`, proof: `法语 / 英语 / 中文三语，跨国与多元文化团队协作` },
          { title: `教学能力与技术科普`, proof: `三语学习资料，将复杂技术讲解得通俗易懂` },
          { title: `约束条件下的项目管理与取舍`, proof: `项目范围界定与取舍（P9、P15）` }
        ],
        synthese: [
          {
            id: `infra-perso`,
            title: `个人基础设施（生产运行中）`,
            lead: `三套自行设计、部署并每日使用的家庭系统，均在课程范围之外。`,
            items: [
              { name: `LearnForge —— 间隔重复复习（FSRS）`, note: `自行开发并每日使用的记忆应用。` },
              { name: `Whisper / Piper / Home Assistant 语音技术栈`, note: `在家中生产运行，直接服务于 P15 项目。` },
              { name: `ai-agent-system —— AI 智能体编排`, note: `工作流、Linear 工单、持久化记忆。` }
            ]
          },
          {
            id: `fil-rouge`,
            title: `主线 —— 独特的交叉点`,
            lead: `九年嵌入式工程的严谨（KB 级内存预算、实时性、OTA、安全）与完整的人工智能工程能力相交叉：P15 项目正是两段职业生涯的融合。`,
            items: [
              { name: `Cortex-M / RTOS + 大语言模型微调`, note: `同时掌握这两个领域的人非常少。` },
              { name: `汽车质量文化 → MLOps`, note: `规格、测试、可追溯性可直接迁移：可复现性、审计、回滚。` },
              { name: `自主能力的证据`, note: `完整的个人 AI 基础设施，多个个人项目在家中生产运行。` },
              { name: `三语：法语 / 英语 / 中文`, note: `面向国际化与多元文化团队的优势。` }
            ]
          }
        ]
      },
      projet: {
        kicker: `焦点 · 最终项目深度解析`,
        title: `最终项目 · P15 —— 法语语音教练`,
        context: `P15 的技术项目，OpenClassrooms AI 工程师课程（14 个项目，P2 至 P15）的最终项目：一个随时可在家使用的法语口语练习伙伴，按照固定的教学格式纠正语言错误，并模拟经理的提问 —— 且不将对话内容发送至云端服务。`,
        needTitle: `为什么需要一台专用语音终端`,
        needText: `口语练习需要真正的语音交互，而非文字聊天机器人；也需要一个随时待命的实体设备，而不是要打开笔记本电脑。这台设备同时也象征着两段职业生涯的交汇：嵌入式终端与自托管智能。`,
        archTitle: `最终架构 —— 边缘端 / 服务器级联`,
        archImg: `assets/arch/architecture_zh.png`,
        archImgAlt: `手绘架构插画：Coach Vocal FR 的边缘/服务器级联架构，ESP32-S3 终端通过 Wi-Fi 连接到本地 RTX 5080 服务器。`,
        archNodes: {
          terminalTitle: `ESP32-S3 终端`,
          terminalItems: [`麦克风 + 音频前端处理（AFE）`, `设备端唤醒词检测（ESPHome + microWakeWord）`, `扬声器 + 屏幕`],
          arrowOut: `Wi-Fi / 局域网`,
          serverTitle: `本地服务器 —— RTX 5080`,
          serverItems: [`Whisper —— 语音识别（STT）`, `教练大语言模型 —— Ollama qwen2.5:14b`, `Piper —— 语音合成（TTS）`, `Home Assistant 编排调度`],
          arrowBack: `语音回复`,
          privacyNote: `所有数据均不离开本地局域网。`
        },
        pillarsTitle: `两大 AI 方法论支柱`,
        pillar1: {
          title: `唤醒词模型（KWS）生命周期`,
          steps: [`训练自定义唤醒词`, `模型量化`, `OTA 部署`, `置信度遥测`, `漂移监控`, `重新训练`]
        },
        pillar2: {
          title: `教练行为 —— 微调与提示词工程对比，附验证证据`,
          text: `本地微调（SFT/DPO）的目标是行为一致性 —— 仅使用法语、固定的纠错格式、苏格拉底式追问 —— 以及在长上下文中抵抗漂移的能力，而非知识注入。验证方式：在同一测试集上，对提示词基线与微调后模型进行对比评估。`
        },
        methodTitle: `执行方法`,
        methodText: `以「AI 智能体团队」模式推进的 4 周冲刺：拆解为 Linear 工单，多个开发智能体并行工作，每次交付都经过系统性的人工审查并附代码理解测验。范围调整决策沿预先设定的降级方案逐级记录。`,
        linksTitle: `相关链接`,
        repoLabel: `查看公开代码仓库`,
        reportLink: `项目管理报告（PDF）`
      },
      projetsOC: {
        kicker: `作品文库`,
        title: `OpenClassrooms 项目`,
        intro: `以下是代表性交付成果的精选，作为上述技能的证据。完整课程共 14 个项目（P2 至 P15）；最终项目 P15 位于下方精选列表的末尾。`,
        flagshipTag: `最终项目`,
        cards: [
          { code: `P6`, title: `信用评分系统 —— MLOps`, desc: `首个完整的 MLOps 闭环：生命周期管理、MLflow、可复现性。`, tags: [`MLOps`, `MLflow`], repo: `https://github.com/Lesliam/openclassrooms_project6` },
          { code: `P7`, title: `CultuRAG`, desc: `文化推荐聊天机器人：RAG、向量检索、大语言模型。`, tags: [`RAG`, `大语言模型`], repo: `https://github.com/Lesliam/openclassrooms_project7` },
          { code: `P8`, title: `信用评分 API`, desc: `为 Prêt à Dépenser 部署的评分模型生产化上线。`, tags: [`API`, `生产部署`], repo: `https://github.com/Lesliam/openclassrooms_project8` },
          { code: `P10`, title: `脑部 MRI 分类`, desc: `半监督辅助诊断：脑部 MRI 正常 / 癌症分类，1500 张图像仅 100 张有标注，ResNet50 嵌入 + 标签传播。`, tags: [`半监督`, `医疗健康`], repo: `https://github.com/Lesliam/openclassrooms_project10` },
          { code: `P13`, title: `国际象棋开局教练`, desc: `面向法国国际象棋联合会的端到端 AI 产品概念验证。`, tags: [`AI 产品`, `概念验证`], repo: `https://github.com/Lesliam/openclassrooms_project13` },
          { code: `P14`, title: `医疗分诊智能体`, desc: `大语言模型智能体概念验证：编排调度与微调。`, tags: [`LLM 智能体`, `微调`], repo: `https://github.com/Lesliam/openclassrooms_project14` },
          { code: `P15`, title: `法语语音教练`, desc: `自托管边缘语音终端：法语口语教练，数据不出局域网。`, tags: [`边缘 AI`, `自托管`], repo: `https://github.com/Lesliam/openclassrooms-project15`, flagship: true }
        ],
        repoAsk: `去看看 ?`,
        opensNewTabHint: `（在新标签页中打开）`,
        viewRepoLabel: `查看代码仓库`,
        allTitle: `全部项目`,
        allMeta: `P2 – P15 · 共 14 个项目`,
        allProjects: [
          { code: `P2`, title: `服装图像分割（Hugging Face API）+ GDPR/AI Act 合规`, repo: `https://github.com/Lesliam/openclassrooms_project2` },
          { code: `P3`, title: `建筑能耗基准分析（西雅图）`, repo: `https://github.com/Lesliam/openclassrooms_project3` },
          { code: `P4`, title: `人力资源分类 —— 员工流失预测（TechNova）`, repo: `https://github.com/Lesliam/openclassrooms_project4` },
          { code: `P5`, title: `模型生产部署 —— FastAPI（Futurisys）`, repo: `https://github.com/Lesliam/openclassrooms_project5` },
          { code: `P6`, title: `信用评分系统（MLOps）`, repo: `https://github.com/Lesliam/openclassrooms_project6` },
          { code: `P7`, title: `CultuRAG —— 文化推荐聊天机器人`, repo: `https://github.com/Lesliam/openclassrooms_project7` },
          { code: `P8`, title: `信用评分 API（Prêt à Dépenser）`, repo: `https://github.com/Lesliam/openclassrooms_project8` },
          { code: `P9`, title: `Fashion-Insta —— AI 智能取景`, repo: `https://github.com/Lesliam/openclassrooms_project9` },
          { code: `P10`, title: `医疗影像半监督分析`, repo: `https://github.com/Lesliam/openclassrooms_project10` },
          { code: `P11`, title: `强化学习智能体 —— 月球着陆器`, repo: `https://github.com/Lesliam/openclassrooms_project11` },
          { code: `P12`, title: `网站多模态数据提取`, repo: `https://github.com/Lesliam/openclassrooms_project12` },
          { code: `P13`, title: `国际象棋开局教练 —— FFE 概念验证`, repo: `https://github.com/Lesliam/openclassrooms_project13` },
          { code: `P14`, title: `医疗分诊智能体概念验证`, repo: `https://github.com/Lesliam/openclassrooms_project14` },
          { code: `P15`, title: `法语语音教练（最终项目）`, repo: `https://github.com/Lesliam/openclassrooms-project15` }
        ]
      },
      reflexivite: {
        kicker: `边页笔记`,
        title: `反思总结`,
        intro: `回顾中会做出哪些不同的选择、方法论发生了怎样的变化、对这一职业角色的认知如何演进。`,
        items: [
          { q: `回顾整个学习过程，你会有哪些不同的做法？`, a: `从一开始就搭建一套完整的 AI 技能体系和结构化工作流程，避免在每个项目中重复相同的解释与设计过程 —— 并定期审计这套工具体系，因为任何长期不被复查的工具都会在无声中退化。` },
          { q: `你的方法论发生了哪些变化？`, a: `在 AI 出现之前，作为嵌入式工程师，我的工作是端到端地独立完成一切：规格、代码、测试。AI 助手出现之后，我的角色转向了提示词工程、技能与智能体管理，以及工作流工程 —— 由人来设计系统并进行审计，由智能体来高效执行。我把汽车行业的经验直接迁移过来：先写需求再动手构建，始终坚持系统性的评审与测试，保持每一步可追溯。我放弃的是逐行掌握代码的方式 —— 现在我负责的是架构：了解项目的整体结构、每个文件的作用，并能定位到出问题的具体文件，而不必记住每一行代码。`, aside: `我不再记住每一行代码，但仍然能够在需要时解释任意一行代码：每个 PR 在合并前都要经过我的评审并附代码理解测验。真正改变的是我默认掌握力所处的层级 —— 从代码行级转向了架构级；逐行的细节视角随时仍可调用。` },
          { q: `你对 AI 工程师这一角色的认知是如何演变的？`, a: `最初我以为这份工作的核心就是会用 AI。但现实要求理解整个技术谱系 —— 经典机器学习、微调，以及所有技术流派。我在 2026 年的理解是：这是一种人机协作关系 —— 人负责系统的审计与设计，智能体负责高效执行工作。` },
          { q: `你认为自己还有哪些提升空间和待解决的挑战？`, a: `保持持续学习的能力，因为 AI 技术每天都在演进。既然 AI 已经消除了技术门槛，真正的挑战在于突破自己在设计与应用层面的天花板 —— 差异化不再取决于是否掌握技术本身，而取决于设计与编排的质量。` }
        ]
      },
      contact: {
        kicker: `结语`,
        title: `联系方式与职业目标`,
        objectiveTitle: `职业目标`,
        objectiveText: `希望从事一个处于边缘 AI 与自托管系统交汇处的 AI 工程师岗位 —— 让实时工程的严谨性与现代 AI 工程相遇。尤其关注医疗健康领域的应用（P10 脑部 MRI、P14 医疗分诊 agent）。`,
        languagesTitle: `语言能力`,
        linksTitle: `相关链接`,
        githubLabel: `GitHub`,
        linkedinLabel: `LinkedIn`,
        footerNote: `费洋 · 笔名 Lesliam · AI 工程师作品集 2026`
      },
      common: {
        skipToContent: `跳转到主要内容`,
        ariaLangChanged: `语言已切换为中文`
      }
    },

    en: {
      nav: {
        brandName: `Yang FEI`,
        brandTag: `Lesliam · AI Engineer`,
        links: {
          parcours: `Journey`,
          competences: `Skills`,
          projetsOC: `OC projects`,
          reflexivite: `Reflection`,
          contact: `Contact`
        },
        langSwitchLabel: `Language`,
        themeToggleAria: `Switch between light and dark theme`,
        themeToggleLight: `Theme: light`,
        themeToggleDark: `Theme: dark`
      },
      hero: {
        eyebrow: `AI Engineer, from embedded systems to AI`,
        title: `Yang FEI`,
        brandLine: `aka "Lesliam"`,
        subtext: `Nine years of embedded BLE engineering, now AI engineering. The final project fuses both into a self-hosted edge voice terminal.`,
        objective: `Seeking an AI Engineer role — edge AI and self-hosted systems, with a strong interest in healthcare (brain-MRI classification P10, medical triage agent P14).`,
        ctaProject: `See the final project (P15)`,
        ctaSkills: `See the skills`,
        ctaContact: `Contact me`,
        heroImgAlt: `Lesliam, the portfolio mascot, standing and smiling`,
        chapterTag: `chapter one`
      },
      parcours: {
        kicker: `The journey, told in four chapters`,
        storyTitle: `From a BLE SoC to an AI agent`,
        title: `Journey`,
        intro: `Nine years of automotive embedded engineering, then a full reconversion into AI engineering: the OpenClassrooms AI Engineer program, 14 projects, from classic modeling to LLM agents. Each chapter below is a scene from that story.`,
        chapters: [
          {
            chapNum: `01`, chapLabel: `Chapter 01 · 2009 – 2015`, title: `The foundations`,
            lead: `It all starts with electronics. Electronics and telecommunications engineering at Dalian Maritime University, then electronic and optical eco-technologies at Polytech Orléans, autonomous systems track.`,
            imgAlt: `Scene: Lesliam as a student, surrounded by electronics and telecommunications diagrams.`,
            stamps: [{ year: `2009–2012`, org: `Dalian` }, { year: `2012–2015`, org: `Polytech Orléans` }]
          },
          {
            chapNum: `02`, chapLabel: `Chapter 02 · 2014 – 2015`, title: `First steps`,
            lead: `Two internships set the course. Medical image processing in C++ at the PRISME laboratory, then evaluating Bluetooth / Bluetooth Smart solutions at MAATEL for medical and industrial electronics. Wireless becomes a calling.`,
            imgAlt: `Scene: Lesliam on internship, working on image processing and Bluetooth modules.`,
            stamps: [{ year: `2014`, org: `PRISME · C++` }, { year: `2015`, org: `MAATEL · BLE` }]
          },
          {
            chapNum: `03`, chapLabel: `Chapter 03 · 2016 – 2025`, title: `The embedded era`,
            lead: `Nine years at the heart of the trade. A first automotive BLE solution at IT Link (Valeo assignment), then the Valeo BLE platform in Créteil: architecture, specification, implementation, unit and integration testing. ARM Cortex-M / RTOS, JWT / RSA / ECC security, bootloader and OTA on a BLE SoC.`,
            imgAlt: `Scene: Lesliam as an embedded engineer, presenting an automotive BLE platform.`,
            stamps: [{ year: `2016–2018`, org: `IT Link` }, { year: `2018–2025`, org: `Valeo, Créteil` }]
          },
          {
            chapNum: `04`, chapLabel: `Chapter 04 · 2025 – 2026`, title: `The AI reconversion`,
            lead: `The big leap. Full OpenClassrooms AI Engineer program: 14 projects, from classic machine learning to LLM agents (P2 to P15). Automotive habits — requirements first, systematic review, traceability — become an AI engineering method.`,
            imgAlt: `Scene: Lesliam facing a board of AI projects, mid-reconversion as an AI Engineer.`,
            stamps: [{ year: `2025–2026`, org: `OpenClassrooms` }, { year: `14`, org: `projects · P2 to P15` }]
          }
        ],
        languagesTitle: `Languages`,
        languages: [`French (fluent, TCF B2)`, `English (fluent, TOEIC 855/990)`, `Chinese (native)`]
      },
      competences: {
        kicker: `The workshop`,
        title: `Skills`,
        intro: `Five technical branches and six soft skills, each tied to the projects that prove them. The mastery levels below are an editorial self-assessment.`,
        atelierCaption: `The workbench: different tools, one shared quality culture.`,
        mindMapLink: `View the full mind map`,
        atelierImgAlt: `Lesliam at work in his workshop, surrounded by the tools of his skill branches.`,
        branches: [
          {
            id: `ia-ml`, title: `AI / Machine Learning`,
            skills: [
              { name: `Classic machine learning`, level: 4, evidence: `P3, P4, P5, P6, P8` },
              { name: `Computer vision`, level: 3, evidence: `P2, P10` },
              { name: `NLP / LLM`, level: 4, evidence: `P7, P13, P14` },
              { name: `RAG (retrieval-augmented generation)`, level: 4, evidence: `P7` },
              { name: `LLM agents · LangChain / LangGraph`, level: 4, evidence: `P7 · P13` },
              { name: `Fine-tuning (SFT / DPO)`, level: 4, evidence: `P14 + personal runs` },
              { name: `Reinforcement learning`, level: 3, evidence: `P11` }
            ]
          },
          {
            id: `mlops`, title: `MLOps`,
            skills: [
              { name: `MLflow (lifecycle)`, level: 4, evidence: `P6` },
              { name: `Serving API`, level: 4, evidence: `P5, P8` },
              { name: `CI/CD · GitHub Actions`, level: 4, evidence: `P5 · P8 · P14` },
              { name: `Model quantization`, level: 3, evidence: `Coach FR (P15)` },
              { name: `Monitoring · drift (Evidently)`, level: 4, evidence: `P8` },
              { name: `GDPR · anonymization`, level: 3, evidence: `P14` }
            ]
          },
          {
            id: `embarque`, title: `Embedded`,
            skills: [
              { name: `Embedded C`, level: 5, evidence: `9 years, Valeo / IT Link` },
              { name: `Cortex-M / RTOS`, level: 5, evidence: `9 years, Valeo / IT Link` },
              { name: `Bluetooth Low Energy`, level: 5, evidence: `core expertise, 9 years` },
              { name: `Bootloader / OTA`, level: 4, evidence: `Valeo, BLE SoC, LIN base` },
              { name: `Security (JWT / RSA / ECC)`, level: 4, evidence: `Valeo` }
            ]
          },
          {
            id: `infra`, title: `Infrastructure / self-hosting`,
            skills: [
              { name: `Linux administration`, level: 4, evidence: `self-managed CachyOS workstation` },
              { name: `GPU / local compute`, level: 4, evidence: `RTX 5080, local fine-tuning` },
              { name: `Docker · containerization`, level: 4, evidence: `NAS + AI workstation, OC deployments` },
              { name: `Self-hosted LLMs (Ollama)`, level: 4, evidence: `daily use` },
              { name: `Home automation (Home Assistant)`, level: 4, evidence: `Wyoming voice stack` }
            ]
          },
          {
            id: `demo`, wide: true, title: `Demo & technical communication`,
            skills: [
              { name: `Gradio`, level: 3, evidence: `voice coach POC and demo (P15)` },
              { name: `Streamlit`, level: 3, evidence: `lightweight data / ML demos` }
            ]
          }
        ],
        softTitle: `Soft skills`,
        softIntro: `Six transversal skills, each tied to concrete proof.`,
        softSkills: [
          { title: `Rigor and quality culture`, proof: `9 years of automotive quality process (specification → design → implementation → test)` },
          { title: `Autonomy and continuous learning`, proof: `full career reconversion + self-managed personal AI infrastructure` },
          { title: `Problem solving`, proof: `from embedded debugging to ML pipeline debugging` },
          { title: `Cross-cultural communication`, proof: `trilingual FR/EN/ZH, international and multicultural teams` },
          { title: `Teaching and technical communication`, proof: `trilingual study guides, explaining complex tech simply` },
          { title: `Project management and trade-offs under constraint`, proof: `scoping and trade-offs (P9, P15)` }
        ],
        synthese: [
          {
            id: `infra-perso`,
            title: `Personal infrastructure in production`,
            lead: `Three systems designed, deployed and used every day at home, outside any coursework.`,
            items: [
              { name: `LearnForge — spaced repetition (FSRS)`, note: `A memorization app built and used daily.` },
              { name: `Whisper / Piper / Home Assistant voice stack`, note: `Running in production at home; it directly serves the P15 project.` },
              { name: `ai-agent-system — AI agent orchestration`, note: `Workflows, Linear tickets, persistent memory.` }
            ]
          },
          {
            id: `fil-rouge`,
            title: `The through line — a rare crossing`,
            lead: `Nine years of embedded discipline (kilobyte memory budgets, real time, OTA, security) crossed with full AI engineering: P15 is literally the fusion of both careers.`,
            items: [
              { name: `Cortex-M / RTOS + LLM fine-tuning`, note: `Very few profiles cover both fields.` },
              { name: `Automotive quality to MLOps`, note: `Specification, test and traceability transfer directly: reproducibility, audit, rollback.` },
              { name: `Autonomy, evidenced`, note: `A complete personal AI infrastructure, personal projects running in production at home.` },
              { name: `Trilingual FR / EN / ZH`, note: `An asset for international, multicultural teams.` }
            ]
          }
        ]
      },
      projet: {
        kicker: `The focus · Final project, in depth`,
        title: `Final project · P15: French Voice Coach`,
        context: `The technical project of P15, the final/capstone project of the OpenClassrooms AI Engineer program (14 projects, P2 to P15): a French speaking-practice partner, available at home at any time, that corrects language mistakes with a consistent pedagogical format and simulates a manager's questions, without sending conversations to a cloud service.`,
        needTitle: `Why a dedicated voice terminal`,
        needText: `Oral practice needs a voice, not a text chatbot, and an object that is always ready rather than a laptop to open. The object also embodies the meeting of both careers: an embedded terminal and self-hosted intelligence.`,
        archTitle: `The retained architecture: an edge / server cascade`,
        archImg: `assets/arch/architecture_en.png`,
        archImgAlt: `Hand-drawn illustration of the Coach Vocal FR edge/server cascade architecture: an ESP32-S3 terminal connected over Wi-Fi to a local RTX 5080 server.`,
        archNodes: {
          terminalTitle: `ESP32-S3 terminal`,
          terminalItems: [`Microphone + AFE`, `On-device wake word (ESPHome + microWakeWord)`, `Speaker + screen`],
          arrowOut: `Wi-Fi / LAN`,
          serverTitle: `Local server (RTX 5080)`,
          serverItems: [`Whisper: speech-to-text (STT)`, `Coach LLM: Ollama qwen2.5:14b`, `Piper: text-to-speech (TTS)`, `Home Assistant orchestration`],
          arrowBack: `audio response`,
          privacyNote: `No data ever leaves the local network.`
        },
        pillarsTitle: `Two AI methodology pillars`,
        pillar1: {
          title: `Wake-word model (KWS) lifecycle`,
          steps: [`Train a custom wake word`, `Quantize`, `OTA deployment`, `Confidence telemetry`, `Drift monitoring`, `Retraining`]
        },
        pillar2: {
          title: `Coach behavior: fine-tuning vs prompting, with proof`,
          text: `Local fine-tuning (SFT/DPO) targets behavioral consistency (French only, a fixed correction format, Socratic follow-ups) and resistance to long-context drift, not knowledge injection. Proof: a comparative evaluation of the prompt baseline versus the fine-tuned model on the same test set.`
        },
        methodTitle: `Execution method`,
        methodText: `A 4-week sprint run in an AI-agent-team mode: decomposition into Linear tickets, parallel development agents, systematic human review of every delivery with a code-comprehension quiz. Scope decisions tracked against a predefined descope ladder.`,
        linksTitle: `Links`,
        repoLabel: `View the public repository`,
        reportLink: `Project management report (PDF)`
      },
      projetsOC: {
        kicker: `The library of works`,
        title: `OpenClassrooms projects`,
        intro: `A selection of representative deliverables, proof of the skills above. The full program spans 14 projects (P2 to P15); P15, the final project, closes out the selection below.`,
        flagshipTag: `Final project`,
        cards: [
          { code: `P6`, title: `Credit Scoring System (MLOps)`, desc: `First complete MLOps loop: lifecycle, MLflow, reproducibility.`, tags: [`MLOps`, `MLflow`], repo: `https://github.com/Lesliam/openclassrooms_project6` },
          { code: `P7`, title: `CultuRAG`, desc: `Cultural recommendation chatbot: RAG, vector search, LLM.`, tags: [`RAG`, `LLM`], repo: `https://github.com/Lesliam/openclassrooms_project7` },
          { code: `P8`, title: `Credit Scoring API`, desc: `Production deployment of a scoring model for Prêt à Dépenser.`, tags: [`API`, `Production`], repo: `https://github.com/Lesliam/openclassrooms_project8` },
          { code: `P10`, title: `Brain MRI classification`, desc: `Semi-supervised assisted diagnosis: brain MRI Normal / Cancer, 100 labeled images out of 1,500, ResNet50 embeddings then label spreading.`, tags: [`Semi-supervised`, `Healthcare`], repo: `https://github.com/Lesliam/openclassrooms_project10` },
          { code: `P13`, title: `Chess Opening Coach`, desc: `End-to-end AI product proof of concept for the French Chess Federation.`, tags: [`AI product`, `POC`], repo: `https://github.com/Lesliam/openclassrooms_project13` },
          { code: `P14`, title: `Medical triage agent`, desc: `LLM agent proof of concept: orchestration and fine-tuning.`, tags: [`LLM agents`, `Fine-tuning`], repo: `https://github.com/Lesliam/openclassrooms_project14` },
          { code: `P15`, title: `French Voice Coach`, desc: `Self-hosted edge voice terminal: a French speaking coach, no cloud.`, tags: [`Edge AI`, `Self-hosted`], repo: `https://github.com/Lesliam/openclassrooms-project15`, flagship: true }
        ],
        repoAsk: `Take a look ?`,
        opensNewTabHint: `(opens in a new tab)`,
        viewRepoLabel: `View the repo`,
        allTitle: `All projects`,
        allMeta: `P2 – P15 · 14 projects`,
        allProjects: [
          { code: `P2`, title: `Clothing segmentation (Hugging Face API) + GDPR/AI Act compliance`, repo: `https://github.com/Lesliam/openclassrooms_project2` },
          { code: `P3`, title: `Building energy benchmarking (Seattle)`, repo: `https://github.com/Lesliam/openclassrooms_project3` },
          { code: `P4`, title: `HR classification — employee turnover (TechNova)`, repo: `https://github.com/Lesliam/openclassrooms_project4` },
          { code: `P5`, title: `Production model deployment — FastAPI (Futurisys)`, repo: `https://github.com/Lesliam/openclassrooms_project5` },
          { code: `P6`, title: `Credit Scoring System (MLOps)`, repo: `https://github.com/Lesliam/openclassrooms_project6` },
          { code: `P7`, title: `CultuRAG — cultural recommendation chatbot`, repo: `https://github.com/Lesliam/openclassrooms_project7` },
          { code: `P8`, title: `Credit Scoring API (Prêt à Dépenser)`, repo: `https://github.com/Lesliam/openclassrooms_project8` },
          { code: `P9`, title: `Fashion-Insta — AI framing`, repo: `https://github.com/Lesliam/openclassrooms_project9` },
          { code: `P10`, title: `Semi-supervised medical image analysis`, repo: `https://github.com/Lesliam/openclassrooms_project10` },
          { code: `P11`, title: `RL agent — lunar lander`, repo: `https://github.com/Lesliam/openclassrooms_project11` },
          { code: `P12`, title: `Multimodal data extraction from websites`, repo: `https://github.com/Lesliam/openclassrooms_project12` },
          { code: `P13`, title: `Chess Opening Coach — FFE POC`, repo: `https://github.com/Lesliam/openclassrooms_project13` },
          { code: `P14`, title: `Medical triage agent POC`, repo: `https://github.com/Lesliam/openclassrooms_project14` },
          { code: `P15`, title: `French Voice Coach (final project)`, repo: `https://github.com/Lesliam/openclassrooms-project15` }
        ]
      },
      reflexivite: {
        kicker: `The margin notebook`,
        title: `Reflection`,
        intro: `What I'd do differently, what changed in my methodology, how my view of the role evolved.`,
        items: [
          { q: `Looking back, what would you have done differently?`, a: `Set up a complete system of AI skills and structured workflows from day one, to avoid repeating the same explanation-and-design cycle on every project, and run periodic audits of that tooling, since anything left unreviewed silently degrades.` },
          { q: `What changed in your methodology?`, a: `Before AI, my job as an embedded engineer was to produce everything myself, end to end. Since AI assistants arrived, my role shifted to prompt engineering, skill/agent management, and workflow engineering: I design the system and audit it, the agents execute. I carried over habits directly from automotive: write requirements before building, enforce systematic review and testing, keep every step traceable. What I gave up: line-by-line mastery of the code. I'm now responsible for the architecture.`, aside: `I no longer memorize every line, but I can still explain any line on demand: every pull request goes through my review with a comprehension quiz before merging. What changed is the level where my default mastery lives: the architecture; the line-by-line zoom remains available at any time.` },
          { q: `How has your perception of the AI Engineer role evolved?`, a: `At first I thought the job came down to knowing how to use AI. In reality it requires understanding the full spectrum: classic machine learning, fine-tuning, every family of technique. My view in 2026: a collaborative relationship with humans. The human is responsible for auditing and designing the system; the agents are responsible for executing the work efficiently.` },
          { q: `What are your remaining growth areas and challenges?`, a: `Keeping up continuous learning, since AI technology moves day by day. Now that AI has removed the technical barriers, the challenge is to push past my own ceiling in design and usage, where differentiation no longer comes from access to the technique but from the quality of the design and the orchestration.` }
        ]
      },
      contact: {
        kicker: `The closing word`,
        title: `Contact & objective`,
        objectiveTitle: `Professional objective`,
        objectiveText: `An AI Engineer role at the intersection of edge AI and self-hosted systems, where the discipline of real-time engineering meets modern AI engineering. With a particular interest in healthcare applications (brain-MRI classification P10, medical triage agent P14).`,
        languagesTitle: `Languages`,
        linksTitle: `Links`,
        githubLabel: `GitHub`,
        linkedinLabel: `LinkedIn`,
        footerNote: `Yang FEI · aka Lesliam · AI Engineer Portfolio 2026`
      },
      common: {
        skipToContent: `Skip to main content`,
        ariaLangChanged: `Language switched to English`
      }
    }
  };

  var STORAGE_KEY = `portfolio-lang`;
  var DEFAULT_LANG = `fr`;
  var SUPPORTED = [`fr`, `zh`, `en`];
  var currentLang = DEFAULT_LANG;
  var listeners = [];

  function getByPath(obj, path) {
    var parts = path.split(`.`);
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function t(path) {
    var value = getByPath(DICT[currentLang], path);
    if (value === undefined) {
      value = getByPath(DICT[DEFAULT_LANG], path);
    }
    return value === undefined ? `` : value;
  }

  function getLang() {
    return currentLang;
  }

  function getDict() {
    return DICT[currentLang];
  }

  function onChange(callback) {
    listeners.push(callback);
  }

  function applyStaticBindings() {
    var nodes = document.querySelectorAll(`[data-i18n]`);
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute(`data-i18n`);
      var value = t(key);
      if (typeof value === `string`) {
        nodes[i].textContent = value;
      }
    }
    var attrNodes = document.querySelectorAll(`[data-i18n-attr]`);
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute(`data-i18n-attr`).split(`;`);
      for (var k = 0; k < pairs.length; k++) {
        var pair = pairs[k].split(`:`);
        if (pair.length === 2) {
          var attrName = pair[0].trim();
          var attrKey = pair[1].trim();
          var attrValue = t(attrKey);
          if (typeof attrValue === `string`) {
            attrNodes[j].setAttribute(attrName, attrValue);
          }
        }
      }
    }
  }

  function announce() {
    var region = document.getElementById(`aria-live-region`);
    if (region) {
      region.textContent = t(`common.ariaLangChanged`);
    }
  }

  function updateLangButtons() {
    var buttons = document.querySelectorAll(`.lang-switch__btn`);
    for (var i = 0; i < buttons.length; i++) {
      var isActive = buttons[i].getAttribute(`data-lang`) === currentLang;
      buttons[i].setAttribute(`aria-pressed`, isActive ? `true` : `false`);
    }
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    currentLang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — ignore, session-only language state */
    }
    document.documentElement.lang = lang;
    document.title = `Yang FEI (Lesliam) · Le cahier de Lesliam — AI Engineer Portfolio`;
    applyStaticBindings();
    updateLangButtons();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](lang);
    }
    announce();
  }

  function init() {
    var saved = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* localStorage unavailable — fall back to default lang */
    }
    var initialLang = SUPPORTED.indexOf(saved) !== -1 ? saved : DEFAULT_LANG;
    currentLang = initialLang;
    document.documentElement.lang = initialLang;
    applyStaticBindings();
    updateLangButtons();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](initialLang);
    }
  }

  window.I18N = {
    t: t,
    getLang: getLang,
    getDict: getDict,
    setLang: setLang,
    onChange: onChange,
    init: init,
    SUPPORTED: SUPPORTED
  };
})();
