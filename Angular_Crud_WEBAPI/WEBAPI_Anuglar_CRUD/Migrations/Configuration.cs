namespace WEBAPI_Anuglar_CRUD.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WEBAPI_Anuglar_CRUD.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WEBAPI_Anuglar_CRUD.Models.UserContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WEBAPI_Anuglar_CRUD.Models.UserContext context)
        {
            //var departments = new List<Department>
            //{
            //    new Department(){DepartmentName="IT"},
            //    new Department(){DepartmentName="HR"},
            //    new Department(){DepartmentName="Account"},
            //    new Department(){DepartmentName="CA"},
            //    new Department(){DepartmentName="DBA"}
            //};

            //departments.ForEach(depart => context.Departments.Add(depart));
            //context.SaveChanges();

            var users = new List<User>
            {
                new User(){Name="Deepak Verma",Email="se.deepak29@gmail.com",Mobile="7983700043",Address="Delhi",Gender=1,DepartmentId=2},
                new User(){Name="Gaurav Verma",Email="gaurav9@gmail.com",Mobile="7983700043",Address="Delhi",Gender=1,DepartmentId=2},
                new User(){Name="Amit Sharma",Email="amit@gmail.com",Mobile="4565475767",Address="Meerut",Gender=1,DepartmentId=3},
                new User(){Name="Ravi Sharma",Email="ravi12@gmail.com",Mobile="546786787",Address="Mumbai",Gender=1,DepartmentId=4},
                new User(){Name="Tanya",Email="tanya@gmail.com",Mobile="7867686785",Address="Chennai",Gender=0,DepartmentId=1},

            };

            users.ForEach(user => context.Users.Add(user));

            context.SaveChanges();


        }
    }
}
