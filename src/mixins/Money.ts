/*
  MultiCash Mobile
  Copyright (C) 2021  MultiCash Developers

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import Vue from 'vue-native-core'
import constants from '@/core/support/constants'
import Locale from '@/core/support/locale'
import Intl from 'intl'
import 'intl/locale-data/jsonp/af'
import 'intl/locale-data/jsonp/af-NA'
import 'intl/locale-data/jsonp/af-ZA'
import 'intl/locale-data/jsonp/agq'
import 'intl/locale-data/jsonp/agq-CM'
import 'intl/locale-data/jsonp/ak'
import 'intl/locale-data/jsonp/ak-GH'
import 'intl/locale-data/jsonp/am'
import 'intl/locale-data/jsonp/am-ET'
import 'intl/locale-data/jsonp/ar'
import 'intl/locale-data/jsonp/ar-001'
import 'intl/locale-data/jsonp/ar-AE'
import 'intl/locale-data/jsonp/ar-BH'
import 'intl/locale-data/jsonp/ar-DJ'
import 'intl/locale-data/jsonp/ar-DZ'
import 'intl/locale-data/jsonp/ar-EG'
import 'intl/locale-data/jsonp/ar-EH'
import 'intl/locale-data/jsonp/ar-ER'
import 'intl/locale-data/jsonp/ar-IL'
import 'intl/locale-data/jsonp/ar-IQ'
import 'intl/locale-data/jsonp/ar-JO'
import 'intl/locale-data/jsonp/ar-KM'
import 'intl/locale-data/jsonp/ar-KW'
import 'intl/locale-data/jsonp/ar-LB'
import 'intl/locale-data/jsonp/ar-LY'
import 'intl/locale-data/jsonp/ar-MA'
import 'intl/locale-data/jsonp/ar-MR'
import 'intl/locale-data/jsonp/ar-OM'
import 'intl/locale-data/jsonp/ar-PS'
import 'intl/locale-data/jsonp/ar-QA'
import 'intl/locale-data/jsonp/ar-SA'
import 'intl/locale-data/jsonp/ar-SD'
import 'intl/locale-data/jsonp/ar-SO'
import 'intl/locale-data/jsonp/ar-SS'
import 'intl/locale-data/jsonp/ar-SY'
import 'intl/locale-data/jsonp/ar-TD'
import 'intl/locale-data/jsonp/ar-TN'
import 'intl/locale-data/jsonp/ar-YE'
import 'intl/locale-data/jsonp/as'
import 'intl/locale-data/jsonp/as-IN'
import 'intl/locale-data/jsonp/asa'
import 'intl/locale-data/jsonp/asa-TZ'
import 'intl/locale-data/jsonp/ast'
import 'intl/locale-data/jsonp/ast-ES'
import 'intl/locale-data/jsonp/az'
import 'intl/locale-data/jsonp/az-Arab'
import 'intl/locale-data/jsonp/az-Cyrl'
import 'intl/locale-data/jsonp/az-Cyrl-AZ'
import 'intl/locale-data/jsonp/az-Latn'
import 'intl/locale-data/jsonp/az-Latn-AZ'
import 'intl/locale-data/jsonp/bas'
import 'intl/locale-data/jsonp/bas-CM'
import 'intl/locale-data/jsonp/be'
import 'intl/locale-data/jsonp/be-BY'
import 'intl/locale-data/jsonp/bem'
import 'intl/locale-data/jsonp/bem-ZM'
import 'intl/locale-data/jsonp/bez'
import 'intl/locale-data/jsonp/bez-TZ'
import 'intl/locale-data/jsonp/bg'
import 'intl/locale-data/jsonp/bg-BG'
import 'intl/locale-data/jsonp/bm'
import 'intl/locale-data/jsonp/bm-ML'
import 'intl/locale-data/jsonp/bm-Nkoo'
import 'intl/locale-data/jsonp/bn'
import 'intl/locale-data/jsonp/bn-BD'
import 'intl/locale-data/jsonp/bn-IN'
import 'intl/locale-data/jsonp/bo'
import 'intl/locale-data/jsonp/bo-CN'
import 'intl/locale-data/jsonp/bo-IN'
import 'intl/locale-data/jsonp/br'
import 'intl/locale-data/jsonp/br-FR'
import 'intl/locale-data/jsonp/brx'
import 'intl/locale-data/jsonp/brx-IN'
import 'intl/locale-data/jsonp/bs'
import 'intl/locale-data/jsonp/bs-Cyrl'
import 'intl/locale-data/jsonp/bs-Cyrl-BA'
import 'intl/locale-data/jsonp/bs-Latn'
import 'intl/locale-data/jsonp/bs-Latn-BA'
import 'intl/locale-data/jsonp/ca'
import 'intl/locale-data/jsonp/ca-AD'
import 'intl/locale-data/jsonp/ca-ES'
import 'intl/locale-data/jsonp/ca-ES-VALENCIA'
import 'intl/locale-data/jsonp/ca-FR'
import 'intl/locale-data/jsonp/ca-IT'
import 'intl/locale-data/jsonp/ce'
import 'intl/locale-data/jsonp/ce-RU'
import 'intl/locale-data/jsonp/cgg'
import 'intl/locale-data/jsonp/cgg-UG'
import 'intl/locale-data/jsonp/chr'
import 'intl/locale-data/jsonp/chr-US'
import 'intl/locale-data/jsonp/ckb'
import 'intl/locale-data/jsonp/ckb-IQ'
import 'intl/locale-data/jsonp/ckb-IR'
import 'intl/locale-data/jsonp/cs'
import 'intl/locale-data/jsonp/cs-CZ'
import 'intl/locale-data/jsonp/cu'
import 'intl/locale-data/jsonp/cu-RU'
import 'intl/locale-data/jsonp/cy'
import 'intl/locale-data/jsonp/cy-GB'
import 'intl/locale-data/jsonp/da'
import 'intl/locale-data/jsonp/da-DK'
import 'intl/locale-data/jsonp/da-GL'
import 'intl/locale-data/jsonp/dav'
import 'intl/locale-data/jsonp/dav-KE'
import 'intl/locale-data/jsonp/de'
import 'intl/locale-data/jsonp/de-AT'
import 'intl/locale-data/jsonp/de-BE'
import 'intl/locale-data/jsonp/de-CH'
import 'intl/locale-data/jsonp/de-DE'
import 'intl/locale-data/jsonp/de-LI'
import 'intl/locale-data/jsonp/de-LU'
import 'intl/locale-data/jsonp/dje'
import 'intl/locale-data/jsonp/dje-NE'
import 'intl/locale-data/jsonp/dsb'
import 'intl/locale-data/jsonp/dsb-DE'
import 'intl/locale-data/jsonp/dua'
import 'intl/locale-data/jsonp/dua-CM'
import 'intl/locale-data/jsonp/dyo'
import 'intl/locale-data/jsonp/dyo-SN'
import 'intl/locale-data/jsonp/dz'
import 'intl/locale-data/jsonp/dz-BT'
import 'intl/locale-data/jsonp/ebu'
import 'intl/locale-data/jsonp/ebu-KE'
import 'intl/locale-data/jsonp/ee'
import 'intl/locale-data/jsonp/ee-GH'
import 'intl/locale-data/jsonp/ee-TG'
import 'intl/locale-data/jsonp/el'
import 'intl/locale-data/jsonp/el-CY'
import 'intl/locale-data/jsonp/el-GR'
import 'intl/locale-data/jsonp/en'
import 'intl/locale-data/jsonp/en-001'
import 'intl/locale-data/jsonp/en-150'
import 'intl/locale-data/jsonp/en-AG'
import 'intl/locale-data/jsonp/en-AI'
import 'intl/locale-data/jsonp/en-AS'
import 'intl/locale-data/jsonp/en-AT'
import 'intl/locale-data/jsonp/en-AU'
import 'intl/locale-data/jsonp/en-BB'
import 'intl/locale-data/jsonp/en-BE'
import 'intl/locale-data/jsonp/en-BI'
import 'intl/locale-data/jsonp/en-BM'
import 'intl/locale-data/jsonp/en-BS'
import 'intl/locale-data/jsonp/en-BW'
import 'intl/locale-data/jsonp/en-BZ'
import 'intl/locale-data/jsonp/en-CA'
import 'intl/locale-data/jsonp/en-CC'
import 'intl/locale-data/jsonp/en-CH'
import 'intl/locale-data/jsonp/en-CK'
import 'intl/locale-data/jsonp/en-CM'
import 'intl/locale-data/jsonp/en-CX'
import 'intl/locale-data/jsonp/en-CY'
import 'intl/locale-data/jsonp/en-DE'
import 'intl/locale-data/jsonp/en-DG'
import 'intl/locale-data/jsonp/en-DK'
import 'intl/locale-data/jsonp/en-DM'
import 'intl/locale-data/jsonp/en-Dsrt'
import 'intl/locale-data/jsonp/en-ER'
import 'intl/locale-data/jsonp/en-FI'
import 'intl/locale-data/jsonp/en-FJ'
import 'intl/locale-data/jsonp/en-FK'
import 'intl/locale-data/jsonp/en-FM'
import 'intl/locale-data/jsonp/en-GB'
import 'intl/locale-data/jsonp/en-GD'
import 'intl/locale-data/jsonp/en-GG'
import 'intl/locale-data/jsonp/en-GH'
import 'intl/locale-data/jsonp/en-GI'
import 'intl/locale-data/jsonp/en-GM'
import 'intl/locale-data/jsonp/en-GU'
import 'intl/locale-data/jsonp/en-GY'
import 'intl/locale-data/jsonp/en-HK'
import 'intl/locale-data/jsonp/en-IE'
import 'intl/locale-data/jsonp/en-IL'
import 'intl/locale-data/jsonp/en-IM'
import 'intl/locale-data/jsonp/en-IN'
import 'intl/locale-data/jsonp/en-IO'
import 'intl/locale-data/jsonp/en-JE'
import 'intl/locale-data/jsonp/en-JM'
import 'intl/locale-data/jsonp/en-KE'
import 'intl/locale-data/jsonp/en-KI'
import 'intl/locale-data/jsonp/en-KN'
import 'intl/locale-data/jsonp/en-KY'
import 'intl/locale-data/jsonp/en-LC'
import 'intl/locale-data/jsonp/en-LR'
import 'intl/locale-data/jsonp/en-LS'
import 'intl/locale-data/jsonp/en-MG'
import 'intl/locale-data/jsonp/en-MH'
import 'intl/locale-data/jsonp/en-MO'
import 'intl/locale-data/jsonp/en-MP'
import 'intl/locale-data/jsonp/en-MS'
import 'intl/locale-data/jsonp/en-MT'
import 'intl/locale-data/jsonp/en-MU'
import 'intl/locale-data/jsonp/en-MW'
import 'intl/locale-data/jsonp/en-MY'
import 'intl/locale-data/jsonp/en-NA'
import 'intl/locale-data/jsonp/en-NF'
import 'intl/locale-data/jsonp/en-NG'
import 'intl/locale-data/jsonp/en-NL'
import 'intl/locale-data/jsonp/en-NR'
import 'intl/locale-data/jsonp/en-NU'
import 'intl/locale-data/jsonp/en-NZ'
import 'intl/locale-data/jsonp/en-PG'
import 'intl/locale-data/jsonp/en-PH'
import 'intl/locale-data/jsonp/en-PK'
import 'intl/locale-data/jsonp/en-PN'
import 'intl/locale-data/jsonp/en-PR'
import 'intl/locale-data/jsonp/en-PW'
import 'intl/locale-data/jsonp/en-RW'
import 'intl/locale-data/jsonp/en-SB'
import 'intl/locale-data/jsonp/en-SC'
import 'intl/locale-data/jsonp/en-SD'
import 'intl/locale-data/jsonp/en-SE'
import 'intl/locale-data/jsonp/en-SG'
import 'intl/locale-data/jsonp/en-SH'
import 'intl/locale-data/jsonp/en-Shaw'
import 'intl/locale-data/jsonp/en-SI'
import 'intl/locale-data/jsonp/en-SL'
import 'intl/locale-data/jsonp/en-SS'
import 'intl/locale-data/jsonp/en-SX'
import 'intl/locale-data/jsonp/en-SZ'
import 'intl/locale-data/jsonp/en-TC'
import 'intl/locale-data/jsonp/en-TK'
import 'intl/locale-data/jsonp/en-TO'
import 'intl/locale-data/jsonp/en-TT'
import 'intl/locale-data/jsonp/en-TV'
import 'intl/locale-data/jsonp/en-TZ'
import 'intl/locale-data/jsonp/en-UG'
import 'intl/locale-data/jsonp/en-UM'
import 'intl/locale-data/jsonp/en-US'
import 'intl/locale-data/jsonp/en-VC'
import 'intl/locale-data/jsonp/en-VG'
import 'intl/locale-data/jsonp/en-VI'
import 'intl/locale-data/jsonp/en-VU'
import 'intl/locale-data/jsonp/en-WS'
import 'intl/locale-data/jsonp/en-ZA'
import 'intl/locale-data/jsonp/en-ZM'
import 'intl/locale-data/jsonp/en-ZW'
import 'intl/locale-data/jsonp/eo'
import 'intl/locale-data/jsonp/eo-001'
import 'intl/locale-data/jsonp/es'
import 'intl/locale-data/jsonp/es-419'
import 'intl/locale-data/jsonp/es-AR'
import 'intl/locale-data/jsonp/es-BO'
import 'intl/locale-data/jsonp/es-CL'
import 'intl/locale-data/jsonp/es-CO'
import 'intl/locale-data/jsonp/es-CR'
import 'intl/locale-data/jsonp/es-CU'
import 'intl/locale-data/jsonp/es-DO'
import 'intl/locale-data/jsonp/es-EA'
import 'intl/locale-data/jsonp/es-EC'
import 'intl/locale-data/jsonp/es-ES'
import 'intl/locale-data/jsonp/es-GQ'
import 'intl/locale-data/jsonp/es-GT'
import 'intl/locale-data/jsonp/es-HN'
import 'intl/locale-data/jsonp/es-IC'
import 'intl/locale-data/jsonp/es-MX'
import 'intl/locale-data/jsonp/es-NI'
import 'intl/locale-data/jsonp/es-PA'
import 'intl/locale-data/jsonp/es-PE'
import 'intl/locale-data/jsonp/es-PH'
import 'intl/locale-data/jsonp/es-PR'
import 'intl/locale-data/jsonp/es-PY'
import 'intl/locale-data/jsonp/es-SV'
import 'intl/locale-data/jsonp/es-US'
import 'intl/locale-data/jsonp/es-UY'
import 'intl/locale-data/jsonp/es-VE'
import 'intl/locale-data/jsonp/et'
import 'intl/locale-data/jsonp/et-EE'
import 'intl/locale-data/jsonp/eu'
import 'intl/locale-data/jsonp/eu-ES'
import 'intl/locale-data/jsonp/ewo'
import 'intl/locale-data/jsonp/ewo-CM'
import 'intl/locale-data/jsonp/fa'
import 'intl/locale-data/jsonp/fa-AF'
import 'intl/locale-data/jsonp/fa-IR'
import 'intl/locale-data/jsonp/ff'
import 'intl/locale-data/jsonp/ff-CM'
import 'intl/locale-data/jsonp/ff-GN'
import 'intl/locale-data/jsonp/ff-MR'
import 'intl/locale-data/jsonp/ff-SN'
import 'intl/locale-data/jsonp/fi'
import 'intl/locale-data/jsonp/fi-FI'
import 'intl/locale-data/jsonp/fil'
import 'intl/locale-data/jsonp/fil-PH'
import 'intl/locale-data/jsonp/fo'
import 'intl/locale-data/jsonp/fo-DK'
import 'intl/locale-data/jsonp/fo-FO'
import 'intl/locale-data/jsonp/fr'
import 'intl/locale-data/jsonp/fr-BE'
import 'intl/locale-data/jsonp/fr-BF'
import 'intl/locale-data/jsonp/fr-BI'
import 'intl/locale-data/jsonp/fr-BJ'
import 'intl/locale-data/jsonp/fr-BL'
import 'intl/locale-data/jsonp/fr-CA'
import 'intl/locale-data/jsonp/fr-CD'
import 'intl/locale-data/jsonp/fr-CF'
import 'intl/locale-data/jsonp/fr-CG'
import 'intl/locale-data/jsonp/fr-CH'
import 'intl/locale-data/jsonp/fr-CI'
import 'intl/locale-data/jsonp/fr-CM'
import 'intl/locale-data/jsonp/fr-DJ'
import 'intl/locale-data/jsonp/fr-DZ'
import 'intl/locale-data/jsonp/fr-FR'
import 'intl/locale-data/jsonp/fr-GA'
import 'intl/locale-data/jsonp/fr-GF'
import 'intl/locale-data/jsonp/fr-GN'
import 'intl/locale-data/jsonp/fr-GP'
import 'intl/locale-data/jsonp/fr-GQ'
import 'intl/locale-data/jsonp/fr-HT'
import 'intl/locale-data/jsonp/fr-KM'
import 'intl/locale-data/jsonp/fr-LU'
import 'intl/locale-data/jsonp/fr-MA'
import 'intl/locale-data/jsonp/fr-MC'
import 'intl/locale-data/jsonp/fr-MF'
import 'intl/locale-data/jsonp/fr-MG'
import 'intl/locale-data/jsonp/fr-ML'
import 'intl/locale-data/jsonp/fr-MQ'
import 'intl/locale-data/jsonp/fr-MR'
import 'intl/locale-data/jsonp/fr-MU'
import 'intl/locale-data/jsonp/fr-NC'
import 'intl/locale-data/jsonp/fr-NE'
import 'intl/locale-data/jsonp/fr-PF'
import 'intl/locale-data/jsonp/fr-PM'
import 'intl/locale-data/jsonp/fr-RE'
import 'intl/locale-data/jsonp/fr-RW'
import 'intl/locale-data/jsonp/fr-SC'
import 'intl/locale-data/jsonp/fr-SN'
import 'intl/locale-data/jsonp/fr-SY'
import 'intl/locale-data/jsonp/fr-TD'
import 'intl/locale-data/jsonp/fr-TG'
import 'intl/locale-data/jsonp/fr-TN'
import 'intl/locale-data/jsonp/fr-VU'
import 'intl/locale-data/jsonp/fr-WF'
import 'intl/locale-data/jsonp/fr-YT'
import 'intl/locale-data/jsonp/fur'
import 'intl/locale-data/jsonp/fur-IT'
import 'intl/locale-data/jsonp/fy'
import 'intl/locale-data/jsonp/fy-NL'
import 'intl/locale-data/jsonp/ga'
import 'intl/locale-data/jsonp/ga-IE'
import 'intl/locale-data/jsonp/gd'
import 'intl/locale-data/jsonp/gd-GB'
import 'intl/locale-data/jsonp/gl'
import 'intl/locale-data/jsonp/gl-ES'
import 'intl/locale-data/jsonp/gsw'
import 'intl/locale-data/jsonp/gsw-CH'
import 'intl/locale-data/jsonp/gsw-FR'
import 'intl/locale-data/jsonp/gsw-LI'
import 'intl/locale-data/jsonp/gu'
import 'intl/locale-data/jsonp/gu-IN'
import 'intl/locale-data/jsonp/guz'
import 'intl/locale-data/jsonp/guz-KE'
import 'intl/locale-data/jsonp/gv'
import 'intl/locale-data/jsonp/gv-IM'
import 'intl/locale-data/jsonp/ha'
import 'intl/locale-data/jsonp/ha-Arab'
import 'intl/locale-data/jsonp/ha-GH'
import 'intl/locale-data/jsonp/ha-NE'
import 'intl/locale-data/jsonp/ha-NG'
import 'intl/locale-data/jsonp/haw'
import 'intl/locale-data/jsonp/haw-US'
import 'intl/locale-data/jsonp/he'
import 'intl/locale-data/jsonp/he-IL'
import 'intl/locale-data/jsonp/hi'
import 'intl/locale-data/jsonp/hi-IN'
import 'intl/locale-data/jsonp/hr'
import 'intl/locale-data/jsonp/hr-BA'
import 'intl/locale-data/jsonp/hr-HR'
import 'intl/locale-data/jsonp/hsb'
import 'intl/locale-data/jsonp/hsb-DE'
import 'intl/locale-data/jsonp/hu'
import 'intl/locale-data/jsonp/hu-HU'
import 'intl/locale-data/jsonp/hy'
import 'intl/locale-data/jsonp/hy-AM'
import 'intl/locale-data/jsonp/id'
import 'intl/locale-data/jsonp/id-ID'
import 'intl/locale-data/jsonp/ig'
import 'intl/locale-data/jsonp/ig-NG'
import 'intl/locale-data/jsonp/ii'
import 'intl/locale-data/jsonp/ii-CN'
import 'intl/locale-data/jsonp/is'
import 'intl/locale-data/jsonp/is-IS'
import 'intl/locale-data/jsonp/it'
import 'intl/locale-data/jsonp/it-CH'
import 'intl/locale-data/jsonp/it-IT'
import 'intl/locale-data/jsonp/it-SM'
import 'intl/locale-data/jsonp/iu-Latn'
import 'intl/locale-data/jsonp/ja'
import 'intl/locale-data/jsonp/ja-JP'
import 'intl/locale-data/jsonp/jgo'
import 'intl/locale-data/jsonp/jgo-CM'
import 'intl/locale-data/jsonp/jmc'
import 'intl/locale-data/jsonp/jmc-TZ'
import 'intl/locale-data/jsonp/ka'
import 'intl/locale-data/jsonp/ka-GE'
import 'intl/locale-data/jsonp/kab'
import 'intl/locale-data/jsonp/kab-DZ'
import 'intl/locale-data/jsonp/kam'
import 'intl/locale-data/jsonp/kam-KE'
import 'intl/locale-data/jsonp/kde'
import 'intl/locale-data/jsonp/kde-TZ'
import 'intl/locale-data/jsonp/kea'
import 'intl/locale-data/jsonp/kea-CV'
import 'intl/locale-data/jsonp/khq'
import 'intl/locale-data/jsonp/khq-ML'
import 'intl/locale-data/jsonp/ki'
import 'intl/locale-data/jsonp/ki-KE'
import 'intl/locale-data/jsonp/kk'
import 'intl/locale-data/jsonp/kk-KZ'
import 'intl/locale-data/jsonp/kkj'
import 'intl/locale-data/jsonp/kkj-CM'
import 'intl/locale-data/jsonp/kl'
import 'intl/locale-data/jsonp/kl-GL'
import 'intl/locale-data/jsonp/kln'
import 'intl/locale-data/jsonp/kln-KE'
import 'intl/locale-data/jsonp/km'
import 'intl/locale-data/jsonp/km-KH'
import 'intl/locale-data/jsonp/kn'
import 'intl/locale-data/jsonp/kn-IN'
import 'intl/locale-data/jsonp/ko'
import 'intl/locale-data/jsonp/ko-KP'
import 'intl/locale-data/jsonp/ko-KR'
import 'intl/locale-data/jsonp/kok'
import 'intl/locale-data/jsonp/kok-IN'
import 'intl/locale-data/jsonp/ks'
import 'intl/locale-data/jsonp/ks-IN'
import 'intl/locale-data/jsonp/ksb'
import 'intl/locale-data/jsonp/ksb-TZ'
import 'intl/locale-data/jsonp/ksf'
import 'intl/locale-data/jsonp/ksf-CM'
import 'intl/locale-data/jsonp/ksh'
import 'intl/locale-data/jsonp/ksh-DE'
import 'intl/locale-data/jsonp/kw'
import 'intl/locale-data/jsonp/kw-GB'
import 'intl/locale-data/jsonp/ky'
import 'intl/locale-data/jsonp/ky-KG'
import 'intl/locale-data/jsonp/lag'
import 'intl/locale-data/jsonp/lag-TZ'
import 'intl/locale-data/jsonp/lb'
import 'intl/locale-data/jsonp/lb-LU'
import 'intl/locale-data/jsonp/lg'
import 'intl/locale-data/jsonp/lg-UG'
import 'intl/locale-data/jsonp/lkt'
import 'intl/locale-data/jsonp/lkt-US'
import 'intl/locale-data/jsonp/ln'
import 'intl/locale-data/jsonp/ln-AO'
import 'intl/locale-data/jsonp/ln-CD'
import 'intl/locale-data/jsonp/ln-CF'
import 'intl/locale-data/jsonp/ln-CG'
import 'intl/locale-data/jsonp/lo'
import 'intl/locale-data/jsonp/lo-LA'
import 'intl/locale-data/jsonp/lrc'
import 'intl/locale-data/jsonp/lrc-IQ'
import 'intl/locale-data/jsonp/lrc-IR'
import 'intl/locale-data/jsonp/lt'
import 'intl/locale-data/jsonp/lt-LT'
import 'intl/locale-data/jsonp/lu'
import 'intl/locale-data/jsonp/lu-CD'
import 'intl/locale-data/jsonp/luo'
import 'intl/locale-data/jsonp/luo-KE'
import 'intl/locale-data/jsonp/luy'
import 'intl/locale-data/jsonp/luy-KE'
import 'intl/locale-data/jsonp/lv'
import 'intl/locale-data/jsonp/lv-LV'
import 'intl/locale-data/jsonp/mas'
import 'intl/locale-data/jsonp/mas-KE'
import 'intl/locale-data/jsonp/mas-TZ'
import 'intl/locale-data/jsonp/mer'
import 'intl/locale-data/jsonp/mer-KE'
import 'intl/locale-data/jsonp/mfe'
import 'intl/locale-data/jsonp/mfe-MU'
import 'intl/locale-data/jsonp/mg'
import 'intl/locale-data/jsonp/mg-MG'
import 'intl/locale-data/jsonp/mgh'
import 'intl/locale-data/jsonp/mgh-MZ'
import 'intl/locale-data/jsonp/mgo'
import 'intl/locale-data/jsonp/mgo-CM'
import 'intl/locale-data/jsonp/mk'
import 'intl/locale-data/jsonp/mk-MK'
import 'intl/locale-data/jsonp/ml'
import 'intl/locale-data/jsonp/ml-IN'
import 'intl/locale-data/jsonp/mn'
import 'intl/locale-data/jsonp/mn-MN'
import 'intl/locale-data/jsonp/mn-Mong'
import 'intl/locale-data/jsonp/mr'
import 'intl/locale-data/jsonp/mr-IN'
import 'intl/locale-data/jsonp/ms'
import 'intl/locale-data/jsonp/ms-Arab'
import 'intl/locale-data/jsonp/ms-BN'
import 'intl/locale-data/jsonp/ms-MY'
import 'intl/locale-data/jsonp/ms-SG'
import 'intl/locale-data/jsonp/mt'
import 'intl/locale-data/jsonp/mt-MT'
import 'intl/locale-data/jsonp/mua'
import 'intl/locale-data/jsonp/mua-CM'
import 'intl/locale-data/jsonp/my'
import 'intl/locale-data/jsonp/my-MM'
import 'intl/locale-data/jsonp/mzn'
import 'intl/locale-data/jsonp/mzn-IR'
import 'intl/locale-data/jsonp/naq'
import 'intl/locale-data/jsonp/naq-NA'
import 'intl/locale-data/jsonp/nb'
import 'intl/locale-data/jsonp/nb-NO'
import 'intl/locale-data/jsonp/nb-SJ'
import 'intl/locale-data/jsonp/nd'
import 'intl/locale-data/jsonp/nd-ZW'
import 'intl/locale-data/jsonp/ne'
import 'intl/locale-data/jsonp/ne-IN'
import 'intl/locale-data/jsonp/ne-NP'
import 'intl/locale-data/jsonp/nl'
import 'intl/locale-data/jsonp/nl-AW'
import 'intl/locale-data/jsonp/nl-BE'
import 'intl/locale-data/jsonp/nl-BQ'
import 'intl/locale-data/jsonp/nl-CW'
import 'intl/locale-data/jsonp/nl-NL'
import 'intl/locale-data/jsonp/nl-SR'
import 'intl/locale-data/jsonp/nl-SX'
import 'intl/locale-data/jsonp/nmg'
import 'intl/locale-data/jsonp/nmg-CM'
import 'intl/locale-data/jsonp/nn'
import 'intl/locale-data/jsonp/nn-NO'
import 'intl/locale-data/jsonp/nnh'
import 'intl/locale-data/jsonp/nnh-CM'
import 'intl/locale-data/jsonp/nus'
import 'intl/locale-data/jsonp/nus-SS'
import 'intl/locale-data/jsonp/nyn'
import 'intl/locale-data/jsonp/nyn-UG'
import 'intl/locale-data/jsonp/om'
import 'intl/locale-data/jsonp/om-ET'
import 'intl/locale-data/jsonp/om-KE'
import 'intl/locale-data/jsonp/or'
import 'intl/locale-data/jsonp/or-IN'
import 'intl/locale-data/jsonp/os'
import 'intl/locale-data/jsonp/os-GE'
import 'intl/locale-data/jsonp/os-RU'
import 'intl/locale-data/jsonp/pa'
import 'intl/locale-data/jsonp/pa-Arab'
import 'intl/locale-data/jsonp/pa-Arab-PK'
import 'intl/locale-data/jsonp/pa-Guru'
import 'intl/locale-data/jsonp/pa-Guru-IN'
import 'intl/locale-data/jsonp/pl'
import 'intl/locale-data/jsonp/pl-PL'
import 'intl/locale-data/jsonp/prg'
import 'intl/locale-data/jsonp/prg-001'
import 'intl/locale-data/jsonp/ps'
import 'intl/locale-data/jsonp/ps-AF'
import 'intl/locale-data/jsonp/pt'
import 'intl/locale-data/jsonp/pt-AO'
import 'intl/locale-data/jsonp/pt-BR'
import 'intl/locale-data/jsonp/pt-CV'
import 'intl/locale-data/jsonp/pt-GW'
import 'intl/locale-data/jsonp/pt-MO'
import 'intl/locale-data/jsonp/pt-MZ'
import 'intl/locale-data/jsonp/pt-PT'
import 'intl/locale-data/jsonp/pt-ST'
import 'intl/locale-data/jsonp/pt-TL'
import 'intl/locale-data/jsonp/qu'
import 'intl/locale-data/jsonp/qu-BO'
import 'intl/locale-data/jsonp/qu-EC'
import 'intl/locale-data/jsonp/qu-PE'
import 'intl/locale-data/jsonp/rm'
import 'intl/locale-data/jsonp/rm-CH'
import 'intl/locale-data/jsonp/rn'
import 'intl/locale-data/jsonp/rn-BI'
import 'intl/locale-data/jsonp/ro'
import 'intl/locale-data/jsonp/ro-MD'
import 'intl/locale-data/jsonp/ro-RO'
import 'intl/locale-data/jsonp/rof'
import 'intl/locale-data/jsonp/rof-TZ'
import 'intl/locale-data/jsonp/root'
import 'intl/locale-data/jsonp/ru'
import 'intl/locale-data/jsonp/ru-BY'
import 'intl/locale-data/jsonp/ru-KG'
import 'intl/locale-data/jsonp/ru-KZ'
import 'intl/locale-data/jsonp/ru-MD'
import 'intl/locale-data/jsonp/ru-RU'
import 'intl/locale-data/jsonp/ru-UA'
import 'intl/locale-data/jsonp/rw'
import 'intl/locale-data/jsonp/rw-RW'
import 'intl/locale-data/jsonp/rwk'
import 'intl/locale-data/jsonp/rwk-TZ'
import 'intl/locale-data/jsonp/sah'
import 'intl/locale-data/jsonp/sah-RU'
import 'intl/locale-data/jsonp/saq'
import 'intl/locale-data/jsonp/saq-KE'
import 'intl/locale-data/jsonp/sbp'
import 'intl/locale-data/jsonp/sbp-TZ'
import 'intl/locale-data/jsonp/se'
import 'intl/locale-data/jsonp/se-FI'
import 'intl/locale-data/jsonp/se-NO'
import 'intl/locale-data/jsonp/se-SE'
import 'intl/locale-data/jsonp/seh'
import 'intl/locale-data/jsonp/seh-MZ'
import 'intl/locale-data/jsonp/ses'
import 'intl/locale-data/jsonp/ses-ML'
import 'intl/locale-data/jsonp/sg'
import 'intl/locale-data/jsonp/sg-CF'
import 'intl/locale-data/jsonp/shi'
import 'intl/locale-data/jsonp/shi-Latn'
import 'intl/locale-data/jsonp/shi-Latn-MA'
import 'intl/locale-data/jsonp/shi-Tfng'
import 'intl/locale-data/jsonp/shi-Tfng-MA'
import 'intl/locale-data/jsonp/si'
import 'intl/locale-data/jsonp/si-LK'
import 'intl/locale-data/jsonp/sk'
import 'intl/locale-data/jsonp/sk-SK'
import 'intl/locale-data/jsonp/sl'
import 'intl/locale-data/jsonp/sl-SI'
import 'intl/locale-data/jsonp/smn'
import 'intl/locale-data/jsonp/smn-FI'
import 'intl/locale-data/jsonp/sn'
import 'intl/locale-data/jsonp/sn-ZW'
import 'intl/locale-data/jsonp/so'
import 'intl/locale-data/jsonp/so-DJ'
import 'intl/locale-data/jsonp/so-ET'
import 'intl/locale-data/jsonp/so-KE'
import 'intl/locale-data/jsonp/so-SO'
import 'intl/locale-data/jsonp/sq'
import 'intl/locale-data/jsonp/sq-AL'
import 'intl/locale-data/jsonp/sq-MK'
import 'intl/locale-data/jsonp/sq-XK'
import 'intl/locale-data/jsonp/sr'
import 'intl/locale-data/jsonp/sr-Cyrl'
import 'intl/locale-data/jsonp/sr-Cyrl-BA'
import 'intl/locale-data/jsonp/sr-Cyrl-ME'
import 'intl/locale-data/jsonp/sr-Cyrl-RS'
import 'intl/locale-data/jsonp/sr-Cyrl-XK'
import 'intl/locale-data/jsonp/sr-Latn'
import 'intl/locale-data/jsonp/sr-Latn-BA'
import 'intl/locale-data/jsonp/sr-Latn-ME'
import 'intl/locale-data/jsonp/sr-Latn-RS'
import 'intl/locale-data/jsonp/sr-Latn-XK'
import 'intl/locale-data/jsonp/sv'
import 'intl/locale-data/jsonp/sv-AX'
import 'intl/locale-data/jsonp/sv-FI'
import 'intl/locale-data/jsonp/sv-SE'
import 'intl/locale-data/jsonp/sw'
import 'intl/locale-data/jsonp/sw-CD'
import 'intl/locale-data/jsonp/sw-KE'
import 'intl/locale-data/jsonp/sw-TZ'
import 'intl/locale-data/jsonp/sw-UG'
import 'intl/locale-data/jsonp/ta'
import 'intl/locale-data/jsonp/ta-IN'
import 'intl/locale-data/jsonp/ta-LK'
import 'intl/locale-data/jsonp/ta-MY'
import 'intl/locale-data/jsonp/ta-SG'
import 'intl/locale-data/jsonp/te'
import 'intl/locale-data/jsonp/te-IN'
import 'intl/locale-data/jsonp/teo'
import 'intl/locale-data/jsonp/teo-KE'
import 'intl/locale-data/jsonp/teo-UG'
import 'intl/locale-data/jsonp/th'
import 'intl/locale-data/jsonp/th-TH'
import 'intl/locale-data/jsonp/ti'
import 'intl/locale-data/jsonp/ti-ER'
import 'intl/locale-data/jsonp/ti-ET'
import 'intl/locale-data/jsonp/tk'
import 'intl/locale-data/jsonp/tk-TM'
import 'intl/locale-data/jsonp/to'
import 'intl/locale-data/jsonp/to-TO'
import 'intl/locale-data/jsonp/tr'
import 'intl/locale-data/jsonp/tr-CY'
import 'intl/locale-data/jsonp/tr-TR'
import 'intl/locale-data/jsonp/twq'
import 'intl/locale-data/jsonp/twq-NE'
import 'intl/locale-data/jsonp/tzm'
import 'intl/locale-data/jsonp/tzm-MA'
import 'intl/locale-data/jsonp/ug'
import 'intl/locale-data/jsonp/ug-CN'
import 'intl/locale-data/jsonp/uk'
import 'intl/locale-data/jsonp/uk-UA'
import 'intl/locale-data/jsonp/ur'
import 'intl/locale-data/jsonp/ur-IN'
import 'intl/locale-data/jsonp/ur-PK'
import 'intl/locale-data/jsonp/uz'
import 'intl/locale-data/jsonp/uz-Arab'
import 'intl/locale-data/jsonp/uz-Arab-AF'
import 'intl/locale-data/jsonp/uz-Cyrl'
import 'intl/locale-data/jsonp/uz-Cyrl-UZ'
import 'intl/locale-data/jsonp/uz-Latn'
import 'intl/locale-data/jsonp/uz-Latn-UZ'
import 'intl/locale-data/jsonp/vai'
import 'intl/locale-data/jsonp/vai-Latn'
import 'intl/locale-data/jsonp/vai-Latn-LR'
import 'intl/locale-data/jsonp/vai-Vaii'
import 'intl/locale-data/jsonp/vai-Vaii-LR'
import 'intl/locale-data/jsonp/vi'
import 'intl/locale-data/jsonp/vi-VN'
import 'intl/locale-data/jsonp/vo'
import 'intl/locale-data/jsonp/vo-001'
import 'intl/locale-data/jsonp/vun'
import 'intl/locale-data/jsonp/vun-TZ'
import 'intl/locale-data/jsonp/wae'
import 'intl/locale-data/jsonp/wae-CH'
import 'intl/locale-data/jsonp/xog'
import 'intl/locale-data/jsonp/xog-UG'
import 'intl/locale-data/jsonp/yav'
import 'intl/locale-data/jsonp/yav-CM'
import 'intl/locale-data/jsonp/yi'
import 'intl/locale-data/jsonp/yi-001'
import 'intl/locale-data/jsonp/yo'
import 'intl/locale-data/jsonp/yo-BJ'
import 'intl/locale-data/jsonp/yo-NG'
import 'intl/locale-data/jsonp/zgh'
import 'intl/locale-data/jsonp/zgh-MA'
import 'intl/locale-data/jsonp/zh'
import 'intl/locale-data/jsonp/zh-Hans'
import 'intl/locale-data/jsonp/zh-Hans-CN'
import 'intl/locale-data/jsonp/zh-Hans-HK'
import 'intl/locale-data/jsonp/zh-Hans-MO'
import 'intl/locale-data/jsonp/zh-Hans-SG'
import 'intl/locale-data/jsonp/zh-Hant'
import 'intl/locale-data/jsonp/zh-Hant-HK'
import 'intl/locale-data/jsonp/zh-Hant-MO'
import 'intl/locale-data/jsonp/zh-Hant-TW'
import 'intl/locale-data/jsonp/zu'
import 'intl/locale-data/jsonp/zu-ZA'

Vue.mixin({
  methods: {
    getFormattedCurrency: (amount: number, currency: string = constants.defaultCurrencyCode) => {
      try {
        return new Intl.NumberFormat(Locale.getCurrentLocale(), {
          style: 'currency',
          currency: currency
        }).format(amount)
      } catch (error) {
        return amount
      }
    },

    getFormattedCrypto: (amount: number, coin: any = 'MCX') => {
      try {
        return new Intl.NumberFormat(Locale.getCurrentLocale(), {
          style: 'currency',
          currency: coin,
          minimumFractionDigits: 2
        }).format(amount)
      } catch (error) {
        return amount
      }
    },

    formatAmountFromSatoshis: (satoshis: number, currency: string = 'MCX') => {
      try {
        return new Intl.NumberFormat(Locale.getCurrentLocale(), {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: 2
        }).format(satoshis / 10 ** constants.decimalPerSatoshi)
      } catch (error) {
        return satoshis
      }
    }
  }
})
