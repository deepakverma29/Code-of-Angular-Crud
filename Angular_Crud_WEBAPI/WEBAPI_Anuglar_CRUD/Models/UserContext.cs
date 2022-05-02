using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WEBAPI_Anuglar_CRUD.Models
{
    public class UserContext:DbContext
    {
        public UserContext():base("angular_crud")
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Department> Departments { get; set; }
    }
}