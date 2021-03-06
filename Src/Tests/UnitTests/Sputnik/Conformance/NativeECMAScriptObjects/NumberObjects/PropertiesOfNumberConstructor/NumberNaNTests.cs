// <auto-generated />
namespace IronJS.Tests.UnitTests.Sputnik.Conformance.NativeECMAScriptObjects.NumberObjects.PropertiesOfNumberConstructor
{
    using System;
    using NUnit.Framework;

    [TestFixture]
    public class NumberNaNTests : SputnikTestFixture
    {
        public NumberNaNTests()
            : base(@"Conformance\15_Native_ECMA_Script_Objects\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\15.7.3.4_Number.NaN")
        {
        }

        [Test]
        [Category("Sputnik Conformance")]
        [Category("ECMA 15.7.3.4")]
        [TestCase("S15.7.3.4_A1.js", Description = "Number.NaN is Not-a-Number")]
        public void NumberNaNIsNotANumber(string file)
        {
            RunFile(file);
        }

        [Test]
        [Category("Sputnik Conformance")]
        [Category("ECMA 15.7.3.4")]
        [TestCase("S15.7.3.4_A2.js", Description = "Number.NaN is ReadOnly")]
        public void NumberNaNIsReadOnly(string file)
        {
            RunFile(file);
        }

        [Test]
        [Category("Sputnik Conformance")]
        [Category("ECMA 15.7.3.4")]
        [TestCase("S15.7.3.4_A3.js", Description = "Number.NaN is DontDelete")]
        public void NumberNaNIsDontDelete(string file)
        {
            RunFile(file);
        }

        [Test]
        [Category("Sputnik Conformance")]
        [Category("ECMA 15.7.3.4")]
        [TestCase("S15.7.3.4_A4.js", Description = "Number.NaN has the attribute DontEnum")]
        public void NumberNaNHasTheAttributeDontEnum(string file)
        {
            RunFile(file);
        }
    }
}