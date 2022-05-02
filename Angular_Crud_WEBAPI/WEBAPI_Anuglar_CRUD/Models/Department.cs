using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WEBAPI_Anuglar_CRUD.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string DepartmentName { get; set; }

        public ICollection<User> users { get; set; }
    }
}