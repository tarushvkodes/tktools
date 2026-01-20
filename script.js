const tools = [
    { id: 'tennis-ref', title: 'TennisScoreRef', description: 'Visual guide to standard tennis scoring logic (Sets, Games, Ad/Deuce).', icon: '🎾', path: 'tools/tennis-ref/index.html', isNew: true, tags: ['sports', 'reference'] },
    { id: 'bowling-ref', title: 'BowlingScoreRef', description: 'Visual guide to ten-pin bowling frame scoring, strikes, and spares.', icon: '🎳', path: 'tools/bowling-ref/index.html', isNew: true, tags: ['sports', 'reference'] },
    { id: 'curling-ref', title: 'CurlingRef', description: 'Visual reference for curling house scoring and stone placement logic.', icon: '🥌', path: 'tools/curling-ref/index.html', isNew: true, tags: ['sports', 'reference'] },
    { id: 'cricket-ref', title: 'CricketRunRate', description: 'Basic visual reference guide for cricket run rate and match logic.', icon: '🏏', path: 'tools/cricket-ref/index.html', isNew: true, tags: ['sports', 'reference'] },
    { id: 'rugby-ref', title: 'RugbyPointRef', description: 'Visual reference for rugby point scoring (Tries, Conversions, Penalties).', icon: '🏉', path: 'tools/rugby-ref/index.html', isNew: true, tags: ['sports', 'reference'] },
    { id: 'mahjong-ref', title: 'MahjongRef', description: 'Visual reference for standard Mahjong tile sets and honor tiles.', icon: '🀄', path: 'tools/mahjong-ref/index.html', isNew: true, tags: ['gaming', 'culture'] },
    { id: 'backgammon-ref', title: 'BackgammonRef', description: 'Board setup and bearing off logic visual reference guide.', icon: '🎲', path: 'tools/backgammon-ref/index.html', isNew: true, tags: ['gaming', 'boardgames'] },
    { id: 'go-ref', title: 'GoStrategyRef', description: 'Visual guide to basic Go strategy concepts like Life, Death, and Ko.', icon: '⚪', path: 'tools/go-ref/index.html', isNew: true, tags: ['gaming', 'boardgames'] },
    { id: 'bridge-ref', title: 'BridgePointRef', description: 'Standard bidding and point counting reference for contract bridge.', icon: '🃏', path: 'tools/bridge-ref/index.html', isNew: true, tags: ['gaming', 'cards'] },
    { id: 'dominos-ref', title: 'DominosRef', description: 'Visual reference for standard domino set types and pips.', icon: '🀾', path: 'tools/dominos-ref/index.html', isNew: true, tags: ['gaming', 'boardgames'] },
    { id: 'math-const-vis', title: 'MathConst', description: 'Visual guide to fundamental mathematical constants like Pi, e, and the Golden Ratio.', icon: 'π', path: 'tools/math-const-vis/index.html', isNew: true, tags: ['science', 'math'] },
    { id: 'phys-const-vis', title: 'PhysConst', description: 'Reference for universal physical constants (Planck, Boltzmann, Speed of Light).', icon: '⚛️', path: 'tools/phys-const-vis/index.html', isNew: true, tags: ['science', 'physics'] },
    { id: 'set-theory-vis', title: 'SetTheory', description: 'Visual guide to set operations, Venn diagrams, and standard logical relations.', icon: '∪', path: 'tools/set-theory-vis/index.html', isNew: true, tags: ['science', 'math'] },
    { id: 'graph-theory-vis', title: 'GraphTheory', description: 'Visual reference for graph theory concepts (Nodes, Edges, Paths, and Topology).', icon: '🕸️', path: 'tools/graph-theory-vis/index.html', isNew: true, tags: ['science', 'math'] },
    { id: 'chaos-attractor', title: 'ChaosTheory', description: 'Visual guide to chaos theory attractors and unpredictable dynamical systems.', icon: '🌀', path: 'tools/chaos-attractor/index.html', isNew: true, tags: ['science', 'physics'] },
    { id: 'quantum-logic-vis', title: 'QuantumLogic', description: 'Visual reference for quantum computing logic, qubits, and the Bloch sphere.', icon: '🌌', path: 'tools/quantum-logic-vis/index.html', isNew: true, tags: ['science', 'tech'] },
    { id: 'circuit-relay-vis', title: 'CircuitRelay', description: 'Standard visual guide for normally-open and normally-closed relay contacts.', icon: '🔌', path: 'tools/circuit-relay-vis/index.html', isNew: true, tags: ['engineering', 'tech'] },
    { id: 'plc-ladder-vis', title: 'PlcLogic', description: 'Visual reference for standard PLC ladder logic symbols and structures.', icon: '🪜', path: 'tools/plc-ladder-vis/index.html', isNew: true, tags: ['engineering', 'tech'] },
    { id: 'pid-control-vis', title: 'ControlTheory', description: 'Block diagram reference for Proportional-Integral-Derivative (PID) control loops.', icon: '🔄', path: 'tools/pid-control-vis/index.html', isNew: true, tags: ['engineering', 'tech'] },
    { id: 'signal-flow-vis', title: 'SignalFlow', description: 'Visual guide to digital signal processing paths and block flow diagrams.', icon: '〰️', path: 'tools/signal-flow-vis/index.html', isNew: true, tags: ['engineering', 'audio'] },
    { id: 'ancient-weights', title: 'AncientWeights', description: 'Comparative reference for historical weight standards (Egyptian, Greek, Roman).', icon: '⚖️', path: 'tools/ancient-weights/index.html', isNew: true, tags: ['history', 'standard'] },
    { id: 'biblical-units', title: 'BiblicalUnits', description: 'Visual guide to ancient Biblical measurements like the Cubit and Shekel.', icon: '📜', path: 'tools/biblical-units/index.html', isNew: true, tags: ['history', 'reference'] },
    { id: 'maya-cal', title: 'MayaCalendar', description: 'Visual structure reference for the Maya Tzolkin and Haab calendar systems.', icon: '🗓️', path: 'tools/maya-cal/index.html', isNew: true, tags: ['history', 'culture'] },
    { id: 'alchem-sym', title: 'AlchemicalSym', description: 'Historical reference for alchemical element symbols and their meanings.', icon: '🧪', path: 'tools/alchem-sym/index.html', isNew: true, tags: ['history', 'science'] },
    { id: 'herald-guide', title: 'HeraldryGuide', description: 'Visual guide to shield divisions, ordinaries, and heraldic standards.', icon: '🛡️', path: 'tools/herald-guide/index.html', isNew: true, tags: ['history', 'design'] },
    { id: 'victorian-pal', title: 'VictorianColor', description: 'Historical color palette reference for Victorian-era pigments and paints.', icon: '🎨', path: 'tools/victorian-pal/index.html', isNew: true, tags: ['history', 'design'] },
    { id: 'radio-freq', title: 'RadioFreqRef', description: 'Reference for the radio frequency spectrum from VLF to EHF uses.', icon: '📻', path: 'tools/radio-freq/index.html', isNew: true, tags: ['science', 'tech'] },
    { id: 'nuc-decay', title: 'NuclearDecay', description: 'Visual guide to Alpha, Beta, and Gamma nuclear decay processes.', icon: '☢️', path: 'tools/nuc-decay/index.html', isNew: true, tags: ['science', 'physics'] },
    { id: 'subatom-ref', title: 'SubatomicRef', description: 'Standard Model reference for quarks, leptons, and gauge bosons.', icon: '⚛️', path: 'tools/subatom-ref/index.html', isNew: true, tags: ['science', 'physics'] },
    { id: 'amino-acids', title: 'AminoAcids', description: 'Chemical structure visual reference for the 20 standard amino acids.', icon: '🧬', path: 'tools/amino-acids/index.html', isNew: true, tags: ['science', 'biology'] },
    { id: 'git-flow-vis', title: 'GitFlowRef', description: 'Visual reference guide for standard Git branching and release strategies.', icon: '🌿', path: 'tools/git-flow-vis/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'docker-ref', title: 'DockerFileRef', description: 'Common Dockerfile commands and container configuration reference.', icon: '🐳', path: 'tools/docker-ref/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'kube-vis', title: 'KubeRef', description: 'Visual architectural reference for Kubernetes clusters and components.', icon: '☸️', path: 'tools/kube-vis/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'aws-ref', title: 'AwsIcons', description: 'Visual identification guide for common Amazon Web Services service icons.', icon: '☁️', path: 'tools/aws-ref/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'unix-perms-vis', title: 'UnixPerms', description: 'Visual reference for Unix file permission bits and chmod values.', icon: '🔐', path: 'tools/unix-perms-vis/index.html', isNew: true, tags: ['tech', 'utility'] },
    { id: 'js-es6-vis', title: 'JsEs6Ref', description: 'Modern JavaScript ES6+ syntax and feature reference guide.', icon: 'JS', path: 'tools/js-es6-vis/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'sql-join-guide', title: 'SqlJoinVis', description: 'Visual Venn diagram guide for SQL JOIN types and results.', icon: '📊', path: 'tools/sql-join-guide/index.html', isNew: true, tags: ['tech', 'database'] },
    { id: 'http-pro-ref', title: 'HttpStatusPro', description: 'Comprehensive reference for standard and obscure HTTP status codes.', icon: '🌐', path: 'tools/http-pro-ref/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'oauth-vis', title: 'OAuthFlow', description: 'Sequence diagram visual reference for OAuth2 authentication flows.', icon: '🔑', path: 'tools/oauth-vis/index.html', isNew: true, tags: ['tech', 'security'] },
    { id: 'css-box-vis', title: 'CssBoxModel', description: 'Interactive visual guide to the CSS Box Model (Padding, Border, Margin).', icon: '📦', path: 'tools/css-box-vis/index.html', isNew: true, tags: ['design', 'webdev'] },
    { id: 'leaf-guide', title: 'LeafGuide', description: 'Visual identification guide for common tree leaf shapes and species.', icon: '🍃', path: 'tools/leaf-guide/index.html', isNew: true, tags: ['nature', 'science'] },
    { id: 'cloud-types', title: 'CloudTypes', description: 'Visual classification guide for meteorological cloud formations.', icon: '☁️', path: 'tools/cloud-types/index.html', isNew: true, tags: ['nature', 'science'] },
    { id: 'crystal-ref', title: 'CrystalRef', description: 'Mineral hardness and crystal structure visual reference guide.', icon: '💎', path: 'tools/crystal-ref/index.html', isNew: true, tags: ['science', 'geology'] },
    { id: 'star-basics', title: 'StarBasics', description: 'Seasonal constellation and star map visual reference for beginners.', icon: '⭐', path: 'tools/star-basics/index.html', isNew: true, tags: ['science', 'astronomy'] },
    { id: 'planet-scale', title: 'PlanetScale', description: 'Comparative size and distance reference for solar system planets.', icon: '🪐', path: 'tools/planet-scale/index.html', isNew: true, tags: ['science', 'astronomy'] },
    { id: 'flag-ref', title: 'FlagRef', description: 'Visual reference guide for world country flags and symbolism.', icon: '🚩', path: 'tools/flag-ref/index.html', isNew: true, tags: ['geography', 'reference'] },
    { id: 'capital-ref', title: 'CapitalRef', description: 'World capital city reference organized by continent and region.', icon: '🏛️', path: 'tools/capital-ref/index.html', isNew: true, tags: ['geography', 'reference'] },
    { id: 'currency-sym', title: 'CurrencySym', description: 'Global currency symbol to ISO code mapping and reference.', icon: '💱', path: 'tools/currency-sym/index.html', isNew: true, tags: ['finance', 'standard'] },
    { id: 'time-offset', title: 'TimeOffset', description: 'Visual reference for UTC timezone offsets and global time zones.', icon: '🕙', path: 'tools/time-offset/index.html', isNew: true, tags: ['utility', 'standard'] },
    { id: 'global-volt', title: 'GlobalVolt', description: 'International power plug type and voltage standard reference.', icon: '🔌', path: 'tools/global-volt/index.html', isNew: true, tags: ['travel', 'utility'] },
    { id: 'road-signs', title: 'RoadSigns', description: 'Standard international road sign meanings and visual reference.', icon: '🛑', path: 'tools/road-signs/index.html', isNew: true, tags: ['utility', 'standard'] },
    { id: 'iso-paper', title: 'IsoPaper', description: 'International standard (ISO 216) paper size dimension reference.', icon: '📄', path: 'tools/iso-paper/index.html', isNew: true, tags: ['utility', 'standard'] },
    { id: 'metric-conv', title: 'MetricConv', description: 'Visual metric to imperial conversion reference for common units.', icon: '📏', path: 'tools/metric-conv/index.html', isNew: true, tags: ['utility', 'standard'] },
    { id: 'temp-ref', title: 'TempRef', description: 'Comparative temperature scale reference for Celsius and Fahrenheit.', icon: '🌡️', path: 'tools/temp-ref/index.html', isNew: true, tags: ['utility', 'standard'] },
    { id: 'wind-ref', title: 'WindRef', description: 'Beaufort wind force scale visual reference and descriptions.', icon: '💨', path: 'tools/wind-ref/index.html', isNew: true, tags: ['nature', 'standard'] },
    { id: 'soil-classes',
        title: 'SoilClasses',
        description: 'USDA soil taxonomy guide for agricultural and geological classification.',
        icon: '🌍',
        path: 'tools/soil-classes/index.html',
        isNew: true,
        tags: ['science', 'nature']
    },
    {
        id: 'elec-sym',
        title: 'ElectricalSym',
        description: 'Standard circuit diagram and schematic symbols reference for electronics.',
        icon: '⚡',
        path: 'tools/elec-sym/index.html',
        isNew: true,
        tags: ['engineering', 'tech']
    },
    {
        id: 'http-codes',
        title: 'HttpCodes',
        description: 'Standard HTTP response status code reference for web developers.',
        icon: '🌐',
        path: 'tools/http-codes/index.html',
        isNew: true,
        tags: ['webdev', 'tech']
    },
    {
        id: 'ms-500-commem',
        title: 'Ms500',
        description: 'Celebrating the milestone of 500 unique tools in the repository.',
        icon: '💯',
        path: 'tools/ms-500-commem/index.html',
        isNew: true,
        tags: ['milestone']
    },
    {
        id: 'elvish-runes', title: 'ElvishRunes', description: 'Visual reference for Elvish Sindarin/Quenya runic standards.', icon: '📜', path: 'tools/elvish-runes/index.html', isNew: true, tags: ['language', 'fantasy'] },
    { id: 'dwarvish-runes', title: 'DwarvishRunes', description: 'Visual reference for Khuzdul dwarven runic standards.', icon: '⚒️', path: 'tools/dwarvish-runes/index.html', isNew: true, tags: ['language', 'fantasy'] },
    { id: 'morse-full', title: 'MorseFull', description: 'Comprehensive visual reference for Morse code signals.', icon: '📻', path: 'tools/morse-full/index.html', isNew: true, tags: ['language', 'utility'] },
    { id: 'braille-ext', title: 'BrailleExt', description: 'Grade 2 contracted Braille visual reference guide.', icon: '⠃', path: 'tools/braille-ext/index.html', isNew: true, tags: ['language', 'utility'] },
    { id: 'sema-pro', title: 'SemaPro', description: 'Professional maritime semaphore flag visual reference.', icon: '🚩', path: 'tools/sema-pro/index.html', isNew: true, tags: ['language', 'nautical'] },
    { id: 'asl-full', title: 'AslFull', description: 'Complete American Sign Language alphabet and phrase reference.', icon: '🤟', path: 'tools/asl-full/index.html', isNew: true, tags: ['language', 'utility'] },
    { id: 'greek-math', title: 'GreekMath', description: 'Greek alphabet usage reference for science and mathematics.', icon: 'α', path: 'tools/greek-math/index.html', isNew: true, tags: ['language', 'science'] },
    { id: 'cyrillic-guide', title: 'CyrillicGuide', description: 'Russian Cyrillic script and pronunciation reference guide.', icon: 'Я', path: 'tools/cyrillic-guide/index.html', isNew: true, tags: ['language', 'reference'] },
    { id: 'hiragana-ref', title: 'HiraganaRef', description: 'Japanese Hiragana character set and stroke order reference.', icon: 'あ', path: 'tools/hiragana-ref/index.html', isNew: true, tags: ['language', 'japanese'] },
    { id: 'katakana-ref', title: 'KatakanaRef', description: 'Japanese Katakana character set and usage reference.', icon: 'ア', path: 'tools/katakana-ref/index.html', isNew: true, tags: ['language', 'japanese'] },
    { id: 'hangul-ref', title: 'HangulRef', description: 'Korean Hangul script structure and vowel/consonant reference.', icon: '한', path: 'tools/hangul-ref/index.html', isNew: true, tags: ['language', 'korean'] },
    { id: 'arabic-ref', title: 'ArabicRef', description: 'Arabic script basic character forms and calligraphic reference.', icon: 'ع', path: 'tools/arabic-ref/index.html', isNew: true, tags: ['language', 'arabic'] },
    { id: 'futhark-ref', title: 'FutharkRef', description: 'Ancient Norse Futhark runic alphabet visual reference.', icon: 'ᚠ', path: 'tools/futhark-ref/index.html', isNew: true, tags: ['language', 'history'] },
    { id: 'phoenician-ref', title: 'PhoenicianRef', description: 'Historical Phoenician script and character reference guide.', icon: '𐤀', path: 'tools/phoenician-ref/index.html', isNew: true, tags: ['language', 'history'] },
    { id: 'hieroglyph-ref', title: 'HieroglyphRef', description: 'Ancient Egyptian hieroglyphic basic character reference.', icon: '𓁹', path: 'tools/hieroglyph-ref/index.html', isNew: true, tags: ['language', 'history'] },
    { id: 'nato-phonetic', title: 'NatoPhonetic', description: 'Standard NATO phonetic alphabet (Alpha, Bravo, Charlie) reference.', icon: '🎙️', path: 'tools/nato-phonetic/index.html', isNew: true, tags: ['language', 'utility'] },
    { id: 'cockney-slang', title: 'CockneySlang', description: 'Traditional London rhyming slang dictionary and reference.', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', path: 'tools/cockney-slang/index.html', isNew: true, tags: ['language', 'regional'] },
    { id: 'aussie-slang', title: 'AussieSlang', description: 'Australian regional terms and common slang reference.', icon: '🇦🇺', path: 'tools/aussie-slang/index.html', isNew: true, tags: ['language', 'regional'] },
    { id: 'pirate-slang', title: 'PirateSlang', description: 'Thematic vocabulary and nautical pirate lingo reference.', icon: '🏴‍☠️', path: 'tools/pirate-slang/index.html', isNew: true, tags: ['language', 'fun'] },
    { id: 'web-acronyms', title: 'WebAcronyms', description: 'Guide to modern internet acronyms and digital slang.', icon: '🌐', path: 'tools/web-acronyms/index.html', isNew: true, tags: ['language', 'social'] },
    { id: 'medical-abbrev', title: 'MedicalAbbrev', description: 'Standard medical abbreviations and terminology reference.', icon: '⚕️', path: 'tools/medical-abbrev/index.html', isNew: true, tags: ['science', 'medical'] },
    { id: 'legal-latin', title: 'LegalLatin', description: 'Common Latin terms and phrases used in legal documentation.', icon: '⚖️', path: 'tools/legal-latin/index.html', isNew: true, tags: ['legal', 'reference'] },
    { id: 'chem-prefix', title: 'ChemPrefix', description: 'Standard chemical nomenclature prefixes and naming rules.', icon: '🧪', path: 'tools/chem-prefix/index.html', isNew: true, tags: ['science', 'chemistry'] },
    { id: 'metric-si', title: 'MetricSI', description: 'Standard Metric (SI) units and measurement prefix reference.', icon: '📏', path: 'tools/metric-si/index.html', isNew: true, tags: ['science', 'utility'] },
    { id: 'imperial-ref', title: 'ImperialRef', description: 'Imperial measurement units and standard conversion reference.', icon: '📐', path: 'tools/imperial-ref/index.html', isNew: true, tags: ['utility', 'standard'] },
    { id: 'binary-visual', title: 'BinaryVisual', description: 'Visual guide to how binary bits represent numerical values.', icon: '01', path: 'tools/binary-visual/index.html', isNew: true, tags: ['tech', 'math'] },
    { id: 'hex-visual', title: 'HexVisual', description: 'Visual guide to hexadecimal values and color range mapping.', icon: 'FF', path: 'tools/hex-visual/index.html', isNew: true, tags: ['tech', 'design'] },
    { id: 'base32-ref', title: 'Base32Ref', description: 'Standard Base32 encoding alphabet and structure reference.', icon: '🔢', path: 'tools/base32-ref/index.html', isNew: true, tags: ['tech', 'utility'] },
    { id: 'ascii-table', title: 'AsciiTable', description: 'Standard ASCII character set mapping and decimal/hex reference.', icon: '🔡', path: 'tools/ascii-table/index.html', isNew: true, tags: ['tech', 'reference'] },
    { id: 'unicode-emoji', title: 'UnicodeEmoji', description: 'Unicode emoji standard character mapping and group reference.', icon: '😀', path: 'tools/unicode-emoji/index.html', isNew: true, tags: ['tech', 'social'] },
    { id: 'html-tags', title: 'HtmlTags', description: 'Semantic HTML5 tag reference guide and usage examples.', icon: '🏷️', path: 'tools/html-tags/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'css-prop-ref', title: 'CssPropRef', description: 'Comprehensive CSS property and value standard reference.', icon: '🎨', path: 'tools/css-prop-ref/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'js-methods', title: 'JsMethods', description: 'JavaScript standard built-in object methods reference guide.', icon: 'JS', path: 'tools/js-methods/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'sql-syntax', title: 'SqlSyntax', description: 'Standard SQL query syntax and command structure reference.', icon: '🗄️', path: 'tools/sql-syntax/index.html', isNew: true, tags: ['tech', 'database'] },
    { id: 'git-cmds', title: 'GitCmds', description: 'Essential Git version control command reference cheatsheet.', icon: '🌿', path: 'tools/git-cmds/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'docker-cmds', title: 'DockerCmds', description: 'Common Docker CLI commands and container management reference.', icon: '🐳', path: 'tools/docker-cmds/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'nginx-cmds', title: 'NginxCmds', description: 'Nginx server configuration commands and directive reference.', icon: '⚙️', path: 'tools/nginx-cmds/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'vim-cheatsheet', title: 'VimCheatsheet', description: 'Essential Vim editor keyboard shortcuts and command reference.', icon: '⌨️', path: 'tools/vim-cheatsheet/index.html', isNew: true, tags: ['tech', 'utility'] },
    { id: 'bash-shortcuts', title: 'BashShortcuts', description: 'Standard Bash terminal keyboard shortcuts and CLI tips.', icon: '🐚', path: 'tools/bash-shortcuts/index.html', isNew: true, tags: ['tech', 'utility'] },
    { id: 'python-zen', title: 'PythonZen', description: 'The Zen of Python (PEP 20) design principles reference.', icon: '🐍', path: 'tools/python-zen/index.html', isNew: true, tags: ['tech', 'coding'] },
    { id: 'markdown-ref', title: 'MarkdownRef', description: 'Standard Markdown syntax and formatting guide reference.', icon: '📝', path: 'tools/markdown-ref/index.html', isNew: true, tags: ['tech', 'writing'] },
    { id: 'regex-common', title: 'RegexCommon', description: 'Interactive reference for common Regular Expression patterns.', icon: '.*', path: 'tools/regex-common/index.html', isNew: true, tags: ['tech', 'utility'] },
    { id: 'json-schema', title: 'JsonSchema', description: 'JSON Schema standard structure and validation keyword reference.', icon: '📋', path: 'tools/json-schema/index.html', isNew: true, tags: ['tech', 'webdev'] },
    { id: 'yaml-ident', title: 'YamlIdent', description: 'YAML formatting standards and indentation rule reference.', icon: '📑', path: 'tools/yaml-ident/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'toml-ref', title: 'TomlRef', description: 'TOML configuration file standard syntax reference guide.', icon: '🛠️', path: 'tools/toml-ref/index.html', isNew: true, tags: ['tech', 'ops'] },
    { id: 'c-plus-plus', title: 'CPlusPlus', description: 'C++ standard library and syntax boilerplate reference.', icon: 'C++', path: 'tools/c-plus-plus/index.html', isNew: true, tags: ['tech', 'coding'] },
    { id: 'java-ref', title: 'JavaRef', description: 'Java standard language syntax and core API reference guide.', icon: '☕', path: 'tools/java-ref/index.html', isNew: true, tags: ['tech', 'coding'] },
    { id: 'rust-traits', title: 'RustTraits', description: 'Rust language trait standard and common pattern reference.', icon: '🦀', path: 'tools/rust-traits/index.html', isNew: true, tags: ['tech', 'coding'] },
    { id: 'go-routines', title: 'GoRoutines', description: 'Go language concurrency patterns and goroutine reference.', icon: '🐹', path: 'tools/go-routines/index.html', isNew: true, tags: ['tech', 'coding'] },
    { id: 'swift-ui', title: 'SwiftUI', description: 'SwiftUI framework component and layout standard reference.', icon: '🍎', path: 'tools/swift-ui/index.html', isNew: true, tags: ['tech', 'mobile'] },
    { id: 'swim-counter',
        title: 'SwimCounter',
        description: 'Simple visual lap counter for swimmers to track distance in the pool.',
        icon: '🏊',
        path: 'tools/swim-counter/index.html',
        isNew: true,
        tags: ['fitness', 'sports']
    },
    {
        id: 'yield-guide',
        title: 'YieldGuide',
        description: 'Estimated harvest reference guide for popular backyard vegetable gardening.',
        icon: '🥬',
        path: 'tools/yield-guide/index.html',
        isNew: true,
        tags: ['gardening', 'nature']
    },
    {
        id: 'infl-visual',
        title: 'InflVisual',
        description: 'Visual representation of purchasing power loss over time due to inflation.',
        icon: '📉',
        path: 'tools/infl-visual/index.html',
        isNew: true,
        tags: ['finance', 'saving']
    },
    {
        id: 'golden-vis',
        title: 'GoldenVis',
        description: 'Visual guide to photography lighting during the Golden and Blue hours.',
        icon: '🌅',
        path: 'tools/golden-vis/index.html',
        isNew: true,
        tags: ['photography', 'design']
    },
    {
        id: 'ms-1000',
        title: 'Ms1000',
        description: 'Celebrating the monumental milestone of 1000 unique tools in the repository.',
        icon: '💯',
        path: 'tools/ms-1000/index.html',
        isNew: true,
        tags: ['milestone']
    },
    {
        id: 'palette-gen',
        title: 'OvenCheck',
        description: 'Quick temperature reference for Fahrenheit to Celsius oven settings.',
        icon: '🌡️',
        path: 'tools/oven-check/index.html',
        isNew: true,
        tags: ['kitchen', 'cooking']
    },
    {
        id: 'dash-lights',
        title: 'DashLights',
        description: 'Visual guide to common car dashboard warning lights and their meanings.',
        icon: '🚗',
        path: 'tools/dash-lights/index.html',
        isNew: true,
        tags: ['auto', 'maintenance']
    },
    {
        id: 'knot-ref',
        title: 'KnotRef',
        description: 'Visual reference for essential functional knots used in daily life.',
        icon: '🪢',
        path: 'tools/knot-ref/index.html',
        isNew: true,
        tags: ['utility', 'diy']
    },
    {
        id: 'brew-guide',
        title: 'BrewGuide',
        description: 'Step-by-step visual guide for manual coffee brewing methods.',
        icon: '☕',
        path: 'tools/brew-guide/index.html',
        isNew: true,
        tags: ['kitchen', 'food']
    },
    {
        id: 'pet-years',
        title: 'PetYears',
        description: 'Estimate your pet\'s age in human years based on species and size.',
        icon: '🐶',
        path: 'tools/pet-years/index.html',
        isNew: true,
        tags: ['pets', 'utility']
    },
    {
        id: 'palette-gen',
        title: 'PaletteGen',
        description: 'Random hex color palette generator with one-click copy to clipboard.',
        icon: '🎨',
        path: 'tools/palette-gen/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'word-freq',
        title: 'WordFreq',
        description: 'Text analysis tool to find and count word frequency in any pasted text.',
        icon: '📊',
        path: 'tools/word-freq/index.html',
        isNew: true,
        tags: ['writing', 'utility']
    },
    {
        id: 'bpm-tapper',
        title: 'BpmTapper',
        description: 'Simple rhythm tapper to find the beats per minute of any song.',
        icon: '🥁',
        path: 'tools/bpm-tapper/index.html',
        isNew: true,
        tags: ['music', 'audio']
    },
    {
        id: 'art-timeline',
        title: 'ArtTimeline',
        description: 'Visual historical timeline of major art eras and their characteristics.',
        icon: '📜',
        path: 'tools/art-timeline/index.html',
        isNew: true,
        tags: ['art', 'education']
    },
    {
        id: 'shadow-pro',
        title: 'ShadowPro',
        description: 'Advanced CSS box-shadow generator with real-time visual preview.',
        icon: '🌑',
        path: 'tools/shadow-pro/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'decision-spin',
        title: 'DecisionSpin',
        description: 'Random choice wheel spinner for making quick decisions.',
        icon: '🎡',
        path: 'tools/decision-spin/index.html',
        isNew: true,
        tags: ['social', 'utility']
    },
    {
        id: 'roll-dice',
        title: 'RollDice',
        description: 'Simple virtual d6 dice roller for games and choices.',
        icon: '🎲',
        path: 'tools/roll-dice/index.html',
        isNew: true,
        tags: ['social', 'gaming']
    },
    {
        id: 'grocery-list',
        title: 'GroceryList',
        description: 'Local storage-based grocery checklist for household management.',
        icon: '🛒',
        path: 'tools/grocery-list/index.html',
        isNew: true,
        tags: ['home', 'utility']
    },
    {
        id: 'habit-grid',
        title: 'HabitGrid',
        description: '30-day visual habit tracker using the "Don\'t Break the Chain" method.',
        icon: '📅',
        path: 'tools/habit-grid/index.html',
        isNew: true,
        tags: ['productivity', 'wellness']
    },
    {
        id: 'sketch-pad',
        title: 'SketchPad',
        description: 'Digital drawing canvas for quick sketches and notes.',
        icon: '🎨',
        path: 'tools/sketch-pad/index.html',
        isNew: true,
        tags: ['design', 'utility']
    },
    {
        id: 'glass-gen',
        title: 'GlassGen',
        description: 'CSS Glassmorphism generator with real-time preview and blur controls.',
        icon: '💎',
        path: 'tools/glass-gen/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'skel-gen',
        title: 'SkelGen',
        description: 'Skeleton loading screen CSS boilerplate generator for UI performance.',
        icon: '⏳',
        path: 'tools/skel-gen/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'base64-dec',
        title: 'Base64Dec',
        description: 'Simple string decoder for Base64 encoded text.',
        icon: '🔓',
        path: 'tools/base64-dec/index.html',
        isNew: true,
        tags: ['utility', 'tech']
    },
    {
        id: 'asl-ref',
        title: 'AslRef',
        description: 'Visual finger spelling reference for the American Sign Language alphabet.',
        icon: '🤟',
        path: 'tools/asl-ref/index.html',
        isNew: true,
        tags: ['education', 'language']
    },
    {
        id: 'unit-obs',
        title: 'UnitObs',
        description: 'Reference guide for obscure and non-standard measurement units.',
        icon: '📏',
        path: 'tools/unit-obs/index.html',
        isNew: true,
        tags: ['science', 'utility']
    },
    {
        id: 'grade-est',
        title: 'GradeEst',
        description: 'Weighted grade and GPA estimator for students to track semester progress.',
        icon: '🎓',
        path: 'tools/grade-est/index.html',
        isNew: true,
        tags: ['education', 'student']
    },
    {
        id: 'cit-gen',
        title: 'CitGen',
        description: 'Fast, simple bibliography citation generator for books and sources.',
        icon: '✒️',
        path: 'tools/cit-gen/index.html',
        isNew: true,
        tags: ['education', 'writing']
    },
    {
        id: 'ph-scale',
        title: 'PhScale',
        description: 'Interactive pH scale visualizer with common household examples.',
        icon: '🧪',
        path: 'tools/ph-scale/index.html',
        isNew: true,
        tags: ['science', 'chemistry']
    },
    {
        id: 'period-tab',
        title: 'PeriodTab',
        description: 'Quick-reference periodic table for chemical elements.',
        icon: '⚛️',
        path: 'tools/period-tab/index.html',
        isNew: true,
        tags: ['science', 'chemistry']
    },
    {
        id: 'logic-gates',
        title: 'LogicGates',
        description: 'Interactive logic gate simulator for AND, OR, and NOT operations.',
        icon: '🔌',
        path: 'tools/logic-gates/index.html',
        isNew: true,
        tags: ['science', 'tech']
    },
    {
        id: 'sleep-cycles',
        title: 'SleepCycles',
        description: 'Optimal bedtime calculator based on 90-minute sleep cycles for better rest.',
        icon: '🌙',
        path: 'tools/sleep-cycles/index.html',
        isNew: true,
        tags: ['wellness', 'health']
    },
    {
        id: 'hydro-count',
        title: 'HydroCount',
        description: 'Interactive daily water intake tracker with 8-glass goal system.',
        icon: '💧',
        path: 'tools/hydro-count/index.html',
        isNew: true,
        tags: ['wellness', 'health']
    },
    {
        id: 'breath-guide',
        title: 'BreathGuide',
        description: 'Visual box breathing pacer for stress relief and mindfulness.',
        icon: '🧘',
        path: 'tools/breath-guide/index.html',
        isNew: true,
        tags: ['wellness', 'mindfulness']
    },
    {
        id: 'step-bar',
        title: 'StepBar',
        description: 'Visual daily step goal progress tracker with percentage readout.',
        icon: '🏃',
        path: 'tools/step-bar/index.html',
        isNew: true,
        tags: ['fitness', 'health']
    },
    {
        id: 'pomo-custom',
        title: 'PomoCustom',
        description: 'Flexible Pomodoro timer with custom interval presets for work and rest.',
        icon: '⏳',
        path: 'tools/pomo-custom/index.html',
        isNew: true,
        tags: ['productivity', 'focus']
    },
    {
        id: 'dnd-init',
        title: 'DndInit',
        description: 'Simple combat initiative tracker for TTRPG Game Masters.',
        icon: '⚔️',
        path: 'tools/dnd-init/index.html',
        isNew: true,
        tags: ['gaming', 'dnd']
    },
    {
        id: 'spell-track',
        title: 'SpellTrack',
        description: 'Interactive spell slot tracker for Wizards, Clerics, and Druids.',
        icon: '✨',
        path: 'tools/spell-track/index.html',
        isNew: true,
        tags: ['gaming', 'dnd']
    },
    {
        id: 'npc-gen',
        title: 'NpcGen',
        description: 'Generate random NPCs with vocal quirks, physical traits, and secrets.',
        icon: '🎭',
        path: 'tools/npc-gen/index.html',
        isNew: true,
        tags: ['gaming', 'rpg']
    },
    {
        id: 'sens-conv',
        title: 'SensConv',
        description: 'Convert mouse sensitivity between popular FPS games like Valorant and CS:GO.',
        icon: '🎯',
        path: 'tools/sens-conv/index.html',
        isNew: true,
        tags: ['gaming', 'tech']
    },
    {
        id: 'achiev-pop',
        title: 'AchievPop',
        description: 'Simulator for game achievement notifications and toast UI testing.',
        icon: '🔔',
        path: 'tools/achiev-pop/index.html',
        isNew: true,
        tags: ['gaming', 'design']
    },
    {
        id: 'glue-guide',
        title: 'GlueGuide',
        description: 'Find the right adhesive for any material pairing (wood, metal, plastic, etc.).',
        icon: '🧪',
        path: 'tools/glue-guide/index.html',
        isNew: true,
        tags: ['maker', 'diy']
    },
    {
        id: 'veg-season',
        title: 'VeggieSeason',
        description: 'Planting calendar guide for seasonal vegetable gardening.',
        icon: '🌱',
        path: 'tools/veg-season/index.html',
        isNew: true,
        tags: ['gardening', 'nature']
    },
    {
        id: 'exposure-tri',
        title: 'ExposureTri',
        description: 'Interactive camera exposure triangle simulator (Aperture, Shutter, ISO).',
        icon: '📷',
        path: 'tools/exposure-tri/index.html',
        isNew: true,
        tags: ['photography', 'tech']
    },
    {
        id: 'chord-ref',
        title: 'ChordRef',
        description: 'Visual reference for common guitar and piano chords.',
        icon: '🎸',
        path: 'tools/chord-ref/index.html',
        isNew: true,
        tags: ['music', 'hobby']
    },
    {
        id: 'infill-3d',
        title: 'Infill3d',
        description: 'Visual comparison guide for 3D printing infill patterns and strengths.',
        icon: '🧱',
        path: 'tools/infill-3d/index.html',
        isNew: true,
        tags: ['3dprinting', 'tech']
    },
    {
        id: 'invoice-gen',
        title: 'InvoiceGen',
        description: 'Simple printable invoice template for freelancers and small businesses.',
        icon: '📄',
        path: 'tools/invoice-gen/index.html',
        isNew: true,
        tags: ['business', 'finance']
    },
    {
        id: 'salary-pro',
        title: 'SalaryPro',
        description: 'Calculate required gross annual and hourly rates to hit your net income target.',
        icon: '💰',
        path: 'tools/salary-pro/index.html',
        isNew: true,
        tags: ['finance', 'career']
    },
    {
        id: 'client-tracker',
        title: 'ClientTracker',
        description: 'Minimalist CRM to track client names and project statuses locally.',
        icon: '📁',
        path: 'tools/client-tracker/index.html',
        isNew: true,
        tags: ['business', 'utility']
    },
    {
        id: 'qr-svg',
        title: 'QrSvg',
        description: 'Quick QR code generator for URLs and text strings.',
        icon: '📲',
        path: 'tools/qr-svg/index.html',
        isNew: true,
        tags: ['tech', 'utility']
    },
    {
        id: 'contrast-pro',
        title: 'ContrastPro',
        description: 'WCAG accessibility contrast checker for designers and developers.',
        icon: '👁️',
        path: 'tools/contrast-pro/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'release-gen',
        title: 'ReleaseGen',
        description: 'Standardized changelog and release notes generator for developers.',
        icon: '🚀',
        path: 'tools/release-gen/index.html',
        isNew: true,
        tags: ['webdev', 'writing']
    },
    {
        id: 'world-clock',
        title: 'WorldClock',
        description: 'Live time tracking for major global business hubs.',
        icon: '🌎',
        path: 'tools/world-clock/index.html',
        isNew: true,
        tags: ['utility', 'office']
    },
    {
        id: 'emoji-search',
        title: 'EmojiSearch',
        description: 'Instant searchable emoji picker with one-click copy to clipboard.',
        icon: '🔍',
        path: 'tools/emoji-search/index.html',
        isNew: true,
        tags: ['social', 'utility']
    },
    {
        id: 'mock-json-gen',
        title: 'MockJsonGen',
        description: 'Generate boilerplate JSON data for users, products, and posts.',
        icon: '📦',
        path: 'tools/mock-json-gen/index.html',
        isNew: true,
        tags: ['webdev', 'generator']
    },
    {
        id: 'team-name-gen',
        title: 'TeamNameGen',
        description: 'Random cool and funny team name generator for sports and gaming.',
        icon: '🛡️',
        path: 'tools/team-name-gen/index.html',
        isNew: true,
        tags: ['generator', 'gaming']
    },
    {
        id: 'habit-tracker',
        title: 'HabitTracker',
        description: 'Minimalist daily habit tracker with persistent local storage.',
        icon: '✅',
        path: 'tools/habit-tracker/index.html',
        isNew: true,
        tags: ['productivity', 'wellness']
    },
    {
        id: 'decision-matrix',
        title: 'DecisionMatrix',
        description: 'Weighted scoring tool to help make complex choices based on custom criteria.',
        icon: '📊',
        path: 'tools/decision-matrix/index.html',
        isNew: true,
        tags: ['productivity', 'utility']
    },
    {
        id: 'morse-convert',
        title: 'MorseConvert',
        description: 'Real-time text to Morse code signal converter.',
        icon: '📻',
        path: 'tools/morse-convert/index.html',
        isNew: true,
        tags: ['utility', 'education']
    },
    {
        id: 'tool-final',
        title: 'ToolFinal',
        description: 'Celebrating the milestone of 400 total unique tools in the repository.',
        icon: '🏆',
        path: 'tools/tool-final/index.html',
        isNew: true,
        tags: ['milestone']
    },
    {
        id: 'word-morph',
        title: 'WordMorph',
        description: 'Generate believable but fake words for branding and conlangs.',
        icon: '🌀',
        path: 'tools/word-morph/index.html',
        isNew: true,
        tags: ['generator', 'writing']
    },
    {
        id: 'text-diff',
        title: 'TextDiff',
        description: 'Visual comparison between two strings to find differences and changes.',
        icon: '↔️',
        path: 'tools/text-diff/index.html',
        isNew: true,
        tags: ['utility', 'writing']
    },
    {
        id: 'markdown-live',
        title: 'MarkdownLive',
        description: 'Real-time Markdown editor with live HTML preview.',
        icon: '📝',
        path: 'tools/markdown-live/index.html',
        isNew: true,
        tags: ['writing', 'webdev']
    },
    {
        id: 'flex-play',
        title: 'FlexPlay',
        description: 'Interactive CSS Flexbox playground to visualize alignment properties.',
        icon: '🧊',
        path: 'tools/flex-play/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'password-pro',
        title: 'PasswordPro',
        description: 'Secure, customizable password generator with length and symbol controls.',
        icon: '🔐',
        path: 'tools/password-pro/index.html',
        isNew: true,
        tags: ['security', 'utility']
    },
    {
        id: 'zen-garden',
        title: 'ZenGarden',
        description: 'Ambient noise interface and visualizer for focus and relaxation.',
        icon: '🌿',
        path: 'tools/zen-garden/index.html',
        isNew: true,
        tags: ['wellness', 'productivity']
    },
    {
        id: 'running-pace',
        title: 'RunningPace',
        description: 'Target pace calculator for standard race distances like 5k and Marathon.',
        icon: '🏃',
        path: 'tools/running-pace/index.html',
        isNew: true,
        tags: ['fitness', 'sports']
    },
    {
        id: 'savings-goal',
        title: 'SavingsGoal',
        description: 'Determine monthly savings needed to reach a target amount by a specific date.',
        icon: '🎯',
        path: 'tools/savings-goal/index.html',
        isNew: true,
        tags: ['finance', 'planner']
    },
    {
        id: 'floor-area',
        title: 'FloorArea',
        description: 'Simple square footage calculator for room dimensions.',
        icon: '🏠',
        path: 'tools/floor-area/index.html',
        isNew: true,
        tags: ['home', 'diy']
    },
    {
        id: 'sun-set',
        title: 'SunSet',
        description: 'Golden hour start time estimator for photographers.',
        icon: '🌅',
        path: 'tools/sun-set/index.html',
        isNew: true,
        tags: ['photography', 'nature']
    },
    {
        id: 'tool-count',
        title: 'ToolCount',
        description: 'Celebrating the milestone of 200 unique tools in the repository.',
        icon: '💯',
        path: 'tools/tool-count/index.html',
        isNew: true,
        tags: ['milestone']
    },
    {
        id: 'shiny-odds',
        title: 'ShinyOdds',
        description: 'Probability calculator for at least one shiny encounter in Pokémon.',
        icon: '✨',
        path: 'tools/shiny-odds/index.html',
        isNew: true,
        tags: ['gaming', 'pokemon']
    },
    {
        id: 'battle-pass',
        title: 'BattlePass',
        description: 'Required daily pace calculator to finish game battle passes by the deadline.',
        icon: '⚔️',
        path: 'tools/battle-pass/index.html',
        isNew: true,
        tags: ['gaming', 'planner']
    },
    {
        id: 'pizza-slice',
        title: 'PizzaSlice',
        description: 'Estimate how many pizzas to order for a party based on guest count.',
        icon: '🍕',
        path: 'tools/pizza-slice/index.html',
        isNew: true,
        tags: ['food', 'social']
    },
    {
        id: 'unit-cost',
        title: 'UnitCost',
        description: 'Compare price per unit/oz between two products to find the better deal.',
        icon: '🛒',
        path: 'tools/unit-cost/index.html',
        isNew: true,
        tags: ['shopping', 'finance']
    },
    {
        id: 'gas-split',
        title: 'GasSplit',
        description: 'Carpool fuel money divider based on distance and car efficiency.',
        icon: '⛽',
        path: 'tools/gas-split/index.html',
        isNew: true,
        tags: ['auto', 'finance']
    },
    {
        id: 'depreciation',
        title: 'Depreciation',
        description: 'Estimated future value of a vehicle based on standard depreciation rates.',
        icon: '📉',
        path: 'tools/depreciation/index.html',
        isNew: true,
        tags: ['auto', 'finance']
    },
    {
        id: 'elo-gain',
        title: 'EloGain',
        description: 'Predicted rating change for win/loss in an ELO-based competitive system.',
        icon: '🏆',
        path: 'tools/elo-gain/index.html',
        isNew: true,
        tags: ['gaming', 'stats']
    },
    {
        id: 'loot-table',
        title: 'LootTable',
        description: 'Probability of receiving a rare item drop over multiple attempts.',
        icon: '💎',
        path: 'tools/loot-table/index.html',
        isNew: true,
        tags: ['gaming', 'math']
    },
    {
        id: 'mana-curve',
        title: 'ManaCurve',
        description: 'Visual distribution of card costs for TCG deck building.',
        icon: '🃏',
        path: 'tools/mana-curve/index.html',
        isNew: true,
        tags: ['gaming', 'tcg']
    },
    {
        id: 'stat-roller',
        title: 'StatRoller',
        description: 'Standard 4d6 drop-lowest attribute roller for RPG characters.',
        icon: '🎲',
        path: 'tools/stat-roller/index.html',
        isNew: true,
        tags: ['gaming', 'rpg']
    },
    {
        id: 'town-name-gen',
        title: 'TownNameGen',
        description: 'Quick random name generator for RPG towns and fantasy locations.',
        icon: '🏘️',
        path: 'tools/town-name-gen/index.html',
        isNew: true,
        tags: ['gaming', 'rpg']
    },
    {
        id: 'dinner-time',
        title: 'DinnerTime',
        description: 'Reverse cooking schedule based on target dinner serving time.',
        icon: '⏰',
        path: 'tools/dinner-time/index.html',
        isNew: true,
        tags: ['cooking', 'kitchen']
    },
    {
        id: 'meeting-cost',
        title: 'MeetingCost',
        description: 'Real-time meeting burn rate calculator based on attendee count and avg salary.',
        icon: '💸',
        path: 'tools/meeting-cost/index.html',
        isNew: true,
        tags: ['office', 'business']
    },
    {
        id: 'aspect-ratio',
        title: 'AspectRatio',
        description: 'Calculate missing dimensions for images and videos based on aspect ratio.',
        icon: '📏',
        path: 'tools/aspect-ratio/index.html',
        isNew: true,
        tags: ['design', 'video']
    },
    {
        id: 'hex-to-rgb',
        title: 'HexToRGB',
        description: 'Simple and clean color converter from Hexadecimal to RGB format.',
        icon: '🎨',
        path: 'tools/hex-to-rgb/index.html',
        isNew: true,
        tags: ['design', 'webdev']
    },
    {
        id: 'shutter-speed',
        title: 'ShutterSpeed',
        description: 'Reciprocity failure calculator for long exposure film photography.',
        icon: '📷',
        path: 'tools/shutter-speed/index.html',
        isNew: true,
        tags: ['photography']
    },
    {
        id: 'aperture-scale',
        title: 'ApertureScale',
        description: 'Visual reference for standard f-stop progression and light stops.',
        icon: '🔘',
        path: 'tools/aperture-scale/index.html',
        isNew: true,
        tags: ['photography']
    },
    {
        id: 'battery-waste',
        title: 'BatteryWaste',
        description: 'Estimate annual disposable battery waste and potential savings with rechargeables.',
        icon: '🔋',
        path: 'tools/battery-waste/index.html',
        isNew: true,
        tags: ['eco', 'saving']
    },
    {
        id: 'paper-ream',
        title: 'PaperReam',
        description: 'Weight calculator for stacks of paper based on ream weight and sheet count.',
        icon: '📄',
        path: 'tools/paper-ream/index.html',
        isNew: true,
        tags: ['office', 'print']
    },
    {
        id: 'storage-calc',
        title: 'StorageCalc',
        description: 'Estimated number of photos or video minutes that fit on an SD card.',
        icon: '💾',
        path: 'tools/storage-calc/index.html',
        isNew: true,
        tags: ['photography', 'tech']
    },
    {
        id: 'bit-rate',
        title: 'BitRate',
        description: 'Estimated upload time for large files based on internet speed.',
        icon: '🌐',
        path: 'tools/bit-rate/index.html',
        isNew: true,
        tags: ['webdev', 'tech']
    },
    {
        id: 'screen-angle',
        title: 'ScreenAngle',
        description: 'Optimal screen placement to minimize glare from windows and lights.',
        icon: '📐',
        path: 'tools/screen-angle/index.html',
        isNew: true,
        tags: ['office', 'ergonomics']
    },
    {
        id: 'light-heat',
        title: 'LightHeat',
        description: 'Energy and cost savings from switching incandescent bulbs to LEDs.',
        icon: '💡',
        path: 'tools/light-heat/index.html',
        isNew: true,
        tags: ['home', 'saving']
    },
    {
        id: 'drip-leak',
        title: 'DripLeak',
        description: 'Calculate total annual water waste from a dripping faucet.',
        icon: '💧',
        path: 'tools/drip-leak/index.html',
        isNew: true,
        tags: ['home', 'eco']
    },
    {
        id: 'shower-cost',
        title: 'ShowerCost',
        description: 'Monthly utility cost of showers based on duration and water heating.',
        icon: '🚿',
        path: 'tools/shower-cost/index.html',
        isNew: true,
        tags: ['home', 'utility']
    },
    {
        id: 'fridge-efficiency',
        title: 'FridgeEfficiency',
        description: 'Potential savings from upgrading to a newer, more efficient refrigerator.',
        icon: '🧊',
        path: 'tools/fridge-efficiency/index.html',
        isNew: true,
        tags: ['home', 'eco']
    },
    {
        id: 'laundry-load',
        title: 'LaundryLoad',
        description: 'Cost per laundry load and monthly spending on detergent.',
        icon: '🧺',
        path: 'tools/laundry-load/index.html',
        isNew: true,
        tags: ['home', 'utility']
    },
    {
        id: 'dishwash-vs-hand',
        title: 'DishwashVsHand',
        description: 'Water and energy savings comparison between dishwashers and hand washing.',
        icon: '🍽️',
        path: 'tools/dishwash-vs-hand/index.html',
        isNew: true,
        tags: ['home', 'eco']
    },
    {
        id: 'step-counter',
        title: 'StepCounter',
        description: 'Estimated calories burned and distance covered based on daily steps.',
        icon: '🚶',
        path: 'tools/step-counter/index.html',
        isNew: true,
        tags: ['fitness', 'health']
    },
    {
        id: 'bmi-calc',
        title: 'BMI',
        description: 'Standard Body Mass Index calculator with health category feedback.',
        icon: '🧘',
        path: 'tools/bmi-calc/index.html',
        isNew: true,
        tags: ['health', 'fitness']
    },
    {
        id: 'waist-to-hip',
        title: 'WaistToHip',
        description: 'Health risk estimator based on waist-to-hip ratio measurements.',
        icon: '📏',
        path: 'tools/waist-to-hip/index.html',
        isNew: true,
        tags: ['health', 'fitness']
    },
    {
        id: 'macro-split',
        title: 'MacroSplit',
        description: 'Daily macronutrient gram breakdown based on calorie goals.',
        icon: '🍗',
        path: 'tools/macro-split/index.html',
        isNew: true,
        tags: ['fitness', 'nutrition']
    },
    {
        id: 'one-rep-max',
        title: 'OneRepMax',
        description: 'Estimated one-repetition maximum for weightlifting based on sub-max reps.',
        icon: '🏋️',
        path: 'tools/one-rep-max/index.html',
        isNew: true,
        tags: ['fitness', 'gym']
    },
    {
        id: 'rest-interval',
        title: 'RestInterval',
        description: 'Gym rest timer with presets for hypertrophy and strength training.',
        icon: '⏱️',
        path: 'tools/rest-interval/index.html',
        isNew: true,
        tags: ['fitness', 'gym']
    },
    {
        id: 'pomodoro-timer',
        title: 'Pomodoro',
        description: 'Classic 25-minute focus timer for the Pomodoro productivity technique.',
        icon: '🍅',
        path: 'tools/pomodoro-timer/index.html',
        isNew: true,
        tags: ['productivity', 'focus']
    },
    {
        id: 'reading-speed',
        title: 'ReadingSpeed',
        description: 'Tapper to find your reading speed in words per minute.',
        icon: '📖',
        path: 'tools/reading-speed/index.html',
        isNew: true,
        tags: ['education', 'planner']
    },
    {
        id: 'typing-speed',
        title: 'TypingSpeed',
        description: 'Words per minute estimator for keyboard typing speed.',
        icon: '⌨️',
        path: 'tools/typing-speed/index.html',
        isNew: true,
        tags: ['tech', 'utility']
    },
    {
        id: 'oil-change',
        title: 'OilChange',
        description: 'Estimated weeks until your next car oil change based on driving habits.',
        icon: '🚗',
        path: 'tools/oil-change/index.html',
        isNew: true,
        tags: ['auto', 'maintenance']
    },
    {
        id: 'grade-need',
        title: 'GradeNeed',
        description: 'Calculate the score you need on a final exam to reach a target grade.',
        icon: '🎓',
        path: 'tools/grade-need/index.html',
        isNew: true,
        tags: ['education', 'student']
    },
    {
        id: 'steam-sale',
        title: 'SteamSale',
        description: 'Verify if a game deal is good compared to its historical low price.',
        icon: '🎮',
        path: 'tools/steam-sale/index.html',
        isNew: true,
        tags: ['gaming', 'finance']
    },
    {
        id: 'concrete-bag',
        title: 'ConcreteBag',
        description: 'How many 80lb bags of concrete you need for a slab of specific dimensions.',
        icon: '🏗️',
        path: 'tools/concrete-bag/index.html',
        isNew: true,
        tags: ['diy', 'construction']
    },
    {
        id: 'tile-calc',
        title: 'TileCalc',
        description: 'Estimated number of tiles for a room with waste factor adjustment.',
        icon: '🧱',
        path: 'tools/tile-calc/index.html',
        isNew: true,
        tags: ['home', 'diy']
    },
    {
        id: 'deck-stain',
        title: 'DeckStain',
        description: 'Gallon estimator for deck stain based on area and wood condition.',
        icon: '🖌️',
        path: 'tools/deck-stain/index.html',
        isNew: true,
        tags: ['home', 'maintenance']
    },
    {
        id: 'fish-stock',
        title: 'FishStock',
        description: "Stocking levels for aquariums based on the '1 inch per gallon' rule.",
        icon: '🐟',
        path: 'tools/fish-stock/index.html',
        isNew: true,
        tags: ['pets', 'aquarium']
    },
    {
        id: 'dog-treat',
        title: 'DogTreat',
        description: 'Daily treat calorie limit based on your dog weight and RER.',
        icon: '🦴',
        path: 'tools/dog-treat/index.html',
        isNew: true,
        tags: ['pets', 'health']
    },
    {
        id: 'cat-litter',
        title: 'CatLitter',
        description: 'Estimate how many days a bag of cat litter will last for your household.',
        icon: '🐈',
        path: 'tools/cat-litter/index.html',
        isNew: true,
        tags: ['pets', 'utility']
    },
    {
        id: 'book-shelf',
        title: 'BookShelf',
        description: 'Span load estimator to check for potential shelf sagging.',
        icon: '📚',
        path: 'tools/book-shelf/index.html',
        isNew: true,
        tags: ['woodworking', 'diy']
    },
    {
        id: 'gasket-cut',
        title: 'GasketCut',
        description: 'Circular material area calculator for gaskets and seals.',
        icon: '⭕',
        path: 'tools/gasket-cut/index.html',
        isNew: true,
        tags: ['engineering', 'diy']
    },
    {
        id: 'thread-pitch',
        title: 'ThreadPitch',
        description: 'Bolt size identifier from measured diameter and thread count.',
        icon: '🔩',
        path: 'tools/thread-pitch/index.html',
        isNew: true,
        tags: ['engineering', 'mechanic']
    },
    {
        id: 'wire-gauge',
        title: 'WireGauge',
        description: 'Voltage drop calculator for DC wire length and AWG gauge.',
        icon: '⚡',
        path: 'tools/wire-gauge/index.html',
        isNew: true,
        tags: ['electronics', 'engineering']
    },
    {
        id: 'solar-angle',
        title: 'SolarAngle',
        description: 'Optimal seasonal tilt angles for solar panels based on latitude.',
        icon: '☀️',
        path: 'tools/solar-angle/index.html',
        isNew: true,
        tags: ['solar', 'energy']
    },
    {
        id: 'rain-harvest',
        title: 'RainHarvest',
        description: 'Gallons of water collectible from a roof area per inch of rain.',
        icon: '🌧️',
        path: 'tools/rain-harvest/index.html',
        isNew: true,
        tags: ['gardening', 'eco']
    },
    {
        id: 'pool-chem',
        title: 'PoolChem',
        description: 'Liquid chlorine adjustment calculator for specific pool volumes.',
        icon: '🏊',
        path: 'tools/pool-chem/index.html',
        isNew: true,
        tags: ['maintenance', 'utility']
    },
    {
        id: 'grill-gas',
        title: 'GrillGas',
        description: 'Estimated propane remaining and grill time left by tank weight.',
        icon: '🍖',
        path: 'tools/grill-gas/index.html',
        isNew: true,
        tags: ['cooking', 'utility']
    },
    {
        id: 'coffee-caffeine',
        title: 'CoffeeCaffeine',
        description: 'Estimate caffeine intake based on brew method and serving size.',
        icon: '☕',
        path: 'tools/coffee-caffeine/index.html',
        isNew: true,
        tags: ['health', 'food']
    },
    {
        id: 'tea-steep',
        title: 'TeaSteep',
        description: 'Optimal temperature and steep time for various tea types.',
        icon: '🍵',
        path: 'tools/tea-steep/index.html',
        isNew: true,
        tags: ['food', 'kitchen']
    },
    {
        id: 'sleep-cycle',
        title: 'SleepCycle',
        description: 'Best bedtimes to wake up refreshed between sleep cycles.',
        icon: '😴',
        path: 'tools/sleep-cycle/index.html',
        isNew: true,
        tags: ['health', 'wellness']
    },
    {
        id: 'breath-hold',
        title: 'BreathHold',
        description: 'Simple static apnea timer for breath-hold progression.',
        icon: '🫁',
        path: 'tools/breath-hold/index.html',
        isNew: true,
        tags: ['fitness', 'wellness']
    },
    {
        id: 'map-scale',
        title: 'MapScale',
        description: 'Convert map measurements to real-world distances using map scales.',
        icon: '🗺️',
        path: 'tools/map-scale/index.html',
        isNew: true,
        tags: ['travel', 'utility']
    },
    {
        id: 'stamp-cost',
        title: 'StampCost',
        description: 'Postage and stamp count estimator for letters and flats.',
        icon: '✉️',
        path: 'tools/stamp-cost/index.html',
        isNew: true,
        tags: ['utility', 'office']
    },
    {
        id: 'gift-wrap',
        title: 'GiftWrap',
        description: 'Minimum paper size needed to wrap a box of specific dimensions.',
        icon: '🎁',
        path: 'tools/gift-wrap/index.html',
        isNew: true,
        tags: ['utility', 'holidays']
    },
    {
        id: 'drink-cool',
        title: 'DrinkCool',
        description: 'Estimated freezer time to reach optimal drink temperature.',
        icon: '❄️',
        path: 'tools/drink-cool/index.html',
        isNew: true,
        tags: ['kitchen', 'utility']
    },
    {
        id: 'tempo-tap',
        title: 'TempoTap',
        description: 'BPM tapper for musicians and producers to find the tempo of a song.',
        icon: '🥁',
        path: 'tools/tempo-tap/index.html',
        isNew: true,
        tags: ['music', 'audio']
    },
    {
        id: 'wood-waste',
        title: 'WoodWaste',
        description: 'Board foot calculator for woodworking projects with waste factor inclusion.',
        icon: '🪵',
        path: 'tools/wood-waste/index.html',
        isNew: true,
        tags: ['woodworking', 'diy']
    },
    {
        id: 'password-strength',
        title: 'PasswordStrength',
        description: 'Visual password entropy and crack time estimator for better security.',
        icon: '🔐',
        path: 'tools/password-strength/index.html',
        isNew: true,
        tags: ['security', 'tech']
    },
    {
        id: 'kitchen-scale',
        title: 'KitchenScale',
        description: 'Volume to weight converter for common baking ingredients like flour and sugar.',
        icon: '⚖️',
        path: 'tools/kitchen-scale/index.html',
        isNew: true,
        tags: ['cooking', 'kitchen']
    },
    {
        id: 'tip-split',
        title: 'TipSplit',
        description: 'Advanced bill splitter with customizable tip percentage and per-person breakdown.',
        icon: '💸',
        path: 'tools/tip-split/index.html',
        isNew: true,
        tags: ['finance', 'social']
    },
    {
        id: 'room-paint',
        title: 'RoomPaint',
        description: 'Paint gallon estimator based on wall dimensions and number of coats.',
        icon: '🎨',
        path: 'tools/room-paint/index.html',
        isNew: true,
        tags: ['home', 'diy']
    },
    {
        id: 'loan-payoff',
        title: 'LoanPayoff',
        description: 'Estimated interest and time saved by making extra monthly loan payments.',
        icon: '💰',
        path: 'tools/loan-payoff/index.html',
        isNew: true,
        tags: ['finance', 'saving']
    },
    {
        id: 'bird-seed',
        title: 'BirdSeed',
        description: 'Monthly cost calculator for backyard bird feeding based on seed price.',
        icon: '🐦',
        path: 'tools/bird-seed/index.html',
        isNew: true,
        tags: ['nature', 'finance']
    },
    {
        id: 'screen-res',
        title: 'ScreenRes',
        description: 'Pixels Per Inch (PPI) calculator for any monitor or device screen size.',
        icon: '🖥️',
        path: 'tools/screen-res/index.html',
        isNew: true,
        tags: ['tech', 'display']
    },
    {
        id: 'egg-timer',
        title: 'EggTimer',
        description: 'Perfect boiled egg timer based on egg size and desired doneness.',
        icon: '🥚',
        path: 'tools/egg-timer/index.html',
        isNew: true,
        tags: ['cooking', 'kitchen']
    },
    {
        id: 'pizza-dough',
        title: 'PizzaDough',
        description: "Baker's percentage calculator for perfect pizza dough batches.",
        icon: '🍕',
        path: 'tools/pizza-dough/index.html',
        isNew: true,
        tags: ['cooking', 'baking']
    },
    {
        id: 'rent-vs-buy',
        title: 'RentVsBuy',
        description: 'Simple price-to-rent ratio calculator for housing decisions.',
        icon: '🏠',
        path: 'tools/rent-vs-buy/index.html',
        isNew: true,
        tags: ['finance', 'realestate']
    },
    {
        id: 'plant-pot',
        title: 'PlantPot',
        description: 'Soil volume calculator for round plant pots in liters and cubic feet.',
        icon: '🪴',
        path: 'tools/plant-pot/index.html',
        isNew: true,
        tags: ['gardening', 'home']
    },
    {
        id: 'battery-life',
        title: 'BatteryLife',
        description: 'Estimated device runtime based on battery capacity and current draw.',
        icon: '🔋',
        path: 'tools/battery-life/index.html',
        isNew: true,
        tags: ['tech', 'electronics']
    },
    {
        id: 'word-speed',
        title: 'WordSpeed',
        description: 'Speech duration estimator based on word count and speaking pace.',
        icon: '🎙️',
        path: 'tools/word-speed/index.html',
        isNew: true,
        tags: ['publicspeaking', 'utility']
    },
    {
        id: 'fabric-sizer',
        title: 'FabricSizer',
        description: 'Estimate yardage needed for upholstery and cushion projects.',
        icon: '🧵',
        path: 'tools/fabric-sizer/index.html',
        isNew: true,
        tags: ['crafts', 'sewing', 'diy']
    },
    {
        id: 'wedding-flowers',
        title: 'WeddingFlowers',
        description: 'Stem count estimator for DIY wedding floral arrangements.',
        icon: '🌸',
        path: 'tools/wedding-flowers/index.html',
        isNew: true,
        tags: ['events', 'wedding', 'diy']
    },
    {
        id: 'hover-lift',
        title: 'HoverLift',
        description: 'RC hovercraft static pressure and lift fan requirement calculator.',
        icon: '🚤',
        path: 'tools/hover-lift/index.html',
        isNew: true,
        tags: ['rc', 'hobbies', 'engineering']
    },
    {
        id: 'pet-food-cost',
        title: 'PetFoodCost',
        description: 'Monthly pet food spending calculator based on bag price and serving size.',
        icon: '🐶',
        path: 'tools/pet-food-cost/index.html',
        isNew: true,
        tags: ['pets', 'finance']
    },
    {
        id: 'moving-box',
        title: 'MovingBox',
        description: 'Estimated number of boxes needed for moving based on bedroom count.',
        icon: '📦',
        path: 'tools/moving-box/index.html',
        isNew: true,
        tags: ['home', 'utility']
    },
    {
        id: 'coffee-ratio',
        title: 'CoffeeRatio',
        description: 'Golden ratio calculator for various coffee brewing methods.',
        icon: '☕',
        path: 'tools/coffee-ratio/index.html',
        isNew: true,
        tags: ['coffee', 'food']
    },
    {
        id: 'soap-calc',
        title: 'SoapCalc',
        description: 'Simple lye and water ratio calculator for basic soap making.',
        icon: '🧼',
        path: 'tools/soap-calc/index.html',
        isNew: true,
        tags: ['diy', 'crafts']
    },
    {
        id: 'candle-scent',
        title: 'CandleScent',
        description: 'Fragrance oil load calculator for candle making by wax weight.',
        icon: '🕯️',
        path: 'tools/candle-scent/index.html',
        isNew: true,
        tags: ['diy', 'crafts']
    },
    {
        id: 'bike-commute',
        title: 'BikeCommute',
        description: 'Calculate fuel savings and CO2 reduction by cycling to work.',
        icon: '🚲',
        path: 'tools/bike-commute/index.html',
        isNew: true,
        tags: ['cycling', 'environment', 'saving']
    },
    {
        id: 'study-pace',
        title: 'StudyPace',
        description: 'Reading planner to determine pages per hour needed to meet a deadline.',
        icon: '📖',
        path: 'tools/study-pace/index.html',
        isNew: true,
        tags: ['education', 'planner']
    },
    {
        id: 'fish-volume',
        title: 'FishVolume',
        description: 'Calculate aquarium volume for rectangular, cylinder, and bowfront tanks.',
        icon: '🐟',
        path: 'tools/fish-volume/index.html',
        isNew: true,
        tags: ['pets', 'aquarium']
    },
    {
        id: 'plant-thirst',
        title: 'PlantThirst',
        description: 'Estimated watering schedule based on plant type, pot, and light.',
        icon: '🌿',
        path: 'tools/plant-thirst/index.html',
        isNew: true,
        tags: ['plants', 'home']
    },
    {
        id: 'sub-saver',
        title: 'SubSaver',
        description: 'Subscription ROI calculator to check if a service is worth its cost.',
        icon: '📉',
        path: 'tools/sub-saver/index.html',
        isNew: true,
        tags: ['finance', 'saving']
    },
    {
        id: 'charity-impact',
        title: 'CharityImpact',
        description: 'Visualize the tangible impact of your donation amount.',
        icon: '❤️',
        path: 'tools/charity-impact/index.html',
        isNew: true,
        tags: ['charity', 'social']
    },
    {
        id: 'desk-height',
        title: 'DeskHeight',
        description: 'Ergonomic desk and chair height calculator based on your height.',
        icon: '🪑',
        path: 'tools/desk-height/index.html',
        isNew: true,
        tags: ['health', 'work']
    },
    {
        id: 'luggage-limit',
        title: 'LuggageLimit',
        description: 'Baggage weight converter and common airline limit checker.',
        icon: '🧳',
        path: 'tools/luggage-limit/index.html',
        isNew: true,
        tags: ['travel', 'utility']
    },
    {
        id: 'screen-distance',
        title: 'ScreenDistance',
        description: 'Optimal viewing distance for TVs and monitors based on size and resolution.',
        icon: '📺',
        path: 'tools/screen-distance/index.html',
        isNew: true,
        tags: ['tech', 'home']
    },
    {
        id: 'dice-odds',
        title: 'DiceOdds',
        description: 'Probability calculator for specific dice roll totals.',
        icon: '🎲',
        path: 'tools/dice-odds/index.html',
        isNew: true,
        tags: ['gaming', 'math']
    },
    {
        id: 'carb-cycle',
        title: 'CarbCycle',
        description: 'Simple carbohydrate cycling planner for fitness and nutrition.',
        icon: '🍚',
        path: 'tools/carb-cycle/index.html',
        isNew: true,
        tags: ['health', 'fitness']
    },
    {
        id: 'compost-mix',
        title: 'CompostMix',
        description: 'Calculate the ideal Carbon to Nitrogen ratio for your compost pile.',
        icon: '🍂',
        path: 'tools/compost-mix/index.html',
        isNew: true,
        tags: ['gardening', 'eco']
    },
    {
        id: 'doubler-mix',
        title: 'DoublerMix',
        description: 'E-liquid calculator for adding nicotine and base to doubler juice bottles.',
        icon: '🧪',
        path: 'tools/doubler-mix/index.html',
        isNew: true,
        tags: ['vaping', 'diy', 'mixing']
    },
    {
        id: 'resisto-calc',
        title: 'ResistoCalc',
        description: 'Determine resistor values and tolerance using standard color codes.',
        icon: '🔌',
        path: 'tools/resisto-calc/index.html',
        isNew: true,
        tags: ['electronics', 'engineering']
    },
    {
        id: 'noknead-time',
        title: 'NoKneadTime',
        description: 'Baking schedule calculator for no-knead bread timing.',
        icon: '🍞',
        path: 'tools/noknead-time/index.html',
        isNew: true,
        tags: ['cooking', 'baking']
    },
    {
        id: 'solar-juice',
        title: 'SolarJuice',
        description: 'Estimated charging time for power stations via solar panels.',
        icon: '☀️',
        path: 'tools/solar-juice/index.html',
        isNew: true,
        tags: ['solar', 'camping', 'tech']
    },
    {
        id: 'encounter-scaler',
        title: 'EncounterScaler',
        description: 'D&D monster HP and quantity adjuster for non-standard party sizes.',
        icon: '🐉',
        path: 'tools/encounter-scaler/index.html',
        isNew: true,
        tags: ['gaming', 'dnd', 'rpg']
    },
    {
        id: 'trace-width',
        title: 'TraceWidth',
        description: 'PCB trace width calculator based on current and temperature rise.',
        icon: '🎛️',
        path: 'tools/trace-width/index.html',
        isNew: true,
        tags: ['electronics', 'pcb', 'engineering']
    },
    {
        id: 'reel-length',
        title: 'ReelLength',
        description: 'Calculate remaining material length on a spool or reel.',
        icon: '🧵',
        path: 'tools/reel-length/index.html',
        isNew: true,
        tags: ['maker', '3dprinting', 'cable']
    },
    {
        id: 'yarn-yard',
        title: 'YarnYard',
        description: 'Yarn requirement estimator for knitting and crochet projects.',
        icon: '🧶',
        path: 'tools/yarn-yard/index.html',
        isNew: true,
        tags: ['crafts', 'knitting', 'crochet']
    },
    {
        id: 'hydrate-goal',
        title: 'HydrateGoal',
        description: 'Personal daily water intake goal based on weight and activity.',
        icon: '💧',
        path: 'tools/hydrate-goal/index.html',
        isNew: true,
        tags: ['health', 'fitness']
    },
    {
        id: 'build-estimate',
        title: 'BuildEstimate',
        description: 'Quick 3D print time and cost estimator before slicing.',
        icon: '🖨️',
        path: 'tools/build-estimate/index.html',
        isNew: true,
        tags: ['3dprinting', 'maker']
    },
    {
        id: 'round-price',
    {
        id: 'pixel-scale',
        title: 'PixelScale',
        description: 'Integer scaling calculator for pixel art export and print sizing.',
        icon: '👾',
        path: 'tools/pixel-scale/index.html',
        isNew: true,
        tags: ['art', 'design', 'pixel']
    },
    {
        id: 'clay-shrink',
        title: 'ClayScale',
        description: 'Pottery shrinkage calculator for finding shrinkage rates and target wet sizes.',
        icon: '🏺',
        path: 'tools/clay-shrink/index.html',
        isNew: true,
        tags: ['ceramics', 'calculator', 'art']
    },
    {
        id: 'thymol-calc',
        title: 'ThymolCalc',
        description: 'Precise emulsified thymol solution calculator for beekeeping Varroa treatment.',
        icon: '🐝',
        path: 'tools/thymol-calc/index.html',
        isNew: true,
        tags: ['calculator', 'nature', 'math']
    },
    {
        id: 'true-glass',
        title: 'TrueGlass',
        description: 'Premium user interface generator with integrated noise textures and liquid motion.',
        icon: '💎',
        path: 'tools/true-glass/index.html',
        isNew: true,
        tags: ['css', 'generator', 'design']
    },
    {
        id: 'true-skeleton',
        title: 'TrueSkeleton',
        description: 'Visual liquid skeleton screen generator with squircle support.',
        icon: '💀',
        path: 'tools/true-skeleton/index.html',
        isNew: true,
        tags: ['css', 'loader', 'animation']
    }
];

const toolsGrid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search-input');

function renderTools(filterText = '') {
    toolsGrid.innerHTML = '';

    const filteredTools = tools.filter(tool => {
        const text = filterText.toLowerCase();
        return tool.title.toLowerCase().includes(text) ||
            tool.description.toLowerCase().includes(text);
    });

    if (filteredTools.length === 0 && filterText !== '') {
        toolsGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; opacity: 0.7;">No tools found matching your search.</p>';
        return;
    }

    filteredTools.forEach(tool => {
        const card = document.createElement('a');
        card.href = tool.path;
        card.className = 'tool-card glass-panel';

        card.innerHTML = `
            ${tool.isNew ? '<span class="badge">New</span>' : ''}
            <div class="tool-icon">${tool.icon || '🛠️'}</div>
            <div class="tool-title">${tool.title}</div>
            <div class="tool-description">${tool.description}</div>
        `;

        toolsGrid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    renderTools(e.target.value);
});

// Initial Render
renderTools();
