package in.abb.abbprmgmt.model;

/**
 * Created by lakshmana on 14/03/18.
 */

public class MainOptions {

    private String status;

    private Data[] data;

    public String getStatus ()
    {
        return status;
    }

    public void setStatus (String status)
    {
        this.status = status;
    }

    public Data[] getData ()
    {
        return data;
    }

    public void setData (Data[] data)
    {
        this.data = data;
    }

    public class Data
    {
        private Events[] events;

        private Projects[] projects;

        private String name;

        public Events[] getEvents ()
        {
            return events;
        }

        public void setEvents (Events[] events)
        {
            this.events = events;
        }


        public Projects[] getProjects ()
        {
            return projects;
        }

        public void setProjects (Projects[] projects)
        {
            this.projects = projects;
        }

        public String getName ()
        {
            return name;
        }

        public void setName (String name)
        {
            this.name = name;
        }

    }
    public class Events
    {
        private String desc;

        private String details;

        private String status;

        private String start;

        private String subject;

        private String due;

        private Tasks[] tasks;

        private String resp;

        public String getDesc ()
        {
            return desc;
        }

        public void setDesc (String desc)
        {
            this.desc = desc;
        }

        public String getDetails ()
        {
            return details;
        }

        public void setDetails (String details)
        {
            this.details = details;
        }

        public String getStatus ()
        {
            return status;
        }

        public void setStatus (String status)
        {
            this.status = status;
        }

        public String getStart ()
        {
            return start;
        }

        public void setStart (String start)
        {
            this.start = start;
        }

        public String getSubject ()
        {
            return subject;
        }

        public void setSubject (String subject)
        {
            this.subject = subject;
        }

        public String getDue ()
        {
            return due;
        }

        public void setDue (String due)
        {
            this.due = due;
        }

        public Tasks[] getTasks ()
        {
            return tasks;
        }

        public void setTasks (Tasks[] tasks)
        {
            this.tasks = tasks;
        }

        public String getResp ()
        {
            return resp;
        }

        public void setResp (String resp)
        {
            this.resp = resp;
        }
    }
    public class Tasks
    {
        private String desc;

        private String details;

        private String status;

        private String start;

        private String subject;

        private String due;

        private String resp;

        public String getDesc ()
        {
            return desc;
        }

        public void setDesc (String desc)
        {
            this.desc = desc;
        }

        public String getDetails ()
        {
            return details;
        }

        public void setDetails (String details)
        {
            this.details = details;
        }

        public String getStatus ()
        {
            return status;
        }

        public void setStatus (String status)
        {
            this.status = status;
        }

        public String getStart ()
        {
            return start;
        }

        public void setStart (String start)
        {
            this.start = start;
        }

        public String getSubject ()
        {
            return subject;
        }

        public void setSubject (String subject)
        {
            this.subject = subject;
        }

        public String getDue ()
        {
            return due;
        }

        public void setDue (String due)
        {
            this.due = due;
        }

        public String getResp ()
        {
            return resp;
        }

        public void setResp (String resp)
        {
            this.resp = resp;
        }

    }
    public class Projects
    {
        private String desc;

        private String details;

        private String status;

        private String start;

        private String subject;

        private String due;

        private Tasks[] tasks;

        private String resp;

        public String getDesc ()
        {
            return desc;
        }

        public void setDesc (String desc)
        {
            this.desc = desc;
        }

        public String getDetails ()
        {
            return details;
        }

        public void setDetails (String details)
        {
            this.details = details;
        }

        public String getStatus ()
        {
            return status;
        }

        public void setStatus (String status)
        {
            this.status = status;
        }

        public String getStart ()
        {
            return start;
        }

        public void setStart (String start)
        {
            this.start = start;
        }

        public String getSubject ()
        {
            return subject;
        }

        public void setSubject (String subject)
        {
            this.subject = subject;
        }

        public String getDue ()
        {
            return due;
        }

        public void setDue (String due)
        {
            this.due = due;
        }

        public Tasks[] getTasks ()
        {
            return tasks;
        }

        public void setTasks (Tasks[] tasks)
        {
            this.tasks = tasks;
        }

        public String getResp ()
        {
            return resp;
        }

        public void setResp (String resp)
        {
            this.resp = resp;
        }

    }
}
