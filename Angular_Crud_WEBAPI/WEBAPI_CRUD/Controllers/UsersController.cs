using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using WEBAPI_CRUD.Models;

namespace WEBAPI_CRUD.Controllers
{
    
    public class UsersController : ApiController
    {
        private DBOperation db = new DBOperation();

        // GET: api/Users
        public HttpResponseMessage GetUsers()
        {
            var jObject= from users  in db.Users 
                         join depart in db.Departments on users.DepartmentId equals depart.Id
                         select new {users.Id,users.Name,users.Email,users.Address,users.Gender
                         ,users.Mobile,users.DepartmentId,depart.DepartmentName};
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(jObject));
            return response;
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public HttpResponseMessage GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound,"Not found users");
            }
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(user));
            return response;
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public HttpResponseMessage PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Bad Request");
            }

            db.Entry(user).State = EntityState.Modified;

            var response = Request.CreateResponse(HttpStatusCode.OK);
            try
            {
                db.SaveChanges();
                response.Content = new StringContent(JsonConvert.SerializeObject(user));
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!UserExists(id))
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Not found");
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed,ex );
                }
            }

            return response;
        }

        // POST: api/Users
        [ResponseType(typeof(User))]
        public HttpResponseMessage PostUser(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(user));
            return response;
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public HttpResponseMessage DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound,"Not Found");
            }

            db.Users.Remove(user);
            db.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(user));
            return response;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        public bool UserExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }

        [HttpGet]
        [Route("api/users/getuser/{id}")]
        public HttpResponseMessage usertest(int? id)
        {
            //return db.Users.Count(e => e.Id == id) > 0;
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}