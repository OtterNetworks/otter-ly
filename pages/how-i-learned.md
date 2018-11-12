---
layout: post
permalink: /how-i-learned/
title: "Otter Networks"
description: "How I learned to stop worrying and love Kubernetes"
image: "https://otter.ly/img/how-i-learned-opengraph.png"
---

By Andrew Holway - Otter Networks Founder - 2nd November 2018

# How I learned to stop worrying and love Kubernetes
## Kubernetes automated and eliminated my job as a Devops Engineer. Here’s why that’s great news for development.

![header](/img/how-i-learned-header.svg)

“Kubernetes?”

I shifted nervously in my seat.

“I wouldn’t recommend it. It’s complicated, and probably not possible without at least three full time engineers.”

My response to Philip Paetz, the newly minted CTO of Brickblock, was tinged with an audible sense of doubt. He had just told me he wanted Kubernetes, and I wasn’t ready to give him the enthusiastic agreement he was looking for.

Thinking back on this conversation now, I have to congratulate Paetz on his vision. He’d already deployed Kubernetes on AWS using the KOPS deployment system and needed someone to take it over. Even though I was very much a naysayer, he saw an opportunity to change my mind. He ultimately chose me to build this new company’s infrastructure.

### Moving past the fear

Once we dove into the project, we found that the KOPS cluster was unreliable and difficult to maintain. That’s when we hired some outside help to come in and take a look. The specialist gazed at the output, watching the processes like he could see the matrix. But it soon became clear that even he didn’t know what to do with any of it.

In a fit of annoyance, I demanded that we try Google Kubernetes Engine (GKE). The Google name attached to the product gave me confidence in its functionality. My hunch proved to be correct: GKE is extremely well engineered and works nearly flawlessly out of the box.

That’s when things went from painfully confusing to crystal clear in one day. It was smooth sailing from then on, and I was the definition of a happy engineer at work. GKE, paired with the powerful CI/CD of Gitlab, helped me deliver what my former CTO Philip described as the best infrastructure he’d ever worked with. It felt like I’d produced quality results at a level I hadn’t done since my days of High Performance Computing.

### The DevOps game changer

Before getting involved with Kubernetes, I didn’t love my work as a “DevOps engineer.” I would usually end up delivering over-engineered solutions to clients, locking them into my services and the cloud provider – neither of which are cheap. It was time for me to step away from the role of glorified System Administrator, and instead take on more interesting projects that bring real value to clients. Kubernetes allowed this to happen.

Since that first delivery at Brickblock, I’ve worked successfully with several other clients on Kubernetes projects. Throughout all of it, I’ve been careful to avoid deployment projects and instead remain on the utilization side of things. Why? Kubernetes is a complicated beast. Maintaining a cluster gets expensive and has limited dividend for most companies. I prefer to work with clients that are able to consume Kubernetes directly from the cloud provider, so that the project doesn’t end up being a distraction from their core business.

![Kubernetes Power](/img/kubernetes-power.svg)
### The value of Kubernetes is significant and long-term

After my positive experience, I certainly have a new way of explaining Kubernetes to anyone who brings it up:
Kubernetes is probably the most efficient way of consuming compute resources for the vast majority of applications. It supports complex microservices architectures with high availability, load balancing and auto-scaling out of the box. This functionality allows me to get complex features, such as Review Apps, up and running with minimal work. It also enables me to build and deploy branches automatically. All of the major cloud providers are committed to supporting Kubernetes, which means a common interface exists for consuming cloud resources from AWS, Azure, Google and Digital Ocean.

### The bottom line

Through all of this, Kubernetes effectively removes the need for a DevOps engineer. Yes, my job has theoretically been made redundant. But instead of accepting that fate, I now understand the real value I can bring to a development team in a way that’s cost-effective for them, and fulfilling for me. What was previously a 4-6 month delivery timeline has been reduced to one week. Solutions get delivered in a short amount of time to development teams, enabling them to consume Kubernetes directly. There are few other things that make my work as a developer more satisfying.

Today, at Otter Networks, we aim to bring all this value to development teams with our one week design sprint. Paired directly with the development team, we re-engineer the CI/CD pipelines using Kubernetes and give the team sufficient knowledge and ownership to consume Kubernetes directly. Without an ongoing reliance on a Devops engineer, teams are fully enabled to write better software. Ultimately, that helps them deliver unparalleled value directly to their customers.
