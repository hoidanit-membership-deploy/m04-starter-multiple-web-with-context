<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Hỏi Dân IT - Chia sẻ kiến thức lập trình</title>
	<meta
		name="description"
		content="Hỏi Dân IT - Kênh chia sẻ kiến thức lập trình, công nghệ thông tin miễn phí cho cộng đồng"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 font-[Inter,sans-serif]">
	<!-- Floating orbs background -->
	<div class="pointer-events-none fixed inset-0 overflow-hidden">
		<div
			class="absolute -top-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-purple-500/20 blur-3xl"
		></div>
		<div
			class="animation-delay-2000 absolute top-1/3 -right-40 h-96 w-96 animate-pulse rounded-full bg-teal-500/15 blur-3xl"
		></div>
		<div
			class="animation-delay-4000 absolute -bottom-40 left-1/3 h-80 w-80 animate-pulse rounded-full bg-indigo-500/20 blur-3xl"
		></div>
	</div>

	<!-- Navigation -->
	<nav class="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
		<div class="flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-teal-400 font-bold text-white shadow-lg shadow-purple-500/25"
			>
				H
			</div>
			<span class="text-lg font-semibold text-white/90">Hỏi Dân IT</span>
		</div>
		<div class="hidden items-center gap-8 md:flex">
			<a href="#about" class="text-sm text-white/60 transition-colors hover:text-white/90"
				>Giới thiệu</a
			>
			<a href="#courses" class="text-sm text-white/60 transition-colors hover:text-white/90"
				>Khóa học</a
			>
			<a href="#community" class="text-sm text-white/60 transition-colors hover:text-white/90"
				>Cộng đồng</a
			>
			<a
				href="https://www.youtube.com/@hoidanit"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-full bg-white/10 px-5 py-2 text-sm text-white/90 backdrop-blur-sm transition-all hover:bg-white/20"
			>
				YouTube
			</a>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="relative z-10 flex flex-col items-center px-6 pt-20 pb-32 text-center md:pt-32">
		<div
			class="transition-all duration-1000 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
			>
				<span class="h-2 w-2 animate-pulse rounded-full bg-teal-400"></span>
				<span class="text-sm text-white/70">Kênh chia sẻ kiến thức IT</span>
			</div>
		</div>

		<h1
			class="mb-6 max-w-4xl text-5xl leading-tight font-extrabold tracking-tight text-white transition-all delay-200 duration-1000 md:text-7xl {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			Hi ~
			<span
				class="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent"
			>
				Hỏi Dân IT
			</span>
		</h1>

		<p
			class="mb-10 max-w-2xl text-lg leading-relaxed text-white/60 transition-all delay-400 duration-1000 md:text-xl {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			Chia sẻ kiến thức lập trình, công nghệ thông tin miễn phí. Giúp bạn từ zero trở thành hero
			trong thế giới IT.
		</p>

		<div
			class="flex flex-col items-center gap-4 transition-all delay-500 duration-1000 sm:flex-row {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<a
				href="#courses"
				class="rounded-full bg-gradient-to-r from-purple-500 to-teal-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
			>
				Khám phá khóa học
			</a>
			<a
				href="#about"
				class="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white/90 backdrop-blur-sm transition-all hover:bg-white/10"
			>
				Tìm hiểu thêm
			</a>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="relative z-10 px-6 pb-24 md:px-16">
		<div class="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
			{#each [
				{ number: '500K+', label: 'Subscribers' },
				{ number: '1000+', label: 'Video bài giảng' },
				{ number: '50+', label: 'Khóa học' },
				{ number: '100K+', label: 'Học viên' }
			] as stat}
				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
				>
					<div
						class="mb-1 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
					>
						{stat.number}
					</div>
					<div class="text-sm text-white/50">{stat.label}</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="relative z-10 px-6 py-24 md:px-16">
		<div class="mx-auto max-w-5xl">
			<div class="grid items-center gap-16 md:grid-cols-2">
				<div>
					<div
						class="mb-6 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
					>
						Về tác giả
					</div>
					<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
						Đam mê chia sẻ,
						<span class="text-purple-400">truyền cảm hứng</span>
					</h2>
					<p class="mb-4 leading-relaxed text-white/60">
						Hỏi Dân IT là kênh YouTube và nền tảng giáo dục trực tuyến chuyên về lập trình và công
						nghệ thông tin. Với sứ mệnh mang kiến thức IT đến gần hơn với mọi người, đặc biệt là
						các bạn trẻ Việt Nam.
					</p>
					<p class="mb-8 leading-relaxed text-white/60">
						Từ những kiến thức cơ bản như HTML, CSS, JavaScript cho đến các framework hiện đại như
						React, Vue, Angular, Node.js - tất cả đều được trình bày một cách dễ hiểu, thực tế và
						hoàn toàn miễn phí.
					</p>
					<div class="flex flex-wrap gap-3">
						{#each ['React', 'Node.js', 'TypeScript', 'Docker', 'DevOps', 'SQL'] as tech}
							<span
								class="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
								>{tech}</span
							>
						{/each}
					</div>
				</div>

				<div class="flex justify-center">
					<div class="relative">
						<div
							class="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 to-teal-500/30 blur-2xl"
						></div>
						<div
							class="relative flex h-80 w-80 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
						>
							<div class="text-center">
								<div
									class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-teal-400 text-4xl font-bold text-white shadow-lg shadow-purple-500/30"
								>
									H
								</div>
								<h3 class="text-xl font-bold text-white">Hỏi Dân IT</h3>
								<p class="mt-1 text-sm text-white/50">Content Creator & Educator</p>
								<div class="mt-4 flex justify-center gap-3">
									<a
										href="https://www.youtube.com/@hoidanit"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="YouTube"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
									>
										<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
											/>
										</svg>
									</a>
									<a
										href="https://www.facebook.com/askITwithERIC"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Facebook"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
									>
										<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Courses Section -->
	<section id="courses" class="relative z-10 px-6 py-24 md:px-16">
		<div class="mx-auto max-w-5xl">
			<div class="mb-16 text-center">
				<div
					class="mb-6 inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300"
				>
					Khóa học nổi bật
				</div>
				<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
					Lộ trình học tập
					<span class="text-teal-400">toàn diện</span>
				</h2>
				<p class="mx-auto max-w-2xl text-white/50">
					Từ Frontend đến Backend, từ cơ bản đến nâng cao - mọi thứ bạn cần để trở thành lập trình
					viên chuyên nghiệp.
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each [
					{
						title: 'Frontend Master',
						desc: 'React, TypeScript, Next.js, Tailwind CSS và các công nghệ frontend hiện đại.',
						icon: '{}',
						gradient: 'from-purple-500 to-pink-500',
						shadow: 'shadow-purple-500/20'
					},
					{
						title: 'Backend Pro',
						desc: 'Node.js, NestJS, Express, MongoDB, PostgreSQL và kiến trúc hệ thống.',
						icon: '</>',
						gradient: 'from-teal-500 to-cyan-500',
						shadow: 'shadow-teal-500/20'
					},
					{
						title: 'DevOps & Cloud',
						desc: 'Docker, Kubernetes, CI/CD, AWS và quản lý hạ tầng hiện đại.',
						icon: '#!',
						gradient: 'from-indigo-500 to-purple-500',
						shadow: 'shadow-indigo-500/20'
					}
				] as course}
					<div
						class="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
					>
						<div
							class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br {course.gradient} font-mono text-lg font-bold text-white shadow-lg {course.shadow}"
						>
							{course.icon}
						</div>
						<h3 class="mb-3 text-xl font-bold text-white">{course.title}</h3>
						<p class="mb-6 text-sm leading-relaxed text-white/50">{course.desc}</p>
						<span
							class="inline-flex items-center gap-1 text-sm font-medium text-white/40 transition-colors group-hover:text-white/70"
						>
							Xem chi tiết
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Community Section -->
	<section id="community" class="relative z-10 px-6 py-24 md:px-16">
		<div class="mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-block rounded-full bg-pink-500/10 px-4 py-1.5 text-sm font-medium text-pink-300"
			>
				Cộng đồng
			</div>
			<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
				Tham gia cộng đồng
				<span
					class="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
				>
					Hỏi Dân IT
				</span>
			</h2>
			<p class="mx-auto mb-10 max-w-xl text-white/50">
				Kết nối với hàng nghìn lập trình viên khác, cùng nhau học hỏi, chia sẻ kinh nghiệm và phát
				triển sự nghiệp IT.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="https://www.youtube.com/@hoidanit"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-red-500"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
						/>
					</svg>
					Đăng ký YouTube
				</a>
				<a
					href="https://www.facebook.com/askITwithERIC"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-blue-600"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/>
					</svg>
					Facebook Page
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="relative z-10 border-t border-white/10 px-6 py-10 md:px-16">
		<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
			<div class="flex items-center gap-3">
				<div
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-teal-400 text-sm font-bold text-white"
				>
					H
				</div>
				<span class="text-sm text-white/50">Hỏi Dân IT &copy;hoidanit. All rights reserved.</span>
			</div>
			<div class="flex gap-6">
				<a href="https://www.youtube.com/@hoidanit" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-white/70">YouTube</a>
				<a href="https://www.facebook.com/askITwithERIC" target="_blank" rel="noopener noreferrer" class="text-sm text-white/40 hover:text-white/70">Facebook</a>
			</div>
		</div>
	</footer>
</div>
