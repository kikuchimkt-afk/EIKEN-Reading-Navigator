// Update script to enhance grammarNotes with S'/V'/O' structure breakdowns
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readingDataPath = path.resolve(__dirname, 'src/data/readingData.js');
let content = fs.readFileSync(readingDataPath, 'utf8');

// Peak Oil updates - add S'/V'/O' structures to grammarNotes

// Sentence 1: that would shape energy policy
content = content.replace(
    `"phrase": "that would shape energy policy",\n                                "explanation": "<b>関係代名詞節</b>: theoryを修飾。wouldは推量。"`,
    `"phrase": "that would shape energy policy",\n                                "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: that (= theory)</li><li><b>V'</b>: would shape</li><li><b>O'</b>: energy policy</li></ul>theoryを修飾。wouldは推量。"`
);

// Sentence 2: add that節 structure
content = content.replace(
    `"phrase": "leading to energy scarcity",\n                                "explanation": "<b>分詞構文</b>: 結果を表す。「その結果〜を招く」。"\n                            }\n                        ]\n                    }\n                },\n                {\n                    "id": 3,\n                    "text": "Hubbert's theory, known as \\"Peak Oil,\\"`,
    `"phrase": "leading to energy scarcity",\n                                "explanation": "<b>分詞構文</b>: 結果を表す。「その結果〜を招く」。"\n                            },\n                            {\n                                "phrase": "that U.S. oil production would peak",\n                                "explanation": "<b>that節構造</b>:<ul><li><b>S'</b>: U.S. oil production</li><li><b>V'</b>: would peak / would enter</li><li><b>O'</b>: a terminal decline</li></ul>predictedの目的語。"\n                            }\n                        ]\n                    }\n                },\n                {\n                    "id": 3,\n                    "text": "Hubbert's theory, known as \\"Peak Oil,\\"`
);

// Sentence 3: enhance two that clauses
content = content.replace(
    `"phrase": "that oil is a finite resource ... and that we were consuming",\n                                "explanation": "<b>2つの同格that節</b>: ideaの内容を説明。"`,
    `"phrase": "that oil is a finite resource ... and that we were consuming",\n                                "explanation": "<b>2つの同格that節構造</b>:<ul><li><b>第1節</b>: S' oil / V' is / C' a finite resource</li><li><b>第2節</b>: S' we / V' were consuming / O' it</li></ul>ideaの内容を説明。比較構文 faster than it could be replacedを含む。"`
);

// Sentence 4: add that節 structure for argued
content = content.replace(
    `"phrase": "primarily economists",\n                                "explanation": "<b>同格</b>: criticsを説明する挿入句。"\n                            },\n                            {\n                                "phrase": "as oil became scarcer",\n                                "explanation": "<b>as節構造</b>: 「〜するにつれて」。"`,
    `"phrase": "primarily economists",\n                                "explanation": "<b>同格</b>: criticsを説明する挿入句。"\n                            },\n                            {\n                                "phrase": "that market forces ... would prevent",\n                                "explanation": "<b>that節構造</b>:<ul><li><b>S'</b>: market forces and human ingenuity</li><li><b>V'</b>: would prevent</li><li><b>O'</b>: such a collapse</li></ul>arguedの目的語。"\n                            },\n                            {\n                                "phrase": "as oil became scarcer",\n                                "explanation": "<b>as節構造</b>:<ul><li><b>S'</b>: oil</li><li><b>V'</b>: became</li><li><b>C'</b>: scarcer and more expensive</li></ul>「〜するにつれて」。"`
);

// Sentence 5: add when節 structure  
content = content.replace(
    `"phrase": "when U.S. production peaked",\n                                "explanation": "<b>when節</b>: 時を表す。"`,
    `"phrase": "when U.S. production peaked",\n                                "explanation": "<b>when節構造</b>:<ul><li><b>S'</b>: U.S. production</li><li><b>V'</b>: peaked</li></ul>時を表す副詞節。"`
);

// Peak Oil Sentence 7: While clause
content = content.replace(
    `"phrase": "While conventional oil production did decline as Hubbert predicted",\n                                "explanation": "<b>譲歩のwhile節</b>: didは強調。「確かに〜したが」。"`,
    `"phrase": "While conventional oil production did decline",\n                                "explanation": "<b>譲歩のwhile節構造</b>:<ul><li><b>S'</b>: conventional oil production</li><li><b>V'</b>: did decline</li></ul>didは強調。「確かに〜したが」。"`
);

