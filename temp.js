// I =都沒有
// 8 █    ;    4 ▄    ;    0 ▀    ; I  
//--------------------原始資料----------------------//
// 202020202020202020202020202020202020202020202020202020202020202020202020200a
// 202020202020202020202020202020202020202020202020202020202020202020202020200a
// 20202020e29688e29680e29680e29680e29680e29680e2968820e29688e29688e2968420e29688e29680e29680e29680e29680e29684e29684e296842020e29688e29680e29680e29680e29680e29680e29688202020200a
// 20202020e2968820e29688e29688e2968820e2968820e29688e29684e296802020e29684e29688e29684e29684e29680e29688202020e2968820e29688e29688e2968820e29688202020200a
// 20202020e2968820e29680e29680e2968020e2968820e296842020e2968020e29684e29688e29680e2968820e29680e296842020e2968820e29680e29680e2968020e29688202020200a
// 20202020e29680e29680e29680e29680e29680e29680e2968020e29680e29684e29680e29684e2968020e29680e29684e29680e29684e2968020e2968820e29680e29680e29680e29680e29680e29680e29680202020200a
// 20202020e29680e296802020e29680e29688e29680e2968420e29684e29684e29688e2968020e29684e29684e29684e29680e29684e29680e2968020e29684e29688e29684e29680e29688e29680e29688202020200a
// 20202020e29680e29688e29684e2968020e29680e29680e29684e2968420e29684e296882020e29684e29688e29680e29684e29680e29684e29684e2968020e29684e29684e296842020e29680202020200a
// 20202020e29680e29680e29684e296882020e296802020e29684e29680e29688e2968020e29684e29684e29684e29680e29684e29680e29680e29684e29684e29680e29684e29680e2968420e29684202020200a
// 20202020e29684e29688e29684e29688e29680e29688e29680e29688e2968420e29688e29680e29688e2968020e29680e29684e29688e2968820e2968420e296882020e2968820e29684e29680202020200a
// 20202020e29684e29684e29684e29684e29680e29680e29680e29684e29680e29688e29688e29684e29680e29684e29684e29684e29684e29680e29680e29680e29680e29684e29684e29680e29684e29680e2968420e29684202020200a
// 202020202020e29684e29684e2968420e29680e2968020e29680e29688e29680e2968420e29684e29680e29688e29688e29688e29684e29680e29684e29680e29688e29688e29684e2968020e29688202020200a
// 20202020e29680e29680e2968020e29680e29680e29680e29680e29684e29680e29680e29684e29680e29684e29684e29684e29684e29680e29680e29680e29688e29680e29680e29680e29688e29680e2968420e29684202020200a
// 20202020e29688e29680e29680e29680e29680e29680e2968820e2968420e29688e29688e29688e2968020e29688e29684e2968420e29688e2968820e2968020e29688e29688e29680e29684e29680202020200a
// 20202020e2968820e29688e29688e2968820e2968820e29680e2968420e29684e29680e29684e29684e29684e29684e29680e29680e29680e29688e29680e29680e29680e29680e2968820e29684e29684202020200a
// 20202020e2968820e29680e29680e2968020e2968820e29684e29688e29688e29688e29684e29680e29684e2968820e29684e2968020e2968420e296842020e2968420e29688e29688202020200a
// 20202020e29680e29680e29680e29680e29680e29680e2968020e2968020e2968020e29680202020e29680e29680e2968020e29680e29680202020e2968020e2968020202020200a
// 202020202020202020202020202020202020202020202020202020202020202020202020200a
// 20202020202020202020202020202020202020202020202020202020202020202020202020
//--------------------END----------------------//
//step.1----------------------  轉成這樣 先將'20'轉成'I' 'e2968'轉成''
[
    'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
    'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
    'IIII8000008II084840844084I8000008IIII',
    'IIII8I888I8I08840I440I440I8I888I8IIII',
    'IIII8I000I8II408440844084I8I000I8IIII',
    'IIII0000000I8484048404840I0000000IIII',
    'IIII008480088I8I88II88II888II4044IIII',
    'IIII000I8I04I0I4I484I484II0800000IIII',
    'IIII8I4080048III88II88II888II4I48IIII',
    'IIII0II8440I8484I484I484II0800000IIII',
    'IIIII480000II84I88II88II888II4I48IIII',
    'IIII044I800880I4I484I484II0800000IIII',
    'IIII0I000I0I800I88II88I4800084I48IIII',
    'IIII8000008I8404I484I4808I0I80088IIII',
    'IIII8I888I8I08II88II88II000884II8IIII',
    'IIII8I000I8I8004I484I48484I000040IIII',
    'IIII0000000I000I00II00I0000I0II00IIII',
    'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
    'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII']
