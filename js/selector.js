// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - Se cargará dinámicamente desde photos.json
const PHOTO_FILES = [
"DJI_20251208154335_0209_D.webp",
"DJI_20251208154341_0210_D.webp",
"DJI_20251208154343_0211_D.webp",
"DJI_20251208154415_0212_D.webp",
"DJI_20251208154425_0213_D.webp",
"DJI_20251208154448_0214_D.webp",
"DJI_20251208154452_0215_D.webp",
"DJI_20251208154605_0216_D.webp",
"DJI_20251208154607_0217_D.webp",
"DJI_20251208154611_0218_D.webp",
"DJI_20251208154612_0219_D.webp",
"DJI_20251208154614_0220_D.webp",
"DJI_20251208154933_0221_D.webp",
"DJI_20251208154940_0222_D.webp",
"DJI_20251208154943_0223_D.webp",
"DJI_20251208154946_0224_D.webp",
"DJI_20251208154950_0225_D.webp",
"DJI_20251208154952_0226_D.webp",
"DJI_20251208154954_0227_D.webp",
"DJI_20251208155002_0228_D.webp",
"DJI_20251208155006_0229_D.webp",
"DJI_20251208155008_0230_D.webp",
"DJI_20251208155012_0231_D.webp",
"DJI_20251208155013_0232_D.webp",
"DJI_20251208155029_0233_D.webp",
"DJI_20251208155331_0236_D.webp",
"DJI_20251208155337_0237_D.webp",
"DJI_20251208155344_0238_D.webp",
"DJI_20251208155354_0239_D.webp",
"DJI_20251208155400_0240_D.webp",
"DJI_20251208155402_0241_D.webp",
"DJI_20251208155404_0242_D.webp",
"DJI_20251208155650_0243_D.webp",
"DJI_20251208164505_0255_D.webp",
"DJI_20251208164755_0257_D.webp",
"DJI_20251208164950_0259_D.webp",
"DJI_20251208165342_0262_D.webp",
"DJI_20251220_135830_324.webp",
"DJI_20251220_135852_734.webp",
"DJI_20251220_140029_140.webp",
"DJI_20251220_140034_526.webp",
"DJI_20251220_140037_392.webp",
"DJI_20251220_140039_628.webp",
"DJI_20251220_140041_559.webp",
"DJI_20251220_140044_198.webp",
"DJI_20251220_140051_235.webp",
"DJI_20251220_140109_057.webp",
"DJI_20251220_140113_735.webp",
"DJI_20251220_140118_522.webp",
"DJI_20251220_140122_048.webp",
"DJI_20251220_140132_682.webp",
"DJI_20251220_140748_614.webp",
"DJI_20251220_140752_558.webp",
"DJI_20251220_140808_098.webp",
"DJI_20251220_140810_663.webp",
"DJI_20251220_140947_606.webp",
"DJI_20251220_140955_559.webp",
"DJI_20251220_141004_289.webp",
"DJI_20251220_141011_715.webp",
"DJI_20251220_141015_434.webp",
"DJI_20251220_141021_509.webp",
"DJI_20251220_141048_058.webp",
"DJI_20251220_141052_047.webp",
"DJI_20251220_141102_591.webp",
"DJI_20251220_141119_377.webp",
"DJI_20251220_141123_216.webp",
"DJI_20251220_141127_763.webp",
"DJI_20251220_141133_147.webp",
"DJI_20251220_141136_283.webp",
"DJI_20251220_141139_764.webp",
"DJI_20251220_141143_303.webp",
"DJI_20251220_141146_376.webp",
"DJI_20251220_141152_544.webp",
"DJI_20251220_141155_964.webp",
"DJI_20251220_141158_814.webp",
"DJI_20251220_141203_659.webp",
"DJI_20251220_141211_144.webp",
"DJI_20251220_141220_728.webp",
"DJI_20251220_141306_704.webp",
"DJI_20251220_141311_009.webp",
"DJI_20251220_141315_960.webp",
"DJI_20251220_141323_295.webp",
"DJI_20251220_141337_662.webp",
"DJI_20251220_141343_093.webp",
"DJI_20251220_141401_050.webp",
"DJI_20251220_141406_095.webp",
"DJI_20251220_141410_268.webp",
"DJI_20251220_141416_598.webp",
"DJI_20251220_141422_206.webp",
"DJI_20251220_141431_557.webp",
"DJI_20251220_141441_774.webp",
"DJI_20251220_141451_957.webp",
"DJI_20251220_141454_779.webp",
"DJI_20251220_141456_697.webp",
"DJI_20251220_141502_114.webp",
"DJI_20251220_141508_865.webp",
"DJI_20251220_141512_464.webp",
"DJI_20251220_141514_486.webp",
"DJI_20251220_141518_433.webp",
"DJI_20251220_141520_441.webp",
"DJI_20251220_141523_039.webp",
"DJI_20251220_141529_247.webp",
"DJI_20251220_141531_917.webp",
"DJI_20251220_141600_493.webp",
"DJI_20251220_141602_442.webp",
"DJI_20251220_141608_683.webp",
"DJI_20251220_141614_190.webp",
"DJI_20251220_141622_395.webp",
"DJI_20251220_141625_396.webp",
"DJI_20251220_141636_286.webp",
"DJI_20251220_141647_881.webp",
"DJI_20251220_141701_980.webp",
"DJI_20251220_141725_141.webp",
"DJI_20251220_141743_981.webp",
"DJI_20251220_141750_311.webp",
"DJI_20251220_141758_126.webp",
"DJI_20251220_141820_311.webp",
"DJI_20251220_141827_391.webp",
"DJI_20251220_141836_990.webp",
"DJI_20251220_141844_147.webp",
"DJI_20251220_141933_708.webp",
"DJI_20251220_142023_734.webp",
"DJI_20251220_142136_741.webp",
"DJI_20251220_142141_152.webp",
"DJI_20251220_142211_167.webp",
"DJI_20251220_142216_627.webp",
"DJI_20251220_142231_069.webp",
"DJI_20251220_142235_887.webp",
"DJI_20251220_142245_681.webp",
"DJI_20251220_142248_232.webp",
"DJI_20251220_142303_022.webp",
"DJI_20251220_142310_912.webp",
"DJI_20251220_142343_163.webp",
"DJI_20251220_142349_882.webp",
"DJI_20251220_142354_892.webp",
"DJI_20251220_142358_342.webp",
"DJI_20251220_142400_230.webp",
"DJI_20251220_142404_732.webp",
"DJI_20251220_142408_137.webp",
"DJI_20251220_142410_656.webp",
"DJI_20251220_142412_859.webp",
"DJI_20251220_142415_306.webp",
"DJI_20251220_142419_191.webp",
"DJI_20251220_142422_431.webp",
"DJI_20251220_142426_092.webp",
"DJI_20251220_142428_295.webp",
"DJI_20251220_142432_992.webp",
"DJI_20251220_142435_090.webp",
"DJI_20251220_142437_671.webp",
"DJI_20251220_142442_307.webp",
"DJI_20251220_142445_186.webp",
"DJI_20251220_142451_937.webp",
"DJI_20251220_142502_584.webp",
"DJI_20251220_142507_086.webp",
"DJI_20251220_142516_520.webp",
"DJI_20251220_142544_496.webp",
"DJI_20251220_142547_315.webp",
"DJI_20251220_142550_195.webp",
"DJI_20251220_142556_207.webp",
"DJI_20251220_142557_949.webp",
"DJI_20251220_142603_532.webp",
"DJI_20251220_142621_247.webp",
"DJI_20251220_142639_307.webp",
"DJI_20251220_142642_277.webp",
"DJI_20251220_142652_522.webp",
"DJI_20251220_142702_362.webp",
"DJI_20251220_142708_227.webp",
"DJI_20251220_142710_596.webp",
"DJI_20251220_142713_387.webp",
"DJI_20251220_142715_499.webp",
"DJI_20251220_142719_623.webp",
"DJI_20251220_142721_889.webp",
"DJI_20251220_142726_992.webp",
"DJI_20251220_142728_923.webp",
"DJI_20251220_142732_765.webp",
"DJI_20251220_142745_171.webp",
"DJI_20251220_142751_095.webp",
"DJI_20251220_142755_612.webp",
"DJI_20251220_142758_834.webp",
"DJI_20251220_142802_284.webp",
"DJI_20251220_142806_200.webp",
"DJI_20251220_142810_265.webp",
"DJI_20251220_142825_414.webp",
"DJI_20251220_142831_106.webp",
"DJI_20251220_142838_698.webp",
"DJI_20251220_142842_300.webp",
"DJI_20251220_142846_275.webp",
"DJI_20251220_142850_146.webp",
"DJI_20251220_142852_197.webp",
"DJI_20251220_142859_911.webp",
"DJI_20251220_142902_911.webp",
"DJI_20251220_142912_002.webp",
"DJI_20251220_142921_243.webp",
"DJI_20251220_142924_467.webp",
"DJI_20251220_142941_597.webp",
"DJI_20251220_142944_567.webp",
"DJI_20251220_142956_356.webp",
"DJI_20251220_143000_557.webp",
"DJI_20251220_143009_528.webp",
"DJI_20251220_143011_622.webp",
"DJI_20251220_143032_238.webp",
"DJI_20251220_143043_248.webp",
"DJI_20251220_143048_092.webp",
"DJI_20251220_143112_438.webp",
"DJI_20251220_143115_470.webp",
"DJI_20251220_143119_520.webp",
"DJI_20251220_143128_835.webp",
"DJI_20251220_143151_125.webp",
"DJI_20251220_143203_306.webp",
"DJI_20251220_143205_117.webp",
"DJI_20251220_143207_580.webp",
"DJI_20251220_143209_661.webp",
"DJI_20251220_143225_624.webp",
"DJI_20251220_143228_098.webp",
"DJI_20251220_143239_650.webp",
"DJI_20251220_143242_200.webp",
"DJI_20251220_143247_122.webp",
"DJI_20251220_143305_617.webp",
"DJI_20251220_143308_826.webp",
"DJI_20251220_143316_283.webp",
"DJI_20251220_143322_252.webp",
"DJI_20251220_143332_902.webp",
"DJI_20251220_143335_661.webp",
"DJI_20251220_143344_631.webp",
"DJI_20251220_143346_789.webp",
"DJI_20251220_143430_025.webp",
"DJI_20251220_143431_897.webp",
"DJI_20251220_143434_717.webp",
"DJI_20251220_143452_104.webp",
"DJI_20251220_143504_360.webp",
"DJI_20251220_143519_885.webp",
"DJI_20251220_143531_316.webp",
"DJI_20251220_143548_326.webp",
"DJI_20251220_143553_891.webp",
"DJI_20251220_143556_241.webp",
"DJI_20251220_143605_382.webp",
"DJI_20251220_143613_077.webp",
"DJI_20251220_143629_247.webp",
"DJI_20251220_143634_542.webp",
"DJI_20251220_143644_217.webp",
"DJI_20251220_143651_733.webp",
"DJI_20251220_143658_318.webp",
"DJI_20251220_143706_447.webp",
"DJI_20251220_143734_256.webp",
"DJI_20251220_143737_333.webp",
"DJI_20251220_143746_902.webp",
"DJI_20251220_143800_716.webp",
"DJI_20251220_143811_129.webp",
"DJI_20251220_143816_904.webp",
"DJI_20251220_143906_267.webp",
"DJI_20251220_143908_515.webp",
"DJI_20251220_143916_005.webp",
"DJI_20251220_143922_245.webp",
"DJI_20251220_143924_885.webp",
"DJI_20251220_143959_384.webp",
"DJI_20251220_144033_122.webp",
"DJI_20251220_144035_622.webp",
"DJI_20251220_144050_328.webp",
"DJI_20251220_144054_152.webp",
"DJI_20251220_144056_340.webp",
"DJI_20251220_144058_320.webp",
"DJI_20251220_144117_958.webp",
"DJI_20251220_144120_733.webp",
"DJI_20251220_144138_914.webp",
"DJI_20251220_144158_202.webp",
"DJI_20251220_144201_070.webp",
"DJI_20251220_144204_145.webp",
"DJI_20251220_144206_738.webp",
"DJI_20251220_144243_264.webp",
"DJI_20251220_144254_576.webp",
"DJI_20251220_144257_261.webp",
"DJI_20251220_144327_143.webp",
"DJI_20251220_144334_655.webp",
"DJI_20251220_144358_297.webp",
"DJI_20251220_144405_060.webp",
"DJI_20251220_144409_952.webp",
"DJI_20251220_144417_510.webp",
"DJI_20251220_144424_052.webp",
"DJI_20251220_144519_927.webp",
"DJI_20251220_144523_244.webp",
"DJI_20251220_144527_651.webp",
"DJI_20251220_144535_394.webp",
"DJI_20251220_144538_918.webp",
"DJI_20251220_144738_605.webp",
"DJI_20251220_144740_582.webp",
"DJI_20251220_144749_330.webp",
"DJI_20251220_144751_926.webp",
"DJI_20251220_195350_457.webp",
"DJI_20251220_195404_708.webp",
"DJI_20251220_195412_510.webp",
"DJI_20251220_195427_284.webp",
"DJI_20251220_195454_810.webp",
"DJI_20251220_195457_749.webp",
"DJI_20251220_195506_328.webp",
"DJI_20251220_195508_200.webp",
"DJI_20251220_195511_292.webp",
"DJI_20251220_195550_384.webp",
"DJI_20251220_195552_998.webp",
"DJI_20251220_195555_892.webp",
"DJI_20251220_195558_019.webp",
"DJI_20251220_195601_245.webp",
"DJI_20251220_195603_161.webp",
"DJI_20251220_195605_262.webp",
"DJI_20251220_195607_302.webp",
"DJI_20251220_195609_763.webp",
"DJI_20251220_195611_682.webp",
"DJI_20251220_195614_551.webp",
"DJI_20251220_195616_813.webp",
"DJI_20251220_195619_803.webp",
"DJI_20251220_195622_139.webp",
"DJI_20251220_195625_245.webp",
"DJI_20251220_195642_482.webp",
"DJI_20251220_195646_966.webp",
"DJI_20251220_195650_147.webp",
"DJI_20251220_195655_937.webp",
"DJI_20251220_195725_457.webp",
"DJI_20251220_195746_861.webp",
"DJI_20251220_195748_793.webp",
"DJI_20251220_195750_896.webp",
"DJI_20251220_195753_897.webp",
"DJI_20251220_195758_322.webp",
"DJI_20251220_195802_823.webp",
"DJI_20251220_195805_673.webp",
"DJI_20251220_195810_770.webp",
"DJI_20251220_195814_162.webp",
"DJI_20251220_195818_752.webp",
"DJI_20251220_195821_903.webp",
"DJI_20251220_195825_008.webp",
"DJI_20251220_195828_263.webp",
"DJI_20251220_195833_245.webp",
"DJI_20251220_195837_293.webp",
"DJI_20251220_195839_901.webp",
"DJI_20251220_195846_787.webp",
"DJI_20251220_195851_288.webp",
"DJI_20251220_195901_668.webp",
"DJI_20251220_195932_570.webp",
"DJI_20251220_195938_736.webp",
"DJI_20251220_195940_938.webp",
"DJI_20251220_195943_748.webp",
"DJI_20251220_200001_658.webp",
"DJI_20251220_200004_161.webp",
"DJI_20251220_200006_018.webp",
"DJI_20251220_200008_236.webp",
"DJI_20251220_200011_436.webp",
"DJI_20251220_200033_471.webp",
"DJI_20251220_200035_946.webp",
"DJI_20251220_200042_412.webp",
"DJI_20251220_200047_752.webp",
"DJI_20251220_200056_604.webp",
"DJI_20251220_200100_155.webp",
"DJI_20251220_200111_899.webp",
"DJI_20251220_200117_585.webp",
"DJI_20251220_200120_121.webp",
"DJI_20251220_200125_791.webp",
"DJI_20251220_200131_581.webp",
"DJI_20251220_200133_862.webp",
"DJI_20251220_200137_191.webp",
"DJI_20251220_200139_051.webp",
"DJI_20251220_200145_292.webp",
"DJI_20251220_200204_628.webp",
"DJI_20251220_200209_773.webp",
"DJI_20251220_200213_462.webp",
"DJI_20251220_200322_734.webp",
"DJI_20251220_200333_399.webp",
"DJI_20251220_200353_500.webp",
"DJI_20251220_200357_281.webp",
"DJI_20251220_201214_185.webp",
"DJI_20251220_201226_931.webp",
"DJI_20251220_201241_255.webp",
"DJI_20251220_201245_664.webp",
"DJI_20251220_201258_099.webp",
"DJI_20251220_201301_191.webp",
"DJI_20251220_201311_151.webp",
"DJI_20251220_201317_164.webp",
"DJI_20251220_201320_720.webp",
"DJI_20251220_201323_391.webp",
"DJI_20251220_201325_260.webp",
"DJI_20251220_201410_852.webp",
"DJI_20251220_201412_978.webp",
"DJI_20251220_201421_877.webp",
"DJI_20251220_201423_883.webp",
"DJI_20251220_201427_156.webp",
"DJI_20251220_201435_570.webp",
"DJI_20251220_201442_594.webp",
"DJI_20251220_201444_809.webp",
"DJI_20251220_201447_992.webp",
"DJI_20251220_201450_045.webp",
"DJI_20251220_201452_687.webp",
"DJI_20251220_201455_642.webp",
"DJI_20251220_201458_658.webp",
"DJI_20251220_201501_040.webp",
"DJI_20251220_201512_021.webp",
"DJI_20251220_201517_721.webp",
"DJI_20251220_201519_805.webp",
"DJI_20251220_201522_551.webp",
"DJI_20251220_201526_078.webp",
"DJI_20251220_201528_641.webp",
"DJI_20251220_201531_069.webp",
"DJI_20251220_201533_380.webp",
"DJI_20251220_201543_493.webp",
"DJI_20251220_201548_413.webp",
"DJI_20251220_201552_958.webp",
"DJI_20251220_201606_488.webp",
"DJI_20251220_201617_619.webp",
"DJI_20251220_201620_859.webp",
"DJI_20251220_201623_271.webp",
"DJI_20251220_201628_372.webp",
"DJI_20251220_202719_761.webp",
"DJI_20251220_202723_419.webp",
"DJI_20251220_202741_509.webp",
"DJI_20251220_202824_217.webp",
"DJI_20251220_202837_010.webp",
"DJI_20251220_202847_705.webp",
"DJI_20251220_202942_459.webp",
"DJI_20251220_202946_985.webp",
"DJI_20251220_202950_404.webp",
"DJI_20251220_203013_984.webp",
"DJI_20251220_203016_924.webp",
"DJI_20251220_203048_485.webp",
"DJI_20251220_203106_070.webp",
"DJI_20251220_203128_340.webp",
"DJI_20251220_203133_486.webp",
"DJI_20251220_203145_278.webp",
"DJI_20251220_203156_617.webp",
"DJI_20251220_203207_598.webp",
"DJI_20251220_203212_653.webp",
"DJI_20251220_203218_907.webp",
"DJI_20251220_203221_278 2.webp",
"DJI_20251220_203223_422.webp",
"DJI_20251220_203226_000.webp",
"DJI_20251220_203229_153.webp",
"DJI_20251220_203231_160.webp",
"DJI_20251220_203234_058.webp",
"DJI_20251220_203237_012.webp",
"DJI_20251220_203244_830.webp",
"DJI_20251220_203247_000.webp",
"DJI_20251220_203308_697.webp",
"DJI_20251220_203312_248.webp",
"DJI_20251220_203317_200.webp",
"DJI_20251220_203344_485.webp",
"DJI_20251220_203347_500.webp",
"DJI_20251220_203349_986.webp",
"DJI_20251220_203353_364.webp",
"DJI_20251220_203355_478.webp",
"DJI_20251220_203357_851.webp",
"DJI_20251220_203400_656.webp",
"DJI_20251220_203403_700.webp",
"DJI_20251220_203410_449.webp",
"DJI_20251220_203412_981.webp",
"DJI_20251220_203419_855.webp",
"DJI_20251220_203424_656.webp",
"DJI_20251220_203432_515.webp",
"DJI_20251220_203457_837.webp",
"DJI_20251220_203459_664.webp",
"DJI_20251220_203505_831.webp",
"DJI_20251220_203510_812.webp",
"DJI_20251220_203513_195.webp",
"DJI_20251220_203517_773.webp",
"DJI_20251220_203520_337.webp",
"DJI_20251220_203523_832.webp",
"DJI_20251220_203536_402.webp",
"DJI_20251220_203538_379.webp",
"DJI_20251220_203543_408.webp",
"DJI_20251220_203548_237.webp",
"DJI_20251220_203550_906.webp",
"DJI_20251220_203553_652.webp",
"DJI_20251220_203604_978.webp",
"DJI_20251220_203642_404.webp",
"DJI_20251220_203647_278.webp",
"DJI_20251220_203650_292.webp",
"DJI_20251220_203712_779.webp",
"DJI_20251220_203719_783.webp",
"DJI_20251220_203726_865.webp",
"DJI_20251220_203800_464.webp",
"DJI_20251220_203803_225.webp",
"DJI_20251220_203805_969.webp",
"DJI_20251220_203808_172.webp",
"DJI_20251220_203831_545.webp",
"DJI_20251220_203855_111.webp",
"DJI_20251220_203914_989.webp",
"DJI_20251220_203917_387.webp",
"DJI_20251220_203923_475.webp",
"DJI_20251220_203951_826.webp",
"DJI_20251220_203957_300.webp",
"DJI_20251220_204007_501.webp",
"DJI_20251220_204035_208.webp",
"DJI_20251220_204051_889.webp",
"DJI_20251220_204108_463.webp",
"DJI_20251220_204136_079.webp",
"DJI_20251220_204145_966.webp",
"DJI_20251220_204213_098.webp",
"DJI_20251220_204233_066.webp",
"DJI_20251220_204300_500.webp",
"DJI_20251220_204303_606.webp",
"DJI_20251220_204307_805.webp",
"DJI_20251220_204311_060.webp",
"DJI_20251220_204315_996.webp",
"DJI_20251220_204333_048.webp",
"DJI_20251220_204335_302.webp",
"DJI_20251220_204344_391.webp",
"DJI_20251220_204347_886.webp",
"DJI_20251220_204353_301.webp",
"DJI_20251220_204356_302.webp",
"DJI_20251220_204358_671.webp",
"DJI_20251220_204403_049.webp",
"DJI_20251220_204406_351.webp",
"DJI_20251220_204409_772.webp",
"DJI_20251220_204413_657.webp",
"DJI_20251220_204635_177.webp",
"DJI_20251220_204637_246.webp",
"DJI_20251220_204657_184.webp",
"DJI_20251220_204703_273.webp",
"DJI_20251220_204727_228.webp",
"DJI_20251220_204731_879.webp",
"DJI_20251220_204734_295.webp",
"DJI_20251220_204740_997.webp",
"DJI_20251220_204747_612.webp",
"DJI_20251220_204750_254.webp",
"DJI_20251220_204752_834.webp",
"DJI_20251220_204754_843.webp",
"DJI_20251220_204758_968.webp",
"DJI_20251220_204802_012.webp",
"DJI_20251220_204815_229.webp",
"DJI_20251220_204818_680.webp",
"DJI_20251220_204820_823.webp",
"DJI_20251220_204824_002.webp",
"DJI_20251220_204826_315.webp",
"DJI_20251220_204830_920.webp",
"DJI_20251220_204834_563.webp",
"DJI_20251220_204837_194.webp",
"DJI_20251220_204839_500.webp",
"DJI_20251220_204842_365.webp",
"DJI_20251220_204902_495.webp",
"DJI_20251220_204904_352.webp",
"DJI_20251220_204906_982.webp",
"DJI_20251220_204908_882.webp",
"DJI_20251220_204910_532.webp",
"DJI_20251220_204919_548.webp",
"DJI_20251220_204950_327.webp",
"DJI_20251220_204952_686.webp",
"DJI_20251220_204955_162.webp",
"DJI_20251220_205030_907.webp",
"DJI_20251220_205035_707.webp",
"DJI_20251220_205047_585.webp",
"DJI_20251220_205111_002.webp",
"DJI_20251220_205122_399.webp",
"DJI_20251220_205125_283.webp",
"DJI_20251220_205130_126.webp",
"DJI_20251220_205229_872.webp",
"DJI_20251220_205233_473.webp",
"DJI_20251220_205239_249.webp",
"DJI_20251220_205252_959.webp",
"DJI_20251220_205317_768.webp",
"DJI_20251220_205320_590.webp",
"DJI_20251220_205357_115.webp",
"DJI_20251220_205359_120.webp",
"DJI_20251220_205401_372.webp",
"DJI_20251220_205405_528.webp",
"DJI_20251220_205409_115.webp",
"DJI_20251220_205529_873.webp",
"DJI_20251220_205819_918.webp",
"DJI_20251220_205821_971.webp",
"DJI_20251220_205824_524.webp",
"DJI_20251220_205827_387.webp",
"DJI_20251220_205831_232.webp",
"DJI_20251220_205838_204.webp",
"DJI_20251220_205843_992.webp",
"DJI_20251220_205925_531.webp",
"DJI_20251220_205929_056.webp",
"DJI_20251220_205931_407.webp",
"DJI_20251220_205933_809.webp",
"DJI_20251220_205935_848.webp",
"DJI_20251220_205943_921.webp",
"DJI_20251220_205945_943.webp",
"DJI_20251220_210008_914.webp",
"DSC_6976.webp",
"DSC_6977.webp",
"DSC_6978.webp",
"DSC_6979.webp",
"DSC_6980.webp",
"DSC_6981.webp",
"DSC_6982.webp",
"DSC_6983.webp",
"DSC_6984.webp",
"DSC_6985.webp",
"DSC_6986.webp",
"DSC_6987.webp",
"DSC_6988.webp",
"DSC_6989.webp",
"DSC_6990.webp",
"DSC_6991.webp",
"DSC_6992.webp",
"DSC_6993.webp",
"DSC_6994.webp",
"DSC_6995.webp",
"DSC_6996.webp",
"DSC_6997.webp",
"DSC_6998.webp",
"DSC_6999.webp",
"DSC_7000.webp",
"DSC_7001.webp",
"DSC_7002.webp",
"DSC_7003.webp",
"DSC_7004.webp",
"DSC_7005.webp",
"DSC_7006.webp",
"DSC_7007.webp",
"DSC_7008.webp",
"DSC_7009.webp",
"DSC_7010.webp",
"DSC_7011.webp",
"DSC_7012.webp",
"DSC_7013.webp",
"DSC_7014.webp",
"DSC_7015.webp",
"DSC_7016.webp",
"DSC_7017.webp",
"DSC_7018.webp",
"DSC_7019.webp",
"DSC_7020.webp",
"DSC_7021.webp",
"DSC_7022.webp",
"DSC_7023.webp",
"DSC_7024.webp",
"DSC_7025.webp",
"DSC_7026.webp",
"DSC_7027.webp",
"DSC_7028.webp",
"DSC_7029.webp",
"DSC_7030.webp",
"DSC_7031.webp",
"DSC_7032.webp",
"DSC_7033.webp",
"DSC_7034.webp",
"DSC_7035.webp",
"DSC_7036.webp",
"DSC_7037.webp",
"DSC_7038.webp",
"DSC_7039.webp",
"DSC_7040.webp",
"DSC_7041.webp",
"DSC_7042.webp",
"DSC_7043.webp",
"DSC_7044.webp",
"DSC_7045.webp",
"DSC_7046.webp",
"DSC_7047.webp",
"IMG_5826.webp",
"IMG_5827.webp",
"IMG_5828.webp",
"IMG_5829.webp",
"IMG_5830.webp",
"IMG_5831.webp",
"IMG_5832.webp",
"IMG_5833.webp",
"IMG_5834.webp",
"IMG_5835.webp",
"IMG_5836.webp",
"IMG_5837.webp",
"IMG_5838.webp",
"IMG_5839.webp",
"IMG_5840.webp",
"IMG_5841.webp",
"IMG_5842.webp",
"IMG_5843.webp",
"IMG_5844.webp",
"IMG_5845.webp",
"IMG_5846.webp",
"IMG_5847.webp",
"IMG_5848.webp",
"IMG_5849.webp",
"IMG_5850.webp",
"IMG_5851.webp",
"IMG_5852.webp",
"IMG_5853.webp",
"IMG_5854.webp",
"IMG_5855.webp",
"IMG_5856.webp",
"IMG_5857.webp",
"IMG_5858.webp",
"IMG_5859.webp",
"IMG_5860.webp",
"IMG_5861.webp",
"IMG_5862.webp",
"IMG_5863.webp",
"IMG_5864.webp",
"IMG_5865.webp",
"IMG_5866.webp",
"IMG_5867.webp",
"IMG_5868.webp",
"IMG_5869.webp",
"IMG_5870.webp",
"IMG_5871.webp",
"IMG_5872.webp",
"IMG_5873.webp",
"IMG_5874.webp",
"IMG_5875.webp",
"IMG_5876.webp",
"IMG_5877.webp",
"IMG_5878.webp",
"IMG_5879.webp",
"IMG_5880.webp",
"IMG_5881.webp",
"IMG_5882.webp",
"IMG_5883.webp",
"IMG_5884.webp",
"IMG_5885.webp",
"IMG_5886.webp",
"IMG_5887.webp",
"IMG_5888.webp",
"IMG_5889.webp",
"IMG_5890.webp",
"IMG_5891.webp",
"IMG_5892.webp",
"IMG_5893.webp",
"IMG_5894.webp",
"IMG_5895.webp",
"IMG_5896.webp",
"IMG_5897.webp",
"IMG_5898.webp",
"IMG_5899.webp",
"IMG_5900.webp",
"IMG_5901.webp",
"IMG_5902.webp",
"IMG_5903.webp",
"IMG_5904.webp",
"IMG_5905.webp",
"IMG_5906.webp",
"IMG_5907.webp",
"IMG_5908.webp",
"IMG_5909.webp",
"IMG_5910.webp",
"IMG_5911.webp",
"IMG_5912.webp",
"IMG_5913.webp",
"IMG_5914.webp",
"IMG_5915.webp",
"IMG_5916.webp",
"IMG_5917.webp",
"IMG_5918.webp",
"IMG_5919.webp",
"IMG_5920.webp",
"IMG_5921.webp",
"IMG_5922.webp",
"IMG_5923.webp",
"IMG_5924.webp",
"IMG_5925.webp",
"IMG_5926.webp",
"IMG_5927.webp",
"IMG_5928.webp",
"IMG_5929.webp",
"IMG_5930.webp",
"IMG_5931.webp",
"IMG_5932.webp",
"IMG_5933.webp",
"IMG_5934.webp",
"IMG_5935.webp",
"IMG_5936.webp",
"IMG_5937.webp",
"IMG_5938.webp",
"IMG_5939.webp",
"IMG_5940.webp",
"IMG_5941.webp",
"IMG_5942.webp",
"IMG_5943.webp",
"IMG_5944.webp",
"IMG_5945.webp",
"IMG_5946.webp",
"IMG_5947.webp",
"IMG_5948.webp",
"IMG_5949.webp",
"IMG_5950.webp",
"IMG_5951.webp",
"IMG_5953.webp",
"IMG_5954.webp",
"IMG_5955.webp",
"IMG_5956.webp",
"IMG_5957.webp",
"IMG_5958.webp",
"IMG_5959.webp",
"IMG_5960.webp",
"IMG_5961.webp",
"IMG_5962.webp",
"IMG_5963.webp",
"IMG_5964.webp",
"IMG_5965.webp",
"IMG_5966.webp",
"IMG_5967.webp",
"IMG_5968.webp",
"IMG_5969.webp",
"IMG_5970.webp",
"IMG_5971.webp",
"IMG_5972.webp",
"IMG_5973.webp",
"IMG_5974.webp",
"IMG_5975.webp",
"IMG_5976.webp",
"IMG_5977.webp",
"IMG_5978.webp",
"IMG_5979.webp",
"IMG_5980.webp",
"IMG_5981.webp",
"IMG_5982.webp",
"IMG_5983.webp",
"IMG_5984.webp",
"IMG_5985.webp",
"IMG_5986.webp",
"IMG_5987.webp",
"IMG_5988.webp",
"IMG_5989.webp",
"IMG_5990.webp",
"IMG_5991.webp",
"IMG_5992.webp",
"IMG_5993.webp",
"IMG_5994.webp",
"IMG_5995.webp",
"IMG_5996.webp",
"IMG_5997.webp",
"IMG_5998.webp",
"IMG_5999.webp",
"IMG_6001.webp",
"IMG_6002.webp",
"IMG_6003.webp",
"IMG_6004.webp",
"IMG_6005.webp",
"IMG_6006.webp",
"IMG_6007.webp",
"IMG_6008.webp",
"IMG_6009.webp",
"IMG_6010.webp",
"IMG_6011.webp",
"IMG_6012.webp",
"IMG_6013.webp",
"IMG_6014.webp",
"IMG_6015.webp",
"IMG_6016.webp",
"IMG_6017.webp",
"IMG_6018.webp",
"IMG_6019.webp",
"IMG_6020.webp",
"IMG_6021.webp",
"IMG_6022.webp",
"IMG_6023.webp",
"IMG_6024.webp",
"IMG_6025.webp",
"IMG_6026.webp",
"IMG_6027.webp",
"IMG_6028.webp",
"IMG_6029.webp",
"IMG_6030.webp",
"IMG_6031.webp",
"IMG_6032.webp",
"IMG_6033.webp",
"IMG_6034.webp",
"IMG_6035.webp",
"IMG_6036.webp",
"IMG_6037.webp",
"IMG_6038.webp",
"IMG_6039.webp",
"IMG_6040.webp",
"IMG_6041.webp",
"IMG_6042.webp",
"IMG_6043.webp",
"IMG_6044.webp",
"IMG_6045.webp",
"IMG_6046.webp",
"IMG_6047.webp",
"IMG_6048.webp",
"IMG_6049.webp",
"IMG_6050.webp",
"IMG_6051.webp",
"IMG_6052.webp",
"IMG_6053.webp",
"IMG_6054.webp",
"IMG_6055.webp",
"IMG_6056.webp",
"IMG_6057.webp",
"IMG_6058.webp",
"IMG_6059.webp",
"IMG_6060.webp",
"IMG_6061.webp",
"IMG_6062.webp",
"IMG_6063.webp",
"IMG_6064.webp",
"IMG_6065.webp",
"IMG_6066.webp",
"IMG_6067.webp",
"IMG_6068.webp",
"IMG_6069.webp",
"IMG_6070.webp",
"IMG_6071.webp",
"IMG_6072.webp",
"IMG_6073.webp",
"IMG_6074.webp",
"IMG_6075.webp",
"IMG_6076.webp",
"IMG_6077.webp",
"IMG_6078.webp",
"IMG_6079.webp",
"IMG_6080.webp",
"IMG_6081.webp",
"IMG_6082.webp",
"IMG_6083.webp",
"IMG_6084.webp",
"IMG_6085.webp",
"IMG_6086.webp",
"IMG_6087.webp",
"IMG_6088.webp",
"IMG_6981.webp",
"IMG_6982.webp",
"IMG_6983.webp",
"IMG_6984.webp",
"IMG_7239.webp",
"IMG_7240.webp",
"IMG_7241.webp",
"IMG_7242.webp",
"IMG_7243.webp",
"IMG_7245.webp",
"IMG_7246.webp",
"IMG_7247.webp",
"IMG_7248.webp",
"IMG_7249.webp",
"IMG_7250.webp",
"IMG_7251.webp",
"IMG_7252.webp",
"IMG_7253.webp",
"IMG_7254.webp",
"IMG_7255.webp",
"IMG_7256.webp",
"IMG_7257.webp",
"IMG_7258.webp",
"IMG_7259.webp",
"IMG_7260.webp",
"IMG_7261.webp",
"IMG_7262.webp",
"IMG_7263.webp",
"IMG_7264.webp",
"IMG_7265.webp",
"IMG_7266.webp",
"IMG_7267.webp",
"IMG_7268.webp",
"IMG_7270.webp",
"IMG_7271.webp",
"IMG_7272.webp",
"IMG_7273.webp",
"IMG_7274.webp",
"IMG_7275.webp",
"IMG_7276.webp",
"IMG_7277.webp",
"IMG_7278.webp",
"IMG_7279.webp",
"IMG_7280.webp",
"IMG_7281.webp",
"IMG_7282.webp",
"IMG_7283.webp",
"IMG_7284.webp",
"IMG_7285.webp",
"IMG_7286.webp",
"IMG_7287.webp",
"IMG_7288.webp",
"IMG_7289.webp",
"IMG_7290.webp",
"IMG_7291.webp",
"IMG_7292.webp",
"IMG_7293.webp",
"IMG_7294.webp",
"IMG_7295.webp",
"IMG_7296.webp",
"IMG_7297.webp",
"IMG_7298.webp",
"IMG_7299.webp",
"IMG_7300.webp",
"IMG_7301.webp",
"IMG_7302.webp",
"IMG_7303.webp",
"IMG_7304.webp",
"IMG_7305.webp",
"IMG_7306.webp",
"IMG_7307.webp",
"IMG_7308.webp",
"IMG_7309.webp",
"IMG_7310.webp",
"IMG_7311.webp",
"IMG_7312.webp",
"IMG_7313.webp",
"IMG_7314.webp",
"IMG_7315.webp",
"IMG_7316.webp",
"IMG_7317.webp",
"IMG_7318.webp",
"IMG_7319.webp",
"IMG_7320.webp",
"IMG_7321.webp",
"IMG_7322.webp",
"IMG_7323.webp",
"IMG_7324.webp",
"IMG_7325.webp",
"IMG_7326.webp",
"IMG_7327.webp",
"IMG_7328.webp",
"IMG_7329.webp",
"IMG_7330.webp",
"IMG_7332.webp",
"IMG_7333.webp",
"IMG_7334.webp",
"IMG_7335.webp",
"IMG_7336.webp",
"IMG_7337.webp",
"IMG_7338.webp",
"IMG_7339.webp",
"IMG_7340.webp",
"IMG_7341.webp",
"IMG_7342.webp",
"IMG_7343.webp",
"IMG_7344.webp",
"IMG_7345.webp",
"IMG_7346.webp",
"IMG_7347.webp",
"IMG_7348.webp",
"IMG_7349.webp",
"IMG_7350.webp",
"IMG_7351.webp",
"IMG_7352.webp",
"IMG_7353.webp",
"IMG_7354.webp",
"IMG_7355.webp",
"IMG_7356.webp",
"IMG_7357.webp",
"IMG_7358.webp",
"IMG_7359.webp",
"IMG_7360.webp",
"IMG_7361.webp",
"IMG_7441.webp",
"IMG_7442.webp",
"IMG_7658.webp",
"IMG_7659.webp",
"IMG_7660.webp",
"IMG_7661.webp",
"IMG_7662.webp",
"IMG_7663.webp",
"IMG_7664.webp",
"IMG_7665.webp",
"IMG_7666.webp",
"IMG_7667.webp",
"IMG_7668.webp",
"IMG_7669.webp",
"IMG_7670.webp",
"IMG_7671.webp",
"IMG_7672.webp",
"IMG_7673.webp",
"IMG_7674.webp",
"IMG_7675.webp",
"IMG_7676.webp",
"IMG_7677.webp",
"IMG_7678.webp",
"IMG_7679.webp",
"IMG_7680.webp",
"IMG_7681.webp",
"IMG_7682.webp",
"IMG_7683.webp",
"IMG_7684.webp",
"IMG_7685.webp",
"IMG_7686.webp",
"IMG_7687.webp",
"IMG_7688.webp",
"IMG_7689.webp",
"IMG_7690.webp",
"IMG_7691.webp",
"IMG_7692.webp",
"IMG_7693.webp",
"IMG_7694.webp",
"IMG_7695.webp",
"IMG_7696.webp",
"IMG_7697.webp",
"IMG_7698.webp",
"IMG_7702.webp",
"IMG_7703.webp",
"IMG_7704.webp",
"IMG_7705.webp",
"IMG_7706.webp",
"IMG_7707.webp",
"IMG_7708.webp",
"IMG_7709.webp",
"IMG_7710.webp",
"IMG_7711.webp",
"IMG_7712.webp"
];