// Peak Oil Sentence 8: add that clause for rock formations
content = content.replace(
    `"phrase": "that were previously inaccessible",\n                                "explanation": "<b>関係代名詞節</b>: rock formationsを修飾。"`,
    `"phrase": "that were previously inaccessible",\n                                "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: that (= rock formations)</li><li><b>V'</b>: were</li><li><b>C'</b>: previously inaccessible</li></ul>rock formationsを修飾。"`
);

// Peak Oil Sentence 10: add that clause for pointed out
content = content.replace(
    `"phrase": "that Hubbert had underestimated",\n                                "explanation": "<b>that節</b>: had + 過去分詞で大過去。"`,
    `"phrase": "that Hubbert had underestimated",\n                                "explanation": "<b>that節構造</b>:<ul><li><b>S'</b>: Hubbert</li><li><b>V'</b>: had underestimated</li><li><b>O'</b>: the power of price signals</li></ul>pointed outの目的語。大過去で過去の時点より前を示す。"`
);

// Peak Oil Sentence 11: add when clause and that clause
content = content.replace(
    `"phrase": "When the price of oil rose",\n                                "explanation": "<b>when節</b>: 時を表す。"`,
    `"phrase": "When the price of oil rose",\n                                "explanation": "<b>when節構造</b>:<ul><li><b>S'</b>: the price of oil</li><li><b>V'</b>: rose</li></ul>時を表す副詞節。"`
);

content = content.replace(
    `"phrase": "that Hubbert had considered useless geology",\n                                "explanation": "<b>関係代名詞節</b>: reservesを修飾。consider O Cの構造。"`,
    `"phrase": "that Hubbert had considered useless geology",\n                                "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: Hubbert</li><li><b>V'</b>: had considered</li><li><b>O'</b>: that (= reserves)</li><li><b>C'</b>: useless geology</li></ul>reservesを修飾。consider O C「OをCとみなす」。"`
);

// Peak Oil Sentence 13: While clause
content = content.replace(
    `"phrase": "While technology saved the world",\n                                "explanation": "<b>譲歩のwhile節</b>: 「〜した一方で」。"`,
    `"phrase": "While technology saved the world",\n                                "explanation": "<b>譲歩のwhile節構造</b>:<ul><li><b>S'</b>: technology</li><li><b>V'</b>: saved</li><li><b>O'</b>: the world</li></ul>「〜した一方で」。"`
);

// Peak Oil Sentence 15: add that clause
content = content.replace(
    `"phrase": "that technology will always provide a solution",\n                                "explanation": "<b>同格のthat節</b>: beliefの内容を説明。"`,
    `"phrase": "that technology will always provide a solution",\n                                "explanation": "<b>同格のthat節構造</b>:<ul><li><b>S'</b>: technology</li><li><b>V'</b>: will provide</li><li><b>O'</b>: a solution</li></ul>beliefの内容を説明。"`
);

// Peak Oil Sentence 16: add who clauses
content = content.replace(
    `"phrase": "who predict collapse",\n                                "explanation": "<b>関係代名詞節</b>: doomersを修飾。"`,
    `"phrase": "who predict collapse",\n                                "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: who (= doomers)</li><li><b>V'</b>: predict</li><li><b>O'</b>: collapse</li></ul>doomersを修飾。"`
);

content = content.replace(
    `"phrase": "who believe scientific breakthroughs will fix everything",\n                                "explanation": "<b>関係代名詞節</b>: techno-optimistsを修飾。"`,
    `"phrase": "who believe scientific breakthroughs will fix everything",\n                                "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: who (= techno-optimists)</li><li><b>V'</b>: believe</li><li><b>O'節</b>: scientific breakthroughs will fix everything</li></ul>techno-optimistsを修飾。"`
);

// Peak Oil Sentence 17: add that clause for suggesting
content = content.replace(
    `"phrase": "suggesting that solving the supply problem...",\n                                "explanation": "<b>分詞構文</b>: 結果を表す。「その結果〜を示唆している」。"`,
    `"phrase": "suggesting that solving the supply problem...",\n                                "explanation": "<b>分詞構文 + that節構造</b>:<ul><li><b>S'</b>: solving the supply problem</li><li><b>V'</b>: may have accelerated</li><li><b>O'</b>: the environmental one</li></ul>結果を表す。「その結果〜を示唆している」。"`
);

// Balloon updates

// Sentence 6: add that clause
content = content.replace(
    `"phrase": "they needed a method",\n                                "explanation": "<b>that節省略</b>: realizedの目的語。"`,
    `"phrase": "they needed a method",\n                                "explanation": "<b>that節構造（thatは省略）</b>:<ul><li><b>S'</b>: they</li><li><b>V'</b>: needed</li><li><b>O'</b>: a method</li></ul>realizedの目的語。"`
);