//step.2---------------------- 一行轉乘兩行 8轉成1/1 4轉成0/1 0轉成1/0 I轉成0/0
[
    '11111110011010110011001111111',
    '10000010001111011101101000001',
    '10111010111010001000101011101',
    '10111010011100110011001011101',
    '10111010001100110011001011101',
    '10000010010111011101101000001',
    '11111110101010101010101111111',
    '00000000111101110111000000000',
    '11101111101011001100111000100',
    '00111001101011001100111001011',
    '11101010010000100010001111111',
    '00001001000101110111000100000',
    '10011110100011001100111000001',
    '10101001100011001100111001011',
    '10010010101000100010001111111',
    '00011100111101110111000100000',
    '00111110010011001100111000001',
    '01100000011011001100111001011',
    '10001111110000100010001111111',
    '01101001100101110111000100000',
    '10111010111011001100111110001',
    '00000000100011001101100011011',
    '11111110101000100011101011111',
    '10000010110101110110100010011',
    '10111010110011001100111110001',
    '10111010010011001100000111001',
    '10111010111000100010100111101',
    '10000010100101110111110000010',
    '11111110111011001101111010011',
    '00000000000000000000000000000']
//step.3---------------------- 一行8個轉成一個0xXX ex:11000011=0xC3 不夠的補0
[ 'fec28bf8',
  '82994a08',
  'ba36eae8',
  'ba4cc2e8',
  'baf7cae8',
  '8295c208',
  'feaaabf8',
  '00889000',
  'e6e5a798',
  '79430018',
  '6f1e2438',
  '39d146d0',
  '1255ed38',
  '5d5664c8',
  '278325c8',
  '582c0610',
  'a254ef38',
  '6c105280',
  'd78b27e8',
  '0c6b2610',
  'f326ffd8',
  '00ec4888',
  'fe2f3ac8',
  '82a53890',
  'ba3eff88',
  'ba2258c0',
  'ba8d39f8',
  '82b72940',
  'fe9af908' ]



//2802



