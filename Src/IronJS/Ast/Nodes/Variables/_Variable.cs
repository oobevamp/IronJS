﻿using System;
using IronJS.Runtime.Jit;
using IronJS.Tools;
using Microsoft.Scripting.Ast;
using Microsoft.Scripting.Utils;

namespace IronJS.Ast.Nodes {
    using Et = Expression;

	public abstract class IVariable : Base {
        public string Name { get; private set; }

		ParameterExpression _expr;
        public ParameterExpression Expr {
			get {
				if (_expr == null)
					Setup();

				return _expr;
			}
			set {
				_expr = value;
			}
		}

        public override Type Type {
            get {
                if (_forcedType != null)
                    return _forcedType;

                HashSet<Type> set = new HashSet<Type>();

                set.UnionWith(_usedAs);
                set.Add(HashSetTools.EvalType(_usedWith));

                return HashSetTools.EvalType(set);
            }
        }

        public IVariable(string name, NodeType nodeType)
            : base(nodeType, null) {
            Name = name;
            _usedAs = new HashSet<Type>();
            _usedWith = new HashSet<INode>();
        }

        HashSet<Type> _usedAs;
        public void UsedAs(Type type) {
            _usedAs.Add(type);
        }

        HashSet<INode> _usedWith;
        public void UsedWith(INode node) {
            _usedWith.Add(node);
        }

        Type _forcedType;
        public void ForceType(Type type) {
            _forcedType = type;
        }

        public virtual void Setup() {
            Expr = Et.Parameter(Type, Name);
        }

		public virtual void Clear() {
			Expr = null;
		}

        public override sealed Et Compile(Lambda func) {
			return Expr;
        }

		public override string ToString() {
			return base.ToString() + " " + Name + " <" + TypeTools.ShortName(Type) + ">";
		}
    }
}