content = content.replace(
    `"phrase": "that the border guards would not expect and could not easily intercept",\n                                "explanation": "<b>関係代名詞節</b>: methodを修飾。2つの述語動詞が並列。"`,
    `"phrase": "that the border guards would not expect and could not easily intercept",\n                                "explanation": "<b>関係代名詞節構造</b>:<ul><li><b>S'</b>: the border guards</li><li><b>V'</b>: would not expect / could not intercept</li><li><b>O'</b>: that (= method)</li></ul>methodを修飾。目的格関係代名詞。2つの述語動詞が並列。"`
);

// Balloon Sentence 12: add where clause
content = content.replace(
    `"phrase": "where the balloon tore and crashed",\n                                "explanation": "<b>関係副詞where</b>: attemptを修飾。「そこで〜した」。"`,
    `"phrase": "where the balloon tore and crashed",\n                                "explanation": "<b>関係副詞where節構造</b>:<ul><li><b>S'</b>: the balloon</li><li><b>V'</b>: tore and crashed</li></ul>attemptを修飾。「そこで〜した」。"`
);

// Balloon Sentence 13: add that clauses
content = content.replace(
    `"phrase": "Terrified that the crash site would reveal",\n                                "explanation": "<b>過去分詞 + that節</b>: 感情の原因。「〜と恐れて」。"`,
    `"phrase": "Terrified that the crash site would reveal",\n                                "explanation": "<b>過去分詞 + that節構造</b>:<ul><li><b>S'</b>: the crash site</li><li><b>V'</b>: would reveal</li><li><b>O'</b>: their identity</li></ul>感情の原因。「〜と恐れて」。"`
);

content = content.replace(
    `"phrase": "fearing that the Stasi were closing in",\n                                "explanation": "<b>分詞構文</b>: 付帯状況。「〜を恐れながら」。"`,
    `"phrase": "fearing that the Stasi were closing in",\n                                "explanation": "<b>分詞構文 + that節構造</b>:<ul><li><b>S'</b>: the Stasi</li><li><b>V'</b>: were closing in</li><li><b>M'</b>: on them</li></ul>付帯状況。「〜を恐れながら」。"`
);

// Balloon Sentence 16: add As clause
content = content.replace(
    `"phrase": "As they floated through the dark sky",\n                                "explanation": "<b>as節</b>: 「〜しながら」。同時進行。"`,
    `"phrase": "As they floated through the dark sky",\n                                "explanation": "<b>as節構造</b>:<ul><li><b>S'</b>: they</li><li><b>V'</b>: floated</li><li><b>M'</b>: through the dark sky</li></ul>「〜しながら」。同時進行を表す。"`
);

// Balloon Sentence 17: add as clause
content = content.replace(
    `"phrase": "as they ran out of gas",\n                                "explanation": "<b>as節</b>: 理由/時を表す。「〜したため」。"`,
    `"phrase": "as they ran out of gas",\n                                "explanation": "<b>as節構造</b>:<ul><li><b>S'</b>: they</li><li><b>V'</b>: ran out of</li><li><b>O'</b>: gas</li></ul>理由/時を表す。「〜したため」。"`
);

// Balloon Sentence 19: add When clause with inform structure
content = content.replace(
    `"phrase": "When the officer informed them",\n                                "explanation": "<b>when節構造</b>:<ul><li><b>S'</b>: the officer</li><li><b>V'</b>: informed</li><li><b>O'</b>: them, that they were in Naila</li></ul>"`,
    `"phrase": "When the officer informed them ... that they were in Naila",\n                                "explanation": "<b>when節構造</b>:<ul><li><b>S'</b>: the officer</li><li><b>V'</b>: informed</li><li><b>O1'</b>: them</li><li><b>O2'</b>: that they were in Naila (= that節: S'' they / V'' were / C'' in Naila)</li></ul>inform O1 that O2「O1にO2を伝える」。"`
);

// Balloon Sentence 20: add that clause for proving
content = content.replace(
    `"phrase": "proving that ingenuity could overcome",\n                                "explanation": "<b>分詞構文</b>: 結果を表す。「その結果〜を証明した」。"`,
    `"phrase": "proving that ingenuity could overcome",\n                                "explanation": "<b>分詞構文 + that節構造</b>:<ul><li><b>S'</b>: ingenuity</li><li><b>V'</b>: could overcome</li><li><b>O'</b>: even the most fortified barriers</li></ul>結果を表す。「その結果〜を証明した」。"`
);

fs.writeFileSync(readingDataPath, content, 'utf8');
console.log('✅ Successfully updated grammarNotes with S\'/V\'/O\' structure breakdowns for Problems 11 and 12!');
