import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Paper sx={{ p: { xs: 5, sm: 10 }, my: 15 }} elevation={7}>
      <Typography variant="h4" align="center" gutterBottom>
        Why You should have a todo list
      </Typography>
      <Typography
        variant="h6"
        color="primary.dark"
        paragraph
        sx={{ fontWeight: 600 }}
      >
        It will help you feel good
      </Typography>
      <Typography variant="body1" paragraph>
        Writing things down helps reduce stress and makes you feel more relaxed.
        You get a feeling of being in control of your life and actions. Also,
        crossing items off your to-do list gives you a sense of accomplishment
        and progress. This helps you motivate yourself and keep going when
        things get tough.
      </Typography>
      <Typography
        variant="h6"
        color="primary.dark"
        paragraph
        sx={{ fontWeight: 600 }}
      >
        It will help you achieve big goals
      </Typography>
      <Typography variant="body1" paragraph>
        It’s tough to achieve big goals when they seem to overwhelm you. As a
        consequence, it’s easy to procrastinate on them. One of the best ways to
        solve this problem is by breaking down a large goal into smaller parts.
        This is where a to-do list becomes significant. It lets you make large
        and overwhelming projects manageable.
      </Typography>{" "}
      <Typography
        variant="h6"
        color="primary.dark"
        paragraph
        sx={{ fontWeight: 600 }}
      >
        It will let you save time
      </Typography>
      <Typography variant="body1" paragraph>
        Another benefit of having a to-do list is the amount of time you save.
        Often planning for 15 minutes can save you an hour or more of execution.
        It’s like building a house – you start with a blueprint, or you could
        make a mistake and start over again. A task list makes it easy to see
        the foundations of your projects and work to a predefined blueprint.
        Also, when you don’t have a list, you can waste time thinking about your
        next steps instead of taking them.
      </Typography>{" "}
      <Typography
        variant="h6"
        color="primary.dark"
        paragraph
        sx={{ fontWeight: 600 }}
      >
        It will help you be more reliable
      </Typography>
      <Typography variant="body1" paragraph>
        Writing things down helps reduce stress and makes you feel more relaxed.
        You get a feeling of being in control of your life and actions. Also,
        crossing items off your to-do list gives you a sense of accomplishment
        and progress. This helps you motivate yourself and keep going when
        things get tough.
      </Typography>
      <Typography
        variant="h6"
        color="primary.dark"
        paragraph
        sx={{ fontWeight: 600 }}
      >
        Conclusion
      </Typography>
      <Typography variant="body1" paragraph>
        Having a to-do list can make things much easier. Whether you’re looking
        to achieve more of your goals or controlling your time better, a to-do
        list will help you. You can get a positive boost to your career by
        becoming the person who is always on top of things and feel good every
        day.
      </Typography>
    </Paper>
  );
};

export default Home;
