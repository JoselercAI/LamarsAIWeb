<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LAMARS | The AI Workspace For Real Estate Teams</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "on-primary-fixed": "#001c39",
                        "outline": "#717783",
                        "on-error-container": "#93000a",
                        "surface-container": "#eeeeee",
                        "on-tertiary": "#ffffff",
                        "outline-variant": "#c0c7d4",
                        "on-error": "#ffffff",
                        "secondary-container": "#b8d3fd",
                        "inverse-on-surface": "#f1f1f1",
                        "on-primary-fixed-variant": "#004883",
                        "background": "#f9f9f9",
                        "primary-fixed-dim": "#a3c9ff",
                        "on-secondary-container": "#405b7f",
                        "on-surface": "#1b1b1b",
                        "surface-container-lowest": "#ffffff",
                        "tertiary": "#974700",
                        "on-tertiary-fixed": "#311300",
                        "on-tertiary-fixed-variant": "#743500",
                        "secondary-fixed": "#d3e3ff",
                        "surface-container-highest": "#e2e2e2",
                        "on-surface-variant": "#404752",
                        "primary": "#005faa",
                        "primary-fixed": "#d3e3ff",
                        "surface-bright": "#f9f9f9",
                        "surface-dim": "#dadada",
                        "inverse-primary": "#a3c9ff",
                        "tertiary-fixed-dim": "#ffb689",
                        "on-secondary": "#ffffff",
                        "primary-container": "#0078d4",
                        "on-secondary-fixed": "#001c39",
                        "surface": "#f9f9f9",
                        "surface-container-low": "#f3f3f3",
                        "error-container": "#ffdad6",
                        "on-secondary-fixed-variant": "#2d486b",
                        "inverse-surface": "#303030",
                        "on-tertiary-container": "#ffffff",
                        "secondary": "#456084",
                        "tertiary-fixed": "#ffdbc8",
                        "surface-variant": "#e2e2e2",
                        "tertiary-container": "#bc5b00",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#adc8f2",
                        "surface-tint": "#0060ab",
                        "on-primary": "#ffffff",
                        "on-background": "#1b1b1b",
                        "on-primary-container": "#ffffff",
                        "surface-container-high": "#e8e8e8"
                    },
                    fontFamily: {
                        "headline": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                        "label": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; background-color: #f9f9f9; color: #1b1b1b; }
        .glass-panel { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .hero-gradient { background: radial-gradient(circle at top right, rgba(0, 120, 212, 0.05), transparent); }
    </style>
</head>
<body class="bg-background text-on-surface">
<!-- Top Navigation Shell -->
<nav class="fixed top-0 w-full z-50 bg-[#F9F9F9]/80 backdrop-blur-xl">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-xl font-black tracking-tighter text-[#1B1B1B]">LAMARS</div>
<div class="hidden md:flex items-center gap-8 font-['Inter'] font-medium text-sm tracking-tight">
<a class="text-[#0078D4] border-b-2 border-[#0078D4] pb-1" href="#">Solution</a>
<a class="text-[#1B1B1B]/60 hover:text-[#0078D4] transition-colors duration-300" href="#">Features</a>
<a class="text-[#1B1B1B]/60 hover:text-[#0078D4] transition-colors duration-300" href="#">Process</a>
<a class="text-[#1B1B1B]/60 hover:text-[#0078D4] transition-colors duration-300" href="#">Plans</a>
<a class="text-[#1B1B1B]/60 hover:text-[#0078D4] transition-colors duration-300" href="#">FAQ</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-95 transition-all duration-200">
                Download The App
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="pt-32 pb-20 px-8 hero-gradient">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div class="space-y-8">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-primary font-semibold text-xs tracking-wider uppercase">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">bolt</span>
                    AI-Driven Real Estate
                </div>
<h1 class="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-on-surface">
                    The AI Workspace For <span class="text-primary-container">Real Estate Teams</span>
</h1>
<p class="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                    Unified inbox for WhatsApp, CRM automation, and 24/7 smart qualification. Close deals faster with LAMARS AI.
                </p>
<div class="flex flex-col sm:flex-row gap-4 pt-4">
<button class="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
<span class="material-symbols-outlined">download</span>
                        Download The App
                    </button>
<button class="bg-surface-container-lowest border-2 border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3">
                        Watch Demo
                    </button>
</div>
<div class="flex items-center gap-6 pt-6 text-on-surface-variant font-medium">
<div class="flex -space-x-3">
<img class="w-10 h-10 rounded-full border-2 border-white" data-alt="professional male real estate agent headshot in business attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVm4tLiiH6HED84GdPoY2_mu7LjqSrtj3Gj28zXbXYlWboaYQPPIvsU5WXYWZYnWcEN_NFZr_RX1gwn29e6_NJNA5OzD8aixGkFDQDR5SjZUizrJKqWVnPlAThPU06AuQpPiikTmh0IAZcFEF7-6psjW4djfUJfCD5h6nx0QQ37xQusPNqSvnue1YO6C3r7j-OmaNurhAuP-A7oStn4Zr4vbbeuqe1o_9m0h-y9CSiYXlj9TQJKUIoBSYfznwpf9O1tQW3bEIlZoOV"/>
<img class="w-10 h-10 rounded-full border-2 border-white" data-alt="professional female real estate broker headshot with friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW4C4ihmXdIDO6fRXBIzcar8M3skefiurwlfibFok1X_VS5j0VakrbdxKAVnTnXire5pAT33hT6OBSdUVQCV87ytb_iuzLI6-J0OUQcHS7Ykmz4Q25YR-dLdB4IO7ffZ0TQTkhcxN4__2wEKoPe228JpI5iGs90HH85NwIlDAiy7ehN2DFPRDXGetBRNdBPh0aHxvLT-cyJxZVRsMbUmJEkAAUDUidtxBB5mMWsuVPeO8RlijLeeMi6r2ilV6VUBDOFza9bMLFAkJd"/>
<img class="w-10 h-10 rounded-full border-2 border-white" data-alt="successful business professional male portrait in soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0z2HofttYj63JInsKF_EUd_wvvyBi3q2B7qNVSqiZ_IF_GW1QigoDAZCaJ0wQpaWvYIoaoA3VlLKBINEVldyKJPYnRzvhG11W42ZuaPcU5zp2F2HWRsjX6EsIlri5bOLC8-rfq9hiBUfutKQp871imSelJqExKgGH5GK-JP2qhcbIvlnZTzfLjszGLfoXQojW1TPmL-3eXFRvkpPa46lIrctr9vgMdXh1hA_AzvRRj4SAT3CixKqcqkoYjFlWG0LiXqXWK5rapQNW"/>
</div>
<span class="text-sm">Joined by 500+ Top Brokerages</span>
</div>
</div>
<!-- Phone Mockup Area -->
<div class="relative flex justify-center lg:justify-end">
<div class="relative w-[320px] h-[640px] bg-inverse-surface rounded-[3rem] p-4 shadow-2xl border-[8px] border-surface-container-highest overflow-hidden">
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-inverse-surface rounded-b-2xl z-10"></div>
<div class="bg-surface-container-lowest h-full rounded-[2rem] overflow-hidden flex flex-col">
<div class="p-6 border-b border-surface-container bg-surface-container-low">
<div class="flex justify-between items-center mb-6">
<span class="material-symbols-outlined text-primary-container">menu</span>
<div class="w-8 h-8 rounded-full bg-primary-container"></div>
</div>
<h3 class="text-xl font-black">Unified Inbox</h3>
</div>
<div class="p-4 space-y-4 flex-1">
<!-- Smart Qualification Card -->
<div class="p-4 rounded-2xl bg-primary-container text-on-primary-container space-y-2 shadow-lg">
<div class="flex justify-between items-center">
<span class="text-[10px] font-bold uppercase tracking-widest">Smart Qualification</span>
<span class="material-symbols-outlined text-sm">check_circle</span>
</div>
<p class="text-xs font-medium">New lead from WhatsApp qualified: High Intent</p>
<div class="bg-white/20 h-1.5 w-full rounded-full overflow-hidden">
<div class="bg-white h-full w-[85%]"></div>
</div>
</div>
<!-- Automation Card -->
<div class="p-4 rounded-2xl bg-surface-container-high border border-outline-variant/20 space-y-2">
<div class="flex justify-between items-center">
<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Follow-Up Automation</span>
<span class="material-symbols-outlined text-sm text-primary-container">auto_mode</span>
</div>
<p class="text-xs font-bold">Meeting scheduled: Tomorrow, 2:00 PM</p>
<p class="text-[10px] text-on-surface-variant italic">"I'll be there!" - Lead</p>
</div>
<!-- Mock Messages -->
<div class="space-y-3 pt-4">
<div class="flex gap-2">
<div class="w-6 h-6 rounded-full bg-surface-dim"></div>
<div class="bg-surface-container rounded-r-xl rounded-bl-xl p-3 text-[10px]">What are the HOA fees for the Lakeview property?</div>
</div>
<div class="flex gap-2 flex-row-reverse">
<div class="w-6 h-6 rounded-full bg-primary-container"></div>
<div class="bg-primary-container text-on-primary-container rounded-l-xl rounded-br-xl p-3 text-[10px] font-medium">The HOA fees are $350/mo. Would you like to see the breakdown?</div>
</div>
</div>
</div>
</div>
</div>
<!-- Floating Labels -->
<div class="absolute -left-12 top-1/4 glass-panel p-4 rounded-2xl shadow-xl border border-white/50 hidden md:block">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">chat_bubble</span>
</div>
<div>
<div class="text-xs font-bold">24/7 WhatsApp AI</div>
<div class="text-[10px] text-on-surface-variant">No leads left behind</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Problem vs Solution Section -->
<section class="py-24 px-8 bg-inverse-surface text-on-primary-container">
<div class="max-w-4xl mx-auto space-y-16">
<div class="text-center space-y-6">
<h2 class="text-3xl md:text-5xl font-black tracking-tight">Every Minute You Delay <br/><span class="text-primary-fixed-dim">Costs You Deals</span></h2>
<p class="text-on-primary-container/70 max-w-2xl mx-auto text-lg">Stop losing prospects to slow response times and fragmented communication channels.</p>
</div>
<div class="bg-surface-container-lowest/5 rounded-3xl overflow-hidden backdrop-blur-md">
<div class="grid grid-cols-2 border-b border-white/10">
<div class="p-8 font-black uppercase tracking-widest text-error-container text-sm">The Problem</div>
<div class="p-8 font-black uppercase tracking-widest text-primary-fixed-dim text-sm">The LAMARS Solution</div>
</div>
<!-- Row 1 -->
<div class="grid grid-cols-2 border-b border-white/5">
<div class="p-8 flex items-start gap-4">
<span class="material-symbols-outlined text-error mt-1">cancel</span>
<p class="text-sm md:text-base opacity-80">Manual follow-ups that take hours or days.</p>
</div>
<div class="p-8 flex items-start gap-4 bg-white/5">
<span class="material-symbols-outlined text-primary-fixed-dim mt-1" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<p class="text-sm md:text-base font-bold text-white">Instant AI responses 24/7 across all channels.</p>
</div>
</div>
<!-- Row 2 -->
<div class="grid grid-cols-2 border-b border-white/5">
<div class="p-8 flex items-start gap-4">
<span class="material-symbols-outlined text-error mt-1">cancel</span>
<p class="text-sm md:text-base opacity-80">Fragmented chats across WhatsApp &amp; SMS.</p>
</div>
<div class="p-8 flex items-start gap-4 bg-white/5">
<span class="material-symbols-outlined text-primary-fixed-dim mt-1" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<p class="text-sm md:text-base font-bold text-white">Unified Workspace for the entire team.</p>
</div>
</div>
<!-- Row 3 -->
<div class="grid grid-cols-2">
<div class="p-8 flex items-start gap-4">
<span class="material-symbols-outlined text-error mt-1">cancel</span>
<p class="text-sm md:text-base opacity-80">Wasted spend on unqualified leads.</p>
</div>
<div class="p-8 flex items-start gap-4 bg-white/5">
<span class="material-symbols-outlined text-primary-fixed-dim mt-1" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<p class="text-sm md:text-base font-bold text-white">Smart Qualification filters high-intent buyers.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Scale Modes Section -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="mb-16">
<h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-4">Start Solo. <br/>Scale Across Your Brokerage.</h2>
<div class="w-24 h-2 bg-primary-container rounded-full"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<!-- Agent Mode -->
<div class="group relative bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/10">
<div class="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
<span class="material-symbols-outlined text-8xl" style="font-variation-settings: 'wght' 700;">person</span>
</div>
<div class="space-y-8 relative z-10">
<div class="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">bolt</span>
</div>
<h3 class="text-3xl font-black">Agent Mode</h3>
<p class="text-on-surface-variant text-lg">Focus on closing. Let AI handle the heavy lifting of lead capture and qualification.</p>
<ul class="space-y-4">
<li class="flex items-center gap-3 font-bold">
<span class="material-symbols-outlined text-primary">check</span>
                                Instant 24/7 Replies
                            </li>
<li class="flex items-center gap-3 font-bold">
<span class="material-symbols-outlined text-primary">check</span>
                                Personalized Follow-Up
                            </li>
<li class="flex items-center gap-3 font-bold">
<span class="material-symbols-outlined text-primary">check</span>
                                Automated Lead Sourcing
                            </li>
</ul>
<button class="w-full py-4 border-2 border-primary-container text-primary-container font-black rounded-xl group-hover:bg-primary-container group-hover:text-white transition-all">Select Agent Mode</button>
</div>
</div>
<!-- Brokerage Mode -->
<div class="group relative bg-inverse-surface text-on-primary-container p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500">
<div class="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
<span class="material-symbols-outlined text-8xl" style="font-variation-settings: 'wght' 700;">hub</span>
</div>
<div class="space-y-8 relative z-10">
<div class="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-white">
<span class="material-symbols-outlined text-3xl">groups</span>
</div>
<h3 class="text-3xl font-black">Brokerage Mode</h3>
<p class="text-white/70 text-lg">Complete control over your team. Track performance and optimize conversions at scale.</p>
<ul class="space-y-4">
<li class="flex items-center gap-3 font-bold">
<span class="material-symbols-outlined text-primary-fixed-dim">check</span>
                                Shared Team Inbox
                            </li>
<li class="flex items-center gap-3 font-bold">
<span class="material-symbols-outlined text-primary-fixed-dim">check</span>
                                Performance Analytics
                            </li>
<li class="flex items-center gap-3 font-bold">
<span class="material-symbols-outlined text-primary-fixed-dim">check</span>
                                CRM Multi-Sync
                            </li>
</ul>
<button class="w-full py-4 bg-primary-container text-white font-black rounded-xl hover:bg-white hover:text-primary-container transition-all">Select Brokerage Mode</button>
</div>
</div>
</div>
</div>
</section>
<!-- Implementation / Features Bento Grid -->
<section class="py-24 px-8 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-16 space-y-4">
<h2 class="text-4xl md:text-5xl font-black tracking-tighter">Go Live Fast. Expand When Ready.</h2>
<p class="text-on-surface-variant text-lg max-w-2xl mx-auto">Implementation designed for speed without sacrificing depth.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
<div class="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between group overflow-hidden border border-outline-variant/10">
<div class="space-y-4">
<div class="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
<span class="material-symbols-outlined">chat</span>
</div>
<h4 class="text-2xl font-black">WhatsApp &amp; SMS Ready</h4>
<p class="text-on-surface-variant">Connect your existing numbers in minutes. Our AI starts qualifying leads immediately from the moment of first contact.</p>
</div>
<img class="rounded-2xl mt-8 shadow-lg transform group-hover:scale-105 transition-transform duration-700" data-alt="close-up of a high-end smartphone screen showing a professional chat interface with automated messages" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoBWavYZEdC5csGH-7fcQ_B7fQx6_6iwXQFWbvyIAiV2OC49ziW6I1jncNgR0kjmkw1cUV0-ozdsghOMcZFnzUPyjZhs9k59anylycjJdmJYCuSwDc-bDKcNs8ywgKU2ciIcAi0DfmGvJZVLN35KmCStNks5O_nQxb3t26Wj0m2pEXQo27Kd0dU2l6SSAy7UFpr4gPSbIiy5yqDr4w5wq6DY2AMRlt2M5Je62REiloH4jQZtkBplhb5CbpM6KvE6s-N7i0pWYLcHkP"/>
</div>
<div class="md:col-span-2 bg-primary-container text-white p-8 rounded-3xl flex items-center justify-between border border-white/10">
<div class="space-y-2">
<h4 class="text-2xl font-black">Inbound Handling</h4>
<p class="opacity-80">Never miss a midnight inquiry again.</p>
</div>
<span class="material-symbols-outlined text-6xl opacity-20">call_merge</span>
</div>
<div class="bg-surface-container-lowest p-8 rounded-3xl space-y-4 border border-outline-variant/10">
<span class="material-symbols-outlined text-primary-container text-4xl">dashboard</span>
<h4 class="text-xl font-black">Brokerage Stats</h4>
<p class="text-sm text-on-surface-variant leading-relaxed">Daily reports on team efficiency and lead heatmaps.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-3xl space-y-4 border border-outline-variant/10">
<span class="material-symbols-outlined text-primary-container text-4xl">query_stats</span>
<h4 class="text-xl font-black">Performance</h4>
<p class="text-sm text-on-surface-variant leading-relaxed">A/B test response scripts to maximize closing rates.</p>
</div>
</div>
</div>
</section>
<!-- Team Section -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div class="space-y-4">
<h2 class="text-4xl md:text-5xl font-black tracking-tighter">Built For Real Estate Teams. <br/>Designed For Control.</h2>
<p class="text-on-surface-variant text-lg">The minds behind the AI transformation in luxury real estate.</p>
</div>
<button class="px-8 py-3 bg-inverse-surface text-white rounded-full font-bold hover:bg-primary-container transition-colors">Join Our Team</button>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Team Member 1 -->
<div class="group">
<div class="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="portrait of Minoru Isisola, professional male real estate technology founder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjV4fgbVPji_ThpknHgNqsPC8VWFLvnR2B8cmCWuUPLa2zCzxMaBje09_B8OOxQMnzGmwR8Vp0aDoq9DZUL94n9ZJnw7VMFxfgdWf4wKBV-qkOrGdNNlA1oxxSHoraQLH8Wio7Fny9Wy_IAMMFQhCY-2-JjoTdwW1RV2e_l_pwsHYNEJ-IAZN37HRY9Ih5tybCagYN_ScrbVsdOSH8s5-O0WesqEhx2vMARxqw1cmn807pAXZPMNoFA8GONmuTkNhLe5o3PMpIMZtY"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div class="flex gap-4">
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><span class="material-symbols-outlined text-sm">link</span></div>
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><span class="material-symbols-outlined text-sm">mail</span></div>
</div>
</div>
</div>
<h4 class="text-xl font-black">Minoru Isisola</h4>
<p class="text-primary-container font-bold text-sm tracking-widest uppercase">CEO &amp; Founder</p>
</div>
<!-- Team Member 2 -->
<div class="group">
<div class="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="portrait of Maria Hernandez, real estate operations expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcUt7gKdFO-SRnndl6yekMrJMknnCGrk_S15T4WatigQfDhINR0wld-BdA3C6FD74NRNi2zTMdBzdpsowZjexi8qzQ98lAEtg15ClPEiPdDZaOG-QhzLRHQzwwURgVM5c3qnoZ-nHgpNwoWGvma0T9_EWwhKCTB-Qctt7qX72wSSXZP-t-uXF_3vrc2zj2bBCH9FhDzbgz-Cdb7NiOpVN-EGIb87i1vGOoRv0WIqifAxFympuSVWb_ngfMX242_jpoSseLYMO2LBNf"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div class="flex gap-4">
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><span class="material-symbols-outlined text-sm">link</span></div>
</div>
</div>
</div>
<h4 class="text-xl font-black">Maria Hernandez</h4>
<p class="text-primary-container font-bold text-sm tracking-widest uppercase">Head of Operations</p>
</div>
<!-- Team Member 3 -->
<div class="group">
<div class="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="portrait of Jose Rodriguez, lead developer for real estate AI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr4bwXGv4l0putTk_V4uLKbiunpsWcnUSN-skERrT5pv6euBEoJukEd3e-Nn6KSJHCp0YzdaD6AQBNz1rmYxbrQZekLXpeNE3vKV5oIgGguq_bZGF5p5Pc7DfqIIFZ3qqbtr6L6a0l28nYETPsfVXJLJ5XelQQ0ZI0yywP2Y4-Gi_eO0N7Nw8OQ6aOGppU7KEAUknDnYXNpZloZ8mEDQ_lCA-vYqJ5NRgEMC98pXn80RoHsHsZ3-OG-cVLTt_fA0Nzg4iMAZETAzWz"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div class="flex gap-4">
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><span class="material-symbols-outlined text-sm">link</span></div>
</div>
</div>
</div>
<h4 class="text-xl font-black">Jose Rodriguez</h4>
<p class="text-primary-container font-bold text-sm tracking-widest uppercase">Chief Technology Officer</p>
</div>
<!-- Team Member 4 -->
<div class="group">
<div class="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="portrait of Jens Behnisch, real estate strategy lead" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxq-Fppgi0EDOZo5-8WMi9MXlLC4j4UM8Pw2qcJIriIhPY5s0I5FA0inDiX9YaOF7syWvRAMHk2KMbRc5NxpzPCBDux1WRgiJQs-8JLt7D5JhECqCqn7_QjOhVgpkZ3zrRSi-fUljPT6uEUzDtTgxkM-6aigwk0YGk8iBUJ91FA4iRkM6DA_lvqkt9O6k7giej6ThuAtGb-c3OBgLWA3QnDUJBtEiGAjsb2QViOkyMdYP23qt7w0onucDxXRum9hBR55D2RYGbWQ9v"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<div class="flex gap-4">
<div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><span class="material-symbols-outlined text-sm">link</span></div>
</div>
</div>
</div>
<h4 class="text-xl font-black">Jens Behnisch</h4>
<p class="text-primary-container font-bold text-sm tracking-widest uppercase">Product Strategy</p>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-[#1B1B1B] w-full py-12 px-8">
<div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-white/5 pt-12 gap-8">
<div class="space-y-4 text-center md:text-left">
<div class="text-lg font-bold text-[#F9F9F9]">LAMARS</div>
<p class="font-['Inter'] text-sm text-[#F9F9F9]/50 max-w-xs">Empowering the next generation of real estate teams with architectural intelligence.</p>
</div>
<div class="flex flex-wrap justify-center gap-8 font-['Inter'] text-sm text-[#F9F9F9]/50">
<a class="hover:text-[#0078D4] transition-all" href="#">Privacy Policy</a>
<a class="hover:text-[#0078D4] transition-all" href="#">Terms of Service</a>
<a class="hover:text-[#0078D4] transition-all" href="#">Cookie Policy</a>
<a class="hover:text-[#0078D4] transition-all" href="#">Contact Us</a>
</div>
<div class="text-[#F9F9F9]/50 text-sm">
                © 2024 LAMARS AI Workspace. All rights reserved.
            </div>
</div>
</footer>
</body></html>