// [ '20202020202020202020202020202020202020202020202020202020202020202020202020',
//   '20202020202020202020202020202020202020202020202020202020202020202020202020',
//   '20202020e29688e29680e29680e29680e29680e29680e296882020e29680e29688e29684e29688e29684e29680e29688e29684e29684e29680e29688e2968420e29688e29680e29680e29680e29680e29680e2968820202020',
//   '20202020e2968820e29688e29688e2968820e2968820e29680e29688e29688e29684e2968020e29684e29684e2968020e29684e29684e2968020e2968820e29688e29688e2968820e2968820202020',
//   '20202020e2968820e29680e29680e2968020e296882020e29684e29680e29688e29684e29684e29680e29688e29684e29684e29680e29688e2968420e2968820e29680e29680e2968020e2968820202020',
//   '20202020e29680e29680e29680e29680e29680e29680e2968020e29688e29684e29688e29684e29680e29684e29688e29684e29680e29684e29688e29684e2968020e29680e29680e29680e29680e29680e29680e2968020202020',
//   '20202020e29680e29680e29688e29684e29688e29680e29680e29688e2968820e2968820e29688e296882020e29688e296882020e29688e2968
// 8e296882020e29684e29680e29684e2968420202020',
//   '20202020e29680e29680e2968020e2968820e29680e2968420e2968020e2968420e29684e29688e2968420e29684e29688e296842020e29680e
// 29688e29680e29680e29680e29680e2968020202020',
//   '20202020e2968820e29684e29680e29688e29680e29680e29684e29688202020e29688e296882020e29688e296882020e29688e29688e296882
// 020e2968420e29684e2968820202020',
//   '20202020e296802020e29688e29684e29684e2968020e29688e29684e29688e2968420e29684e29688e2968420e29684e29688e296842020e29
// 680e29688e29680e29680e29680e29680e2968020202020',
//   '2020202020e29684e29688e29680e29680e29680e296802020e29688e2968420e29688e296882020e29688e296882020e29688e29688e296882
// 020e2968420e29684e2968820202020',
//   '20202020e29680e29684e2968420e29688e29680e29680e29688e29688e2968020e2968420e29684e29688e2968420e29684e29688e29684202
// 0e29680e29688e29680e29680e29680e29680e2968020202020',
//   '20202020e2968020e29680e29680e2968020e2968020e29688e29680e2968020e29688e296882020e29688e2968820e29684e29688e29680e29
// 680e29680e29688e2968420e29684e2968820202020',
//   '20202020e29688e29680e29680e29680e29680e29680e2968820e29688e29684e29680e2968420e29684e29688e2968420e29684e29688e2968
// 0e2968820e2968020e29688e29680e29680e29688e2968820202020',
//   '20202020e2968820e29688e29688e2968820e2968820e29680e296882020e29688e296882020e29688e296882020e29680e29680e29680e2968
// 8e29688e296842020e2968820202020',
//   '20202020e2968820e29680e29680e2968020e2968820e29688e29680e29680e2968420e29684e29688e2968420e29684e29688e29684e29688e
// 2968420e29680e29680e29680e29680e29684e2968020202020',
//   '20202020e29680e29680e29680e29680e29680e29680e2968020e29680e29680e2968020e29680e296802020e29680e2968020e29680e29680e
// 29680e2968020e296802020e29680e2968020202020',
//   '20202020202020202020202020202020202020202020202020202020202020202020202020',
//   '20202020202020202020202020202020202020202020202020202020202020202020202020' ]

[
    '11111110110000101000101111111',
    '11111110110000101000101111111',
    '10000010100110010100101000001',
    '10000010100110010100101000001',
    '10111010001101101110101011101',
    '10111010001101101110101011101',
    '10111010010011001100001011101',
    '10111010010011001100001011101',
    '10111010111101111100101011101',
    '10111010111101111100101011101',
    '10000010100101011100001000001',
    '10000010100101011100001000001',
    '11111110101010101010101111111',
    '11111110101010101010101111111',
    '00000000100010001001000000000',
    '00000000100010001001000000000',
    '11100110111001011010011110011',
    '11100110111001011010011110011',
    '01111001010000110000000000011',
    '01111001010000110000000000011',
    '01101111000111100010010000111',
    '01101111000111100010010000111',
    '00111001110100010100011011010',
    '00111001110100010100011011010',
    '00010010010101011110110100111',
    '00010010010101011110110100111',
    '01011101010101100110010011001',
    '01011101010101100110010011001',
    '00100111100000110010010111001',
    '00100111100000110010010111001',
    '01011000001011000000011000010',
    '01011000001011000000011000010',
    '10100010010101001110111100111',
    '10100010010101001110111100111',
    '01101100000100000101001010000',
    '01101100000100000101001010000',
    '11010111100010110010011111101',
    '11010111100010110010011111101',
    '00001100011010110010011000010',
    '00001100011010110010011000010',
    '11110011001001101111111111011',
    '11110011001001101111111111011',
    '00000000111011000100100010001',
    '00000000111011000100100010001',
    '11111110001011110011101011001',
    '11111110001011110011101011001',
    '10000010101001010011100010010',
    '10000010101001010011100010010',
    '10111010001111101111111110001',
    '10111010001111101111111110001',
    '10111010001000100101100011000',
    '10111010001000100101100011000',
    '10111010100011010011100111111',
    '10111010100011010011100111111',
    '10000010101101110010100101000',
    '10000010101101110010100101000',
    '11111110100110101111100100001',
    '11111110100110101111100100001',
    '00000000000000000000000000000',
    '00000000000000000000000000000']
