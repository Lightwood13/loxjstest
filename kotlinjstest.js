(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'codemirror', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('codemirror'), require('./kotlin_kotlin.js'));
  else {
    if (typeof CodeMirror === 'undefined') {
      throw new Error("Error loading module 'kotlinjstest'. Its dependency 'codemirror' was not found. Please, check whether 'codemirror' is loaded prior to 'kotlinjstest'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinjstest'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlinjstest'.");
    }
    root.kotlinjstest = factory(typeof kotlinjstest === 'undefined' ? {} : kotlinjstest, CodeMirror, kotlin_kotlin);
  }
}(this, function (_, CodeMirror, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$crossModule$.throwUninitializedPropertyAccessException;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var getNumberHashCode = kotlin_kotlin.$crossModule$.getNumberHashCode;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
  var to = kotlin_kotlin.$crossModule$.to;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  var Exception_init_$Init$ = kotlin_kotlin.$crossModule$.Exception_init_$Init$;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var setOf = kotlin_kotlin.$crossModule$.setOf;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var Triple = kotlin_kotlin.$crossModule$.Triple;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$;
  var noWhenBranchMatchedException = kotlin_kotlin.$crossModule$.noWhenBranchMatchedException;
  var collectionSizeOrDefault = kotlin_kotlin.$crossModule$.collectionSizeOrDefault;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$;
  var zip = kotlin_kotlin.$crossModule$.zip;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$crossModule$.RuntimeException_init_$Create$;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501;
  var listOf = kotlin_kotlin.$crossModule$.listOf;
  var Pair = kotlin_kotlin.$crossModule$.Pair;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var checkIndexOverflow = kotlin_kotlin.$crossModule$.checkIndexOverflow;
  var addAll = kotlin_kotlin.$crossModule$.addAll;
  var last = kotlin_kotlin.$crossModule$.last;
  var plus = kotlin_kotlin.$crossModule$.plus;
  var drop = kotlin_kotlin.$crossModule$.drop_1;
  var startsWith$default = kotlin_kotlin.$crossModule$.startsWith$default;
  var toDouble = kotlin_kotlin.$crossModule$.toDouble;
  var Regex_init_$Create$ = kotlin_kotlin.$crossModule$.Regex_init_$Create$;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default;
  var trimMargin$default = kotlin_kotlin.$crossModule$.trimMargin$default;
  var toString = kotlin_kotlin.$crossModule$.toString;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$;
  var drop_0 = kotlin_kotlin.$crossModule$.drop;
  var chunked = kotlin_kotlin.$crossModule$.chunked;
  var Collection = kotlin_kotlin.$crossModule$.Collection;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var emptyList = kotlin_kotlin.$crossModule$.emptyList;
  //endregion
  'use strict';
  //region block: pre-declaration
  Declaration.prototype = Object.create(AbstractSyntaxNode.prototype);
  Declaration.prototype.constructor = Declaration;
  VarDeclaration.prototype = Object.create(Declaration.prototype);
  VarDeclaration.prototype.constructor = VarDeclaration;
  Statement.prototype = Object.create(Declaration.prototype);
  Statement.prototype.constructor = Statement;
  ReturnStatement.prototype = Object.create(Statement.prototype);
  ReturnStatement.prototype.constructor = ReturnStatement;
  IfStatement.prototype = Object.create(Statement.prototype);
  IfStatement.prototype.constructor = IfStatement;
  WhileStatement.prototype = Object.create(Statement.prototype);
  WhileStatement.prototype.constructor = WhileStatement;
  ForStatement.prototype = Object.create(Statement.prototype);
  ForStatement.prototype.constructor = ForStatement;
  PrintStatement.prototype = Object.create(Statement.prototype);
  PrintStatement.prototype.constructor = PrintStatement;
  ExpressionStatement.prototype = Object.create(Statement.prototype);
  ExpressionStatement.prototype.constructor = ExpressionStatement;
  BlockStatement.prototype = Object.create(Statement.prototype);
  BlockStatement.prototype.constructor = BlockStatement;
  Expression.prototype = Object.create(AbstractSyntaxNode.prototype);
  Expression.prototype.constructor = Expression;
  Value.prototype = Object.create(Expression.prototype);
  Value.prototype.constructor = Value;
  NilValue.prototype = Object.create(Value.prototype);
  NilValue.prototype.constructor = NilValue;
  BooleanValue.prototype = Object.create(Value.prototype);
  BooleanValue.prototype.constructor = BooleanValue;
  NumericValue.prototype = Object.create(Value.prototype);
  NumericValue.prototype.constructor = NumericValue;
  StringValue.prototype = Object.create(Value.prototype);
  StringValue.prototype.constructor = StringValue;
  ObjectValue.prototype = Object.create(Value.prototype);
  ObjectValue.prototype.constructor = ObjectValue;
  FunctionValue.prototype = Object.create(Value.prototype);
  FunctionValue.prototype.constructor = FunctionValue;
  LoxFunctionValue.prototype = Object.create(FunctionValue.prototype);
  LoxFunctionValue.prototype.constructor = LoxFunctionValue;
  NativeFunctionValue.prototype = Object.create(FunctionValue.prototype);
  NativeFunctionValue.prototype.constructor = NativeFunctionValue;
  FunctionCallExpression.prototype = Object.create(Expression.prototype);
  FunctionCallExpression.prototype.constructor = FunctionCallExpression;
  AssignmentExpression.prototype = Object.create(Expression.prototype);
  AssignmentExpression.prototype.constructor = AssignmentExpression;
  UnaryOperatorExpression.prototype = Object.create(Expression.prototype);
  UnaryOperatorExpression.prototype.constructor = UnaryOperatorExpression;
  BinaryOperatorExpression.prototype = Object.create(Expression.prototype);
  BinaryOperatorExpression.prototype.constructor = BinaryOperatorExpression;
  IdentifierExpression.prototype = Object.create(Expression.prototype);
  IdentifierExpression.prototype.constructor = IdentifierExpression;
  OperatorType.prototype = Object.create(Enum.prototype);
  OperatorType.prototype.constructor = OperatorType;
  EvaluationException.prototype = Object.create(Exception.prototype);
  EvaluationException.prototype.constructor = EvaluationException;
  Nothing.prototype = Object.create(ExecutionResult.prototype);
  Nothing.prototype.constructor = Nothing;
  Return.prototype = Object.create(ExecutionResult.prototype);
  Return.prototype.constructor = Return;
  UnmatchedLexerToken.prototype = Object.create(LexerToken.prototype);
  UnmatchedLexerToken.prototype.constructor = UnmatchedLexerToken;
  EOFLexerToken.prototype = Object.create(LexerToken.prototype);
  EOFLexerToken.prototype.constructor = EOFLexerToken;
  LeftParenLexerToken.prototype = Object.create(LexerToken.prototype);
  LeftParenLexerToken.prototype.constructor = LeftParenLexerToken;
  RightParenLexerToken.prototype = Object.create(LexerToken.prototype);
  RightParenLexerToken.prototype.constructor = RightParenLexerToken;
  LeftBraceLexerToken.prototype = Object.create(LexerToken.prototype);
  LeftBraceLexerToken.prototype.constructor = LeftBraceLexerToken;
  RightBraceLexerToken.prototype = Object.create(LexerToken.prototype);
  RightBraceLexerToken.prototype.constructor = RightBraceLexerToken;
  CommaLexerToken.prototype = Object.create(LexerToken.prototype);
  CommaLexerToken.prototype.constructor = CommaLexerToken;
  DotLexerToken.prototype = Object.create(LexerToken.prototype);
  DotLexerToken.prototype.constructor = DotLexerToken;
  MinusLexerToken.prototype = Object.create(LexerToken.prototype);
  MinusLexerToken.prototype.constructor = MinusLexerToken;
  PlusLexerToken.prototype = Object.create(LexerToken.prototype);
  PlusLexerToken.prototype.constructor = PlusLexerToken;
  SemicolonLexerToken.prototype = Object.create(LexerToken.prototype);
  SemicolonLexerToken.prototype.constructor = SemicolonLexerToken;
  SlashLexerToken.prototype = Object.create(LexerToken.prototype);
  SlashLexerToken.prototype.constructor = SlashLexerToken;
  StarLexerToken.prototype = Object.create(LexerToken.prototype);
  StarLexerToken.prototype.constructor = StarLexerToken;
  BangLexerToken.prototype = Object.create(LexerToken.prototype);
  BangLexerToken.prototype.constructor = BangLexerToken;
  BangEqualLexerToken.prototype = Object.create(LexerToken.prototype);
  BangEqualLexerToken.prototype.constructor = BangEqualLexerToken;
  EqualLexerToken.prototype = Object.create(LexerToken.prototype);
  EqualLexerToken.prototype.constructor = EqualLexerToken;
  EqualEqualLexerToken.prototype = Object.create(LexerToken.prototype);
  EqualEqualLexerToken.prototype.constructor = EqualEqualLexerToken;
  GreaterLexerToken.prototype = Object.create(LexerToken.prototype);
  GreaterLexerToken.prototype.constructor = GreaterLexerToken;
  GreaterEqualLexerToken.prototype = Object.create(LexerToken.prototype);
  GreaterEqualLexerToken.prototype.constructor = GreaterEqualLexerToken;
  LessLexerToken.prototype = Object.create(LexerToken.prototype);
  LessLexerToken.prototype.constructor = LessLexerToken;
  LessEqualLexerToken.prototype = Object.create(LexerToken.prototype);
  LessEqualLexerToken.prototype.constructor = LessEqualLexerToken;
  IdentifierLexerToken.prototype = Object.create(LexerToken.prototype);
  IdentifierLexerToken.prototype.constructor = IdentifierLexerToken;
  StringLiteralLexerToken.prototype = Object.create(LexerToken.prototype);
  StringLiteralLexerToken.prototype.constructor = StringLiteralLexerToken;
  NumberLiteralLexerToken.prototype = Object.create(LexerToken.prototype);
  NumberLiteralLexerToken.prototype.constructor = NumberLiteralLexerToken;
  AndLexerToken.prototype = Object.create(LexerToken.prototype);
  AndLexerToken.prototype.constructor = AndLexerToken;
  ClassLexerToken.prototype = Object.create(LexerToken.prototype);
  ClassLexerToken.prototype.constructor = ClassLexerToken;
  ElseLexerToken.prototype = Object.create(LexerToken.prototype);
  ElseLexerToken.prototype.constructor = ElseLexerToken;
  FalseLexerToken.prototype = Object.create(LexerToken.prototype);
  FalseLexerToken.prototype.constructor = FalseLexerToken;
  FunLexerToken.prototype = Object.create(LexerToken.prototype);
  FunLexerToken.prototype.constructor = FunLexerToken;
  ForLexerToken.prototype = Object.create(LexerToken.prototype);
  ForLexerToken.prototype.constructor = ForLexerToken;
  IfLexerToken.prototype = Object.create(LexerToken.prototype);
  IfLexerToken.prototype.constructor = IfLexerToken;
  NilLexerToken.prototype = Object.create(LexerToken.prototype);
  NilLexerToken.prototype.constructor = NilLexerToken;
  OrLexerToken.prototype = Object.create(LexerToken.prototype);
  OrLexerToken.prototype.constructor = OrLexerToken;
  PrintLexerToken.prototype = Object.create(LexerToken.prototype);
  PrintLexerToken.prototype.constructor = PrintLexerToken;
  ReturnLexerToken.prototype = Object.create(LexerToken.prototype);
  ReturnLexerToken.prototype.constructor = ReturnLexerToken;
  SuperLexerToken.prototype = Object.create(LexerToken.prototype);
  SuperLexerToken.prototype.constructor = SuperLexerToken;
  ThisLexerToken.prototype = Object.create(LexerToken.prototype);
  ThisLexerToken.prototype.constructor = ThisLexerToken;
  TrueLexerToken.prototype = Object.create(LexerToken.prototype);
  TrueLexerToken.prototype.constructor = TrueLexerToken;
  VarLexerToken.prototype = Object.create(LexerToken.prototype);
  VarLexerToken.prototype.constructor = VarLexerToken;
  WhileLexerToken.prototype = Object.create(LexerToken.prototype);
  WhileLexerToken.prototype.constructor = WhileLexerToken;
  SymbolicToken.prototype = Object.create(ParserToken.prototype);
  SymbolicToken.prototype.constructor = SymbolicToken;
  NodeToken.prototype = Object.create(ParserToken.prototype);
  NodeToken.prototype.constructor = NodeToken;
  CompositeToken.prototype = Object.create(ParserToken.prototype);
  CompositeToken.prototype.constructor = CompositeToken;
  ProgramToken.prototype = Object.create(ParserToken.prototype);
  ProgramToken.prototype.constructor = ProgramToken;
  OptionalToken.prototype = Object.create(ParserToken.prototype);
  OptionalToken.prototype.constructor = OptionalToken;
  Matched.prototype = Object.create(MatchResult.prototype);
  Matched.prototype.constructor = Matched;
  Unmatched.prototype = Object.create(MatchResult.prototype);
  Unmatched.prototype.constructor = Unmatched;
  //endregion
  function Printer() {
  }
  Printer.$metadata$ = {
    simpleName: 'Printer',
    kind: 'interface',
    interfaces: []
  };
  function _get_codeMirror__2572497407() {
    var tmp = codeMirror;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('codeMirror');
    }
  }
  var codeMirror;
  function _get_mainPrinter__3116406160() {
    var tmp = mainPrinter;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('mainPrinter');
    }
  }
  var mainPrinter;
  function main() {
    //require('codemirror/mode/clike/clike.js');
    var tmp$ret$0;
    $l$block: {
      var tmp = document.createElement('textarea');
      var tmp0_apply_0 = tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
      {
      }
      {
        tmp0_apply_0.name = 'code';
        tmp0_apply_0.id = 'code';
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    var textArea = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp_0 = document.createElement('button');
      var tmp1_apply_0 = tmp_0 instanceof HTMLButtonElement ? tmp_0 : THROW_CCE();
      {
      }
      {
        tmp1_apply_0.name = 'test';
        tmp1_apply_0.value = 'anotherTest';
        tmp1_apply_0.innerHTML = 'Run';
        tmp1_apply_0.onclick = main$lambda();
        tmp1_apply_0.style.display = 'block';
      }
      tmp$ret$1 = tmp1_apply_0;
      break $l$block_0;
    }
    var button = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      var tmp_1 = document.createElement('div');
      var tmp2_apply_0 = tmp_1 instanceof HTMLDivElement ? tmp_1 : THROW_CCE();
      {
      }
      {
        tmp2_apply_0.innerHTML = 'Output';
      }
      tmp$ret$2 = tmp2_apply_0;
      break $l$block_1;
    }
    var result = tmp$ret$2;
    mainPrinter = new main$1(result);
    var tmp0_safe_receiver = document.body;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.appendChild(textArea);
    Unit_getInstance();
    var tmp1_safe_receiver = document.body;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.appendChild(button);
    Unit_getInstance();
    var tmp2_safe_receiver = document.body;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.appendChild(result);
    Unit_getInstance();
    ensureNotNull(document.body).style.fontSize = '16px';
    codeMirror = CodeMirror.fromTextArea(textArea);
    _get_codeMirror__2572497407().setOption('lineNumbers', true);
    _get_codeMirror__2572497407().setOption('mode', 'text/x-kotlin');
    _get_codeMirror__2572497407().setSize('100%', '100%');
    _get_codeMirror__2572497407().setValue('fun fib(n) {\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n - 2);\n}\n\nvar before = clock();\nprint fib(20);\nvar after = clock();\nprint after - before;');
  }
  function main$lambda() {
    return function (it) {
      var tmp;
      try {
        _get_mainPrinter__3116406160().clear_j9y8zo_k$();
        interpret(_get_codeMirror__2572497407().getValue());
        tmp = Unit_getInstance();
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Exception) {
          var tmp0_safe_receiver_4 = $p.message;
          var tmp_1;
          if (tmp0_safe_receiver_4 == null) {
            tmp_1 = null;
          } else {
            var tmp$ret$0;
            $l$block: {
              {
              }
              tmp$ret$0 = _get_mainPrinter__3116406160().print_mp71d1_k$(tmp0_safe_receiver_4);
              break $l$block;
            }
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        } else {
          {
            throw $p;
          }
        }
        tmp = tmp_0;
      }
      return tmp;
    };
  }
  function main$1($result) {
    this.$result_1 = $result;
    this.contents_1 = '';
  }
  main$1.prototype.clear_j9y8zo_k$ = function () {
    this.contents_1 = '';
    this.$result_1.innerHTML = this.contents_1;
  };
  main$1.prototype.print_mp71d1_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNotEmpty_0 = this.contents_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty_0) > 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      var tmp0_this = this;
      tmp0_this.contents_1 = tmp0_this.contents_1 + '<br>';
    } else {
    }
    var tmp1_this = this;
    tmp1_this.contents_1 = tmp1_this.contents_1 + value;
    this.$result_1.innerHTML = this.contents_1;
  };
  main$1.$metadata$ = {
    kind: 'class',
    interfaces: [Printer]
  };
  function AbstractSyntaxNode() {
  }
  AbstractSyntaxNode.$metadata$ = {
    simpleName: 'AbstractSyntaxNode',
    kind: 'class',
    interfaces: []
  };
  function Declaration() {
    AbstractSyntaxNode.call(this);
  }
  Declaration.$metadata$ = {
    simpleName: 'Declaration',
    kind: 'class',
    interfaces: []
  };
  function VarDeclaration(identifier, value) {
    Declaration.call(this);
    this.identifier_1 = identifier;
    this.value_1 = value;
  }
  VarDeclaration.prototype._get_identifier__3776854274_8kgyke_k$ = function () {
    return this.identifier_1;
  };
  VarDeclaration.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  VarDeclaration.prototype.toString = function () {
    return 'VarDeclaration(identifier=' + this.identifier_1 + ', value=' + this.value_1 + ')';
  };
  VarDeclaration.prototype.hashCode = function () {
    var result = this.identifier_1.hashCode();
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  VarDeclaration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VarDeclaration))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof VarDeclaration ? other : THROW_CCE();
    if (!this.identifier_1.equals(tmp0_other_with_cast.identifier_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  VarDeclaration.$metadata$ = {
    simpleName: 'VarDeclaration',
    kind: 'class',
    interfaces: []
  };
  function Statement() {
    Declaration.call(this);
  }
  Statement.$metadata$ = {
    simpleName: 'Statement',
    kind: 'class',
    interfaces: []
  };
  function ReturnStatement(expr) {
    Statement.call(this);
    this.expr_1 = expr;
  }
  ReturnStatement.prototype._get_expr__796545782_d68qnq_k$ = function () {
    return this.expr_1;
  };
  ReturnStatement.prototype.toString = function () {
    return 'ReturnStatement(expr=' + this.expr_1 + ')';
  };
  ReturnStatement.prototype.hashCode = function () {
    return hashCode(this.expr_1);
  };
  ReturnStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReturnStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ReturnStatement ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  ReturnStatement.$metadata$ = {
    simpleName: 'ReturnStatement',
    kind: 'class',
    interfaces: []
  };
  function IfStatement(condition, body, elseBody) {
    Statement.call(this);
    this.condition_1 = condition;
    this.body_1 = body;
    this.elseBody_1 = elseBody;
  }
  IfStatement.prototype._get_condition__2056333462_y0ad1y_k$ = function () {
    return this.condition_1;
  };
  IfStatement.prototype._get_body__793495785_d4fd9l_k$ = function () {
    return this.body_1;
  };
  IfStatement.prototype._get_elseBody__502126768_8aybhs_k$ = function () {
    return this.elseBody_1;
  };
  IfStatement.prototype.toString = function () {
    return 'IfStatement(condition=' + this.condition_1 + ', body=' + this.body_1 + ', elseBody=' + this.elseBody_1 + ')';
  };
  IfStatement.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    result = imul(result, 31) + (this.elseBody_1 == null ? 0 : hashCode(this.elseBody_1)) | 0;
    return result;
  };
  IfStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IfStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IfStatement ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.elseBody_1, tmp0_other_with_cast.elseBody_1))
      return false;
    return true;
  };
  IfStatement.$metadata$ = {
    simpleName: 'IfStatement',
    kind: 'class',
    interfaces: []
  };
  function WhileStatement(condition, body) {
    Statement.call(this);
    this.condition_1 = condition;
    this.body_1 = body;
  }
  WhileStatement.prototype._get_condition__2056333462_y0ad1y_k$ = function () {
    return this.condition_1;
  };
  WhileStatement.prototype._get_body__793495785_d4fd9l_k$ = function () {
    return this.body_1;
  };
  WhileStatement.prototype.toString = function () {
    return 'WhileStatement(condition=' + this.condition_1 + ', body=' + this.body_1 + ')';
  };
  WhileStatement.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  WhileStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhileStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof WhileStatement ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  WhileStatement.$metadata$ = {
    simpleName: 'WhileStatement',
    kind: 'class',
    interfaces: []
  };
  function ForStatement_init_$Init$(initializer, condition, increment, body, $this) {
    ForStatement.call($this, initializer instanceof Declaration ? initializer : null, condition, increment, body);
    return $this;
  }
  function ForStatement_init_$Create$(initializer, condition, increment, body) {
    return ForStatement_init_$Init$(initializer, condition, increment, body, Object.create(ForStatement.prototype));
  }
  function ForStatement_init_$Init$_0(initializer, condition, increment, body, $this) {
    ForStatement.call($this, initializer instanceof Declaration ? initializer : null, condition, increment, body);
    return $this;
  }
  function ForStatement_init_$Create$_0(initializer, condition, increment, body) {
    return ForStatement_init_$Init$_0(initializer, condition, increment, body, Object.create(ForStatement.prototype));
  }
  function ForStatement(initializer, condition, increment, body) {
    Statement.call(this);
    this.initializer_1 = initializer;
    this.condition_1 = condition;
    this.increment_1 = increment;
    this.body_1 = body;
  }
  ForStatement.prototype._get_initializer__1254092527_kqnjzj_k$ = function () {
    return this.initializer_1;
  };
  ForStatement.prototype._get_condition__2056333462_y0ad1y_k$ = function () {
    return this.condition_1;
  };
  ForStatement.prototype._get_increment__112710850_1v3s8y_k$ = function () {
    return this.increment_1;
  };
  ForStatement.prototype._get_body__793495785_d4fd9l_k$ = function () {
    return this.body_1;
  };
  ForStatement.prototype.toString = function () {
    return 'ForStatement(initializer=' + this.initializer_1 + ', condition=' + this.condition_1 + ', increment=' + this.increment_1 + ', body=' + this.body_1 + ')';
  };
  ForStatement.prototype.hashCode = function () {
    var result = this.initializer_1 == null ? 0 : hashCode(this.initializer_1);
    result = imul(result, 31) + (this.condition_1 == null ? 0 : hashCode(this.condition_1)) | 0;
    result = imul(result, 31) + (this.increment_1 == null ? 0 : hashCode(this.increment_1)) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  ForStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ForStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ForStatement ? other : THROW_CCE();
    if (!equals(this.initializer_1, tmp0_other_with_cast.initializer_1))
      return false;
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.increment_1, tmp0_other_with_cast.increment_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  ForStatement.$metadata$ = {
    simpleName: 'ForStatement',
    kind: 'class',
    interfaces: []
  };
  function PrintStatement(expr) {
    Statement.call(this);
    this.expr_1 = expr;
  }
  PrintStatement.prototype._get_expr__796545782_d68qnq_k$ = function () {
    return this.expr_1;
  };
  PrintStatement.prototype.toString = function () {
    return 'PrintStatement(expr=' + this.expr_1 + ')';
  };
  PrintStatement.prototype.hashCode = function () {
    return hashCode(this.expr_1);
  };
  PrintStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrintStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PrintStatement ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  PrintStatement.$metadata$ = {
    simpleName: 'PrintStatement',
    kind: 'class',
    interfaces: []
  };
  function ExpressionStatement(expr) {
    Statement.call(this);
    this.expr_1 = expr;
  }
  ExpressionStatement.prototype._get_expr__796545782_d68qnq_k$ = function () {
    return this.expr_1;
  };
  ExpressionStatement.prototype.toString = function () {
    return 'ExpressionStatement(expr=' + this.expr_1 + ')';
  };
  ExpressionStatement.prototype.hashCode = function () {
    return hashCode(this.expr_1);
  };
  ExpressionStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpressionStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExpressionStatement ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  ExpressionStatement.$metadata$ = {
    simpleName: 'ExpressionStatement',
    kind: 'class',
    interfaces: []
  };
  function BlockStatement(declarations) {
    Statement.call(this);
    this.declarations_1 = declarations;
  }
  BlockStatement.prototype._get_declarations__260996658_4be2b6_k$ = function () {
    return this.declarations_1;
  };
  BlockStatement.prototype.toString = function () {
    return 'BlockStatement(declarations=' + this.declarations_1 + ')';
  };
  BlockStatement.prototype.hashCode = function () {
    return hashCode(this.declarations_1);
  };
  BlockStatement.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockStatement))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BlockStatement ? other : THROW_CCE();
    if (!equals(this.declarations_1, tmp0_other_with_cast.declarations_1))
      return false;
    return true;
  };
  BlockStatement.$metadata$ = {
    simpleName: 'BlockStatement',
    kind: 'class',
    interfaces: []
  };
  function _get_operatorMapping__1592820167() {
    init_properties_Expressions_kt_3704108793();
    return operatorMapping;
  }
  var operatorMapping;
  function Expression() {
    AbstractSyntaxNode.call(this);
  }
  Expression.$metadata$ = {
    simpleName: 'Expression',
    kind: 'class',
    interfaces: []
  };
  function Value() {
    Expression.call(this);
  }
  Value.$metadata$ = {
    simpleName: 'Value',
    kind: 'class',
    interfaces: []
  };
  function NilValue() {
    NilValue_instance = this;
    Value.call(this);
  }
  NilValue.$metadata$ = {
    simpleName: 'NilValue',
    kind: 'object',
    interfaces: []
  };
  var NilValue_instance;
  function NilValue_getInstance() {
    if (NilValue_instance == null)
      new NilValue();
    return NilValue_instance;
  }
  function BooleanValue(value) {
    Value.call(this);
    this.value_1 = value;
  }
  BooleanValue.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  BooleanValue.prototype.toString = function () {
    return 'BooleanValue(value=' + this.value_1 + ')';
  };
  BooleanValue.prototype.hashCode = function () {
    return this.value_1 | 0;
  };
  BooleanValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BooleanValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BooleanValue ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  BooleanValue.$metadata$ = {
    simpleName: 'BooleanValue',
    kind: 'class',
    interfaces: []
  };
  function NumericValue(value) {
    Value.call(this);
    this.value_1 = value;
  }
  NumericValue.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  NumericValue.prototype.toString = function () {
    return 'NumericValue(value=' + this.value_1 + ')';
  };
  NumericValue.prototype.hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  NumericValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NumericValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof NumericValue ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  NumericValue.$metadata$ = {
    simpleName: 'NumericValue',
    kind: 'class',
    interfaces: []
  };
  function StringValue(value) {
    Value.call(this);
    this.value_1 = value;
  }
  StringValue.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  StringValue.prototype.toString = function () {
    return 'StringValue(value=' + this.value_1 + ')';
  };
  StringValue.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  StringValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StringValue ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  StringValue.$metadata$ = {
    simpleName: 'StringValue',
    kind: 'class',
    interfaces: []
  };
  function ObjectValue() {
  }
  ObjectValue.$metadata$ = {
    simpleName: 'ObjectValue',
    kind: 'object',
    interfaces: []
  };
  function FunctionValue(argNumber) {
    Value.call(this);
    this.argNumber_1 = argNumber;
  }
  FunctionValue.prototype._get_argNumber__4293816562_onwu_k$ = function () {
    return this.argNumber_1;
  };
  FunctionValue.$metadata$ = {
    simpleName: 'FunctionValue',
    kind: 'class',
    interfaces: []
  };
  function LoxFunctionValue(argNames, body) {
    FunctionValue.call(this, argNames._get_size__809037418_ddoh9m_k$());
    this.argNames_1 = argNames;
    this.body_1 = body;
  }
  LoxFunctionValue.prototype._get_argNames__2613895033_rsv7nr_k$ = function () {
    return this.argNames_1;
  };
  LoxFunctionValue.prototype._get_body__793495785_d4fd9l_k$ = function () {
    return this.body_1;
  };
  LoxFunctionValue.prototype.toString = function () {
    return 'LoxFunctionValue(args = ' + this.argNames_1 + ', body = ' + this.body_1 + ')';
  };
  LoxFunctionValue.prototype.hashCode = function () {
    var result = hashCode(this.argNames_1);
    result = imul(result, 31) + this.body_1.hashCode() | 0;
    return result;
  };
  LoxFunctionValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoxFunctionValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LoxFunctionValue ? other : THROW_CCE();
    if (!equals(this.argNames_1, tmp0_other_with_cast.argNames_1))
      return false;
    if (!this.body_1.equals(tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  LoxFunctionValue.$metadata$ = {
    simpleName: 'LoxFunctionValue',
    kind: 'class',
    interfaces: []
  };
  function NativeFunctionValue(name, argNumber, call) {
    FunctionValue.call(this, argNumber);
    this.name_1 = name;
    this.call_1 = call;
  }
  NativeFunctionValue.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  NativeFunctionValue.prototype._get_call__794009517_d4qdnx_k$ = function () {
    return this.call_1;
  };
  NativeFunctionValue.prototype.toString = function () {
    return 'NativeFunctionValue(name = ' + this.name_1 + ', argNumber = ' + this._get_argNumber__4293816562_onwu_k$() + ')';
  };
  NativeFunctionValue.$metadata$ = {
    simpleName: 'NativeFunctionValue',
    kind: 'class',
    interfaces: []
  };
  function FunctionCallExpression(function_0, arguments_0) {
    Expression.call(this);
    this.function_1 = function_0;
    this.arguments_1 = arguments_0;
  }
  FunctionCallExpression.prototype._get_function__1341261555_m6jw1f_k$ = function () {
    return this.function_1;
  };
  FunctionCallExpression.prototype._get_arguments__15705019_9cm2j_k$ = function () {
    return this.arguments_1;
  };
  FunctionCallExpression.prototype.toString = function () {
    return 'FunctionCallExpression(function=' + this.function_1 + ', arguments=' + this.arguments_1 + ')';
  };
  FunctionCallExpression.prototype.hashCode = function () {
    var result = hashCode(this.function_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  FunctionCallExpression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionCallExpression))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FunctionCallExpression ? other : THROW_CCE();
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  FunctionCallExpression.$metadata$ = {
    simpleName: 'FunctionCallExpression',
    kind: 'class',
    interfaces: []
  };
  function AssignmentExpression(identifier, expr) {
    Expression.call(this);
    this.identifier_1 = identifier;
    this.expr_1 = expr;
  }
  AssignmentExpression.prototype._get_identifier__3776854274_8kgyke_k$ = function () {
    return this.identifier_1;
  };
  AssignmentExpression.prototype._get_expr__796545782_d68qnq_k$ = function () {
    return this.expr_1;
  };
  AssignmentExpression.prototype.toString = function () {
    return 'AssignmentExpression(identifier=' + this.identifier_1 + ', expr=' + this.expr_1 + ')';
  };
  AssignmentExpression.prototype.hashCode = function () {
    var result = this.identifier_1.hashCode();
    result = imul(result, 31) + hashCode(this.expr_1) | 0;
    return result;
  };
  AssignmentExpression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssignmentExpression))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof AssignmentExpression ? other : THROW_CCE();
    if (!this.identifier_1.equals(tmp0_other_with_cast.identifier_1))
      return false;
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  AssignmentExpression.$metadata$ = {
    simpleName: 'AssignmentExpression',
    kind: 'class',
    interfaces: []
  };
  function UnaryOperatorExpression(operatorType, expr) {
    Expression.call(this);
    this.operatorType_1 = operatorType;
    this.expr_1 = expr;
  }
  UnaryOperatorExpression.prototype._get_operatorType__924874509_fan9ql_k$ = function () {
    return this.operatorType_1;
  };
  UnaryOperatorExpression.prototype._get_expr__796545782_d68qnq_k$ = function () {
    return this.expr_1;
  };
  UnaryOperatorExpression.prototype.toString = function () {
    return 'UnaryOperatorExpression(operatorType=' + this.operatorType_1 + ', expr=' + this.expr_1 + ')';
  };
  UnaryOperatorExpression.prototype.hashCode = function () {
    var result = this.operatorType_1.hashCode();
    result = imul(result, 31) + hashCode(this.expr_1) | 0;
    return result;
  };
  UnaryOperatorExpression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UnaryOperatorExpression))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UnaryOperatorExpression ? other : THROW_CCE();
    if (!this.operatorType_1.equals(tmp0_other_with_cast.operatorType_1))
      return false;
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  UnaryOperatorExpression.$metadata$ = {
    simpleName: 'UnaryOperatorExpression',
    kind: 'class',
    interfaces: []
  };
  function BinaryOperatorExpression(operatorType, lhs, rhs) {
    Expression.call(this);
    this.operatorType_1 = operatorType;
    this.lhs_1 = lhs;
    this.rhs_1 = rhs;
  }
  BinaryOperatorExpression.prototype._get_operatorType__924874509_fan9ql_k$ = function () {
    return this.operatorType_1;
  };
  BinaryOperatorExpression.prototype._get_lhs__857172218_e6c6be_k$ = function () {
    return this.lhs_1;
  };
  BinaryOperatorExpression.prototype._get_rhs__857350964_e6g08k_k$ = function () {
    return this.rhs_1;
  };
  BinaryOperatorExpression.prototype.toString = function () {
    return 'BinaryOperatorExpression(operatorType=' + this.operatorType_1 + ', lhs=' + this.lhs_1 + ', rhs=' + this.rhs_1 + ')';
  };
  BinaryOperatorExpression.prototype.hashCode = function () {
    var result = this.operatorType_1.hashCode();
    result = imul(result, 31) + hashCode(this.lhs_1) | 0;
    result = imul(result, 31) + hashCode(this.rhs_1) | 0;
    return result;
  };
  BinaryOperatorExpression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BinaryOperatorExpression))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BinaryOperatorExpression ? other : THROW_CCE();
    if (!this.operatorType_1.equals(tmp0_other_with_cast.operatorType_1))
      return false;
    if (!equals(this.lhs_1, tmp0_other_with_cast.lhs_1))
      return false;
    if (!equals(this.rhs_1, tmp0_other_with_cast.rhs_1))
      return false;
    return true;
  };
  BinaryOperatorExpression.$metadata$ = {
    simpleName: 'BinaryOperatorExpression',
    kind: 'class',
    interfaces: []
  };
  function IdentifierExpression(name) {
    Expression.call(this);
    this.name_1 = name;
  }
  IdentifierExpression.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  IdentifierExpression.prototype.toString = function () {
    return 'IdentifierExpression(name=' + this.name_1 + ')';
  };
  IdentifierExpression.prototype.hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  IdentifierExpression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IdentifierExpression))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IdentifierExpression ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  IdentifierExpression.$metadata$ = {
    simpleName: 'IdentifierExpression',
    kind: 'class',
    interfaces: []
  };
  var OperatorType_Bang_instance;
  var OperatorType_Plus_instance;
  var OperatorType_Minus_instance;
  var OperatorType_Star_instance;
  var OperatorType_Slash_instance;
  var OperatorType_Greater_instance;
  var OperatorType_GreaterEqual_instance;
  var OperatorType_Less_instance;
  var OperatorType_LessEqual_instance;
  var OperatorType_BangEqual_instance;
  var OperatorType_EqualEqual_instance;
  var OperatorType_Or_instance;
  var OperatorType_And_instance;
  var OperatorType_entriesInitialized;
  function OperatorType_initEntries() {
    if (OperatorType_entriesInitialized)
      return Unit_getInstance();
    OperatorType_entriesInitialized = true;
    OperatorType_Bang_instance = new OperatorType('Bang', 0);
    OperatorType_Plus_instance = new OperatorType('Plus', 1);
    OperatorType_Minus_instance = new OperatorType('Minus', 2);
    OperatorType_Star_instance = new OperatorType('Star', 3);
    OperatorType_Slash_instance = new OperatorType('Slash', 4);
    OperatorType_Greater_instance = new OperatorType('Greater', 5);
    OperatorType_GreaterEqual_instance = new OperatorType('GreaterEqual', 6);
    OperatorType_Less_instance = new OperatorType('Less', 7);
    OperatorType_LessEqual_instance = new OperatorType('LessEqual', 8);
    OperatorType_BangEqual_instance = new OperatorType('BangEqual', 9);
    OperatorType_EqualEqual_instance = new OperatorType('EqualEqual', 10);
    OperatorType_Or_instance = new OperatorType('Or', 11);
    OperatorType_And_instance = new OperatorType('And', 12);
  }
  function OperatorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  OperatorType.$metadata$ = {
    simpleName: 'OperatorType',
    kind: 'class',
    interfaces: []
  };
  function OperatorType_Bang_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Bang_instance;
  }
  function OperatorType_Plus_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Plus_instance;
  }
  function OperatorType_Minus_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Minus_instance;
  }
  function OperatorType_Star_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Star_instance;
  }
  function OperatorType_Slash_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Slash_instance;
  }
  function OperatorType_Greater_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Greater_instance;
  }
  function OperatorType_GreaterEqual_getInstance() {
    OperatorType_initEntries();
    return OperatorType_GreaterEqual_instance;
  }
  function OperatorType_Less_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Less_instance;
  }
  function OperatorType_LessEqual_getInstance() {
    OperatorType_initEntries();
    return OperatorType_LessEqual_instance;
  }
  function OperatorType_BangEqual_getInstance() {
    OperatorType_initEntries();
    return OperatorType_BangEqual_instance;
  }
  function OperatorType_EqualEqual_getInstance() {
    OperatorType_initEntries();
    return OperatorType_EqualEqual_instance;
  }
  function OperatorType_Or_getInstance() {
    OperatorType_initEntries();
    return OperatorType_Or_instance;
  }
  function OperatorType_And_getInstance() {
    OperatorType_initEntries();
    return OperatorType_And_instance;
  }
  var properties_initialized_Expressions_kt_1116722517;
  function init_properties_Expressions_kt_3704108793() {
    if (!properties_initialized_Expressions_kt_1116722517) {
      properties_initialized_Expressions_kt_1116722517 = true;
      operatorMapping = mapOf([to(getKClass(BangLexerToken), OperatorType_Bang_getInstance()), to(getKClass(PlusLexerToken), OperatorType_Plus_getInstance()), to(getKClass(MinusLexerToken), OperatorType_Minus_getInstance()), to(getKClass(StarLexerToken), OperatorType_Star_getInstance()), to(getKClass(SlashLexerToken), OperatorType_Slash_getInstance()), to(getKClass(GreaterLexerToken), OperatorType_Greater_getInstance()), to(getKClass(GreaterEqualLexerToken), OperatorType_GreaterEqual_getInstance()), to(getKClass(LessLexerToken), OperatorType_Less_getInstance()), to(getKClass(LessEqualLexerToken), OperatorType_LessEqual_getInstance()), to(getKClass(BangEqualLexerToken), OperatorType_BangEqual_getInstance()), to(getKClass(EqualEqualLexerToken), OperatorType_EqualEqual_getInstance()), to(getKClass(OrLexerToken), OperatorType_Or_getInstance()), to(getKClass(AndLexerToken), OperatorType_And_getInstance())]);
    }
  }
  function EvaluationException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, EvaluationException);
  }
  EvaluationException.$metadata$ = {
    simpleName: 'EvaluationException',
    kind: 'class',
    interfaces: []
  };
  function _get_binaryOperatorEvaluators__2389471010() {
    init_properties_BinaryOperator_kt_1731735413();
    return binaryOperatorEvaluators;
  }
  var binaryOperatorEvaluators;
  function evaluateBinaryOperatorExpression(expression, evaluationEnvironment) {
    init_properties_BinaryOperator_kt_1731735413();
    var operatorType = expression._get_operatorType__924874509_fan9ql_k$();
    if (setOf([OperatorType_And_getInstance(), OperatorType_Or_getInstance()]).contains_2ehdt1_k$(operatorType)) {
      return evaluateLogicalBinaryOperatorExpression(expression, evaluationEnvironment);
    }
    var lhs = evaluateExpression(expression._get_lhs__857172218_e6c6be_k$(), evaluationEnvironment);
    var rhs = evaluateExpression(expression._get_rhs__857350964_e6g08k_k$(), evaluationEnvironment);
    var signature = new Triple(operatorType, getKClassFromExpression(lhs), getKClassFromExpression(rhs));
    var tmp0_safe_receiver = _get_binaryOperatorEvaluators__2389471010().get_1mhr4y_k$(signature);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(lhs, rhs);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new EvaluationException('Invalid evaluation: could not find binary operator ' + ('' + operatorType + ' for ' + getKClassFromExpression(lhs) + ' and ' + getKClassFromExpression(rhs)));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function evaluateLogicalBinaryOperatorExpression(expression, evaluationEnvironment) {
    init_properties_BinaryOperator_kt_1731735413();
    var lhsResult = evaluateExpression(expression._get_lhs__857172218_e6c6be_k$(), evaluationEnvironment);
    validateRuntimeBoolean(lhsResult);
    var tmp;
    if ((expression._get_operatorType__924874509_fan9ql_k$().equals(OperatorType_Or_getInstance()) ? lhsResult._get_value__3683422336_a43j40_k$() : false) ? true : expression._get_operatorType__924874509_fan9ql_k$().equals(OperatorType_And_getInstance()) ? !lhsResult._get_value__3683422336_a43j40_k$() : false) {
      tmp = lhsResult;
    } else {
      var rhsResult = evaluateExpression(expression._get_rhs__857350964_e6g08k_k$(), evaluationEnvironment);
      validateRuntimeBoolean(rhsResult);
      tmp = rhsResult;
    }
    return tmp;
  }
  function add(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new NumericValue(lhs._get_value__3683422336_a43j40_k$() + rhs._get_value__3683422336_a43j40_k$());
  }
  function concatenate(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new StringValue(lhs._get_value__3683422336_a43j40_k$() + rhs._get_value__3683422336_a43j40_k$());
  }
  function subtract(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new NumericValue(lhs._get_value__3683422336_a43j40_k$() - rhs._get_value__3683422336_a43j40_k$());
  }
  function multiply(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new NumericValue(lhs._get_value__3683422336_a43j40_k$() * rhs._get_value__3683422336_a43j40_k$());
  }
  function divide(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new NumericValue(lhs._get_value__3683422336_a43j40_k$() / rhs._get_value__3683422336_a43j40_k$());
  }
  function compareLess(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new BooleanValue(lhs._get_value__3683422336_a43j40_k$() < rhs._get_value__3683422336_a43j40_k$());
  }
  function compareLessEqual(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new BooleanValue(lhs._get_value__3683422336_a43j40_k$() <= rhs._get_value__3683422336_a43j40_k$());
  }
  function compareGreater(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new BooleanValue(lhs._get_value__3683422336_a43j40_k$() > rhs._get_value__3683422336_a43j40_k$());
  }
  function compareGreaterEqual(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new BooleanValue(lhs._get_value__3683422336_a43j40_k$() >= rhs._get_value__3683422336_a43j40_k$());
  }
  function compareEqual(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new BooleanValue(lhs._get_value__3683422336_a43j40_k$() === rhs._get_value__3683422336_a43j40_k$());
  }
  function compareNotEqual(lhs, rhs) {
    init_properties_BinaryOperator_kt_1731735413();
    return new BooleanValue(!(lhs._get_value__3683422336_a43j40_k$() === rhs._get_value__3683422336_a43j40_k$()));
  }
  function binaryOperatorEvaluators$lambda() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return add(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_0() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return subtract(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_1() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return multiply(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_2() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return divide(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_3() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return compareLess(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_4() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return compareLessEqual(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_5() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return compareGreater(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_6() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return compareGreaterEqual(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_7() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return compareEqual(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_8() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof NumericValue) {
        tmp = rhs instanceof NumericValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return compareNotEqual(lhs, rhs);
    };
  }
  function binaryOperatorEvaluators$lambda_9() {
    return function (lhs, rhs) {
      var tmp;
      if (lhs instanceof StringValue) {
        tmp = rhs instanceof StringValue;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return concatenate(lhs, rhs);
    };
  }
  var properties_initialized_BinaryOperator_kt_2685248409;
  function init_properties_BinaryOperator_kt_1731735413() {
    if (!properties_initialized_BinaryOperator_kt_2685248409) {
      properties_initialized_BinaryOperator_kt_2685248409 = true;
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_numericalBinaryOperatorEvaluator_0 = OperatorType_Plus_getInstance();
        var tmp$ret$1;
        $l$block_0: {
          var tmp = new Triple(tmp0_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = binaryOperatorEvaluators$lambda();
            break $l$block;
          }
          tmp$ret$1 = to(tmp, tmp$ret$0);
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      var tmp_0 = tmp$ret$2;
      var tmp$ret$5;
      $l$block_4: {
        var tmp1_numericalBinaryOperatorEvaluator_0 = OperatorType_Minus_getInstance();
        var tmp$ret$4;
        $l$block_3: {
          var tmp_1 = new Triple(tmp1_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = binaryOperatorEvaluators$lambda_0();
            break $l$block_2;
          }
          tmp$ret$4 = to(tmp_1, tmp$ret$3);
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
      var tmp_2 = tmp$ret$5;
      var tmp$ret$8;
      $l$block_7: {
        var tmp2_numericalBinaryOperatorEvaluator_0 = OperatorType_Star_getInstance();
        var tmp$ret$7;
        $l$block_6: {
          var tmp_3 = new Triple(tmp2_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = binaryOperatorEvaluators$lambda_1();
            break $l$block_5;
          }
          tmp$ret$7 = to(tmp_3, tmp$ret$6);
          break $l$block_6;
        }
        tmp$ret$8 = tmp$ret$7;
        break $l$block_7;
      }
      var tmp_4 = tmp$ret$8;
      var tmp$ret$11;
      $l$block_10: {
        var tmp3_numericalBinaryOperatorEvaluator_0 = OperatorType_Slash_getInstance();
        var tmp$ret$10;
        $l$block_9: {
          var tmp_5 = new Triple(tmp3_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$9;
          $l$block_8: {
            tmp$ret$9 = binaryOperatorEvaluators$lambda_2();
            break $l$block_8;
          }
          tmp$ret$10 = to(tmp_5, tmp$ret$9);
          break $l$block_9;
        }
        tmp$ret$11 = tmp$ret$10;
        break $l$block_10;
      }
      var tmp_6 = tmp$ret$11;
      var tmp$ret$14;
      $l$block_13: {
        var tmp4_numericalBinaryOperatorEvaluator_0 = OperatorType_Less_getInstance();
        var tmp$ret$13;
        $l$block_12: {
          var tmp_7 = new Triple(tmp4_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$12;
          $l$block_11: {
            tmp$ret$12 = binaryOperatorEvaluators$lambda_3();
            break $l$block_11;
          }
          tmp$ret$13 = to(tmp_7, tmp$ret$12);
          break $l$block_12;
        }
        tmp$ret$14 = tmp$ret$13;
        break $l$block_13;
      }
      var tmp_8 = tmp$ret$14;
      var tmp$ret$17;
      $l$block_16: {
        var tmp5_numericalBinaryOperatorEvaluator_0 = OperatorType_LessEqual_getInstance();
        var tmp$ret$16;
        $l$block_15: {
          var tmp_9 = new Triple(tmp5_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$15;
          $l$block_14: {
            tmp$ret$15 = binaryOperatorEvaluators$lambda_4();
            break $l$block_14;
          }
          tmp$ret$16 = to(tmp_9, tmp$ret$15);
          break $l$block_15;
        }
        tmp$ret$17 = tmp$ret$16;
        break $l$block_16;
      }
      var tmp_10 = tmp$ret$17;
      var tmp$ret$20;
      $l$block_19: {
        var tmp6_numericalBinaryOperatorEvaluator_0 = OperatorType_Greater_getInstance();
        var tmp$ret$19;
        $l$block_18: {
          var tmp_11 = new Triple(tmp6_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$18;
          $l$block_17: {
            tmp$ret$18 = binaryOperatorEvaluators$lambda_5();
            break $l$block_17;
          }
          tmp$ret$19 = to(tmp_11, tmp$ret$18);
          break $l$block_18;
        }
        tmp$ret$20 = tmp$ret$19;
        break $l$block_19;
      }
      var tmp_12 = tmp$ret$20;
      var tmp$ret$23;
      $l$block_22: {
        var tmp7_numericalBinaryOperatorEvaluator_0 = OperatorType_GreaterEqual_getInstance();
        var tmp$ret$22;
        $l$block_21: {
          var tmp_13 = new Triple(tmp7_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$21;
          $l$block_20: {
            tmp$ret$21 = binaryOperatorEvaluators$lambda_6();
            break $l$block_20;
          }
          tmp$ret$22 = to(tmp_13, tmp$ret$21);
          break $l$block_21;
        }
        tmp$ret$23 = tmp$ret$22;
        break $l$block_22;
      }
      var tmp_14 = tmp$ret$23;
      var tmp$ret$26;
      $l$block_25: {
        var tmp8_numericalBinaryOperatorEvaluator_0 = OperatorType_EqualEqual_getInstance();
        var tmp$ret$25;
        $l$block_24: {
          var tmp_15 = new Triple(tmp8_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$24;
          $l$block_23: {
            tmp$ret$24 = binaryOperatorEvaluators$lambda_7();
            break $l$block_23;
          }
          tmp$ret$25 = to(tmp_15, tmp$ret$24);
          break $l$block_24;
        }
        tmp$ret$26 = tmp$ret$25;
        break $l$block_25;
      }
      var tmp_16 = tmp$ret$26;
      var tmp$ret$29;
      $l$block_28: {
        var tmp9_numericalBinaryOperatorEvaluator_0 = OperatorType_BangEqual_getInstance();
        var tmp$ret$28;
        $l$block_27: {
          var tmp_17 = new Triple(tmp9_numericalBinaryOperatorEvaluator_0, getKClass(NumericValue), getKClass(NumericValue));
          var tmp$ret$27;
          $l$block_26: {
            tmp$ret$27 = binaryOperatorEvaluators$lambda_8();
            break $l$block_26;
          }
          tmp$ret$28 = to(tmp_17, tmp$ret$27);
          break $l$block_27;
        }
        tmp$ret$29 = tmp$ret$28;
        break $l$block_28;
      }
      var tmp_18 = tmp$ret$29;
      var tmp$ret$31;
      $l$block_30: {
        var tmp10_sameTypeBinaryOperatorEvaluator_0 = OperatorType_Plus_getInstance();
        var tmp_19 = new Triple(tmp10_sameTypeBinaryOperatorEvaluator_0, getKClass(StringValue), getKClass(StringValue));
        var tmp$ret$30;
        $l$block_29: {
          tmp$ret$30 = binaryOperatorEvaluators$lambda_9();
          break $l$block_29;
        }
        tmp$ret$31 = to(tmp_19, tmp$ret$30);
        break $l$block_30;
      }
      binaryOperatorEvaluators = mapOf([tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, tmp_10, tmp_12, tmp_14, tmp_16, tmp_18, tmp$ret$31]);
    }
  }
  function Environment_init_$Init$($this) {
    Environment.call($this, null);
    return $this;
  }
  function Environment_init_$Create$() {
    return Environment_init_$Init$(Object.create(Environment.prototype));
  }
  function Environment(parentEnvironment) {
    this.parentEnvironment_1 = parentEnvironment;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp.variables_1 = tmp$ret$0;
  }
  Environment.prototype.createVariable_mm4ah5_k$ = function (name, value) {
    {
      var tmp0_set_0 = this.variables_1;
      tmp0_set_0.put_3mhbri_k$(name, value);
      Unit_getInstance();
    }
  };
  Environment.prototype.assignVariable_748qfe_k$ = function (name, value) {
    if (this.variables_1.containsKey_wgk31w_k$(name)) {
      {
        var tmp0_set_0 = this.variables_1;
        tmp0_set_0.put_3mhbri_k$(name, value);
        Unit_getInstance();
      }
    } else if (!(this.parentEnvironment_1 == null)) {
      this.parentEnvironment_1.assignVariable_748qfe_k$(name, value);
    } else {
      throw new EvaluationException('Undefined variable: ' + name._get_name__804168992_das4rk_k$());
    }
  };
  Environment.prototype.getVariableValue_xsgkkz_k$ = function (name) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_getOrElse_0 = this.variables_1;
      var tmp0_elvis_lhs_1 = tmp0_getOrElse_0.get_1mhr4y_k$(name);
      var tmp;
      if (tmp0_elvis_lhs_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_safe_receiver_4 = this.parentEnvironment_1;
          var tmp1_elvis_lhs_3 = tmp0_safe_receiver_4 == null ? null : tmp0_safe_receiver_4.getVariableValue_xsgkkz_k$(name);
          var tmp_0;
          if (tmp1_elvis_lhs_3 == null) {
            throw new EvaluationException('Undefined variable: ' + name._get_name__804168992_das4rk_k$());
          } else {
            tmp_0 = tmp1_elvis_lhs_3;
          }
          tmp$ret$0 = tmp_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs_1;
      }
      tmp$ret$1 = tmp;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Environment.$metadata$ = {
    simpleName: 'Environment',
    kind: 'class',
    interfaces: []
  };
  function evaluateExpression(expr, evaluationEnvironment) {
    var tmp0_subject = expr;
    var tmp;
    if (tmp0_subject instanceof Value) {
      tmp = expr;
    } else {
      if (tmp0_subject instanceof IdentifierExpression) {
        tmp = evaluationEnvironment.getVariableValue_xsgkkz_k$(expr);
      } else {
        if (tmp0_subject instanceof UnaryOperatorExpression) {
          tmp = evaluateUnaryOperatorExpression(expr, evaluationEnvironment);
        } else {
          if (tmp0_subject instanceof BinaryOperatorExpression) {
            tmp = evaluateBinaryOperatorExpression(expr, evaluationEnvironment);
          } else {
            if (tmp0_subject instanceof AssignmentExpression) {
              tmp = evaluateAssignmentExpression(expr, evaluationEnvironment);
            } else {
              if (tmp0_subject instanceof FunctionCallExpression) {
                tmp = evaluateFunctionCallExpression(expr, evaluationEnvironment);
              } else {
                {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function evaluateFunctionCallExpression(expr, evaluationEnvironment) {
    var functionValue = evaluateExpression(expr._get_function__1341261555_m6jw1f_k$(), evaluationEnvironment);
    var tmp = functionValue instanceof FunctionValue;
    validateRuntime(tmp, evaluateFunctionCallExpression$lambda(functionValue));
    var tmp_0 = functionValue._get_argNumber__4293816562_onwu_k$() === expr._get_arguments__15705019_9cm2j_k$()._get_size__809037418_ddoh9m_k$();
    validateRuntime(tmp_0, evaluateFunctionCallExpression$lambda_0(functionValue, expr));
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = expr._get_arguments__15705019_9cm2j_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = evaluateExpression(item_2_3, evaluationEnvironment);
            break $l$block;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var argumentValues = tmp$ret$2;
    var tmp0_subject = functionValue;
    var tmp_1;
    if (tmp0_subject instanceof LoxFunctionValue) {
      tmp_1 = callLoxFunction(functionValue, argumentValues, evaluationEnvironment);
    } else {
      if (tmp0_subject instanceof NativeFunctionValue) {
        tmp_1 = functionValue._get_call__794009517_d4qdnx_k$()(argumentValues);
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp_1;
  }
  function callLoxFunction(functionValue, argumentValues, evaluationEnvironment) {
    var functionEnvironment = new Environment(evaluationEnvironment);
    {
      var tmp$ret$0;
      $l$block: {
        var tmp0_let = functionValue._get_argNames__2613895033_rsv7nr_k$();
        {
        }
        tmp$ret$0 = zip(tmp0_let, argumentValues);
        break $l$block;
      }
      var tmp1_forEach_0 = tmp$ret$0;
      var tmp0_iterator_1 = tmp1_forEach_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var argName_4 = element_2.component1_7eebsc_k$();
          var argValue_5 = element_2.component2_7eebsb_k$();
          functionEnvironment.createVariable_mm4ah5_k$(argName_4, argValue_5);
        }
      }
    }
    var result = executeBlockStatement(functionValue._get_body__793495785_d4fd9l_k$(), functionEnvironment);
    var tmp;
    if (result instanceof Nothing) {
      tmp = NilValue_getInstance();
    } else {
      if (result instanceof Return) {
        tmp = result._get_value__3683422336_a43j40_k$();
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function evaluateAssignmentExpression(expr, evaluationEnvironment) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = evaluateExpression(expr._get_expr__796545782_d68qnq_k$(), evaluationEnvironment);
      {
      }
      {
        evaluationEnvironment.assignVariable_748qfe_k$(expr._get_identifier__3776854274_8kgyke_k$(), tmp0_also_0);
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function evaluateFunctionCallExpression$lambda($functionValue) {
    return function () {
      return 'Cannot call expression of type ' + getKClassFromExpression($functionValue);
    };
  }
  function evaluateFunctionCallExpression$lambda_0($functionValue, $expr) {
    return function () {
      return 'Expected ' + $functionValue._get_argNumber__4293816562_onwu_k$() + ' arguments, but got ' + $expr._get_arguments__15705019_9cm2j_k$()._get_size__809037418_ddoh9m_k$();
    };
  }
  function ExecutionResult() {
  }
  ExecutionResult.$metadata$ = {
    simpleName: 'ExecutionResult',
    kind: 'class',
    interfaces: []
  };
  function Nothing() {
    Nothing_instance = this;
    ExecutionResult.call(this);
  }
  Nothing.$metadata$ = {
    simpleName: 'Nothing',
    kind: 'object',
    interfaces: []
  };
  var Nothing_instance;
  function Nothing_getInstance() {
    if (Nothing_instance == null)
      new Nothing();
    return Nothing_instance;
  }
  function Return(value) {
    ExecutionResult.call(this);
    this.value_1 = value;
  }
  Return.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  Return.prototype.toString = function () {
    return 'Return(value=' + this.value_1 + ')';
  };
  Return.prototype.hashCode = function () {
    return hashCode(this.value_1);
  };
  Return.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Return))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Return ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Return.$metadata$ = {
    simpleName: 'Return',
    kind: 'class',
    interfaces: []
  };
  function executeDeclaration(declaration, evaluationEnvironment) {
    var tmp0_subject = declaration;
    var tmp;
    if (tmp0_subject instanceof VarDeclaration) {
      tmp = executeVarDeclaration(declaration, evaluationEnvironment);
    } else {
      if (tmp0_subject instanceof Statement) {
        tmp = executeStatement(declaration, evaluationEnvironment);
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function executeVarDeclaration(declaration, evaluationEnvironment) {
    var tmp0_safe_receiver = declaration._get_value__3683422336_a43j40_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = evaluateExpression(tmp0_safe_receiver, evaluationEnvironment);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var variableValue = tmp1_elvis_lhs == null ? NilValue_getInstance() : tmp1_elvis_lhs;
    evaluationEnvironment.createVariable_mm4ah5_k$(declaration._get_identifier__3776854274_8kgyke_k$(), variableValue);
    return Nothing_getInstance();
  }
  function executeStatement(statement, evaluationEnvironment) {
    var tmp0_subject = statement;
    var tmp;
    if (tmp0_subject instanceof ExpressionStatement) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_let_0 = evaluateExpression(statement._get_expr__796545782_d68qnq_k$(), evaluationEnvironment);
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Nothing_getInstance();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      if (tmp0_subject instanceof PrintStatement) {
        tmp = executePrintStatement(statement, evaluationEnvironment);
      } else {
        if (tmp0_subject instanceof BlockStatement) {
          tmp = executeBlockStatement(statement, evaluationEnvironment);
        } else {
          if (tmp0_subject instanceof IfStatement) {
            tmp = executeIfStatement(statement, evaluationEnvironment);
          } else {
            if (tmp0_subject instanceof WhileStatement) {
              tmp = executeWhileStatement(statement, evaluationEnvironment);
            } else {
              if (tmp0_subject instanceof ForStatement) {
                tmp = executeForStatement(statement, evaluationEnvironment);
              } else {
                if (tmp0_subject instanceof ReturnStatement) {
                  tmp = executeReturnStatement(statement, evaluationEnvironment);
                } else {
                  {
                    noWhenBranchMatchedException();
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function executePrintStatement(statement, evaluationEnvironment) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = asString(evaluateExpression(statement._get_expr__796545782_d68qnq_k$(), evaluationEnvironment));
        var tmp1_also = _get_mainPrinter__3116406160();
        {
        }
        tmp1_also.print_mp71d1_k$(tmp0_also_0);
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      var tmp2_let_0 = tmp$ret$0;
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Nothing_getInstance();
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function executeBlockStatement(statement, evaluationEnvironment) {
    var blockEnvironment = new Environment(evaluationEnvironment);
    var tmp0_iterator = statement._get_declarations__260996658_4be2b6_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var declaration = tmp0_iterator.next_20eer_k$();
      var result = executeDeclaration(declaration, blockEnvironment);
      if (result instanceof Return)
        return result;
      else {
      }
    }
    return Nothing_getInstance();
  }
  function executeIfStatement(statement, evaluationEnvironment) {
    var conditionValue = evaluateExpression(statement._get_condition__2056333462_y0ad1y_k$(), evaluationEnvironment);
    validateRuntimeBoolean(conditionValue);
    var body = conditionValue._get_value__3683422336_a43j40_k$() ? statement._get_body__793495785_d4fd9l_k$() : statement._get_elseBody__502126768_8aybhs_k$();
    var tmp0_safe_receiver = body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = executeStatement(tmp0_safe_receiver, evaluationEnvironment);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Nothing_getInstance() : tmp1_elvis_lhs;
  }
  function executeWhileStatement(statement, evaluationEnvironment) {
    $l$loop: while (true) {
      var condition = evaluateExpression(statement._get_condition__2056333462_y0ad1y_k$(), evaluationEnvironment);
      validateRuntimeBoolean(condition);
      if (!condition._get_value__3683422336_a43j40_k$())
        break $l$loop;
      var result = executeStatement(statement._get_body__793495785_d4fd9l_k$(), evaluationEnvironment);
      if (result instanceof Return)
        return result;
      else {
      }
    }
    return Nothing_getInstance();
  }
  function executeForStatement(statement, evaluationEnvironment) {
    var forEnvironment = new Environment(evaluationEnvironment);
    var tmp0_safe_receiver = statement._get_initializer__1254092527_kqnjzj_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = executeDeclaration(tmp0_safe_receiver, forEnvironment);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
    }
    Unit_getInstance();
    $l$loop: while (true) {
      var tmp1_safe_receiver = statement._get_condition__2056333462_y0ad1y_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$3;
        $l$block_2: {
          {
          }
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = evaluateExpression(tmp1_safe_receiver, forEnvironment);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      }
      var tmp2_elvis_lhs = tmp;
      var condition = tmp2_elvis_lhs == null ? new BooleanValue(true) : tmp2_elvis_lhs;
      validateRuntimeBoolean(condition);
      if (!condition._get_value__3683422336_a43j40_k$())
        break $l$loop;
      var result = executeStatement(statement._get_body__793495785_d4fd9l_k$(), forEnvironment);
      if (result instanceof Return)
        return result;
      else {
      }
      var tmp3_safe_receiver = statement._get_increment__112710850_1v3s8y_k$();
      if (tmp3_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        $l$block_4: {
          {
          }
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = evaluateExpression(tmp3_safe_receiver, forEnvironment);
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
      }
      Unit_getInstance();
    }
    return Nothing_getInstance();
  }
  function executeReturnStatement(statement, evaluationEnvironment) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_let_0 = evaluateExpression(statement._get_expr__796545782_d68qnq_k$(), evaluationEnvironment);
      {
      }
      tmp$ret$0 = new Return(tmp0_let_0);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function interpret(program) {
    var initialContext = toParsingContext(tokenize(program));
    var matchResult = _get_programRule__2915460593().match_mgqn9o_k$(initialContext);
    if (matchResult instanceof Unmatched) {
      throw RuntimeException_init_$Create$('Unable to parse program');
    } else {
    }
    validateGrammar(matchResult instanceof Matched);
    var programToken = matchResult._get_token__3639048440_auim88_k$();
    validateGrammar(programToken instanceof ProgramToken);
    var globalEnvironment = Environment_init_$Create$();
    importNativeFunctions(globalEnvironment);
    var tmp0_iterator = programToken._get_declarations__260996658_4be2b6_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var declaration = tmp0_iterator.next_20eer_k$();
      executeDeclaration(declaration, globalEnvironment);
      Unit_getInstance();
    }
    var finalContext = matchResult._get_newCtx__4130049924_2q6r24_k$();
    if (!(finalContext._get_currentIndex__1690914194_ryq5qq_k$() === _get_lastIndex__339712501(initialContext._get_tokens__1141353649_ivj641_k$()))) {
      throw RuntimeException_init_$Create$('Could not interpret program on: ' + finalContext.currentToken_o4eznk_k$()._get_position__3188952002_iahqv2_k$());
    }
  }
  function _get_clockFunction__2341907339() {
    init_properties_NativeFunctions_kt_676961136();
    return clockFunction;
  }
  var clockFunction;
  function _get_nativeFunctions__1818492749() {
    init_properties_NativeFunctions_kt_676961136();
    return nativeFunctions;
  }
  var nativeFunctions;
  function importNativeFunctions(environment) {
    init_properties_NativeFunctions_kt_676961136();
    var tmp0_iterator = _get_nativeFunctions__1818492749().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var function_0 = tmp0_iterator.next_20eer_k$();
      environment.createVariable_mm4ah5_k$(new IdentifierExpression(function_0._get_name__804168992_das4rk_k$()), function_0);
    }
  }
  function clockFunction$lambda() {
    return function (it) {
      return new NumericValue((new Date()).getTime() / 1000.0);
    };
  }
  var properties_initialized_NativeFunctions_kt_171092940;
  function init_properties_NativeFunctions_kt_676961136() {
    if (!properties_initialized_NativeFunctions_kt_171092940) {
      properties_initialized_NativeFunctions_kt_171092940 = true;
      clockFunction = new NativeFunctionValue('clock', 0, clockFunction$lambda());
      nativeFunctions = listOf(_get_clockFunction__2341907339());
    }
  }
  function _get_unaryOperatorEvaluators__4039358074() {
    init_properties_UnaryOperator_kt_791316129();
    return unaryOperatorEvaluators;
  }
  var unaryOperatorEvaluators;
  function evaluateUnaryOperatorExpression(expression, evaluationEnvironment) {
    init_properties_UnaryOperator_kt_791316129();
    var operatorType = expression._get_operatorType__924874509_fan9ql_k$();
    var exprValue = evaluateExpression(expression._get_expr__796545782_d68qnq_k$(), evaluationEnvironment);
    var signature = new Pair(operatorType, getKClassFromExpression(exprValue));
    var tmp0_safe_receiver = _get_unaryOperatorEvaluators__4039358074().get_1mhr4y_k$(signature);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(exprValue);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new EvaluationException('Invalid evaluation: could not find unary operator ' + ('' + operatorType + ' for ' + getKClassFromExpression(exprValue)));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function negateNumerical(value) {
    init_properties_UnaryOperator_kt_791316129();
    return new NumericValue(-value._get_value__3683422336_a43j40_k$());
  }
  function negateBoolean(value) {
    init_properties_UnaryOperator_kt_791316129();
    return new BooleanValue(!value._get_value__3683422336_a43j40_k$());
  }
  function unaryOperatorEvaluators$lambda() {
    return function (value) {
      validateGrammar(value instanceof NumericValue);
      return negateNumerical(value);
    };
  }
  function unaryOperatorEvaluators$lambda_0() {
    return function (value) {
      validateGrammar(value instanceof BooleanValue);
      return negateBoolean(value);
    };
  }
  var properties_initialized_UnaryOperator_kt_1099169277;
  function init_properties_UnaryOperator_kt_791316129() {
    if (!properties_initialized_UnaryOperator_kt_1099169277) {
      properties_initialized_UnaryOperator_kt_1099169277 = true;
      var tmp = new Pair(OperatorType_Minus_getInstance(), getKClass(NumericValue));
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = unaryOperatorEvaluators$lambda();
        break $l$block;
      }
      var tmp_0 = to(tmp, tmp$ret$0);
      var tmp_1 = new Pair(OperatorType_Bang_getInstance(), getKClass(BooleanValue));
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = unaryOperatorEvaluators$lambda_0();
        break $l$block_0;
      }
      unaryOperatorEvaluators = mapOf([tmp_0, to(tmp_1, tmp$ret$1)]);
    }
  }
  function _get_lineBreakRegex__2440428527() {
    init_properties_Lexer_kt_283088104();
    return lineBreakRegex;
  }
  var lineBreakRegex;
  function _get_whitespacesCommentsRegex__119056558() {
    init_properties_Lexer_kt_283088104();
    return whitespacesCommentsRegex;
  }
  var whitespacesCommentsRegex;
  function _get_keywordsMap__81784447() {
    init_properties_Lexer_kt_283088104();
    return keywordsMap;
  }
  var keywordsMap;
  function _get_numberLiteralRegex__1865354474() {
    init_properties_Lexer_kt_283088104();
    return numberLiteralRegex;
  }
  var numberLiteralRegex;
  function _get_stringLiteralRegex__3782118690() {
    init_properties_Lexer_kt_283088104();
    return stringLiteralRegex;
  }
  var stringLiteralRegex;
  function _get_identifierRegex__2435294899() {
    init_properties_Lexer_kt_283088104();
    return identifierRegex;
  }
  var identifierRegex;
  function tokenize(_this__1828080292) {
    init_properties_Lexer_kt_283088104();
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_split_0 = _get_lineBreakRegex__2440428527();
          tmp$ret$0 = tmp0_split_0.split_8rwwda_k$(_this__1828080292, 0);
          break $l$block;
        }
        var tmp1_flatMapIndexed_0 = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_flatMapIndexedTo_0_1 = ArrayList_init_$Create$_0();
          var index_1_2 = 0;
          var tmp0_iterator_2_3 = tmp1_flatMapIndexed_0.iterator_jk1svi_k$();
          while (tmp0_iterator_2_3.hasNext_bitz1p_k$()) {
            var element_3_4 = tmp0_iterator_2_3.next_20eer_k$();
            var tmp1_5_6 = index_1_2;
            index_1_2 = tmp1_5_6 + 1 | 0;
            var list_4_5 = tokenizeLine(checkIndexOverflow(tmp1_5_6), element_3_4);
            addAll(tmp0_flatMapIndexedTo_0_1, list_4_5);
            Unit_getInstance();
          }
          tmp$ret$1 = tmp0_flatMapIndexedTo_0_1;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      var tmp2_let_0 = tmp$ret$2;
      {
      }
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_plusElement_0_2 = new EOFLexerToken(last(tmp2_let_0)._get_position__3188952002_iahqv2_k$().nextLine_njwqkn_k$());
          tmp$ret$3 = plus(tmp2_let_0, tmp0_plusElement_0_2);
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    return tmp$ret$5;
  }
  function LexingContext(remainingString, position) {
    this.remainingString_1 = remainingString;
    this.position_1 = position;
  }
  LexingContext.prototype.skipChars_xxfgkj_k$ = function (amount) {
    return new LexingContext(drop(this.remainingString_1, amount), this.position_1.skipChars_xxfgkj_k$(amount));
  };
  LexingContext.prototype.component1_7eebsc_k$ = function () {
    return this.remainingString_1;
  };
  LexingContext.prototype.component2_7eebsb_k$ = function () {
    return this.position_1;
  };
  LexingContext.prototype.toString = function () {
    return 'LexingContext(remainingString=' + this.remainingString_1 + ', position=' + this.position_1 + ')';
  };
  LexingContext.prototype.hashCode = function () {
    var result = getStringHashCode(this.remainingString_1);
    result = imul(result, 31) + this.position_1.hashCode() | 0;
    return result;
  };
  LexingContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LexingContext))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LexingContext ? other : THROW_CCE();
    if (!(this.remainingString_1 === tmp0_other_with_cast.remainingString_1))
      return false;
    if (!this.position_1.equals(tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  LexingContext.$metadata$ = {
    simpleName: 'LexingContext',
    kind: 'class',
    interfaces: []
  };
  function tokenizeLine(lineNumber, line) {
    init_properties_Lexer_kt_283088104();
    var currentContext = new LexingContext(line, new Position(lineNumber, 0));
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$_0();
      break $l$block;
    }
    var result = tmp$ret$0;
    while (true) {
      var tmp0_container = nextToken(currentContext);
      var currentToken = tmp0_container.component1_7eebsc_k$();
      var nextContext = tmp0_container.component2_7eebsb_k$();
      if (currentToken instanceof EOFLexerToken) {
        return result;
      } else {
        if (currentToken instanceof UnmatchedLexerToken) {
          throw RuntimeException_init_$Create$('Unmatched token on position: ' + currentToken._get_position__3188952002_iahqv2_k$());
        } else {
        }
      }
      result.add_1j60pz_k$(currentToken);
      Unit_getInstance();
      currentContext = nextContext;
    }
  }
  function nextToken(lexingContext) {
    init_properties_Lexer_kt_283088104();
    var withoutWhitespacesAndComments = skipWhitespacesAndComments(lexingContext);
    var tmp0_container = withoutWhitespacesAndComments;
    var source = tmp0_container.component1_7eebsc_k$();
    var position = tmp0_container.component2_7eebsb_k$();
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(source) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = new EOFLexerToken(position);
    } else {
      if (startsWith$default(source, '(', false, 2, null)) {
        tmp = new LeftParenLexerToken(position);
      } else {
        if (startsWith$default(source, ')', false, 2, null)) {
          tmp = new RightParenLexerToken(position);
        } else {
          if (startsWith$default(source, '{', false, 2, null)) {
            tmp = new LeftBraceLexerToken(position);
          } else {
            if (startsWith$default(source, '}', false, 2, null)) {
              tmp = new RightBraceLexerToken(position);
            } else {
              if (startsWith$default(source, ',', false, 2, null)) {
                tmp = new CommaLexerToken(position);
              } else {
                if (startsWith$default(source, '.', false, 2, null)) {
                  tmp = new DotLexerToken(position);
                } else {
                  if (startsWith$default(source, '-', false, 2, null)) {
                    tmp = new MinusLexerToken(position);
                  } else {
                    if (startsWith$default(source, '+', false, 2, null)) {
                      tmp = new PlusLexerToken(position);
                    } else {
                      if (startsWith$default(source, ';', false, 2, null)) {
                        tmp = new SemicolonLexerToken(position);
                      } else {
                        if (startsWith$default(source, '/', false, 2, null)) {
                          tmp = new SlashLexerToken(position);
                        } else {
                          if (startsWith$default(source, '*', false, 2, null)) {
                            tmp = new StarLexerToken(position);
                          } else {
                            if (startsWith$default(source, '!=', false, 2, null)) {
                              tmp = new BangEqualLexerToken(position);
                            } else {
                              if (startsWith$default(source, '==', false, 2, null)) {
                                tmp = new EqualEqualLexerToken(position);
                              } else {
                                if (startsWith$default(source, '>=', false, 2, null)) {
                                  tmp = new GreaterEqualLexerToken(position);
                                } else {
                                  if (startsWith$default(source, '<=', false, 2, null)) {
                                    tmp = new LessEqualLexerToken(position);
                                  } else {
                                    if (startsWith$default(source, '!', false, 2, null)) {
                                      tmp = new BangLexerToken(position);
                                    } else {
                                      if (startsWith$default(source, '=', false, 2, null)) {
                                        tmp = new EqualLexerToken(position);
                                      } else {
                                        if (startsWith$default(source, '>', false, 2, null)) {
                                          tmp = new GreaterLexerToken(position);
                                        } else {
                                          if (startsWith$default(source, '<', false, 2, null)) {
                                            tmp = new LessLexerToken(position);
                                          } else {
                                            {
                                              tmp = parseLiteral(withoutWhitespacesAndComments);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var token = tmp;
    return new Pair(token, withoutWhitespacesAndComments.skipChars_xxfgkj_k$(token._get_length__2347802853_w7ahp7_k$()));
  }
  function skipWhitespacesAndComments(lexingContext) {
    init_properties_Lexer_kt_283088104();
    var tmp0_safe_receiver = firstMatch(lexingContext.remainingString_1, _get_whitespacesCommentsRegex__119056558());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.length;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return lexingContext;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var matchEndIndex = tmp;
    return lexingContext.skipChars_xxfgkj_k$(matchEndIndex);
  }
  function parseLiteral(lexingContext) {
    init_properties_Lexer_kt_283088104();
    var asNumberLiteral = tryParseNumberLiteral(lexingContext);
    if (asNumberLiteral instanceof NumberLiteralLexerToken)
      return asNumberLiteral;
    else {
    }
    var asStringLiteral = tryParseStringLiteral(lexingContext);
    if (asStringLiteral instanceof StringLiteralLexerToken)
      return asStringLiteral;
    else {
    }
    var asIdentifier = tryParseIdentifier(lexingContext);
    if (!(asIdentifier instanceof IdentifierLexerToken))
      return asIdentifier;
    else {
    }
    var tmp0_safe_receiver = _get_keywordsMap__81784447().get_1mhr4y_k$(asIdentifier._get_name__804168992_das4rk_k$());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(lexingContext.position_1);
    return tmp1_elvis_lhs == null ? asIdentifier : tmp1_elvis_lhs;
  }
  function tryParseNumberLiteral(lexingContext) {
    init_properties_Lexer_kt_283088104();
    var tmp0_elvis_lhs = firstMatch(lexingContext.remainingString_1, _get_numberLiteralRegex__1865354474());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new UnmatchedLexerToken(lexingContext.position_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var numberLiteral = tmp;
    return new NumberLiteralLexerToken(toDouble(numberLiteral), numberLiteral.length, lexingContext.position_1);
  }
  function tryParseStringLiteral(lexingContext) {
    init_properties_Lexer_kt_283088104();
    var tmp0_elvis_lhs = firstMatch(lexingContext.remainingString_1, _get_stringLiteralRegex__3782118690());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new UnmatchedLexerToken(lexingContext.position_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stringLiteral = tmp;
    return new StringLiteralLexerToken(stringLiteral, lexingContext.position_1);
  }
  function tryParseIdentifier(lexingContext) {
    init_properties_Lexer_kt_283088104();
    var tmp0_elvis_lhs = firstMatch(lexingContext.remainingString_1, _get_identifierRegex__2435294899());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new UnmatchedLexerToken(lexingContext.position_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var identifier = tmp;
    return new IdentifierLexerToken(identifier, lexingContext.position_1);
  }
  function firstMatch(value, regex) {
    init_properties_Lexer_kt_283088104();
    var tmp0_safe_receiver = regex.matchAt_qonb1g_k$(value, 0);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_groups__2578767799_sds409_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_fkrdnv_k$(1);
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver._get_value__3683422336_a43j40_k$();
  }
  function AndLexerToken$_init_$ref_1426970785() {
    var l = function (p0) {
      return new AndLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ClassLexerToken$_init_$ref_1783553952() {
    var l = function (p0) {
      return new ClassLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ElseLexerToken$_init_$ref_1137922623() {
    var l = function (p0) {
      return new ElseLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function FalseLexerToken$_init_$ref_982022357() {
    var l = function (p0) {
      return new FalseLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function FunLexerToken$_init_$ref_2309627385() {
    var l = function (p0) {
      return new FunLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ForLexerToken$_init_$ref_3868684527() {
    var l = function (p0) {
      return new ForLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function IfLexerToken$_init_$ref_2894651611() {
    var l = function (p0) {
      return new IfLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function NilLexerToken$_init_$ref_3797414055() {
    var l = function (p0) {
      return new NilLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function OrLexerToken$_init_$ref_3086432213() {
    var l = function (p0) {
      return new OrLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function PrintLexerToken$_init_$ref_2400459147() {
    var l = function (p0) {
      return new PrintLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ReturnLexerToken$_init_$ref_3958807208() {
    var l = function (p0) {
      return new ReturnLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function SuperLexerToken$_init_$ref_1550977405() {
    var l = function (p0) {
      return new SuperLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ThisLexerToken$_init_$ref_2281820666() {
    var l = function (p0) {
      return new ThisLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function TrueLexerToken$_init_$ref_2132041994() {
    var l = function (p0) {
      return new TrueLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function VarLexerToken$_init_$ref_2549742929() {
    var l = function (p0) {
      return new VarLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function WhileLexerToken$_init_$ref_4226366343() {
    var l = function (p0) {
      return new WhileLexerToken(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  var properties_initialized_Lexer_kt_3538167876;
  function init_properties_Lexer_kt_283088104() {
    if (!properties_initialized_Lexer_kt_3538167876) {
      properties_initialized_Lexer_kt_3538167876 = true;
      lineBreakRegex = Regex_init_$Create$('\\r?\\n');
      whitespacesCommentsRegex = Regex_init_$Create$('([\\s\\t]+(//.*)?)');
      var tmp = to('and', AndLexerToken$_init_$ref_1426970785());
      var tmp_0 = to('class', ClassLexerToken$_init_$ref_1783553952());
      var tmp_1 = to('else', ElseLexerToken$_init_$ref_1137922623());
      var tmp_2 = to('false', FalseLexerToken$_init_$ref_982022357());
      var tmp_3 = to('fun', FunLexerToken$_init_$ref_2309627385());
      var tmp_4 = to('for', ForLexerToken$_init_$ref_3868684527());
      var tmp_5 = to('if', IfLexerToken$_init_$ref_2894651611());
      var tmp_6 = to('nil', NilLexerToken$_init_$ref_3797414055());
      var tmp_7 = to('or', OrLexerToken$_init_$ref_3086432213());
      var tmp_8 = to('print', PrintLexerToken$_init_$ref_2400459147());
      var tmp_9 = to('return', ReturnLexerToken$_init_$ref_3958807208());
      var tmp_10 = to('super', SuperLexerToken$_init_$ref_1550977405());
      var tmp_11 = to('this', ThisLexerToken$_init_$ref_2281820666());
      var tmp_12 = to('true', TrueLexerToken$_init_$ref_2132041994());
      var tmp_13 = to('var', VarLexerToken$_init_$ref_2549742929());
      keywordsMap = mapOf([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, to('while', WhileLexerToken$_init_$ref_4226366343())]);
      numberLiteralRegex = Regex_init_$Create$('(\\d+(?:\\.\\d+)?)');
      stringLiteralRegex = Regex_init_$Create$('"([^"]*)"');
      identifierRegex = Regex_init_$Create$('([_a-zA-Z]\\w*)');
    }
  }
  function Position(line, position) {
    this.line_1 = line;
    this.position_1 = position;
  }
  Position.prototype.skipChars_xxfgkj_k$ = function (position) {
    return new Position(this.line_1, position + this.position_1 | 0);
  };
  Position.prototype.nextLine_njwqkn_k$ = function () {
    return new Position(this.line_1 + 1 | 0, 0);
  };
  Position.prototype.toString = function () {
    return 'Position(line=' + (this.line_1 + 1 | 0) + ', position=' + this.position_1 + ')';
  };
  Position.prototype.hashCode = function () {
    var result = this.line_1;
    result = imul(result, 31) + this.position_1 | 0;
    return result;
  };
  Position.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!(this.line_1 === tmp0_other_with_cast.line_1))
      return false;
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  Position.$metadata$ = {
    simpleName: 'Position',
    kind: 'class',
    interfaces: []
  };
  function LexerToken(position, length) {
    this.position_1 = position;
    this.length_1 = length;
  }
  LexerToken.prototype._get_position__3188952002_iahqv2_k$ = function () {
    return this.position_1;
  };
  LexerToken.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    return this.length_1;
  };
  LexerToken.$metadata$ = {
    simpleName: 'LexerToken',
    kind: 'class',
    interfaces: []
  };
  function UnmatchedLexerToken(position) {
    LexerToken.call(this, position, 0);
  }
  UnmatchedLexerToken.$metadata$ = {
    simpleName: 'UnmatchedLexerToken',
    kind: 'class',
    interfaces: []
  };
  function EOFLexerToken(position) {
    LexerToken.call(this, position, 0);
  }
  EOFLexerToken.$metadata$ = {
    simpleName: 'EOFLexerToken',
    kind: 'class',
    interfaces: []
  };
  function LeftParenLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  LeftParenLexerToken.$metadata$ = {
    simpleName: 'LeftParenLexerToken',
    kind: 'class',
    interfaces: []
  };
  function RightParenLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  RightParenLexerToken.$metadata$ = {
    simpleName: 'RightParenLexerToken',
    kind: 'class',
    interfaces: []
  };
  function LeftBraceLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  LeftBraceLexerToken.$metadata$ = {
    simpleName: 'LeftBraceLexerToken',
    kind: 'class',
    interfaces: []
  };
  function RightBraceLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  RightBraceLexerToken.$metadata$ = {
    simpleName: 'RightBraceLexerToken',
    kind: 'class',
    interfaces: []
  };
  function CommaLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  CommaLexerToken.$metadata$ = {
    simpleName: 'CommaLexerToken',
    kind: 'class',
    interfaces: []
  };
  function DotLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  DotLexerToken.$metadata$ = {
    simpleName: 'DotLexerToken',
    kind: 'class',
    interfaces: []
  };
  function MinusLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  MinusLexerToken.$metadata$ = {
    simpleName: 'MinusLexerToken',
    kind: 'class',
    interfaces: []
  };
  function PlusLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  PlusLexerToken.$metadata$ = {
    simpleName: 'PlusLexerToken',
    kind: 'class',
    interfaces: []
  };
  function SemicolonLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  SemicolonLexerToken.$metadata$ = {
    simpleName: 'SemicolonLexerToken',
    kind: 'class',
    interfaces: []
  };
  function SlashLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  SlashLexerToken.$metadata$ = {
    simpleName: 'SlashLexerToken',
    kind: 'class',
    interfaces: []
  };
  function StarLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  StarLexerToken.$metadata$ = {
    simpleName: 'StarLexerToken',
    kind: 'class',
    interfaces: []
  };
  function BangLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  BangLexerToken.$metadata$ = {
    simpleName: 'BangLexerToken',
    kind: 'class',
    interfaces: []
  };
  function BangEqualLexerToken(position) {
    LexerToken.call(this, position, 2);
  }
  BangEqualLexerToken.$metadata$ = {
    simpleName: 'BangEqualLexerToken',
    kind: 'class',
    interfaces: []
  };
  function EqualLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  EqualLexerToken.$metadata$ = {
    simpleName: 'EqualLexerToken',
    kind: 'class',
    interfaces: []
  };
  function EqualEqualLexerToken(position) {
    LexerToken.call(this, position, 2);
  }
  EqualEqualLexerToken.$metadata$ = {
    simpleName: 'EqualEqualLexerToken',
    kind: 'class',
    interfaces: []
  };
  function GreaterLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  GreaterLexerToken.$metadata$ = {
    simpleName: 'GreaterLexerToken',
    kind: 'class',
    interfaces: []
  };
  function GreaterEqualLexerToken(position) {
    LexerToken.call(this, position, 2);
  }
  GreaterEqualLexerToken.$metadata$ = {
    simpleName: 'GreaterEqualLexerToken',
    kind: 'class',
    interfaces: []
  };
  function LessLexerToken(position) {
    LexerToken.call(this, position, 1);
  }
  LessLexerToken.$metadata$ = {
    simpleName: 'LessLexerToken',
    kind: 'class',
    interfaces: []
  };
  function LessEqualLexerToken(position) {
    LexerToken.call(this, position, 2);
  }
  LessEqualLexerToken.$metadata$ = {
    simpleName: 'LessEqualLexerToken',
    kind: 'class',
    interfaces: []
  };
  function IdentifierLexerToken(name, position) {
    LexerToken.call(this, position, name.length);
    this.name_1 = name;
  }
  IdentifierLexerToken.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  IdentifierLexerToken.$metadata$ = {
    simpleName: 'IdentifierLexerToken',
    kind: 'class',
    interfaces: []
  };
  function StringLiteralLexerToken(value, position) {
    LexerToken.call(this, position, value.length + 2 | 0);
    this.value_1 = value;
  }
  StringLiteralLexerToken.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  StringLiteralLexerToken.$metadata$ = {
    simpleName: 'StringLiteralLexerToken',
    kind: 'class',
    interfaces: []
  };
  function NumberLiteralLexerToken(value, length, position) {
    LexerToken.call(this, position, length);
    this.value_1 = value;
  }
  NumberLiteralLexerToken.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  NumberLiteralLexerToken.$metadata$ = {
    simpleName: 'NumberLiteralLexerToken',
    kind: 'class',
    interfaces: []
  };
  function AndLexerToken(position) {
    LexerToken.call(this, position, 3);
  }
  AndLexerToken.$metadata$ = {
    simpleName: 'AndLexerToken',
    kind: 'class',
    interfaces: []
  };
  function ClassLexerToken(position) {
    LexerToken.call(this, position, 5);
  }
  ClassLexerToken.$metadata$ = {
    simpleName: 'ClassLexerToken',
    kind: 'class',
    interfaces: []
  };
  function ElseLexerToken(position) {
    LexerToken.call(this, position, 4);
  }
  ElseLexerToken.$metadata$ = {
    simpleName: 'ElseLexerToken',
    kind: 'class',
    interfaces: []
  };
  function FalseLexerToken(position) {
    LexerToken.call(this, position, 5);
  }
  FalseLexerToken.$metadata$ = {
    simpleName: 'FalseLexerToken',
    kind: 'class',
    interfaces: []
  };
  function FunLexerToken(position) {
    LexerToken.call(this, position, 3);
  }
  FunLexerToken.$metadata$ = {
    simpleName: 'FunLexerToken',
    kind: 'class',
    interfaces: []
  };
  function ForLexerToken(position) {
    LexerToken.call(this, position, 3);
  }
  ForLexerToken.$metadata$ = {
    simpleName: 'ForLexerToken',
    kind: 'class',
    interfaces: []
  };
  function IfLexerToken(position) {
    LexerToken.call(this, position, 2);
  }
  IfLexerToken.$metadata$ = {
    simpleName: 'IfLexerToken',
    kind: 'class',
    interfaces: []
  };
  function NilLexerToken(position) {
    LexerToken.call(this, position, 3);
  }
  NilLexerToken.$metadata$ = {
    simpleName: 'NilLexerToken',
    kind: 'class',
    interfaces: []
  };
  function OrLexerToken(position) {
    LexerToken.call(this, position, 2);
  }
  OrLexerToken.$metadata$ = {
    simpleName: 'OrLexerToken',
    kind: 'class',
    interfaces: []
  };
  function PrintLexerToken(position) {
    LexerToken.call(this, position, 5);
  }
  PrintLexerToken.$metadata$ = {
    simpleName: 'PrintLexerToken',
    kind: 'class',
    interfaces: []
  };
  function ReturnLexerToken(position) {
    LexerToken.call(this, position, 6);
  }
  ReturnLexerToken.$metadata$ = {
    simpleName: 'ReturnLexerToken',
    kind: 'class',
    interfaces: []
  };
  function SuperLexerToken(position) {
    LexerToken.call(this, position, 5);
  }
  SuperLexerToken.$metadata$ = {
    simpleName: 'SuperLexerToken',
    kind: 'class',
    interfaces: []
  };
  function ThisLexerToken(position) {
    LexerToken.call(this, position, 4);
  }
  ThisLexerToken.$metadata$ = {
    simpleName: 'ThisLexerToken',
    kind: 'class',
    interfaces: []
  };
  function TrueLexerToken(position) {
    LexerToken.call(this, position, 4);
  }
  TrueLexerToken.$metadata$ = {
    simpleName: 'TrueLexerToken',
    kind: 'class',
    interfaces: []
  };
  function VarLexerToken(position) {
    LexerToken.call(this, position, 3);
  }
  VarLexerToken.$metadata$ = {
    simpleName: 'VarLexerToken',
    kind: 'class',
    interfaces: []
  };
  function WhileLexerToken(position) {
    LexerToken.call(this, position, 5);
  }
  WhileLexerToken.$metadata$ = {
    simpleName: 'WhileLexerToken',
    kind: 'class',
    interfaces: []
  };
  function _get_flatteningCombiner__3614125338() {
    init_properties_Parser_kt_2525321179();
    return flatteningCombiner;
  }
  var flatteningCombiner;
  function ParsingContext(tokens, currentIndex) {
    this.tokens_1 = tokens;
    this.currentIndex_1 = currentIndex;
  }
  ParsingContext.prototype._get_tokens__1141353649_ivj641_k$ = function () {
    return this.tokens_1;
  };
  ParsingContext.prototype._get_currentIndex__1690914194_ryq5qq_k$ = function () {
    return this.currentIndex_1;
  };
  ParsingContext.prototype.move_5bxldc_k$ = function (amount) {
    return new ParsingContext(this.tokens_1, this.currentIndex_1 + amount | 0);
  };
  ParsingContext.prototype.move_1zys1_k$ = function () {
    return this.move_5bxldc_k$(1);
  };
  ParsingContext.prototype.currentToken_o4eznk_k$ = function () {
    return this.tokens_1.get_fkrdnv_k$(this.currentIndex_1);
  };
  ParsingContext.prototype.toString = function () {
    return 'ParsingContext(tokens=' + this.tokens_1 + ', currentIndex=' + this.currentIndex_1 + ')';
  };
  ParsingContext.prototype.hashCode = function () {
    var result = hashCode(this.tokens_1);
    result = imul(result, 31) + this.currentIndex_1 | 0;
    return result;
  };
  ParsingContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParsingContext))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ParsingContext ? other : THROW_CCE();
    if (!equals(this.tokens_1, tmp0_other_with_cast.tokens_1))
      return false;
    if (!(this.currentIndex_1 === tmp0_other_with_cast.currentIndex_1))
      return false;
    return true;
  };
  ParsingContext.$metadata$ = {
    simpleName: 'ParsingContext',
    kind: 'class',
    interfaces: []
  };
  function toParsingContext(_this__1828080292) {
    init_properties_Parser_kt_2525321179();
    return new ParsingContext(_this__1828080292, 0);
  }
  function ParserToken() {
  }
  ParserToken.$metadata$ = {
    simpleName: 'ParserToken',
    kind: 'class',
    interfaces: []
  };
  function SymbolicToken(lexerToken) {
    ParserToken.call(this);
    this.lexerToken_1 = lexerToken;
  }
  SymbolicToken.prototype._get_lexerToken__1629285342_qy18m6_k$ = function () {
    return this.lexerToken_1;
  };
  SymbolicToken.prototype.toString = function () {
    return 'SymbolicToken(lexerToken=' + this.lexerToken_1 + ')';
  };
  SymbolicToken.prototype.hashCode = function () {
    return hashCode(this.lexerToken_1);
  };
  SymbolicToken.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SymbolicToken))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SymbolicToken ? other : THROW_CCE();
    if (!equals(this.lexerToken_1, tmp0_other_with_cast.lexerToken_1))
      return false;
    return true;
  };
  SymbolicToken.$metadata$ = {
    simpleName: 'SymbolicToken',
    kind: 'class',
    interfaces: []
  };
  function NodeToken(node) {
    ParserToken.call(this);
    this.node_1 = node;
  }
  NodeToken.prototype._get_node__804577417_db0vwp_k$ = function () {
    return this.node_1;
  };
  NodeToken.prototype.toString = function () {
    return 'NodeToken(node=' + this.node_1 + ')';
  };
  NodeToken.prototype.hashCode = function () {
    return hashCode(this.node_1);
  };
  NodeToken.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NodeToken))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof NodeToken ? other : THROW_CCE();
    if (!equals(this.node_1, tmp0_other_with_cast.node_1))
      return false;
    return true;
  };
  NodeToken.$metadata$ = {
    simpleName: 'NodeToken',
    kind: 'class',
    interfaces: []
  };
  function CompositeToken(tokens) {
    ParserToken.call(this);
    this.tokens_1 = tokens;
  }
  CompositeToken.prototype._get_tokens__1141353649_ivj641_k$ = function () {
    return this.tokens_1;
  };
  CompositeToken.prototype.toString = function () {
    return 'CompositeToken(tokens=' + this.tokens_1 + ')';
  };
  CompositeToken.prototype.hashCode = function () {
    return hashCode(this.tokens_1);
  };
  CompositeToken.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompositeToken))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompositeToken ? other : THROW_CCE();
    if (!equals(this.tokens_1, tmp0_other_with_cast.tokens_1))
      return false;
    return true;
  };
  CompositeToken.$metadata$ = {
    simpleName: 'CompositeToken',
    kind: 'class',
    interfaces: []
  };
  function ProgramToken(declarations) {
    ParserToken.call(this);
    this.declarations_1 = declarations;
  }
  ProgramToken.prototype._get_declarations__260996658_4be2b6_k$ = function () {
    return this.declarations_1;
  };
  ProgramToken.prototype.toString = function () {
    var tmp = '"ProgramToken(\n            | declarations = \n            | ' + joinToString$default(this.declarations_1, '\n', null, null, 0, null, null, 62, null) + '\n            |)';
    return trimMargin$default(tmp, null, 1, null);
  };
  ProgramToken.prototype.hashCode = function () {
    return hashCode(this.declarations_1);
  };
  ProgramToken.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProgramToken))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ProgramToken ? other : THROW_CCE();
    if (!equals(this.declarations_1, tmp0_other_with_cast.declarations_1))
      return false;
    return true;
  };
  ProgramToken.$metadata$ = {
    simpleName: 'ProgramToken',
    kind: 'class',
    interfaces: []
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.empty_1lj7f1_k$ = function () {
    return new OptionalToken(null);
  };
  Companion.prototype.value_535fd_k$ = function (token) {
    return new OptionalToken(token);
  };
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function OptionalToken(token) {
    Companion_getInstance();
    ParserToken.call(this);
    this.token_1 = token;
  }
  OptionalToken.prototype._get_token__3639048440_auim88_k$ = function () {
    return this.token_1;
  };
  OptionalToken.prototype.toString = function () {
    return 'OptionalToken(token=' + this.token_1 + ')';
  };
  OptionalToken.prototype.hashCode = function () {
    return this.token_1 == null ? 0 : hashCode(this.token_1);
  };
  OptionalToken.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OptionalToken))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof OptionalToken ? other : THROW_CCE();
    if (!equals(this.token_1, tmp0_other_with_cast.token_1))
      return false;
    return true;
  };
  OptionalToken.$metadata$ = {
    simpleName: 'OptionalToken',
    kind: 'class',
    interfaces: []
  };
  function MatchResult() {
  }
  MatchResult.$metadata$ = {
    simpleName: 'MatchResult',
    kind: 'class',
    interfaces: []
  };
  function Matched(token, newCtx) {
    MatchResult.call(this);
    this.token_1 = token;
    this.newCtx_1 = newCtx;
  }
  Matched.prototype._get_token__3639048440_auim88_k$ = function () {
    return this.token_1;
  };
  Matched.prototype._get_newCtx__4130049924_2q6r24_k$ = function () {
    return this.newCtx_1;
  };
  Matched.prototype.toString = function () {
    return 'Matched(token=' + this.token_1 + ', newCtx=' + this.newCtx_1 + ')';
  };
  Matched.prototype.hashCode = function () {
    var result = hashCode(this.token_1);
    result = imul(result, 31) + this.newCtx_1.hashCode() | 0;
    return result;
  };
  Matched.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Matched))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Matched ? other : THROW_CCE();
    if (!equals(this.token_1, tmp0_other_with_cast.token_1))
      return false;
    if (!this.newCtx_1.equals(tmp0_other_with_cast.newCtx_1))
      return false;
    return true;
  };
  Matched.$metadata$ = {
    simpleName: 'Matched',
    kind: 'class',
    interfaces: []
  };
  function Unmatched() {
    Unmatched_instance = this;
    MatchResult.call(this);
  }
  Unmatched.$metadata$ = {
    simpleName: 'Unmatched',
    kind: 'object',
    interfaces: []
  };
  var Unmatched_instance;
  function Unmatched_getInstance() {
    if (Unmatched_instance == null)
      new Unmatched();
    return Unmatched_instance;
  }
  function Rule() {
  }
  Rule.$metadata$ = {
    simpleName: 'Rule',
    kind: 'interface',
    interfaces: []
  };
  function orRule(rules) {
    init_properties_Parser_kt_2525321179();
    var tmp = orRule$lambda(rules);
    return new sam$parser_Rule$0(tmp);
  }
  function andRule(rules, combine) {
    init_properties_Parser_kt_2525321179();
    var tmp = andRule$lambda(rules, combine);
    return new sam$parser_Rule$0_0(tmp);
  }
  function andRule_0(rules) {
    init_properties_Parser_kt_2525321179();
    var tmp = rules.slice();
    return andRule(tmp, andRule$lambda_0());
  }
  function optionalRule(rule) {
    init_properties_Parser_kt_2525321179();
    var tmp = optionalRule$lambda(rule);
    return new sam$parser_Rule$0_1(tmp);
  }
  function zeroOrMoreRule(rule, combine) {
    init_properties_Parser_kt_2525321179();
    var tmp = zeroOrMoreRule$lambda(rule, combine);
    return new sam$parser_Rule$0_2(tmp);
  }
  function zeroOrMoreRule_0(rule) {
    init_properties_Parser_kt_2525321179();
    return zeroOrMoreRule(rule, _get_flatteningCombiner__3614125338());
  }
  function sam$parser_Rule$0(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_0.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_0.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_1(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_1.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_1.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_2(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_2.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_2.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function flatteningCombiner$lambda() {
    return function (tokens) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_flatMapTo_0_1 = ArrayList_init_$Create$_0();
            var tmp0_iterator_1_2 = tokens.iterator_jk1svi_k$();
            while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
              var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
              var tmp$ret$0;
              $l$block: {
                var tmp;
                if (element_2_3 instanceof CompositeToken) {
                  tmp = element_2_3.tokens_1;
                } else {
                  {
                    tmp = listOf(element_2_3);
                  }
                }
                tmp$ret$0 = tmp;
                break $l$block;
              }
              var list_3_4 = tmp$ret$0;
              addAll(tmp0_flatMapTo_0_1, list_3_4);
              Unit_getInstance();
            }
            tmp$ret$1 = tmp0_flatMapTo_0_1;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var tmp0_let_0 = tmp$ret$2;
        {
        }
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = new CompositeToken(tmp0_let_0);
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      return tmp$ret$4;
    };
  }
  function orRule$lambda($rules) {
    return function (ctx) {
      var indexedObject = $rules;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var matcher = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var result = matcher.match_mgqn9o_k$(ctx);
        if (result instanceof Matched)
          return result;
        else {
        }
      }
      Unit_getInstance();
      return Unmatched_getInstance();
    };
  }
  function andRule$lambda($rules, $combine) {
    return function (ctx) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$_0();
        break $l$block;
      }
      var matcherResults = tmp$ret$0;
      Unit_getInstance();
      var curCtx = ctx;
      Unit_getInstance();
      var indexedObject = $rules;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var rule = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var result = rule.match_mgqn9o_k$(curCtx);
        if (result instanceof Unmatched)
          return Unmatched_getInstance();
        else {
          if (result instanceof Matched) {
            matcherResults.add_1j60pz_k$(result.token_1);
            Unit_getInstance();
            curCtx = result.newCtx_1;
          } else {
          }
        }
      }
      Unit_getInstance();
      return new Matched($combine(matcherResults), curCtx);
    };
  }
  function andRule$lambda_0() {
    return function (it) {
      return _get_flatteningCombiner__3614125338()(it);
    };
  }
  function optionalRule$lambda($rule) {
    return function (ctx) {
      var result = $rule.match_mgqn9o_k$(ctx);
      var tmp;
      if (result instanceof Unmatched) {
        tmp = new Matched(Companion_getInstance().empty_1lj7f1_k$(), ctx);
      } else {
        if (result instanceof Matched) {
          tmp = new Matched(Companion_getInstance().value_535fd_k$(result.token_1), result.newCtx_1);
        } else {
          {
            noWhenBranchMatchedException();
          }
        }
      }
      return tmp;
    };
  }
  function zeroOrMoreRule$lambda($rule, $combine) {
    return function (ctx) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$_0();
        break $l$block;
      }
      var matcherResults = tmp$ret$0;
      Unit_getInstance();
      var curCtx = ctx;
      Unit_getInstance();
      while (true) {
        var result = $rule.match_mgqn9o_k$(curCtx);
        if (result instanceof Unmatched)
          return new Matched($combine(matcherResults), curCtx);
        else {
          if (result instanceof Matched) {
            matcherResults.add_1j60pz_k$(result.token_1);
            Unit_getInstance();
            curCtx = result.newCtx_1;
          } else {
          }
        }
      }
      Unit_getInstance();
      return Unmatched_getInstance();
    };
  }
  var properties_initialized_Parser_kt_353579007;
  function init_properties_Parser_kt_2525321179() {
    if (!properties_initialized_Parser_kt_353579007) {
      properties_initialized_Parser_kt_353579007 = true;
      flatteningCombiner = flatteningCombiner$lambda();
    }
  }
  function toOperatorTypeAndOperand(_this__1828080292) {
    var tmp0_container = _this__1828080292;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = tmp0_container.get_fkrdnv_k$(0);
      break $l$block;
    }
    var operator = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = tmp0_container.get_fkrdnv_k$(1);
      break $l$block_0;
    }
    var operand = tmp$ret$1;
    validateGrammar(operator instanceof SymbolicToken);
    var tmp;
    if (operand instanceof NodeToken) {
      var tmp_0 = operand._get_node__804577417_db0vwp_k$();
      tmp = tmp_0 instanceof Expression;
    } else {
      {
        tmp = false;
      }
    }
    validateGrammar(tmp);
    var tmp1_elvis_lhs = _get_operatorMapping__1592820167().get_1mhr4y_k$(getKClassFromExpression(operator._get_lexerToken__1629285342_qy18m6_k$()));
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      throw RuntimeException_init_$Create$('Invalid grammar: unknown operator');
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var operatorType = tmp_1;
    return new Pair(operatorType, operand._get_node__804577417_db0vwp_k$());
  }
  function asString(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject instanceof NilValue) {
      tmp = 'nil';
    } else {
      if (tmp0_subject instanceof BooleanValue) {
        tmp = _this__1828080292._get_value__3683422336_a43j40_k$().toString();
      } else {
        if (tmp0_subject instanceof NumericValue) {
          tmp = _this__1828080292._get_value__3683422336_a43j40_k$().toString();
        } else {
          if (tmp0_subject instanceof StringValue) {
            tmp = _this__1828080292._get_value__3683422336_a43j40_k$();
          } else {
            if (tmp0_subject instanceof ObjectValue) {
              tmp = toString(_this__1828080292);
            } else {
              if (tmp0_subject instanceof FunctionValue) {
                tmp = toString(_this__1828080292);
              } else {
                {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function component6(_this__1828080292) {
    return _this__1828080292.get_fkrdnv_k$(5);
  }
  function component8(_this__1828080292) {
    return _this__1828080292.get_fkrdnv_k$(7);
  }
  function validateGrammar(value) {
    {
    }
    {
      {
      }
      if (!value) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid grammar';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  function throwInvalidGrammar() {
    return validateGrammar(false);
  }
  function validateRuntime(value, errorMessage) {
    {
    }
    if (!value) {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = errorMessage();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      throw new EvaluationException(tmp$ret$1);
    }
  }
  function validateRuntimeBoolean(value) {
    {
    }
    if (!(value instanceof BooleanValue)) {
      throw new EvaluationException('Could not interpret value of type ' + getKClassFromExpression(value) + ' as Boolean');
    } else {
    }
  }
  function _get_defaultBinaryOperatorCombiner__2595844184() {
    init_properties_BinaryExpression_kt_2100230273();
    return defaultBinaryOperatorCombiner;
  }
  var defaultBinaryOperatorCombiner;
  function binaryOperatorRule(operandRule, operatorRule) {
    init_properties_BinaryExpression_kt_2100230273();
    return binaryOperatorRule_0(operandRule, operatorRule, _get_defaultBinaryOperatorCombiner__2595844184());
  }
  function binaryOperatorRule_0(operandRule, operatorRule, combiner) {
    init_properties_BinaryExpression_kt_2100230273();
    var tmp = binaryOperatorRule$lambda(operandRule, operatorRule, combiner);
    return new sam$parser_Rule$0_3(tmp);
  }
  function map(_this__1828080292, mapper) {
    init_properties_BinaryExpression_kt_2100230273();
    var tmp0_subject = _this__1828080292;
    var tmp;
    if (tmp0_subject instanceof Unmatched) {
      tmp = Unmatched_getInstance();
    } else {
      if (tmp0_subject instanceof Matched) {
        tmp = mapper(_this__1828080292);
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function sam$parser_Rule$0_3(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_3.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_3.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function defaultBinaryOperatorCombiner$lambda() {
    return function (tokens) {
      var tmp = tokens.get_fkrdnv_k$(0);
      var tmp0_safe_receiver = tmp instanceof NodeToken ? tmp : null;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_node__804577417_db0vwp_k$();
      var tmp1_elvis_lhs = tmp_0 instanceof Expression ? tmp_0 : null;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        throw RuntimeException_init_$Create$('Invalid grammar: operator argument is not an expression');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var processed = tmp_1;
      Unit_getInstance();
      var tmp0_forEach_0 = chunked(drop_0(tokens, 1), 2);
      var tmp0_iterator_1 = tmp0_forEach_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var tmp0_container_4 = toOperatorTypeAndOperand(element_2);
          var type_5 = tmp0_container_4.component1_7eebsc_k$();
          var operand_6 = tmp0_container_4.component2_7eebsb_k$();
          processed = new BinaryOperatorExpression(type_5, processed, operand_6);
        }
      }
      Unit_getInstance();
      return new NodeToken(processed);
    };
  }
  function binaryOperatorRule$lambda$lambda($combiner) {
    return function (matched) {
      var tmp = matched._get_token__3639048440_auim88_k$();
      validateGrammar(tmp instanceof CompositeToken);
      return new Matched($combiner(matched._get_token__3639048440_auim88_k$()._get_tokens__1141353649_ivj641_k$()), matched._get_newCtx__4130049924_2q6r24_k$());
    };
  }
  function binaryOperatorRule$lambda($operandRule, $operatorRule, $combiner) {
    return function (ctx) {
      var tmp = andRule_0([$operandRule, zeroOrMoreRule_0(andRule_0([$operatorRule, $operandRule]))]).match_mgqn9o_k$(ctx);
      return map(tmp, binaryOperatorRule$lambda$lambda($combiner));
    };
  }
  var properties_initialized_BinaryExpression_kt_3598185381;
  function init_properties_BinaryExpression_kt_2100230273() {
    if (!properties_initialized_BinaryExpression_kt_3598185381) {
      properties_initialized_BinaryExpression_kt_3598185381 = true;
      defaultBinaryOperatorCombiner = defaultBinaryOperatorCombiner$lambda();
    }
  }
  function _get_expressionRule__1177618135() {
    init_properties_Expressions_kt_3704108793_0();
    return expressionRule;
  }
  var expressionRule;
  function _get_parenthesizedRule__2859028345() {
    init_properties_Expressions_kt_3704108793_0();
    return parenthesizedRule;
  }
  var parenthesizedRule;
  function _get_primaryExpressionRule__3731994683() {
    init_properties_Expressions_kt_3704108793_0();
    return primaryExpressionRule;
  }
  var primaryExpressionRule;
  function _get_intermediateUnaryRule__130444351() {
    init_properties_Expressions_kt_3704108793_0();
    return intermediateUnaryRule;
  }
  var intermediateUnaryRule;
  function _get_unaryOperatorRule__3416965282() {
    init_properties_Expressions_kt_3704108793_0();
    return unaryOperatorRule;
  }
  var unaryOperatorRule;
  function _get_factorRule__2451187968() {
    init_properties_Expressions_kt_3704108793_0();
    return factorRule;
  }
  var factorRule;
  function _get_termRule__3496802115() {
    init_properties_Expressions_kt_3704108793_0();
    return termRule;
  }
  var termRule;
  function _get_comparisonRule__3271879686() {
    init_properties_Expressions_kt_3704108793_0();
    return comparisonRule;
  }
  var comparisonRule;
  function _get_equalityRule__4290076917() {
    init_properties_Expressions_kt_3704108793_0();
    return equalityRule;
  }
  var equalityRule;
  function _get_logicAndRule__551482294() {
    init_properties_Expressions_kt_3704108793_0();
    return logicAndRule;
  }
  var logicAndRule;
  function _get_logicOrRule__2427813044() {
    init_properties_Expressions_kt_3704108793_0();
    return logicOrRule;
  }
  var logicOrRule;
  function _get_intermediateAssignmentRule__2191975945() {
    init_properties_Expressions_kt_3704108793_0();
    return intermediateAssignmentRule;
  }
  var intermediateAssignmentRule;
  function _get_assignmentRule__474639298() {
    init_properties_Expressions_kt_3704108793_0();
    return assignmentRule;
  }
  var assignmentRule;
  function _get_assignmentCombiner__3906624139() {
    init_properties_Expressions_kt_3704108793_0();
    return assignmentCombiner;
  }
  var assignmentCombiner;
  function sam$parser_Rule$0_4(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_4.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_4.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_5(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_5.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_5.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_6(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_6.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_6.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function expressionRule$lambda() {
    return function (ctx) {
      return _get_assignmentRule__474639298().match_mgqn9o_k$(ctx);
    };
  }
  function parenthesizedRule$lambda() {
    return function (it) {
      return it.get_fkrdnv_k$(1);
    };
  }
  function intermediateUnaryRule$lambda$lambda() {
    return function (tokens) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_let_0 = toOperatorTypeAndOperand(tokens);
          {
          }
          var tmp$ret$0;
          $l$block: {
            var type_2 = tmp0_let_0.component1_7eebsc_k$();
            var operand_3 = tmp0_let_0.component2_7eebsb_k$();
            tmp$ret$0 = new UnaryOperatorExpression(type_2, operand_3);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp1_let_0 = tmp$ret$1;
        {
        }
        tmp$ret$2 = new NodeToken(tmp1_let_0);
        break $l$block_1;
      }
      return tmp$ret$2;
    };
  }
  function intermediateUnaryRule$lambda() {
    return function (ctx) {
      var tmp = [orRule([_get_minusRule__508930117(), _get_bangRule__3863114999()]), _get_unaryOperatorRule__3416965282()];
      return andRule(tmp, intermediateUnaryRule$lambda$lambda()).match_mgqn9o_k$(ctx);
    };
  }
  function intermediateAssignmentRule$lambda() {
    return function (ctx) {
      return _get_assignmentRule__474639298().match_mgqn9o_k$(ctx);
    };
  }
  function assignmentRule$lambda() {
    return function (it) {
      return _get_assignmentCombiner__3906624139()(it);
    };
  }
  function assignmentCombiner$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(0);
        break $l$block;
      }
      var identifierToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(2);
        break $l$block_0;
      }
      var exprToken = tmp$ret$1;
      Unit_getInstance();
      var tmp;
      if (identifierToken instanceof NodeToken) {
        var tmp_0 = identifierToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof IdentifierExpression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      var tmp_1;
      if (exprToken instanceof NodeToken) {
        var tmp_2 = exprToken._get_node__804577417_db0vwp_k$();
        tmp_1 = tmp_2 instanceof Expression;
      } else {
        {
          tmp_1 = false;
        }
      }
      validateGrammar(tmp_1);
      return new NodeToken(new AssignmentExpression(identifierToken._get_node__804577417_db0vwp_k$(), exprToken._get_node__804577417_db0vwp_k$()));
    };
  }
  var properties_initialized_Expressions_kt_1116722517_0;
  function init_properties_Expressions_kt_3704108793_0() {
    if (!properties_initialized_Expressions_kt_1116722517_0) {
      properties_initialized_Expressions_kt_1116722517_0 = true;
      var tmp = expressionRule$lambda();
      expressionRule = new sam$parser_Rule$0_4(tmp);
      var tmp_0 = [_get_leftParenRule__1902601682(), _get_expressionRule__1177618135(), _get_rightParenRule__1732469473()];
      parenthesizedRule = andRule(tmp_0, parenthesizedRule$lambda());
      primaryExpressionRule = orRule([_get_numberLiteralRule__1169032783(), _get_stringLiteralRule__1507958551(), _get_trueRule__2817010529(), _get_falseRule__2092789618(), _get_nilRule__2431495172(), _get_parenthesizedRule__2859028345(), _get_identifierRule__1187417958()]);
      var tmp_1 = intermediateUnaryRule$lambda();
      intermediateUnaryRule = new sam$parser_Rule$0_5(tmp_1);
      unaryOperatorRule = orRule([_get_intermediateUnaryRule__130444351(), _get_callRule__423798929()]);
      factorRule = binaryOperatorRule(_get_unaryOperatorRule__3416965282(), orRule([_get_starRule__3617092893(), _get_slashRule__3520761688()]));
      termRule = binaryOperatorRule(_get_factorRule__2451187968(), orRule([_get_plusRule__4285741781(), _get_minusRule__508930117()]));
      comparisonRule = binaryOperatorRule(_get_termRule__3496802115(), orRule([_get_greaterRule__267522619(), _get_greaterEqualRule__2700446741(), _get_lessRule__1835847222(), _get_lessEqualRule__1715999994()]));
      equalityRule = binaryOperatorRule(_get_comparisonRule__3271879686(), orRule([_get_bangEqualRule__3093397209(), _get_equalEqualRule__972457487()]));
      logicAndRule = binaryOperatorRule(_get_equalityRule__4290076917(), _get_andKeywordRule__3113789853());
      logicOrRule = binaryOperatorRule(_get_logicAndRule__551482294(), _get_orKeywordRule__4012300911());
      var tmp_2 = intermediateAssignmentRule$lambda();
      intermediateAssignmentRule = new sam$parser_Rule$0_6(tmp_2);
      var tmp_3 = [_get_identifierRule__1187417958(), _get_equalRule__3345433601(), _get_intermediateAssignmentRule__2191975945()];
      assignmentRule = orRule([andRule(tmp_3, assignmentRule$lambda()), _get_logicOrRule__2427813044()]);
      assignmentCombiner = assignmentCombiner$lambda();
    }
  }
  function _get_forStatementRule__1677567049() {
    init_properties_ForStatement_kt_461219252();
    return forStatementRule;
  }
  var forStatementRule;
  function forStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(2);
        break $l$block;
      }
      var initializerToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(3);
        break $l$block_0;
      }
      var optionalConditionToken = tmp$ret$1;
      var optionalIncrementToken = component6(tmp0_container);
      var bodyToken = component8(tmp0_container);
      Unit_getInstance();
      var varDeclarationInitializer = null;
      Unit_getInstance();
      var expressionStatementInitializer = null;
      Unit_getInstance();
      var tmp1_subject = initializerToken;
      var tmp;
      if (tmp1_subject instanceof NodeToken) {
        var tmp2_subject = initializerToken._get_node__804577417_db0vwp_k$();
        var tmp_0;
        if (tmp2_subject instanceof VarDeclaration) {
          varDeclarationInitializer = initializerToken._get_node__804577417_db0vwp_k$();
          tmp_0 = Unit_getInstance();
        } else {
          if (tmp2_subject instanceof ExpressionStatement) {
            expressionStatementInitializer = initializerToken._get_node__804577417_db0vwp_k$();
            tmp_0 = Unit_getInstance();
          } else {
            {
              tmp_0 = throwInvalidGrammar();
            }
          }
        }
        tmp = tmp_0;
      } else {
        {
          var tmp_1;
          if (initializerToken instanceof SymbolicToken) {
            var tmp_2 = initializerToken._get_lexerToken__1629285342_qy18m6_k$();
            tmp_1 = tmp_2 instanceof SemicolonLexerToken;
          } else {
            {
              tmp_1 = false;
            }
          }
          tmp = validateGrammar(tmp_1);
        }
      }
      validateGrammar(optionalConditionToken instanceof OptionalToken);
      var tmp3_safe_receiver = optionalConditionToken._get_token__3639048440_auim88_k$();
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        var tmp$ret$3;
        $l$block_2: {
          {
          }
          var tmp$ret$2;
          $l$block_1: {
            var tmp_4;
            if (tmp3_safe_receiver instanceof NodeToken) {
              var tmp_5 = tmp3_safe_receiver._get_node__804577417_db0vwp_k$();
              tmp_4 = tmp_5 instanceof Expression;
            } else {
              {
                tmp_4 = false;
              }
            }
            validateGrammar(tmp_4);
            tmp$ret$2 = tmp3_safe_receiver._get_node__804577417_db0vwp_k$();
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp_3 = tmp$ret$3;
      }
      var conditionExpression = tmp_3;
      Unit_getInstance();
      validateGrammar(optionalIncrementToken instanceof OptionalToken);
      var tmp4_safe_receiver = optionalIncrementToken._get_token__3639048440_auim88_k$();
      var tmp_6;
      if (tmp4_safe_receiver == null) {
        tmp_6 = null;
      } else {
        var tmp$ret$5;
        $l$block_4: {
          {
          }
          var tmp$ret$4;
          $l$block_3: {
            var tmp_7;
            if (tmp4_safe_receiver instanceof NodeToken) {
              var tmp_8 = tmp4_safe_receiver._get_node__804577417_db0vwp_k$();
              tmp_7 = tmp_8 instanceof Expression;
            } else {
              {
                tmp_7 = false;
              }
            }
            validateGrammar(tmp_7);
            tmp$ret$4 = tmp4_safe_receiver._get_node__804577417_db0vwp_k$();
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        tmp_6 = tmp$ret$5;
      }
      var incrementExpression = tmp_6;
      Unit_getInstance();
      var tmp_9;
      if (bodyToken instanceof NodeToken) {
        var tmp_10 = bodyToken._get_node__804577417_db0vwp_k$();
        tmp_9 = tmp_10 instanceof Statement;
      } else {
        {
          tmp_9 = false;
        }
      }
      validateGrammar(tmp_9);
      var tmp_11;
      if (!(varDeclarationInitializer == null)) {
        tmp_11 = ForStatement_init_$Create$(varDeclarationInitializer, conditionExpression, incrementExpression, bodyToken._get_node__804577417_db0vwp_k$());
      } else {
        tmp_11 = ForStatement_init_$Create$_0(expressionStatementInitializer, conditionExpression, incrementExpression, bodyToken._get_node__804577417_db0vwp_k$());
      }
      var forStatement = tmp_11;
      Unit_getInstance();
      return new NodeToken(forStatement);
    };
  }
  var properties_initialized_ForStatement_kt_1856623320;
  function init_properties_ForStatement_kt_461219252() {
    if (!properties_initialized_ForStatement_kt_1856623320) {
      properties_initialized_ForStatement_kt_1856623320 = true;
      var tmp = [_get_forKeywordRule__1743380879(), _get_leftParenRule__1902601682(), orRule([_get_varDeclarationRule__910348284(), _get_expressionStatementRule__891749918(), _get_semicolonRule__1298692900()]), optionalRule(_get_expressionRule__1177618135()), _get_semicolonRule__1298692900(), optionalRule(_get_expressionRule__1177618135()), _get_rightParenRule__1732469473(), _get_intermediateStatementRule__996543999()];
      forStatementRule = andRule(tmp, forStatementRule$lambda());
    }
  }
  function _get_argumentsDeclarationRule__3232159339() {
    init_properties_Function_kt_2381206722();
    return argumentsDeclarationRule;
  }
  var argumentsDeclarationRule;
  function _get_intermediateBlockStatementRule__496927892() {
    init_properties_Function_kt_2381206722();
    return intermediateBlockStatementRule;
  }
  var intermediateBlockStatementRule;
  function _get_functionDeclarationRule__236624947() {
    init_properties_Function_kt_2381206722();
    return functionDeclarationRule;
  }
  var functionDeclarationRule;
  function _get_argumentsRule__4127323551() {
    init_properties_Function_kt_2381206722();
    return argumentsRule;
  }
  var argumentsRule;
  function _get_callRule__423798929() {
    init_properties_Function_kt_2381206722();
    return callRule;
  }
  var callRule;
  function sam$parser_Rule$0_7(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_7.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_7.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function argumentsDeclarationRule$lambda() {
    return function (tokens) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_filterNotTo_0_1_3 = ArrayList_init_$Create$_0();
          var tmp0_iterator_1_2_4 = tokens.iterator_jk1svi_k$();
          while (tmp0_iterator_1_2_4.hasNext_bitz1p_k$()) {
            var element_2_3_5 = tmp0_iterator_1_2_4.next_20eer_k$();
            var tmp$ret$0;
            $l$block: {
              var tmp;
              if (element_2_3_5 instanceof SymbolicToken) {
                var tmp_0 = element_2_3_5._get_lexerToken__1629285342_qy18m6_k$();
                tmp = tmp_0 instanceof CommaLexerToken;
              } else {
                {
                  tmp = false;
                }
              }
              tmp$ret$0 = tmp;
              break $l$block;
            }
            if (!tmp$ret$0) {
              tmp0_filterNotTo_0_1_3.add_1j60pz_k$(element_2_3_5);
              Unit_getInstance();
            } else {
            }
          }
          tmp$ret$1 = tmp0_filterNotTo_0_1_3;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      var arguments_2 = tmp$ret$2;
      Unit_getInstance();
      var tmp$ret$3;
      $l$block_5: {
        var tmp_1;
        if (isInterface(arguments_2, Collection)) {
          tmp_1 = arguments_2.isEmpty_y1axqb_k$();
        } else {
          {
            tmp_1 = false;
          }
        }
        if (tmp_1) {
          tmp$ret$3 = true;
          break $l$block_5;
        } else {
        }
        var tmp0_iterator_1_6 = arguments_2.iterator_jk1svi_k$();
        while (tmp0_iterator_1_6.hasNext_bitz1p_k$()) {
          var element_2_7 = tmp0_iterator_1_6.next_20eer_k$();
          var tmp$ret$4;
          $l$block_3: {
            var tmp_2;
            if (element_2_7 instanceof NodeToken) {
              var tmp_3 = element_2_7._get_node__804577417_db0vwp_k$();
              tmp_2 = tmp_3 instanceof IdentifierExpression;
            } else {
              {
                tmp_2 = false;
              }
            }
            tmp$ret$4 = tmp_2;
            break $l$block_3;
          }
          if (!tmp$ret$4) {
            tmp$ret$3 = false;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$3 = true;
        break $l$block_5;
      }
      validateGrammar(tmp$ret$3);
      return new CompositeToken(arguments_2);
    };
  }
  function intermediateBlockStatementRule$lambda() {
    return function (ctx) {
      return _get_blockStatementRule__2317780429().match_mgqn9o_k$(ctx);
    };
  }
  function functionDeclarationRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block;
      }
      var functionNameToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(3);
        break $l$block_0;
      }
      var optionalArgumentsDeclarationToken = tmp$ret$1;
      var bodyToken = component6(tmp0_container);
      Unit_getInstance();
      var tmp;
      if (functionNameToken instanceof NodeToken) {
        var tmp_0 = functionNameToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof IdentifierExpression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      validateGrammar(optionalArgumentsDeclarationToken instanceof OptionalToken);
      var tmp_1;
      if (bodyToken instanceof NodeToken) {
        var tmp_2 = bodyToken._get_node__804577417_db0vwp_k$();
        tmp_1 = tmp_2 instanceof BlockStatement;
      } else {
        {
          tmp_1 = false;
        }
      }
      validateGrammar(tmp_1);
      var tmp$ret$3;
      $l$block_6: {
        var tmp1_asExpressionList_0 = optionalArgumentsDeclarationToken;
        if (tmp1_asExpressionList_0._get_token__3639048440_auim88_k$() == null) {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = emptyList();
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_6;
        }
        var tmp_3 = tmp1_asExpressionList_0._get_token__3639048440_auim88_k$();
        validateGrammar(tmp_3 instanceof CompositeToken);
        var tmp$ret$6;
        $l$block_5: {
          var tmp0_map_0 = tmp1_asExpressionList_0._get_token__3639048440_auim88_k$()._get_tokens__1141353649_ivj641_k$();
          var tmp$ret$5;
          $l$block_4: {
            var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
            var tmp0_iterator_1_2 = tmp0_map_0.iterator_jk1svi_k$();
            while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
              var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
              var tmp$ret$4;
              $l$block_3: {
                var tmp_4;
                if (item_2_3 instanceof NodeToken) {
                  var tmp_5 = item_2_3._get_node__804577417_db0vwp_k$();
                  tmp_4 = tmp_5 instanceof IdentifierExpression;
                } else {
                  {
                    tmp_4 = false;
                  }
                }
                validateGrammar(tmp_4);
                tmp$ret$4 = item_2_3._get_node__804577417_db0vwp_k$();
                break $l$block_3;
              }
              tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$4);
              Unit_getInstance();
            }
            tmp$ret$5 = tmp0_mapTo_0_1;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$3 = tmp$ret$6;
        break $l$block_6;
      }
      var function_0 = new LoxFunctionValue(tmp$ret$3, bodyToken._get_node__804577417_db0vwp_k$());
      Unit_getInstance();
      var tmp$ret$7;
      $l$block_7: {
        var tmp2_let_0 = new VarDeclaration(functionNameToken._get_node__804577417_db0vwp_k$(), function_0);
        {
        }
        tmp$ret$7 = new NodeToken(tmp2_let_0);
        break $l$block_7;
      }
      return tmp$ret$7;
    };
  }
  function argumentsRule$lambda() {
    return function (tokens) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_filterNotTo_0_1_3 = ArrayList_init_$Create$_0();
          var tmp0_iterator_1_2_4 = tokens.iterator_jk1svi_k$();
          while (tmp0_iterator_1_2_4.hasNext_bitz1p_k$()) {
            var element_2_3_5 = tmp0_iterator_1_2_4.next_20eer_k$();
            var tmp$ret$0;
            $l$block: {
              var tmp;
              if (element_2_3_5 instanceof SymbolicToken) {
                var tmp_0 = element_2_3_5._get_lexerToken__1629285342_qy18m6_k$();
                tmp = tmp_0 instanceof CommaLexerToken;
              } else {
                {
                  tmp = false;
                }
              }
              tmp$ret$0 = tmp;
              break $l$block;
            }
            if (!tmp$ret$0) {
              tmp0_filterNotTo_0_1_3.add_1j60pz_k$(element_2_3_5);
              Unit_getInstance();
            } else {
            }
          }
          tmp$ret$1 = tmp0_filterNotTo_0_1_3;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      var arguments_2 = tmp$ret$2;
      Unit_getInstance();
      var tmp$ret$3;
      $l$block_5: {
        var tmp_1;
        if (isInterface(arguments_2, Collection)) {
          tmp_1 = arguments_2.isEmpty_y1axqb_k$();
        } else {
          {
            tmp_1 = false;
          }
        }
        if (tmp_1) {
          tmp$ret$3 = true;
          break $l$block_5;
        } else {
        }
        var tmp0_iterator_1_6 = arguments_2.iterator_jk1svi_k$();
        while (tmp0_iterator_1_6.hasNext_bitz1p_k$()) {
          var element_2_7 = tmp0_iterator_1_6.next_20eer_k$();
          var tmp$ret$4;
          $l$block_3: {
            var tmp_2;
            if (element_2_7 instanceof NodeToken) {
              var tmp_3 = element_2_7._get_node__804577417_db0vwp_k$();
              tmp_2 = tmp_3 instanceof Expression;
            } else {
              {
                tmp_2 = false;
              }
            }
            tmp$ret$4 = tmp_2;
            break $l$block_3;
          }
          if (!tmp$ret$4) {
            tmp$ret$3 = false;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$3 = true;
        break $l$block_5;
      }
      validateGrammar(tmp$ret$3);
      return new CompositeToken(arguments_2);
    };
  }
  function callRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(0);
        break $l$block;
      }
      var functionToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block_0;
      }
      var callsToken = tmp$ret$1;
      Unit_getInstance();
      var tmp;
      if (functionToken instanceof NodeToken) {
        var tmp_0 = functionToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof Expression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      validateGrammar(callsToken instanceof CompositeToken);
      var processed = functionToken._get_node__804577417_db0vwp_k$();
      Unit_getInstance();
      var tmp0_forEach_0 = chunked(callsToken._get_tokens__1141353649_ivj641_k$(), 3);
      var tmp0_iterator_1 = tmp0_forEach_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var tmp0_container_4 = element_2;
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp0_container_4.get_fkrdnv_k$(1);
            break $l$block_1;
          }
          var optionalArgumentsToken_5 = tmp$ret$2;
          validateGrammar(optionalArgumentsToken_5 instanceof OptionalToken);
          var tmp_1 = processed;
          var tmp$ret$4;
          $l$block_7: {
            var tmp1_asExpressionList_0_6 = optionalArgumentsToken_5;
            if (tmp1_asExpressionList_0_6._get_token__3639048440_auim88_k$() == null) {
              var tmp$ret$3;
              $l$block_2: {
                tmp$ret$3 = emptyList();
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_7;
            }
            var tmp_2 = tmp1_asExpressionList_0_6._get_token__3639048440_auim88_k$();
            validateGrammar(tmp_2 instanceof CompositeToken);
            var tmp$ret$7;
            $l$block_6: {
              var tmp0_map_0_7 = tmp1_asExpressionList_0_6._get_token__3639048440_auim88_k$()._get_tokens__1141353649_ivj641_k$();
              var tmp$ret$6;
              $l$block_5: {
                var tmp0_mapTo_0_1_8 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0_7, 10));
                var tmp0_iterator_1_2_9 = tmp0_map_0_7.iterator_jk1svi_k$();
                while (tmp0_iterator_1_2_9.hasNext_bitz1p_k$()) {
                  var item_2_3_10 = tmp0_iterator_1_2_9.next_20eer_k$();
                  var tmp$ret$5;
                  $l$block_4: {
                    var tmp_3;
                    if (item_2_3_10 instanceof NodeToken) {
                      var tmp_4 = item_2_3_10._get_node__804577417_db0vwp_k$();
                      tmp_3 = tmp_4 instanceof Expression;
                    } else {
                      {
                        tmp_3 = false;
                      }
                    }
                    validateGrammar(tmp_3);
                    tmp$ret$5 = item_2_3_10._get_node__804577417_db0vwp_k$();
                    break $l$block_4;
                  }
                  tmp0_mapTo_0_1_8.add_1j60pz_k$(tmp$ret$5);
                  Unit_getInstance();
                }
                tmp$ret$6 = tmp0_mapTo_0_1_8;
                break $l$block_5;
              }
              tmp$ret$7 = tmp$ret$6;
              break $l$block_6;
            }
            tmp$ret$4 = tmp$ret$7;
            break $l$block_7;
          }
          processed = new FunctionCallExpression(tmp_1, tmp$ret$4);
        }
      }
      Unit_getInstance();
      return new NodeToken(processed);
    };
  }
  var properties_initialized_Function_kt_2691085286;
  function init_properties_Function_kt_2381206722() {
    if (!properties_initialized_Function_kt_2691085286) {
      properties_initialized_Function_kt_2691085286 = true;
      var tmp$ret$0;
      $l$block: {
        var tmp0_listRule_0 = _get_identifierRule__1187417958();
        var tmp = _get_commaRule__3746010368();
        tmp$ret$0 = binaryOperatorRule_0(tmp0_listRule_0, tmp, argumentsDeclarationRule$lambda());
        break $l$block;
      }
      argumentsDeclarationRule = tmp$ret$0;
      var tmp_0 = intermediateBlockStatementRule$lambda();
      intermediateBlockStatementRule = new sam$parser_Rule$0_7(tmp_0);
      var tmp_1 = [_get_funKeywordRule__4178608453(), _get_identifierRule__1187417958(), _get_leftParenRule__1902601682(), optionalRule(_get_argumentsDeclarationRule__3232159339()), _get_rightParenRule__1732469473(), _get_intermediateBlockStatementRule__496927892()];
      functionDeclarationRule = andRule(tmp_1, functionDeclarationRule$lambda());
      var tmp$ret$0_0;
      $l$block_0: {
        var tmp0_listRule_0_0 = _get_expressionRule__1177618135();
        var tmp_2 = _get_commaRule__3746010368();
        tmp$ret$0_0 = binaryOperatorRule_0(tmp0_listRule_0_0, tmp_2, argumentsRule$lambda());
        break $l$block_0;
      }
      argumentsRule = tmp$ret$0_0;
      var tmp_3 = [_get_primaryExpressionRule__3731994683(), zeroOrMoreRule_0(andRule_0([_get_leftParenRule__1902601682(), optionalRule(_get_argumentsRule__4127323551()), _get_rightParenRule__1732469473()]))];
      callRule = andRule(tmp_3, callRule$lambda());
    }
  }
  function _get_intermediateDeclarationRule__3129730516() {
    init_properties_Grammar_kt_1704452909();
    return intermediateDeclarationRule;
  }
  var intermediateDeclarationRule;
  function _get_declarationRule__1431902011() {
    init_properties_Grammar_kt_1704452909();
    return declarationRule;
  }
  var declarationRule;
  function _get_programRule__2915460593() {
    init_properties_Grammar_kt_1704452909();
    return programRule;
  }
  var programRule;
  function asDeclarationList(_this__1828080292) {
    init_properties_Grammar_kt_1704452909();
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$(collectionSizeOrDefault(_this__1828080292, 10));
        var tmp0_iterator_1_2 = _this__1828080292.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            var tmp;
            if (item_2_3 instanceof NodeToken) {
              var tmp_0 = item_2_3._get_node__804577417_db0vwp_k$();
              tmp = tmp_0 instanceof Declaration;
            } else {
              {
                tmp = false;
              }
            }
            validateGrammar(tmp);
            tmp$ret$0 = item_2_3._get_node__804577417_db0vwp_k$();
            break $l$block;
          }
          tmp0_mapTo_0_1.add_1j60pz_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function sam$parser_Rule$0_8(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_8.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_8.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function intermediateDeclarationRule$lambda() {
    return function (ctx) {
      return _get_declarationRule__1431902011().match_mgqn9o_k$(ctx);
    };
  }
  function programRule$lambda() {
    return function (tokens) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_let_0 = asDeclarationList(tokens);
        {
        }
        tmp$ret$0 = new ProgramToken(tmp0_let_0);
        break $l$block;
      }
      return tmp$ret$0;
    };
  }
  var properties_initialized_Grammar_kt_3099922313;
  function init_properties_Grammar_kt_1704452909() {
    if (!properties_initialized_Grammar_kt_3099922313) {
      properties_initialized_Grammar_kt_3099922313 = true;
      var tmp = intermediateDeclarationRule$lambda();
      intermediateDeclarationRule = new sam$parser_Rule$0_8(tmp);
      declarationRule = orRule([_get_statementRule__248409382(), _get_varDeclarationRule__910348284(), _get_functionDeclarationRule__236624947()]);
      var tmp_0 = _get_declarationRule__1431902011();
      programRule = zeroOrMoreRule(tmp_0, programRule$lambda());
    }
  }
  function _get_printStatementRule__1524841453() {
    init_properties_Statements_kt_1816544118();
    return printStatementRule;
  }
  var printStatementRule;
  function _get_expressionStatementRule__891749918() {
    init_properties_Statements_kt_1816544118();
    return expressionStatementRule;
  }
  var expressionStatementRule;
  function _get_returnStatementRule__3456673846() {
    init_properties_Statements_kt_1816544118();
    return returnStatementRule;
  }
  var returnStatementRule;
  function _get_blockStatementRule__2317780429() {
    init_properties_Statements_kt_1816544118();
    return blockStatementRule;
  }
  var blockStatementRule;
  function _get_intermediateStatementRule__996543999() {
    init_properties_Statements_kt_1816544118();
    return intermediateStatementRule;
  }
  var intermediateStatementRule;
  function _get_ifStatementRule__2418783971() {
    init_properties_Statements_kt_1816544118();
    return ifStatementRule;
  }
  var ifStatementRule;
  function _get_whileStatementRule__1171922289() {
    init_properties_Statements_kt_1816544118();
    return whileStatementRule;
  }
  var whileStatementRule;
  function _get_statementRule__248409382() {
    init_properties_Statements_kt_1816544118();
    return statementRule;
  }
  var statementRule;
  function sam$parser_Rule$0_9(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_9.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_9.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function printStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block;
      }
      var expressionToken = tmp$ret$0;
      Unit_getInstance();
      var tmp;
      if (expressionToken instanceof NodeToken) {
        var tmp_0 = expressionToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof Expression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return new NodeToken(new PrintStatement(expressionToken._get_node__804577417_db0vwp_k$()));
    };
  }
  function expressionStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(0);
        break $l$block;
      }
      var expressionToken = tmp$ret$0;
      Unit_getInstance();
      var tmp;
      if (expressionToken instanceof NodeToken) {
        var tmp_0 = expressionToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof Expression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return new NodeToken(new ExpressionStatement(expressionToken._get_node__804577417_db0vwp_k$()));
    };
  }
  function returnStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block;
      }
      var optionalExpressionToken = tmp$ret$0;
      Unit_getInstance();
      validateGrammar(optionalExpressionToken instanceof OptionalToken);
      var tmp1_safe_receiver = optionalExpressionToken._get_token__3639048440_auim88_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp_0;
            if (tmp1_safe_receiver instanceof NodeToken) {
              var tmp_1 = tmp1_safe_receiver._get_node__804577417_db0vwp_k$();
              tmp_0 = tmp_1 instanceof Expression;
            } else {
              {
                tmp_0 = false;
              }
            }
            validateGrammar(tmp_0);
            tmp$ret$1 = tmp1_safe_receiver._get_node__804577417_db0vwp_k$();
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp = tmp$ret$2;
      }
      var tmp2_elvis_lhs = tmp;
      var returnResult = tmp2_elvis_lhs == null ? NilValue_getInstance() : tmp2_elvis_lhs;
      Unit_getInstance();
      return new NodeToken(new ReturnStatement(returnResult));
    };
  }
  function blockStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block;
      }
      var declarationsToken = tmp$ret$0;
      Unit_getInstance();
      validateGrammar(declarationsToken instanceof CompositeToken);
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_let_0 = asDeclarationList(declarationsToken._get_tokens__1141353649_ivj641_k$());
          {
          }
          tmp$ret$1 = new BlockStatement(tmp0_let_0);
          break $l$block_0;
        }
        var tmp1_let_0 = tmp$ret$1;
        {
        }
        tmp$ret$2 = new NodeToken(tmp1_let_0);
        break $l$block_1;
      }
      return tmp$ret$2;
    };
  }
  function intermediateStatementRule$lambda() {
    return function (ctx) {
      return _get_statementRule__248409382().match_mgqn9o_k$(ctx);
    };
  }
  function ifStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(2);
        break $l$block;
      }
      var conditionToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(4);
        break $l$block_0;
      }
      var bodyToken = tmp$ret$1;
      var optionalElseToken = component6(tmp0_container);
      Unit_getInstance();
      var tmp;
      if (conditionToken instanceof NodeToken) {
        var tmp_0 = conditionToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof Expression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      var tmp_1;
      if (bodyToken instanceof NodeToken) {
        var tmp_2 = bodyToken._get_node__804577417_db0vwp_k$();
        tmp_1 = tmp_2 instanceof Statement;
      } else {
        {
          tmp_1 = false;
        }
      }
      validateGrammar(tmp_1);
      validateGrammar(optionalElseToken instanceof OptionalToken);
      var tmp1_safe_receiver = optionalElseToken._get_token__3639048440_auim88_k$();
      var tmp_3;
      if (tmp1_safe_receiver == null) {
        tmp_3 = null;
      } else {
        var tmp$ret$4;
        $l$block_3: {
          {
          }
          var tmp$ret$3;
          $l$block_2: {
            validateGrammar(tmp1_safe_receiver instanceof CompositeToken);
            var tmp0_container_2 = tmp1_safe_receiver._get_tokens__1141353649_ivj641_k$();
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = tmp0_container_2.get_fkrdnv_k$(1);
              break $l$block_1;
            }
            var elseBodyToken_3 = tmp$ret$2;
            var tmp_4;
            if (elseBodyToken_3 instanceof NodeToken) {
              var tmp_5 = elseBodyToken_3._get_node__804577417_db0vwp_k$();
              tmp_4 = tmp_5 instanceof Statement;
            } else {
              {
                tmp_4 = false;
              }
            }
            validateGrammar(tmp_4);
            tmp$ret$3 = elseBodyToken_3._get_node__804577417_db0vwp_k$();
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp_3 = tmp$ret$4;
      }
      var elseBody = tmp_3;
      Unit_getInstance();
      return new NodeToken(new IfStatement(conditionToken._get_node__804577417_db0vwp_k$(), bodyToken._get_node__804577417_db0vwp_k$(), elseBody));
    };
  }
  function whileStatementRule$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(2);
        break $l$block;
      }
      var conditionToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(4);
        break $l$block_0;
      }
      var bodyToken = tmp$ret$1;
      Unit_getInstance();
      var tmp;
      if (conditionToken instanceof NodeToken) {
        var tmp_0 = conditionToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof Expression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      var tmp_1;
      if (bodyToken instanceof NodeToken) {
        var tmp_2 = bodyToken._get_node__804577417_db0vwp_k$();
        tmp_1 = tmp_2 instanceof Statement;
      } else {
        {
          tmp_1 = false;
        }
      }
      validateGrammar(tmp_1);
      return new NodeToken(new WhileStatement(conditionToken._get_node__804577417_db0vwp_k$(), bodyToken._get_node__804577417_db0vwp_k$()));
    };
  }
  var properties_initialized_Statements_kt_3257100698;
  function init_properties_Statements_kt_1816544118() {
    if (!properties_initialized_Statements_kt_3257100698) {
      properties_initialized_Statements_kt_3257100698 = true;
      var tmp = [_get_printKeywordRule__500765235(), _get_expressionRule__1177618135(), _get_semicolonRule__1298692900()];
      printStatementRule = andRule(tmp, printStatementRule$lambda());
      var tmp_0 = [_get_expressionRule__1177618135(), _get_semicolonRule__1298692900()];
      expressionStatementRule = andRule(tmp_0, expressionStatementRule$lambda());
      var tmp_1 = [_get_returnKeywordRule__4140760252(), optionalRule(_get_expressionRule__1177618135()), _get_semicolonRule__1298692900()];
      returnStatementRule = andRule(tmp_1, returnStatementRule$lambda());
      var tmp_2 = [_get_leftBraceRule__2396161609(), zeroOrMoreRule_0(_get_intermediateDeclarationRule__3129730516()), _get_rightBraceRule__2226029400()];
      blockStatementRule = andRule(tmp_2, blockStatementRule$lambda());
      var tmp_3 = intermediateStatementRule$lambda();
      intermediateStatementRule = new sam$parser_Rule$0_9(tmp_3);
      var tmp_4 = [_get_ifKeywordRule__1976554153(), _get_leftParenRule__1902601682(), _get_expressionRule__1177618135(), _get_rightParenRule__1732469473(), _get_intermediateStatementRule__996543999(), optionalRule(andRule_0([_get_elseKeywordRule__2884251653(), _get_intermediateStatementRule__996543999()]))];
      ifStatementRule = andRule(tmp_4, ifStatementRule$lambda());
      var tmp_5 = [_get_whileKeywordRule__3311568055(), _get_leftParenRule__1902601682(), _get_expressionRule__1177618135(), _get_rightParenRule__1732469473(), _get_intermediateStatementRule__996543999()];
      whileStatementRule = andRule(tmp_5, whileStatementRule$lambda());
      statementRule = orRule([_get_expressionStatementRule__891749918(), _get_printStatementRule__1524841453(), _get_blockStatementRule__2317780429(), _get_ifStatementRule__2418783971(), _get_whileStatementRule__1171922289(), _get_forStatementRule__1677567049(), _get_returnStatementRule__3456673846()]);
    }
  }
  function _get_identifierRule__1187417958() {
    init_properties_Terminals_kt_1661659165();
    return identifierRule;
  }
  var identifierRule;
  function _get_stringLiteralRule__1507958551() {
    init_properties_Terminals_kt_1661659165();
    return stringLiteralRule;
  }
  var stringLiteralRule;
  function _get_numberLiteralRule__1169032783() {
    init_properties_Terminals_kt_1661659165();
    return numberLiteralRule;
  }
  var numberLiteralRule;
  function _get_funKeywordRule__4178608453() {
    init_properties_Terminals_kt_1661659165();
    return funKeywordRule;
  }
  var funKeywordRule;
  function _get_returnKeywordRule__4140760252() {
    init_properties_Terminals_kt_1661659165();
    return returnKeywordRule;
  }
  var returnKeywordRule;
  function _get_ifKeywordRule__1976554153() {
    init_properties_Terminals_kt_1661659165();
    return ifKeywordRule;
  }
  var ifKeywordRule;
  function _get_elseKeywordRule__2884251653() {
    init_properties_Terminals_kt_1661659165();
    return elseKeywordRule;
  }
  var elseKeywordRule;
  function _get_orKeywordRule__4012300911() {
    init_properties_Terminals_kt_1661659165();
    return orKeywordRule;
  }
  var orKeywordRule;
  function _get_andKeywordRule__3113789853() {
    init_properties_Terminals_kt_1661659165();
    return andKeywordRule;
  }
  var andKeywordRule;
  function _get_whileKeywordRule__3311568055() {
    init_properties_Terminals_kt_1661659165();
    return whileKeywordRule;
  }
  var whileKeywordRule;
  function _get_forKeywordRule__1743380879() {
    init_properties_Terminals_kt_1661659165();
    return forKeywordRule;
  }
  var forKeywordRule;
  function _get_printKeywordRule__500765235() {
    init_properties_Terminals_kt_1661659165();
    return printKeywordRule;
  }
  var printKeywordRule;
  function _get_varKeywordRule__2877259501() {
    init_properties_Terminals_kt_1661659165();
    return varKeywordRule;
  }
  var varKeywordRule;
  function _get_trueRule__2817010529() {
    init_properties_Terminals_kt_1661659165();
    return trueRule;
  }
  var trueRule;
  function _get_falseRule__2092789618() {
    init_properties_Terminals_kt_1661659165();
    return falseRule;
  }
  var falseRule;
  function _get_nilRule__2431495172() {
    init_properties_Terminals_kt_1661659165();
    return nilRule;
  }
  var nilRule;
  function _get_commaRule__3746010368() {
    init_properties_Terminals_kt_1661659165();
    return commaRule;
  }
  var commaRule;
  function _get_semicolonRule__1298692900() {
    init_properties_Terminals_kt_1661659165();
    return semicolonRule;
  }
  var semicolonRule;
  function _get_leftBraceRule__2396161609() {
    init_properties_Terminals_kt_1661659165();
    return leftBraceRule;
  }
  var leftBraceRule;
  function _get_rightBraceRule__2226029400() {
    init_properties_Terminals_kt_1661659165();
    return rightBraceRule;
  }
  var rightBraceRule;
  function _get_leftParenRule__1902601682() {
    init_properties_Terminals_kt_1661659165();
    return leftParenRule;
  }
  var leftParenRule;
  function _get_rightParenRule__1732469473() {
    init_properties_Terminals_kt_1661659165();
    return rightParenRule;
  }
  var rightParenRule;
  function _get_bangRule__3863114999() {
    init_properties_Terminals_kt_1661659165();
    return bangRule;
  }
  var bangRule;
  function _get_plusRule__4285741781() {
    init_properties_Terminals_kt_1661659165();
    return plusRule;
  }
  var plusRule;
  function _get_minusRule__508930117() {
    init_properties_Terminals_kt_1661659165();
    return minusRule;
  }
  var minusRule;
  function _get_starRule__3617092893() {
    init_properties_Terminals_kt_1661659165();
    return starRule;
  }
  var starRule;
  function _get_slashRule__3520761688() {
    init_properties_Terminals_kt_1661659165();
    return slashRule;
  }
  var slashRule;
  function _get_greaterRule__267522619() {
    init_properties_Terminals_kt_1661659165();
    return greaterRule;
  }
  var greaterRule;
  function _get_greaterEqualRule__2700446741() {
    init_properties_Terminals_kt_1661659165();
    return greaterEqualRule;
  }
  var greaterEqualRule;
  function _get_lessRule__1835847222() {
    init_properties_Terminals_kt_1661659165();
    return lessRule;
  }
  var lessRule;
  function _get_lessEqualRule__1715999994() {
    init_properties_Terminals_kt_1661659165();
    return lessEqualRule;
  }
  var lessEqualRule;
  function _get_equalRule__3345433601() {
    init_properties_Terminals_kt_1661659165();
    return equalRule;
  }
  var equalRule;
  function _get_bangEqualRule__3093397209() {
    init_properties_Terminals_kt_1661659165();
    return bangEqualRule;
  }
  var bangEqualRule;
  function _get_equalEqualRule__972457487() {
    init_properties_Terminals_kt_1661659165();
    return equalEqualRule;
  }
  var equalEqualRule;
  var eofRule;
  function sam$parser_Rule$0_10(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_10.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_10.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_11(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_11.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_11.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_12(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_12.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_12.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_13(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_13.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_13.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_14(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_14.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_14.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_15(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_15.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_15.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_16(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_16.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_16.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_17(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_17.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_17.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_18(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_18.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_18.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_19(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_19.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_19.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_20(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_20.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_20.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_21(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_21.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_21.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_22(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_22.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_22.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_23(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_23.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_23.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_24(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_24.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_24.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_25(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_25.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_25.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_26(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_26.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_26.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_27(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_27.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_27.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_28(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_28.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_28.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_29(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_29.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_29.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_30(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_30.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_30.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_31(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_31.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_31.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_32(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_32.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_32.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_33(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_33.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_33.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_34(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_34.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_34.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_35(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_35.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_35.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_36(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_36.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_36.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_37(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_37.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_37.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_38(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_38.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_38.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_39(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_39.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_39.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_40(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_40.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_40.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_41(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_41.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_41.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_42(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_42.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_42.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_43(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_43.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_43.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function sam$parser_Rule$0_44(function_0) {
    this.function_1 = function_0;
  }
  sam$parser_Rule$0_44.prototype.match_mgqn9o_k$ = function (ctx) {
    return this.function_1(ctx);
  };
  sam$parser_Rule$0_44.$metadata$ = {
    simpleName: 'sam$parser_Rule$0',
    kind: 'class',
    interfaces: [Rule]
  };
  function identifierRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof IdentifierLexerToken) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__3_3_1682276431 = currentToken_2_2;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = new IdentifierExpression(tmp0__anonymous__3_3_1682276431._get_name__804168992_das4rk_k$());
            break $l$block;
          }
          tmp$ret$1 = new NodeToken(tmp$ret$0);
          break $l$block_0;
        }
        return new Matched(tmp$ret$1, ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function stringLiteralRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof StringLiteralLexerToken) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__3_3_1682276431 = currentToken_2_2;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = new StringValue(tmp0__anonymous__3_3_1682276431._get_value__3683422336_a43j40_k$());
            break $l$block;
          }
          tmp$ret$1 = new NodeToken(tmp$ret$0);
          break $l$block_0;
        }
        return new Matched(tmp$ret$1, ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function numberLiteralRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof NumberLiteralLexerToken) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__3_3_1682276431 = currentToken_2_2;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = new NumericValue(tmp0__anonymous__3_3_1682276431._get_value__3683422336_a43j40_k$());
            break $l$block;
          }
          tmp$ret$1 = new NodeToken(tmp$ret$0);
          break $l$block_0;
        }
        return new Matched(tmp$ret$1, ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function funKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof FunLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function returnKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof ReturnLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function ifKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof IfLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function elseKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof ElseLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function orKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof OrLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function andKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof AndLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function whileKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof WhileLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function forKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof ForLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function printKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof PrintLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function varKeywordRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof VarLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function trueRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof TrueLexerToken) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__3_3_1682276431 = currentToken_2_2;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = new BooleanValue(true);
            break $l$block;
          }
          tmp$ret$1 = new NodeToken(tmp$ret$0);
          break $l$block_0;
        }
        return new Matched(tmp$ret$1, ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function falseRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof FalseLexerToken) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__3_3_1682276431 = currentToken_2_2;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = new BooleanValue(false);
            break $l$block;
          }
          tmp$ret$1 = new NodeToken(tmp$ret$0);
          break $l$block_0;
        }
        return new Matched(tmp$ret$1, ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function nilRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof NilLexerToken) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__3_3_1682276431 = currentToken_2_2;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = NilValue_getInstance();
            break $l$block;
          }
          tmp$ret$1 = new NodeToken(tmp$ret$0);
          break $l$block_0;
        }
        return new Matched(tmp$ret$1, ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function commaRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof CommaLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function semicolonRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof SemicolonLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function leftBraceRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof LeftBraceLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function rightBraceRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof RightBraceLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function leftParenRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof LeftParenLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function rightParenRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof RightParenLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function bangRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof BangLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function plusRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof PlusLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function minusRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof MinusLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function starRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof StarLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function slashRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof SlashLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function greaterRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof GreaterLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function greaterEqualRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof GreaterEqualLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function lessRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof LessLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function lessEqualRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof LessEqualLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function equalRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof EqualLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function bangEqualRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof BangEqualLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function equalEqualRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof EqualEqualLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  function eofRule$lambda() {
    return function (ctx) {
      var currentToken_2_2 = ctx.currentToken_o4eznk_k$();
      Unit_getInstance();
      var tmp;
      if (currentToken_2_2 instanceof EOFLexerToken) {
        return new Matched(new SymbolicToken(currentToken_2_2), ctx.move_1zys1_k$());
      } else {
      }
      return Unmatched_getInstance();
    };
  }
  var properties_initialized_Terminals_kt_2677960057;
  function init_properties_Terminals_kt_1661659165() {
    if (!properties_initialized_Terminals_kt_2677960057) {
      properties_initialized_Terminals_kt_2677960057 = true;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp = identifierRule$lambda();
          tmp$ret$0 = new sam$parser_Rule$0_10(tmp);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      identifierRule = tmp$ret$1;
      var tmp$ret$1_0;
      $l$block_2: {
        var tmp$ret$0_0;
        $l$block_1: {
          var tmp_0 = stringLiteralRule$lambda();
          tmp$ret$0_0 = new sam$parser_Rule$0_11(tmp_0);
          break $l$block_1;
        }
        tmp$ret$1_0 = tmp$ret$0_0;
        break $l$block_2;
      }
      stringLiteralRule = tmp$ret$1_0;
      var tmp$ret$1_1;
      $l$block_4: {
        var tmp$ret$0_1;
        $l$block_3: {
          var tmp_1 = numberLiteralRule$lambda();
          tmp$ret$0_1 = new sam$parser_Rule$0_12(tmp_1);
          break $l$block_3;
        }
        tmp$ret$1_1 = tmp$ret$0_1;
        break $l$block_4;
      }
      numberLiteralRule = tmp$ret$1_1;
      var tmp$ret$1_2;
      $l$block_6: {
        var tmp$ret$0_2;
        $l$block_5: {
          var tmp_2 = funKeywordRule$lambda();
          tmp$ret$0_2 = new sam$parser_Rule$0_13(tmp_2);
          break $l$block_5;
        }
        tmp$ret$1_2 = tmp$ret$0_2;
        break $l$block_6;
      }
      funKeywordRule = tmp$ret$1_2;
      var tmp$ret$1_3;
      $l$block_8: {
        var tmp$ret$0_3;
        $l$block_7: {
          var tmp_3 = returnKeywordRule$lambda();
          tmp$ret$0_3 = new sam$parser_Rule$0_14(tmp_3);
          break $l$block_7;
        }
        tmp$ret$1_3 = tmp$ret$0_3;
        break $l$block_8;
      }
      returnKeywordRule = tmp$ret$1_3;
      var tmp$ret$1_4;
      $l$block_10: {
        var tmp$ret$0_4;
        $l$block_9: {
          var tmp_4 = ifKeywordRule$lambda();
          tmp$ret$0_4 = new sam$parser_Rule$0_15(tmp_4);
          break $l$block_9;
        }
        tmp$ret$1_4 = tmp$ret$0_4;
        break $l$block_10;
      }
      ifKeywordRule = tmp$ret$1_4;
      var tmp$ret$1_5;
      $l$block_12: {
        var tmp$ret$0_5;
        $l$block_11: {
          var tmp_5 = elseKeywordRule$lambda();
          tmp$ret$0_5 = new sam$parser_Rule$0_16(tmp_5);
          break $l$block_11;
        }
        tmp$ret$1_5 = tmp$ret$0_5;
        break $l$block_12;
      }
      elseKeywordRule = tmp$ret$1_5;
      var tmp$ret$1_6;
      $l$block_14: {
        var tmp$ret$0_6;
        $l$block_13: {
          var tmp_6 = orKeywordRule$lambda();
          tmp$ret$0_6 = new sam$parser_Rule$0_17(tmp_6);
          break $l$block_13;
        }
        tmp$ret$1_6 = tmp$ret$0_6;
        break $l$block_14;
      }
      orKeywordRule = tmp$ret$1_6;
      var tmp$ret$1_7;
      $l$block_16: {
        var tmp$ret$0_7;
        $l$block_15: {
          var tmp_7 = andKeywordRule$lambda();
          tmp$ret$0_7 = new sam$parser_Rule$0_18(tmp_7);
          break $l$block_15;
        }
        tmp$ret$1_7 = tmp$ret$0_7;
        break $l$block_16;
      }
      andKeywordRule = tmp$ret$1_7;
      var tmp$ret$1_8;
      $l$block_18: {
        var tmp$ret$0_8;
        $l$block_17: {
          var tmp_8 = whileKeywordRule$lambda();
          tmp$ret$0_8 = new sam$parser_Rule$0_19(tmp_8);
          break $l$block_17;
        }
        tmp$ret$1_8 = tmp$ret$0_8;
        break $l$block_18;
      }
      whileKeywordRule = tmp$ret$1_8;
      var tmp$ret$1_9;
      $l$block_20: {
        var tmp$ret$0_9;
        $l$block_19: {
          var tmp_9 = forKeywordRule$lambda();
          tmp$ret$0_9 = new sam$parser_Rule$0_20(tmp_9);
          break $l$block_19;
        }
        tmp$ret$1_9 = tmp$ret$0_9;
        break $l$block_20;
      }
      forKeywordRule = tmp$ret$1_9;
      var tmp$ret$1_10;
      $l$block_22: {
        var tmp$ret$0_10;
        $l$block_21: {
          var tmp_10 = printKeywordRule$lambda();
          tmp$ret$0_10 = new sam$parser_Rule$0_21(tmp_10);
          break $l$block_21;
        }
        tmp$ret$1_10 = tmp$ret$0_10;
        break $l$block_22;
      }
      printKeywordRule = tmp$ret$1_10;
      var tmp$ret$1_11;
      $l$block_24: {
        var tmp$ret$0_11;
        $l$block_23: {
          var tmp_11 = varKeywordRule$lambda();
          tmp$ret$0_11 = new sam$parser_Rule$0_22(tmp_11);
          break $l$block_23;
        }
        tmp$ret$1_11 = tmp$ret$0_11;
        break $l$block_24;
      }
      varKeywordRule = tmp$ret$1_11;
      var tmp$ret$1_12;
      $l$block_26: {
        var tmp$ret$0_12;
        $l$block_25: {
          var tmp_12 = trueRule$lambda();
          tmp$ret$0_12 = new sam$parser_Rule$0_23(tmp_12);
          break $l$block_25;
        }
        tmp$ret$1_12 = tmp$ret$0_12;
        break $l$block_26;
      }
      trueRule = tmp$ret$1_12;
      var tmp$ret$1_13;
      $l$block_28: {
        var tmp$ret$0_13;
        $l$block_27: {
          var tmp_13 = falseRule$lambda();
          tmp$ret$0_13 = new sam$parser_Rule$0_24(tmp_13);
          break $l$block_27;
        }
        tmp$ret$1_13 = tmp$ret$0_13;
        break $l$block_28;
      }
      falseRule = tmp$ret$1_13;
      var tmp$ret$1_14;
      $l$block_30: {
        var tmp$ret$0_14;
        $l$block_29: {
          var tmp_14 = nilRule$lambda();
          tmp$ret$0_14 = new sam$parser_Rule$0_25(tmp_14);
          break $l$block_29;
        }
        tmp$ret$1_14 = tmp$ret$0_14;
        break $l$block_30;
      }
      nilRule = tmp$ret$1_14;
      var tmp$ret$1_15;
      $l$block_32: {
        var tmp$ret$0_15;
        $l$block_31: {
          var tmp_15 = commaRule$lambda();
          tmp$ret$0_15 = new sam$parser_Rule$0_26(tmp_15);
          break $l$block_31;
        }
        tmp$ret$1_15 = tmp$ret$0_15;
        break $l$block_32;
      }
      commaRule = tmp$ret$1_15;
      var tmp$ret$1_16;
      $l$block_34: {
        var tmp$ret$0_16;
        $l$block_33: {
          var tmp_16 = semicolonRule$lambda();
          tmp$ret$0_16 = new sam$parser_Rule$0_27(tmp_16);
          break $l$block_33;
        }
        tmp$ret$1_16 = tmp$ret$0_16;
        break $l$block_34;
      }
      semicolonRule = tmp$ret$1_16;
      var tmp$ret$1_17;
      $l$block_36: {
        var tmp$ret$0_17;
        $l$block_35: {
          var tmp_17 = leftBraceRule$lambda();
          tmp$ret$0_17 = new sam$parser_Rule$0_28(tmp_17);
          break $l$block_35;
        }
        tmp$ret$1_17 = tmp$ret$0_17;
        break $l$block_36;
      }
      leftBraceRule = tmp$ret$1_17;
      var tmp$ret$1_18;
      $l$block_38: {
        var tmp$ret$0_18;
        $l$block_37: {
          var tmp_18 = rightBraceRule$lambda();
          tmp$ret$0_18 = new sam$parser_Rule$0_29(tmp_18);
          break $l$block_37;
        }
        tmp$ret$1_18 = tmp$ret$0_18;
        break $l$block_38;
      }
      rightBraceRule = tmp$ret$1_18;
      var tmp$ret$1_19;
      $l$block_40: {
        var tmp$ret$0_19;
        $l$block_39: {
          var tmp_19 = leftParenRule$lambda();
          tmp$ret$0_19 = new sam$parser_Rule$0_30(tmp_19);
          break $l$block_39;
        }
        tmp$ret$1_19 = tmp$ret$0_19;
        break $l$block_40;
      }
      leftParenRule = tmp$ret$1_19;
      var tmp$ret$1_20;
      $l$block_42: {
        var tmp$ret$0_20;
        $l$block_41: {
          var tmp_20 = rightParenRule$lambda();
          tmp$ret$0_20 = new sam$parser_Rule$0_31(tmp_20);
          break $l$block_41;
        }
        tmp$ret$1_20 = tmp$ret$0_20;
        break $l$block_42;
      }
      rightParenRule = tmp$ret$1_20;
      var tmp$ret$1_21;
      $l$block_44: {
        var tmp$ret$0_21;
        $l$block_43: {
          var tmp_21 = bangRule$lambda();
          tmp$ret$0_21 = new sam$parser_Rule$0_32(tmp_21);
          break $l$block_43;
        }
        tmp$ret$1_21 = tmp$ret$0_21;
        break $l$block_44;
      }
      bangRule = tmp$ret$1_21;
      var tmp$ret$1_22;
      $l$block_46: {
        var tmp$ret$0_22;
        $l$block_45: {
          var tmp_22 = plusRule$lambda();
          tmp$ret$0_22 = new sam$parser_Rule$0_33(tmp_22);
          break $l$block_45;
        }
        tmp$ret$1_22 = tmp$ret$0_22;
        break $l$block_46;
      }
      plusRule = tmp$ret$1_22;
      var tmp$ret$1_23;
      $l$block_48: {
        var tmp$ret$0_23;
        $l$block_47: {
          var tmp_23 = minusRule$lambda();
          tmp$ret$0_23 = new sam$parser_Rule$0_34(tmp_23);
          break $l$block_47;
        }
        tmp$ret$1_23 = tmp$ret$0_23;
        break $l$block_48;
      }
      minusRule = tmp$ret$1_23;
      var tmp$ret$1_24;
      $l$block_50: {
        var tmp$ret$0_24;
        $l$block_49: {
          var tmp_24 = starRule$lambda();
          tmp$ret$0_24 = new sam$parser_Rule$0_35(tmp_24);
          break $l$block_49;
        }
        tmp$ret$1_24 = tmp$ret$0_24;
        break $l$block_50;
      }
      starRule = tmp$ret$1_24;
      var tmp$ret$1_25;
      $l$block_52: {
        var tmp$ret$0_25;
        $l$block_51: {
          var tmp_25 = slashRule$lambda();
          tmp$ret$0_25 = new sam$parser_Rule$0_36(tmp_25);
          break $l$block_51;
        }
        tmp$ret$1_25 = tmp$ret$0_25;
        break $l$block_52;
      }
      slashRule = tmp$ret$1_25;
      var tmp$ret$1_26;
      $l$block_54: {
        var tmp$ret$0_26;
        $l$block_53: {
          var tmp_26 = greaterRule$lambda();
          tmp$ret$0_26 = new sam$parser_Rule$0_37(tmp_26);
          break $l$block_53;
        }
        tmp$ret$1_26 = tmp$ret$0_26;
        break $l$block_54;
      }
      greaterRule = tmp$ret$1_26;
      var tmp$ret$1_27;
      $l$block_56: {
        var tmp$ret$0_27;
        $l$block_55: {
          var tmp_27 = greaterEqualRule$lambda();
          tmp$ret$0_27 = new sam$parser_Rule$0_38(tmp_27);
          break $l$block_55;
        }
        tmp$ret$1_27 = tmp$ret$0_27;
        break $l$block_56;
      }
      greaterEqualRule = tmp$ret$1_27;
      var tmp$ret$1_28;
      $l$block_58: {
        var tmp$ret$0_28;
        $l$block_57: {
          var tmp_28 = lessRule$lambda();
          tmp$ret$0_28 = new sam$parser_Rule$0_39(tmp_28);
          break $l$block_57;
        }
        tmp$ret$1_28 = tmp$ret$0_28;
        break $l$block_58;
      }
      lessRule = tmp$ret$1_28;
      var tmp$ret$1_29;
      $l$block_60: {
        var tmp$ret$0_29;
        $l$block_59: {
          var tmp_29 = lessEqualRule$lambda();
          tmp$ret$0_29 = new sam$parser_Rule$0_40(tmp_29);
          break $l$block_59;
        }
        tmp$ret$1_29 = tmp$ret$0_29;
        break $l$block_60;
      }
      lessEqualRule = tmp$ret$1_29;
      var tmp$ret$1_30;
      $l$block_62: {
        var tmp$ret$0_30;
        $l$block_61: {
          var tmp_30 = equalRule$lambda();
          tmp$ret$0_30 = new sam$parser_Rule$0_41(tmp_30);
          break $l$block_61;
        }
        tmp$ret$1_30 = tmp$ret$0_30;
        break $l$block_62;
      }
      equalRule = tmp$ret$1_30;
      var tmp$ret$1_31;
      $l$block_64: {
        var tmp$ret$0_31;
        $l$block_63: {
          var tmp_31 = bangEqualRule$lambda();
          tmp$ret$0_31 = new sam$parser_Rule$0_42(tmp_31);
          break $l$block_63;
        }
        tmp$ret$1_31 = tmp$ret$0_31;
        break $l$block_64;
      }
      bangEqualRule = tmp$ret$1_31;
      var tmp$ret$1_32;
      $l$block_66: {
        var tmp$ret$0_32;
        $l$block_65: {
          var tmp_32 = equalEqualRule$lambda();
          tmp$ret$0_32 = new sam$parser_Rule$0_43(tmp_32);
          break $l$block_65;
        }
        tmp$ret$1_32 = tmp$ret$0_32;
        break $l$block_66;
      }
      equalEqualRule = tmp$ret$1_32;
      var tmp$ret$1_33;
      $l$block_68: {
        var tmp$ret$0_33;
        $l$block_67: {
          var tmp_33 = eofRule$lambda();
          tmp$ret$0_33 = new sam$parser_Rule$0_44(tmp_33);
          break $l$block_67;
        }
        tmp$ret$1_33 = tmp$ret$0_33;
        break $l$block_68;
      }
      eofRule = tmp$ret$1_33;
    }
  }
  function _get_varDeclarationRule__910348284() {
    init_properties_VarDeclaration_kt_3166727335();
    return varDeclarationRule;
  }
  var varDeclarationRule;
  function _get_varDeclarationCombiner__3409056197() {
    init_properties_VarDeclaration_kt_3166727335();
    return varDeclarationCombiner;
  }
  var varDeclarationCombiner;
  function _get_assignmentCombiner__3906624139_0() {
    init_properties_VarDeclaration_kt_3166727335();
    return assignmentCombiner_0;
  }
  var assignmentCombiner_0;
  function varDeclarationRule$lambda() {
    return function (it) {
      return _get_assignmentCombiner__3906624139_0()(it);
    };
  }
  function varDeclarationRule$lambda_0() {
    return function (it) {
      return _get_varDeclarationCombiner__3409056197()(it);
    };
  }
  function varDeclarationCombiner$lambda() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block;
      }
      var identifierToken = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_container.get_fkrdnv_k$(2);
        break $l$block_0;
      }
      var optionalToken = tmp$ret$1;
      Unit_getInstance();
      var tmp;
      if (identifierToken instanceof NodeToken) {
        var tmp_0 = identifierToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof IdentifierExpression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      validateGrammar(optionalToken instanceof OptionalToken);
      var tmp1_safe_receiver = optionalToken._get_token__3639048440_auim88_k$();
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$3;
        $l$block_2: {
          {
          }
          var tmp$ret$2;
          $l$block_1: {
            var tmp_2;
            var tmp_3 = optionalToken._get_token__3639048440_auim88_k$();
            if (tmp_3 instanceof NodeToken) {
              var tmp_4 = optionalToken._get_token__3639048440_auim88_k$()._get_node__804577417_db0vwp_k$();
              tmp_2 = tmp_4 instanceof Expression;
            } else {
              {
                tmp_2 = false;
              }
            }
            validateGrammar(tmp_2);
            tmp$ret$2 = optionalToken._get_token__3639048440_auim88_k$()._get_node__804577417_db0vwp_k$();
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp_1 = tmp$ret$3;
      }
      var valueExpression = tmp_1;
      Unit_getInstance();
      return new NodeToken(new VarDeclaration(identifierToken._get_node__804577417_db0vwp_k$(), valueExpression));
    };
  }
  function assignmentCombiner$lambda_0() {
    return function (tokens) {
      var tmp0_container = tokens;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_container.get_fkrdnv_k$(1);
        break $l$block;
      }
      var expressionToken = tmp$ret$0;
      Unit_getInstance();
      var tmp;
      if (expressionToken instanceof NodeToken) {
        var tmp_0 = expressionToken._get_node__804577417_db0vwp_k$();
        tmp = tmp_0 instanceof Expression;
      } else {
        {
          tmp = false;
        }
      }
      validateGrammar(tmp);
      return new NodeToken(expressionToken._get_node__804577417_db0vwp_k$());
    };
  }
  var properties_initialized_VarDeclaration_kt_4120240331;
  function init_properties_VarDeclaration_kt_3166727335() {
    if (!properties_initialized_VarDeclaration_kt_4120240331) {
      properties_initialized_VarDeclaration_kt_4120240331 = true;
      var tmp = _get_varKeywordRule__2877259501();
      var tmp_0 = _get_identifierRule__1187417958();
      var tmp_1 = [_get_equalRule__3345433601(), _get_expressionRule__1177618135()];
      var tmp_2 = [tmp, tmp_0, optionalRule(andRule(tmp_1, varDeclarationRule$lambda())), _get_semicolonRule__1298692900()];
      varDeclarationRule = andRule(tmp_2, varDeclarationRule$lambda_0());
      varDeclarationCombiner = varDeclarationCombiner$lambda();
      assignmentCombiner_0 = assignmentCombiner$lambda_0();
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=kotlinjstest.js.map