const photos = PHOTO_FILES.map(filename => `fotos/${filename}`);


// LIMITS FOR ISIS'S PACKAGE
const LIMITS = {
    impresion: 80,    // Máximo 80 fotos para impresión
    ampliacion: 1     // Máximo 1 foto para ampliación
    // redes_sociales: sin límite
    // web: sin límite
};

const STORAGE_KEY = 'isis_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        redes_sociales: 0,
        web: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.web) stats.web++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Update counters
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countWeb').textContent = stats.web;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Add warning class if limits exceeded
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITS.ampliacion) {
            ampliacionCard.classList.add('exceeded');
        } else {
            ampliacionCard.classList.remove('exceeded');
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITS.impresion) {
            impresionCard.classList.add('exceeded');
        } else {
            impresionCard.classList.remove('exceeded');
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.redes_sociales) categories.push('redes_sociales');
            if (selection.web) categories.push('web');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales">📱 Redes</span>';
            if (selection.web) badgesHTML += '<span class="badge badge-web">🌐 Web</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'ampliacion':
            show = selection.ampliacion === true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes-sociales':
            show = selection.redes_sociales === true;
            break;
        case 'web':
            show = selection.web === true;
            break;
        case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin-clasificar':
            show = !selection.ampliacion && !selection.impresion && !selection.redes_sociales && !selection.web && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion}/${LIMITS.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion}/${LIMITS.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes (${stats.redes_sociales})`;
    document.getElementById('btnFilterWeb').textContent = `Web (${stats.web})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    let newIndex = startIndex;
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    } else { // 'prev'
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    // Update navigation button states
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;

    const savedSelection = photoSelections[currentPhotoIndex] || {};
    const currentSelection = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        currentSelection[btn.dataset.category] = true;
    });

    const savedKeys = Object.keys(savedSelection).filter(k => savedSelection[k]);
    const currentKeys = Object.keys(currentSelection);

    if (savedKeys.length !== currentKeys.length) return true;

    const allKeys = new Set([...savedKeys, ...currentKeys]);

    for (const key of allKeys) {
        if (!!savedSelection[key] !== !!currentSelection[key]) {
            return true;
        }
    }

    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const proceed = () => {
        const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

        if (newIndex !== null) {
            currentPhotoIndex = newIndex;
            const modalImage = document.getElementById('modalImage');
            const modalPhotoNumber = document.getElementById('modalPhotoNumber');

            modalImage.src = photos[newIndex];
            modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

            const selection = photoSelections[newIndex] || {};
            document.querySelectorAll('.option-btn').forEach(btn => {
                const category = btn.dataset.category;
                btn.classList.toggle('selected', selection[category] === true);
            });

            updateNavigationButtons();
        }
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de continuar?')) {
            saveModalSelection(proceed);
        } else {
            proceed();
        }
    } else {
        proceed();
    }
}

