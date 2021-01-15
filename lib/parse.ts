/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-12-29 14:37:01
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-12-30 17:53:53
 */
// var UglifyJS = require("uglify-js");

// var code = "interface IObject { a:string; };function add(first, second) { return first + second; }";
// var result = UglifyJS.minify(code, {
//   parse: {},
//   compress: false,
//   mangle: false,
//   output: {
//       ast: true,
//       code: true  // optional - faster if false
//   }
// });
import * as ts from 'typescript';
const code = "" // 要转换的代码
const ast = ts.createSourceFile(
    /* filename */'dummy.ts',
    /* sourceText */ code,
    ts.ScriptTarget.Latest
) // 解析后的 AST

const transformerFactory: ts.TransformerFactory<ts.Node> = (context:  ts.TransformationContext) => {
  return visitor

  function visitor(node: ts.Node): ts.Node {
    if (ts.isIdentifier(node) && node.text === "foo") { // 判断是否是 foo 标识符
          return ts.createIdentifier("bar") // 如果是则替换为 bar 标识符
      }
      return ts.visitEachChild(node, visitor, context) // 否则继续遍历其他节点
  }
};

const factory = ts.factory;
let update = factory.updateSourceFile(ast, [
  // 创建import语句
  factory.createImportDeclaration(
    undefined,
    undefined,
    // 创建import 语法块
    factory.createImportClause(
      false,// 显示type 意义不明
      factory.createIdentifier('React'),// 变量
      factory.createNamedImports([
        factory.createImportSpecifier(
          undefined,
          factory.createIdentifier('memo'),
        ),
      ]), // 括号内的变量 { memo }
    ),
    factory.createStringLiteral('react'),// 引入的包名
  ),
  // 创建interface语法
  factory.createInterfaceDeclaration(
    undefined,
    undefined,
    factory.createIdentifier('ComponentProps'),
    undefined,
    undefined,
    [
      factory.createPropertySignature(
        [
          factory.createModifier(ts.SyntaxKind.PrivateKeyword)
        ],// 变量的作用域
        factory.createIdentifier('name'),// 变量名
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      ),
    ],
  ),
  factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier('Component'),
          undefined,
          undefined,
          factory.createCallExpression(
            factory.createIdentifier('memo'),
            undefined,
            [
              factory.createArrowFunction(
                undefined,
                undefined,
                [
                  factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    undefined,
                    factory.createIdentifier('props'),
                    undefined,
                    factory.createTypeReferenceNode(
                      factory.createIdentifier('ComponentProps'),
                      undefined,
                    ),
                    // 创建约束类型
                    factory.createObjectLiteralExpression([
                        factory.createPropertyAssignment(
                          factory.createIdentifier('name'),
                          factory.createStringLiteral('111'),
                        )
                      ],
                      true,// 是否换行
                    ),
                  ),
                ],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                factory.createBlock(
                  [
                    factory.createReturnStatement(factory.createParenthesizedExpression(factory.createJsxElement(
                      factory.createJsxOpeningElement(
                        factory.createIdentifier('div'),
                        undefined,
                        factory.createJsxAttributes([
                          
                        ]),
                      ),
                      [],
                      factory.createJsxClosingElement(
                        factory.createIdentifier('div'),
                      )
                    )))
                  ],
                  true,
                )
              )
            ]
          )
        ),
      ],
      ts.NodeFlags.Const,

    )
  ),
  ...ast.statements,
]);

const result = ts.transform(update, [transformerFactory]) // 转换 AST
const node = result.transformed[0]

// 由 AST 生成代码
const printer = ts.createPrinter()
const codeAfterTransform = printer.printNode(ts.EmitHint.Unspecified, node, ast);

console.log(codeAfterTransform) // let bar = 1;
