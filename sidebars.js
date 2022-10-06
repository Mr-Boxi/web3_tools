/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  // 前言
  introSidebar :[
    'intro',
    'why_programming',
  ],

  // 编程基础
  program_basics: [
    'program_basics/info',
    {
      label: '数据结构',
      type: 'category',
      items: [
        'program_basics/data_structures/info',
        'program_basics/data_structures/链表',
        'program_basics/data_structures/数组',
        'program_basics/data_structures/二叉树',
        'program_basics/data_structures/图',
      ]
    },
    {
      label: '算法',
      type: 'category',
      items: [
        'program_basics/algorithms/info',
      ]
    },
    {
      label: '操作系统',
      type: 'category',
      items: [
        'program_basics/os/info',
        'program_basics/os/进程管理',
        'program_basics/os/存储管理',
        'program_basics/os/文件管理',
        'program_basics/os/设备管理',
        'program_basics/os/作业管理',
      ]
    },
    {
      label: '计算机网络',
      type: 'category',
      items: [
        'program_basics/network/info',
        'program_basics/network/tcp',
        'program_basics/network/udp',
      ]
    },
    {
      label: '系统设计',
      type: 'category',
      items: [
        'program_basics/system_design/info',
      ]
    },
    {
      label: '设计模式',
      type: 'category',
      items: [
        'program_basics/design_patterns/info',
      ]
    },
    {
      label: '开发工具',
      type: 'category',
      items: [
        'program_basics/dev_tools/tools',
      ]
    },
  ],

  // 前端/后端开发语言
  frontend_and_backend: [
    // node
    //{},
    // type scripts
    //{},
    // go
    {
      label: 'Go',
      type: 'category',
      items: [
        'go/info',
        'go/编程模式-option',
      ]
    },
    // rust
    {
      label: 'Rust',
      type: 'category',
      items: [
        'rust/why_rust',
        'rust/info',
        {
          label: '1.rust所有权机制(重点)',
          type: 'category',
          items: [
            'rust/rust基础知识/所有权机制/内存基础栈与堆',
            'rust/rust基础知识/所有权机制/所有权',
            'rust/rust基础知识/所有权机制/借用',
            'rust/rust基础知识/所有权机制/生命周期1',
            'rust/rust基础知识/所有权机制/生命周期2',
            'rust/rust基础知识/所有权机制/static生命周期',
          ],
        },
        {
          label: '2.rust类型系统',
          type: 'category',
          items: [
            'rust/rust基础知识/类型系统/常量与静态变量',
            'rust/rust基础知识/类型系统/变量绑定与解构',
            'rust/rust基础知识/类型系统/数值类型',
            'rust/rust基础知识/类型系统/布尔类型',
            'rust/rust基础知识/类型系统/单元类型',
            'rust/rust基础知识/类型系统/字符类型',
            'rust/rust基础知识/类型系统/范围类型',
            'rust/rust基础知识/类型系统/切片类型',
            'rust/rust基础知识/类型系统/数组',
            'rust/rust基础知识/类型系统/元组',
            'rust/rust基础知识/类型系统/结构体',
            'rust/rust基础知识/类型系统/枚举',
            'rust/rust基础知识/类型系统/str类型',
            'rust/rust基础知识/类型系统/字符串与切片',
            'rust/rust基础知识/类型系统/动态数组',
            'rust/rust基础知识/类型系统/键值对',
            'rust/rust基础知识/类型系统/类型转换_as',
            'rust/rust基础知识/类型系统/类型转换_From和Into',
            'rust/rust基础知识/类型系统/类型转换_TryFrom和TryInto',
            'rust/rust基础知识/类型系统/类型转换_ToString和FromStr',
            'rust/rust基础知识/类型系统/新类型和类型别名',
            'rust/rust基础知识/类型系统/定长类型和不定长类型',
          ],
        },
        {
          label: '3.rust指针类型',
          type: 'category',
          items: [
            'rust/rust基础知识/指针类型/info',
            'rust/rust基础知识/指针类型/安全的指针',
            'rust/rust基础知识/指针类型/原始指针',
            'rust/rust基础知识/指针类型/Box堆分配对象',
            'rust/rust基础知识/指针类型/Deref解引用',
            'rust/rust基础知识/指针类型/Drop释放资源',
            'rust/rust基础知识/指针类型/Rc与Arc',
            'rust/rust基础知识/指针类型/Cell与RefCell',
          ],
        },
        {
          label: '4.rust流程控制',
          type: 'category',
          items: [
            'rust/rust基础知识/流程控制/if_else',
            'rust/rust基础知识/流程控制/流程控制',
            'rust/rust基础知识/流程控制/模式匹配',
          ]
        },
        {
          label: '5.rust函数编程',
          type: 'category',
          items: [
            'rust/rust基础知识/函数编程/函数',
            'rust/rust基础知识/函数编程/函数指针',
            'rust/rust基础知识/函数编程/方法',
            'rust/rust基础知识/函数编程/闭包',
            'rust/rust基础知识/函数编程/迭代器',

          ]
        },
        {
          label: '6.rust泛型与特征',
          type: 'category',
          items: [
            'rust/rust基础知识/泛型与特征/泛型',
            'rust/rust基础知识/泛型与特征/特征1',
            'rust/rust基础知识/泛型与特征/特征2',
            'rust/rust基础知识/泛型与特征/特征对象',
          ],
        },
        {
          label: '7.rust错误处理',
          type: 'category',
          items: [
            'rust/rust基础知识/错误处理/option',
            'rust/rust基础知识/错误处理/result',
            'rust/rust基础知识/错误处理/panic',
            'rust/rust基础知识/错误处理/组合器',
            'rust/rust基础知识/错误处理/第三方库',
          ]
        },
        {
          label: '8.rust模块管理',
          type: 'category',
          items: [
            'rust/rust基础知识/包和模块',
            'rust/rust基础知识/注释和文档',
          ]
        },
        {
          label: '9.cargo使用',
          type: 'category',
          items: [
            'rust/cargo/cargo_workflow',
            'rust/cargo/cargo添加依赖',
            'rust/cargo/cargo_targe',
            'rust/cargo/cargo_条件编译',
            'rust/cargo/cargo_workspace',
            'rust/cargo/cargo配置格式',
          ]
        },
        {
          label: '10.rust测试',
          type: 'category',
          items: [
            'rust/rust自动化测试/断言',
            'rust/rust自动化测试/单元测试',
            'rust/rust自动化测试/集成测试',
            'rust/rust自动化测试/基准测试',
          ]
        },
        {
          label: '11.rust重点难点',
          type: 'category',
          items: [
            'rust/rust基础知识/重点难点/切片与切片引用',
          ]
        },
        {
          label: 'rust 多线程编程',
          type: 'category',
          items: [
            'rust/rust多线程并发编程/info',
            'rust/rust多线程并发编程/多线程的使用',
            'rust/rust多线程并发编程/线程同步_消息传递',
            'rust/rust多线程并发编程/线程同步_锁',
            'rust/rust多线程并发编程/线程同步_条件变量',
            'rust/rust多线程并发编程/线程同步_信号量',
            'rust/rust多线程并发编程/线程同步_原子操作',
            'rust/rust多线程并发编程/基于Send和Sync的线程安全',
          ]
        },
        {
          label: 'rust 异步编程',
          type: 'category',
          items: [
            'rust/rust异步编程/info',
            'rust/rust异步编程/async与await',
            'rust/rust异步编程/async_web服务器',
          ]
        },
        {
          label: 'rust web编程',
          type: 'category',
          items: [
            'rust/rust web编程/info',
            'rust/rust web编程/actix_hello_world',
            'rust/rust web编程/actix_basics',
          ]
        },
        {
          label: 'rust 操作数据库',
          type: 'category',
          items: [
            'rust/rust操作数据库/info',
          ]
        },
        {
          label: 'rust 网络编程',
          type: 'category',
          items: [
            'rust/rust网络编程/info',
            'rust/rust网络编程/tcp',
            'rust/rust网络编程/udp',
          ]
        },
        {
          label: 'rust unsafe编程',
          type: 'category',
          items: [
            'rust/rust unsafe编程/unsafe',
          ]
        },
        {
          label: 'rust ffi编程',
          type: 'category',
          items: [
            'rust/rust ffi编程/info',
          ]
        },
        {
          label: 'rust 宏编程',
          type: 'category',
          items: [
            'rust/rust宏编程/info',
          ]
        },
        {
          label: 'rust 设计模式',
          type: 'category',
          items: [
            'rust/rust设计模式/info',
          ]
        },
        {
          label: 'rust 常用开发库',
          type: 'category',
          items: [
            'rust/rust开发库/info',
            'rust/rust开发库/时间库',
            'rust/rust开发库/全局变量',
            'rust/rust基础知识/类型系统/全局变量',
            'rust/rust开发库/日志库-log',
            'rust/rust开发库/日志库-tracing',
          ]
        },
        'rust/learn_project'
      ]
    },
  ],

  // 区块链
  blockchains: [
      // 以太坊
    {
      label: 'Ethereum',
      type: 'category',
      items: [
          // 学习资料汇总
        'blockchains/ethereum/ethereum_resource',
        {
          label: 'solidity合约开发',
          type: 'category',
          items: [
            {
              label: 'solidity基础语法',
              type: 'category',
              items: [
                'solidity/solidity_basic/hello_world',
                'solidity/solidity_basic/first_app',
                'solidity/solidity_basic/primitive_data_types',
                'solidity/solidity_basic/variables',
                'solidity/solidity_basic/constants',
                'solidity/solidity_basic/immutable',
                'solidity/solidity_basic/read_and_write_state_variable',
                'solidity/solidity_basic/ether_and_wei',
                'solidity/solidity_basic/gas',
                'solidity/solidity_basic/if_else',
                'solidity/solidity_basic/for_while',
                'solidity/solidity_basic/mapping',
                'solidity/solidity_basic/array',
                'solidity/solidity_basic/enum',
                'solidity/solidity_basic/structs',
                'solidity/solidity_basic/data_locations',
                'solidity/solidity_basic/function',
                'solidity/solidity_basic/view_and_pure_functions',
                'solidity/solidity_basic/error',
                'solidity/solidity_basic/function_modifier',
                'solidity/solidity_basic/events',
                'solidity/solidity_basic/constructor',
                'solidity/solidity_basic/inheritance',
                'solidity/solidity_basic/shadowing_inherited_state_variables',
                'solidity/solidity_basic/calling_parent_contracts',
                'solidity/solidity_basic/visibility',
                'solidity/solidity_basic/interface',
                'solidity/solidity_basic/payable',
                'solidity/solidity_basic/sending_eth',
                'solidity/solidity_basic/fallback',
                'solidity/solidity_basic/call',
                'solidity/solidity_basic/delegatecall',
                'solidity/solidity_basic/function_selector',
                'solidity/solidity_basic/calling_other_contract',
                'solidity/solidity_basic/create_other_contracts',
                'solidity/solidity_basic/try_catch',
                'solidity/solidity_basic/import',
                'solidity/solidity_basic/library',
                'solidity/solidity_basic/abi_decode',
                'solidity/solidity_basic/hashing_with_keccak256',
                'solidity/solidity_basic/verifying_signature',
                'solidity/solidity_basic/gas_saving_techniques'
              ],
            },
            {
              label: 'solidity智能合约标准和类库',
              type: 'category',
              items: [
                'solidity/solidity_contracts/eips/eips',
                'solidity/solidity_contracts/contract_list',
                {
                  label: '合约库-常见合约',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/application/README',
                    'solidity/solidity_contracts/application/ether_wallet',
                    'solidity/solidity_contracts/application/multi_sig_wallet',
                    'solidity/solidity_contracts/application/merkle_tree',
                    'solidity/solidity_contracts/application/iterable_mapping',
                    'solidity/solidity_contracts/application/erc20',
                    'solidity/solidity_contracts/application/erc721',
                    'solidity/solidity_contracts/application/precompute_contract_address',
                    'solidity/solidity_contracts/application/minimal_proxy_contract',
                    'solidity/solidity_contracts/application/upgradeable_contract',
                    'solidity/solidity_contracts/application/deploy_any_contract',
                    'solidity/solidity_contracts/application/write_any_slot',
                    'solidity/solidity_contracts/application/uni-directional_payment_channel',
                    'solidity/solidity_contracts/application/bi-directional_payment_channel',
                    'solidity/solidity_contracts/application/english_auction',
                    'solidity/solidity_contracts/application/dutch_auction',
                    'solidity/solidity_contracts/application/minimal_proxy_contract',
                    'solidity/solidity_contracts/application/multi_call',
                    'solidity/solidity_contracts/application/multi_delegatecall',
                    'solidity/solidity_contracts/application/time_lock',
                    'solidity/solidity_contracts/application/airdrop',
                    'solidity/solidity_contracts/application/weth',
                    'solidity/solidity_contracts/application/paymentsplit',
                    'solidity/solidity_contracts/application/nftswap',
                    'solidity/solidity_contracts/application/tokenlocker',
                  ]
                },
                {
                  label: '合约库-openzeppelin',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/openzepplin/access_control',
                    'solidity/solidity_contracts/openzepplin/02.1_erc20',
                    'solidity/solidity_contracts/openzepplin/02.2_erc721',
                    'solidity/solidity_contracts/openzepplin/02.3_erc777',
                    'solidity/solidity_contracts/openzepplin/02.4_erc1155',
                    'solidity/solidity_contracts/openzepplin/governance',
                    'solidity/solidity_contracts/openzepplin/crosschain',
                    'solidity/solidity_contracts/openzepplin/uitilities',
                  ]
                },
                {
                  label: '合约库-可升级合约库',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/upgradeable/可升级合约',
                    'solidity/solidity_contracts/upgradeable/erc20-upgradeable-example',
                  ]
                },
                {
                  label: '合约库-Defi/DEX',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/defi/info',
                    'solidity/solidity_contracts/defi/uniswap',
                  ]
                },
                {
                  label: '合约库-NFT',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/nft/nft'
                  ]
                },
                {
                  label: '合约库-Dao',
                  type: 'category',
                  items: [
                    // todo
                    'solidity/solidity_contracts/contract_list',
                  ],
                },
                {
                  label: '合约库-SoulBoundToken',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/soulbound_token',
                  ]
                },
                {
                  label: '合约开发最佳做法',
                  type: 'category',
                  items: [
                    'solidity/solidity_contracts/best_practice/info',
                  ],
                },
              ]
            },
            {
              label: 'solidity智能合约开发工具集',
              type: 'category',
              items: [
                'solidity/solidity_test_tools/foundry',
                {
                  label: 'hardhat项目工具',
                  type: 'category',
                  items: [
                    'solidity/solidity_test_tools/hardhat_workflow/hardhat_project_setting',
                    'solidity/solidity_test_tools/hardhat_workflow/write_and_compiling',
                    'solidity/solidity_test_tools/hardhat_workflow/testing_contract',
                    'solidity/solidity_test_tools/hardhat_workflow/deploy_contracts',
                    'solidity/solidity_test_tools/hardhat_workflow/connect_test_networks',
                    'solidity/solidity_test_tools/hardhat_workflow/upgrading_contract',
                  ],
                },
                'solidity/solidity_test_tools/embark',
              ],
            },
            {
              label: 'solidity智能合约安全',
              type: 'category',
              items: [
                 'solidity/solidity_security/solidity_sercurity_resource',
                'solidity/solidity_security/security_tools',
                {
                  label: 'solidity漏洞',
                  type: 'category',
                  items: [
                    'solidity/solidity_security/solidity_hack/README',
                    'solidity/solidity_security/solidity_hack/re_entrancy',
                    'solidity/solidity_security/solidity_hack/arithmetic_overflow_underflow',
                    'solidity/solidity_security/solidity_hack/self_destruct',
                    'solidity/solidity_security/solidity_hack/access_private_data',
                    'solidity/solidity_security/solidity_hack/delegatecall',
                    'solidity/solidity_security/solidity_hack/source_of_randomness',
                    'solidity/solidity_security/solidity_hack/denial_of_service',
                    'solidity/solidity_security/solidity_hack/phishing_with_tx_orgin',
                    'solidity/solidity_security/solidity_hack/hiding_malicious_code_with_external_contract',
                    'solidity/solidity_security/solidity_hack/honeypot',
                    'solidity/solidity_security/solidity_hack/front_running',
                    'solidity/solidity_security/solidity_hack/block_timestamp_manipulation',
                    'solidity/solidity_security/solidity_hack/signature_replay',
                    'solidity/solidity_security/solidity_hack/bypass_contract_size_check',
                  ]
                },
              ],
            },
            {
              label: 'solidity智能合约设计模式',
              type: 'category',
              items: [
                'solidity/solidity_patterns/info'
              ]
            },
            {
              label: 'solidity项目实战',
              type: 'category',
              items: [
                'solidity/solidity_project/project',
              ]
            },
            {
              label: 'EVM',
              type: 'category',
              items: [
                'solidity/evm/info'
              ]
            },
          ]
        },
        'blockchains/ethereum/eth_node',
        'blockchains/ethereum/eth_client',
        {
          label: '区块数据分析',
          type: 'category',
          items: [
            'blockchains/ethereum/data_analytics/data_analytics',
            'blockchains/ethereum/data_analytics/alethio',
            'blockchains/ethereum/data_analytics/amberdataio',
            'blockchains/ethereum/data_analytics/neufund',
            'blockchains/ethereum/data_analytics/tenderly',
            'blockchains/ethereum/data_analytics/blockscout',
            'blockchains/ethereum/data_analytics/terminal',
            'blockchains/ethereum/data_analytics/数据解析工具',
          ],
        },
      ]
    },
    {
      label: 'Solana',
      type: 'category',
      items: [
        'blockchains/solana/solana_core_concepts/核心概念',
        'blockchains/solana/solana_workflow/项目设置',
        'blockchains/solana/solana_workflow/编写合约',
        'blockchains/solana/solana_workflow/跨合约调用',
        'blockchains/solana/solana_workflow/程序派生地址',
        'blockchains/solana/solana_workflow/编写测试',
        'blockchains/solana/solana_workflow/部署合约',
        {
          label: 'solana项目实战',
          type: 'category',
          items: [
            'blockchains/solana/solana_项目/blog_dapp_by_anchor',
            'blockchains/solana/solana_项目/crowdfunding_dapp',
            'blockchains/solana/solana_项目/crypto_currency',
            'blockchains/solana/solana_项目/mail_dapp',
          ],
        },
      ]
    },
    {
      label: 'Aptos',
      type: 'category',
      items: [
        'move/info',
        {
          label: 'move语法基础',
          type: 'category',
          items: [
            'move/move_basic/模块与脚本',
            'move/move_basic/第一个教程创建coins',
            'move/move_basic/整数',
            'move/move_basic/布尔类型',
            'move/move_basic/地址',
            'move/move_basic/动态数组',
            'move/move_basic/签名者',
            'move/move_basic/引用',
            'move/move_basic/元组',
            'move/move_basic/局部变量和作用域',
            'move/move_basic/相等操作',
            'move/move_basic/abort和assert',
            'move/move_basic/条件',
            'move/move_basic/循环',
            'move/move_basic/函数',
            'move/move_basic/结构体和资源',
            'move/move_basic/常量',
            'move/move_basic/泛型',
            'move/move_basic/类型能力',
            'move/move_basic/use和alias',
            'move/move_basic/friend',
            'move/move_basic/包',
            'move/move_basic/单元测试',
            'move/move_basic/全局存储',
            'move/move_basic/全局存储操作',
          ]
        }
      ]
    },
  ],

  // 零知识证明
  zeroKnowledgeProofs : [
    'zero_knowledge_proofs/info',
    {
      label:'zk-snarks**(常见)',
      type: 'category',
      items: [
        'zero_knowledge_proofs/snarks',
        'zero_knowledge_proofs/groth16',
        'zero_knowledge_proofs/bellman库',
        'zero_knowledge_proofs/bellman示例1',
        'zero_knowledge_proofs/libsnark库',
        'zero_knowledge_proofs/zokrates',
        'zero_knowledge_proofs/zkinterface库',
      ]
    },
    {
      label:'zk-snorks(常见)',
      type: 'category',
      items: [
        'zero_knowledge_proofs/snorks',
      ]
    },
    {
      label:'zk-bulletproof(常见)',
      type: 'category',
      items: [
        'zero_knowledge_proofs/bulletproof',
      ]
    },
    {
      label:'zk-starks',
      type: 'category',
      items: [
        'zero_knowledge_proofs/starks',
      ]
    },
    {
      label:'zkp生态应用',
      type: 'category',
      items: [
        'zero_knowledge_proofs/zk_application',
      ]
    },
  ],

};

module.exports = sidebars;