function closeModal() {
    const doClose = () => {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentPhotoIndex = null;
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de salir?')) {
            saveModalSelection(doClose);
        } else {
            doClose();
        }
    } else {
        doClose();
    }
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');

    if (callback && typeof callback === 'function') {
        callback();
    } else {
        closeModal();
    }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        INSTRUCCIONES: '⚠️ IMPORTANTE: Por favor envía este archivo por WhatsApp al 4779203776',
        whatsapp: '4779203776',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: PHOTO_FILES[index],
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                web: selection.web || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-isis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('📥 Reporte descargado. ¡Envíalo por WhatsApp al 4779203776!', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS ISIS FRANCIA SARABI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para web: ${stats.web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'redes_sociales', 'web', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        web: '🌐 WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    summary += `\n📱 WhatsApp: 477-920-3776\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes-sociales'));
    document.getElementById('btnFilterWeb').addEventListener('click', () => setFilter('web'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes-sociales';
    document.getElementById('btnFilterWeb').dataset.filter = 'web';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // If selecting descartada, deselect all others
            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            // If selecting any other, deselect descartada
            if (category !== 'descartada' && !isCurrentlySelected) {
                document.querySelector('.option-btn[data-category="descartada"]').classList.remove('selected');
            }

            btn.classList.toggle('selected');

            // Show warning if exceeding recommended limit
            if (!isCurrentlySelected && LIMITS[category]) {
                const stats = getStats();
                const futureCount = stats[category] + 1;
                if (futureCount > LIMITS[category]) {
                    const messages = {
                        impresion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para impresión (se recomiendan ${LIMITS.impresion})`,
                        ampliacion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para ampliación (se recomienda ${LIMITS.ampliacion})`
                    };
                    showToast(messages[category], 'warning');
                }
            }
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation button click handlers
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) {
        btnPrevPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('prev');
        });
    }

    if (btnNextPhoto) {
        btnNextPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('next');
        });
    }

});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// PROTECCIÓN DE IMÁGENES
// ========================================
// Bloquear click derecho en todas las imágenes
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showToast('Las imágenes están protegidas', 'warning');
        return false;
    }
});

// Prevenir arrastrar imágenes
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevenir selección de imágenes
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
