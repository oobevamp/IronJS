﻿open System
open IronJS
open IronJS.Ast
open IronJS.Fsi
open IronJS.Utils
open IronJS.CSharp.Parser
open Antlr.Runtime

let jsLexer = new ES3Lexer(new ANTLRFileStream("Testing.js"))
let jsParser = new ES3Parser(new CommonTokenStream(jsLexer))

let program = jsParser.program()
let ast = Ast.Core.defaultGenerator program.Tree

let paramTypes = [IronJS.Types.ClrString; IronJS.Types.ClrString]

match ast with
| Types.Assign(_, func) -> IronJS.Compiler.Analyzer.analyze func paramTypes
| _ -> ()
