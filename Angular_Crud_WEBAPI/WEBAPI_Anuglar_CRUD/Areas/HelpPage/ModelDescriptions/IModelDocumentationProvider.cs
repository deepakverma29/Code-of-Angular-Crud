using System;
using System.Reflection;

namespace WEBAPI_Anuglar_CRUD.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}