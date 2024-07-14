/**
 * The JSON-LD Playground example files.
 *
 * @author Manu Sporny <msporny@digitalbazaar.com>
 * @author Dave Longley <dlongley@digitalbazaar.com>
 */
(function($) {
    window.playground = window.playground || {};
    var playground = window.playground;

    // setup the examples and params
    playground.examples = {};
    playground.frames = {};
    playground.contexts = {};


    /*
    [
                {
                    '@id': '/a/[/r/RelatedTo/,/c/ru/интернет_сайт/n/,/c/ru/сайт/]',
                    '@type': 'Edge',
                    'dataset': '/d/wiktionary/en',
                    'end': {
                        '@id': '/c/ru/сайт',
                        '@type': 'Node',
                        'label': 'сайт',
                        'language': 'ru',
                        'term': '/c/ru/сайт'
                    },
                    'license': 'cc:by-sa/4.0',
                    'rel': {
                        '@id': '/r/RelatedTo',
                        '@type': 'Relation',
                        'label': 'RelatedTo'
                    },
                    'sources': [
                        {
                            '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                            '@type': 'Source',
                            'contributor': '/s/resource/wiktionary/en',
                            'process': '/s/process/wikiparsec/2'
                        }
                    ],
                    'start': {
                        '@id': '/c/ru/интернет_сайт/n',
                        '@type': 'Node',
                        'label': 'интернет сайт',
                        'language': 'ru',
                        'sense_label': 'n',
                        'term': '/c/ru/интернет_сайт'
                    },
                    'surfaceText': null,
                    'weight': 1.0
                }
                ]
     */
    /*
    'Edges': [{
            '@id': '/yoga_studio',
            '@type': 'Edge',
            'surfaceText': 'Сайт йога студии',
            'weight': 1.0
        }]
     */
    // add the example of a Person
    playground.examples['Person'] = {
        '@context': 'https://zababurinsergei.github.io/DevOps/context.ld.json',
        '@id': '/DevOps',
        'version': '5.8.1',
        'edges': [
            {
                '@id': '/json-ld.org',
                '@type': 'Edge',
                'dataset': '/d/DevOps',
                'license': 'cc:by-sa/4.0',
                'surfaceText': 'json-ld.org сайт',
                'weight': 1.0
            },
            {
                '@id': '/Okuma-Reader',
                '@type': 'Edge',
                'dataset': '/d/DevOps',
                'license': 'cc:by-sa/4.0',
                'surfaceText': 'Сервис Okuma-Reader',
                'weight': 1.0
            },
            {
                '@id': '/welcomebook',
                '@type': 'Edge',
                'dataset': '/d/DevOps',
                'license': 'cc:by-sa/4.0',
                'surfaceText': 'Сервис welcomebook',
                'weight': 1.0
            },
            {
                '@id': '/checklist',
                '@type': 'Edge',
                'dataset': '/d/DevOps',
                'license': 'cc:by-sa/4.0',
                'surfaceText': 'Сервис checklist',
                'weight': 1.0
            },
            {
                '@id': '/yoga_studio',
                '@type': 'Edge',
                'dataset': '/d/DevOps',
                'license': 'cc:by-sa/4.0',
                'surfaceText': 'Сервис yoga_studio',
                'url': 'https://github.com/ElenaSidneva/yoga_studio',
                'weight': 1.0
            },
        ],
        'view': {
            '@id': '/DevOps',
            '@type': 'PartialCollectionView'
        }
    };

    // add the example of a Event
    playground.examples['Event'] = {
        '@context': [
            'https://zababurinsergei.github.io/DevOps/context.ld.json'
        ],
        '@id': '/c/ru/сайт',
        'edges': [
            {
                '@id': '/a/[/r/RelatedTo/,/c/ru/интернет_сайт/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/RelatedTo',
                    '@type': 'Relation',
                    'label': 'RelatedTo'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/интернет_сайт/n',
                    '@type': 'Node',
                    'label': 'интернет сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/интернет_сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайта/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайта/n',
                    '@type': 'Node',
                    'label': 'сайта',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайта'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/RelatedTo/,/c/ru/сайт/n/,/c/en/site/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/en/site',
                    '@type': 'Node',
                    'label': 'site',
                    'language': 'en',
                    'term': '/c/en/site'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/RelatedTo',
                    '@type': 'Relation',
                    'label': 'RelatedTo'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт/n',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайтами/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайтами/n',
                    '@type': 'Node',
                    'label': 'сайтами',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайтами'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайтом/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайтом/n',
                    '@type': 'Node',
                    'label': 'сайтом',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайтом'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/HasContext/,/c/ru/сайт/n/,/c/en/biochemistry/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/en/biochemistry',
                    '@type': 'Node',
                    'label': 'biochemistry',
                    'language': 'en',
                    'term': '/c/en/biochemistry'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/HasContext',
                    '@type': 'Relation',
                    'label': 'HasContext'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт/n',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайте/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайте/n',
                    '@type': 'Node',
                    'label': 'сайте',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайте'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/Synonym/,/c/ru/интернет_сайт/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/Synonym',
                    '@type': 'Relation',
                    'label': 'Synonym'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/интернет_сайт/n',
                    '@type': 'Node',
                    'label': 'интернет сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/интернет_сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайты/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайты/n',
                    '@type': 'Node',
                    'label': 'сайты',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайты'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/RelatedTo/,/c/ru/сайт/n/,/c/en/web_site/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/en/web_site',
                    '@type': 'Node',
                    'label': 'web site',
                    'language': 'en',
                    'term': '/c/en/web_site'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/RelatedTo',
                    '@type': 'Relation',
                    'label': 'RelatedTo'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт/n',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/ExternalURL/,/c/ru/сайт/,/http://ru.dbpedia.org/resource/Сайт/]',
                '@type': 'Edge',
                'dataset': '/d/dbpedia/en',
                'end': {
                    '@id': 'http://ru.dbpedia.org/resource/Сайт',
                    '@type': 'Node',
                    'label': 'Сайт',
                    'path': '/resource/Сайт',
                    'site': 'ru.dbpedia.org',
                    'site_available': true,
                    'term': 'http://ru.dbpedia.org/resource/Сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/ExternalURL',
                    '@type': 'Relation',
                    'label': 'ExternalURL'
                },
                'sources': [
                    {
                        '@id': '/s/resource/dbpedia/2015/en',
                        '@type': 'Source',
                        'contributor': '/s/resource/dbpedia/2015/en'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/EtymologicallyDerivedFrom/,/c/ru/сайт/,/c/en/site/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/en/site',
                    '@type': 'Node',
                    'label': 'site',
                    'language': 'en',
                    'term': '/c/en/site'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/EtymologicallyDerivedFrom',
                    '@type': 'Relation',
                    'label': 'EtymologicallyDerivedFrom'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайту/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайту/n',
                    '@type': 'Node',
                    'label': 'сайту',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайту'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайтах/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайтах/n',
                    '@type': 'Node',
                    'label': 'сайтах',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайтах'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/Synonym/,/c/en/website/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/Synonym',
                    '@type': 'Relation',
                    'label': 'Synonym'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/en/website/n',
                    '@type': 'Node',
                    'label': 'website',
                    'language': 'en',
                    'sense_label': 'n',
                    'term': '/c/en/website'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайтов/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайтов/n',
                    '@type': 'Node',
                    'label': 'сайтов',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайтов'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/Synonym/,/c/ru/веб_сайт/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/Synonym',
                    '@type': 'Relation',
                    'label': 'Synonym'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/веб_сайт/n',
                    '@type': 'Node',
                    'label': 'веб сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/веб_сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/Synonym/,/c/ru/сайт/n/,/c/ru/веб_сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/веб_сайт',
                    '@type': 'Node',
                    'label': 'веб сайт',
                    'language': 'ru',
                    'term': '/c/ru/веб_сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/Synonym',
                    '@type': 'Relation',
                    'label': 'Synonym'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт/n',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/FormOf/,/c/ru/сайтам/n/,/c/ru/сайт/]',
                '@type': 'Edge',
                'dataset': '/d/wiktionary/en',
                'end': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/FormOf',
                    '@type': 'Relation',
                    'label': 'FormOf'
                },
                'sources': [
                    {
                        '@id': '/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]',
                        '@type': 'Source',
                        'contributor': '/s/resource/wiktionary/en',
                        'process': '/s/process/wikiparsec/2'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайтам/n',
                    '@type': 'Node',
                    'label': 'сайтам',
                    'language': 'ru',
                    'sense_label': 'n',
                    'term': '/c/ru/сайтам'
                },
                'surfaceText': null,
                'weight': 1.0
            },
            {
                '@id': '/a/[/r/Synonym/,/c/ru/сайт/,/c/en/website/]',
                '@type': 'Edge',
                'dataset': '/d/dbpedia/en',
                'end': {
                    '@id': '/c/en/website',
                    '@type': 'Node',
                    'label': 'website',
                    'language': 'en',
                    'term': '/c/en/website'
                },
                'license': 'cc:by-sa/4.0',
                'rel': {
                    '@id': '/r/Synonym',
                    '@type': 'Relation',
                    'label': 'Synonym'
                },
                'sources': [
                    {
                        '@id': '/s/resource/dbpedia/2015/en',
                        '@type': 'Source',
                        'contributor': '/s/resource/dbpedia/2015/en'
                    }
                ],
                'start': {
                    '@id': '/c/ru/сайт',
                    '@type': 'Node',
                    'label': 'сайт',
                    'language': 'ru',
                    'term': '/c/ru/сайт'
                },
                'surfaceText': null,
                'weight': 0.5
            }
        ],
        'version': '5.8.1',
        'view': {
            '@id': '/c/ru/сайт?offset=0&limit=20',
            '@type': 'PartialCollectionView',
            'comment': 'There are more results. Follow the \'nextPage\' link for more.',
            'firstPage': '/c/ru/сайт?offset=0&limit=20',
            'nextPage': '/c/ru/сайт?offset=20&limit=20',
            'paginatedProperty': 'edges'
        }
    };
    
    // add the example of a Place
    playground.examples['Place'] = {
        '@context': {
            'name': 'http://schema.org/name',
            'description': 'http://schema.org/description',
            'image': {
                '@id': 'http://schema.org/image',
                '@type': '@id'
            },
            'geo': 'http://schema.org/geo',
            'latitude': {
                '@id': 'http://schema.org/latitude',
                '@type': 'xsd:float'
            },
            'longitude': {
                '@id': 'http://schema.org/longitude',
                '@type': 'xsd:float'
            },
            'xsd': 'http://www.w3.org/2001/XMLSchema#'
        },
        'name': 'The Empire State Building',
        'description': 'The Empire State Building is a 102-story landmark in New York City.',
        'image': 'http://www.civil.usherbrooke.ca/cours/gci215a/empire-state-building.jpg',
        'geo': {
            'latitude': '40.75',
            'longitude': '73.98'
        }
    };

    // add the example of a Product
    playground.examples['Product'] = {
        '@context': {
            'gr': 'http://purl.org/goodrelations/v1#',
            'pto': 'http://www.productontology.org/id/',
            'foaf': 'http://xmlns.com/foaf/0.1/',
            'xsd': 'http://www.w3.org/2001/XMLSchema#',
            'foaf:page': {'@type': '@id'},
            'gr:acceptedPaymentMethods': {'@type': '@id'},
            'gr:hasBusinessFunction': {'@type': '@id'},
            'gr:hasCurrencyValue': {'@type': 'xsd:float'}
        },
        '@id': 'http://example.org/cars/for-sale#tesla',
        '@type': 'gr:Offering',
        'gr:name': 'Used Tesla Roadster',
        'gr:description': 'Need to sell fast and furiously',
        'gr:hasBusinessFunction': 'gr:Sell',
        'gr:acceptedPaymentMethods': 'gr:Cash',
        'gr:hasPriceSpecification': {
            'gr:hasCurrencyValue': '85000',
            'gr:hasCurrency': 'USD'
        },
        'gr:includes': {
            '@type': ['gr:Individual', 'pto:Vehicle'],
            'gr:name': 'Tesla Roadster',
            'foaf:page': 'http://www.teslamotors.com/roadster'
        }
    };

    // add the example of a Recipe
    playground.examples['Recipe'] = {
        '@context': {
            'name': 'http://rdf.data-vocabulary.org/#name',
            'ingredient': 'http://rdf.data-vocabulary.org/#ingredients',
            'yield': 'http://rdf.data-vocabulary.org/#yield',
            'instructions': 'http://rdf.data-vocabulary.org/#instructions',
            'step': {
                '@id': 'http://rdf.data-vocabulary.org/#step',
                '@type': 'xsd:integer'
            },
            'description': 'http://rdf.data-vocabulary.org/#description',
            'xsd': 'http://www.w3.org/2001/XMLSchema#'
        },
        'name': 'Mojito',
        'ingredient': ['12 fresh mint leaves', '1/2 lime, juiced with pulp',
            '1 tablespoons white sugar', '1 cup ice cubes',
            '2 fluid ounces white rum', '1/2 cup club soda'],
        'yield': '1 cocktail',
        'instructions' : [{
            'step': 1,
            'description': 'Crush lime juice, mint and sugar together in glass.'
        }, {
            'step': 2,
            'description': 'Fill glass to top with ice cubes.'
        }, {
            'step': 3,
            'description': 'Pour white rum over ice.'
        }, {
            'step': 4,
            'description': 'Fill the rest of glass with club soda, stir.'
        }, {
            'step': 5,
            'description': 'Garnish with a lime wedge.'
        }]
    };

    // add the example of a Library
    playground.examples['Library'] = {
        '@context': {
            'dc11': 'http://purl.org/dc/elements/1.1/',
            'ex': 'http://example.org/vocab#',
            'xsd': 'http://www.w3.org/2001/XMLSchema#',
            'ex:contains': {'@type': '@id'}
        },
        '@graph': [{
            '@id': 'http://example.org/library',
            '@type': 'ex:Library',
            'ex:contains': 'http://example.org/library/the-republic'
        }, {
            '@id': 'http://example.org/library/the-republic',
            '@type': 'ex:Book',
            'dc11:creator': 'Plato',
            'dc11:title': 'The Republic',
            'ex:contains': 'http://example.org/library/the-republic#introduction'
        }, {
            '@id': 'http://example.org/library/the-republic#introduction',
            '@type': 'ex:Chapter',
            'dc11:description': 'An introductory chapter on The Republic.',
            'dc11:title': 'The Introduction'
        }]
    };

    // add the frame example of a Library
    playground.frames['Library'] = {
        '@context': {
            'dc11': 'http://purl.org/dc/elements/1.1/',
            'ex': 'http://example.org/vocab#'
        },
        '@type': 'ex:Library',
        'ex:contains': {
            '@type': 'ex:Book',
            'ex:contains': {'@type': 'ex:Chapter'}
        }
    };

    // add an Activity Streams 2.0 Example
    // currently uses the temporary dev location for the context document.
    playground.examples['Activity'] = {
        '@context': 'https://www.w3.org/ns/activitystreams',
        '@type': 'Create',
        'actor': {
            '@type': 'Person',
            '@id': 'acct:sally@example.org',
            'name': 'Sally'
        },
        'object': {
            '@type': 'Note',
            'content': 'This is a simple note'
        },
        'published': '2015-01-25T12:34:56Z'
    };

})(jQuery);
